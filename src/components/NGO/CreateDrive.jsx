import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { HiOutlineClipboardDocument } from "react-icons/hi2";

const CreateDrive = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    description: "",
    volunteers: "",
  });

  const [posted, setPosted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("🛰️ Drive data sent:", formData);
    setPosted(true);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-72 flex-1 bg-blue-50 overflow-y-auto">
        <Header />
        <main className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 w-full lg:w-1/2">
              <div className="flex items-center gap-2 mb-6">
                <HiOutlineClipboardDocument className="text-sky-700 text-3xl" />
                <h2 className="text-3xl font-bold text-sky-700">Create New Drive</h2>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input label="Drive Title" name="title" value={formData.title} onChange={handleChange} />
                <Input label="Location" name="location" value={formData.location} onChange={handleChange} />
                <Input label="Date" name="date" type="date" value={formData.date} onChange={handleChange} />
                <Input label="Time" name="time" type="time" value={formData.time} onChange={handleChange} />
                <Input label="Expected Volunteers" name="volunteers" value={formData.volunteers} onChange={handleChange} />
                <div className="sm:col-span-2">
                  <Textarea label="Description" name="description" value={formData.description} onChange={handleChange} />
                </div>
              </div>

              {/* Post Button */}
              <div className="pt-6 flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="bg-sky-700 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition"
                >
                  Post Drive
                </button>
              </div>

              {/* Success Message */}
              {posted && (
                <p className="text-green-600 font-medium pt-4 text-center">
                  ✅ Drive posted successfully! It will appear on the volunteer map and dashboard.
                </p>
              )}
            </div>

            {/* Right: Live Preview */}
            {formData.title && (
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-6">📄 Live Drive Preview</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Event Details */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Event Details</h4>
                    <div className="text-sm space-y-2">
                      <DetailRow label="Cause" value="Coastal Conservation" />
                      <DetailRow label="Location" value={formData.location || "-"} />
                      <DetailRow
                        label="Date & Time"
                        value={`${formData.date || "-"} | ${formData.time || "-"}`}
                      />
                      <DetailRow label="Organizer" value="Green Mumbai Initiative" />
                      <DetailRow label="Registration Fee" value="Free (refreshments provided)" />
                    </div>
                  </div>

                  {/* About the Event */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">About the Event</h4>
                    <p className="text-sm text-gray-700 mb-4">
                      {formData.description || "This event supports coastal cleanup efforts by the Green Mumbai Initiative. Volunteers will help remove plastic and raise awareness about marine conservation."}
                    </p>
                    <h5 className="font-semibold mt-4 mb-2">What to Expect</h5>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                      <li>Guided cleanup activities led by environmental experts</li>
                      <li>Educational talks about marine conservation</li>
                      <li>Networking with like-minded individuals</li>
                      <li>Certificate of participation</li>
                      <li>Refreshments and water provided</li>
                    </ul>
                    <h5 className="font-semibold mt-4 mb-2">What to Bring</h5>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                      <li>Comfortable clothes and footwear</li>
                      <li>Hat and sunscreen</li>
                      <li>Reusable water bottle</li>
                      <li>Positive attitude and energy</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

// Reusable Input Component
const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block mb-1 text-sm font-semibold text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
    />
  </div>
);

// Reusable Textarea Component
const Textarea = ({ label, name, value, onChange }) => (
  <div>
    <label className="block mb-1 text-sm font-semibold text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows="3"
      className="w-full border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
    ></textarea>
  </div>
);

// Event Detail Row Component
const DetailRow = ({ label, value }) => (
  <div className="flex justify-between border-b py-1">
    <span className="font-medium text-gray-600">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default CreateDrive;
