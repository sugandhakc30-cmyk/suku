"use strict";
(() => {
var exports = {};
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 27:
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

// NAMESPACE OBJECT: ./app/sitemap-index.xml/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./lib/seo.ts
var seo = __webpack_require__(9051);
// EXTERNAL MODULE: ./data/articles.ts
var articles = __webpack_require__(2049);
// EXTERNAL MODULE: ./data/products.ts
var products = __webpack_require__(4615);
// EXTERNAL MODULE: ./data/guides.ts
var guides = __webpack_require__(7308);
// EXTERNAL MODULE: ./data/categories.ts
var categories = __webpack_require__(8152);
// EXTERNAL MODULE: ./data/news.ts
var news = __webpack_require__(9993);
;// CONCATENATED MODULE: ./app/sitemap.ts






async function sitemap() {
    const meta = (0,seo/* siteMeta */.N)();
    const base = meta.baseUrl.replace(/\/$/, "");
    const urlMap = new Map();
    const addEntry = (path, lastMod, priority = 0.8)=>{
        const fullUrl = path ? `${base}${path}` : `${base}/`;
        if (!urlMap.has(fullUrl)) {
            urlMap.set(fullUrl, {
                url: fullUrl,
                ...lastMod ? {
                    lastModified: new Date(lastMod)
                } : {},
                changeFrequency: "weekly",
                priority
            });
        }
    };
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
    staticUrls.forEach((path)=>addEntry(path, undefined, path === "" ? 1.0 : 0.8));
    articles/* articles */.D.forEach((article)=>addEntry(`/reviews/${article.slug}`, article.updated ?? article.date));
    guides/* guides */.k.forEach((guide)=>addEntry(`/guides/${guide.slug}`, guide.date));
    news/* news */.r.forEach((article)=>addEntry(`/news/${article.slug}`, article.date));
    products/* products */.R.filter((product)=>!product.reviewSlug).forEach((product)=>addEntry(`/products/${product.id}`));
    categories/* categories */.b.forEach((category)=>addEntry(category.href));
    return Array.from(urlMap.values());
}

;// CONCATENATED MODULE: ./app/sitemap-index.xml/route.ts

function escapeXml(value) {
    return value.replace(/[&<>"']/g, (character)=>{
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        };
        return entities[character];
    });
}
async function GET() {
    const entries = await sitemap();
    const urls = entries.map((entry)=>`
  <url>
    <loc>${escapeXml(entry.url)}</loc>
    ${entry.lastModified ? `<lastmod>${new Date(entry.lastModified).toISOString()}</lastmod>` : ""}
    ${entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : ""}
    ${entry.priority !== undefined ? `<priority>${entry.priority}</priority>` : ""}
  </url>`).join("");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600"
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fsitemap-index.xml%2Froute&name=app%2Fsitemap-index.xml%2Froute&pagePath=private-next-app-dir%2Fsitemap-index.xml%2Froute.ts&appDir=C%3A%5CUsers%5CSUGANDHA%5CDownloads%5Cfiles%5Capp&appPaths=%2Fsitemap-index.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/sitemap-index.xml/route",
        pathname: "/sitemap-index.xml",
        filename: "route",
        bundlePath: "app/sitemap-index.xml/route"
    },
    resolvedPagePath: "C:\\Users\\SUGANDHA\\Downloads\\files\\app\\sitemap-index.xml\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/sitemap-index.xml/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 9993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ news)
/* harmony export */ });
const news = [
    {
        slug: "chipmaker-announces-new-gpu",
        title: "Chipmaker Announces New GPU",
        excerpt: "New GPU announced, key specs revealed.",
        date: "2026-08-01"
    },
    {
        slug: "monitor-refresh-rate-trends",
        title: "Monitor Refresh Rate Trends",
        excerpt: "How refresh rates are evolving in displays.",
        date: "2026-07-20"
    },
    {
        slug: "console-updates-2026",
        title: "Console Updates 2026",
        excerpt: "Latest console firmware updates and features.",
        date: "2026-06-14"
    }
];


/***/ }),

/***/ 9051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ siteMeta)
/* harmony export */ });
/* unused harmony export seoDefaults */
const fallbackBaseUrl = "https://sugandhatech.in.net";
function getBaseUrl() {
    const configuredBaseUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim();
    if (!configuredBaseUrl) {
        return fallbackBaseUrl;
    }
    try {
        const url = new URL(configuredBaseUrl);
        if (url.protocol !== "http:" && url.protocol !== "https:") {
            return fallbackBaseUrl;
        }
        return url.toString().replace(/\/+$/, "");
    } catch  {
        return fallbackBaseUrl;
    }
}
function siteMeta() {
    return {
        siteName: "Sugandha Tech",
        description: "Independent technology reviews and buying guidance.",
        baseUrl: getBaseUrl()
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,565,501,615,49,308,152], () => (__webpack_exec__(27)));
module.exports = __webpack_exports__;

})();