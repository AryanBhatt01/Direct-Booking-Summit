websiteComponents.loader.define("website.components.shape.visitor", [], (() => (() => {
    "use strict";
    var e = {
            9063: (e, t) => {
                var r;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    function(e) {
                        e.ARCHED_WINDOW = "arched-window", e.AWARD = "award", e.CIRCLE = "circle", e.DIAMOND = "diamond", e.EGG = "egg", e.EYE = "eye", e.EIGHT_SIDED_SHIELD = "eight-sided-shield", e.FLOWER = "flower", e.FOUR_LEAF_CLOVER = "four-leaf-clover", e.FOUR_PETAL_FLOWER = "four-petal-flower", e.FOUR_POINT_STAR = "four-point-star", e.GEAR = "gear", e.HORIZONTAL_RIGHT_LEANING_OVAL = "horizontal-right-leaning-oval", e.HORIZONTAL_STACKED_CIRCLES = "horizontal-stacked-circles", e.HOURGLASS = "hourglass", e.KEYSTONE = "keystone", e.NARROW_CORSET = "narrow-corset", e.NARROW_POW = "narrow-pow", e.NARROW_RIBBON = "narrow-ribbon", e.NARROW_VERTICAL_STACKED_PILLS = "narrow-vertical-stacked-pills", e.OCTAGON = "octagon", e.OPEN_BOOK = "open-book", e.PARALLELOGRAM = "parallelogram", e.PENTAGON = "pentagon", e.POINTED_STAR = "pointed-star", e.POINTED_WINDOW = "pointed-window", e.RABBET = "rabbet", e.RECTANGLE = "rectangle", e.ROUNDED_ARCHED_WINDOW = "rounded-arched-window", e.ROUNDED_DIAMOND = "rounded-diamond", e.ROUNDED_EIGHT_POINT_STAR = "rounded-eight-point-star", e.ROUNDED_FOUR_POINT_STAR = "rounded-four-point-star", e.ROUNDED_PENTAGON = "rounded-pentagon", e.ROUNDED_RIBBON = "rounded-ribbon", e.ROUNDED_STAR = "rounded-star", e.ROUNDED_TEN_POINT_STAR = "rounded-ten-point-star", e.STEPPED_CROSS = "stepped-cross", e.TRIANGLE = "triangle", e.TV = "tv", e.VERTICAL_PARALLELOGRAM = "vertical-parallelogram", e.WIDE_HORIZONTAL_STACKED_PILLS = "wide-horizontal-stacked-pills", e.WIDE_VERTICAL_STACKED_PILLS = "wide-vertical-stacked-pills"
                    }(r || (r = {})), t.default = r
            },
            5842: (e, t) => {
                function r({
                    angle: e,
                    distance: t,
                    blur: r
                }) {
                    const s = (180 - e) * Math.PI / 180,
                        o = Math.round(Math.cos(s)) * t.value,
                        i = Math.round(Math.sin(s)) * t.value;
                    return `drop-shadow(${o}${t.unit} ${i}${t.unit} ${r.value}${r.unit})`
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.applyBlendMode = t.applyFilters = t.getDropShadowCss = void 0, t.getDropShadowCss = r, t.applyFilters = function(e, t, s) {
                    let o = "";
                    const i = null == e ? void 0 : e.parentElement,
                        n = null == e ? void 0 : e.querySelector(".sqs-shape-block-container");
                    if (i) {
                        if (n && t) {
                            o = r(t);
                            const e = window.getComputedStyle(n).getPropertyValue("color");
                            i.style.color = e
                        }
                        const e = (null == s ? void 0 : s.enabled) && (null == s ? void 0 : s.blurRadius) ? `blur(${s.blurRadius.value}${s.blurRadius.unit}) ` : "";
                        i.style.filter = `${e}${o}`
                    }
                }, t.applyBlendMode = function(e, t) {
                    const r = null == e ? void 0 : e.parentElement;
                    r && (r.style.mixBlendMode = t)
                }
            },
            4015: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removeResizeObserver = t.attachResizeObserver = t.doesObserverExist = void 0, t.doesObserverExist = function(e, t) {
                    return !(!t._sqsResizeObservers || !t._sqsResizeObservers[e])
                }, t.attachResizeObserver = function({
                    observerName: e,
                    resizeListenerTarget: t,
                    callback: r
                }) {
                    const s = new ResizeObserver((function(e) {
                        for (const t of e) r(t)
                    }));
                    s.observe(t), t._sqsResizeObservers || (t._sqsResizeObservers = {}), t._sqsResizeObservers[e] = s
                }, t.removeResizeObserver = function({
                    resizeListenerTarget: e,
                    observerName: t
                }) {
                    const r = e._sqsResizeObservers && e._sqsResizeObservers[t];
                    r && (r.unobserve(e), e._sqsResizeObservers && (e._sqsResizeObservers[t] = null))
                }
            },
            9794: function(e, t, r) {
                var s = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
                        void 0 === s && (s = r);
                        var o = Object.getOwnPropertyDescriptor(t, r);
                        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, s, o)
                    } : function(e, t, r, s) {
                        void 0 === s && (s = r), e[s] = t[r]
                    }),
                    o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    i = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && s(t, e, r);
                        return o(t, e), t
                    },
                    n = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializeShapeBlockInVisitorView = t.adjustDimensionsForShapeFill = t.adjustDimensionsForShapeFit = t.syncDimensionsForShape = t.setPreserveAspectRatio = t.RESIZE_OBSERVER_NAME = void 0;
                const a = n(r(9063)),
                    l = r(5842),
                    d = i(r(4015));

                function u(e, t) {
                    e && t && Object.assign(e.style, t)
                }

                function c(e) {
                    e && "svg" === e.nodeName && e.setAttribute("preserveAspectRatio", "none")
                }

                function p(e, r) {
                    e && (d.doesObserverExist(t.RESIZE_OBSERVER_NAME, e) && d.removeResizeObserver({
                        resizeListenerTarget: e,
                        observerName: t.RESIZE_OBSERVER_NAME
                    }), c(r), function(e) {
                        return !!e.querySelector("[data-stretched-to-fill]")
                    }(e) ? O(r) : d.attachResizeObserver({
                        observerName: t.RESIZE_OBSERVER_NAME,
                        resizeListenerTarget: e,
                        callback: () => R(e, r)
                    }))
                }

                function R(e, t) {
                    var r;
                    if (!t) return;
                    let s, o;
                    if (function(e) {
                            const t = e.querySelector(".sqs-shape-block-container");
                            if (t) return t.getAttribute("data-shape-name")
                        }(e) === a.default.RECTANGLE) s = 1, o = 1;
                    else {
                        const e = (null === (r = t.getAttribute("viewBox")) || void 0 === r ? void 0 : r.split(" ")) || [];
                        o = Number.parseInt(e.pop() || "0"), s = Number.parseInt(e.pop() || "0")
                    }
                    const i = e.clientWidth,
                        n = e.clientHeight,
                        l = s / o,
                        d = {},
                        c = i / n > l ? "height" : "width";
                    d[c] = "100%", "height" === c ? d.width = n * l + "px" : d.height = i / l + "px", u(t, d)
                }

                function O(e) {
                    u(e, {
                        width: "100%",
                        height: "100%"
                    })
                }
                t.RESIZE_OBSERVER_NAME = "shapeFit", t.setPreserveAspectRatio = c, t.syncDimensionsForShape = p, t.adjustDimensionsForShapeFit = R, t.adjustDimensionsForShapeFill = O, t.initializeShapeBlockInVisitorView = function(e) {
                    const t = e.querySelector(".sqs-shape"),
                        r = null == t ? void 0 : t.parentElement;
                    if (t && p(e, t), r) {
                        try {
                            const t = r.getAttribute("data-drop-shadow"),
                                s = t ? JSON.parse(t) : void 0,
                                o = r.getAttribute("data-blur"),
                                i = o ? JSON.parse(o) : void 0;
                            (0, l.applyFilters)(e, s, i)
                        } catch (e) {
                            console.error(e)
                        }
                        try {
                            const t = r.getAttribute("data-blend-mode");
                            e.classList.contains("sqs-block-editable") && e.parentElement ? (0, l.applyBlendMode)(e.parentElement, t || "normal") : (0, l.applyBlendMode)(e, t || "normal")
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }
            }
        },
        t = {};

    function r(s) {
        var o = t[s];
        if (void 0 !== o) return o.exports;
        var i = t[s] = {
            exports: {}
        };
        return e[s].call(i.exports, i, i.exports, r), i.exports
    }
    var s = {};
    return (() => {
        var e = s;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Visitor = void 0;
        const t = r(9794);
        class o {
            constructor(e) {
                this.root = e, this.reinitialize()
            }
            reinitialize() {
                this.onRenderSuccess(this.root)
            }
            onRenderSuccess(e) {
                (0, t.initializeShapeBlockInVisitorView)(e)
            }
        }
        e.Visitor = o, e.default = e => new o(e)
    })(), s
})()));