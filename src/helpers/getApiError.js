export const getApiError = (err) => {
  let error = "An unknown error occurred.Please refresh and try again.";
  // let error = "";
  if (err?.response?.data?.message) {
    error = err.response.data.message;
  } else if (err?.response.data && typeof err.response.data === "string") {
    error = err.response.data;
  } else if (err?.response?.status === 401) {
    error = "Please try logging in again.";
  }
  return error;
};
