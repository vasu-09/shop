import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

import './CardLayout.css';

import brand1 from '../assets/berger.jpg';
import brand2 from '../assets/asian-paints.png';
import brand3 from '../assets/pipe-fittings.webp';
import brand4 from '../assets/lights.png';
import brand5 from '../assets/switches.jpg';
import brand6 from '../assets/487334792_1175450791260192_3673409991611306083_n.jpg';


const useMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 480);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return isMobile;
  };

const BrandSection = ({language}) => {

    const isMobile = useMobile();
      
  return (


<section id='brands' className="w-full bg-white py-5" style={{ marginTop:'50px'}}>
<h2 className="mb-4" style={{ fontFamily:'unset', fontSize: '36px', textAlign:'center' }}>{language == 'english'? 'Brands' : 'బ్రాండ్లు'}</h2>
<div className="container my-5">
  <div className="card-layout-wrapper">

    {/* Top Row */}
    <a href="/paints" style={{ textDecoration: 'none' }}>
    <div className="brand-card "  style={{ 
    marginBottom: isMobile ? '10px' : '-160px', 
    maxWidth:isMobile ? '90%' : '80%' 
  }}>
        <div className='custome-card'>
      <img src={brand1} alt="Berger Paints" />
      </div>
      <h5 className="gradient-orange-pink mt-2" >{language == 'english'? 'Berger Paints' : 'బెర్జర్ పెయింట్స్'} </h5>
    </div>
    </a>

    <a href="/paints" style={{ textDecoration: 'none' }}>
    <div className="brand-card " style={{ marginBottom: isMobile ? '10px' : '-160px', maxWidth:isMobile ? '250%' : '90%'}}>
        <div className='custom-card'>
      <img src={brand2} alt="Asian Paints" />
      </div>
      <h5 className="gradient-orange-red mt-2" > {language == 'english'? 'Asian Paints' : 'ఏసియన్ పెయింట్స్'} </h5>
    </div>
    </a>
    <a href="/hardwareandagriculture" style={{ textDecoration: 'none' }}>
    <div className="brand-card " style={{marginBottom: isMobile ? '-10px' : '-20px', maxWidth: isMobile ?'100%':'80%'}}>
        <div className='custom-card'>
      <img src={brand3} alt="Avonplast" />
      </div>
      <h5 className=" gradient-orange-blue mt-2" >{language == 'english'? 'Avonplast' : 'అవాన్‌ప్లాస్ట్'}</h5>
    </div>
    </a>
    

    {/* Bottom Row */}
    <a href="/sanitary" style={{ textDecoration: 'none' }}>
    <div className="brand-card" style={{marginBottom: isMobile ? '-130px' : '-180px', maxWidth:isMobile ? '250%' : '85%'}}>
        <div className='custom-card'>
      <img src={brand6} alt="Crompton" />
      </div>
      <h5 className="gradient-mild-blue mt-2">{language == 'english'? 'Fcera' : 'ఎఫ్ సెరా'}</h5>
    </div>
    </a>

    <a href="/electronics" style={{ textDecoration: 'none' }}>
    <div className="brand-card" style={{marginBottom: isMobile? '-60px':'-60px', maxWidth: isMobile? '100%':'120%'}}>
        <div className='custom-card'>
      <img src={brand5} alt="Goldmedal" />
      </div>
      <h5 className="gradient-red-red  mt-2" >{language == 'english'? 'Goldmedal' : 'గోల్డ్ మెడల్'}</h5>
    </div>
    </a>
    
    <a href="/electronics" style={{ textDecoration: 'none' }}>
    <div className="brand-card " style={{marginBottom: isMobile? '-150px':'-200px', maxWidth:'120%'}}>
    <div className='custom-card'>
      <img src={brand4} alt="Havells" style={{ width: isMobile?'100%': '250%',
  height: '100%',
  objectFit: 'contain',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  borderRadius: '8px',
  padding: '0',
  margin: '0'}} className='img-fluid' />
      
    </div>
   
    <h5 className="gradient-deep-blue mt-2" >{language == 'english'? 'Havells' : 'హవెల్స్'}</h5>
    </div>
    </a>
  </div>
</div>
</section>


  );
};

export default BrandSection;
