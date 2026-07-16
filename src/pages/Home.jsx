import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero        from '../assets/Home.png';
import Headerlogo  from '../assets/home-hero-main.png';
import Hero2       from '../assets/Home2.png';
import Exp1        from '../assets/Exp1.png';
import Exp2        from '../assets/Exp2.png';
import Exp3        from '../assets/Exp3.png';
import Dine1       from '../assets/Dine1.png';
import Dine2       from '../assets/Dine2.png';
import Dine3       from '../assets/Dine3.png';
import Dine4       from '../assets/Dine4.png';
import Dines1      from '../assets/Dine-1.jpeg';
import Dines2      from '../assets/Dine-2.jpeg';
import Awaits1     from '../assets/Awaits1.jpeg';
import Awaits2     from '../assets/Awaits2.jpeg';
import Awaits3     from '../assets/Awaits3.jpeg';
import Awaits4     from '../assets/Awaits4.jpeg';
import Awaits5     from '../assets/Awaits5.jpeg';
import Awaits6     from '../assets/Awaits6.jpeg';
import Shopping1   from '../assets/Shopping1.png';
import Shopping2   from '../assets/Shopping2.png';
import Shopping3   from '../assets/Shopping3.png';
import Shopping4   from '../assets/Shopping4.png';
import Fashion1    from '../assets/Fashion1.png';
import Fashion2    from '../assets/Fashion2.png';
import Fashion3    from '../assets/Fashion3.png';
import Gadgets1    from '../assets/Gadgets1.png';
import Gadgets2    from '../assets/Gadgets2.png';
import Gadgets3    from '../assets/Gadgets3.png';
import Beauty1     from '../assets/BeautyHero.png';
import Beauty2     from '../assets/Beauty2.png';
import Beauty3     from '../assets/Beauty3.png';
import Footware1   from '../assets/Footware1.png';
import Footware2   from '../assets/Footware2.png';
import Footware3   from '../assets/Footware3.png';
import Offers1     from '../assets/Offer1.png';
import Offers2     from '../assets/Offer2.png';
import Arcade1     from '../assets/Arcade1.png';
import Arcade2     from '../assets/Arcade2.png';
import Karoke1     from '../assets/Karoke1.png';
import Karoke2     from '../assets/Karoke2.png';
import Karoke3     from '../assets/Karoke3.png';
import Karokesm1   from '../assets/Karokesm1.png';
import Karokesm2   from '../assets/Karokesm2.png';
import Karokesm3   from '../assets/Karokesm3.png';
import Mall1       from '../assets/Mall1.png';
import Mall2       from '../assets/Mall2.png';
import Mall3       from '../assets/Mall3.png';
import Mall4       from '../assets/Mall4.png';
import Mall5       from '../assets/Mall5.png';
import Mall6       from '../assets/Mall6.png';
import Services1   from '../assets/Service1.png';
import Services2   from '../assets/service2.png';
import Services3   from '../assets/Service3.png';
import Brand1 from '../assets/Brand1.png';
import Brand2 from '../assets/Brand2.png';
import Brand3 from '../assets/Brand3.png';
import Brand4 from '../assets/Brand4.png';

// ─── Static Data ──────────────────────────────────────────────────────────────

const mallImages = [
  { src: Mall1, className: 'mall-1' },
  { src: Mall2, className: 'mall-2' },
  { src: Mall3, className: 'mall-3' },
  { src: Mall4, className: 'mall-4' },
  { src: Mall5, className: 'mall-5' },
  { src: Mall6, className: 'mall-6' },
];

const experienceCards = [
  { src: Exp1, title: 'TSR SEAFRONT\nHOTEL' },
  { src: Exp2, title: 'TSR CINEMAX\nCINEMA' },
  { src: Exp3, title: 'TSR KARAOKE\nBOOKING' },
];

const dineIcons = [
  { src: Dine1, label: 'Hygienic & Safe Dining' },
  { src: Dine2, label: 'Multiple Cuisines\nUnder One Roof' },
  { src: Dine3, label: 'Comfortable Seating\n& Ambience' },
  { src: Dine4, label: 'Easy Access From\nShopping Areas' },
];

const dineImages = [
  { src: Dines1, label: 'Savory Food Court',    colClass: 'col-md-7' },
  { src: Dines2, label: 'Grab N Go Concession', colClass: 'col-md-5' },
];

