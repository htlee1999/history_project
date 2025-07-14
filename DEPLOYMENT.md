# 🚀 GitHub Pages Deployment Guide

Your history documentation website is now configured for GitHub Pages deployment!

## 📋 Quick Deployment Steps

### 1. Create GitHub Repository
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: History documentation website"
git branch -M main
```

### 2. Push to GitHub
```bash
# Create a new repository on GitHub named "history-project"
# Then add it as remote origin
git remote add origin https://github.com/YOUR_USERNAME/history-project.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 4. Access Your Website
Your site will be available at:
```
https://YOUR_USERNAME.github.io/history-project
```

## 🔧 Configuration Details

### Static Export Configuration
- **Output**: Static HTML files in `out/` directory
- **Images**: Unoptimized for static hosting
- **Base Path**: `/history-project` for GitHub Pages
- **Trailing Slash**: Added for better compatibility

### GitHub Actions Workflow
- **Trigger**: Automatic deployment on push to `main` branch
- **Build**: Uses pnpm for fast installation
- **Deploy**: Automatic deployment to `gh-pages` branch

## 📝 Local Development

```bash
# Development server
pnpm run dev

# Test production build
pnpm run export

# Check the out/ directory
ls -la out/
```

## 🎯 Repository Structure
```
history-project/
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── out/                          # Generated static files (ignored)
├── src/                          # Source code
├── pages/                        # Next.js pages
├── package.json                  # Dependencies and scripts
├── next.config.js               # Next.js configuration
└── README.md                    # Project documentation
```

## 🛠️ Troubleshooting

### If deployment fails:
1. Check GitHub Actions logs in the **Actions** tab
2. Ensure pnpm is available in the workflow
3. Verify `next.config.js` basePath matches your repository name

### If styles are missing:
1. Confirm basePath is set correctly in `next.config.js`
2. Check that `.nojekyll` file is created in the `out/` directory

### If images don't load:
1. Verify `images.unoptimized: true` in `next.config.js`
2. Check image paths are relative

## 🎉 Success!

Once deployed, you'll have:
- ✅ Fast, static website hosted on GitHub Pages
- ✅ Automatic deployments on every push
- ✅ Custom domain support (optional)
- ✅ HTTPS enabled by default
- ✅ Global CDN delivery

Your beautiful history documentation website will be live and accessible to the world!