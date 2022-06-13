import { checkAuth, withNavbar, withSidebar } from "../../components";

const Checkout = () => {
  return <>Checkout</>;
};

export default checkAuth(withSidebar(withNavbar(Checkout)), "CUSTOMER");
