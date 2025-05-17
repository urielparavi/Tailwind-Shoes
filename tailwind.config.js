/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Enable dark mode using a special 'dark' class on the <html> element
  // Tailwind will recognize this class and apply dark variant utilities (like background, text, borders, etc.)
  // This allows full control over when dark mode is enabled (e.g., via toggle button)
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#0D1117', // Main background (very dark, GitHub-style)
          50: '#161B22', // Secondary background (slightly lighter)
          100: '#1F2733', // Card backgrounds or subtle containers
          200: '#2A323D', // Border color or light containers
          300: '#38404B', // Hover states / slightly brighter background
          400: '#586069', // Muted text / placeholder text
          500: '#8B949E', // Regular body text
          600: '#C9D1D9', // Headings / important text
          700: '#F0F6FC', // Brightest text (almost white) for strong contrast
          accent: '#58A6FF', // Primary accent (links, buttons, highlights)
          danger: '#FF6E6E', // Error state (e.g. delete buttons, alerts)
          success: '#3FB950', // Success state (e.g. confirmations, status)
        },
        sun: {
          DEFAULT: '#FFFFFF', // Main background (white)
          50: '#F9FAFB', // Secondary background (very light gray)
          100: '#F3F4F6', // Card backgrounds or subtle containers
          200: '#E5E7EB', // Border color or light containers
          300: '#D1D5DB', // Hover states / slightly darker background
          400: '#9CA3AF', // Muted text / placeholder text
          500: '#6B7280', // Regular body text
          600: '#4B5563', // Headings / important text
          700: '#1F2937', // Darkest text for strong contrast
          accent: '#3B82F6', // Primary accent (links, buttons, highlights)
          danger: '#EF4444', // Error state (e.g. delete buttons, alerts)
          success: '#22C55E', // Success state (e.g. confirmations, status)
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
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
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        float: 'float 4s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        'scale-in': 'scale-in 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
