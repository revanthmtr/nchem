/* ==========================================================================
   Nchem — Enterprise Chemical, API & CDMO Digital Portal
   Client-Side Logic & Interactive Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initHeaderScroll();
  initHeroSlider();
  initStatCounters();
  initSegmentTabs();
  initPortfolioFilters();
  initFeedbackModal();
  initSearchOverlay();
  initCookieTray();
});

/* --------------------------------------------------------------------------
   1. Elementor-Style Scroll Entrance Reveal System
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-init');
  
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('reveal-active'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* --------------------------------------------------------------------------
   2. Sticky Glass Header & Dual Logo Transition
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   3. Full-Bleed Rotating Hero Carousel
   -------------------------------------------------------------------------- */
function initHeroSlider() {
  const track = document.getElementById('slideTrack');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const progressBar = document.getElementById('slideProgress');

  if (!track || slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  const slideDuration = 6000;
  let slideInterval = null;
  let progressInterval = null;
  let progress = 0;

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });

    resetTimer();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    clearInterval(progressInterval);
    progress = 0;
    if (progressBar) progressBar.style.width = '0%';

    const stepTime = 50;
    const increment = (stepTime / slideDuration) * 100;

    progressInterval = setInterval(() => {
      progress += increment;
      if (progressBar) progressBar.style.width = `${Math.min(progress, 100)}%`;
    }, stepTime);

    slideInterval = setInterval(nextSlide, slideDuration);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.target.dataset.slide, 10);
      goToSlide(targetIndex);
    });
  });

  const heroSlider = document.querySelector('.hero-slider');
  if (heroSlider) {
    heroSlider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    });

    heroSlider.addEventListener('mouseleave', resetTimer);
  }

  goToSlide(0);
}

/* --------------------------------------------------------------------------
   4. Animated Stat Counters Widget (0 -> Target)
   -------------------------------------------------------------------------- */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length === 0) return;

  let animated = false;

  const countUp = (element) => {
    const target = parseInt(element.dataset.target, 10);
    const suffix = element.dataset.suffix || '';
    const prefix = element.dataset.prefix || '';
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(target * easeProgress);

      element.textContent = `${prefix}${currentCount.toLocaleString()}${suffix}`;

      if (frame === totalFrames) {
        clearInterval(counter);
        element.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
      }
    }, frameDuration);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(num => countUp(num));
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) observer.observe(statsSection);
}

/* --------------------------------------------------------------------------
   5. Segmented Business Segment Switcher Tab
   -------------------------------------------------------------------------- */
function initSegmentTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (tabBtns.length === 0) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSegment = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(`panel-${targetSegment}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

/* --------------------------------------------------------------------------
   6. Filterable Highlights Grid
   -------------------------------------------------------------------------- */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (filterBtns.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      portfolioCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Syngenta-Style Feedback Survey Modal (Parity Item 1)
   -------------------------------------------------------------------------- */
function initFeedbackModal() {
  const modal = document.getElementById('feedbackModal');
  const openBtns = document.querySelectorAll('.trigger-feedback');
  const closeBtn = document.getElementById('closeFeedbackModal');
  const steps = document.querySelectorAll('.survey-step');
  const optionBtns = document.querySelectorAll('.option-btn');
  const npsBtns = document.querySelectorAll('.nps-btn');
  const nextToStep2 = document.getElementById('nextToStep2');
  const nextToStep3 = document.getElementById('nextToStep3');
  const submitFeedback = document.getElementById('submitFeedback');
  const resetSurvey = document.getElementById('resetSurvey');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', 'true');
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
    });
  }

  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.bottom && rect.left <= e.clientX && e.clientX <= rect.right);
    if (!isInDialog) {
      modal.close();
    }
  });

  let selectedRole = null;
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      optionBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedRole = btn.dataset.role;
      if (nextToStep2) nextToStep2.disabled = false;
    });
  });

  let selectedNps = null;
  npsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      npsBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedNps = btn.dataset.score;
      if (nextToStep3) nextToStep3.disabled = false;
    });
  });

  function showStep(stepIndex) {
    steps.forEach((step, idx) => {
      step.classList.toggle('active', idx === stepIndex);
    });
  }

  if (nextToStep2) nextToStep2.addEventListener('click', () => showStep(1));
  if (nextToStep3) nextToStep3.addEventListener('click', () => showStep(2));
  
  if (submitFeedback) {
    submitFeedback.addEventListener('click', () => {
      showStep(3);
    });
  }

  if (resetSurvey) {
    resetSurvey.addEventListener('click', () => {
      selectedRole = null;
      selectedNps = null;
      optionBtns.forEach(b => b.classList.remove('selected'));
      npsBtns.forEach(b => b.classList.remove('selected'));
      if (nextToStep2) nextToStep2.disabled = true;
      if (nextToStep3) nextToStep3.disabled = true;
      showStep(0);
      modal.close();
    });
  }
}

/* --------------------------------------------------------------------------
   8. Search Overlay Modal
   -------------------------------------------------------------------------- */
function initSearchOverlay() {
  const openSearch = document.getElementById('openSearchBtn');
  const closeSearch = document.getElementById('closeSearchBtn');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  if (!searchModal) return;

  if (openSearch) {
    openSearch.addEventListener('click', () => {
      searchModal.classList.add('active');
      if (searchInput) searchInput.focus();
    });
  }

  if (closeSearch) {
    closeSearch.addEventListener('click', () => {
      searchModal.classList.remove('active');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      searchModal.classList.remove('active');
    }
  });

  const searchableData = [
    { title: 'Generic APIs & Active Pharmaceutical Ingredients', cat: 'Products', link: '#segments' },
    { title: 'Custom Synthesis & CDMO Scale-up', cat: 'Services', link: '#segments' },
    { title: 'Agro & Specialty Fine Chemicals', cat: 'Products', link: '#segments' },
    { title: 'High Potency Active Ingredients (HPAPI)', cat: 'Capability', link: '#portfolio' },
    { title: 'Visakhapatnam Manufacturing Complex', cat: 'Facilities', link: '#portfolio' },
    { title: 'WBCSD ESG & Green Catalysis Targets', cat: 'Sustainability', link: '#sustainability' },
    { title: 'CPHI Worldwide & TIDES Europe Events', cat: 'Events', link: '#events' }
  ];

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      searchResults.innerHTML = '';

      if (query.length < 2) return;

      const matches = searchableData.filter(item => 
        item.title.toLowerCase().includes(query) || item.cat.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<p style="color: var(--color-text-light-muted); text-align: center;">No results found for "${query}"</p>`;
        return;
      }

      matches.forEach(item => {
        const itemEl = document.createElement('a');
        itemEl.href = item.link;
        itemEl.style.cssText = `
          display: block;
          padding: 1rem;
          background: rgba(255,255,255,0.08);
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.15);
          color: var(--color-text-light);
          transition: border-color 0.2s;
        `;
        itemEl.innerHTML = `
          <div style="font-size: 0.75rem; color: var(--color-divis-cyan); text-transform: uppercase;">${item.cat}</div>
          <div style="font-weight: 600;">${item.title}</div>
        `;
        itemEl.addEventListener('click', () => searchModal.classList.remove('active'));
        searchResults.appendChild(itemEl);
      });
    });
  }
}

/* --------------------------------------------------------------------------
   9. Cookie Consent Slider Tray
   -------------------------------------------------------------------------- */
function initCookieTray() {
  const tray = document.getElementById('cookieTray');
  const acceptBtn = document.getElementById('acceptCookiesBtn');
  const settingsBtn = document.getElementById('cookieSettingsBtn');

  if (!tray) return;

  const cookieConsent = localStorage.getItem('nchem_cookie_consent');

  if (!cookieConsent) {
    setTimeout(() => {
      tray.classList.add('show');
    }, 1500);
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('nchem_cookie_consent', 'accepted');
      tray.classList.remove('show');
    });
  }

  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      localStorage.setItem('nchem_cookie_consent', 'customized');
      tray.classList.remove('show');
    });
  }
}
