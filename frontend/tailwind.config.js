/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // blue-600
        accent: '#60a5fa', // blue-400
        background: '#f3f6fb', // light background
        dark: '#232b36', // dark footer/nav
        glass: 'rgba(255,255,255,0.7)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '2rem',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
