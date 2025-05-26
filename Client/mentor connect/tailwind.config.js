export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0F9',
          100: '#CCE0F3',
          200: '#99C2E6',
          300: '#66A3DA',
          400: '#3385CD',
          500: '#0A2540',
          600: '#081D33',
          700: '#061626',
          800: '#040E19',
          900: '#02070C',
        },
        secondary: {
          50: '#F3F0FF',
          100: '#E9E3FF',
          200: '#D4C8FF',
          300: '#BFADFF',
          400: '#A992FF',
          500: '#7B61FF',
          600: '#624ECC',
          700: '#4A3A99',
          800: '#312766',
          900: '#191333',
        },
        accent: {
          50: '#E6FCFF',
          100: '#CCF9FF',
          200: '#99F3FF',
          300: '#66EDFF',
          400: '#33E7FF',
          500: '#00D4FF',
          600: '#00A9CC',
          700: '#007F99',
          800: '#005466',
          900: '#002A33',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.33' }],
        '3xl': ['1.875rem', { lineHeight: '1.33' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '5xl': ['3rem', { lineHeight: '1.25' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}