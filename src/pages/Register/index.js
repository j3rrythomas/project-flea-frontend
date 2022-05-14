import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth/Register";
import { LogoSmall } from "../../assets/images";
import { Alert, checkNotAuth } from "../../components";
import { getApiError } from "../../helpers/getApiError";
import "../Login/index.scss";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  return (
    <>
      {error && <Alert type="error" alert={error} />}
      <div className="login-container min-h-full">
        <div className="absolute top-5 left-5 z-10 bg-transparent">
          <LogoSmall className="bg-transparent" />
        </div>
        <div className="form-div register-div">
          <div className="form-container">
            <div className="form-heading relative text-center h-12">
              <h1 className="english-text text-4xl text-black font-semibold after:text-4xl after:text-black after:font-semibold">
                Sign Up
              </h1>
              <h1 className="malayalam-text text-4xl text-black font-semibold after:text-4xl after:text-black after:font-semibold">
                ചേരുക
              </h1>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                username: "",
                role: "CUSTOMER",
                fullname: "",
                profilePic: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Password Required";
                } else if (
                  !/^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(
                    values.password
                  )
                ) {
                  errors.password = "Weak password";
                } else if (values.password != values.confirmPassword) {
                  errors.confirmPassword = "Passwords do not match";
                }
                if (!values.fullname) {
                  errors.fullname = "Full name required";
                }
                if (!values.username) {
                  errors.username = "Username required";
                }

                return errors;
              }}
              // eslint-disable-next-line no-unused-vars
              onSubmit={async ({ confirmPassword, ...values }) => {
                register(values)
                  .then(({ data }) => {
                    console.log(data);
                    navigate("/login");
                  })
                  .catch((error) => {
                    console.error(error);
                    setError(getApiError(error));
                    setTimeout(() => {
                      setError("");
                    }, 5000);
                  });
              }}
            >
              {
                // eslint-disable-next-line no-unused-vars
                ({ errors, touched }) => (
                  <Form className="grid grid-cols-12 w-full gap-x-4 gap-y-1 px-4 justify-items-center">
                    <div className="col-span-12 xl:col-span-6">
                      <div className="form-control w-full min-w-[300px] xl:min-w-[150px]">
                        <label className="label">
                          <span className="label-text text-black font-semibold text-base">
                            Email <span className="text-[#f00]">*</span>
                          </span>
                        </label>
                        <Field
                          name="email"
                          type="email"
                          placeholder="Enter email."
                          className="input input-bordered w-full max-w-xs bg-[#fff] text-[#000]"
                        />
                        <ErrorMessage
                          name="email"
                          render={(msg) => (
                            <span className="text-[#f00]">{msg}</span>
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                      <div className="form-control w-full min-w-[300px] xl:min-w-[150px]">
                        <label className="label">
                          <span className="label-text text-black font-semibold text-base">
                            Password <span className="text-[#f00]">*</span>
                          </span>
                        </label>
                        <Field
                          name="password"
                          type="password"
                          placeholder="Enter password."
                          className="input input-bordered w-full max-w-xs bg-[#fff] text-[#000]"
                        />
                        <ErrorMessage
                          name="password"
                          render={(msg) => (
                            <span className="text-[#f00]">{msg}</span>
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                      <div className="form-control w-full min-w-[300px] xl:min-w-[150px]">
                        <label className="label">
                          <span className="label-text text-black font-semibold text-base">
                            Confirm Password{" "}
                            <span className="text-[#f00]">*</span>
                          </span>
                        </label>
                        <Field
                          name="confirmPassword"
                          type="password"
                          placeholder="Enter password."
                          className="input input-bordered w-full max-w-xs bg-[#fff] text-[#000]"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          render={(msg) => (
                            <span className="text-[#f00]">{msg}</span>
                          )}
                        />
                      </div>
                    </div>

                    <div className="col-span-12 xl:col-span-6">
                      <div className="form-control w-full min-w-[300px] xl:min-w-[150px]">
                        <label className="label">
                          <span className="label-text text-black font-semibold text-base">
                            Full Name <span className="text-[#f00]">*</span>
                          </span>
                        </label>
                        <Field
                          name="fullname"
                          type="text"
                          placeholder="Enter full name."
                          className="input input-bordered w-full max-w-xs bg-[#fff] text-[#000]"
                        />
                        <ErrorMessage
                          name="fullname"
                          render={(msg) => (
                            <span className="text-[#f00]">{msg}</span>
                          )}
                        />
                      </div>
                    </div>

                    <div className="col-span-12 xl:col-span-6">
                      <div className="form-control w-full min-w-[300px] xl:min-w-[150px]">
                        <label className="label">
                          <span className="label-text text-black font-semibold text-base">
                            Username <span className="text-[#f00]">*</span>
                          </span>
                        </label>
                        <Field
                          name="username"
                          type="text"
                          placeholder="Enter username."
                          className="input input-bordered w-full max-w-xs bg-[#fff] text-[#000]"
                        />
                        <ErrorMessage
                          name="username"
                          render={(msg) => (
                            <span className="text-[#f00]">{msg}</span>
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                      <div className="form-control w-full min-w-[300px] xl:min-w-[150px]">
                        <label className="label">
                          <span className="label-text text-black font-semibold text-base">
                            Profile Picture{" "}
                          </span>
                        </label>
                        <Field
                          name="profilePic"
                          type="text"
                          placeholder="Enter URL."
                          className="input input-bordered w-full max-w-xs bg-[#fff] text-[#000]"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                      <div className="form-control w-full min-w-[300px] xl:min-w-[200px]">
                        <label className="label">
                          <span className="label-text text-black font-semibold text-base">
                            Role <span className="text-[#f00]">*</span>
                          </span>
                        </label>
                        <Field
                          as="select"
                          name="role"
                          className="select w-full max-w-xs bg-[#fff] text-[#000]"
                          placeholder="Select Role"
                        >
                          <option value="CUSTOMER">Customer</option>
                          <option value="VENDOR">Vendor</option>
                        </Field>
                      </div>
                    </div>

                    {/* <div className="col-span-12 justify-self-center mt-5  ml-20">
                    <label className="block font-semibold text-base text-[#000]">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          className="h-full w-full  bg-gray"
                          fill="#fff"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>

                      <div className="mt-5">
                        <Field
                          name="profilePic"
                          type="file"
                          className="input w-full max-w-xs bg-transparent xl:bg-primaryColor focus:outline-none text-[#000] file:bg-[#fff] file:border-none  file:rounded-md file:p-2"
                        />
                      </div>
                    </div>
                  </div> */}
                    <div className="col-span-12 justify-self-center mt-5">
                      <div className="flex justify-center items-center">
                        <button
                          className="login-button btn-md  min-w-[300px]"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </Form>
                )
              }
            </Formik>
            <span className="text-black text-base font-semibold mt-5">
              Already have an account?
              <a href="/login" className="underline hover:transform:scale(1.2)">
                Login{" "}
              </a>
            </span>
          </div>
        </div>
        <div className="img-div"></div>
      </div>
    </>
  );
};

export default checkNotAuth(Register);
