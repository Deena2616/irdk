import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Offers.css';

// ─── Asset Imports ────────────────────────────────────────────────────────────
import mallLight         from '../assets/malllight.png';
import Rectangle        from '../assets/Rectangle.png';
import RectangleDress   from '../assets/RectangleDress.png';
import RectangleGirl    from '../assets/RectangleGirl.png';
import RectangleWomen   from '../assets/RectangleWomen.png';
import Samsung          from '../assets/Samsung.png';
import SamsungGalaxyWater from '../assets/SamsungGalaxyWater.png';
import SamsungMobile    from '../assets/SamsungMobile.png';
import SamsungMobiles   from '../assets/SamsungMobiles.png';
import Bagbelt          from '../assets/BagBelt.png';
import Bags             from '../assets/Bags.png';
import BagShoe          from '../assets/BagShoe.png';
import BagStore         from '../assets/BagStore.png';

// ─── Data ─────────────────────────────────────────────────────────────────────

const attoxiftyProducts = [
  { img: RectangleGirl,  title: 'Neutral Blazer & Flats', sub: 'Combo',  disc: '5%'  },
  { img: RectangleWomen, title: 'Office to Brunch',        sub: 'Outfit', disc: '10%' },
  { img: RectangleDress, title: 'Rack with Winter',        sub: 'Cloths', disc: '3%'  },
];

const samsungProducts = [
  { img: SamsungGalaxyWater, title: ' GALAXY S24 ULTRA', sub: '', disc: '5%' },
  { img: SamsungMobile,      title: 'GALAXY S25 ULTRA', sub: '',    disc: '7%' },
  { img: SamsungMobiles,     title: 'GALAXY S24+',   sub: '', disc: '3%' },
];

