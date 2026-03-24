/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        themeBg: '#FAF5F6',
        themeWhite: '#FFFFFF',
        themeBorder: '#E2D6D8',
        themePrimary: '#E8637B',
        themePrimaryLight: '#FCEEF1',

        greenText: '#1D5C38',
        greenBg: '#D9F0E2',
        greenBorder: '#3E9E68',

        redText: '#8B2530',
        redBg: '#FADDDD',
        redBorder: '#C85D65',

        amberText: '#7A4010',
        amberBg: '#F5E8CF',

        blueText: '#14527A',
        blueBg: '#D6EAF8',

        tealText: '#0C5249',
        tealBg: '#C8EDE8',

        textPrimary: '#1E1517',
        textSecondary: '#5A5254',
        textMuted: '#9A8F91',
      }
    },
  },
  plugins: [],
}
