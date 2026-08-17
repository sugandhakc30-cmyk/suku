(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
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

/***/ 2465:
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
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8775)), "C:\\Users\\SUGANDHA\\Downloads\\files\\app\\page.tsx"],
          
        }]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1112)), "C:\\Users\\SUGANDHA\\Downloads\\files\\app\\layout.tsx"],
          
        }
      ]
      }.children;
const pages = ["C:\\Users\\SUGANDHA\\Downloads\\files\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
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

/***/ 4033:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 8775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Hero.tsx


function Hero() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "py-16 md:py-20 bg-gradient-to-b from-neutral-50 via-white to-neutral-50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-50 border border-brand-200 rounded-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "w-2 h-2 bg-brand-600 rounded-full"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-xs font-semibold text-brand-700 uppercase tracking-wider",
                                    children: "Find the right tech"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight",
                            children: "Smart Tech Choices Start Here"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-lg text-neutral-600 leading-relaxed max-w-xl",
                            children: "Independent technology reviews, practical buying guidance, and clear comparisons to help you make more confident purchase decisions."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col sm:flex-row gap-3 pt-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/reviews",
                                    className: "inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105",
                                    children: "Explore Reviews"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/guides",
                                    className: "inline-flex items-center justify-center px-6 py-3 border-2 border-brand-600 text-brand-600 font-semibold rounded-lg hover:bg-brand-50 transition-all duration-200",
                                    children: "View Buying Guides"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-wrap gap-6 pt-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "font-bold text-2xl text-neutral-900",
                                            children: "Research-led"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-neutral-600",
                                            children: "Review coverage built around specs, comparisons, and real-world use."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "font-bold text-2xl text-neutral-900",
                                            children: "Buying guides"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-neutral-600",
                                            children: "Practical advice for choosing the right tech without the noise."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "font-bold text-2xl text-neutral-900",
                                            children: "Transparent"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-neutral-600",
                                            children: "Clear affiliate disclosures and editorial standards you can trust."
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "hidden lg:block relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute -top-20 -right-20 w-64 h-64 bg-brand-100/20 rounded-full blur-3xl"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute top-1/2 -left-20 w-48 h-48 bg-blue-100/20 rounded-full blur-3xl"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative z-10 bg-gradient-to-br from-white via-brand-50/30 to-neutral-50 rounded-2xl border border-neutral-200 p-8 shadow-xl backdrop-blur-sm",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 h-72 flex items-center justify-center group",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-brand-600/50 to-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative z-10 text-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl mb-4 mx-auto border border-white/30",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            className: "w-10 h-10 text-white",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-white font-bold text-lg",
                                                        children: "Expert Reviews"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-brand-100 text-sm mt-2",
                                                        children: "Thoroughly tested products"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-sm font-bold text-neutral-900 uppercase tracking-widest text-brand-600 mb-4",
                                                children: "Why Choose Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "space-y-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "group flex gap-3.5 p-3 rounded-lg hover:bg-brand-50/50 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "flex-shrink-0 pt-1",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "flex items-center justify-center h-6 w-6 rounded-lg bg-brand-100 border border-brand-300 group-hover:bg-brand-200 transition-colors",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        className: "h-4 w-4 text-brand-700",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 3,
                                                                            d: "M5 13l4 4L19 7"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-sm font-semibold text-neutral-900",
                                                                        children: "Expert Tested & Verified"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-xs text-neutral-600 mt-0.5",
                                                                        children: "Real-world testing by experienced reviewers"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "group flex gap-3.5 p-3 rounded-lg hover:bg-brand-50/50 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "flex-shrink-0 pt-1",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "flex items-center justify-center h-6 w-6 rounded-lg bg-brand-100 border border-brand-300 group-hover:bg-brand-200 transition-colors",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        className: "h-4 w-4 text-brand-700",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 3,
                                                                            d: "M5 13l4 4L19 7"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-sm font-semibold text-neutral-900",
                                                                        children: "Detailed Comparisons"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-xs text-neutral-600 mt-0.5",
                                                                        children: "Side-by-side analysis of features & pricing"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "group flex gap-3.5 p-3 rounded-lg hover:bg-brand-50/50 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "flex-shrink-0 pt-1",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "flex items-center justify-center h-6 w-6 rounded-lg bg-brand-100 border border-brand-300 group-hover:bg-brand-200 transition-colors",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        className: "h-4 w-4 text-brand-700",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 3,
                                                                            d: "M5 13l4 4L19 7"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-sm font-semibold text-neutral-900",
                                                                        children: "Honest Recommendations"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-xs text-neutral-600 mt-0.5",
                                                                        children: "Independent advice based on research"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
;// CONCATENATED MODULE: ./components/CategoryCard.tsx



function CategoryCard({ title, href, description, image, categoryId, categoryName, categoryIcon }) {
    const displayTitle = categoryName || title || "Category";
    const displayHref = href || (categoryId ? `/categories/${categoryId}` : "#");
    const displayDescription = description;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: displayHref,
        className: "group block border border-neutral-200 rounded-xl overflow-hidden bg-white hover:border-brand-300 hover:shadow-lg transition-all duration-300",
        children: [
            image ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative overflow-hidden h-40 bg-neutral-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image,
                    alt: displayTitle,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-40 bg-gradient-to-br from-brand-50 to-blue-50 flex items-center justify-center",
                children: categoryIcon ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-4xl",
                    children: categoryIcon
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "w-12 h-12 mx-auto text-brand-300",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V7a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "font-bold text-lg text-neutral-900 group-hover:text-brand-600 transition-colors line-clamp-2",
                        children: displayTitle
                    }),
                    displayDescription && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm text-neutral-600 mt-2 line-clamp-2",
                        children: displayDescription
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all",
                        children: [
                            "Explore ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "→"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ProductCard.tsx
var ProductCard = __webpack_require__(1408);
// EXTERNAL MODULE: ./data/categories.ts
var categories = __webpack_require__(8152);
// EXTERNAL MODULE: ./data/products.ts
var products = __webpack_require__(4615);
// EXTERNAL MODULE: ./lib/seo.ts
var seo = __webpack_require__(9051);
;// CONCATENATED MODULE: ./app/page.tsx







const metadata = {
    title: "Sugandha Tech — Home",
    description: "Independent technology reviews and buying guidance for smarter purchase decisions.",
    alternates: {
        canonical: ((0,seo/* siteMeta */.N)().baseUrl || "https://sugandhatech.in.net") + "/"
    }
};
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "py-12 px-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 text-white shadow-2xl overflow-hidden border border-neutral-700/50 backdrop-blur",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid lg:grid-cols-[1.4fr_0.6fr] gap-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "p-8 md:p-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "w-2 h-2 bg-blue-400 rounded-full"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-xs font-semibold uppercase tracking-wider text-blue-300",
                                                children: "Editor's Pick"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-3xl md:text-5xl font-bold leading-tight mb-5 text-white",
                                        children: "HP Omen RTX 5070 is built for serious gaming performance."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-lg text-neutral-300 mb-8 leading-relaxed max-w-2xl",
                                        children: "A premium 16-inch gaming laptop with AMD Ryzen 9 8940HX power, 32GB DDR5 memory, a 240Hz display, and a calm, refined look that fits both creators and competitive players."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/reviews/hp-omen-rtx-5070-gaming-laptop-review",
                                                className: "inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl",
                                                children: "Read the Review"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/guides/gaming-laptop-buying-guide",
                                                className: "inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm",
                                                children: "Buying Guide"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-gradient-to-br from-brand-600/20 via-blue-500/10 to-neutral-900 p-8 md:p-12 flex items-center justify-center border-l border-white/10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-xs uppercase tracking-widest font-semibold text-blue-300 mb-6",
                                            children: "Quick Specifications"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "flex justify-between items-center gap-4 pb-4 border-b border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-neutral-400",
                                                            children: "CPU"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            className: "text-white font-semibold",
                                                            children: "AMD Ryzen 9 8940HX"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "flex justify-between items-center gap-4 pb-4 border-b border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-neutral-400",
                                                            children: "GPU"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            className: "text-white font-semibold",
                                                            children: "RTX 5070"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "flex justify-between items-center gap-4 pb-4 border-b border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-neutral-400",
                                                            children: "Display"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            className: "text-white font-semibold",
                                                            children: '16" WQXGA'
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "flex justify-between items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-neutral-400",
                                                            children: "Refresh Rate"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            className: "text-white font-semibold",
                                                            children: "240Hz"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "py-14 px-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-3xl md:text-4xl font-bold text-neutral-900 mb-2",
                                children: "Featured Products"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-lg text-neutral-600",
                                children: "Handpicked tech products reviewed and recommended by our experts."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                        children: products/* products */.R.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCard/* default */.Z, {
                                productId: product.id,
                                productName: product.name,
                                image: product.image,
                                description: product.description,
                                category: product.category,
                                affiliateUrl: product.affiliateUrl
                            }, product.id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "py-14 px-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-3xl md:text-4xl font-bold text-neutral-900 mb-2",
                                children: "Browse by Category"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-lg text-neutral-600",
                                children: "Explore reviews and guides across different technology categories."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                        children: categories/* categories */.b.slice(0, 8).map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(CategoryCard, {
                                href: category.href,
                                title: category.name,
                                description: category.description
                            }, category.slug))
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,796,132,615,18], () => (__webpack_exec__(2465)));
module.exports = __webpack_exports__;

})();