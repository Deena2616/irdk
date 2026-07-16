import React from "react";
import "../css/Faq.css";
import Faq1 from "../assets/Faq1.png";

const Faq= () => {
  return (
    <div className="faq-wrapper">

      {/* HERO SECTION */}
      <div className="faq-hero">
        <img
          src={Faq1}
          alt="FAQ"
          className="faq-hero-image"
        />

        <div className="faq-hero-overlay">
          <h2 className="faq-hero-title">How Can We Help You</h2>
          <p className="faq-hero-text">
            Find answers to common questions about our services, facilities,
            and visiting experience at IRDKL shopping mall.
          </p>
        </div>
      </div>

      {/* FAQ CONTENT */}
      <div className="container faq-content py-5">

        <h3 className="faq-heading text-center mb-4">
          Frequently <span className="text-dark">Asked Question</span>
        </h3>

        <div className="accordion faq-accordion" id="faqAccordion">

          {/* ITEM 1 */}
          <div className="accordion-item faq-item">
            <h2 className="accordion-header faq-header">
              <button
                className="accordion-button collapsed faq-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqOne"
              >
                WHAT ARE YOUR OPENING TIMINGS ?
              </button>
            </h2>
            <div
              id="faqOne"
              className="accordion-collapse collapse faq-collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body faq-body">
                Monday to Sunday 10:00am to 12:00 Midnight
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="accordion-item faq-item">
            <h2 className="accordion-header faq-header">
              <button
                className="accordion-button collapsed faq-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqTwo"
              >
                DO YOU PROVIDE WHEELCHAIRS ?
              </button>
            </h2>
            <div
              id="faqTwo"
              className="accordion-collapse collapse faq-collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body faq-body">
                Yes we do. The wheelchairs are complimentary from
                the Mall Management Office.
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="accordion-item faq-item">
            <h2 className="accordion-header faq-header">
              <button
                className="accordion-button collapsed faq-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqThree"
              >
                IS CAR PARKING FREE ?
              </button>
            </h2>
            <div
              id="faqThree"
              className="accordion-collapse collapse faq-collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body faq-body">
                With 9 level car parks comprising 472 bays in the mall and additional 
    bays in the annex building, customers can rest assured about parking
their vehicles and look forward to a relaxed time at the mall.
              </div>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="accordion-item faq-item">
            <h2 className="accordion-header faq-header">
              <button
                className="accordion-button collapsed faq-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqFour"
              >
                WHERE DO I GO IF I HAVE LOST OR FOUND SOMETHING ?
              </button>
            </h2>
            <div
              id="faqFour"
              className="accordion-collapse collapse faq-collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body faq-body">
                All lost property and found items should be taken to the Mall 
                Management Office
              </div>
            </div>
          </div>

          {/* ITEM 5 */}
          <div className="accordion-item faq-item">
            <h2 className="accordion-header faq-header">
              <button
                className="accordion-button collapsed faq-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqFive"
              >
                IS THERE FREE WIFI ?
              </button>
            </h2>
            <div
              id="faqFive"
              className="accordion-collapse collapse faq-collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body faq-body">
                Yes, there is free Wifi for everyone visiting IRDKL MALL. Contact Helpdesk
for registration.
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="faq-cta text-center mt-5">
          <h4 className="faq-cta-title">Still have question ?</h4>
          <p className="faq-cta-text">
            Our service team is here to help you 24/7.
          </p>
          <button className="btn faq-cta-button">Email Us</button>
        </div>

      </div>
    </div>
  );
};

export default Faq;