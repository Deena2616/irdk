import React, { useState } from 'react';
import '../css/gallery.css';
import r1 from '../assets/r1.png';
import r3 from '../assets/r3.png';
import r4 from '../assets/r4.png';
import r5 from '../assets/r5.png';
import r6 from '../assets/r6.png';
import r7 from '../assets/r7.png';
import r8 from '../assets/r8.png';
import r9 from '../assets/r9.png';
import r10 from '../assets/r10.png';
import herrow from '../assets/herrow.png';

function Gallery() {
  const galleryImages = [r1, r10, r3, r4, r5, r6, r7, r8, r9];
  const [visibleMode, setVisibleMode] = useState(9); // Modes: 9, 6, 3

  const goNext = () => setVisibleMode((prev) => (prev > 3 ? prev - 3 : 3));
  const goPrev = () => setVisibleMode((prev) => (prev < 9 ? prev + 3 : 9));

  const getCardClasses = (index) => {
    let classes = ["gallery-card"];
    
    const side = index % 3 === 0 ? "pos-center" : index % 3 === 1 ? "pos-left" : "pos-right";
    classes.push(side);

    if (visibleMode === 9) {
      if (index <= 2) classes.push("layer-1");
      else if (index <= 5) classes.push("layer-2");
      else if (index <= 8) classes.push("layer-3");
    } 
    else if (visibleMode === 6) {
      if (index <= 2) classes.push("hidden-down");
      else if (index <= 5) classes.push("layer-1");
      else if (index <= 8) classes.push("layer-2");
    } 
    else if (visibleMode === 3) {
      if (index <= 2) classes.push("hidden-waiting");
      else if (index <= 5) classes.push("hidden-down");
      else if (index <= 8) classes.push("layer-1");
    }

    return classes.join(" ");
  };

  return (
    <div className="gallery-page irdkl-typography">
      <section className="gallery-hero"></section>
      
      <section className="gallery-content-section py-5">
        <div className="container text-center">
          <div className="gallery-header">
            <h2 className="gallery-title">Our Gallery</h2>
            <p className="gallery-subtitle text-center">
              Experience the opulence and grandeur of our meticulously designed venues, 
              tallored for your most preious moments.
            </p>
          </div>

          <div className="gallery-carousel-wrapper d-flex justify-content-center">
            <div className="gallery-cards">
              {galleryImages.map((img, index) => (
                <div key={index} className={getCardClasses(index)}>
                  <img src={img} alt={`Gallery ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-arrows d-flex justify-content-center">
            <button 
              className="gallery-arrow-btn me-3" 
              onClick={goPrev} 
              disabled={visibleMode === 9}
            >
              <img src={herrow} alt="Previous" className="gallery-arrow-icon-left" />
            </button>
            <button 
              className="gallery-arrow-btn" 
              onClick={goNext} 
              disabled={visibleMode === 3}
            >
              <img src={herrow} alt="Next" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;