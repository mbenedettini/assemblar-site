const colors = {
  primary: {
    DEFAULT: '#2c7ae0',
    50: '#f0f8fe',
    100: '#ddeefc',
    200: '#c2e2fb',
    300: '#99d0f7',
    400: '#68b7f2',
    500: '#4598ec',
    600: '#2c7ae0',
    700: '#2767ce',
    800: '#2654a7',
    900: '#244984',
    950: '#1a2e51',
  },
  'sandy-brown': {
    DEFAULT: '#f0a35f',
    50: '#fef7ee',
    100: '#fceed8',
    200: '#f8d8b0',
    300: '#f5c04f',
    400: '#f0a35f',
    500: '#e97a26',
    600: '#db611b',
    700: '#b64918',
    800: '#913b1b',
    900: '#753319',
    950: '#3f170b',
  },
  mandy: {
    DEFAULT: '#e65b5b',
    50: '#fdf3f3',
    100: '#fce4e4',
    200: '#fbcdcd',
    300: '#f6abab',
    400: '#ed6a5d',
    500: '#e65b5b',
    600: '#d03232',
    700: '#af2626',
    800: '#912323',
    900: '#792323',
    950: '#410e0e',
  },
  bunker: {
    DEFAULT: '#13171f',
    50: '#f5f7fa',
    100: '#ebeef3',
    200: '#d1d9e6',
    300: '#aab9cf',
    400: '#7b94b5',
    500: '#5b779c',
    600: '#475e82',
    700: '#3a4c6a',
    800: '#334259',
    900: '#2e394c',
    950: '#13171f',
  },
  mantis: {
    DEFAULT: '#60c654',
    50: '#f3fbf2',
    100: '#e3f8e0',
    200: '#c9efc3',
    300: '#9de095',
    400: '#60c654',
    500: '#45ae39',
    600: '#348f2a',
    700: '#2b7124',
    800: '#265a21',
    900: '#204a1d',
    950: '#0d280b',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
    },
    extend: {
      colors,
      backgroundImage: {
        'gradient-title':
          'linear-gradient(90deg, #444444 0%, rgba(68, 68, 68, 0) 100%)',
        'gradient-subtitle':
          'linear-gradient(90deg, #989799 0%, rgba(152, 151, 153, 0) 100%)',
        'gradient-description':
          'linear-gradient(90deg, rgba(152, 151, 153, 0.5) 0%, rgba(152, 151, 153, 0) 100%)',
        'gradient-card':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 113.83%)',
        'gradient-card-medium':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 113.83%)',
        'gradient-card-cover':
          'linear-gradient(180deg, #2A313E 30%, rgba(32, 38, 49, 0) 132.88%)',
      },
      safelist: ['!translate-x-0'],
      keyframes: {
        'home-software': {
          '0%, 16.667%, 100%': { color: colors.primary.DEFAULT },
          '33.333%, 83.333%': { color: '#FFFFFF' },
        },
        'home-engineers': {
          '0%, 100%': { color: '#FFFFFF' },
          '33.333%, 50%': { color: colors['sandy-brown'].DEFAULT },
          '16.667%, 66.667%': { color: '#FFFFFF' },
        },
        'home-for-hire': {
          '0%, 50%, 100%': { color: '#FFFFFF' },
          '66.667%, 83.333%': { color: colors.mandy.DEFAULT },
        },
      },
      animation: {
        'home-software': 'home-software 8s ease-in-out infinite',
        'home-engineers': 'home-engineers 8s ease-in-out infinite',
        'home-for-hire': 'home-for-hire 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
