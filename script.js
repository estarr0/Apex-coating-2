// ============================================================
// DATA — PRODUCTS + SHADES (BS 4800)
// ============================================================

const products = [
    // ---- PREMIER COAT ----
    { id: 'premier-covermatt-20', name: 'Covermatt', size: '20L', price: 4000, cat: 'premier', img: 'premier-covermatt-20' },
    { id: 'premier-covermatt-10', name: 'Covermatt', size: '10L', price: 2300, cat: 'premier', img: 'placeholder' },
    { id: 'premier-covermatt-4', name: 'Covermatt', size: '4L', price: 1030, cat: 'premier', img: 'premier-covermatt-4' },
    { id: 'premier-vinylmatt-20', name: 'Vinyl Matt Emulsion', size: '20L', price: 8600, cat: 'premier', img: 'premier-vinylmatt-20' },
    { id: 'premier-vinylmatt-10', name: 'Vinyl Matt Emulsion', size: '10L', price: 4700, cat: 'premier', img: 'placeholder' },
    { id: 'premier-vinylmatt-4', name: 'Vinyl Matt Emulsion', size: '4L', price: 1900, cat: 'premier', img: 'placeholder' },
    { id: 'premier-vinylmatt-1', name: 'Vinyl Matt Emulsion', size: '1L', price: 550, cat: 'premier', img: 'placeholder' },
    { id: 'premier-silk-20', name: 'Silk Vinyl Wallsheen', size: '20L', price: 10000, cat: 'premier', img: 'premier-silk-20' },
    { id: 'premier-silk-10', name: 'Silk Vinyl Wallsheen', size: '10L', price: 5500, cat: 'premier', img: 'placeholder' },
    { id: 'premier-silk-4', name: 'Silk Vinyl Wallsheen', size: '4L', price: 2100, cat: 'premier', img: 'premier-silk-4' },
    { id: 'premier-silk-1', name: 'Silk Vinyl Wallsheen', size: '1L', price: 650, cat: 'premier', img: 'premier-silk-1' },
    { id: 'premier-silicone-20', name: 'Silicone Weathershield', size: '20L', price: 10000, cat: 'premier', img: 'premier-silicone-20' },
    { id: 'premier-silicone-10', name: 'Silicone Weathershield', size: '10L', price: 5000, cat: 'premier', img: 'placeholder' },
    { id: 'premier-silicone-4', name: 'Silicone Weathershield', size: '4L', price: 2100, cat: 'premier', img: 'placeholder' },
    { id: 'premier-silicone-1', name: 'Silicone Weathershield', size: '1L', price: 650, cat: 'premier', img: 'placeholder' },
    { id: 'premier-supergloss-20', name: 'Supergloss', size: '20L', price: 10500, cat: 'premier', img: 'premier-supergloss-20' },
    { id: 'premier-supergloss-10', name: 'Supergloss', size: '10L', price: 5500, cat: 'premier', img: 'placeholder' },
    { id: 'premier-supergloss-4', name: 'Supergloss', size: '4L', price: 2250, cat: 'premier', img: 'placeholder' },

    // ---- TEXSTAR COAT ----
    { id: 'texstar-emulsion-20', name: 'Texstar Emulsion', size: '20L', price: 2200, cat: 'texstar', img: 'placeholder' },
    { id: 'texstar-emulsion-10', name: 'Texstar Emulsion', size: '10L', price: 1500, cat: 'texstar', img: 'texstar-emulsion-10' },
    { id: 'texstar-emulsion-4', name: 'Texstar Emulsion', size: '4L', price: 850, cat: 'texstar', img: 'texstar-emulsion-4' },
    { id: 'texstar-emulsion-1', name: 'Texstar Emulsion', size: '1L', price: 390, cat: 'texstar', img: 'placeholder' },
    { id: 'texstar-plastic-20', name: 'Plastic Emulsion', size: '20L', price: 1500, cat: 'texstar', img: 'texstar-plastic-20' },
    { id: 'texstar-plastic-10', name: 'Plastic Emulsion', size: '10L', price: 850, cat: 'texstar', img: 'texstar-plastic-10' },
    { id: 'texstar-plastic-4', name: 'Plastic Emulsion', size: '4L', price: 390, cat: 'texstar', img: 'texstar-plastic-4' },
    { id: 'texstar-plastic-1', name: 'Plastic Emulsion', size: '1L', price: 140, cat: 'texstar', img: 'placeholder' },
    { id: 'texstar-gloss-20', name: 'Gloss Enamel', size: '20L', price: 4500, cat: 'texstar', img: 'placeholder' },
    { id: 'texstar-gloss-4', name: 'Gloss Enamel', size: '4L', price: 900, cat: 'texstar', img: 'texstar-gloss-4' },
    { id: 'texstar-gloss-1', name: 'Gloss Enamel', size: '1L', price: 300, cat: 'texstar', img: 'texstar-gloss-1' },
    { id: 'texstar-varnish-4', name: 'Varnish', size: '4L', price: 1300, cat: 'texstar', img: 'texstar-varnish-4' },
    { id: 'texstar-silver-20', name: 'Silver Aluminium', size: '20L', price: 6800, cat: 'texstar', img: 'texstar-silver-20' },
    { id: 'texstar-silver-4', name: 'Silver Aluminium', size: '4L', price: 1650, cat: 'texstar', img: 'texstar-silver-4' },

    // ---- INDUSTRIAL ----
    { id: 'ind-epoxy-4', name: '2-Pack Epoxy Paint', size: '4L', price: 2700, cat: 'industrial', img: 'ind-epoxy-4' },
    { id: 'ind-chlorinated-4', name: 'Chlorinated Rubber Paint', size: '4L', price: 2700, cat: 'industrial', img: 'ind-chlorinated-4' },
    { id: 'ind-bituminous-4', name: 'Bituminous Black', size: '4L', price: 1400, cat: 'industrial', img: 'ind-bituminous-4' },
    { id: 'ind-fastdry-4', name: 'Fast Dry White/Black', size: '4L', price: 3000, cat: 'industrial', img: 'ind-fastdry-4' },

    // ---- SERAFRIC GLUES ----
    { id: 'serafric-101-5', name: 'Serafric 101 Contact Cement', size: '5L', price: 2000, cat: 'serafric', img: 'serafric-101-5' },
    { id: 'serafric-101-1', name: 'Serafric 101 Contact Cement', size: '1L', price: 440, cat: 'serafric', img: 'placeholder' },
    { id: 'serafric-202-1', name: 'Serafric 202 PVC Adhesive', size: '1L', price: 630, cat: 'serafric', img: 'serafric-202-1' },
    { id: 'serafric-202-05', name: 'Serafric 202 PVC Adhesive', size: '½L', price: 360, cat: 'serafric', img: 'serafric-202-05' },
    { id: 'serafric-103-5', name: 'Serafric 103 Leather Glue', size: '5L', price: 2000, cat: 'serafric', img: 'serafric-103-5' },
    { id: 'serafric-199-05', name: 'Serafric 199 Wood Glue', size: '500g', price: 250, cat: 'serafric', img: 'serafric-199-05' },

    // ---- THINNERS ----
    { id: 'thin-turpentine-5', name: 'Turpentine', size: '5L', price: 1300, cat: 'thinners', img: 'thin-turpentine-5' },
    { id: 'thin-turpentine-4', name: 'Turpentine', size: '4L', price: 1200, cat: 'thinners', img: 'thin-turpentine-4' },
    { id: 'thin-turpentine-1', name: 'Turpentine', size: '1L', price: 300, cat: 'thinners', img: 'thin-turpentine-1' },
    { id: 'thin-standard-5', name: 'Standard Thinner', size: '5L', price: 1300, cat: 'thinners', img: 'thin-standard-5' },
    { id: 'thin-special-5', name: 'Special White Spirit', size: '5L', price: 1400, cat: 'thinners', img: 'thin-special-5' },
    { id: 'thin-special-1', name: 'Special White Spirit', size: '1L', price: 350, cat: 'thinners', img: 'thin-special-1' },
];

