import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import interior1 from '../assets/paints/wooden/image.webp';
import interior2 from '../assets/paints/wooden/image (1).webp';
import interior3 from '../assets/paints/wooden/image (2).webp';
import interior4 from '../assets/paints/wooden/image (3).webp';
import interior5 from '../assets/paints/wooden/image (4).webp';
import interior6 from '../assets/paints/wooden/image (5).webp';
import interior7 from '../assets/paints/a_wooden/woodtech-emporio-pu-asian-paints.png';
import interior8 from '../assets/paints/a_wooden/woodtech-melamyne-asian-paints.png';
import interior9 from '../assets/paints/a_wooden/woodtech-melamyne-gold-clear-asian-paints.png';
import interior10 from '../assets/paints/a_wooden/woodtech-polyester-gold-asian-paints.png';
import interior11 from '../assets/paints/a_wooden/woodtech-pu-palette-interiors-asian-paints.png';
import interior12 from '../assets/paints/a_wooden/woodtech-touchwood-packshot-asian-paints.png';


const WoodenPaints = ({language}) => {
  return (
    <>
    <div className="container mt-4 d-none d-md-block">
        <h2>{language =='telugu'? 'బర్జర్ పెయింట్స్' :'Berger Paints'}</h2>
      <div className="row">
        
          <div className="col-2" >
              <img src={interior1} className="card-img-top" style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'ఇంపీరియా బ్లాక్ ప్రిమెర్':'Imperia Black Primer'}</h6>
              
            </div>

            <div className="col-2" >
              <img src={interior2} className="card-img-top" style={{width:'105%'}} />
           
                <h6 className="card-title text-center">{language=='telugu'? 'ఇంపీరియా బ్రీతి ఈజీ':'Imperia Breathe Easy'}</h6>
            
            </div>

            <div className="col-2" >
              <img src={interior3} className="card-img-top"  style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'ఇంపీరియా దురకోటు':'Imperia Durakoat'}</h6>
              
            </div>

            <div className="col-2" >
              <img src={interior4} className="card-img-top"  style={{width:'115%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'ఇంపీరియా గోల్డ్':'Imperia Gold'}</h6>
          
            </div>

            <div className="col-2" >
              <img src={interior5} className="card-img-top"  style={{width:'105%'}} />
              
                <h6 className="card-title text-center">{language=='telugu'? 'ఇంపీరియా ట్రెండ్స్':'Imperia Trendz'}</h6>
             
            </div>

            <div className="col-2" >
              <img src={interior6} className="card-img-top"  style={{width:'105%'}} />
          
                <h6 className="card-title text-center">{language=='telugu'? 'మేలామినే':'Melamine'}</h6>
            
            </div>

      </div>
    </div>

    <div className="container mt-4 d-none d-md-block">
        <h2>{language =='telugu'? 'ఏసియన్ పెయింట్స్': 'Asian Paints'}</h2>
      <div className="row">
        
          <div className="col-2" >
              <img src={interior7} className="card-img-top"  />
             
                <h6 className="card-title text-center">{language=='telugu'? 'వూడ్ట్చ్ ఎంపోరియో':'Woodtech Emporio'}</h6>
          
            </div>

            <div className="col-2" >
              <img src={interior8} className="card-img-top"  />
           
                <h6 className="card-title text-center">{language=='telugu'? 'వూడ్ట్చ్ మేళమినే':'Woodtech Melamyne'}</h6>
             
            </div>

            <div className="col-2" >
              <img src={interior9} className="card-img-top"  />
             
                <h6 className="card-title text-center">{language=='telugu'? 'వూడ్ట్చ్ మేళమినే గోల్డ్':'Woodtech Melamyne Gold'}</h6>
           
            </div>

            <div className="col-2" >
              <img src={interior10} className="card-img-top"  />
            
                <h6 className="card-title text-center">{language=='telugu'? 'వూడ్ట్చ్ పాలిస్టర్ గోల్డ్':'Woodtech Polyester Gold'}</h6>
           
            </div>

            <div className="col-2" >
              <img src={interior11} className="card-img-top"  />
            
                <h6 className="card-title text-center">{language=='telugu'? 'వూడ్ట్చ్ పు పాలెట్':'Woodtech Pu Palette'}</h6>
          
            </div>

            <div className="col-2" >
              <img src={interior12} className="card-img-top"  />
           
                <h6 className="card-title text-center">{language=='telugu'? 'వూడ్ట్చ్ తౌచ్వుడ్':'Woodtech Touchwood'}</h6>
        
            </div>

      </div>
    </div>

     <div className="container mt-4 d-block d-md-none">
        <h2 className="text-center">{language =='telugu'? 'బర్జర్ పెయింట్స్' :'Berger Paints'}</h2>
        <div className="row g-3">
          <div className="col-6 text-center">
            <img src={interior1} className="img-fluid mb-2"  style={{width:'70%'}}/>
            <h6>{language=='telugu'? 'ఇంపీరియా బ్లాక్ ప్రిమెర్':'Imperia Black Primer'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior2} className="img-fluid mb-2" style={{width:'80%'}} />
            <h6>{language=='telugu'? 'ఇంపీరియా బ్రీతి ఈజీ':'Imperia Breathe Easy'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior3} className="img-fluid mb-2" style={{width:'80%'}}/>
            <h6>{language=='telugu'? 'ఇంపీరియా దురకోటు':'Imperia Durakoat'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior4} className="img-fluid mb-2"style={{width:'80%'}} />
            <h6>{language=='telugu'? 'ఇంపీరియా గోల్డ్':'Imperia Gold'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior5} className="img-fluid mb-2" style={{width:'80%'}} />
            <h6>{language=='telugu'? 'ఇంపీరియా ట్రెండ్స్':'Imperia Trendz'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior6} className="img-fluid mb-2" style={{width:'80%'}}/>
            <h6>{language=='telugu'? 'మేలామినే':'Melamine'}</h6>
          </div>
        </div>
      </div>

     <div className="container mt-4 d-block d-md-none">
        <h2 className="text-center">{language =='telugu'? 'ఏసియన్ పెయింట్స్': 'Asian Paints'}</h2>
        <div className="row g-3">
          <div className="col-6 text-center">
             <img src={interior7} className="img-fluid mb-2" style={{width:'75%'}} />
              <h6>{language=='telugu'? 'వూడ్ట్చ్ ఎంపోరియో':'Woodtech Emporio'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior8} className="img-fluid mb-2" style={{width:'75%'}} />
            <h6>{language=='telugu'? 'వూడ్ట్చ్ మేళమినే':'Woodtech Melamyne'}</h6>
                 
          </div>
          <div className="col-6 text-center">
              <img src={interior10} className="img-fluid mb-2" style={{width:'75%'}} />
              <h6 >{language=='telugu'? 'వూడ్ట్చ్ మేళమినే గోల్డ్':'Woodtech Melamyne Gold'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior10} className="img-fluid mb-2" style={{width:'75%'}} />
            <h6 >{language=='telugu'? 'వూడ్ట్చ్ పాలిస్టర్ గోల్డ్':'Woodtech Polyester Gold'}</h6>
          </div>
          <div className="col-6 text-center">
            <img src={interior11} className="img-fluid mb-2" style={{width:'75%'}} />
            <h6 >{language=='telugu'? 'వూడ్ట్చ్ పు పాలెట్':'Woodtech Pu Palette'}</h6>
          </div>
          <div className="col-6 text-center">
           <img src={interior12} className="img-fluid mb-2" style={{width:'75%'}} />
            <h6>{language=='telugu'? 'వూడ్ట్చ్ తౌచ్వుడ్':'Woodtech Touchwood'}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default WoodenPaints;
