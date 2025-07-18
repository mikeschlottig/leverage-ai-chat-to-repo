# Deployment Guide

## Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/mikeschlottig/leverage-ai-chat-to-repo.git
cd leverage-ai-chat-to-repo
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
# Backend runs on http://localhost:3001
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

### 4. GitHub Configuration
1. Create GitHub Personal Access Token
2. Grant permissions: `repo`, `workflow`, `write:packages`
3. Configure in frontend interface

## Production Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Set environment variables
npm start
```

## Environment Variables

```bash
# Backend
PORT=3001
NODE_ENV=production
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret

# Frontend
VITE_API_URL=https://your-backend-url.com
VITE_GITHUB_CLIENT_ID=your_client_id
```

## System Requirements

- Node.js 18+
- npm 8+
- GitHub Personal Access Token
- Modern web browser

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Change port in configuration
   - Kill existing processes

2. **GitHub API rate limiting**
   - Verify token permissions
   - Check rate limit headers

3. **CORS issues**
   - Update backend CORS configuration
   - Verify frontend URL in allowed origins

## Performance Optimization

- Enable Redis for session storage
- Configure CDN for static assets
- Implement request caching
- Add monitoring and logging

---

**🚀 From conversation to repository in 30 seconds!**