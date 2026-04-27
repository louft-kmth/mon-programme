/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#FAFAF7', 2: '#F2F0EA', 3: '#E6E3DA' },
        ink: { DEFAULT: '#1C1C1A', 2: '#6B6960', 3: '#9E9A8F' },
        accent: { DEFAULT: '#6C63AC', light: '#EEEDFE', dark: '#3C3489' },
        teal: { DEFAULT: '#1D9E75', light: '#E1F5EE', dark: '#085041' },
        coral: { DEFAULT: '#D85A30', light: '#FAECE7', dark: '#712B13' },
        sky: { DEFAULT: '#378ADD', light: '#E6F1FB', dark: '#0C447C' },
        amber: { DEFAULT: '#BA7517', light: '#FAEEDA', dark: '#633806' },
        rose: { DEFAULT: '#D4537E', light: '#FBEAF0', dark: '#72243E' },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      borderRadius: { card: '14px' },
    },
  },
  plugins: [],
}
