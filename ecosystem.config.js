module.exports = {
  apps: [
    {
      name: 'steldev-page',
      script: 'npm',
      args: 'start',
      // cwd: '/home/bruce/steldev-page', <-- devel
      cwd: '/root/steldev-page', // production
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 5555,
        HOSTNAME: '0.0.0.0'
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 5556,
        HOSTNAME: '0.0.0.0'
      },
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ]
}; 