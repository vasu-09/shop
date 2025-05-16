import React from "react";
import item from '../assets/electronics/crompton/fan_kv2.webp';
import item1 from '../assets/electronics/crompton/1_55404200-f82e-4234-b9a5-fa9c5e4cf7ff.jpg';

import item2 from '../assets/electronics/crompton/images.jpg';
import item3 from '../assets/electronics/crompton/download (19).jpg';
import item4 from '../assets/electronics/crompton/tropdo-wht.jpg';
import logo from '../assets/electronics/crompton/crompton_greaves_logo.png'; // update path accordingly

const Cromption = ({language}) => {
  return (
<>
  <div
    className="container-fluid px-0"
  >

     {/* DESKTOP VIEW */}
        <div className="d-none d-md-flex position-relative align-items-center py-5">
          {/* Logo on Left */}
          <div style={{ position: 'absolute', left: '10px', zIndex: 2 }}>
            <img src={logo} alt="Goldmedal Logo"  style={{ width: '120%', height: 'auto' }} />
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
                 <div style={{ transform: 'scale(1.7)', transformOrigin: 'top center', marginTop:'30px'  }}>
               <img src={item}  style={{ width: '100%', height: 'auto' }} className="img-fluid mb-2" alt="Wires" />
               </div>
               <h6 style={{marginTop:'60px'}}>{language == 'telugu' ?'ఫాన్స్':'Fans'}</h6>
              </div>
              <div className="col-6 col-md-2 mb-4 text-center">
                <img src={item2}  style={{ width: '35%', height: 'auto', marginLeft:'70px' }} className="img-fluid mb-2" alt="Wires" />
              <h6 style={{marginLeft:'70px'}}>  {language == 'telugu' ? 'స్టాండ్ ఫాన్స్' :'Stand Fans'}</h6>
              </div>
              <div className="col-6 col-md-2 mb-4 text-center">
                <img src={item1} style={{ width: '70%', height: 'auto' }} className="img-fluid mb-2" alt="Switches" />
              <h6 >{language == 'telugu' ?'టేబుల్ ఫాన్స్': 'Table Fans'}</h6>
              </div>
              <div className="col-6 col-md-2 mb-4 text-center">
                <img src={item3}  style={{ width: '95%', height: 'auto' }} className="img-fluid mb-2" alt="Ceiling Lights" />
                <h6>{language == 'telugu' ?'సీలింగ్ ఫాన్స్': 'Ceiling Fans'}</h6>
              </div>
              <div className="col-6 col-md-2 mb-4 text-center">
                 <img src={item4} style={{ width: '95%', height: 'auto' }} className="img-fluid mb-2" alt="LED Tube Lights" />
                  <h6 >{language == 'telugu' ? 'వాల్ మౌంటెడ్ ఫాన్స్' : 'Wall Mounted Fans'}</h6>
              </div>
              
            </div>
          </div>
        </div>
    
        {/* MOBILE VIEW */}
        <div className="d-block d-md-none py-4" style={{ background: 'linear-gradient(165deg,rgb(250, 249, 252) 20%,rgb(2, 26, 131) 100%)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          {/* Centered Logo */}
          <div className="text-center mb-4">
            <img src={logo} alt="Goldmedal Logo" style={{ width: '60%', height: 'auto' }} />
          </div>
    
          {/* 2-Column Grid */}
          <div className="container">
            <div className="row g-3">
              <div className="col-6 text-center">
                <div className="p-2">
                  <img src={item2} className="img-fluid mb-2" alt="Wires"  style={{width:'38%'}}/>
                 <h6 >{language == 'telugu' ? 'స్టాండ్ ఫాన్స్' :'Stand Fans'}</h6>
                </div>
              </div>
              <div className="col-6 text-center">
                <div className="p-2">
                  <img src={item1} className="img-fluid mb-2" alt="Switches" />
              <h6 > {language == 'telugu' ? 'టేబుల్ ఫాన్స్': 'Table Fans'}</h6>
                </div>
              </div>
              <div className="col-6 text-center">
                <div className="p-2">
                  <img src={item3} className="img-fluid mb-2" alt="Ceiling Lights"  />
                  <h6>{language == 'telugu' ?'సీలింగ్ ఫాన్స్': 'Ceiling Fans'}</h6>
                </div>
              </div>
              <div className="col-6 text-center">
                <div className="p-2">
                  <img src={item4} className="img-fluid mb-2" alt="MCB and DBs" />
                 <h6 > {language == 'telugu' ?'వాల్ మౌంటెడ్ ఫాన్స్' : 'Wall Mounted Fans'}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Cromption;
