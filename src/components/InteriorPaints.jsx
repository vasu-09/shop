import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import interior1 from '../assets/paints/berger-easy-clean.jpg';
import interior2 from '../assets/paints/bison can shot.webp';
import interior3 from '../assets/paints/bison glow can.webp';
import interior4 from '../assets/paints/rangoli rich matt.webp';
import interior5 from '../assets/paints/ceiling-white-can.webp';
import interior6 from '../assets/paints/silk glamor matt can.webp';
import interior7 from '../assets/paints/a_interior/interior-walls-apcolite-all-protek-shyne-packshot-asian-paints.png';
import interior8 from '../assets/paints/a_interior/interior-walls-royale-aspira-luxury-emulsion-asian-paints.png';
import interior9 from '../assets/paints/a_interior/interior-walls-royale-shyne-luxury-emulsion-asian-paints.png';
import interior10 from '../assets/paints/a_interior/interior-walls-tractor-emulsion-advanced-asian-paints.png';
import interior11 from '../assets/paints/a_interior/neobharat.png';
import interior12 from '../assets/paints/a_interior/royale-glitz-new-packshot.png';


const InteriorPaints = ({language}) => {
  return (
    <>
      <div className="container mt-4 d-none d-md-block">
        <h2>{language =='telugu'? 'బర్జర్ పెయింట్స్' :'Berger Paints'}</h2>
      <div className="row">
        
          <div className="col-2" >
              <img src={interior1} className="card-img-top" style={{width:'90%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'ఈజీ క్లీన్':'Easy Clean'}</h6>
              
            </div>

            <div className="col-2" >
              <img src={interior2} className="card-img-top" style={{width:'105%'}} />
           
                <h6 className="card-title text-center">{language=='telugu'? 'బైసన్ చన్ షాట్':'Bison Can Shot'}</h6>
            
            </div>

            <div className="col-2" >
              <img src={interior3} className="card-img-top"  style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'బైసన్ గౌ':'Bison Gow'}</h6>
              
            </div>

            <div className="col-2" >
              <img src={interior4} className="card-img-top"  style={{width:'115%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'రంగోలి రిచ్ మాట్':'Rangoli Rich Matt'}</h6>
          
            </div>

            <div className="col-2" >
              <img src={interior5} className="card-img-top"  style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'సెయిలింగ్ వైట్':'Ceiling White'}</h6>
             
            </div>

            <div className="col-2" >
              <img src={interior6} className="card-img-top"  style={{width:'105%'}} />
          
                <h6 className="card-title text-center">{language=='telugu'? 'సిల్క్ గ్లామర్ మాట్':'Silk Glamor Matt'}</h6>
            
            </div>

      </div>
    </div>

    <div className="container mt-4 d-block d-md-none">
    <h2 className="text-center">{language =='telugu'? 'బర్జర్ పెయింట్స్' :'Berger Paints'}</h2>
    <div className="row g-3">
      <div className="col-6 text-center">
        <img src={interior1} className="img-fluid mb-2"  style={{width:'70%'}}/>
        <h6>{language=='telugu'? 'ఈజీ క్లీన్':'Easy Clean'}</h6>
      </div>
      <div className="col-6 text-center">
        <img src={interior2} className="img-fluid mb-2" style={{width:'80%'}} />
        <h6>{language=='telugu'? 'బైసన్ చన్ షాట్':'Bison Can Shot'}</h6>
      </div>
      <div className="col-6 text-center">
        <img src={interior3} className="img-fluid mb-2" style={{width:'80%'}}/>
        <h6>{language=='telugu'? 'బైసన్ గౌ':'Bison Gow'}</h6>
      </div>
      <div className="col-6 text-center">
        <img src={interior4} className="img-fluid mb-2"style={{width:'80%'}} />
        <h6>{language=='telugu'? 'రంగోలి రిచ్ మాట్':'Rangoli Rich Matt'}</h6>
      </div>
      <div className="col-6 text-center">
        <img src={interior5} className="img-fluid mb-2" style={{width:'80%'}} />
        <h6>{language=='telugu'? 'సెయిలింగ్ వైట్':'Ceiling White'}</h6>
      </div>
      <div className="col-6 text-center">
        <img src={interior6} className="img-fluid mb-2" style={{width:'80%'}}/>
        <h6>{language=='telugu'? 'సిల్క్ గ్లామర్ మాట్':'Silk Glamor Matt'}</h6>
      </div>
    </div>
  </div>

    <div className="container mt-4 d-none d-md-block">
        <h2>{language =='telugu'? 'ఏసియన్ పెయింట్స్': 'Asian Paints'}</h2>
      <div className="row">
        
          <div className="col-2" >
              <img src={interior7} className="card-img-top"  />
             
                <h6 className="card-title text-center">{language=='telugu'? 'అప్కోలితే అల్ ప్రొటెక్ షేన్':'Apcolite All Protek Shyne'}</h6>
          
            </div>

            <div className="col-2" >
              <img src={interior8} className="card-img-top"  />
           
                <h6 className="card-title text-center">{language=='telugu'? 'రాయల్ ఆస్పిరా లగ్జరీ ఏమూలసిన్':'Royale Aspira Luxury Emulsion'}</h6>
             
            </div>

            <div className="col-2" >
              <img src={interior9} className="card-img-top"  />
             
                <h6 className="card-title text-center">{language=='telugu'? 'రాయల్ శైనే లగ్జరీ ఏమూలసిన్':'Royale Shyne Luxury Emulsion'}</h6>
           
            </div>

            <div className="col-2" >
              <img src={interior10} className="card-img-top"  />
            
                <h6 className="card-title text-center">{language=='telugu'? 'ట్రాక్టర్ ఎమెల్సీన్ అడ్వాన్స్డ్':'Tractor Emulsion Advanced'}</h6>
           
            </div>

            <div className="col-2" >
              <img src={interior11} className="card-img-top"  />
              <h6 className="card-title text-center">{language=='telugu'? 'నేయభారత్':'Neobharat'}</h6>
            </div>

            <div className="col-2" >
              <img src={interior12} className="card-img-top"  />
             <h6 className="card-title text-center">{language=='telugu'? 'రాయల్ గ్లిట్జ్':'Royale Glitz'}</h6>
        
            </div>

      </div>
    </div>

     <div className="container mt-4 d-block d-md-none">
    <h2 className="text-center">{language =='telugu'? 'ఏసియన్ పెయింట్స్': 'Asian Paints'}</h2>
    <div className="row g-3">
      <div className="col-6 text-center">
         <img src={interior7} className="img-fluid mb-2" style={{width:'75%'}} />
          <h6>{language=='telugu'? 'అప్కోలితే అల్ ప్రొటెక్ షేన్':'Apcolite All Protek Shyne'}</h6>
      </div>
      <div className="col-6 text-center">
        <img src={interior8} className="img-fluid mb-2" style={{width:'75%'}} />
        <h6>{language=='telugu'? 'రాయల్ ఆస్పిరా లగ్జరీ ఏమూలసిన్':'Royale Aspira Luxury Emulsion'}</h6>
             
      </div>
      <div className="col-6 text-center">
          <img src={interior10} className="img-fluid mb-2" style={{width:'75%'}} />
          <h6 >{language=='telugu'? 'రాయల్ శైనే లగ్జరీ ఏమూలసిన్':'Royale Shyne Luxury Emulsion'}</h6>
      </div>
      <div className="col-6 text-center">
        <img src={interior10} className="img-fluid mb-2" style={{width:'75%'}} />
        <h6 >{language=='telugu'? 'ట్రాక్టర్ ఎమెల్సీన్ అడ్వాన్స్డ్':'Tractor Emulsion Advanced'}</h6>
      </div>
      <div className="col-6 text-center">
        <img src={interior11} className="img-fluid mb-2" style={{width:'75%'}} />
              <h6 >{language=='telugu'? 'నేయభారత్':'Neobharat'}</h6>
      </div>
      <div className="col-6 text-center">
       <img src={interior12} className="img-fluid mb-2" style={{width:'75%'}} />
             <h6>{language=='telugu'? 'రాయల్ గ్లిట్జ్':'Royale Glitz'}</h6>
      </div>
    </div>
  </div>
    </>
  );
};

export default InteriorPaints;
