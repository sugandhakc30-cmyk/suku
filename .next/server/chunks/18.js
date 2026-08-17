"use strict";
exports.id = 18;
exports.ids = [18];
exports.modules = {

/***/ 1408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function ProductCard({ productName, productId, image, description, category, affiliateUrl = "#", ctaText = "Check Price on Amazon →" }) {
    const detailHref = productId ? `/products/${productId}` : "#";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group border border-neutral-200 rounded-xl overflow-hidden bg-white hover:border-brand-300 hover:shadow-lg transition-all duration-300",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative overflow-hidden h-44 bg-neutral-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: image || "/images/article-2.jpg",
                    alt: productName,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-5",
                children: [
                    category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inline-flex items-center gap-1.5 px-2 py-0.5 bg-neutral-100 rounded text-xs text-neutral-600 font-medium mb-3",
                        children: category
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "font-bold text-lg text-neutral-900 group-hover:text-brand-600 transition-colors line-clamp-2",
                        children: productName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm text-neutral-600 mt-2 line-clamp-2",
                        children: description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-5 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: detailHref,
                                className: "inline-flex items-center justify-center px-4 py-2.5 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors text-sm",
                                children: "View Details"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: affiliateUrl,
                                target: "_blank",
                                rel: "nofollow sponsored noopener noreferrer",
                                className: "inline-flex items-center justify-center px-4 py-2.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-sm",
                                children: ctaText
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ categories)
/* harmony export */ });
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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (categories)));


/***/ })

};
;