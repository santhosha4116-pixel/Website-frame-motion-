import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';


function Layout({ children, activePage, onNavigate }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF1ED] text-[#191E23] antialiased">
      
      {/* 1. Header */}
      <Header activePage={activePage} onNavigate={onNavigate} />

      {/* 2. Uniform Content Space */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </main>

      {/* 3. Footer */}
      <Footer />
      
    </div>
  );
}

export default Layout;
