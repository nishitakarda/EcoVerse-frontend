import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { MdInsertChart, MdDescription, MdImage, MdDownload } from "react-icons/md";

const AISummaryReports = () => {
  const [reportData, setReportData] = useState({
    title: "Beach Cleanup Drive",
    date: "2025-06-20",
    location: "Juhu Beach, Mumbai",
    volunteers: 87,
    duration: "4 hours",
    wasteCollected: "250 kg",
    summary:
      "The event saw enthusiastic participation and left the shoreline visibly cleaner. Volunteers worked together to remove plastic waste, debris, and other pollutants from the beach area.",
  });

  const [beachImages, setBeachImages] = useState({
    oldBeachPhoto: null,
    newBeachPhoto: null,
  });

  const handleChange = (e) => {
    setReportData({ ...reportData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBeachImages({ ...beachImages, [imageType]: imageUrl });
    }
  };

  const handleGenerate = () => {
    console.log("🔗 Send prompt to AI backend using:", reportData);
    console.log("🔗 Beach images:", beachImages);
    alert("This would trigger AI summary generation via backend API.");
  };

  const handleDownloadReport = () => {
    alert("This would generate and download a PDF report.");
  };

  const generateDetailedPreview = () => {
    return (
      <div className="space-y-4">
        <h4 className="text-2xl font-bold text-sky-700">{reportData.title}</h4>

        {beachImages.newBeachPhoto && (
          <div className="my-4">
            <img
              src={beachImages.newBeachPhoto}
              alt="Beach After Cleanup"
              className="w-full max-w-md rounded-lg border shadow-md"
            />
            <p className="text-sm text-gray-600 mt-2 italic">Beach condition after cleanup efforts</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p><strong>📅 Date:</strong> {reportData.date}</p>
            <p><strong>📍 Location:</strong> {reportData.location}</p>
            <p><strong>👥 Volunteers:</strong> {reportData.volunteers}</p>
          </div>
          <div className="space-y-2">
            <p><strong>⏰ Duration:</strong> {reportData.duration}</p>
            <p><strong>🗑️ Waste Collected:</strong> {reportData.wasteCollected}</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <h5 className="font-semibold text-gray-700 mb-2">📋 Event Summary</h5>
          <p className="text-gray-600 leading-relaxed">{reportData.summary}</p>
        </div>

        {beachImages.oldBeachPhoto && beachImages.newBeachPhoto && (
          <div className="border-t pt-4">
            <h5 className="font-semibold text-gray-700 mb-3">📸 Before & After Comparison</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-2 text-red-600">Before Cleanup</p>
                <img
                  src={beachImages.oldBeachPhoto}
                  alt="Beach Before Cleanup"
                  className="w-full rounded-lg border shadow"
                />
              </div>
              <div>
                <p className="text-sm font-medium mb-2 text-green-600">After Cleanup</p>
                <img
                  src={beachImages.newBeachPhoto}
                  alt="Beach After Cleanup"
                  className="w-full rounded-lg border shadow"
                />
              </div>
            </div>
          </div>
        )}

        <div className="border-t pt-4">
          <h5 className="font-semibold text-gray-700 mb-2">📊 Impact Metrics</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{reportData.volunteers}</div>
              <div className="text-xs text-gray-600">Volunteers</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{reportData.wasteCollected}</div>
              <div className="text-xs text-gray-600">Waste Collected</div>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{reportData.duration}</div>
              <div className="text-xs text-gray-600">Duration</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">2km</div>
              <div className="text-xs text-gray-600">Area Cleaned</div>
            </div>
          </div>
        </div>
      </div>
    );
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
                <MdInsertChart className="text-sky-700 text-2xl" />
                <h2 className="text-2xl font-bold text-sky-700">AI Summary Report Builder</h2>
              </div>

              <div className="space-y-4">
                {/* Event Details */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Event Details</h3>
                  <div>
                    <label className="block mb-1 text-sm font-semibold">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={reportData.title}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block mb-1 text-sm font-semibold">Date</label>
                      <input
                        type="date"
                        name="date"
                        value={reportData.date}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-semibold">Duration</label>
                      <input
                        type="text"
                        name="duration"
                        value={reportData.duration}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={reportData.location}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block mb-1 text-sm font-semibold">Volunteers</label>
                      <input
                        type="number"
                        name="volunteers"
                        value={reportData.volunteers}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-semibold">Waste Collected</label>
                      <input
                        type="text"
                        name="wasteCollected"
                        value={reportData.wasteCollected}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold">Summary</label>
                    <textarea
                      name="summary"
                      value={reportData.summary}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border rounded-lg px-4 py-2 resize-vertical"
                    />
                  </div>
                </div>

                {/* Beach Photos */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Beach Photos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-semibold flex items-center gap-2">
                        <MdImage className="text-xl text-red-600" />
                        Old Beach Photo
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "oldBeachPhoto")}
                        className="w-full text-sm"
                      />
                      {beachImages.oldBeachPhoto && (
                        <img
                          src={beachImages.oldBeachPhoto}
                          alt="Old Beach"
                          className="mt-2 w-full h-24 object-cover rounded border"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold flex items-center gap-2">
                        <MdImage className="text-xl text-green-600" />
                        New Beach Photo
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "newBeachPhoto")}
                        className="w-full text-sm"
                      />
                      {beachImages.newBeachPhoto && (
                        <img
                          src={beachImages.newBeachPhoto}
                          alt="New Beach"
                          className="mt-2 w-full h-24 object-cover rounded border"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleGenerate}
                    className="bg-sky-700 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition flex items-center gap-2"
                  >
                    <MdInsertChart />
                    Generate with AI
                  </button>
                  <button
                    onClick={handleDownloadReport}
                    className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition flex items-center gap-2"
                  >
                    <MdDownload />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Right Preview (FIXED height issue here) */}
            <div className="flex-1 bg-white rounded-xl shadow-inner border p-6">
              <div className="flex items-center gap-2 mb-3">
                <MdDescription className="text-gray-700 text-xl" />
                <h3 className="text-xl font-semibold text-gray-700">Live Report Preview</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border">
                {generateDetailedPreview()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AISummaryReports;