// --- BS 4800 Shades (sample) ---
const shadeFamilies = [
    { name: 'Red', shades: [{ name: 'Rosso', hex: '#C4293A' }, { name: 'Brick', hex: '#B5342A' }] },
    { name: 'Blue', shades: [{ name: 'Cornflower', hex: '#1F5FA8' }, { name: 'Capri', hex: '#1B7A8C' }] },
    { name: 'Green', shades: [{ name: 'Emerald', hex: '#1A8C55' }, { name: 'Sage', hex: '#B7C89E' }] },
    { name: 'Yellow', shades: [{ name: 'Golden Sun', hex: '#F0CB53' }, { name: 'Mustard', hex: '#C99A3E' }] },
    { name: 'Neutral', shades: [{ name: 'Soft White', hex: '#F5F1E7' }, { name: 'Ivory', hex: '#F0E6C9' }] },
    { name: 'Grey', shades: [{ name: 'Steel', hex: '#7E8A8C' }, { name: 'Pebble', hex: '#C6C9C3' }] },
];
const shades = shadeFamilies.flatMap(f => f.shades.map(s => ({ ...s, family: f.name })));

// ============================================================
// STATE
// ============================================================
let cart = [];
let currentCategory = 'all';

// ============================================================
// DOM REFS
// ============================================================
const grid = document.getElementById('productGrid');
const shadeGrid = document.getElementById('shadeGrid');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartOverlay = document.getElementById('cartOverlay');

