// Database functions - now using simple file storage
// Re-export storage functions for backward compatibility

export {
  storeProjectBrief,
  getBriefs,
  getBriefById,
  updateBriefStatus,
  flagBriefAsSpam,
  getBriefStats,
  type StoredBrief,
} from './storage';
