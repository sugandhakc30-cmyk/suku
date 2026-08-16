/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bce3ff',
          300: '#7ecbff',
          400: '#36b9ff',
          DEFAULT: '#0b6ef6',
          600: '#0563d9',
          700: '#0855c2',
          800: '#0d47a1',
          900: '#0d3d8f',
          dark: '#0855c2'
        },
        charcoal: '#22262b',
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'sans-serif']
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        sm: ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        base: ['16px', { lineHeight: '24px', letterSpacing: '0px' }],
        lg: ['18px', { lineHeight: '28px', letterSpacing: '0px' }],
        xl: ['20px', { lineHeight: '28px', letterSpacing: '0px' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.5px' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.5px' }],
        '4xl': ['36px', { lineHeight: '44px', letterSpacing: '-1px' }],
        '5xl': ['48px', { lineHeight: '56px', letterSpacing: '-1px' }]
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'none': 'none',
        'glow': '0 0 20px rgba(11, 110, 246, 0.3)'
      },
      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px'
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px'
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms'
      }
    }
  },
  plugins: []
}