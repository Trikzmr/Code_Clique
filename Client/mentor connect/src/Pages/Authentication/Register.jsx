import React from "react";
import RegistrationArea from "./Components/RegistrationArea";

const Register = () => {
  return (
    <>
      <div className="Login_pannel flex md:flex-row flex-col min-h-screen">
        <div className="login_Controller flex md:basis-[67%] mt-12">
          <RegistrationArea />
        </div>
        <div className="hidden md:flex flex-col justify-center items-center md:basis-[33%] bg-[#1A3235] text-white p-8 space-y-6">
          {/* SVG Illustration */}
          <svg
            className="w-40 h-40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect
              x="2"
              y="4"
              width="20"
              height="16"
              rx="2"
              ry="2"
              stroke="currentColor"
            />
            <path d="M8 2v4M16 2v4M2 10h20" />
            <path d="M9 16l-2-2 2-2M15 12l2 2-2 2" />
          </svg>

          {/* Headline */}
          <h2 className="text-3xl font-bold text-center leading-snug">
            Build Better <br /> Together.
          </h2>

          {/* Supporting Text */}
          <p className="text-sm text-gray-300 text-center max-w-xs">
            Collaborate with skilled developers and mentors on real-world
            projects. Whether you're learning or leading, you're at the right
            place.
          </p>

          {/* Inspirational Quote Box */}
          <div className="border-l-4 border-green-500 pl-4 text-sm italic text-gray-400 max-w-sm text-left">
            “The best way to learn to code is to build something with someone
            smarter than you.”
          </div>

          {/* Decorative brackets or icon element */}
          <div className="flex gap-2 text-green-400 text-xl">
            <span>&lt;/&gt;</span>
            <span>&#x1F4BB;</span> {/* laptop emoji for style */}
            <span>&#x2728;</span> {/* sparkles */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
