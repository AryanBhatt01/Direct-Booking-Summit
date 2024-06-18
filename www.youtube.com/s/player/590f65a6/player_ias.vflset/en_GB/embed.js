(function(g) {
    var window = this;
    /*
     SPDX-License-Identifier: Apache-2.0
    */
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    'use strict';
    var Dtb = function(a) {
            a.mutedAutoplay = !1;
            a.endSeconds = NaN;
            a.limitedPlaybackDurationInSeconds = NaN;
            g.DS(a)
        },
        Etb = function(a) {
            g.Av(a);
            for (var b = 0; b < a.vg.length; b++) {
                var c = a.vg[b],
                    d = a.Zx[b];
                if (d !== c.version) return !0;
                if (!g.xv(c) || c.Wk)
                    if (c.Wk || c.BZ !== g.Dv)(c.L0(c) || Etb(c)) && c.M0(c), c.Wk = !1, c.BZ = g.Dv;
                if (d !== c.version) return !0
            }
            return !1
        },
        Ftb = function(a) {
            g.Av(a);
            if (g.xv(a))
                for (var b = 0; b < a.vg.length; b++) g.yv(a.vg[b], a.Tm[b]);
            a.vg.length = a.Zx.length = a.Tm.length = 0;
            a.Wi && (a.Wi.length = a.xu.length = 0)
        },
        Gtb = function(a, b, c) {
            function d(f) {
                e.Bz = f
            }
            var e = Object.create(g.$lb);
            c && (e.At = !0);
            e.xm = a;
            e.schedule = b;
            a = {};
            e.SB = (a.notify = function() {
                return g.Tka(e)
            }, a.YB = function() {
                if (e.xm !== null) {
                    if (g.vv) throw Error("Schedulers cannot synchronously execute watches while scheduling.");
                    e.Wk = !1;
                    if (!e.iF || Etb(e)) {
                        e.iF = !0;
                        var f = g.wv(e);
                        try {
                            e.Bz(), e.Bz = g.bla, e.xm(d)
                        } finally {
                            g.zv(e, f)
                        }
                    }
                }
            }, a.Tob = function() {
                return e.Bz()
            }, a.destroy = function() {
                if (e.xm !== null || e.schedule !== null) Ftb(e), e.Bz(), e.xm = null, e.schedule = null, e.Bz = g.bla
            }, a[g.Cv] = e, a);
            return e.SB
        },
        d5 = function(a, b) {
            a = g.jv(a);
            try {
                return b()
            } finally {
                g.jv(a)
            }
        },
        Htb = function() {
            return {
                I: "svg",
                W: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    Ic: !0,
                    S: "ytp-svg-fill",
                    W: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        Itb = function() {
            return {
                I: "svg",
                W: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 143 51",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    W: {
                        d: "M58.37 41.39H62.79V27.23C62.79 23.03 62.69 18.69 62.43 13.59H62.93L63.69 16.89L68.67 41.39H73.17L78.07 16.89L78.89 13.59H79.37C79.15 18.45 79.03 22.89 79.03 27.23V41.39H83.45V8.79H75.95L73.41 20.81C72.35 25.85 71.51 32.01 71.01 35.19H70.73C70.33 31.95 69.49 25.81 68.41 20.85L65.81 8.79H58.37V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M91.45 41.73C93.91 41.73 95.83 40.59 97.17 38.13H97.35L97.69 41.39H101.43V17.73H96.47V36.61C95.91 37.67 94.81 38.29 93.73 38.29C92.33 38.29 91.89 37.17 91.89 35.13V17.73H86.93V35.43C86.93 39.49 88.19 41.73 91.45 41.73Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M110.79 41.89C115.15 41.89 117.75 39.83 117.75 35.65C117.75 31.79 115.93 30.39 111.85 27.47C109.67 25.91 108.39 25.09 108.39 22.95C108.39 21.47 109.27 20.61 110.89 20.61C112.69 20.61 113.33 21.81 113.33 25.29L117.45 25.07C117.77 19.57 115.71 17.23 110.97 17.23C106.57 17.23 104.17 19.27 104.17 23.45C104.17 27.25 105.97 28.83 108.93 31.03C111.89 33.23 113.55 34.53 113.55 36.23C113.55 37.75 112.51 38.61 111.01 38.61C109.13 38.61 108.11 36.97 108.29 34.41L104.21 34.49C103.51 39.25 105.89 41.89 110.79 41.89Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M122.5 14.59C124.22 14.59 125.04 13.99 125.04 11.59C125.04 9.33 124.16 8.65 122.5 8.65C120.84 8.65 119.94 9.27 119.94 11.59C119.94 13.99 120.82 14.59 122.5 14.59ZM120.2 41.39H125V17.73H120.2V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M134.95 41.79C137.31 41.79 138.63 41.49 139.71 40.47C141.31 39.01 141.97 36.63 141.85 33.11L137.41 32.87C137.41 36.87 136.81 38.45 135.03 38.45C133.13 38.45 132.77 36.45 132.77 31.97V27.21C132.77 22.41 133.23 20.51 135.07 20.51C136.67 20.51 137.29 22.01 137.29 26.47L141.65 26.15C141.97 22.93 141.59 20.29 140.09 18.83C139.01 17.77 137.37 17.29 135.15 17.29C129.65 17.29 127.75 20.73 127.75 28.03V31.17C127.75 38.47 129.23 41.79 134.95 41.79Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        "clip-rule": "evenodd",
                        d: "M24.99 49C29.74 49.00 34.38 47.59 38.32 44.95C42.27 42.32 45.35 38.57 47.17 34.18C48.98 29.80 49.46 24.97 48.53 20.32C47.61 15.66 45.32 11.38 41.97 8.03C38.61 4.67 34.33 2.38 29.68 1.46C25.02 .53 20.20 1.01 15.81 2.82C11.43 4.64 7.68 7.71 5.04 11.66C2.40 15.61 1 20.25 1 25C0.99 28.15 1.61 31.27 2.82 34.18C4.03 37.09 5.79 39.74 8.02 41.97C10.25 44.19 12.89 45.96 15.81 47.17C18.72 48.37 21.84 49 24.99 49ZM24.99 12.36C27.49 12.36 29.94 13.10 32.02 14.48C34.10 15.87 35.72 17.84 36.68 20.15C37.64 22.46 37.89 25.01 37.41 27.46C36.92 29.91 35.72 32.17 33.95 33.94C32.18 35.70 29.93 36.91 27.48 37.40C25.02 37.89 22.48 37.64 20.17 36.68C17.86 35.72 15.88 34.10 14.50 32.02C13.11 29.94 12.37 27.50 12.37 25C12.37 21.65 13.70 18.44 16.07 16.07C18.43 13.70 21.64 12.37 24.99 12.36ZM24.99 10.43C22.11 10.43 19.29 11.28 16.89 12.88C14.50 14.48 12.63 16.76 11.53 19.42C10.42 22.09 10.13 25.02 10.70 27.85C11.26 30.67 12.65 33.27 14.69 35.31C16.73 37.35 19.32 38.73 22.15 39.30C24.98 39.86 27.91 39.57 30.57 38.46C33.23 37.36 35.51 35.49 37.11 33.09C38.71 30.70 39.57 27.88 39.56 25C39.56 23.08 39.19 21.19 38.46 19.42C37.72 17.65 36.65 16.04 35.30 14.69C33.94 13.34 32.34 12.27 30.57 11.53C28.80 10.80 26.90 10.43 24.99 10.43ZM32.63 24.99L20.36 32.09V17.91L32.63 24.99Z",
                        fill: "white",
                        "fill-rule": "evenodd"
                    }
                }]
            }
        },
        Jtb = function() {},
        e5 = function(a, b) {
            for (; a.length > b;) a.pop()
        },
        Ktb = function(a) {
            a = Array(a);
            e5(a, 0);
            return a
        },
        Ltb = function(a, b, c) {
            if (c == null) a.removeAttribute(b);
            else {
                var d = b.lastIndexOf("xml:", 0) === 0 ? "http://www.w3.org/XML/1998/namespace" : b.lastIndexOf("xlink:", 0) === 0 ? "http://www.w3.org/1999/xlink" : null;
                d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)
            }
        },
        Ntb = function(a, b, c) {
            a = a.style;
            if (typeof c === "string") a.cssText = c;
            else {
                a.cssText = "";
                for (var d in c)
                    if (Mtb.call(c, d)) {
                        b = a;
                        var e = d,
                            f = c[d];
                        e.indexOf("-") >= 0 ? b.setProperty(e, f) : b[e] = f
                    }
            }
        },
        Otb = function(a, b, c) {
            var d = typeof c;
            d === "object" || d === "function" ? a[b] = c : Ltb(a, b, c)
        },
        Ptb = function() {
            var a = new Jtb;
            a.__default = Otb;
            a.style = Ntb;
            return a
        },
        Qtb = function(a, b, c, d) {
            (d[b] || d.__default)(a, b, c)
        },
        Rtb = function(a) {
            this.created = [];
            this.j = [];
            this.node = a
        },
        Stb = function(a, b) {
            this.j = null;
            this.B = a;
            this.key = b;
            this.text = void 0
        },
        Ttb = function(a, b, c) {
            b = new Stb(b, c);
            return a.__incrementalDOMData = b
        },
        f5 = function(a, b) {
            if (a.__incrementalDOMData) return a.__incrementalDOMData;
            var c = a.nodeType === 1 ? a.localName : a.nodeName,
                d = a.nodeType === 1 ? a.getAttribute("key") : null;
            b = Ttb(a, c, a.nodeType === 1 ? d || b : null);
            if (a.nodeType === 1 && (a = a.attributes, c = a.length)) {
                d = b.j || (b.j = Ktb(c * 2));
                for (var e = 0, f = 0; e < c; e += 1, f += 2) {
                    var h = a[e],
                        l = h.value;
                    d[f] = h.name;
                    d[f + 1] = l
                }
            }
            return b
        },
        Utb = function(a, b, c, d, e) {
            return b == c && d == e
        },
        j5 = function(a) {
            for (var b = g5, c = h5(); c !== a;) {
                var d = c.nextSibling;
                b.removeChild(c);
                i5.j.push(c);
                c = d
            }
        },
        h5 = function() {
            return k5 ? k5.nextSibling : g5.firstChild
        },
        Vtb = function(a, b) {
            k5 = h5();
            var c;
            a: {
                if (c = k5) {
                    do {
                        var d = c,
                            e = a,
                            f = b,
                            h = f5(d, f);
                        if (l5(d, e, h.B, f, h.key)) break a
                    } while (b && (c = c.nextSibling))
                }
                c = null
            }
            c || (a === "#text" ? (a = m5.createTextNode(""), Ttb(a, "#text", null)) : (c = m5, d = g5, typeof a === "function" ? c = new a : c = (d = a === "svg" ? "http://www.w3.org/2000/svg" : a === "math" ? "http://www.w3.org/1998/Math/MathML" : d == null || f5(d).B === "foreignObject" ? null : d.namespaceURI) ? c.createElementNS(d, a) : c.createElement(a), Ttb(c, a, b), a = c), i5.created.push(a), c = a);
            a = c;
            if (a !== k5) {
                if (n5.indexOf(a) >= 0)
                    for (b = g5, c = a.nextSibling,
                        d = k5; d !== null && d !== a;) e = d.nextSibling, b.insertBefore(d, c), d = e;
                else g5.insertBefore(a, k5);
                k5 = a
            }
        },
        Wtb = function(a, b) {
            Vtb(a, b);
            g5 = k5;
            k5 = null;
            return g5
        },
        Ytb = function(a, b) {
            b = b === void 0 ? {} : b;
            var c = b.matches === void 0 ? Utb : b.matches;
            return function(d, e, f) {
                var h = i5,
                    l = m5,
                    m = n5,
                    n = o5,
                    p = k5,
                    q = g5,
                    r = l5;
                m5 = d.ownerDocument;
                i5 = new Rtb(d);
                l5 = c;
                o5 = [];
                k5 = null;
                var t = g5 = d.parentNode,
                    u, w = Xtb.call(d);
                if ((u = w.nodeType === 11 || w.nodeType === 9 ? w.activeElement : null) && d.contains(u)) {
                    for (w = []; u !== t;) w.push(u), u = u.parentNode || (t ? u.host : null);
                    t = w
                } else t = [];
                n5 = t;
                try {
                    return a(d, e, f)
                } finally {
                    d = i5, p5 && d.j.length > 0 && p5(d.j), m5 = l, i5 = h, l5 = r, o5 = n, k5 = p, g5 = q, n5 = m
                }
            }
        },
        Ztb = function(a, b, c, d) {
            q5.push(Qtb);
            q5.push(a);
            q5.push(b);
            q5.push(c);
            q5.push(d)
        },
        $tb = function(a) {
            Vtb("#text", null);
            var b = k5;
            var c = f5(b);
            if (c.text !== a) {
                c = c.text = a;
                for (var d = 1; d < arguments.length; d += 1) c = (0, arguments[d])(c);
                b.data !== c && (b.data = c)
            }
        },
        aub = function(a) {
            var b = a.component;
            var c = a.debugInstance;
            a = a.xm;
            var d, e = (d = b.cpb) != null ? d : b.name;
            r5.push({
                name: c ? e + " (" + c + ")" : e,
                KA: !!b.KA
            });
            b = a();
            r5.pop();
            return b
        },
        s5 = function() {
            var a, b;
            return (b = (a = r5[r5.length - 1]) == null ? void 0 : a.KA) != null ? b : !1
        },
        u5 = function(a, b) {
            b = b === void 0 ? {} : b;
            if (!t5.Yea) return a();
            var c = r5.length;
            b.stack && (r5 = [].concat(g.qa(b.stack)));
            try {
                return a()
            } catch (d) {
                throw bub(d), d;
            } finally {
                a = r5.length - c, a > 0 && r5.splice(-a)
            }
        },
        bub = function(a) {
            var b = r5;
            if (b.length !== 0 && !a[cub]) {
                b = b.slice(-20).reverse().map(function(c) {
                    return c.name
                }).join(" > ");
                b = a.message + "\n\nComponent stack: " + b;
                try {
                    a.stack && (a.stack = a.stack.replace(a.message, b)), a.message = b, a[cub] = !0
                } catch (c) {}
            }
        },
        v5 = function(a) {
            this.props = a;
            this.C = !1
        },
        x5 = function(a, b) {
            var c = w5;
            w5 = a;
            try {
                return b()
            } finally {
                w5 = c
            }
        },
        y5 = function(a) {
            var b = w5;
            if (b && b !== dub) {
                var c = r5.slice();
                b.nE || (b.nE = []);
                b.nE.push(function() {
                    return void u5(function() {
                        return void a()
                    }, {
                        stack: c
                    })
                })
            }
        },
        A5 = function(a) {
            var b = !!w5,
                c = eub(b === void 0 ? !0 : b);
            x5(c, function() {
                return void a(c)
            });
            return function() {
                return void z5(c)
            }
        },
        eub = function(a) {
            var b = {};
            (a === void 0 || a) && fub(b);
            return b
        },
        fub = function(a) {
            var b = w5;
            b && (b.Ma || y5(function() {
                return void z5(a)
            }))
        },
        gub = function(a) {
            a.nE && (d5(g.amb, function() {
                for (var b = g.v(a.nE), c = b.next(); !c.done; c = b.next()) c = c.value, c()
            }), a.nE = [])
        },
        z5 = function(a) {
            if (!a.Ma) {
                a.Ma = !0;
                var b;
                (b = a.H_) == null || b.call(a);
                gub(a)
            }
        },
        hub = function() {
            if (s5()) throw Error("Reactive components are not allowed to use useState or other memoization based hooks.");
            return B5
        },
        C5 = function(a) {
            v5.call(this, a);
            var b = this;
            this.tA = [];
            this.D = 0;
            this.G = A5(function(c) {
                b.eJ = c;
                y5(function() {
                    iub(b, b.el)
                })
            })
        },
        iub = function(a, b) {
            if (!a.C && b) {
                a.C = !0;
                try {
                    a.bJ()
                } catch (e) {
                    var c, d;
                    (d = t5.oA) == null || d.call(t5, (c = a.j) == null ? void 0 : c.Yv, e)
                }
                D5.bJ(a);
                a.el = null;
                b.__instance && delete b.__instance
            }
        },
        jub = function(a) {
            if (a) {
                var b;
                (b = a._disposeRef) == null || b.call(a);
                var c;
                (c = a._disposeEffects) == null || c.call(a);
                a.__instance && a.__instance instanceof v5 && (b = a.__instance, iub(b, a), b instanceof C5 && b.G());
                for (b = 0; b < a.childNodes.length; b++) jub(a.childNodes[b])
            }
        },
        lub = function(a) {
            kub.push(a) === 1 && requestAnimationFrame(function() {
                setTimeout(function() {
                    var b = [].concat(g.qa(kub));
                    kub = [];
                    b = g.v(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        c = c.value;
                        try {
                            for (var d = 0; d < c.length; d++) jub(c[d])
                        } catch (e) {
                            d = c = void 0, (d = (c = t5).oA) == null || d.call(c, "unknown", e)
                        }
                    }
                })
            })
        },
        mub = function(a, b) {
            var c = g.Ja.apply(2, arguments),
                d;
            b = (d = b) != null ? d : {};
            d = {};
            return d.type = a, d.props = b, d.children = c, d[E5] = !0, d
        },
        F5 = function(a) {
            return a.children
        },
        H5 = function(a, b) {
            return G5.apply(null, [a,
                b
            ].concat(g.qa(g.Ja.apply(2, arguments))))
        },
        I5 = function(a, b) {
            var c = G5;
            G5 = a;
            try {
                return b()
            } finally {
                G5 = c
            }
        },
        J5 = function() {
            return document.createTextNode("")
        },
        K5 = function(a) {
            a = document.createTextNode(String(a));
            a._isSignalTextNode = !0;
            return a
        },
        L5 = function(a) {
            a = typeof a;
            return a === "string" || a === "number" || a === "boolean"
        },
        M5 = function(a) {
            return a instanceof g.Yd || a instanceof g.ce || a instanceof g.oe || !1
        },
        nub = function(a, b) {
            a.parentElement && a.parentElement.replaceChild(b, a);
            return b
        },
        oub = function(a, b) {
            a.textContent !== String(b) && (a.textContent = String(b));
            return a
        },
        N5 = function(a, b) {
            var c = a[0].parentElement;
            if (c)
                if (a[0].previousSibling || a[a.length - 1].nextSibling) {
                    c.insertBefore(b, a[0]);
                    for (var d = a.length - 1; d >= 0; d--) c.removeChild(a[d])
                } else c.textContent = "", c.appendChild(b);
            return b
        },
        pub = function(a, b) {
            if (a[0].parentElement)
                for (var c = a[0].parentElement, d = b.length, e = a.length, f = d, h = 0, l = 0, m = a[e - 1].nextSibling, n = null; h < e || l < f;)
                    if (a[h] === b[l]) h++, l++;
                    else {
                        for (; a[e - 1] === b[f - 1];) e--, f--;
                        if (e === h)
                            for (var p = f < d ? l ? b[l - 1].nextSibling : b[f - l] : m; l < f;) c.insertBefore(b[l++], p);
                        else if (f === l)
                            for (; h < e;) p = a[h], n && n.has(p) || c.removeChild(p), h++;
                        else if (a[h] === b[f - 1] && b[l] === a[e - 1]) p = a[--e].nextSibling, c.insertBefore(b[l++], a[h++].nextSibling), c.insertBefore(b[--f], p), a[e] = b[f];
                        else {
                            if (!n)
                                for (n = new Map, p = l; p < f;) n.set(b[p], p++);
                            p = n.get(a[h]);
                            if (p == null) c.removeChild(a[h]), h++;
                            else if (l < p && p < f) {
                                for (var q = h, r = 1, t = void 0; ++q < e && q < f && (t = n.get(a[q])) != null && t === p +
                                    r;) r++;
                                if (r > p - l)
                                    for (q = a[h]; l < p;) c.insertBefore(b[l++], q);
                                else c.replaceChild(b[l++], a[h++])
                            } else h++
                        }
                    }
            return b
        },
        O5 = function(a) {
            return g.db(a) ? "nodeType" in a : !1
        },
        rub = function() {
            Ftb(this);
            qub.delete(this);
            z5(this)
        },
        sub = function(a) {
            a.Ma || qub.add(a)
        },
        tub = function(a) {
            a.Ma || P5.add(a)
        },
        uub = function(a) {
            return g.G(function(b) {
                if (b.j == 1) return a.Ma ? b.return() : g.z(b, Promise.resolve(), 2);
                a.YB();
                g.Aa(b)
            })
        },
        xub = function(a, b, c) {
            function d() {
                return void u5(b, {
                    stack: e
                })
            }
            vub++;
            var e = r5.slice(),
                f = Gtb(function() {
                    f.Ma || (wub++, gub(f), x5(f, d))
                }, a, c === void 0 ? !1 : c);
            fub(f);
            f.H_ = function() {
                f.destroy();
                P5.delete(f);
                z5(f)
            };
            return f
        },
        yub = function(a) {
            xub(tub, a, !1).YB()
        },
        zub = function(a) {
            xub(tub, a, !0).YB()
        },
        Cub = function(a) {
            var b = {}.Mob;
            var c = Aub();
            (b ? zub : yub)(function() {
                var d = c[0],
                    e = c.wm,
                    f = I5(Q5, a);
                d = Bub(d, f, c);
                Array.isArray(d) || (c.wm = [d]);
                f = c.wm;
                if (e && (!Array.isArray(e) || e.length !== 0)) {
                    e = Array.isArray(e) ? e[0] : e;
                    var h = e[R5],
                        l = e._disposeEffects;
                    e._disposeEffects = void 0;
                    e = Array.isArray(f) ? f[0] : f;
                    e[R5] = h;
                    e[R5] && (e[R5].v_ = e === f ? 1 : f.length);
                    e._disposeEffects = l
                }
                c[0] = d
            });
            return c
        },
        Bub = function(a, b, c) {
            for (; typeof b === "function";) b = b();
            if (b != null && b[E5]) {
                var d;
                throw Error("Encountered a VNode when only real nodes are expected. Tag name: " + ((d = b.type) == null ? void 0 : d.Yv));
            }
            if (a == null) return b == null ? J5() : L5(b) ? K5(b) : M5(b) ? K5(b.toString()) : O5(b) ? b : b.length === 0 ? J5() : S5(b, c);
            if (O5(a)) {
                if (b == null) return nub(a, J5());
                if (L5(b)) return oub(a, b);
                if (M5(b)) return oub(a, b.toString());
                if (O5(b)) return nub(a, b);
                if (b.length === 0) return nub(a, J5());
                b = S5(b, c);
                pub([a], c.wm);
                return b
            }
            a = T5(a);
            if (b == null) return N5(a, J5());
            if (L5(b)) return N5(a, K5(b));
            if (M5(b)) return N5(a,
                K5(b.toString()));
            if (O5(b)) return pub(a, [b])[0];
            if (b.length === 0) return N5(a, J5());
            b = S5(b, c);
            pub(a, c.wm);
            return b
        },
        T5 = function(a, b, c) {
            return Dub(a, b != null ? b : [], c === void 0 ? !1 : c)
        },
        S5 = function(a, b) {
            var c = T5(a, void 0, !0);
            if (c.length === 0) return J5();
            b.wm = c;
            return a
        },
        Dub = function(a, b, c, d, e) {
            b = b === void 0 ? [] : b;
            c = c === void 0 ? !1 : c;
            e = e === void 0 ? -1 : e;
            if (a == null) return b;
            L5(a) && (a = K5(a), d && c && (d[e] = a));
            M5(a) && (a = K5(a.toString()), d && c && (d[e] = a));
            if (O5(a)) return Eub(b, a);
            if (Array.isArray(a)) {
                for (d = 0; d < a.length; d++) Dub(a[d], b, c, a, d);
                return b
            }
            if (typeof a === "function") return a = Cub(a)[0], d && c && (d[e] = a), Eub(b, a);
            if (a != null && a[E5]) {
                var f = a;
                a = I5(Q5, function() {
                    return H5.apply(null, [f.type, f.props].concat(g.qa(f.children)))
                });
                return Dub(a, b, c)
            }
            throw Error("Unrecognized JSXResult type in flattening.");
        },
        Aub = function(a) {
            var b = [];
            if (!a) return b.wm = [], b;
            b[0] = S5(a, b);
            return b
        },
        Eub = function(a, b) {
            Array.isArray(a) ? a.push(b) : a.appendChild(b);
            return a
        },
        Hub = function(a, b, c) {
            if (Object.hasOwnProperty.call(Fub, a) && (a = Fub[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
                for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
                    var l = a[f],
                        m = l.Ai;
                    if (!m) return l.zd;
                    d === null && (d = {});
                    m = Object.hasOwnProperty.call(d, m) ? d[m] : d[m] = c(m);
                    if (m === l.Ji) return l.zd;
                    m == null && (e = !0)
                }
                if (e) return null
            }
            b = Gub[b];
            return typeof b === "number" ? b : null
        },
        Jub = function(a, b, c) {
            if (c === null || c === void 0) return c;
            var d = Hub(a.tagName.toLowerCase(), b, function() {
                throw Error("Contingent attribute/property lookups are not supported.");
            });
            if (d === null) return c;
            d = Iub[d];
            var e;
            if ((e = d.ou) == null ? 0 : e.call(d, c)) {
                if (d.Ms) return d.Ms(c);
                throw Error("Value Handler's unwrap function does not exist.");
            }
            return d.wr ? d.wr(a.tagName, b, String(c)) : c
        },
        U5 = function(a, b, c) {
            if (c === !1 && Kub.has(b)) Ltb(a, b, null);
            else if (b !== "idomKey" && b !== "skip" && b !== "skipchildren" && b !== "children" && b !== "el") {
                if (b.startsWith("on"))
                    if (b[2] === ":") {
                        if (c === void 0 || c === null) {
                            var d;
                            (d = t5.oA) == null || d.call(t5, a.tagName, Error("The " + b + " attribute was set to undefined or null. This is not supported and may lead to unexpected behavior if an event handler is being conditionally set."));
                            a[b] = void 0;
                            return
                        }
                        if (typeof c !== "object" || c === null) throw Error("Expected " + b + " to be an EventHandler but its type was: " + (typeof c + ". Event handlers must be created using useHandler."));
                        if (typeof c.fY !== "function") throw Error("Expected the event handler for " + b + " to have a 'getFn' property but its keys were: " + (Object.keys(c) + ". Event handlers must be created using useHandler."));
                        var e = c.fY(0),
                            f = b.slice(3);
                        if ((d = s5()) && a["on" + f] === void 0) a.addEventListener(f, e), y5(function() {
                            return void a.removeEventListener(f, e)
                        });
                        else if (d || !Lub.includes(f)) a["on" + f] = e
                    } else {
                        Mub(a, b, c);
                        return
                    }
                typeof c !== "function" || a._disposeEffects != null ? (t5.h8 && (c = Jub(a, b, c)), b === "style" ? Nub(a, b, c) : b.startsWith("prop:") ? a[b.slice(5)] = c : Mub(a, b, c)) : (a._signalProps || (a._signalProps = []), a._signalValues || (a._signalValues = []), a._signalProps.push(b))
            }
        },
        Oub = function(a, b, c) {
            c = (c === void 0 ? {} : c).KA;
            if (b == null ? 0 : b.el) {
                var d = b.el;
                if (typeof d === "function") d(a);
                else {
                    var e;
                    (e = d.Lba) == null || e.call(d, a);
                    a._disposeRef || (a._disposeRef = function() {
                        var f;
                        (f = d.zca) == null || f.call(d);
                        delete a._disposeRef
                    }, c && y5(function() {
                        var f;
                        return void((f = a._disposeRef) == null ? void 0 : f.call(a))
                    }))
                }
            }
        },
        Pub = function(a, b) {
            var c, d, e = A5(function(n) {
                d = n;
                c = I5(Q5, function() {
                    return d5(g.bmb, function() {
                        return a(b)
                    })
                })
            });
            c != null && c.wm || !Array.isArray(c) || (c = Aub(c));
            var f = c != null && c.wm ? c.wm : c;
            var h = Array.isArray(f) ? f[0] : f;
            if (h) {
                var l, m = (l = b == null ? void 0 : b.idomKey) != null ? l : a;
                l = a.V2;
                h._disposeEffects = e;
                e = h[R5] || {};
                Object.assign(e, {
                    key: m,
                    props: l ? b : void 0,
                    v_: f !== h ? f.length : 1,
                    owner: d,
                    R9: !!h[R5],
                    U1: c != null && c.wm ? c : e.U1
                });
                h[R5] = e
            } else e();
            x5(d, function() {});
            return c
        },
        Qub = function(a, b) {
            a._disposeEffects == null && a._signalProps != null && (a._disposeEffects = A5(function() {
                yub(function() {
                    for (var c = a._signalProps, d = a._signalValues, e = 0; e < c.length; e++) {
                        var f = c[e],
                            h = b[f]();
                        d[e] !== h && (d[e] = h, U5(a, f, h))
                    }
                })
            }))
        },
        Rub = function(a, b) {
            a._disposeEffects = A5(function() {
                a._isSignalTextNode = !0;
                yub(function() {
                    var c = b();
                    c == null && (c = "");
                    var d = typeof c;
                    if (d === "object" || d === "function") throw Error("Invalid text node kind: " + d + ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed. See go/cow-errors#invalid-text-nodes for more information.");
                    a.textContent = String(c)
                })
            })
        },
        Uub = function(a, b) {
            var c = g.Ja.apply(2, arguments);
            b != null || (b = {});
            if (a === F5) return c;
            if (typeof a === "function") return aub({
                component: a,
                debugInstance: b.debugInstance,
                xm: function() {
                    c.length > 0 && (b.children = c.length === 1 ? c[0] : c);
                    var f = Sub(a, b);
                    return f === !1 ? Tub(a, b) : f
                }
            });
            var d = document.createElement(a),
                e;
            for (e in b) U5(d, e, b[e]);
            Qub(d, b);
            T5(c, d);
            Oub(d, b, {
                KA: !0
            });
            return d
        },
        Sub = function(a, b) {
            if (a.tqb || a.KA) return !1;
            b || (b = {});
            var c = new C5(b);
            c.B = a;
            var d = d5(g.bmb, function() {
                return c.py(b)
            });
            if (!(d instanceof HTMLElement)) return d;
            d.__instance = c;
            c.el = d;
            c.j = a;
            a.Yv = d.tagName.toLowerCase();
            D5.jE(c);
            return d
        },
        Vub = function(a) {
            a = xub(uub, a, !1);
            uub(a)
        },
        Wub = function(a) {
            Vub(function() {
                d5(null, a)
            })
        },
        Xub = function(a) {
            var b = null,
                c;
            return {
                value: null,
                Lba: function(d) {
                    if (c && d !== c) {
                        var e;
                        (e = b) == null || e();
                        c._disposeRef = void 0
                    }
                    c = d;
                    b = a(d) || null
                },
                zca: function() {
                    var d;
                    (d = b) == null || d()
                }
            }
        },
        Yub = function(a) {
            var b = hub();
            if (b == null) throw Error("A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function directly");
            var c = b.D++;
            b.tA || (b.tA = []);
            var d = b.tA;
            d[c] || (d[c] = {
                key: a,
                host: b
            });
            if (a !== d[c].key) {
                var e, f;
                a = ((e = b.j) == null ? void 0 : e.name) || ((f = b.B) == null ? void 0 : f.name);
                throw Error("Hook called out of order in " + a + ". Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook.");
            }
            return d[c]
        },
        Zub = function(a, b) {
            return !a || a.length !== (b == null ? void 0 : b.length) || a.some(function(c, d) {
                return c !== b[d]
            })
        },
        $ub = function(a, b) {
            var c = Yub("onChange"),
                d = hub();
            Zub(c.dh, b) && (c.dh = b, c.r0 = a, d.oz || (d.oz = []), d.oz.push(c))
        },
        V5 = function(a, b) {
            $ub(function() {
                return d5(null, a)
            }, b)
        },
        avb = function(a) {
            s5() ? Wub(function() {
                d5(null, a)
            }) : $ub(function() {
                return d5(null, a)
            }, [])
        },
        cvb = function(a) {
            var b = [].concat(g.qa(a));
            a.length = 0;
            a = g.v(b);
            for (b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                bvb(b);
                var c = b.r0;
                b.r0 = null;
                if (c = c == null ? void 0 : c()) b.q0 = c
            }
        },
        bvb = function(a) {
            var b = a.q0;
            a.q0 = null;
            b == null || b()
        },
        W5 = function(a) {
            var b = [];
            if (s5()) return a();
            var c = Yub("useMemoInternal");
            Zub(c.dh, b) && (c.dh = b, c.value = a());
            return c.value
        },
        X5 = function() {
            var a = W5(function() {
                return Xub(function(b) {
                    a.value = b;
                    var c = d5(null, function() {});
                    return function() {
                        c == null || c();
                        a.value = null
                    }
                })
            });
            return a
        },
        dvb = function(a) {
            var b = w5,
                c = r5.slice();
            return {
                fY: function() {
                    return function(d) {
                        b.Ma || u5(function() {
                            return a(d)
                        }, {
                            stack: c
                        }) !== !0 && d.stopPropagation()
                    }
                }
            }
        },
        evb = function(a) {
            if (typeof a.children === "function") return a.children(), null;
            a = g.v(a.children);
            for (var b = a.next(); !b.done; b = a.next()) b = b.value, b();
            return null
        },
        gvb = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            u5(function() {
                return fvb(a, b, c)
            })
        },
        fvb = function(a, b, c) {
            c = ((c === void 0 ? 0 : c) ? hvb : ivb)(a, function() {
                Y5(b)
            });
            return c === null ? a : c
        },
        Y5 = function(a) {
            if (a !== void 0 && a !== null)
                if (Array.isArray(a)) {
                    a = g.v(a);
                    for (var b = a.next(); !b.done; b = a.next()) Y5(b.value)
                } else if (a instanceof g.Yd || a instanceof g.ce || a instanceof g.oe) $tb(a.toString());
            else if (O5(a)) {
                if (h5() !== a) throw Error("Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " + a.tagName);
                k5 = h5()
            } else {
                var c = typeof a;
                if (c === "boolean" || c === "number" || c === "string") $tb(a);
                else if (typeof a === "function") {
                    b = g5;
                    var d = h5();
                    if (!d ||
                        !d._isSignalTextNode) {
                        var e = b.insertBefore,
                            f = document.createTextNode("");
                        Rub(f, a);
                        e.call(b, f, d)
                    }
                    k5 = h5()
                } else {
                    if (typeof a.type === "string") {
                        a.Xq || Wtb(a.type, a.props.idomKey);
                        b = g5;
                        for (e in a.props) a.props[e] !== jvb && (f = a.props[e], c = o5, c.push(e), c.push(f));
                        e = t5.attributes;
                        e = e === void 0 ? kvb : e;
                        f = g5;
                        var h = f5(f);
                        c = e;
                        e = o5;
                        h = h.j || (h.j = Ktb(e.length));
                        for (var l = !h.length || !1, m = 0; m < e.length; m += 2) {
                            var n = e[m];
                            if (l) h[m] = n;
                            else if (h[m] !== n) break;
                            var p = e[m + 1];
                            if (l || h[m + 1] !== p) h[m + 1] = p, Ztb(f, n, p, c)
                        }
                        if (m < e.length || m < h.length) {
                            for (m =
                                l = m; m < h.length; m += 2) Z5[h[m]] = h[m + 1];
                            for (m = l; m < e.length; m += 2) l = e[m], n = e[m + 1], Z5[l] !== n && Ztb(f, l, n, c), h[m] = l, h[m + 1] = n, delete Z5[l];
                            e5(h, e.length);
                            for (d in Z5) Ztb(f, d, void 0, c), delete Z5[d]
                        }
                        d = lvb;
                        lvb = f = q5.length;
                        for (c = d; c < f; c += 5)(0, q5[c])(q5[c + 1], q5[c + 2], q5[c + 3], q5[c + 4]);
                        lvb = d;
                        e5(q5, d);
                        e5(e, 0);
                        Qub(b, a.props);
                        (a.props.skip || a.props.skipchildren) && g5.hasChildNodes() ? k5 = g5.lastChild : Y5(a.children);
                        j5(null);
                        k5 = g5;
                        g5 = g5.parentNode;
                        a.Xq && (a.Xq = !1);
                        Oub(b, a.props);
                        return b
                    }
                    if (a.type === F5) Y5(a.children);
                    else if (!mvb(a)) {
                        try {
                            nvb(a)
                        } catch (q) {
                            d =
                                q, (f = t5.oA) == null || f.call(t5, (b = a.type) == null ? void 0 : b.Yv, d)
                        }
                        a.Xq && (j5(null), k5 = g5, g5 = g5.parentNode, a.Xq = !1)
                    }
                }
            }
        },
        ovb = function(a, b) {
            var c;
            ((c = a.prototype) == null ? void 0 : c.py) === void 0 ? (b = new C5(b), b.B = a) : b = new a(b);
            b.j = a;
            b.GN = {
                kR: b.state,
                uZ: !1
            };
            return b
        },
        nvb = function(a) {
            var b = a.type,
                c = b.Yv;
            if (b === evb) a.props.children = a.children, b(a.props);
            else {
                a.children.length > 0 && (a.props.children = a.children);
                var d;
                (d = a.props).idomKey || (d.idomKey = b);
                if (c) {
                    var e = Wtb(c, a.props.idomKey);
                    a.Xq = !0;
                    var f = e.__instance
                }
                f || (f = ovb(b, a.props), f.props = null, e && (e.__instance = f, f.el = e));
                var h;
                c = ((h = f.GN) != null ? h : {
                    kR: f.state,
                    uZ: !1
                }).kR;
                f.GN = void 0;
                b.K8 && (c = b.K8(a.props, c));
                f.props = a.props;
                f.state = c;
                h = function() {
                    var l = f;
                    D5.TW(l);
                    var m = l.py(l.props);
                    m ? (l.props.idomKey && (m.props.idomKey = l.props.idomKey), l = m) : l = void 0;
                    if (m = l)
                        if (m.Xq = a.Xq, l = Y5(m), a.Xq = m.Xq, !b.Yv)
                            if (l) b.Yv = l.tagName.toLowerCase(), l.__instance = f, f.el = l;
                            else {
                                var n;
                                if ((n = f.tA) == null ? 0 : n.length) {
                                    var p;
                                    (p = t5.oA) == null || p.call(t5, "unknown", Error("A component used hooks, but failed to return a host element"))
                                }
                            }
                    f.jE();
                    D5.jE(f)
                };
                (c = f.B) ? aub({
                    component: c,
                    debugInstance: f.props.debugInstance,
                    xm: h
                }): h()
            }
        },
        mvb = function(a) {
            var b = a.type;
            if (!b.KA) return !1;
            a.props.children = a.children.length > 1 ? a.children : a.children[0];
            var c, d = (c = a.props.idomKey) != null ? c : a.type,
                e;
            if (h5() && ((e = h5()[R5]) == null ? void 0 : e.key) === d) {
                d = h5();
                c = d[R5];
                if (!c) throw Error("Reactive data has been lost on node. Tag name: " + d.tagName);
                if (!b.V2) {
                    var f;
                    (f = c.Yrb) == null || f.call(c, a.props);
                    pvb(c);
                    return !0
                }
                f = w5;
                b = b.V2(a.props, c.props, f !== null ? f : c.owner, c.R9);
                f = qvb(b);
                rvb(a.props, c.props);
                f > 0 ? Y5(b) : k5 = h5();
                return !0
            }(b = aub({
                component: a.type,
                debugInstance: a.props.debugInstance,
                xm: function() {
                    return Tub(a.type, a.props)
                }
            })) && svb(b);
            return !0
        },
        qvb = function(a) {
            if (a) {
                if (Array.isArray(a)) {
                    var b = 0;
                    a = g.v(a);
                    for (var c = a.next(); !c.done; c = a.next())(c = c.value) && (b = c.type === F5 ? b + c.children.length : b + 1);
                    return b
                }
                if (a.type === F5) return a.children.length
            } else return 0;
            return 1
        },
        rvb = function(a, b) {
            b && (b.children = a.children, b.g8 = a.g8, b.fallback = a.fallback)
        },
        tvb = function(a) {
            for (var b = 0; b < T5(a).length; b++) k5 = h5()
        },
        pvb = function(a) {
            var b = uvb();
            if (b) tvb(b);
            else
                for (var c = 0; c < a.v_; c++)(b = uvb()) ? tvb(b) : k5 = h5()
        },
        uvb = function() {
            var a;
            return (a = h5()[R5]) == null ? void 0 : a.U1
        },
        svb = function(a) {
            a = a != null && a.wm ? a.wm : a;
            a = Array.isArray(a) ? a : [a];
            a = g.v(a);
            for (var b = a.next(); !b.done; b = a.next()) g5.insertBefore(b.value, h5()), k5 = h5()
        },
        vvb = function(a) {
            var b = hub(),
                c = W5(function() {
                    return {
                        value: typeof a === "function" ? a() : a
                    }
                });
            return [c.value, function(d) {
                if (B5 !== null) throw Error("Can't set state during rendering");
                c.value = typeof d === "function" ? d(c.value) : d;
                b.GN = {
                    kR: b.state,
                    uZ: !0
                };
                x5(b.eJ, function() {
                    I5(mub, function() {
                        if (b.el) {
                            var e, f = {},
                                h = (f.props = b.props, f.type = b.j, f.children = (e = b.props.children) != null ? e : [], f[E5] = !0, f);
                            try {
                                gvb(b.el, h, !0)
                            } catch (n) {
                                var l, m;
                                (m = t5.oA) == null || m.call(t5, (l = b.j) == null ? void 0 : l.Yv, n)
                            }
                        }
                    })
                })
            }]
        },
        wvb = function() {
            return W5(function() {
                return {
                    value: null
                }
            })
        },
        Avb = function(a) {
            var b = xvb;
            yvb.push(a);
            zvb || (b(function() {
                for (var c = g.v(yvb), d = c.next(); !d.done; d = c.next()) d = d.value, d();
                yvb.length = 0;
                zvb = !1
            }), zvb = !0)
        },
        xvb = function(a) {
            Promise.resolve().then(a)
        },
        Bvb = function(a) {
            a = g.v(vvb(a));
            var b = a.next().value,
                c = a.next().value;
            return [b, function(d) {
                Avb(function() {
                    c(d)
                })
            }]
        },
        Cvb = function(a) {
            function b() {
                var l = a.J.bd() ? "Hide more Shorts" : "Hide more videos";
                e(l)
            }
            var c = g.v(vvb("Hide more videos")),
                d = c.next().value,
                e = c.next().value;
            V5(function() {
                var l = a.J;
                l.addEventListener("videodatachange", b);
                return function() {
                    l.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            var f = W5(function() {
                    return (new g.SE(g.fF())).element
                }),
                h = X5();
            avb(function() {
                h.value.appendChild(f)
            });
            return H5("button", {
                class: "ytp-button ytp-collapse",
                "aria-label": d,
                "on:click": dvb(function() {
                    a.action && a.action()
                })
            }, H5("div", {
                class: "ytp-collapse-icon",
                el: h,
                skip: !0
            }))
        },
        Dvb = function(a) {
            function b() {
                var h = a.J.bd() ? "More Shorts" : "More videos";
                e(h)
            }
            var c = g.v(Bvb("More videos")),
                d = c.next().value,
                e = c.next().value,
                f = X5();
            V5(function() {
                a.SB && (a.SB.value = f.value)
            }, [a.SB]);
            V5(function() {
                var h = a.J;
                h.addEventListener("videodatachange", b);
                return function() {
                    h.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            return H5("button", {
                el: f,
                class: "ytp-button ytp-expand",
                "on:click": dvb(function() {
                    a.action && a.action()
                })
            }, d)
        },
        Evb = function(a, b) {
            var c = wvb();
            V5(function() {
                var d = new g.g2(a);
                d.B = !0;
                c.value = d;
                return function() {
                    var e;
                    (e = c.value) == null || e.dispose()
                }
            }, [a,
                b
            ]);
            return c
        },
        Fvb = function(a) {
            function b(w) {
                a: {
                    var A = g.v([1,
                        16, 32
                    ]);
                    for (var C = A.next(); !C.done; C = A.next())
                        if (g.GF(w, C.value)) {
                            A = !0;
                            break a
                        }
                    A = !1
                }
                if (!A) {
                    var F;
                    (F = p.value) != null && F.suggestionData.length > 0 && h(g.GF(w, 4) && !g.GF(w, 2) && !g.GF(w, 1024))
                }
            }

            function c() {
                b(a.J.getPlayerStateObject())
            }

            function d(w) {
                b(w.state)
            }
            var e = g.v(Bvb(!1)),
                f = e.next().value,
                h = e.next().value,
                l = g.v(Bvb(!1));
            e = l.next().value;
            var m = l.next().value,
                n = X5(),
                p = Evb(a.J, a.Pe),
                q = X5();
            l = wvb();
            var r = wvb();
            V5(function() {
                var w = a.J,
                    A = w.bd() ? 157212 : 172777;
                r.value = new g.I;
                w.createClientVe(q.value, r.value, A);
                w.addEventListener("presentingplayerstatechange", d);
                w.addEventListener("videodatachange", c);
                A = w.U().controlsType === "0";
                g.Wv(w.getRootNode(), "ytp-pause-overlay-controls-hidden", A);
                return function() {
                    w.removeEventListener("videodatachange", c);
                    w.removeEventListener("presentingplayerstatechange",
                        d);
                    var C;
                    (C = r.value) == null || C.dispose()
                }
            }, [a.J]);
            V5(function() {
                var w;
                (w = p.value) == null || w.Ja(n.value)
            }, [p]);
            var t = a.J;
            if (f)
                if (g.Wv(t.getRootNode(), "ytp-expand-pause-overlay", !e), e) l.value.focus();
                else {
                    var u = p.value;
                    g.h2(u);
                    u.show();
                    q.value.focus()
                }
            q.value && t.logVisibility(q.value, f && !e);
            return H5("ytp-pause-overlay", {
                el: q,
                class: "ytp-pause-overlay",
                "aria-hidden": !f
            }, H5(Cvb, {
                J: a.J,
                Pe: a.Pe,
                action: function() {
                    m(!0)
                }
            }), H5(Dvb, {
                J: a.J,
                Pe: a.Pe,
                action: function() {
                    m(!1)
                },
                SB: l
            }), H5("div", {
                el: n,
                skip: !0
            }))
        },
        Gvb = function(a) {
            g.W.call(this, {
                I: "div",
                S: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.K = this.B = 0;
            this.G = new g.SJ(this);
            this.j = [];
            this.suggestionData = [];
            this.columns = this.containerWidth = 0;
            this.title = new g.W({
                I: "h2",
                S: "ytp-related-title",
                va: "{{title}}"
            });
            this.previous = new g.W({
                I: "button",
                Ka: ["ytp-button", "ytp-previous"],
                W: {
                    "aria-label": "Show previous suggested videos"
                },
                V: [g.aF()]
            });
            this.qa = new g.f2(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.D = this.C = 0;
            this.N = !0;
            this.next = new g.W({
                I: "button",
                Ka: ["ytp-button", "ytp-next"],
                W: {
                    "aria-label": "Show more suggested videos"
                },
                V: [g.bF()]
            });
            g.M(this, this.G);
            a = a.U();
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.Sv(this.element, "ytp-error-overlay-round-corners");
            this.Y = a.D;
            g.M(this, this.title);
            this.title.Ja(this.element);
            this.suggestions = new g.W({
                I: "div",
                S: "ytp-suggestions"
            });
            g.M(this, this.suggestions);
            this.suggestions.Ja(this.element);
            g.M(this, this.previous);
            this.previous.Ja(this.element);
            this.previous.listen("click", this.U4, this);
            g.M(this, this.qa);
            for (var c = {
                    xA: 0
                }; c.xA < 16; c = {
                    xA: c.xA
                }, c.xA++) {
                var d = new g.W({
                    I: "a",
                    S: "ytp-suggestion-link",
                    W: {
                        href: "{{link}}",
                        target: a.Y,
                        "aria-label": "{{aria_label}}"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-suggestion-image",
                        V: [{
                            I: "div",
                            W: {
                                "data-is-live": "{{is_live}}"
                            },
                            S: "ytp-suggestion-duration",
                            va: "{{duration}}"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-suggestion-title",
                        W: {
                            title: "{{hover_title}}"
                        },
                        va: "{{title}}"
                    }, {
                        I: "div",
                        S: "ytp-suggestion-author",
                        va: "{{views_or_author}}"
                    }]
                });
                g.M(this, d);
                d.Ja(this.suggestions.element);
                var e = d.Ga("ytp-suggestion-link");
                g.Ns(e, "transitionDelay", c.xA / 20 + "s");
                this.G.T(e, "click", function(f) {
                    return function(h) {
                        var l = f.xA,
                            m = b.suggestionData[l],
                            n = m.sessionData;
                        g.wR(b.api.U()) && b.api.L("web_player_log_click_before_generating_ve_conversion_params") ? (b.api.logClick(b.j[l].element), l = m.fl(), m = {}, g.KYa(b.api, m, "emb_rel_err"), l = g.yo(l, m), g.iU(l, b.api, h)) : g.hU(h, b.api, b.Y, n || void 0) && b.api.gp(m.videoId, n, m.playlistId)
                    }
                }(c));
                this.j.push(d)
            }
            g.M(this, this.next);
            this.next.Ja(this.element);
            this.next.listen("click", this.T4, this);
            this.G.T(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.ob().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        Hvb = function(a, b) {
            if (a.api.U().L("web_player_log_click_before_generating_ve_conversion_params"))
                for (var c = Math.floor(-a.C / (a.D + a.B)), d = Math.min(c + a.columns, a.suggestionData.length) - 1; c <= d; c++) a.api.logVisibility(a.j[c].element, b)
        },
        Ivb = function(a) {
            a.next.element.style.bottom =
                a.K + "px";
            a.previous.element.style.bottom = a.K + "px";
            var b = a.C,
                c = a.containerWidth - a.suggestionData.length * (a.D + a.B);
            g.Wv(a.element, "ytp-scroll-min", b >= 0);
            g.Wv(a.element, "ytp-scroll-max", b <= c)
        },
        Jvb = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.j[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.fl(),
                    h = a.api.U();
                if (g.wR(h) && !h.L("web_player_log_click_before_generating_ve_conversion_params")) {
                    var l = {};
                    g.yT(a.api, "addEmbedsConversionTrackingParams", [l]);
                    f = g.yo(f, g.RO(l, "emb_rel_err"))
                }
                d.element.style.display = "";
                l = d.Ga("ytp-suggestion-title");
                g.Bla.test(c.title) ? l.dir = "rtl" : g.emb.test(c.title) && (l.dir = "ltr");
                l = d.Ga("ytp-suggestion-author");
                g.Bla.test(e) ? l.dir = "rtl" : g.emb.test(e) && (l.dir = "ltr");
                d.update({
                    views_or_author: e,
                    duration: c.isLivePlayback ? "Live" : c.lengthSeconds ? g.QF(c.lengthSeconds) : "",
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback
                });
                e = d.Ga("ytp-suggestion-image");
                f = c.gh();
                e.style.backgroundImage = f ? "url(" + f + ")" : "";
                h.L("web_player_log_click_before_generating_ve_conversion_params") && (a.api.createServerVe(d.element, d), (c = (c = c.sessionData) && c.itct) && a.api.setTrackingParams(d.element, c))
            }
            for (; b < a.j.length; b++) a.j[b].element.style.display = "none";
            Ivb(a)
        },
        $5 = function(a) {
            g.MV.call(this, a);
            var b = this;
            this.j = null;
            var c = a.U(),
                d = {
                    target: c.Y
                },
                e = ["ytp-small-redirect"];
            c.C ? e.push("no-link") : (c = g.TR(c), d.href = c, d["aria-label"] = "Visit YouTube to search for more videos");
            var f = new g.W({
                I: "a",
                Ka: e,
                W: d,
                V: [{
                    I: "svg",
                    W: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    V: [{
                        I: "path",
                        W: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        I: "path",
                        W: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                }]
            });
            f.Ja(this.element);
            a.createClientVe(f.element, this, 178053);
            this.T(f.element, "click", function(h) {
                Kvb(b, h, f.element)
            });
            g.M(this, f);
            a.U().C || (this.j = new Gvb(a), this.j.Ja(this.element), g.M(this, this.j));
            this.T(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.ob().getPlayerSize())
        },
        Kvb = function(a, b, c) {
            b.preventDefault();
            a.api.logClick(c);
            b = c.getAttribute("href");
            c = {};
            g.yT(a.api, "addEmbedsConversionTrackingParams", [c]);
            b = g.gd(c) ? b : g.yo(b, c);
            g.Qe(b)
        },
        Lvb = function(a, b) {
            a.Ga("ytp-error-content").style.paddingTop = "0px";
            var c = a.Ga("ytp-error-content"),
                d = c.clientHeight;
            a.j && a.j.resize(b, b.height - d);
            c.style.paddingTop = (b.height - (a.j ? a.j.element.clientHeight : 0)) / 2 - d / 2 + "px"
        },
        Ovb = function(a, b) {
            var c = a.api.U(),
                d;
            b.reason && (Mvb(b.reason) ? d = g.$E(b.reason) : d = g.NV(g.ZE(b.reason)), a.Cd(d, "content"));
            var e;
            b.subreason && (Mvb(b.subreason) ? e = g.$E(b.subreason) : e = g.NV(g.ZE(b.subreason)), a.Cd(e, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer) {
                d = a.Ga("ytp-error-content-wrap-subreason");
                b = b.proceedButton.buttonRenderer;
                var f = g.yf("A");
                if (b.text && b.text.simpleText && (e = b.text.simpleText, f.textContent = e, !Nvb(d, e) && (!c.C || c.embedsErrorLinks))) {
                    var h;
                    c = (h = g.V(b == null ? void 0 : b.navigationEndpoint, g.lF)) == null ?
                        void 0 : h.url;
                    var l;
                    h = (l = g.V(b == null ? void 0 : b.navigationEndpoint, g.lF)) == null ? void 0 : l.target;
                    c && (f.setAttribute("href", c), a.api.createClientVe(f, a, 178424), a.T(f, "click", function(m) {
                        Kvb(a, m, f)
                    }));
                    h && f.setAttribute("target", h);
                    l = g.yf("DIV");
                    l.appendChild(f);
                    d.appendChild(l)
                }
            }
        },
        Mvb = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        Nvb = function(a, b) {
            a = g.nf("A", a);
            for (var c = 0; c < a.length; c++)
                if (a[c].textContent === b) return !0;
            return !1
        },
        Pvb = function(a, b) {
            g.W.call(this, {
                I: "a",
                Ka: ["ytp-impression-link"],
                W: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                V: [{
                    I: "div",
                    S: "ytp-impression-link-content",
                    W: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-impression-link-text",
                        va: "Watch on"
                    }, {
                        I: "div",
                        S: "ytp-impression-link-logo",
                        va: "{{logoSvg}}"
                    }]
                }]
            });
            this.api = a;
            this.Pe = b;
            this.updateValue("target", a.U().Y);
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(this.api, "presentingplayerstatechange", this.xk);
            this.T(this.api, "videoplayerreset", this.JU);
            this.T(this.element,
                "click", this.onClick);
            this.onVideoDataChange();
            this.JU()
        },
        Qvb = function(a) {
            var b = {};
            g.yT(a.api, "addEmbedsConversionTrackingParams", [b]);
            return g.yo(a.api.getVideoUrl(), g.RO(b, "emb_imp_woyt"))
        },
        a6 = function(a) {
            g.W.call(this, {
                I: "div",
                Ka: ["ytp-mobile-a11y-hidden-seek-button"],
                V: [{
                    I: "button",
                    Ka: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    W: {
                        "aria-label": "Rewind 10 seconds",
                        "aria-hidden": "false"
                    }
                }, {
                    I: "button",
                    Ka: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    W: {
                        "aria-label": "Fast forward 10 seconds",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = a;
            this.j = this.Ga("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.Ga("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.createClientVe(this.j, this,
                141902);
            this.api.createClientVe(this.forwardButton, this, 141903);
            this.T(this.api, "presentingplayerstatechange", this.xk);
            this.T(this.j, "click", this.B);
            this.T(this.forwardButton, "click", this.C);
            this.xk()
        },
        b6 = function(a) {
            g.W.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-endscreen-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-end-panel",
                    V: [{
                        I: "button",
                        Ka: ["ytp-muted-autoplay-end-text", "ytp-button"],
                        va: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.D = this.Ga("ytp-muted-autoplay-end-panel");
            this.B = !1;
            this.api.createClientVe(this.element, this, 52428);
            this.T(this.api, "presentingplayerstatechange", this.C);
            this.T(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
            this.listen("click", this.onClick);
            this.hide()
        },
        c6 = function(a) {
            var b = a.U();
            g.W.call(this, {
                I: "a",
                Ka: ["ytp-watermark", "yt-uix-sessionlink"],
                W: {
                    target: b.Y,
                    href: "{{url}}",
                    "aria-label": g.dJ("Watch on $WEBSITE", {
                        WEBSITE: g.IR(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                va: "{{logoSvg}}"
            });
            this.api = a;
            this.j = null;
            this.B = !1;
            this.state = a.getPlayerStateObject();
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.T(a, "appresize", this.kc);
            this.onVideoDataChange();
            this.Hc(this.state);
            this.kc(a.ob().getPlayerSize())
        },
        Rvb = function(a) {
            var b = a.api.getVideoData(),
                c = a.api.U().Dd && !g.GF(a.state, 2) && !g.rT(a.api.getVideoData(1));
            b.mutedAutoplay || g.VE(a, c);
            a.api.logVisibility(a.element, c)
        },
        Uvb = function(a) {
            g.W.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-bottom-buttons",
                    V: [{
                        I: "button",
                        Ka: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        W: {
                            "aria-label": "Muted playback indicator"
                        },
                        V: [{
                            I: "div",
                            Ka: ["ytp-muted-autoplay-equalizer-icon"],
                            V: [{
                                I: "svg",
                                W: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                V: [{
                                    I: "g",
                                    W: {
                                        fill: "#fff"
                                    },
                                    V: [{
                                            I: "rect",
                                            S: "ytp-equalizer-bar-left",
                                            W: {
                                                height: "9",
                                                width: "4",
                                                x: "1",
                                                y: "7"
                                            }
                                        }, {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-middle",
                                            W: {
                                                height: "14",
                                                width: "4",
                                                x: "6",
                                                y: "2"
                                            }
                                        },
                                        {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-right",
                                            W: {
                                                height: "12",
                                                width: "4",
                                                x: "11",
                                                y: "4"
                                            }
                                        }
                                    ]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            var b = this;
            this.api = a;
            this.bottomButtons = this.Ga("ytp-muted-autoplay-bottom-buttons");
            this.Ga("ytp-muted-autoplay-equalizer");
            this.C = new g.Lv(this.Q9, 4E3, this);
            this.B = !1;
            a.createClientVe(this.element, this, 39306);
            this.T(a, "presentingplayerstatechange", this.XM);
            this.T(a, "onMutedAutoplayStarts", function() {
                Svb(b);
                b.XM();
                Tvb(b);
                b.B = !1
            });
            this.T(a, "onAutoplayBlocked", this.onAutoplayBlocked);
            this.listen("click", this.onClick);
            this.T(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
            this.hide();
            g.CT(a.app) && (Svb(this), this.XM(), Tvb(this));
            g.M(this, this.C)
        },
        Tvb = function(a) {
            a.Hb && a.j && (a.j.show(), a.C.start())
        },
        Svb = function(a) {
            a.watermark || (a.watermark = new c6(a.api), g.M(a, a.watermark), a.watermark.Ja(a.bottomButtons, 0), g.Wv(a.watermark.element, "ytp-muted-autoplay-watermark", !0), a.j = new g.zF(a.watermark, 0, !0, 100), g.M(a, a.j))
        },
        d6 = function(a) {
            g.W.call(this, {
                I: "div",
                S: "ytp-pause-overlay",
                W: {
                    tabIndex: "-1"
                }
            });
            var b = this;
            this.api = a;
            this.C = new g.SJ(this);
            this.D = new g.zF(this, 1E3, !1, 100, function() {
                b.j.B = !1
            }, function() {
                b.j.B = !0
            });
            this.B = !1;
            this.expandButton = new g.W({
                I: "button",
                Ka: ["ytp-button", "ytp-expand"],
                va: this.api.bd() ? "More Shorts" : "More videos"
            });
            a.U().controlsType === "0" && g.Sv(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.Sv(this.element, "ytp-pause-overlay-round-corners");
            g.M(this, this.C);
            g.M(this, this.D);
            var c = new g.W({
                I: "button",
                Ka: ["ytp-button", "ytp-collapse"],
                W: {
                    "aria-label": this.api.bd() ? "Hide more Shorts" : "Hide more videos"
                },
                V: [{
                    I: "div",
                    S: "ytp-collapse-icon",
                    V: [g.fF()]
                }]
            });
            g.M(this, c);
            c.Ja(this.element);
            c.listen("click", this.G, this);
            g.M(this, this.expandButton);
            this.expandButton.Ja(this.element);
            this.expandButton.listen("click", this.K, this);
            this.j = new g.g2(a);
            g.M(this, this.j);
            this.j.B = !1;
            this.j.Ja(this.element);
            this.api.bd() ? this.api.createClientVe(this.element, this, 157212) : this.api.createClientVe(this.element, this, 172777);
            this.C.T(this.api, "presentingplayerstatechange", this.Ta);
            this.C.T(this.api, "videodatachange", this.Ta);
            this.hide()
        },
        e6 = function(a) {
            g.W.call(this, {
                I: "div",
                Ka: ["ytp-player-content", "ytp-iv-player-content"],
                V: [{
                    I: "div",
                    S: "ytp-countdown-timer",
                    V: [{
                        I: "svg",
                        W: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        V: [{
                            I: "circle",
                            S: "ytp-svg-countdown-timer-ring",
                            W: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            I: "circle",
                            S: "ytp-svg-countdown-timer-background",
                            W: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-opacity": "0.3",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }]
                    }, {
                        I: "span",
                        S: "ytp-countdown-timer-time",
                        va: "{{duration}}"
                    }]
                }]
            });
            this.api = a;
            this.K = this.Ga("ytp-svg-countdown-timer-ring");
            this.j = null;
            this.D = this.C = 0;
            this.B = !1;
            this.G = 0;
            this.api.createClientVe(this.element, this, 159628)
        },
        Wvb = function(a) {
            a.j || (a.C = 5E3, a.D = (0, g.qC)(), a.j = new g.Kv(function() {
                Vvb(a)
            }, null), Vvb(a))
        },
        Vvb = function(a) {
            if (!a.B) {
                var b = Math.min((0, g.qC)() - a.D, a.C);
                var c = a.C - b;
                b = a.C === 0 ? 0 : Math.max(c / a.C, 0);
                c = Math.round(c / 1E3);
                a.K.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
                a.updateValue("duration", c);
                b <= 0 && a.j ? f6(a) : a.j && a.j.start()
            }
        },
        f6 = function(a) {
            a.j && (a.j.dispose(), a.j = null, a.B = !1)
        },
        Yvb = function(a) {
            g.pV.call(this, a);
            this.J = a;
            this.j = new g.SJ(this);
            this.B = null;
            this.N = !1;
            this.countdownTimer = null;
            this.Y = !1;
            Xvb(this);
            g.M(this, this.j);
            this.load()
        },
        $vb = function(a) {
            var b = g.mkb(a.J);
            b !== a.Y && (a.Y = b, a.G && (a.G.dispose(), a.G = null), a.C && (a.C.dispose(), a.C = null), a.D && (a.D.dispose(), a.D = null), a.B && (a.B.stop(), a.B.dispose(), a.B = null), b && (b = g.ET(a.J), a.J.bd() && (a.D = new g.W({
                    I: "div",
                    S: "ytp-pause-overlay-backdrop",
                    W: {
                        tabIndex: "-1"
                    }
                }), g.M(a, a.D), g.QT(a.J, a.D.element, 4), a.B = new g.zF(a.D, 1E3, !1, 100), g.M(a, a.B), a.D.hide()), a.G = new g.W({
                    I: "div",
                    S: "ytp-pause-overlay-container",
                    W: {
                        tabIndex: "-1"
                    }
                }), g.M(a, a.G), a.J.L("embeds_web_enable_keto_pause_overlay") ? gvb(a.G.element, H5(Fvb, {
                    J: a.J,
                    Pe: b
                })) :
                (a.C = new d6(a.J, b), g.M(a, a.C), a.C.Ja(a.G.element)), g.QT(a.J, a.G.element, 4), Zvb(a, a.J.getPlayerStateObject())))
        },
        Zvb = function(a, b) {
            a.B && (!g.GF(b, 4) && !g.GF(b, 2) || g.GF(b, 1024) ? a.B.hide() : a.B.show())
        },
        Xvb = function(a) {
            var b = a.J;
            a = !!b.bd();
            g.Wv(b.getRootNode(), "ytp-shorts-mode", a);
            if (b = b.getVideoData()) b.vW = a
        },
        g6 = function(a, b) {
            var c = a.J.U();
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: a.J.getCurrentTime() === 0 ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : a.J.getPlayerState() === 0 ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
                embedUrl: g.Hfa(a.J.U().loaderUrl),
                eventType: b,
                youtubeHost: g.so(a.J.U().Fa) || ""
            };
            a.embeddedPlayerMode = c.Ha;
            g.cC("embedsAdEvent", a)
        },
        vub = 0,
        wub = 0;
    var Mtb = Object.prototype.hasOwnProperty;
    Jtb.prototype = Object.create(null);
    var kvb = Ptb();
    var p5 = null;
    var Xtb = typeof Node !== "undefined" && Node.prototype.getRootNode || function() {
        for (var a = this, b = a; a;) b = a, a = a.parentNode;
        return b
    };
    var i5 = null,
        k5 = null,
        g5 = null,
        m5 = null,
        n5 = [],
        l5 = Utb,
        o5 = [],
        ivb = function(a) {
            return Ytb(function(b, c, d) {
                g5 = k5 = b;
                k5 = null;
                c(d);
                j5(null);
                k5 = g5;
                g5 = g5.parentNode;
                return b
            }, a)
        }(),
        hvb = function(a) {
            return Ytb(function(b, c, d) {
                var e = {
                    nextSibling: b
                };
                k5 = e;
                c(d);
                g5 && j5(b.nextSibling);
                return e === k5 ? null : k5
            }, a)
        }();
    var q5 = [],
        lvb = 0;
    var Z5 = new Jtb;
    var t5 = {
        attributes: Ptb(),
        oA: function(a, b) {
            throw b;
        },
        h8: !0,
        Yea: g.zkb
    };
    var r5 = [],
        cub = Symbol("comp_stack_added");
    var E5 = Symbol("IS_VNODE");
    v5.prototype.jE = function() {};
    v5.prototype.W7 = function() {};
    v5.prototype.bJ = function() {};
    v5.prototype.X7 = function() {};
    var D5 = {
        Job: function() {},
        Zqb: function() {},
        Nob: function() {},
        TW: function() {},
        Kob: function() {},
        W7: function() {},
        jE: function() {},
        bJ: function() {},
        X7: function() {}
    };
    var w5 = null;
    var dub = {};
    var B5 = null;
    g.y(C5, v5);
    C5.prototype.py = function(a) {
        var b = this,
            c = B5;
        B5 = this;
        this.D = 0;
        try {
            return u5(function() {
                return d5(g.bmb, function() {
                    return x5(b.eJ, function() {
                        return b.B(a)
                    })
                })
            })
        } finally {
            B5 = c
        }
    };
    var kub = [];
    (function() {
        var a = p5;
        p5 = function(b) {
            a == null || a(b);
            lub(b)
        }
    })();
    var G5 = mub;
    var Q5;
    var jvb = Symbol("ATTR_TAG_VALUE");
    RegExp.prototype.hasOwnProperty("sticky");
    var R5 = Symbol("reactiveData");
    var qub = new Set,
        awb = Object.assign({}, g.Ev, {
            iF: !1,
            R0: null,
            DO: !0,
            At: !1,
            H_: rub,
            E7: void 0
        });
    var P5 = new Set;
    g.$ka = function() {
        for (var a = g.v(P5), b = a.next(); !b.done; b = a.next()) b = b.value, P5.delete(b), b.YB()
    };
    Object.assign({}, awb, {
        cE: sub,
        At: !1
    });
    Object.assign({}, awb, {
        cE: sub,
        At: !0
    });
    var Kub = new Set("allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(" "));
    var Gub = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-controls": 10,
            "aria-current": 1,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-labelledby": 10,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-owns": 10,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            autoplay: 1,
            bgcolor: 1,
            border: 1,
            cellpadding: 1,
            cellspacing: 1,
            checked: 1,
            cite: 3,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            controls: 1,
            datetime: 1,
            dir: 8,
            disabled: 1,
            download: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loading: 8,
            loop: 1,
            max: 1,
            maxlength: 1,
            media: 1,
            min: 1,
            minlength: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            nonce: 1,
            open: 1,
            placeholder: 1,
            poster: 3,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            slot: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            srcset: 12,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            type: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        Fub = {
            a: {
                href: [{
                    zd: 3
                }]
            },
            area: {
                href: [{
                    zd: 3
                }]
            },
            audio: {
                src: [{
                    zd: 3
                }]
            },
            button: {
                formaction: [{
                    zd: 3
                }],
                formmethod: [{
                    zd: 1
                }]
            },
            form: {
                action: [{
                    zd: 3
                }],
                method: [{
                    zd: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    zd: 2
                }]
            },
            img: {
                src: [{
                    zd: 3
                }],
                srcset: [{
                    zd: 11
                }]
            },
            input: {
                accept: [{
                    zd: 1
                }],
                formaction: [{
                    zd: 3
                }],
                formmethod: [{
                    zd: 1
                }],
                pattern: [{
                    zd: 1
                }],
                readonly: [{
                    zd: 1
                }],
                src: [{
                    zd: 3
                }]
            },
            link: {
                href: [{
                    zd: 3,
                    Ai: "rel",
                    Ji: "alternate"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "author"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "bookmark"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "canonical"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "cite"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "help"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "icon"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "license"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "next"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "prefetch"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "dns-prefetch"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "prerender"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "preconnect"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "preload"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "prev"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "search"
                }, {
                    zd: 3,
                    Ai: "rel",
                    Ji: "subresource"
                }]
            },
            script: {
                defer: [{
                    zd: 1
                }]
            },
            source: {
                src: [{
                    zd: 3
                }],
                srcset: [{
                    zd: 11
                }]
            },
            textarea: {
                readonly: [{
                    zd: 1
                }]
            },
            video: {
                src: [{
                    zd: 3
                }]
            }
        };
    var bwb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        h6 = {},
        Iub = (h6[1] = {
            wr: null,
            ou: null,
            Ms: null
        }, h6[2] = {
            wr: function() {
                return g.ie.toString()
            },
            ou: function(a) {
                return a instanceof g.qe
            },
            Ms: function(a) {
                return g.re(a)
            }
        }, h6[3] = {
            wr: function(a, b, c) {
                return bwb.test(c) ? c : g.ie.toString()
            },
            ou: function(a) {
                return a instanceof g.ce
            },
            Ms: function(a) {
                return g.de(a)
            }
        }, h6[4] = {
            wr: function() {
                return g.ie.toString()
            },
            ou: function(a) {
                return a instanceof g.Yd
            },
            Ms: function(a) {
                return g.Zd(a)
            }
        }, h6[5] = {
            wr: null,
            ou: function(a) {
                return a instanceof g.oe
            },
            Ms: function(a) {
                return a.toString()
            }
        }, h6[7] = {
            wr: null,
            ou: null,
            Ms: null
        }, h6[8] = {
            wr: null,
            ou: null,
            Ms: null
        }, h6[10] = {
            wr: null,
            ou: null,
            Ms: null
        }, h6);
    var cwb = Ptb(),
        Mub = cwb.__default,
        Nub = cwb.style,
        Lub = ["focusin", "focusout"];
    var Tub = Pub;
    Object.assign({}, awb, {
        cE: function(a) {
            return g.G(function(b) {
                if (b.j == 1) return a.Ma ? b.return() : g.z(b, Promise.resolve(), 2);
                if (a.R0 !== null && !a.Ma) {
                    if (g.vv) throw Error("Schedulers cannot synchronously execute effects while scheduling.");
                    a.Wk = !1;
                    if (!a.iF || Etb(a)) {
                        a.iF = !0;
                        wub++;
                        gub(a);
                        var c = w5;
                        w5 = a;
                        var d = g.wv(a);
                        try {
                            u5(a.R0, {
                                stack: a.E7
                            })
                        } finally {
                            g.zv(a, d), w5 = c
                        }
                    }
                }
                g.Aa(b)
            })
        },
        At: !1
    });
    Q5 = Uub;
    (function(a) {
        var b = {},
            c;
        for (c in a) b = {
            E0: void 0,
            o_: void 0
        }, b.E0 = D5[c], b.o_ = a[c], D5[c] = function(d) {
            return function() {
                var e = g.Ja.apply(0, arguments);
                d.E0.apply(null, g.qa(e));
                d.o_.apply(null, g.qa(e))
            }
        }(b)
    })({
        TW: function(a) {
            x5(a.eJ, function() {
                var b;
                ((b = a.oz) == null ? 0 : b.length) && cvb(a.oz)
            })
        },
        jE: function(a) {
            x5(a.eJ, function() {
                var b;
                ((b = a.oz) == null ? 0 : b.length) && cvb(a.oz)
            })
        },
        bJ: function(a) {
            var b;
            ((b = a.tA) == null ? 0 : b.length) && a.tA.forEach(bvb)
        }
    });
    Q5 = Uub;
    var dwb = {},
        ewb = (dwb.__default = function() {
            return U5
        }, dwb.style = function() {
            return U5
        }, dwb),
        i6;
    for (i6 in ewb) t5.attributes[i6] = ewb[i6](t5.attributes[i6]);
    var yvb = [],
        zvb = !1;
    g.y(Gvb, g.W);
    g.k = Gvb.prototype;
    g.k.hide = function() {
        this.N = !0;
        g.W.prototype.hide.call(this);
        Hvb(this, !1)
    };
    g.k.show = function() {
        this.N = !1;
        g.W.prototype.show.call(this);
        Hvb(this, !0)
    };
    g.k.isHidden = function() {
        return this.N
    };
    g.k.T4 = function() {
        this.scrollTo(this.C - this.containerWidth)
    };
    g.k.U4 = function() {
        this.scrollTo(this.C + this.containerWidth)
    };
    g.k.resize = function(a, b) {
        var c = this.api.U(),
            d = 16 / 9,
            e = a.width >= 650,
            f = a.width < 480 || a.height < 290,
            h = Math.min(this.suggestionData.length, this.j.length);
        if (Math.min(a.width, a.height) <= 150 || h === 0 || !c.Bd) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.B = 16
            } else this.B = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            m = a / l - this.B;
            var q = Math.floor(m / d);
            b && q + 100 > b && m > 50 && (q = Math.max(b, 50 / d), l = Math.ceil(a / (d * (q - 100) + this.B)), m = a / l - this.B,
                q = Math.floor(m / d));
            m < 50 || g.NT(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.j[b];
                var r = d.Ga("ytp-suggestion-image");
                r.style.width = m + "px";
                r.style.height = q + "px";
                d.Ga("ytp-suggestion-title").style.width = m + "px";
                d.Ga("ytp-suggestion-author").style.width = m + "px";
                d = d.Ga("ytp-suggestion-duration");
                d.style.display = d && m < 100 ? "none" : ""
            }
            h = e + n + p + 4;
            this.K = h + c + (q - f) / 2;
            this.suggestions.element.style.height = q + h + "px";
            this.D = m;
            this.containerWidth = a;
            this.columns = l;
            this.C = 0;
            this.suggestions.element.scrollLeft = -0;
            Ivb(this)
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.Y = a.Jf ? !1 : b.D;
        a.suggestions ? this.suggestionData = g.Tt(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        Jvb(this);
        a.Jf ? this.title.update({
            title: g.dJ("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.ze(a, this.containerWidth - this.suggestionData.length * (this.D + this.B), 0);
        this.qa.start(this.C, a, 1E3);
        this.C = a;
        Ivb(this);
        Hvb(this, !0)
    };
    g.y($5, g.MV);
    $5.prototype.show = function() {
        g.MV.prototype.show.call(this);
        Lvb(this, this.api.ob().getPlayerSize())
    };
    $5.prototype.resize = function(a) {
        g.MV.prototype.resize.call(this, a);
        this.j && (Lvb(this, a), g.Wv(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    };
    $5.prototype.B = function(a) {
        g.MV.prototype.B.call(this, a);
        var b = this.api.getVideoData();
        if (b.AD || b.playerErrorMessageRenderer)(a = b.AD) ? Ovb(this, a) : b.playerErrorMessageRenderer && Ovb(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.Kn && (b.Xv ? Mvb(b.Xv) ? c = g.$E(b.Xv) : c = g.NV(g.ZE(b.Xv)) : c = g.NV(a.Kn), this.Cd(c, "subreason"))
        }
    };
    g.y(Pvb, g.W);
    g.k = Pvb.prototype;
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = Htb(),
            c = 96714;
        g.sT(a) ? (b = Itb(), c = 216165, g.Sv(this.element, "ytp-music-impression-link")) : g.Uv(this.element, "ytp-music-impression-link");
        this.updateValue("logoSvg", b);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this, c)
    };
    g.k.xk = function() {
        this.api.getPlayerStateObject().isCued() || (this.hide(), this.api.logVisibility(this.element, !1))
    };
    g.k.JU = function() {
        var a = this.api.getVideoData(),
            b = this.api.U(),
            c = this.api.getVideoData().Jf,
            d = b.Dd,
            e = !b.Bd,
            f = this.Pe.Pg();
        b = b.C;
        d || f || c || e || b || this.api.bd() || !a.videoId ? (this.hide(), this.api.logVisibility(this.element, !1)) : (a = Qvb(this), this.updateValue("url", a), this.show())
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = Qvb(this);
        g.iU(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.k.show = function() {
        this.api.getPlayerStateObject().isCued() && (g.W.prototype.show.call(this), this.api.hasVe(this.element) && this.api.logVisibility(this.element, !0))
    };
    g.y(a6, g.W);
    a6.prototype.xk = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.Zh() || g.GF(a, 2) && g.KT(this.api) || g.GF(a, 64) ? (this.api.logVisibility(this.j, !1), this.api.logVisibility(this.forwardButton, !1), this.hide()) : (this.show(), this.api.logVisibility(this.j, !0), this.api.logVisibility(this.forwardButton, !0))
    };
    a6.prototype.B = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate(), void 0, void 0, 83);
        this.api.logClick(this.j)
    };
    a6.prototype.C = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate(), void 0, void 0, 82);
        this.api.logClick(this.forwardButton)
    };
    g.y(b6, g.W);
    b6.prototype.C = function() {
        var a = this.api.getPlayerStateObject();
        this.api.getVideoData().mutedAutoplay && (g.GF(a, 2) && !this.Hb ? (this.show(), this.j || (this.j = new g.KV(this.api), g.M(this, this.j), this.j.Ja(this.D, 0), this.j.show()), a = this.api.getVideoData(), this.updateValue("text", a.wU), g.Wv(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.logVisibility(this.element, this.Hb), this.api.Dc("onMutedAutoplayEnds")) : this.hide())
    };
    b6.prototype.onClick = function() {
        if (!this.B) {
            this.j && (this.j.xa(), this.j = null);
            g.Wv(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            Dtb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.aB();
            this.api.logClick(this.element);
            this.hide();
            this.B = !0
        }
    };
    b6.prototype.onMutedAutoplayStarts = function() {
        this.B = !1;
        this.j && (this.j.xa(), this.j = null)
    };
    g.y(c6, g.W);
    g.k = c6.prototype;
    g.k.onStateChange = function(a) {
        this.Hc(a.state)
    };
    g.k.Hc = function(a) {
        this.state !== a && (this.state = a);
        Rvb(this)
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.U();
        a.C && g.Sv(this.element, "ytp-no-hover");
        var b = this.api.getVideoData();
        b.videoId && !a.C ? (a = this.api.getVideoUrl(!0, !1, !1, !0), this.updateValue("url", a), this.j || (this.j = this.listen("click", this.onClick))) : this.j && (this.updateValue("url", null), this.Pc(this.j), this.j = null);
        a = Htb();
        var c = 76758;
        g.sT(b) && (a = Itb(), c = 216164);
        this.updateValue("logoSvg", a);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this,
            c);
        Rvb(this)
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = this.api.getVideoUrl(!g.RF(a), !1, !0, !0);
        if (this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            var c = {};
            g.yT(this.api, "addEmbedsConversionTrackingParams", [c]);
            b = g.yo(b, g.RO(c, "emb_yt_watermark"))
        }
        g.iU(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.k.kc = function(a) {
        if ((a = a.width < 480) && !this.B || !a && this.B) {
            var b = new g.W(Htb()),
                c = this.Ga("ytp-watermark");
            g.Wv(c, "ytp-watermark-small", a);
            g.Cf(c);
            b.Ja(c);
            this.B = a
        }
    };
    g.y(Uvb, g.W);
    g.k = Uvb.prototype;
    g.k.XM = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.getVideoData().mutedAutoplay || g.GF(a, 2) ? this.hide() : this.Hb || (g.W.prototype.show.call(this), this.api.logVisibility(this.element, this.Hb))
    };
    g.k.Q9 = function() {
        this.j && this.j.hide()
    };
    g.k.onAutoplayBlocked = function() {
        this.hide();
        Dtb(this.api.getVideoData())
    };
    g.k.onClick = function() {
        if (!this.B) {
            g.Wv(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            Dtb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.aB();
            this.api.logClick(this.element);
            this.api.Dc("onMutedAutoplayEnds");
            this.B = !0
        }
    };
    g.k.onMutedAutoplayEnds = function() {
        this.watermark && (this.watermark.xa(), this.watermark = null)
    };
    g.y(d6, g.W);
    d6.prototype.hide = function() {
        g.Uv(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.W.prototype.hide.call(this)
    };
    d6.prototype.G = function() {
        this.B = !0;
        g.Uv(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.bd() && this.api.logVisibility(this.element, !1);
        this.expandButton.focus()
    };
    d6.prototype.K = function() {
        this.B = !1;
        g.Sv(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.bd() && this.api.logVisibility(this.element, !0);
        this.focus()
    };
    d6.prototype.Ta = function() {
        var a = this.api.getPlayerStateObject();
        g.GF(a, 1) || g.GF(a, 16) || g.GF(a, 32) || (!g.GF(a, 4) || g.GF(a, 2) || g.GF(a, 1024) ? (this.B || this.api.logVisibility(this.element, !1), this.D.hide()) : this.j.suggestionData.length > 0 && (this.B || (g.Sv(this.api.getRootNode(), "ytp-expand-pause-overlay"), g.h2(this.j), this.j.show(), this.api.logVisibility(this.element, !0)), this.D.show()))
    };
    g.y(e6, g.W);
    e6.prototype.show = function() {
        g.W.prototype.show.call(this);
        this.api.logVisibility(this.element, !0)
    };
    e6.prototype.xa = function() {
        f6(this);
        g.W.prototype.xa.call(this)
    };
    g.y(Yvb, g.pV);
    g.k = Yvb.prototype;
    g.k.Zm = function() {
        return !1
    };
    g.k.create = function() {
        var a = this.J.U(),
            b = g.ET(this.J),
            c, d = (c = this.J.getVideoData()) == null ? void 0 : c.clientPlaybackNonce;
        d && g.TG({
            clientPlaybackNonce: d
        });
        a.eb && $vb(this);
        this.Z = new Uvb(this.J);
        g.M(this, this.Z);
        g.QT(this.J, this.Z.element, 4);
        this.ra = new b6(this.J);
        g.M(this, this.ra);
        g.QT(this.J, this.ra.element, 4);
        a.Dd && (this.watermark = new c6(this.J), g.M(this, this.watermark), g.QT(this.J, this.watermark.element, 8));
        b && (this.K = new Pvb(this.J, b), g.M(this, this.K), g.QT(this.J, this.K.element, 8), g.CT(this.J.app) &&
            (this.onMutedAutoplayStarts(), this.K.hide()));
        a.B && (this.qa = new a6(this.J), g.M(this, this.qa), g.QT(this.J, this.qa.element, 4));
        this.j.T(this.J, "appresize", this.kc);
        this.j.T(this.J, "presentingplayerstatechange", this.xk);
        this.j.T(this.J, "videodatachange", this.onVideoDataChange);
        this.j.T(this.J, "videoplayerreset", this.onReset);
        this.j.T(this.J, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.j.T(this.J, "onAdStart", this.onAdStart);
        this.j.T(this.J, "onAdComplete", this.onAdComplete);
        this.j.T(this.J,
            "onAdSkip", this.onAdSkip);
        this.j.T(this.J, "onAdStateChange", this.onAdStateChange);
        if (this.N = g.nB(g.ER(a))) this.countdownTimer = new e6(this.J), g.M(this, this.countdownTimer), g.QT(this.J, this.countdownTimer.element, 4), this.countdownTimer.hide(), this.j.T(this.J, g.YI("embeds"), this.onCueRangeEnter), this.j.T(this.J, g.ZI("embeds"), this.onCueRangeExit);
        this.Gc(this.J.getPlayerStateObject());
        this.player.Eg("embed");
        var e, f;
        ((e = this.J.U().getWebPlayerContextConfig()) == null ? 0 : (f = e.embedsHostFlags) == null ? 0 : f.allowOverridingVisitorDataPlayerVars) &&
        (a = g.rA("IDENTITY_MEMENTO")) && this.J.Um("onMementoChange", a)
    };
    g.k.onCueRangeEnter = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (this.countdownTimer.show(), Wvb(this.countdownTimer))
    };
    g.k.onCueRangeExit = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (f6(this.countdownTimer), this.countdownTimer.hide())
    };
    g.k.kc = function() {
        var a = this.J.ob().getPlayerSize();
        this.yg && this.yg.resize(a)
    };
    g.k.onReset = function() {
        Xvb(this)
    };
    g.k.xk = function(a) {
        this.Gc(a.state)
    };
    g.k.Gc = function(a) {
        g.GF(a, 128) ? (this.yg || (this.yg = new $5(this.J), g.M(this, this.yg), g.QT(this.J, this.yg.element, 4)), this.yg.B(a.Ng), this.yg.show(), g.Sv(this.J.getRootNode(), "ytp-embed-error")) : this.yg && (this.yg.dispose(), this.yg = null, g.Uv(this.J.getRootNode(), "ytp-embed-error"));
        if (this.countdownTimer && this.countdownTimer.j)
            if (g.GF(a, 64)) this.countdownTimer.hide(), f6(this.countdownTimer);
            else if (a.isPaused()) {
            var b = this.countdownTimer;
            b.B || (b.B = !0, b.G = (0, g.qC)())
        } else a.isPlaying() && this.countdownTimer.B &&
            (b = this.countdownTimer, b.B && (b.D += (0, g.qC)() - b.G, b.B = !1, Vvb(b)));
        Zvb(this, a)
    };
    g.k.onMutedAutoplayStarts = function() {
        this.J.getVideoData().mutedAutoplay && this.Z && g.Wv(this.J.getRootNode(), "ytp-muted-autoplay", !0)
    };
    g.k.onVideoDataChange = function(a, b) {
        var c = this.HF !== b.videoId;
        a = !c && a === "dataloaded";
        var d = {
            isShortsModeEnabled: !!this.J.bd()
        };
        g.cC("embedsVideoDataDidChange", {
            clientPlaybackNonce: b.clientPlaybackNonce,
            isReload: a,
            runtimeEnabledFeatures: d
        });
        c && (this.HF = b.videoId, this.countdownTimer && (this.countdownTimer.show(), this.countdownTimer.hide()), this.N && (this.J.qf("embeds"), b.isAd() || b.limitedPlaybackDurationInSeconds < 5 || g.NT(this.J) || (b = Math.max((b.startSeconds + b.limitedPlaybackDurationInSeconds - 5) * 1E3, 0),
            b = new g.XI(b, b + 5E3, {
                id: "countdown timer",
                namespace: "embeds"
            }), this.J.jf([b]))), this.J.U().eb && (Xvb(this), $vb(this)));
        this.J.U().C && this.C && this.C.detach()
    };
    g.k.onAdStart = function() {
        g6(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.k.onAdComplete = function() {
        g6(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.k.onAdSkip = function() {
        g6(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.k.onAdStateChange = function(a) {
        a === 2 && g6(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.oV("embed", Yvb);
})(_yt_player);