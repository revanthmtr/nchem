/* ==========================================================================
   NCHEM (v3) — Interactive Functional Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mega Menu Overlay Toggle
  const menuTriggerPill = document.getElementById('menuTriggerPill');
  const megaMenuOverlayV3 = document.getElementById('megaMenuOverlayV3');
  const megaCloseBtnV3 = document.getElementById('megaCloseBtnV3');

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

  // Mega Menu Items Navigation
  const megaNavItems = document.querySelectorAll('.mega-nav-item-v3');
  megaNavItems.forEach(item => {
    item.addEventListener('click', () => {
      megaNavItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Nchem Formulations Database
  const formulationsV3 = [
    {
      id: 'nchem-bio-gold',
      title: 'Nchem Bio-Gold Organic Granules',
      category: 'Organic Fertilisers',
      nutrients: ['Org-C', 'N', 'P', 'K'],
      desc: 'Enriched organic fertiliser processed from natural plant biomass to build rich, fertile soil that holds water longer.',
      dosage: '50–100 kg / acre during sowing',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'nchem-rhizo-boost',
      title: 'Nchem Rhizo-Boost Liquid Bio-Inoculant',
      category: 'Bio-Fertilisers',
      nutrients: ['N'],
      desc: 'High-count nitrogen-fixing liquid bio-inoculant for leguminous crops to fix atmospheric nitrogen directly into root nodules.',
      dosage: '250 ml seed treatment or 500 ml drenching',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'nchem-soil-restore',
      title: 'Nchem Soil-Restore Humic Granules',
      category: 'Soil Conditioners & Humics',
      nutrients: ['Org-C', 'Ca/Mg'],
      desc: 'Concentrated leonardite-derived humic granules that increase soil cation exchange capacity (CEC) and root branching.',
      dosage: '5 kg per acre during land prep',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'nchem-phospho-sol',
      title: 'Nchem Phospho-Sol Bio-Fertiliser',
      category: 'Bio-Fertilisers',
      nutrients: ['P'],
      desc: 'Releases bound phosphate trapped in soil so crop roots can easily absorb it for stronger tillering and root mass.',
      dosage: '500 ml per acre via drip or soil drench',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'nchem-k-mobilizer',
      title: 'Nchem K-Mobilizer Bio-Potash',
      category: 'Bio-Fertilisers',
      nutrients: ['K'],
      desc: 'Potash mobilizing bacterial culture that increases fruit size, grain weight, and natural crop stress tolerance.',
      dosage: '500 ml per acre via fertigation',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'nchem-multi-zinc',
      title: 'Nchem Multi-Zinc & Iron Fortifier',
      category: 'Micronutrient Fortifiers',
      nutrients: ['Zn', 'Fe'],
      desc: 'Bio-chelated multi-micronutrient formula engineered for rapid foliar uptake, curing interveinal chlorosis.',
      dosage: '250g - 500g per acre spray',
      image: 'assets/nchem_soil_conditioner.png'
    }
  ];

  let activeCategory = 'All';
  let activeNutrient = 'All';

  const productGridV3 = document.getElementById('productGridV3');
  const catTabs = document.querySelectorAll('.cat-tab-v3');
  const chipPills = document.querySelectorAll('.chip-pill-v3');
  const toggleNutrientPanelBtn = document.getElementById('toggleNutrientPanelBtn');
  const nutrientPanelV3 = document.getElementById('nutrientPanelV3');

  function renderFormulationsV3() {
    if (!productGridV3) return;

    const filtered = formulationsV3.filter(p => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchNutrient = activeNutrient === 'All' || p.nutrients.includes(activeNutrient);
      return matchCat && matchNutrient;
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

  // Category Tabs
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category') || 'All';
      renderFormulationsV3();
    });
  });

  // Nutrient Chip Pills
  chipPills.forEach(chip => {
    chip.addEventListener('click', () => {
      chipPills.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeNutrient = chip.getAttribute('data-nutrient') || 'All';
      renderFormulationsV3();
    });
  });

  // Toggle "Find Your Fit" Panel
  if (toggleNutrientPanelBtn && nutrientPanelV3) {
    toggleNutrientPanelBtn.addEventListener('click', () => {
      const isHidden = nutrientPanelV3.style.display === 'none';
      nutrientPanelV3.style.display = isHidden ? 'block' : 'none';
    });
  }

  // Leaf/Sprout Chat Widget
  const sproutChatWidget = document.getElementById('sproutChatWidget');
  if (sproutChatWidget) {
    sproutChatWidget.addEventListener('click', () => {
      alert('Welcome to Nchem Crop Support! How can we assist you with soil testing, organic input selection, or dealer locations today?');
    });
  }

  // Visitor Counter
  const visitorCounterV3 = document.getElementById('visitorCounterV3');
  if (visitorCounterV3) {
    let count = 14892410;
    setInterval(() => {
      count += Math.floor(Math.random() * 3) + 1;
      visitorCounterV3.textContent = `Visitor Count: ${count.toLocaleString()}`;
    }, 4000);
  }

  // Initialize
  renderFormulationsV3();
});
