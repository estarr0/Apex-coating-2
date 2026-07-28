/* ===================================================================
 * Apex Coating East Africa Ltd - Complete Unified JavaScript Bundle
 * Contains: BS 4800 Colors Dataset, Products Catalog & Price List,
 * Color Visualizer Engine, Paint Calculator, Instant Quote Cart, and
 * Owl Carousel / Slider Fallbacks.
 * =================================================================== */

/* -------------------------------------------------------------------
 * 1. BS 4800 British Standard Color Dataset
 * ------------------------------------------------------------------- */
const BS4800_COLORS = [
    {
        code: "00 E 55",
        name: "Brilliant White",
        hex: "#F9FAFC",
        category: "whites",
        catName: "Whites & Off-Whites",
        description: "Crisp, radiant white ideal for brightening interiors and ceilings.",
        popular: true,
        recommended: ["Living Room", "Ceilings", "Office"],
        finishes: ["Silk", "Matt", "Gloss", "Weatherguard"]
    },
    {
        code: "10 B 15",
        name: "Gardenia Cream",
        hex: "#F4EAD3",
        category: "creams",
        catName: "Creams & Warm Yellows",
        description: "Classic soft magnolia shade bringing warmth to living spaces.",
        popular: true,
        recommended: ["Living Room", "Bedroom", "Hallways"],
        finishes: ["Silk", "Matt", "Weatherguard"]
    },
    {
        code: "08 C 35",
        name: "Serengeti Sand",
        hex: "#D9C3A5",
        category: "creams",
        catName: "Creams & Warm Yellows",
        description: "Warm neutral inspired by the East African savanna sands.",
        popular: true,
        recommended: ["Exterior Facade", "Living Room", "Dining"],
        finishes: ["Silk", "Matt", "Weatherguard", "Rufftop Texture"]
    },
    {
        code: "12 C 39",
        name: "Midnight Sapphire",
        hex: "#1F3A52",
        category: "blues",
        catName: "Blues & Teals",
        description: "Deep elegant blue statement color for accent walls and trim.",
        popular: true,
        recommended: ["Accent Wall", "Executive Office", "Cabinetry"],
        finishes: ["Silk", "Matt", "Gloss"]
    },
    {
        code: "18 B 25",
        name: "Kilifi Coastal Breeze",
        hex: "#4A7C9D",
        category: "blues",
        catName: "Blues & Teals",
        description: "Refreshing mid-tone ocean blue evoking the Kenyan coast.",
        popular: false,
        recommended: ["Bathroom", "Bedroom", "Patio"],
        finishes: ["Silk", "Weatherguard"]
    },
    {
        code: "14 E 53",
        name: "Highland Emerald",
        hex: "#1E5E3A",
        category: "greens",
        catName: "Greens & Nature",
        description: "Rich botanical green inspired by the lush East African highlands.",
        popular: true,
        recommended: ["Exterior Gates", "Accent Wall", "Veranda"],
        finishes: ["Silk", "Gloss", "Weatherguard"]
    },
    {
        code: "12 B 21",
        name: "Sage Botanical",
        hex: "#9EB09C",
        category: "greens",
        catName: "Greens & Nature",
        description: "Calming pastel green perfect for tranquil bedrooms and spas.",
        popular: false,
        recommended: ["Bedroom", "Nursery", "Study"],
        finishes: ["Silk", "Matt"]
    },
    {
        code: "04 E 53",
        name: "Rift Crimson",
        hex: "#B22222",
        category: "reds",
        catName: "Reds & Terracotta",
        description: "Vibrant energetic red ideal for feature accents and metalwork.",
        popular: true,
        recommended: ["Front Door", "Feature Wall", "Restaurant"],
        finishes: ["Gloss", "Silk"]
    },
    {
        code: "04 C 33",
        name: "Sunset Terracotta",
        hex: "#C47055",
        category: "reds",
        catName: "Reds & Terracotta",
        description: "Earthy clay tone providing cozy rustic warmth.",
        popular: false,
        recommended: ["Patio", "Pergola", "Dining Room"],
        finishes: ["Matt", "Weatherguard", "Rufftop Texture"]
    },
    {
        code: "00 A 01",
        name: "Mount Kenya Ash",
        hex: "#D3D7DC",
        category: "greys",
        catName: "Greys & Modern Darks",
        description: "Sophisticated contemporary light grey for modern architecture.",
        popular: true,
        recommended: ["Modern Living Room", "Exterior Walls", "Office"],
        finishes: ["Silk", "Matt", "Weatherguard"]
    },
    {
        code: "00 A 05",
        name: "Slate Shadow",
        hex: "#6C757D",
        category: "greys",
        catName: "Greys & Modern Darks",
        description: "Versatile mid-grey offering timeless modern contrast.",
        popular: true,
        recommended: ["Exterior Trim", "Commercial Space", "Kitchen"],
        finishes: ["Silk", "Gloss", "Weatherguard"]
    },
    {
        code: "10 E 53",
        name: "Sunshine Gold",
        hex: "#E5B022",
        category: "creams",
        catName: "Creams & Warm Yellows",
        description: "Bright sunny yellow that uplifts kitchens and playrooms.",
        popular: false,
        recommended: ["Kitchen", "Children's Room", "Balcony"],
        finishes: ["Silk", "Gloss"]
    },
    {
        code: "10 C 33",
        name: "Vanilla Silk",
        hex: "#F7E7CE",
        category: "creams",
        catName: "Creams & Warm Yellows",
        description: "Soft creamy tone with subtle yellow undertones for cozy light.",
        popular: true,
        recommended: ["Bedroom", "Hallway", "Guest Room"],
        finishes: ["Silk", "Matt"]
    },
    {
        code: "14 C 35",
        name: "Lake Victoria Sky",
        hex: "#87CEEB",
        category: "blues",
        catName: "Blues & Teals",
        description: "Soft airy sky blue creating a feeling of infinite light.",
        popular: false,
        recommended: ["Ceiling", "Bedroom", "Veranda"],
        finishes: ["Silk", "Matt"]
    },
    {
        code: "06 C 37",
        name: "Mocha Estate",
        hex: "#5C4033",
        category: "reds",
        catName: "Reds & Terracotta",
        description: "Rich dark chocolate coffee shade for wood trims and exterior accents.",
        popular: false,
        recommended: ["Fascia Boards", "Pergolas", "Doors"],
        finishes: ["Gloss", "Wood Varnish", "Weatherguard"]
    },
    {
        code: "08 B 15",
        name: "Champagne Pearl",
        hex: "#F5F0E6",
        category: "whites",
        catName: "Whites & Off-Whites",
        description: "Ultra-luxurious off-white with delicate pearl shimmer.",
        popular: true,
        recommended: ["Master Suite", "Reception", "Dining"],
        finishes: ["Silk", "Matt"]
    },
    {
        code: "06 E 50",
        name: "Amber Ochre",
        hex: "#C67D0A",
        category: "creams",
        catName: "Creams & Warm Yellows",
        description: "Earthy rich golden amber for warm heritage finishes.",
        popular: false,
        recommended: ["Exterior Feature", "Corridors"],
        finishes: ["Weatherguard", "Rufftop Texture"]
    },
    {
        code: "18 E 53",
        name: "Marine Royal Blue",
        hex: "#003399",
        category: "blues",
        catName: "Blues & Teals",
        description: "Striking royal blue coat with high visual intensity.",
        popular: true,
        recommended: ["Commercial Signage", "Accent Gate", "Showroom"],
        finishes: ["Gloss", "Silk"]
    }
];