const awaitsData = [
  { title: "State-Of-The-Art\nCINEMAX Cinemas",          img: Awaits1 },
  { title: "Virtual 9D & Digital\nArcades",               img: Awaits2 },
  { title: "Family-Friendly Karaoke\nKeluarga",           img: Awaits3 },
  { title: "British Pool\n& Snooker",                     img: Awaits4 },
  { title: "Digital Darts\nArena",                        img: Awaits5 },
  { title: "Diverse Food Court & Grab\nand-Go Concessions", img: Dines1 },
  { title: "Premium Conference &\nEvent Facilities",      img: Awaits6 },
];

const shoppingSlides = [Shopping1, Shopping2, Shopping3, Shopping4];

const SHOPPING_SHOWCASE_CATS = [
  {
    name: 'Fashion',
    shops: '17',
    tagline: 'Curated styles for every occasion',
    color: '#6B8E23',
    dark: '#3d5214',
    bg: '#f0f4e8',
  },
  {
    name: 'Gadgets',
    shops: '12',
    tagline: 'Latest tech under one roof',
    color: '#E8720C',
    dark: '#8a420a',
    bg: '#fdf1e8',
  },
  {
    name: 'Beauty',
    shops: '10',
    tagline: 'Glow up with premium skincare',
    color: '#9B4F8E',
    dark: '#5a2e53',
    bg: '#f8f0f7',
  },
  {
    name: 'Footwear',
    shops: '8',
    tagline: 'Every step in perfect style',
    color: '#1a7fa8',
    dark: '#0f4a63',
    bg: '#e8f4f9',
  },
];

const SHOPPING_SHOWCASE_INTERVAL = 4500;

const karaokeSmallImages = [Karokesm1, Karokesm2, Karokesm3];

const servicesData = [
  { src: Services1, label: 'WIFI',        active: false },
  { src: Services2, label: 'ATM',         active: true  },
  { src: Services3, label: 'CAR PARKING', active: false },
];

const categories = {
  fashion:  { title: 'Fashion',  shops: '17 Shops', productImg: Shopping1, miniImages: [Fashion1, Fashion2, Fashion3],  blurImage: Shopping2 },
  gadgets:  { title: 'Gadgets',  shops: '17 Shops', productImg: Shopping2, miniImages: [Gadgets1, Gadgets2, Gadgets3],  blurImage: Shopping3 },
  beauty:   { title: 'Beauty',   shops: '17 Shops', productImg: Shopping3, miniImages: [Beauty1,  Beauty2,  Beauty3],   blurImage: Shopping4 },
  footware: { title: 'Footware', shops: '17 Shops', productImg: Shopping4, miniImages: [Footware1,Footware2,Footware3], blurImage: Shopping1 },
};

const shoppingThumbs = [
  [Fashion1, Fashion2, Fashion3],
  [Gadgets1, Gadgets2, Gadgets3],
  [Beauty1, Beauty2, Beauty3],
  [Footware1, Footware2, Footware3],
];

// ─── Helper: observe a section and add animate-in classes ─────────────────────
const createSectionObserver = (sectionSelector, targets) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          targets.forEach(({ selector, delay }) => {
            const el = entry.target.querySelector(selector);
            if (el) {
              if (delay) {
                setTimeout(() => el.classList.add('animate-in'), delay);
              } else {
                el.classList.add('animate-in');
              }
            }
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
  );

  const section = document.querySelector(sectionSelector);
  if (section) observer.observe(section);
  return () => { if (section) observer.unobserve(section); };
};

// ─── Component ────────────────────────────────────────────────────────────────

