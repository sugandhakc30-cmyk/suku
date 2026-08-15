"use strict";
(() => {
var exports = {};
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 9332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/sitemap.ts
var sitemap_namespaceObject = {};
__webpack_require__.r(sitemap_namespaceObject);
__webpack_require__.d(sitemap_namespaceObject, {
  "default": () => (sitemap)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&isDynamic=1!./app/sitemap.ts?__next_metadata_route__
var sitemap_next_metadata_route_namespaceObject = {};
__webpack_require__.r(sitemap_next_metadata_route_namespaceObject);
__webpack_require__.d(sitemap_next_metadata_route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./lib/seo.ts
function siteMeta() {
    return {
        siteName: "Sugandha Tech",
        description: "Independent technology reviews and buying guidance.",
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://sugandhatech.in.net"
    };
}
const seoDefaults = {
    siteName: "Sugandha Tech",
    siteUrl: "https://sugandhatech.in.net",
    keywords: [
        "technology reviews",
        "buying guides",
        "gaming laptop reviews",
        "tech buying advice"
    ]
};

;// CONCATENATED MODULE: ./data/articles.ts
const hiddenArticleSlugs = new Set([
    "best-budget-gaming-monitor-review"
]);
const articles = [
    {
        slug: "hp-omen-rtx-5070-gaming-laptop-review",
        title: "HP Omen RTX 5070 AMD Ryzen 9 8940HX Gaming Laptop Review",
        excerpt: "HP Omen RTX 5070 review: a premium 16-inch WQXGA gaming laptop with AMD Ryzen 9 8940HX, 32GB DDR5 RAM, 1TB SSD, 240Hz display, and RGB backlit keyboard for serious gaming performance.",
        category: "Gaming Laptops",
        date: "2026-08-14",
        image: "/images/HP-OMEN-Ultra-Slim-RTX-5070-Gaming-Laptop.webp",
        affiliateUrl: "https://amzn.to/3S9LE48",
        sections: [
            {
                heading: "Introduction",
                body: "The HP Omen RTX 5070 gaming laptop is aimed at players who want desktop-class performance in a thinner profile without moving to a bulky workstation chassis. Based on available specifications and general product information, it stands out with a strong GPU, fast display, and a balanced set of premium features for gaming and creative work."
            },
            {
                heading: "Quick Verdict",
                body: "This is a strong choice for gamers who want high performance, a 240Hz display, and modern gaming features in a manageable 16-inch footprint. It is not the absolute lightest gaming laptop on the market, but it delivers an effective blend of speed, display quality, and everyday usability."
            },
            {
                heading: "Key Specifications",
                body: "The laptop includes an AMD Ryzen 9 8940HX processor, NVIDIA RTX 5070 graphics, 32GB DDR5 memory, 1TB SSD storage, a 16-inch WQXGA IPS display, RGB backlit keyboard, and Windows 11 Home. That combination supports modern AAA gaming, high-refresh titles, and multitasking workflows with headroom for heavier creative tasks."
            },
            {
                heading: "What We Like",
                body: "The screen quality is excellent for fast gaming, the memory and SSD setup is generous, and the RTX 5070 tier provides real gaming headroom. The keyboard design also adds a premium feel, while the overall build is clean and professional without becoming overly flashy."
            },
            {
                heading: "Things to Consider",
                body: "This is a premium machine, so price will be a deciding factor for many buyers. Battery life may be modest under heavy workloads, and the laptop is not designed to be ultra-thin or ultra-portable compared with a general productivity ultrabook."
            },
            {
                heading: "Performance and Features",
                body: "For gaming at 1080p and 1440p, the RTX 5070 class continues to be a compelling option for users who want to maximize frame rates while preserving image quality and modern features. The 240Hz display gives competitive players a noticeable advantage in fast reaction games, while the SSD and DDR5 memory help keep multitasking smooth and system responsiveness strong."
            },
            {
                heading: "Who Should Buy It?",
                body: "This laptop makes the most sense for serious gamers, streamers, and creators who want a capable all-rounder that can handle work, gaming, and media in one machine. It is especially appealing if you need a single premium device that does not feel limited by baseline specifications."
            },
            {
                heading: "Who Should Skip It?",
                body: "Casual users or students who mostly browse, stream, and do light productivity may not need this level of performance. Buyers on a tighter budget may be better served by a more affordable midrange gaming laptop or a more minimal productivity-focused option."
            },
            {
                heading: "Alternatives",
                body: "If your budget is lower, a well-configured RTX 4060 or RTX 4070 laptop can provide excellent value. If you want a more portable design, a thinner gaming laptop with lower performance may be more comfortable for travel, but it will likely compromise on graphics power or cooling."
            },
            {
                heading: "Final Verdict",
                body: "The HP Omen RTX 5070 is a premium gaming laptop that balances performance, display quality, and feature depth. It is a strong option for players who want a serious gaming machine without giving up the polish of a more premium premium build."
            }
        ]
    }
].filter((article)=>!hiddenArticleSlugs.has(article.slug));
/* harmony default export */ const data_articles = ((/* unused pure expression or super */ null && (articles)));

;// CONCATENATED MODULE: ./data/products.ts
const products = [
    {
        id: "hp-omen-16-rtx-5070-ryzen-9-8940hx-review",
        name: "HP OMEN 16 RTX 5070 Review – Ryzen 9 8940HX, 32GB RAM, 240Hz WQXGA",
        category: "Gaming Laptops",
        description: "HP OMEN 16 gaming laptop review featuring AMD Ryzen 9 8940HX, NVIDIA RTX 5070, 32GB DDR5 RAM, 1TB SSD, and a 16-inch 240Hz WQXGA display.",
        image: "/images/HP-OMEN-Ultra-Slim-RTX-5070-Gaming-Laptop.webp",
        affiliateUrl: "https://amzn.to/4qqc7r6",
        summary: "The HP OMEN 16 configuration reviewed here combines an AMD Ryzen 9 8940HX processor, NVIDIA GeForce RTX 5070 Laptop GPU, 32GB of DDR5 memory, a 1TB PCIe SSD, and a 16-inch WQXGA 240Hz IPS display for serious gaming and multitasking.",
        pros: [
            "AMD Ryzen 9 8940HX processor",
            "RTX 5070 Laptop GPU",
            "32GB DDR5 memory",
            "1TB PCIe SSD",
            "2560 \xd7 1600 WQXGA resolution",
            "240Hz refresh rate",
            "RGB backlit keyboard"
        ],
        cons: [
            "1TB storage may feel tight for a large game library",
            "Gaming laptop battery life varies by workload",
            "RTX 5070 laptop performance differs from desktop cards",
            "Verify exact retailer configuration before purchase"
        ],
        published: "August 2026",
        heroLabel: "Gaming Laptop Review",
        reviewSections: [
            {
                heading: "AMD Ryzen 9 8940HX Performance",
                body: "The Ryzen 9 8940HX places this OMEN configuration firmly in the high-performance gaming-laptop category. With 16 cores and 32 threads, it is designed for demanding workloads such as gaming, multitasking, content creation, and CPU-intensive applications."
            },
            {
                heading: "RTX 5070 Laptop GPU",
                body: "The NVIDIA GeForce RTX 5070 Laptop GPU gives this OMEN the graphics hardware needed for modern PC gaming. The GPU is particularly relevant for gamers who want to take advantage of the laptop’s high-refresh-rate display."
            },
            {
                heading: "240Hz WQXGA Display",
                body: "The 16-inch WQXGA IPS display is one of the strongest features of this configuration. Its 2560 \xd7 1600 resolution provides more vertical pixels than a standard 1440p panel, while the 240Hz refresh rate is ideal for competitive titles."
            },
            {
                heading: "Who Should Buy It?",
                body: "This is a strong fit for gamers who want a high-performance laptop, competitive players who value a 240Hz display, and users who want 32GB RAM out of the box. It is also a good option for creators who need substantial CPU performance alongside gaming power."
            },
            {
                heading: "Final Verdict",
                body: "The HP OMEN 16 configuration with the Ryzen 9 8940HX, RTX 5070, 32GB DDR5 RAM, 1TB SSD, and 240Hz WQXGA display is designed for buyers who want serious gaming and multitasking performance in a 16-inch form factor."
            }
        ]
    },
    {
        id: "razer-atheris-stormtrooper",
        name: "Razer Atheris Stormtrooper Edition Wireless Mouse",
        category: "Gaming Accessories",
        image: "/images/11.jpg",
        description: "A compact wireless mouse with a 7200 DPI sensor, Bluetooth support, long battery life, and a limited-edition Stormtrooper-inspired design.",
        summary: "The Razer Atheris Stormtrooper Edition combines a compact ambidextrous design with a 7200 DPI optical sensor, dual wireless connectivity, and up to 350 hours of battery life. It is especially appealing for travelers, smaller-handed gamers, and Star Wars fans who want a distinctive wireless mouse.",
        affiliateUrl: "https://amzn.to/4zajEhw",
        published: "August 2026",
        heroLabel: "Wireless Mouse Review",
        pros: [
            "High-resolution 7200 DPI optical sensor",
            "Bluetooth and 2.4GHz wireless connectivity",
            "Very long claimed battery life",
            "Compact and portable design",
            "Ambidextrous shape",
            "Limited-edition Stormtrooper styling"
        ],
        cons: [
            "Small body may not suit larger hands",
            "Uses replaceable AA batteries instead of USB charging",
            "No wired fallback when batteries are depleted",
            "Limited-edition availability can vary",
            "The sensor max DPI is more than most users need"
        ],
        reviewSections: [
            {
                heading: "Design and Portability",
                body: "The Atheris is built around a compact ambidextrous shape, making portability one of its strongest characteristics. It is ideal for travel and smaller setups, but users with larger hands may prefer a bigger mouse."
            },
            {
                heading: "Sensor and Gaming Performance",
                body: "Razer equips the Atheris with a 7200 DPI optical sensor and up to 1000Hz polling. That gives it excellent sensitivity for gaming and everyday use, though its small form factor will suit some grip styles better than others."
            },
            {
                heading: "Wireless Connectivity",
                body: "One of the biggest advantages of this mouse is connectivity flexibility. You can use the included 2.4GHz wireless receiver or Bluetooth, depending on the device and situation."
            },
            {
                heading: "Battery Life",
                body: "Razer claims roughly 350 hours of battery life from two AA batteries. In practice, actual usage varies with polling settings, wireless mode, and activity level, but the claim is strong for a portable gaming mouse."
            },
            {
                heading: "Who Should Buy It?",
                body: "This is a strong fit for travelers, users who need both Bluetooth and 2.4GHz wireless, and Star Wars fans who want a limited-edition accessory. It is also a good option for smaller-hand users who prefer a compact mouse."
            },
            {
                heading: "Who Should Skip It?",
                body: "Users with larger hands, a preference for larger palm-grip mice, or a desire for USB-C rechargeable convenience may want to look elsewhere. Buyers who do not care about the Stormtrooper design may also find less appeal."
            },
            {
                heading: "Final Verdict",
                body: "The Razer Atheris Stormtrooper Edition remains a compelling portable wireless mouse because of its compact design, strong sensor, and long battery life. It is best for users who want a small ambidextrous mouse with useful wireless flexibility and a distinctive look."
            }
        ]
    },
    {
        id: "jensor-16800w-72v-50ah-electric-dirt-bike",
        name: "JENSOR 16800W Electric Dirt Bike Review – 72V 50Ah Battery, 70 MPH",
        category: "Electric Dirt Bikes",
        image: "/images/1.jpg",
        description: "JENSOR electric dirt bike for adults featuring a claimed 16800W peak mid-mounted motor, 72V 50Ah removable battery, up to 70 MPH claimed top speed, hydraulic brakes, and full shock absorption for off-road riding.",
        summary: "The JENSOR electric dirt bike is designed for adult off-road riders and combines a high-power mid-mounted motor with a removable 72V 50Ah battery, hydraulic braking, and full suspension. The manufacturer listing claims a peak output of 16800W and a top speed of up to 70 MPH.",
        affiliateUrl: "https://amzn.to/3UztBFk",
        published: "August 2026",
        heroLabel: "Electric Dirt Bike Review",
        pros: [
            "Claimed 16800W peak motor output",
            "72V 50Ah removable battery",
            "Claimed top speed of up to 70 MPH",
            "Mid-mounted motor design",
            "Hydraulic braking system",
            "Full shock absorption",
            "Designed for adult off-road riding",
            "Removable battery"
        ],
        cons: [
            "Large and heavy compared with conventional bicycles",
            "Actual range depends on rider, terrain, speed, and conditions",
            "Actual top speed may vary from the advertised figure",
            "High-power electric motorcycle requires appropriate safety equipment",
            "Verify local registration, licensing, and road-use requirements",
            "Availability and specifications may vary by seller"
        ],
        reviewSections: [
            {
                heading: "16800W Peak Motor",
                body: "The JENSOR listing advertises a 16800W peak mid-mounted motor. This puts the bike in a high-power electric off-road category. Actual performance will depend on factors including battery charge, rider weight, terrain, temperature, controller settings, and riding conditions."
            },
            {
                heading: "72V 50Ah Removable Battery",
                body: "The bike is listed with a 72V 50Ah removable battery. A removable battery can make charging and storage more convenient, particularly for riders who do not have convenient access to a charging location near the bike."
            },
            {
                heading: "70 MPH Claimed Top Speed",
                body: "The product listing claims a top speed of up to 70 MPH. Buyers should treat this as a manufacturer or seller claim rather than a guaranteed real-world speed. Actual speed can vary according to rider weight, terrain, battery condition, temperature, and other factors."
            },
            {
                heading: "Hydraulic Brakes",
                body: "Hydraulic brakes are included in the listed specification. A strong braking system is particularly important on a high-power off-road electric bike because riding conditions can include steep terrain, loose surfaces, and higher speeds."
            },
            {
                heading: "Full Shock Absorption",
                body: "The JENSOR is advertised with full shock absorption for off-road riding. Suspension can help absorb bumps and uneven terrain and can contribute to a more controlled riding experience on suitable trails."
            },
            {
                heading: "Off-Road Design",
                body: "This electric dirt bike is marketed toward adult off-road riders rather than ordinary urban commuting. Its high-power motor, suspension system, hydraulic brakes, and dirt-bike design make it better suited to appropriate private or designated off-road environments."
            },
            {
                heading: "Who Should Buy It?",
                body: "This bike may appeal to experienced adult riders looking for a high-power electric off-road machine and who have an appropriate place to ride it legally and safely. Buyers should carefully check the exact specifications, warranty, included equipment, and local requirements before purchasing."
            },
            {
                heading: "Who Should Skip It?",
                body: "It may not be appropriate for beginners, riders looking for a lightweight commuter bicycle, or buyers who need a street-legal vehicle without additional registration or licensing requirements. Check your local regulations before riding."
            },
            {
                heading: "Final Verdict",
                body: "The JENSOR electric dirt bike is an unusually high-power off-road model on paper, with a claimed 16800W peak motor, 72V 50Ah removable battery, 70 MPH top speed, hydraulic brakes, and full suspension. Because these are seller-listed specifications, buyers should verify the exact configuration and applicable safety and legal requirements before purchasing."
            }
        ]
    }
];
/* harmony default export */ const data_products = ((/* unused pure expression or super */ null && (products)));

;// CONCATENATED MODULE: ./data/guides.ts
const guides = [
    {
        slug: "gaming-laptop-buying-guide",
        title: "Gaming Laptop Buying Guide",
        excerpt: "How to pick a gaming laptop: CPU, GPU, RAM, cooling, and display.",
        date: "2026-01-10",
        sections: [
            {
                heading: "CPU",
                body: "Choose a modern processor with enough multithreaded power for gaming and multitasking. For a premium gaming laptop, look for high-end mobile chips with strong single-core performance, efficient cooling, and good sustained boost performance."
            },
            {
                heading: "GPU",
                body: "The graphics card is the biggest performance determinant in a gaming laptop. Match the GPU class to the resolution and refresh rate you care about most, and treat the display and thermals as part of the same buying decision."
            },
            {
                heading: "RAM",
                body: "For most modern gaming laptops, 16GB is the minimum you should target. If you stream, edit media, or keep many apps open, 32GB is the safer long-term choice and helps avoid frustrating upgrade bottlenecks."
            },
            {
                heading: "Storage",
                body: "Choose a fast SSD as your primary drive and try to prefer a 1TB model if possible. It gives you more space for games, updates, and a smoother experience than a smaller SSD with constant cleanup."
            },
            {
                heading: "Display",
                body: "Look for a 1080p or 1440p display with a high refresh rate. A 240Hz panel is a meaningful upgrade for competitive games, while 1440p is often the sweet spot for a balanced gaming laptop purchase."
            },
            {
                heading: "Cooling",
                body: "A gaming laptop with a strong thermal design will maintain performance more consistently under load. If you plan to game for long sessions, pay attention to airflow, fan noise, and real-world thermals rather than just peak specs."
            },
            {
                heading: "Battery",
                body: "Battery life is usually limited on gaming laptops, especially if you play demanding titles. Treat battery endurance as a convenience feature rather than a primary benchmark, and prioritize performance if you value gaming quality above portability."
            },
            {
                heading: "Buying Advice",
                body: "The best gaming laptop for your needs is the one that matches the kind of gaming you do most often. If you play esports or competitive games, prioritize refresh rate and response. If you want AAA gaming and creator workloads, lean toward a stronger GPU and more memory."
            }
        ]
    }
];
/* harmony default export */ const data_guides = ((/* unused pure expression or super */ null && (guides)));

;// CONCATENATED MODULE: ./data/categories.ts
const categories = [
    {
        slug: "laptops",
        name: "Laptops",
        description: "Portable computing, performance reviews, and buying guidance.",
        href: "/categories/laptops"
    },
    {
        slug: "gaming-pcs",
        name: "Gaming PCs",
        description: "Desktop gaming builds, upgrades, and performance insights.",
        href: "/categories/gaming-pcs"
    },
    {
        slug: "graphics-cards",
        name: "Graphics Cards",
        description: "GPU recommendations, specs, and value comparisons.",
        href: "/categories/graphics-cards"
    },
    {
        slug: "monitors",
        name: "Monitors",
        description: "Refresh rates, panel types, and display quality analysis.",
        href: "/categories/monitors"
    },
    {
        slug: "projectors",
        name: "Projectors",
        description: "Home theater and gaming projector buying advice.",
        href: "/categories/projectors"
    },
    {
        slug: "pc-components",
        name: "PC Components",
        description: "Motherboards, CPUs, memory, storage, and system planning.",
        href: "/categories/pc-components"
    },
    {
        slug: "gaming-accessories",
        name: "Gaming Accessories",
        description: "Headsets, keyboards, mice, and upgrade essentials.",
        href: "/categories/gaming-accessories"
    },
    {
        slug: "home-electronics",
        name: "Home Electronics",
        description: "Smart home, media, and everyday consumer tech coverage.",
        href: "/categories/home-electronics"
    }
];
/* harmony default export */ const data_categories = ((/* unused pure expression or super */ null && (categories)));

;// CONCATENATED MODULE: ./app/sitemap.ts





function sitemap() {
    const meta = siteMeta();
    const base = meta.baseUrl.replace(/\/$/, "");
    const staticUrls = [
        "",
        "/reviews",
        "/guides",
        "/news",
        "/about",
        "/contact",
        "/privacy-policy",
        "/terms",
        "/cookie-policy",
        "/editorial-policy",
        "/affiliate-disclosure",
        "/best",
        "/comparisons"
    ];
    const reviewUrls = articles.map((article)=>`/reviews/${article.slug}`);
    const productUrls = products.map((product)=>`/products/${product.id}`);
    const guideUrls = guides.map((guide)=>`/guides/${guide.slug}`);
    const categoryUrls = categories.map((category)=>category.href);
    const uniqueUrls = [
        ...new Set([
            ...staticUrls,
            ...reviewUrls,
            ...productUrls,
            ...guideUrls,
            ...categoryUrls
        ])
    ];
    return uniqueUrls.map((path)=>({
            url: `${base}${path === "" ? "/" : path}`,
            lastModified: new Date()
        }));
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js
var resolve_route_data = __webpack_require__(4031);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&isDynamic=1!./app/sitemap.ts?__next_metadata_route__




const sitemapModule = { ...sitemap_namespaceObject }
const handler = sitemapModule.default
const generateSitemaps = sitemapModule.generateSitemaps
const contentType = "application/xml"
const fileType = "sitemap"

async function GET(_, ctx) {
  const { __metadata_id__ = [], ...params } = ctx.params || {}
  const targetId = __metadata_id__[0]
  let id = undefined
  const sitemaps = generateSitemaps ? await generateSitemaps() : null

  if (sitemaps) {
    id = sitemaps.find((item) => {
      if (false) {}
      return item.id.toString() === targetId
    })?.id
    if (id == null) {
      return new server.NextResponse('Not Found', {
        status: 404,
      })
    }
  }

  const data = await handler({ id })
  const content = (0,resolve_route_data.resolveRouteData)(data, fileType)

  return new server.NextResponse(content, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}



;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fsitemap.xml%2Froute&name=app%2Fsitemap.xml%2Froute&pagePath=private-next-app-dir%2Fsitemap.ts&appDir=C%3A%5CUsers%5CSUGANDHA%5CDownloads%5Cfiles%5Capp&appPaths=%2Fsitemap&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/sitemap.xml/route",
        pathname: "/sitemap.xml",
        filename: "sitemap",
        bundlePath: "app/sitemap.xml/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&isDynamic=1!C:\\Users\\SUGANDHA\\Downloads\\files\\app\\sitemap.ts?__next_metadata_route__",
    nextConfigOutput,
    userland: sitemap_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/sitemap.xml/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,565,535], () => (__webpack_exec__(9332)));
module.exports = __webpack_exports__;

})();