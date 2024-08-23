import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: '#__next',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#0d0d0d',
        red: '#b11226',
        wine: {
          600: '#6b0f1a',
          700: '#5a0915',
        },
        gray: {
          200: '#e5e5e5',
          300: '#c5c5c5',
        },
      },
    },
  },
  plugins: [],
}

export default config
