import "./index.scss";
import { MenuIcon } from "../../assets/icons";
import { Logo, LogoSmall } from "../../assets/images";

const Navbar = () => {
  return (
    <div className="nav-container">
      <button class="menu-button">
        <MenuIcon />
      </button>
      <Logo className="logo" />
      <LogoSmall className="logo-small" />
      <div className="cart-div">
        Cart<div className="order-count">99+</div>
      </div>
    </div>
  );
};

export default Navbar;
