import { checkAuth, withNavbar, withSidebar } from "../../components";

const Orders = () => {
  return <>Orders</>;
};

export default checkAuth(withSidebar(withNavbar(Orders)));
