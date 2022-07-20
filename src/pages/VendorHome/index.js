import { CoinIcon, OrderIcon, ProductIcon } from "../../assets/icons";
import { checkAuth, withVendorDashboard } from "../../components";
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

const data = [
  {
    name: "Jan",
    amt: 2400,
  },
  {
    name: "Feb",
    amt: 2210,
  },
  {
    name: "March",
    amt: 2290,
  },
  {
    name: "April",
    amt: 2000,
  },
  {
    name: "May",
    amt: 2181,
  },
  {
    name: "June",
    amt: 2500,
  },
  {
    name: "July",
    amt: 2100,
  },
  {
    name: "Aug",
    amt: 2100,
  },
  {
    name: "Sept",
    amt: 100,
  },
  {
    name: "Oct",
    amt: 700,
  },
  {
    name: "Nov",
    amt: 3100,
  },
  {
    name: "Dec",
    amt: 6100,
  },
];
const VendorHome = () => {
  const [statistics, setStatistics] = useState({});
  useEffect(() => {
    getStatistics()
      .then((response) => setStatistics(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col mt-20">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-4">
        <div className="w-[300px] h-[150px] bg-[#fff] rounded-[3rem] text-black flex flex-col justify-end items-center relative">
          <CoinIcon className="scale-150 absolute top-8 left-10" />
          <div className="pb-8 flex justify-around text-3xl w-full">
            <span className=" font-bold">Sales</span>
            <span>${statistics.saleAggregate}</span>
          </div>
        </div>
        <div className="w-[300px] h-[150px] bg-[#fff] rounded-[3rem] text-black flex flex-col justify-end items-center relative">
          <ProductIcon className="scale-150 absolute top-8 left-10" />
          <div className="pb-8 flex justify-around text-3xl w-full">
            <span className=" font-bold">Products</span>
            <span>{statistics.productCount}</span>
          </div>
        </div>
        <div className="w-[300px] h-[150px] bg-[#fff] rounded-[3rem] text-black flex flex-col justify-end items-center relative">
          <OrderIcon className="scale-150 absolute top-8 left-10" />
          <div className="pb-8 flex justify-around text-3xl w-full">
            <span className=" font-bold">Orders</span>
            <span>{statistics.saleCount}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-around mt-12 h-[600px]">
        <div className="flex flex-col lg:flex-row xl:w-2/3 bg-[#fff] xl:ml-24 p-8 rounded-xl">
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
            <span className="text-3xl text-black font-bold mb-4 ">
              Products Sold
            </span>
            <select
              name="option"
              className="select w-2/3 max-w-xs bg-[#fff] border border-gray text-[#000]"
              placeholder="Select option"
            >
              <option value="month">Monthly</option>
              <option value="week">Weekly</option>
              <option value="dat">Daily</option>
            </select>
          </div>
          <div className="w-full lg:w-2/3">
            <ResponsiveContainer width="100%" height={500}>
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="amt" />
                <Tooltip />
                <Legend />
                <Line type="linear" dataKey="amt" stroke="#175D62" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="xl:w-1/3"></div>
      </div>
    </div>
  );
};

export default checkAuth(
  withVendorDashboard(VendorHome, "Dashboard"),
  "VENDOR"
);
