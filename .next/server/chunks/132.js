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
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "site-search",
                className: "sr-only",
                children: "Search site"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: "site-search",
                type: "search",
                value: q,
                onChange: (e)=>setQ(e.target.value),
                placeholder: "Search reviews, guides, news...",
                className: "border rounded px-3 py-2 w-64 focus:outline-none focus:ring focus:ring-brand/30"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                className: "px-3 py-2 bg-brand text-white rounded",
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
        className: "bg-white border-b",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-slate-50 border-b border-slate-200 text-center text-xs text-slate-700",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mx-auto py-2 px-4",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Affiliate Disclosure: We may earn a commission from qualifying purchases. Our editorial recommendations are independent and based on research and experience.",
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/affiliate-disclosure",
                                className: "ml-2 font-medium underline",
                                children: "Learn more"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex items-center justify-between py-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "flex items-center gap-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/channels4_profile.jpg",
                            alt: "Sugandha Tech",
                            className: "h-10 w-auto"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "hidden md:flex gap-6 items-center text-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "hover:underline",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/reviews",
                                className: "hover:underline",
                                children: "Reviews"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/guides",
                                className: "hover:underline",
                                children: "Buying Guides"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/news",
                                className: "hover:underline",
                                children: "Tech News"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                className: "hover:underline",
                                children: "About"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:flex items-center gap-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex md:hidden items-center gap-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "aria-label": "Open menu",
                            className: "p-2 rounded focus:outline-none focus:ring",
                            onClick: ()=>setOpen(!open),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                width: "22",
                                height: "22",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M4 6h16M4 12h16M4 18h16",
                                    stroke: "#111827",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            })
                        })
                    })
                ]
            }),
            open && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:hidden border-t bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto py-4 flex flex-col gap-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            onClick: ()=>setOpen(false),
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/reviews",
                            onClick: ()=>setOpen(false),
                            children: "Reviews"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/guides",
                            onClick: ()=>setOpen(false),
                            children: "Buying Guides"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/news",
                            onClick: ()=>setOpen(false),
                            children: "Tech News"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/about",
                            onClick: ()=>setOpen(false),
                            children: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pt-2",
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-gray-50 border-t mt-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-xl font-semibold",
                                children: "SUGANDHA TECH"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-sm text-gray-700",
                                children: "Independent reviews and buying guidance for modern tech choices."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "font-medium",
                                children: "Navigation"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "mt-2 space-y-1 text-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/reviews",
                                            children: "Reviews"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/guides",
                                            children: "Buying Guides"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/news",
                                            children: "Tech News"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/about",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/contact",
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
                                className: "font-medium",
                                children: "Legal & Info"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "mt-2 space-y-1 text-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/affiliate-disclosure",
                                            children: "Affiliate Disclosure"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/editorial-policy",
                                            children: "Editorial Policy"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/privacy-policy",
                                            children: "Privacy Policy"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/cookie-policy",
                                            children: "Cookie Policy"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/terms",
                                            children: "Terms"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "font-medium",
                                children: "Follow"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "mt-2 space-y-1 text-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: socialLinks.youtube,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "YouTube"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: socialLinks.pinterest,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Pinterest"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-3 text-xs text-gray-600",
                                children: "Add your real social URLs in the footer constants later."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "border-t py-4 text-center text-sm text-gray-600",
                children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " Sugandha Tech — All rights reserved."
                ]
            })
        ]
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
    openGraph: {
        title: "Sugandha Tech",
        description: "Independent technology reviews and buying guidance for smarter purchase decisions.",
        url: meta.baseUrl,
        siteName: "Sugandha Tech"
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
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    href: "/favicon.ico"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
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
                                    className: "container py-8",
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


/***/ }),

/***/ 413:
/***/ (() => {



/***/ })

};
;