/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        highlight: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      screens: {
        narrow: { raw: "(max-aspect-ratio: 3 / 2)" },
        wide: { raw: "(min-aspect-ratio: 3 / 2)" },
        "taller-than-854": { raw: "(min-height: 854px)" },
      },
      backgroundImage: {
        'double-sides': `url('/flowersleft.png'), url('/flowersright.png')`,
        'mobile-size': `url('/flowerstop.png')`,
      },
      backgroundPosition: {
        'double-sides': 'left, right',
        'mobile-size': 'top',
      },
      backgroundSize: {
        'double-sides': '10%, 10%',
      },
    },
  },
  plugins: [],
};
