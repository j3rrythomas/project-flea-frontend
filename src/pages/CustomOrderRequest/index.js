import { Error, Success, withNavbar, withSidebar } from "../../components";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createCustomOrder } from "../../api/orders/post";
import { getApiError } from "../../helpers/getApiError";
import { LeftArrowIcon } from "../../assets/icons";

const CustomOrderRequest = () => {
  const { state: options } = useLocation();
  const navigate = useNavigate();
  const [productPic, setProductPic] = useState();
  const [createRequestStatus, setCreateRequestStatus] = useState("");
  const [apiError, setApiError] = useState("");
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    if (!options.productId || !options.sellerId) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <>
        {createRequestStatus === "success" ? (
          <Success text="Product added successfuly" />
        ) : createRequestStatus === "error" ? (
          <Error text={apiError} />
        ) : (
          <></>
        )}
      </>
      <div className="mt-5 md:mt-0 col-span-12 bg-[#fff] rounded-md py-4 px-8">
        <button
          className="text-2xl font-bold text-black mb-4 ml-1 w-10 h-10"
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon />
        </button>
        <Formik
          initialValues={{
            description: "",
            minPrice: 0.0,
            maxPrice: 0.0,
            deadline: "",
            quantity: 1,
            option: "selected",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.description || values.description.trim().length < 25) {
              errors.description =
                "Description should be at least 20 characters";
            }
            if (!values.minPrice || !values.maxPrice) {
              errors.minPrice = "Price should be entered";
            }
            if (
              !/^[0-9]+(?:\.[0-9]+)?$/.test(values.minPrice) ||
              !/^[0-9]+(?:\.[0-9]+)?$/.test(values.maxPrice)
            ) {
              errors.minPrice = "Price should be a number";
            } else {
              if (Number(values.minPrice) > Number(values.maxPrice)) {
                errors.minPrice = "Max Price should be greater";
              }
            }
            if (values.quantity <= 0) {
              errors.quantity = "Quantity should be positive";
            }
            if (!values.deadline) {
              errors.deadline = "Deadline required";
            }
            return errors;
          }}
          onSubmit={async ({ option, ...values }, { resetForm }) => {
            var formData = new FormData();
            const data =
              option === "selected"
                ? { product_id: options.productId, ...values }
                : values;
            formData.append("customPic", productPic);
            formData.append(
              "requestData",
              JSON.stringify({
                vendor_id: options.sellerId,
                ...data,
              })
            );
            isLoading(true);
            createCustomOrder(formData)
              .then(() => {
                setCreateRequestStatus("success");
                isLoading(false);
                setTimeout(() => {
                  setCreateRequestStatus("");
                }, 5000);
                resetForm();
              })
              .catch((err) => {
                setCreateRequestStatus("error");
                setApiError(getApiError(err));
                isLoading(false);
                setTimeout(() => {
                  setCreateRequestStatus("");
                }, 5000);
              });
          }}
        >
          {
            // eslint-disable-next-line no-unused-vars
            ({ errors, touched }) => (
              <>
                <h1 className="text-4xl font-bold text-[#000] my-4">
                  Custom Product Request
                </h1>
                <Form className="grid  grid-cols-12">
                  <div className="col-span-12 flex flex-row my-2">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base">
                        Description <span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <Field
                        as="textarea"
                        name="description"
                        type="text"
                        placeholder="Enter a detailed description of the product."
                        className="input border border-solid border-gray w-full bg-[#fff] text-[#000] h-20"
                      />
                      <ErrorMessage
                        name="description"
                        render={(msg) => (
                          <span className="text-[#f00]">{msg}</span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6 flex flex-row my-2">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base text-left">
                        Photos(Explaining the product if any){" "}
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <input
                        name="productPic"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setProductPic(e.target.files[0])}
                        className="input w-full bg-transparent focus:outline-none pl-0 text-[#000] file:text-[#fff] file:bg-[#D2B82C] file:border-none file:mt-2 file:p-3  file:rounded-md "
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6 flex flex-row my-2">
                    <label className="label w-[300px]">
                      <span className="label-text text-black font-semibold text-base text-left">
                        Customize selected product or request new product
                        <span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <Field
                        as="select"
                        name="option"
                        className="select w-full max-w-xs bg-[#fff] border border-gray text-[#000]"
                        placeholder="Select option"
                      >
                        <option value="selected">Selected</option>
                        <option value="new">New</option>
                      </Field>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-3 flex lg:my-2">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base">
                        Deadline<span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full ml-5 lg:ml-4">
                      <Field
                        name="deadline"
                        type="date"
                        placeholder="Enter the deadline."
                        className="input border border-solid border-gray w-full bg-[#fff] text-[#000] lg:ml-3"
                      />
                      <ErrorMessage
                        name="deadline"
                        render={(msg) => (
                          <span className="text-[#f00] ml-4">{msg}</span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-5  flex flex-row my-2 ml-5 justify-between">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base">
                        Price Range<span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <div className="flex">
                        <label className="input-group">
                          <Field
                            name="minPrice"
                            type="text"
                            placeholder="Minimum price."
                            className="input border border-solid border-gray w-full bg-[#fff] text-[#000] lg:ml-3"
                          />
                          <span className="h-[3rem] bg-[#D2B82C]">INR</span>
                        </label>
                        <div className="flex justify-center items-center ml-3 text-xl text-[#000]">
                          to
                        </div>
                        <label className="input-group">
                          <Field
                            name="maxPrice"
                            type="text"
                            placeholder="Maximum price"
                            className="input border border-solid border-gray w-full bg-[#fff] text-[#000] lg:ml-3"
                          />
                          <span className="h-[3rem] bg-[#D2B82C]">INR</span>
                        </label>
                      </div>
                      <ErrorMessage
                        name="minPrice"
                        render={(msg) => (
                          <span className="text-[#f00] ml-3">{msg}</span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-3 flex flex-row my-2">
                    <label className="label w-[200px]">
                      <span className="label-text text-black font-semibold text-base text-right lg:ml-4">
                        Reqd. Quantity<span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <Field
                        name="quantity"
                        type="number"
                        placeholder="Enter quantity of product available."
                        className="input border border-solid border-gray w-full bg-[#fff] text-[#000]"
                      />
                      <ErrorMessage
                        name="quantity"
                        render={(msg) => (
                          <span className="text-[#f00]">{msg}</span>
                        )}
                      />
                    </div>
                  </div>

                  <div className="col-span-12 flex justify-center items-center mt-8">
                    <button
                      className="btn-md bg-[#D2B82C] text-[#fff] rounded-md min-w-[200px] mr-8 text-lg font-bold cursor-pointer"
                      type="submit"
                      disabled={loading}
                    >
                      Submit Request
                    </button>
                  </div>
                </Form>
              </>
            )
          }
        </Formik>
      </div>
    </>
  );
};

export default withNavbar(withSidebar(CustomOrderRequest));
