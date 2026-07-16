import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Shops.css';

// Import assets
import shopImage from '../assets/shop.png';
import iphoneLogo from '../assets/iphone-logo.png';
import gucciLogo from '../assets/gucci-logo.png';
import ckLogo from '../assets/ck-logo.png';
import rolexLogo from '../assets/rolex-logo.png';
import poloLogo from '../assets/polo-logo.png';
import lacosteLogo from '../assets/lacoste-logo.png';
import monclerLogo from '../assets/moncler-logo.png';

// Fashion section images
import fashionImage from '../assets/fashion.png';
import fashionImage1 from '../assets/Fashion1.png';

// Electronics section images
import electronicsImage from '../assets/electronics.png';
import electronicsImage1 from '../assets/electronics1.png';

// Beauty section images
import beautyImage from '../assets/beauty.png';
import beautyImage1 from '../assets/Beauty1.png';

/* ─── Reusable Auto-Scroll Shop Cards Carousel ──────────────────────────────── */
/* Works exactly like the brands carousel: duplicated items + CSS animation,
   pauses on hover, fully seamless loop.                                        */
const ShopCarousel = ({ cards, carouselId, navigate }) => {
  // Duplicate cards for seamless infinite loop (same technique as brands rail)
  const doubledCards = [...cards, ...cards];

  const handleViewShop = (shop) => {
    // Navigate to ShopImageView with the shop's image
    navigate('/shop-image-view', { state: { image: shop.image } });
  };

  return (
    <div className="sp-grid-container mt-5">
      <div className="sp-shop-carousel-box">
        <div className="sp-shop-carousel-rail">
          {doubledCards.map((shop, index) => (
            <div key={`${carouselId}-${index}`} className="sp-shop-carousel-unit">
              <div className="sp-item-card card shadow-sm">
                <div className="sp-card-media position-relative overflow-hidden">
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="card-img-top sp-card-img-effect"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="sp-card-title mb-3">{shop.name}</h3>
                  <div className="sp-card-info d-flex align-items-center justify-content-center gap-3 mb-3">
                    <div className="d-flex align-items-center gap-1">
                      {/* Map pin outline icon */}
                      <svg className="sp-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                      <span className="small">{shop.floor}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      {/* Clock outline icon */}
                      <svg className="sp-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span className="small">{shop.hours}</span>
                    </div>
                  </div>
                  <button 
                    className="btn sp-btn-action"
                    onClick={() => handleViewShop(shop)}
                  >
                    View Shop
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Main Shops Component ──────────────────────────────────────────────────── */
const Shops = () => {
  const navigate = useNavigate(); // Add the navigate hook
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  // Brand logos data
  const brands = [
    { name: 'iPhone', logo: iphoneLogo },
    { name: 'Gucci', logo: gucciLogo },
    { name: 'Calvin Klein', logo: ckLogo },
    { name: 'Rolex', logo: rolexLogo },
    { name: 'Polo', logo: poloLogo },
    { name: 'Lacoste', logo: lacosteLogo },
    { name: 'Moncler', logo: monclerLogo }
  ];

  // Shop cards data
  const fashionShopCards = [
    { id: 'A', name: 'SHOP A', floor: '3RD Floor', hours: '24 HRS', image: fashionImage1 },
    { id: 'B', name: 'SHOP B', floor: '3RD Floor', hours: '24 HRS', image: fashionImage1 },
    { id: 'C', name: 'SHOP C', floor: '3RD Floor', hours: '24 HRS', image: fashionImage1 },
    { id: 'D', name: 'SHOP D', floor: '3RD Floor', hours: '24 HRS', image: fashionImage1 },
    { id: 'E', name: 'SHOP E', floor: '3RD Floor', hours: '24 HRS', image: fashionImage1 },
    { id: 'F', name: 'SHOP F', floor: '3RD Floor', hours: '24 HRS', image: fashionImage1 }
  ];

  const electronicsShopCards = [
    { id: 'A', name: 'SHOP A', floor: '3RD Floor', hours: '24 HRS', image: electronicsImage },
    { id: 'B', name: 'SHOP B', floor: '3RD Floor', hours: '24 HRS', image: electronicsImage },
    { id: 'C', name: 'SHOP C', floor: '3RD Floor', hours: '24 HRS', image: electronicsImage },
    { id: 'D', name: 'SHOP D', floor: '3RD Floor', hours: '24 HRS', image: electronicsImage },
    { id: 'E', name: 'SHOP E', floor: '3RD Floor', hours: '24 HRS', image: electronicsImage },
    { id: 'F', name: 'SHOP F', floor: '3RD Floor', hours: '24 HRS', image: electronicsImage }
  ];

  const beautyShopCards = [
    { id: 'A', name: 'SHOP A', floor: '3RD Floor', hours: '24 HRS', image: beautyImage },
    { id: 'B', name: 'SHOP B', floor: '3RD Floor', hours: '24 HRS', image: beautyImage },
    { id: 'C', name: 'SHOP C', floor: '3RD Floor', hours: '24 HRS', image: beautyImage }
  ];

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sp-layout-root">
      {/* ── Hero Section ─────────────────────────────────────────────────────── */}
      <section className="sp-hero-wrapper position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img src={shopImage} alt="Shop Interior" className="w-100 h-100 object-fit-cover" />
          <div className="sp-hero-mask position-absolute top-0 start-0 w-100 h-100"></div>
        </div>

        <div className="container position-relative h-100">
          <div className="row h-100 align-items-end">
            <div className="col-12">
              <div className="sp-hero-inner-content pb-4">
                {/* Centered text block */}
                <div className="sp-hero-text-wrap">
                  <div className="sp-hero-text text-white">
                    <h1 className="sp-main-title mb-3">
                      <span className="sp-accent-green">Shop</span>{' '}
                      <span className="sp-accent-white">Your Style</span>
                    </h1>
                    <p className="sp-main-desc mb-0">
                      Discover a wide range of fashion products and experiences all under one roof.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands Carousel ──────────────────────────────────────────────────── */}
      <section className="sp-brands-area">
        <div className="sp-carousel-box">
          <div className="sp-carousel-rail">
            {brands.map((brand, index) => (
              <div key={`brand-1-${index}`} className="sp-brand-unit">
                <img src={brand.logo} alt={brand.name} className="sp-brand-img" />
              </div>
            ))}
            {brands.map((brand, index) => (
              <div key={`brand-2-${index}`} className="sp-brand-unit">
                <img src={brand.logo} alt={brand.name} className="sp-brand-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fashion & Apparel Section ─────────────────────────────────────────── */}
      <section
        className={`sp-cat-row bg-light py-4 py-md-5 ${visibleSections['fashion'] ? 'sp-reveal' : ''}`}
        ref={(el) => (sectionRefs.current['fashion'] = el)}
        data-section="fashion"
      >
        <div className="sp-cat-container">
          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6">
              <div className="h-100 d-flex flex-column">
                <div className="sp-cat-text-block text-start text-lg-start text-center">
                  <h2 className="sp-section-heading mb-3 mb-md-4">
                    <span className="sp-txt-green">Fashion &</span>{' '}
                    <span className="sp-txt-black">Apparel</span>
                  </h2>
                  <p className="sp-section-desc mb-4">
                    Explore the latest trends in men's, women's, and kids' fashion.
                    From everyday wear to festive collections, our fashion stores offer
                    stylish clothing, footwear, and accessories for all ages.
                  </p>
                </div>
                <div className="sp-feature-img-sm rounded overflow-hidden mt-auto">
                  <img src={fashionImage} alt="Fashion Shopping" className="w-100 h-100 object-fit-cover" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="sp-feature-img-lg rounded overflow-hidden h-100">
                <img src={fashionImage1} alt="Fashion Store" className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
        <ShopCarousel cards={fashionShopCards} carouselId="fashion" navigate={navigate} />
      </section>

      {/* ── Electronics & Gadgets Section ────────────────────────────────────── */}
      <section
        className={`sp-cat-row bg-light py-4 py-md-5 ${visibleSections['electronics'] ? 'sp-reveal' : ''}`}
        ref={(el) => (sectionRefs.current['electronics'] = el)}
        data-section="electronics"
      >
        <div className="sp-cat-container">
          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="sp-feature-img-lg rounded overflow-hidden h-100">
                <img src={electronicsImage1} alt="Electronics Store" className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div className="h-100 d-flex flex-column">
                <div className="sp-cat-text-block text-start text-lg-start text-center">
                  <h2 className="sp-section-heading mb-3 mb-md-4">
                    <span className="sp-txt-green">Electronics &</span>{' '}
                    <span className="sp-txt-black">Gadgets</span>
                  </h2>
                  <p className="sp-section-desc mb-4">
                    Stay updated with the latest electronics, smartphones, accessories, and home gadgets.
                    Our tech stores offer quality products with expert assistance.
                  </p>
                  
                </div>
                <div className="sp-feature-img-sm rounded overflow-hidden mt-auto">
                  <img src={electronicsImage} alt="Electronics Shopping" className="w-100 h-100 object-fit-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShopCarousel cards={electronicsShopCards} carouselId="electronics" navigate={navigate} />
      </section>

      {/* ── Beauty & Lifestyle Section ────────────────────────────────────────── */}
      <section
        className={`sp-cat-row bg-light py-4 py-md-5 ${visibleSections['beauty'] ? 'sp-reveal' : ''}`}
        ref={(el) => (sectionRefs.current['beauty'] = el)}
        data-section="beauty"
      >
        <div className="sp-cat-container">
          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6">
              <div className="h-100 d-flex flex-column">
                <div className="sp-cat-text-block text-start text-lg-start text-center">
                  <h2 className="sp-section-heading mb-3 mb-md-4">
                    <span className="sp-txt-green">Beauty &</span>{' '}
                    <span className="sp-txt-black">Lifestyle</span>
                  </h2>
                  <p className="sp-section-desc mb-4">
                    Pamper yourself with premium beauty, skincare, cosmetics, and wellness products.
                    Find trusted brands that help you look and feel your best every day.
                  </p>
                </div>
                <div className="sp-feature-img-sm rounded overflow-hidden mt-auto">
                  <img src={beautyImage} alt="Beauty Shopping" className="w-100 h-100 object-fit-cover" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="sp-feature-img-lg rounded overflow-hidden h-100">
                <img src={beautyImage1} alt="Beauty Store" className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
        <ShopCarousel cards={beautyShopCards} carouselId="beauty" navigate={navigate} />
      </section>
    </div>
  );
};

export default Shops;