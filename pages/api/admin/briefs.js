// Admin API endpoint for managing briefs
import { getBriefs, getBriefById, updateBriefStatus, getBriefStats } from '../../../lib/storage';
import { verifyAdminToken } from './auth';

export default async function handler(req, res) {
  // Verify admin authentication
  if (!verifyAdminToken(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    const { id, status } = req.query;

    if (id) {
      // Get single brief
      const brief = await getBriefById(id);
      if (!brief) {
        return res.status(404).json({ error: 'Brief not found' });
      }
      return res.status(200).json(brief);
    }

    // Get all briefs or filtered by status
    const briefs = await getBriefs(status || undefined);
    const stats = await getBriefStats();

    return res.status(200).json({ briefs, stats });
  }

  if (req.method === 'PATCH') {
    const { id, status } = req.body;

    if (!id || !status) {
      return res.status(400).json({ error: 'ID and status required' });
    }

    const validStatuses = ['pending', 'approved', 'rejected', 'in_progress', 'completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const success = await updateBriefStatus(id, status);
    
    if (!success) {
      return res.status(404).json({ error: 'Brief not found' });
    }

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

