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
    { name: 'Red',