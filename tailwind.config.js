/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
    './ui/**/*.{js,jsx}',
  ],
  theme: {
    // 🔧 Breakpoints personalizzati — desktop solo da 1280px in su
    screens: {
      sm: '480px',   // smartphone
      md: '768px',   // tablet (portrait + landscape)
      lg: '1280px',  // laptop / desktop piccoli
      xl: '1536px',  // monitor grandi (studio, 30"+)
    },

    extend: {
      // 🎨 Neutrali coerenti (niente bianco/nero puri)
      colors: {
        neutral: {
          50:  '#fafafa',
          100: '#f2f2f2',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },

      // 🔤 Font di base (sostituibile con i tuoi font Next)
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      // 🪟 Ombre centralizzate — sostituiscono style inline
      boxShadow: {
        architect: '0 10px 30px rgba(0,0,0,0.08)',
        soft:      '0 5px 15px rgba(0,0,0,0.05)',
        strong:    '0 15px 40px rgba(0,0,0,0.15)',
        glow:      '0 0 20px rgba(255,255,255,0.35)',
      },

      // ☀️ Text-shadow personalizzati
      textShadow: {
        soft:   '1px 1px 2px rgba(0,0,0,0.25)',
        strong: '2px 2px 6px rgba(0,0,0,0.35)',
        halo:   '0 0 12px rgba(255,255,255,0.45)',
      },

      // 🎬 Keyframes globali “base”
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
      },
    },
  },

  // 🧩 Plugin per text-shadow: `text-shadow-soft` ecc.
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({ textShadow: value }),
        },
        { values: theme('textShadow') }
      );
    },
  ],
};

export default config;
