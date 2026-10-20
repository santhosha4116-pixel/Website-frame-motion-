import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AIChat from './components/AIChat';
function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <Layout
      activePage={activePage}
      onNavigate={setActivePage}
    >
      {activePage === 'home' ? <Home /> : <AboutUs />}
      <AIChat />
    </Layout>
  );
}

export default App;
