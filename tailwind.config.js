/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--brand-primary)",
        secondary: "var(--brand-secondary)",
        accent: "var(--brand-accent)",
        textwhite: "var(--brand-textwhite)",
        textblack: "var(--brand-textblack)",
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        headland: ['"Headland One"', "serif"],
        display: "var(--font-display)",
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      fontSize: {
        display: "var(--text-display)",
        h1: "var(--text-h1)",
        h2: "var(--text-h2)",
        h3: "var(--text-h3)",
        h4: "var(--text-h4)",
        h5: "var(--text-h5)",
        body: "var(--text-body)",
        small: "var(--text-small)",
      },
    },
  },
  plugins: [],
}