const ckProducts = [
  { img: Bags,    title: 'Neutral Blazer & Flats', sub: 'Combo',  disc: '5%' },
  { img: Bagbelt, title: 'Office to Brunch',        sub: 'Outfit', disc: '7%' },
  { img: BagShoe, title: 'Rack with Winter',        sub: 'Cloths', disc: '3%' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * Renders a row of three product cards — always 3 columns on all screen sizes.
 */
const ProductCards = ({ products }) => (
  <div className="row g-2 g-sm-3 g-md-4 g-xl-5 justify-content-center justify-content-lg-start mb-4 offers-animate-up">
    {products.map((item, idx) => (
      <div key={idx} className="col-4">
        <div className="offers-card">
          <img
            src={item.img}
            alt={item.title}
            className="offers-card-img"
          />
          <div className="offers-card-content">
            <h3 className="offers-card-title">{item.title}</h3>
            <p  className="offers-card-sub">{item.sub}</p>
            <p  className="offers-card-discount">{item.disc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Offers = () => {
  const navigate = useNavigate();

  // Scroll-triggered entrance animations
  useEffect(() => {
    const handleScroll = () => {
      const selectors = '.offers-animate-left, .offers-animate-right, .offers-animate-up';
      document.querySelectorAll(selectors).forEach(el => {
        const { top, bottom } = el.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
          el.classList.add('offers-in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-vh-100 offers-page-container">

      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="position-relative offers-hero-section">
        <img
          src={mallLight}
          alt="Mall Light"
          className="w-100 h-100 position-absolute top-0 start-0 offers-hero-bg"
        />

        <div className="offers-hero-wrapper">
          <div className="container-fluid ps-4 ps-md-5">
            <div className="row">
              <div className="col-12 text-start">
                <h1 className="offers-hero-heading mb-3">
                  <span className="offers-one">Offers and</span>{' '}
                  <span className="text-white">Packages</span>
                </h1>
                <p className="offers-hero-sub text-white mb-2">Fashion | Footwear | Accessories</p>
                <p className="offers-hero-body text-white mb-1">Bring your family &amp; friends and make</p>
                <p className="offers-hero-body text-white mb-0">every moment special at IRDKL Mall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ATTOXIFTY SHOP Section ────────────────────────────────────────── */}
      <section className="container-fluid py-5 px-4 px-md-5 offers-section">
        <div className="row g-4 g-lg-5 align-items-center">

          {/* Left — main image (hidden on mobile, shown on lg+) */}
          <div className="col-12 col-lg-5 ">
            <div className="offers-animate-left offers-main-img-wrap">
              <img
                src={Rectangle}
                alt="Attoxifty Main Product"
                className="img-fluid offers-main-img rounded-3"
              />
            </div>
          </div>

          {/* Right — info + cards + button */}
          <div className="col-12 col-lg-7 ">
            <div className="mb-4 offers-animate-right">
              <h1 className="offers-shop-title mb-3">ATTOXIFTY SHOP</h1>
              <h2 className="offers-sale-subtitle mb-3">Mega Sale is Live!</h2>
              <p className="offers-shop-desc text-dark mb-2">Enjoy exciting discounts on your favorite products.</p>
              <p className="offers-shop-desc text-dark mb-0">Flat discounts available across selected items.</p>
            </div>

            {/* ★ Use ProductCards component — same as Samsung & C&K sections */}
            <ProductCards products={attoxiftyProducts} />

            <div className="d-flex offers-animate-up justify-content-center">
              <button className="offers-custom-btn" onClick={() => navigate('/Attoxifty')}>
                View Offer
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SAMSUNG STORE Section ─────────────────────────────────────────── */}
      <section className="container-fluid py-5 px-4 px-md-5 offers-section">
        <div className="row g-4 g-lg-5 align-items-center">

          {/* Left — info + cards + button */}
          <div className="col-12 col-lg-7 order-2 order-lg-1 text-center">
            <div className=" text-lg-start mb-4 offers-animate-left">
              <h1 className="offers-shop-title mb-3">SAMSUNG STORE</h1>
              <h2 className="offers-sale-subtitle mb-3">Mega Sale is Live!</h2>
              <p className="offers-shop-desc text-dark mb-2">Enjoy exciting discounts on your favorite products.</p>
              <p className="offers-shop-desc text-dark mb-0">Flat discounts available across selected items.</p>
            </div>

            <ProductCards products={samsungProducts} />

            <div className="d-flex offers-animate-up justify-content-center">
              <button
                className="offers-custom-btn"
                onClick={() => navigate('/samsung')}
              >
                View Offer
              </button>
            </div>
          </div>

          {/* Right — main image */}
          <div className="col-12 col-lg-5 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
            <div className="offers-animate-right offers-main-img-wrap">
              <img
                src={Samsung}
                alt="Samsung Mobile"
                className="img-fluid offers-main-img rounded-3"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ─── C&K SHOP Section ──────────────────────────────────────────────── */}
      <section className="container-fluid py-5 px-4 px-md-5 offers-section">
        <div className="row g-4 g-lg-5 align-items-center">

          {/* Left — main image */}
          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start">
            <div className="offers-animate-left offers-main-img-wrap">
              <img
                src={BagStore}
                alt="C&K Main Product"
                className="img-fluid offers-main-img rounded-3"
              />
            </div>
          </div>

          {/* Right — info + cards + button */}
          <div className="col-12 col-lg-7 text-center">
            <div className=" text-lg-start mb-4 offers-animate-right">
              <h1 className="offers-shop-title mb-3">C&amp;K SHOP</h1>
              <h2 className="offers-sale-subtitle mb-3">Mega Sale is Live!</h2>
              <p className="offers-shop-desc text-dark mb-2">Enjoy exciting discounts on your favorite products.</p>
              <p className="offers-shop-desc text-dark mb-0">Flat discounts available across selected items.</p>
            </div>

            <ProductCards products={ckProducts} />

            <div className="d-flex text-center justify-content-center offers-animate-up">
              <button
                className="offers-custom-btn"
                onClick={() => navigate('/ck')}
              >
                View Offer
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Offers;