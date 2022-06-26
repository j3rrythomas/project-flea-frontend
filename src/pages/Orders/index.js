import { checkAuth, withNavbar, withSidebar, Order } from "../../components";
import { useState, useEffect } from "react";
import { getOrders } from "../../api/orders/get";
import { getApiError } from "../../helpers/getApiError";

const Orders = () => {
  const [category, setCategory] = useState("");
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders()
      .then((response) => setOrders(response.data))
      .catch((error) => getApiError(error));
  }, [category]);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };
  return (
    <>
      <div className=" mt-14  h-auto mx-2">
        <div className=" h-screen">
          <div className="flex flex-row  gap-16 ml-20 pt-5">
            <p className="text-[#2838C1] font-semi-bold text-xl">Orders</p>
            <p className="text-[#2838C1] font-semi-bold text-xl">Buy Again</p>
          </div>

          <div className="flex flex-row  gap-2 ml-20 mt-6 w-1/3">
            <p>21 orders placed in: </p>
            <select
              name="category"
              value={category}
              onChange={(event) => handleCategoryChange(event.target.value)}
            >
              <option id="0">3months</option>
              <option id="1">6months</option>
              <option id="1">1yr</option>
            </select>
          </div>

          {orders.map((_) => {
            <Order />;
          })}
        </div>
      </div>
    </>
  );
};

export default checkAuth(withNavbar(withSidebar(Orders)), "CUSTOMER");
