import React from "react";

import item1 from '../assets/sanitory/fcera/images (1).jpeg';
import item2 from '../assets/sanitory/fcera/images.jpeg';
import item3 from '../assets/sanitory/fcera/download (1).jpeg';
import item4 from '../assets/sanitory/fcera/indian.avif';
import logo from '../assets/sanitory/fcera/fcera.png'; // update path accordingly

const Fcera = () => {
  return (

    <>
      <div
        className="container-fluid px-0"
      >
    
         {/* DESKTOP VIEW */}
            <div className="d-none d-md-flex position-relative align-items-center py-5">
              {/* Logo on Left */}
              <div style={{ position: 'absolute', left: '10px', zIndex: 2 }}>
                <img src={logo} alt="Goldmedal Logo"  style={{ width: '50%', height: '100%' }} />
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
                   <img src={item1}  style={{ width: '85%', height: 'auto' }} className="img-fluid mb-2" alt="Wires" />
                    <h6>Maverick Geyser</h6>
                  </div>
                  <div className="col-6 col-md-2 mb-4 text-center">
                    <img src={item2} style={{ width: '90%', height: 'auto' }} className="img-fluid mb-2" alt="Switches" />
                    <h6 >LED Tube Lights</h6>
                  </div>
                  <div className="col-6 col-md-2 mb-4 text-center">
                      <img src={item3}  style={{ width: '99%', height: 'auto' }}  className="img-fluid mb-2" alt="Ceiling Lights" />
                     <h6> 4 Star Urja+ 6L Geyser</h6>
                  </div>
                  <div className="col-6 col-md-2 mb-4 text-center">
                               <img src={item4} style={{ width: '95%', height: 'auto' }} className="img-fluid mb-2" alt="LED Tube Lights" />
               <h6>Bulbs</h6>
                  </div>
                </div>
              </div>
            </div>
        
            {/* MOBILE VIEW */}
            <div className="d-block d-md-none py-4" style={{ background: '#ffff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
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
                     
                    </div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="p-2">
                      <img src={item2} className="img-fluid mb-2" alt="Switches" />
                  
                    </div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="p-2">
                      <img src={item3} className="img-fluid mb-2" alt="Ceiling Lights"  />
                    
                    </div>
                  </div>
                  <div className="col-6 text-center">
                    <div className="p-2">
                      <img src={item4} className="img-fluid mb-2" alt="MCB and DBs" style={{width:'100%'}} />
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    
  );
};

export default Fcera;
