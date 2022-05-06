import axios from "axios";
import { store } from "../reducers";

const apiAxios = axios.create({
  baseURL: "https://miniproject-backend-n.herokuapp.com/",
});

const setToken = () => {
  const state = store.getState();
  if (state.auth.authToken !== "" && state.auth.isAuthenticated === true) {
    apiAxios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${state.auth.authToken}`;
  } else {
    delete apiAxios.defaults.headers.common["Authorization"];
    state.auth.isAuthenticated = false;
    state.auth.authToken = "";
  }
};
store.subscribe(setToken);

export default apiAxios;
