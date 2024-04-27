function withOpacity(variableName) {
  return ({ opacityValue } ) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "Arial", "sans-serif"],
        serif: ["Lancelot", "Georgia", "serif"],
        display: ["Fuggles", "cursive"],
        body: ["Lancelot", "Arial", "sans-seri"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#588157",
          "primary-content": "#F6F6F3",
          "secondary": "#3A5A40",
          "accent": "#A3B18A",
          "base-100": "#F6F6F3",
          "neutral": "#111D13",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "sunset", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}