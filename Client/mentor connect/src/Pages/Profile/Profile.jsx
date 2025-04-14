
import React from 'react'
import PersonalInformation from './Components/PersonalInformation'
import ProfileAbout from './Components/ProfileAbout'
import ProfileAchievements from './Components/ProfileAchievements'
import ProfileShare from './Components/ProfileShare'
import ProfilePreview from './Components/ProfilePrivew'
//import ProfileAccomplishments from './Components/profileAccomplishments'

const Profile = () => {
  return (
    <>

      {/* Profile Preview Section */}
      <section className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <ProfilePreview />
      </section>
      <section className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <PersonalInformation/>
      </section>
      <section className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <ProfileAbout/>
      </section>
      

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
