import React from "react";
import brand1 from '../assets/hardware/kumar motors/hand.jpg';
import brand2 from '../assets/hardware/kumar motors/kumar-ci-mmb-pump.jpg';
import brand3 from '../assets/hardware/kumar motors/kumar-pumps-18-11-2020-38-219842854-kwrna.jpg';
import brand4 from '../assets/hardware/kumar motors/monoblock-pumps-1hp-sw-1-lalit-kumar-original-imagg3yy5fj3kpsq.webp';
import brand5 from '../assets/hardware/kumar motors/sub.jpg';

import brand8 from '../assets/Hardware/whatsapp.jpg';

const Kumar = () => {
  

  return (
    <section id='brands' className="w-100 bg-white py-5" >
    <div className="container">    <div className="text-center mb-4" >
              <img src={brand8} alt="Company Logo" style={{width:'150px'}}  />
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
    </div> 
   </div>
    </section>
  );
}

export default Kumar;