/* ==========================================================================
   NCHEM (v3) — Interactive Functional Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ========================================================================
     SHARED: Formulations Database
     ======================================================================== */
  const formulationsV3 = [
    {
      id: 'nchem-bio-gold',
      title: 'Nchem Bio-Gold Organic Granules',
      category: 'Organic & Bio Fertilizers',
      desc: 'Enriched organic fertiliser processed from natural plant biomass to build rich, fertile soil that holds water longer.',
      dosage: '50–100 kg / acre during sowing',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'nchem-rhizo-boost',
      title: 'Nchem Rhizo-Boost Liquid Bio-Inoculant',
      category: 'Organic & Bio Fertilizers',
      desc: 'High-count nitrogen-fixing liquid bio-inoculant for leguminous crops to fix atmospheric nitrogen directly into root nodules.',
      dosage: '250 ml seed treatment or 500 ml drenching',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'nchem-soil-restore',
      title: 'Nchem Soil-Restore Humic Granules',
      category: 'Specialized Crop Nutrition & Growth Promoters',
      desc: 'Concentrated leonardite-derived humic granules that increase soil cation exchange capacity (CEC) and root branching for stronger crop growth.',
      dosage: '5 kg per acre during land prep',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'nchem-phospho-sol',
      title: 'Nchem Phospho-Sol Bio-Fertiliser',
      category: 'Specialized Crop Nutrition & Growth Promoters',
      desc: 'Releases bound phosphate trapped in soil so crop roots can easily absorb it for stronger tillering and root mass.',
      dosage: '500 ml per acre via drip or soil drench',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'nchem-k-mobilizer',
      title: 'Nchem K-Mobilizer Bio-Potash',
      category: 'Water-Soluble & Chemical Fertilizers',
      desc: 'Potash mobilizing bacterial culture that increases fruit size, grain weight, and natural crop stress tolerance.',
      dosage: '500 ml per acre via fertigation',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'nchem-multi-zinc',
      title: 'Nchem Multi-Zinc & Iron Fortifier',
      category: 'Micro-Nutrients & Micronutrient Fertilizers',
      desc: 'Bio-chelated multi-micronutrient formula engineered for rapid foliar uptake, curing interveinal chlorosis.',
      dosage: '250g - 500g per acre spray',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'nchem-crop-guard',
      title: 'Nchem Crop Guard Bio-Protectant',
      category: 'Crop Protection & Specialized Management',
      desc: 'Natural bio-based protectant that shields crops from fungal, bacterial, and pest pressure without harmful chemical residues.',
      dosage: '500 ml per acre foliar spray',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'nchem-npk-ws',
      title: 'Nchem NPK Water-Soluble 19:19:19',
      category: 'Water-Soluble & Chemical Fertilizers',
      desc: 'Fully water-soluble balanced NPK formula for fast nutrient delivery via drip irrigation or foliar application.',
      dosage: '3–5 kg per acre via fertigation',
      image: 'assets/nchem_soil_conditioner.png'
    }
  ];

  /* ========================================================================
     SHARED: Product Card Renderer
     ======================================================================== */
  function renderProducts(gridEl, categoryFilter) {
    if (!gridEl) return;

    const filtered = formulationsV3.filter(p => {
      return categoryFilter === 'All' || p.category === categoryFilter;
    });

    if (filtered.length === 0) {
      gridEl.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: #FFFFFF; border-radius: 12px; border: 1px solid var(--color-border);">
          <h3 style="font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">No Products Match This Filter</h3>
          <p style="color: var(--color-text-muted); font-size: 14px;">Select another nutrient or click "All Products" to see the full range.</p>
        </div>
      `;
      return;
    }

    gridEl.innerHTML = filtered.map(p => `
      <article class="product-card-top-rounded">
        <div class="card-photo-v3">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <div class="card-body-v3">
          <h3 class="card-title-v3">${p.title}</h3>
          <p style="font-size: 14px; color: var(--color-text-muted); margin-bottom: 16px; flex-grow: 1;">${p.desc}</p>
          <div style="margin-bottom: 20px; font-size: 12px; color: var(--color-text-muted);">
            <strong style="color: var(--color-text-main);">Dosage:</strong> ${p.dosage}
          </div>
          <button class="btn btn-outline-terracotta" style="width: 100%; margin-top: auto;">
            See more &rarr;
          </button>
        </div>
      </article>
    `).join('');
  }

  /* ========================================================================
     PORTAL TOGGLE — Switch between Corporate & Farmer views
     ======================================================================== */
  const corporateView   = document.getElementById('corporateView');
  const farmerPortalView = document.getElementById('farmerPortalView');
  const portalToggle    = document.getElementById('portalToggle');

  function showCorporate() {
    corporateView.style.display = 'block';
    farmerPortalView.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showFarmer() {
    corporateView.style.display = 'none';
    farmerPortalView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Render farmer products on first show
    renderProducts(document.getElementById('farmerProductGrid'), activeFarmerNutrient);
    // Start slideshow if not already started
    startSlideshow();
  }

  if (portalToggle) {
    const toggleSegments = portalToggle.querySelectorAll('.toggle-segment');
    toggleSegments.forEach(segment => {
      segment.addEventListener('click', () => {
        toggleSegments.forEach(s => s.classList.remove('active'));
        segment.classList.add('active');

        const portalType = segment.getAttribute('data-portal');
        if (portalType === 'farmer') {
          showFarmer();
        } else {
          showCorporate();
        }
      });
    });
  }

  /* ========================================================================
     FARMER PORTAL — Image Slideshow
     ======================================================================== */
  const fpSlides = document.querySelectorAll('.fp-slide');
  const fpDots   = document.querySelectorAll('.fp-dot');
  const fpPrev   = document.getElementById('fpPrev');
  const fpNext   = document.getElementById('fpNext');

  let currentSlide    = 0;
  let slideshowTimer  = null;
  let slideshowActive = false;

  function goToSlide(index) {
    fpSlides.forEach(s => s.classList.remove('active'));
    fpDots.forEach(d => d.classList.remove('active'));
    currentSlide = (index + fpSlides.length) % fpSlides.length;
    if (fpSlides[currentSlide]) fpSlides[currentSlide].classList.add('active');
    if (fpDots[currentSlide])   fpDots[currentSlide].classList.add('active');
  }

  function startSlideshow() {
    if (slideshowActive) return;
    slideshowActive = true;
    goToSlide(0);
    slideshowTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 4500);
  }

  if (fpNext) {
    fpNext.addEventListener('click', () => {
      clearInterval(slideshowTimer);
      slideshowActive = false;
      goToSlide(currentSlide + 1);
      startSlideshow();
    });
  }

  if (fpPrev) {
    fpPrev.addEventListener('click', () => {
      clearInterval(slideshowTimer);
      slideshowActive = false;
      goToSlide(currentSlide - 1);
      startSlideshow();
    });
  }

  fpDots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(slideshowTimer);
      slideshowActive = false;
      goToSlide(parseInt(dot.getAttribute('data-slide'), 10));
      startSlideshow();
    });
  });

  /* ========================================================================
     FARMER PORTAL — Nutrient Chip Filters
     ======================================================================== */
  let activeFarmerNutrient = 'All';
  const farmerChips        = document.querySelectorAll('.fp-chip');
  const farmerProductGrid  = document.getElementById('farmerProductGrid');

  farmerChips.forEach(chip => {
    chip.addEventListener('click', () => {
      farmerChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFarmerNutrient = chip.getAttribute('data-nutrient') || 'All';
      renderProducts(farmerProductGrid, activeFarmerNutrient);
    });
  });

  /* ========================================================================
     CORPORATE VIEW — Mega Menu Overlay Toggle
     ======================================================================== */
  const menuTriggerPill   = document.getElementById('menuTriggerPill');
  const megaMenuOverlayV3 = document.getElementById('megaMenuOverlayV3');
  const megaCloseBtnV3    = document.getElementById('megaCloseBtnV3');

  if (menuTriggerPill && megaMenuOverlayV3) {
    menuTriggerPill.addEventListener('click', () => {
      megaMenuOverlayV3.classList.add('active');
    });
  }

  if (megaCloseBtnV3 && megaMenuOverlayV3) {
    megaCloseBtnV3.addEventListener('click', () => {
      megaMenuOverlayV3.classList.remove('active');
    });
  }

  const megaNavItems = document.querySelectorAll('.mega-nav-item-v3');
  megaNavItems.forEach(item => {
    item.addEventListener('click', () => {
      megaNavItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  /* ========================================================================
     CORPORATE VIEW — Category Tabs
     ======================================================================== */
  let activeCategory = 'All';
  let activeNutrient = 'All';

  const productGridV3          = document.getElementById('productGridV3');
  const catTabs                = document.querySelectorAll('.cat-tab-v3');
  const chipPills              = document.querySelectorAll('.chip-pill-v3');
  const toggleNutrientPanelBtn = document.getElementById('toggleNutrientPanelBtn');
  const nutrientPanelV3        = document.getElementById('nutrientPanelV3');

  function renderFormulationsV3() {
    if (!productGridV3) return;
    const filtered = formulationsV3.filter(p => {
      return activeCategory === 'All' || p.category === activeCategory;
    });

    if (filtered.length === 0) {
      productGridV3.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: #FFFFFF; border-radius: 12px; border: 1px solid var(--color-border);">
          <h3 style="font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">No Formulations Match This Filter</h3>
          <p style="color: var(--color-text-muted); font-size: 14px;">Select another category tab or click "All Nutrients" to view available bio-inputs.</p>
        </div>
      `;
      return;
    }

    productGridV3.innerHTML = filtered.map(p => `
      <article class="product-card-top-rounded">
        <div class="card-photo-v3">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <div class="card-body-v3">
          <h3 class="card-title-v3">${p.title}</h3>
          <p style="font-size: 14px; color: var(--color-text-muted); margin-bottom: 16px; flex-grow: 1;">${p.desc}</p>
          <div style="margin-bottom: 20px; font-size: 12px; color: var(--color-text-muted);">
            <strong style="color: var(--color-text-main);">Dosage:</strong> ${p.dosage}
          </div>
          <button class="btn btn-outline-terracotta" style="width: 100%; margin-top: auto;">
            See more &rarr;
          </button>
        </div>
      </article>
    `).join('');
  }

  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.id === 'toggleNutrientPanelBtn') return; // handled separately
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category') || 'All';
      renderFormulationsV3();
    });
  });

  chipPills.forEach(chip => {
    chip.addEventListener('click', () => {
      chipPills.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-nutrient') || 'All';
      renderFormulationsV3();
    });
  });

  if (toggleNutrientPanelBtn && nutrientPanelV3) {
    toggleNutrientPanelBtn.addEventListener('click', () => {
      const isHidden = nutrientPanelV3.style.display === 'none';
      nutrientPanelV3.style.display = isHidden ? 'block' : 'none';
    });
  }

  /* ========================================================================
     Leaf/Sprout Chat Widgets
     ======================================================================== */
  ['sproutChatWidget', 'sproutChatWidgetFarmer'].forEach(id => {
    const widget = document.getElementById(id);
    if (widget) {
      widget.addEventListener('click', () => {
        alert('Welcome to Nchem Crop Support! How can we assist you with soil testing, organic input selection, or dealer locations today?');
      });
    }
  });

  /* ========================================================================
     Visitor Counter
     ======================================================================== */
  const visitorCounterV3 = document.getElementById('visitorCounterV3');
  if (visitorCounterV3) {
    let count = 14892410;
    setInterval(() => {
      count += Math.floor(Math.random() * 3) + 1;
      visitorCounterV3.textContent = `Visitor Count: ${count.toLocaleString()}`;
    }, 4000);
  }

  /* ========================================================================
     Initialize
     ======================================================================== */
  // Default: Corporate view active
  showCorporate();
  renderFormulationsV3();
});
