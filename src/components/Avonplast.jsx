import React from "react";
import brand1 from '../assets/hardware/avonplast/download (1).jpeg';
import brand2 from '../assets/hardware/avonplast/download (2).jpeg';
import brand3 from '../assets/hardware/avonplast/download (3).jpeg';
import brand4 from '../assets/hardware/avonplast/download (4).jpeg';
import brand5 from '../assets/hardware/avonplast/images (2).jpeg';
import brand6 from '../assets/hardware/avonplast/download (6).jpeg';

import brand7 from '../assets/hardware/avonplast/images (1).jpeg';
import brand8 from '../assets/hardware/avonplast/avonAsset-11@2x.png';
import brand9 from '../assets/hardware/avonplast/download (8).jpeg';
import brand10 from '../assets/hardware/avonplast/download (9).jpeg';
import brand11 from '../assets/hardware/avonplast/download (10).jpeg';
import brand12 from '../assets/hardware/avonplast/download.jpeg';
import brand13 from '../assets/hardware/avonplast/images.jpeg';

const Avonplast = () => {
  

  return (
    <section id='brands' className="w-100 bg-white py-5" >
    <div className="container">    <div className="text-center mb-4">
              <img src={brand8} alt="Company Logo" style={{width:'40%'}} />
            </div>
      <div className="row g-4 justify-content-center">
  {/* Row 1 */}
  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 " style={{width:'90%'}}>
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
    <div className="card border-0  p-2" style={{ width: '95%' }}>
      <img src={brand7} alt="Crompton" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-2 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '100%' }}>
      <img src={brand12} alt="Crompton" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-2 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '100%' }}>
      <img src={brand13} alt="Crompton" className="img-fluid" />
    </div>
  </div>

  

  <div className="col-6 col-md-2 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '100%' }}>
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

export default Avonplast;