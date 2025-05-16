import React from "react";
import brand1 from '../assets/sanitory/steel shink/0db17ddabeafc4a31fe5127ae0f5905e_1024x.jpg';
import brand2 from '../assets/sanitory/steel shink/image.jpg';
import brand3 from '../assets/sanitory/steel shink/download (2).jpg';
import brand4 from '../assets/sanitory/steel shink/sss.png';
import brand5 from '../assets/sanitory/steel shink/ssss.png';
import brand6 from '../assets/sanitory/steel shink/download.jpg';

const SteelShink = ({language}) => {
  

  return (
    <section id='brands' className="w-100 bg-white py-5">
      <div className="container">   
         <div className="text-center mb-4">
         <h3 className="text-center fw-bold mb-3" style={{ fontSize: "24px", fontFamily:'unset' }}>{language =='telugu' ?'స్టీల్ సింక్': 'Steel Sink'}</h3>

        </div>
      <div className="row g-4 justify-content-center">
  {/* Row 1 */}
  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2 w-100">
      <img src={brand1} alt="Berger Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2" style={{ width: '100%', transform:'scale(1.2)', transformOrigin: 'top center' }}>
      <img src={brand5} alt="Asian Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2 w-100">
      <img src={brand3} alt="Avonplast" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2 w-100" style={{ transform:'scale(1.2)', transformOrigin: 'top center' }}>
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

export default SteelShink;