import { withNavbar, withSidebar } from "../../components";
import { ErrorMessage, Field, Form, Formik } from "formik";

const CustomOrderRequest = () => {
  return (
    <div className="mt-5 md:mt-0 col-span-12 bg-[#fff] rounded-md py-4 px-8">
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: 0.0,
          stock: 1,
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Product Name Required";
          }
          if (!values.description || values.description.trim().length < 25) {
            errors.description = "Description should be at least 20 characters";
          }
          if (!values.price) {
            errors.price = "Price should be entered";
          }
          if (!/^[0-9]+(?:\.[0-9]+)?$/.test(values.price)) {
            errors.price = "Price should be a number";
          }
          if (values.stock <= 0) {
            errors.stock = "Stock should be positive";
          }

          return errors;
        }}
      >
        {
          // eslint-disable-next-line no-unused-vars
          ({ errors, touched }) => (
            <>
              <h1 className="text-4xl font-bold text-[#000] my-4">Customize</h1>
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
                <div className="col-span-12 flex flex-row my-2">
                  <label className="label w-[150px]">
                    <span className="label-text text-black font-semibold text-base text-left">
                      Photos(Explaining the product if any){" "}
                      <span className="text-[#f00]">*</span>
                    </span>
                  </label>
                  <div className="flex flex-col w-full">
                    <input
                      name="profilePic"
                      type="file"
                      accept="image/*"
                      className="input w-full bg-transparent focus:outline-none pl-0 text-[#000] file:text-[#fff] file:bg-cyan file:border-none file:mt-2 file:p-3  file:rounded-md "
                    />
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
                        <span className="text-[#f00] ml-3">{msg}</span>
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
                    <label className="input-group">
                      <Field
                        name="price"
                        type="text"
                        placeholder="Enter price to be charged per unit."
                        className="input border border-solid border-gray w-full bg-[#fff] text-[#000] lg:ml-3"
                      />
                      <span className="h-[3rem] bg-cyan">INR</span>
                    </label>
                    <ErrorMessage
                      name="price"
                      render={(msg) => (
                        <span className="text-[#f00] ml-3">{msg}</span>
                      )}
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3 flex flex-row my-2">
                  <label className="label w-[200px]">
                    <span className="label-text text-black font-semibold text-base text-right lg:ml-4">
                      Reqd. Quantity
                    </span>
                  </label>
                  <div className="flex flex-col w-full">
                    <Field
                      name="stock"
                      type="number"
                      placeholder="Enter quantity of product available."
                      className="input border border-solid border-gray w-full bg-[#fff] text-[#000]"
                    />
                    <ErrorMessage
                      name="stock"
                      render={(msg) => (
                        <span className="text-[#f00]">{msg}</span>
                      )}
                    />
                  </div>
                </div>

                <div className="col-span-12 flex justify-left items-center mt-8 ">
                  <button
                    className="btn-md bg-cyan text-[#fff] rounded-md w-[200px] mr-8 text-lg font-bold"
                    type="submit"
                  >
                    Contact the Seller
                  </button>
                </div>
              </Form>
            </>
          )
        }
      </Formik>
    </div>
  );
};

export default withNavbar(withSidebar(CustomOrderRequest));
