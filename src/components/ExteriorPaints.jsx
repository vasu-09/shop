import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import interior1 from '../assets/paints/exterior/florantina vintage paint can-02.webp';
import interior2 from '../assets/paints/exterior/longlife 15 can_enhanced.webp';
import interior3 from '../assets/paints/exterior/longlife pu tile can.webp';
import interior4 from '../assets/paints/exterior/walmasta lite can.webp';
import interior5 from '../assets/paints/exterior/weathercoat_glow_paint_can-02__1_-removebg-preview_enhanced.webp';
import interior6 from '../assets/paints/exterior/weathercoat-anti-dustt-can__1_-removebg-preview.webp';
import interior7 from '../assets/paints/a_exterior/ace-powerplus-banner-desktop.png';
import interior8 from '../assets/paints/a_exterior/apex-shyne-dust-proof-advance-pack.png';
import interior9 from '../assets/paints/a_exterior/duralife_topcoat_single-layer.png';
import interior10 from '../assets/paints/a_exterior/exterior-neobharat.png';
import interior11 from '../assets/paints/a_exterior/exterior-walls-ultima-protek-topcoat-new-asian-paints.png';
import interior12 from '../assets/paints/a_exterior/ultima-stretch-packshot-asian-paints.png';


const ExteriorPaints = ({language}) => {
  return (
    <>
    <div className="container mt-4 d-none d-md-block">
        <h2>{language =='telugu'? 'బర్జర్ పెయింట్స్' :'Berger Paints'}</h2>
      <div className="row">
        
          <div className="col-2" >
              <img src={interior1} className="card-img-top" style={{width:'110%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'ఫ్లోరెంటైనా వింటేజ్ పెయింట్':'Florantina vintage paint'}</h6>
              
            </div>

            <div className="col-2" >
              <img src={interior2} className="card-img-top" style={{width:'105%'}} />
           
                <h6 className="card-title text-center">{language=='telugu'? 'లాంగ్ లైఫ్ 15':'Longlife 15 '}</h6>
            
            </div>

            <div className="col-2" >
              <img src={interior3} className="card-img-top"  style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'లాంగ్ లైఫ్ Pu టైల్':'Longlife Pu Tile'}</h6>
              
            </div>

            <div className="col-2" >
              <img src={interior4} className="card-img-top"  style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'వాల్మాస్తా టైల్':'Walmasta Lite'}</h6>
          
            </div>

            <div className="col-2" >
              <img src={interior5} className="card-img-top"  style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'వీతేరుకోఅట్ గ్లోవ్':'Weathercoat Glow'}</h6>
             
            </div>

            <div className="col-2" >
              <img src={interior6} className="card-img-top"  style={{width:'105%'}} />
          
                <h6 className="card-title text-center">{language=='telugu'? 'వీతేరుకోఅట్ అంటి దుస్ట్':'Weathercoat Anti Dustt'}</h6>
            
            </div>

      </div>
    </div>

    <div className="container mt-4 d-none d-md-block">
        <h2>{language =='telugu'? 'ఏసియన్ పెయింట్స్': 'Asian Paints'}</h2>
      <div className="row">
        
          <div className="col-2" >
              <img src={interior7} className="card-img-top"  />
             
                <h6 className="card-title text-center">{language=='telugu'? 'Ace పౌర్ప్లస్':'Ace Powerplus'}</h6>
          
            </div>

            <div className="col-2" >
              <img src={interior8} className="card-img-top"  />
           
                <h6 className="card-title text-center">{language=='telugu'? 'అపెక్స్ శైనే డస్ట్ ప్రూఫ్ అడ్వాన్స్':'Apex Shyne Dust Proof Advance'}</h6>
             
            </div>

            <div className="col-2" >
              <img src={interior9} className="card-img-top"  />
             
                <h6 className="card-title text-center">{language=='telugu'? 'డ్యూరలైఫ్ టాప్ కోట్':'Duralife Topcoat'}</h6>
           
            </div>

            <div className="col-2" >
              <img src={interior10} className="card-img-top"  />
            
                <h6 className="card-title text-center">{language=='telugu'? 'ఎక్సటెరియర్ నేయభారత్':'Exterior Neobharat'}</h6>
           
            </div>

            <div className="col-2" >
              <img src={interior11} className="card-img-top"  />
            
                <h6 className="card-title text-center">{language=='telugu'? 'ఎక్సటెరియర్ వాల్స్ అల్టిమా ప్రొటెక్':'Exterior Walls Ultima Protek'}</h6>
          
            </div>

            <div className="col-2" >
              <img src={interior12} className="card-img-top"  />
           
                <h6 className="card-title text-center">{language=='telugu'? 'అల్టిమా స్ట్రెచ్ పక్షాట్':'Ultima Stretch Packshot'}</h6>
        
            </div>

      </div>
    </div>

    <div className="container mt-4 d-block d-md-none">
        <h2 className="text-center">{language =='telugu'? 'బర్జర్ పెయింట్స్' :'Berger Paints'}</h2>
        <div className="row g-3">
          <div className="col-6 text-center">
            <img src={interior1} className="img-fluid mb-2"  style={{width:'80%'}}/>
            <h6>{language=='telugu'? 'ఫ్లోరెంటైనా వింటేజ్ పెయింట్':'Florantina vintage paint'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior2} className="img-fluid mb-2" style={{width:'80%'}} />
            <h6>{language=='telugu'? 'లాంగ్ లైఫ్ 15':'Longlife 15'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior3} className="img-fluid mb-2" style={{width:'80%'}}/>
            <h6>{language=='telugu'? 'లాంగ్ లైఫ్ Pu టైల్':'Longlife Pu Tile'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior4} className="img-fluid mb-2"style={{width:'80%'}} />
            <h6>{language=='telugu'? 'వాల్మాస్తా టైల్':'Walmasta Lite'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior5} className="img-fluid mb-2" style={{width:'80%'}} />
            <h6>{language=='telugu'? 'వీతేరుకోఅట్ గ్లోవ్ ':'Weathercoat Glow'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior6} className="img-fluid mb-2" style={{width:'80%'}}/>
            <h6>{language=='telugu'? 'వీతేరుకోఅట్ అంటి దుస్ట్':'Weathercoat Anti Dustt'}</h6>
          </div>
        </div>
      </div>

       <div className="container mt-4 d-block d-md-none">
          <h2 className="text-center">{language =='telugu'? 'ఏసియన్ పెయింట్స్': 'Asian Paints'}</h2>
          <div className="row g-3">
            <div className="col-6 text-center">
               <img src={interior7} className="img-fluid mb-2" style={{width:'75%'}} />
                <h6>{language=='telugu'? 'Ace పౌర్ప్లస్':'Ace Powerplus'}</h6>
            </div>
            <div className="col-6 text-center">
              <img src={interior8} className="img-fluid mb-2" style={{width:'75%'}} />
              <h6>{language=='telugu'? 'అపెక్స్ శైనే డస్ట్ ప్రూఫ్ అడ్వాన్స్':'Apex Shyne Dust Proof Advance'}</h6>
                   
            </div>
            <div className="col-6 text-center">
                <img src={interior10} className="img-fluid mb-2" style={{width:'75%'}} />
                <h6 >{language=='telugu'? 'డ్యూరలైఫ్ టాప్ కోట్':'Duralife Topcoat'}</h6>
            </div>
            <div className="col-6 text-center">
              <img src={interior10} className="img-fluid mb-2" style={{width:'75%'}} />
              <h6 >{language=='telugu'? 'ఎక్సటెరియర్ నేయభారత్':'Exterior Neobharat'}</h6>
            </div>
            <div className="col-6 text-center">
              <img src={interior11} className="img-fluid mb-2" style={{width:'75%'}} />
               <h6 >{language=='telugu'? 'ఎక్సటెరియర్ వాల్స్ అల్టిమా ప్రొటెక్':'Exterior Walls Ultima Protek'}</h6>
            </div>
            <div className="col-6 text-center">
             <img src={interior12} className="img-fluid mb-2" style={{width:'75%'}} />
             <h6>{language=='telugu'? 'అల్టిమా స్ట్రెచ్ పక్షాట్':'Ultima Stretch Packshot'}</h6>
            </div>
          </div>
        </div>
    </>
  );
};

export default ExteriorPaints;
