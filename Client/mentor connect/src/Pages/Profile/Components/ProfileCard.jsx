import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Video,
  MessageCircle,
  MoreVertical,
  Calendar,
} from 'lucide-react';




const ProfileCard = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profilepic, setprofilepic]=useState(false);

  const UploadProfilePicture = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (file) {
        setPreviewURL(URL.createObjectURL(file));
      }
    };
  
    const handleUpload = async(e) => {
      e.preventDefault();

      if (!selectedFile) return;

      try {

          const apiUrl = 'https://code-clique-9qgm.vercel/api/upload';

          const formData = new FormData();
          formData.append('profilePic', selectedFile);

          const response = await fetch(apiUrl, {
          method: 'POST',
          body: formData,
          headers: { 'Content-Type': 'application/json' }, 
          credentials: 'include', // Allows cookies to be sent with the request
        });
        
      } catch (error) {
        console.error("Error uploading file:", error);  
        
      }
      console.log("Uploading:", selectedFile);
    };
  
    return (
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-6">
        <button onClick={() => setprofilepic(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Upload Profile Picture</h2>
  
        {previewURL && (
          <div className="flex justify-center mb-4">
            <img
              src={previewURL}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover border border-gray-300"
            />
          </div>
        )}
  
        <form onSubmit={handleUpload} className="flex flex-col items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100 cursor-pointer"
            name='ProfilePic'
          />
  
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200"
          >
            Upload
          </button>
        </form>
      </div>
    );
  };

  const dropdownOptions = [
    { label: 'Edit Profile', value: '/completeprofile' },
    { label: 'Upload Profile Picture', value: '/uploadprofilepic' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 mb-2 w-full md:max-w-sm shadow-md mx-auto">
      {/* Header */}
      {/*profile pic container */}
      {
        profilepic && (
          <div className="uploadpic absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
            <UploadProfilePicture />
          </div>

        )
      }
  
      
      <div className="flex justify-between items-start relative">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-gray-300 p-1">
            <img
              src="/profile-placeholder.png"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">{data.FirstName || 'User Name'}</p>
            <p className="text-sm text-gray-500">{data?.role || 'Role'}</p>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <MoreVertical />
          </button>

          <div
            className={`absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${
              menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            {dropdownOptions.map((option) => (
              <div
                key={option.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                  if(option.label === 'Upload Profile Picture') {
                    setprofilepic(true);
                    return;
                  }
                  window.location.href = option.value;
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
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
    </div>
  );
};

export default ProfileCard;
