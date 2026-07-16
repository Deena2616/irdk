import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/karaoke.css";

// Assets
import bg1 from "../assets/events_bg_one.png";
import bg2 from "../assets/events_bg_two.png";
import bg3 from "../assets/events_bg_three.png";
import bg4 from "../assets/events_bg_four.png";
import bg5 from "../assets/events_bg_five.png";
import c1 from "../assets/events_one.png";
import c2 from "../assets/events_two.png";
import c3 from "../assets/events_three.png";
import c4 from "../assets/events_four.png";
import c5 from "../assets/events_five.png";
import r10 from "../assets/events_image.png";
import r12 from "../assets/events_212.png";
import r13 from "../assets/events_213.png";
import r14 from "../assets/events_214.png";

const slides = [
  { id: 1, bg: bg1, img: c1 },
  { id: 2, bg: bg2, img: c2 },
  { id: 3, bg: bg3, img: c3 },
  { id: 4, bg: bg4, img: c4 },
  { id: 5, bg: bg5, img: c5 },
];

export default function EventsPage() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="karaoke-page-wrapper">
      
      {/* SECTION 1: HERO & 3D CAROUSEL */}
      <section className="hero-section ">
        <div className="bg-wrapper bg-overlay">
          {slides.map((slide, i) => (
            <div
              key={`bg-${slide.id}`}
              className={`bg-slide ${i === index ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
          ))}
        </div>

        <div className="content-container container text-center">
          <header className="header-text">
            {/* Text manually lowercased */}
            <h1 className="hero-title">Stay tuned for exciting experiences! </h1> <br/>
            <p className="hero-subtitle">
              Enjoy live performances, dj nights, movie-related events, and special entertainment programs that bring energy and excitement to the mall atmosphere. 
            </p>
          </header>

          <div className="carousel-stage">
            {slides.map((slide, i) => {
              let pos = "hidden";
              if (i === index) pos = "active";
              else if (i === (index - 1 + slides.length) % slides.length) pos = "prev";
              else if (i === (index + 1) % slides.length) pos = "next";

              return (
                <div key={slide.id} className={`carousel-card ${pos}`}>
                  <div className="card-inner">
                    <img src={slide.img} alt="karaoke room" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: FUN & FESTIVITIES */}
      <section 
        className={`festivities-section ${isVisible ? "in-view" : ""}`} 
        ref={sectionRef}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            
            <div className="col-lg-7 animate-left">
              <h2 className="section-title">Upcoming mall events </h2><br></br>
              <h3 className="section-subtitle">Weekend fun & festivities</h3>
              <p className="section-desc">
                Join us every saturday & sunday for a weekend full of entertainment!
              </p>
              
              <div className="poster-horizontal-grid">
                <div className="mini-poster animate-pop-1"><img src={r12} alt="k1" /></div>
                <div className="mini-poster animate-pop-2"><img src={r13} alt="k2" /></div>
                <div className="mini-poster animate-pop-3"><img src={r14} alt="k3" /></div>
              </div>
            </div>

            <div className="col-lg-5 animate-right">
              <div className="single-asset-container">
                <img src={r10} alt="karaoke collage" className="karaoke-single-asset img-fluid" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}