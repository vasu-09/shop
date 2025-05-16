import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutSection from './AboutSection';
import BrandSection from './BrandSection';
import TestimonialsSection from './TestimonialsSection';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';






const HomePage = ({language}) => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  

  
  const faqData ={
  en:  [
    {
      question: 'Do you provide home delivery?',
      answer: 'Home delivery is available for select products in Ipur Mandal and surrounding areas on large orders.',
    },
    {
      question: 'What brands of paint do you sell?',
      answer: 'We carry Berger Paints and Asian Paints, among others.',
    },
    {
      question: 'What are your business hours?',
      answer: 'We are open from 7:00 AM to 8:00 PM every day except Sunday .',
    },
    {
      question: 'How can know the prices of the product?',
      answer: 'Call us at the number below to check the price of the product you want to buy.'
    }
  ],
    te: [
      {
    question: 'మీరు హోమ్ డెలివరీ అందిస్తారా?',
    answer: 'ఈపూర్ మండలం మరియు పరిసర ప్రాంతాల్లో పెద్ద ఆర్డర్లపై కొన్ని వస్తువులకు హోమ్ డెలివరీ అందుబాటులో ఉంది.',
  },
  {
    question: 'మీరు ఏ పెయింట్ బ్రాండ్లను అమ్ముతారు??',
    answer: 'మేము బర్జర్ పెయింట్స్, ఏసియన్ పెయింట్స్‌తో పాటు ఇతర ప్రముఖ బ్రాండ్స్‌ను కూడా అమ్ముతున్నాము.',
  },
  {
    question: 'మీ షాప్ ఏ సమయంలో ఓపెన్ ఉంటుంది?',
    answer: 'మా షాప్ ప్రతి రోజు ఉదయం 7:00 గంటల నుండి సాయంత్రం 8:00 గంటల వరకు తెరిచి ఉంటుంది. ఆదివారం మాత్రమే మూసివుంటుంది.',
  },
  {
    question: 'వస్తువుల ధరలను ఎలా తెలుసుకోవచ్చు?',
    answer: 'మీకు కావలసిన వస్తువు ధర తెలుసుకోవడానికి కింద ఇచ్చిన నంబర్‌కు కాల్ చేయండి.',
  }
    ]}

  
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
        minHeight: '90vh',
        paddingTop: '60px',
        background: 'radial-gradient(circle at 95% 5%, #ff66c4 0%, transparent 60%), linear-gradient(to bottom left, #004aad 15%, #004aad 100%)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
       {language === 'telugu' ?(<>
      <h1 className="display-5 fw-bold">శివ పెయింట్స్‌కు స్వాగతం</h1>
        <p className="lead mt-3" style={{ maxWidth: '700px' }}>రంగులతో మరియు నైపుణ్యంతో మీ పరిసరాలను ఆకర్షణీయంగా మలుస్తాం. నివాసాలు మరియు వ్యాపార ప్రాంగణాలకు ప్రొఫెషనల్ పెయింటింగ్ సేవలను అందిస్తున్నాము.</p>
       <a href="#contact" className="btn btn-light btn-lg mt-4 fw-bold"> ధర సూచన కోరండి</a>


        </>
        ): (<>
      <h1 className="display-5 fw-bold">Welcome to Siva Paints</h1>
      <p className="lead mt-3" style={{ maxWidth: '700px' }}>
        Transforming spaces with color and craftsmanship. We provide professional painting services for homes and businesses.
      </p>
      <a href="#contact" className="btn btn-light btn-lg mt-4 fw-bold">Get a Quote</a>
      </>)}
    </section>

   

<AboutSection language={language}/>
<BrandSection language={language}/>
<TestimonialsSection language={language}/>
  
  

{/* FAQ Section */}
<section id="faq" className="mt-5 py-5 bg-white">
  <div className="container">
    <h2 className="mb-4 text-center" style={{ fontFamily:'unset', fontSize: '2.25rem' }}>{language == 'telugu' ? 'తరచుగా అడుగు ప్రశ్నలు' :'Frequently Asked Questions'}</h2>
    {faqData[language === 'telugu' ? 'te' : 'en'].map((faq, index) => (
      <div key={index} className="mb-3 border-bottom pb-2">
        <div
          onClick={() => toggleFaq(index)}
          className="d-flex justify-content-between align-items-center py-2"
          style={{ cursor: 'pointer', fontSize: '1.1rem' }}
        >
          {faq.question}
          <span style={{ fontSize: '1rem' }}>
           {openIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </span>
        </div>
        {openIndex === index && (
          <div className="ps-3 text-muted">{faq.answer}</div>
        )}
      </div>
    ))}
  </div>
</section>

{/* Contact Section */}
<section id="contact" style={{ padding: '2rem 1rem', color:'white', textAlign:'center',  background: 'linear-gradient(155deg, #8c52ff 15%, #ff5757 100%)'}}>
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
};

export default HomePage;
