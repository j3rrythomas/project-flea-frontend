import apiAxios from "..";
export const createOrder = async (orderDetails) => {
  const response = await apiAxios.post("/purchase/buy", orderDetails);
  return response;
};
