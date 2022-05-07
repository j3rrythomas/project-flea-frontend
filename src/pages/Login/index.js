import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoSmall } from "../../assets/images";
import "./index.scss";
import { loginReq } from "../../api/auth/Login";
import { login } from "../../reducers/authSlice";
import { useState } from "react";
import { checkNotAuth } from "../../components";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  return (
    <>
      {error && (
        <div className="alert alert-error shadow-lg w-1/5 h-[40px] absolute top-2 left-1/2 translate-x-[-50%]">
          <div className="bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6 bg-transparent"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="bg-transparent">{error}</span>
          </div>
        </div>
      )}
      <div className="login-container">
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
              onSubmit={async (values) => {
                loginReq(values)
                  .then(({ data: { _id, accessToken, role } }) => {
                    dispatch(
                      login({ userId: _id, authToken: accessToken, role })
                    );
                    navigate("/");
                  })
                  .catch((error) => {
                    error?.response?.data
                      ? setError(error.response.data)
                      : setError("Error occurred during Login.");
                    setTimeout(() => {
                      setError("");
                    }, 5000);
                  });
              }}
            >
              {({ errors, touched, isValidating }) => (
                <Form className="flex w-2/3 flex-col justify-evenly">
                  <div className="flex flex-col justify-between mb-10 items-center">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text text-black font-semibold text-base">
                          Email
                        </span>
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Enter email."
                        className="input input-bordered w-full bg-[#fff] text-[#000]"
                      />
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text text-black font-semibold text-base">
                          Password
                        </span>
                      </label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Enter password."
                        className="input input-bordered w-full bg-[#fff] text-[#000]"
                      />
                    </div>
                  </div>
                  <span>
                    <ErrorMessage
                      name="email"
                      render={(msg) => <div className="error-msg">{msg}</div>}
                    />
                    <ErrorMessage
                      name="password"
                      render={(msg) => <div className="error-msg">{msg}</div>}
                    />
                  </span>
                  <div className="flex justify-center items-center">
                    <button
                      className="login-button btn-md  min-w-[300px]"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </Form>
              )}
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
