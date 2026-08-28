exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 1683:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6403));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 3471:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 6403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./components/SearchBar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function SearchBar({ initial = "" }) {
    const [q, setQ] = (0,react_.useState)(initial);
    const router = (0,navigation.useRouter)();
    function onSubmit(e) {
        e.preventDefault();
        const query = q.trim();
        router.push(`/search?q=${encodeURIComponent(query)}`);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        role: "search",
        onSubmit: onSubmit,
        className: "w-full md:w-64 flex items-center gap-2 bg-neutral-100 border border-neutral-300 rounded-lg px-3 py-2 hover:border-brand-300 focus-within:border-brand-600 focus-within:ring-2 focus-within:ring-brand-600/20 transition-all",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "site-search",
                className: "sr-only",
                children: "Search site"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "w-4 h-4 text-neutral-500",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: "site-search",
                type: "search",
                value: q,
                onChange: (e)=>setQ(e.target.value),
                placeholder: "Search reviews...",
                className: "flex-1 bg-transparent text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none"
            }),
            q && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: ()=>setQ(""),
                className: "text-neutral-400 hover:text-neutral-600 transition-colors",
                children: "✕"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                className: "px-3 py-1.5 bg-brand-600 text-white text-sm font-semibold rounded hover:bg-brand-700 transition-colors whitespace-nowrap",
                children: "Search"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Header({ siteName }) {
    const [open, setOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200/50 transition-all duration-300",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-gradient-to-r from-brand-50 to-blue-50 border-b border-brand-100 py-2.5 px-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-xs text-neutral-700 font-medium",
                        children: [
                            "\uD83C\uDFAF Affiliate Disclosure: We may earn a commission from qualifying purchases. Our editorial recommendations are independent and based on research.",
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/affiliate-disclosure",
                                className: "ml-2 text-brand-600 hover:text-brand-700 underline font-semibold transition-colors",
                                children: "Learn more"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex items-center justify-between py-3.5 px-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/",
                        className: "flex items-center gap-3 group",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative h-11 w-11 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/channels4_profile.jpg",
                                    alt: "Sugandha Tech",
                                    className: "h-10 w-10 rounded-[6px] object-cover"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "hidden sm:block font-semibold text-neutral-900 text-sm",
                                children: "Sugandha Tech"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "hidden md:flex gap-8 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors duration-200",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/reviews",
                                className: "text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors duration-200",
                                children: "Reviews"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/guides",
                                className: "text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors duration-200",
                                children: "Buying Guides"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/news",
                                className: "text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors duration-200",
                                children: "Tech News"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                className: "text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors duration-200",
                                children: "About"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:flex items-center gap-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex md:hidden items-center gap-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "aria-label": "Open menu",
                            className: "p-2 hover:bg-neutral-100 rounded-lg transition-colors",
                            onClick: ()=>setOpen(!open),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M3 6h18M3 12h18M3 18h18",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        })
                    })
                ]
            }),
            open && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:hidden border-t border-neutral-200 bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto py-4 px-4 flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            onClick: ()=>setOpen(false),
                            className: "px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 rounded-lg transition-colors",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/reviews",
                            onClick: ()=>setOpen(false),
                            className: "px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 rounded-lg transition-colors",
                            children: "Reviews"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/guides",
                            onClick: ()=>setOpen(false),
                            className: "px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 rounded-lg transition-colors",
                            children: "Buying Guides"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/news",
                            onClick: ()=>setOpen(false),
                            className: "px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 rounded-lg transition-colors",
                            children: "Tech News"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/about",
                            onClick: ()=>setOpen(false),
                            className: "px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 rounded-lg transition-colors",
                            children: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pt-2 border-t border-neutral-200 mt-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {})
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 1112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/styles/globals.css
var globals = __webpack_require__(413);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/Header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\SUGANDHA\Downloads\files\components\Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Footer.tsx


