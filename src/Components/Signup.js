import React, { useContext } from "react";
import img from "../assets/images/login/login.svg";
import { AuthContext } from "../Context/UserContext";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignin = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUser(email, password)
      .then((res) => res.json())
      .catch((err) => console.error(err.message));
    console.log(name);
  };
  return (
    <div>
      <div className="hero  bg-base-200 my-10 py-5">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <img src={img} alt="" />
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
