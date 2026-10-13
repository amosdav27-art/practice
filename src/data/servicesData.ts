import { ServiceItem, MaterialOption, ReviewItem, FAQItem, ServiceArea } from '../types';

export const BUSINESS_INFO = {
  name: "Lessane Installations & Repairs",
  shortName: "Lessane Repairs",
  founder: "Dwayne Lessane",
  phone: "(910) 261-0196",
  phoneRaw: "+19102610196",
  email: "lessanerepairs@gmail.com",
  address: "Davenport, FL 33897",
  serviceRadius: "Central Florida (Polk, Osceola, Orange & Lake Counties)",
  hours: "Monday – Saturday: 7:00 AM – 7:00 PM | 24/7 Urgent Storm Damage",
  licenseNotice: "Fully Licensed & Insured Specialty Contractor",
  heroImage: "/src/assets/images/hero_pool_enclosure_1791927105122.jpg",
  craftImage: "/src/assets/images/screen_repair_craft_1791927121015.jpg",
  paintImage: "/src/assets/images/cage_painting_restoration_1791927136324.jpg",
  washImage: "/src/assets/images/pressure_wash_pavers_1791927152753.jpg",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "pool-screen-repair",
    title: "Pool Screen Repair & Panel Replacement",
    category: "screen",
    tagline: "Fix tears, punctures, and wind-blown panels with heavy-duty Phifer® mesh.",
    description: "Whether a sudden Central Florida summer thunderstorm tore top panels or debris punctured side walls, we restore your pool enclosure with tightly rolled, heavy-duty vinyl-coated fiberglass mesh and commercial spline that won't sag.",
    bulletPoints: [
      "Roof & wall panel single/multi replacements",
      "High-reach 2-story cage safety equipment",
      "Premium UV-resistant spline that won't pop out",
      "Same-day or 24-hour rapid turnaround for urgent tears"
    ],
    startingPrice: "$55 / panel",
    popularFor: "Storm rips, pet tears, aging loose screens",
    image: "/src/assets/images/screen_repair_craft_1791927121015.jpg"
  },
  {
    id: "full-rescreening",
    title: "Full Pool Cage Rescreening",
    category: "screen",
    tagline: "Total enclosure overhaul to restore safety, beauty, and pest protection.",
    description: "When screens reach 7–10 years old, the Florida sun weakens the fibers, leading to brittle mesh, green mildew buildup, and loose spline. Our complete rescreen includes tearing out all old mesh, pressure cleaning the frame tracks, and reinstalling brand-new durable screens throughout.",
    bulletPoints: [
      "Complete removal of old brittle mesh & deteriorated spline",
      "Full track groove cleanout and pressure rinse",
      "Door hardware adjustment, latches, and bug sweeps included",
      "Choice of standard 18x14, 20x20 No-See-Um, or PetScreen®"
    ],
    startingPrice: "Custom Free Estimate",
    popularFor: "Aging enclosures (7+ years), complete modern refresh",
    image: "/src/assets/images/hero_pool_enclosure_1791927105122.jpg"
  },
  {
    id: "pool-cage-painting",
    title: "Pool Cage Painting & Aluminum Restoration",
    category: "paint",
    tagline: "Turn oxidized, chalky, faded aluminum into sleek modern showroom bronze or satin black.",
    description: "Replacing a pool cage costs $15,000 to $35,000+. Our professional electrostatic and HVLP paint restoration restores your existing structure for a fraction of the cost. We scrape oxidation, acid-wash, prime with industrial corrosion inhibitors, and apply marine-grade polyurethane enamel.",
    bulletPoints: [
      "Extensive surface prep: sanding oxidation, pressure wash, masking",
      "Rust-proof marine ceramic screw replacement (Nylo-Tec)",
      "High-grade polyurethane enamel resistant to Florida chlorine & UV",
      "Available in Modern Bronze, High-Gloss White, and Charcoal Black"
    ],
    startingPrice: "Free On-Site Inspection",
    popularFor: "Chalky white frames, green algae stains, oxidized metal",
    image: "/src/assets/images/cage_painting_restoration_1791927136324.jpg"
  },
  {
    id: "screen-rooms-lanais",
    title: "Screen Rooms & Lanai Enclosures",
    category: "construction",
    tagline: "Expand your outdoor living space with custom-built bug-free screen rooms.",
    description: "We construct custom screen rooms, front entry enclosures, and lanai additions that allow you to enjoy Florida fresh air without mosquitoes, gnats, and fallen leaves. Built with heavy-gauge extruded aluminum frame systems engineered to local Florida wind codes.",
    bulletPoints: [
      "Front entryway enclosures & back patio screen rooms",
      "Custom kickplate splash barriers to keep out lawn debris & dirt",
      "Heavy-duty self-closing screen doors with dual locks",
      "Florida building code compliant structural anchoring"
    ],
    startingPrice: "Quote upon inspection",
    popularFor: "Covered patios, front porches, patio extensions",
    image: "/src/assets/images/hero_pool_enclosure_1791927105122.jpg"
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing & Paver Cleaning",
    category: "wash",
    tagline: "High-pressure surface cleaning and gentle soft washing for decks, screens & driveways.",
    description: "Florida heat and humidity rapidly breed black mold, green slippery algae, and pollen on pool decks and cage frames. We use professional rotary surface cleaners and commercial soft-wash detergents that eradicate organic growth without stripping paver sand or damaging delicate screen spline.",
    bulletPoints: [
      "Travertine, stamped concrete, and paver pool decks",
      "Screen cage frame soft washing (removes mildew safely)",
      "Driveways, walkways, curbs, and sidewalk cleaning",
      "Eco-safe treatments safe for pool water, plants, and pets"
    ],
    startingPrice: "$120 package",
    popularFor: "Slippery pool decks, mildewed cage frames, dirty driveways",
    image: "/src/assets/images/pressure_wash_pavers_1791927152753.jpg"
  },
  {
    id: "exterior-house-painting",
    title: "Exterior House Painting",
    category: "paint",
    tagline: "Durable, weather-sealed exterior coatings tailored for Florida stucco and climate.",
    description: "Protect your home from tropical rain, intense UV breakdown, and moisture intrusion. Dwayne Lessane and team provide thorough exterior surface preparation, hairline crack sealing, primer sealing, and two coats of premium weatherproof paint.",
    bulletPoints: [
      "Elastomeric stucco sealing and waterproof priming",
      "Trim, fascia, soffits, and exterior doors",
      "High UV resistance against fading under Florida sun",
      "Clean job sites with daily cleanup and homeowner walkthrough"
    ],
    startingPrice: "Free Detailed Quote",
    popularFor: "Whole house exterior repaints, fading stucco, trim refresh",
    image: "/src/assets/images/cage_painting_restoration_1791927136324.jpg"
  }
];

