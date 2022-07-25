import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProducts } from "../../api/products/get";
import {
  Error,
  ProductCard,
  withNavbar,
  withSidebar,
  CustomLoader,
  Footer,
} from "../../components";
import { getApiError } from "../../helpers/getApiError";

const Products = () => {
  const { state: options } = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [loading, isLoading] = useState(false);
  useEffect(() => {
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
      {error && <Error text={error} />}
      {loading ? (
        <CustomLoader />
      ) : products.length === 0 ? (
        <div className="flex">
          <div className="text-5xl text-black font-bold">
            No Products{" "}
            <button
              className="btn bg-primaryColor hover:bg-white hover:text-darkGreen text-black"
              onClick={() => navigate("/products")}
            >
              View All
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-4 mt-12 md:mx-8 grid gap-8 grid-cols-12 w-[calc(100vw-4rem)]">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};
export default withNavbar(withSidebar(Products));
