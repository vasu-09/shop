import React from "react";
import brand1 from '../assets/electronics/otherelectronics/image (1).webp';
import brand2 from '../assets/electronics/otherelectronics/image (2).jpg';
import brand3 from '../assets/electronics/otherelectronics/image (2).webp';
import brand4 from '../assets/electronics/otherelectronics/images (3).webp';
import brand5 from '../assets/electronics/otherelectronics/download (2).jpeg';
import brand6 from '../assets/electronics/otherelectronics/download (3).jpeg';

import brand7 from '../assets/electronics/otherelectronics/download (12).jpg';
import brand8 from '../assets/electronics/otherelectronics/download (20).jpg';
import brand9 from '../assets/electronics/otherelectronics/image (6).webp';
import brand10 from '../assets/electronics/otherelectronics/image (5).jpeg';
import brand11 from '../assets/electronics/otherelectronics/images (4).jpg';
import brand12 from '../assets/electronics/otherelectronics/turbo.webp';

const OtherElectronics = ({language}) => {
  
  return (
    <section id='brands' className="w-100 bg-white py-5" >
      <div className="container">   
         <div className="text-center mb-4">
          <h3 className="text-center fw-bold mb-3" style={{ fontSize: "24px",fontFamily:'unset' }}>{language =='telugu'? 'ఇతర ఎలక్ట్రానిక్స్': 'Other Electronics'}</h3>
        </div>
      <div className="row g-4 justify-content-center">
  {/* Row 1 */}
  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 " style={{width:'60%'}}>
      <img src={brand1} alt="Berger Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '80%',}}>
      <img src={brand5} alt="Asian Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand3} alt="Avonplast" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 " style={{ width: '80%'}} >
      <img src={brand4} alt="Havells" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand2} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  {/* Row 2 */}
  <div className="col-6 col-md-2 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '70%' }}>
      <img src={brand6} alt="Crompton" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-2 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '60%' }}>
      <img src={brand7} alt="Crompton" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-2 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '100%' }}>
      <img src={brand12} alt="Crompton" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-2 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '70%' }}>
      <img src={brand8} alt="Crompton" className="img-fluid" />
    </div>
  </div>

  

  <div className="col-6 col-md-2 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '80%' }}>
      <img src={brand9} alt="Crompton" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-2 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '100%' }}>
      <img src={brand10} alt="Crompton" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-2 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '100%' }}>
      <img src={brand11} alt="Crompton" className="img-fluid" />
    </div>
  </div>

    </div> 
   </div>
    </section>
  );
}

export default OtherElectronics;