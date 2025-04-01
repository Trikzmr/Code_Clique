import React from "react";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:3000/api/RegisterUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      if (response.ok) {
        alert("Registration Successful!");
        navigate("/home");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="AddProjectPage bg-white">
        <div className="max-w-4xl mx-auto p-6 bg-white">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Register</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <label className="block text-gray-600">First Name</label>
                <input type="text" placeholder="First name" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                <label className="block text-gray-600">Last Name</label>
                <input type="text" placeholder="Last name" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                <label className="block text-gray-600">Email</label>
                <input type="email" placeholder="Email id" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                <label className="block text-gray-600">Password</label>
                <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
                </div>
                <div className="col-span-2">
                <label className="block text-gray-600">Address</label>
                <input type="text" placeholder="1234 Main St" className="w-full p-2 border rounded-md" />
                </div>
                <div className="col-span-2">
                <label className="block text-gray-600">Address 2</label>
                <input type="text" placeholder="Apartment, studio, or floor" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                <label className="block text-gray-600">City</label>
                <input type="text" placeholder="City" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                <label className="block text-gray-600">State</label>
                <select className="w-full p-2 border rounded-md">
                    <option>Choose...</option>
                    <option>State 1</option>
                    <option>State 2</option>
                </select>
                </div>
                <div>
                <label className="block text-gray-600">Zip</label>
                <input type="text" placeholder="Zip" className="w-full p-2 border rounded-md" />
                </div>
                <div className="col-span-2 flex items-center">
                <input type="checkbox" className="mr-2" id="check" />
                <label htmlFor="check" className="text-gray-600">Check me out</label>
                </div>
                <div className="col-span-2">
                <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition">Sign in</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddProject;
