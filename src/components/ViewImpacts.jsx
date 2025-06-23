import React from "react";
import {
  FaUserFriends,
  FaRecycle,
  FaMapMarkedAlt,
  FaFish,
} from "react-icons/fa";
import { MdAssessment } from "react-icons/md";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ViewImpacts = () => {
  const chartData = {
    labels: ["Pollution Removed (kg)", "Water Clarity (%)", "Marine Life Rescued"],
    datasets: [
      {
        label: "Cleanup Metrics",
        data: [540, 75, 25],
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Beach Cleanup Impact" },
    },
  };

  return (
    <div className="bg-blue-50 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-sky-800 mb-4">View Impacts</h1>

        {/* Summary Reports */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Summary Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Juhu Beach Cleanup", "Versova Drive", "Chowpatty Restoration"].map((title, idx) => (
              <div key={idx} className="bg-white border border-blue-100 rounded-xl shadow p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <MdAssessment className="text-sky-600 text-2xl" />
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="text-sm text-gray-600">
                  {title} was conducted successfully with high volunteer turnout and visible improvement in cleanliness.
                </p>
                <div className="text-right">
                  <button className="text-sm font-medium text-sky-600 hover:underline">
                    View Full Report →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chart + Stats */}
        <section className="flex flex-col lg:flex-row gap-8">
          {/* Chart */}
          <div className="flex-1 bg-white p-6 rounded-xl shadow border">
            <Bar data={chartData} options={chartOptions} />
          </div>

          {/* Impact Stats */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ImpactBox icon={<FaUserFriends />} label="Volunteers" value="87" color="bg-sky-600" />
            <ImpactBox icon={<FaRecycle />} label="Waste Collected" value="540 kg" color="bg-green-500" />
            <ImpactBox icon={<FaMapMarkedAlt />} label="Area Cleaned" value="1.2 km" color="bg-yellow-500" />
            <ImpactBox icon={<FaFish />} label="Marine Life Saved" value="25+" color="bg-purple-600" />
          </div>
        </section>
      </div>
    </div>
  );
};

// Reusable Impact Box
const ImpactBox = ({ icon, label, value, color }) => (
  <div className={`rounded-xl shadow-md p-4 flex items-center gap-4 ${color} text-white`}>
    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

export default ViewImpacts;
