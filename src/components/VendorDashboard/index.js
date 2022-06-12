import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../reducers/authSlice";
import PropTypes from "prop-types";

const VendorDashboard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <div className="hidden md:flex w-[320px] bg-cyan h-full">
        <div className="flex flex-col justify-start items-center bg-transparent mt-10 h-4/6 w-full">
          <div className="bg-transparent text-[#fff] text-2xl w-full py-4 text-left pl-16 hover:bg-white hover:text-black">
            Dashboard
          </div>
          <div className="bg-transparent text-[#fff] text-2xl w-full py-4 text-left pl-16 hover:bg-white hover:text-black">
            Customers
          </div>
          <div className="bg-transparent text-[#fff] text-2xl w-full py-4 text-left pl-16 hover:bg-white hover:text-black">
            Transactions
          </div>
          <div className="bg-transparent text-[#fff] text-2xl w-full py-4 text-left pl-16 hover:bg-white hover:text-black">
            Settings
          </div>
          <div
            className="bg-transparent text-[#fff] text-2xl w-full py-4 text-left pl-16 hover:bg-white hover:text-black"
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          >
            Logout
          </div>
        </div>
      </div>
      <div className="w-full md:w-[calc(100%-320px)] h-full">
        {props.children}
      </div>
    </div>
  );
};

VendorDashboard.propTypes = {
  children: PropTypes.node,
  page: PropTypes.string,
};

export default VendorDashboard;
