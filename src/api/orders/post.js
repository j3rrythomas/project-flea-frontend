import apiAxios from "..";

export const createOrder = async (orderDetails) => {
  const response = await apiAxios.post("/purchase/buy", orderDetails);
  return response;
};

export const createCustomOrder = async (requestDetails) => {
  const response = await apiAxios.post("/custom/request", requestDetails);
  return response;
};

export const updateCustomOrderStatus = async (requestId, status) => {
  const response = await apiAxios.post(
    `/custom/updateStatus/${requestId}`,
    status
  );
  return response;
};
