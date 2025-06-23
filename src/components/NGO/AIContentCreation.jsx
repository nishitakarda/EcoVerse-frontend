import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { MdAutoFixHigh, MdPreview } from "react-icons/md";

const AIContentCreation = () => {
  const [formData, setFormData] = useState({
    title: "Save Our Shores Cleanup",
    location: "Juhu Beach, Mumbai",
    date: "2025-07-01",
    time: "08:00",
    theme: "Hopeful",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    console.log("🔗 Send prompt to AI backend using:", formData);
    alert("This would trigger AI post generation via backend API.");
  };

  const generatePreview = () => {
    return `Join us for \"${formData.title}\" at ${formData.location} on ${formData.date} ${formData.time}!

Let's make an impact together.

#CleanBeach #BeachWarriors #EcoDrive

 Don't miss out – be a changemaker!`;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-72 flex-1 min-h-screen bg-blue-50 overflow-y-auto">
        <Header />
        <main className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Form */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MdAutoFixHigh className="text-sky-700 text-2xl" />
                <h2 className="text-2xl font-bold text-sky-700">AI Content Generator</h2>
              </div>
              <div className="space-y-3">
                <Input label="Event Title" name="title" value={formData.title} onChange={handleChange} />
                <Input label="Location" name="location" value={formData.location} onChange={handleChange} />
                <Input label="Date" name="date" value={formData.date} onChange={handleChange} type="date" />
                <Input label="Time" name="time" value={formData.time} onChange={handleChange} type="time" />
                <Select label="Theme" name="theme" value={formData.theme} options={["Hopeful", "Urgent", "Inspirational", "Fun"]} onChange={handleChange} />
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={handleGenerate}
                    className="bg-sky-700 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition"
                  >
                    Generate with AI
                  </button>
                </div>
              </div>
            </div>

            {/* Right Preview */}
            <div className="flex-1 bg-white rounded-xl shadow-inner border p-6">
              <div className="flex items-center gap-2 mb-3">
                <MdPreview className="text-gray-700 text-xl" />
                <h3 className="text-xl font-semibold text-gray-700">Live Post Preview</h3>
              </div>
              <div className="text-gray-900 text-base whitespace-pre-line bg-white p-4 rounded-lg border shadow">
                {generatePreview()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block mb-1 text-sm font-semibold">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg px-4 py-2"
    />
  </div>
);

const Select = ({ label, name, value, options, onChange }) => (
  <div>
    <label className="block mb-1 text-sm font-semibold">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg px-4 py-2"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default AIContentCreation;