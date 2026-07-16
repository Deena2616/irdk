import React from 'react';
import '../css/contact.css';
import cardMallImg from '../assets/cardmall.png';
import mapImg from '../assets/map.png';
import starImg from '../assets/star.png';
import locationIcon from '../assets/location.png';
import callIcon from '../assets/call.png';
import mailIcon from '../assets/mail.png';
import webIcon from '../assets/web.png';
import starwhite from '../assets/starwhite.png';

function Contact() {
  return (
    <div className="contact-page irdkl-typography">
      {/* Hero Section */}
      <section className="contact-hero position-relative">
        <div className="container">
          <div className="row justify-content-center text-center py-4">
            <div className="col-lg-8 col-md-10">
              <div className="hero-text">
                <h1 className="display-4 fw-bold text-white mb-6">
                  We're here to help you.
                </h1>
                <p className="lead text-white mb-1 px-3">
                  Have a question about our stores, events, offices, or services?
                  Feel free to reach out to us anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Content Section */}
      <section className="py-3 bg-light">
        <div className="container">
          <div className="row g-4 align-items-stretch"> {/* added align-items-stretch */}
            {/* Left Column - Contact Info */}
            <div className="col-lg-6 d-flex flex-column">
              <div className="heading-container">
                <h2 className="h3 mb-5 text-start">
                  We would love to hear from you! <br />
                  Get in touch with us at the <br />
                  contact details given below
                </h2>
              </div>

              <div className="irdkl-card-container">
                <div className="card border-0 mb-lg-0 mb-4 irdkl-card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-7 text-start">
                        <h5 className="mb-3 cont1">IRDKL MALL</h5>
                        <p className="small mb-2 fw-bold">
                          No.1, Jalan Serai wangi M16/M, Alam Avenue 2,
                          Seksyen 16, 40000 Shah Alam, Selangor, Malaysia
                        </p>
                        <div className="d-flex align-items-center mb-2">
                          <span className=" me-2 cont2">4.1</span>
                          <img src={starImg} alt="rating" className="me-1" style={{ height: '19px', width: '19px' }} />
                          <img src={starImg} alt="rating" className="me-1" style={{ height: '19px', width: '19px' }} />
                          <img src={starImg} alt="rating" className="me-1" style={{ height: '19px', width: '19px' }} />
                          <img src={starwhite} alt="rating" className="me-1" style={{ height: '19px', width: '19px' }} />
                          <img src={starwhite} alt="rating" className="me-1" style={{ height: '19px', width: '19px' }} />
                        </div>
                        <a href="#reviews" className="text-primary text-decoration-none fw-bold cont3">
                          454 Reviews
                        </a>
                      </div>
                      <div className="col-12 col-md-5 d-flex mt-md-0 mt-3">
                        <img
                          src={cardMallImg}
                          alt="IRDKL Mall"
                          className="img-fluid rounded irdkl-card-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map Image Fitted */}
            <div className="col-lg-6">
              <div className="map-wrapper h-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1413582320365!2d101.489588!3d3.056825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc52e7e9dba235%3A0xe5866419a26d768f!2sIRDKL%20Mall!5e0!3m2!1sen!2sin!4v1770269085631!5m2!1sen!2sin%22" 
                  allowfullscreen
                  className="custom-map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="row g-4 mt-5">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center mb-3 justify-content-md-center justify-content-start text-start">
                <div className="p-3 me-4 flex-shrink-0">
                  <img src={locationIcon} alt="Location" style={{ width: '35px', height: '34px' }} />
                </div>
                <p className="mb-0 fontlocation">
                  Address: TSR Conference Hall (Ab) Sdn. Bhd,
                  (1135194-P) IRDKL Mall, Level 16 & 17,
                  No.1, Jalan Searah Maju M16/M, Alam Avenue 2,
                  Seksyen 16, 40000 Shah Alam, Selangor, Malaysia.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center mb-3 justify-content-start text-start web1">
                <div className="p-3 me-4 flex-shrink-0">
                  <img src={callIcon} alt="Phone" style={{ width: '35px', height: '34px' }} />
                </div>
                <p className="small mb-0 fontlocation">
                  T: (+603) 5522 2266, (+603) 5519 2266<br />
                  F: (+603) 5522 2265<br />
                  M: (+6) 012 615 3333, (+6) 019 261 8321
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center mb-3 justify-content-start">
                <div className="p-3 me-4 flex-shrink-0">
                  <img src={mailIcon} alt="E-mail" style={{ width: '35px', height: '34px' }} />
                </div>
                <p className="small mb-0 fontlocation text-start">
                  E-mail: enquiry@tsrconferencehall.com
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center mb-3 justify-content-start text-start web1">        
                <div className="p-3 me-4 flex-shrink-0">
                  <img src={webIcon} alt="Website" style={{ width: '35px', height: '34px' }} />
                </div>
                <p className="small mb-0 fontlocation">
                  Website: tsrconferencehall.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;