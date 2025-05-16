import React from "react";
import brand1 from '../assets/sanitory/l&k taps/2(4).png';
import brand2 from '../assets/sanitory/l&k taps/2(9).png';
import brand3 from '../assets/sanitory/l&k taps/3(7).png';
import brand4 from '../assets/sanitory/l&k taps/10(8).png';
import brand5 from '../assets/sanitory/l&k taps/images (1).jpeg';
import brand6 from '../assets/sanitory/l&k taps/images (1).jpg';
import brand7 from '../assets/sanitory/l&k taps/images (3).jpg';
import brand8 from '../assets/sanitory/l&k taps/images.jpeg';
import brand9 from '../assets/sanitory/l&k taps/images.jpg';
import brand10 from '../assets/sanitory/l&k taps/download (1).jpg';
import brand11 from '../assets/sanitory/l&k taps/download.jpg';

const Taps = () => {
  

  return (
    <section id='brands' className="w-100 bg-white py-5" >
      <div className="container">    <div className="text-center mb-4">
          <img src={brand8} alt="Company Logo" />
        </div>
      <div className="row g-4 justify-content-center">
  {/* Row 1 */}
  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2 w-100">
      <img src={brand1} alt="Berger Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2" style={{ width: '58%' }}>
      <img src={brand2} alt="Asian Paints" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2 w-100">
      <img src={brand3} alt="Avonplast" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0 shadow-sm p-2 w-100">
      <img src={brand4} alt="Havells" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand5} alt="Goldmedal" className="img-fluid" />
    </div>
  </div>

  {/* Row 2 */}
  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '75%' }}>
      <img src={brand6} alt="Crompton" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100 style={{ width: '75%' }}">
      <img src={brand7} alt="Havells" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand9} alt="Havells" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2" style={{ width: '80%' }}>
      <img src={brand10} alt="Havells" className="img-fluid" />
    </div>
  </div>

  <div className="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
    <div className="card border-0  p-2 w-100">
      <img src={brand11} alt="Havells" className="img-fluid" />
    </div>
  </div>

  {/* Add more rows as needed to reach 5x5 */}
  {/* Row 3-5 would go here with similar structure */}
</div>    </div>
    </section>
  );
}

export default Taps;