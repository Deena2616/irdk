import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Games.css';

/* -------------------------------------------------------
   Asset imports — HERO
   ------------------------------------------------------- */
import heroBg from '../assets/hero-bg.png';
import hero1  from '../assets/hero1.png';
import hero2  from '../assets/hero2.png';
import hero3  from '../assets/hero3.png';
import hero4  from '../assets/hero4.png';
import hero5  from '../assets/hero5.png';
import hero6  from '../assets/hero6.png';
import hero7  from '../assets/hero7.png';

/* -------------------------------------------------------
   Asset imports — CATEGORIES
   ------------------------------------------------------- */
import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
import game3 from '../assets/game3.png';

/* -------------------------------------------------------
   Asset imports — SUB-IMAGES
   ------------------------------------------------------- */
import game13 from '../assets/game13.png';
import game14 from '../assets/game14.png';

import game21 from '../assets/game21.png';
import game22 from '../assets/game22.png';
import game23 from '../assets/game23.png';
import game24 from '../assets/game24.png';

import game31 from '../assets/game31.png';
import game32 from '../assets/game32.png';
import game33 from '../assets/game33.png';
import game34 from '../assets/game34.png';

import arrowImg from '../assets/arrow.png';

/* -------------------------------------------------------
   Category card data with sub-images
   ------------------------------------------------------- */
const CATEGORIES = [
  {
    id: 1,
    img: game1,
    title: 'British Pool – Challenger',
    desc: 'Professionally maintained British style pool and snooker tables for casual and competitive play.',
    subImages: [game1, heroBg, game13, game14],
  },
  {
    id: 2,
    img: game2,
    title: 'Virtual 9D & Digital Arcades',
    desc: 'Cutting-edge gaming attractions including immersive 9D virtual reality rides and digital arcade games.',
    subImages: [game21, game22, game23, game24],
  },
  {
    id: 3,
    img: game3,
    title: 'Digital Darts – Target',
    desc: 'Next-generation digital dart systems offering interactive gameplay in a modern entertainment environment.',
    subImages: [game31, game32, game33, game34],
  },
];

/* -------------------------------------------------------
   useSectionVisible — fires once when element enters viewport
   ------------------------------------------------------- */
function useSectionVisible() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* -------------------------------------------------------
   PhoneCard (hero grid card)
   Simplified: Uses standard border-radius (no custom cuts)
   ------------------------------------------------------- */
const PhoneCard = ({ src, alt, heightClass }) => {
  return (
    <div className={`g-phone-frame ${heightClass}`}>
      <img src={src} alt={alt} className="g-zoom-animation" />
    </div>
  );
};

/* -------------------------------------------------------
   Games — full component
   ------------------------------------------------------- */
