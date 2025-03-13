/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sansita': ['Sansita', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInModal: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleInModal: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        fadeOutModal: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        scaleOutModal: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'fadeInModal': 'fadeInModal 0.2s ease forwards',
        'scaleInModal': 'scaleInModal 0.3s ease forwards',
        'fadeOutModal': 'fadeOutModal 0.2s ease forwards',
        'scaleOutModal': 'scaleOutModal 0.2s ease forwards',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"],
  },
}
