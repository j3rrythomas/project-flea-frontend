import { useEffect, useState } from "react";
import {
  checkAuth,
  CustomLoader,
  Error,
  withVendorDashboard,
} from "../../components";
import { getCustomOrders } from "../../api/orders/get";
import { Link } from "react-router-dom";
import { getApiError } from "../../helpers/getApiError";
import { CheckSquareIcon, CrossSquareIcon } from "../../assets/icons";
import { updateCustomOrderStatus } from "../../api/orders/post";

const VendorRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, isLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  useEffect(() => {
    getRequests();
  }, []);
  const getRequests = () => {
    isLoading(true);
    getCustomOrders()
      .then((response) => {
        setRequests(response.data);
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

      <div className="flex flex-col relative justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-black top-16 left-10 absolute">
          Requests for Custom Orders
        </h1>
        {loading ? (
          <CustomLoader />
        ) : requests.length === 0 ? (
          <div className="flex w-full h-full flex-col justify-center items-center">
            <>
              <p className="text-3xl lg:text-4xl text-black font-bold">
                No Requests Received
              </p>
            </>
          </div>
        ) : (
          <div className="overflow-x-auto w-5/6">
            <table className="table w-full" data-theme="light">
              <thead>
                <tr>
                  <th className="bg-cyan text-white">Product Type</th>
                  <th className="bg-cyan text-white">Deadline</th>
                  <th className="bg-cyan text-white">Quantity Required</th>
                  <th className="bg-cyan text-white">Price Range</th>
                  <th className="bg-cyan text-white">Description</th>
                  <th className="bg-cyan text-white"></th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        {request.customPic && (
                          <div className="image">
                            <div className="mask mask-squircle w-12 h-12">
                              <a
                                href={request.customPic}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src={request.customPic}
                                  alt="Request Image"
                                  className="cursor-pointer"
                                />
                              </a>
                            </div>
                          </div>
                        )}
                        <div>
                          <div className="font-bold">
                            {request.product_id ? (
                              <>Existing Product</>
                            ) : (
                              <>New Product</>
                            )}
                          </div>
                          {request.product_id && (
                            <div className="text-sm">
                              <Link
                                className="text-[#3B82F6] underline cursor-pointer"
                                to={`/products/${request.product_id}`}
                              >
                                View Product
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>{new Date(request.deadline).toDateString()}</td>
                    <td>{request.quantity}</td>
                    <td>
                      {"Rs." + request.minPrice + " to Rs." + request.maxPrice}
                    </td>
                    <th>
                      <label
                        htmlFor={"product" + request._id}
                        className="btn btn-ghost btn-xs bg-cyan text-white"
                      >
                        details
                      </label>

                      <input
                        type="checkbox"
                        id={"product" + request._id}
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box relative">
                          <label
                            htmlFor={"product" + request._id}
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          <h3 className="text-lg font-bold">
                            {request.description}{" "}
                          </h3>
                        </div>
                      </div>
                    </th>
                    <th className="flex">
                      {request.status === "PENDING" ? (
                        <>
                          <CheckSquareIcon
                            className="w-9 h-9 cursor-pointer"
                            onClick={() => {
                              updateCustomOrderStatus(request._id, {
                                status: "ACCEPT",
                              });
                              setTimeout(() => {
                                getRequests();
                              }, 1000);
                            }}
                          />
                          <CrossSquareIcon
                            className="w-9 h-9 cursor-pointer"
                            onClick={() => {
                              updateCustomOrderStatus(request._id, {
                                status: "REJECT",
                              });
                              setTimeout(() => {
                                getRequests();
                              }, 1000);
                            }}
                          />
                        </>
                      ) : request.status === "ACCEPT" ? (
                        "Accepted"
                      ) : (
                        "Rejected"
                      )}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default checkAuth(
  withVendorDashboard(VendorRequests, "Requests"),
  "VENDOR"
);
