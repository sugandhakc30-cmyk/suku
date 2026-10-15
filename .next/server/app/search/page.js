(() => {
var exports = {};
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 9677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'search',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5506)), "C:\\Users\\SUGANDHA\\Downloads\\files\\app\\search\\page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1112)), "C:\\Users\\SUGANDHA\\Downloads\\files\\app\\layout.tsx"],
          
        }
      ]
      }.children;
const pages = ["C:\\Users\\SUGANDHA\\Downloads\\files\\app\\search\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/search/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/search/page",
        pathname: "/search",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 8302:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2730))

/***/ }),

/***/ 2730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchPageClient)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
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
    },
    {
        slug: "best-gaming-laptop",
        title: "Best Gaming Laptop : What to Prioritize in 2026",
        excerpt: "A practical guide to choosing a budget gaming laptop with the right balance of GPU power, screen quality, thermals, and long-term value.",
        category: "Buying Guides",
        date: "2026-08-16",
        affiliateUrl: "https://amzn.to/4qqc7r6",
        sections: [
            {
                heading: "Why Price Matters",
                body: "A gaming laptop  can still be a smart buy when you focus on the features that matter most: GPU class, display refresh rate, memory, storage, and thermal performance. In this price band, the aim is not to chase the most premium design; it is to find a setup that keeps frame rates smooth and avoids weak points that appear later."
            },
            {
                heading: "What to Prioritize",
                body: "The graphics card remains the biggest driver of gaming performance, followed closely by memory and display quality. A 1080p or 1440p display with a 144Hz or 165Hz refresh rate is usually the sweet spot for value, while 16GB of RAM is a practical minimum for modern gaming and multitasking."
            },
            {
                heading: "Where Budget Laptops Cut Corners",
                body: "Low-cost gaming laptops often trim display quality, storage speed, or cooling headroom. That can cause heat throttling, noisy fan behavior, or a noticeable quality gap compared with better-configured midrange models. Before you buy, compare thermal performance and panel quality as closely as you compare the GPU."
            },
            {
                heading: "Who This Range Fits",
                body: "This price range is a strong fit for students, casual gamers, and players who mostly game at 1080p and want a machine that handles everyday tasks without feeling underpowered. It is also useful if you want a single machine for work and play without stretching into premium pricing."
            },
            {
                heading: "Final Take",
                body: "The best value gaming laptop  is the one that balances a strong GPU with an efficient cooling design and a usable display. If you can keep your expectations realistic, you can find a laptop that delivers solid gaming performance without overspending on features that are not essential."
            }
        ]
    },
    {
        slug: "best-laptop-for-students-2026",
        title: "Best Laptop for Students in 2026: How to Choose for Work, Classes, and Light Gaming",
        excerpt: "A practical student laptop buying guide covering battery life, performance, portability, and screen quality for university life.",
        category: "Student Tech",
        date: "2026-08-17",
        affiliateUrl: "https://amzn.to/4zajEhw",
        sections: [
            {
                heading: "Start With Your Workflow",
                body: "The best student laptop is not always the newest or the most expensive. It is the model that can handle writing, research, browsing, video calls, and occasional creative work without feeling slow or frustrating. Matching the machine to your workload is more important than chasing the biggest spec sheet."
            },
            {
                heading: "Battery and Portability",
                body: "If you spend a lot of time moving between lectures, libraries, and study spaces, battery life and weight matter. A lighter device with long endurance can be more useful than a heavier gaming laptop that delivers higher peak performance but struggles to last through a full day of classes."
            },
            {
                heading: "Performance That Feels Smooth",
                body: "For most students, 16GB RAM and a modern mid-range processor are enough for day-to-day work, browser tabs, spreadsheets, and light creative software. If you plan to edit video, work with large design files, or game casually, plan for more processing power and a stronger GPU or screen configuration."
            },
            {
                heading: "The Right Screen Size",
                body: "A 13-inch device is easy to carry, while a 14-inch or 15-inch model gives more comfort for long reading and writing sessions. Many students prefer a balance of portability and screen comfort, especially if they use the laptop for multiple classes each day."
            },
            {
                heading: "Final Take",
                body: "The best laptop for students is the one that meets the work you actually do, not the work a marketer is describing. Prioritize battery life, good keyboard comfort, enough RAM, and a display that feels easy to use for hours at a time."
            }
        ]
    }
].filter((article)=>!hiddenArticleSlugs.has(article.slug));
/* harmony default export */ const data_articles = ((/* unused pure expression or super */ null && (articles)));

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

;// CONCATENATED MODULE: ./lib/search.ts


function searchAll(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const results = [];
    function pushFromList(list, type, base) {
        for (const item of list){
            const hay = (item.title + " " + (item.excerpt || "") + " " + (item.category || "")).toLowerCase();
            if (hay.includes(q)) {
                results.push({
                    id: `${type}-${item.slug}`,
                    title: item.title,
                    excerpt: item.excerpt || "",
                    category: type,
                    slug: item.slug,
                    href: `/${base}/${item.slug}`,
                    date: item.date
                });
            }
        }
    }
    pushFromList(articles, "review", "reviews");
    pushFromList(guides, "guide", "guides");
    return results.slice(0, 50);
}

;// CONCATENATED MODULE: ./components/SearchPageClient.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function SearchPageClient() {
    const params = (0,navigation.useSearchParams)();
    const query = params.get("q") || "";
    const results = (0,react_.useMemo)(()=>searchAll(query), [
        query
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-3xl font-bold mb-2",
                children: "Search"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm text-gray-600 mb-6",
                children: query ? `Showing results for “${query}”` : "Enter a keyword to search reviews and buying guides."
            }),
            !query ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border rounded p-6 bg-white text-gray-600",
                children: "Use the search box above to explore articles and buying guides."
            }) : results.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border rounded p-6 bg-white text-gray-600",
                children: "No results were found for this search term."
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "space-y-4",
                children: results.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                        className: "border rounded p-4 bg-white flex gap-4 flex-col md:flex-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-32 h-24 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500 uppercase",
                                children: item.category
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "font-semibold text-lg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: item.href,
                                            children: item.title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-sm text-gray-600 mt-1",
                                        children: item.excerpt
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-2 text-xs text-gray-500",
                                        children: item.date || "Updated recently"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: item.href,
                                        className: "mt-3 inline-block text-sm font-medium text-brand",
                                        children: "Open article →"
                                    })
                                ]
                            })
                        ]
                    }, item.id))
            })
        ]
    });
}


/***/ }),

/***/ 5506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchPage),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/SearchPageClient.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\SUGANDHA\Downloads\files\components\SearchPageClient.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const SearchPageClient = (__default__);
// EXTERNAL MODULE: ./lib/seo.ts
var seo = __webpack_require__(9051);
;// CONCATENATED MODULE: ./app/search/page.tsx



const metadata = {
    title: "Search — Sugandha Tech",
    description: "Search reviews, buying guides, and product picks from Sugandha Tech.",
    alternates: {
        canonical: `${(0,seo/* siteMeta */.N)().baseUrl}/search`
    },
    robots: {
        index: false,
        follow: false
    }
};
function SearchPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx(SearchPageClient, {});
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,796,132], () => (__webpack_exec__(9677)));
module.exports = __webpack_exports__;

})();