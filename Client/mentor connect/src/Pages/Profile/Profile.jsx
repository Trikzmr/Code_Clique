import React from "react";
import ProfilePrivew from "./Components/ProfilePrivew";
import PersonalInformation from "./Components/PersonalInformation";
import ProfileAbout from "./Components/ProfileAbout";
import ProfileAchievements from "./Components/ProfileAchievements";
import ProfileAccomplishments from "./Components/ProfileAccomplishments";
import ProfileShare from "./Components/ProfileShare";

const Profile = () => {
  return (
    <div className=" bg-white ">
      <section className=" shadow-sm w-10/10">
          <ProfilePrivew />
      </section>
      <div className="flex gap-6">
        <section className="bg-gray-100 p-4 rounded-lg shadow-sm w-6/10">
          <ProfileAbout />
        </section>
        {/* Personal Information Section */}
        <section className="  shadow-sm w-4/10 p-4">
          <PersonalInformation />
        </section>

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
