// components/Header.jsx
import React from 'react';
import './Header.css';

const Header = ({ language, toggleLanguage }) => {
  return (
    <div className="language-toggle-wrapper">
      <div className="language-toggle">
        <span>English</span>
        <label className="switch">
          <input type="checkbox" checked={language === 'telugu'} onChange={toggleLanguage} />
          <span className="slider round"></span>
        </label>
        <span>తెలుగు</span>
      </div>
    </div>
  );
};

export default Header;
