import "./index.scss";
import { MenuIcon } from "../../assets/icons";
import { Logo, LogoSmall } from "../../assets/images";

const Navbar = () => {
  return (
    <div className="nav-container">
      <button className="menu-button">
        <MenuIcon />
      </button>
      <Logo className="logo" />
      <LogoSmall className="logo-small" />
      <div className="cart-div text-black">
        Cart<div className="order-count">99+</div>
      </div>
    </div>
  );
};

export default Navbar;
