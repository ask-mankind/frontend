import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus, setUser } from "../../store/auth";
import { loginUser } from "../../store/auth";
import { useEffect } from "react";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const status = useSelector((state) => state.auth.loginStatus);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser({ username: username, password: password }));
  };

  useEffect(() => {
    if (status === "succeeded") {
      navigate("/");
      dispatch(setLoginStatus("stable"));
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
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-lilac focus:border-lilac focus:z-10 sm:text-sm"
                placeholder="Username"
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-lilac focus:border-lilac focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-lilac focus:ring-lilac border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-lilac hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lilac hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lilac"
            >
              Log in
            </button>
          </div>
          <div className="text-sm">
            <span className="font-medium text-lg mx-6">
              Don't have an account?
            </span>
            <Link
              to="/register"
              className="font-medium text-lg text-lilac hover:text-indigo-500"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
