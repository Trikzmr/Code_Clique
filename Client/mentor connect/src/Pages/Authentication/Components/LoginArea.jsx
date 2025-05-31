import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading";

const LoginArea = () => {
  const [isLoading, setIsLoading] = useState(false);
  let loginData;

  const navigate = useNavigate();
  //login api

  const apifetch = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://code-clique-9qgm.vercel.app/api/LoginUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
          credentials: "include", // Send cookies with the request
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigate("/home");
      } else {
        // Handle login failure
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("kError during login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  //login handler
  const HandleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    loginData = {
      Email: email,
      Password: password,
    };
    apifetch();
  };

  return (
    <div className="LoginArea max-w-[404px] mx-auto mt-10 p-4">
      {/* Header Section */}
      <div className="LoginHeader mb-6">
        <h1 className="text-2xl font-semibold">Welcome back!</h1>
        <p className="text-sm text-gray-600">
          Enter your credentials to access your account
        </p>
      </div>

      {/* Login Form */}
      <div className="LoginBox space-y-4">
        {/* Email Input */}
        <div className="LoginInputBox">
          <label className="block text-sm font-medium text-gray-700">
            Email address
          </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <a href="#" className="text-sm text-green-600 hover:underline ml-2">
              Forgot password?
            </a>
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
          {isLoading ? (
            <button
              disabled
              type="button"
              class="w-full bg-green-700 text-white rounded-lg py-2 text-sm font-medium hover:bg-green-700 transition"
            >
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-gray-200 animate-spin "
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Login...
            </button>
          ) : (
            <button
              className="w-full bg-green-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-green-700 transition"
              onClick={HandleLogin}
            >
              Login
            </button>
          )}
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
        Don’t have an account?{" "}
        <a href="/signup" className="text-green-600 hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginArea;
