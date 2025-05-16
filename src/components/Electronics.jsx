import React from "react";
import './Electronics.css';

import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import item1 from '../assets/electronics/bulb.jpg';
import item2 from '../assets/electronics/downlight.webp';
import item3 from '../assets/electronics/maverick_1.webp';
import item4 from '../assets/electronics/mcb-and-dp.jpg';
import item5 from '../assets/electronics/switches.jpg';
import item6 from '../assets/electronics/wires.jpg';
import item7 from '../assets/electronics/image.webp';
import item8 from '../assets/electronics/download.jpg';
import item9 from '../assets/electronics/download (12).jpg';
import item10 from '../assets/electronics/download (19).jpg';
import item11 from '../assets/electronics/download (20).jpg';
import Goldmedal from "./Goldmedal";
import Havells from "./Havells";
import Cromption from "./Cromption";
import Philips from "./Philips";
import Orient from "./Orient";
import OtherElectronics from "./OtherElectronics";

const circleStyle = (top, left) => ({
  position: 'absolute',
  top,
  left,
  width: '180%',
  height: '160%',
  borderRadius: '50%',
  backgroundColor: 'white',
  border: '2px solid black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Electronics =({language}) =>{


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
  boxShadow: scrolledPastHero ? '0 4px 6px rgba(0, 74, 173, 0.5)' : 'none',
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
      <li className="nav-item">
        <a className="nav-link" href="/" style={linkStyle}>{language =='telugu'? 'హోం': 'Home'}</a>
      </li>
    

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

      <li className="nav-item">
        <a className="nav-link" href="/about" style={linkStyle}>{language =='telugu'?'వివరములు ':'About'}</a>
      </li>
    </ul>
  </div>
</nav>

    {/* Hero Section */}
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center text-center px-3"
      style={{
        width: '100vw',
        minHeight: '80vh',
        paddingTop: '60px',
        background: 'linear-gradient(135deg,rgb(12, 10, 17) 25%,rgb(174, 87, 255) 100%)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
   <div className="d-flex flex-md-row flex-column justify-content-between align-items-center w-100" style={{ maxWidth: '1200px' }}>
    
    {/* LEFT TEXT */}
    <div className="hero-text" style={{ maxWidth: '500px' }}>
      <h1 className="fw-bold mb-3">{language =='telugu'? 'మీ ఇంటి కోసం నమ్మకమైన ఎలక్ట్రానిక్స్!': 'Reliable Home Electronics for Everyday Comfort'}</h1>
      <p className="lead">{language =='telugu'? 'వైర్లు, కూలర్లు, ఫ్యాన్లు, లైట్లు — అవసరమైనవి అన్నీ ఒకే చోట, మీ రోజువారీ సౌకర్యానికి.':'From durable wires to coolers, fans, and lighting essentials — we’ve got everything you need to power and refresh your home.'}
      </p>
    </div>

    {/* RIGHT IMAGES */}
    <div className="hero-images position-relative" style={{ width: '400px', height: '400px', flexShrink: 0 }}>
    <div  className="circle-container" style={circleStyle('-37%', '-10%')}>
     <img src={item1} style={{ position: 'absolute', top: '5%', left: '45%', width: '13%',  }} alt="" />
    <img src={item2} style={{ position: 'absolute', top: '10%', left: '25%', width: '14%',  }} alt="" />
    <img src={item3} style={{ position: 'absolute', top: '25%', left: '5%', width: '20%', }} alt="" />
    <img src={item4} style={{ position: 'absolute', top: '55%', left: '8%', width: '15%', }} alt="" />
    <img src={item5} style={{ position: 'absolute', top: '65%', left: '25%', width: '15%',  }} alt="" />
    <img src={item6} style={{ position: 'absolute', top: '70%', left: '45%', width: '15%', }} alt="" />
    <img src={item7} style={{ position: 'absolute', top: '42%', left: '62%', width: '22%',  }} alt="" />
    <img src={item8} style={{ position: 'absolute', top: '20%', left: '65%', width: '25%', }} alt="" />
    <img src={item9} style={{ position: 'absolute', top: '30%', left: '45%', width: '20%', }} alt="" />
    <img src={item10} style={{ position: 'absolute', top: '35%', left: '25%', width: '15%',  }} alt="" />
    <img src={item11} style={{ position: 'absolute', top: '8%', left: '60%', width: '10%', }} alt="" />
  </div>
     
    </div>

    {/* This will be shown only on mobile (hidden on larger screens) */}
<div className="mobile-image-grid d-md-none" style={{
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px',
  padding: '1rem',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  maxWidth: '320px',
  margin: '0 auto',
}}>
  <img src={item1} alt="" style={{ width: '22%', borderRadius: '12px' }} />
  <img src={item2} alt="" style={{ width: '22%', borderRadius: '12px' }} />
  <img src={item11} alt="" style={{ width: '22%', borderRadius: '12px' }} />
  <img src={item4} alt="" style={{ width: '22%', borderRadius: '12px' }} />
  <img src={item5} alt="" style={{ width: '22%', borderRadius: '12px' }} />
  <img src={item6} alt="" style={{ width: '22%', borderRadius: '12px' }} />
  <img src={item10} alt="" style={{ width: '22%', borderRadius: '12px' }} />
  <img src={item8} alt="" style={{ width: '22%', borderRadius: '12px' }} />
  <img src={item9} alt="" style={{ width: '32%', borderRadius: '12px' }} />
  <img src={item7} alt="" style={{ width: '32%', borderRadius: '12px' }} />
  <img src={item3} alt="" style={{ width: '25%', borderRadius: '12px' }} />
</div>

  </div>    
    </section>

     <section id="about" style={{ minHeight: '40vh',  background: 'linear-gradient(165deg,rgb(250, 249, 252) 20%,rgb(196, 3, 3) 100%)', padding: '5rem 2rem' }}>
           <Goldmedal language={language}/>
          </section>

           <section id="about" style={{ minHeight: '40vh',  background: 'linear-gradient(165deg,rgb(250, 249, 252) 20%,rgb(2, 26, 131) 100%)', padding: '5rem 2rem' }}>
       <Cromption language={language}/>
      </section>

          <section id="about" style={{ minHeight: '40vh',  background: 'linear-gradient(165deg,rgb(250, 249, 252) 20%,rgb(223, 87, 87) 100%)', padding: '5rem 2rem' }}>
       <Havells language={language}/>
      </section>

     <section id="about" style={{ minHeight: '40vh',  background: 'linear-gradient(165deg,rgb(250, 249, 252) 20%,rgb(7, 120, 248) 100%)', padding: '5rem 2rem' }}>
       <Philips language={language}/>
      </section>

      <section id="about" style={{ minHeight: '40vh',  background: 'linear-gradient(165deg,rgb(250, 249, 252) 20%,rgb(231, 111, 12) 100%)', padding: '5rem 2rem' }}>
       <Orient language={language}/>
      </section>
      
      <OtherElectronics language={language}/>

      {/* Contact Section */}
<section id="contact" style={{ padding: '2rem 1rem', color:'white', textAlign:'center',  background: 'linear-gradient(155deg,rgb(12, 10, 17) 45%,rgb(174, 87, 255) 100%)'}}>
  <div className="container">
     <h2 style={{ fontSize: '2rem',fontFamily:'unset', }}>{language === 'telugu' ?'మమ్మల్ని సంప్రదించడం':'Contact Us'}</h2>
    <div className="mt-3">
      <p className="mb-2" style={{ fontSize: '1rem' }}>{language === 'telugu' ? 'ఫోన్ :+91 8500992664':'Phone: +91 8500992664'}</p>
      <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
        {language =='telugu'? 'చిరునామా: మెయిన్ స్ట్రీట్, ఎన్టీఆర్ విగ్రహం దగ్గర, ఆరేపల్లి ముప్పాళ్ల, ఈపూర్ మండలం, పల్నాడు జిల్లా, ఆంధ్రప్రదేశ్ - 522661.': 'Address: Main Street, Near NTR Statue, Arepalli Muppalla, Ipur Mandal, Palnadu District, Andhra Pradesh - 522661.'}
      </p>
    </div>
  </div>
</section>
</div>
    );
    }

export default Electronics;
