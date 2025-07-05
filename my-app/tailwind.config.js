/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      screens: {
        'tablet': '40rem',
        'laptop': '64rem',
        'desktop': '87rem',
      },
      colors: {
        newGrey: 'oklch(95.1% 0.005 94.76 / 100%)',
        textBrown: 'oklch(34.2% 0.039 33.6 / 80%)',
      }
    },
  },
  plugins: [],
  safelist: [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    // 랩탑 그리드
    'laptop:grid-cols-1',
    'laptop:grid-cols-2',
    'laptop:grid-cols-3',
    'laptop:grid-cols-4',
    'laptop:grid-cols-5',
    'laptop:grid-cols-6',
    // 데스크탑 그리드
    'desktop:grid-cols-1',
    'desktop:grid-cols-2',
    'desktop:grid-cols-3',
    'desktop:grid-cols-4',
    'desktop:grid-cols-5',
    'desktop:grid-cols-6',
  ],
};
