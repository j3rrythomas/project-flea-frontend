import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../api/orders/post";
import { getProductById } from "../../api/products/get";
import {
  checkAuth,
  CheckoutItem,
  CustomLoader,
  Error,
  Success,
  withNavbar,
  withSidebar,
} from "../../components";
import { getApiError } from "../../helpers/getApiError";
import { emptyCart } from "../../reducers/customerSlice";

const Checkout = () => {
  const { cart, price, itemCount } = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, isLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [notifications, setNotifications] = useState("");
  const [apiError, setApiError] = useState();

  useEffect(() => {
    isLoading(true);
    const productRequests = Object.keys(cart).map(async (cartItem) => {
      const response = await getProductById(cartItem);
      const product = response.data;
      product.quantity = cart[cartItem];
      return product;
    });
    Promise.all(productRequests).then((data) => {
      setProducts(data);
      isLoading(false);
    });
  }, []);
  const removeItem = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };
  const placeOrder = () => {
    const items = products.map(
      ({ _id, name, image, rating, description, price, vendor_id }) => {
        return {
          product_id: _id,
          quantity: cart[_id],
          name,
          image,
          rating,
          description,
          price,
          vendor_id,
        };
      }
    );
    createOrder({ items, paymentStatus: "PENDING", shipTo: "Kollam", price })
      .then(() => {
        dispatch(emptyCart());
        setNotifications("success");
        setTimeout(() => {
          setNotifications("");
          navigate("/orders");
        }, 5000);
      })
      .catch((error) => {
        setApiError(getApiError(error));
        setNotifications("error");
        setTimeout(() => {
          setNotifications("");
          navigate("/orders");
        }, 5000);
      });
  };
  return (
    <>
      {notifications === "error" && <Error text={apiError} />}
      {notifications === "success" && (
        <Success text="Order placed successfully" />
      )}

      {loading ? (
        <CustomLoader />
      ) : itemCount === 0 ? (
        <div className="flex flex-col items-center justify-between h-40">
          <p className="text-black font-bold text-4xl">
            You have not added any items to cart.
          </p>
          <button
            className="btn btn-outline w-[300px] my-1 text-white bg-darkGreen hover:bg-primaryColor hover:text-black"
            onClick={() => navigate("/products")}
          >
            Browse All Products
          </button>
        </div>
      ) : (
        <div className="lg:block container p-8 mx-auto mt-12">
          <div className="my-2">
            <h1 className="text-xl ml-1 text-black font-bold tracking-wider">
              My Cart
            </h1>
          </div>
          <div className="flex flex-col-reverse lg:w-full lg:flex-row">
            <div className="w-full lg:w-2/3">
              {products.map((product) => {
                return (
                  <CheckoutItem
                    itemInfo={product}
                    key={product._id}
                    removeItem={removeItem}
                  />
                );
              })}
            </div>
            <div className="w-full lg:w-1/3">
              <div className="mt-4 lg:ml-10 bg-[#fff]">
                <div className="shadow px-4 pt-8 pb-4 rounded-lg">
                  <h3 className="text-xl font-bold text-[#945959]">
                    PRICE DETAILS
                  </h3>
                  <div className="flex justify-between px-4">
                    <span className="font-bold text-black">
                      Price({itemCount + "item"}
                      {itemCount > 1 && "s"})
                    </span>
                    <span className="font-bold text-black">
                      ${price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between px-4">
                    <span className="font-bold text-black">Discount</span>
                    <span className="font-bold text-[#58C317]">
                      - ${(0.05 * price).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between px-4">
                    <span className="font-bold text-black">
                      Delivery charges
                    </span>
                    <span className="font-bold text-[#58C317]">Free</span>
                  </div>
                  <div className=" flex items-center justify-between px-4 py-2 mt-3 border-t-2 border-dashed">
                    <span className="text-xl text-black font-bold">
                      Total amount
                    </span>
                    <span className="text-2xl text-black font-bold">
                      ${(0.95 * price).toFixed(2)}
                    </span>
                  </div>
                  <span className="text-xl ml-5 width-1/2 font-bold justify-end text-[#045E1D]">
                    You will save ${(0.05 * price).toFixed(2)} on this order
                  </span>
                  <div className="mt-4 h-15 w-full flex justify-center ">
                    <button
                      className="w-1/2 py-3 text-center text-white text-xl font-bold bg-[#FD7009] rounded-md shadow  cursor-pointer"
                      onClick={placeOrder}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default checkAuth(withNavbar(withSidebar(Checkout)), "CUSTOMER");
