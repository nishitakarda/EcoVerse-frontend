import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const volunteers = [
  { name: 'Aditi Sharma', status: 'Attended', ecoCoins: 10 },
  { name: 'Rahul Mehta', status: 'Missed', ecoCoins: 0 },
  { name: 'Zara Khan', status: 'Attended', ecoCoins: 10 },
];

const leaderboard = [
  { name: 'Zara Khan', ecoCoins: 120 },
  { name: 'Aditi Sharma', ecoCoins: 110 },
  { name: 'Rohan Patel', ecoCoins: 90 },
];

export default function VolunteerAnalysisPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-72 flex-1 min-h-screen bg-blue-50 overflow-y-auto">
        <Header />
        <main className="p-6 space-y-8">
          <h1 className="text-3xl font-bold text-center">Volunteer Analysis Dashboard</h1>

          {/* Attendance Table */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Event Attendance</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-sky-100 text-left">
                  <th className="p-3 font-semibold">Volunteer Name</th>
                  <th className="p-3 font-semibold">Status</th>
                  <th className="p-3 font-semibold">EcoCoins Earned</th>
                </tr>
              </thead>
              <tbody>
                {volunteers.map((volunteer, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3">{volunteer.name}</td>
                    <td className="p-3">{volunteer.status}</td>
                    <td className="p-3">{volunteer.ecoCoins}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Leaderboard */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Top Volunteers</h2>
            <div className="space-y-3">
              {leaderboard.map((entry, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border rounded-lg p-3 bg-gray-50"
                >
                  <span className="font-medium">{index + 1}. {entry.name}</span>
                  <span className="text-green-600 font-semibold">{entry.ecoCoins} EcoCoins</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