const Games = () => {
  const { ref: newSectionRef, visible: newSectionVisible } = useSectionVisible();
  const { ref: catRef, visible: catVisible } = useSectionVisible();
  
  // State for expanded card with animation phases
  const [expandedCard, setExpandedCard] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [showSubImages, setShowSubImages] = useState(false);
  const [showBackBtn, setShowBackBtn] = useState(false);

  // Handle card click with animation sequence
  const handleCardClick = (cardId) => {
    setExpandedCard(cardId);
    setIsFlipping(true);
    setShowBackBtn(false);
    
    setTimeout(() => {
      setIsExpanding(true);
    }, 1000);
    
    setTimeout(() => {
      setShowSubImages(true);
    }, 1300);

    setTimeout(() => {
      setShowBackBtn(true);
    }, 1600);
  };

  // Handle back button
  const handleBack = () => {
    setShowBackBtn(false);
    setShowSubImages(false);

    setTimeout(() => {
      setIsExpanding(false);
    }, 300);

    setTimeout(() => {
      setIsFlipping(false);
    }, 1000);

    setTimeout(() => {
      setExpandedCard(null);
    }, 1850);
  };

  // Get selected category
  const selectedCategory = CATEGORIES.find(cat => cat.id === expandedCard);

  return (
    <>
      {/* ============================================================
          SECTION 1 — HERO with synchronized zoom animations
          ============================================================ */}
      <section className="g-hero-container">
        <img src={heroBg} alt="VR Background" className="g-bg-image" />
        <div className="g-glass-overlay" />

        <div className="g-content-layer container-fluid h-100 d-flex flex-column px-2 px-md-3">
          {/* Title */}
          <div className="text-center pt-3 pt-md-4 pb-2">
            <h1 className="g-main-title mb-1">GAMES</h1>
            <p className="g-subtitle mb-2">CHILDREN ARCADE</p>
            <p className="g-subtitle mb-0">VIRTUAL ARCADE</p>
          </div>

          {/* Grid Container */}
          <div className="flex-grow-1 d-flex align-items-end pb-3">
            <div className="g-hero-grid w-100">
              {/* Col A — Game1 + Game2 */}
              <div className="g-hero-col g-col-a">
                <PhoneCard src={hero1} alt="Game 1" heightClass="g-height-1" />
                <PhoneCard src={hero2} alt="Game 2" heightClass="g-height-5" />
              </div>

              {/* Col B — Game3 */}
              <div className="g-hero-col g-col-b">
                <PhoneCard src={hero3} alt="Game 3" heightClass="g-height-3" />
              </div>

              {/* Col C — Game4 (Center Tall) */}
              <div className="g-hero-col g-col-c">
                <PhoneCard src={hero4} alt="Game 4" heightClass="g-height-2" />
              </div>

              {/* Col D — Game5 */}
              <div className="g-hero-col g-col-d">
                <PhoneCard src={hero5} alt="Game 5" heightClass="g-height-4" />
              </div>

              {/* Col E — Game6 + Game7 */}
              <div className="g-hero-col g-col-e">
                <PhoneCard src={hero6} alt="Game 6" heightClass="g-height-6" />
                <PhoneCard src={hero7} alt="Game 7" heightClass="g-height-7" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — GAME CATEGORIES
          ============================================================ */}
      <section className="g-categories-section" ref={catRef}>
        <div className="container">
          <div className="row g-4">
            {CATEGORIES.map((cat, i) => (
              <div key={cat.id} className="col-12 col-md-4">
                <div 
                  className={`g-cat-card text-center ${catVisible ? 'g-visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.5}s` }}
                >
                  {/* Image */}
                  <div className="g-cat-img-wrap">
                    <img src={cat.img} alt={cat.title} className="img-fluid" />
                  </div>

                  {/* Title */}
                  <h3 className="g-cat-title">{cat.title}</h3>

                  {/* Description */}
                  <p className="g-cat-desc mb-0">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — NEW GAMING ZONE with smooth flip & expand
          ============================================================ */}
      <section className="g-new-section" ref={newSectionRef}>
        <div className={`container py-4 ${expandedCard ? 'g-container-expanded' : ''}`}>
          
          {/* Heading - Fades when card is clicked */}
          <div className={`row mb-4 mb-md-5 g-section-header ${expandedCard ? 'g-header-hidden' : ''}`}>
            <div className="col-12 text-center">
              <h2 className="g-new-heading">
                <span className="g-heading-light">Step into a world of fun,</span>{' '}
                <span className="g-heading-normal">Excitement, and Adventure</span>
                <br />
                <span className="g-heading-light">at our</span>{' '}
                <span className="g-heading-accent">Mall Games Zone.</span>
              </h2>
            </div>
          </div>

          {/* Content Area */}
          <div className="row align-items-center g-new-content position-relative">
            
            {/* NORMAL VIEW - 3 cards + text */}
            {!expandedCard && (
              <>
                {/* Image 1 */}
                <div className="col-12 col-md-3 mb-4 mb-md-0">
                  <div 
                    className={`g-new-card ${newSectionVisible ? 'g-new-visible' : ''}`} 
                    style={{ transitionDelay: '0s' }}
                    onClick={() => handleCardClick(1)}
                  >
                    <div className="g-new-img-wrapper">
                      <img src={game1} alt="Arcade Games" className="img-fluid" />
                    </div>
                  </div>
                </div>

                {/* Image 2 */}
                <div className="col-12 col-md-3 mb-4 mb-md-0">
                  <div 
                    className={`g-new-card ${newSectionVisible ? 'g-new-visible' : ''}`} 
                    style={{ transitionDelay: '0.2s' }}
                    onClick={() => handleCardClick(2)}
                  >
                    <div className="g-new-img-wrapper">
                      <img src={game2} alt="Pool Table" className="img-fluid" />
                    </div>
                  </div>
                </div>

                {/* Image 3 */}
                <div className="col-12 col-md-3 mb-4 mb-md-0">
                  <div 
                    className={`g-new-card ${newSectionVisible ? 'g-new-visible' : ''}`} 
                    style={{ transitionDelay: '0.4s' }}
                    onClick={() => handleCardClick(3)}
                  >
                    <div className="g-new-img-wrapper">
                      <img src={game3} alt="Gaming Station" className="img-fluid" />
                    </div>
                  </div>
                </div>

                {/* Text and Arrow */}
                <div className="col-12 col-md-3">
                  <div 
                    className={`g-new-text-wrapper ${newSectionVisible ? 'g-new-visible' : ''}`} 
                    style={{ transitionDelay: '0.6s' }}
                  >
                    <div className="d-flex justify-content-center align-items-center mb-3">
                      <img src={arrowImg} alt="Arrow" className="g-arrow-img" />
                    </div>
                    <p className="g-new-text text-md-start text-center mb-3">
                      kids, teens, and adults, our gaming area offers entertainment for all age groups.
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* EXPANDED VIEW - Flipping and expanding card */}
            {expandedCard && selectedCategory && (
              <div className="col-12 g-expanded-col">
                <div className="g-expanded-wrapper">
                  
                  {/* Main Card with Flip Animation */}
                  <div className={`g-flip-container ${isFlipping ? 'g-flipping' : ''} ${isExpanding ? 'g-expanding' : ''}`}>
                    <div className="g-flip-inner">
                      {/* Front Face */}
                      <div className="g-flip-front">
                        <img src={selectedCategory.img} alt={selectedCategory.title} />
                      </div>
                      
                      {/* Back Face */}
                      <div className="g-flip-back">
                        <img src={selectedCategory.img} alt={selectedCategory.title} />
                        
                        {/* Back Button — icon only, black */}
                        {showBackBtn && (
                          <button 
                            className="g-back-btn-overlay"
                            onClick={handleBack}
                            aria-label="Go back"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sub Images - Slide in after expand */}
                  {isExpanding && (
                    <div className="row g-3 g-sub-images-row">
                      {selectedCategory.subImages.map((subImg, idx) => (
                        <div key={idx} className="col-6 col-md-3">
                          <div 
                            className={`g-sub-img-card ${showSubImages ? 'g-sub-visible' : ''}`}
                            style={{ transitionDelay: `${idx * 0.1}s` }}
                          >
                            <div className="g-sub-img-wrapper">
                              <img src={subImg} alt={`${selectedCategory.title} ${idx + 1}`} className="img-fluid" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default Games;