/* -------------------------------------------------------------------
 * 2. Products & Official Price List Dataset (1L, 4L, 20L in KES)
 * ------------------------------------------------------------------- */
const APEX_PRODUCTS = [
    {
        id: "prod-001",
        name: "Apex Weatherguard Exterior Emulsion",
        category: "exterior",
        catName: "Exterior Paints",
        tagline: "Heavy-duty weather resistant coating for tropical East African climate",
        badge: "Top Seller",
        coverageSqmPerLitre: 12,
        finish: "Low Sheen Matt",
        warrantyYears: 10,
        prices: {
            "1L": 1450,
            "4L": 4850,
            "20L": 21500
        },
        bs4800Compatible: true,
        features: [
            "UV & Heavy Rain Resistant",
            "Anti-Fungal & Anti-Algae Formula",
            "Flexi-Bridge Micro-crack Coverage",
            "10-Year Fade Proof Warranty"
        ],
        description: "Formulated specifically to endure intense tropical UV exposure, heavy equatorial rainfall, and coastal humidity without peeling or fading."
    },
    {
        id: "prod-002",
        name: "Apex Super Vinyl Silk Emulsion",
        category: "interior",
        catName: "Interior Paints",
        tagline: "Luxurious silky sheen finish with high washability",
        badge: "Premium",
        coverageSqmPerLitre: 14,
        finish: "Silky Sheen",
        warrantyYears: 8,
        prices: {
            "1L": 1250,
            "4L": 4200,
            "20L": 18900
        },
        bs4800Compatible: true,
        features: [
            "Scrub Resistant & Washable",
            "Stain Resistant Technology",
            "Low Odor & Low VOC",
            "Vibrant Color Retention"
        ],
        description: "The gold standard for high-traffic interior living rooms, hallways, and executive dining spaces requiring a reflective, cleanable satin sheen."
    },
    {
        id: "prod-003",
        name: "Apex Master Matt Emulsion",
        category: "interior",
        catName: "Interior Paints",
        tagline: "Rich non-reflective flat finish for smooth ceiling & interior walls",
        badge: "Popular",
        coverageSqmPerLitre: 13,
        finish: "Flat Matt",
        warrantyYears: 7,
        prices: {
            "1L": 950,
            "4L": 3150,
            "20L": 13800
        },
        bs4800Compatible: true,
        features: [
            "Conceals Minor Surface Imperfections",
            "High Opacity Single Coat Coverage",
            "Smooth Velvety Texture",
            "Breathable Coating"
        ],
        description: "Provides a flawless non-glare finish ideal for master bedrooms, ceilings, and quiet lounges."
    },
    {
        id: "prod-004",
        name: "Apex Ultra Gloss Synthetic Enamel",
        category: "wood-metal",
        catName: "Wood & Metal Coatings",
        tagline: "Mirror-like glossy finish for wood, steel, gates & doors",
        badge: "High Gloss",
        coverageSqmPerLitre: 15,
        finish: "High Gloss",
        warrantyYears: 8,
        prices: {
            "1L": 1350,
            "4L": 4450,
            "20L": 19800
        },
        bs4800Compatible: true,
        features: [
            "Rust & Anti-Corrosion Shield",
            "Mirror-Like Reflective Gloss",
            "Impact & Scratch Resistant",
            "Tough Solvent-Based Formula"
        ],
        description: "Engineered for timber doors, window grilles, structural steelwork, and iron gates requiring maximum toughness and high gloss brilliance."
    },
    {
        id: "prod-005",
        name: "Apex Polyurethane Clear Wood Varnish",
        category: "wood-metal",
        catName: "Wood & Metal Coatings",
        tagline: "Protects and highlights natural timber grain",
        badge: "Wood Care",
        coverageSqmPerLitre: 16,
        finish: "Clear Gloss / Satin",
        warrantyYears: 5,
        prices: {
            "1L": 1550,
            "4L": 5200,
            "20L": 23500
        },
        bs4800Compatible: false,
        features: [
            "Enhances Natural Grain Pattern",
            "Moisture & Termite Shield",
            "Non-Yellowing Formula",
            "Interior & Exterior Woodwork"
        ],
        description: "Hard-wearing polyurethane lacquer for mahogany, teak, cypress timber doors, outdoor decks, and dining tables."
    },
    {
        id: "prod-006",
        name: "Apex Alkali Resisting Wall Primer",
        category: "primers",
        catName: "Primers & Preparation",
        tagline: "Seals fresh plaster & protects topcoats against alkali salts",
        badge: "Essential Prep",
        coverageSqmPerLitre: 11,
        finish: "Sealer Base",
        warrantyYears: 10,
        prices: {
            "1L": 850,
            "4L": 2750,
            "20L": 11900
        },
        bs4800Compatible: false,
        features: [
            "Blocks Efflorescence & Salt Petre",
            "Deep Penetrating Sealer",
            "Improves Topcoat Adhesion",
            "Reduces Topcoat Paint Consumption"
        ],
        description: "Crucial first coat for new plasterboard, concrete blocks, and fresh cement masonry to prevent topcoat peeling."
    },
    {
        id: "prod-007",
        name: "Apex Plaster Primer & Undercoat",
        category: "primers",
        catName: "Primers & Preparation",
        tagline: "High-build solvent primer for porous plaster & masonry",
        badge: "Builder Choice",
        coverageSqmPerLitre: 10,
        finish: "Matt Base",
        warrantyYears: 10,
        prices: {
            "1L": 920,
            "4L": 2980,
            "20L": 12800
        },
        bs4800Compatible: false,
        features: [
            "High Filling Power",
            "Provides Uniform Absorbency",
            "Prevents Patchiness in Topcoats",
            "Solvent Base Sealer"
        ],
        description: "Ideal undercoat for commercial developments and residential construction across Kenya and East Africa."
    },
    {
        id: "prod-008",
        name: "Apex Rufftop Textured Exterior Coating",
        category: "textured",
        catName: "Textured Finishes",
        tagline: "Heavy aggregate textured finish for architectural facades",
        badge: "Architectural",
        coverageSqmPerLitre: 4,
        finish: "Heavy Relief Texture",
        warrantyYears: 15,
        prices: {
            "1L": 1650,
            "4L": 5400,
            "20L": 24800
        },
        bs4800Compatible: true,
        features: [
            "Covers Heavy Masonry Defects",
            "Extreme Weather Protection",
            "High Relief Architectural Patterns",
            "15-Year Structural Longevity"
        ],
        description: "Heavy aggregate textured paint applied with roller or trowel, creating striking decorative facade patterns."
    },
    {
        id: "prod-009",
        name: "Apex Silicone Shield Water Repellent",
        category: "exterior",
        catName: "Exterior Paints",
        tagline: "Nanotechnology invisible hydrophobic moisture barrier",
        badge: "Nano Tech",
        coverageSqmPerLitre: 15,
        finish: "Clear Natural Stone Finish",
        warrantyYears: 12,
        prices: {
            "1L": 1850,
            "4L": 6200,
            "20L": 27900
        },
        bs4800Compatible: false,
        features: [
            "100% Water Repellent Hydrophobic Layer",
            "Allows Masonry to Breathe",
            "Prevents Moss, Mould & Dampness",
            "Ideal for Mazeras & Stone Cladding"
        ],
        description: "Invisible clear protective sealant for raw brickwork, Mazeras stone, concrete blocks, and exterior masonry."
    }
];

