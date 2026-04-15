/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Estructura semántica global
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',

        // Superficies
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },

        input: {
          DEFAULT: 'var(--input)',
          foreground: 'var(--input-foreground)',
        },

        // Colores de marca
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },

        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },

        // Color personalizado para el header
        header: {
          DEFAULT: 'var(--header)',
          foreground: 'var(--header-foreground)',
        },

        // Jerarquía de información
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },

        // Sistema de estados (Banderas)
        critical: {
          DEFAULT: 'var(--critical)',
          foreground: 'var(--critical-foreground)',
        },
        alert: {
          DEFAULT: 'var(--alert)',
          foreground: 'var(--alert-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
        },

        // Paleta base (Ocean Blue)
        ocean: {
          50: 'var(--ocean-50)',
          100: 'var(--ocean-100)',
          200: 'var(--ocean-200)',
          300: 'var(--ocean-300)',
          400: 'var(--ocean-400)',
          500: 'var(--ocean-500)',
          600: 'var(--ocean-600)',
          700: 'var(--ocean-700)',
          800: 'var(--ocean-800)',
          900: 'var(--ocean-900)',
          950: 'var(--ocean-950)',
        },
      },
    },
  },
  plugins: [],
};
