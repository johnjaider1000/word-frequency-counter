import { heroui } from '@heroui/react'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '0px 5px 14px 0px #0000000D',
      },
      fontFamily: {
        sans: [
          'Open Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
        ],
      },
      colors: {
        default: '#172b4d',
        primary: '#5e72e4',
        secondary: '#8392ab',
        info: '#11cdef',
        success: '#2dce89',
        danger: '#f5365c',
        warning: '#fb6340',
        gray: {
          100: '#f6f9fc',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#8898aa',
          700: '#525f7f',
          800: '#32325d',
          900: '#212529',
        },
        base: '#F5F7F8',
      },
      fontSize: {
        h1: ['48px', { lineHeight: '125%', fontWeight: '700' }],
        h2: ['36px', { lineHeight: '130%', fontWeight: '700' }],
        h3: ['30px', { lineHeight: '137%', fontWeight: '700' }],
        h4: ['24px', { lineHeight: '137%', fontWeight: '600' }],
        h5: ['20px', { lineHeight: '137%', fontWeight: '600' }],
        h6: ['16px', { lineHeight: '162.5%', fontWeight: '600' }],
        large: ['18px', { lineHeight: '140%', fontWeight: '400' }],
        body: ['16px', { lineHeight: '150%', fontWeight: '700' }],
        small: ['14px', { lineHeight: '150%', fontWeight: '400' }],
        xs: ['12px', { lineHeight: '150%', fontWeight: '400' }],
        xxs: ['10px', { lineHeight: '150%', fontWeight: '700' }],
      },
      lineHeight: {
        h1: '125%',
        h2: '130%',
        h3: '137%',
        h4: '137%',
        h5: '137%',
        h6: '162.5%',
        large: '140%',
        body: '150%',
        small: '150%',
        xs: '150%',
        xxs: '150%',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(310deg,#5e72e4,#825ee4)',
        'gradient-black': 'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)',
        'gradient-secondary': 'linear-gradient(310deg,#f5365c,#f56036)',
        'gradient-orange': 'linear-gradient(310deg,#fb6340,#fbb140)',
        'gradient-blue': 'linear-gradient(310deg,#1171ef,#11cdef)',
        'gradient-green': 'linear-gradient(310deg,#2dce89,#2dcecc)',
        'gradient-gray-light': 'linear-gradient(310deg,#1171ef,#11cdef)',
        'gradient-gray-dark': 'linear-gradient(310deg,#627594,#8CA1CB)',
      },
    },
  },
  plugins: [
    heroui({
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: { DEFAULT: '#5e72e4', foreground: '#FFFFFF' },
          },
        },
        dark: {
          colors: {
            primary: { DEFAULT: '#5e72e4', foreground: '#FFFFFF' },
          },
        },
      },
    }),
  ],
}