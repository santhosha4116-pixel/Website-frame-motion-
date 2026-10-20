import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <Layout
      activePage={activePage}
      onNavigate={setActivePage}
    >
      {activePage === 'home' ? <Home /> : <AboutUs />}
    </Layout>
  );
}

export default App;
