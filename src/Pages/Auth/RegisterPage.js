import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser, setRegisterStatus } from "../../store/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.registerStatus);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace this with your registration logic
    if (fullName && userName && email && password) {
      setRegistered(true);
    } else {
      alert("Please fill in all fields to register.");
    }
    await dispatch(
      registerUser({
        fullname: fullName,
        username: userName,
        email: email,
        password: password,
      })
    );
  };

  useEffect(() => {
    if (status === "succeeded") {
      navigate("/");
      dispatch(setRegisterStatus("stable"));
      window.location.reload()

    }
  }, [status, navigate, dispatch]);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lilac py-12 px-4 sm:px-6 lg:px-8">
      {/* App Name */}
      <Link to="/">
        <h1 className="text-3xl font-extrabold text-white mb-8">
          {" "}
          Ask - Mankind
        </h1>
      </Link>

      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label htmlFor="Full Name" className="sr-only">
                Full Name
              </label>
              <input
                id="Full Name"
                name="Full Name"
                type="text"
                autoComplete="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-lilac focus:border-lilac focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="User Name" className="sr-only">
                User Name
              </label>
              <input
                id="User Name"
                name="User Name"
                type="text"
                autoComplete="User Name"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-lilac focus:border-lilac focus:z-10 sm:text-sm"
                placeholder="User Name"
              />
            </div>

            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lilac focus:border-lilac focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-lilac focus:border-lilac focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lilac hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lilac"
            >
              Register
            </button>
          </div>
          <div className="text-sm">
            <span className="font-medium text-lg mx-6">
              Do you have an account?
            </span>
            <Link
              to="/login"
              className="font-medium text-lg text-lilac hover:text-indigo-500"
            >
              Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
