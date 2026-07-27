/* 
 * Apex Coating East Africa Ltd - Master JavaScript Logic
 * Features: Currency Conversion, BS 4800 Color Visualizer, Product Search & Price List,
 * Paint Quantity Calculator, Instant Quote Cart Drawer, and Owl Carousel.
 */

// Application State
const state = {
    currency: 'KES', // 'KES' or 'USD'
    usdExchangeRate: 130, // 1 USD = 130 KES
    selectedColor: BS4800_COLORS[0],
    selectedRoom: 'living',
    selectedLightMode: 'daylight',
    activeColorCategory: 'all',
    activeProductCategory: 'all',
    searchTerm: '',
    quoteCart: [],
    selectedProductSizes: {} // productId -> size string ('1L', '4L', '20L')
};

// Initialize app when DOM is ready
$(document).ready(function () {
    initOwlCarousel();
    initColorVisualizer();
    initProductsCatalog();
    initPaintCalculator();
    initEventListeners();
    updateQuoteCartUI();
});

/* -------------------------------------------------------------------
 * Owl Carousel Setup & Fallback
 * ------------------------------------------------------------------- */
function initOwlCarousel() {
    if ($.fn.owlCarousel) {
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

        $('.products-owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1024: { items: 3 }
            }
        });
    }
}

/* -------------------------------------------------------------------
 * BS 4800 Color Visualizer Engine
 * ------------------------------------------------------------------- */
function initColorVisualizer() {
    renderColorChips();
    applyColorToVisualizer(state.selectedColor);
}

function renderColorChips() {
    const $grid = $('#colorsGrid');
    $grid.empty();

    const filtered = state.activeColorCategory === 'all'
        ? BS4800_COLORS
        : BS4800_COLORS.filter(c => c.category === state.activeColorCategory);

    filtered.forEach(color => {
        const isActive = color.code === state.selectedColor.code ? 'active' : '';
        const chipHtml = `
            <div class="color-card ${isActive}" data-code="${color.code}">
                <div class="color-card-chip" style="background-color: ${color.hex}"></div>
                <div class="color-card-code">BS ${color.code}</div>
                <div class="color-card-name">${color.name}</div>
            </div>
        `;
        $grid.append(chipHtml);
    });

    // Color click handler
    $('.color-card').on('click', function () {
        const code = $(this).data('code');
        const color = BS4800_COLORS.find(c => c.code === code);
        if (color) {
            state.selectedColor = color;
            $('.color-card').removeClass('active');
            $(this).addClass('active');
            applyColorToVisualizer(color);
        }
    });
}

function applyColorToVisualizer(color) {
    // Update wall background color with smooth transition
    $('#roomWallBg').css('background-color', color.hex);

    // Apply lighting overlays
    const $overlay = $('#roomFurnitureOverlay');
    if (state.selectedLightMode === 'warm') {
        $overlay.css('filter', 'brightness(0.95) sepia(0.25) saturate(1.2)');
    } else if (state.selectedLightMode === 'cool') {
        $overlay.css('filter', 'brightness(1.05) hue-rotate(15deg) saturate(0.9)');
    } else {
        $overlay.css('filter', 'brightness(1) saturate(1)');
    }

    // Update Meta text
    $('#selectedSwatch').css('background-color', color.hex);
    $('#selectedColorCode').text(`BS ${color.code}`);
    $('#selectedColorName').text(color.name);
    $('#selectedColorDesc').text(color.description);

    // Render finish badges
    const finishBadgesHtml = color.finishes.map(f => `<span class="badge badge-navy">${f}</span>`).join(' ');
    $('#selectedColorFinishes').html(finishBadgesHtml);

    // Recommended Rooms
    const recRooms = color.recommended.join(' • ');
    $('#selectedColorRooms').text(`Best Suited: ${recRooms}`);
}

/* -------------------------------------------------------------------
 * Products & Official Price List Catalog
 * ------------------------------------------------------------------- */
function initProductsCatalog() {
    // Default size per product is '4L'
    APEX_PRODUCTS.forEach(p => {
        state.selectedProductSizes[p.id] = '4L';
    });
    renderProducts();
}

