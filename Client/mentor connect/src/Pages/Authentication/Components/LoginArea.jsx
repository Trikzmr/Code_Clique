import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

const LoginArea = () => {
  let loginData;

  const navigate = useNavigate();
  //login api

  const apifetch = async() => {

    try {
      const response = await fetch('https://code-clique-9qgm.vercel.app/api/LoginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData),
        credentials: "include", // Send cookies with the request
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/home');
      } else {
        // Handle login failure
        alert(data.message || 'Login failed!');
      }
    } catch (error) {
      console.error('kError during login:', error);
      
    }

  }

  //login handler
  const HandleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    loginData = {
      Email: email,
      Password: password
    }
    apifetch();
  }


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
            id="email"
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
              id="pass"
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
          <button className="w-full bg-green-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-green-700 transition" onClick={HandleLogin}>
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
      
      {/* Sign Up Link */}
      <p className="text-sm text-center text-gray-600 mt-6">
        Don’t have an account? <a href="/signup" className="text-green-600 hover:underline">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginArea;
