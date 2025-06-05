/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Ensure server binds to all interfaces for remote access
  experimental: {
    // This helps with remote access
  },

  // Standalone output for better PM2 compatibility
  output: 'standalone',

  // Custom server configuration
  async rewrites() {
    return [];
  },

  // Optimize for production
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 