/* ================= COLOUR DATA ================= */
const GROUPS = [
  { id: "neutral", label: "Whites & Neutrals", swatch: "#F2ECDA", shades: [
    { name: "Soft White", hex: "#F5F1E7", code: "10 B 15" }, { name: "Ivory", hex: "#F0E6C9", code: "10 C 31" },
    { name: "Magnolia", hex: "#F2E9CE", code: "08 B 15" }, { name: "Buttermilk", hex: "#F2E2B8", code: "08 C 31" },
    { name: "Vellum", hex: "#EDE4C8", code: "08 B 17" }, { name: "Full Moon", hex: "#F5F0DD" },
    { name: "Porcelain Bowl", hex: "#F3EFD9" }, { name: "Antique Cream", hex: "#EDE0BE" }
  ]},
  { id: "yellow", label: "Yellow", swatch: "#F0CB53", shades: [
    { name: "Mustard", hex: "#C99A3E", code: "10 C 35" }, { name: "Jasmine", hex: "#F2E27A", code: "10 E 49" },
    { name: "Just Yellow", hex: "#F2CB2B", code: "10 E 50" }, { name: "African Gold", hex: "#C08A2E", code: "10 D 45" }
  ]},
  { id: "blue", label: "Blue", swatch: "#1F5FA8", shades: [
    { name: "Billberry", hex: "#5E6FB0", code: "22 C 37" }, { name: "Northern Sky", hex: "#5F92AC", code: "18 C 35" },
    { name: "Zircon", hex: "#A9CBD4", code: "16 C 33" }, { name: "Aqua", hex: "#4FA6A0", code: "14 C 35" },
    { name: "Cornflower", hex: "#1F5FA8", code: "18 E 53" }, { name: "True Blue", hex: "#1E6FBF", code: "20 E 51" }
  ]},
  { id: "green", label: "Green", swatch: "#1F8A4C", shades: [
    { name: "Emerald", hex: "#1A8C55", code: "14 E 53" }, { name: "Sage", hex: "#B7C89E", code: "12 B 17" },
    { name: "Willow", hex: "#A9C97E", code: "12 C 33" }, { name: "Safaricom Green", hex: "#3FAA35" }
  ]}
];

const CATALOGUE = [
  { id: "matt", name: "Acrylic Emulsion (Vinyl Matt)", tag: "Exterior", category: "Emulsion & Water-Based Paints", tintable: true,
    blurb: "Superior architectural paint on durable acrylic resin. Alkali-resistant.",
    prices: { "1/2L": 260, "1L": 550, "4L": 1900, "10L": 4700, "20L": 8600 } },
  { id: "silk", name: "Vinyl Wallsheen (Silk)", tag: "Interior", category: "Emulsion & Water-Based Paints", tintable: true,
    blurb: "High-performance interior paint, cool satin finish, high wet-scrub resistance.",
    prices: { "1/2L": 350, "1L": 650, "4L": 2100, "10L": 5500, "20L": 10000 } },
  { id: "supergloss", name: "Supergloss", tag: "High gloss", category: "Oil-Based Paints", tintable: true,
    blurb: "Oil-modified alkyd enamel. Long-lasting, easy-clean coat for wood and metal.",
    prices: { "1/2L": 330, "1L": 650, "4L": 2250, "10L": 5500, "20L": 10500 } }
];

const SIZE_ORDER = ["1/4L", "1/2L", "1L", "4L", "10L", "20L"];

/* ================= STATE ================= */
let picks = [];
let openGroupId = null;
let mixQty = 1;

/* ================= HELPERS ================= */
function hexToRgb(hex) {
  const v = hex.replace("#", "");
  return [parseInt(v.substr(0,2),16), parseInt(v.substr(2,2),16), parseInt(v.substr(4,2),16)];
}
function rgbToHex([r,g,b]) {
  return "#" + [r,g,b].map(x => Math.round(x).toString(16).padStart(2,"0")).join("");
}
function blendHexes(hexes) {
  if (hexes.length === 0) return "#FDF3E7";
  const sum = hexes.reduce((acc,h) => {
    const [r,g,b] = hexToRgb(h);
    return [acc[0]+r, acc[1]+g, acc[2]+b];
  }, [0,0,0]);
  return rgbToHex(sum.map(v => v / hexes.length));
}
function fmt(n) { return "KES " + n.toLocaleString(); }
function productById(id) { return CATALOGUE.find(p => p.id === id); }

/* ================= DOCUMENT READY ================= */
$(document).ready(function() {
  
  // Initialize Owl Carousel
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    dots: true
  });

  renderGroups();
  populateMixerProducts();
  renderCatalogue();
  renderMixer();

  // Navigation Handlers
  const pageSections = document.querySelectorAll("main [data-page]");
  const navButtons = document.querySelectorAll(".nav-btn[data-page], [data-go]");

  function showPage(pageName) {
    pageSections.forEach(sec => { sec.hidden = sec.dataset.page !== pageName; });
    document.querySelectorAll(".nav-btn[data-page]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.page === pageName);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.page || btn.dataset.go;
      if (target) showPage(target);
    });
  });

  // Dark / Light Theme Toggle
  $("#themeToggle").on("click", function() {
    $("body").toggleClass("dark");
  });
});

