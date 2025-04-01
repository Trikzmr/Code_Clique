
import React from 'react'
import ProfilePrivew from './Components/ProfilePrivew'
import PersonalInformation from './Components/PersonalInformation'
import ProfileAbout from './Components/ProfileAbout'
import ProfileAchievements from './Components/ProfileAchievements'
//import ProfileAccomplishments from './Components/profileAccomplishments'

const Profile = () => {
  return (
    <>
    <ProfilePrivew/>
    <PersonalInformation/>
    <ProfileAbout/>
    <ProfileAchievements/>
    {/* {<ProfileAccomplishments/>} */}
    
    </>
  )
}


      </div>
      {/* Profile Preview Section */}
      
      {/* Profile About Section */}
      

      {/* Profile Achievements Section */}
      <section className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <ProfileAchievements />
      </section>

      {/* Profile Accomplishments Section */}
      <section className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <ProfileAccomplishments />
      </section>

      {/* Profile Share Section */}
      <section className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <ProfileShare />
      </section>
    </div>
  );
};

export default Profile;
