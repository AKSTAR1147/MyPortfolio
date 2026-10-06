/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#08080b',
          card: '#13131a',
          cardHover: '#1a1a24',
          border: '#242432',
          red: '#ef4444',
          redHover: '#dc2626',
          gold: '#f59e0b',
          goldLight: '#fbbf24',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
    },
  },
  plugins: [],
}
