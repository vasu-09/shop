import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Paints from './components/Paints';
import Electronics from './components/Electronics';
import Sanitary from './components/Sanitory';
import HardwareAndAgriculture from './components/Hardware';
import About from './About';
import Header from './components/Header';

const App = () => {

  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'english' ? 'telugu' : 'english'));
  };

  return (
    <Router>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/paints" element={<Paints language={language} />} />
        <Route path="/electronics" element={<Electronics language={language} />} />
        <Route path="/sanitary" element={<Sanitary language={language} />} />
        <Route path="/hardwareandagriculture" element={<HardwareAndAgriculture language={language} />} />
        <Route path="/about" element={<About language={language} />} />
      </Routes>
    </Router>
  );
};

export default App;
