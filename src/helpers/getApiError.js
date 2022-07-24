export const getApiError = (err) => {
  let error = "An unknown error occurred.Please refresh and try again.";

  if (err?.response?.data?.message) {
    error = err.response.data.message;
  }
  return error;
};
