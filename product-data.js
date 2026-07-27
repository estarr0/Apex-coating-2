/* 
 * Apex Coating East Africa Ltd - Products & Official Price List Database
 * Standard Sizes: 1L, 4L, 20L (Prices in KES)
 */

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

if (typeof module !== 'undefined') {
    module.exports = { APEX_PRODUCTS };
}
