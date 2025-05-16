import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestimonialsSection = ({language}) => {

  const testimonials = {
  en: [
    {
      quote:
        'Excellent service and great variety of paints and tools. The staff is very helpful!',
      author: 'Ramesh K.',
    },
    {
      quote:
        'Very reliable and affordable. I always buy my hardware materials & electronics here.',
      author: 'Srilatha V.',
    },
    {
      quote:
        'Loved their collection of Asian and Berger paints. Highly recommended!',
      author: 'Kiran A.',
    },
  ],
  te: [
    {
      quote:
        'అద్భుతమైన సేవ మరియు విస్తృతమైన పెయింట్స్, టూల్స్ కలెక్షన్. సిబ్బంది ఎంతో సహాయకులు!',
      author: 'రమేష్ కె.',
    },
    {
      quote:
        'చాలా నమ్మదగిన మరియు సరసమైన ధరలు. హార్డ్‌వేర్, ఎలక్ట్రానిక్స్ అంటే నేనెప్పుడూ ఇక్కడే కొంటాను.',
      author: 'శ్రీలత వి.',
    },
    {
      quote:
        'ఆసియన్ మరియు బెర్గర్ పెయింట్స్ కలెక్షన్ బాగా నచ్చింది. ఖచ్చితంగా సిఫార్సు చేస్తాను!',
      author: 'కిరణ్ ఎ.',
    },
  ],
};

  return (
    <section
      id="testimonials"
      className="py-5"
      style={{
        paddingTop: '80px',
        background: 'linear-gradient(155deg, #004aad 15%, #5de0e6 100%)',
      }}
    >
      <div className="container">
        <h2
          className="mb-4"
          style={{
            fontFamily:'unset',
            fontSize: 'clamp(20px, 5vw, 32px)', // More responsive heading
            color: '#fff',
            textAlign: 'center',
          }}
        >
         {language =='telugu'? 'మా సేవలపై కస్టమర్ల స్పందనలు': 'What Our Customers Say'}
        </h2>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {testimonials[language === 'telugu' ? 'te' : 'en'].map((item, index) =>  (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
      <div
        className="p-4 rounded mx-auto"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          maxWidth: '700px',
          width: '100%',
          margin: '0 auto',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <p
          className="mb-2"
          style={{
            fontSize: 'clamp(16px, 4vw, 20px)',
            lineHeight: '1.6',
            padding: '0 10px',
          }}
        >
          "{item.quote}"
        </p>
        <h6 className="mt-2 fw-bold">— {item.author}</h6>
      </div>
    </div>
  ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">{language === 'telugu' ? 'ముందు' : 'Previous'}</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden"> {language === 'telugu' ? 'తర్వాత' : 'Next'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
