import React from "react";
import brand1 from '../assets/hardware/hdpe pipes/hdpe-600x600-2.jpg';
import brand2 from '../assets/hardware/agricultural-hdpe-pipe-fitting-500x500.webp';
import brand3 from '../assets/hardware/sprinkler pipe fiitings/images.jpg';
import brand4 from '../assets/hardware/sprinkler pipe fiitings/hdpe-sprinkler-pipe-fitting.jpg';
import brand5 from '../assets/hardware/sprinkler pipe fiitings/product-jpeg.jpg';
import brand6 from '../assets/hardware/sprinkler pipe fiitings/sprinkler-pipe-fittings.jpg';


const HDPE = ({language}) => {
  

  return (
    <section id='brands' className="w-100 bg-white py-5" >
    <div className="container">    <div className="text-center mb-4">
                <h3 className="text-center fw-bold mb-3" style={{ fontSize: "24px", fontFamily:'unset' }}>{language == 'telugu' ? 'HDPE పైపులు & స్ప్రింక్లర్లు':'HDPE Pipes & Sprinklers'}</h3>
            </div>
      <div className="row g-4 justify-content-center">
  {/* Row 1 */}
  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 " style={{width:'90%'}}>
      <img src={brand1} alt="Berger Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand2} alt="Goldmedal" className="img-fluid" />
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
    <div className="card border-0  p-2" style={{ width: '80%',}}>
      <img src={brand5} alt="Asian Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand6} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>
    </div> 
   </div>
    </section>
  );
}

export default HDPE;