/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navside: "#1f1f1f",
        aliceblue: "#f0f8ff",
        underline: "rgba(255, 255, 255, 0.85);",
        content:"#111",
        headabout:"rgba(185, 207, 255, 0.877)",
        headprofile:"#b7ebdc",
        headskill:"#ffccef",
        headworkings:"#fb968b",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'skill': 'repeat(3, auto)',
      }
    },
    fontFamily: {
      'Prompt': 'Prompt',
    }
  },
  plugins: [],
};
