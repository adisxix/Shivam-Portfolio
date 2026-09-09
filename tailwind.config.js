/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#000000',
          900: '#0a0a0a',
          800: '#141414',
          700: '#222222',
        },
        cyan: {
          500: '#ffffff',
          400: '#e5e5e5',
          300: '#d4d4d4',
          200: '#a3a3a3',
          100: '#737373',
          50: '#ffffff',
        },
        sky: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
        },
        mono: {
          void: '#000000',
          darkest: '#050505',
          darker: '#0a0a0a',
          card: '#111111',
          border: 'rgba(255, 255, 255, 0.12)',
          muted: '#888888',
          subtle: '#b0b0b0',
          light: '#e0e0e0',
          pure: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typewriter 3.5s steps(40) 1s forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' },
          '50%': { boxShadow: '0 0 45px rgba(255, 255, 255, 0.25)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#ffffff' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(255, 255, 255, 0.15)',
        'glow': '0 0 25px rgba(255, 255, 255, 0.22)',
        'glow-lg': '0 0 45px rgba(255, 255, 255, 0.3)',
        'glow-xl': '0 0 70px rgba(255, 255, 255, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
}
