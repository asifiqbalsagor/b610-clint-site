import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../Context/Context.js";

const Login = () => {
  const { LoginWithGoogle, loginWithGithub, loginUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleLoginGoogle = () => {
    LoginWithGoogle(googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleLoginGithub = () => {
    loginWithGithub(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };

  const handleLoginFrom = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
       const password = form.password.value;
       console.log(email, password);
       loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
       
      })
      .catch((error) => {
        console.error(error);
        
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <Form onSubmit={handleLoginFrom} className="">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <button onClick={handleLoginGithub} className="btn btn-outline">
                Login with Github
              </button>
              <button
                onClick={handleLoginGoogle}
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
