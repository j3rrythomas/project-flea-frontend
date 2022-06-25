import apiAxios from "..";

export const addProduct = async (productDetails) => {
  const response = await apiAxios.post("/products", productDetails);
  return response;
};
