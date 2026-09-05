/* ==========================================================================
   NCHEM SCIENCES — Master Agri-Science Interactive Script (v5)
   Complete 6-Category Catalog, 121 Products, 10-Crop Lifecycle Navigator & Facet Filters
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ========================================================================
     MASTER FORMULATIONS DATABASE (121 Complete Products across 6 Pillars)
     ======================================================================== */
  const formulationsV3 = [
    // ======================================================================
    // CATEGORY 1: BIO-FERTILIZERS, SOIL HEALTH & ORGANICS
    // ======================================================================
    // 1.1 Bio-Stimulants & Nutrient Mobilizers
    {
      id: 'humicid',
      title: 'Humicid',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Bio-Stimulants & Nutrient Mobilizers',
      composition: 'Humic Acid 80%',
      dosage: 'Fertigation / Drip (500g–1kg / acre)',
      applicationMethod: 'Fertigation / Drip',
      productType: 'Bio-Fertilizer',
      targetCrops: 'All Crops, Horticulture, Vegetables, Cotton, Sugarcane',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Biologically activated humic acid product to enhance soil health and stimulate root systems.',
      packSizes: '500g, 1kg, 5kg, 25kg',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'humicid-plus',
      title: 'Humicid+',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Bio-Stimulants & Nutrient Mobilizers',
      composition: 'Humic Acid 65%, Amino Acid 20%',
      dosage: 'Fertigation / Drip (500 ml–1 L / acre) or Foliar (2 ml/L)',
      applicationMethod: 'Fertigation / Drip',
      productType: 'Bio-Stimulant',
      targetCrops: 'All Crops, Chilli, Tomato, Pomegranate, Banana, Citrus',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'Enhances plant growth, promotes chlorophyll development, and increases vitamin/mineral uptake.',
      packSizes: '250 ml, 500 ml, 1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'humicid-plus-plus',
      title: 'Humicid++',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Bio-Stimulants & Nutrient Mobilizers',
      composition: 'Humic Acid 50%, Amino Acid 30%, Fulvic Acid 20%',
      dosage: 'Fertigation / Drip (1 L / acre) or Foliar (2.5 ml/L)',
      applicationMethod: 'Fertigation / Drip',
      productType: 'Bio-Stimulant',
      targetCrops: 'All Crops, Fruit Trees, Vegetables, Spices, Flowers',
      stage: 'Vegetative Growth (Stage-I), Fruit Setting (Stage-III)',
      desc: 'Bio-stimulant to improve plant growth, strengthen root development, and improve abiotic stress tolerance.',
      packSizes: '500 ml, 1 L, 5 L',
      image: 'assets/nchem_bio_gold.png'
    },
    {
      id: 'or-mix-4-in-1',
      title: 'OR MIX 4 in 1',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Bio-Stimulants & Nutrient Mobilizers',
      composition: 'Humic 40%, Amino 20%, Fulvic 20%, Seaweed 20%',
      dosage: 'Fertigation / Drip (1–2 L / acre)',
      applicationMethod: 'Fertigation / Drip',
      productType: 'Bio-Stimulant',
      targetCrops: 'All Crops, Pomegranate, Guava, Citrus, Papaya, Mango',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Promotes plant growth, flowering, and fruiting; keeps plants healthy and enhances water retention.',
      packSizes: '500 ml, 1 L, 5 L, 20 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'fulvicid',
      title: 'Fulvicid',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Bio-Stimulants & Nutrient Mobilizers',
      composition: 'Fulvic Acid 80%',
      dosage: 'Fertigation / Drip (250g–500g / acre) or Foliar (1g/L)',
      applicationMethod: 'Fertigation / Drip',
      productType: 'Bio-Stimulant',
      targetCrops: 'All Crops, Vegetables, Fruit Crops, Polyhouse Crops',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'High-potency nutrient mobilizer; increases nutrient absorption, seed germination, and soil porosity.',
      packSizes: '250g, 500g, 1kg',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'sea-extract',
      title: 'Sea Extract',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Bio-Stimulants & Nutrient Mobilizers',
      composition: 'Seaweed Extract (Kappaphycus algae)',
      dosage: 'Fertigation / Drip (500 ml–1 L / acre) or Foliar (2 ml/L)',
      applicationMethod: 'Fertigation / Drip',
      productType: 'Bio-Stimulant',
      targetCrops: 'All Crops, Paddy, Cotton, Chilli, Tomato, Grapes, Banana',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'Water-soluble seaweed extract rich in natural growth hormones and vitamins for balanced growth.',
      packSizes: '250 ml, 500 ml, 1 L, 5 L',
      image: 'assets/v2_bag.png'
    },

    // 1.2 Microbial Consortia & Soil Inoculants
    {
      id: 'npk-3-in-1',
      title: 'NPK 3 in 1',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Microbial Consortia & Soil Inoculants',
      composition: 'Liquid consortium of Azotobacter, PSB, KMB (2x10^8 CFU/ml)',
      dosage: 'Fertigation / Drip (1 L / acre) or Seed Treatment (250 ml)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Fertilizer',
      targetCrops: 'All Crops, Paddy, Sugarcane, Cotton, Maize, Pulses',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Solubilizes Nitrogen, Phosphorus, and Potash; promotes root hormone production and soil fertility.',
      packSizes: '500 ml, 1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'cms-microbes',
      title: 'CMS Microbes',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Microbial Consortia & Soil Inoculants',
      composition: 'Calcium, Magnesium, Sulphur solubilizing bacteria (2x10^8 CFU/ml)',
      dosage: 'Fertigation / Drip (1 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Fertilizer',
      targetCrops: 'All Crops, Groundnut, Mustard, Soybean, Tomato, Pomegranate',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Liquid beneficial bacteria for secondary nutrient uptake, improving soil structure and plant vigor.',
      packSizes: '500 ml, 1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'mix-microbes',
      title: 'Mix Microbes',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Microbial Consortia & Soil Inoculants',
      composition: 'Liquid beneficial bacteria with B, Mn, Fe, Zn (2x10^8 CFU/ml)',
      dosage: 'Fertigation / Drip (1 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Fertilizer',
      targetCrops: 'All Crops, Citrus, Pomegranate, Banana, Chilli, Polyhouse Crops',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'Essential micronutrient mobilizer that enhances soil fertility and stimulates rapid plant growth.',
      packSizes: '1 L, 5 L, 20 L',
      image: 'assets/nchem_bio_gold.png'
    },

    // 1.3 Organic Fertilizers, Composts & Manures
    {
      id: 'or-m',
      title: 'OR-M (Solid Organic Manure)',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Organic Fertilizers, Composts & Manures',
      composition: 'Solid Organic Manure (Moisture 19.2%, NPK 3.06%, C:N 17.62)',
      dosage: 'Soil Application (100–200 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Organic Manure',
      targetCrops: 'All Crops, Horticulture Orchards, Field Crops, Organic Farms',
      stage: 'Soil Prep & Basal',
      desc: 'Standardized organic manure rich in organic carbon and balanced NPK nutrients for soil conditioning.',
      packSizes: '25 kg, 50 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'or-l',
      title: 'OR-L (Liquid Fermented Organic Manure)',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Organic Fertilizers, Composts & Manures',
      composition: 'Liquid Fermented Organic Manure (Moisture 95.8%, TOC 18.9%, NPK 13.4%)',
      dosage: 'Soil / Fertigation (1–2 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Organic Manure',
      targetCrops: 'All Crops, Vegetables, Fruit Trees, Plantation Crops',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Fast-acting liquid fermented manure for root rhizosphere development and carbon enrichment.',
      packSizes: '1 L, 5 L, 20 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'city-compost',
      title: 'CITY COMPOST',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Organic Fertilizers, Composts & Manures',
      composition: 'City Compost (Standardized Organic Biomass)',
      dosage: 'Soil Application (200–500 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Organic Manure',
      targetCrops: 'All Field Crops, Horticulture, Turf, Land Reclamation',
      stage: 'Soil Prep & Basal',
      desc: 'Enriched compost for improving soil structure, water holding capacity, and organic matter content.',
      packSizes: '50 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'organic-rich',
      title: 'ORGANIC RICH',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Organic Fertilizers, Composts & Manures',
      composition: 'Organic Manure with High Humic Substance',
      dosage: 'Soil Application (100–250 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Organic Manure',
      targetCrops: 'All Crops, Fruits, Spices, Vegetables, Tea, Coffee',
      stage: 'Soil Prep & Basal',
      desc: 'High organic matter formulation to rejuvenate degraded soils and enhance microbial ecology.',
      packSizes: '25 kg, 50 kg Bag',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'organic-dap',
      title: 'ORGANIC DAP',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Organic Fertilizers, Composts & Manures',
      composition: 'Phosphate Rich Organic Manure (PROM) (P2O5 10.4%, TOC 8.5%)',
      dosage: 'Soil Application (50–100 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Organic Manure',
      targetCrops: 'All Crops, Paddy, Wheat, Pulses, Oilseeds, Cotton',
      stage: 'Soil Prep & Basal',
      desc: 'Bio-available phosphate replacement for chemical DAP, enriched with organic carbon.',
      packSizes: '50 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'bone-green',
      title: 'BONE GREEN',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Organic Fertilizers, Composts & Manures',
      composition: 'Bone Meal (Steamed) (Phosphorus & Calcium source)',
      dosage: 'Soil Application (50–100 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Organic Manure',
      targetCrops: 'Fruit Trees, Orchards, Plantation Crops, Vegetables',
      stage: 'Soil Prep & Basal',
      desc: 'Slow-release natural source of phosphorus and calcium for root development and soil enrichment.',
      packSizes: '25 kg, 50 kg Bag',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'bone-food',
      title: 'BONE FOOD',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Organic Fertilizers, Composts & Manures',
      composition: 'Bone Meal (Raw) (Organic P & Ca)',
      dosage: 'Soil Application (50–100 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Organic Manure',
      targetCrops: 'Long-duration Orchards, Coconut, Arecanut, Mango, Citrus',
      stage: 'Soil Prep & Basal',
      desc: 'Natural raw bone meal for long-term soil conditioning and calcium-phosphate mineralization.',
      packSizes: '25 kg, 50 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'orga-potash',
      title: 'ORGA-POTASH',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Organic Fertilizers, Composts & Manures',
      composition: 'Potash derived from Rhodophytes (Red Marine Algae Potash)',
      dosage: 'Soil Application / Fertigation (25–50 kg / acre or 1–2 L drip)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Organic Manure',
      targetCrops: 'Pomegranate, Banana, Papaya, Potato, Tomato, Onion, Grapes',
      stage: 'Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Organic bio-potash extracted from red algae for crop quality, fruit size, and weight improvement.',
      packSizes: '5 L, 25 kg Bag',
      image: 'assets/nchem_bio_gold.png'
    },
    {
      id: 'vermi-compost',
      title: 'VERMI COMPOST',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Organic Fertilizers, Composts & Manures',
      composition: 'Vermi Compost (NPK 1.0-0.8-0.8 + Active Humus)',
      dosage: 'Soil Application (200–500 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Organic Manure',
      targetCrops: 'All Crops, Vegetables, Floriculture, Organic Farming',
      stage: 'Soil Prep & Basal',
      desc: 'Earthworm-processed vermicompost packed with beneficial humus, enzymes, and micro-flora.',
      packSizes: '50 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'bio-rich',
      title: 'BIO RICH',
      category: 'Bio-Fertilizers, Soil Health & Organics',
      subcategory: 'Organic Fertilizers, Composts & Manures',
      composition: 'Bio-enriched Organic Manure with Multi-Microbial Inoculants',
      dosage: 'Soil Application (100–200 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Organic Manure',
      targetCrops: 'All Crops, Commercial Crops, Orchards, Polyhouses',
      stage: 'Soil Prep & Basal',
      desc: 'Premium manure fortified with beneficial microbial strains for vigorous root establishment.',
      packSizes: '50 kg Bag',
      image: 'assets/nchem_soil_conditioner.png'
    },

    // ======================================================================
    // CATEGORY 2: PLANT PROTECTION & BIO-PESTICIDES
    // ======================================================================
    // 2.1 Biological Pest & Insect Control
    {
      id: 'focus',
      title: 'Focus',
      category: 'Plant Protection & Bio-Pesticides',
      subcategory: 'Biological Pest & Insect Control',
      composition: 'Beauveria bassiana + Verticillium lecanii (2x10^8 CFU/ml)',
      dosage: 'Foliar Spray (5–10 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Pesticide',
      targetCrops: 'Chilli, Cotton, Vegetables, Citrus, Papaya, Pulses',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'Bio-insecticide formulated to manage sucking pests, thrips, mites, and whiteflies.',
      packSizes: '250 ml, 500 ml, 1 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'focus-plus',
      title: 'Focus Plus',
      category: 'Plant Protection & Bio-Pesticides',
      subcategory: 'Biological Pest & Insect Control',
      composition: 'Beauveria bassiana + Verticillium lecanii (2x10^8 CFU/ml) Fortified',
      dosage: 'Foliar Spray (5–10 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Pesticide',
      targetCrops: 'Chilli, Tomato, Brinjal, Pomegranate, Banana, Floriculture',
      stage: 'Vegetative Growth (Stage-I), Fruit Setting (Stage-III)',
      desc: 'Enhanced fungal formulation for controlling persistent pest outbreaks and resistant thrips/mites.',
      packSizes: '250 ml, 500 ml, 1 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'raksha',
      title: 'Raksha',
      category: 'Plant Protection & Bio-Pesticides',
      subcategory: 'Biological Pest & Insect Control',
      composition: 'Specialized bio-components in natural botanical form',
      dosage: 'Foliar Spray (2–2.5 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Pesticide',
      targetCrops: 'Horticulture, Floriculture, Polyhouse Vegetables, Chilli, Tea',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'Botanical/bio-protective formulation delivering powerful control against mites and sucking pests.',
      packSizes: '250 ml, 500 ml, 1 L, 5 L',
      image: 'assets/v2_bag.png'
    },

    // 2.2 Biological Disease & Blight Management
    {
      id: 'killer',
      title: 'Killer',
      category: 'Plant Protection & Bio-Pesticides',
      subcategory: 'Biological Disease & Blight Management',
      composition: 'Bacillus subtilis (2x10^8 CFU/ml) + Enhancers',
      dosage: 'Foliar Spray (5–10 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Pesticide',
      targetCrops: 'Pomegranate, Tomato, Paddy, Citrus, Grapes, Ginger',
      stage: 'Vegetative Growth (Stage-I), Fruit Setting (Stage-III)',
      desc: 'Bio-bactericide for effective suppression and management of bacterial blight and spot diseases.',
      packSizes: '250 ml, 500 ml, 1 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'power-killer',
      title: 'Power Killer',
      category: 'Plant Protection & Bio-Pesticides',
      subcategory: 'Biological Disease & Blight Management',
      composition: 'Bacillus subtilis + Pseudomonas fluorescens (2x10^8 CFU/ml)',
      dosage: 'Foliar Spray (5–10 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Pesticide',
      targetCrops: 'Pomegranate (Oily Spot), Tomato (Wilt), Paddy (Bacterial Leaf Blight), Citrus (Canker)',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II), Fruit Setting (Stage-III)',
      desc: 'Dual-action bio-fungicide/bactericide for severe bacterial blight, cankers, and leaf spots.',
      packSizes: '500 ml, 1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'horty-fungal',
      title: 'Horty Fungal',
      category: 'Plant Protection & Bio-Pesticides',
      subcategory: 'Biological Disease & Blight Management',
      composition: 'Trichoderma viride + Pseudomonas fluorescens + Paecilomyces',
      dosage: 'Fertigation / Drip (1–2 L / acre) or Foliar (3 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Pesticide',
      targetCrops: 'Horticultural Orchards, Mango, Guava, Papaya, Banana, Vegetables',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I), Fruit Setting (Stage-III)',
      desc: 'Broad-spectrum bio-fungicide protecting horticulture roots from wilt, root rot, and damping-off.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },

    // 2.3 Nematode & Root Inoculants
    {
      id: 'nem-roots',
      title: 'Nem Roots',
      category: 'Plant Protection & Bio-Pesticides',
      subcategory: 'Nematode & Root Inoculants',
      composition: 'Paecilomyces lilacinus (2x10^8 CFU/ml) + VAM (50 ip/ml)',
      dosage: 'Fertigation / Drip (1 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Pesticide',
      targetCrops: 'Pomegranate, Guava, Papaya, Polyhouse Capsicum/Cucumber, Banana',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Bio-nematicide and mycorrhizal inoculant that controls root-knot nematodes and builds root mass.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'nem-roots-plus',
      title: 'Nem Roots Plus',
      category: 'Plant Protection & Bio-Pesticides',
      subcategory: 'Nematode & Root Inoculants',
      composition: 'Paecilomyces + Trichoderma (2x10^8 CFU/ml) + VAM (50 ip/ml)',
      dosage: 'Fertigation / Drip (1 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Pesticide',
      targetCrops: 'All Nematode-sensitive crops, Citrus, Ginger, Turmeric, Black Pepper',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Complete root health inoculant targeting root nematodes while eliminating soil-borne fungal pathogens.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },

    // 2.4 Pheromone Traps & Attractants
    {
      id: 'n-chem-fruit-fly-trap',
      title: 'N Chem Fruit Fly Trap',
      category: 'Plant Protection & Bio-Pesticides',
      subcategory: 'Pheromone Traps & Attractants',
      composition: 'Methyl Eugenol Liquid Attractant Matrix',
      dosage: 'Trap Setup (10–20 traps / acre)',
      applicationMethod: 'Pheromone Trap',
      productType: 'Bio-Pesticide',
      targetCrops: 'Guava, Mango, Citrus, Papaya, Melons, Cucurbits, Orchards',
      stage: 'Flowering & Blooming (Stage-II), Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Monitors and traps male fruit flies (Bactrocera dorsalis, B. correcta) to prevent crop damage.',
      packSizes: 'Kit with 10 Traps & 10 Lures',
      image: 'assets/v2_bag.png'
    },

    // ======================================================================
    // CATEGORY 3: CROP-SPECIFIC STAGE NUTRITION (LIFECYCLE RANGE)
    // ======================================================================
    // 3.1 Pomegranate Range
    {
      id: 'pomo-general',
      title: 'Pomo General',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Pomegranate Stage Care',
      composition: 'PSB, KSB, ZSB (2x10^8 CFU/ml) + VAM (50 ip/ml)',
      dosage: 'Fertigation / Drip (2–3 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Fertilizer',
      targetCrops: 'Pomegranate',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Stimulates root systems and overall plant immunity in pomegranate orchards throughout the season.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'pomegranate-special-1',
      title: 'Pomegranate Flowering Special-I',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Pomegranate Stage Care',
      composition: 'PSB, KSB, ZSB, CSB, BSB + Flowering Enhanced Ingredients',
      dosage: 'Fertigation / Drip (2 L / acre) + Foliar (3 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Pomegranate',
      stage: 'Flowering & Blooming (Stage-II)',
      desc: 'Promotes profuse flowering, strong root development, and pest resistance in pomegranate Bahar treatment.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'pomegranate-special-2',
      title: 'Pomegranate Fruit Setting Special-II',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Pomegranate Stage Care',
      composition: 'PSB, ZSB, CSB, BSB + Fruit Setting Enhancers',
      dosage: 'Fertigation / Drip (2.5 L / acre) + Foliar (2 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Pomegranate',
      stage: 'Fruit Setting (Stage-III)',
      desc: 'Minimizes flower/fruit drop and boosts setting percentage in pomegranate orchards.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'pomegranate-special-3',
      title: 'Pomegranate Fruit Development Special-III',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Pomegranate Stage Care',
      composition: 'PSB, ZSB, CSB, MSB, SSB + Development Enhancers',
      dosage: 'Fertigation / Drip (3 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Pomegranate',
      stage: 'Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Supports rapid aril expansion, rind strength, and nutrient translocation.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_bio_gold.png'
    },
    {
      id: 'pomegranate-special-4',
      title: 'Pomegranate Fruit Colour & Size Special-IV',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Pomegranate Stage Care',
      composition: 'CSB, MSB, SSB, PSB + Fruit Size Enhancers',
      dosage: 'Fertigation / Drip (2 L / acre) + Foliar (2 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Pomegranate',
      stage: 'Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Enhances deep natural red rind colour, fruit weight, sugar Brix, and export market grade.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },

    // 3.2 Guava Range
    {
      id: 'guava-special-1',
      title: 'Guava Growth Special-I',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Guava Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
      dosage: 'Fertigation / Drip (2 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Guava',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Accelerates vegetative canopy development and root expansion in Thai & Taiwan Pink guava orchards.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'guava-special-2',
      title: 'Guava Flowering Special-II',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Guava Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Zn + Flowering Enhancers',
      dosage: 'Foliar Spray (2.5 ml/L) / Drip (2 L/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Stimulant',
      targetCrops: 'Guava',
      stage: 'Flowering & Blooming (Stage-II)',
      desc: 'Encourages uniform bud initiation and bloom quality with high flower cluster retention.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'guava-special-3',
      title: 'Guava Fruit Setting Special-III',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Guava Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Zn + Fruit Setting Enhancers',
      dosage: 'Fertigation / Drip (2.5 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Guava',
      stage: 'Fruit Setting (Stage-III)',
      desc: 'Prevents premature fruitlet shedding and promotes uniform setting across all branches.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'guava-special-4',
      title: 'Guava Fruit Development Special-IV',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Guava Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Ca + Fruit Development Enhancers',
      dosage: 'Fertigation / Drip (3 L / acre) + Foliar (2 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Guava',
      stage: 'Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Improves fruit size, pulp firmness, sweet aroma, and post-harvest shelf life.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_bio_gold.png'
    },

    // 3.3 Citrus Range
    {
      id: 'citrus-special-1',
      title: 'Citrus Growth Special-I',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Citrus Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
      dosage: 'Fertigation / Drip (2 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Citrus',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Promotes new flushes, foliage vigor, and deep feeder root establishment in Sweet Lime, Lemon & Mandarin.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'citrus-special-2',
      title: 'Citrus Flowering Special-II',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Citrus Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Boron + Flowering Enhancers',
      dosage: 'Foliar Spray (2.5 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Stimulant',
      targetCrops: 'Citrus',
      stage: 'Flowering & Blooming (Stage-II)',
      desc: 'Optimizes floral bloom, pollen viability, and heavy blossom set.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'citrus-special-3',
      title: 'Citrus Fruit Setting Special-III',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Citrus Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Calcium + Fruit Setting Enhancers',
      dosage: 'Fertigation / Drip (2.5 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Citrus',
      stage: 'Fruit Setting (Stage-III)',
      desc: 'Prevents fruit drop and strengthens button attachment at pea/marble fruit stage.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'citrus-special-4',
      title: 'Citrus Fruit Development Special-IV',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Citrus Stage Care',
      composition: 'Bio Organic Azotobacter, P, Zn, Magnesium + Fruit Development Enhancers',
      dosage: 'Fertigation / Drip (3 L / acre) + Foliar (2 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Citrus',
      stage: 'Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Promotes juice vesicle expansion, sugar accumulation, and lustrous thin rind texture.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_bio_gold.png'
    },

    // 3.4 Papaya Range
    {
      id: 'papaya-special-1',
      title: 'Papaya Growth Special-I',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Papaya Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
      dosage: 'Fertigation / Drip (1.5–2 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Papaya',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Stimulates girth development and root anchoring in Red Lady 786 papaya seedlings.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'papaya-special-2',
      title: 'Papaya Flowering Special-II',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Papaya Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Boron + Flowering Enhancers',
      dosage: 'Fertigation / Drip (2 L / acre) + Foliar (2 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Papaya',
      stage: 'Flowering & Blooming (Stage-II)',
      desc: 'Enhances flower retention and bisexual blossom vigor for continuous tier fruit bearing.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'papaya-special-3',
      title: 'Papaya Fruit Setting Special-III',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Papaya Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Calcium + Fruit Setting Enhancers',
      dosage: 'Fertigation / Drip (2.5 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Papaya',
      stage: 'Fruit Setting (Stage-III)',
      desc: 'Ensures continuous fruit setting along the stem trunk without tier gaps.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'papaya-special-4',
      title: 'Papaya Fruit Development Special-IV',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Papaya Stage Care',
      composition: 'Bio Organic Azotobacter, P, Zn, Magnesium + Fruit Development Enhancers',
      dosage: 'Fertigation / Drip (2 L / acre weekly)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Papaya',
      stage: 'Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Enhances fruit sizing, flesh firmness, deep red carotene colour, and 13.5+ Brix sugar levels.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_bio_gold.png'
    },

    // 3.5 Banana Range
    {
      id: 'banana-special-1',
      title: 'Banana Growth Special-I',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Banana Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
      dosage: 'Fertigation / Drip (2.5 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Banana',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Enhances pseudostem development and leaf emergence rate in Grand Naine G9 & Robusta banana.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'banana-special-2',
      title: 'Banana Flowering Special-II',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Banana Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Boron + Flowering Enhancers',
      dosage: 'Fertigation / Drip (3 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Banana',
      stage: 'Flowering & Blooming (Stage-II)',
      desc: 'Facilitates smooth bunch shooting and inflorescence emergence with high hand counts.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'banana-special-3',
      title: 'Banana Fruit Setting Special-III',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Banana Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Calcium + Fruit Setting Enhancers',
      dosage: 'Fertigation / Drip (3.5 L / acre) + Bunch Spray (2 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Banana',
      stage: 'Fruit Setting (Stage-III)',
      desc: 'Promotes finger elongation and bunch calibration across top and bottom hands.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'banana-special-4',
      title: 'Banana Fruit Development Special-IV',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Banana Stage Care',
      composition: 'Bio Organic Azotobacter, P, Zn, Magnesium + Fruit Development Enhancers',
      dosage: 'Fertigation / Drip (4 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Banana',
      stage: 'Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Boosts bunch weight (35kg+ average), finger filling, and uniform packing export grade.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_bio_gold.png'
    },

    // 3.6 Chilli Range
    {
      id: 'chilli-special-1',
      title: 'Chilli Growth Special-I',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Chilli Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
      dosage: 'Fertigation / Drip (1.5 L / acre) + Foliar (2 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Chilli',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Accelerates lateral branching and root mass expansion in green & red chilli crops.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'chilli-special-2',
      title: 'Chilli Flowering Special-II',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Chilli Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Boron + Flowering Enhancers',
      dosage: 'Foliar Spray (2 ml/L weekly)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Stimulant',
      targetCrops: 'Chilli',
      stage: 'Flowering & Blooming (Stage-II)',
      desc: 'Stimulates heavy star-white flower formation and prevents blossom drop.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'chilli-special-3',
      title: 'Chilli Fruit Setting Special-III',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Chilli Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Calcium + Fruit Setting Enhancers',
      dosage: 'Fertigation / Drip (2 L / acre) + Foliar (2 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Chilli',
      stage: 'Fruit Setting (Stage-III)',
      desc: 'Promotes pod setting, straight pod lengthening, and prevents blossom end rot.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'chilli-special-4',
      title: 'Chilli Colour Special-IV',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Chilli Stage Care',
      composition: 'Bio Organic Calcium, Magnesium, Sulphur + Colour Enhancers',
      dosage: 'Foliar Spray (2.5 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Stimulant',
      targetCrops: 'Chilli',
      stage: 'Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Enhances deep red colour pigment synthesis (ASTA), capsaicin pungency, and dry recovery weight.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_bio_gold.png'
    },

    // 3.7 Tomato Range
    {
      id: 'tomato-special-1',
      title: 'Tomato Growth Special-I',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Tomato Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
      dosage: 'Fertigation / Drip (1.5 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Tomato',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Fosters strong main stems, dense root systems, and resistance against early wilt.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'tomato-special-2',
      title: 'Tomato Flowering Special-II',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Tomato Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Boron + Flowering Enhancers',
      dosage: 'Foliar Spray (2 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Stimulant',
      targetCrops: 'Tomato',
      stage: 'Flowering & Blooming (Stage-II)',
      desc: 'Maximizes floral clusters (trusses) and pollination success.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'tomato-special-3',
      title: 'Tomato Fruit Setting Special-III',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Tomato Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Calcium + Fruit Setting Enhancers',
      dosage: 'Fertigation / Drip (2.5 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Tomato',
      stage: 'Fruit Setting (Stage-III)',
      desc: 'Optimizes cluster fruit set, thickens fruit walls, and prevents blossom end rot.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'tomato-special-4',
      title: 'Tomato Fruit Development Special-IV',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Tomato Stage Care',
      composition: 'Bio Organic Phosphorus, Potash, Zinc, Calcium + Development Enhancers',
      dosage: 'Foliar Spray (2 ml/L) / Drip (2.5 L/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Stimulant',
      targetCrops: 'Tomato',
      stage: 'Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Accelerates uniform sizing, deep lycopene crimson finish, fruit firmness, and shelf life.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_bio_gold.png'
    },

    // 3.8 Onion Range
    {
      id: 'onion-special-1',
      title: 'Onion Growth Special-I',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Onion Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
      dosage: 'Fertigation / Drip (2 L / acre) or Broadcasting',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Onion',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Encourages robust vegetative leaf foliage necessary for photosynthate storage in bulbs.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'onion-special-2',
      title: 'Onion Size Development Special-II',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Onion Stage Care',
      composition: 'Bio Organic Azotobacter, P, K, Calcium + Size Enhancers',
      dosage: 'Fertigation / Drip (3 L / acre) + Foliar (2.5 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Stimulant',
      targetCrops: 'Onion',
      stage: 'Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Promotes bulb expansion, compactness, neck closure, tight red skin, and long storage quality.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },

    // 3.9 Additional Crop Specials
    {
      id: 'paddy-special',
      title: 'PADDY Special',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Paddy Special',
      composition: 'Microbial Bio Consortium (Liquid) Bio-Fertilizer',
      dosage: 'Fertigation / Water Run (1 L / acre) or Seed/Seedling Treatment',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Bio-Fertilizer',
      targetCrops: 'Paddy',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Microbial Bio Consortium Bio-Fertilizer tailored for lowland and upland rice ecosystems to enhance tillering and grain filling.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'mango-special',
      title: 'MANGO Special',
      category: 'Crop-Specific Stage Nutrition',
      subcategory: 'Mango Special',
      composition: 'Biostimulant / Plant Growth Promoter Complex',
      dosage: 'Foliar Spray (2–3 ml/L) or Drip (2.5 L/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Bio-Stimulant',
      targetCrops: 'Mango',
      stage: 'Flowering & Blooming (Stage-II), Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Biostimulant specially formulated for mango flowering synchronization, fruitlet retention, and fruit enlargement.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },

    // ======================================================================
    // CATEGORY 4: MICRONUTRIENTS & CHELATES
    // ======================================================================
    // 4.1 Zinc Formulations & Suspensions
    {
      id: 'z-ox',
      title: 'Z-OX / Z-OXIDE',
      category: 'Micronutrients & Chelates',
      subcategory: 'Zinc Formulations & Suspensions',
      composition: 'Zinc Oxide Suspension Concentrate (Zn 39.5% Min)',
      dosage: 'Foliar Spray (1–1.5 ml/L) / Soil (500 ml/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Paddy, Maize, Cotton, Citrus, Pomegranate, Banana',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'High-concentration liquid suspension of Zinc for rapid correction of zinc deficiencies.',
      packSizes: '250 ml, 500 ml, 1 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'zinc-21',
      title: 'ZINC-21',
      category: 'Micronutrients & Chelates',
      subcategory: 'Zinc Formulations & Suspensions',
      composition: 'Zinc Sulphate Heptahydrate (Zn 21%)',
      dosage: 'Soil / Fertigation (10–25 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Paddy, Wheat, Maize, Cotton, Pulses',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Soluble zinc salt for soil application to prevent khaira disease and leaf chlorosis.',
      packSizes: '5 kg, 25 kg Bag',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'zinc-16',
      title: 'ZINC-16',
      category: 'Micronutrients & Chelates',
      subcategory: 'Zinc Formulations & Suspensions',
      composition: 'Zinc Polyphosphate (Zn 16%)',
      dosage: 'Fertigation / Soil (5–10 kg / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Horticulture, Drip-irrigated crops',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Polyphosphate complex providing extended-release Zinc and Phosphorus.',
      packSizes: '10 kg, 25 kg',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'n-chem-tetra-zinc',
      title: 'N Chem Tetra-Zinc',
      category: 'Micronutrients & Chelates',
      subcategory: 'Zinc Formulations & Suspensions',
      composition: 'Zinc Sulphate Monohydrate (Zn 33%)',
      dosage: 'Foliar (2g/L) / Soil (5–10 kg/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Paddy, Sugarcane, Citrus, Vegetables',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Concentrated straight zinc fertilizer for rapid vegetative recovery.',
      packSizes: '1 kg, 5 kg, 25 kg',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'n-chem-tetra-zinc-g',
      title: 'N Chem Tetra-Zinc G',
      category: 'Micronutrients & Chelates',
      subcategory: 'Zinc Formulations & Suspensions',
      composition: 'Zinc Sulphate Monohydrate (Granular)',
      dosage: 'Soil Application (5–10 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Field Crops, Oilseeds, Cereals',
      stage: 'Soil Prep & Basal',
      desc: 'Granular grade suitable for mechanical spreading and basal broadcasting.',
      packSizes: '5 kg, 25 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'chela-z',
      title: 'CHELA-Z',
      category: 'Micronutrients & Chelates',
      subcategory: 'Zinc Formulations & Suspensions',
      composition: 'Chelated Zinc as Zn-EDTA 12%',
      dosage: 'Foliar Spray (1–1.5g/L) / Drip (500g/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Horticulture, Grapes, Polyhouse crops',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'Fully chelated, non-reactive Zinc for quick absorption across diverse soil pH levels.',
      packSizes: '250g, 500g, 1kg',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'chela-z17',
      title: 'CHELA-Z17',
      category: 'Micronutrients & Chelates',
      subcategory: 'Zinc Formulations & Suspensions',
      composition: 'Chelated Zinc as Zn-HEDP 17%',
      dosage: 'Foliar Spray (1g/L) / Drip (500g/acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Calcareous and alkaline soils, Fruit Crops',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'High-potency HEDP-chelated zinc formulation engineered for high pH soils.',
      packSizes: '500g, 1kg',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'gly-co-z',
      title: 'GLY CO-Z',
      category: 'Micronutrients & Chelates',
      subcategory: 'Zinc Formulations & Suspensions',
      composition: 'Chelated Zinc as Zinc-Glycine (Liquid 6.8%)',
      dosage: 'Foliar Spray (2–2.5 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Sensitive Crops, Vegetables, Flowers, Citrus',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'Amino-acid chelated Zinc offering high systemic bio-availability and soft tissue tolerance.',
      packSizes: '250 ml, 500 ml, 1 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'gluco-z',
      title: 'GLUCO-Z',
      category: 'Micronutrients & Chelates',
      subcategory: 'Zinc Formulations & Suspensions',
      composition: 'Zinc Gluconate (Zn 12%)',
      dosage: 'Foliar Spray (1.5–2 ml/L) / Drip (500 ml/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Fruit Crops, Grapes, Pomegranate, Apple, Mango',
      stage: 'Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Sugar-complexed organic zinc for fruit development and enzyme activation.',
      packSizes: '250 ml, 500 ml, 1 L',
      image: 'assets/nchem_bio_gold.png'
    },

    // 4.2 Boron Formulations
    {
      id: 'boron-20',
      title: 'BORON 20% / BOROSOL',
      category: 'Micronutrients & Chelates',
      subcategory: 'Boron Formulations',
      composition: 'Di-Sodium Octa Borate Tetrahydrate (20% B)',
      dosage: 'Foliar Spray (1–1.5g/L) / Drip (500g/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Pomegranate, Papaya, Tomato, Chilli, Cotton, Mustard',
      stage: 'Flowering & Blooming (Stage-II), Fruit Setting (Stage-III)',
      desc: 'Highly soluble boron powder for pollination, pollen tube growth, and fruit set.',
      packSizes: '250g, 500g, 1kg',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'borosil',
      title: 'BOROSIL / BOROSOL-G',
      category: 'Micronutrients & Chelates',
      subcategory: 'Boron Formulations',
      composition: 'Di-Sodium Tetra Borate Pentahydrate',
      dosage: 'Soil (2–5 kg / acre) / Fertigation',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Groundnut, Sunflower, Cauliflower, Beetroot',
      stage: 'Soil Prep & Basal',
      desc: 'Boron source for basal dressing and long-term soil availability.',
      packSizes: '1 kg, 5 kg, 25 kg',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'b11',
      title: 'B11',
      category: 'Micronutrients & Chelates',
      subcategory: 'Boron Formulations',
      composition: 'Colemanite (Natural Boron Mineral source)',
      dosage: 'Soil Application (5–10 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Long-term Orchards, Plantation Crops, Sandy Soils',
      stage: 'Soil Prep & Basal',
      desc: 'Slow-release calcium-borate mineral for continuous availability without leaching.',
      packSizes: '25 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'boro-plus',
      title: 'BORO PLUS',
      category: 'Micronutrients & Chelates',
      subcategory: 'Boron Formulations',
      composition: 'Anhydrous Borax',
      dosage: 'Soil Application (2–4 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Field Crops, Commercial Crops',
      stage: 'Soil Prep & Basal',
      desc: 'Highly concentrated boron fertilizer for soil incorporation.',
      packSizes: '1 kg, 5 kg',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'boric-acid',
      title: 'BORIC ACID',
      category: 'Micronutrients & Chelates',
      subcategory: 'Boron Formulations',
      composition: 'Boric Acid (17% B)',
      dosage: 'Foliar Spray (1–2g/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Vegetables, Fruit Crops',
      stage: 'Flowering & Blooming (Stage-II)',
      desc: 'Water-soluble formulation for immediate foliar boron correction.',
      packSizes: '500g, 1kg, 25kg',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'n-chem-boromine',
      title: 'N Chem Boromine',
      category: 'Micronutrients & Chelates',
      subcategory: 'Boron Formulations',
      composition: 'Boron Ethanolamine (Liquid Boron 11%)',
      dosage: 'Foliar Spray (1.5–2 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Fruit Crops, Cotton, Pulses, Floriculture',
      stage: 'Flowering & Blooming (Stage-II), Fruit Setting (Stage-III)',
      desc: 'Organic amine-complexed liquid boron for maximum mobility inside plant tissues.',
      packSizes: '250 ml, 500 ml, 1 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'n-chem-boro-soil',
      title: 'N Chem Boro Soil',
      category: 'Micronutrients & Chelates',
      subcategory: 'Boron Formulations',
      composition: 'Borax (Sodium Tetraborate Granular)',
      dosage: 'Soil Application (4–5 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Sugarcane, Potato, Brassicas',
      stage: 'Soil Prep & Basal',
      desc: 'Specialized soil-application borax for basal crop cycles.',
      packSizes: '5 kg, 25 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'n-chem-gly-b',
      title: 'N Chem Gly-B',
      category: 'Micronutrients & Chelates',
      subcategory: 'Boron Formulations',
      composition: 'Chelated Boron (Liquid Glycine-Complexed)',
      dosage: 'Foliar Spray (1–1.5 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Delicate Blooms, Polyhouse Floriculture, Grapes, Strawberry',
      stage: 'Flowering & Blooming (Stage-II)',
      desc: 'Glycine-chelated liquid boron designed for delicate blooms without phytotoxicity.',
      packSizes: '250 ml, 500 ml, 1 L',
      image: 'assets/nchem_bio_gold.png'
    },

    // 4.3 Magnesium & Calcium Formulations
    {
      id: 'tetra-mag',
      title: 'TETRA-MAG',
      category: 'Micronutrients & Chelates',
      subcategory: 'Magnesium & Calcium Formulations',
      composition: 'Chelated Magnesium as Mg-EDTA 5.0%',
      dosage: 'Foliar (1–1.5g/L) / Fertigation (500g/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Banana, Citrus, Cotton, Coffee, Tea',
      stage: 'Vegetative Growth (Stage-I), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'EDTA chelated Magnesium for chlorophyll formation and photosynthetic energy.',
      packSizes: '500g, 1kg',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'mag-mix',
      title: 'MAG-MIX',
      category: 'Micronutrients & Chelates',
      subcategory: 'Magnesium & Calcium Formulations',
      composition: 'Magnesium Sulphate (Mg 9.5%, S 12%)',
      dosage: 'Foliar (3–5g/L) / Soil (10–25 kg/acre) / Drip',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Tomato, Potato, Oilseeds, Commercial Crops',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Straight secondary nutrient source to prevent interveinal chlorosis and boost enzymes.',
      packSizes: '1 kg, 5 kg, 25 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'hydro-mag',
      title: 'HYDRO-MAG',
      category: 'Micronutrients & Chelates',
      subcategory: 'Magnesium & Calcium Formulations',
      composition: 'Magnesium Hydroxide + Zinc Phosphate (Mg 24%)',
      dosage: 'Foliar (2 ml/L) / Fertigation (1 L/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Orchards, Maize, Cotton, Citrus',
      stage: 'Vegetative Growth (Stage-I), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'High-analysis suspension supplying both Magnesium and Zinc in single pass.',
      packSizes: '500 ml, 1 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'calcium-10',
      title: 'CALCIUM 10%',
      category: 'Micronutrients & Chelates',
      subcategory: 'Magnesium & Calcium Formulations',
      composition: 'Chelated Calcium in EDTA 10%',
      dosage: 'Foliar Spray (1–1.5g/L) / Drip (500g/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Tomato, Apple, Pomegranate, Papaya, Capsicum',
      stage: 'Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Non-clogging chelated Calcium for cell wall strength and fruit firmness.',
      packSizes: '250g, 500g, 1kg',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'n-chem-tetra-cal',
      title: 'N Chem Tetra-Cal',
      category: 'Micronutrients & Chelates',
      subcategory: 'Magnesium & Calcium Formulations',
      composition: 'Chelated Calcium as Ca-EDTA',
      dosage: 'Foliar Spray (1.5g/L) / Drip (1 kg/acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Tomato, Pomegranate, Guava, Watermelon',
      stage: 'Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Prevents bitter pit, blossom end rot, and fruit cracking under heat.',
      packSizes: '500g, 1kg',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'c11',
      title: 'C11',
      category: 'Micronutrients & Chelates',
      subcategory: 'Magnesium & Calcium Formulations',
      composition: 'Concentrated Liquid Calcium (Ca 11%)',
      dosage: 'Foliar Spray (2 ml/L) / Drip (1 L/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Fruit Trees, Berries, Cucurbits, Melons',
      stage: 'Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Liquid calcium concentrate for rapid fruit sizing and skin elasticity.',
      packSizes: '500 ml, 1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'gly-ca-21',
      title: 'GLY Ca-21',
      category: 'Micronutrients & Chelates',
      subcategory: 'Magnesium & Calcium Formulations',
      composition: 'Fortified Calcium Suspension (Ca 21%)',
      dosage: 'Foliar Spray (2–2.5 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Horticulture Crops, Pomegranate, Mango, Apple',
      stage: 'Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Flowable suspension providing dense elemental calcium for maximum peel durability.',
      packSizes: '500 ml, 1 L',
      image: 'assets/nchem_bio_gold.png'
    },
    {
      id: 'n-chem-gly-c',
      title: 'N Chem Gly-C',
      category: 'Micronutrients & Chelates',
      subcategory: 'Magnesium & Calcium Formulations',
      composition: 'Chelated Calcium (Liquid Glycine-Complexed)',
      dosage: 'Foliar Spray (2 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Delicate Vegetables, Floriculture, Strawberry',
      stage: 'Fruit Setting (Stage-III)',
      desc: 'Glycine-complexed liquid calcium for soft tissue penetration without scorching.',
      packSizes: '250 ml, 500 ml, 1 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'calboron',
      title: 'CALBORON',
      category: 'Micronutrients & Chelates',
      subcategory: 'Magnesium & Calcium Formulations',
      composition: 'EDTA Chelated Calcium & Boron Mix',
      dosage: 'Foliar Spray (1.5–2g/L) / Drip (1 kg/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Pomegranate, Tomato, Chilli, Citrus, Papaya, Mango',
      stage: 'Flowering & Blooming (Stage-II), Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Synergistic combination preventing flower drop and fruit cracking.',
      packSizes: '500g, 1kg',
      image: 'assets/nchem_soil_conditioner.png'
    },

    // 4.4 Manganese & Iron Formulations
    {
      id: 'pro-mn',
      title: 'PRO-Mn',
      category: 'Micronutrients & Chelates',
      subcategory: 'Manganese & Iron Formulations',
      composition: 'Manganese Sulphate (Mn 30.5%)',
      dosage: 'Foliar (2g/L) / Soil (5–10 kg/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Paddy, Wheat, Sugarcane, Cotton, Citrus',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Straight manganese salt supporting nitrate assimilation and enzyme activity.',
      packSizes: '1 kg, 5 kg, 25 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'mcs-26',
      title: 'MCS-26',
      category: 'Micronutrients & Chelates',
      subcategory: 'Manganese & Iron Formulations',
      composition: 'Manganese Carbonate Suspension Concentrate (Mn 26%)',
      dosage: 'Foliar Spray (1.5–2 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Citrus, Soybeans, Cereals',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'High-density flowable manganese suspension for foliar correction.',
      packSizes: '500 ml, 1 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'chela-mn',
      title: 'CHELA-Mn',
      category: 'Micronutrients & Chelates',
      subcategory: 'Manganese & Iron Formulations',
      composition: 'Chelated Manganese as Mn-EDTA 10%',
      dosage: 'Foliar Spray (1g/L) / Drip (500g/acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'High pH & Calcareous soils, Orchards',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Stabilized manganese chelate for alkaline and calcareous soils.',
      packSizes: '500g, 1kg',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'fs-19',
      title: 'FS 19',
      category: 'Micronutrients & Chelates',
      subcategory: 'Manganese & Iron Formulations',
      composition: 'Ferrous Sulphate (Fe 19%)',
      dosage: 'Soil (10–25 kg/acre) / Foliar (3g/L)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Paddy, Groundnut, Sugarcane, Citrus, Garden crops',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Straight iron fertilizer to correct iron chlorosis (yellowing) in young leaves.',
      packSizes: '1 kg, 5 kg, 25 kg Bag',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'n-chem-tetra-ferrous',
      title: 'N Chem Tetra-Ferrous',
      category: 'Micronutrients & Chelates',
      subcategory: 'Manganese & Iron Formulations',
      composition: 'Chelated Iron as Fe-EDTA 12%',
      dosage: 'Foliar Spray (1–1.5g/L) / Drip (500g/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Grapes, Citrus, Floriculture, Turf',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Chelated iron for rapid leaf greening and electron transport activation.',
      packSizes: '250g, 500g, 1kg',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'n-chem-tetra-iron',
      title: 'N Chem Tetra-Iron',
      category: 'Micronutrients & Chelates',
      subcategory: 'Manganese & Iron Formulations',
      composition: 'Chelated Iron as Fe-HEDP 17%',
      dosage: 'Foliar (1g/L) / Fertigation (500g/acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'High pH soils, Polyhouses, Fruit Orchards',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'High-stability iron chelate performing across broad alkaline pH ranges.',
      packSizes: '500g, 1kg',
      image: 'assets/nchem_bio_gold.png'
    },

    // 4.5 Copper, Molybdenum & Multi-Micronutrient Formulations
    {
      id: 'sulfo-cop',
      title: 'SULFO COP',
      category: 'Micronutrients & Chelates',
      subcategory: 'Copper & Molybdenum Formulations',
      composition: 'Copper Sulphate (Cu 24%)',
      dosage: 'Foliar Spray (1.5–2g/L) / Soil (5 kg/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Paddy, Wheat, Citrus, Citrus die-back control',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Soluble copper source for enzyme function, lignification, and die-back prevention.',
      packSizes: '1 kg, 5 kg, 25 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'n-chem-tetra-cop',
      title: 'N Chem Tetra-Cop',
      category: 'Micronutrients & Chelates',
      subcategory: 'Copper & Molybdenum Formulations',
      composition: 'Chelated Copper as Cu-EDTA 12%',
      dosage: 'Foliar Spray (0.5–1g/L) / Drip (250g/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Horticulture, Grapes, Citrus',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Chelated copper fertilizer for crop defense and metabolic enzymatic pathways.',
      packSizes: '250g, 500g, 1kg',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'moly-boost',
      title: 'MOLY BOOST',
      category: 'Micronutrients & Chelates',
      subcategory: 'Copper & Molybdenum Formulations',
      composition: 'Ammonium Molybdate (Mo 52%)',
      dosage: 'Foliar Spray (0.2–0.5g/L) / Drip (100g/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Pulses, Legumes, Cauliflower, Groundnut, Soybean',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Straight molybdenum fertilizer vital for nitrogenase activity and symbiotic root nodulation.',
      packSizes: '100g, 250g, 500g',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'sulphur-90',
      title: 'SULPHUR 90%',
      category: 'Micronutrients & Chelates',
      subcategory: 'Copper & Molybdenum Formulations',
      composition: 'Sulphur 90% Powder (S 90.92%)',
      dosage: 'Soil Application (3–5 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'Oilseeds (Mustard, Groundnut), Pulses, Grapes, Chilli, Tea',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Elemental sulphur powder for soil acidification and secondary sulphur nutrition.',
      packSizes: '1 kg, 3 kg, 25 kg Bag',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'formula-4',
      title: 'FORMULA-4',
      category: 'Micronutrients & Chelates',
      subcategory: 'Multi-Micronutrient Blends & Formulations',
      composition: 'Superior Multi Micronutrients Mix (Zn, Fe, Mn, Cu, B, Mo)',
      dosage: 'Foliar Spray (2.5–3g/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Paddy, Cotton, Chilli, Sugarcane, Vegetables',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'Standardized multi-micronutrient mixture tailored for balanced foliage nourishment.',
      packSizes: '500g, 1kg, 5kg',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'formula-6',
      title: 'FORMULA-6',
      category: 'Micronutrients & Chelates',
      subcategory: 'Multi-Micronutrient Blends & Formulations',
      composition: 'Chelated Multi Micronutrients Liquid Fertilizer',
      dosage: 'Foliar Spray (2–2.5 ml/L) / Fertigation (1 L/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Crops, Fruit Crops, Polyhouses, Grapes, Pomegranate',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II), Fruit Setting (Stage-III)',
      desc: 'EDTA-chelated multi-micronutrient liquid preventing broad spectrum hidden hunger.',
      packSizes: '250 ml, 500 ml, 1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'micro-max',
      title: 'Micro Max',
      category: 'Micronutrients & Chelates',
      subcategory: 'Multi-Micronutrient Blends & Formulations',
      composition: 'Chelated Multi Micronutrient Liquid / Powder Mix',
      dosage: 'Foliar (2 ml/L or 1.5g/L) / Drip (1 kg/acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Micronutrient / Chelate',
      targetCrops: 'All Agricultural & Horticultural Crops',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'Superior complete multi-micronutrient formulation for high-yield cultivation.',
      packSizes: '500g, 1kg, 1 L, 5 L',
      image: 'assets/nchem_bio_gold.png'
    },

    // ======================================================================
    // CATEGORY 5: WATER SOLUBLE, COMPLEX & LIQUID CHEMICAL FERTILIZERS
    // ======================================================================
    // 5.1 Primary NPK & Complex Water Soluble Fertilizers
    {
      id: 'npk-12-61-00',
      title: '12:61:00 (Mono Ammonium Phosphate)',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Primary NPK & Complex Water Soluble Fertilizers',
      composition: 'NPK 12:61:00 (100% Water Soluble MAP)',
      dosage: 'Fertigation (3–5 kg/acre) / Foliar (4–5g/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: '100% Water Soluble Fertilizer',
      targetCrops: 'All Crops, Pomegranate, Banana, Chilli, Tomato, Grapes',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'High phosphate fertilizer for early root establishment and profuse flowering.',
      packSizes: '1 kg, 25 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'npk-00-52-34',
      title: '00:52:34 (Mono Potassium Phosphate)',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Primary NPK & Complex Water Soluble Fertilizers',
      composition: 'NPK 00:52:34 (100% Water Soluble MKP)',
      dosage: 'Fertigation (3–5 kg/acre) / Foliar (4–5g/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: '100% Water Soluble Fertilizer',
      targetCrops: 'All Crops, Fruit Trees, Vegetables, Flowers',
      stage: 'Flowering & Blooming (Stage-II), Fruit Setting (Stage-III)',
      desc: 'Nitrogen-free PK formulation for fruit development, wood hardening, and fungal suppression.',
      packSizes: '1 kg, 25 kg Bag',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'npk-13-00-45',
      title: '13:0:45 (Potassium Nitrate)',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Primary NPK & Complex Water Soluble Fertilizers',
      composition: 'NPK 13:00:45 (Water Soluble NOP)',
      dosage: 'Fertigation (3–5 kg/acre) / Foliar (5g/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: '100% Water Soluble Fertilizer',
      targetCrops: 'Pomegranate, Banana, Citrus, Papaya, Mango, Potato, Onion',
      stage: 'Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Nitrate nitrogen and soluble potash for fruit sizing, sugar development, and drought resilience.',
      packSizes: '1 kg, 25 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'npk-13-00-05',
      title: '13:0:05 (Potassium Nitrate Prilled)',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Primary NPK & Complex Water Soluble Fertilizers',
      composition: 'Potassium Nitrate (Prilled)',
      dosage: 'Soil Application (25–50 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: '100% Water Soluble Fertilizer',
      targetCrops: 'Field Crops, Sugarcane, Tobacco, Potato, Spices',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Prilled formulation for base and top-dressing soil distribution.',
      packSizes: '25 kg, 50 kg Bag',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'grow-streem',
      title: 'GROW STREEM',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Primary NPK & Complex Water Soluble Fertilizers',
      composition: 'Liquid Fertilizer NPK 11:11:8 + Zn & B',
      dosage: 'Fertigation (2 L/acre) / Foliar (3 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Liquid Fertilizer',
      targetCrops: 'All Crops, Vegetables, Floriculture, Cotton',
      stage: 'Vegetative Growth (Stage-I), Flowering & Blooming (Stage-II)',
      desc: 'Balanced liquid NPK fortified with zinc and boron for continuous vegetative vigor.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'n-chem-08-08-08',
      title: 'N Chem 08:08:08',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Primary NPK & Complex Water Soluble Fertilizers',
      composition: 'NPK Liquid (Sugarcane Special 8:8:8)',
      dosage: 'Fertigation / Drip (2–3 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Liquid Fertilizer',
      targetCrops: 'Sugarcane, Banana, Maize, Fodder Crops',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Balanced 1:1:1 liquid ratio designed for tillering and internode elongation in sugarcane.',
      packSizes: '1 L, 5 L, 20 L',
      image: 'assets/nchem_bio_gold.png'
    },
    {
      id: 'np-7-21',
      title: 'NP 7-21',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Primary NPK & Complex Water Soluble Fertilizers',
      composition: 'Fortified Liquid NP 7:21:0',
      dosage: 'Fertigation / Drip (2 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Liquid Fertilizer',
      targetCrops: 'All Starter Crops, Transplanting Seedlings, Tubers',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'High phosphate liquid starter fertilizer promoting root systems and early shoots.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'nkmb',
      title: 'NKMB',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Primary NPK & Complex Water Soluble Fertilizers',
      composition: 'NK 6:0:18 + Ca, Mg & Boron Suspension',
      dosage: 'Fertigation (2–3 L/acre) / Foliar (3 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Liquid Fertilizer',
      targetCrops: 'Fruit Trees, Pomegranate, Banana, Papaya, Tomato',
      stage: 'Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Potassium suspension enriched with secondary and micronutrients for late crop stages.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },

    // 5.2 Nitrogen, Nitrate & Liquid Fertilizers
    {
      id: 'uan-32',
      title: 'UAN 32',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Nitrogen, Nitrate & Liquid Fertilizers',
      composition: 'Urea Ammonium Nitrate 32% N Liquid',
      dosage: 'Fertigation / Drip (3–5 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Liquid Fertilizer',
      targetCrops: 'Paddy, Wheat, Sugarcane, Cotton, Maize, Banana',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Triple-nitrogen liquid (amide, ammoniacal, nitrate) providing fast and sustained feeding.',
      packSizes: '5 L, 20 L, 200 L Drum',
      image: 'assets/nchem_rhizo_boost.png'
    },
    {
      id: 'n-chem-up',
      title: 'N Chem UP (Urea Phosphate)',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Nitrogen, Nitrate & Liquid Fertilizers',
      composition: 'Urea Phosphate (NPK 17:44:00)',
      dosage: 'Fertigation / Drip (2–4 kg / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: '100% Water Soluble Fertilizer',
      targetCrops: 'All Crops in Alkaline Soils, Drip fertigation systems',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Highly acidic water-soluble fertilizer that prevents drip emitter clogging and mobilizes nutrients.',
      packSizes: '1 kg, 25 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'n-chem-nutin-app',
      title: 'N Chem Nutin App',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Nitrogen, Nitrate & Liquid Fertilizers',
      composition: 'Ammonium Poly Phosphate (APP Liquid 10:34:0)',
      dosage: 'Fertigation / Drip (2–3 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Liquid Fertilizer',
      targetCrops: 'All Crops in high calcium soils, Vegetables, Potato',
      stage: 'Soil Prep & Basal, Vegetative Growth (Stage-I)',
      desc: 'Polyphosphate liquid technology that keeps phosphorus soluble in calcium-rich soils.',
      packSizes: '5 L, 20 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'n-chem-calcinit',
      title: 'N Chem Calcinit',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Nitrogen, Nitrate & Liquid Fertilizers',
      composition: 'Calcium Nitrate (100% Water Soluble Ca 18.5%, N 15.5%)',
      dosage: 'Fertigation / Drip (5–10 kg / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: '100% Water Soluble Fertilizer',
      targetCrops: 'Pomegranate, Tomato, Chilli, Apple, Grapes, Polyhouse crops',
      stage: 'Vegetative Growth (Stage-I), Fruit Setting (Stage-III)',
      desc: 'Readily available nitrate nitrogen and soluble calcium for strong cell wall structure.',
      packSizes: '1 kg, 25 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'n-chem-call-mg-pro',
      title: 'N Chem Call Mg Pro',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Nitrogen, Nitrate & Liquid Fertilizers',
      composition: 'Calcium Nitrate fortified with Magnesium',
      dosage: 'Fertigation / Drip (5 kg / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: '100% Water Soluble Fertilizer',
      targetCrops: 'Horticultural Orchards, Greenhouse Vegetables',
      stage: 'Vegetative Growth (Stage-I), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Dual-action secondary nutrient fertilizer supporting both cell wall density and chlorophyll.',
      packSizes: '25 kg Bag',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'n-chem-call-phos',
      title: 'N Chem Call Phos',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Nitrogen, Nitrate & Liquid Fertilizers',
      composition: 'Calcium Di-Hydrogen Phosphate Liquid 22.0',
      dosage: 'Fertigation / Drip (2–3 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Liquid Fertilizer',
      targetCrops: 'Fruit Crops, Tomato, Grapes, Strawberry',
      stage: 'Soil Prep & Basal, Fruit Setting (Stage-III)',
      desc: 'Liquid calcium phosphate formulation for root branching and early fruit firmness.',
      packSizes: '1 L, 5 L',
      image: 'assets/nchem_rhizo_boost.png'
    },

    // 5.3 Potassium & Phosphorus Formulations
    {
      id: 'n-chem-k-mag',
      title: 'N Chem K Mag',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Potassium & Phosphorus Formulations',
      composition: 'Potassium Magnesium Sulphate (K2O 22%, MgO 18%, S 20%)',
      dosage: 'Fertigation / Soil (10–25 kg / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: '100% Water Soluble Fertilizer',
      targetCrops: 'Chloride-sensitive crops, Tobacco, Grapes, Potato, Banana',
      stage: 'Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Natural complex providing Potash, Magnesium, and Sulphur without chlorides.',
      packSizes: '25 kg, 50 kg Bag',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'thio-k-s',
      title: 'THIO K S',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Potassium & Phosphorus Formulations',
      composition: 'Potassium Thiosulphate (K2S2O3 0:0:25 + 17% S Liquid)',
      dosage: 'Fertigation / Foliar (2–3 L / acre or 3 ml/L)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Liquid Fertilizer',
      targetCrops: 'Cotton, Chilli, Tomato, Onion, Groundnut, Sugarcane',
      stage: 'Fruit Setting (Stage-III), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Liquid potassium and thiosulphate sulphur solution that enhances nitrogen efficiency and fruit bulk.',
      packSizes: '1 L, 5 L, 20 L',
      image: 'assets/nchem_bio_gold.png'
    },
    {
      id: 'n-chem-thio-cal',
      title: 'N Chem Thio-Cal',
      category: 'Water Soluble, Complex & Liquid Chemical Fertilizers',
      subcategory: 'Potassium & Phosphorus Formulations',
      composition: 'Calcium Thiosulphate (CaTs Liquid 6% Ca, 10% S)',
      dosage: 'Fertigation / Drip (3–5 L / acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Liquid Fertilizer',
      targetCrops: 'Saline / Sodic Soils, Orchards, Vegetable Beds',
      stage: 'Soil Prep & Basal, Fruit Setting (Stage-III)',
      desc: 'Liquid soil conditioner that neutralizes sodium, loosens compacted soil, and delivers calcium.',
      packSizes: '5 L, 20 L',
      image: 'assets/nchem_soil_conditioner.png'
    },

    // ======================================================================
    // CATEGORY 6: SPECIALTY ADJUVANTS & SILICON FORMULATIONS
    // ======================================================================
    // 6.1 Silicon Polyether Adjuvants & Spreaders
    {
      id: 'superior',
      title: 'Superior',
      category: 'Specialty Adjuvants & Silicon Formulations',
      subcategory: 'Silicon Polyether Adjuvants & Spreaders',
      composition: 'Non-ionic Silicon Polyether Surfactant (100% Pure Active)',
      dosage: 'Foliar Spray (0.2–0.25 ml/L) / Drip (50 ml/acre)',
      applicationMethod: 'Foliar Spray',
      productType: 'Adjuvant / Silicon',
      targetCrops: 'All Agrochemical & Nutrient Foliar Sprays',
      stage: 'All Crop Stages',
      desc: 'Super spreader and penetrant; drastically reduces surface tension for agrochemical sprays and ensures 100% rainfastness in 30 mins.',
      packSizes: '100 ml, 250 ml, 500 ml, 1 L',
      image: 'assets/nchem_rhizo_boost.png'
    },

    // 6.2 Orthosilicic Acid & Silicon Stress Relievers
    {
      id: 'relief',
      title: 'Relief / N Chem Relief',
      category: 'Specialty Adjuvants & Silicon Formulations',
      subcategory: 'Orthosilicic Acid & Silicon Stress Relievers',
      composition: 'Ortho Silicic Acid (OSA) 2.0% WSL',
      dosage: 'Foliar Spray (2 ml/L)',
      applicationMethod: 'Foliar Spray',
      productType: 'Adjuvant / Silicon',
      targetCrops: 'Pomegranate, Mango, Banana, Chilli, Rice, Polyhouse Crops',
      stage: 'Vegetative Growth (Stage-I), Fruit Sizing & Maturation (Stage-IV)',
      desc: 'Bio-available silicon that strengthens epidermal cell walls against heat, drought, and biotic stress.',
      packSizes: '250 ml, 500 ml, 1 L, 5 L',
      image: 'assets/nchem_soil_conditioner.png'
    },
    {
      id: 'n-chem-silica-boost',
      title: 'N Chem Silica Boost',
      category: 'Specialty Adjuvants & Silicon Formulations',
      subcategory: 'Orthosilicic Acid & Silicon Stress Relievers',
      composition: 'Sodium Silicate (Soluble Silicate Matrix)',
      dosage: 'Fertigation / Foliar (2 ml/L or 1 L/acre)',
      applicationMethod: 'Drip / Fertigation',
      productType: 'Adjuvant / Silicon',
      targetCrops: 'Paddy, Sugarcane, Wheat, Bamboo, Cereals',
      stage: 'Vegetative Growth (Stage-I)',
      desc: 'Soluble silicate formulation improving stalk strength and lodging resistance.',
      packSizes: '1 L, 5 L',
      image: 'assets/v2_bag.png'
    },
    {
      id: 'n-chem-silica-max',
      title: 'N Chem Silica Max',
      category: 'Specialty Adjuvants & Silicon Formulations',
      subcategory: 'Orthosilicic Acid & Silicon Stress Relievers',
      composition: 'Diatomite Silicon (Amorphous Micro-Silica)',
      dosage: 'Soil Application (10–25 kg / acre)',
      applicationMethod: 'Soil Broadcasting',
      productType: 'Adjuvant / Silicon',
      targetCrops: 'All Soils, Heavy Clay Soils, Sandy Soils, Orchards',
      stage: 'Soil Prep & Basal',
      desc: 'Amorphous silica soil conditioner improving aeration, water retention, and root penetration.',
      packSizes: '25 kg Bag',
      image: 'assets/nchem_bio_gold.png'
    }
  ];

  /* ========================================================================
     INTERACTIVE CROP LIFECYCLE DATABASE (10 Crops Range)
     ======================================================================== */
  const cropLifecycleData = {
    pomegranate: {
      name: 'Pomegranate',
      icon: '🍎',
      subtitle: 'Complete 5-Stage Bhagwa & Commercial Care Program',
      stages: [
        {
          stageNum: 'I',
          name: 'Pomegranate Flowering Special-I',
          timing: 'Day 1 – 30 (Post-Pruning / Defoliation)',
          kit: 'PSB, KSB, ZSB, CSB, BSB + Flowering Enhanced Ingredients',
          dosage: '2 Litres / acre via drip + 3 ml / L foliar',
          method: 'Drip Fertigation + Foliar Spray',
          objective: 'Promotes profuse flowering, strong root development, and pest resistance in Bahar treatment.',
          outcome: 'Dense emerald vegetative flush and strong floral buds within 21 days.'
        },
        {
          stageNum: 'II',
          name: 'Pomegranate Fruit Setting Special-II',
          timing: 'Day 31 – 60 (Flower Bud to Setting)',
          kit: 'PSB, ZSB, CSB, BSB + Fruit Setting Enhancers',
          dosage: '2.5 Litres / acre via drip + 2 ml / L foliar',
          method: 'Targeted Flower Cluster Foliar Spray',
          objective: 'Minimizes flower/fruit drop and boosts setting percentage.',
          outcome: 'Over 85% flower retention and uniform fruitlet setting across all branches.'
        },
        {
          stageNum: 'III',
          name: 'Pomegranate Fruit Development Special-III',
          timing: 'Day 61 – 120 (Fruit Growth Stage)',
          kit: 'PSB, ZSB, CSB, MSB, SSB + Development Enhancers',
          dosage: '3 Litres / acre via drip every 15 days',
          method: 'Continuous Drip Fertigation Program',
          objective: 'Supports rapid aril expansion, rind strength, and nutrient translocation.',
          outcome: 'Uniform jumbo fruit sizing (350g–450g average) with zero peel splitting.'
        },
        {
          stageNum: 'IV',
          name: 'Pomegranate Fruit Colour & Size Special-IV',
          timing: 'Day 121 – 180 (Maturity & Pre-Harvest)',
          kit: 'CSB, MSB, SSB, PSB + Fruit Size Enhancers',
          dosage: '2 Litres / acre via drip + 2 ml / L foliar',
          method: 'Drip Fertigation + Pre-Harvest Foliar Gloss',
          objective: 'Enhances deep natural red rind colour, fruit weight, sugar Brix, and export market grade.',
          outcome: 'Export-grade lustrous ruby finish, tender soft seeds, and 15+ Brix sugar.'
        },
        {
          stageNum: 'Gen',
          name: 'Pomo General — All-Season Soil Vitality',
          timing: 'Post-Harvest & Resting Phase',
          kit: 'PSB, KSB, ZSB (2x10^8 CFU/ml) + VAM (50 ip/ml)',
          dosage: '2–3 Litres / acre soil application',
          method: 'Soil Drench & Basal Soil Enrichment',
          objective: 'Stimulates root systems and overall plant immunity in pomegranate orchards.',
          outcome: 'Re-energized trees ready for vigorous next seasonal Bahar cycle.'
        }
      ]
    },
    guava: {
      name: 'Guava',
      icon: '🍈',
      subtitle: '4-Stage Thai & Taiwan Pink Orchard Excellence',
      stages: [
        {
          stageNum: 'I',
          name: 'Guava Growth Special-I',
          timing: 'Day 1 – 30 (Post-Pruning / Bending)',
          kit: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
          dosage: '2 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Accelerates vegetative canopy development and root expansion.',
          outcome: 'Thick lateral branching with high node density.'
        },
        {
          stageNum: 'II',
          name: 'Guava Flowering Special-II',
          timing: 'Day 31 – 60 (Bud Initiation)',
          kit: 'Bio Organic Azotobacter, P, K, Zn + Flowering Enhancers',
          dosage: '2.5 ml / L foliar spray / 2 L drip',
          method: 'Canopy Foliar Spray',
          objective: 'Encourages uniform bud initiation and bloom quality with minimal drop.',
          outcome: 'Heavy cluster formation and high bloom density.'
        },
        {
          stageNum: 'III',
          name: 'Guava Fruit Setting Special-III',
          timing: 'Day 61 – 110 (Fruit Setting)',
          kit: 'Bio Organic Azotobacter, P, K, Zn + Fruit Setting Enhancers',
          dosage: '2.5 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Prevents premature fruitlet shedding and promotes uniform setting.',
          outcome: 'Zero fruitlet drop at marble stage.'
        },
        {
          stageNum: 'IV',
          name: 'Guava Fruit Development Special-IV',
          timing: 'Day 111 – 140 (Harvest Stage)',
          kit: 'Bio Organic Azotobacter, P, K, Ca + Fruit Development Enhancers',
          dosage: '3 Litres / acre drip + 2 ml / L foliar',
          method: 'Drip + Foliar',
          objective: 'Improves fruit size, pulp firmness, sweet aroma, and shelf life.',
          outcome: 'Jumbo 400g+ crisp export quality fruits.'
        }
      ]
    },
    citrus: {
      name: 'Citrus',
      icon: '🍊',
      subtitle: '4-Stage Sweet Lime, Lemon & Mandarin Program',
      stages: [
        {
          stageNum: 'I',
          name: 'Citrus Growth Special-I',
          timing: 'Day 1 – 30',
          kit: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
          dosage: '2 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Promotes new flushes, foliage vigor, and deep root establishment.',
          outcome: 'Lush dark green canopy with zero chlorosis.'
        },
        {
          stageNum: 'II',
          name: 'Citrus Flowering Special-II',
          timing: 'Day 31 – 60',
          kit: 'Bio Organic Azotobacter, P, K, Boron + Flowering Enhancers',
          dosage: '2.5 ml / L foliar',
          method: 'Foliar Spray',
          objective: 'Optimizes floral bloom, pollen viability, and heavy blossom set.',
          outcome: 'Heavy bloom set with high fruitlet attachment.'
        },
        {
          stageNum: 'III',
          name: 'Citrus Fruit Setting Special-III',
          timing: 'Day 61 – 130',
          kit: 'Bio Organic Azotobacter, P, K, Calcium + Fruit Setting Enhancers',
          dosage: '2.5 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Prevents fruit drop and strengthens button attachment.',
          outcome: 'Tight fruit retention at button stage.'
        },
        {
          stageNum: 'IV',
          name: 'Citrus Fruit Development Special-IV',
          timing: 'Day 131 – 180',
          kit: 'Bio Organic Azotobacter, P, Zn, Magnesium + Fruit Development Enhancers',
          dosage: '3 Litres / acre drip + 2 ml / L foliar',
          method: 'Drip Fertigation & Foliar',
          objective: 'Promotes juice vesicle expansion, sugar accumulation, and rind texture.',
          outcome: 'Heavy juice-laden fruits with shiny yellow peel.'
        }
      ]
    },
    papaya: {
      name: 'Papaya',
      icon: '🥭',
      subtitle: '4-Stage Red Lady 786 Continuous Yield System',
      stages: [
        {
          stageNum: 'I',
          name: 'Papaya Growth Special-I',
          timing: 'Day 1 – 45',
          kit: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
          dosage: '1.5–2 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Stimulates girth development and root anchoring.',
          outcome: 'Thick, sturdy trunk to hold upcoming crop weight.'
        },
        {
          stageNum: 'II',
          name: 'Papaya Flowering Special-II',
          timing: 'Day 46 – 90',
          kit: 'Bio Organic Azotobacter, P, K, Boron + Flowering Enhancers',
          dosage: '2 Litres / acre drip + 2 ml / L foliar',
          method: 'Drip + Foliar',
          objective: 'Enhances flower retention and bisexual blossom vigor.',
          outcome: 'Continuous fruit setting along trunk without gaps.'
        },
        {
          stageNum: 'III',
          name: 'Papaya Fruit Setting Special-III',
          timing: 'Day 91 – 160',
          kit: 'Bio Organic Azotobacter, P, K, Calcium + Fruit Setting Enhancers',
          dosage: '2.5 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Ensures continuous fruit setting along the stem trunk.',
          outcome: 'Cylindrical fruits with thick flesh and small cavity.'
        },
        {
          stageNum: 'IV',
          name: 'Papaya Fruit Development Special-IV',
          timing: 'Day 161+ (Harvest & Ongoing)',
          kit: 'Bio Organic Azotobacter, P, Zn, Magnesium + Fruit Development Enhancers',
          dosage: '2 Litres / acre drip weekly',
          method: 'Weekly Drip Program',
          objective: 'Enhances fruit sizing, flesh firmness, and 13.5+ Brix sugar.',
          outcome: 'Deep red interior, sweet aroma, and transit durability.'
        }
      ]
    },
    banana: {
      name: 'Banana',
      icon: '🍌',
      subtitle: '4-Stage Grand Naine (G9) 35kg+ Bunch Strategy',
      stages: [
        {
          stageNum: 'I',
          name: 'Banana Growth Special-I',
          timing: 'Day 1 – 60',
          kit: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
          dosage: '2.5 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Enhances pseudostem development and leaf emergence rate.',
          outcome: 'Rapid vegetative height and broad leaf canopy.'
        },
        {
          stageNum: 'II',
          name: 'Banana Flowering Special-II',
          timing: 'Day 61 – 150',
          kit: 'Bio Organic Azotobacter, P, K, Boron + Flowering Enhancers',
          dosage: '3 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Facilitates smooth bunch shooting and inflorescence emergence.',
          outcome: 'Broad pseudostem girth supporting 10–12 hands.'
        },
        {
          stageNum: 'III',
          name: 'Banana Fruit Setting Special-III',
          timing: 'Day 151 – 210',
          kit: 'Bio Organic Azotobacter, P, K, Calcium + Fruit Setting Enhancers',
          dosage: '3.5 Litres / acre drip + 2 ml / L bunch spray',
          method: 'Drip Fertigation & Bunch Spray',
          objective: 'Promotes finger elongation and bunch calibration.',
          outcome: 'Uniform fingers from top hand to bottom hand.'
        },
        {
          stageNum: 'IV',
          name: 'Banana Fruit Development Special-IV',
          timing: 'Day 211 – 290',
          kit: 'Bio Organic Azotobacter, P, Zn, Magnesium + Fruit Development Enhancers',
          dosage: '4 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Boosts bunch weight, finger filling, and uniform packing grade.',
          outcome: '35kg+ record bunch weight with zero finger curvature.'
        }
      ]
    },
    chilli: {
      name: 'Chilli',
      icon: '🌶️',
      subtitle: '4-Stage High-Yield Green & Red Chilli Program',
      stages: [
        {
          stageNum: 'I',
          name: 'Chilli Growth Special-I',
          timing: 'Day 1 – 25',
          kit: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
          dosage: '1.5 Litres / acre drip + 2 ml / L foliar',
          method: 'Drip Fertigation + Foliar',
          objective: 'Accelerates lateral branching and root mass expansion.',
          outcome: 'Bushy plant structure with 15+ branches.'
        },
        {
          stageNum: 'II',
          name: 'Chilli Flowering Special-II',
          timing: 'Day 26 – 50',
          kit: 'Bio Organic Azotobacter, P, K, Boron + Flowering Enhancers',
          dosage: '2 ml / L foliar spray weekly',
          method: 'Foliar Spray',
          objective: 'Stimulates heavy flower formation and prevents blossom drop.',
          outcome: 'Dense star-white flower flush with high fruit setting.'
        },
        {
          stageNum: 'III',
          name: 'Chilli Fruit Setting Special-III',
          timing: 'Day 51 – 90',
          kit: 'Bio Organic Azotobacter, P, K, Calcium + Fruit Setting Enhancers',
          dosage: '2 Litres / acre drip + 2 ml / L foliar',
          method: 'Drip Fertigation & Foliar',
          objective: 'Promotes pod setting and prevents blossom end rot.',
          outcome: 'Straight, uniform pods with thick green pericarp.'
        },
        {
          stageNum: 'IV',
          name: 'Chilli Colour Special-IV',
          timing: 'Day 91 – 150',
          kit: 'Bio Organic Calcium, Magnesium, Sulphur + Colour Enhancers',
          dosage: '2.5 ml / L foliar spray',
          method: 'Foliar Spray',
          objective: 'Enhances deep red colour pigment synthesis, pungency, and drying weight.',
          outcome: 'High ASTA color value and superior drying recovery.'
        }
      ]
    },
    tomato: {
      name: 'Tomato',
      icon: '🍅',
      subtitle: '4-Stage Hybrid Tomato Precision Program',
      stages: [
        {
          stageNum: 'I',
          name: 'Tomato Growth Special-I',
          timing: 'Day 1 – 20',
          kit: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
          dosage: '1.5 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Fosters strong main stems and dense root systems.',
          outcome: 'Sturdy upright seedlings resistant to damp-off.'
        },
        {
          stageNum: 'II',
          name: 'Tomato Flowering Special-II',
          timing: 'Day 21 – 45',
          kit: 'Bio Organic Azotobacter, P, K, Boron + Flowering Enhancers',
          dosage: '2 ml / L foliar spray',
          method: 'Foliar Spray',
          objective: 'Maximizes floral clusters and pollination success.',
          outcome: '6–8 fruits per cluster with uniform setting.'
        },
        {
          stageNum: 'III',
          name: 'Tomato Fruit Setting Special-III',
          timing: 'Day 46 – 80',
          kit: 'Bio Organic Azotobacter, P, K, Calcium + Fruit Setting Enhancers',
          dosage: '2.5 Litres / acre drip',
          method: 'Drip Fertigation',
          objective: 'Optimizes cluster fruit set and strengthens fruit skin.',
          outcome: 'Heavy, firm fruits with zero blossom end rot.'
        },
        {
          stageNum: 'IV',
          name: 'Tomato Fruit Development Special-IV',
          timing: 'Day 81 – 120',
          kit: 'Bio Organic Phosphorus, Potash, Zinc, Calcium + Development Enhancers',
          dosage: '2 ml / L foliar spray / 2.5 L drip',
          method: 'Foliar Spray',
          objective: 'Accelerates uniform sizing, fruit firmness, and shelf life.',
          outcome: 'Bright red fruits commanding top wholesale prices.'
        }
      ]
    },
    onion: {
      name: 'Onion',
      icon: '🧅',
      subtitle: '2-Stage High-Storage Onion & Garlic Program',
      stages: [
        {
          stageNum: 'I',
          name: 'Onion Growth Special-I',
          timing: 'Day 1 – 45',
          kit: 'Bio Organic Azotobacter, P, K, Zn + Growth Enhancers',
          dosage: '2 Litres / acre drip or broadcast',
          method: 'Drip Fertigation / Broadcast',
          objective: 'Encourages robust vegetative leaf foliage necessary for photosynthate storage.',
          outcome: 'Broad waxy tubular leaves with deep rooting.'
        },
        {
          stageNum: 'II',
          name: 'Onion Size Development Special-II',
          timing: 'Day 46 – 90',
          kit: 'Bio Organic Azotobacter, P, K, Calcium + Size Enhancers',
          dosage: '3 Litres / acre drip + 2.5 ml / L foliar',
          method: 'Drip Fertigation & Foliar',
          objective: 'Promotes bulb expansion, compactness, neck closure, and storage quality.',
          outcome: 'Solid, tight red skin bulbs with 6+ months shelf life.'
        }
      ]
    },
    paddy: {
      name: 'Paddy',
      icon: '🌾',
      subtitle: 'Lowland & Upland Rice Ecosystem Tillering Program',
      stages: [
        {
          stageNum: 'I',
          name: 'PADDY Special — Tillering & Rooting',
          timing: 'Day 15 – 45 (Transplanting / Tillering)',
          kit: 'Microbial Bio Consortium (Liquid) Bio-Fertilizer',
          dosage: '1 Litre / acre soil run or 5 ml / L spray',
          method: 'Irrigation Run / Foliar',
          objective: 'Stimulates prolific effective tillering, deep root anchorage, and nitrogen fixation.',
          outcome: '25+ productive tillers per hill with dark green vigor.'
        },
        {
          stageNum: 'II',
          name: 'PADDY Special — Panicle & Grain Filling',
          timing: 'Day 60 – 90 (Booting & Grain Fill)',
          kit: 'Microbial Bio Consortium + Soluble Silicate Matrix',
          dosage: '1 Litre / acre via water run',
          method: 'Water Run Fertigation',
          objective: 'Enhances panicle length, grain density, and prevents lodging.',
          outcome: 'Full grain filling with zero chaffy grains.'
        }
      ]
    },
    mango: {
      name: 'Mango',
      icon: '🥭',
      subtitle: 'Alphonso, Banganapalli & Commercial Orchard Program',
      stages: [
        {
          stageNum: 'I',
          name: 'MANGO Special — Floral Induction',
          timing: 'Pre-Bloom (Nov – Dec)',
          kit: 'Biostimulant / Plant Growth Promoter Complex',
          dosage: '2.5–3 ml / L foliar spray',
          method: 'Full Canopy Foliar Spray',
          objective: 'Synchronizes flower bud differentiation and prevents malformation.',
          outcome: 'Profuse, healthy panicles with high hermaphrodite flowers.'
        },
        {
          stageNum: 'II',
          name: 'MANGO Special — Fruitlet Retention & Sizing',
          timing: 'Pea to Marble Stage (Jan – Mar)',
          kit: 'Biostimulant Fortified with Amino-Boron & Zinc',
          dosage: '2.5 ml / L foliar spray',
          method: 'Cluster Foliar Spray',
          objective: 'Prevents heavy fruit drop at marble stage and drives pulp expansion.',
          outcome: 'Maximum fruit retention and jumbo export sizing.'
        }
      ]
    }
  };

  /* ========================================================================
     STATE VARIABLES
     ======================================================================== */
  let activeMainCategory   = 'All';
  let activeSubcategory    = 'All';
  let activeProductType    = 'All';
  let activeAppMode        = 'All';
  let activeCropFacet      = 'All';
  let activeGrowthStage    = 'All';
  let activeSearchQuery    = '';
  let activeCropKey        = 'pomegranate';
  let activeStageIndex     = 0;
  let currentCatalogView   = 'cards'; // 'cards' | 'table'

  // DOM Elements
  const productGridV3           = document.getElementById('productGridV3');
  const productMatrixTableView  = document.getElementById('productMatrixTableView');
  const formulationCountDisplay = document.getElementById('formulationCountDisplay');
  const btnViewCards            = document.getElementById('btnViewCards');
  const btnViewTable            = document.getElementById('btnViewTable');
  const catTabs                 = document.querySelectorAll('.cat-tab-v3');
  const subcatContainer         = document.getElementById('dynamicSubcatContainer');
  const subcatChipsRow          = document.getElementById('dynamicSubcatChips');
  const subcatTitleLabel        = document.getElementById('subcatTitleLabel');
  const cropLifecycleSection    = document.getElementById('cropLifecycleSection');
  const inlineSearchInput       = document.getElementById('inlineSearchInput');
  const headerSearchInput       = document.querySelector('.header-search-input');
  const specModalOverlay        = document.getElementById('specModalOverlay');
  const specModalClose          = document.getElementById('specModalClose');

  // Facet filter dropdowns
  const facetProductTypeSelect  = document.getElementById('facetProductType');
  const facetAppModeSelect      = document.getElementById('facetAppMode');
  const facetCropSelect         = document.getElementById('facetCrop');
  const facetStageSelect        = document.getElementById('facetStage');
  const btnResetFacets          = document.getElementById('btnResetFacets');

  /* ========================================================================
     SKU CODE GENERATOR (Enterprise Standard Taxonomy)
     ======================================================================== */
  function getProductSKU(prod) {
    const catMap = {
      'Bio-Fertilizers, Soil Health & Organics': 'BF',
      'Plant Protection & Bio-Pesticides': 'PP',
      'Crop-Specific Stage Nutrition': 'CS',
      'Micronutrients & Chelates': 'MN',
      'Water Soluble, Complex & Liquid Chemical Fertilizers': 'WS',
      'Specialty Adjuvants & Silicon Formulations': 'AD'
    };
    const prefix = catMap[prod.category] || 'AGR';
    const globalIdx = formulationsV3.findIndex(p => p.id === prod.id) + 1;
    return `NC-${prefix}-${String(globalIdx).padStart(3, '0')}`;
  }

  // Pillar color system: maps each of the 6 NCHEM pillars to a distinct accent
  function getPillarMeta(category) {
    if (category.includes('Bio-Fertilizers')) return { color: '#2D7A45', bg: '#EAF5EE', label: 'BIO-FERT & SOIL' };
    if (category.includes('Plant Protection')) return { color: '#7B3FA0', bg: '#F3EAFA', label: 'PLANT PROTECT' };
    if (category.includes('Crop-Specific')) return { color: '#C97B4A', bg: '#FDF1E8', label: 'STAGE NUTRITION' };
    if (category.includes('Micronutrients')) return { color: '#0B6E8A', bg: '#E5F3F7', label: 'MICRONUTRIENTS' };
    if (category.includes('Water Soluble')) return { color: '#1B5E9B', bg: '#E8EFF9', label: 'WATER SOLUBLE' };
    if (category.includes('Specialty Adjuvants')) return { color: '#6B6B00', bg: '#F5F5E0', label: 'ADJUVANTS' };
    return { color: '#3B5C3E', bg: '#EBF2EC', label: 'FORMULATION' };
  }

  /* ========================================================================
     VIEW MODE TOGGLE INITIALIZATION
     ======================================================================== */
  if (btnViewCards && btnViewTable) {
    btnViewCards.addEventListener('click', () => {
      currentCatalogView = 'cards';
      btnViewCards.classList.add('active');
      btnViewTable.classList.remove('active');
      renderProducts();
    });

    btnViewTable.addEventListener('click', () => {
      currentCatalogView = 'table';
      btnViewTable.classList.add('active');
      btnViewCards.classList.remove('active');
      renderProducts();
    });
  }

  /* ========================================================================
     6-PILLAR QUICK-FILTER NAV BAR
     ======================================================================== */
  const pillarNavBtns = document.querySelectorAll('.pillar-nav-btn');

  // Populate pillar counts
  function updatePillarCounts() {
    const counts = {
      'Bio-Fertilizers, Soil Health & Organics': document.getElementById('pillarCountBF'),
      'Plant Protection & Bio-Pesticides': document.getElementById('pillarCountPP'),
      'Crop-Specific Stage Nutrition': document.getElementById('pillarCountCS'),
      'Micronutrients & Chelates': document.getElementById('pillarCountMN'),
      'Water Soluble, Complex & Liquid Chemical Fertilizers': document.getElementById('pillarCountWS'),
      'Specialty Adjuvants & Silicon Formulations': document.getElementById('pillarCountAD')
    };
    for (const [cat, el] of Object.entries(counts)) {
      if (el) el.textContent = formulationsV3.filter(p => p.category === cat).length;
    }
    const allEl = document.getElementById('pillarCountAll');
    if (allEl) allEl.textContent = formulationsV3.length;
  }
  updatePillarCounts();

  pillarNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pillar = btn.getAttribute('data-pillar');
      pillarNavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (pillar === 'All') {
        activeMainCategory = 'All';
      } else {
        activeMainCategory = pillar;
      }
      activeSubcategory = 'All';
      renderSubcategoryChips();
      renderProducts();
      showCatalogSection();
      // Also sync main category tabs if they exist
      catTabs.forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-category') === activeMainCategory);
      });
    });
  });

  /* ========================================================================
     PRODUCT CATALOG RENDERER (Dual View Mode: Cards vs Data Matrix Table)
     ======================================================================== */
  function renderProducts() {
    if (!productGridV3) return;

    let filtered = formulationsV3.filter(p => {
      // 1. Main Category
      const matchCat = (activeMainCategory === 'All' || p.category === activeMainCategory);
      // 2. Subcategory
      const matchSubcat = (activeSubcategory === 'All' || p.subcategory === activeSubcategory);
      // 3. Facet Product Type
      const matchType = (activeProductType === 'All' || p.productType === activeProductType);
      // 4. Facet Application Mode
      const matchApp = (activeAppMode === 'All' || p.applicationMethod.toLowerCase().includes(activeAppMode.toLowerCase()));
      // 5. Facet Crop
      const matchCrop = (activeCropFacet === 'All' || p.targetCrops.toLowerCase().includes(activeCropFacet.toLowerCase()) || p.targetCrops.includes('All Crops'));
      // 6. Facet Growth Stage
      const matchStage = (activeGrowthStage === 'All' || p.stage.toLowerCase().includes(activeGrowthStage.toLowerCase()) || p.stage.includes('All Crop Stages'));
      // 7. Search Query
      const matchSearch = activeSearchQuery === '' ||
        p.title.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
        p.composition.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
        p.targetCrops.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(activeSearchQuery.toLowerCase());

      return matchCat && matchSubcat && matchType && matchApp && matchCrop && matchStage && matchSearch;
    });

    // Update Category Counter Badges
    updateTabBadges();

    // Update Catalog Count Display
    if (formulationCountDisplay) {
      formulationCountDisplay.textContent = `(Showing ${filtered.length} Formulations)`;
    }

    if (filtered.length === 0) {
      const emptyStateHtml = `
        <div style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; background: #FFFFFF; border-radius: 12px; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); width: 100%;">
          <div style="font-size: 36px; margin-bottom: 12px;">&#128300;</div>
          <h3 style="font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">No Formulations Found</h3>
          <p style="color: var(--color-text-muted); font-size: 14px; max-width: 500px; margin: 0 auto 20px;">
            We couldn't find any certified formulations matching your criteria. Try resetting facet filters to view the full 121 formulation range.
          </p>
          <button id="resetFilterBtn" class="btn btn-terracotta">Show All Formulations (121)</button>
        </div>
      `;

      if (currentCatalogView === 'cards') {
        productGridV3.style.display = 'grid';
        if (productMatrixTableView) productMatrixTableView.style.display = 'none';
        productGridV3.innerHTML = emptyStateHtml;
      } else {
        productGridV3.style.display = 'none';
        if (productMatrixTableView) {
          productMatrixTableView.style.display = 'block';
          productMatrixTableView.innerHTML = emptyStateHtml;
        }
      }

      const resetBtn = document.getElementById('resetFilterBtn');
      if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
      return;
    }

    // Render Compact 4-Column Cards View
    if (currentCatalogView === 'cards') {
      productGridV3.style.display = 'grid';
      if (productMatrixTableView) productMatrixTableView.style.display = 'none';

      productGridV3.innerHTML = filtered.map(p => {
        const skuCode = getProductSKU(p);
        const pillar  = getPillarMeta(p.category);
        const cropArr = p.targetCrops.split(',').map(c => c.trim()).slice(0, 3);
        const compositionShort = p.composition.length > 44 ? p.composition.slice(0, 44) + '…' : p.composition;
        const dosageShort = p.dosage.length > 40 ? p.dosage.slice(0, 40) + '…' : p.dosage;
        const moreCrops = p.targetCrops.split(',').length > 3 ? `+${p.targetCrops.split(',').length - 3}` : '';

        return `
          <article class="nchem-compact-card" data-id="${p.id}" style="--pc-color: ${pillar.color}; --pc-bg: ${pillar.bg};">

            <!-- Top: color accent bar + image zone -->
            <div class="compact-card-visual">
              <div class="compact-card-bar"></div>
              <img src="${p.image}" alt="${p.title}" loading="lazy" class="compact-card-img">
            </div>

            <!-- Body -->
            <div class="compact-card-body">

              <div class="compact-card-head">
                <span class="compact-sku">${skuCode}</span>
                <span class="compact-type">${p.productType.split(' ')[0]}</span>
              </div>

              <h3 class="compact-title">${p.title}</h3>

              <div class="compact-formula">
                <span>⚗</span><span class="compact-formula-text">${compositionShort}</span>
              </div>

              <div class="compact-specs">
                <div class="compact-spec-cell">
                  <span class="compact-spec-l">Dosage</span>
                  <span class="compact-spec-v" title="${p.dosage}">${dosageShort}</span>
                </div>
                <div class="compact-spec-cell">
                  <span class="compact-spec-l">Method</span>
                  <span class="compact-spec-v">${p.applicationMethod}</span>
                </div>
              </div>

              <div class="compact-crops">
                ${cropArr.map(c => `<span class="compact-crop-chip">${c}</span>`).join('')}${moreCrops ? `<span class="compact-more-chip">${moreCrops} more</span>` : ''}
              </div>

            </div>

            <!-- Footer actions -->
            <div class="compact-card-footer">
              <button class="compact-btn-spec btn-open-spec" data-id="${p.id}">Spec Sheet</button>
              <button class="compact-btn-rfq btn-trigger-rfq" data-id="${p.id}" data-title="${p.title}" data-code="${skuCode}" data-formula="${p.composition}">Enquire</button>
            </div>

          </article>
        `;
      }).join('');
    } else {
      // Render Enterprise Data Matrix Table View
      productGridV3.style.display = 'none';
      if (productMatrixTableView) {
        productMatrixTableView.style.display = 'block';
        productMatrixTableView.innerHTML = `
          <table class="enterprise-matrix-table" aria-label="Nchem Formulations Master Matrix">
            <thead>
              <tr>
                <th>Code</th>
                <th>Formulation Name</th>
                <th>Classification</th>
                <th>Active Chemical / Biological Assay</th>
                <th>Application Mode</th>
                <th>Dosage Standard</th>
                <th>Commercial Packaging</th>
                <th style="text-align: right;">Dossier &amp; RFQ</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.map(p => {
                const skuCode = getProductSKU(p);
                return `
                  <tr data-id="${p.id}">
                    <td><span class="table-col-code">${skuCode}</span></td>
                    <td>
                      <div class="table-col-title">${p.title}</div>
                      <div style="font-size: 11px; color: var(--color-text-muted);">${p.subcategory}</div>
                    </td>
                    <td><span class="table-col-tag">${p.productType}</span></td>
                    <td><div class="table-col-formula" title="${p.composition}">&#9879; ${p.composition}</div></td>
                    <td style="font-size: 12px; color: var(--color-text-muted);">${p.applicationMethod}</td>
                    <td style="font-size: 11.5px; max-width: 180px; overflow: hidden; text-overflow: ellipsis;" title="${p.dosage}">${p.dosage}</td>
                    <td style="font-size: 11.5px; color: var(--color-primary-dark); font-weight: 600;">${p.packSizes}</td>
                    <td style="text-align: right;">
                      <div class="table-actions-cell" style="justify-content: flex-end;">
                        <button class="btn-table-spec btn-open-spec" data-id="${p.id}">Spec Sheet</button>
                        <button class="btn-table-rfq btn-trigger-rfq" data-id="${p.id}" data-title="${p.title}" data-code="${skuCode}" data-formula="${p.composition}">RFQ</button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `;
      }
    }

    // Attach click events to modal triggers
    document.querySelectorAll('.btn-open-spec').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = btn.getAttribute('data-id');
        openSpecModal(prodId);
      });
    });

    // Attach click events to RFQ pre-fill triggers
    document.querySelectorAll('.btn-trigger-rfq').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = btn.getAttribute('data-code') || '';
        const title = btn.getAttribute('data-title') || '';
        const formula = btn.getAttribute('data-formula') || '';
        
        const rfqMsg = document.getElementById('rfqMessage');
        if (rfqMsg) {
          rfqMsg.value = `Official Procurement & Technical Inquiry:\nFormulation: ${title} [${code}]\nActive Composition: ${formula}\nRequesting: Certificate of Analysis (COA), Technical Data Sheet, and bulk commercial pricing quotation.`;
        }
        const rfqServiceType = document.getElementById('rfqServiceType');
        if (rfqServiceType) {
          rfqServiceType.value = 'bulk-supply';
        }
        const rfqSection = document.getElementById('corpRFQ');
        if (rfqSection) {
          rfqSection.scrollIntoView({ behavior: 'smooth' });
          const orgInput = document.getElementById('rfqOrgName');
          if (orgInput) setTimeout(() => orgInput.focus(), 600);
        }
      });
    });
  }

  function getCategoryIcon(category) {
    if (category.includes('Bio-Fertilizers')) return '🌱';
    if (category.includes('Plant Protection')) return '🛡️';
    if (category.includes('Crop-Specific')) return '🍎';
    if (category.includes('Micronutrients')) return '⚗️';
    if (category.includes('Water Soluble')) return '💧';
    if (category.includes('Specialty Adjuvants')) return '🔬';
    return '🌿';
  }

  function updateTabBadges() {
    catTabs.forEach(tab => {
      const cat = tab.getAttribute('data-category');
      const badge = tab.querySelector('.tab-count-badge');
      if (badge) {
        if (cat === 'All') {
          badge.textContent = formulationsV3.length;
        } else {
          const count = formulationsV3.filter(p => p.category === cat).length;
          badge.textContent = count;
        }
      }
    });
  }

  /* ========================================================================
     DYNAMIC SUBCATEGORY FILTER CHIPS
     ======================================================================== */
  function renderSubcategoryChips() {
    if (!subcatChipsRow) return;

    let subcategories = [];
    if (activeMainCategory === 'All') {
      const unique = [...new Set(formulationsV3.map(p => p.subcategory))];
      subcategories = unique;
    } else {
      const filtered = formulationsV3.filter(p => p.category === activeMainCategory);
      subcategories = [...new Set(filtered.map(p => p.subcategory))];
    }

    if (subcategories.length === 0) {
      if (subcatContainer) subcatContainer.style.display = 'none';
      return;
    }

    if (subcatContainer) subcatContainer.style.display = 'block';
    if (subcatTitleLabel) {
      subcatTitleLabel.innerHTML = activeMainCategory === 'All'
        ? `<span>&#128073;</span> Filter by Specific Product Subcategory:`
        : `<span>&#128073;</span> ${activeMainCategory} Subcategories:`;
    }

    let html = `
      <button class="subcat-chip ${activeSubcategory === 'All' ? 'active' : ''}" data-subcat="All">
        <span>&#10003;</span> All Subcategories
        <span class="subcat-badge">${activeMainCategory === 'All' ? formulationsV3.length : formulationsV3.filter(p => p.category === activeMainCategory).length}</span>
      </button>
    `;

    subcategories.forEach(sub => {
      const count = formulationsV3.filter(p => {
        return (activeMainCategory === 'All' || p.category === activeMainCategory) && p.subcategory === sub;
      }).length;

      const isSubActive = (activeSubcategory === sub);
      html += `
        <button class="subcat-chip ${isSubActive ? 'active' : ''}" data-subcat="${sub}">
          ${sub}
          <span class="subcat-badge">${count}</span>
        </button>
      `;
    });

    subcatChipsRow.innerHTML = html;

    // Attach click listeners to subcat chips
    subcatChipsRow.querySelectorAll('.subcat-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        subcatChipsRow.querySelectorAll('.subcat-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeSubcategory = chip.getAttribute('data-subcat') || 'All';
        renderProducts();
      });
    });
  }

  function updateCategoryTabsUI() {
    catTabs.forEach(tab => {
      const cat = tab.getAttribute('data-category');
      if (cat === activeMainCategory) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    const matrixActivePillarName = document.getElementById('matrixActivePillarName');
    const matrixActivePillarDesc = document.getElementById('matrixActivePillarDesc');

    const pillarMetaDescriptions = {
      'All': {
        name: 'All Formulations (Complete Master Catalog)',
        desc: 'Comprehensive portfolio of 121 government-certified agri-science products across all stages.'
      },
      'Bio-Fertilizers, Soil Health & Organics': {
        name: 'Pillar 01: Bio-Fertilizers & Soil Health (19 Products)',
        desc: 'Bio-stimulants, living nitrogen/phosphorus/potash microbial inoculants, and enriched organic manures.'
      },
      'Plant Protection & Bio-Pesticides': {
        name: 'Pillar 02: Plant Protection & Bio-Pesticides (9 Products)',
        desc: 'Certified botanical pest repellents, fungal insecticides (Beauveria, Verticillium), and pheromone traps.'
      },
      'Crop-Specific Stage Nutrition': {
        name: 'Pillar 03: Crop-Specific Stage Nutrition (33 Stage Kits)',
        desc: 'Stage I–IV lifecycle nutritional management programs for Pomegranate, Guava, Citrus, Papaya, Banana, and Paddy.'
      },
      'Micronutrients & Chelates': {
        name: 'Pillar 04: Micronutrients & Chelates (39 Products)',
        desc: 'High-density Zinc Oxide (Z-OX 39.5%), Soluble Boron 20%, Calboron, and EDTA/HEDP chelated micronutrient mixes.'
      },
      'Water Soluble, Complex & Liquid Chemical Fertilizers': {
        name: 'Pillar 05: Water Soluble Fertilizers (17 Products)',
        desc: '100% drip grade NPK complexes (12:61:00 MAP, 00:52:34 MKP, 13:0:45), Liquid UAN 32, and Potassium Thiosulphates.'
      },
      'Specialty Adjuvants & Silicon Formulations': {
        name: 'Pillar 06: Specialty Silicon & Adjuvants (4 Products)',
        desc: '100% organo-silicon super spreaders and Orthosilicic Acid (OSA 2.0%) cellular stress shields.'
      }
    };

    if (matrixActivePillarName && matrixActivePillarDesc) {
      const meta = pillarMetaDescriptions[activeMainCategory] || pillarMetaDescriptions['All'];
      matrixActivePillarName.textContent = meta.name;
      matrixActivePillarDesc.textContent = meta.desc;
    }

    if (cropLifecycleSection) {
      if (activeMainCategory === 'Crop-Specific Stage Nutrition') {
        cropLifecycleSection.style.display = 'block';
      }
    }
  }

  /* ---- Helper: reveal the catalog section on first pillar click ---- */
  function showCatalogSection() {
    const section = document.getElementById('exploreFormulationsSection');
    if (section) {
      section.style.display = 'block';
      section.style.opacity = '0';
      section.style.transform = 'translateY(16px)';
      // Trigger animation on next frame
      requestAnimationFrame(() => {
        section.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      });
      setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }

  /* Category Tab Bar Handlers */
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedCat = tab.getAttribute('data-category');
      if (!selectedCat) return;

      activeMainCategory = selectedCat;
      activeSubcategory = 'All';
      updateCategoryTabsUI();
      renderSubcategoryChips();
      renderProducts();
      showCatalogSection();
    });
  });

  /* Category Tab Bar Scroll Buttons */
  const catTabScrollLeft = document.getElementById('catTabScrollLeft');
  const catTabScrollRight = document.getElementById('catTabScrollRight');
  const categoryTabInnerV3 = document.getElementById('categoryTabInnerV3');

  if (catTabScrollLeft && categoryTabInnerV3) {
    catTabScrollLeft.addEventListener('click', () => {
      categoryTabInnerV3.scrollBy({ left: -240, behavior: 'smooth' });
    });
  }

  if (catTabScrollRight && categoryTabInnerV3) {
    catTabScrollRight.addEventListener('click', () => {
      categoryTabInnerV3.scrollBy({ left: 240, behavior: 'smooth' });
    });
  }


  /* Facet Filters Handlers */
  if (facetProductTypeSelect) {
    facetProductTypeSelect.addEventListener('change', (e) => {
      activeProductType = e.target.value;
      renderProducts();
    });
  }
  if (facetAppModeSelect) {
    facetAppModeSelect.addEventListener('change', (e) => {
      activeAppMode = e.target.value;
      renderProducts();
    });
  }
  if (facetCropSelect) {
    facetCropSelect.addEventListener('change', (e) => {
      activeCropFacet = e.target.value;
      renderProducts();
    });
  }
  if (facetStageSelect) {
    facetStageSelect.addEventListener('change', (e) => {
      activeGrowthStage = e.target.value;
      renderProducts();
    });
  }
  if (btnResetFacets) {
    btnResetFacets.addEventListener('click', resetAllFilters);
  }

  function resetAllFilters() {
    activeMainCategory   = 'All';
    activeSubcategory    = 'All';
    activeProductType    = 'All';
    activeAppMode        = 'All';
    activeCropFacet      = 'All';
    activeGrowthStage    = 'All';
    activeSearchQuery    = '';

    if (inlineSearchInput) inlineSearchInput.value = '';
    if (headerSearchInput) headerSearchInput.value = '';
    if (facetProductTypeSelect) facetProductTypeSelect.value = 'All';
    if (facetAppModeSelect) facetAppModeSelect.value = 'All';
    if (facetCropSelect) facetCropSelect.value = 'All';
    if (facetStageSelect) facetStageSelect.value = 'All';

    updateCategoryTabsUI();
    renderSubcategoryChips();
    renderProducts();
  }

  /* ========================================================================
     INNOVATIVE CROP LIFECYCLE STAGE NAVIGATOR (10 Crops Range)
     ======================================================================== */
  const cropPills = document.querySelectorAll('.crop-pill:not(.fp-crop-pill)');
  const fpCropPills = document.querySelectorAll('.fp-crop-pill');
  const cropStageShowcase = document.getElementById('cropStageShowcase');
  const fpCropStageShowcase = document.getElementById('fpCropStageShowcase');
  const cropStageStepsGrid = document.getElementById('cropStageStepsGrid');
  const fpCropStageStepsGrid = document.getElementById('fpCropStageStepsGrid');
  const stageTimelineProgress = document.getElementById('stageTimelineProgress');
  const fpStageTimelineProgress = document.getElementById('fpStageTimelineProgress');
  const cropTitleEl = document.getElementById('activeCropTitle');
  const fpCropTitleEl = document.getElementById('fpActiveCropTitle');
  const cropSubEl = document.getElementById('activeCropSubtitle');
  const fpCropSubEl = document.getElementById('fpActiveCropSubtitle');
  const fpCropLifecycleSection = document.getElementById('fpCropLifecycleSection');

  function renderCropLifecycle() {
    const crop = cropLifecycleData[activeCropKey];
    if (!crop) return;

    // Sync Titles & Subtitles
    if (cropTitleEl) cropTitleEl.textContent = `${crop.icon} ${crop.name} Stage Nutrition Program`;
    if (fpCropTitleEl) fpCropTitleEl.textContent = `${crop.icon} ${crop.name} Stage Nutrition Program`;
    if (cropSubEl) cropSubEl.textContent = crop.subtitle;
    if (fpCropSubEl) fpCropSubEl.textContent = crop.subtitle;

    // Sync Pill Active States
    cropPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-crop') === activeCropKey));
    fpCropPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-crop') === activeCropKey));

    // Render Steps in both Corporate and Farmer Portal
    const grids = [cropStageStepsGrid, fpCropStageStepsGrid].filter(Boolean);
    grids.forEach(grid => {
      grid.innerHTML = crop.stages.map((stg, idx) => `
        <button class="stage-step-btn ${idx === activeStageIndex ? 'active' : (idx < activeStageIndex ? 'completed' : '')}" data-stage-index="${idx}">
          <div class="stage-node">${stg.stageNum}</div>
          <div class="stage-node-label">${stg.name.split('—')[0]}</div>
          <div class="stage-node-timing">${stg.timing.split('(')[0]}</div>
        </button>
      `).join('');

      grid.querySelectorAll('.stage-step-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          activeStageIndex = parseInt(btn.getAttribute('data-stage-index'), 10);
          renderCropLifecycle();
        });
      });
    });

    // Update Progress Lines
    if (crop.stages.length > 1) {
      const progressPercent = (activeStageIndex / (crop.stages.length - 1)) * 100;
      if (stageTimelineProgress) stageTimelineProgress.style.width = `${progressPercent}%`;
      if (fpStageTimelineProgress) fpStageTimelineProgress.style.width = `${progressPercent}%`;
    }

    // Render Spotlight Card for Active Stage (Corporate & FP)
    const currentStage = crop.stages[activeStageIndex] || crop.stages[0];
    const showcases = [
      { el: cropStageShowcase, btnId: 'btnToggleFullMatrix', matrixId: 'cropMatrixTableWrapper' },
      { el: fpCropStageShowcase, btnId: 'btnFpToggleFullMatrix', matrixId: 'fpCropMatrixTableWrapper' }
    ];

    showcases.forEach(({ el, btnId, matrixId }) => {
      if (!el || !currentStage) return;
      el.innerHTML = `
        <div>
          <div class="stage-badge-tag">&#127807; Stage Milestone ${currentStage.stageNum} &bull; ${crop.name} Lifecycle</div>
          <h3 class="stage-kit-title">${currentStage.name}</h3>
          <p class="stage-kit-desc"><strong>Target Objective:</strong> ${currentStage.objective}</p>

          <div class="stage-metrics-grid">
            <div class="stage-metric-card">
              <div class="stage-metric-label">&#9200; Application Timing</div>
              <div class="stage-metric-value">${currentStage.timing}</div>
            </div>
            <div class="stage-metric-card">
              <div class="stage-metric-label">&#128167; Recommended Dosage</div>
              <div class="stage-metric-value">${currentStage.dosage}</div>
            </div>
            <div class="stage-metric-card">
              <div class="stage-metric-label">&#128737; Delivery Method</div>
              <div class="stage-metric-value">${currentStage.method}</div>
            </div>
            <div class="stage-metric-card">
              <div class="stage-metric-label">&#127806; Expected Yield Result</div>
              <div class="stage-metric-value" style="color: var(--color-primary);">${currentStage.outcome}</div>
            </div>
          </div>

          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="tel:180088962436" class="btn btn-terracotta" style="font-size: 13.5px; text-decoration: none;">
              &#128222; Order Stage Kit via Helpline
            </a>
            <button id="${btnId}" class="btn btn-outline-terracotta" style="font-size: 13.5px;">
              View Full Season Matrix &darr;
            </button>
          </div>
        </div>

        <div class="stage-visual-card">
          <img src="assets/nchem_rhizo_boost.png" alt="${currentStage.kit}" class="stage-product-img">
          <div style="font-family: var(--font-display); font-size: 17px; font-weight: 700; color: var(--color-primary); margin-bottom: 4px;">${currentStage.kit}</div>
          <div style="font-size: 12px; color: var(--color-text-muted);">Specialized Bio-Formula Kit</div>
          <div style="margin-top: 14px; font-size: 11px; font-weight: 700; color: var(--color-terracotta); text-transform: uppercase;">100% Residue-Free Formulations</div>
        </div>
      `;

      const btnMatrix = document.getElementById(btnId);
      const matrixWrap = document.getElementById(matrixId);
      if (btnMatrix && matrixWrap) {
        btnMatrix.addEventListener('click', () => {
          const isHidden = matrixWrap.style.display === 'none';
          matrixWrap.style.display = isHidden ? 'block' : 'none';
          btnMatrix.textContent = isHidden ? 'Hide Season Matrix ↑' : 'View Full Season Matrix ↓';
          if (isHidden) {
            renderCropMatrixTable();
            matrixWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        });
      }
    });

    renderCropMatrixTable();
  }

  function renderCropMatrixTable() {
    const crop = cropLifecycleData[activeCropKey];
    if (!crop) return;

    const bodies = [
      document.getElementById('cropMatrixTableBody'),
      document.getElementById('fpCropMatrixTableBody')
    ].filter(Boolean);

    bodies.forEach(tbody => {
      tbody.innerHTML = crop.stages.map(stg => `
        <tr>
          <td style="font-weight: 800; color: var(--color-primary); font-size: 15px;">Stage ${stg.stageNum}</td>
          <td style="font-weight: 700;">${stg.name}</td>
          <td><span style="background: #EBF2EC; padding: 4px 8px; border-radius: 6px; font-weight: 600; font-size: 12px;">${stg.timing}</span></td>
          <td><strong>${stg.dosage}</strong><br><small style="color: var(--color-text-muted);">${stg.method}</small></td>
          <td style="color: var(--color-text-main); font-size: 12.5px;">${stg.outcome}</td>
        </tr>
      `).join('');
    });
  }

  // Corporate View Crop Pills
  cropPills.forEach(pill => {
    pill.addEventListener('click', () => {
      activeCropKey = pill.getAttribute('data-crop');
      activeStageIndex = 0;
      renderCropLifecycle();
    });
  });

  // Farmer Portal Crop Pills
  fpCropPills.forEach(pill => {
    pill.addEventListener('click', () => {
      activeCropKey = pill.getAttribute('data-crop');
      activeStageIndex = 0;
      renderCropLifecycle();

      const crop = cropLifecycleData[activeCropKey];
      if (crop) {
        activeFarmerCategory = 'Crop-Specific Stage Nutrition';
        activeFarmerSubcat = `${crop.name} Stage Care`;
        activeFarmerCrop = crop.name;
        renderFarmerProducts();
      }
    });
  });

  /* ========================================================================
     SPECIFICATION MODAL HANDLER
     ======================================================================== */
  function openSpecModal(productId) {
    const prod = formulationsV3.find(p => p.id === productId);
    if (!prod || !specModalOverlay) return;

    document.getElementById('modalProdTitle').textContent = prod.title;
    document.getElementById('modalProdCategory').textContent = `${prod.category} › ${prod.subcategory}`;
    document.getElementById('modalProdDesc').textContent = prod.desc;
    document.getElementById('modalProdComposition').textContent = prod.composition;
    document.getElementById('modalProdDosage').textContent = prod.dosage;
    document.getElementById('modalProdTargetCrops').textContent = prod.targetCrops;
    document.getElementById('modalProdMethod').textContent = prod.applicationMethod;
    document.getElementById('modalProdPacks').textContent = prod.packSizes;
    document.getElementById('modalProdImage').src = prod.image;

    specModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSpecModal() {
    if (!specModalOverlay) return;
    specModalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (specModalClose) {
    specModalClose.addEventListener('click', closeSpecModal);
  }

  if (specModalOverlay) {
    specModalOverlay.addEventListener('click', (e) => {
      if (e.target === specModalOverlay) {
        closeSpecModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSpecModal();
    }
  });

  /* ========================================================================
     SEARCH FILTERS (Header & Inline)
     ======================================================================== */
  function handleSearch(query) {
    activeSearchQuery = query.trim();
    renderProducts();
  }

  if (inlineSearchInput) {
    inlineSearchInput.addEventListener('input', (e) => {
      handleSearch(e.target.value);
    });
  }

  if (headerSearchInput) {
    headerSearchInput.addEventListener('input', (e) => {
      handleSearch(e.target.value);
      if (inlineSearchInput) inlineSearchInput.value = e.target.value;
      const anchor = document.getElementById('product-grid-anchor');
      if (anchor && e.target.value.length > 2) {
        anchor.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ========================================================================
     WORLD-CLASS AGRI-SCIENCE DIRECTORY (Bento Matrix Interactions)
     ======================================================================== */
  const menuTriggerPill      = document.getElementById('menuTriggerPill');
  const megaMenuOverlayV3    = document.getElementById('megaMenuOverlayV3');
  const megaCloseBtnV3       = document.getElementById('megaCloseBtnV3');
  const megaFastSearchInput  = document.getElementById('megaFastSearchInput');
  const megaLaunchNavigatorBtn = document.getElementById('megaLaunchNavigatorBtn');

  function openMegaMenu() {
    if (!megaMenuOverlayV3) return;
    megaMenuOverlayV3.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMegaMenu() {
    if (!megaMenuOverlayV3) return;
    megaMenuOverlayV3.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (menuTriggerPill) {
    menuTriggerPill.addEventListener('click', openMegaMenu);
  }

  if (megaCloseBtnV3) {
    megaCloseBtnV3.addEventListener('click', closeMegaMenu);
  }

  if (megaMenuOverlayV3) {
    megaMenuOverlayV3.addEventListener('click', (e) => {
      if (e.target === megaMenuOverlayV3) {
        closeMegaMenu();
      }
    });
  }

  // Keyboard accessibility (ESC)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && megaMenuOverlayV3 && megaMenuOverlayV3.classList.contains('active')) {
      closeMegaMenu();
    }
  });

  // Fast In-Menu Search Filtering
  if (megaFastSearchInput) {
    megaFastSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      const items = document.querySelectorAll('.mega-subcat-item');
      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        const cat = (item.getAttribute('data-category') || '').toLowerCase();
        const sub = (item.getAttribute('data-subcategory') || '').toLowerCase();
        if (!q || text.includes(q) || cat.includes(q) || sub.includes(q)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Handle clicking subcategory items
  document.querySelectorAll('.mega-subcat-item, .mega-sub-link-v3').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-category');
      const sub = link.getAttribute('data-subcategory');
      closeMegaMenu();
      if (cat) {
        activeMainCategory = cat;
        activeSubcategory = sub || 'All';
        updateCategoryTabsUI();
        renderSubcategoryChips();
        renderProducts();
        const anchor = document.getElementById('product-grid-anchor');
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Handle Launch Navigator button
  if (megaLaunchNavigatorBtn) {
    megaLaunchNavigatorBtn.addEventListener('click', () => {
      closeMegaMenu();
      if (cropLifecycleSection) {
        cropLifecycleSection.style.display = 'block';
        cropLifecycleSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }






  /* ========================================================================
     PORTAL TOGGLE — Corporate vs Farmer View
     ======================================================================== */
  const corporateView   = document.getElementById('corporateView');
  const farmerPortalView = document.getElementById('farmerPortalView');
  const portalToggle    = document.getElementById('portalToggle');

  function showCorporate() {
    corporateView.style.display = 'block';
    farmerPortalView.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Sync toggle button active state
    if (portalToggle) {
      portalToggle.querySelectorAll('.toggle-segment').forEach(s => {
        s.classList.toggle('active', s.getAttribute('data-portal') === 'corporate');
      });
    }
  }

  function showFarmer() {
    corporateView.style.display = 'none';
    farmerPortalView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Sync toggle button active state
    if (portalToggle) {
      portalToggle.querySelectorAll('.toggle-segment').forEach(s => {
        s.classList.toggle('active', s.getAttribute('data-portal') === 'farmer');
      });
    }
    renderFarmerProducts();
    renderCropLifecycle();
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
     INNOVATIVE FARMER DISCOVERY & FILTRATION HUB LOGIC (6 Pillars)
     ======================================================================== */
  let activeFarmerMode     = 'pillars';
  let activeFarmerCategory = 'All';
  let activeFarmerSubcat   = 'All';
  let activeFarmerCrop     = 'All';
  let activeFarmerGoal     = 'All';
  let activeFarmerSearch   = '';
  let activeFarmerView     = 'grid';

  const farmerProductGrid  = document.getElementById('farmerProductGrid');
  const fpFilterCountBadge = document.getElementById('fpFilterCountBadge');
  const fpFilterStatusText = document.getElementById('fpFilterStatusText');
  const btnFpClearFilter   = document.getElementById('btnFpClearFilter');
  const fpAllSolutionsBtn  = document.getElementById('fpAllSolutionsBtn');
  const fpSearchInput      = document.getElementById('fpSearchInput');
  const fpPillarsView      = document.getElementById('fpPillarsView');
  const fpCropsView        = document.getElementById('fpCropsView');
  const fpGoalsView        = document.getElementById('fpGoalsView');
  const filterModeBtns     = document.querySelectorAll('.filter-mode-btn');
  const bentoPillarCards   = document.querySelectorAll('.bento-pillar-card');
  const cropMatrixTiles    = document.querySelectorAll('.crop-matrix-tile');
  const goalCardTiles      = document.querySelectorAll('.goal-card-tile');
  const btnFpGridView      = document.getElementById('btnFpGridView');
  const btnFpListView      = document.getElementById('btnFpListView');

  const goalKeywordMap = {
    root: ['root', 'humic', 'rhizo', 'soil', 'nodule', 'microbe', 'cec', 'compost', 'dap', 'bone'],
    flower: ['flower', 'bahar', 'fruit set', 'blossom', 'boron', 'retention', 'special-i', 'special-ii', 'mango'],
    pest: ['pest', 'insect', 'focus', 'raksha', 'mite', 'thrips', 'caterpillar', 'fly trap', 'sucking'],
    fungal: ['fung', 'killer', 'blight', 'mildew', 'rot', 'anthracnose', 'bacterial', 'wilt', 'rust', 'canker'],
    nematode: ['nematode', 'nem roots', 'paecilomyces', 'gall', 'cyst', 'mycorrhizal'],
    size: ['sizing', 'bulking', 'potash', 'brix', 'color', 'special-iii', 'special-iv', 'zinc', 'weight', 'lycopene', 'sugar']
  };

  function renderFarmerProducts() {
    if (!farmerProductGrid) return;

    let filtered = formulationsV3.filter(p => {
      let matchCat = true;
      if (activeFarmerCategory !== 'All') {
        matchCat = (p.category === activeFarmerCategory);
      }

      let matchSubcat = true;
      if (activeFarmerSubcat !== 'All') {
        matchSubcat = (p.subcategory === activeFarmerSubcat);
      }

      let matchCrop = true;
      if (activeFarmerCrop !== 'All') {
        const cropLower = activeFarmerCrop.toLowerCase();
        matchCrop = p.targetCrops.toLowerCase().includes(cropLower) ||
                    p.title.toLowerCase().includes(cropLower) ||
                    p.subcategory.toLowerCase().includes(cropLower) ||
                    p.targetCrops.includes('All Crops');
      }

      let matchGoal = true;
      if (activeFarmerGoal !== 'All') {
        const keywords = goalKeywordMap[activeFarmerGoal] || [];
        const fullText = (p.title + ' ' + p.desc + ' ' + p.composition + ' ' + p.subcategory).toLowerCase();
        matchGoal = keywords.some(k => fullText.includes(k));
      }

      let matchSearch = true;
      if (activeFarmerSearch !== '') {
        const q = activeFarmerSearch.toLowerCase();
        matchSearch = p.title.toLowerCase().includes(q) ||
                      p.desc.toLowerCase().includes(q) ||
                      p.composition.toLowerCase().includes(q) ||
                      p.targetCrops.toLowerCase().includes(q) ||
                      p.subcategory.toLowerCase().includes(q);
      }

      return matchCat && matchSubcat && matchCrop && matchGoal && matchSearch;
    });

    const count = filtered.length;
    if (fpFilterCountBadge) fpFilterCountBadge.textContent = `${count} Formulation${count === 1 ? '' : 's'}`;

    let statusMsg = 'Showing All Certified Formulations (121 Total)';
    const isFiltered = (activeFarmerCategory !== 'All' || activeFarmerSubcat !== 'All' || activeFarmerCrop !== 'All' || activeFarmerGoal !== 'All' || activeFarmerSearch !== '');

    if (btnFpClearFilter) {
      btnFpClearFilter.style.display = isFiltered ? 'inline-block' : 'none';
    }

    if (activeFarmerSearch !== '') {
      statusMsg = `Search Results for "${activeFarmerSearch}"`;
    } else if (activeFarmerSubcat !== 'All') {
      statusMsg = `Filtered by Subcategory: ${activeFarmerSubcat}`;
    } else if (activeFarmerCategory !== 'All') {
      statusMsg = `Filtered by Pillar: ${activeFarmerCategory}`;
    } else if (activeFarmerCrop !== 'All') {
      statusMsg = `Specialized Solutions for ${activeFarmerCrop} Cultivation`;
    } else if (activeFarmerGoal !== 'All') {
      const goalNames = {
        root: 'White Root Surge & Soil Health',
        flower: 'Flower Setting & Drop Prevention',
        pest: 'Biological Pest & Mite Control',
        fungal: 'Fungal Mildew & Anti-Blight Defense',
        nematode: 'Root-Knot Nematode Protection',
        size: 'Fruit Sizing, Color & Brix Boost'
      };
      statusMsg = `Targeted for: ${goalNames[activeFarmerGoal] || activeFarmerGoal}`;
    }

    if (fpFilterStatusText) fpFilterStatusText.textContent = statusMsg;

    if (activeFarmerView === 'list') {
      farmerProductGrid.classList.add('list-view-mode');
    } else {
      farmerProductGrid.classList.remove('list-view-mode');
    }

    if (count === 0) {
      farmerProductGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; background: #FFFFFF; border-radius: 20px; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); width: 100%;">
          <div style="font-size: 44px; margin-bottom: 12px;">&#127807;</div>
          <h3 style="font-family: var(--font-display); font-size: 24px; font-weight: 800; color: var(--color-primary); margin-bottom: 8px;">No Formulations Found</h3>
          <p style="color: var(--color-text-muted); font-size: 14.5px; max-width: 500px; margin: 0 auto 20px;">
            We could not find products matching this filter combination. Try resetting to view the full 121 certified bio-solutions.
          </p>
          <button id="btnFpEmptyReset" class="btn btn-terracotta">Show All Solutions (121)</button>
        </div>
      `;
      const emptyReset = document.getElementById('btnFpEmptyReset');
      if (emptyReset) {
        emptyReset.addEventListener('click', resetFarmerFilters);
      }
      return;
    }

    farmerProductGrid.innerHTML = filtered.map(p => `
      <article class="product-card-top-rounded" data-id="${p.id}">
        <div class="card-photo-v3">
          <div class="card-badges-row">
            <span class="badge-cat-pill">${getCategoryIcon(p.category)} ${p.category}</span>
            <span class="badge-subcat-pill" title="${p.subcategory}">${p.subcategory}</span>
          </div>
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <div class="card-body-v3">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--color-terracotta); margin-bottom: 2px;">${p.productType}</div>
          <h3 class="card-title-v3" style="font-size: 18.5px; line-height: 1.3; margin-bottom: 8px;">${p.title}</h3>
          
          <div class="card-spec-highlight">
            <span>&#9879;</span>
            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.composition}</span>
          </div>

          <p style="font-size: 13.5px; color: var(--color-text-muted); margin-bottom: 14px; flex-grow: 1; line-height: 1.5;">${p.desc}</p>
          
          <div style="margin-bottom: 16px; font-size: 12.5px; background: #F8F6F0; padding: 8px 12px; border-radius: 8px; color: var(--color-text-main);">
            <strong style="color: var(--color-terracotta);">Dosage:</strong> ${p.dosage}
          </div>

          <div style="display: flex; gap: 8px; margin-top: auto;">
            <button class="btn btn-outline-terracotta btn-open-spec" data-id="${p.id}" style="flex: 1; padding: 8px 14px; font-size: 13px;">
              Specification &rarr;
            </button>
            <a href="tel:180088962436" class="btn btn-primary-moss" style="padding: 8px 14px; font-size: 13px; text-decoration: none;" title="Call Helpline for Dealer Availability">
              &#128222; Call
            </a>
          </div>
        </div>
      </article>
    `).join('');

    farmerProductGrid.querySelectorAll('.btn-open-spec').forEach(btn => {
      btn.addEventListener('click', () => {
        openSpecModal(btn.getAttribute('data-id'));
      });
    });
  }

  const subtagCropMap = {
    'Pomegranate': 'pomegranate',
    'Pomegranate Stage Care': 'pomegranate',
    'Guava': 'guava',
    'Guava Stage Care': 'guava',
    'Citrus': 'citrus',
    'Citrus Stage Care': 'citrus',
    'Papaya': 'papaya',
    'Papaya Stage Care': 'papaya',
    'Banana': 'banana',
    'Banana Stage Care': 'banana',
    'Chilli': 'chilli',
    'Chilli Stage Care': 'chilli',
    'Tomato': 'tomato',
    'Tomato Stage Care': 'tomato',
    'Onion': 'onion',
    'Onion Stage Care': 'onion',
    'Paddy': 'paddy',
    'Paddy Stage Care': 'paddy',
    'Mango': 'mango',
    'Mango Stage Care': 'mango'
  };

  function resetFarmerFilters() {
    activeFarmerCategory = 'All';
    activeFarmerSubcat   = 'All';
    activeFarmerCrop     = 'All';
    activeFarmerGoal     = 'All';
    activeFarmerSearch   = '';

    if (fpSearchInput) fpSearchInput.value = '';
    if (fpAllSolutionsBtn) fpAllSolutionsBtn.classList.add('active');

    bentoPillarCards.forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.bento-subtag').forEach(s => s.classList.remove('subtag-active'));
    cropMatrixTiles.forEach(t => t.classList.remove('active'));
    goalCardTiles.forEach(g => g.classList.remove('active'));

    if (fpCropLifecycleSection) {
      fpCropLifecycleSection.style.display = 'none';
    }

    renderFarmerProducts();
  }

  filterModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterModeBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      activeFarmerMode = btn.getAttribute('data-mode');

      if (fpPillarsView) fpPillarsView.style.display = (activeFarmerMode === 'pillars') ? 'grid' : 'none';
      if (fpCropsView)   fpCropsView.style.display   = (activeFarmerMode === 'crops') ? 'grid' : 'none';
      if (fpGoalsView)   fpGoalsView.style.display   = (activeFarmerMode === 'goals') ? 'grid' : 'none';
    });
  });

  if (fpAllSolutionsBtn) {
    fpAllSolutionsBtn.addEventListener('click', () => {
      resetFarmerFilters();
    });
  }

  if (btnFpClearFilter) {
    btnFpClearFilter.addEventListener('click', () => {
      resetFarmerFilters();
    });
  }

  bentoPillarCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('bento-subtag')) {
        e.stopPropagation();
        const subName = e.target.getAttribute('data-sub');
        document.querySelectorAll('.bento-subtag').forEach(s => s.classList.remove('subtag-active'));
        e.target.classList.add('subtag-active');

        bentoPillarCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        if (fpAllSolutionsBtn) fpAllSolutionsBtn.classList.remove('active');

        activeFarmerCategory = card.getAttribute('data-category');
        activeFarmerSubcat   = subName;
        activeFarmerCrop     = 'All';
        activeFarmerGoal     = 'All';

        const matchedCropKey = subtagCropMap[subName];
        if (matchedCropKey) {
          activeCropKey = matchedCropKey;
          activeStageIndex = 0;
          if (fpCropLifecycleSection) {
            fpCropLifecycleSection.style.display = 'block';
          }
          renderCropLifecycle();
          if (fpCropLifecycleSection) {
            fpCropLifecycleSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
        renderFarmerProducts();
        return;
      }

      const isAlreadyActive = card.classList.contains('active') && activeFarmerSubcat === 'All';
      bentoPillarCards.forEach(c => c.classList.remove('active'));
      document.querySelectorAll('.bento-subtag').forEach(s => s.classList.remove('subtag-active'));

      if (isAlreadyActive) {
        resetFarmerFilters();
      } else {
        card.classList.add('active');
        if (fpAllSolutionsBtn) fpAllSolutionsBtn.classList.remove('active');
        activeFarmerCategory = card.getAttribute('data-category');
        activeFarmerSubcat   = 'All';
        activeFarmerCrop     = 'All';
        activeFarmerGoal     = 'All';

        if (activeFarmerCategory === 'Crop-Specific Stage Nutrition') {
          renderCropLifecycle();
          if (fpCropLifecycleSection) {
            fpCropLifecycleSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }

        renderFarmerProducts();
      }
    });
  });

  cropMatrixTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const isAlreadyActive = tile.classList.contains('active');
      cropMatrixTiles.forEach(t => t.classList.remove('active'));

      if (isAlreadyActive) {
        resetFarmerFilters();
      } else {
        tile.classList.add('active');
        if (fpAllSolutionsBtn) fpAllSolutionsBtn.classList.remove('active');
        activeFarmerCrop     = tile.getAttribute('data-crop');
        activeFarmerCategory = 'All';
        activeFarmerSubcat   = 'All';
        activeFarmerGoal     = 'All';

        const cropLower = activeFarmerCrop.toLowerCase();
        if (cropLifecycleData[cropLower]) {
          activeCropKey = cropLower;
          activeStageIndex = 0;
          renderCropLifecycle();
          if (fpCropLifecycleSection) {
            fpCropLifecycleSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }

        renderFarmerProducts();
      }
    });
  });

  goalCardTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const isAlreadyActive = tile.classList.contains('active');
      goalCardTiles.forEach(g => g.classList.remove('active'));

      if (isAlreadyActive) {
        resetFarmerFilters();
      } else {
        tile.classList.add('active');
        if (fpAllSolutionsBtn) fpAllSolutionsBtn.classList.remove('active');
        activeFarmerGoal     = tile.getAttribute('data-goal');
        activeFarmerCategory = 'All';
        activeFarmerSubcat   = 'All';
        activeFarmerCrop     = 'All';

        renderFarmerProducts();
      }
    });
  });

  if (fpSearchInput) {
    fpSearchInput.addEventListener('input', (e) => {
      activeFarmerSearch = e.target.value.trim();
      if (activeFarmerSearch !== '' && fpAllSolutionsBtn) {
        fpAllSolutionsBtn.classList.remove('active');
      }
      renderFarmerProducts();
    });
  }

  if (btnFpGridView && btnFpListView) {
    btnFpGridView.addEventListener('click', () => {
      btnFpGridView.classList.add('active');
      btnFpListView.classList.remove('active');
      activeFarmerView = 'grid';
      renderFarmerProducts();
    });

    btnFpListView.addEventListener('click', () => {
      btnFpListView.classList.add('active');
      btnFpGridView.classList.remove('active');
      activeFarmerView = 'list';
      renderFarmerProducts();
    });
  }

  /* Slideshow Logic */
  const fpSlides = document.querySelectorAll('.fp-slide');
  const fpDots   = document.querySelectorAll('.fp-dot');
  const fpPrev   = document.getElementById('fpPrev');
  const fpNext   = document.getElementById('fpNext');
  let currentSlide = 0;
  let slideshowTimer = null;
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
     LEAF / SPROUT CHAT WIDGET & VISITOR COUNTER
     ======================================================================== */
  ['sproutChatWidget', 'sproutChatWidgetFarmer'].forEach(id => {
    const widget = document.getElementById(id);
    if (widget) {
      widget.addEventListener('click', () => {
        alert('Welcome to Nchem Crop Support! Our agronomists are available to guide you on Bio-Fertilisers, Plant Protection, Crop Lifecycle Kits, and Micronutrients at 1800-889-NCHEM.');
      });
    }
  });

  const visitorCounterV3 = document.getElementById('visitorCounterV3');
  if (visitorCounterV3) {
    let count = 14892410;
    setInterval(() => {
      count += Math.floor(Math.random() * 3) + 1;
      visitorCounterV3.textContent = `Visitor Count: ${count.toLocaleString()}`;
    }, 4000);
  }

  /* ========================================================================
     CORPORATE RFQ FORM HANDLER
     ======================================================================== */
  const corpRfqForm = document.getElementById('corpRfqForm');
  const rfqSuccessMsg = document.getElementById('rfqSuccessMsg');
  if (corpRfqForm) {
    corpRfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (rfqSuccessMsg) {
        rfqSuccessMsg.style.display = 'block';
        rfqSuccessMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      corpRfqForm.reset();
    });
  }

  /* ========================================================================
     MANUFACTURING & R&D EXCELLENCE — EDITORIAL SCROLLYTELLING CONTROLLER
     ======================================================================== */
  const editorialRows = document.querySelectorAll('.editorial-story-row');
  if (editorialRows.length > 0) {
    const rowObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.15
    });

    editorialRows.forEach(row => {
      rowObserver.observe(row);
    });
  }

  // Support editorial button clicks to activate matching category or smooth scroll
  const editorialBtns = document.querySelectorAll('.editorial-btn[data-category]');
  editorialBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      if (cat) {
        const catFilterBtn = document.querySelector(`.corp-cat-pill[data-category="${cat}"]`);
        if (catFilterBtn) {
          catFilterBtn.click();
        }
      }
    });
  });

  /* ========================================================================
     PAN-INDIA DISTRIBUTION CORRIDOR CONTROLLER
     ======================================================================== */
  const corridorBtns = document.querySelectorAll('.corridor-tab-btn');
  const corridorTag = document.getElementById('corridorTag');
  const corridorTitle = document.getElementById('corridorTitle');
  const corridorDesc = document.getElementById('corridorDesc');
  const specHub = document.getElementById('specHub');
  const specTurnaround = document.getElementById('specTurnaround');
  const specCoverage = document.getElementById('specCoverage');
  const specProtocol = document.getElementById('specProtocol');
  const stage2Depot = document.getElementById('stage2Depot');
  const stage2Detail = document.getElementById('stage2Detail');

  const corridorData = {
    all: {
      tag: 'PAN-INDIA ARTERIAL FLEET',
      title: 'Integrated 28-State Distribution Mesh',
      desc: 'Direct multi-axle freight departs weekly from Ameenpur Biotechnology Campus to regional buffer depots, institutional cooperatives, and state agricultural federations across all 28 states. Every shipment carries verified FCO Certificate of Analysis dossiers and living CFU viability assurance.',
      hub: 'Ameenpur Campus, Hyderabad',
      turnaround: '48 – 72 Hours',
      coverage: '28 Indian States',
      protocol: 'UV-Barrier & Vent-Safe Cargo',
      depot: 'Regional Staging Depots',
      depotDetail: 'Hyderabad • Pune • Delhi • Kolkata'
    },
    south: {
      tag: 'SOUTHERN AGRARIAN CORRIDOR',
      title: 'Telangana, AP, Karnataka, Tamil Nadu & Kerala',
      desc: 'Immediate intra-zone dispatch from Ameenpur Campus serving primary agricultural federations, chilli belts of Guntur, cotton basins of Warangal, and delta paddy cooperatives with same-day to 48-hour turnarounds.',
      hub: 'Hyderabad Central & Bengaluru Staging',
      turnaround: '24 – 48 Hours',
      coverage: 'TS, AP, KA, TN, KL',
      protocol: 'Direct Express Inter-State Fleet',
      depot: 'Hyderabad & Bengaluru Buffer Hubs',
      depotDetail: 'Serving Warangal, Guntur, Shimoga, Coimbatore'
    },
    west: {
      tag: 'WESTERN AGRONOMIC CORRIDOR',
      title: 'Maharashtra, Gujarat, MP & Goa Agrarian Belt',
      desc: 'Dedicated freight line to Pune and Nagpur regional transit centers, feeding sugarcane cooperatives, soybean acreage, onion growers of Nashik, and high-tech commercial horticulture clusters.',
      hub: 'Pune & Nagpur Buffer Depots',
      turnaround: '36 – 48 Hours',
      coverage: 'MH, GJ, MP, Goa',
      protocol: 'Insulated Moisture-Locked Cargo',
      depot: 'Pune & Nagpur Agronomic Depots',
      depotDetail: 'Serving Kolhapur, Nashik, Rajkot, Indore'
    },
    north: {
      tag: 'NORTHERN GRANARY CORRIDOR',
      title: 'Punjab, Haryana, UP, Rajasthan & Uttarakhand',
      desc: 'Express rail and multi-axle freight to Delhi-NCR and Karnal staging depots, servicing the Indo-Gangetic wheat-paddy rotations, commercial sugarcane mills, and state agro federations.',
      hub: 'Delhi-NCR & Karnal Staging Depot',
      turnaround: '48 – 72 Hours',
      coverage: 'PB, HR, UP, RJ, UK',
      protocol: 'Sealed Thermal-Protected Freight',
      depot: 'Delhi-NCR & Karnal Transit Centers',
      depotDetail: 'Serving Ludhiana, Meerut, Karnal, Jaipur'
    },
    east: {
      tag: 'EASTERN DELTA & COROMANDEL BELT',
      title: 'West Bengal, Odisha, Bihar, Jharkhand & North-East',
      desc: 'Strategic route to Kolkata and Bhubaneswar buffer points, supporting intense triple-cropped paddy deltas, vegetable clusters, and eastern primary cooperative unions.',
      hub: 'Kolkata & Bhubaneswar Depots',
      turnaround: '48 – 72 Hours',
      coverage: 'WB, OD, BR, JH, NE',
      protocol: 'High-Humidity Protected Packing',
      depot: 'Kolkata & Bhubaneswar Staging Centers',
      depotDetail: 'Serving Bardhaman, Cuttack, Patna, Guwahati'
    }
  };

  corridorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cKey = btn.getAttribute('data-corridor');
      if (!corridorData[cKey]) return;

      corridorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = corridorData[cKey];
      if (corridorTag) corridorTag.textContent = data.tag;
      if (corridorTitle) corridorTitle.textContent = data.title;
      if (corridorDesc) corridorDesc.textContent = data.desc;
      if (specHub) specHub.textContent = data.hub;
      if (specTurnaround) specTurnaround.textContent = data.turnaround;
      if (specCoverage) specCoverage.textContent = data.coverage;
      if (specProtocol) specProtocol.textContent = data.protocol;
      if (stage2Depot) stage2Depot.textContent = data.depot;
      if (stage2Detail) stage2Detail.textContent = data.depotDetail;
    });
  });

  /* ========================================================================
     INITIALIZATION
     ======================================================================== */
  showCorporate();
  renderCropLifecycle();
  // Note: renderProducts() is NOT called on init — catalog section is hidden
  // until the user clicks a pillar button in the 6-pillar taxonomy deck above.

});
