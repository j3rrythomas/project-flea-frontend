import { checkAuth, withNavbar, withSidebar } from "../../components";

const Orders = () => {
  return <>Orders-This change is made by abhijithlal v</>;
};

export default checkAuth(withSidebar(withNavbar(Orders)));
