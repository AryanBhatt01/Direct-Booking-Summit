(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [3270], {
        21549: function(t, n, r) {
            var o = r(22032),
                e = r(63862),
                i = r(66721),
                u = r(12749),
                c = r(35749);

            function a(t) {
                var n = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++n < r;) {
                    var o = t[n];
                    this.set(o[0], o[1])
                }
            }
            a.prototype.clear = o, a.prototype.delete = e, a.prototype.get = i, a.prototype.has = u, a.prototype.set = c, t.exports = a
        },
        80079: function(t, n, r) {
            var o = r(63702),
                e = r(70080),
                i = r(24739),
                u = r(48655),
                c = r(31175);

            function a(t) {
                var n = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++n < r;) {
                    var o = t[n];
                    this.set(o[0], o[1])
                }
            }
            a.prototype.clear = o, a.prototype.delete = e, a.prototype.get = i, a.prototype.has = u, a.prototype.set = c, t.exports = a
        },
        68223: function(t, n, r) {
            var o = r(56110)(r(9325), "Map");
            t.exports = o
        },
        53661: function(t, n, r) {
            var o = r(63040),
                e = r(17670),
                i = r(90289),
                u = r(4509),
                c = r(72949);

            function a(t) {
                var n = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++n < r;) {
                    var o = t[n];
                    this.set(o[0], o[1])
                }
            }
            a.prototype.clear = o, a.prototype.delete = e, a.prototype.get = i, a.prototype.has = u, a.prototype.set = c, t.exports = a
        },
        51873: function(t, n, r) {
            var o = r(9325).Symbol;
            t.exports = o
        },
        34932: function(t) {
            t.exports = function(t, n) {
                for (var r = -1, o = null == t ? 0 : t.length, e = Array(o); ++r < o;) e[r] = n(t[r], r, t);
                return e
            }
        },
        26025: function(t, n, r) {
            var o = r(75288);
            t.exports = function(t, n) {
                for (var r = t.length; r--;)
                    if (o(t[r][0], n)) return r;
                return -1
            }
        },
        47422: function(t, n, r) {
            var o = r(31769),
                e = r(77797);
            t.exports = function(t, n) {
                for (var r = 0, i = (n = o(n, t)).length; null != t && r < i;) t = t[e(n[r++])];
                return r && r == i ? t : void 0
            }
        },
        72552: function(t, n, r) {
            var o = r(51873),
                e = r(659),
                i = r(59350),
                u = o ? o.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : u && u in Object(t) ? e(t) : i(t)
            }
        },
        45083: function(t, n, r) {
            var o = r(1882),
                e = r(87296),
                i = r(23805),
                u = r(47473),
                c = /^\[object .+?Constructor\]$/,
                a = Function.prototype,
                s = Object.prototype,
                f = a.toString,
                p = s.hasOwnProperty,
                l = RegExp("^" + f.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!i(t) || e(t)) && (o(t) ? l : c).test(u(t))
            }
        },
        77556: function(t, n, r) {
            var o = r(51873),
                e = r(34932),
                i = r(56449),
                u = r(44394),
                c = o ? o.prototype : void 0,
                a = c ? c.toString : void 0;
            t.exports = function t(n) {
                if ("string" == typeof n) return n;
                if (i(n)) return e(n, t) + "";
                if (u(n)) return a ? a.call(n) : "";
                var r = n + "";
                return "0" == r && 1 / n == -1 / 0 ? "-0" : r
            }
        },
        31769: function(t, n, r) {
            var o = r(56449),
                e = r(28586),
                i = r(61802),
                u = r(13222);
            t.exports = function(t, n) {
                return o(t) ? t : e(t, n) ? [t] : i(u(t))
            }
        },
        55481: function(t, n, r) {
            var o = r(9325)["__core-js_shared__"];
            t.exports = o
        },
        34840: function(t, n, r) {
            var o = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            t.exports = o
        },
        12651: function(t, n, r) {
            var o = r(74218);
            t.exports = function(t, n) {
                var r = t.__data__;
                return o(n) ? r["string" == typeof n ? "string" : "hash"] : r.map
            }
        },
        56110: function(t, n, r) {
            var o = r(45083),
                e = r(10392);
            t.exports = function(t, n) {
                var r = e(t, n);
                return o(r) ? r : void 0
            }
        },
        659: function(t, n, r) {
            var o = r(51873),
                e = Object.prototype,
                i = e.hasOwnProperty,
                u = e.toString,
                c = o ? o.toStringTag : void 0;
            t.exports = function(t) {
                var n = i.call(t, c),
                    r = t[c];
                try {
                    t[c] = void 0;
                    var o = !0
                } catch (t) {}
                var e = u.call(t);
                return o && (n ? t[c] = r : delete t[c]), e
            }
        },
        10392: function(t) {
            t.exports = function(t, n) {
                return null == t ? void 0 : t[n]
            }
        },
        22032: function(t, n, r) {
            var o = r(81042);
            t.exports = function() {
                this.__data__ = o ? o(null) : {}, this.size = 0
            }
        },
        63862: function(t) {
            t.exports = function(t) {
                var n = this.has(t) && delete this.__data__[t];
                return this.size -= n ? 1 : 0, n
            }
        },
        66721: function(t, n, r) {
            var o = r(81042),
                e = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var n = this.__data__;
                if (o) {
                    var r = n[t];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return e.call(n, t) ? n[t] : void 0
            }
        },
        12749: function(t, n, r) {
            var o = r(81042),
                e = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var n = this.__data__;
                return o ? void 0 !== n[t] : e.call(n, t)
            }
        },
        35749: function(t, n, r) {
            var o = r(81042);
            t.exports = function(t, n) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = o && void 0 === n ? "__lodash_hash_undefined__" : n, this
            }
        },
        28586: function(t, n, r) {
            var o = r(56449),
                e = r(44394),
                i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                u = /^\w*$/;
            t.exports = function(t, n) {
                if (o(t)) return !1;
                var r = typeof t;
                return !("number" != r && "symbol" != r && "boolean" != r && null != t && !e(t)) || (u.test(t) || !i.test(t) || null != n && t in Object(n))
            }
        },
        74218: function(t) {
            t.exports = function(t) {
                var n = typeof t;
                return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t
            }
        },
        87296: function(t, n, r) {
            var o, e = r(55481),
                i = (o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
            t.exports = function(t) {
                return !!i && i in t
            }
        },
        63702: function(t) {
            t.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        70080: function(t, n, r) {
            var o = r(26025),
                e = Array.prototype.splice;
            t.exports = function(t) {
                var n = this.__data__,
                    r = o(n, t);
                return !(r < 0) && (r == n.length - 1 ? n.pop() : e.call(n, r, 1), --this.size, !0)
            }
        },
        24739: function(t, n, r) {
            var o = r(26025);
            t.exports = function(t) {
                var n = this.__data__,
                    r = o(n, t);
                return r < 0 ? void 0 : n[r][1]
            }
        },
        48655: function(t, n, r) {
            var o = r(26025);
            t.exports = function(t) {
                return o(this.__data__, t) > -1
            }
        },
        31175: function(t, n, r) {
            var o = r(26025);
            t.exports = function(t, n) {
                var r = this.__data__,
                    e = o(r, t);
                return e < 0 ? (++this.size, r.push([t, n])) : r[e][1] = n, this
            }
        },
        63040: function(t, n, r) {
            var o = r(21549),
                e = r(80079),
                i = r(68223);
            t.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new o,
                    map: new(i || e),
                    string: new o
                }
            }
        },
        17670: function(t, n, r) {
            var o = r(12651);
            t.exports = function(t) {
                var n = o(this, t).delete(t);
                return this.size -= n ? 1 : 0, n
            }
        },
        90289: function(t, n, r) {
            var o = r(12651);
            t.exports = function(t) {
                return o(this, t).get(t)
            }
        },
        4509: function(t, n, r) {
            var o = r(12651);
            t.exports = function(t) {
                return o(this, t).has(t)
            }
        },
        72949: function(t, n, r) {
            var o = r(12651);
            t.exports = function(t, n) {
                var r = o(this, t),
                    e = r.size;
                return r.set(t, n), this.size += r.size == e ? 0 : 1, this
            }
        },
        62224: function(t, n, r) {
            var o = r(50104);
            t.exports = function(t) {
                var n = o(t, (function(t) {
                        return 500 === r.size && r.clear(), t
                    })),
                    r = n.cache;
                return n
            }
        },
        81042: function(t, n, r) {
            var o = r(56110)(Object, "create");
            t.exports = o
        },
        59350: function(t) {
            var n = Object.prototype.toString;
            t.exports = function(t) {
                return n.call(t)
            }
        },
        9325: function(t, n, r) {
            var o = r(34840),
                e = "object" == typeof self && self && self.Object === Object && self,
                i = o || e || Function("return this")();
            t.exports = i
        },
        61802: function(t, n, r) {
            var o = r(62224),
                e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                i = /\\(\\)?/g,
                u = o((function(t) {
                    var n = [];
                    return 46 === t.charCodeAt(0) && n.push(""), t.replace(e, (function(t, r, o, e) {
                        n.push(o ? e.replace(i, "$1") : r || t)
                    })), n
                }));
            t.exports = u
        },
        77797: function(t, n, r) {
            var o = r(44394);
            t.exports = function(t) {
                if ("string" == typeof t || o(t)) return t;
                var n = t + "";
                return "0" == n && 1 / t == -1 / 0 ? "-0" : n
            }
        },
        47473: function(t) {
            var n = Function.prototype.toString;
            t.exports = function(t) {
                if (null != t) {
                    try {
                        return n.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }
        },
        75288: function(t) {
            t.exports = function(t, n) {
                return t === n || t != t && n != n
            }
        },
        58156: function(t, n, r) {
            var o = r(47422);
            t.exports = function(t, n, r) {
                var e = null == t ? void 0 : o(t, n);
                return void 0 === e ? r : e
            }
        },
        56449: function(t) {
            var n = Array.isArray;
            t.exports = n
        },
        1882: function(t, n, r) {
            var o = r(72552),
                e = r(23805);
            t.exports = function(t) {
                if (!e(t)) return !1;
                var n = o(t);
                return "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n
            }
        },
        23805: function(t) {
            t.exports = function(t) {
                var n = typeof t;
                return null != t && ("object" == n || "function" == n)
            }
        },
        40346: function(t) {
            t.exports = function(t) {
                return null != t && "object" == typeof t
            }
        },
        44394: function(t, n, r) {
            var o = r(72552),
                e = r(40346);
            t.exports = function(t) {
                return "symbol" == typeof t || e(t) && "[object Symbol]" == o(t)
            }
        },
        50104: function(t, n, r) {
            var o = r(53661);

            function e(t, n) {
                if ("function" != typeof t || null != n && "function" != typeof n) throw new TypeError("Expected a function");
                var r = function() {
                    var o = arguments,
                        e = n ? n.apply(this, o) : o[0],
                        i = r.cache;
                    if (i.has(e)) return i.get(e);
                    var u = t.apply(this, o);
                    return r.cache = i.set(e, u) || i, u
                };
                return r.cache = new(e.Cache || o), r
            }
            e.Cache = o, t.exports = e
        },
        13222: function(t, n, r) {
            var o = r(77556);
            t.exports = function(t) {
                return null == t ? "" : o(t)
            }
        },
        17383: function(t) {
            t.exports = function(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        43693: function(t) {
            t.exports = function(t, n, r) {
                return n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }
    }
]);