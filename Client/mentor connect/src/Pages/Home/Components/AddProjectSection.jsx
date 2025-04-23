import React from 'react';

const AddProjectSection = () => {
  return (
    <div className="p-6 sm:p-8 bg-gradient-to-br from-[#6c63ff] to-[#6c63ff] shadow-2xl rounded-xl text-center text-white mb-12 mx-4 sm:mx-auto max-w-full sm:max-w-3xl lg:max-w-6xl xl:max-w-6xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4">
        Kickstart Your Next Big Project 🚀
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-5 sm:mb-6">
        Bring your ideas to life by collaborating with developers, designers, and innovators. Start building today and make an impact!
      </p>

      <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-3 sm:space-y-0">
        <button
          className="px-5 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105"
          onClick={() => window.location.href = '/addproject'}
        >
          ➕ Add Project
        </button>
      </div>

      <div className="mt-6 sm:mt-8 text-gray-300 text-sm">
        <p>Need inspiration? Check out trending projects and connect with like-minded creators.</p>
        <p className="mt-2 text-yellow-300 underline cursor-pointer hover:text-yellow-400">
          View Featured Projects
        </p>
      </div>
    </div>
  );
};

export default AddProjectSection;
