import { Navbar, withSidebar } from "../../components";
import "./index.scss";

const Home = () => {
  return (
    <div className="body">
      <Navbar />
    </div>
  );
};

export default withSidebar(Home);
