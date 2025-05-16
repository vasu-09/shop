import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutSection = ({ language }) =>{
    return(
        <section id="about" className="container py-5 text-center" style={{ paddingTop: '80px' }}>
  <div className="row">
    <div className="col-12">

      {language === 'telugu' ? (<>
            <h1 className="mt-5 mb-4" style={{ fontFamily:'unset', fontSize: '2.5rem' }}>శివ పెయింట్స్ & హార్డ్వేర్</h1>
          <p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
            శివ పెయింట్స్ & హార్డ్వేర్ షాప్ 2010 నుండి సమాజానికి నాణ్యమైన సేవలను అందిస్తున్నాము. ప్రారంభంలో ఎలక్ట్రానిక్స్ మరియు హార్డ్వేర్ వస్తువులతో మొదలై, 2015లో పెయింట్స్ అమ్మకాల వరకు విస్తరించాము. మేము ఈపూరు మండలం, రొంపిచెర్ల మండలం, నరసరావుపేట మరియు వినుకొండ పట్టణాల్లోని వినియోగదారులకు హార్డ్వేర్, పెయింట్స్ మరియు ఎలక్ట్రానిక్ వస్తువుల విస్తృత శ్రేణిని అందిస్తున్నాము. మా లక్ష్యం, సరసమైన ధరలలో నాణ్యమైన వస్తువులను సరఫరా చేసి, ప్రతి కస్టమర్‌కు విలువను మరియు సంతృప్తిని ఇవ్వడం.
          </p> <a href="/about" className="btn btn-primary  btn-lg mt-4mt-5" style={{ boxShadow:' 0 8px 30px rgba(0, 0, 0, 0.15)'}}>మా గురించి మరింత తెలుసుకోండి</a>
          </> ): (
        <>
      <h1 className="mb-4" style={{ fontFamily:'unset', fontSize: '3rem' }}>Siva Paints & Hardware</h1>
      <p className="mx-auto" style={{ maxWidth: '800px', fontSize: '1.3srem' }}>
            Siva Paints & Hardware Shop has been proudly serving the community since 2010, beginning with quality electronics and hardware products and expanding into paints in 2015. We cater to customers across Ipur Mandal and Rompicherla Mandal, Narasaraopet and Vinukonda towns, offering a wide range of hardware, paints, and electronic items. Our mission is to provide reliable products at reasonable prices, ensuring value and satisfaction for every customer who walks through our doors.
          </p> 
           <a href="/about" className="btn btn-primary btn-lg mt-5" style={{ boxShadow:' 0 8px 30px rgba(0, 0, 0, 0.15)'}}>Know More About Us</a>
          </>)  }
        </div>
      </div>
    </section> 
    );
}

export default AboutSection;