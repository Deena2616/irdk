import React from 'react';
import '../css/aboutus.css';
import bigMallImg from '../assets/bigmall.png';
import mpImg from '../assets/mp.png';
import roomImg from '../assets/room.png';
import eyeIcon from '../assets/eye.png';
import rocketIcon from '../assets/rocket.png';

function AboutUs() {
  return (
    <div className="aboutus-page irdkl-typography">
      {/* Hero banner */}
      <section className="about-hero">
        <img
          src={bigMallImg}
          alt="IRDKL Mall at night"
          className="img-fluid w-100"
        />
      </section>

      {/* Intro section with MP image and text */}
      <section className="pt-5">
        <div className="container">
          <div className="row g-2 align-items-start">
            <div className="col-lg-5 col-md-12">
              <div className="card border-0 shadow-sm about-mp-card">
                <img src={mpImg} alt="Dr. MP Ramasamy" className=" about-mp-img" />
                <div className="about-mp-name">
                  <span className="fw-semibold">Dr. MP Ramasamy</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-start about-text1">
              <p className="mb-3 intro-paragraph">
                Welcome to IRDKL Mall, Shah Alam’s premier entertainment destination. Developed by IRDK LAND Group, led by Tan Sri Dato’ Sri Dr. MP Ramasamy, IRDKL Mall brings together world-class entertainment, dining, and event spaces under one iconic roof.
              </p>
              <p className="mb-0 intro-paragraph">
                Setting a national benchmark, IRDKL Mall is the first entertainment mall in the country to integrate cinemas, gaming attractions, interactive virtual reality, family karaoke, sports entertainment, dining, and a full-scale conference hall within a single destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About IRDKL Mall section */}
      <section className="py-4">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6 col-md-12">
              <h2 className="h4 mb-4 text-start abouttext"><span className="color">About</span> IRDKL Mall</h2>
              <p className="mb-3 about-paragraph">
                IRDKL Mall is a visionary entertainment development IRDK LAND Group , created to elevate the lifestyle and leisure landscape of ShahAlam. Built with innovation, technology, and community in mind, the mall introduces a new concept of entertainment-focused retail in Malaysia.
              </p>
              <p className="mb-0 about-paragraph">
                Setting a national benchmark, IRDKL Mall is the first entertainment mall in the country to integrate cinemas, gaming attractions, interactive virtual reality, family karaoke, sports entertainment, dining, and a full-scale conference hall within a single destination.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="position-relative about-room-wrapper">
                <img
                  src={roomImg}
                  alt="IRDKL interior"
                  className="img-fluid w-100 rounded-3"
                />
                <div className="about-room-badge bg-white shadow-sm text-center">
                  <div><span className="color">10</span></div>
                  <div className="small about-room-text">Floors Of Premium</div>
                  <div className="small about-room-text">Experiences</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-1 justify-content-around vm-row">
            {/* Vision card */}
            <div className="col-md-6 col-lg-5">
              <div className="vision-card vision-custom text-center text-white p-4 p-md-4">
                <img src={eyeIcon} alt="Our Vision" className="vm-large-icon mx-auto vision-icon" />
                <h3 className="h5 mb-3 o1">Our Vision</h3>
                <p className="mb-0 text-start vision-paragraph">
                  To be Malaysia’s leading entertainment-centric lifestyle destination, delivering
                  unforgettable experiences through innovation, technology, and hospitality.
                </p>
              </div>
            </div>

            {/* Mission card */}
            <div className="col-md-6 col-lg-5">
              <div className="mission-card mission-custom p-4 p-md-4">
                <img src={rocketIcon} alt="Our Mission" className="vm-large-icon mx-auto" />
                <h3 className="h5 mb-3 text-center o1">Our Mission</h3>
                <ol className="mb-0 ps-3 text-start ">
                  <li>To redefine entertainment retail in Malaysia.</li>
                  <li>To create a safe, exciting, and inclusive space for all age groups.</li>
                  <li>To support tenants with strong footfall and destination-driven traffic.</li>
                  <li>To provide world-class facilities for entertainment, dining, and events.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;