// ============================================================
// HELPERS
// ============================================================
function getImage(product) {
    if (product.img && product.img !== 'placeholder') {
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f5f0ea'/%3E%3Ctext x='20' y='100' font-family='Inter' font-size='16' fill='%231B2A3D'%3E${product.name}%3C/text%3E%3Ctext x='20' y='130' font-family='Inter' font-size='12' fill='%23666'%3E${product.size}%3C/text%3E%3C/svg%3E`;
    }
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e8e3dc'/%3E%3Ctext x='30' y='90' font-family='Inter' font-size='16' fill='%231B2A3D'%3E${product.name}%3C/text%3E%3Ctext x='30' y='120' font-family='Inter' font-size='12' fill='%23666'%3E${product.size}%3C/text%3E%3Ctext x='30' y='150' font-family='Inter' font-size='10' fill='%23999'%3E(Image coming soon)%3C/text%3E%3C/svg%3E`;
}

function renderProducts() {
    const filtered = currentCategory === 'all' ? products : products.filter(p => p.cat === currentCategory);
    grid.innerHTML = filtered.map(p => `
        <div class="product-card" data-id="${p.id}">
            <div class="image-wrap">
                <img src="${getImage(p)}" alt="${p.name} ${p.size}" loading="lazy">
            </div>
            <div class="info">
                <div class="name">${p.name}</div>
                <div class="size">${p.size}</div>
                <div class="price">KES ${p.price.toLocaleString()}</div>
                <div class="actions">
                    <select data-id="${p.id}" data-size="${p.size}" data-price="${p.price}" data-name="${p.name}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                    <button class="add-btn" data-id="${p.id}">+ Add</button>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.product-card');
            const id = card.dataset.id;
            const product = products.find(p => p.id === id);
            if (!product) return;
            const qty = parseInt(card.querySelector('select').value) || 1;
            const existing = cart.find(item => item.id === id);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ ...product, qty });
            }
            updateCartUI();
        });
    });
}

function renderShades() {
    shadeGrid.innerHTML = shades.map(s => `
        <div class="shade-item">
            <div class="swatch" style="background:${s.hex};"></div>
            <div class="name">${s.name}</div>
            <div class="code">${s.hex}</div>
            <div style="font-size:0.6rem; opacity:0.4;">${s.family}</div>
        </div>
    `).join('');
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = count;
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartTotal.textContent = `Total: KES ${total.toLocaleString()}`;

    if (cart.length === 0) {
        cartItems.innerHTML = '<li style="opacity:0.5; text-align:center; padding:1rem 0;">Your cart is empty.</li>';
        return;
    }
    cartItems.innerHTML = cart.map(item => `
        <li>
            <span>${item.name} (${item.size}) × ${item.qty}</span>
            <span>KES ${(item.price * item.qty).toLocaleString()} 
                <span class="remove" data-id="${item.id}">✕</span>
            </span>
        </li>
    `).join('');

    document.querySelectorAll('.cart-items .remove').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.dataset.id;
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
        });
    });
}

// ============================================================
// CART TOGGLE
// ============================================================
document.getElementById('cartToggle').addEventListener('click', () => {
    cartOverlay.classList.toggle('open');
});
document.getElementById('cartClose').addEventListener('click', () => {
    cartOverlay.classList.remove('open');
});
cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) cartOverlay.classList.remove('open');
});

// ============================================================
// CHECKOUT
// ============================================================
function buildMessage() {
    if (cart.length === 0) return 'No items in cart.';
    const lines = cart.map(item => `${item.name} (${item.size}) × ${item.qty} = KES ${(item.price * item.qty).toLocaleString()}`);
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    return `Apex Coating Quote:\n${lines.join('\n')}\n\nTotal: KES ${total.toLocaleString()}\n\nPlease confirm availability.`;
}

document.getElementById('checkoutWA').addEventListener('click', () => {
    if (cart.length === 0) return alert('Cart is empty.');
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/254722252134?text=${msg}`, '_blank');
});

document.getElementById('checkoutEmail').addEventListener('click', () => {
    if (cart.length === 0) return alert('Cart is empty.');
    const subject = 'Quote Request – Apex Coating';
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:apex@apexcoating.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});

// ============================================================
// CATEGORY TABS
// ============================================================
document.querySelectorAll('#categoryTabs button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#categoryTabs button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.cat;
        renderProducts();
    });
});

// ============================================================
// INIT
// ============================================================
renderProducts();
renderShades();
updateCartUI();