/* -------------------------------------------------------------------
 * 3. Master Application Logic & State Engine
 * ------------------------------------------------------------------- */
window.ApexState = {
    currency: 'KES', // 'KES' or 'USD'
    usdExchangeRate: 130, // 1 USD = 130 KES
    selectedColor: BS4800_COLORS[0],
    selectedLightMode: 'daylight',
    activeColorCategory: 'all',
    activeProductCategory: 'all',
    searchTerm: '',
    quoteCart: [],
    selectedProductSizes: {}
};

// Safe DOM Ready initialisation
document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initApp();
}

let isAppInitialized = false;
function initApp() {
    if (isAppInitialized) return;
    isAppInitialized = true;

    initOwlCarousel();
    initColorVisualizer();
    initProductsCatalog();
    initPaintCalculator();
    initEventListeners();
    updateQuoteCartUI();
}

/* -------------------------------------------------------------------
 * 4. Carousel & Slider Engine
 * ------------------------------------------------------------------- */
function initOwlCarousel() {
    if (typeof $ !== 'undefined' && $.fn && $.fn.owlCarousel) {
        try {
            $('.hero-owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                nav: true,
                dots: true,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
            });
            return;
        } catch (e) {
            console.warn('Owl Carousel init fallback active');
        }
    }
    initVanillaHeroSlider();
}

