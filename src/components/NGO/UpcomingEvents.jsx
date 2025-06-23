import React from "react";
import {
  MdCalendarToday,
  MdAccessTime,
  MdLocationOn,
  MdGroups,
  MdBeachAccess,
  MdChecklist,
} from "react-icons/md";

const UpcomingEvents = ({ events }) => (
  <div className="lg:col-span-2">
    <div className="bg-white p-2 border-gray-100">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">
          Upcoming Beach Cleanup Events
        </h2>
        <button className="px-4 py-1.5 text-sm text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50">
          View All Events
        </button>
      </div>
      <div className="p-4 space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex gap-4 p-3  hover:shadow-md transition-shadow border border-blue-100"
          >
            {/* Icon Section */}
            <div className="w-28 h-24 flex items-center justify-center rounded-md bg-gradient-to-r bg-orange-300 text-white text-4xl">
              <MdBeachAccess />
            </div>

            {/* Event Content */}
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-800 mb-1">
                {event.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-2 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <MdCalendarToday className="text-base" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <MdAccessTime className="text-base" />
                  {event.time}
                </div>
                <div className="flex items-center gap-1">
                  <MdLocationOn className="text-base" />
                  {event.location}
                </div>
                <div className="flex items-center gap-1">
                  <MdGroups className="text-base" />
                  {event.volunteers}/{event.capacity} volunteers
                </div>
              </div>

              {/* Progress + Action */}
              <div className="flex items-center gap-4">
                <div className="w-full relative">
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-sky-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(event.volunteers / event.capacity) * 100}%` }}
                    />
                  </div>
                  <div className="absolute -top-6 right-0 text-xs text-sky-600 font-semibold">
                    {Math.round((event.volunteers / event.capacity) * 100)}%
                  </div>
                </div>

                <button className="flex items-center gap-1 px-3 py-1.5 bg-sky-600 text-white text-xs rounded-lg hover:bg-sky-600">
                  <MdChecklist className="text-sm" />
                  Manage
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default UpcomingEvents;