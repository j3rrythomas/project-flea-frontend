import apiAxios from "..";

export const createOrder = async (orderDetails) => {
  const response = await apiAxios.post("/purchase/buy", orderDetails);
  return response;
};

export const createCustomOrder = async (requestDetails) => {
  const response = await apiAxios.post("/custom/request", requestDetails);
  return response;
};
