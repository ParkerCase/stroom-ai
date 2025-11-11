// Simple file-based storage for project briefs
// Uses JSON file storage - can be migrated to database later

import fs from 'fs';
import path from 'path';
import os from 'os';

// Use /tmp on serverless (Vercel) or local data directory
const STORAGE_DIR = process.env.VERCEL 
  ? path.join(os.tmpdir(), 'stroom-briefs')
  : path.join(process.cwd(), 'data');
const BRIEFS_FILE = path.join(STORAGE_DIR, 'project-briefs.json');

interface ProjectBriefData {
  name: string;
  email: string;
  company?: string;
  projectDescription: string;
  timeline: string;
  stage: string;
  budgetRange: string;
  dataAvailability: string;
  engagementModel: string;
  expectedDeliverables: string;
}

interface ClaudeAnalysis {
  complexityScore: number;
  estimatedHours: number;
  hourRange: { min: number; max: number };
  recommendedRate: number;
  recommendedEngagementModel?: string;
  totalEstimate: { min: number; max: number };
  riskFactors: string[];
  questions: string[];
  suitability: string;
  autoApprove: boolean;
  reasoning: string;
}

export interface StoredBrief {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company?: string;
  projectDescription: string;
  timeline: string;
  stage: string;
  budgetRange: string;
  complexity: string;
  dataAvailability: string;
  engagementModel: string;
  expectedDeliverables: string;
  claudeAnalysis: ClaudeAnalysis;
  status: 'pending' | 'approved' | 'rejected' | 'in_progress' | 'completed';
  spamFlagged: boolean;
  ipAddress?: string;
  userAgent?: string;
}

// Ensure storage directory exists
function ensureStorageDir() {
  try {
    if (!fs.existsSync(STORAGE_DIR)) {
      fs.mkdirSync(STORAGE_DIR, { recursive: true });
    }
  } catch (error) {
    console.error('Error creating storage directory:', error);
    // On Vercel, if /tmp doesn't work, we'll handle it gracefully
    throw new Error(`Cannot create storage directory: ${STORAGE_DIR}. Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Read all briefs from storage
function readBriefs(): StoredBrief[] {
  ensureStorageDir();
  
  if (!fs.existsSync(BRIEFS_FILE)) {
    return [];
  }

  try {
    const data = fs.readFileSync(BRIEFS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading briefs file:', error);
    return [];
  }
}

// Write briefs to storage
function writeBriefs(briefs: StoredBrief[]) {
  ensureStorageDir();
  
  try {
    fs.writeFileSync(BRIEFS_FILE, JSON.stringify(briefs, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing briefs file:', error);
    throw error;
  }
}

/**
 * Store a new project brief
 */
export async function storeProjectBrief(
  data: ProjectBriefData,
  analysis: ClaudeAnalysis,
  metadata?: { ipAddress?: string; userAgent?: string }
): Promise<string> {
  const briefs = readBriefs();
  
  const newBrief: StoredBrief = {
    id: `brief_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    name: data.name,
    email: data.email,
    company: data.company,
    projectDescription: data.projectDescription,
    timeline: data.timeline,
    stage: data.stage,
    budgetRange: data.budgetRange,
    complexity: analysis.complexityScore <= 3 ? 'simple' : analysis.complexityScore <= 6 ? 'medium' : 'complex', // Determined by Claude
    dataAvailability: data.dataAvailability,
    engagementModel: data.engagementModel,
    expectedDeliverables: data.expectedDeliverables,
    claudeAnalysis: analysis,
    status: analysis.autoApprove ? 'approved' : 'pending',
    spamFlagged: false,
    ipAddress: metadata?.ipAddress,
    userAgent: metadata?.userAgent,
  };

  briefs.push(newBrief);
  writeBriefs(briefs);

  return newBrief.id;
}

/**
 * Get all briefs, optionally filtered by status
 */
export async function getBriefs(status?: StoredBrief['status']): Promise<StoredBrief[]> {
  const briefs = readBriefs();
  
  if (status) {
    return briefs.filter(b => b.status === status);
  }
  
  // Return most recent first
  return briefs.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

/**
 * Get a single brief by ID
 */
export async function getBriefById(id: string): Promise<StoredBrief | null> {
  const briefs = readBriefs();
  return briefs.find(b => b.id === id) || null;
}

/**
 * Update brief status
 */
export async function updateBriefStatus(
  id: string,
  status: StoredBrief['status']
): Promise<boolean> {
  const briefs = readBriefs();
  const brief = briefs.find(b => b.id === id);
  
  if (!brief) {
    return false;
  }

  brief.status = status;
  writeBriefs(briefs);
  
  return true;
}

/**
 * Mark brief as spam
 */
export async function flagBriefAsSpam(id: string): Promise<boolean> {
  const briefs = readBriefs();
  const brief = briefs.find(b => b.id === id);
  
  if (!brief) {
    return false;
  }

  brief.spamFlagged = true;
  brief.status = 'rejected';
  writeBriefs(briefs);
  
  return true;
}

/**
 * Get statistics
 */
export async function getBriefStats() {
  const briefs = readBriefs();
  
  return {
    total: briefs.length,
    pending: briefs.filter(b => b.status === 'pending').length,
    approved: briefs.filter(b => b.status === 'approved').length,
    rejected: briefs.filter(b => b.status === 'rejected').length,
    inProgress: briefs.filter(b => b.status === 'in_progress').length,
    completed: briefs.filter(b => b.status === 'completed').length,
    spam: briefs.filter(b => b.spamFlagged).length,
  };
}

