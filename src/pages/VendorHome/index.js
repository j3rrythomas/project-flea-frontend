import { checkAuth, withVendorDashboard } from "../../components";

const VendorHome = () => {
  return (
    <div>
      <p className="text-3xl text-black">Vendor Home</p>
    </div>
  );
};

export default checkAuth(withVendorDashboard(VendorHome, "Home"), "VENDOR");
