import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Volunteer",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20smiling%20young%20woman%20with%20natural%20makeup%2C%20casual%20beach%20attire%2C%20friendly%20expression%2C%20outdoor%20lighting%2C%20ocean%20background%2C%20environmental%20activist%20portrait%2C%20genuine%20and%20approachable&width=100&height=100&seq=10&orientation=squarish",
      quote:
        "Being part of Beach Warriors has been incredibly rewarding. I've met amazing people while making a real difference for our oceans.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Community Leader",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20smiling%20middle-aged%20Asian%20man%2C%20casual%20outdoor%20clothing%2C%20friendly%20expression%2C%20natural%20lighting%2C%20environmental%20activist%20portrait%2C%20genuine%20and%20approachable%2C%20beach%20background&width=100&height=100&seq=11&orientation=squarish",
      quote:
        "I've organized over 20 cleanups with Beach Warriors. The platform makes it easy to mobilize volunteers and track our collective impact.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "School Program Coordinator",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20smiling%20Latina%20woman%20in%20her%2030s%2C%20casual%20professional%20attire%2C%20friendly%20expression%2C%20natural%20lighting%2C%20environmental%20educator%20portrait%2C%20genuine%20and%20approachable%2C%20coastal%20background&width=100&height=100&seq=12&orientation=squarish",
      quote:
        "The educational resources provided by Beach Warriors have transformed how our students understand ocean conservation. They're now leading their own initiatives!",
    },
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from the people who are making a difference with Beach Warriors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="text-[#00B8E6]">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border-2 border-[#00B8E6] text-[#00B8E6] px-8 py-3 rounded-md hover:bg-[#e6f9ff] transition-colors font-medium whitespace-nowrap cursor-pointer">
            Read More Stories <i className="fas fa-arrow-right ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
