import React from 'react';
import { motion } from 'framer-motion';

// TripAdvisor Style Footer
function Footer() {
  return (
    <footer className="bg-[#FAF1ED] border-t border-[#E6DED7] text-[#191E23] mt-auto">
      {/* Top green gradient line */}
      <div className="h-1 bg-gradient-to-r from-[#00AA6C] via-[#34E0A1] to-[#00AA6C]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#191E23] mb-3">About TripMate</h4>
            <ul className="space-y-2 text-sm text-[#545454]">
              <li><a href="#about" className="hover:text-[#00AA6C] transition">About Us</a></li>
              <li><a href="#press" className="hover:text-[#00AA6C] transition">Press & Media</a></li>
              <li><a href="#careers" className="hover:text-[#00AA6C] transition">Careers</a></li>
              <li><a href="#trust" className="hover:text-[#00AA6C] transition">Trust & Safety</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#191E23] mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-[#545454]">
              <li><a href="#reviews" className="hover:text-[#00AA6C] transition">Write a Review</a></li>
              <li><a href="#add" className="hover:text-[#00AA6C] transition">Add a Place</a></li>
              <li><a href="#choice" className="hover:text-[#00AA6C] transition">Travelers' Choice</a></li>
              <li><a href="#guides" className="hover:text-[#00AA6C] transition">Travel Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#191E23] mb-3">Partner With Us</h4>
            <ul className="space-y-2 text-sm text-[#545454]">
              <li><a href="#business" className="hover:text-[#00AA6C] transition">Business Advantage</a></li>
              <li><a href="#hotels" className="hover:text-[#00AA6C] transition">Hotel Owners</a></li>
              <li><a href="#sponsored" className="hover:text-[#00AA6C] transition">Sponsored Placements</a></li>
              <li><a href="#affiliate" className="hover:text-[#00AA6C] transition">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Brand Info & 1 Billion Badge */}
          <div className="space-y-3">
            <span className="text-2xl font-extrabold tracking-tight text-[#191E23]">
              trip<span className="text-[#00AA6C]">mate</span>
            </span>
            <p className="text-xs text-[#545454] leading-relaxed">
              The world's trusted travel guidance platform. Empowering travelers to make every trip their best trip.
            </p>
            <div className="inline-flex items-center gap-2 bg-white border border-[#E0D8CF] rounded-full px-3 py-1.5 text-xs font-semibold text-[#191E23] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00AA6C]"></span>
              <span>1 Billion+ Honest Reviews</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E0D8CF] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} TripMate LLC. All rights reserved.
          </div>

          {/* Interactive Social Buttons */}
          <div className="flex gap-2">
            {['Facebook', 'Instagram', 'Twitter'].map((network) => (
              <motion.button
                key={network}
                whileHover={{ scale: 1.15, backgroundColor: '#00AA6C', color: '#ffffff', borderColor: '#00AA6C' }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-700 transition-colors"
              >
                {network[0]}
              </motion.button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
