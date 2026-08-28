"use strict";
exports.id = 313;
exports.ids = [313];
exports.modules = {

/***/ 3313:
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
        return url.toString().replace(/\/$/, "");
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