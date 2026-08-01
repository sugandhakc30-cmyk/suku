import { Product, AuthorInfo } from '../types';
import logitechImg from '../assets/images/logitech_mx_master_1785237677949.jpg';
import fp from '../assets/images/1.jpg';
import fa from '../assets/images/2.jpg';
import a from '../assets/images/3.jpg';


export const DEFAULT_ASSOCIATE_TAG = 'sugandha00-20';

export const DEFAULT_AUTHOR: AuthorInfo = {
  name: 'Sugandha KC',
  role: 'Chief Hardware & Ergonomic Reviewer',
  experience: '8+ years testing computer peripherals, workstations & smart tech',
  bio: 'Sugandha leads hardware evaluation at SUGANDHA TECH, specializing in workstation ergonomics, high-precision input devices, and productivity workflows. All reviews follow strict independent testing guidelines.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
};

export const AMAZON_PRODUCTS: Product[] = [
  {
    id: 'prod-logitech-mx-master-3s-black',
    title: 'Logitech MX Master 3S - Performance Wireless Mouse with Ultra-Fast Scrolling, Ergo, 8K DPI, Track on Glass, Quiet Clicks, Bluetooth, Windows, Linux, Chrome, Black',
    category: 'Productivity & Tech',
    brand: 'Logitech',
    asin: 'B09HM94VDS',
    rating: 4.6,
    reviewsCount: 126,
    badge: "Editor's Choice",
    image: logitechImg,
    gallery: [
      logitechImg,
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
    ],
    shortSummary: 'Master class ergonomic workstation mouse featuring an 8,000 DPI Darkfield track-on-glass sensor, 90% quieter Quiet Clicks, and electromagnetic MagSpeed scrolling.',
    description: 'The Logitech MX Master 3S is sculpted to support your palm and wrist in a natural relaxed posture. Equipped with the revolutionary MagSpeed wheel that scrolls 1,000 lines per second in silence, an 8K DPI sensor that works flawlessly even on clear glass dining tables, and customizable thumb controls.',
    features: [
      '8,000 DPI Darkfield Optical Sensor tracks effortlessly on glass desk surfaces',
      'MagSpeed Electromagnetic Scroll Wheel delivers hyper-fast precision scrolling up to 1,000 lines/sec',
      'Quiet Clicks technology provides satisfying tactile feel with 90% less acoustic click noise',
      'Triple connectivity via Bluetooth Low Energy, Logi Bolt USB Receiver, and USB-C fast charging',
      'Ergonomic right-handed palm support with horizontal thumb scroll wheel and gesture button'
    ],
    pros: [
      '8K DPI sensor tracks smoothly on clear glass and high-res multi-monitor setups',
      'MagSpeed wheel seamlessly auto-shifts between ratcheted precision and frictionless spin',
      'Quiet Clicks prevent office or late-night room disruption',
      'Multi-device Flow technology lets you control 3 computers simultaneously'
    ],
    cons: [
      'Sculpted exclusively for right-handed ergonomic palm grip',
      'Slightly heavier (141g) than minimal esports FPS gaming mice'
    ],
    whoShouldBuy: [
      'Software developers, data analysts, and heavy spreadsheet power users',
      'Graphic designers, video editors, and digital creators requiring fine precision',
      'Professionals seeking ergonomic wrist strain relief during 8+ hour workdays'
    ],
    whoShouldAvoid: [
      'Left-handed users (mouse frame is specifically right-hand contoured)',
      'Competitive twitch FPS gamers who require ultralight under-60g gaming mice'
    ],
    editorVerdict: 'In our 8-year history of evaluating workstation peripherals, the MX Master 3S remains the undisputed gold standard. The acoustic dampening on the primary switches combined with the electromagnetic scroll wheel creates an unmatched productivity experience.',
    author: DEFAULT_AUTHOR,
    amazonUrl: 'https://amzn.to/4fq5XTT',
    specifications: {
      'Brand': 'Logitech',
      'Color': 'Black',
      'Connectivity': 'Bluetooth Low Energy, Logi Bolt USB, USB-C',
      'Sensor Technology': 'Darkfield High Precision (Track on Glass)',
      'Resolution': '200 to 8000 DPI (Fully Adjustable in 50 DPI increments)',
      'Special Features': 'Quiet Clicks (90% noise reduction), MagSpeed Wheel, Thumb Wheel',
      'Supported OS': 'Windows 10/11+, macOS, Linux, ChromeOS, iPadOS, Android',
      'Battery Endurance': 'Up to 70 days on full charge (3 min quick charge = 3 hours)'
    },
    updatedAt: '2026-07-28'
  },
  {
  id: 'prod-lenovo-legion-5i-rtx5070',
  title: 'Lenovo Legion 5i Gaming Laptop – Intel Core i7-14700HX, RTX 5070, 15" 2.5K OLED 165Hz',
  category: 'Computers & Gaming',
  brand: 'Lenovo',
  asin: 'YOUR_ASIN_HERE',
  rating: 4.8,
  reviewsCount: 2150,
  badge: "Editor's Choice", // Options: "Editor's Choice" | "Best Value" | "Top Rated" | "Trending" | "Premium Pick"
  image: fp,
  gallery: [
    'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
  ],
  shortSummary: 'Powerful gaming laptop featuring Intel Core i7-14700HX, NVIDIA GeForce RTX 5070 graphics, a stunning 15-inch 2.5K OLED 165Hz display, and 1TB SSD storage.',
  description: 'Built for gamers and creators, the Lenovo Legion 5i combines the Intel Core i7-14700HX processor with NVIDIA GeForce RTX 5070 graphics for exceptional gaming, streaming, and content creation performance. The 15-inch PureSight OLED display delivers vivid colors, deep blacks, and ultra-smooth 165Hz gameplay.',
  features: [
    'Intel Core i7-14700HX processor for high-performance gaming and multitasking',
    'NVIDIA GeForce RTX 5070 GPU with advanced ray tracing and AI-powered DLSS',
    '15-inch 2.5K WQXGA PureSight OLED display with 165Hz refresh rate',
    '16GB DDR5 RAM for smooth multitasking',
    '1TB PCIe Gen4 SSD for fast boot times and game loading',
    'Includes 3 Months of PC Game Pass'
  ],
  pros: [
    'Excellent gaming and creative performance',
    'Beautiful OLED display with vibrant colors and deep contrast',
    'Fast 165Hz refresh rate for competitive gaming',
    'Large 1TB SSD with quick loading speeds',
    'Premium Legion cooling system keeps temperatures under control'
  ],
  cons: [
    'Battery life is shorter during gaming sessions',
    'Slightly heavier than standard productivity laptops'
  ],
  whoShouldBuy: [
    'PC gamers',
    'Content creators and video editors',
    'Engineering and design students',
    'Anyone wanting a premium gaming laptop'
  ],
  whoShouldAvoid: [
    'Users looking for an ultra-light travel laptop',
    'Those who only need a laptop for basic web browsing and office work'
  ],
  editorVerdict: 'The Lenovo Legion 5i delivers flagship-level gaming performance, an outstanding OLED display, and reliable cooling, making it one of the best gaming laptops in its class.',
  author: DEFAULT_AUTHOR,
  amazonUrl: 'https://amzn.to/4fz1HjH', // Replace with your affiliate link
  specifications: {
    'Brand': 'Lenovo',
    'Processor': 'Intel Core i7-14700HX',
    'Graphics': 'NVIDIA GeForce RTX 5070',
    'Display': '15-inch 2.5K WQXGA PureSight OLED',
    'Refresh Rate': '165Hz',
    'Memory': '16GB DDR5',
    'Storage': '1TB PCIe SSD',
    'Operating System': 'Windows 11',
    'Included': '3 Months of PC Game Pass'
  },
  updatedAt: '2026-07-31'
},
{
  id: 'prod-beatbot-sora-70',
  title: 'Beatbot Sora 70 Pool Vacuum Robot',
  category: 'Smart Home',
  brand: 'Beatbot',
  asin: 'B0H1MHCLG6',
  rating: 4.8,
  reviewsCount: 320,
  badge: 'Premium Pick', // Options: "Editor's Choice" | "Best Value" | "Top Rated" | "Trending" | "Premium Pick"
  image: fa,
  gallery: [
    'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80'
  ],
  shortSummary: 'Advanced cordless robotic pool cleaner with 360° top-to-bottom cleaning, powerful 6800 GPH suction, smart surface parking, and a large 6L debris basket for pools up to 3,200 sq. ft.',
  description: 'The Beatbot Sora 70 is a premium robotic pool cleaner designed for complete pool maintenance. It cleans the floor, walls, waterline, surface, and shallow platforms while using intelligent navigation and powerful suction to remove leaves, dirt, sand, insects, and other debris. Smart Surface Parking and app control make retrieval and operation effortless.',

  features: [
    '360° top-to-bottom cleaning for floors, walls, waterline, and water surface',
    'Powerful 6,800 GPH suction removes fine debris and large leaves',
    'Large 6L debris basket reduces cleaning interruptions',
    'Smart Surface Parking for easy retrieval after cleaning',
    'Cordless design with app control and multiple cleaning modes',
    'Suitable for above-ground and in-ground pools up to 3,200 sq. ft.'
  ],

  pros: [
    'Complete pool cleaning in one robot',
    'Excellent suction power for heavy debris',
    'Large debris basket minimizes emptying',
    'Easy retrieval with Smart Surface Parking',
    'Long battery life for large pools',
    'Works on multiple pool surfaces'
  ],

  cons: [
    'Premium price compared to basic pool cleaners',
    'Large size may be unnecessary for small pools'
  ],

  whoShouldBuy: [
    'Homeowners with medium to large swimming pools',
    'People wanting hands-free automatic pool cleaning',
    'Users looking for premium smart pool maintenance'
  ],

  whoShouldAvoid: [
    'Owners of very small inflatable pools',
    'Buyers looking for a low-budget pool cleaner'
  ],

  editorVerdict: 'The Beatbot Sora 70 is one of the most capable robotic pool cleaners available, offering outstanding cleaning performance, intelligent navigation, and premium convenience features for effortless pool maintenance.',

  author: DEFAULT_AUTHOR,

  amazonUrl: 'https://amzn.to/4hHM2kN',

  specifications: {
    'Brand': 'Beatbot',
    'Model': 'Sora 70',
    'Color': 'Lavender Purple',
    'Cleaning Coverage': 'Floor, Walls, Waterline, Water Surface',
    'Pool Size': 'Up to 3,200 sq. ft.',
    'Suction Power': '6,800 GPH',
    'Debris Capacity': '6 Liters',
    'Battery': '10,000mAh Rechargeable',
    'Runtime': 'Up to 5 Hours',
    'Connectivity': 'Wi-Fi & Bluetooth App Control'
  },

  updatedAt: '2026-07-31'
},
{
  id: 'prod-xpro-150cc-moped-red',
  title: 'X-PRO 150cc Moped Street Gas Moped with 13" Aluminum Wheels (Red)',
  category: 'Automotive',
  brand: 'X-PRO',
  asin: 'B095NSTYP5',
  rating: 4.4,
  reviewsCount: 126,
  badge: 'Best Value', // Options: "Editor's Choice" | "Best Value" | "Top Rated" | "Trending" | "Premium Pick"
  image: a,
  gallery: [
    'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80'
  ],
  shortSummary: 'Reliable 150cc gas-powered street moped featuring an automatic transmission, 13-inch aluminum wheels, and a fuel-efficient 4-stroke engine for everyday commuting.',
  description: 'The X-PRO Fiji 150 is designed for riders looking for an affordable and dependable street scooter. Powered by a 150cc air-cooled 4-stroke engine with automatic CVT transmission, it delivers smooth acceleration, excellent fuel economy, and comfortable urban riding. The lightweight 13-inch aluminum wheels and front disc/rear drum brakes provide confident handling and braking performance.',
  features: [
    '150cc air-cooled 4-stroke engine',
    'Automatic CVT transmission',
    '13-inch lightweight aluminum wheels',
    'Electric start system',
    'Front disc and rear drum brakes',
    'Front and rear suspension for a comfortable ride'
  ],
  pros: [
    'Fuel-efficient engine',
    'Easy automatic transmission',
    'Comfortable suspension',
    'Lightweight aluminum wheels',
    'Great value for daily commuting'
  ],
  cons: [
    'Requires minor assembly after delivery',
    'Not designed for highway-speed touring'
  ],
  whoShouldBuy: [
    'Daily commuters',
    'First-time scooter riders',
    'Anyone looking for affordable transportation'
  ],
  whoShouldAvoid: [
    'Off-road riders',
    'Those needing a high-performance motorcycle'
  ],
  editorVerdict: 'The X-PRO Fiji 150 offers dependable transportation with excellent fuel economy, simple operation, and comfortable everyday performance, making it a strong value in the entry-level scooter market.',
  author: DEFAULT_AUTHOR,
  amazonUrl: 'https://amzn.to/4w24bgU',
  specifications: {
    'Brand': 'X-PRO',
    'Model': 'Fiji 150',
    'Color': 'Red',
    'Engine': '150cc Air-Cooled 4-Stroke',
    'Transmission': 'Automatic CVT',
    'Wheel Size': '13 Inches',
    'Brakes': 'Front Disc / Rear Drum',
    'Starting System': 'Electric Start',
    'Frame': 'Aluminum',
    'Weight Capacity': '340 lbs'
  },
  updatedAt: '2026-08-01'
}

];

export const SAMPLE_PRODUCTS: Product[] = AMAZON_PRODUCTS;


