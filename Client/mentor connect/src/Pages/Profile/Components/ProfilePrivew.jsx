import React from 'react';

const ProfilePreview = () => {
  return (
    <div className="relative w-full h-[100%] overflow-hidden">
      {/* Background Image */}
      <div className="h-45 bg-center rounded-t-lg" 
        style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      </div>

      {/* Profile Photo */}
      <div className="flex justify-center -mt-12">
        <img className="w-24 h-24 object-cover rounded-full border-4 border-white" 
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" 
          alt="Profile" />
      </div>

      {/* Profile Details */}
      <div className="text-center p-4">
        <h2 className="text-xl font-bold">Gaston Lapierre</h2>
        <p className="text-gray-600">Project Head Manager</p>
      </div>

      {/* Profile Qualifications */}
      <div className="flex justify-around p-4 text-center">
        <div>
          <p className="text-lg font-semibold">3+</p>
          <p className="text-sm text-gray-500">Years Experience</p>
        </div>
        <div>
          <p className="text-lg font-semibold">5</p>
          <p className="text-sm text-gray-500">Certificates Achieved</p>
        </div>
        <div>
          <p className="text-lg font-semibold">2</p>
          <p className="text-sm text-gray-500">Internships Completed</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
