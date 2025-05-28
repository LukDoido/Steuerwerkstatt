/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'heading': ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        blue: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dbe8',
          300: '#a9bdd3',
          400: '#7a97b9',
          500: '#5676a1',
          600: '#405c85',
          700: '#334a6c',
          800: '#2c3f5c',
          900: '#1a2435',
        },
        beige: {
          50: '#fdfbf7',
          100: '#f7f3e9',
          200: '#efe5d1',
          300: '#e2d0b0',
          400: '#d4ba8e',
          500: '#c6a46c',
          600: '#b08a54',
          700: '#8f6f44',
          800: '#735939',
          900: '#5c472e',
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.blue.900'),
              fontFamily: theme('fontFamily.heading').join(', '),
            },
            h2: {
              color: theme('colors.blue.900'),
              fontFamily: theme('fontFamily.heading').join(', '),
            },
            h3: {
              color: theme('colors.blue.900'),
              fontFamily: theme('fontFamily.heading').join(', '),
            },
            strong: {
              color: theme('colors.blue.900'),
            },
            a: {
              color: theme('colors.blue.700'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};