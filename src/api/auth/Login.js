import apiAxios from "..";

export const loginReq = async (credentials) => {
  const response = await apiAxios.post("auth/login", credentials);
  return response;
};
