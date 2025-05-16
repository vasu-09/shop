import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const About = ({language}) => {
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

 <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center text-center px-3"
      style={{
        width: '100vw',
        minHeight: '60vh',
        paddingTop: '60px',
        background: 'radial-gradient(circle at 95% 5%, #ff914d 0%, transparent 60%), linear-gradient(to bottom left, #fff7ad 15%, #ff3131 100%)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
    </section>

    <section id="about" className="container py-5 text-center" style={{ paddingTop: '80px' }}>
        <div className="row">
    <div className="col-12">
      {language === 'english' ? (
        <>
      <h1 className="mb-4" style={{ fontFamily:'unset', fontSize: '3rem' }}>About us</h1>
      <p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
        Established in 2010, Siva Paints & Hardware Shop has earned a reputation for reliability and service excellence in the heart of the community. What began as a modest outlet for quality electronics and hardware products has grown into a comprehensive store that now meets a wide range of household, industrial, and agricultural needs.</p>
 <p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
In 2015, we expanded into the paints segment, proudly partnering with Berger Paints to bring our customers vibrant, long-lasting color solutions. In 2019, we further enhanced our offerings by adding Asian Paints to our inventory, ensuring our customers have access to two of the most trusted paint brands in the country.</p>
 <p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
Our sanitaryware section includes a diverse selection of essential bathroom and kitchen fittings such as wash basins, taps, shower walls, pedestals, and stainless steel sinks, making us a one-stop destination for home improvement and renovation projects.</p>
 <p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
Understanding the agricultural backbone of our region, we also supply vital agricultural products including drip irrigation fittings, HDPE pipes, and sprinkler fittings—helping farmers improve their efficiency and water management.</p>
 <p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
Our extensive hardware collection caters to both individual homeowners and contractors, featuring items like water motors, low-voltage motors, PVC pipes, steel sheets, laminated doors, and iron doors. Whether you're building, repairing, or upgrading, we aim to provide durable and dependable materials for every requirement.</p>
 <p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
With a strong customer base across Ipur Mandal, Rompicherla Mandal, and the towns of Narasaraopet and Vinukonda, we take pride in being a trusted local business. At Siva Paints & Hardware Shop, our mission remains steadfast: to deliver high-quality products at fair prices while ensuring the satisfaction of every customer who walks through our doors.</p></>):
(<>
<h1 className="mb-4" style={{ fontFamily:'unset', fontSize: '3rem' }}>మా వివరములు</h1>

 <p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
2010లో స్థాపించబడిన శివ పైన్ట్స్ & హార్డ్‌వేర్ షాప్, సమాజంలో విశ్వసనీయత మరియు సేవా గుణాత్మకతతో ప్రత్యేక గుర్తింపు సంపాదించింది. ప్రారంభంలో కేవలం ఎలక్ట్రానిక్స్ మరియు హార్డ్‌వేర్ ఉత్పత్తుల outletగా ఉండగా, ఇప్పుడు ఇది గృహ, పారిశ్రామిక మరియు వ్యవసాయ అవసరాలను తీర్చే సమగ్ర స్టోర్‌గా విస్తరించింది.</p>
<p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
2015లో, మేము పెయింట్స్ విభాగంలో అడుగు పెట్టాము. బర్జర్ పెయింట్స్‌తో భాగస్వామ్యంతో మా కస్టమర్లకు రంగురంగుల, దీర్ఘకాలిక పెయింట్స్ అందించడానికి గర్వపడుతున్నాము. 2019లో, ఏసియన్ పెయింట్స్ కూడా మా ఉత్పత్తుల్లో చేర్చుకొని, రెండు ప్రముఖ పెయింట్ బ్రాండ్లను అందుబాటులో ఉంచాము.</p>
<p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
మా సానిటరీవేర్ విభాగంలో, వాష్ బాసిన్లు, ట్యాపులు, షవర్ వాల్‌లు, పేడెస్టల్స్, స్టెయిన్‌లెస్ స్టీల్ సింక్‌లు వంటి విస్తృత శ్రేణి బాత్రూమ్ మరియు కిచెన్ ఉపకరణాలు ఉన్నాయి. అందువల్ల, ఇంటి మెరుగుదల, పునర్నిర్మాణ పనులకు మా షాప్ ఒక స్టాప్ డెస్టినేషన్‌గా ఉంది.</p>
<p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
వ్యవసాయ రంగం ప్రాంతీయ ఆర్థికానికి మునుపటి ప్రాధాన్యత ఉండటంతో, మేము డ్రిప్ ఇరిగేషన్ ఫిట్టింగ్స్, హెచ్డీపీఈ పైప్స్, స్ప్రింక్లర్ ఫిట్టింగ్స్ వంటి ముఖ్యమైన వ్యవసాయ వస్తువులను కూడా అందజేస్తున్నాము, దీని ద్వారా రైతులు తమ పనితీరును మెరుగుపరుచుకోవచ్చు.</p>
<p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
మా హార్డ్‌వేర్ సేకరణ వ్యక్తిగత గృహ యజమానులు మరియు కాంట్రాక్టర్ల అవసరాలకు తగిన విధంగా ఉండి, వాటర్ మోటార్లు, లో-వోల్టేజ్ మోటార్లు, పివిసి పైప్స్, స్టీల్ రేకులు, లామినేటెడ్ డోర్లు, ఐరన్ డోర్లు వంటి వస్తువులను కలిగి ఉంది. నిర్మాణం, మరమ్మత్తు లేదా అప్గ్రేడ్ కోసం మీకు అవసరమైన సుదీర్ఘమైన, నమ్మదగిన మెటీరియల్స్ ఇక్కడ పొందవచ్చు.</p>
<p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem', textAlign:'left' }}>
ఈపూర్ మండలం, రోంపిచెర్ల మండలం, నరసరావుపేట, వినుకొండ పట్టణాల వరకు విస్తరించిన బలమైన కస్టమర్ బేస్‌తో, మేము విశ్వసనీయమైన స్థానిక వ్యాపారంగా ఉండటం గర్వంగా భావిస్తున్నాము. శివ పైన్ట్స్ & హార్డ్‌వేర్ షాప్ లో మా లక్ష్యం ఎప్పుడూ ఒకటే: నాణ్యమైన ఉత్పత్తులను సరసమైన ధరలకు అందిస్తూ, ప్రతి కస్టమర్ సంతృప్తిని నిర్ధారించడం.</p>
</>)}
    </div>
    </div>
    </section>

    </div>
);
}

export default About;