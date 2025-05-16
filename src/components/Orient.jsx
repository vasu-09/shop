import React from "react";
import item1 from '../assets/electronics/orient/maverick_1.webp';
import item2 from '../assets/electronics/orient/image.jpg';
import item3 from '../assets/electronics/orient/images.jpg';
import item4 from '../assets/electronics/orient/813113.jpg';
import logo from '../assets/electronics/orient/orient_electric_logo.svg.png'; // update path accordingly

const Orient = ({language}) => {
  return (
  

    <>
      <div
        className="container-fluid px-0"
      >
    
         {/* DESKTOP VIEW */}
            <div className="d-none d-md-flex position-relative align-items-center py-5">
              {/* Logo on Left */}
              <div style={{ position: 'absolute', left: '10px', zIndex: 2 }}>
                <img src={logo} alt="Goldmedal Logo" style={{ width: '25%', height: 'auto'}} />
              </div>
        
              {/* Curved Card Grid */}
              <div
                className="ms-auto me-4 p-4"
                style={{
                  width: 'calc(80% - 200px)',
                  backgroundColor: 'white',
                  borderRadius: '200px 0 0 200px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                <div className="row justify-content-center">
                  <div className="col-6 col-md-2 mb-4 text-center">
                   <img src={item1}  style={{ width: '100%', height: 'auto' }} className="img-fluid mb-2" alt="Wires" />
                    <h6>{language=='telugu'? 'మావెరిక్ గీజర్': 'Maverick Geyser'}</h6>
                  </div>
                  <div className="col-6 col-md-2 mb-4 text-center">
                   <div style={{ transform: 'scale(1.2)', transformOrigin: 'top center', marginTop:'30px'  }}>
               <img src={item3} style={{ width: '80%', height: 'auto' }} className="img-fluid mb-2" alt="Switches" />
               </div>
               <h6 style={{marginTop:'25px'}}>{language=='telugu'? 'LED ట్యూబ్ లైట్లు': 'LED Tube Lights'}</h6>
                  </div>
                  <div className="col-6 col-md-2 mb-4 text-center">
                   <img src={item2}  style={{ width: '60%', height: 'auto' }}  className="img-fluid mb-2" alt="Ceiling Lights" />
               <h6>{language=='telugu'? '4 స్టార్ ఉర్జా+ 6L గీజర్': ' 4 Star Urja+ 6L Geyser'}</h6>
                  </div>
                  <div className="col-6 col-md-2 mb-4 text-center">
                     <img src={item4} style={{ width: '100%', height: '80%' }} className="img-fluid mb-2" alt="LED Tube Lights" />
               <h6>{language=='telugu'? 'బల్బులు': 'Bulbs'}</h6>
                  </div>
          
                </div>
              </div>
            </div>
        
            {/* MOBILE VIEW */}
            <div className="d-block d-md-none py-4" style={{ background: 'linear-gradient(165deg,rgb(250, 249, 252) 20%,rgb(231, 111, 12) 100%)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              {/* Centered Logo */}
              <div className="text-center mb-4">
                <img src={logo} alt="Goldmedal Logo" style={{ width: '60%', height: 'auto' }} />
              </div>
        
              {/* 2-Column Grid */}
              <div className="container">
                <div className="row g-3">
                  <div className="col-6 text-center">
                    <div className="p-2">
                      <img src={item1} className="img-fluid mb-2" alt="Wires" />
                       <h6>{language=='telugu'? 'మావెరిక్ గీజర్': 'Maverick Geyser'}</h6>
                    </div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="p-2">
                      <img src={item3} className="img-fluid mb-2" alt="Switches" />
                    <h6>{language=='telugu'? 'LED ట్యూబ్ లైట్లు': 'LED Tube Lights'}</h6>
                    </div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="p-2">
                      <img src={item2} className="img-fluid mb-2" alt="Ceiling Lights" style={{width:'65%'}} />
                      <h6>{language=='telugu'? '4 స్టార్ ఉర్జా+ 6L గీజర్': '4 Star Urja+ 6L Geyser'}</h6>
                    </div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="p-2">
                      <img src={item4} className="img-fluid mb-2" alt="MCB and DBs"/>
                     <h6>{language=='telugu'? 'బల్బులు': 'Bulbs'}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    
  );
};

export default Orient;
