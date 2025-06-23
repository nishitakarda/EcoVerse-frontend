import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-r from-[#1a4f7c] to-[#2d7eb4] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Join our community today and be part of the solution for cleaner oceans and healthier marine ecosystems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#8ee2ff] text-[#1a4f7c] px-8 py-4 rounded-md hover:bg-white transition-colors font-semibold text-lg">
            Join Beach Warriors
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors font-semibold text-lg">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
