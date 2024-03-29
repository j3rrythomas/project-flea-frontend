import { withNavbar, withSidebar, HomeProducts } from "../../components";
import "./index.scss";

const Home = () => {
  return <HomeProducts />;
};

export default withNavbar(withSidebar(Home));
