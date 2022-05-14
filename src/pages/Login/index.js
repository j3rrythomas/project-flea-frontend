import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoSmall } from "../../assets/images";
import "./index.scss";
import { loginReq } from "../../api/auth/Login";
import { login } from "../../reducers/authSlice";
import { useState } from "react";
import { Alert, checkNotAuth } from "../../components";
import { getApiError } from "../../helpers/getApiError";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  return (
    <>
      {error && <Alert alert={error} type="error" />}
      <div className="login-container min-h-full">
        <div className="absolute top-5 left-5 z-10 bg-transparent">
          <LogoSmall className="bg-transparent" />
        </div>
        <div className="form-div">
          <div className="form-container">
            <div className="form-heading relative text-center h-12">
              <h1 className="english-text text-4xl text-black font-semibold after:text-4xl after:text-black after:font-semibold">
                Welcome
              </h1>
              <h1 className="malayalam-text text-4xl text-black font-semibold after:text-4xl after:text-black after:font-semibold">
                സ്വാഗതം
              </h1>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
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
                }

                return errors;
              }}
              onSubmit={async (values) => {
                loginReq(values)
                  .then(({ data: { _id, accessToken, role } }) => {
                    dispatch(
                      login({ userId: _id, authToken: accessToken, role })
                    );
                    navigate("/");
                  })
                  .catch((error) => {
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
                  <Form className="flex w-2/3 flex-col justify-evenly">
                    <div className="flex flex-col justify-between mb-10 items-center">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text text-black font-semibold text-base">
                            Email <span className="text-[#f00]">*</span>
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
                          render={(msg) => (
                            <span className="text-[#f00]">{msg}</span>
                          )}
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text text-black font-semibold text-base">
                            Password <span className="text-[#f00]">*</span>
                          </span>
                        </label>
                        <Field
                          name="password"
                          type="password"
                          placeholder="Enter password."
                          className="input input-bordered w-full bg-[#fff] text-[#000]"
                        />
                        <ErrorMessage
                          name="password"
                          render={(msg) => (
                            <span className="text-[#f00]">{msg}</span>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        className="login-button btn-md  min-w-[300px]"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                )
              }
            </Formik>
            <span className="text-black text-base font-semibold mt-2">
              Dont have an account?
              <a
                href="/register"
                className="underline hover:transform:scale(1.2)"
              >
                Sign Up
              </a>
            </span>
          </div>
        </div>
        <div className="img-div"></div>
      </div>
    </>
  );
};

export default checkNotAuth(Login);
