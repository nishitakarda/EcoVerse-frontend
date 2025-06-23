import React from "react";
import {
  FaUsers,
  FaCalendarCheck,
  FaCalendarAlt,
  FaChartLine,
} from "react-icons/fa"; 

const iconMap = {
  users: <FaUsers className="text-lg" />,
  calendarCheck: <FaCalendarCheck className="text-lg" />,
  calendarAlt: <FaCalendarAlt className="text-lg" />,
  chartLine: <FaChartLine className="text-lg" />,
};

const DashboardMetrics = ({ metrics }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
    {metrics.map((metric, index) => (
      <div
        key={index}
        className="bg-white p-4 border border-gray-100 hover:shadow-md transition-shadow"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{metric.title}</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-800">
              {metric.value}
            </h3>
            <div className="flex items-center mt-2">
              <span className="text-xs font-medium text-green-600">
                ↗️ {metric.change}
              </span>
              <span className="text-xs text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
          <div className={`p-2 rounded-lg ${metric.color}`}>
            {iconMap[metric.icon]}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default DashboardMetrics;
