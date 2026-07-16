import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Dining.css';

// Images
import heroImage       from '../assets/topimage_dining.png';
import brand1          from '../assets/bucksandcakes_small_rounded.png';
import brand2          from '../assets/burger_small_rounded.png';
import brand3          from '../assets/chunckburger_small_rounded.png';
import brand4          from '../assets/pizza_small_rounded.png';
import dineLeftImage   from '../assets/diningatmal_left_smallrounded.png';
import pointsEyes      from '../assets/points_eyes.png';
import cafeLogo        from '../assets/explore_coffee_card.png';
import pizzaLogo       from '../assets/explore_pizzahut_card.png';
import candyLogo       from '../assets/explore_candy_card.png';
import leftDecor       from '../assets/left_icecream.png';
import rightDecor      from '../assets/right_burger.png';

export const Dining = () => {
  const navigate        = useNavigate();
  const bannerTextRef   = useRef(null);
  const dineTextRef     = useRef(null);
  const dineImageRef    = useRef(null);
  const exploreRef      = useRef(null);
  const menuRef         = useRef(null);
  const shopCardsRef    = useRef([]);
  const menuCardsRef    = useRef([]);
  const decorLeftRef    = useRef(null);
  const decorRightRef   = useRef(null);
  const menuSectionRef  = useRef(null);

  /* ── General scroll animations ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    [bannerTextRef, dineTextRef, dineImageRef,
     exploreRef, menuRef, decorLeftRef, decorRightRef
    ].forEach(ref => ref.current && observer.observe(ref.current));

    return () => observer.disconnect();
  }, []);

  /* ── Explore shop cards stagger — trigger only once ── */
  useEffect(() => {
    const exploreObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            shopCardsRef.current.forEach((card, i) => {
              if (card) setTimeout(() => card.classList.add('animate-in'), i * 450);
            });
            exploreObserver.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (exploreRef.current) exploreObserver.observe(exploreRef.current);
    return () => exploreObserver.disconnect();
  }, []);

  /* ── Menu cards staggered slide ── */
  useEffect(() => {
    const menuObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            menuCardsRef.current.forEach((card, i) => {
              if (card) setTimeout(() => card.classList.add('animate-in'), i * 220);
            });
            menuObserver.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );

    if (menuSectionRef.current) menuObserver.observe(menuSectionRef.current);
    return () => menuObserver.disconnect();
  }, []);

  /* ── Data ── */
  const newShops = [
    {
      name: 'CAFE COFFEE DAY',
      description: 'Step into our café spaces for freshly brewed coffee, handcrafted beverages, and delicious snacks.',
      logo: cafeLogo
    },
    {
      name: 'PIZZA HUT',
      description: 'From crispy crusts to rich toppings, our pizzas serve up freshly baked perfection.',
      logo: pizzaLogo
    },
    {
      name: 'HOUSE OF CANDY',
      description: 'Discover a colorful world of candies, chocolates, and treats for all ages.',
      logo: candyLogo
    }
  ];

  const menuShops = [
    { name: 'SHOP A', hours: '24 HRS' },
    { name: 'SHOP B', hours: '24 HRS' },
    { name: 'SHOP C', hours: '24 HRS' },
    { name: 'SHOP D', hours: '24 HRS' },
    { name: 'SHOP E', hours: '24 HRS' },
    { name: 'SHOP F', hours: '24 HRS' }
  ];

  const features = [
    { id: 1, text: 'Multi-cuisine restaurants' },
    { id: 2, text: 'Comfortable seating' },
    { id: 3, text: 'Hygienic & fresh food' },
    { id: 4, text: 'Kids-friendly options' },
    { id: 5, text: 'Late-night eateries' }
  ];

  const brandLogos = [brand1, brand2, brand3, brand4];

  return (
    <div className="dining-page">

      {/* ================================================================
          BANNER / HERO
          - No Bootstrap container/row/col wrappers here.
          - banner-section handles full-bleed + exact viewport height.
          ================================================================ */}
      <section className="banner-section">
        <div className="banner-wrapper">
          <img
            src={heroImage}
            alt="Savory Food Court"
            className="banner-img"
          />
          <div
            ref={bannerTextRef}
            className="banner-overlay animate-on-scroll slide-up"
          >
            <h1 className="banner-title mb-2 fs-3">Savory Food Court</h1>
            <h1 className="banner-title mb-2 fs-3">Grab N Go Concession</h1>
          </div>
        </div>
      </section>

      {/* ================================================================
          DINE AT MALL
          ================================================================ */}
      <section className="dine-section">
        <div className="container">
          <div className="row align-items-center">

            {/* Left: Text */}
            <div className="col-lg-5">
              <div
                ref={dineTextRef}
                className="dine-text animate-on-scroll kishore slide-left"
              >
                <h2 className="section-heading">Dine At Mall</h2>

                <p className="section-text">
                  A vibrant food court offering a wide range of local and
                  international cuisines under one roof.
                </p>
                <p className="section-text">
                  Quick-service food and beverage concept designed for guests
                  on the move.
                </p>

                {/* Brand logos */}
                <div>
                  <div className="d-flex align-items-center brand-logos-container">
                    <div className="d-flex">
                      {brandLogos.map((logo, i) => (
                        <div key={i} className="brand-circle">
                          <img
                            src={logo}
                            alt="brand"
                            className="w-100 h-100 object-fit-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="brands-count">100+ Brands</span>
                  </div>
                </div>

                {/* Features grid */}
                <div className="row features-grid">
                  <div className="col-6">
                    {features.slice(0, 3).map(f => (
                      <div key={f.id} className="feature-item">
                        <img src={pointsEyes} alt="icon" className="feature-icon" />
                        <span className="feature-text">{f.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="col-6">
                    {features.slice(3).map(f => (
                      <div key={f.id} className="feature-item">
                        <img src={pointsEyes} alt="icon" className="feature-icon" />
                        <span className="feature-text">{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="col-lg-7">
              <div
                ref={dineImageRef}
                className="dine-image animate-on-scroll slide-right"
              >
                <img
                  src={dineLeftImage}
                  alt="Dine At Mall"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          EXPLORE NEW SHOPS
          ================================================================ */}
      <section className="explore-section bg-white py-5 position-relative overflow-hidden">
        <div className="container-fluid position-relative">

          {/* Floating decor */}
          <div ref={decorLeftRef} className="float-wrapper decor-left left-decor">
            <div className="float-shadow" />
            <img src={leftDecor} alt="Left decor" className="float-image" />
          </div>
          <div ref={decorRightRef} className="float-wrapper decor-right right-decor">
            <div className="float-shadow" />
            <img src={rightDecor} alt="Right decor" className="float-image" />
          </div>

          <div
            ref={exploreRef}
            className="text-center mb-5 animate-on-scroll slide-up"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <h2 className="section-heading-lg">
              Explore Our <span className="text-dark">New Shops</span>
            </h2>
            <p className="section-desc mx-auto">
              Something delicious just arrived! Explore our newly opened
              restaurants and cafés serving fresh flavors, exciting menus,
              and unforgettable tastes.
            </p>
          </div>

          <div className="container">
            <div
              className="row justify-content-center g-4"
              style={{ position: 'relative', zIndex: 10 }}
            >
              {newShops.map((shop, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
                >
                  <div
                    ref={el => shopCardsRef.current[index] = el}
                    className="shop-card new-shop scale-up bg-light rounded-4 text-center shadow d-flex flex-column justify-content-between align-items-center"
                  >
                    <h3 className="card-title mb-4">{shop.name}</h3>
                    <div className="logo-wrapper d-flex align-items-center justify-content-center mb-4">
                      <img src={shop.logo} alt={shop.name} className="shop-logo" />
                    </div>
                    <p className="card-desc flex-grow-1 mb-4">{shop.description}</p>
                    <button
                      onClick={() =>
                        navigate(
                          index === 0 ? '/store-view1' :
                          index === 1 ? '/store-view2' : '/store-view9'
                        )
                      }
                      className="btn btn-dark btn-store rounded-pill"
                    >
                      View Store
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          OUR MENU
          ================================================================ */}
      <section className="menu-section bg-white py-5" ref={menuSectionRef}>
        <div className="container">
          <div
            ref={menuRef}
            className="text-center mb-5 animate-on-scroll slide-up"
          >
            <h2 className="section-heading-lg">
              Our <span className="text-dark">Menu</span>
            </h2>
            <p className="menu-desc mx-auto px-3">
              Our dine menu offers a delicious variety of freshly prepared
              dishes to satisfy every craving. Enjoy classic and specialty
              pizzas made with rich cheese and fresh toppings, along with
              juicy burgers and perfectly grilled sandwiches that are ideal
              for a quick and tasty meal.
            </p>
          </div>

          <div className="row justify-content-center g-4">
            {menuShops.map((shop, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div
                  ref={el => menuCardsRef.current[index] = el}
                  className={`menu-card overflow-hidden position-relative
                    ${index >= 3 ? 'slide-right-to-left' : 'slide-left-to-right'}`}
                  onClick={e => {
                    if (window.innerWidth <= 768)
                      e.currentTarget.classList.toggle('flipped');
                  }}
                >
                  <div className="menu-inner">
                    <div className="menu-front position-absolute h-100">
                      <div className="menu-img d-flex align-items-center justify-content-center position-relative rounded-4">
                        <span className="shop-placeholder position-absolute">
                          {shop.name}
                        </span>
                        <div className="menu-content position-absolute bottom-0 start-0 end-0 p-4">
                          <h3 className="menu-title text-white text-start mb-2">
                            {shop.name}
                          </h3>
                          <div className="d-flex align-items-center gap-5 mb-3">
                            <span className="text-white small">Restaurant</span>
                            <span className="text-white small">
                              <i className="bi bi-clock"></i> {shop.hours}
                            </span>
                          </div>
                          <button
                            onClick={() => navigate(`/store-view${index + 3}`)}
                            className="btn btn-light btn-store-small rounded-pill mx-auto d-block"
                          >
                            View Store
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="menu-back position-absolute w-100 h-100 bg-white d-flex align-items-center justify-content-center p-5 rounded-4">
                      <div className="text-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dining;