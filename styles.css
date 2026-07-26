/* ================= FULL CSS SYSTEM ================= */
:root {
  --bg: #FFFFFF;
  --bg-alt: #FDF3E7;
  --ink: #1A1F36;
  --ink-soft: rgba(26,31,54,0.62);
  --card: #FFFFFF;
  --border: rgba(26,31,54,0.1);
  --accent: #E01E2B;
  --accent-soft: rgba(224,30,43,0.13);
  --accent2: #1B4F9C;
  --accent2-soft: rgba(27,79,156,0.13);
  --gold: #F5A623;
  --sidebar: #1B2A5C;
  --sidebar-text: #FFF6E5;
}

body.dark {
  --bg: #14181F;
  --bg-alt: #1B212B;
  --ink: #EDEAE2;
  --ink-soft: rgba(237,234,226,0.6);
  --card: #1D222B;
  --border: rgba(237,234,226,0.1);
  --accent: #F0424E;
  --accent-soft: rgba(240,66,78,0.18);
  --accent2: #4A82D6;
  --accent2-soft: rgba(74,130,214,0.18);
  --gold: #F5B94A;
  --sidebar: #0D1327;
  --sidebar-text: #FFF6E5;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  transition: background 0.3s, color 0.3s;
}

.display { font-family: 'Fraunces', serif; margin: 0; }

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

/* Top Overlay Promo Banner */
.top-promo-banner {
  background: var(--sidebar);
  color: var(--sidebar-text);
  text-align: center;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 2px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

/* SIDEBAR */
.sidebar {
  position: fixed;
  left: 0; top: 0; bottom: 0;
  width: 76px;
  background: var(--sidebar);
  color: var(--sidebar-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  z-index: 50;
}

.logo-badge {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: #fff;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  font-weight: 700;
  color: var(--sidebar);
  font-size: 18px;
}

.brand-stripe {
  width: 28px; height: 4px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--accent) 0 33%, var(--gold) 33% 66%, var(--accent2) 66% 100%);
  margin-bottom: 24px;
}

.nav-links { display: flex; flex-direction: column; gap: 4px; flex: 1; }

.nav-btn {
  position: relative;
  width: 44px; height: 44px;
  border-radius: 12px;
  border: none;
  background: transparent;
  color: var(--sidebar-text);
  opacity: 0.6;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, opacity 0.2s;
}
.nav-btn:hover { opacity: 1; }
.nav-btn.active { background: var(--accent-soft); color: var(--accent); opacity: 1; }

.tooltip {
  position: absolute;
  left: 56px;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 6px;
  background: var(--card);
  color: var(--ink);
  border: 1px solid var(--border);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s;
}
.nav-btn:hover .tooltip { opacity: 1; }

.theme-btn { margin-top: 12px; background: var(--accent-soft); color: var(--accent); opacity: 1; }

/* LAYOUT */
main { margin-left: 76px; }

.section { padding: 40px 48px 80px; max-width: 1100px; margin: 0 auto; }

/* Hero Carousel */
.hero-carousel-wrapper {
  margin-bottom: 40px;
}
.owl-carousel .slide-card {
  height: 300px;
  border-radius: 18px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}
.owl-carousel .slide-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.3) 100%);
}
.slide-content {
  position: relative;
  z-index: 2;
  max-width: 540px;
}
.slide-content h2 {
  font-family: 'Fraunces', serif;
  font-size: 36px;
  margin: 0 0 12px;
  line-height: 1.1;
}
.slide-content p {
  font-size: 16px;
  margin: 0 0 20px;
  opacity: 0.9;
}

.eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 12px;
}

.section-title { font-size: 34px; font-weight: 600; margin-bottom: 12px; font-family: 'Fraunces', serif; }
.section-sub { color: var(--ink-soft); max-width: 620px; margin-bottom: 40px; }

/* COLOUR GROUPS */
.group-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-bottom: 32px;
}
@media (max-width: 800px) { .group-grid { grid-template-columns: repeat(2, 1fr); } }

.group-tile {
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  text-align: left;
  background: none;
  padding: 0;
  transition: border-color 0.2s, transform 0.2s;
}
.group-tile:hover { transform: translateY(-2px); }
.group-tile.active { border-color: var(--accent); }
.group-tile .swatch { height: 64px; }
.group-tile .label {
  background: var(--card);
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-top: none;
  border-radius: 0 0 12px 12px;
}
.group-tile .label p:first-child { font-size: 14px; font-weight: 600; margin: 0; }
.group-tile .label p:last-child { font-size: 12px; color: var(--ink-soft); margin: 2px 0 0; }

