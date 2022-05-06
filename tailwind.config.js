module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#f5f0ed",
      gray: "#929ca8",
      black: "#333435",
      green: "#6d9236",
      white: "#eee",
    },
  },
  plugins: [require("daisyui")],
};
