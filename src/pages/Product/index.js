import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../api/products/get";
import { LeftArrowIcon } from "../../assets/icons";
import {
  CustomLoader,
  Error,
  Success,
  withNavbar,
  withSidebar,
} from "../../components";
import { getApiError } from "../../helpers/getApiError";
import { addToCart } from "../../reducers/customerSlice";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const [cartChange, setCartChange] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [loading, isLoading] = useState(true);
  const [product, setProduct] = useState();
  useEffect(() => {
    isLoading(true);
    getProductById(id)
      .then((response) => {
        setProduct(response.data);
        isLoading(false);
      })
      .catch((error) => {
        setError(getApiError(error));
        isLoading(false);
        setAlertVisible(true);
        setTimeout(() => {
          setAlertVisible(false);
        }, 5000);
      });
  }, []);
  return (
    <>
      <>{cartChange && <Success text="Added to Cart" />}</>
      {loading ? (
        <CustomLoader />
      ) : error ? (
        alertVisible ? (
          <Error text={error} />
        ) : null
      ) : (
        <div className="min-h-screen flex flex-col items-center">
          <div className="hero min-h-[70%]">
            <div className="hero-content flex-col lg:flex-row w-10/12 justify-between max-w-none">
              <div className="flex-col">
                <button
                  className="text-2xl font-bold text-black mb-4 ml-1 w-10 h-10"
                  onClick={() => navigate(-1)}
                >
                  <LeftArrowIcon />
                </button>
                <div className="h-[600px] max-w-[400px] md:min-w-[400px] md:max-w-[800px] lg:w-[800px] carousel carousel-vertical rounded-box">
                  <div className="carousel-item h-full justify-center relative">
                    <img src={product.image} className="z-10" />
                    <img
                      src={product.image}
                      className="h-full w-full absolute top-0 left-0 blur-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-evenly items-center h-[600px] lg:max-w-[400px]">
                <h1 className="text-3xl md:text-5xl font-bold text-black text-center">
                  {product.name}
                </h1>
                <div className="text-lg font-semibold text-black text-center">
                  <span className="text-xl">Tags:</span>
                  {product.tags.map((tag, index) => (
                    <div
                      key={tag + index}
                      className="badge badge-outline badge-lg mx-1"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <p className="text-lg font-semibold text-black text-center">
                  {product.description ||
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis explicabo aspernatur dolorem beatae pariatur minima, nihil veritatis iure quibusdam vel?"}
                </p>

                <p className="text-lg font-semibold text-black text-center">
                  Category:{" "}
                  <span className="text-xl">
                    {product.category || "Lorem ipsum"}
                  </span>
                </p>

                <h2 className="text-3xl font-bold text-black">
                  Price: ₹{product.price.toFixed(2)}
                </h2>
                <div className="flex flex-col">
                  <button
                    className="btn btn-outline w-[300px] my-1 text-white bg-darkGreen hover:bg-primaryColor hover:text-black"
                    onClick={() => {
                      dispatch(
                        addToCart({ productId: product._id, quantity: 1 })
                      );
                      setCartChange(true);
                      setTimeout(() => setCartChange(false), 1500);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button className="btn btn-outline w-[300px] my-1 text-white bg-darkGreen hover:bg-primaryColor hover:text-black">
                    Buy Now
                  </button>
                  <button className="btn btn-outline w-[300px] my-1 text-white bg-darkGreen hover:bg-primaryColor hover:text-black">
                    Customize Product
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center md:items-start pt-12 w-10/12">
            <div className="rating rating-lg rating-half">
              <input
                disabled
                type="radio"
                name="rating-10"
                className="rating-hidden"
                defaultChecked={product.rating === 0}
              />
              {[...Array(10).keys()].map((_, index) => {
                return (
                  <input
                    disabled
                    key={index}
                    type="radio"
                    name="rating-10"
                    className={`bg-black mask mask-star-2 hover:cursor-default ${
                      index % 2 === 0 ? "mask-half-1 " : "mask-half-2"
                    }`}
                    defaultChecked={
                      Math.round(product.rating * 2) === index + 1
                    }
                  />
                );
              })}
            </div>
            <div>
              <p className="text-2xl font-semibold text-black text-center md:ml-4 mt-4">
                Rating:{product.rating}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withNavbar(withSidebar(Product));
