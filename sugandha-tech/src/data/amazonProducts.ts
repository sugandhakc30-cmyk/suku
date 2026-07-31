import { Product, AuthorInfo } from '../types';
import logitechImg from '../assets/images/logitech_mx_master_1785237677949.jpg';
import fp from '../assets/images/1.jpg';

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
  image: 'fp',
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
}
];

export const SAMPLE_PRODUCTS: Product[] = AMAZON_PRODUCTS;


