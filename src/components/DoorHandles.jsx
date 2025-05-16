import React from "react";
import brand1 from '../assets/hardware/charminar cement sheets/image.jpg';
import brand2 from '../assets/hardware/charminar cement sheets/image (2).jpg';
import brand3 from '../assets/hardware/charminar cement sheets/images (2).jpg';
import brand4 from '../assets/hardware/charminar cement sheets/images (3).jpeg';
import brand5 from '../assets/hardware/charminar cement sheets/images (4).jpeg';
import brand6 from '../assets/hardware/charminar cement sheets/images (5).jpg';
import brand7 from '../assets/hardware/charminar cement sheets/images (6).jpg';
import brand8 from '../assets/hardware/charminar cement sheets/images (7).webp';
import brand9 from '../assets/hardware/charminar cement sheets/images (8).webp';
import brand10 from '../assets/hardware/charminar cement sheets/images (11).webp';
import brand11 from '../assets/hardware/charminar cement sheets/images (10).webp';

const DoorHandles = ({language}) => {
  

  return (
    <section id='brands' className="w-100 bg-white py-5" >
    <div className="container">    <div className="text-center mb-4">
                <h3 className="text-center fw-bold mb-3" style={{ fontSize: "24px", fontFamily:'unset' }}>{language =='telugu' ? 'డోర్ హ్యాండిల్స్':'Door Handles'}</h3>
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

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand6} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand7} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand8} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand9} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>


  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand10} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand11} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

    </div> 
   </div>
    </section>
  );
}

export default DoorHandles;