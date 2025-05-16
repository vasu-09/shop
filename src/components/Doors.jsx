import React from "react";
import brand1 from '../assets/hardware/doors/image.png';
import brand2 from '../assets/hardware/doors/image (1).png';
import brand3 from '../assets/hardware/doors/image (2).png';
import brand4 from '../assets/hardware/doors/image (3).png';
import brand5 from '../assets/hardware/doors/image (4).png';


const Doors = ({language}) => {
  

  return (
    <section id='brands' className="w-100 bg-white py-5" >
    <div className="container">    <div className="text-center mb-4">
                <h3 className="text-center fw-bold mb-3" style={{ fontSize: "24px", fontFamily:'unset' }}>{language =='telugu' ? 'లామినేషన్ డోర్లు ':'Lamination Doors'}</h3>
            </div>
      <div className="row g-4 justify-content-center">
  {/* Row 1 */}
  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 " style={{width:'100%'}}>
      <img src={brand1} alt="Berger Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '100%',}}>
      <img src={brand5} alt="Asian Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand3} alt="Avonplast" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 " style={{ width: '100%'}} >
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

export default Doors;