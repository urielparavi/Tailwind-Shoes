/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        // float: {
        //   '0%, 100%': { transform: 'translateY(0)' },
        //   '50%': { transform: 'translateY(-10px)' },
        // },
        float: {
          '0%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
          '50%': {
            transform: 'translateY(-12px)',
            opacity: 0.85,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        // fadeIn: {
        //   '0%': { opacity: '0' },
        //   '100%': { opacity: '1' },
        // },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        float: 'float 4s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