function renderProducts() {
    const $grid = $('#productsGrid');
    $grid.empty();

    let list = APEX_PRODUCTS;

    // Filter by Category
    if (state.activeProductCategory !== 'all') {
        list = list.filter(p => p.category === state.activeProductCategory);
    }

    // Filter by Search Input
    if (state.searchTerm.trim() !== '') {
        const query = state.searchTerm.toLowerCase();
        list = list.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.catName.toLowerCase().includes(query)
        );
    }

    if (list.length === 0) {
        $grid.html(`
            <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; background: #FFF; border-radius: 12px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 15px;"></i>
                <h3>No Paint Products Found</h3>
                <p style="color: var(--text-muted);">Try adjusting your category filter or search term.</p>
            </div>
        `);
        return;
    }

    list.forEach(prod => {
        const activeSize = state.selectedProductSizes[prod.id] || '4L';
        const priceKES = prod.prices[activeSize];
        const formattedPrice = formatPrice(priceKES);

        const bsBadge = prod.bs4800Compatible
            ? `<span class="badge badge-gold" title="Available in all BS 4800 colors"><i class="fas fa-palette"></i> BS 4800 Tinting</span>`
            : `<span class="badge badge-teal">Base Coating</span>`;

        const cardHtml = `
            <div class="product-card" data-id="${prod.id}">
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
            </div>
        `;
        $grid.append(cardHtml);
    });
}

function selectProductSize(productId, size) {
    state.selectedProductSizes[productId] = size;
    renderProducts();
}

/* -------------------------------------------------------------------
 * Paint Quantity & Cost Calculator
 * ------------------------------------------------------------------- */
function initPaintCalculator() {
    // Populate Paint Product Select
    const $select = $('#calcProductSelect');
    $select.empty();
    APEX_PRODUCTS.forEach(p => {
        $select.append(`<option value="${p.id}">${p.name} (${p.coverageSqmPerLitre} m²/L)</option>`);
    });

    calculatePaintRequirements();
}

function calculatePaintRequirements() {
    const width = parseFloat($('#roomWidth').val()) || 0;
    const length = parseFloat($('#roomLength').val()) || 0;
    const height = parseFloat($('#roomHeight').val()) || 0;
    const doors = parseInt($('#roomDoors').val()) || 0;
    const windows = parseInt($('#roomWindows').val()) || 0;
    const coats = parseInt($('#coatCount').val()) || 2;
    const productId = $('#calcProductSelect').val();

    const product = APEX_PRODUCTS.find(p => p.id === productId) || APEX_PRODUCTS[0];

    // Gross Wall Area = 2 * (W + L) * H
    const grossArea = 2 * (width + length) * height;

    // Deduct openings: Door = 1.8 sqm, Window = 1.5 sqm
    const deductions = (doors * 1.8) + (windows * 1.5);
    const netArea = Math.max(0, grossArea - deductions);

    // Total coverage area needed = netArea * coats
    const totalCoverageArea = netArea * coats;

    // Litres required = totalCoverageArea / coverageRate
    const litresNeeded = Math.ceil(totalCoverageArea / product.coverageSqmPerLitre);

    // Calculate Tin Breakdown (20L, 4L, 1L)
    let remainingLitres = litresNeeded;
    const tins20L = Math.floor(remainingLitres / 20);
    remainingLitres %= 20;

    const tins4L = Math.floor(remainingLitres / 4);
    remainingLitres %= 4;

    const tins1L = Math.ceil(remainingLitres / 1);

    // Total Cost
    const totalCostKES = (tins20L * product.prices['20L']) +
        (tins4L * product.prices['4L']) +
        (tins1L * product.prices['1L']);

    // Update UI
    $('#calcLitresOutput').text(`${litresNeeded} L`);
    $('#calcAreaOutput').text(`${netArea.toFixed(1)} m² wall area`);
    $('#calcCostOutput').text(formatPrice(totalCostKES));

    let breakdownStr = [];
    if (tins20L > 0) breakdownStr.push(`${tins20L} x 20L Bucket`);
    if (tins4L > 0) breakdownStr.push(`${tins4L} x 4L Tin`);
    if (tins1L > 0) breakdownStr.push(`${tins1L} x 1L Can`);
    if (breakdownStr.length === 0) breakdownStr.push("0 Tins required");

    $('#calcTinBreakdown').text(`Recommended tins: ${breakdownStr.join(', ')}`);
}

/* -------------------------------------------------------------------
 * Instant Quote Cart Logic & Drawer
 * ------------------------------------------------------------------- */
