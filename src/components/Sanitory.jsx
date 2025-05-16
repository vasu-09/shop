import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import item1 from '../assets/sanitory/s10131641.png';
import Fcera from './Fcera';
import Cera from './Cera';
import Taps from './Taps';
import SteelShink from './SteelShink';
import PlasticTaps from './PlasticTaps';
import Pedastal from './Pedastal';

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 480);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return isMobile;
  };

const Sanitary = ({language}) => {

  const isMobile = useMobile();
  
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
  color: scrolledPastHero ? '#000' : '#000',
  transition: 'color 0.3s ease',
};

const brandStyle = {
  fontFamily:'unset',
   fontSize: '19px',
  color: scrolledPastHero ? '#000' : '#000',
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
    borderRadius: window.innerWidth < 992 ? '0 0 10px 10px' : '',}}>
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
        background: 'radial-gradient(circle at 95% 5%,rgb(36, 93, 180)  0%, transparent 60%), linear-gradient(to bottom left, #f0f4f8  15%,rgb(150, 198, 247)  100%)',
        color: 'black',
        overflow: 'hidden',
      }}
    >
   <div className="d-flex flex-md-row justify-content-between align-items-center w-100" style={{ maxWidth: '1200px' }}>
    {/* LEFT TEXT */}
    <div style={{ maxWidth: '500px' }}>
      <h1 className="fw-bold mb-3">{language == 'telugu'? 'ఆధునిక జీవనశైలికి అనుగుణమైన ప్రీమియం సానిటరీ వేర్': 'Premium Sanitary Ware for Modern Living'}</h1>
      <p className="lead"> {language == 'telugu'? 'సింకులు, ట్యాపులు, వాష్ బేసిన్లు మరియు మరెన్నో — నమ్మదగిన నాణ్యత, మీరు ఇష్టపడే ధరల్లో.':" Discover sinks, taps, basins, and more – quality you can trust at prices you'll love"}
      </p>
    </div>

    {/* RIGHT IMAGES */}
    <div
      className="position-relative"
      style={{ width: '400px', height: '400px', flexShrink: 0 }}
    >
     <img src={item1} style={{ position: 'absolute', width: isMobile? '100%':'140%', left: isMobile? '0':'10%'  }} alt="" />
    
  </div>
     
  </div>    
    </section>


    <section id="about" style={{ minHeight: '40vh', padding: '5rem 2rem'}}>
    <Fcera/>
    </section>  

     <section id="about" style={{ minHeight: '40vh',  background: 'radial-gradient(circle at 95% 5%,rgb(118, 159, 219)  0%, transparent 60%), linear-gradient(to bottom left, #f0f4f8  15%,rgb(150, 198, 247)  100%)', padding: '5rem 2rem' }}>
    <Cera/>
    </section>  
    <Taps/>
    <PlasticTaps language={language}/>
    <SteelShink language={language}/>
    <Pedastal language={language}/>
    <section id="contact" style={{ padding: '2rem 1rem', color:'white', textAlign:'center',  background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'}}>
  <div className="container ">
    <h2 style={{ fontSize: '2rem',fontFamily:'unset' }}>{language === 'telugu' ?'మమ్మల్ని సంప్రదించడం':'Contact Us'}</h2>
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

export default Sanitary;