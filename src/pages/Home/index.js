import { checkAuth, Navbar } from "../../components";
import "./index.scss";

const Home = () => {
  return (
    <div className="body">
      <Navbar />
    </div>
  );
};

export default checkAuth(Home);
