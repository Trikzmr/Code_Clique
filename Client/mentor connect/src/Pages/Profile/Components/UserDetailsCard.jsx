import React from "react";
import { Mail, Phone, Briefcase, Calendar, User, MapPinned} from "lucide-react";

const UserDetailsCard = ({data}) => {
  return (
    <div className="max-w-sm mx-auto bg-[#f4fef8] rounded-2xl shadow p-6 space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">
        Detailed Information
      </h2>
      <div className="flex items-center justify-between border-2 border-gray-400 p-3 py-2 rounded-lg">
        <div className="flex items-center gap-3">
          <User className="text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-600">Full Name</p>
            <p className="font-semibold text-gray-800">{data.FirstName} {data.LastName}</p>
          </div>
        </div>
        <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
          Online
        </span>
      </div>

      <div className="flex items-center gap-3 border-2 border-gray-400 p-3 py-2 rounded-lg">
        <Mail className="text-gray-500" />
        <div>
          <p className="text-sm font-medium text-gray-600">Email Address</p>
          <p className="font-semibold text-gray-800">{data.Email}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 border-2 border-gray-400 p-3 py-2 rounded-lg">
        <Phone className="text-gray-500" />
        <div>
          <p className="text-sm font-medium text-gray-600">Contact Number</p>
          <p className="font-semibold text-gray-800">{data.PhoneNumber}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 border-2 border-gray-400 p-3 py-2 rounded-lg">
        <Briefcase className="text-gray-500" />
        <div>
          <p className="text-sm font-medium text-gray-600">Organization</p>
          <p className="font-semibold text-gray-800">{data.Organization}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 border-2 border-gray-400 p-3 py-2 rounded-lg">
        <MapPinned className="text-gray-500" />
        <div>
          <p className="text-sm font-medium text-gray-600">Address</p>
          <p className="font-semibold text-gray-800">{data.Address}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 border-2 border-gray-400 p-3 py-2 rounded-lg">
        <Calendar className="text-gray-500" />
        <div>
          <p className="text-sm font-medium text-gray-600">Availability</p>
          <p className="font-semibold text-gray-800">Schedule the time slot</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
