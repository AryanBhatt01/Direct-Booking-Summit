(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [21661], {
        221661: function($, ue, z) {
            $.exports = function(_) {
                var w = {};

                function f(u) {
                    if (w[u]) return w[u].exports;
                    var s = w[u] = {
                        i: u,
                        l: !1,
                        exports: {}
                    };
                    return _[u].call(s.exports, s, s.exports, f), s.l = !0, s.exports
                }
                return f.m = _, f.c = w, f.d = function(u, s, e) {
                    f.o(u, s) || Object.defineProperty(u, s, {
                        enumerable: !0,
                        get: e
                    })
                }, f.r = function(u) {
                    typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(u, "__esModule", {
                        value: !0
                    })
                }, f.t = function(u, s) {
                    if (s & 1 && (u = f(u)), s & 8 || s & 4 && typeof u == "object" && u && u.__esModule) return u;
                    var e = Object.create(null);
                    if (f.r(e), Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: u
                        }), s & 2 && typeof u != "string")
                        for (var c in u) f.d(e, c, function(t) {
                            return u[t]
                        }.bind(null, c));
                    return e
                }, f.n = function(u) {
                    var s = u && u.__esModule ? function() {
                        return u.default
                    } : function() {
                        return u
                    };
                    return f.d(s, "a", s), s
                }, f.o = function(u, s) {
                    return Object.prototype.hasOwnProperty.call(u, s)
                }, f.p = "", f(f.s = 10)
            }([function(_, u) {
                var f = /^([^=]+)=([^;]*)$/,
                    u = _.exports = function(e, c) {
                        e || (e = {}), typeof e == "string" && (e = {
                            cookie: e
                        }), e.cookie === void 0 && (e.cookie = ""), c !== !1 && (c = !0);
                        var t = function(p) {
                                return p
                            },
                            i = c ? escape : t,
                            l = c ? unescape : t,
                            g = {};
                        return g.get = function(p) {
                            for (var m = e.cookie.split(/;\s*/), d = 0; d < m.length; d++) {
                                var O = (m[d] || "").match(f) || [],
                                    h = l(O[1] || "");
                                if (h === p) return l(O[2] || "")
                            }
                        }, g.set = function(p, m, d) {
                            d || (d = {});
                            var O = i(p) + "=" + i(m);
                            return d.expires && (O += "; expires=" + d.expires), d.path && (O += "; path=" + i(d.path)), d.domain && (O += "; domain=" + i(d.domain)), d.secure && (O += "; secure"), e.cookie = O, O
                        }, g
                    };
                if (typeof document != "undefined") {
                    var s = u(document);
                    u.get = s.get, u.set = s.set
                }
            }, function(_, w, f) {
                "use strict";
                w.decode = w.parse = f(6), w.encode = w.stringify = f(7)
            }, function(_, w, f) {
                var u = f(8),
                    s = f(9);

                function e(c, t, i) {
                    var l = t && i || 0;
                    typeof c == "string" && (t = c === "binary" ? new Array(16) : null, c = null), c = c || {};
                    var g = c.random || (c.rng || u)();
                    if (g[6] = g[6] & 15 | 64, g[8] = g[8] & 63 | 128, t)
                        for (var p = 0; p < 16; ++p) t[l + p] = g[p];
                    return t || s(g)
                }
                _.exports = e
            }, function(_, w) {
                _.exports = function(f) {
                    var u = {};

                    function s(e) {
                        if (u[e]) return u[e].exports;
                        var c = u[e] = {
                            i: e,
                            l: !1,
                            exports: {}
                        };
                        return f[e].call(c.exports, c, c.exports, s), c.l = !0, c.exports
                    }
                    return s.m = f, s.c = u, s.d = function(e, c, t) {
                        s.o(e, c) || Object.defineProperty(e, c, {
                            enumerable: !0,
                            get: t
                        })
                    }, s.r = function(e) {
                        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, s.t = function(e, c) {
                        if (c & 1 && (e = s(e)), c & 8 || c & 4 && typeof e == "object" && e && e.__esModule) return e;
                        var t = Object.create(null);
                        if (s.r(t), Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            }), c & 2 && typeof e != "string")
                            for (var i in e) s.d(t, i, function(l) {
                                return e[l]
                            }.bind(null, i));
                        return t
                    }, s.n = function(e) {
                        var c = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return s.d(c, "a", c), c
                    }, s.o = function(e, c) {
                        return Object.prototype.hasOwnProperty.call(e, c)
                    }, s.p = "", s(s.s = 0)
                }([function(f, u, s) {
                    "use strict";
                    Object.defineProperty(u, "__esModule", {
                        value: !0
                    }), u.getSessionInfo = h;
                    var e = s(1),
                        c = l(e),
                        t = s(4),
                        i = l(t);

                    function l(S) {
                        return S && S.__esModule ? S : {
                            default: S
                        }
                    }
                    var g = "SS_IS_FIRST_SESSION",
                        p = "SS_HAS_LANDED",
                        m = "SS_SESSION_ID",
                        d = ["squarespace.com", "squarespace.net", "sqsp.net"],
                        O = function(C, I) {
                            var E = void 0;
                            d.forEach(function(R) {
                                window.location.hostname.indexOf(R) > -1 && (E = R)
                            }), E = E || window.location.hostname, i.default.set(C, I, {
                                domain: E,
                                path: "/",
                                secure: window.location.protocol.indexOf("https") > -1
                            })
                        };

                    function h() {
                        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                        if (typeof window != "undefined") {
                            if (window._sessionInfo) return window._sessionInfo;
                            try {
                                var C = localStorage.getItem(p),
                                    I = sessionStorage.getItem(g),
                                    E = I === null,
                                    R = C === null || I === "true",
                                    j = i.default.get(m);
                                return localStorage.setItem(p, "true"), E && (R ? sessionStorage.setItem(g, "true") : sessionStorage.setItem(g, "false")), !j && S && (j = (0, c.default)(), O(m, j)), window._sessionInfo = {
                                    isFirstLanding: E,
                                    isFirstSession: R,
                                    sessionId: j
                                }, window._sessionInfo
                            } catch (M) {
                                return console.warn("Unable access local/session storage."), {
                                    isFirstLanding: !1,
                                    isFirstSession: !1
                                }
                            }
                        }
                    }
                }, function(f, u, s) {
                    var e = s(2),
                        c = s(3);

                    function t(i, l, g) {
                        var p = l && g || 0;
                        typeof i == "string" && (l = i === "binary" ? new Array(16) : null, i = null), i = i || {};
                        var m = i.random || (i.rng || e)();
                        if (m[6] = m[6] & 15 | 64, m[8] = m[8] & 63 | 128, l)
                            for (var d = 0; d < 16; ++d) l[p + d] = m[d];
                        return l || c(m)
                    }
                    f.exports = t
                }, function(f, u) {
                    var s = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
                    if (s) {
                        var e = new Uint8Array(16);
                        f.exports = function() {
                            return s(e), e
                        }
                    } else {
                        var c = new Array(16);
                        f.exports = function() {
                            for (var i = 0, l; i < 16; i++) i & 3 || (l = Math.random() * 4294967296), c[i] = l >>> ((i & 3) << 3) & 255;
                            return c
                        }
                    }
                }, function(f, u) {
                    for (var s = [], e = 0; e < 256; ++e) s[e] = (e + 256).toString(16).substr(1);

                    function c(t, i) {
                        var l = i || 0,
                            g = s;
                        return [g[t[l++]], g[t[l++]], g[t[l++]], g[t[l++]], "-", g[t[l++]], g[t[l++]], "-", g[t[l++]], g[t[l++]], "-", g[t[l++]], g[t[l++]], "-", g[t[l++]], g[t[l++]], g[t[l++]], g[t[l++]], g[t[l++]], g[t[l++]]].join("")
                    }
                    f.exports = c
                }, function(f, e) {
                    var s = /^([^=]+)=([^;]*)$/,
                        e = f.exports = function(t, i) {
                            t || (t = {}), typeof t == "string" && (t = {
                                cookie: t
                            }), t.cookie === void 0 && (t.cookie = ""), i !== !1 && (i = !0);
                            var l = function(d) {
                                    return d
                                },
                                g = i ? escape : l,
                                p = i ? unescape : l,
                                m = {};
                            return m.get = function(d) {
                                for (var O = t.cookie.split(/;\s*/), h = 0; h < O.length; h++) {
                                    var S = (O[h] || "").match(s) || [],
                                        C = p(S[1] || "");
                                    if (C === d) return p(S[2] || "")
                                }
                            }, m.set = function(d, O, h) {
                                h || (h = {});
                                var S = g(d) + "=" + g(O);
                                return h.expires && (S += "; expires=" + h.expires), h.path && (S += "; path=" + g(h.path)), h.domain && (S += "; domain=" + g(h.domain)), h.secure && (S += "; secure"), t.cookie = S, S
                            }, m
                        };
                    if (typeof document != "undefined") {
                        var c = e(document);
                        e.get = c.get, e.set = c.set
                    }
                }])
            }, function(_) {
                _.exports = JSON.parse('{"a":"3.8.2"}')
            }, function(_, w) {
                _.exports = z(392338)
            }, function(_, w, f) {
                "use strict";

                function u(e, c) {
                    return Object.prototype.hasOwnProperty.call(e, c)
                }
                _.exports = function(e, c, t, i) {
                    c = c || "&", t = t || "=";
                    var l = {};
                    if (typeof e != "string" || e.length === 0) return l;
                    var g = /\+/g;
                    e = e.split(c);
                    var p = 1e3;
                    i && typeof i.maxKeys == "number" && (p = i.maxKeys);
                    var m = e.length;
                    p > 0 && m > p && (m = p);
                    for (var d = 0; d < m; ++d) {
                        var O = e[d].replace(g, "%20"),
                            h = O.indexOf(t),
                            S, C, I, E;
                        h >= 0 ? (S = O.substr(0, h), C = O.substr(h + 1)) : (S = O, C = ""), I = decodeURIComponent(S), E = decodeURIComponent(C), u(l, I) ? s(l[I]) ? l[I].push(E) : l[I] = [l[I], E] : l[I] = E
                    }
                    return l
                };
                var s = Array.isArray || function(e) {
                    return Object.prototype.toString.call(e) === "[object Array]"
                }
            }, function(_, w, f) {
                "use strict";
                var u = function(t) {
                    switch (typeof t) {
                        case "string":
                            return t;
                        case "boolean":
                            return t ? "true" : "false";
                        case "number":
                            return isFinite(t) ? t : "";
                        default:
                            return ""
                    }
                };
                _.exports = function(t, i, l, g) {
                    return i = i || "&", l = l || "=", t === null && (t = void 0), typeof t == "object" ? e(c(t), function(p) {
                        var m = encodeURIComponent(u(p)) + l;
                        return s(t[p]) ? e(t[p], function(d) {
                            return m + encodeURIComponent(u(d))
                        }).join(i) : m + encodeURIComponent(u(t[p]))
                    }).join(i) : g ? encodeURIComponent(u(g)) + l + encodeURIComponent(u(t)) : ""
                };
                var s = Array.isArray || function(t) {
                    return Object.prototype.toString.call(t) === "[object Array]"
                };

                function e(t, i) {
                    if (t.map) return t.map(i);
                    for (var l = [], g = 0; g < t.length; g++) l.push(i(t[g], g));
                    return l
                }
                var c = Object.keys || function(t) {
                    var i = [];
                    for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && i.push(l);
                    return i
                }
            }, function(_, w) {
                var f = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
                if (f) {
                    var u = new Uint8Array(16);
                    _.exports = function() {
                        return f(u), u
                    }
                } else {
                    var s = new Array(16);
                    _.exports = function() {
                        for (var c = 0, t; c < 16; c++) c & 3 || (t = Math.random() * 4294967296), s[c] = t >>> ((c & 3) << 3) & 255;
                        return s
                    }
                }
            }, function(_, w) {
                for (var f = [], u = 0; u < 256; ++u) f[u] = (u + 256).toString(16).substr(1);

                function s(e, c) {
                    var t = c || 0,
                        i = f;
                    return [i[e[t++]], i[e[t++]], i[e[t++]], i[e[t++]], "-", i[e[t++]], i[e[t++]], "-", i[e[t++]], i[e[t++]], "-", i[e[t++]], i[e[t++]], "-", i[e[t++]], i[e[t++]], i[e[t++]], i[e[t++]], i[e[t++]], i[e[t++]]].join("")
                }
                _.exports = s
            }, function(_, w, f) {
                "use strict";
                f.r(w), f.d(w, "ClientConfig", function() {}), f.d(w, "EventSource", function() {
                    return p
                }), f.d(w, "SourceEnvironment", function() {
                    return g
                }), f.d(w, "default", function() {
                    return X
                }), f.d(w, "SiteVisitorClient", function() {
                    return te
                });
                var u = f(5),
                    s = f(0),
                    e = f.n(s),
                    c = f(1),
                    t = f.n(c),
                    i = f(2),
                    l = f.n(i),
                    g;
                (function(r) {
                    r.DEV = "dev", r.QA = "qa", r.STAGING = "staging", r.PROD = "prod"
                })(g || (g = {}));
                var p;
                (function(r) {
                    r.WEB = "WEB", r.IOS = "IOS", r.ANDROID = "ANDROID", r.SERVER = "SERVER"
                })(p || (p = {}));

                function m(r, a) {
                    if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function")
                }

                function d(r, a) {
                    for (var n = 0; n < a.length; n++) {
                        var o = a[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o)
                    }
                }

                function O(r, a, n) {
                    return a && d(r.prototype, a), n && d(r, n), r
                }

                function h(r, a, n) {
                    return a in r ? Object.defineProperty(r, a, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[a] = n, r
                }
                var S = function() {
                        function r() {
                            m(this, r), h(this, "_analyticsId", void 0), h(this, "_config", void 0), h(this, "_defaultPayload", void 0)
                        }
                        return O(r, [{
                            key: "track",
                            value: function() {
                                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                if (this._config.fireEvents === !1) return Promise.resolve();
                                var o = this._generatePayload(n);
                                return this._config.validateMode ? this._validateEvent(o) : this._config.url ? o ? this._config.useBeacon ? this._sendBeacon(o) : this._sendXhr(o) : Promise.reject(new Error("no payload")) : Promise.resolve()
                            }
                        }, {
                            key: "_getAnalyticsId",
                            value: function() {
                                var n = function(b) {
                                        return !b || b === "null" ? null : b
                                    },
                                    o = n(e.a.get(this._config.storageKey)),
                                    v = n(this._getLocalStorageItem()),
                                    y = n(this._analyticsId),
                                    P = o || v || y || l()();
                                return this._config.setAnalyticsCookie && this._setAnalyticsId(P), P
                            }
                        }, {
                            key: "_getLocalStorageItem",
                            value: function() {
                                var n = !1,
                                    o = localStorage.getItem(this._config.expirationKey);
                                if (o) {
                                    var v = new Date,
                                        y = new Date(o);
                                    n = v > y
                                }
                                return n ? (localStorage.removeItem(this._config.storageKey), localStorage.removeItem(this._config.expirationKey), null) : localStorage.getItem(this._config.storageKey)
                            }
                        }, {
                            key: "_getNormalizedPathname",
                            value: function() {
                                var n = window.location.pathname;
                                return n[n.length - 1] === "/" && (n = n.substring(0, n.length - 1)), n
                            }
                        }, {
                            key: "_generatePayload",
                            value: function(n) {
                                return n
                            }
                        }, {
                            key: "_log",
                            value: function(n) {
                                this._config.logging && console.log(n)
                            }
                        }, {
                            key: "_sendBeacon",
                            value: function(n) {
                                var o = {
                                        type: "application/x-www-form-urlencoded"
                                    },
                                    v = new Blob([t.a.stringify(n)], o);
                                return navigator.sendBeacon(this._config.url, v), Promise.resolve()
                            }
                        }, {
                            key: "_sendXhr",
                            value: function(n, o) {
                                var v = this;
                                o = o || this._config.url;
                                var y = new XMLHttpRequest,
                                    P = JSON.stringify(n),
                                    x = new Set([200, 202]);
                                return new Promise(function(b, A) {
                                    y.open("POST", o, !0), y.setRequestHeader("Content-Type", "application/json"), y.send(P), y.addEventListener("readystatechange", function() {
                                        y.readyState === 4 && (x.has(y.status) ? b() : (v._warn("Error tracking event: HTTP Status ".concat(y.status)), A(new Error("Error tracking event: HTTP Status ".concat(y.status)))))
                                    })
                                })
                            }
                        }, {
                            key: "_setAnalyticsId",
                            value: function(n) {
                                this._analyticsId = n;
                                var o = this._config.cookie,
                                    v = o.path,
                                    y = o.secure,
                                    P = window.location.hostname;
                                this._config.cookie.domains.forEach(function(D) {
                                    window.location.hostname.indexOf(D) > -1 && (P = D)
                                });
                                var x = new Date;
                                x.setDate(x.getDate() + this._config.cookie.daysToStore);
                                var b = x.toUTCString();
                                try {
                                    e.a.set(this._config.storageKey, n, {
                                        domain: P,
                                        expires: b,
                                        path: v,
                                        secure: y
                                    });
                                    var A = document.cookie.indexOf(this._config.storageKey) !== document.cookie.lastIndexOf(this._config.storageKey);
                                    if (A) {
                                        var K = new Date(0).toUTCString();
                                        e.a.set(this._config.storageKey, null, {
                                            expires: K
                                        })
                                    }
                                    localStorage.setItem(this._config.storageKey, n), localStorage.setItem(this._config.expirationKey, b)
                                } catch (D) {
                                    this._warn("Unable to store analyticsId")
                                }
                            }
                        }, {
                            key: "_validateEvent",
                            value: function(n) {
                                return Promise.resolve(n)
                            }
                        }, {
                            key: "_warn",
                            value: function(n) {
                                this._config.logging && console.warn(n)
                            }
                        }]), r
                    }(),
                    C = f(3),
                    I = f(4),
                    E = function() {
                        return {
                            devBaseDomainUrl: "https://clanker-events.stage.sqsp.net",
                            cookie: {
                                daysToStore: 390,
                                domains: ["squarespace.com", "squarespace.net", "sqsp.net"],
                                path: "/",
                                secure: window.location.protocol.indexOf("https") > -1
                            },
                            expirationKey: "SS_ANALYTICS_EXPIRATION",
                            fireEvents: !0,
                            logging: !1,
                            sourceEnvironment: g.DEV,
                            storageKey: "SS_ANALYTICS_ID",
                            url: "https://clanker-events.stage.sqsp.net/api/v1/clanker/events",
                            useBeacon: !0,
                            validateMode: !1,
                            setAnalyticsCookie: !0
                        }
                    };

                function R(r) {
                    "@babel/helpers - typeof";
                    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? R = function(n) {
                        return typeof n
                    } : R = function(n) {
                        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                    }, R(r)
                }

                function j(r, a) {
                    if (r == null) return {};
                    var n = M(r, a),
                        o, v;
                    if (Object.getOwnPropertySymbols) {
                        var y = Object.getOwnPropertySymbols(r);
                        for (v = 0; v < y.length; v++) o = y[v], !(a.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(r, o) && (n[o] = r[o])
                    }
                    return n
                }

                function M(r, a) {
                    if (r == null) return {};
                    var n = {},
                        o = Object.keys(r),
                        v, y;
                    for (y = 0; y < o.length; y++) v = o[y], !(a.indexOf(v) >= 0) && (n[v] = r[v]);
                    return n
                }

                function B(r, a) {
                    var n = Object.keys(r);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(r);
                        a && (o = o.filter(function(v) {
                            return Object.getOwnPropertyDescriptor(r, v).enumerable
                        })), n.push.apply(n, o)
                    }
                    return n
                }

                function T(r) {
                    for (var a = 1; a < arguments.length; a++) {
                        var n = arguments[a] != null ? arguments[a] : {};
                        a % 2 ? B(Object(n), !0).forEach(function(o) {
                            J(r, o, n[o])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach(function(o) {
                            Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(n, o))
                        })
                    }
                    return r
                }

                function J(r, a, n) {
                    return a in r ? Object.defineProperty(r, a, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[a] = n, r
                }

                function k() {
                    return k = Object.assign || function(r) {
                        for (var a = 1; a < arguments.length; a++) {
                            var n = arguments[a];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o])
                        }
                        return r
                    }, k.apply(this, arguments)
                }

                function L(r, a) {
                    if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function")
                }

                function F(r, a) {
                    for (var n = 0; n < a.length; n++) {
                        var o = a[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o)
                    }
                }

                function Q(r, a, n) {
                    return a && F(r.prototype, a), n && F(r, n), r
                }

                function H(r, a) {
                    if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
                    r.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: r,
                            writable: !0,
                            configurable: !0
                        }
                    }), a && V(r, a)
                }

                function V(r, a) {
                    return V = Object.setPrototypeOf || function(o, v) {
                        return o.__proto__ = v, o
                    }, V(r, a)
                }

                function G(r) {
                    return function() {
                        var a = N(r),
                            n;
                        if (ee()) {
                            var o = N(this).constructor;
                            n = Reflect.construct(a, arguments, o)
                        } else n = a.apply(this, arguments);
                        return Z(this, n)
                    }
                }

                function Z(r, a) {
                    return a && (R(a) === "object" || typeof a == "function") ? a : q(r)
                }

                function q(r) {
                    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return r
                }

                function ee() {
                    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                    if (typeof Proxy == "function") return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (r) {
                        return !1
                    }
                }

                function N(r) {
                    return N = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                        return n.__proto__ || Object.getPrototypeOf(n)
                    }, N(r)
                }
                var X = function(r) {
                        H(n, r);
                        var a = G(n);

                        function n(o) {
                            var v, y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            L(this, n), v = a.call(this);
                            var P = E();
                            return v._config = k(P, o), v._defaultPayload = y, "sendBeacon" in navigator || (v._config.useBeacon = !1), v._config.url = v._generateUrl(), v
                        }
                        return Q(n, [{
                            key: "_generatePayload",
                            value: function(v) {
                                var y = new Date,
                                    P = this._config.setAnalyticsCookie,
                                    x = Object(C.getSessionInfo)(P),
                                    b = T({}, this._defaultPayload, {}, v),
                                    A = b.context_website_id,
                                    K = b.custom_schema_name,
                                    D = b.destination_url,
                                    ne = b.member_account_id,
                                    re = b.object_identifier,
                                    ae = b.resolved_locale,
                                    oe = b.website_locale,
                                    ie = b.member_account_locale,
                                    se = j(b, ["context_website_id", "custom_schema_name", "destination_url", "member_account_id", "object_identifier", "resolved_locale", "website_locale", "member_account_locale"]),
                                    Y = {
                                        analytics_id: this._getAnalyticsId(),
                                        browser_language: navigator.language,
                                        browser_window_height: Math.round(window.innerHeight) || null,
                                        browser_window_width: Math.round(window.innerWidth) || null,
                                        client_name: "Javascript Pipeline 2.0 Event Tracker Client",
                                        client_version: I.a,
                                        marketing_id: e.a.get("SS_MID") || null,
                                        page_host: window.location.hostname,
                                        page_path: this._getNormalizedPathname(),
                                        page_query_params: window.location.search,
                                        page_referrer_url: document.referrer,
                                        session_id: x.sessionId || null,
                                        enduser_user_agent: navigator.userAgent,
                                        event_occurrence_timestamp: y.getTime(),
                                        browser_locale: navigator.language
                                    };
                                this._warnOfOverwrittenFields(b, Y);
                                var W = K || this._config.customSchemaName,
                                    U = {
                                        eventContent: T({}, se, {}, Y, {
                                            custom_schema_name: W,
                                            source_environment: this._config.sourceEnvironment,
                                            context_website_id: A || null,
                                            destination_url: D || null,
                                            member_account_id: ne || null,
                                            object_identifier: re || null,
                                            resolved_locale: ae || document.documentElement.lang || "en-US",
                                            website_locale: oe || null,
                                            member_account_locale: ie || null
                                        }),
                                        eventSchemaName: W
                                    };
                                return this._config.logging && this._log({
                                    payload: T({}, U)
                                }), U.eventContent = JSON.stringify(U.eventContent), U
                            }
                        }, {
                            key: "_warnOfOverwrittenFields",
                            value: function(v, y) {
                                var P = this;
                                Object.keys(v).forEach(function(x) {
                                    v.hasOwnProperty(x) && y.hasOwnProperty(x) && P._warn("".concat(x, " is auto populated by @sqs/track-events/v2 and was overwritten"))
                                })
                            }
                        }, {
                            key: "_generateUrl",
                            value: function() {
                                var v = this._config,
                                    y = v.sourceEnvironment,
                                    P = v.devBaseDomainUrl,
                                    x = "";
                                switch (y) {
                                    case g.DEV:
                                        x = "".concat(P, "/api/v1/clanker/events");
                                        break;
                                    case g.QA:
                                    case g.STAGING:
                                        x = "https://clanker-events.stage.sqsp.net/api/v1/clanker/events";
                                        break;
                                    case g.PROD:
                                        x = "https://clanker-events.squarespace.com/api/v1/clanker/events";
                                        break;
                                    default:
                                        this._warn("sourceEnvironment needs to be set to one of dev, staging, or prod"), x = ""
                                }
                                return x
                            }
                        }, {
                            key: "spawnTracker",
                            value: function() {
                                var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                                    y = k({}, this._defaultPayload, v);
                                return new n(this._config, y)
                            }
                        }, {
                            key: "_validateEvent",
                            value: function(v) {
                                var y = "".concat(this._config.devBaseDomainUrl, "/api/v1/clanker/validate-event-content/").concat(this._config.customSchemaName);
                                return this._sendXhr(v.eventContent, y)
                            }
                        }]), n
                    }(S),
                    te = function(r) {
                        H(n, r);
                        var a = G(n);

                        function n(o) {
                            var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            return L(this, n), a.call(this, T({}, o, {
                                setAnalyticsCookie: !1
                            }), v)
                        }
                        return n
                    }(X)
            }])
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/d50ee3f9e03a11c1cf4878c1b12da87c/21661-af65d9c47e84fb52ec42-min.en-US.js.map