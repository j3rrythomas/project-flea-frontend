import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../reducers/authSlice";
import PropTypes from "prop-types";
import { emptyCart } from "../../reducers/customerSlice";

const dashboardRoutes = {
  Dashboard: "/vendor-home",
  Products: "/vendor-products",
  Requests: "/vendor-requests",
};

const VendorDashboard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <div className="hidden md:flex w-[320px] bg-cyan h-full flex-col">
        <div className="flex flex-col justify-start items-center bg-transparent mt-10 h-5/6 w-full">
          <div className="h-2/3 w-full">
            {Object.keys(dashboardRoutes).map((route) => {
              return (
                <div
                  key={route}
                  className={`text-2xl w-full py-4 text-left pl-16 ${
                    props.page === route
                      ? "hover:bg-gray  bg-white text-black"
                      : "bg-transparent text-[#fff]  hover:bg-white hover:text-black"
                  }`}
                  onClick={() => {
                    navigate(dashboardRoutes[route]);
                  }}
                >
                  {route}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-transparent h-1/6">
          <div
            className="bg-transparent text-[#fff] text-2xl w-full py-4 text-center px-8 hover:bg-white hover:text-black"
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Homepage
          </div>
          <div
            className="bg-transparent text-[#fff] text-2xl w-full py-4 text-center px-8 hover:bg-white hover:text-black"
            onClick={() => {
              dispatch(logout());
              dispatch(emptyCart());
              navigate("/login");
            }}
          >
            Logout
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full md:w-[calc(100%-320px)] min-h-screen overflow-scroll">
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
