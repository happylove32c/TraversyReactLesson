import React from 'react';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="container bg-white border border-gray-300 p-6 m-6 rounded-lg shadow-lg flex flex-col items-center w-full max-w-md">
        <div className="head-text text-center mb-8 border-b-2 border-gray-200 pb-4 w-full">
          <h1 className="text-2xl font-semibold text-purple-600">Welcome</h1>
        </div>
        <div className="form-section w-full">
          <input
            className="mb-4 border border-gray-300 rounded-lg px-4 py-2 text-center focus:outline-none focus:border-purple-500 w-full"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="mb-4 border border-gray-300 rounded-lg px-4 py-2 text-center focus:outline-none focus:border-purple-500 w-full"
            type="text"
            placeholder="Username"
            id="Username"
          />
          <input
            className="mb-4 border border-gray-300 rounded-lg px-4 py-2 text-center focus:outline-none focus:border-purple-500 w-full"
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="buttons w-full flex flex-col gap-4 mt-4">
          <button className="primary bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Login
          </button>
        </div>
        <div className="others mt-4 text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </div>
        <div className="or my-6 text-gray-500">
          <h2 className="text-center">Or</h2>
        </div>
        <div className="options w-full">
          <button className="alt bg-gray-100 border border-gray-300 text-gray-700 py-2 rounded-lg w-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
