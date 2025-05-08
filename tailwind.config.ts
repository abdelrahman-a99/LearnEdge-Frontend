import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Education theme colors
        // edu: {
        //   primary: '#0369a1',     // Deep blue
        //   secondary: '#0284c7',   // Medium blue
        //   accent: '#06b6d4',      // Teal
        //   highlight: '#fb923c',   // Orange accent
        //   success: '#22c55e',     // Green
        //   error: '#ef4444',       // Red
        //   warning: '#f59e0b',     // Amber
        //   info: '#3b82f6',        // Blue
        //   light: '#f0f9ff',       // Very light blue
        //   dark: '#0f172a',        // Very dark blue
        // }

        // flattened custom colors
        // 'edu-primary': '#0369a1',      // Deep blue (main brand color)
        // 'edu-secondary': '#0284c7',    // Medium blue (secondary accent)
        // 'edu-accent': '#06b6d4',       // Teal (used for highlights or buttons)
        // 'edu-highlight': '#fb923c',    // Orange accent (for emphasis or highlights)
        // 'edu-success': '#22c55e',      // Green (used for success messages or confirmations)
        // 'edu-error': '#ef4444',        // Red (used for error states or alerts)
        // 'edu-warning': '#f59e0b',      // Amber (used for warning messages)
        // 'edu-info': '#3b82f6',         // Blue (used for informational messages)
        // 'edu-light': '#f0f9ff',        // Very light blue (backgrounds or light sections)
        // 'edu-dark': '#0f172a',         // Very dark blue (dark mode background or text)

        // CSS variable-driven colors
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',

        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    animate,
    // plugin(function ({ addUtilities, theme }) {
    //   const eduColors = theme('colors.edu');

    //   const newUtilities = Object.fromEntries(
    //     Object.entries(eduColors).map(([name, value]) => {
    //       return [
    //         `.bg-edu-${name}`,
    //         {
    //           backgroundColor: value as string,
    //         },
    //       ];
    //     })
    //   );

    //   addUtilities(newUtilities, ['responsive', 'hover']);
    // }),
  ],
} satisfies Config;