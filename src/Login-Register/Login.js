import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../Context/Context.js";

const Login = () => {
  const { LoginWithGoogle } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleLoginGoogle = () => {
    LoginWithGoogle(googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <Form className="">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <button className="btn btn-outline">Login with Github</button>
              <button onClick={handleLoginGoogle} className="btn btn-outline btn-primary">Login with Google</button>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
