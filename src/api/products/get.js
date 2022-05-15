import apiAxios from "..";

export const getAllProducts = async () => {
  const response = await apiAxios.get("/purchase");
  return response;
};

export const getProductById = async (id) => {
  const response = await apiAxios.get(`/purchase/${id}`);
  return response;
};
