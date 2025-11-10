// Admin authentication endpoint
import { parse } from 'cookie';

// Simple password check (you can use bcrypt for hashing in production)
// For now, we'll use a simple comparison
// In production, hash your password with: bcrypt.hashSync('your-password', 10)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Password required' });
  }

  // Simple password check (replace with bcrypt in production)
  // For now, store plain password in env and compare
  const correctPassword = process.env.ADMIN_PASSWORD || 'admin';
  
  if (password === correctPassword) {
    // Set session token (simple for now, use JWT in production)
    const token = Buffer.from(`admin_${Date.now()}`).toString('base64');
    
    res.setHeader('Set-Cookie', `admin_token=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict; Secure=${process.env.NODE_ENV === 'production'}`);
    
    return res.status(200).json({ success: true, token });
  }

  return res.status(401).json({ error: 'Invalid password' });
}

// Verify admin token
export function verifyAdminToken(req) {
  // Parse cookies from request headers
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const token = cookies.admin_token;
  
  if (!token) {
    return false;
  }

  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    return decoded.startsWith('admin_');
  } catch {
    return false;
  }
}

