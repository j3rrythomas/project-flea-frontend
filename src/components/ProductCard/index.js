import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../api/orders/post";
import { addToCart } from "../../reducers/customerSlice";
import { Error, Success } from "../Alert";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [cartChange, setCartChange] = useState("");
  const dispatch = useDispatch();
  const imgSrc = product.image?.includes("cloudinary")
    ? product.image
    : "https://api.lorem.space/image/furniture";

  return (
    <>
      {cartChange === "true" && <Success text="Added to cart" />}
      {cartChange === "buy" && <Success text="Item bought successfully" />}
      {cartChange === "false" && <Error text="Login to use cart" />}
      {cartChange === "buyerror" && <Error text="Failed to buy item" />}

      <div
        className="card card-compact cursor-pointer col-span-12 md:col-span-6 xl:col-span-4 bg-base-100 shadow-xl max-w-[300px] sm:max-w-[400px] justify-self-center hover:scale-110 transition-all duration-[400ms] ease-in-out w-full"
        onClick={() => navigate(`/products/${product._id}`)}
      >
        <figure className="relative h-full">
          <img src={imgSrc} className="max-h-80 min-h-[250px] z-10 p-8" />
          <img
            src={imgSrc}
            className="h-full absolute top-0 left-0 w-full z-0 blur-md"
          />
        </figure>
        <div className="card-body bg-[#dfd9d1]">
          <h2 className="card-title text-black font-semibold">
            {product.name}
          </h2>
          <p className="text-black">
            {product.description.length > 100
              ? product.description.substring(0, 100) + "..."
              : product.description}
          </p>

          <div className="card-actions justify-end">
            {product.tags.map((tag) => (
              <div
                key={tag + product._id}
                className="badge badge-outline text-black"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="card-actions justify-end items-center mt-4">
            <p className="text-lg font-bold text-black">
              Rs.{product.price.toFixed(2)}
            </p>
            <button
              className="btn bg-[#dfd9d1] hover:bg-primaryColor hover:text-darkGreen text-black"
              onClick={(e) => {
                e.stopPropagation();
                if (isAuthenticated) {
                  dispatch(
                    addToCart({
                      productId: product._id,
                      quantity: 1,
                      price: product.price,
                    })
                  );
                  setCartChange("true");
                } else {
                  setCartChange("false");
                }
                setTimeout(() => setCartChange(""), 1500);
              }}
            >
              Add to Cart
            </button>
            <button
              className="btn hover:bg-green bg-darkGreen text-primaryColor"
              onClick={(e) => {
                e.stopPropagation();
                if (isAuthenticated) {
                  createOrder({
                    items: [
                      { product_id: product._id, quantity: 1, ...product },
                    ],
                    paymentStatus: "PENDING",
                    shipTo: "Kollam",
                    price: product.price,
                  })
                    .then(() => {
                      setCartChange("buy");
                      setTimeout(() => {
                        setCartChange("");
                        navigate("/orders");
                      }, 5000);
                    })
                    .catch(() => {
                      setCartChange("buyerror");
                      setTimeout(() => {
                        setCartChange("");
                      }, 5000);
                    });
                } else {
                  setCartChange("buyerror");
                  setTimeout(() => {
                    setCartChange("");
                  }, 5000);
                }
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
