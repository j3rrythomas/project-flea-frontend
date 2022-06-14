import { ErrorMessage, Field, Form, Formik } from "formik";
import PropTypes from "prop-types";

const AddProductForm = ({ closeForm }) => {
  return (
    <div className="mt-5 md:mt-0 col-span-12 bg-[#fff] rounded-md py-4 px-8">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={() => {
          const errors = {};
          return errors;
        }}
        onSubmit={() => {}}
      >
        {
          // eslint-disable-next-line no-unused-vars
          ({ errors, touched }) => (
            <>
              <h1 className="text-4xl font-bold text-[#000] my-4">
                Add Product
              </h1>
              <Form className="grid  grid-cols-12">
                <div className="col-span-12 flex flex-row my-2">
                  <label className="label w-[150px]">
                    <span className="label-text text-black font-semibold text-base">
                      Product Name <span className="text-[#f00]">*</span>
                    </span>
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter name of the product."
                    className="input border border-solid border-gray w-full bg-[#fff] text-[#000]"
                  />
                  <ErrorMessage
                    name="name"
                    render={(msg) => <span className="text-[#f00]">{msg}</span>}
                  />
                </div>
                <div className="col-span-12 flex flex-row my-2">
                  <label className="label w-[150px]">
                    <span className="label-text text-black font-semibold text-base">
                      Description <span className="text-[#f00]">*</span>
                    </span>
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    type="text"
                    placeholder="Enter a detailed description of the product."
                    className="input border border-solid border-gray w-full bg-[#fff] text-[#000] h-20"
                  />
                  <ErrorMessage
                    name="description"
                    render={(msg) => <span className="text-[#f00]">{msg}</span>}
                  />
                </div>
                <div className="col-span-12 lg:col-span-6  flex flex-row my-2">
                  <label className="label w-[150px]">
                    <span className="label-text text-black font-semibold text-base">
                      Price<span className="text-[#f00]">*</span>
                    </span>
                  </label>
                  <label className="input-group">
                    <Field
                      name="price"
                      type="text"
                      placeholder="Enter price to be charged per unit."
                      className="input border border-solid border-gray w-full bg-[#fff] text-[#000] lg:ml-3"
                    />
                    <span className="h-[3rem]">INR</span>
                  </label>
                  <ErrorMessage
                    name="price"
                    render={(msg) => <span className="text-[#f00]">{msg}</span>}
                  />
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-row my-2">
                  <label className="label w-[150px]">
                    <span className="label-text text-black font-semibold text-base text-right lg:ml-4">
                      Stock <span className="text-[#f00]">*</span>
                    </span>
                  </label>
                  <Field
                    name="stock"
                    type="number"
                    placeholder="Enter quantity of product available."
                    className="input border border-solid border-gray w-full bg-[#fff] text-[#000]"
                  />
                  <ErrorMessage
                    name="stock"
                    render={(msg) => <span className="text-[#f00]">{msg}</span>}
                  />
                </div>
                <div className="col-span-12 flex justify-center items-center mt-8">
                  <button
                    className="btn-md bg-cyan text-[#fff] rounded-md w-[200px] mr-8 text-lg font-bold"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="btn-md text-cyan bg-[#fff] rounded-md w-[200px] text-lg font-bold border border-solid border-cyan"
                    onClick={closeForm}
                  >
                    Cancel
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

AddProductForm.propTypes = {
  closeForm: PropTypes.func,
};
export default AddProductForm;
