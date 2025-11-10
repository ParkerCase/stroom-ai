# Admin Dashboard Setup

## Quick Start

1. **Set Admin Password** in `.env.local`:
   ```
   ADMIN_PASSWORD=your-secure-password-here
   ```

2. **Access Admin Dashboard**:
   - Go to: `http://localhost:3002/admin/briefs`
   - Enter your password
   - View and manage all project brief submissions

## Features

✅ **Password Protected** - Simple password authentication
✅ **SEO Safe** - Admin pages have `noindex, nofollow` meta tags
✅ **File-Based Storage** - No database needed, stores in `/data/project-briefs.json`
✅ **Minimalist Design** - Matches your brand aesthetic
✅ **Full Details View** - Click any brief to see complete information
✅ **Status Management** - Approve, reject, or update status
✅ **Email Integration** - Quick email links to contact clients
✅ **Search & Filter** - Find briefs by status, name, email, or content

## Storage Location

Submissions are stored in: `/data/project-briefs.json`

This file is automatically created and is gitignored (won't be committed).

## Security Notes

- Admin pages are password protected
- Admin routes are not indexed by search engines
- Consider adding JWT tokens for production (currently uses simple cookie-based auth)
- For production, hash passwords with bcrypt

## Environment Variables

Add to `.env.local`:
```
ADMIN_PASSWORD=your-password-here
```

## API Endpoints

- `POST /api/admin/auth` - Login
- `GET /api/admin/briefs` - Get all briefs (requires auth)
- `GET /api/admin/briefs?id=xxx` - Get single brief (requires auth)
- `PATCH /api/admin/briefs` - Update brief status (requires auth)

