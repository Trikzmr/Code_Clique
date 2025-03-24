import React from 'react';

const PersonalInformation = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center mx-auto mt-10">
      <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
      <hr className="my-4" />
      <div className="text-left text-gray-700 space-y-3">
        <p className="flex items-center"><img src="" alt="" className="w-5 h-5 mr-2" />Project Head Manager</p>
        <p className="flex items-center"><img src="" alt="" className="w-5 h-5 mr-2" />Went to Oxford International</p>
        <p className="flex items-center"><img src="" alt="" className="w-5 h-5 mr-2" />Lives in Pittsburgh, PA 15212</p>
        <p className="flex items-center"><img src="" alt="" className="w-5 h-5 mr-2" />Followed by 16.6k People</p>
        <p className="flex items-center"><img src="" alt="" className="w-5 h-5 mr-2" />Email: hello@dundermuffilin.com</p>
        <p className="flex items-center"><img src="" alt="" className="w-5 h-5 mr-2" />Website: <a href="https://www.larkon.co" className="text-blue-500">www.larkon.co</a></p>
        <p className="flex items-center"><img src="" alt="" className="w-5 h-5 mr-2" />Language: English, Spanish, German</p>
        <p className="flex items-center"><img src="" alt="" className="w-5 h-5 mr-2" />Status: Active</p>
      </div>
    </div>
  );
};

export default PersonalInformation;
