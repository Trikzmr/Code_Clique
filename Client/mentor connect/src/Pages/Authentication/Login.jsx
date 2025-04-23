import React from "react";
import LoginArea from "./Components/LoginArea";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="Login_pannel flex md:flex-row flex-col min-h-screen">
        <div className="login_Controller flex md:basis-[67%] justify-center items-center">
          <LoginArea />
        </div>
        <div className="hidden md:flex flex-col justify-center items-center md:basis-[40%] bg-[#1A3235] text-white p-10 space-y-6 shadow-inner">
  {/* Modern Developer SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-40 h-40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 6h20M5 6v14h14V6" stroke="currentColor"/>
    <path d="M8 10l-2 2 2 2M16 10l2 2-2 2M12 13h.01" stroke="currentColor"/>
  </svg>

  {/* Headline */}
  <h2 className="text-3xl font-extrabold text-center tracking-tight leading-snug">
    Code. Connect. Conquer.
  </h2>

  {/* Supporting Text */}
  <p className="text-sm text-gray-300 text-center max-w-xs">
    Collaborate with talented developers and mentors. Turn your ideas into real-world projects and grow your skills.
  </p>

  {/* Quote-style motivation */}
  <div className="text-xs italic text-gray-400 border-l-4 border-green-500 pl-4 max-w-xs">
    "Every great product starts with a single line of code."
  </div>

  {/* UI Decoration */}
  <div className="flex space-x-2 text-green-400 text-xs mt-4">
    <span className="px-2 py-1 bg-green-900 rounded">#OpenSource</span>
    <span className="px-2 py-1 bg-green-900 rounded">#Collaboration</span>
    <span className="px-2 py-1 bg-green-900 rounded">#Mentorship</span>
  </div>
</div>

      </div>
    </>
  );
};

export default Login;
