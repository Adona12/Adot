/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'gradient-primary': "gradient-to-r from-[#FDE3F9] via-white to-[#FDE3F9]",
      }),
      colors: {
        primary: "#AE709F",
        secondary: "#6B779A",
        teritary: "#AE709F",
        quaternary: "#F3EDFC"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
