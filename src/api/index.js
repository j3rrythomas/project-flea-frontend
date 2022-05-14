import axios from "axios";
import { store } from "../reducers";
import config from "./config";

const apiAxios = axios.create({
  baseURL: config.baseURL,
});

const setToken = () => {
  const state = store.getState();
  if (state.auth.authToken !== "" && state.auth.isAuthenticated === true) {
    apiAxios.defaults.headers.common[
      "token"
    ] = `Bearer ${state.auth.authToken}`;
  } else {
    delete apiAxios.defaults.headers.common["token"];
    state.auth.isAuthenticated = false;
    state.auth.authToken = "";
  }
};
store.subscribe(setToken);

export default apiAxios;
