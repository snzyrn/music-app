/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('./assets/background-image.jpeg')",
      },
    },
  },
  plugins: [],
};
