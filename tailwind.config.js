/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff8e6',
          100: '#ffefc3',
          200: '#ffe29c',
          300: '#ffd175',
          400: '#ffc04d',
          500: '#ffa726',
          600: '#ff9933', // Primary saffron
          700: '#e67300',
          800: '#cc5500',
          900: '#b34700',
        },
        maroon: {
          50: '#f9e6ee',
          100: '#f3c3d8',
          200: '#ec9cbf',
          300: '#e675a7',
          400: '#db4d8c',
          500: '#c43670',
          600: '#ad1f54',
          700: '#990033', // Primary maroon
          800: '#800020',
          900: '#660011',
          950: '#4a0008',
        },
        green: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
          950: '#138808', // Primary green (India flag green)
        },
        gold: {
          50: '#fdf9e7',
          100: '#fbf2c4',
          200: '#f7e68c',
          300: '#f4db54',
          400: '#f0c91c',
          500: '#e6bc15',
          600: '#d4af37', // Primary gold
          700: '#b3840b',
          800: '#937006',
          900: '#7d5c02',
        },
        cream: {
          50: '#fffcf2',
          100: '#fff8e5',
          200: '#fff2cc',
          300: '#ffe9b3',
          400: '#ffdf99',
          500: '#ffd480',
          600: '#ffc966',
          700: '#ffbf4d',
          800: '#ffb533',
          900: '#ffaa1a',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Helvetica', 'Arial', 'sans-serif']
      },
      backgroundImage: {
        'paisley-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23d4af37\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20c0-11.046 8.954-20 20-20z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'mandala-pattern': "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23990033\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'blob': 'blob 7s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        }
      },
      animationDelay: {
        '2000': '2s',
        '4000': '4s',
      }
    },
  },
  plugins: [],
};