import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../api/products/get";
import { LeftArrowIcon } from "../../assets/icons";
import { Error, Success, withNavbar, withSidebar } from "../../components";
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
        "Loading"
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
                <div className="h-[600px] max-w-[400px] md:min-w-[400px] md:max-w-[800px] lg:w-[800px] carousel carousel-vertical rounded-box scrollbar-default">
                  <div className="carousel-item h-full justify-center relative">
                    <img
                      src="https://api.lorem.space/image/furniture?hash=8B7BCDC2"
                      className="z-10"
                    />
                    <img
                      src="https://api.lorem.space/image/furniture?hash=8B7BCDC2"
                      className="h-full w-full absolute top-0 left-0 blur-md"
                    />
                  </div>
                  <div className="carousel-item h-full justify-center relative">
                    <img
                      src="https://api.lorem.space/image/fashion?hash=500B67FB"
                      className="z-10"
                    />
                    <img
                      src="https://api.lorem.space/image/fashion?hash=500B67FB"
                      className="h-full w-full absolute top-0 left-0 blur-md"
                    />
                  </div>
                  <div className="carousel-item h-full justify-center relative">
                    <img
                      src="https://api.lorem.space/image/game?hash=A89D0DE6"
                      className="z-10"
                    />
                    <img
                      src="https://api.lorem.space/image/game?hash=A89D0DE6"
                      className="h-full w-full absolute top-0 left-0 blur-md"
                    />
                  </div>
                  <div className="carousel-item h-full justify-center relative">
                    <img
                      src="https://api.lorem.space/image/movie?hash=225E6693"
                      className="z-10"
                    />
                    <img
                      src="https://api.lorem.space/image/movie?hash=225E6693"
                      className="h-full w-full absolute top-0 left-0 blur-md"
                    />
                  </div>
                  <div className="carousel-item h-full justify-center relative">
                    <img
                      src="https://api.lorem.space/image/album?hash=9D9539E7"
                      className="z-10"
                    />
                    <img
                      src="https://api.lorem.space/image/album?hash=9D9539E7"
                      className="h-full w-full absolute top-0 left-0 blur-md"
                    />
                  </div>
                  <div className="carousel-item h-full justify-center relative">
                    <img
                      src="https://api.lorem.space/image/book?hash=BDC01094"
                      className="z-10"
                    />
                    <img
                      src="https://api.lorem.space/image/book?hash=BDC01094"
                      className="h-full w-full absolute top-0 left-0 blur-md"
                    />
                  </div>
                  <div className="carousel-item h-full justify-center relative">
                    <img
                      src="https://api.lorem.space/image/watch?hash=7F5AE56A"
                      className="z-10"
                    />
                    <img
                      src="https://api.lorem.space/image/watch?hash=7F5AE56A"
                      className="h-full w-full absolute top-0 left-0 blur-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-evenly items-center lg:h-[600px] lg:max-w-[400px]">
                <h1 className="text-5xl font-bold text-black text-center">
                  {product.name}
                </h1>

                <div className="rating rating-lg rating-half">
                  <input
                    disabled
                    type="radio"
                    name="rating-10"
                    className="rating-hidden"
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
                <p className="text-lg font-semibold text-black text-center">
                  {product.description ||
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis explicabo aspernatur dolorem beatae pariatur minima, nihil veritatis iure quibusdam vel?"}
                </p>
                <h2 className="text-3xl font-bold text-black">
                  ₹{product.price.toFixed(2)}
                </h2>
                <p className="text-lg font-semibold text-black text-center">
                  <span className="text-xl">Category:</span>{" "}
                  {product.category || "Lorem ipsum"}
                </p>
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
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-10/12 pt-12">
            <div className="text-4xl text-black">Options</div>
            <div className="flex flex-col lg:mr-12">
              <button
                className="btn btn-outline w-[300px] my-1 text-white bg-darkGreen hover:bg-primaryColor hover:text-black"
                onClick={() => {
                  dispatch(addToCart({ productId: product._id, quantity: 1 }));
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
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withSidebar(withNavbar(Product));
