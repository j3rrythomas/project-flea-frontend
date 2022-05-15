export const getApiError = (err, defaultError) => {
  let error = "";
  if (err?.response?.data?.message) {
    error = err.response.data.message;
  } else if (error?.response.data) {
    error = err.response.data;
  } else if (err?.response?.status === 401) {
    error = "Please try logging in again.";
  } else {
    error =
      defaultError || "An unknown error occurred.Please refresh and try again.";
  }
  return error;
};
