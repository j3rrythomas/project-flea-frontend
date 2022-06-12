import VendorDashboard from "./VendorDashboard";

const withVendorDashboard = (Component, page) => {
  const DashboardRoute = () => {
    return (
      <VendorDashboard page={page}>
        <Component />
      </VendorDashboard>
    );
  };
  return DashboardRoute;
};

export default withVendorDashboard;
