/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#222831',      // Dark Charcoal
        'primary-text': '#DFD0B8',    // Light Beige
        'muted-text': '#948979',      // Muted Taupe (for less important text)
        'accent': '#FFC107',          // Vibrant Gold/Amber
        'secondary-bg': '#393E46'    // Mid-tone Grey-Blue
      },
    },
  },
  plugins: [],
};

