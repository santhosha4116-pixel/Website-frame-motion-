import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  // Tracks current page ('about' or 'home')
  const [activePage, setActivePage] = useState('about');

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {activePage === 'home' ? <Home /> : <AboutUs />}
    </Layout>
  );
}

export default App;