const Home = () => {
  const navigate = useNavigate();

  const [active, setActive]               = useState('fashion');
  const [isAnimated, setIsAnimated]       = useState(false);
  const [incoming, setIncoming]           = useState(null);
  const [incomingVars, setIncomingVars]   = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cycleSeq, setCycleSeq]           = useState(0);

  const sectionRef          = useRef(null);
  const activeRef           = useRef(active);
  const currentImgRef       = useRef(null);
  const blurImgRef          = useRef(null);
  const incomingTimeoutRef  = useRef(null);
  const cycleTimerRef       = useRef(null);

  const shoppingShowcaseWrapRef = useRef(null);

  const categoryKeys = Object.keys(categories);
  const getNextKey = (key) => {
    const idx = categoryKeys.indexOf(key);
    return categoryKeys[(idx + 1) % categoryKeys.length];
  };

  // Shared animation trigger — used by both manual clicks and auto-cycle
  const triggerAnimation = (nextKey) => {
    if (incomingTimeoutRef.current) window.clearTimeout(incomingTimeoutRef.current);

    const currentRect = currentImgRef.current?.getBoundingClientRect();
    const blurRect    = blurImgRef.current?.getBoundingClientRect();

    if (currentRect && blurRect) {
      const scale = currentRect.width / blurRect.width;
      setIncomingVars({
        '--start-x':   `${blurRect.left}px`,
        '--start-y':   `${blurRect.top}px`,
        '--end-x':     `${currentRect.left}px`,
        '--end-y':     `${currentRect.top}px`,
        '--end-scale': scale,
      });
    } else {
      setIncomingVars(null);
    }

    setIncoming(nextKey);
    setCycleSeq((v) => v + 1);

    setTimeout(() => setIsTransitioning(true), 1200);

    incomingTimeoutRef.current = window.setTimeout(() => {
      setActive(nextKey);
      setIncoming(null);
      setIncomingVars(null);
      setIsTransitioning(false);
      incomingTimeoutRef.current = null;
    }, 1800);
  };

  const scheduleAutoCycle = () => {
    if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
    cycleTimerRef.current = setInterval(() => {
      triggerAnimation(getNextKey(activeRef.current));
    }, 4000);
  };

  const handleSetActive = (key) => {
    if (key === activeRef.current) return;
    triggerAnimation(key);
    scheduleAutoCycle();
  };

  useEffect(() => { activeRef.current = active; }, [active]);

  // Main init effect
  useEffect(() => {
    AOS.init({ duration: 2000, once: true, offset: 100 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            const imageCard = entry.target.querySelector('.Home-image-card');
            if (imageCard) imageCard.classList.add('visible');
            setTimeout(() => setIsAnimated(true), 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    scheduleAutoCycle();

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (incomingTimeoutRef.current) window.clearTimeout(incomingTimeoutRef.current);
      if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimated]);

  // Section scroll-animation observers
  useEffect(() => createSectionObserver('.HomeShopOffersSection', [
    { selector: '.HomeOffersImage1Wrapper' },
    { selector: '.HomeOffersContent' },
    { selector: '.HomeOffersImage2Wrapper' },
  ]), []);

  useEffect(() => createSectionObserver('.HomeChildrenArcadeSection', [
    { selector: '.HomeArcadeImage1Wrapper' },
    { selector: '.HomeArcadeContent' },
    { selector: '.HomeArcadeImage2Wrapper' },
  ]), []);

  useEffect(() => createSectionObserver('.HomeKaraokeSection', [
    { selector: '.HomeKaraokeImagesWrapper' },
    { selector: '.HomeKaraokeContent' },
  ]), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const servicesLeft  = entry.target.querySelector('.home-services-left');
            const servicesCards = entry.target.querySelectorAll('.home-services-card');

            if (servicesLeft) servicesLeft.classList.add('animate-in');

            servicesCards.forEach((card, index) => {
              const delay = index === 1 ? 200 : index === 0 ? 600 : 800;
              setTimeout(() => {
                card.style.opacity   = '1';
                card.style.transform = index === 1 ? 'translateY(0) scale(1)' : 'translateY(0)';
              }, delay);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const section = document.querySelector('.home-services-section');
    if (section) observer.observe(section);
    return () => { if (section) observer.unobserve(section); };
  }, []);

  useEffect(() => {
    const wrap = shoppingShowcaseWrapRef.current;
    if (!wrap) return;

    const CATS = SHOPPING_SHOWCASE_CATS;
    const IMGS = shoppingSlides;

    let cur = 0;
    let busy = false;
    let tRaf = null;
    const timeouts = [];

    const track = wrap.querySelector('[data-shopping-track]');
    const botCard = wrap.querySelector('[data-shopping-bot-card]');
    const catNameSpan = wrap.querySelector('[data-shopping-cat-name]');
    const catTagP = wrap.querySelector('[data-shopping-cat-tagline]');
    const accentBar = wrap.querySelector('[data-shopping-accent-bar]');
    const shopsPill = wrap.querySelector('[data-shopping-shops-pill]');
    const thumbsEl = wrap.querySelector('[data-shopping-thumbs]');
    const pfill = wrap.querySelector('[data-shopping-progress-fill]');
    const bigNum = wrap.querySelector('[data-shopping-big-num]');
    const sCur = wrap.querySelector('[data-shopping-counter-cur]');
    const emLine = wrap.querySelector('[data-shopping-em-line]');
    const pillDot = wrap.querySelector('[data-shopping-pill-dot]');
    const dotsEl = wrap.querySelector('[data-shopping-dots]');
    const b1 = wrap.querySelector('[data-shopping-blob="b1"]');
    const b2 = wrap.querySelector('[data-shopping-blob="b2"]');
    const b3 = wrap.querySelector('[data-shopping-blob="b3"]');
    const avEls = wrap.querySelectorAll('[data-shopping-avatar]');
    const navBtns = wrap.querySelectorAll('[data-shopping-rnav-btn]');
    const slideEls = wrap.querySelectorAll('[data-shopping-slide]');

    if (!track || !botCard || !catNameSpan || !catTagP || !accentBar || !shopsPill || !thumbsEl || !pfill || !bigNum || !sCur || !emLine || !pillDot || !dotsEl || !b1 || !b2 || !b3) {
      return;
    }

    const BLOB_POSITIONS = [
      { b1: { top: '-150px', right: '80px' }, b2: { bottom: '-80px', right: '320px' }, b3: { top: '45%', left: '370px' } },
      { b1: { top: '-100px', right: '150px' }, b2: { bottom: '-60px', right: '200px' }, b3: { top: '35%', left: '400px' } },
      { b1: { top: '-180px', right: '40px' }, b2: { bottom: '-100px', right: '280px' }, b3: { top: '55%', left: '340px' } },
      { b1: { top: '-120px', right: '110px' }, b2: { bottom: '-70px', right: '350px' }, b3: { top: '40%', left: '360px' } },
    ];

    const cancelAllTimeouts = () => {
      while (timeouts.length) {
        window.clearTimeout(timeouts.pop());
      }
    };

    const setTimeoutTracked = (fn, ms) => {
      const id = window.setTimeout(fn, ms);
      timeouts.push(id);
      return id;
    };

    const applyBlobPos = (idx) => {
      const p = BLOB_POSITIONS[idx];
      if (!p) return;
      Object.assign(b1.style, p.b1);
      Object.assign(b2.style, p.b2);
      Object.assign(b3.style, p.b3);
    };

    const applyTheme = (i) => {
      const c = CATS[i];
      if (!c) return;
      wrap.style.background = c.bg;
      b1.style.background = c.color;
      b2.style.background = c.color;
      b3.style.background = c.color;
      applyBlobPos(i);
      emLine.style.color = c.color;
      pillDot.style.background = c.color;
      pfill.style.background = c.color;
      accentBar.style.background = c.color;
      shopsPill.style.background = c.color;
      avEls.forEach((av) => { av.style.borderColor = c.bg; });
      dotsEl.querySelectorAll('.HomeShoppingDot.on').forEach((d) => { d.style.background = c.color; });
    };

    const updateCard = (i, animate) => {
      const c = CATS[i];
      if (!c) return;

      if (!animate) {
        catNameSpan.textContent = c.name;
        catTagP.textContent = c.tagline;
        shopsPill.textContent = `${c.shops} Shops`;
        const miniImages = shoppingThumbs[i] ?? [];
        thumbsEl.querySelectorAll('img').forEach((img, index) => {
          if (miniImages[index]) img.src = miniImages[index];
        });
        return;
      }

      catNameSpan.classList.add('out');
      catTagP.style.opacity = '0';

      setTimeoutTracked(() => {
        catNameSpan.textContent = c.name;
        catTagP.textContent = c.tagline;
        shopsPill.textContent = `${c.shops} Shops`;

        catNameSpan.classList.remove('out');
        catNameSpan.classList.add('in');

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            catNameSpan.classList.remove('in');
            catTagP.style.opacity = '1';
          });
        });

        Array.from(thumbsEl.children).forEach((th, ti) => {
          setTimeoutTracked(() => {
            const img = th.querySelector('img');
            if (!img) return;
            th.style.opacity = '0';
            th.style.transform = 'scale(0.75)';
            setTimeoutTracked(() => {
              const miniImages = shoppingThumbs[i] ?? [];
              if (miniImages[ti]) img.src = miniImages[ti];
              th.style.transition = 'transform 0.4s cubic-bezier(0.34,1.3,0.64,1),opacity 0.3s';
              th.style.transform = 'scale(1)';
              th.style.opacity = '1';
            }, 100);
          }, ti * 70);
        });
      }, 320);
    };

    const startTimer = () => {
      if (tRaf) cancelAnimationFrame(tRaf);
      pfill.style.transition = 'none';
      pfill.style.width = '0%';
      const t0 = performance.now();

      const tick = (now) => {
        const p = Math.min((now - t0) / SHOPPING_SHOWCASE_INTERVAL, 1);
        pfill.style.width = `${p * 100}%`;
        if (p < 1) {
          tRaf = requestAnimationFrame(tick);
        } else {
          goTo((cur + 1) % CATS.length);
        }
      };

      tRaf = requestAnimationFrame(tick);
    };

    const goTo = (next) => {
      if (busy || next === cur) return;
      busy = true;

      if (tRaf) cancelAnimationFrame(tRaf);
      cancelAllTimeouts();

      track.style.transform = `translateX(${-next * 100}%)`;
      slideEls.forEach((s, j) => { s.classList.toggle('active', j === next); });
      applyTheme(next);

      botCard.classList.remove('show');
      setTimeoutTracked(() => {
        updateCard(next, true);
        botCard.classList.add('show');
      }, 280);

      bigNum.style.opacity = '0';
      bigNum.style.transform = 'scale(1.4)';
      setTimeoutTracked(() => {
        bigNum.textContent = String(next + 1).padStart(2, '0');
        bigNum.style.transition = 'opacity 0.5s,transform 0.5s cubic-bezier(0.34,1.1,0.64,1)';
        bigNum.style.opacity = '0.04';
        bigNum.style.transform = 'scale(1)';
      }, 200);

      sCur.classList.add('out');
      setTimeoutTracked(() => {
        sCur.textContent = String(next + 1).padStart(2, '0');
        sCur.classList.remove('out');
      }, 220);

      dotsEl.querySelectorAll('.HomeShoppingDot').forEach((d, j) => {
        d.classList.toggle('on', j === next);
        d.style.background = j === next ? CATS[next].color : 'rgba(0,0,0,0.12)';
        d.style.width = j === next ? '26px' : '8px';
      });

      navBtns.forEach((b, j) => { b.classList.toggle('on', j === next); });

      cur = next;
      setTimeoutTracked(() => {
        busy = false;
        startTimer();
      }, 700);
    };

    dotsEl.innerHTML = '';
    CATS.forEach((_, i) => {
      const b = document.createElement('button');
      b.className = `HomeShoppingDot${i === 0 ? ' on' : ''}`;
      b.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(b);
    });

    const onNavClick = (e) => {
      const idx = parseInt(e.currentTarget.dataset.i, 10);
      if (Number.isFinite(idx)) goTo(idx);
    };
    navBtns.forEach((btn) => btn.addEventListener('click', onNavClick));

    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') goTo((cur + 1) % CATS.length);
      if (e.key === 'ArrowLeft') goTo((cur + CATS.length - 1) % CATS.length);
    };
    document.addEventListener('keydown', onKeyDown);

    let tx = 0;
    const onTouchStart = (e) => { tx = e.touches?.[0]?.clientX ?? 0; };
    const onTouchEnd = (e) => {
      const endX = e.changedTouches?.[0]?.clientX ?? 0;
      const dx = endX - tx;
      if (Math.abs(dx) > 50) goTo(dx < 0 ? (cur + 1) % CATS.length : (cur + CATS.length - 1) % CATS.length);
    };
    wrap.addEventListener('touchstart', onTouchStart, { passive: true });
    wrap.addEventListener('touchend', onTouchEnd);

    const onEnter = () => { if (tRaf) cancelAnimationFrame(tRaf); };
    const onLeave = () => startTimer();
    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mouseleave', onLeave);

    applyTheme(0);
    updateCard(0, false);
    setTimeoutTracked(() => botCard.classList.add('show'), 400);
    setTimeoutTracked(() => startTimer(), 900);

    return () => {
      if (tRaf) cancelAnimationFrame(tRaf);
      cancelAllTimeouts();
      navBtns.forEach((btn) => btn.removeEventListener('click', onNavClick));
      document.removeEventListener('keydown', onKeyDown);
      wrap.removeEventListener('touchstart', onTouchStart);
      wrap.removeEventListener('touchend', onTouchEnd);
      wrap.removeEventListener('mouseenter', onEnter);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="Home-wrapper">

      {/* ── HERO SECTION ── */}
      <div className="Home-header-section">
        <div className="Home-image-container">
          <img src={Hero} alt="IRKL MALL" className="Home-building-img" />
          <div className="Home-mall-images">
            {mallImages.map(({ src, className }) => (
              <img key={className} src={src} alt={className} className={`mall-float-img ${className}`} />
            ))}
          </div>
        </div>

        <div className="Home-content-overlay">
          <div className="container-fluid">
            <div className="Home-slogan-wrapper">
              <img src={Headerlogo} alt="Header Logo" className="Home-Hero-logo" />
              <h1 className="Home-slogan-big">
                <span className="slogan-highlight">Entertainment Has</span>
                <span className="slogan-secondary">a New Address</span>
              </h1>
              <div className="Home-slogan-sub">
                Welcome to a place where shopping, dining,<br />
                movies, games, and unforgettable moments<br />
                come together.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ABOUT / IMAGE SECTION ── */}
      {/* Changed to container-fluid for wider screens */}
      <div className="container-fluid">
        <div
          ref={sectionRef}
          className={`row Home-content-section g-5 mb-3 ${isAnimated ? 'animated' : ''}`}
        >
          <div className="col-md-6">
            <div className={`Home-card-box Home-image-card ${isAnimated ? 'shrink' : ''}`}>
              <img src={Hero2} alt="Irdk mall" />
            </div>
          </div>
          <div className="col-md-6">
            <div className={`Home-card-box Home-text-card ${isAnimated ? 'slide-in' : ''}`}>
              <h2 className="Home-section-title mt-4">
                <span style={{ color: '#6a8f2f' }}>Entertainment</span> Has a New Address
              </h2>
              <p className="Home-description-text">
                Welcome to IRDKL Mall, Shah Alam's premier entertainment destination. Developed by IRDK LANDGroup,
                led by Tan Sri Dato' Sri Dr. MP Ramasamy, IRDKL Mall brings together world-class entertainment,
                dining, and event spaces under one iconic roof.
              </p>
              <p className="Home-description-text">
                Strategically located in Alam Avenue 2, Shah Alam, near UiTM, PUSPAKOM, and major highways,
                IRDKL Mall is easily accessible from Petaling Jaya, Klang, and surrounding areas.
              </p>
            </div>
          </div>
        </div>

        {/* ── EXPERIENCES ── */}
        <div className="row align-items-center mb-5 mt-3">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h2 className="Home-experiences-title">Our <span className="text-dark">Experiences</span></h2>
            <p className="Home-text-muted">
              Enjoy seamless access to our premium partners—
              Seafront Hotel, Cinemax, and Karaoke—all just a click away.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row Home-experience-cards-row">
              {experienceCards.map(({ src, title }) => (
                <div className="col-md-3" key={title}>
                  <div className="Home-experience-card">
                    <img src={src} alt={title} />
                    <div className="Home-card-title">{title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── DINE SECTION ── */}
      {/* Changed to container-fluid for wider screens */}
      <div className="container-fluid text-center mb-5">
        <h2 className="home-dine-title mb-4"><span>Dine</span> At Mall</h2>
        <p className="home-dine-desc mx-auto">
          Experience the perfect blend of flavors, ambiance, and moments at our mall's dining destination.
          From quick bites to fine dining, we have something for every craving.
        </p>

        <div className="row justify-content-center my-5 g-1">
          {dineIcons.map(({ src, label }) => (
            <div className="col-6 col-md-2" key={label}>
              <div className="home-dine-icon-card">
                <img src={src} alt={label} />
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          {dineImages.map(({ src, label, colClass }, i) => (
            <div className={colClass} key={label}>
              <div className="home-dine-image-card" data-aos={i === 0 ? 'fade-right' : 'fade-left'}>
                <img src={src} alt={label} />
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── AWAITS SECTION ── */}
      {/* Changed to container-fluid for wider screens */}
      <div className="container-fluid mt-3 mb-5">
        <h2 className="home-awaits-title text-center">
          What Awaits You at <span className="text-dark">IRDKL Mall</span>
        </h2>
        <div className="home-awaits-scroll">
          {awaitsData.map(({ title, img }) => (
            <div className="home-awaits-card" key={title}>
              <img src={img} alt={title} />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SHOPPING SLIDESHOW ── */}
      <section className="HomeShoppingShowcase" ref={shoppingShowcaseWrapRef}>
        <div className="HomeShoppingShowcaseBlob" data-shopping-blob="b1" />
        <div className="HomeShoppingShowcaseBlob" data-shopping-blob="b2" />
        <div className="HomeShoppingShowcaseBlob" data-shopping-blob="b3" />

        <div className="HomeShoppingShowcaseLeft">
          <div className="HomeShoppingTagPill">
            <div className="HomeShoppingTagDot" data-shopping-pill-dot />
            {/* <span>IRDKL Mall · Shah Alam</span> */}
          </div>

          <h1 className="HomeShoppingHeadline">
            Experience
            <br />
            Shopping
            <br />
            <em data-shopping-em-line>Like Never Before</em>
          </h1>

          <p className="HomeShoppingDesc">
            Discover a vibrant mix of shops designed to meet every lifestyle need — fashion, tech, beauty, footwear and more.
          </p>

          <div className="HomeShoppingAvRow">
            <div className="HomeShoppingAvStack">
                <div className="HomeShoppingAv" data-shopping-avatar>
                  <img src={Brand1} alt="" />
                </div>
                <div className="HomeShoppingAv" data-shopping-avatar> <img src={Brand2} alt="" /></div>
                <div className="HomeShoppingAv" data-shopping-avatar> <img src={Brand3} alt="" /></div>
                <div className="HomeShoppingAv" data-shopping-avatar> <img src={Brand4} alt="" /></div>
            </div>
            <span className="HomeShoppingAvText">+ 50 Brands</span>
          </div>

          <div className="HomeShoppingBtnRow">
            <button className="HomeShoppingBtnPrimary" type="button">
              Explore Shop
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M2 6.5h9M7 2.5l4 4-4 4" />
              </svg>
            </button>
          </div>
        </div>

        <div className="HomeShoppingShowcaseStage">
          <div className="HomeShoppingBigNum" data-shopping-big-num>01</div>

          <div className="HomeShoppingTrack" data-shopping-track>
            {shoppingSlides.map((src, i) => (
              <div key={i} className={`HomeShoppingSlide${i === 0 ? ' active' : ''}`} data-shopping-slide>
                <img src={src} alt={SHOPPING_SHOWCASE_CATS[i]?.name ?? `Slide ${i + 1}`} />
              </div>
            ))}
          </div>

          <div className="HomeShoppingBotCard" data-shopping-bot-card>
            <div className="HomeShoppingAccentBar" data-shopping-accent-bar />
            <div className="HomeShoppingCatInfo">
              <h3>
                <span data-shopping-cat-name>Fashion</span>
              </h3>
              <p data-shopping-cat-tagline>Curated styles for every occasion</p>
            </div>
            <div className="HomeShoppingSep" />
            <div className="HomeShoppingThumbs" data-shopping-thumbs>
              {shoppingThumbs[0].map((img, index) => (
                <div className="HomeShoppingThumb" key={index}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
            <div className="HomeShoppingShopsPill" data-shopping-shops-pill>17 Shops</div>
          </div>

          <div className="HomeShoppingDots" data-shopping-dots />

          <div className="HomeShoppingCounter">
            <div className="HomeShoppingCounterCur" data-shopping-counter-cur>01</div>
            <div className="HomeShoppingCounterLine" />
            <div className="HomeShoppingCounterTot">04</div>
          </div>
        </div>

        <div className="HomeShoppingRNav">
          {SHOPPING_SHOWCASE_CATS.map((_, i) => (
            <button
              key={i}
              className={`HomeShoppingRNavBtn${i === 0 ? ' on' : ''}`}
              type="button"
              data-shopping-rnav-btn
              data-i={i}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <span className="HomeShoppingRNavLabel">{i + 1}</span>
            </button>
          ))}
        </div>

        <div className="HomeShoppingProgress">
          <div className="HomeShoppingProgressFill" data-shopping-progress-fill />
        </div>
      </section>

      {/* ── SHOP OFFERS ── */}
      <section className="HomeShopOffersSection">
        <div className="container-fluid">
          <div className="row align-items-center pt-4">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="HomeOffersImagesWrapper">
                <div className="HomeOffersImage1Wrapper">
                  <img src={Offers1} alt="Shopping at mall" className="HomeOffersImage1" />
                </div>
                <div className="HomeOffersImage2Wrapper">
                  <img src={Offers2} alt="Woman with shopping bags" className="HomeOffersImage2" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="HomeOffersContent p-4">
                <h2 className="HomeOffersTitle mb-4">
                  <span className="HomeShopText">SHOP</span>{' '}
                  <span className="HomeOffersText">OFFERS</span>
                </h2>
                <p className="HomeOffersDescription mb-4">
                  Enjoy exciting offers and exclusive deals at our mall, where shopping becomes even more rewarding.
                  From fashion and footwear to electronics, dining, and entertainment, shoppers can take advantage of
                  special discounts, seasonal sales, and limited-time promotions across multiple brands—all under one roof.
                </p>
                <button className="HomeViewOffersBtn" onClick={() => window.location.href = '/offers'}>
                  View Offers
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHILDREN ARCADE ── */}
      <section className="HomeChildrenArcadeSection">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12 order-md-1 order-2">
              <div className="HomeArcadeContent p-4">
                <h2 className="HomeArcadeTitle mb-3">
                  <span className="HomeChildrenText">CHILDREN</span>{' '}
                  <span className="HomeArcadeText">ARCADE</span>
                </h2>
                <h3 className="HomeArcadeSubtitle mb-4">GAMES</h3>
                <p className="HomeArcadeDescription mb-4">
                  The Children's Arcade at our mall is a vibrant entertainment space designed to keep young visitors
                  happy, active, and engaged. With bright visuals, playful themes, and a fun-filled atmosphere, the
                  arcade offers a perfect break for families looking to add excitement to their shopping experience.
                </p>
                <button className="HomeExploreGamesBtn" onClick={() => window.location.href = '/games'}>
                  Explore Games
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 order-md-2 order-1">
              <div className="HomeArcadeImagesWrapper">
                <div className="HomeArcadeImage1Wrapper">
                  <img src={Arcade1} alt="Children arcade games" className="HomeArcadeImage1" />
                </div>
                <div className="HomeArcadeImage2Wrapper">
                  <img src={Arcade2} alt="Digital Funzone arcade" className="HomeArcadeImage2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KARAOKE ── */}
      <section className="HomeKaraokeSection">
        <div className="HomeContainer container-fluid">
          <div className="HomeRow row align-items-center">
            <div className="HomeImageCol col-lg-6 col-md-6 col-12">
              <div className="HomeKaraokeImagesWrapper">
                <div className="HomeKaraokeGrid">
                  <div className="HomeKaraokeImage1Container">
                    <img src={Karoke1} alt="Friday Karaoke" className="HomeKaraokeImage1 img-fluid rounded-4" />
                  </div>
                  <div className="HomeKaraokeImage2Container">
                    <img src={Karoke2} alt="Music Party" className="HomeKaraokeImage2 img-fluid rounded-4" />
                  </div>
                  <div className="HomeKaraokeImage3Container">
                    <img src={Karoke3} alt="Neon" className="HomeKaraokeImage3 img-fluid rounded-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="HomeContentCol col-lg-6 col-md-6 col-12">
              <div className="HomeKaraokeContent p-4">
                <h2 className="HomeKaraokeTitle mb-4">
                  <span className="HomeKaraokeText" style={{ color: '#6B8E23' }}>KARAOKE</span>{' '}
                  <span className="HomeKeluargaText">KELUARGA</span>
                </h2>

                <div className="HomeKaraokeFeatures mb-4">
                  <p className="HomeFeatureItem mb-2"><strong className="HomeFeatureLabel">Family oriented</strong></p>
                  <p className="HomeFeatureItem mb-2"><strong className="HomeFeatureLabel">Suitable place for a family gathering</strong></p>
                  <p className="HomeFeatureItem mb-3"><strong className="HomeFeatureLabel">29 Rooms of various sizes</strong></p>
                </div>

                <div className="HomeEventsSection mb-4">
                  <div className="HomeEventsImages d-flex align-items-center gap-3">
                    <div className="HomeEventImagesGrid d-flex gap-2">
                      {karaokeSmallImages.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`Event ${i + 1}`}
                          className="HomeEventImage"
                          style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '12px' }}
                        />
                      ))}
                    </div>
                    <span className="HomeEventsText">3 Events Available</span>
                  </div>
                </div>

                <p className="HomeKaraokeDescription mb-4">
                  Our Karaoke Lounge is the perfect place to sing, celebrate, and create unforgettable memories.
                  Designed with a lively atmosphere and modern sound systems, the space invites music lovers of all
                  ages to enjoy their favorite songs in a fun and comfortable setting.
                </p>

                <button className="HomeExploreEventsBtn btn" onClick={() => window.location.href = '/events'}>
                  Explore Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      {/* Changed to container-fluid for wider screens */}
      <section className="home-services-section container-fluid">
        <div className="row align-items-center mx-2">
          <div className="col-md-6 home-services-left">
            <h2 className="home-services-title">
              <span className="home-services-highlight">Our</span> Services
            </h2>
            <h5 className="home-services-count">10 Services Available</h5>
            <p className="home-services-description">
              We are committed to providing a comfortable, safe, and enjoyable shopping experience for every visitor.
              Explore the wide range of services available at our mall.
            </p>
            <button className="btn home-services-btn" onClick={() => window.location.href = '/services'}>
              View Services
            </button>
          </div>

          <div className="col-md-6 home-services-right d-flex justify-content-end duo-center">
            <div className="home-services-card-wrapper d-flex gap-4">
              {servicesData.map(({ src, label, active: isActive }) => (
                <div
                  key={label}
                  className={`home-services-card text-center${isActive ? ' home-services-card-active' : ''}`}
                >
                  <div className="home-services-icon">
                    <img src={src} alt={label} />
                  </div>
                  <p className="home-services-card-text">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;