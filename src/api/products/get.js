import apiAxios from "..";

export const getAllProducts = async () => {
  const response = await apiAxios.get("/purchase");
  return response;
};
