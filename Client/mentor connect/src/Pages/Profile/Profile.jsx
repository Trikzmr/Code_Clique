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

export default Profile