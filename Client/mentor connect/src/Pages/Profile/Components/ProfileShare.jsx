import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ProfileShare = () => {
  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h2 className="text-xl font-semibold text-gray-800">Share your profile</h2>
      <p className="text-gray-500 text-sm mt-2">
        Now that your agency is created, go ahead and share it to start generating leads.
      </p>

      {/* QR Code Placeholder */}
      <div className="flex justify-center mt-4">
        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg">
          QR Code
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="flex justify-center gap-3 mt-4">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow">
          <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" />
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow">
          <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow">
          <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" />
        </div>
      </div>

      {/* Copy Link Section */}
      <p className="text-gray-500 text-sm mt-4">
        Copy the URL below and share it with your friends:
      </p>
      <div className="mt-2 flex items-center rounded-lg p-2 shadow-md bg-gray-100">
        <input
          type="text"
          value="https://larkon-mileage.com"
          readOnly
          className="flex-1 bg-transparent text-gray-700 outline-none"
        />
        <button className="p-2">
          📋
        </button>
      </div>
    </div>
  );
};

export default ProfileShare;
