import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Paint.css';

import brand1 from '../assets/berger (1).png';
import brand2 from '../assets/asian-paints-logo.png';
import InteriorPaints from './InteriorPaints';
import ExteriorPaints from './ExteriorPaints';
import WoodenPaints from './Woodenpaints';
import MetalPaints from './MetalPains';

const Paints = ({language}) => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      setScrolledPastHero(scrollY > heroHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    backgroundColor: scrolledPastHero ? '#fff' : 'transparent',
    boxShadow: scrolledPastHero ? '0 4px 6px rgba(2, 22, 49, 0.5)' : 'none',
    transition: 'all 0.3s ease',
  };

  const linkStyle = {
    color: scrolledPastHero ? '#000' : window.innerWidth <992? '#000': '#fff',
    transition: 'color 0.3s ease',
  };

  const brandStyle = {
    fontFamily:'unset',
     fontSize: '19px',
    color: scrolledPastHero ? '#000' : '#fff',
    transition: 'color 0.3s ease',
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top px-3 px-md-5" style={navbarStyle}>
        <a className="navbar-brand" href="/" style={brandStyle}>
         {language =='telugu'? 'శివ పెయింట్స్': ' Siva Paints'}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={scrolledPastHero ? { borderColor: '#000' } : { borderColor: '#fff' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{backgroundColor: window.innerWidth < 992 ? '#fff' : 'transparent',padding: window.innerWidth < 992 ? '1rem' : '',
    borderRadius: window.innerWidth < 992 ? '0 0 10px 10px' : '', }}>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/" style={linkStyle}>{language =='telugu'? 'హోం': 'Home'}</a></li>
           
             {/* Products Dropdown */}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="productsDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={linkStyle}
        >
          {language =='telugu'?'ప్రొడక్ట్స్ ': 'Products'}
        </a>
        <ul 
          className="dropdown-menu"
          aria-labelledby="productsDropdown"
          style={{ backgroundColor:'#fff', transition: '0.3s ease' }}
        >
          <li><a className="dropdown-item" href="/paints" style={{ color: '#000' }}>{language =='telugu'? 'పెయింట్లు':'Paints'}</a></li>
          <li><a className="dropdown-item" href="/electronics" style={{ color: '#000' }}>{language =='telugu'? 'ఎలక్ట్రానిక్స్':'Electronics'}</a></li>
          <li><a className="dropdown-item" href="/sanitary" style={{  color: '#000' }}>{language =='telugu'?  'సానిటరీ':'Sanitary'}</a></li>
          <li><a className="dropdown-item" href="/hardwareandagriculture" style={{ color:'#000' }}>{language =='telugu'? 'హార్డ్‌వేర్ & వ్యవసాయం':'Hardware & Agriculture'}</a></li>
          
        </ul>
      </li>
            <li className="nav-item"><a className="nav-link" href="/about" style={linkStyle}>{language =='telugu'?'వివరములు ':'About'}</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
<div className="hero-gradient">
  
    {/* Welcome Text */}
    

    {/* Logos Section */}
    <div className="row justify-content-center align-items-center hero-content">
      {/* Berger */}
      <div className="col-12 col-md-5 mb-4 mb-md-0 text-center">
        <img
          src={brand1}
          alt="Berger Paints"
          className="img-fluid berger"
         
        />
       
      </div>

      {/* Asian */}
      <div className="col-12 col-md-5 text-center">
        <img
          src={brand2}
          alt="Asian Paints"
          className="img-fluid asian"
         
        />
       
      </div>
    </div>
 
</div>



      <section id="about" style={{ minHeight: '100vh', background: '#eaeaea', padding: '5rem 2rem' }}>
        <h2 style={{fontFamily:'unset'}}>{language =='telugu'? 'ఇంటీరియర్':'Interior'}</h2>
       <InteriorPaints language={language}/>
      </section>

      <section id="products" style={{ minHeight: '100vh', background: '#f5f5f5', padding: '5rem 2rem' }}>
        <h2 style={{fontFamily:'unset'}}>{language =='telugu'? 'ఎక్సటెరియర్':'Exterior'}</h2>
        <ExteriorPaints language={language}/>
      </section>

      <section id="about" style={{ minHeight: '100vh', background: '#eaeaea', padding: '5rem 2rem' }}>
        <h2 style={{fontFamily:'unset'}}>{language == 'telugu'? 'వుడెన్': 'Wooden'}</h2>
       <WoodenPaints language={language}/>
      </section>

      <section id="products" style={{ minHeight: '100vh', background: '#f5f5f5', padding: '5rem 2rem' }}>
        <h2 style={{fontFamily:'unset'}}>{language =='telugu'? 'మెటల్':'Metal'}</h2>
        <MetalPaints language={language}/>
      </section>

      <section id="contact" style={{  background: '#ddd',  padding: '2rem 1rem', color:'black', textAlign:'center' }}>
         <h2 style={{ fontSize: '2rem',fontFamily:'unset', }}>{language === 'telugu' ?'మమ్మల్ని సంప్రదించడం':'Contact Us'}</h2>
    <div className="mt-3">
      <p className="mb-2" style={{ fontSize: '1rem' }}>{language === 'telugu' ? 'ఫోన్ :+91 8500992664':'Phone: +91 8500992664'}</p>
      <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
       {language =='telugu'? 'చిరునామా: మెయిన్ స్ట్రీట్, ఎన్టీఆర్ విగ్రహం దగ్గర, ఆరేపల్లి ముప్పాళ్ల, ఈపూర్ మండలం, పల్నాడు జిల్లా, ఆంధ్రప్రదేశ్ - 522661.': 'Address: Main Street, Near NTR Statue, Arepalli Muppalla, Ipur Mandal, Palnadu District, Andhra Pradesh - 522661.'}
      </p>
    </div>
      </section>

      </div>

  );
};

export default Paints;
