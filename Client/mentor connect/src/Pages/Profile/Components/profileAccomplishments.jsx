import React from 'react';

const ProfileAccomplishments = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <div className="w-16 h-16 mb-2">
        <img src="https://gimgs2.nohat.cc/thumb/f/640/image-result-for-medal-cartoon-swim-art-search-web-yahoo--comdlpng6958270.jpg" alt="Accomplishment Icon" className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="text-blue-500 font-semibold text-xl">+24</div>
      <div className="text-lg font-bold text-gray-800 mb-1">Accomplishments</div>
      
    </div>
  );
};

export default ProfileAccomplishments;
