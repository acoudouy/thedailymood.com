/** @type {import('tailwindcss').Config} */

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-h': 'bounce-right 1s infinite',
      },
      keyframes: {
        'bounce-right': {
          '0%, 100%': {
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
            transform: 'translateX(-25%)',
          },
          '50%': {
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
            transform: 'translateX(0)',
          },
        },
      },
      screens: {
        '3xl': '1800px',
        '4xl': '2100px',
      },
      fontSize: {
        // default:
        // sm: '0.8rem',
        // base: '1rem',
        // xl: '1.25rem',
        // '2xl': '1.563rem',
        // '3xl': '1.953rem',
        // '4xl': '2.441rem',
        // '5xl': '3.052rem',

        // +10 %:
        sm: '0.88rem',
        base: '1.1rem',
        xl: '1.375rem',
        '2xl': '1.719rem',
        '3xl': '2.148rem',
        '4xl': '2.685rem',
        '5xl': '3.357rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'm-black': '#08090A',
        'm-white': '#D6D9DB',
        'light-gray': '#6A6F74',
        'mid-gray': '#2F3336',
        'dark-gray': '#16181C',
        'dark-gray-2': '#24272e',
        'm-green': '#4D7C0F',
        'm-green-neon': '#39FF14',
        'm-red-neon': '#FF5733',
        'twitter-blue': '#1DA1F2',
        primary: '#008080',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        zoomIn: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        zoomOut: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
        },
        slideUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        slideLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
        },
        slideRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        fade: 'fade 1s infinite',
        zoomIn: 'zoomIn 1s infinite',
        zoomOut: 'zoomOut 1s infinite',
        slideUp: 'slideUp 1s infinite',
        slideDown: 'slideDown 1s infinite',
        slideLeft: 'slideLeft 1s infinite',
        slideRight: 'slideRight 1s infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
    },
  },
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}
