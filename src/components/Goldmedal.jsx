import React from "react";
import item1 from '../assets/electronics/goldmedal/1-500x500.jpg';
import item2 from '../assets/electronics/goldmedal/image.jpg';
import item3 from '../assets/electronics/goldmedal/downlight.webp';
import item4 from '../assets/electronics/goldmedal/how-to-change-an-led-tube-ligh.jpg';
import item5 from '../assets/electronics/goldmedal/mcb-and-dp.jpg';
import logo from '../assets/electronics/goldmedal/goldmedal_electricals_logo.svg'; // update path accordingly

const Goldmedal = ({language}) => {
  return (<>
  <div
    className="container-fluid px-0"
  >
    {/* DESKTOP VIEW */}
    <div className="d-none d-md-flex position-relative align-items-center py-5">
      {/* Logo on Left */}
      <div style={{ position: 'absolute', left: '10px', zIndex: 2 }}>
        <img src={logo} alt="Goldmedal Logo" style={{ width: '80%', height: 'auto' }} />
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
            <img src={item1} className="img-fluid mb-2" alt="Wires" />
            <h6>{language=='telugu'? 'వైర్లు': 'Wires'}</h6>
          </div>
          <div className="col-6 col-md-2 mb-4 text-center">
            <img src={item2} className="img-fluid mb-2" style={{ width: '80%' }} alt="Switches" />
            <h6>{language=='telugu'? 'స్విచ్‌లు': 'Switches'}</h6>
          </div>
          <div className="col-6 col-md-2 mb-4 text-center">
            <img src={item3} className="img-fluid mb-2" alt="Ceiling Lights" />
            <h6>{language=='telugu'? 'సీలింగ్ లైట్లు': 'Ceiling Lights'}</h6>
          </div>
          <div className="col-6 col-md-2 mb-4 text-center">
            <img src={item4} className="img-fluid mb-2" style={{ width: '150%', height: '80%' }} alt="LED Tube Lights" />
            <h6>{language=='telugu'? 'LED ట్యూబ్ లైట్లు': 'LED Tube Lights'}</h6>
          </div>
          <div className="col-6 col-md-2 mb-4 text-center">
            <img src={item5} className="img-fluid mb-2" alt="MCB and DBs" />
            <h6>{language=='telugu'? 'MCB మరియు DBలు': 'MCB and DBs'}</h6>
          </div>
        </div>
      </div>
    </div>

    {/* MOBILE VIEW */}
    <div className="d-block d-md-none py-4" style={{ background: 'linear-gradient(165deg,rgb(250, 249, 252) 20%,rgb(196, 3, 3) 100%)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
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
              <h6>{language=='telugu'? 'వైర్లు': 'Wires'}</h6>
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
              <img src={item3} className="img-fluid mb-2" alt="Ceiling Lights" />
              <h6>{language=='telugu'? 'సీలింగ్ లైట్లు': 'Ceiling Lights'}</h6>
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="p-2">
              <img src={item5} className="img-fluid mb-2" alt="MCB and DBs" />
              <h6>{language=='telugu'? 'MCB మరియు DBలు': 'MCB and DBs'}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default Goldmedal;
