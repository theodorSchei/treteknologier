/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'leftColor': '#ffafbd',
        'rightColor': '#ffc3a0',
        'leftBlendColor': '#E09ADD',
        'rightBlendColor': '#ED758C',
      },
    },
    
  },
  plugins: [],
}
