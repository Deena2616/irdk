import React from "react";
import { Link } from "react-router-dom";
import "../css/Careers.css";
import Careers1 from '../assets/Careers1.png';
import Careersus1 from '../assets/Careersus1.png';
import Careersus2 from '../assets/Careersus2.png';
import Careersus3 from '../assets/Careersus3.png';

const Career = () => {
  return (
    <div className="career-wrapper p-0">

      {/* HERO IMAGE SECTION */}
      <div className="career-hero-wrapper">
        <img
          src={Careers1}
          alt="IRDKL Mall"
          className="img-fluid w-100 career-hero-image"
        />
      </div>

      {/* WHY WORK WITH US */}
      <div className="container career-content-wrapper py-5">
        <div className="row">
          <div className="col-12 mb-4">
            <h2 className="career-title text-start mb-4">Why Work With Us</h2>
            <p className="career-description text-start">
              We believe a mall is more than just a place to shop — it’s a destination
              where people connect, relax, and create memories. Behind every great
              experience is a passionate team, and we’re always looking for talented
              individuals to grow with us.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="row text-center g-4">

          <div className="col-md-4 ">
            <div className="career-card h-100">
              <div className="career-icon mb-3">
                 <img src={Careersus1} alt="" />
              </div>
              <h5 className="career-card-title">Employee Discounts</h5>
              <p className="career-card-text">
                Enjoy exclusive discounts at over 200 premium brands and fine
                dining restaurants within the mall.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="career-card h-100">
              <div className="career-icon mb-3">
                <img src={Careersus2} alt="" />
              </div>
              <h5 className="career-card-title">Growth Opportunities</h5>
              <p className="career-card-text">
                Tailored mentorship programmes and clear internal promotion
                tracks across all departments.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="career-card h-100">
              <div className="career-icon mb-3">
                <img src={Careersus3} alt="" />
              </div>
              <h5 className="career-card-title">Vibrant Culture</h5>
              <p className="career-card-text">
                Join a diverse, high-energy community that celebrates success
                and fosters a supportive atmosphere.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 className="career-cta-title mb-4">Ready To Start Your Journey?</h2>
            <p className="career-cta-text">
              Whether you're looking for your first job or your next leadership role
            </p>
            <p className="career-cta-text mb-4">We have a place for you.</p>
            <Link to="/contact" className="btn btn-outline-secondary career-cta-button">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Career;