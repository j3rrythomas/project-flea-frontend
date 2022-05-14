import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products/get";
import { Alert, ProductCard, withNavbar, withSidebar } from "../../components";
import { getApiError } from "../../helpers/getApiError";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    getAllProducts()
      .then((response) => setProducts(response.data))
      .catch((err) => {
        setError(getApiError(err));
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  }, []);

  return (
    <>
      {error && <Alert type="error" alert={error} />}
      <div className="flex">
        <div className="w-1/5 h-full hidden md:display lg:block"></div>
        <div className="mb-4 mt-12 mx-8 grid gap-8 grid-cols-12 w-full">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default withSidebar(withNavbar(Products));
