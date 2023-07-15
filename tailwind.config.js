/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 0px 3px 0 rgba(0, 0, 0, 0.1), 0 0px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bannergoc.png')",
        'feature-pattern': "url('/edit2.png')",
        'feature-mobile': "url('/joinfeauture2.png')",
        'cta-pattern': 'url(/bg1.png)',
        'cta-mobile': 'url(/cta-mobile.png)',
        feauture: 'url(/bg-join.png)',
        intro: 'url(/bannerwhyfmc.png)',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          // DEFAULT: '#0f1724',
          // dark: "#04152C",
          // darker: "#010a18",
          // light: '#161B39',
          DEFAULT: '#043873',
          'dark': '#161c49',
          'light': '#5fbbe4',
          'darker': '#111635',
        },
        secondary: {
          DEFAULT: '#faf918',
          // DEFAULT: '#FCDA05',
          dark: '#fadc18',
          light: '#fef88b',
          darker: '#FCD535'
        },
        info: {
          DEFAULT: '#8C8C8C',
          light: '#B6B6B6',
        },
        session: {
          DEFAULT: '#1F1C3B',
          light: '#231E46',
        },
        up: 'var(--up-color)',
        down: 'var(--down-color)',
        buy: '#27AE60',
        sell: '#EB5757',
        yellow: {
          dark: '#F0B90B'
        }
      },
      minHeight: {
        80: '20rem',
      },
      maxWidth: {
        screen: {
          '2xl': '1440px',
        }
      },
      fontSize: {
        xxs: '0.625rem'
      },
      keyframes: {
        'selection-modal': {
          '0%': { transform: 'scale(0.95)' },
          '66%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)'}
        }
      },
      animation: {
        'selectionModal': 'selection-modal 0.3s ease-in-out 1'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      backgroundColor: ['active', 'disabled'],
      borderColor: ['active', 'disabled', 'focus'],
      borderWidth: ['active', 'disabled', 'focus'],
      ringColor: ['active', 'disabled', 'focus'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
