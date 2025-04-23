import React, { useState } from "react";
import { useParams } from "react-router-dom";

const RequestForm = () => {
  const { id: projectid } = useParams();

  const [form, setForm] = useState({
    message: "",
    publicProfileLink: "",
    projectLink: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const sendRequest = async (role) => {
    const payload = {
      projectId: projectid,
      role,
      message: form.message,
      publicProfileLink: form.publicProfileLink,
      projectLink: form.projectLink,
      skills: form.skills.split(",").map((s) => s.trim()),
    };

    try {
      const res = await fetch("https://code-clique-9qgm.vercel.app/api/sendRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl min-w-full border border-gray-200 bg-white px-4 pb-3 pt-4 sm:px-6 ">
      <form className="w-full rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-semibold text-center">Join Project</h1>
        <div className="space-y-2">
          <label htmlFor="publicProfileLink" className="block text-sm font-medium">Public Profile Link</label>
          <input
            id="publicProfileLink"
            type="url"
            className="w-full border border-black rounded-md px-3 py-2 bg-white focus:outline-none"
            value={form.publicProfileLink}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="projectLink" className="block text-sm font-medium">Project Link (if any)</label>
          <input
            id="projectLink"
            type="url"
            className="w-full border border-black rounded-md px-3 py-2 bg-white focus:outline-none"
            value={form.projectLink}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="skills" className="block text-sm font-medium">Skills (comma separated)</label>
          <input
            id="skills"
            type="text"
            className="w-full border border-black rounded-md px-3 py-2 bg-white focus:outline-none"
            value={form.skills}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full border border-black rounded-md px-3 py-2 bg-white focus:outline-none"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-4 pt-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              sendRequest("Developer");
            }}
            className="flex-1 border-2 border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
          >
            Join as Developer
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
