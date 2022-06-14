import { useState } from "react";
import {
  AddProductForm,
  checkAuth,
  withVendorDashboard,
} from "../../components";

const VendorHome = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  return (
    <div className=" grid grid-cols-12 mx-4 my-16">
      {!isFormVisible && (
        <div className="col-span-2">
          <button
            className="btn-md bg-cyan text-lg text-[#fff] rounded-md w-fit cursor-pointer"
            onClick={() => setFormVisible(true)}
          >
            Add product
          </button>
        </div>
      )}
      {isFormVisible && (
        <AddProductForm closeForm={() => setFormVisible(false)} />
      )}
    </div>
  );
};

export default checkAuth(withVendorDashboard(VendorHome, "Home"), "VENDOR");