export const MESH_MATERIALS: MaterialOption[] = [
  {
    id: "standard-18-14",
    name: "Phifer® Standard 18x14 Charcoal Mesh",
    badge: "Most Popular & Economical",
    bestFor: "General pool enclosures, lanais, balanced breeze and protection",
    features: [
      "Industry standard fiberglass with vinyl coating",
      "Excellent airflow while blocking mosquitoes and bees",
      "Charcoal color minimizes glare and maximizes outward visibility",
      "Expected lifespan: 7–9 years under standard Florida conditions"
    ],
    durability: "High (3/5)",
    visibility: "Excellent (5/5)",
    airflow: "Maximum (5/5)",
    petResistance: "Standard (2/5)"
  },
  {
    id: "no-see-um-20-20",
    name: "Phifer® 20x20 Micro-Mesh (No-See-Um)",
    badge: "Best for Water / Woods Near Homes",
    bestFor: "Properties backing up to lakes, ponds, conservation areas, or swamp zones",
    features: [
      "Tighter weave prevents gnats, sand flies, and micro no-see-ums",
      "Blocks airborne pollen and small lawn trimmings",
      "Slightly increased shade factor keeps pool deck slightly cooler",
      "Expected lifespan: 8–10 years"
    ],
    durability: "High (4/5)",
    visibility: "Very Good (4/5)",
    airflow: "Good (3.5/5)",
    petResistance: "Moderate (3/5)"
  },
  {
    id: "pet-screen",
    name: "Phifer PetScreen® (Ultra Heavy-Duty)",
    badge: "7x Stronger Than Standard",
    bestFor: "Homes with energetic dogs, climbing cats, or wildlife (squirrels & raccoons)",
    features: [
      "Heavy-duty vinyl-coated polyester yarn resist claws and paws",
      "Resists gouging, tearing, and pet impacts along bottom panels",
      "Can be installed on bottom chair rail tiers with standard on top",
      "Expected lifespan: 12–15+ years"
    ],
    durability: "Extreme (5/5)",
    visibility: "Moderate (3/5)",
    airflow: "Good (3.5/5)",
    petResistance: "Maximum (5/5)"
  },
  {
    id: "florida-glass",
    name: "Florida Glass / Glas-Shield Privacy Screen",
    badge: "100% Water & Debris Barrier",
    bestFor: "Bottom chair rail panels to keep out grass clippings, mulch, and lawn spray",
    features: [
      "Fiberglass mesh laminated with a durable vinyl protective coating",
      "Acts as a solid translucent moisture barrier and windbreak",
      "Provides privacy around ground-level pool lounge chairs",
      "Stops dirty lawn mower debris and weed whacker clippings from entering pool"
    ],
    durability: "Extreme (5/5)",
    visibility: "Opaque Privacy (1/5)",
    airflow: "Solid Barrier (0/5)",
    petResistance: "High (4.5/5)"
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    city: "Davenport",
    county: "Polk County",
    zipCodes: ["33896", "33897"],
    distanceTier: "Local (Same Day)"
  },
  {
    city: "Kissimmee",
    county: "Osceola County",
    zipCodes: ["34741", "34742", "34743", "34744", "34746", "34747"],
    distanceTier: "Standard (24-48h)"
  },
  {
    city: "ChampionsGate",
    county: "Osceola / Polk",
    zipCodes: ["33896"],
    distanceTier: "Local (Same Day)"
  },
  {
    city: "Orlando",
    county: "Orange County",
    zipCodes: ["32801", "32819", "32821", "32830", "32836", "32837"],
    distanceTier: "Standard (24-48h)"
  },
  {
    city: "Clermont",
    county: "Lake County",
    zipCodes: ["34711", "34714", "34715"],
    distanceTier: "Standard (24-48h)"
  },
  {
    city: "Celebration",
    county: "Osceola County",
    zipCodes: ["34747"],
    distanceTier: "Local (Same Day)"
  },
  {
    city: "Haines City",
    county: "Polk County",
    zipCodes: ["33844", "33845"],
    distanceTier: "Local (Same Day)"
  },
  {
    city: "Winter Haven",
    county: "Polk County",
    zipCodes: ["33880", "33881", "33884"],
    distanceTier: "Standard (24-48h)"
  },
  {
    city: "Poinciana",
    county: "Polk / Osceola",
    zipCodes: ["34758", "34759"],
    distanceTier: "Standard (24-48h)"
  },
  {
    city: "Lakeland",
    county: "Polk County",
    zipCodes: ["33801", "33803", "33805", "33810"],
    distanceTier: "Standard (24-48h)"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Marcus T.",
    location: "Davenport, FL (Highlands Reserve)",
    service: "Full Pool Cage Rescreen & Privacy Glass",
    rating: 5,
    date: "2 weeks ago",
    text: "He put my privacy screen in along the bottom panels and did screen repair on our top roof panels. Did an excellent job. Very clean work, tight screen spline, no loose edges, and honest pricing. Dwayne showed up on time and finished ahead of schedule.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Elena R.",
    location: "ChampionsGate, FL",
    service: "Pool Cage Painting & Rescreening",
    rating: 5,
    date: "1 month ago",
    text: "Our pool enclosure was 14 years old and looked chalky white with rusted screws. Dwayne repainted the cage in a sleek dark bronze and replaced all the rusted screws with marine ceramic fasteners, then put in fresh 20x20 bug screens. It looks like a brand-new $30k pool cage!",
    verified: true
  },
  {
    id: "rev-3",
    author: "Brian & Sarah K.",
    location: "Kissimmee, FL (Reunion Resort)",
    service: "Storm Damage Urgent Screen Replacement",
    rating: 5,
    date: "Last month",
    text: "A gust tore three roof panels right over our pool during an evening storm. Called Lessane Repairs at 7:30 AM and Dwayne was here by lunchtime. Had the high-ladder gear, fixed the panels with Phifer mesh, and checked all our door latches at no extra charge. Outstanding service.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Carlos M.",
    location: "Clermont, FL",
    service: "PetScreen Installation & Pressure Washing",
    rating: 5,
    date: "2 months ago",
    text: "Our two golden retrievers were constantly clawing through the screen doors. Dwayne installed Phifer PetScreen on the lower perimeter and pressure-washed our travertine pool deck. Now the dogs can jump without damaging a thing. Worth every penny.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Patricia H.",
    location: "Celebration, FL",
    service: "Pressure Washing & Lanai Screen Tune-Up",
    rating: 5,
    date: "3 months ago",
    text: "Professional, polite, and great attention to detail. Removed thick green algae from our pavers without blasting away the sand. They also adjusted our sticking lanai screen door so it glides smoothly again. Highly recommend Lessane Repairs to all Central Florida neighbors.",
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Screen Repair",
    question: "How long does a standard pool screen panel repair or full rescreen take?",
    answer: "Single and multi-panel repairs usually take 1 to 3 hours depending on cage height. A full pool cage rescreen typically takes 1 to 2 days for standard 1-story enclosures, and 2 to 3 days for large 2-story mansions. We work methodically to avoid keeping your pool exposed."
  },
  {
    category: "Pricing & Quotes",
    question: "Do you offer free estimates and do I need to be home?",
    answer: "Yes, 100% free, no-obligation estimates. If your pool enclosure is accessible via a side gate, you don't even have to take time off work. Dwayne can measure on-site, inspect spline condition and structural screws, and text or email you an itemized proposal the same day."
  },
  {
    category: "Materials",
    question: "What screen mesh should I choose for Central Florida?",
    answer: "Standard 18x14 mesh is great for general insect protection and maximum airflow. If you live near wetlands, lakes, or woods with tiny biting gnats, 20x20 No-See-Um mesh is recommended. For dog or cat owners, PetScreen® is 7x more tear-resistant and prevents repeated claw tears."
  },
  {
    category: "Restoration & Screws",
    question: "Why are the screws in my pool cage rusting, and do you replace them?",
    answer: "Standard builder-grade zinc screws corrode quickly in Central Florida due to pool chlorine, fertilizer, and high humidity, which stains the aluminum. During pool cage painting or full rescreens, we can replace corroded fasteners with Nylo-Tec or marine-grade ceramic-coated stainless steel screws that never rust."
  },
  {
    category: "Pressure Washing",
    question: "Will pressure washing tear my pool screens?",
    answer: "High-pressure wands should never be pointed directly at screen mesh or spline tracks. We use dedicated low-pressure soft-wash systems with biodegradable mildew-killing treatments on the cage frame, and reserve rotary high-pressure equipment strictly for hard stone paver decks and driveways."
  },
  {
    category: "Emergency & Storm",
    question: "What should I do if a hurricane or tropical storm tears my pool cage?",
    answer: "Call or text (910) 261-0196 right away. We prioritize urgent storm repairs to prevent wildlife, raccoons, frogs, or mosquitoes from invading your pool area and turning your pool water green. We also carry insurance-ready itemized work invoices."
  }
];
