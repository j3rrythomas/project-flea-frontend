import { CoinIcon, OrderIcon, ProductIcon } from "../../assets/icons";
import {
  checkAuth,
  CustomLoader,
  withVendorDashboard,
  SalesCard,
} from "../../components";
import { getStatistics } from "../../api/statistics/get";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { daysofWeek } from "../../constants/daysOfWeek";

const VendorHome = () => {
  const [statistics, setStatistics] = useState({});
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    isLoading(true);
    getStatistics()
      .then((response) => {
        setStatistics(getDailyData(response.data));
        isLoading(false);
      })
      .catch((err) => {
        console.error(err);
        isLoading(false);
      });
  }, []);
  const getDailyData = (data) => {
    const salesByDay = Array(7).fill(0);
    data?.perDay[0]?.totalWeightDay.forEach(
      (dailySale) =>
        (salesByDay[dailySale.dayOfWeek - 1] = dailySale.totalWeightDay)
    );
    const graphData = daysofWeek.map((day, index) => {
      return {
        name: day,
        sales: salesByDay[index],
      };
    });

    return { graphData, ...data };
  };

  return (
    <>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="flex flex-col mt-20">
          <div className="flex flex-col lg:flex-row justify-around items-center gap-4">
            <div className="w-[300px] h-[150px] bg-[#fff] rounded-[3rem] text-black flex flex-col justify-end items-center relative">
              <CoinIcon className="scale-150 absolute top-8 left-10" />
              <div className="pb-8 flex justify-around text-3xl w-full">
                <span className=" font-bold">Sales</span>
                <span>Rs.{statistics.saleAggregate || 0}</span>
              </div>
            </div>
            <div className="w-[300px] h-[150px] bg-[#fff] rounded-[3rem] text-black flex flex-col justify-end items-center relative">
              <ProductIcon className="scale-150 absolute top-8 left-10" />
              <div className="pb-8 flex justify-around text-3xl w-full">
                <span className=" font-bold">Products</span>
                <span>{statistics.productCount || 0}</span>
              </div>
            </div>
            <div className="w-[300px] h-[150px] bg-[#fff] rounded-[3rem] text-black flex flex-col justify-end items-center relative">
              <OrderIcon className="scale-150 absolute top-8 left-10" />
              <div className="pb-8 flex justify-around text-3xl w-full">
                <span className=" font-bold">Orders</span>
                <span>{statistics.saleCount || 0}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-around mt-12 h-[600px]">
            <div className="flex flex-col lg:flex-row xl:w-2/3 bg-[#fff] xl:ml-24 p-8 rounded-xl">
              <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
                <span className="text-3xl text-black font-bold mb-4 ">
                  Products Sold
                </span>
                {/* <select
              name="option"
              className="select w-2/3 max-w-xs bg-[#fff] border border-gray text-[#000]"
              placeholder="Select option"
            >
              <option value="month">Monthly</option>
              <option value="week">Weekly</option>
              <option value="dat">Daily</option>
            </select> */}
              </div>
              <div className="w-full lg:w-2/3">
                <ResponsiveContainer width="100%" height={500}>
                  <LineChart
                    data={statistics.graphData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="sales" />
                    <Tooltip />
                    <Legend />
                    <Line type="linear" dataKey="sales" stroke="#175D62" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="xl:w-1/3 h-[600px] mx-12 rounded-lg overflow-scroll flex flex-col bg-[#fff]">
              <h1 className="text-3xl text-black font-bold pt-8 pl-8">
                Recent Sales
              </h1>
              {statistics.sales?.map((sale) => {
                // console.log(sale);
                return <SalesCard data={sale} key={sale._id} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default checkAuth(
  withVendorDashboard(VendorHome, "Dashboard"),
  "VENDOR"
);
