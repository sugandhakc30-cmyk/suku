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
    title: 'Lenovo Legion 5i – Gaming Laptop - Intel Core i7-14700HX - 15" 2.5K WQXGA PureSight OLED Display – 165Hz Refresh Rate – NVIDIA GeForce RTX 5070 – 16 GB Memory – 1 TB Storage',
    category: 'Gaming & Entertainment',
    brand: 'Lenovo',
    asin: 'B0-LEGION5I5070', // Replace with actual ASIN if needed
    rating: 4.8,
    reviewsCount: 89,
    badge: "Editor's Choice",
    image: fp,
    gallery: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'
    ],
    shortSummary: 'High-performance gaming laptop equipped with an Intel Core i7-14700HX processor, 165Hz PureSight OLED display, and next-gen NVIDIA GeForce RTX 5070 graphics.',
    description: 'The Lenovo Legion 5i delivers elite-tier gaming performance and visual fidelity. Powered by the Intel Core i7-14700HX CPU and the advanced NVIDIA GeForce RTX 5070 GPU, it handles demanding AAA titles and creative workloads effortlessly. Its 15-inch 2.5K WQXGA PureSight OLED display provides deep blacks, vivid colors, and a smooth 165Hz refresh rate.',
    features: [
      'Intel Core i7-14700HX high-performance processor for seamless multitasking and gaming',
      'NVIDIA GeForce RTX 5070 graphics card for cutting-edge ray tracing and frame rates',
      '15-inch 2.5K WQXGA (2560x1440) PureSight OLED Display with 165Hz refresh rate',
      '16 GB high-speed memory and fast 1 TB SSD storage',
      'Includes 3 Months of Xbox PC Game Pass for instant access to a massive game library'
    ],
    pros: [
      'Stunning OLED screen with deep contrast, vibrant colors, and rapid response times',
      'Exceptional raw gaming and processing performance',
      'Advanced Legion Coldfront cooling system to maintain stable thermals',
      'Tactile Legion TrueStrike keyboard with customizable lighting'
    ],
    cons: [
      'Gaming laptops under heavy load generally have shorter battery life when unplugged',
      'Power brick is sizeable and adds weight to travel bags'
    ],
    whoShouldBuy: [
      'Hardcore gamers wanting high frame rates and gorgeous OLED graphics',
      'Content creators, video editors, and 3D renderers needing heavy compute power'
    ],
    whoShouldAvoid: [
      'Users looking for an ultra-lightweight, all-day battery laptop for casual browsing',
      'Budget-conscious casual gamers who do not require high-end discrete graphics'
    ],
    editorVerdict: 'The Lenovo Legion 5i strikes an incredible balance between raw processing power and breathtaking display quality. The addition of the RTX 5070 and an OLED panel makes it a powerhouse for both work and play.',
    author: DEFAULT_AUTHOR,
    amazonUrl: 'https://amzn.to/4fz1HjH',
    specifications: {
      'Brand': 'Lenovo',
      'Series': 'Legion 5i',
      'Processor': 'Intel Core i7-14700HX',
      'Graphics': 'NVIDIA GeForce RTX 5070',
      'Display': '15" 2.5K WQXGA (2560 x 1440) PureSight OLED, 165Hz',
      'Memory': '16 GB RAM',
      'Storage': '1 TB SSD',
      'Operating System': 'Windows 11 Home'
    },
    updatedAt: '2026-07-28'
  }
];

export const SAMPLE_PRODUCTS: Product[] = AMAZON_PRODUCTS;


