import { useEffect, useState } from "react";
import { getProductByVendor } from "../../api/products/get";
import {
  AddProductForm,
  checkAuth,
  CustomLoader,
  Error,
  withVendorDashboard,
} from "../../components";
import { getApiError } from "../../helpers/getApiError";

const VendorHome = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [loading, isLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState("");
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    isLoading(true);
    getProductByVendor()
      .then((response) => {
        setProducts(response.data);
        isLoading(false);
      })
      .catch((err) => {
        setApiError(getApiError(err));
        setTimeout(() => {
          setApiError("");
        }, 5000);
        isLoading(false);
      });
  };
  return (
    <>
      {apiError && <Error text={apiError} />}

      <div className="flex flex-col relative justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold text-black top-16 left-10 absolute">
          Products
        </h1>
        {loading ? (
          <CustomLoader />
        ) : (
          <>
            <div className=" grid grid-cols-12 my-16 self-start ml-32 mt-32">
              {!isFormVisible && (
                <div className="col-span-2">
                  <button
                    className="btn-md bg-cyan text-lg text-[#fff] rounded-md w-fit cursor-pointer"
                    onClick={() => setFormVisible(true)}
                  >
                    Add product
                  </button>
                </div>
              )}
              {isFormVisible && (
                <AddProductForm closeForm={() => setFormVisible(false)} />
              )}
            </div>

            <div className="overflow-x-auto w-5/6">
              <table className="table w-full" data-theme="light">
                <thead>
                  <tr>
                    <th className="bg-cyan text-white">Name</th>
                    <th className="bg-cyan text-white">Stock</th>
                    <th className="bg-cyan text-white">Price</th>
                    <th className="bg-cyan text-white">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <div className="flex items-center space-x-3">
                          {product.image && (
                            <div className="image">
                              <div className="mask mask-squircle w-12 h-12">
                                <a
                                  href={product.image}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={product.image}
                                    alt="Request Image"
                                    className="cursor-pointer"
                                  />
                                </a>
                              </div>
                            </div>
                          )}
                          <div>
                            <div className="font-bold">{product.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>{product.stock}</td>
                      <td>{product.price}</td>
                      <td>{product.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default checkAuth(withVendorDashboard(VendorHome, "Products"), "VENDOR");
