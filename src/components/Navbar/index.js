import "./index.scss";
import { Logo, LogoSmall } from "../../assets/images";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="invisible"></div>
      <Logo className="logo" />
      <LogoSmall className="logo-small rounded-md" />
      <div className="cart-div text-black">
        Cart<div className="order-count">99+</div>
      </div>
    </div>
  );
};

export default Navbar;
