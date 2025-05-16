import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import interior1 from '../assets/paints/metal/bp anti-corrosive 1K_300x321 pxl_1.webp';
import interior2 from '../assets/paints/metal/butterfly.webp';
import interior3 from '../assets/paints/metal/can.webp';
import interior4 from '../assets/paints/metal/lustre can.webp';
import interior5 from '../assets/paints/metal/enamel can.webp';
import interior6 from '../assets/paints/metal/satin.webp';
import interior7 from '../assets/paints/a_metal/apcolite_rustshield-packshot.png';
import interior8 from '../assets/paints/a_metal/metals-apcolite-2pack-epoxy-finish-asian-paints-new.png';
import interior9 from '../assets/paints/a_metal/metals-apcolite-hi-gloss-enamel-asian-paints.png';
import interior10 from '../assets/paints/a_metal/metals-apcolite-premium-gloss-enamel-asian-paints.png';
import interior11 from '../assets/paints/a_metal/metals-apcolite-premium-satin-enamel-asian-paints-new.png';
import interior12 from '../assets/paints/a_metal/metals-tractor-enamel-asian-paints.png';


const MetalPaints = ({language}) => {
  return (
    <>
    <div className="container mt-4 d-none d-md-block">
        <h2>{language =='telugu'? 'బర్జర్ పెయింట్స్' :'Berger Paints'}</h2>
      <div className="row">
        
          <div className="col-2" >
              <img src={interior1} className="card-img-top" style={{width:'110%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'BP అంటి-చోర్రోసివే':'Bp Anti-Corrosive'}</h6>
              
            </div>

            <div className="col-2" >
              <img src={interior2} className="card-img-top" style={{width:'105%'}} />
           
                <h6 className="card-title text-center">{language=='telugu'? 'బటర్ఫ్లై జీప్ ఎనామెల్':'Butterfly GP Enamel'}</h6>
            
            </div>

            <div className="col-2" >
              <img src={interior3} className="card-img-top"  style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'లుక్స్తోల్ హాయ్-గ్లాస్':'Luxol Hi-Gloss'}</h6>
              
            </div>

            <div className="col-2" >
              <img src={interior4} className="card-img-top"  style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'లుక్స్తోల్ లుస్త్రే':'Luxol Lustre'} </h6>
          
            </div>

            <div className="col-2" >
              <img src={interior5} className="card-img-top"  style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'లుక్స్తోల్ PU ఎనామెల్':'Luxol PU enamel'}</h6>
             
            </div>

            <div className="col-2" >
              <img src={interior6} className="card-img-top"  style={{width:'105%'}} />
          
                <h6 className="card-title text-center">{language=='telugu'? 'లుక్స్తోల్ శాటిన్':'Luxol Satin'}</h6>
            
            </div>

      </div>
    </div>

    <div className="container mt-4 d-none d-md-block">
        <h2>{language =='telugu'? 'ఏసియన్ పెయింట్స్': 'Asian Paints'}</h2>
      <div className="row">
        
          <div className="col-2" >
              <img src={interior7} className="card-img-top" style={{width:'110%'}} />
             
                <h6 className="card-title text-center">{language=='telugu'? 'అప్కోలితే రూస్టషిల్డ్':'Apcolite RustShield'}</h6>
          
            </div>

            <div className="col-2" >
              <img src={interior8} className="card-img-top"  />
           
                <h6 className="card-title text-center">{language=='telugu'? '2పాక్ ఎపోక్సీ ఫినిష్':'2Pack Epoxy Finish'}</h6>
             
            </div>

            <div className="col-2" >
              <img src={interior9} className="card-img-top"  />
             
                <h6 className="card-title text-center">{language=='telugu'? 'హాయ్ గ్లాస్ ఎనామెల్':'Hi Gloss Enamel'}</h6>
           
            </div>

            <div className="col-2" >
              <img src={interior10} className="card-img-top"  />
            
                <h6 className="card-title text-center">{language=='telugu'? 'ప్రీమియం గ్లాస్ ఎనామెల్':'Premium Gloss Enamel'}</h6>
           
            </div>

            <div className="col-2" >
              <img src={interior11} className="card-img-top"  />
            
                <h6 className="card-title text-center">{language=='telugu'? 'ప్రీమియం శాటిన్ ఎనామెల్':'Premium Satin Enamel'}</h6>
          
            </div>

            <div className="col-2" >
              <img src={interior12} className="card-img-top"  />
           
                <h6 className="card-title text-center">{language=='telugu'? 'ట్రాక్టర్ ఎనామెల్':'Tractor-Enamel'}</h6>
        
            </div>

      </div>
    </div>

     <div className="container mt-4 d-block d-md-none">
        <h2 className="text-center">{language =='telugu'? 'బర్జర్ పెయింట్స్' :'Berger Paints'}</h2>
        <div className="row g-3">
          <div className="col-6 text-center">
            <img src={interior1} className="img-fluid mb-2"  style={{width:'80%'}}/>
            <h6>{language=='telugu'? 'BP అంటి-చోర్రోసివే':'Bp Anti-Corrosive'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior2} className="img-fluid mb-2" style={{width:'80%'}} />
            <h6>{language=='telugu'? 'బటర్ఫ్లై జీప్ ఎనామెల్':'Butterfly GP Enamel'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior3} className="img-fluid mb-2" style={{width:'80%'}}/>
            <h6>{language=='telugu'? 'లుక్స్తోల్ హాయ్-గ్లాస్':'Luxol Hi-Gloss'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior4} className="img-fluid mb-2"style={{width:'80%'}} />
            <h6>{language=='telugu'? 'లుక్స్తోల్ లుస్త్రే':'Luxol Lustre'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior5} className="img-fluid mb-2" style={{width:'80%'}} />
            <h6>{language=='telugu'? 'లుక్స్తోల్ PU ఎనామెల్':'Luxol PU enamel'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior6} className="img-fluid mb-2" style={{width:'80%'}}/>
            <h6>{language=='telugu'? 'లుక్స్తోల్ శాటిన్':'Luxol Satin'}</h6>
          </div>
        </div>
      </div>

     <div className="container mt-4 d-block d-md-none">
        <h2 className="text-center">{language =='telugu'? 'ఏసియన్ పెయింట్స్': 'Asian Paints'}</h2>
        <div className="row g-3">
          <div className="col-6 text-center">
             <img src={interior7} className="img-fluid mb-2" style={{width:'75%'}} />
              <h6>{language=='telugu'? 'అప్కోలితే రూస్టషిల్డ్':'Apcolite RustShield'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior8} className="img-fluid mb-2" style={{width:'75%'}} />
            <h6>{language=='telugu'? '2పాక్ ఎపోక్సీ ఫినిష్':'2Pack Epoxy Finish'}</h6>
                 
          </div>
          <div className="col-6 text-center">
              <img src={interior10} className="img-fluid mb-2" style={{width:'75%'}} />
              <h6 >{language=='telugu'? 'హాయ్ గ్లాస్ ఎనామెల్':'Hi Gloss Enamel'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior10} className="img-fluid mb-2" style={{width:'75%'}} />
            <h6 >{language=='telugu'? 'ప్రీమియం గ్లాస్ ఎనామెల్':'Premium Gloss Enamel'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior11} className="img-fluid mb-2" style={{width:'75%'}} />
                  <h6 >{language=='telugu'? 'ప్రీమియం శాటిన్ ఎనామెల్':'Premium Satin Enamel'}</h6>
          </div>
          <div className="col-6 text-center">
           <img src={interior12} className="img-fluid mb-2" style={{width:'75%'}} />
                 <h6>{language=='telugu'? 'ట్రాక్టర్ ఎనామెల్':'Tractor-Enamel'}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetalPaints;