function initVanillaHeroSlider() {
    const slides = document.querySelectorAll('.hero-owl-carousel .hero-slide');
    if (!slides.length) return;

    let currentSlide = 0;
    slides.forEach((slide, idx) => {
        slide.style.display = idx === 0 ? 'flex' : 'none';
        slide.style.transition = 'opacity 0.6s ease';
    });

    setInterval(() => {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'flex';
    }, 5000);
}

/* -------------------------------------------------------------------
 * 5. BS 4800 Room Visualizer Engine
 * ------------------------------------------------------------------- */
function initColorVisualizer() {
    renderColorChips();
    applyColorToVisualizer(window.ApexState.selectedColor);
}

function renderColorChips() {
    const grid = document.getElementById('colorsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = window.ApexState.activeColorCategory === 'all'
        ? BS4800_COLORS
        : BS4800_COLORS.filter(c => c.category === window.ApexState.activeColorCategory);

    filtered.forEach(color => {
        const isActive = color.code === window.ApexState.selectedColor.code ? 'active' : '';
        const card = document.createElement('div');
        card.className = `color-card ${isActive}`;
        card.setAttribute('data-code', color.code);
        card.innerHTML = `
            <div class="color-card-chip" style="background-color: ${color.hex}"></div>
            <div class="color-card-code">BS ${color.code}</div>
            <div class="color-card-name">${color.name}</div>
        `;
        card.addEventListener('click', function () {
            window.ApexState.selectedColor = color;
            document.querySelectorAll('.color-card').forEach(el => el.classList.remove('active'));
            card.classList.add('active');
            applyColorToVisualizer(color);
        });
        grid.appendChild(card);
    });
}

function applyColorToVisualizer(color) {
    if (!color) return;

    const roomWallBg = document.getElementById('roomWallBg');
    if (roomWallBg) roomWallBg.style.backgroundColor = color.hex;

    const overlay = document.getElementById('roomFurnitureOverlay');
    if (overlay) {
        if (window.ApexState.selectedLightMode === 'warm') {
            overlay.style.filter = 'brightness(0.95) sepia(0.25) saturate(1.2)';
        } else if (window.ApexState.selectedLightMode === 'cool') {
            overlay.style.filter = 'brightness(1.05) hue-rotate(15deg) saturate(0.9)';
        } else {
            overlay.style.filter = 'brightness(1) saturate(1)';
        }
    }

    const swatch = document.getElementById('selectedSwatch');
    if (swatch) swatch.style.backgroundColor = color.hex;

    const codeEl = document.getElementById('selectedColorCode');
    if (codeEl) codeEl.textContent = `BS ${color.code}`;

    const nameEl = document.getElementById('selectedColorName');
    if (nameEl) nameEl.textContent = color.name;

    const descEl = document.getElementById('selectedColorDesc');
    if (descEl) descEl.textContent = color.description || '';

    const finishesEl = document.getElementById('selectedColorFinishes');
    if (finishesEl && color.finishes) {
        finishesEl.innerHTML = color.finishes.map(f => `<span class="badge badge-navy">${f}</span>`).join(' ');
    }

    const roomsEl = document.getElementById('selectedColorRooms');
    if (roomsEl && color.recommended) {
        roomsEl.textContent = `Best Suited: ${color.recommended.join(' • ')}`;
    }
}

/* -------------------------------------------------------------------
 * 6. Products Catalog & Price List Engine
 * ------------------------------------------------------------------- */
function initProductsCatalog() {
    APEX_PRODUCTS.forEach(p => {
        if (!window.ApexState.selectedProductSizes[p.id]) {
            window.ApexState.selectedProductSizes[p.id] = '4L';
        }
    });
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let list = APEX_PRODUCTS;

    if (window.ApexState.activeProductCategory !== 'all') {
        list = list.filter(p => p.category === window.ApexState.activeProductCategory);
    }

    if (window.ApexState.searchTerm.trim() !== '') {
        const query = window.ApexState.searchTerm.toLowerCase();
        list = list.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.catName.toLowerCase().includes(query)
        );
    }

    if (list.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; background: #FFF; border-radius: 12px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 15px;"></i>
                <h3>No Paint Products Found</h3>
                <p style="color: var(--text-muted);">Try adjusting your category filter or search term.</p>
            </div>
        `;
        return;
    }

    list.forEach(prod => {
        const activeSize = window.ApexState.selectedProductSizes[prod.id] || '4L';
        const priceKES = prod.prices[activeSize];
        const formattedPrice = formatPrice(priceKES);

        const bsBadge = prod.bs4800Compatible
            ? `<span class="badge badge-gold" title="Available in all BS 4800 colors"><i class="fas fa-palette"></i> BS 4800 Tinting</span>`
            : `<span class="badge badge-teal">Base Coating</span>`;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', prod.id);
        card.innerHTML = `
            <div class="product-header">
                <span class="badge badge-navy product-badge-pos">${prod.badge}</span>
                <h3 class="product-title">${prod.name}</h3>
                <p class="product-tagline">${prod.tagline}</p>
            </div>
            <div class="product-body">
                <div class="product-spec-list">
                    <div class="product-spec-item">
                        <span>Finish Type</span>
                        <span>${prod.finish}</span>
                    </div>
                    <div class="product-spec-item">
                        <span>Coverage Rate</span>
                        <span>${prod.coverageSqmPerLitre} m²/Litre</span>
                    </div>
                    <div class="product-spec-item">
                        <span>Warranty</span>
                        <span>${prod.warrantyYears} Years</span>
                    </div>
                    <div class="product-spec-item">
                        <span>Tinting Standard</span>
                        <span>${bsBadge}</span>
                    </div>
                </div>

                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 15px;">${prod.description}</p>

                <div class="pricing-table-mini">
                    <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary-navy); margin-bottom: 6px;">SELECT CONTAINER SIZE:</div>
                    <div class="size-selector">
                        <button class="size-btn ${activeSize === '1L' ? 'active' : ''}" onclick="selectProductSize('${prod.id}', '1L')">1 Litre</button>
                        <button class="size-btn ${activeSize === '4L' ? 'active' : ''}" onclick="selectProductSize('${prod.id}', '4L')">4 Litres</button>
                        <button class="size-btn ${activeSize === '20L' ? 'active' : ''}" onclick="selectProductSize('${prod.id}', '20L')">20 Litres</button>
                    </div>
                    <div class="price-display">
                        <span class="price-amount" id="price-val-${prod.id}">${formattedPrice}</span>
                        <span class="price-unit">per ${activeSize} pack</span>
                    </div>
                </div>

                <div class="product-actions">
                    <button class="btn btn-primary btn-sm" style="flex:1" onclick="addToQuoteCart('${prod.id}')">
                        <i class="fas fa-cart-plus"></i> Add to Quote
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function selectProductSize(productId, size) {
    window.ApexState.selectedProductSizes[productId] = size;
    renderProducts();
}

/* -------------------------------------------------------------------
 * 7. Paint Quantity & Cost Calculator
 * ------------------------------------------------------------------- */
function initPaintCalculator() {
    const select = document.getElementById('calcProductSelect');
    if (!select) return;
    select.innerHTML = '';

    APEX_PRODUCTS.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name} (${p.coverageSqmPerLitre} m²/L)`;
        select.appendChild(opt);
    });

    calculatePaintRequirements();
}

function calculatePaintRequirements() {
    const widthEl = document.getElementById('roomWidth');
    const lengthEl = document.getElementById('roomLength');
    const heightEl = document.getElementById('roomHeight');
    const doorsEl = document.getElementById('roomDoors');
    const windowsEl = document.getElementById('roomWindows');
    const coatsEl = document.getElementById('coatCount');
    const productEl = document.getElementById('calcProductSelect');

    if (!widthEl || !lengthEl || !heightEl || !productEl) return;

    const width = parseFloat(widthEl.value) || 0;
    const length = parseFloat(lengthEl.value) || 0;
    const height = parseFloat(heightEl.value) || 0;
    const doors = parseInt(doorsEl.value) || 0;
    const windows = parseInt(windowsEl.value) || 0;
    const coats = parseInt(coatsEl.value) || 2;
    const productId = productEl.value;

    const product = APEX_PRODUCTS.find(p => p.id === productId) || APEX_PRODUCTS[0];
    if (!product) return;

    const grossArea = 2 * (width + length) * height;
    const deductions = (doors * 1.8) + (windows * 1.5);
    const netArea = Math.max(0, grossArea - deductions);
    const totalCoverageArea = netArea * coats;
    const litresNeeded = Math.ceil(totalCoverageArea / product.coverageSqmPerLitre);

    let remainingLitres = litresNeeded;
    const tins20L = Math.floor(remainingLitres / 20);
    remainingLitres %= 20;

    const tins4L = Math.floor(remainingLitres / 4);
    remainingLitres %= 4;

    const tins1L = Math.ceil(remainingLitres / 1);

    const totalCostKES = (tins20L * product.prices['20L']) +
        (tins4L * product.prices['4L']) +
        (tins1L * product.prices['1L']);

    const litresOut = document.getElementById('calcLitresOutput');
    if (litresOut) litresOut.textContent = `${litresNeeded} L`;

    const areaOut = document.getElementById('calcAreaOutput');
    if (areaOut) areaOut.textContent = `${netArea.toFixed(1)} m² wall area`;

    const costOut = document.getElementById('calcCostOutput');
    if (costOut) costOut.textContent = formatPrice(totalCostKES);

    let breakdownStr = [];
    if (tins20L > 0) breakdownStr.push(`${tins20L} x 20L Bucket`);
    if (tins4L > 0) breakdownStr.push(`${tins4L} x 4L Tin`);
    if (tins1L > 0) breakdownStr.push(`${tins1L} x 1L Can`);
    if (breakdownStr.length === 0) breakdownStr.push("0 Tins required");

    const breakdownEl = document.getElementById('calcTinBreakdown');
    if (breakdownEl) breakdownEl.textContent = `Recommended tins: ${breakdownStr.join(', ')}`;
}

/* -------------------------------------------------------------------
 * 8. Instant Quote Cart & Drawer Engine
 * ------------------------------------------------------------------- */
function addToQuoteCart(productId) {
    const prod = APEX_PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const size = window.ApexState.selectedProductSizes[productId] || '4L';
    const priceKES = prod.prices[size];

    const existingIndex = window.ApexState.quoteCart.findIndex(item => item.id === productId && item.size === size);

    if (existingIndex > -1) {
        window.ApexState.quoteCart[existingIndex].qty += 1;
    } else {
        window.ApexState.quoteCart.push({
            id: prod.id,
            name: prod.name,
            size: size,
            priceKES: priceKES,
            qty: 1
        });
    }

    updateQuoteCartUI();
    showToast(`Added ${prod.name} (${size}) to quote estimation!`);
}

function removeFromQuoteCart(index) {
    window.ApexState.quoteCart.splice(index, 1);
    updateQuoteCartUI();
}

function updateQuoteCartUI() {
    const totalCount = window.ApexState.quoteCart.reduce((sum, i) => sum + i.qty, 0);
    const badge = document.getElementById('cartBadgeCount');
    if (badge) badge.textContent = totalCount;

    const cartList = document.getElementById('cartItemsList');
    if (!cartList) return;
    cartList.innerHTML = '';

    if (window.ApexState.quoteCart.length === 0) {
        cartList.innerHTML = `
            <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
                <i class="fas fa-file-invoice" style="font-size: 2.5rem; margin-bottom: 10px;"></i>
                <p>Your quotation list is empty.</p>
                <p style="font-size: 0.8rem;">Select paint items from the catalog above.</p>
            </div>
        `;
        const totalSumEl = document.getElementById('cartTotalSum');
        if (totalSumEl) totalSumEl.textContent = formatPrice(0);
        return;
    }

    let totalSumKES = 0;

    window.ApexState.quoteCart.forEach((item, index) => {
        const itemTotal = item.priceKES * item.qty;
        totalSumKES += itemTotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <p>Pack: ${item.size} • Qty: ${item.qty} × ${formatPrice(item.priceKES)}</p>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-weight: 700; color: var(--accent-teal);">${formatPrice(itemTotal)}</span>
                <i class="fas fa-trash-alt cart-item-remove" onclick="removeFromQuoteCart(${index})"></i>
            </div>
        `;
        cartList.appendChild(div);
    });

    const totalSumEl = document.getElementById('cartTotalSum');
    if (totalSumEl) totalSumEl.textContent = formatPrice(totalSumKES);
}

