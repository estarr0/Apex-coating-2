/* 
 * Apex Coating East Africa Ltd - BS 4800 Color Standard Database
 * British Standard BS 4800 Paint Colors & Specifications
 */

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
