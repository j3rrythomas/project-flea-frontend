import apiAxios from "..";

export const register = async (userDetails) => {
  const response = await apiAxios.post("auth/register", userDetails);
  return response;
};
