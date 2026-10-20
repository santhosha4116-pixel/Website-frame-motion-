import React from 'react';
import { motion } from 'framer-motion';

// Statistics data
const stats = [
  { value: '1 Billion+', label: 'Reviews & Traveler Opinions' },
  { value: '8 Million+', label: 'Hotels & Accommodations' },
  { value: '190+', label: 'Countries & Regions' },
  { value: '450M+', label: 'Monthly Global Explorers' },
];

// Travel Pillars data with images
const pillars = [
  {
    title: 'Authentic Traveler Reviews',
    description: 'Every review comes from real travelers who have experienced the food, beds, and trails firsthand.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=80',
    tag: 'Honest Guidance',
  },
  {
    title: 'Uncover Hidden Local Gems',
    description: 'From quiet trattorias in Rome to secluded coves in Bali, discover places you won’t find in brochures.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80',
    tag: 'Curated Experiences',
  },
  {
    title: 'Confidence in Every Booking',
    description: 'Compare verified prices across top suppliers and book with peace of mind backed by millions of ratings.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80',
    tag: 'Trusted Stays',
  },
];

function AboutUs() {
  return (
    <div className="space-y-12 pb-12">
      
      {/* 1. Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <span className="inline-block bg-[#E8F8F1] text-[#00AA6C] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          About TripMate
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-[#191E23] tracking-tight leading-tight">
          Guiding travelers to extraordinary journeys &amp;{' '}
          <span className="text-[#00AA6C]">honest discoveries</span>.
        </h1>
        <p className="text-base sm:text-lg text-[#545454] leading-relaxed">
          TripMate connects half a billion explorers each month with authentic advice, 
          trusted reviews, and unforgettable worldwide experiences.
        </p>
      </motion.div>

      {/* 2. Visual Photo Showcase (TripAdvisor Image Collage) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Main Large Image */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-7 relative group overflow-hidden rounded-3xl shadow-sm border border-[#E6DED7] bg-white h-80 sm:h-96"
        >
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
            alt="Scenic mountain road trip"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="bg-[#00AA6C] text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">
              Travelers' Choice Best of the Best
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">Inspiring Adventures Worldwide</h3>
            <p className="text-xs sm:text-sm text-gray-200 mt-1">
              Empowering wanderers to explore with complete confidence.
            </p>
          </div>
        </motion.div>

        {/* Right Stacked 2 Images */}
        <div className="md:col-span-5 flex flex-col gap-5">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative group overflow-hidden rounded-3xl shadow-sm border border-[#E6DED7] bg-white h-44 sm:h-48"
          >
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
              alt="Community traveling together"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5 text-white">
              <div>
                <span className="text-xs font-semibold text-[#34E0A1] uppercase">Community First</span>
                <p className="text-sm font-bold">1+ Billion Real Traveler Insights</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative group overflow-hidden rounded-3xl shadow-sm border border-[#E6DED7] bg-white h-44 sm:h-48"
          >
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Tropical beach vacation"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5 text-white">
              <div>
                <span className="text-xs font-semibold text-[#34E0A1] uppercase">Global Destinations</span>
                <p className="text-sm font-bold">Over 8 Million Places &amp; Accommodations</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* 3. The 4 Stats Cards with Interactive Color Shift on Touch/Hover */}
      <div>
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00AA6C]">
            By The Numbers
          </span>
          <h2 className="text-2xl font-black text-[#191E23] mt-1">
            Trusted by Travelers Everywhere
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              // Framer Motion: while touching/hovering, smoothly change color, lift, and glow
              whileHover={{ 
                scale: 1.05, 
                y: -6, 
                backgroundColor: '#00AA6C', 
                borderColor: '#00AA6C',
                boxShadow: '0 12px 24px rgba(0, 170, 108, 0.28)' 
              }}
              whileTap={{ scale: 0.95, backgroundColor: '#008756' }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-white border border-[#E6DED7] rounded-2xl p-6 text-center shadow-xs cursor-pointer group transition-colors duration-200"
            >
              {/* Value changes to white when touched/hovered */}
              <div className="text-3xl sm:text-4xl font-black text-[#00AA6C] group-hover:text-white transition-colors duration-200 tracking-tight">
                {stat.value}
              </div>
              {/* Label changes to soft white when touched/hovered */}
              <div className="text-xs sm:text-sm font-semibold text-[#545454] group-hover:text-white/90 transition-colors duration-200 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Travel Pillars with Touch/Hover Elevation & Images */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00AA6C]">
            Our Travel Pillars
          </span>
          <h2 className="text-3xl font-black text-[#191E23] mt-1">
            Why Travelers Choose TripMate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              // Framer Motion: lift up and add vibrant border on touch/hover
              whileHover={{ 
                y: -8, 
                borderColor: '#00AA6C',
                boxShadow: '0 16px 30px rgba(0, 170, 108, 0.14)' 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-[#E6DED7] rounded-3xl overflow-hidden shadow-xs cursor-pointer flex flex-col group transition-all"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/95 text-[#191E23] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {pillar.tag}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#191E23] group-hover:text-[#00AA6C] transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#545454] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#00AA6C]">
                  <span>Explore guide</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. Trust & Safety Guarantee Banner */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-br from-[#191E23] to-[#2B353E] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden"
      >
        <div className="max-w-2xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#00AA6C]/20 border border-[#00AA6C]/30 text-[#34E0A1] text-xs font-bold px-3 py-1 rounded-full">
            <span>🛡️ Our Trust &amp; Safety Promise</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Honest reviews you can bank on for your bucket list
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Every review submitted to TripMate undergoes fraud detection checks 
            so that what you read reflects authentic traveler journeys.
          </p>

          <div className="border-l-3 border-[#00AA6C] pl-4 text-sm italic text-[#FAF1ED]">
            “Travel recommendations shouldn’t come from algorithms alone — they come from genuine human journeys.”
          </div>
        </div>
      </motion.div>

    </div>
  );
}

export default AboutUs;
