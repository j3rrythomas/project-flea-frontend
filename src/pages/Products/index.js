import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProducts } from "../../api/products/get";
import { Error, ProductCard, withNavbar, withSidebar } from "../../components";
import { getApiError } from "../../helpers/getApiError";

const Products = () => {
  const { state: options } = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    console.log(options);
    isLoading(true);
    getProducts(options)
      .then((response) => {
        setProducts(response.data);
        isLoading(false);
      })
      .catch((err) => {
        setError(getApiError(err));
        isLoading(false);
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  }, [options]);

  return (
    <>
      <div className="flex">
        <div className="w-1/5 h-full hidden md:display lg:block"></div>
        {error && <Error text={error} />}
        {loading ? (
          <div className="text-5xl text-black font-bold">Loading</div>
        ) : products.length === 0 ? (
          <div className="text-5xl text-black font-bold">
            No Products{" "}
            <button
              className="btn bg-primaryColor hover:bg-white hover:text-darkGreen text-black"
              onClick={() => navigate("/products")}
            >
              View All
            </button>
          </div>
        ) : (
          <div className="mb-4 mt-12 mx-8 grid gap-8 grid-cols-12 w-full">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default withSidebar(withNavbar(Products));