function addToQuoteCart(productId) {
    const prod = APEX_PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const size = state.selectedProductSizes[productId] || '4L';
    const priceKES = prod.prices[size];

    const existingIndex = state.quoteCart.findIndex(item => item.id === productId && item.size === size);

    if (existingIndex > -1) {
        state.quoteCart[existingIndex].qty += 1;
    } else {
        state.quoteCart.push({
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
    state.quoteCart.splice(index, 1);
    updateQuoteCartUI();
}

function updateQuoteCartUI() {
    const totalCount = state.quoteCart.reduce((sum, i) => sum + i.qty, 0);
    $('#cartBadgeCount').text(totalCount);

    const $cartList = $('#cartItemsList');
    $cartList.empty();

    if (state.quoteCart.length === 0) {
        $cartList.html(`
            <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
                <i class="fas fa-file-invoice" style="font-size: 2.5rem; margin-bottom: 10px;"></i>
                <p>Your quotation list is empty.</p>
                <p style="font-size: 0.8rem;">Select paint items from the catalog above.</p>
            </div>
        `);
        $('#cartTotalSum').text(formatPrice(0));
        return;
    }

    let totalSumKES = 0;

    state.quoteCart.forEach((item, index) => {
        const itemTotal = item.priceKES * item.qty;
        totalSumKES += itemTotal;

        const itemHtml = `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <p>Pack: ${item.size} • Qty: ${item.qty} × ${formatPrice(item.priceKES)}</p>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-weight: 700; color: var(--accent-teal);">${formatPrice(itemTotal)}</span>
                    <i class="fas fa-trash-alt cart-item-remove" onclick="removeFromQuoteCart(${index})"></i>
                </div>
            </div>
        `;
        $cartList.append(itemHtml);
    });

    $('#cartTotalSum').text(formatPrice(totalSumKES));
}

/* -------------------------------------------------------------------
 * Event Listeners & Currency Helpers
 * ------------------------------------------------------------------- */
function initEventListeners() {
    // Currency Switcher
    $('#currencySelect').on('change', function () {
        state.currency = $(this).val();
        renderProducts();
        updateQuoteCartUI();
        calculatePaintRequirements();
    });

    // BS 4800 Color Category Filter Chips
    $('.color-filters .filter-chip').on('click', function () {
        $('.color-filters .filter-chip').removeClass('active');
        $(this).addClass('active');
        state.activeColorCategory = $(this).data('cat');
        renderColorChips();
    });

    // Product Category Filter Chips
    $('.product-cat-filters .filter-chip').on('click', function () {
        $('.product-cat-filters .filter-chip').removeClass('active');
        $(this).addClass('active');
        state.activeProductCategory = $(this).data('cat');
        renderProducts();
    });

    // Product Search Input
    $('#productSearchInput').on('keyup', function () {
        state.searchTerm = $(this).val();
        renderProducts();
    });

    // Calculator inputs triggers
    $('#calcForm input, #calcForm select').on('input change', function () {
        calculatePaintRequirements();
    });

    // Room Visualizer Lighting buttons
    $('.light-btn').on('click', function () {
        $('.light-btn').removeClass('active');
        $(this).addClass('active');
        state.selectedLightMode = $(this).data('light');
        applyColorToVisualizer(state.selectedColor);
    });

    // Cart Drawer Toggle
    $('#cartTriggerBtn, #cartDrawerClose').on('click', function () {
        $('#quoteModalOverlay').toggleClass('active');
    });

    $('#quoteModalOverlay').on('click', function (e) {
        if (e.target === this) {
            $(this).removeClass('active');
        }
    });

    // Mobile Navbar Drawer Toggle
    $('#mobileToggle').on('click', function () {
        $('#navLinks').toggleClass('active');
    });
}

function formatPrice(amountKES) {
    if (state.currency === 'USD') {
        const usd = amountKES / state.usdExchangeRate;
        return `$${usd.toFixed(2)}`;
    }
    return `KES ${amountKES.toLocaleString()}`;
}

function showToast(message) {
    const toast = $(`
        <div class="toast">
            <i class="fas fa-check-circle" style="color: var(--accent-gold); font-size: 1.2rem;"></i>
            <span>${message}</span>
        </div>
    `);
    $('#toastContainer').append(toast);
    setTimeout(() => {
        toast.fadeOut(400, function () { $(this).remove(); });
    }, 3000);
}

function submitQuoteInquiry() {
    if (state.quoteCart.length === 0) {
        showToast("Please add items to your quotation first.");
        return;
    }
    showToast("Official Quotation request sent! An Apex specialist will contact you shortly.");
    state.quoteCart = [];
    updateQuoteCartUI();
    $('#quoteModalOverlay').removeClass('active');
}
