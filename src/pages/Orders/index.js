import {
  checkAuth,
  withNavbar,
  withSidebar,
  Order,
  CustomLoader,
  Footer,
} from "../../components";
import { useState, useEffect } from "react";
import { getOrders } from "../../api/orders/get";
import { getApiError } from "../../helpers/getApiError";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [loading, isLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    isLoading(true);
    getOrders()
      .then((response) => {
        setOrders(response.data);
        isLoading(false);
      })
      .catch((error) => {
        getApiError(error);
        isLoading(false);
      });
  }, [category]);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };
  return (
    <>
      {!loading ? (
        <div className=" mt-14  h-auto mx-2">
          <div className="min-h-screen">
            {orders.length > 0 ? (
              <>
                <div className="flex flex-row  gap-16 ml-20 pt-5">
                  <p className="text-black font-bold text-3xl">Orders</p>
                </div>

                <div className="flex flex-row text-black gap-2 ml-20 mt-6 w-1/3">
                  <p>21 orders placed in: </p>
                  <select
                    name="category"
                    value={category}
                    onChange={(event) =>
                      handleCategoryChange(event.target.value)
                    }
                  >
                    <option id="0">3months</option>
                    <option id="1">6months</option>
                    <option id="1">1yr</option>
                  </select>
                </div>

                {orders.map((order) => {
                  return <Order key={order._id} data={order} />;
                })}
              </>
            ) : (
              <div className="flex flex-col items-center justify-between h-40">
                <p className="text-black font-bold text-4xl">
                  You have not placed any orders yet.
                </p>
                <button
                  className="btn btn-outline w-[300px] my-1 text-white bg-darkGreen hover:bg-primaryColor hover:text-black"
                  onClick={() => navigate("/products")}
                >
                  Browse All Products
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <CustomLoader />
      )}
      <Footer />
    </>
  );
};

export default checkAuth(withNavbar(withSidebar(Orders)), "CUSTOMER");
