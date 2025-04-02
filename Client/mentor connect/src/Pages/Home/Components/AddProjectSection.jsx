import React from 'react';

const AddProjectSection = () => {
  return (
    <div className="p-8 bg-gradient-to-br bg-[#6c63ff] shadow-2xl rounded-xl text-center text-white mb-12 mx-auto md:w-9/10">
      <h2 className="text-3xl font-extrabold mb-4">Kickstart Your Next Big Project 🚀</h2>
      <p className="text-lg text-gray-200 mb-6">Bring your ideas to life by collaborating with developers, designers, and innovators. Start building today and make an impact!</p>
      
      <div className="flex justify-center space-x-4">
        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105" onClick={() => window.location.href='/addproject'}>
          ➕ Add Project
        </button>
      </div>
      
      <div className="mt-8 text-gray-300 text-sm">
        <p>Need inspiration? Check out trending projects and connect with like-minded creators.</p>
        <p className="mt-2 text-yellow-300 underline cursor-pointer hover:text-yellow-400">View Featured Projects</p>
      </div>
    </div>
  );
};

export default AddProjectSection;
