module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#f5f0ed",
      gray: "#929ca8",
      black: "#333435",
      green: "#6d9236",
      darkGreen: "#014421",
      white: "#eee",
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