/* ================= GROUP & SHADE RENDERING ================= */
function renderGroups() {
  const groupGrid = document.getElementById("groupGrid");
  groupGrid.innerHTML = "";
  GROUPS.forEach(g => {
    const tile = document.createElement("button");
    tile.className = "group-tile" + (openGroupId === g.id ? " active" : "");
    tile.innerHTML = `
      <div class="swatch" style="background:${g.swatch}"></div>
      <div class="label"><p>${g.label}</p><p>${g.shades.length} shades</p></div>
    `;
    tile.addEventListener("click", () => {
      openGroupId = openGroupId === g.id ? null : g.id;
      renderGroups();
      renderShadePanel();
    });
    groupGrid.appendChild(tile);
  });
}

function renderShadePanel() {
  const shadePanel = document.getElementById("shadePanel");
  const group = GROUPS.find(g => g.id === openGroupId);
  if (!group) { shadePanel.hidden = true; shadePanel.innerHTML = ""; return; }
  
  shadePanel.hidden = false;
  const isFull = picks.length >= 5;
  
  shadePanel.innerHTML = `
    <div class="shade-panel-header">
      <h3>${group.label} Shades</h3>
      <button id="closeShadePanel">✕</button>
    </div>
    <div class="shade-grid">
      ${group.shades.map(s => {
        const picked = picks.some(p => p.name === s.name);
        const disabled = !picked && isFull;
        return `
          <div class="shade-card">
            <div class="swatch" style="background:${s.hex}"></div>
            <div class="info">
              <p>${s.name}</p>
              ${s.code ? `<p class="shade-code">${s.code}</p>` : ""}
              <button data-shade="${s.name}" class="${picked ? "added" : disabled ? "disabled" : ""}" ${disabled ? "disabled" : ""}>
                ${picked ? "✓ Added" : "+ Add to mix"}
              </button>
            </div>
          </div>`;
      }).join("")}
    </div>
  `;

  $("#closeShadePanel").on("click", () => {
    openGroupId = null; renderGroups(); renderShadePanel();
  });

  shadePanel.querySelectorAll("[data-shade]").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.shade;
      const shade = group.shades.find(s => s.name === name);
      const already = picks.some(p => p.name === name);
      if (already) {
        picks = picks.filter(p => p.name !== name);
      } else if (picks.length < 5) {
        picks.push(shade);
      }
      renderShadePanel();
      renderMixer();
    });
  });
}

/* ================= TINT MIXER LOGIC ================= */
function populateMixerProducts() {
  const productSelect = document.getElementById("productSelect");
  productSelect.innerHTML = "";
  CATALOGUE.filter(p => p.tintable).forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name;
    productSelect.appendChild(opt);
  });
  populateSizes();
  
  $(productSelect).on("change", () => {
    populateSizes();
    updatePrice();
  });
  
  $("#sizeSelect").on("change", updatePrice);
  
  $("#qtyMinus").on("click", () => {
    if (mixQty > 1) { mixQty--; $("#qtyValue").text(mixQty); updatePrice(); }
  });
  
  $("#qtyPlus").on("click", () => {
    mixQty++; $("#qtyValue").text(mixQty); updatePrice();
  });

  $("#clearMixBtn").on("click", () => {
    picks = [];
    renderShadePanel();
    renderMixer();
  });
}

function populateSizes() {
  const product = productById($("#productSelect").val());
  const sizeSelect = document.getElementById("sizeSelect");
  const available = SIZE_ORDER.filter(s => product.prices[s] !== undefined);
  sizeSelect.innerHTML = available.map(s => `<option value="${s}">${s}</option>`).join("");
}

function updatePrice() {
  const product = productById($("#productSelect").val());
  const size = $("#sizeSelect").val();
  const basePrice = product.prices[size] || 0;
  $("#unitPrice").text(fmt(basePrice * mixQty));
}

function renderMixer() {
  const blendColor = blendHexes(picks.map(p => p.hex));
  $("#blendSwatch").css("background-color", blendColor);

  const pickTray = document.getElementById("pickTray");
  pickTray.innerHTML = "";
  
  if (picks.length === 0) {
    $("#mixComponents").text("Select up to 5 shades above to blend a custom tint.");
  } else {
    $("#mixComponents").text(`Custom Mix (${picks.length}/5 shades)`);
    picks.forEach(p => {
      const chip = document.createElement("div");
      chip.className = "pick-chip";
      chip.innerHTML = `
        <div class="dot" style="background:${p.hex}"></div>
        <span>${p.name}</span>
        <button data-remove="${p.name}">✕</button>
      `;
      chip.querySelector("button").addEventListener("click", () => {
        picks = picks.filter(item => item.name !== p.name);
        renderShadePanel();
        renderMixer();
      });
      pickTray.appendChild(chip);
    });
  }
  updatePrice();
}

/* ================= CATALOGUE ================= */
function renderCatalogue() {
  const grid = document.getElementById("catalogueGrid");
  grid.innerHTML = CATALOGUE.map(p => `
    <div class="product-card">
      <span class="product-tag">${p.tag}</span>
      <h3>${p.name}</h3>
      <p class="blurb">${p.blurb}</p>
      <div class="price-grid">
        ${Object.entries(p.prices).map(([size, price]) => `
          <div class="price-pill">
            <div class="size">${size}</div>
            <div class="price">${fmt(price)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}
