import "./index.scss";
import { LogoSmall } from "../../assets/images";
import { useSelector } from "react-redux";

const Navbar = () => {
  const itemCount = useSelector((state) => state.customer.itemCount);
  return (
    <div className="nav-container">
      {/* <Logo className="logo" /> */}
      <LogoSmall className="logo rounded-md" />
      <div className="cart-div text-black">
        Cart
        <div className="order-count">{itemCount > 99 ? "99+" : itemCount}</div>
      </div>
    </div>
  );
};

export default Navbar;
