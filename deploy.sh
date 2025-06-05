#!/bin/bash

# Deployment script for steldev-page with PM2
echo "🚀 Starting deployment of steldev-page..."

# Stop existing PM2 process if running
echo "⏹️  Stopping existing PM2 process..."
pm2 stop steldev-page 2>/dev/null || echo "No existing process found"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Start with PM2
echo "🎯 Starting application with PM2..."
pm2 start ecosystem.config.js

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show status
echo "✅ Deployment complete! Application status:"
pm2 status

echo ""
echo "🌐 Your website should be running at:"
echo "   http://localhost:3000"
echo ""
echo "📊 Useful PM2 commands:"
echo "   pm2 status          - Check app status"
echo "   pm2 logs steldev-page - View logs"
echo "   pm2 restart steldev-page - Restart app"
echo "   pm2 stop steldev-page - Stop app"
echo "   pm2 delete steldev-page - Remove app from PM2" 