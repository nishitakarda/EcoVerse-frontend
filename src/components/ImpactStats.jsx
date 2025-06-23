import React from 'react';

const ImpactStats = () => {
  const stats = [
    {
      icon: 'fas fa-users',
      value: '25,000+',
      label: 'Active Volunteers',
    },
    {
      icon: 'fas fa-trash',
      value: '350',
      label: 'Tons of Waste Collected',
    },
    {
      icon: 'fas fa-map-marker-alt',
      value: '120',
      label: 'Beaches Protected',
    },
    {
      icon: 'fas fa-calendar-check',
      value: '1,500+',
      label: 'Events Completed',
    },
  ];

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Impact So Far
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Together with our global community, we've made significant progress in protecting our oceans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-[#00B8E6] text-4xl mb-4">
                <i className={stat.icon} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
