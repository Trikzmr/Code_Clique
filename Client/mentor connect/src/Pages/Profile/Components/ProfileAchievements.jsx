import React from 'react';

const ProfileAchievements = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <div className="w-16 h-16 mb-2">
        <img src="https://thumbs.dreamstime.com/b/victory-smiles-cartoon-trophy-cup-happy-face-award-achievement-success-icon-339060918.jpg" alt="Achievement Icon" className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="text-blue-500 font-semibold text-xl">+12</div>
      <div className="text-lg font-bold text-gray-800 mb-1">Achievements</div>
      
    </div>
  );
};

export default ProfileAchievements;
