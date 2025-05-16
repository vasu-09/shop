import React from "react";
import brand1 from '../assets/hardware/drip fittings/download (1).jpg';
import brand2 from '../assets/hardware/drip fittings/download.jpg';
import brand3 from '../assets/hardware/drip fittings/drip-grekkon-accessories-1-scaled.webp';
import brand4 from '../assets/hardware/drip fittings/drip-irrigation-fittings-500x500.webp';
import brand5 from '../assets/hardware/drip fittings/images.jpg';



const DripFittings = ({language}) => {
  

  return (
    <section id='brands' className="w-100 bg-white py-5" >
    <div className="container">    <div className="text-center mb-4">
                <h3 className="text-center fw-bold mb-3" style={{ fontSize: "24px", fontFamily:'unset' }}>{language == 'telugu'? 'డ్రిప్ ఫిట్టింగ్స్': 'Drip Fittings'}</h3>
            </div>
      <div className="row g-4 justify-content-center">
  {/* Row 1 */}
  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 " style={{width:'100%'}}>
      <img src={brand1} alt="Berger Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{width:'70%'}}>
      <img src={brand2} alt="Goldmedal" className="img-fluid" />
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
    <div className="card border-0  p-2" style={{ width: '80%',}}>
      <img src={brand5} alt="Asian Paints" className="img-fluid" />
    </div>
  </div>


    </div> 
   </div>
    </section>
  );
}

export default DripFittings;