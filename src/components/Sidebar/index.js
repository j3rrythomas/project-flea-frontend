import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "../../assets/icons";
import { logout } from "../../reducers/authSlice";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-8 md:left-14 top-24"
        >
          <MenuIcon className="scale-125" fill="#333435" />
        </button>
      ) : (
        <button
          className="text-4xl text-white fixed top-24 left-8 md:left-14 bg-black z-40"
          onClick={() => setIsOpen(!isOpen)}
        >
          X
        </button>
      )}
      <div
        className={`fixed top-0 left-0 bg-black min-w-[300px] w-[20vw] h-full z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in duration-300`}
      >
        <div className="flex flex-col justify-between items-center bg-transparent mt-28 mb-33 h-4/5">
          <div className="bg-transparent">
            <div className="bg-transparent">A</div>
            <div className="bg-transparent">B</div>
            <div className="bg-transparent">C</div>
          </div>
          <div className="bg-transparent">
            <button
              className="btn-md  min-w-[300px] text-2xl text-[#fff] bg-transparent hover:scale-125 transition-all"
              onClick={() => {
                setIsOpen(false);
                if (isAuthenticated) {
                  dispatch(logout());
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
    </>
  );
};

export default Sidebar;
