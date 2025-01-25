import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const LoginArea = () => {
  return (
    <div className="LoginArea max-w-[404px] mx-auto mt-10 p-4">
      {/* Header Section */}
      <div className="LoginHeader mb-6">
        <h1 className="text-2xl font-semibold">Welcome back!</h1>
        <p className="text-sm text-gray-600">Enter your credentials to access your account</p>
      </div>

      {/* Login Form */}
      <div className="LoginBox space-y-4">
        {/* Email Input */}
        <div className="LoginInputBox">
          <label className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Password Input */}
        <div className="LoginInputBox">
          <div className="LoginPassTitle flex">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <a href="#" className="text-sm text-green-600 hover:underline ml-2">Forgot password?</a>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring focus:ring-green-500"
          />
          <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
            Remember me for 30 days
          </label>
        </div>

        {/* Login Button */}
        <div className="LoginButton">
          <button className="w-full bg-green-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-green-700 transition">
            Login
          </button>
        </div>
      </div>

      {/* OR Divider */}
      <div className="LoginOr flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-sm text-gray-500">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Other Login Options */}
      <div className="loginOther space-y-4">
        <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition">
          <FcGoogle className="mr-2 text-lg" /> Sign in with Google
        </button>
        <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition">
          <FaApple className="mr-2 text-lg" /> Sign in with Apple
        </button>
      </div>

      {/* Sign Up Link */}
      <p className="text-sm text-center text-gray-600 mt-6">
        Don’t have an account? <a href="#" className="text-green-600 hover:underline">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginArea;
