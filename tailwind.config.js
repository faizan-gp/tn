// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... your other config
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['Caveat', 'cursive'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-up-drift': { // New animation for illustrations
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(-100vh) translateX(var(--drift)) rotate(var(--rotate))', opacity: 0 },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};