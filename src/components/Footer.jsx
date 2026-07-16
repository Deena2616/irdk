import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Footer.css";
import Footer1 from "../assets/Footer1.png";
import Youtube from "../assets/Youtube.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/Facebook.png";
import x from "../assets/x.png";

const Footer = () => {
  const location = useLocation();
  
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleLinkClick = (to) => {
    scrollToTop();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <footer className="py-4 Footer-bg-footer">
      <div className="container rounded-4 p-4 text-white">
        <div className="row gy-4 align-items-start">

          {/* LEFT SECTION */}
          <div className="col-lg-4 col-md-6">
            <img src={Footer1} alt="" />

            <h6 className="fw-semibold">Malaysia</h6>
            <p className="small opacity-75">
              Registered Office Address:<br />
              C/o Market City Resources Pvt Ltd,<br />
              Ground Floor RR Hosiery Building,<br />
              Shree Laxmi Woollen Mills Estate,<br />
              Mahalaxmi, Malaysia 400011.
            </p>

            <p className="mb-2">Follow Us</p>
            <div className="d-flex gap-2">
              <a href="https://x.com/irdklmall" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <span className="Footer-social-icon text-white"><i class="fa-brands fa-x-twitter"></i></span>
              </a>
              <a href="https://www.instagram.com/irdkl_mall?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <span className="Footer-social-icon text-white"><i class="fa-brands fa-instagram"></i></span>
              </a>
              <a href="https://www.facebook.com/irdklmall" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <span className="Footer-social-icon text-white"><i class="fa-brands fa-facebook"></i></span>
              </a>
              <a href="https://www.youtube.com/@tansrimramasamy9118" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <span className="Footer-social-icon text-white"><i class="fa-brands fa-youtube"></i></span>
              </a>
            </div>
          </div>

          {/* CENTER MAP */}
          <div className="col-lg-4 col-md-6 d-flex ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1413582320365!2d101.489588!3d3.056825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc52e7e9dba235%3A0xe5866419a26d768f!2sIRDKL%20Mall!5e0!3m2!1sen!2sin!4v1770269085631!5m2!1sen!2sin%22"
              width="250"
              height="250"
              className="rounded-3 border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* RIGHT LINKS */}
          <div className="col-lg-4">
            <div className="row">
              <div className="col-6 d-flex flex-column Footer-footer-main text-start">
                <Link to="/about" className={`Footer-footer-link ${isActive('/about') ? 'active' : ''}`} onClick={() => handleLinkClick('/about')}>ABOUT US</Link>
                <Link to="/terms" className={`Footer-footer-link ${isActive('/terms') ? 'active' : ''}`} onClick={() => handleLinkClick('/terms')}>TERMS & CONDITIONS</Link>
                <Link to="/services" className={`Footer-footer-link ${isActive('/services') ? 'active' : ''}`} onClick={() => handleLinkClick('/services')}>SERVICES</Link>
                <Link to="/offers" className={`Footer-footer-link ${isActive('/offers') ? 'active' : ''}`} onClick={() => handleLinkClick('/offers')}>OFFERS</Link>
                <Link to="/gallery" className={`Footer-footer-link ${isActive('/gallery') ? 'active' : ''}`} onClick={() => handleLinkClick('/gallery')}>GALLERY</Link>
              </div>

              <div className="col-6 d-flex flex-column Footer-footer-main text-start">
                <Link to="/careers" className={`Footer-footer-link ${isActive('/careers') ? 'active' : ''}`} onClick={() => handleLinkClick('/careers')}>CAREERS</Link>
                <Link to="/faq" className={`Footer-footer-link ${isActive('/faq') ? 'active' : ''}`} onClick={() => handleLinkClick('/faq')}>FAQ</Link>
                <Link to="/contact" className={`Footer-footer-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => handleLinkClick('/contact')}>CONTACT US</Link>
                <Link to="/events" className={`Footer-footer-link ${isActive('/events') ? 'active' : ''}`} onClick={() => handleLinkClick('/events')}>EVENTS</Link>
              </div>
            </div>

            <p className="small text-white mt-4">
              &copy; IRDKL Mall All Right Reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;