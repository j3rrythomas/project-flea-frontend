import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MenuIcon, SearchIcon } from "../../assets/icons";
import { logout } from "../../reducers/authSlice";
import { emptyCart } from "../../reducers/customerSlice";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  return (
    <>
      <div
        className={`fixed top-0 left-0 bg-black min-w-[300px] w-[20vw] h-full z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in duration-300`}
      >
        <div className="flex flex-col justify-between items-center bg-transparent mt-28 mb-33 h-4/5">
          <div className="bg-transparent">
            <div className="bg-transparent text-[#fff] text-2xl w-full py-4 text-center px-8 hover:bg-white hover:text-black">
              Profile
            </div>
            <div
              className="bg-transparent text-[#fff] text-2xl w-full py-4 text-center px-8 hover:bg-white hover:text-black"
              onClick={() => navigate("/orders")}
            >
              Orders
            </div>
            <div className="bg-transparent text-[#fff] text-2xl w-full py-4 text-center px-8 hover:bg-white hover:text-black">
              Settings
            </div>
          </div>

          <div className="bg-transparent ml-8">
            {isAuthenticated && role === "VENDOR" && (
              <button
                className="btn-md  min-w-[300px] text-2xl text-[#fff] bg-transparent hover:scale-125 transition-all"
                onClick={() => {
                  navigate("/vendor-home");
                }}
              >
                Vendor Dashboard
              </button>
            )}
            <button
              className="btn-md  min-w-[300px] text-2xl text-[#fff] bg-transparent hover:scale-125 transition-all"
              onClick={() => {
                setIsOpen(false);
                if (isAuthenticated) {
                  dispatch(logout());
                  dispatch(emptyCart());
                } else {
                  navigate("/login");
                }
              }}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#D2B82C] h-20 flex items-center justify-between relative">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute left-8 md:left-14"
          >
            <MenuIcon className="scale-125" fill="#333435" />
          </button>
        ) : (
          <button
            className="text-4xl text-white fixed left-8 md:left-14 z-40 top-16"
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>
        )}
        <div className="w-full flex justify-center">
          <div className="w-72 md:w-96 relative">
            <input
              type="text"
              placeholder="Search by products,brands and more"
              className="input input-bordered rounded-3xl bg-white w-full"
            />
            <SearchIcon className="w-5 h-5 absolute right-5 top-[13px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
