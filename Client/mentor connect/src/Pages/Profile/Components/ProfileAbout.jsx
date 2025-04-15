import React from "react";

const Profile = () => {
  return (
    <div className="relative w-full h-[100%] overflow-hidden ">
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">About</h2>
        <hr className="my-4" />
        <p className="text-gray-700">
          I'm the model of the new Project Head Manager. I've combined a deep background in brand management at blue chip CPG companies with eCommerce growth marketing at the world's biggest retailer. I've run SingleFire, created world-class campaigns, and built digital marketing organizations from the ground up. I have over 20 years' experience leading... <a href="#" className="text-blue-500 hover:underline">See more</a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">My Approach</h2>
        <p className="text-gray-700">
          I believe in a holistic approach that combines creativity with technical expertise. I start by understanding your unique vision and goals, then work tirelessly to bring that vision to life. Whether you need a sleek portfolio site, an engaging e-commerce platform, or anything in between, I've got you covered.
        </p>
      </section>

      <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Marketing Expertise</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {["Leadership", "Advertising", "Public-relations", "Branding-manage"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">#{tag}</span>
            ))}
          </div>
          <p className="text-gray-700">Open to networking: <strong className="text-green-600">Yes</strong></p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Marketing Interests</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {["Event-marketing", "Performance-marketing", "Account-based-marketing"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">#{tag}</span>
            ))}
          </div>
          <p className="text-gray-700">Open to advising: <strong className="text-green-600">Yes</strong></p>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-bold mb-2">My Core Skills</h3>
        <div className="flex flex-wrap gap-4 text-gray-700">
          <span className="flex items-center"><span className="text-yellow-500">⭐⭐⭐</span> Inbound Marketing</span>
          <span className="flex items-center"><span className="text-yellow-500">⭐⭐⭐</span> Entrepreneurship</span>
          <span className="flex items-center"><span className="text-yellow-500">⭐⭐</span> Growth Marketing</span>
        </div>
      </section>
    </div>
  );
};

export default Profile;