const socialLinks = {
    youtube: "https://www.youtube.com/",
    pinterest: "https://www.pinterest.com/"
};
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-gradient-to-b from-neutral-50 to-white border-t border-neutral-200/50 mt-16",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto px-4 py-12 md:py-16",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-white font-bold text-sm",
                                                children: "ST"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-lg font-bold text-neutral-900",
                                            children: "Sugandha Tech"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-sm text-neutral-600 leading-relaxed mb-4",
                                    children: "Independent reviews and practical buying guidance for people choosing tech with more confidence."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: socialLinks.youtube,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-200 hover:bg-brand-100 text-neutral-700 hover:text-brand-600 transition-colors",
                                            "aria-label": "YouTube",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "w-4 h-4",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: socialLinks.pinterest,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "inline-flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-200 hover:bg-brand-100 text-neutral-700 hover:text-brand-600 transition-colors",
                                            "aria-label": "Pinterest",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "w-4 h-4",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.937-.2-2.378.042-3.41.22-.937 1.409-5.98 1.409-5.98s-.36-.723-.36-1.79c0-1.676.973-2.926 2.185-2.926 1.03 0 1.526.773 1.526 1.699 0 1.035-.657 2.584-.994 4.02-.283 1.194.6 2.169 1.775 2.169 2.128 0 3.768-2.245 3.768-5.48 0-2.864-2.058-4.866-4.998-4.866-3.407 0-5.407 2.554-5.407 5.2 0 1.03.39 2.131.873 2.73.096.127.11.236.082.361l-.333 1.36c-.053.22-.174.268-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "font-semibold text-neutral-900 mb-5 text-sm uppercase tracking-wider",
                                    children: "Navigation"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "space-y-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/reviews",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "Reviews"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/guides",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "Buying Guides"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/news",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "Tech News"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/comparisons",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "Comparisons"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/about",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "About Us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "font-semibold text-neutral-900 mb-5 text-sm uppercase tracking-wider",
                                    children: "Policies"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "space-y-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/affiliate-disclosure",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "Affiliate Disclosure"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/editorial-policy",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "Editorial Policy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/privacy-policy",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "Privacy Policy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/cookie-policy",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "Cookie Policy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/terms",
                                                className: "text-neutral-600 hover:text-brand-600 transition-colors",
                                                children: "Terms of Service"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "md:col-span-2 lg:col-span-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "font-semibold text-neutral-900 mb-5 text-sm uppercase tracking-wider",
                                    children: "Stay Updated"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-sm text-neutral-600 mb-4",
                                    children: "Get the latest tech reviews and guides delivered to your inbox."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            placeholder: "Enter your email",
                                            className: "flex-1 px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "px-5 py-2.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-sm whitespace-nowrap",
                                            children: "Subscribe"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "border-t border-neutral-200"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "\xa9 ",
                                currentYear,
                                " Sugandha Tech. All rights reserved."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Made with care for tech enthusiasts worldwide."
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./lib/seo.ts
var seo = __webpack_require__(9051);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
;// CONCATENATED MODULE: ./components/JsonLd.tsx



function JsonLd() {
    const meta = (0,seo/* siteMeta */.N)();
    const base = meta.baseUrl.replace(/\/$/, "");
    const org = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: meta.siteName,
        url: base,
        logo: `${base}/images/logo.svg`,
        sameAs: []
    };
    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: base,
        name: meta.siteName,
        description: meta.description,
        publisher: {
            "@type": "Organization",
            name: meta.siteName
        }
    };
    const json = JSON.stringify([
        org,
        website
    ], null, 2);
    return /*#__PURE__*/ jsx_runtime_.jsx("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: json
        }
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx






const meta = (0,seo/* siteMeta */.N)();
const metadata = {
    metadataBase: new URL(meta.baseUrl),
    title: "Sugandha Tech",
    description: "Independent technology reviews and buying guidance for smarter purchase decisions.",
    alternates: {
        canonical: meta.baseUrl
    },
    robots: {
        index: true,
        follow: true
    },
    openGraph: {
        title: "Sugandha Tech",
        description: "Independent technology reviews and buying guidance for smarter purchase decisions.",
        url: meta.baseUrl,
        siteName: "Sugandha Tech",
        type: "website"
    },
    icons: {
        icon: "/favicon.svg"
    }
};
function RootLayout({ children }) {
    const meta = (0,seo/* siteMeta */.N)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: "bg-white text-neutral-900 antialiased",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(JsonLd, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "min-h-screen flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                                siteName: meta.siteName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                className: "flex-1 w-full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container mx-auto py-6 md:py-8 px-4",
                                    children: children
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 413:
/***/ (() => {



/***/ })

};
;