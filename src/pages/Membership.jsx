import React, { useEffect, useRef } from 'react';
import '../css/Membership.css';

import loyaltyCardsImage from '../assets/membership_three_cards.png';
import vipCardMainImage  from '../assets/membership_three_man.png';

export const Membership = () => {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftRef.current)  observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="membership-page">
      <section className="membership-section">
        <div className="container">
          <div className="membership-row">

            {/* ── LEFT COLUMN ── */}
            <div ref={leftRef} className="membership-left fade-in-up">

              {/* Text content always on top */}
              <div className="membership-text-block">
                <h1 className="membership-title">Membership</h1>
                <h2 className="membership-subtitle">Rewards &amp; Loyalty</h2>
                <p className="membership-desc">
                  Join us every Saturday &amp; Sunday for a weekend full of
                  entertainment! Earn more every time you shop, dine, or play.
                  Our Loyalty Club turns your everyday visits into exciting
                  rewards, exclusive perks, and unforgettable experiences.
                  Expect:
                </p>
              </div>

              {/* Cards image — pushed to bottom on desktop, order:3 on mobile */}
              <div className="membership-cards-wrap">
                <img
                  src={loyaltyCardsImage}
                  alt="Loyalty Cards"
                  className="membership-cards-img"
                />
              </div>
            </div>

            {/* ── RIGHT COLUMN — VIP image ── 
                On mobile this sits between desc text and cards (order:2)
                On desktop this is the full-height right column
            ── */}
            <div ref={rightRef} className="membership-right fade-in-up">
              <img
                src={vipCardMainImage}
                alt="VIP Card Experience"
                className="membership-right-img"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;