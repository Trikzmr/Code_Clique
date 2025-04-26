import React from 'react';
import {
  Mail,
  Phone,
  Video,
  MessageCircle,
  MoreVertical,
  Calendar,
} from 'lucide-react';

const ProfileCard = ({data}) => {
  return (
    <div className="bg-white rounded-2xl p-6 mb-2 w-full md:max-w-sm shadow-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-gray-300 p-1">
            <img
              src="/profile-placeholder.png" // Replace with actual image
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold text-lg">{data.FirstName} {data.LastName}</h2>
            <p className="text-sm text-gray-500">@{data.Username}</p>
          </div>
        </div>
        <MoreVertical className="text-gray-400" />
      </div>
      {/* Contact Icons */}
      <div className="flex justify-start gap-4 mt-5">
        <button className="bg-black text-white p-2 rounded-full">
          <Mail size={16} />
        </button>
        <button className="bg-gray-100 p-2 rounded-full">
          <Phone size={16} />
        </button>
        <button className="bg-gray-100 p-2 rounded-full">
          <MessageCircle size={16} />
        </button>
        <button className="bg-gray-100 p-2 rounded-full">
          <Video size={16} />
        </button>
      </div>

      {/* Time Slots */}
      
    </div>
  );
};

export default ProfileCard;
