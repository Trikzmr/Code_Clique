import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationArea = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Username: "",
    PhoneNumber: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("https://code-clique-9qgm.vercel.app/api/RegisterUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="RegisterArea mx-auto w-[60%]">
      <div className="RegisterHeader mb-6">
        <h1 className="text-2xl font-semibold">Create an Account</h1>
        <p className="text-sm text-gray-600">Fill in the details to register</p>
      </div>

      <div className="RegisterBox space-y-4">
        {Object.keys(formData).map((field) => (
          <div key={field} className="RegisterInputBox">
            <label className="block text-sm font-medium text-gray-700">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
            <input
              type={field === "Password" ? "password" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-sm focus:ring focus:ring-green-500 focus:border-green-500"
            />
          </div>
        ))}

        <div className="RegisterButton">
          <button className="w-full bg-green-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-green-700 transition" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationArea;
