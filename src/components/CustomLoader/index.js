import Loader from "react-loaders";
import "./index.scss";

const CustomLoader = () => (
  <div className="w-full h-screen flex justify-center items-center ">
    <Loader type="ball-grid-pulse" className="scale-150" />
  </div>
);

export default CustomLoader;
