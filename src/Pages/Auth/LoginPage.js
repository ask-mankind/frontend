import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your authentication logic
    if (email === 'aalprnbzkrt@gmail.com' && password === '1111') {
      dispatch(setUser({name:"Alperen",email:email,password:password}))
      navigate("/")
    } else {
      alert('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lilac py-12 px-4 sm:px-6 lg:px-8">
      {/* App Name */}
      <Link to="/">
      <h1 className="text-3xl font-extrabold text-white mb-8">            Ask - Mankind
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
      type="email"
      autoComplete="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-lilac focus:border-lilac focus:z-10 sm:text-sm"
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
    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
      Remember me
    </label>
  </div>

  <div className="text-sm">
    <a href="/" className="font-medium text-lilac hover:text-indigo-500">
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
</form>      </div>
    </div>
  );
};

export default LoginPage;

