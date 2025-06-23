import React from "react";
import {
  FaUserPlus,
  FaCheckCircle,
  FaPlusCircle,
} from "react-icons/fa"; // React Icons package

const iconMap = {
  userPlus: <FaUserPlus className="text-base" />,
  checkCircle: <FaCheckCircle className="text-base" />,
  plusCircle: <FaPlusCircle className="text-base" />,
};

const RecentActivities = ({ activities }) => (
  <div className="bg-white p-6 text-black px-7 text-pretty">
    <div className="p-5 border-b border-gray-100">
      <h2 className="text-lg font-bold text-gray-800">Recent Activities</h2>
    </div>
    <div className="p-6">
      <ul className="space-y-5">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <div className={`p-2 rounded-lg ${activity.color} mt-0.5`}>
              <span>{iconMap[activity.icon]}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                {activity.activity}
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="w-full mt-6 py-2.5 text-sm text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
        View All Activities
      </button>
    </div>
  </div>
);

export default RecentActivities;
