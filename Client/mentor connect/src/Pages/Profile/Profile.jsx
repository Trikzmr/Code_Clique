import React from 'react';
import PersonalInformation from './Components/PersonalInformation';
import ProfileAbout from './Components/ProfileAbout';
import ProfileAchievements from './Components/ProfileAchievements';
import ProfileShare from './Components/ProfileShare';
import ProfilePreview from './Components/ProfilePrivew';
// import ProfileAccomplishments from './Components/profileAccomplishments';

const Profile = () => {
  return (
    <>
      {/* Profile Preview and Personal Info side by side */}
      <section className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm w-full md:w-[70%]">
          <ProfilePreview />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm w-full md:w-[30%]">
          <PersonalInformation />
        </div>
      </section>

      {/* ProfileAbout (60%) and right column (40%) side by side */}
      <section className="flex flex-col md:flex-row gap-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm w-full md:w-[60%]">
          <ProfileAbout />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[40%]">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <ProfileAchievements />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <ProfileShare />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