/* -------------------------------------------------------------------
 * 9. Event Listeners & UI Helpers
 * ------------------------------------------------------------------- */
function initEventListeners() {
    const currencySelect = document.getElementById('currencySelect');
    if (currencySelect) {
        currencySelect.addEventListener('change', function () {
            window.ApexState.currency = this.value;
            renderProducts();
            updateQuoteCartUI();
            calculatePaintRequirements();
        });
    }

    document.querySelectorAll('.color-filters .filter-chip').forEach(chip => {
        chip.addEventListener('click', function () {
            document.querySelectorAll('.color-filters .filter-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            window.ApexState.activeColorCategory = this.getAttribute('data-cat');
            renderColorChips();
        });
    });

    document.querySelectorAll('.product-cat-filters .filter-chip').forEach(chip => {
        chip.addEventListener('click', function () {
            document.querySelectorAll('.product-cat-filters .filter-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            window.ApexState.activeProductCategory = this.getAttribute('data-cat');
            renderProducts();
        });
    });

    const searchInput = document.getElementById('productSearchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function () {
            window.ApexState.searchTerm = this.value;
            renderProducts();
        });
    }

    const calcForm = document.getElementById('calcForm');
    if (calcForm) {
        calcForm.addEventListener('input', calculatePaintRequirements);
        calcForm.addEventListener('change', calculatePaintRequirements);
    }

    document.querySelectorAll('.light-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.light-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            window.ApexState.selectedLightMode = this.getAttribute('data-light');
            applyColorToVisualizer(window.ApexState.selectedColor);
        });
    });

    const cartTriggerBtn = document.getElementById('cartTriggerBtn');
    const cartDrawerClose = document.getElementById('cartDrawerClose');
    const overlay = document.getElementById('quoteModalOverlay');

    if (cartTriggerBtn && overlay) {
        cartTriggerBtn.addEventListener('click', function () {
            overlay.classList.toggle('active');
        });
    }
    if (cartDrawerClose && overlay) {
        cartDrawerClose.addEventListener('click', function () {
            overlay.classList.remove('active');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }

    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
}

function formatPrice(amountKES) {
    if (window.ApexState.currency === 'USD') {
        const usd = amountKES / window.ApexState.usdExchangeRate;
        return `$${usd.toFixed(2)}`;
    }
    return `KES ${amountKES.toLocaleString()}`;
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fas fa-check-circle" style="color: var(--accent-gold); font-size: 1.2rem;"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s ease';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function submitQuoteInquiry() {
    if (window.ApexState.quoteCart.length === 0) {
        showToast("Please add items to your quotation first.");
        return;
    }
    showToast("Official Quotation request sent! An Apex specialist will contact you shortly.");
    window.ApexState.quoteCart = [];
    updateQuoteCartUI();
    const overlay = document.getElementById('quoteModalOverlay');
    if (overlay) overlay.classList.remove('active');
}
