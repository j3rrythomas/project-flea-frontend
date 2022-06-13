import { ErrorMessage, Field, Form, Formik } from "formik";

const AddProductForm = () => {
  return (
    <div className="mt-5 md:mt-0 col-span-12">
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
            <Form className="grid  grid-cols-12">
              <div className="col-span-12 flex flex-row my-2">
                <label className="label w-[150px]">
                  <span className="label-text text-black font-semibold text-base">
                    Title <span className="text-[#f00]">*</span>
                  </span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email."
                  className="input input-bordered w-full bg-[#fff] text-[#000]"
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <span className="text-[#f00]">{msg}</span>}
                />
              </div>
              <div className="col-span-12 flex flex-row my-2">
                <label className="label w-[150px]">
                  <span className="label-text text-black font-semibold text-base">
                    Title <span className="text-[#f00]">*</span>
                  </span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email."
                  className="input input-bordered w-full bg-[#fff] text-[#000]"
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <span className="text-[#f00]">{msg}</span>}
                />
              </div>

              <div className="grid grid-cols-4">
                <button
                  className="btn-md bg-cyan rounded-md w-[200px]"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default AddProductForm;
