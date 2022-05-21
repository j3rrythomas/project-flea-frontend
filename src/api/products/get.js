import apiAxios from "..";

export const getProducts = async (options) => {
  const response = await apiAxios.get(`/purchase`, { params: options });
  return response;
};

export const getProductById = async (id) => {
  const response = await apiAxios.get(`/purchase/${id}`);
  return response;
};
