"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [8141], {
        34663: function(t, e, r) {
            r.r(e), r.d(e, {
                GalleryStrips: function() {
                    return L
                },
                default: function() {
                    return D
                }
            });
            r(94226);
            var n = r(59440),
                o = r(17228),
                i = r(82e3),
                a = r(22902),
                u = r(67373);

            function c(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(t, e, r) {
                return e = f(e),
                    function(t, e) {
                        if (e && ("object" === y(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, l() ? Reflect.construct(e, r || [], f(t).constructor) : e.apply(t, r))
            }

            function l() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (l = function() {
                    return !!t
                })()
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function p(t, e) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function h(t, e, r) {
                return (e = m(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function y(t) {
                return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, y(t)
            }

            function d(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function b(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, m(n.key), n)
                }
            }

            function g(t, e, r) {
                return e && b(t.prototype, e), r && b(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function m(t) {
                var e = function(t, e) {
                    if ("object" != y(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != y(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == y(e) ? e : e + ""
            }
            var v = function() {
                    return g((function t(e) {
                        var r = e.node,
                            n = e.imgWrapper,
                            o = e.img;
                        d(this, t), this.node = r, this.image = o, this.imageWrapper = n, this.lightboxLink = null == n ? void 0 : n.querySelector("a"), this.aspectRatio = (0, a.P6)(this.image), this.node.style.position = "absolute"
                    }), [{
                        key: "getWidth",
                        value: function(t) {
                            return Math.round(this.aspectRatio * t)
                        }
                    }, {
                        key: "setPosition",
                        value: function(t, e, r) {
                            var n = this.aspectRatio * r;
                            return this.node.style.transform = "matrix(1, 0, 0, 1, ".concat(t, ", ").concat(e, ")"), this.node.style.width = "".concat(Math.round(n), "px"), this.image.style.height = "".concat(r, "px"), this.imageWrapper && (this.imageWrapper.style.height = "".concat(r, "px"), this.imageWrapper.style.overflow = "hidden"), this.lightboxLink && (this.lightboxLink.style.height = "100%"), {
                                width: n,
                                height: this.node.clientHeight
                            }
                        }
                    }])
                }(),
                w = function(t) {
                    function e(t) {
                        var r;
                        d(this, e);
                        var n = (r = s(this, e, [t])).props,
                            o = n.container,
                            i = n.nodes,
                            a = n.gutter,
                            u = n.rowTargetHeight,
                            c = n.isReadyClass;
                        return r.state = {
                            gutter: a,
                            rowTargetHeight: u
                        }, r.nodes = r.getNodes(i), r.len = r.nodes.length, r.layout(), setTimeout((function() {
                            o.classList.add(c)
                        }), 0), r
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && p(t, e)
                    }(e, t), g(e, [{
                        key: "getNodes",
                        value: function(t) {
                            var e = this.props,
                                r = e.imageWrapperSelector,
                                n = e.imageSelector;
                            return t.map((function(t) {
                                var e = t.querySelector(r),
                                    o = t.querySelectorAll(n)[0];
                                return new v({
                                    node: t,
                                    imgWrapper: e,
                                    img: o
                                })
                            }))
                        }
                    }, {
                        key: "positionRow",
                        value: function(t, e, r) {
                            for (var n = this.state.gutter, o = 0, i = 0, a = 0, u = t.length; a < u; a += 1) {
                                var c = t[a].setPosition(o, e, r);
                                o += c.width + n, i = Math.max(i, c.height)
                            }
                            return i
                        }
                    }, {
                        key: "setStyles",
                        value: function() {
                            var t, e, r = this.props.container,
                                n = this.state,
                                o = n.gutter,
                                i = n.rowTargetHeight,
                                a = r.clientWidth,
                                u = a + o + .25 * i,
                                c = [{
                                    items: [],
                                    rowWidth: 0
                                }],
                                s = 0;
                            for (t = 0; t < this.len; t += 1) {
                                var l = c[s],
                                    f = this.nodes[t],
                                    p = f.getWidth(i);
                                l.rowWidth + p > u && (c.push({
                                    items: [],
                                    rowWidth: 0
                                }), l = c[s += 1]), l.items.push(f), l.rowWidth += p
                            }
                            var h = 0;
                            if (a > 500 && c.length > 1 && 1 === c[c.length - 1].items.length && c[c.length - 2].items.length > 1) {
                                var y = c[c.length - 1],
                                    d = c[c.length - 2];
                                d.items.push(y.items[0]), d.rowWidth += y.items[0].getWidth(i), c.pop()
                            }
                            for (t = 0, e = c.length; t < e; t += 1) {
                                var b = c[t],
                                    g = Math.round((a - o * (b.items.length - 1)) / b.rowWidth * i);
                                h += this.positionRow(b.items, h, g) + o
                            }
                            r.style.height = "".concat(h - o, "px")
                        }
                    }, {
                        key: "layout",
                        value: function(t) {
                            t && this.setState(function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? c(Object(r), !0).forEach((function(e) {
                                        h(t, e, r[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                    }))
                                }
                                return t
                            }({}, t)), this.setStyles()
                        }
                    }, {
                        key: "destroy",
                        value: function() {}
                    }])
                }(u.A);
            h(w, "defaultProps", {
                container: document.createElement("div"),
                nodes: [],
                imageSelector: "img",
                gutter: 0,
                rowTargetHeight: 300,
                isReadyClass: "masonry-ready"
            });
            var O = r(52008),
                S = r(75396),
                j = r(68651),
                P = r(63285);

            function E(t) {
                return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, E(t)
            }

            function k(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function x(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, C(n.key), n)
                }
            }

            function T(t, e, r) {
                return e = A(e),
                    function(t, e) {
                        if (e && ("object" === E(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, _() ? Reflect.construct(e, r || [], A(t).constructor) : e.apply(t, r))
            }

            function _() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (_ = function() {
                    return !!t
                })()
            }

            function A(t) {
                return A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, A(t)
            }

            function R(t, e) {
                return R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, R(t, e)
            }

            function W(t, e, r) {
                return (e = C(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function C(t) {
                var e = function(t, e) {
                    if ("object" != E(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != E(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == E(e) ? e : e + ""
            }
            var L = function(t) {
                function e(t) {
                    var r;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), W(r = T(this, e), "loadImage", (function(t) {
                        var e = r.props.imageSelector,
                            n = t.querySelector(e);
                        n.onload = function() {
                            t.dataset.loaded = !0
                        }, o.A.loadLazy(n, {
                            load: !0,
                            mode: "cover",
                            useAdvancedPositioning: !0
                        })
                    })), W(r, "onLightboxOpen", (function(t) {
                        r.state.isHistoryEnabled && (t.preventDefault(), history.pushState({}, "", t.currentTarget.href))
                    })), W(r, "onResize", (function() {
                        r.packer.layout({
                            gutter: (0, a.kr)(r.state.gutter)
                        })
                    })), W(r, "onItemShow", (function(t) {
                        var e = t.node;
                        e.dataset.show || (e.dataset.show = !0)
                    })), W(r, "removeLightboxElementFromDOM", (function() {
                        if (r.state.lightboxEnabled) {
                            var t = document.querySelector('[data-lightbox-section-id="'.concat(r.sectionId, '"]'));
                            t && t.remove()
                        }
                    })), W(r, "destroy", (function() {
                        r.unbindListeners(), r.removeLightboxElementFromDOM(), r.stagger.destroy(), r.packer.destroy()
                    })), r.betaFeatureFlags = (0, n.T)(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []);
                    var u = r.props,
                        c = u.listSelector,
                        s = u.itemSelector,
                        l = u.lightboxLinkSelector,
                        f = (0, n.T)(window, "Static.SQUARESPACE_CONTEXT.collection.fullUrl", null),
                        p = {};
                    return t.dataset.props && (p = JSON.parse(t.dataset.props)), r.history = (0, i.J)(), r.node = t, r.sectionId = r.node.dataset.sectionId, r.state = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? k(Object(r), !0).forEach((function(e) {
                                W(t, e, r[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }))
                        }
                        return t
                    }({
                        design: "strips",
                        collectionFullUrl: f,
                        isHistoryEnabled: f && r.history,
                        gutter: (0, a.kr)(20),
                        rowHeight: 300,
                        lightboxEnabled: !1,
                        width: "full"
                    }, p), r.ref = {
                        list: r.node.querySelector(c),
                        items: Array.from(r.node.querySelectorAll(s)),
                        lightboxLinks: Array.from(r.node.querySelectorAll(l))
                    }, r.onResize = (0, S.A)(r.onResize, P.X0), r.stagger = new O.A({
                        nodes: r.ref.items,
                        onEnter: r.onItemShow
                    }), r.packer = new w({
                        container: r.ref.list,
                        nodes: r.ref.items,
                        imageWrapperSelector: ".gallery-strips-item-wrapper",
                        isReadyClass: "gallery-strips-list--ready",
                        gutter: r.state.gutter,
                        rowTargetHeight: r.state.rowHeight
                    }), r.node.dataset.lightbox = r.state.lightboxEnabled, r.loadImages(r.ref.items), r.bindListeners(), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && R(t, e)
                }(e, t), r = e, (u = [{
                    key: "loadImages",
                    value: function(t) {
                        t.forEach(this.loadImage)
                    }
                }, {
                    key: "bindListeners",
                    value: function() {
                        var t = this;
                        this.ref.lightboxLinks.forEach((function(e) {
                            e.addEventListener("click", t.onLightboxOpen)
                        })), j.A.on(this.onResize), this.stagger.start(), this.onResize()
                    }
                }, {
                    key: "unbindListeners",
                    value: function() {
                        var t = this;
                        this.ref.lightboxLinks.forEach((function(e) {
                            e.removeEventListener("click", t.onLightboxOpen)
                        })), j.A.off(this.onResize)
                    }
                }]) && x(r.prototype, u), c && x(r, c), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r;
                var r, u, c
            }(u.A);
            W(L, "defaultProps", {
                listSelector: ".gallery-strips-wrapper",
                itemSelector: ".gallery-strips-item",
                lightboxLinkSelector: ".gallery-strips-lightbox-link",
                imageSelector: "img",
                loadedItemClass: ""
            });
            var D = function(t) {
                return new L(t)
            }
        },
        52008: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return d
                }
            });
            r(94226);
            var n = r(67279),
                o = r.n(n),
                i = r(67373),
                a = r(49099);

            function u(t) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, u(t)
            }

            function c(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, y(n.key), n)
                }
            }

            function s(t, e, r) {
                return e = f(e),
                    function(t, e) {
                        if (e && ("object" === u(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, l() ? Reflect.construct(e, r || [], f(t).constructor) : e.apply(t, r))
            }

            function l() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (l = function() {
                    return !!t
                })()
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function p(t, e) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function h(t, e, r) {
                return (e = y(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function y(t) {
                var e = function(t, e) {
                    if ("object" != u(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != u(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == u(e) ? e : e + ""
            }
            var d = function(t) {
                function e(t) {
                    var r;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), h(r = s(this, e, [t]), "onNodeEnter", (function(t) {
                        var e = t.node,
                            n = r.props,
                            o = n.delay,
                            i = n.stagger;
                        e.__staggerEntered || (e.__staggerEntered = !0, e.__staggerTimeout = setTimeout((function() {
                            r.props.onEnter(t)
                        }), o + r.count * i), r.instant || (r.count += 1, r.count = Math.min(r.props.maxCount, r.count), r.countTimeout()))
                    })), r.state = {
                        isActive: !1
                    }, r.count = 0, r.baseTimeout = null, r.instant = !1, r.viewportWatcher = new(o()), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && p(t, e)
                }(e, t), r = e, (n = [{
                    key: "start",
                    value: function() {
                        this.state.isActive || (this.setState({
                            isActive: !0
                        }), this.viewportWatcher.addNodes({
                            nodes: this.props.nodes,
                            range: [100, 0],
                            callbacks: {
                                onEnter: this.onNodeEnter
                            }
                        }))
                    }
                }, {
                    key: "countTimeout",
                    value: function() {
                        var t = this;
                        clearTimeout(this.baseTimeout), this.baseTimeout = setTimeout((function() {
                            t.count = 0
                        }), 10)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.viewportWatcher.destroy(), clearTimeout(this.baseTimeout), this.props.nodes.forEach((function(t) {
                            clearTimeout(t.__staggerTimeout)
                        }))
                    }
                }]) && c(r.prototype, n), i && c(r, i), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r;
                var r, n, i
            }(i.A);
            h(d, "defaultProps", {
                delay: 50,
                stagger: 50,
                maxCount: 20,
                nodes: [],
                onEnter: a.l
            })
        },
        82e3: function(t, e, r) {
            r.d(e, {
                J: function() {
                    return u
                }
            });
            r(94226);
            var n = Array.prototype.slice,
                o = function() {
                    var t = n.call(arguments);
                    return function() {
                        for (var e = n.call(arguments), r = t.length - 1; r >= 0; r--) e = [t[r].apply(this, e)];
                        return e[0]
                    }
                },
                i = [],
                a = {
                    executeCallbacks: function() {
                        i.forEach((function(t) {
                            return t()
                        }))
                    },
                    trigger: function() {
                        this.executeCallbacks()
                    },
                    registerCallback: function(t) {
                        t && i.push(t)
                    },
                    removeCallback: function(t) {
                        if (t) {
                            var e = i.indexOf(t);
                            e > -1 && i.splice(e, 1)
                        }
                    },
                    on: function(t) {
                        this.registerCallback(t)
                    },
                    off: function(t) {
                        this.removeCallback(t)
                    }
                };
            window.history && window.history.pushState && (history.change = a, history.pushState = o((function() {
                return history.change.trigger()
            }), history.pushState), history.replaceState = o((function() {
                return history.change.trigger()
            }), history.replaceState), window.addEventListener("popstate", (function() {
                history.change.trigger()
            })));
            var u = function() {
                return window.history && window.history.pushState ? history : null
            }
        },
        22902: function(t, e, r) {
            r.d(e, {
                P6: function() {
                    return a
                },
                TT: function() {
                    return l
                },
                _v: function() {
                    return c
                },
                kr: function() {
                    return u
                },
                pG: function() {
                    return s
                }
            });
            r(94226), r(68444);
            var n = r(63285);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, u = [],
                            c = !0,
                            s = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = !0);
                        } catch (t) {
                            s = !0, o = t
                        } finally {
                            try {
                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (s) throw o
                            }
                        }
                        return u
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var a = function(t) {
                    if (!t) return 1;
                    if (!t.dataset.imageDimensions) {
                        var e = t.getAttribute("width"),
                            r = t.getAttribute("height");
                        return e && r ? +e / +r : 1
                    }
                    var n = t.dataset.imageDimensions.split("x");
                    return n[0] && n[1] ? +n[0] / +n[1] : void 0
                },
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
                    if (t <= e) return t;
                    var r = window.innerWidth;
                    return r <= n.fi.sm ? Math.max(e, Math.round(.25 * t)) : r <= n.fi.md ? Math.max(e, Math.round(.5 * t)) : r <= n.fi.lg ? Math.max(e, Math.round(.75 * t)) : t
                },
                c = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        e = window.innerWidth,
                        r = Math.max(1, t);
                    return 1 === r ? r : e <= n.fi.sm ? 2 : e <= n.fi.md ? Math.max(Math.ceil(.5 * r), 2) : e <= n.fi.lg ? Math.ceil(.75 * r) : r
                },
                s = function(t) {
                    var e = 0,
                        r = 0,
                        n = {
                            width: e,
                            height: r
                        };
                    if (!t) return n;
                    if (t.dataset.imageDimensions) {
                        var i = o(t.dataset.imageDimensions.split("x"), 2);
                        e = i[0], r = i[1]
                    } else e = t.getAttribute("width"), r = t.getAttribute("height");
                    return e && r ? {
                        width: +e,
                        height: +r
                    } : n
                },
                l = function(t) {
                    var e = {
                        x: .5,
                        y: .5
                    };
                    if (!t) return e;
                    if (!t.dataset.imageFocalPoint) return e;
                    var r = o(t.dataset.imageFocalPoint.split(","), 2),
                        n = r[0],
                        i = r[1];
                    return n && i ? {
                        x: +n,
                        y: +i
                    } : e
                }
        }
    }
]);