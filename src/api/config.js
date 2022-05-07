let config;

console.log("Environment =>", process.env.REACT_APP_NODE_ENV);

if (process.env.REACT_APP_NODE_ENV === "production") {
  config = {
    baseURL: "https://miniproject-backend-n.herokuapp.com/",
  };
} else {
  config = {
    baseURL: "http://localhost:4000/",
  };
}

export default config;
