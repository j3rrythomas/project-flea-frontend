import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/products/get";
import { getApiError } from "../../helpers/getApiError";
import { Alert, withNavbar, withSidebar } from "../../components";

const Product = () => {
  const { id } = useParams();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => setError(getApiError(error)));
  }, []);
  return (
    <>
      {error && <Alert type="error" alert={error} />}
      {isLoading ? "Loading" : `Product:${product.name}`}
    </>
  );
};

export default withSidebar(withNavbar(Product));
