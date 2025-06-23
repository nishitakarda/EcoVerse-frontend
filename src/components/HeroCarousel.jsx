import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, BarChart3 } from 'lucide-react';
import heroImage from '../assets/background.jpg';

const HeroCarousel = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />

        <div className="relative h-full flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 max-w-7xl mx-auto text-left">
          <div className="text-white md:max-w-xl lg:max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Join the Beach Warriors Community
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold mb-4">
              Together for Cleaner Oceans
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
              Join our global movement of ocean guardians dedicated to preserving the beauty of our beaches for future generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/dashboard/create-drive")}
                className="bg-[#4169E1] text-white px-6 py-3 rounded-md hover:bg-[#3050c0] transition-colors font-medium flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Explore Events
              </button>
              <button
                onClick={() => navigate("/impacts")}
                className="bg-[#F0FAFF] text-[#0077B6] px-6 py-3 rounded-md hover:bg-[#D0F0FF] transition-colors font-medium flex items-center shadow-sm border border-[#90E0EF]"
              >
                <BarChart3 className="w-5 h-5 mr-2 text-[#0077B6]" />
                View Impacts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
