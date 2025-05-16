import React from "react";
import item1 from '../assets/electronics/hevalls/-original-imagpvynczhafxg8.webp';
import item2 from '../assets/electronics/hevalls/download.jpeg';
import item3 from '../assets/electronics/hevalls/stand fan.webp';
import item4 from '../assets/electronics/hevalls/havellsmonzadx.webp';
import item5 from '../assets/electronics/hevalls/new-product-500x500.webp';
import logo from '../assets/electronics/hevalls/havells-logo.wine.png'; // update path accordingly

const Havells = ({language}) => {
  return (

    <>
  <div
    className="container-fluid px-0"
  >

     {/* DESKTOP VIEW */}
        <div className="d-none d-md-flex position-relative align-items-center py-5">
          {/* Logo on Left */}
          <div style={{ position: 'absolute', left: '10px', zIndex: 2 }}>
            <img src={logo} alt="Goldmedal Logo" style={{ width: '30%', height: 'auto'}} />
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
               <h6>{language=='telugu'? 'ఫ్యాన్లు': 'Fans'}</h6>
              </div>
              <div className="col-6 col-md-2 mb-4 text-center">
                <img src={item2} style={{ width: '100%', height: 'auto' }} className="img-fluid mb-2" alt="Switches" />
              <h6>{language=='telugu'? 'స్విచ్‌లు': 'Switches'}</h6>
              </div>
              <div className="col-6 col-md-2 mb-4 text-center">
                <img src={item3} style={{ width: '100%', height: 'auto' }} className="img-fluid mb-2" alt="Ceiling Lights" />
              <h6>{language=='telugu'? 'స్టాండ్ ఫ్యాన్లు': 'Stand Fans'}</h6>
              </div>
              <div className="col-6 col-md-2 mb-4 text-center">
                 <img src={item4} style={{ width: '100%', height: 'auto' }} className="img-fluid mb-2" alt="LED Tube Lights" />
              <h6>{language=='telugu'? 'గీజర్స్': 'Geysers'}</h6>
              </div>
              <div className="col-6 col-md-2 mb-4 text-center">
                <img src={item5} style={{ width: '90%', height: 'auto' }} className="img-fluid mb-2" alt="MCB and DBs" />
              <h6>{language=='telugu'? 'మోటార్లు': 'Motors'}</h6>
              </div>
            </div>
          </div>
        </div>
    
        {/* MOBILE VIEW */}
        <div className="d-block d-md-none py-4" style={{ background: 'linear-gradient(165deg,rgb(250, 249, 252) 20%,rgb(223, 87, 87) 100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
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
                  <h6>{language=='telugu'? 'ఫ్యాన్లు': 'Fans'}</h6>
                </div>
              </div>
              <div className="col-6 text-center">
                <div className="p-2">
                  <img src={item2} className="img-fluid mb-2" alt="Switches" />
                <h6>{language=='telugu'? 'స్విచ్‌లు': 'Switches'}</h6>
                </div>
              </div>
              <div className="col-6 text-center">
                <div className="p-2">
                  <img src={item3} className="img-fluid mb-2" alt="Ceiling Lights" style={{width:'100%'}} />
                  <h6>{language=='telugu'? 'స్టాండ్ ఫ్యాన్లు': 'Stand fans'}</h6>
                </div>
              </div>
              <div className="col-6 text-center">
                <div className="p-2">
                  <img src={item4} className="img-fluid mb-2" alt="MCB and DBs" />
                 <h6>{language=='telugu'? 'గీజర్స్': 'Geysers'}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Havells;
