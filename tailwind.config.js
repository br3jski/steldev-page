// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          green: {
            400: '#4ade80',
            500: '#22c55e',
          },
        },
        fontFamily: {
          sans: ['VT323', 'Consolas', 'Monaco', 'Lucida Console', 'monospace'],
        },
        keyframes: {
          pulse: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
          typewriter: {
            to: { width: '100%' },
          },
        },
        animation: {
          pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          typewriter: 'typewriter 2s steps(40) forwards',
        },
      },
    },
    plugins: [],
  }