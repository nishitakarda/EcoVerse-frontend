import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdPinDrop,
  MdInsights,
  MdAutoFixHigh,
  MdGroups,
  MdEmojiEvents,
  MdAssignment,
  MdSettings,
} from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();
  const current = location.pathname;

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
    { id: "drives", label: "Create Drives", icon: <MdPinDrop />, path: "/dashboard/create-drive" },
    { id: "reports", label: "AI Summary Reports", icon: <MdInsights />, path: "/dashboard/ai-reports" },
    { id: "content", label: "AI Content Creation", icon: <MdAutoFixHigh />, path: "/dashboard/ai-content" },
    { id: "volunteers", label: "Volunteer Analysis", icon: <MdGroups />, path: "/dashboard/volunteer-analysis" },
    { id: "leaderboards", label: "Leaderboards", icon: <MdEmojiEvents />, path: "/dashboard/leaderboards" },
    { id: "attendance", label: "Attendance Tracking", icon: <MdAssignment />, path: "/dashboard/attendance" },
  ];

  return (
    <div className="w-72 bg-blue-50 text-black flex flex-col h-screen fixed shadow-md border-r border-gray-300 z-50">
      <div className="p-6 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-xl font-bold">Beach Warrior</h1>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                  current === item.path
                    ? "bg-sky-600 text-black"
                    : "text-black-300 hover:bg-sky-400"
                }`}
              >
                <span className="w-6 text-lg">{item.icon}</span>
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-sky-700 flex items-center justify-center text-white">
            <span className="font-medium">AK</span>
          </div>
          <div>
            <p className="text-sm font-medium">Anjali Kumar</p>
            <p className="text-xs text-gray-400">NGO Administrator</p>
          </div>
          <button className="ml-auto text-gray-400 hover:text-white text-xl">
            <MdSettings />
          </button>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gray-300"></div>
    </div>
  );
};

export default Sidebar;
