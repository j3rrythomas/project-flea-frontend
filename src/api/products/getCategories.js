import apiAxios from "..";

export const getCategories = async () => {
  const categories = await apiAxios.get("/purchase/categories");
  return categories;
};
