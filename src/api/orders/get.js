import apiAxios from "..";

export const getOrders = async (options) => {
  const response = await apiAxios.get(`/purchase/viewOrders`, {
    params: options,
  });
  return response;
};

export const getCustomOrders = async () => {
  const response = await apiAxios.get("/custom/viewRequest");
  return response;
};
