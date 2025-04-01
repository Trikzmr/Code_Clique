
import React from 'react'
import ProfilePrivew from './Components/ProfilePrivew'
import PersonalInformation from './Components/PersonalInformation'
import ProfileAbout from './Components/ProfileAbout'
import ProfileAchievements from './Components/ProfileAchievements'
//import ProfileAccomplishments from './Components/profileAccomplishments'

const Profile = () => {
  return (
    <>

      {/* Profile Preview Section */}
      
      {/* Profile About Section */}
      

      {/* Profile Achievements Section */}
      <section className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <ProfileAchievements />
      </section>

      {/* Profile Share Section */}
      <section className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <ProfileShare />
      </section>
    </>
  );
};

export default Profile;
