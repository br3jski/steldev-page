module.exports = {
  apps: [
    {
      name: 'steldev-page',
      script: 'npm',
      args: 'start',
      cwd: '/home/bruce/steldev-page',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3001
      },
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ]
}; 