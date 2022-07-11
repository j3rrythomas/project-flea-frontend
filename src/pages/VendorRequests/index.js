import { useEffect } from "react";
import { checkAuth, withVendorDashboard } from "../../components";
import { getCustomOrders } from "../../api/orders/get";

const VendorRequests = () => {
  useEffect(() => {
    getCustomOrders()
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);
  return <div></div>;
};

export default checkAuth(
  withVendorDashboard(VendorRequests, "Requests"),
  "VENDOR"
);
