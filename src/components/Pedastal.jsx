import React from "react";
import brand1 from '../assets/sanitory/pedestal washbasin/image.webp';
import brand2 from '../assets/sanitory/pedestal washbasin/images (1).jpg';
import brand3 from '../assets/sanitory/pedestal washbasin/image (2).jpg';
import brand4 from '../assets/sanitory/pedestal washbasin/image (3).jpg';
import brand5 from '../assets/sanitory/pedestal washbasin/image (4).jpg';
import brand6 from '../assets/sanitory/pedestal washbasin/image (5).webp';


const Pedastal = ({language}) => {
  

  return (
    <section id='brands' className="w-100 bg-white py-5" style={{background:'radial-gradient(circle at 95% 5%,rgb(118, 159, 219)  0%, transparent 60%), linear-gradient(to bottom left, #f0f4f8  15%,rgb(150, 198, 247)  100%)'}}>
      <div className="container">   
         <div className="text-center mb-4">
           <h3 className="text-center fw-bold mb-3" style={{ fontSize: "24px", fontFamily:'unset' }}>{language=='telugu'? 'వాష్ బేసిన్': 'Washbasin'}</h3>
        </div>
      <div className="row g-4 justify-content-center">
  {/* Row 1 */}
  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2 w-100">
      <img src={brand1} alt="Berger Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2" style={{ width: '100%',}}>
      <img src={brand5} alt="Asian Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2 w-100">
      <img src={brand3} alt="Avonplast" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2 w-100" >
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
    <div className="card border-0  p-2" style={{ width: '100%' }}>
      <img src={brand6} alt="Crompton" className="img-fluid" />
    </div>
  </div>




  {/* Add more rows as needed to reach 5x5 */}
  {/* Row 3-5 would go here with similar structure */}
</div>    </div>
    </section>
  );
}

export default Pedastal;