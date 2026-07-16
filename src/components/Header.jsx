import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Header.css';
import Headerlogo from '../assets/Head-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEntertainmentOpen, setIsEntertainmentOpen] = useState(false);

  const toggleHeaderMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEntertainment = (e) => {
    e.preventDefault();
    setIsEntertainmentOpen(!isEntertainmentOpen);
  };

  const closeMenu = () => {
    if (window.innerWidth < 992) {
      setIsMenuOpen(false);
      setIsEntertainmentOpen(false);
    }
  };

  return (
    <header className="header-master-container">
      {/* --- Top Bar Section --- */}
      <div className="header-top-bar">
        <div className="container-fluid">
          <div className="row align-items-center header-top-row">
            {/* Social Icons */}
            <div className="col-12 col-md-3 d-none d-md-flex header-socials-col">
              <div className="d-flex gap-3 header-socials-wrapper">
                <Link to="https://www.facebook.com/irdklmall" className="header-social-link text-white text-decoration-none" aria-label="Facebook">
                  <i className="fab fa-facebook-f" style={{ color: "#000000" }}></i>
                </Link>
                <Link to="https://www.instagram.com/irdkl_mall?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="header-social-link text-white text-decoration-none" aria-label="Instagram">
                  <i className="fab fa-instagram" style={{ color: "#000000" }}></i>
                </Link>
                <Link to="https://x.com/irdklmall" className="header-social-link text-white text-decoration-none" aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter" style={{ color: "#000000" }}></i>
                </Link>
                <Link to="#" className="header-social-link text-white text-decoration-none" aria-label="Google">
                  <i className="fab fa-google" style={{ color: "#000000" }}></i>
                </Link>
              </div>
            </div>

            {/* Hours */}
            <div className="col-12 col-md-6 text-center header-hours-col py-2 py-md-0">
              <div className="d-flex justify-content-center align-items-center gap-2 header-hours-wrapper">
                <span className="header-hours-text">
                  <i className="fa-solid fa-clock" style={{ color: "#000000" }}></i> Mon - Sun: 10:00am - 12:00 Midnight
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="col-12 col-md-3 d-none d-md-flex justify-content-end header-actions-col">
              <div className="d-flex gap-2 header-actions-wrapper">
                {/* <Link to="/contact" className="header-action-btn btn btn-sm rounded-0 fw-bold">
                  <i className="fa-solid fa-location-dot" style={{ color: "#000000" }}></i> Getting Here
                </Link> */}
                <Link to="/contact" className="header-action-btn btn btn-sm rounded-0 fw-bold">
                  <i className="fa-solid fa-phone" style={{ color: "#000000" }}></i> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Navigation Section --- */}
      <nav className="header-nav-section navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
        <div className="container-fluid">
          {/* Brand / Logo */}
          <Link to="/" className="header-brand-link navbar-brand d-flex flex-column text-decoration-none p-0">
            <img src={Headerlogo} alt="Header Logo" className="header-brand-logo" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="header-toggler navbar-toggler"
            type="button"
            onClick={toggleHeaderMenu}
            aria-label="Toggle navigation"
          >
            <span className="header-toggler-icon navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className={`header-collapse-wrapper collapse navbar-collapse flex-grow-1 ${isMenuOpen ? 'show' : ''}`}>
            <ul className="header-menu-list navbar-nav mb-2 mb-lg-0 align-items-lg-center">
              <li className="header-menu-item nav-item">
                <NavLink className="header-nav-link nav-link text-uppercase" to="/" end onClick={closeMenu}>Home</NavLink>
              </li>
              <li className="header-menu-item nav-item">
                <NavLink className="header-nav-link nav-link text-uppercase" to="/shops" onClick={closeMenu}>Shops</NavLink>
              </li>
              <li className="header-menu-item nav-item">
                <NavLink className="header-nav-link nav-link text-uppercase" to="/dine" onClick={closeMenu}>Dine</NavLink>
              </li>

              {/* Entertainment Dropdown - fully React controlled */}
              <li className={`header-menu-item nav-item dropdown ${isEntertainmentOpen ? 'show' : ''}`}>
                <Link
                  className="header-nav-link nav-link text-uppercase d-flex align-items-center justify-content-center gap-1"
                  to="#"
                  role="button"
                  onClick={toggleEntertainment}
                  aria-expanded={isEntertainmentOpen}
                >
                  Entertainment
                  <i
                    className={`fa-solid ${isEntertainmentOpen ? 'fa-chevron-down' : 'fa-chevron-up'} entertainment-arrow-icon`}
                    style={{ fontSize: '12px' }}
                  ></i>
                </Link>
                <ul className={`header-dropdown-menu dropdown-menu border-0 shadow rounded-0 ${isEntertainmentOpen ? 'show' : ''}`}>
                  <li>
                    <Link className="dropdown-item header-dropdown-item text-uppercase fw-bold" to="/games" onClick={closeMenu}>Games</Link>
                  </li>
                  <li>
                    <a className="dropdown-item header-dropdown-item text-uppercase fw-bold" href="https://www.tsrcinemax.asia/" onClick={closeMenu} target="_blank" rel="noopener noreferrer">Cinemax</a>
                  </li>
                  <li>
                    <Link className="dropdown-item header-dropdown-item text-uppercase fw-bold" to="/karaoke" onClick={closeMenu}>Karaoke</Link>
                  </li>
                </ul>
              </li>

              <li className="header-menu-item nav-item">
                <NavLink className="header-nav-link nav-link text-uppercase" to="/membership" onClick={closeMenu}>Membership</NavLink>
              </li>
              <li className="header-menu-item nav-item">
                <NavLink className="header-nav-link nav-link text-uppercase" to="/tsr-hall" onClick={closeMenu}>TSR Hall</NavLink>
              </li>
              <li className="header-menu-item nav-item">
                <NavLink className="header-nav-link nav-link text-uppercase" to="/events" onClick={closeMenu}>Events</NavLink>
              </li>
              <li className="header-menu-item nav-item">
                <NavLink className="header-nav-link nav-link text-uppercase" to="/offers" onClick={closeMenu}>Offers</NavLink>
              </li>
              <li className="header-menu-item nav-item">
                <NavLink className="header-nav-link nav-link text-uppercase" to="/services" onClick={closeMenu}>Services</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;