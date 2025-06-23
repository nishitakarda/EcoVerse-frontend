import React from 'react';

const Footer = () => {
  const quickLinks = [
    'Home', 'About Us', 'Events', 'Impact', 'Leaderboard', 'Contact'
  ];

  const programs = [
    'Beach Cleanups', 'Education & Awareness', 'Habitat Restoration',
    'Corporate Partnerships', 'Volunteer Program', 'Donations'
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#', color: 'text-[#8ee2ff]' },
    { icon: 'fab fa-twitter', href: '#', color: 'text-gray-400' },
    { icon: 'fab fa-instagram', href: '#', color: 'text-gray-400' },
    { icon: 'fab fa-youtube', href: '#', color: 'text-gray-400' }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#1a4f7c] to-[#2d7eb4] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">
                <span className="text-white">Beach</span>
                <span className="text-[#8ee2ff]">Warrior</span>
              </span>
            </div>
            <p className="text-white/80 mb-6">
              Together we can make a difference. Join our mission to protect and preserve our beautiful coastlines.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${social.color} hover:text-white transition-colors cursor-pointer`}
                >
                  <i className={`${social.icon} text-xl`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on events and impact stories.
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-[#00B8E6] w-full"
              />
              <button className="bg-[#00B8E6] text-white px-4 py-2 rounded-r-md hover:bg-[#0099cc] transition-colors whitespace-nowrap cursor-pointer">
                <i className="fas fa-paper-plane" />
              </button>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from BeachWarrior.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 BeachWarrior. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-500 hover:text-gray-400 text-sm transition-colors cursor-pointer"
              >
                {policy}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