.shade-panel {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
}
.shade-panel-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 16px;
}
.shade-panel-header h3 { font-size: 18px; font-weight: 600; margin: 0; }
.shade-panel-header button { background: none; border: none; color: var(--ink-soft); cursor: pointer; font-size: 18px; }

.shade-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
@media (max-width: 800px) { .shade-grid { grid-template-columns: repeat(2, 1fr); } }

.shade-card { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: var(--bg); }
.shade-card .swatch { height: 64px; }
.shade-card .info { padding: 10px 12px; }
.shade-card .info p { font-size: 13px; font-weight: 500; margin: 0 0 8px; }
.shade-card .shade-code { font-size: 10px; font-weight: 600; color: var(--ink-soft); margin: -6px 0 8px; }
.shade-card button {
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 0;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: var(--accent-soft);
  color: var(--accent);
  transition: background 0.2s;
}
.shade-card button.added { background: var(--accent); color: #fff; }
.shade-card button.disabled { background: var(--border); color: var(--ink-soft); cursor: not-allowed; }

/* MIXER */
.mixer {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px;
}

.mixer-hero { display: flex; align-items: center; gap: 20px; margin-bottom: 20px; }
.blend-swatch {
  width: 84px; height: 84px;
  border-radius: 50%;
  border: 5px solid var(--bg);
  background: var(--bg-alt);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  flex-shrink: 0;
}
.mixer-hero-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent); margin: 0 0 4px; }
.mix-components { font-size: 15px; color: var(--ink-soft); margin: 0; }

.pick-tray { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; min-height: 20px; }
.pick-chip {
  display: flex; align-items: center; gap: 6px;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 4px 10px 4px 4px;
  background: var(--bg-alt);
}
.pick-chip .dot { width: 20px; height: 20px; border-radius: 50%; }
.pick-chip span { font-size: 12px; font-weight: 500; }
.pick-chip button { background: none; border: none; color: var(--ink-soft); cursor: pointer; font-size: 12px; }

.mixer-controls {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  align-items: end;
  border-top: 1px solid var(--border);
  padding-top: 20px;
  margin-bottom: 20px;
}
@media (max-width: 800px) { .mixer-controls { grid-template-columns: 1fr 1fr; } }

.mixer-controls label { display: flex; flex-direction: column; font-size: 12px; font-weight: 600; color: var(--ink-soft); gap: 6px; }
.mixer-controls select {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--ink);
}

.qty-stepper { display: flex; align-items: center; gap: 12px; }
.qty-stepper button {
  width: 28px; height: 28px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--ink);
  cursor: pointer;
  font-size: 16px;
}
.qty-stepper span { font-size: 14px; font-weight: 600; min-width: 16px; text-align: center; }

.mixer-price { display: flex; flex-direction: column; gap: 6px; }
.mixer-price-label { font-size: 12px; font-weight: 600; color: var(--ink-soft); }
.mixer-price-value { font-size: 18px; font-weight: 700; color: var(--accent); }

.mixer-actions { display: flex; gap: 12px; }

.btn {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 22px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.2s, background 0.2s;
}
.btn:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover:not(:disabled) { opacity: 0.9; }
.btn-outline { background: transparent; color: var(--ink); border: 1px solid var(--border); }

/* CATALOGUE & PRODUCTS */
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 800px) { .product-grid { grid-template-columns: 1fr; } }

.product-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
}
.product-card h3 { font-size: 17px; font-weight: 600; margin: 0 0 6px; }
.product-tag {
  display: inline-block;
  font-size: 11px; font-weight: 600;
  background: var(--accent-soft); color: var(--accent);
  padding: 3px 10px; border-radius: 999px;
  margin-bottom: 12px;
}
.product-card .blurb { font-size: 14px; color: var(--ink-soft); margin-bottom: 16px; }

.price-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.price-pill { background: var(--bg-alt); border-radius: 8px; padding: 8px 10px; text-align: center; min-width: 64px; }
.price-pill .size { font-size: 11px; color: var(--ink-soft); }
.price-pill .price { font-size: 13px; font-weight: 700; }

/* RESPONSIVE MOBILE */
@media (max-width: 640px) {
  .sidebar {
    left: 0; right: 0; top: auto; bottom: 0;
    width: 100%; height: 64px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 8px;
  }
  .logo-badge, .brand-stripe { display: none; }
  .nav-links { flex-direction: row; flex: 0; gap: 8px; }
  .theme-btn { margin: 0; }
  main { margin-left: 0; padding-bottom: 76px; }
  .section { padding: 24px 18px; }
}
