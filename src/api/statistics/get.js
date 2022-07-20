import apiAxios from "..";

export const getStatistics = async (requestBody) => {
  const response = await apiAxios.get("/statistics", requestBody);
  return response;
};
