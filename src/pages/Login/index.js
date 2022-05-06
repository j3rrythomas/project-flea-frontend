import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoSmall } from "../../assets/images";
import "./index.scss";
import { loginReq } from "../../api/auth/Login";
import { login } from "../../reducers/authSlice";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  return (
    <div className="login-container">
      {error && (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>
        </div>
      )}
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
                .catch((error) =>
                  error?.response?.data
                    ? setError(error.response.data)
                    : console.error(error)
                );
            }}
          >
            {({ errors, touched, isValidating }) => (
              <Form className="flex h-2/6 flex-col justify-evenly">
                <div className="flex flex-col justify-evenly h-1/2">
                  <div className="form-control space-y-1">
                    <label className="input-group input-group-lg">
                      <span className="font-bold pr-[48px]">Email</span>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        validate={(value) => {
                          let error;
                          if (
                            !/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(
                              value
                            )
                          ) {
                            error = "Invalid Email";
                          }
                          return error;
                        }}
                        placeholder="Enter email"
                        className="outline-none focus-visible:outline-slate-400 focus-visible:outline-offset-0 border border-solid border-black text-black text-ellipsis"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group input-group-lg">
                      <span className="font-bold">Password</span>
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        // validate={(value) => {
                        //   let error;
                        //   if (
                        //     !/^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(
                        //       value
                        //     )
                        //   ) {
                        //     error = "Password is weak";
                        //   }
                        //   return error;
                        // }}
                        placeholder="Enter password"
                        className="outline-none focus-visible:outline-slate-400 focus-visible:outline-offset-0 border border-solid border-black text-black"
                      />
                    </label>
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
                <button className="login-button btn-md" type="submit">
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <span className="text-black text-base font-semibold">
            Dont have an account?<a href="/register" className="underline hover:transform:scale(1.2)">Sign Up</a>
          </span>
        </div>
      </div>
      <div className="img-div"></div>
    </div>
  );
};

export default Login;
