import apiAxios from "..";

export const addProduct = async (productDetails) => {
  const response = await apiAxios.post("/products", productDetails);
  return response;
};

export const deleteProduct = async (productId) => {
  const response = await apiAxios.delete(`/products/${productId}`);
  return response;
};
