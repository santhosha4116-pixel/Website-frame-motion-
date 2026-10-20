import React from 'react';
import { motion } from 'framer-motion';

// TripAdvisor Style Header
function Header({ activePage, onNavigate }) {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        
        {/* TripAdvisor Logo with Owl Eyes */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="transition-transform group-hover:scale-105">
            <svg width="34" height="24" viewBox="0 0 34 24" fill="none">
              <circle cx="9" cy="12" r="7" stroke="#00AA6C" strokeWidth="2.5" fill="#FAF1ED" />
              <circle cx="25" cy="12" r="7" stroke="#00AA6C" strokeWidth="2.5" fill="#FAF1ED" />
              <circle cx="9" cy="12" r="2.8" fill="#191E23" />
              <circle cx="25" cy="12" r="2.8" fill="#191E23" />
              <path d="M14 6L17 3L20 6" stroke="#00AA6C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 12L17 14L18 12" stroke="#191E23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-[#191E23]">
            trip<span className="text-[#00AA6C]">mate</span>
          </span>
        </div>

        {/* Search Bar Input */}
        <div className="hidden md:flex items-center flex-1 max-w-sm bg-gray-100 hover:bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#00AA6C] focus-within:border-transparent rounded-full px-4 py-2 border border-gray-200 transition-all gap-2">
          <svg className="text-gray-500 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search hotels, destinations, reviews..."
            className="w-full bg-transparent text-sm text-[#191E23] outline-none placeholder-gray-500"
          />
        </div>

        {/* Navigation Tabs with Animated Indicator */}
        <nav className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('home')}
            className={`relative px-4 py-2 rounded-full text-sm font-semibold transition ${
              activePage === 'home'
                ? 'text-[#00AA6C]'
                : 'text-gray-700 hover:text-[#00AA6C]'
            }`}
          >
            Home
            {activePage === 'home' && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00AA6C] rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
          </button>

          <button
            onClick={() => onNavigate('about')}
            className={`relative px-4 py-2 rounded-full text-sm font-semibold transition ${
              activePage === 'about'
                ? 'text-[#00AA6C]'
                : 'text-gray-700 hover:text-[#00AA6C]'
            }`}
          >
            About Us
            {activePage === 'about' && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#00AA6C] rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
          </button>

          {/* Animated Sign In Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 bg-[#191E23] hover:bg-black text-white px-5 py-2 rounded-full text-sm font-semibold shadow-xs transition"
          >
            Sign in
          </motion.button>
        </nav>

      </div>
    </motion.header>
  );
}

export default Header;
