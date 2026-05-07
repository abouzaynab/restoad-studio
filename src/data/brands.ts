import { BrandConfig } from "../types";

export const BRANDS: BrandConfig[] = [
  {
    id: "cappero",
    name: "CAPPERO",
    tagline: "GREEN TEXTURE · YELLOW ACCENT · ACTION RESET",
    colors: {
      primary: "#0B6B35", // Green
      secondary: "#064D2A", // Emerald
      accent: "#F2C94C", // Yellow
      bg: "#050201",
    },
    categories: ["TOUS", "SIGNATURE", "LA BARQUE", "VIANDE", "POULET", "CHARCUTERIE", "FROMAGES", "MER", "VEGGIE", "CRUSTINI"],
    products: [
      { id: "CRU_NEW", cat: "CRUSTINI", label: "CRUSTINI SIGNATURE", emoji: "🌯", dna: "REFERENCE LOCK STRICT — sandwich roulé en pâte à pizza, forme longue cylindrique/ovale, pain extérieur doré avec semoule visible and taches de cuisson noires charbonnées." },
      { id: "SIG_ROY", cat: "SIGNATURE", label: "ROYALE", emoji: "👑", dna: "Sauce tomate, mozzarella, viande hachée, poulet tex-mex, crevettes, calamars, poivrons, champignons frais." },
      { id: "SIG_MON", cat: "SIGNATURE", label: "MONTAGNARDE", emoji: "🏔️", dna: "Créme liquide, mozzarella, pomme de terre, jambon de dinde, fromage raclette, champignons frais." },
      { id: "PLT_MEX", cat: "POULET", label: "MEXICAINE", emoji: "🌮", dna: "Sauce tomate, mozzarella, poulet tex-mex, poivrons, oignons, maïs." },
      { id: "CHA_PEP", cat: "CHARCUTERIE", label: "PEPPERONI", emoji: "🍕", dna: "Sauce tomate, mozzarella premium, double pepperoni cuit en cuvette bouillonnante, origan." },
    ],
    dimensions: {
      action: {
        label: "ACTION STOP SCROLLER",
        color: "#C73524",
        items: [
          { n: "DOUBLE PIZZA AIR SHOT", p: "Two pizzas flying in the air, suspended dynamically, emerald textured background." },
          { n: "KNIFE CUT CHEESE STRETCH", p: "Knife cuts pizza, instant cheese stretch." },
          { n: "PIZZA METEOR", p: "Pizza falling like a meteor." },
          { n: "CHEESE WATERFALL", p: "Cheese flowing downward." },
        ]
      },
      camera: {
        label: "CAMERA / POV",
        color: "#C98232",
        items: [
          { n: "ULTRA LOW ATTACK", p: "Camera extremely low, close to surface, pizza feels huge and aggressive." },
          { n: "HYPER CLOSE CHEESE", p: "Macro camera close to cheese and sauce, food fills the frame." },
          { n: "DIAGONAL FLYING COMPOSITION", p: "Dynamic diagonal layout, pizzas or ingredients crossing the frame." },
        ]
      },
      background: {
        label: "BACKGROUND / MOOD",
        color: "#0B6B35",
        items: [
          { n: "EMERALD PAINT WALL", p: "Textured emerald painted wall with visible brush grain." },
          { n: "GREEN CONCRETE", p: "Rough green concrete surface, industrial texture." },
          { n: "GREEN MARBLE", p: "Dark marble with green veins." },
        ]
      },
      lighting: {
        label: "LIGHTING",
        color: "#F2C94C",
        items: [
          { n: "PAPARAZZI FLASH", p: "Strong direct flash with crisp highlights, aggressive stop-scroll effect." },
          { n: "GOLDEN FOOD KEY", p: "Warm golden food key revealing crust, cheese and sauce gloss." },
          { n: "BACKLIGHT CHEESE GLOW", p: "Warm backlight makes melted cheese glow." },
        ]
      }
    },
    brandProps: ["LOGO TOP", "LOGO X3", "BOÎTE VERTE", "PAPIER BRANDÉ", "STICKER", "POT SAUCE", "TYPO US", "CALLOUTS"],
    negativePrompt: "--no arrows, pointers, callout arrows, face, faces, head, eyes, nose, mouth, jaw, ears, neck, hair, person, people, staff, worker, silhouette, reflection, neon, cyberpunk, boring table photo, flat pizza, underexposed food, digital logo overlay --ar 4:5 --style raw --v 6.0"
  },
  {
    id: "55smash",
    name: "55 SMASH",
    tagline: "TANGER · MIAMI · CHROMATIC DEPTH",
    colors: {
      primary: "#FF2F92", // Magenta
      secondary: "#00D8FF", // Cyan
      accent: "#FFD600", // Gold
      bg: "#040404",
    },
    categories: ["TOUS", "BURGER", "TACOS", "BOWL", "SALADE", "SIDES", "DESSERT"],
    products: [
      { id: "BRG_ORI", cat: "BURGER", label: "SMASH ORIGINAL", dna: "Double beef smash, lacy edges, cheddar, salade, tomates, oignons, cornichons, sauce Biggy." },
      { id: "BRG_VB", cat: "BURGER", label: "VERRY BIG", dna: "4 steaks smash, 4 cheddars, salade, cornichons, sauce Biggy. Monumental stack." },
      { id: "TAC_COM", cat: "TACOS", label: "COMPOSE TON TACOS", dna: "Tortilla grillée, sauce fromagère maison, frites internes, viandes au choix." },
    ],
    dimensions: {
      angle: {
        label: "01 · CADRAGE & POV",
        color: "#FF2F92",
        items: [
          { n: "LOW-45 BITE DOMINANCE", p: "Low-45 degree angle, bite-level dominance, intrusive and intimate focus." },
          { n: "LOW BACKLIGHT FLARE", p: "Low angle with heavy backlight flare, cinematic magenta neon light leak." },
          { n: "BILLBOARD MONUMENT", p: "Ultra-low angle, monumental advertising scale." },
        ]
      },
      action: {
        label: "02 · ACTION & CREW",
        color: "#00FF88",
        items: [
          { n: "TACOS SPLIT BATTLE", p: "Two hands violently pulling a massive tacos apart, epic lava cheese. NO FACES." },
          { n: "DIAMOND CHAIN PULL", p: "Hand with massive diamond rings pulling a branded black box. Street luxury." },
          { n: "NEON COUNTER SLAM", p: "Product slammed onto wet neon-lit counter, splash frozen at impact." },
        ]
      },
      fetish: {
        label: "04 · TEXTURE LÉTALE",
        color: "#FFD600",
        items: [
          { n: "CRISP VS LAVA", p: "The clash: shattering crispy Maillard meat edges vs flowing high-viscosity cheddar lava." },
          { n: "BRIOCHE PORE SHEEN", p: "Toasted brioche bun pores reflecting the magenta ambient light." },
        ]
      }
    },
    brandProps: ["LOGO TOP", "LOGO X3", "BOX BRAND", "STREETWEAR", "NEON SIGN"],
    negativePrompt: "--no face, head, eyes, portrait, man, woman, person, daylight, beige, white, sun --ar 4:5 --v 6.1"
  },
  {
    id: "obrozers",
    name: "Ô BROZER'S",
    tagline: "SUNSET MAGMA · CALIFORNIA CHILL",
    colors: {
      primary: "#FF5E00", // Orange
      secondary: "#FFD600", // Yellow
      accent: "#FFB800", // Gold
      bg: "#0A0502",
    },
    categories: ["TOUS", "BURGER", "PAIN MAISON", "TACOS", "SIDES", "DESSERT"],
    products: [
      { id: "SIG_OB", cat: "BURGER", label: "O'BROZERS SIGNATURE", emoji: "🍔", dna: "2 Steaks 80gr, cheddar, bacon dinde, oignons caramélisés, salade, tomates, sauce BBQ andalouse." },
      { id: "TAC_M", cat: "TACOS", label: "TACOS 1 VIANDE", emoji: "🌮", dna: "Tortilla pressée grillée, 1 viande, frites, sauce fromagère onctueuse." },
    ],
    dimensions: {
      angle: {
        label: "CADRAGE & POV",
        color: "#FF5E00",
        items: [
          { n: "LOW BACKLIGHT FLARE", p: "Low angle with heavy backlight flare, cinematic sunset light leak." },
          { n: "LOW RIM LIGHT GLOW", p: "Low angle, intense rim light glow, Silhouette defined by golden light." },
        ]
      },
      action: {
        label: "ACTION & CREW",
        color: "#00FF88",
        items: [
          { n: "THE BURGER BUMP", p: "Two different hands clinking burgers together. Mid-air crumbs, dynamic action. NO FACES." },
          { n: "THE BROZER PASS", p: "Arm reaching out of a vintage car window passing a burger. Sunset vibe." },
        ]
      },
      universe: {
        label: "ATMOSPHÈRE & LUMIÈRE",
        color: "#FFD600",
        items: [
          { n: "CALIFORNIA GOLDEN HOUR", p: "Breathtaking California beach sunset, deep orange and magenta sky." },
          { n: "DNA LOCK OBROZERS", p: "Pure Orange Sun, Yellow Neon, Purple Sky, Chrome Car Hood." },
        ]
      }
    },
    brandProps: ["LOGO TOP", "LOGO X3", "BOÎTE VERTE", "TYPO US", "STICKER"],
    negativePrompt: "--no faces, heads, eyes, portraits, looking at camera, full body, people, gloves, rings, jewelry, accessories, bracelets, watches --ar 4:5 --style raw --v 6.0"
  }
];
