
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const destinations = [
  {
    name: 'Explore the mountains',
    location: 'Nature & Adventure',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    size: 'large',
  },
  {
    name: 'Tropical escapes',
    location: 'Beaches & Islands',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80',
    size: 'small',
  },
  {
    name: 'Discover new cities',
    location: 'Culture & City Life',
    image:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&q=80',
    size: 'small',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

function Home() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      window.location.hash =
        `destinations?search=${encodeURIComponent(search.trim())}`;
    } else {
      window.location.hash = 'destinations';
    }
  };

  return (
    <div className="space-y-16 pb-12">

      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center pt-6">

        {/* Left: Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-[#E8F8F1] text-[#00AA6C] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 bg-[#00AA6C] rounded-full" />
            Your next adventure starts here
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#191E23] tracking-tight leading-[1.12]"
          >
            Discover places.
            <br />
            Create{' '}
            <span className="text-[#00AA6C]">
              unforgettable
            </span>{' '}
            memories.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#545454] leading-relaxed max-w-xl"
          >
            Find inspiring destinations, explore hidden gems, and
            plan your next journey with travel insights that help
            you explore the world with confidence.
          </motion.p>

          {/* Search Bar */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-3 bg-white border border-[#E6DED7] rounded-2xl sm:rounded-full p-2 shadow-sm max-w-xl focus-within:ring-2 focus-within:ring-[#00AA6C]/30"
          >
            <div className="flex items-center gap-3 flex-1 px-3">
              <svg
                className="w-5 h-5 text-[#00AA6C] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  strokeWidth="2"
                />
                <path
                  d="m16 16 4 4"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Where do you want to go?"
                aria-label="Search destinations"
                className="w-full min-w-0 py-3 text-sm text-[#191E23] outline-none placeholder:text-gray-400 bg-transparent"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#00AA6C] hover:bg-[#008F5B] text-white font-bold text-sm px-7 py-3.5 rounded-xl sm:rounded-full transition-colors"
            >
              Explore
            </motion.button>
          </motion.form>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-[#545454]"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#00AA6C] font-bold">✓</span>
              Discover new places
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#00AA6C] font-bold">✓</span>
              Explore with confidence
            </span>
          </motion.div>
        </motion.div>

        {/* Right: Travel Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="grid grid-cols-2 gap-4 h-[390px] sm:h-[470px]"
        >
          {/* Main Image */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
            className="relative col-span-2 overflow-hidden rounded-3xl border border-[#E6DED7] shadow-sm group"
          >
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85"
              alt="Beautiful scenic road trip through the mountains"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white">
              <span className="inline-block bg-[#00AA6C] text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                FIND YOUR NEXT ESCAPE
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold">
                The world is waiting
              </h2>

              <p className="text-sm text-white/85 mt-2">
                New places. New stories. Endless possibilities.
              </p>
            </div>
          </motion.div>

          {/* Bottom Left Image */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-2xl border border-[#E6DED7] group"
          >
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
              alt="Beautiful coastal travel destination"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

            <p className="absolute bottom-3 left-3 right-2 text-white font-bold text-sm">
              Coastal escapes
            </p>
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-2xl border border-[#E6DED7] group"
          >
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80"
              alt="Friends enjoying a trip together"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

            <p className="absolute bottom-3 left-3 right-2 text-white font-bold text-sm">
              Shared adventures
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Popular Travel Categories */}
      <section id="destinations" className="space-y-7 scroll-mt-24">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AA6C]">
              Find your inspiration
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-[#191E23] mt-2">
              Explore your kind of getaway
            </h2>

            <p className="text-sm text-[#545454] mt-2">
              Find a destination that matches your travel style.
            </p>
          </div>

          <span className="text-sm font-semibold text-[#00AA6C]">
            Start exploring <span aria-hidden="true">→</span>
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {destinations.map((destination) => (
            <motion.article
              key={destination.name}
              variants={itemVariants}
              whileHover={{
                y: -7,
                boxShadow: '0 16px 30px rgba(0, 170, 108, 0.12)',
              }}
              className="bg-white border border-[#E6DED7] rounded-3xl overflow-hidden group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00AA6C]">
                  {destination.location}
                </span>

                <h3 className="text-lg font-bold text-[#191E23] mt-2">
                  {destination.name}
                </h3>

                <a
                  href="#destinations"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-[#00AA6C] hover:text-[#008F5B] transition-colors"
                >
                  Discover more <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* 3. Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#191E23] to-[#2B353E] p-7 sm:p-10 lg:p-12 text-white"
      >
        <div className="absolute -right-16 -top-20 w-64 h-64 rounded-full border-[35px] border-[#00AA6C]/15" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 bg-[#00AA6C]/20 border border-[#00AA6C]/30 text-[#34E0A1] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            Make every journey count
          </span>

          <h2 className="text-2xl sm:text-4xl font-black leading-tight">
            Your next great travel story starts today.
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Get inspired, discover new destinations, and find your
            own way to experience the world with TripMate.
          </p>

          <motion.a
            href="#destinations"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#00AA6C] hover:bg-[#008F5B] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
          >
            Start exploring <span aria-hidden="true">→</span>
          </motion.a>
        </div>
      </motion.section>

    </div>
  );
}

export default Home;

