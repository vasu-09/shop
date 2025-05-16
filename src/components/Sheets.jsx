import React from "react";
import brand1 from '../assets/hardware/jsw/download (1).jpg';
import brand2 from '../assets/hardware/jsw/download (2).avif';
import brand3 from '../assets/hardware/jsw/download (3).jpg';
import brand4 from '../assets/hardware/jsw/download (4).jpg';
import brand5 from '../assets/hardware/jsw/download (5).webp';
import brand6 from '../assets/hardware/jsw/download (11).jpeg';

import brand7 from '../assets/hardware/jsw/download.jpg';
import brand8 from '../assets/hardware/jsw/images (3).png';
import brand9 from '../assets/hardware/jsw/images (1).jpg';
import brand10 from '../assets/hardware/jsw/images (2).jpg';
import brand11 from '../assets/hardware/jsw/images.jpg';


const Sheets = ({language}) => {
  

  return (
    <section id='brands' className="w-100 bg-white py-5" >
    <div className="container">    
      <div className="text-center mb-4">
                <h3 className="text-center fw-bold mb-3" style={{ fontSize: "24px", fontFamily:'unset' }}>{language=='telugu'?'స్టీల్ & సిమెంట్ రేకులు ':'Steel & Cement Sheets'}</h3>
     </div>

     
      <div className="row g-4 justify-content-center">
  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 " style={{width:'100%'}}>
      <img src={brand1} alt="Berger Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '100%',}}>
      <img src={brand5} alt="Asian Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 " style={{width:'90%'}}>
      <img src={brand3} alt="Avonplast" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 " style={{ width: '100%'}} >
      <img src={brand4} alt="Havells" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 "  style={{width:'90%'}}>
      <img src={brand2} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 "  style={{width:'90%'}}>
      <img src={brand6} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand7} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 "  style={{width:'90%'}}>
      <img src={brand8} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand9} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand10} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand11} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>
    </div> 
   </div>
    </section>
  );
}

export default Sheets;