import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";

const Login = () => {

     const [error, setError] = useState("");
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";
     const { loginWithGitHub, loginWithGoogle, loginUser } =
       useContext(AuthContext);
     const gitHubProvider = new GithubAuthProvider();
     const googleProvider = new GoogleAuthProvider();
     const handleGitHubSignIn = () => {
       loginWithGitHub(gitHubProvider)
         .then((result) => {
           const user = result.user;
           navigate(from, { replace: true });
         })
         .catch((error) => {
           console.error(error);
         });
     };
   
     const handleGoogleSignIn = () => {
       loginWithGoogle(googleProvider)
         .then((result) => {
           const user = result.user;
           navigate(from, { replace: true });
         })
         .catch((error) => {
           console.error(error);
         });
     };
   
     const handleLogInSubmit = (event) => {
       event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
   
       setError("");
   
       loginUser(email, password)
         .then((result) => {
           const user = result.user;
           console.log(user);
           form.reset();
           navigate(from, { replace: true });
         })
         .catch((error) => {
           console.error(error);
           setError(error.message);
         });
     };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <Form onSubmit={handleLogInSubmit} className="">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <button  onClick={handleGitHubSignIn} className="btn btn-outline">
                Login with Github
              </button>
              <button onClick={handleGoogleSignIn}
                className="btn btn-outline btn-primary"
              >
                Login with Google
              </button>
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
                  <Link to='/register' Link className="label-text-alt link link-hover">
                    Go to Register
                  </Link>
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
