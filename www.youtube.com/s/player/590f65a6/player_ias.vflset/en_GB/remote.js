(function(g) {
    var window = this;
    'use strict';
    var b8 = function(a) {
            g.oq(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.lb()).toString(36));
            return a
        },
        c8 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Dga(a.C, b, c)
        },
        qDb = function(a) {
            if (a instanceof g.Ot) return a;
            if (typeof a.hm == "function") return a.hm(!1);
            if (g.cb(a)) {
                var b = 0,
                    c = new g.Ot;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.s2;
                        if (b in a) return g.Pt(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        rDb = function(a, b, c) {
            if (g.cb(a)) g.$b(a, b, c);
            else
                for (a = qDb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        sDb = function(a, b) {
            var c = [];
            rDb(b, function(d) {
                try {
                    var e = g.mw.prototype.B.call(this, d, !0)
                } catch (f) {
                    if (f == "Storage: Invalid value was encountered") return;
                    throw f;
                }
                e === void 0 ? c.push(d) : g.Lla(e) && c.push(d)
            }, a);
            return c
        },
        tDb = function(a, b) {
            sDb(a, b).forEach(function(c) {
                g.mw.prototype.remove.call(this, c)
            }, a)
        },
        uDb = function(a) {
            if (a.qa) {
                if (a.qa.locationOverrideToken) return {
                    locationOverrideToken: a.qa.locationOverrideToken
                };
                if (a.qa.latitudeE7 != null && a.qa.longitudeE7 != null) return {
                    latitudeE7: a.qa.latitudeE7,
                    longitudeE7: a.qa.longitudeE7
                }
            }
            return null
        },
        vDb = function(a, b) {
            g.Fb(a, b) || a.push(b)
        },
        wDb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        xDb = function(a, b) {
            return g.ed(a, b)
        },
        yDb = function(a) {
            try {
                return g.Ta.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        d8 = function(a) {
            if (g.Ta.JSON) try {
                return g.Ta.JSON.parse(a)
            } catch (b) {}
            return yDb(a)
        },
        zDb = function(a) {
            if (a.Cm && typeof a.Cm == "function") return a.Cm();
            if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set) return Array.from(a.values());
            if (typeof a === "string") return a.split("");
            if (g.cb(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.ad(a)
        },
        ADb = function(a) {
            if (a.Rn && typeof a.Rn == "function") return a.Rn();
            if (!a.Cm || typeof a.Cm != "function") {
                if (typeof Map !== "undefined" && a instanceof Map) return Array.from(a.keys());
                if (!(typeof Set !== "undefined" && a instanceof Set)) {
                    if (g.cb(a) || typeof a === "string") {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.cd(a)
                }
            }
        },
        BDb = function(a, b) {
            if (a.forEach && typeof a.forEach == "function") a.forEach(b, void 0);
            else if (g.cb(a) || typeof a === "string") Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = ADb(a), d = zDb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        CDb = function(a, b, c, d) {
            var e = new g.gq(null);
            a && g.hq(e, a);
            b && g.iq(e, b);
            c && g.jq(e, c);
            d && (e.B = d);
            return e
        },
        DDb = function() {
            this.j = e8();
            this.j.Tj("/client_streamz/youtube/living_room/mdx/channel/opened", {
                wd: 3,
                ud: "channel_type"
            })
        },
        EDb = function(a, b) {
            a.j.Pk("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        FDb = function() {
            this.j = e8();
            this.j.Tj("/client_streamz/youtube/living_room/mdx/channel/closed", {
                wd: 3,
                ud: "channel_type"
            })
        },
        GDb = function(a, b) {
            a.j.Pk("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        HDb = function() {
            this.j = e8();
            this.j.Tj("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                wd: 3,
                ud: "channel_type"
            })
        },
        IDb = function(a, b) {
            a.j.Pk("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        JDb = function() {
            this.j = e8();
            this.j.Tj("/client_streamz/youtube/living_room/mdx/channel/error", {
                wd: 3,
                ud: "channel_type"
            })
        },
        KDb = function(a, b) {
            a.j.Pk("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        LDb = function() {
            this.j = e8();
            this.j.Tj("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        MDb = function() {
            this.j = e8();
            this.j.Tj("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        NDb = function(a, b) {
            return new g.lla(a, b)
        },
        f8 = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        g8 = function(a, b) {
            this.B = {};
            this.j = [];
            this.wv = this.size = 0;
            var c = arguments.length;
            if (c > 1) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof g8)
                    for (c = a.Rn(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        h8 = function(a) {
            if (a.size != a.j.length) {
                for (var b = 0, c = 0; b < a.j.length;) {
                    var d = a.j[b];
                    f8(a.B, d) && (a.j[c++] = d);
                    b++
                }
                a.j.length = c
            }
            if (a.size != a.j.length) {
                var e = {};
                for (c = b = 0; b < a.j.length;) d = a.j[b], f8(e, d) || (a.j[c++] = d, e[d] = 1), b++;
                a.j.length = c
            }
        },
        RDb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g8;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "", this.theme = a.theme || "u", ODb(this, a.capabilities || ""), PDb(this, a.compatibleSenderThemes || ""), QDb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        ODb = function(a, b) {
            a.capabilities.clear();
            g.Tt(b.split(","), g.ib(xDb, SDb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        PDb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.Tt(b.split(","), g.ib(xDb, TDb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        QDb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        i8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        j8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        UDb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        VDb = function(a) {
            return new i8(a)
        },
        WDb = function(a) {
            return Array.isArray(a) ? g.es(a, VDb) : []
        },
        k8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        XDb = function(a) {
            return Array.isArray(a) ? "[" + g.es(a, k8).join(",") + "]" : "null"
        },
        YDb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = Math.random() * 16 | 0;
                    return (a == "x" ? b : b & 3 | 8).toString(16)
                })
        },
        ZDb = function(a) {
            return g.es(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        $Db = function(a, b) {
            return g.Db(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        l8 = function(a, b) {
            return g.Db(a, function(c) {
                return j8(c, b)
            })
        },
        aEb = function() {
            var a = (0, g.EB)();
            a && tDb(a, a.j.hm(!0))
        },
        m8 = function() {
            var a = g.GB("yt-remote-connected-devices") || [];
            g.Ub(a);
            return a
        },
        bEb = function(a) {
            if (a.length == 0) return [];
            var b = a[0].indexOf("#"),
                c = b == -1 ? a[0] : a[0].substring(0, b);
            return g.es(a, function(d, e) {
                return e == 0 ? d : d.substring(c.length)
            })
        },
        cEb = function(a) {
            g.FB("yt-remote-connected-devices", a, 86400)
        },
        n8 = function() {
            if (dEb) return dEb;
            var a = g.GB("yt-remote-device-id");
            a || (a = YDb(), g.FB("yt-remote-device-id", a, 31536E3));
            for (var b = m8(), c = 1, d = a; g.Fb(b, d);) c++, d = a + "#" + c;
            return dEb = d
        },
        eEb = function() {
            var a = m8(),
                b = n8();
            g.MB() && g.Zb(a, b);
            a = bEb(a);
            if (a.length == 0) try {
                g.dra("remote_sid")
            } catch (c) {} else try {
                g.YA("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        fEb = function() {
            return g.GB("yt-remote-session-browser-channel")
        },
        gEb = function() {
            return g.GB("yt-remote-local-screens") || []
        },
        hEb = function() {
            g.FB("yt-remote-lounge-token-expiration", !0, 86400)
        },
        iEb = function(a) {
            a.length > 5 && (a = a.slice(a.length - 5));
            var b = g.es(gEb(), function(d) {
                    return d.loungeToken
                }),
                c = g.es(a, function(d) {
                    return d.loungeToken
                });
            g.fs(c, function(d) {
                return !g.Fb(b, d)
            }) && hEb();
            g.FB("yt-remote-local-screens", a, 31536E3)
        },
        o8 = function(a) {
            a || (g.LB("yt-remote-session-screen-id"), g.LB("yt-remote-session-video-id"));
            eEb();
            a = m8();
            g.Hb(a, n8());
            cEb(a)
        },
        jEb = function() {
            if (!p8) {
                var a = g.rw();
                a && (p8 = new g.jw(a))
            }
        },
        kEb = function() {
            jEb();
            return p8 ? !!p8.get("yt-remote-use-staging-server") : !1
        },
        q8 = function(a, b) {
            g.wD[a] = !0;
            var c = g.uD();
            c && c.publish.apply(c, arguments);
            g.wD[a] = !1
        },
        lEb = function() {},
        e8 = function() {
            if (!r8) {
                r8 = new g.qg(new lEb);
                var a = g.OA("client_streamz_web_flush_count", -1);
                a !== -1 && (r8.C = a)
            }
            return r8
        },
        mEb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        nEb = function(a) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + a) != -1 || document.currentScript.src.indexOf("&" + a) != -1)
        },
        oEb = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        s8 = function(a) {
            a.length ? pEb(a.shift(), function() {
                s8(a)
            }) : qEb()
        },
        rEb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        pEb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.We(d, g.Hma(a));
            (document.head || document.documentElement).appendChild(d)
        },
        sEb = function() {
            var a = mEb(),
                b = [];
            if (a > 1) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        qEb = function() {
            var a = oEb();
            a && a(!1, "No cast extension found")
        },
        uEb = function() {
            if (tEb) {
                var a = 2,
                    b = oEb(),
                    c = function() {
                        a--;
                        a == 0 && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                pEb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", qEb, c)
            }
        },
        vEb = function() {
            uEb();
            var a = sEb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            s8(a)
        },
        xEb = function() {
            uEb();
            var a = sEb();
            a.push.apply(a, g.qa(wEb.map(rEb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            s8(a)
        },
        t8 = function(a, b, c) {
            g.I.call(this);
            this.K = c != null ? (0, g.gb)(a, c) : a;
            this.Ui = b;
            this.G = (0, g.gb)(this.m5, this);
            this.j = !1;
            this.B = 0;
            this.C = this.md = null;
            this.D = []
        },
        u8 = function(a, b, c) {
            g.I.call(this);
            this.D = c != null ? a.bind(c) : a;
            this.Ui = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.md = null
        },
        yEb = function(a) {
            a.md = g.og(function() {
                a.md = null;
                a.j && !a.B && (a.j = !1, yEb(a))
            }, a.Ui);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        v8 = function() {},
        zEb = function() {
            g.zb.call(this, "p")
        },
        AEb = function() {
            g.zb.call(this, "o")
        },
        CEb = function() {
            return BEb = BEb || new g.Ed
        },
        DEb = function(a) {
            g.zb.call(this, "serverreachability", a)
        },
        w8 = function(a) {
            var b = CEb();
            b.dispatchEvent(new DEb(b, a))
        },
        EEb = function(a) {
            g.zb.call(this, "statevent", a)
        },
        x8 = function(a) {
            var b = CEb();
            b.dispatchEvent(new EEb(b, a))
        },
        FEb = function(a, b, c, d) {
            g.zb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        y8 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Ta.setTimeout(function() {
                a()
            }, b)
        },
        z8 = function() {},
        A8 = function(a, b, c, d) {
            this.C = a;
            this.D = b;
            this.Sb = c;
            this.Ob = d || 1;
            this.Eb = new g.tq(this);
            this.fb = 45E3;
            this.Na = null;
            this.K = !1;
            this.Y = this.eb = this.Z = this.Sa = this.Ca = this.rb = this.qa = null;
            this.ra = [];
            this.j = null;
            this.N = 0;
            this.G = this.Fa = null;
            this.Jb = -1;
            this.La = !1;
            this.bb = 0;
            this.Wa = null;
            this.Kb = this.Va = this.Gb = this.Ha = !1;
            this.B = new GEb
        },
        GEb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        IEb = function(a, b, c) {
            a.Sa = 1;
            a.Z = b8(b.clone());
            a.Y = c;
            a.Ha = !0;
            HEb(a, null)
        },
        HEb = function(a, b) {
            a.Ca = Date.now();
            B8(a);
            a.eb = a.Z.clone();
            c8(a.eb, "t", a.Ob);
            a.N = 0;
            var c = a.C.Sa;
            a.B = new GEb;
            a.j = JEb(a.C, c ? b : null, !a.Y);
            a.bb > 0 && (a.Wa = new u8((0, g.gb)(a.RU, a, a.j), a.bb));
            a.Eb.listen(a.j, "readystatechange", a.o5);
            b = a.Na ? g.jd(a.Na) : {};
            a.Y ? (a.Fa || (a.Fa = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.eb, a.Fa, a.Y, b)) : (a.Fa = "GET", a.j.send(a.eb, a.Fa, null, b));
            w8(1)
        },
        KEb = function(a) {
            return a.j ? a.Fa == "GET" && a.Sa != 2 && a.C.tf : !1
        },
        NEb = function(a, b) {
            var c = a.N,
                d = b.indexOf("\n", c);
            if (d == -1) return LEb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return MEb;
            d += 1;
            if (d + c > b.length) return LEb;
            b = b.slice(d, d + c);
            a.N = d + c;
            return b
        },
        B8 = function(a) {
            a.rb = Date.now() + a.fb;
            OEb(a, a.fb)
        },
        OEb = function(a, b) {
            if (a.qa != null) throw Error("WatchDog timer not null");
            a.qa = y8((0, g.gb)(a.n5, a), b)
        },
        PEb = function(a) {
            a.qa && (g.Ta.clearTimeout(a.qa), a.qa = null)
        },
        C8 = function(a) {
            a.C.Og() || a.La || QEb(a.C, a)
        },
        D8 = function(a) {
            PEb(a);
            g.vb(a.Wa);
            a.Wa = null;
            a.Eb.removeAll();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        YEb = function(a, b) {
            try {
                var c = a.C;
                if (c.Qh != 0 && (c.j == a || REb(c.B, a)))
                    if (!a.Va && REb(c.B, a) && c.Qh == 3) {
                        try {
                            var d = c.uf.j.parse(b)
                        } catch (w) {
                            d = null
                        }
                        if (Array.isArray(d) && d.length == 3) {
                            var e = d;
                            if (e[0] == 0) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ca + 3E3 < a.Ca) E8(c), F8(c);
                                        else break a;
                                    SEb(c);
                                    x8(18)
                                }
                            }
                            else c.Ge = e[1], 0 < c.Ge - c.Wa && e[2] < 37500 && c.Va && c.ra == 0 && !c.qa && (c.qa = y8((0, g.gb)(c.p5, c), 6E3));
                            if (TEb(c.B) <= 1 && c.Sc) {
                                try {
                                    c.Sc()
                                } catch (w) {}
                                c.Sc = void 0
                            }
                        } else G8(c, 11)
                    } else if ((a.Va || c.j == a) && E8(c), !g.fc(b))
                    for (e = c.uf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Wa = f[0];
                        f = f[1];
                        if (c.Qh == 2)
                            if (f[0] == "c") {
                                c.D = f[1];
                                c.Ob = f[2];
                                var h = f[3];
                                h != null && (c.SU = h);
                                var l = f[5];
                                l != null && typeof l === "number" && l > 0 && (c.bb = 1.5 * l);
                                d = c;
                                var m = a.QP();
                                if (m) {
                                    var n = g.Jo(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.jc(n, "spdy") || g.jc(n, "quic") || g.jc(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (UEb(p, p.B), p.B = null))
                                    }
                                    if (d.Ha) {
                                        var q = g.Jo(m, "X-HTTP-Session-Id");
                                        q && (d.sf = q, g.oq(d.Na, d.Ha, q))
                                    }
                                }
                                c.Qh = 3;
                                c.G && c.G.YU();
                                c.Ac && (c.Nd = Date.now() - a.Ca);
                                d = c;
                                var r = a;
                                d.Bd = VEb(d, d.Sa ? d.Ob : null, d.Sb);
                                if (r.Va) {
                                    WEb(d.B,
                                        r);
                                    var t = r,
                                        u = d.bb;
                                    u && t.setTimeout(u);
                                    t.qa && (PEb(t), B8(t));
                                    d.j = r
                                } else XEb(d);
                                c.C.length > 0 && H8(c)
                            } else f[0] != "stop" && f[0] != "close" || G8(c, 7);
                        else c.Qh == 3 && (f[0] == "stop" || f[0] == "close" ? f[0] == "stop" ? G8(c, 7) : c.disconnect() : f[0] != "noop" && c.G && c.G.XU(f), c.ra = 0)
                    }
                w8(4)
            } catch (w) {}
        },
        ZEb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        $Eb = function(a) {
            this.G = a || 10;
            g.Ta.PerformanceNavigationTiming ? (a = g.Ta.performance.getEntriesByType("navigation"), a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(g.Ta.chrome && g.Ta.chrome.loadTimes && g.Ta.chrome.loadTimes() && g.Ta.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            this.D > 1 && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        aFb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        TEb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        REb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        UEb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        WEb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        bFb = function(a) {
            if (a.B != null) return a.C.concat(a.B.ra);
            if (a.j != null && a.j.size !== 0) {
                var b = a.C;
                a = g.v(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
                return b
            }
            return g.Lb(a.C)
        },
        cFb = function(a, b) {
            var c = new z8;
            if (g.Ta.Image) {
                var d = new Image;
                d.onload = g.ib(I8, c, "TestLoadImage: loaded", !0, b, d);
                d.onerror = g.ib(I8, c, "TestLoadImage: error", !1, b, d);
                d.onabort = g.ib(I8, c, "TestLoadImage: abort", !1, b, d);
                d.ontimeout = g.ib(I8, c, "TestLoadImage: timeout", !1, b, d);
                g.Ta.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        dFb = function(a, b) {
            var c = new z8,
                d = new AbortController,
                e = setTimeout(function() {
                    d.abort();
                    I8(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
            fetch(a, {
                signal: d.signal
            }).then(function(f) {
                clearTimeout(e);
                f.ok ? I8(c, "TestPingServer: ok", !0, b) : I8(c, "TestPingServer: server error", !1, b)
            }).catch(function() {
                clearTimeout(e);
                I8(c, "TestPingServer: error", !1, b)
            })
        },
        I8 = function(a, b, c, d, e) {
            try {
                e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c)
            } catch (f) {}
        },
        eFb = function() {
            this.j = new v8
        },
        fFb = function(a, b, c) {
            var d = c || "";
            try {
                BDb(a, function(e, f) {
                    var h = e;
                    g.db(e) && (h = g.tn(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        J8 = function(a, b, c) {
            return c && c.X9 ? c.X9[a] || b : b
        },
        gFb = function(a) {
            this.C = [];
            this.Ob = this.Bd = this.Na = this.Sb = this.j = this.sf = this.Ha = this.La = this.N = this.Jb = this.Y = null;
            this.Sf = this.eb = 0;
            this.wh = J8("failFast", !1, a);
            this.Va = this.qa = this.Z = this.K = this.G = null;
            this.vc = !0;
            this.Ge = this.Wa = -1;
            this.Kb = this.ra = this.Ca = 0;
            this.Qf = J8("baseRetryDelayMs", 5E3, a);
            this.Tf = J8("retryDelaySeedMs", 1E4, a);
            this.Rf = J8("forwardChannelMaxRetries", 2, a);
            this.Dd = J8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.ke = a && a.gsb || void 0;
            this.Vf = a && a.Vqb || void 0;
            this.tf = a && a.bsb || !1;
            this.bb = void 0;
            this.Sa = a && a.pea ||
                !1;
            this.D = "";
            this.B = new $Eb(a && a.Yob);
            this.uf = new eFb;
            this.Eb = a && a.qpb || !1;
            this.rb = a && a.fpb || !1;
            this.Eb && this.rb && (this.rb = !1);
            this.Uf = a && a.Oob || !1;
            a && a.spb && (this.vc = !1);
            this.Ac = !this.Eb && this.vc && a && a.dpb || !1;
            this.xd = void 0;
            a && a.XZ && a.XZ > 0 && (this.xd = a.XZ);
            this.Sc = void 0;
            this.Nd = 0;
            this.fb = !1;
            this.Gb = this.Fa = null
        },
        F8 = function(a) {
            a.j && (hFb(a), a.j.cancel(), a.j = null)
        },
        iFb = function(a) {
            F8(a);
            a.Z && (g.Ta.clearTimeout(a.Z), a.Z = null);
            E8(a);
            a.B.cancel();
            a.K && (typeof a.K === "number" && g.Ta.clearTimeout(a.K), a.K = null)
        },
        H8 = function(a) {
            aFb(a.B) || a.K || (a.K = !0, g.dg(a.UU, a), a.Ca = 0)
        },
        kFb = function(a, b) {
            if (TEb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.ra.concat(a.C), !0;
            if (a.Qh == 1 || a.Qh == 2 || a.Ca >= (a.wh ? 0 : a.Rf)) return !1;
            a.K = y8((0, g.gb)(a.UU, a, b), jFb(a, a.Ca));
            a.Ca++;
            return !0
        },
        mFb = function(a, b) {
            var c;
            b ? c = b.Sb : c = a.eb++;
            var d = a.Na.clone();
            g.oq(d, "SID", a.D);
            g.oq(d, "RID", c);
            g.oq(d, "AID", a.Wa);
            K8(a, d);
            a.N && a.Y && g.sq(d, a.N, a.Y);
            c = new A8(a, a.D, c, a.Ca + 1);
            a.N === null && (c.Na = a.Y);
            b && (a.C = b.ra.concat(a.C));
            b = lFb(a, c, 1E3);
            c.setTimeout(Math.round(a.Dd * .5) + Math.round(a.Dd * .5 * Math.random()));
            UEb(a.B, c);
            IEb(c, d, b)
        },
        K8 = function(a, b) {
            a.La && g.Uc(a.La, function(c, d) {
                g.oq(b, d, c)
            });
            a.G && BDb({}, function(c, d) {
                g.oq(b, d, c)
            })
        },
        lFb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.gb)(a.G.q5, a.G, a) : null;
            a: {
                for (var e = a.C, f = -1;;) {
                    var h = ["count=" + c];
                    f == -1 ? c > 0 ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                    for (var l = !0, m = 0; m < c; m++) {
                        var n = e[m].j,
                            p = e[m].map;
                        n -= f;
                        if (n < 0) f = Math.max(0, e[m].j - 100), l = !1;
                        else try {
                            fFb(p, h, "req" + n + "_")
                        } catch (q) {
                            d && d(p)
                        }
                    }
                    if (l) {
                        d = h.join("&");
                        break a
                    }
                }
                d = void 0
            }
            a = a.C.splice(0, c);
            b.ra = a;
            return d
        },
        XEb = function(a) {
            a.j || a.Z || (a.Kb = 1, g.dg(a.TU, a), a.ra = 0)
        },
        SEb = function(a) {
            if (a.j || a.Z || a.ra >= 3) return !1;
            a.Kb++;
            a.Z = y8((0, g.gb)(a.TU, a), jFb(a, a.ra));
            a.ra++;
            return !0
        },
        hFb = function(a) {
            a.Fa != null && (g.Ta.clearTimeout(a.Fa), a.Fa = null)
        },
        nFb = function(a) {
            a.j = new A8(a, a.D, "rpc", a.Kb);
            a.N === null && (a.j.Na = a.Y);
            a.j.bb = 0;
            var b = a.Bd.clone();
            g.oq(b, "RID", "rpc");
            g.oq(b, "SID", a.D);
            g.oq(b, "AID", a.Wa);
            g.oq(b, "CI", a.Va ? "0" : "1");
            !a.Va && a.xd && g.oq(b, "TO", a.xd);
            g.oq(b, "TYPE", "xmlhttp");
            K8(a, b);
            a.N && a.Y && g.sq(b, a.N, a.Y);
            a.bb && a.j.setTimeout(a.bb);
            var c = a.j;
            a = a.Ob;
            c.Sa = 1;
            c.Z = b8(b.clone());
            c.Y = null;
            c.Ha = !0;
            HEb(c, a)
        },
        E8 = function(a) {
            a.qa != null && (g.Ta.clearTimeout(a.qa), a.qa = null)
        },
        QEb = function(a, b) {
            var c = null;
            if (a.j == b) {
                E8(a);
                hFb(a);
                a.j = null;
                var d = 2
            } else if (REb(a.B, b)) c = b.ra, WEb(a.B, b), d = 1;
            else return;
            if (a.Qh != 0)
                if (b.K)
                    if (d == 1) {
                        c = b.Y ? b.Y.length : 0;
                        b = Date.now() - b.Ca;
                        var e = a.Ca;
                        d = CEb();
                        d.dispatchEvent(new FEb(d, c, b, e));
                        H8(a)
                    } else XEb(a);
            else {
                var f = b.Jb;
                e = b.getLastError();
                if (e == 3 || e == 0 && f > 0 || !(d == 1 && kFb(a, b) || d == 2 && SEb(a))) switch (c && c.length > 0 && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        G8(a, 5);
                        break;
                    case 4:
                        G8(a, 10);
                        break;
                    case 3:
                        G8(a, 6);
                        break;
                    default:
                        G8(a, 2)
                }
            }
        },
        jFb = function(a, b) {
            var c = a.Qf + Math.floor(Math.random() *
                a.Tf);
            a.isActive() || (c *= 2);
            return c * b
        },
        G8 = function(a, b) {
            if (b == 2) {
                var c = (0, g.gb)(a.yea, a),
                    d = a.Vf,
                    e = !d;
                d = new g.gq(d || "//www.google.com/images/cleardot.gif");
                g.Ta.location && g.Ta.location.protocol == "http" || g.hq(d, "https");
                b8(d);
                e ? cFb(d.toString(), c) : dFb(d.toString(), c)
            } else x8(2);
            a.Qh = 0;
            a.G && a.G.WU(b);
            oFb(a);
            iFb(a)
        },
        oFb = function(a) {
            a.Qh = 0;
            a.Gb = [];
            if (a.G) {
                var b = bFb(a.B);
                if (b.length != 0 || a.C.length != 0) g.Mb(a.Gb, b), g.Mb(a.Gb, a.C), a.B.C.length = 0, g.Lb(a.C), a.C.length = 0;
                a.G.VU()
            }
        },
        pFb = function(a) {
            if (a.Qh == 0) return a.Gb;
            var b = [];
            g.Mb(b, bFb(a.B));
            g.Mb(b, a.C);
            return b
        },
        VEb = function(a, b, c) {
            var d = g.pq(c);
            d.j != "" ? (b && g.iq(d, b + "." + d.j), g.jq(d, d.D)) : (d = g.Ta.location, d = CDb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ha;
            c = a.sf;
            b && c && g.oq(d, b, c);
            g.oq(d, "VER", a.SU);
            K8(a, d);
            return d
        },
        JEb = function(a, b, c) {
            if (b && !a.Sa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.tf && !a.ke ? new g.Co(new g.sp({
                Z1: c
            })) : new g.Co(a.ke);
            b.K = a.Sa;
            return b
        },
        qFb = function() {},
        rFb = function() {},
        M8 = function(a, b) {
            g.Ed.call(this);
            this.j = new gFb(b);
            this.G = a;
            this.B = b && b.M$ || null;
            a = b && b.L$ || null;
            b && b.Wob && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Y = a;
            a = b && b.yqb || null;
            b && b.h_ && (a ? a["X-WebChannel-Content-Type"] = b.h_ : a = {
                "X-WebChannel-Content-Type": b.h_
            });
            b && b.nX && (a ? a["X-WebChannel-Client-Profile"] = b.nX : a = {
                "X-WebChannel-Client-Profile": b.nX
            });
            this.j.Jb = a;
            (a = b && b.xqb) && !g.fc(a) && (this.j.N = a);
            this.K = b && b.pea || !1;
            this.D = b && b.xrb || !1;
            (b = b && b.T9) && !g.fc(b) && (this.j.Ha = b, g.dd(this.B, b) && (a = this.B,
                b in a && delete a[b]));
            this.C = new L8(this)
        },
        sFb = function(a) {
            zEb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.Zc(b)) ? g.hd(b, this.j) : b : this.data = a
        },
        tFb = function(a) {
            AEb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        L8 = function(a) {
            this.j = a
        },
        uFb = function(a, b) {
            this.B = a;
            this.j = b
        },
        vFb = function(a) {
            return pFb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? yDb(b) : b) : c = b;
                return c
            })
        },
        N8 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Ta.setTimeout(function() {
                a()
            }, b)
        },
        P8 = function(a) {
            O8.dispatchEvent(new wFb(O8, a))
        },
        wFb = function(a) {
            g.zb.call(this, "statevent", a)
        },
        Q8 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.tq(this);
            this.G = new g.ng;
            this.G.setInterval(250)
        },
        yFb = function(a, b, c) {
            a.aI = 1;
            a.gD = b8(b.clone());
            a.Lv = c;
            a.Ha = !0;
            xFb(a, null)
        },
        zFb = function(a, b, c, d, e) {
            a.aI = 1;
            a.gD = b8(b.clone());
            a.Lv = null;
            a.Ha = c;
            e && (a.w1 = !1);
            xFb(a, d)
        },
        xFb = function(a, b) {
            a.jD = Date.now();
            AFb(a);
            a.ZH = a.gD.clone();
            c8(a.ZH, "t", a.K);
            a.cI = 0;
            a.nj = a.j.dN(a.j.kD() ? b : null);
            a.bN > 0 && (a.YH = new u8((0, g.gb)(a.ZU, a, a.nj), a.bN));
            a.C.listen(a.nj, "readystatechange", a.s5);
            b = a.Jv ? g.jd(a.Jv) : {};
            a.Lv ? (a.bI = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.nj.send(a.ZH, a.bI, a.Lv, b)) : (a.bI = "GET", a.w1 && !g.Pc && (b.Connection = "close"), a.nj.send(a.ZH, a.bI, null, b));
            a.j.Vr(1)
        },
        DFb = function(a, b) {
            var c = a.cI,
                d = b.indexOf("\n", c);
            if (d == -1) return BFb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return CFb;
            d += 1;
            if (d + c > b.length) return BFb;
            b = b.slice(d, d + c);
            a.cI = d + c;
            return b
        },
        AFb = function(a) {
            a.cN = Date.now() + a.B;
            EFb(a, a.B)
        },
        EFb = function(a, b) {
            if (a.Uy != null) throw Error("WatchDog timer not null");
            a.Uy = N8((0, g.gb)(a.r5, a), b)
        },
        FFb = function(a) {
            a.Uy && (g.Ta.clearTimeout(a.Uy), a.Uy = null)
        },
        GFb = function(a) {
            a.j.Og() || a.hD || a.j.fN(a)
        },
        R8 = function(a) {
            FFb(a);
            g.vb(a.YH);
            a.YH = null;
            a.G.stop();
            a.C.removeAll();
            if (a.nj) {
                var b = a.nj;
                a.nj = null;
                b.abort();
                b.dispose()
            }
            a.D2 && (a.D2 = null)
        },
        HFb = function(a, b) {
            try {
                a.j.aV(a, b), a.j.Vr(4)
            } catch (c) {}
        },
        JFb = function(a, b, c, d, e) {
            if (d == 0) c(!1);
            else {
                var f = e || 0;
                d--;
                IFb(a, b, function(h) {
                    h ? c(!0) : g.Ta.setTimeout(function() {
                        JFb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        IFb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    S8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            g.Ta.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        S8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        KFb = function(a) {
            this.j = a;
            this.B = new v8
        },
        LFb = function(a) {
            var b = T8(a.j, a.WD, "/mail/images/cleardot.gif");
            b8(b);
            JFb(b.toString(), 5E3, (0, g.gb)(a.t7, a), 3, 2E3);
            a.Vr(1)
        },
        MFb = function(a) {
            var b = a.j.K;
            b != null ? (P8(5), b ? (P8(11), U8(a.j, a, !1)) : (P8(12), U8(a.j, a, !0))) : (a.Ok = new Q8(a), a.Ok.Jv = a.eN, b = a.j, b = T8(b, b.kD() ? a.dI : null, a.gN), P8(5), c8(b, "TYPE", "xmlhttp"), zFb(a.Ok, b, !1, a.dI, !1))
        },
        NFb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new v8;
            this.Y = a || null;
            this.K = b != null ? b : null;
            this.Z = c || !1
        },
        OFb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        PFb = function(a, b, c, d) {
            g.zb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        QFb = function(a) {
            g.zb.call(this, "serverreachability", a)
        },
        SFb = function(a) {
            a.t5(1, 0);
            a.eI = T8(a, null, a.iN);
            RFb(a)
        },
        TFb = function(a) {
            a.zt && (a.zt.abort(), a.zt = null);
            a.Wg && (a.Wg.cancel(), a.Wg = null);
            a.Vq && (g.Ta.clearTimeout(a.Vq), a.Vq = null);
            V8(a);
            a.ek && (a.ek.cancel(), a.ek = null);
            a.Rs && (g.Ta.clearTimeout(a.Rs), a.Rs = null)
        },
        UFb = function(a, b) {
            if (a.j == 0) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new OFb(a.u5++, b));
            a.j != 2 && a.j != 3 || RFb(a)
        },
        VFb = function(a) {
            var b = 0;
            a.Wg && b++;
            a.ek && b++;
            return b
        },
        RFb = function(a) {
            a.ek || a.Rs || (a.Rs = N8((0, g.gb)(a.eV, a), 0), a.Wy = 0)
        },
        YFb = function(a, b) {
            if (a.j == 1) {
                if (!b) {
                    a.mD = Math.floor(Math.random() * 1E5);
                    b = a.mD++;
                    var c = new Q8(a, "", b);
                    c.Jv = a.hp;
                    var d = WFb(a),
                        e = a.eI.clone();
                    g.oq(e, "RID", b);
                    g.oq(e, "CVER", "1");
                    W8(a, e);
                    yFb(c, e, d);
                    a.ek = c;
                    a.j = 2
                }
            } else a.j == 3 && (b ? XFb(a, b) : a.B.length == 0 || a.ek || XFb(a))
        },
        XFb = function(a, b) {
            if (b)
                if (a.Mv > 6) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.mD - 1;
                    b = WFb(a)
                } else c = b.N, b = b.Lv;
            else c = a.mD++, b = WFb(a);
            var d = a.eI.clone();
            g.oq(d, "SID", a.D);
            g.oq(d, "RID", c);
            g.oq(d, "AID", a.Xy);
            W8(a, d);
            c = new Q8(a, a.D, c, a.Wy + 1);
            c.Jv = a.hp;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.ek = c;
            yFb(c, d, b)
        },
        W8 = function(a, b) {
            a.Mi && (a = a.Mi.iV()) && g.Uc(a, function(c, d) {
                g.oq(b, d, c)
            })
        },
        WFb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (a.Mv > 6 && b > 0) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    QF: void 0
                }, f++) {
                e.QF = a.B[f].j;
                var h = a.B[f].map;
                e.QF = a.Mv <= 6 ? f : e.QF - d;
                try {
                    g.Uc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.QF + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.QF + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        ZFb = function(a) {
            a.Wg || a.Vq || (a.N = 1, a.Vq = N8((0, g.gb)(a.dV, a), 0), a.Vy = 0)
        },
        aGb = function(a) {
            if (a.Wg || a.Vq || a.Vy >= 3) return !1;
            a.N++;
            a.Vq = N8((0, g.gb)(a.dV, a), $Fb(a, a.Vy));
            a.Vy++;
            return !0
        },
        U8 = function(a, b, c) {
            a.FM = a.K == null ? c : !a.K;
            a.ip = b.Uq;
            a.Z || SFb(a)
        },
        V8 = function(a) {
            a.Nv != null && (g.Ta.clearTimeout(a.Nv), a.Nv = null)
        },
        $Fb = function(a, b) {
            var c = 5E3 + Math.floor(Math.random() * 1E4);
            a.isActive() || (c *= 2);
            return c * b
        },
        X8 = function(a, b) {
            if (b == 2 || b == 9) {
                var c = null;
                a.Mi && (c = null);
                var d = (0, g.gb)(a.xea, a);
                c || (c = new g.gq("//www.google.com/images/cleardot.gif"), b8(c));
                IFb(c.toString(), 1E4, d)
            } else P8(2);
            bGb(a, b)
        },
        bGb = function(a, b) {
            a.j = 0;
            a.Mi && a.Mi.fV(b);
            cGb(a);
            TFb(a)
        },
        cGb = function(a) {
            a.j = 0;
            a.ip = -1;
            if (a.Mi)
                if (a.C.length == 0 && a.B.length == 0) a.Mi.jN();
                else {
                    var b = g.Lb(a.C),
                        c = g.Lb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Mi.jN(b, c)
                }
        },
        T8 = function(a, b, c) {
            var d = g.pq(c);
            if (d.j != "") b && g.iq(d, b + "." + d.j), g.jq(d, d.D);
            else {
                var e = window.location;
                d = CDb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.lD && g.Uc(a.lD, function(f, h) {
                g.oq(d, h, f)
            });
            g.oq(d, "VER", a.Mv);
            W8(a, d);
            return d
        },
        dGb = function() {},
        eGb = function() {
            this.j = [];
            this.B = []
        },
        fGb = function(a) {
            g.zb.call(this, "channelMessage");
            this.message = a
        },
        gGb = function(a) {
            g.zb.call(this, "channelError");
            this.error = a
        },
        hGb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Y8 = function(a, b) {
            g.I.call(this);
            this.j = new g.Lv(this.sca, 0, this);
            g.M(this, this.j);
            this.Ui = 5E3;
            this.B = 0;
            if (typeof a === "function") b && (a = (0, g.gb)(a, b));
            else if (a && typeof a.handleEvent === "function") a = (0, g.gb)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        iGb = function(a, b, c, d, e) {
            c = c === void 0 ? !1 : c;
            d = d === void 0 ? function() {
                return ""
            } : d;
            e = e === void 0 ? !1 : e;
            this.Ca = a;
            this.N = b;
            this.C = new g.iw;
            this.B = new Y8(this.Gda, this);
            this.j = null;
            this.qa = !1;
            this.K = null;
            this.Y = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Sa = c;
            this.ra = d;
            this.Va = e;
            this.Na = new DDb;
            this.Fa = new FDb;
            this.La = new HDb;
            this.Ha = new JDb;
            this.Wa = new LDb;
            this.eb = new MDb
        },
        jGb = function(a) {
            if (a.j) {
                var b = a.ra(),
                    c = a.j.hp || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.hp = c
            }
        },
        Z8 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.An(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.so(a) || "";
            a = g.oc();
            a.search("MSIE") >= 0 && (a = a.match(/MSIE ([\d.]+)/)[1], g.nc(a, "10.0") < 0 && (this.B = !1))
        },
        $8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.yo(c + b, {})
        },
        kGb = function(a, b) {
            g.Ed.call(this);
            var c = this;
            this.Id = a();
            this.Id.subscribe("handlerOpened", this.w5, this);
            this.Id.subscribe("handlerClosed", this.onClosed, this);
            this.Id.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Id.subscribe("handlerMessage", this.onMessage, this);
            this.j = b
        },
        lGb = function(a, b, c) {
            var d = this;
            c = c === void 0 ? function() {
                return ""
            } : c;
            var e = e === void 0 ? new rFb : e;
            var f = f === void 0 ? new g.iw : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ca = c;
            this.G = f;
            this.Z = null;
            this.Y = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new Y8(function() {
                d.C.isActive();
                var h;
                ((h = d.channel) == null ? void 0 : TEb((new uFb(h, h.j)).j.B)) === 0 && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.qa = !1;
            this.logger = null;
            this.ra = [];
            this.Bg = void 0;
            this.Na = new DDb;
            this.Fa = new FDb;
            this.La = new HDb;
            this.Ha = new JDb
        },
        mGb = function(a) {
            g.ud(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.v(a.ra), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.ra = [];
                a.publish("webChannelOpened");
                EDb(a.Na, "WEB_CHANNEL")
            });
            g.ud(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.publish("webChannelClosed");
                var b, c = (b = a.channel) == null ? void 0 : vFb(new uFb(b, b.j));
                c && (a.ra = [].concat(g.qa(c)));
                GDb(a.Fa, "WEB_CHANNEL")
            });
            g.ud(a.channel, "p", function(b) {
                var c = b.data;
                c[0] === "gracefulReconnect" ? (a.C.start(), a.channel && a.channel.close()) : a.publish("webChannelMessage", new hGb(c[0], c[1]));
                a.Bg = b.statusCode;
                IDb(a.La, "WEB_CHANNEL")
            });
            g.ud(a.channel, "o", function() {
                a.Bg === 401 || a.C.start();
                a.publish("webChannelError");
                KDb(a.Ha, "WEB_CHANNEL")
            })
        },
        nGb = function(a) {
            var b = a.Ca();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        oGb = function(a) {
            g.Ed.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.x5, this);
            this.j.subscribe("webChannelClosed", this.onClosed, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.onMessage, this)
        },
        pGb = function(a, b, c, d, e) {
            function f() {
                return new iGb($8(a, "/bc"), b, !1, c, d)
            }
            c = c === void 0 ? function() {
                return ""
            } : c;
            return g.NA("enable_mdx_web_channel_desktop") ? new oGb(function() {
                return new lGb($8(a, "/wc"), b, c)
            }) : new kGb(f, e)
        },
        tGb = function() {
            var a = qGb;
            rGb();
            a9.push(a);
            sGb()
        },
        b9 = function(a, b) {
            rGb();
            var c = uGb(a, String(b));
            a9.length == 0 ? vGb(c) : (sGb(), g.$b(a9, function(d) {
                d(c)
            }))
        },
        c9 = function(a) {
            b9("CP", a)
        },
        rGb = function() {
            a9 || (a9 = g.Xa("yt.mdx.remote.debug.handlers_") || [], g.Ua("yt.mdx.remote.debug.handlers_", a9))
        },
        vGb = function(a) {
            var b = (d9 + 1) % 50;
            d9 = b;
            e9[b] = a;
            f9 || (f9 = b == 49)
        },
        sGb = function() {
            var a = a9;
            if (e9[0]) {
                var b = f9 ? d9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e9[b];
                    g.$b(a, function(d) {
                        d(c)
                    })
                } while (b != d9);
                e9 = Array(50);
                d9 = -1;
                f9 = !1
            }
        },
        uGb = function(a, b) {
            var c = (Date.now() - wGb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g9 = function(a) {
            g.OE.call(this);
            this.K = a;
            this.screens = []
        },
        xGb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        yGb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Tt(a.screens, function(f) {
                return !!$Db(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = xGb(a, b[d]) || c;
            return c
        },
        zGb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Tt(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        AGb = function(a, b, c, d, e) {
            g.OE.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.md = NaN
        },
        i9 = function(a) {
            g9.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            h9(this);
            this.info("Initializing with " + XDb(this.screens))
        },
        BGb = function(a) {
            if (a.screens.length) {
                var b = g.es(a.screens, function(d) {
                        return d.id
                    }),
                    c = $8(a.B, "/pairing/get_lounge_token_batch");
                a.B.sendRequest("POST", c, {
                    screen_ids: b.join(",")
                }, (0, g.gb)(a.r9, a), (0, g.gb)(a.q9, a))
            }
        },
        h9 = function(a) {
            if (g.NA("deprecate_pair_servlet_enabled")) return yGb(a, []);
            var b = WDb(gEb());
            b = g.Tt(b, function(c) {
                return !c.uuid
            });
            return yGb(a, b)
        },
        j9 = function(a, b) {
            iEb(g.es(a.screens, UDb));
            b && hEb()
        },
        DGb = function(a, b) {
            g.OE.call(this);
            this.K = b;
            b = (b = g.GB("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Fb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            CGb("Initialized with " + g.tn(this.j))
        },
        EGb = function(a, b, c) {
            var d = $8(a.G, "/pairing/get_screen_availability");
            a.G.sendRequest("POST", d, {
                lounge_token: b.token
            }, (0, g.gb)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c(e[h].status == "online");
                        return
                    }
                c(!1)
            }, a), (0, g.gb)(function() {
                c(!1)
            }, a))
        },
        GGb = function(a, b) {
            a: if (wDb(b) != wDb(a.j)) var c = !1;
                else {
                    c = g.cd(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (CGb("Updated online screens: " + g.tn(a.j)), a.j = b, a.publish("screenChange"));FGb(a)
        },
        k9 = function(a) {
            isNaN(a.C) || g.LA(a.C);
            a.C = g.JA((0, g.gb)(a.IS, a), a.D > 0 && a.D < g.lb() ? 2E4 : 1E4)
        },
        CGb = function(a) {
            b9("OnlineScreenService", a)
        },
        HGb = function(a) {
            var b = {};
            g.$b(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.fg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        FGb = function(a) {
            a = g.cd(g.Vc(a.j, function(b) {
                return b
            }));
            g.Ub(a);
            a.length ? g.FB("yt-remote-online-screen-ids", a.join(","), 60) : g.LB("yt-remote-online-screen-ids")
        },
        l9 = function(a, b) {
            b = b === void 0 ? !1 : b;
            g9.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            IGb(this)
        },
        KGb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.bl(),
                l = c ? l8(h, c) : null;
            c && (a.N || l) || (l = l8(h, b));
            if (l) {
                l.uuid = b;
                var m = m9(a, l);
                EGb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? JGb(a, c, (0, g.gb)(function(n) {
                var p = m9(this, new i8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                EGb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        LGb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        MGb = function(a, b, c) {
            EGb(a.j, b, c)
        },
        JGb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.PA($8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        NGb = function(a) {
            a.screens = a.B.bl();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + XDb(a.screens))
        },
        IGb = function(a) {
            OGb(a);
            a.B = new i9(a.D);
            a.B.subscribe("screenChange", (0, g.gb)(a.B9, a));
            NGb(a);
            a.N || (a.C = WDb(g.GB("yt-remote-automatic-screen-cache") || []));
            OGb(a);
            a.info("Initializing automatic screens: " + XDb(a.C));
            a.j = new DGb(a.D, (0, g.gb)(a.bl, a, !0));
            a.j.subscribe("screenChange", (0, g.gb)(function() {
                this.publish("onlineScreenChange")
            }, a))
        },
        m9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = l8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || PGb(a));
            OGb(a);
            a.G[b.uuid] = b.id;
            g.FB("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        PGb = function(a) {
            a = g.Tt(a.C, function(b) {
                return b.idType != "shortLived"
            });
            g.FB("yt-remote-automatic-screen-cache", g.es(a, UDb))
        },
        OGb = function(a) {
            a.G = g.GB("yt-remote-device-id-map") || {}
        },
        n9 = function(a, b, c) {
            g.OE.call(this);
            this.Ha = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        o9 = function(a, b) {
            a.j = b;
            a.publish("sessionScreen", a.j)
        },
        QGb = function(a, b) {
            a.j && (a.j.token = b, m9(a.D, a.j));
            a.publish("sessionScreen", a.j)
        },
        p9 = function(a, b) {
            b9(a.Ha, b)
        },
        q9 = function(a, b, c) {
            n9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.ra = (0, g.gb)(this.C5, this);
            this.Fa = (0, g.gb)(this.Fca, this);
            this.qa = g.JA(function() {
                RGb(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ca = !1;
            this.Y = "unknown"
        },
        TGb = function(a, b) {
            g.LA(a.N);
            a.N = 0;
            b == 0 ? SGb(a) : a.N = g.JA(function() {
                SGb(a)
            }, b)
        },
        SGb = function(a) {
            UGb(a, "getLoungeToken");
            g.LA(a.G);
            a.G = g.JA(function() {
                VGb(a, null)
            }, 3E4)
        },
        UGb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.tn());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.gb)(function() {
                p9(this, "Failed to send message: " + b + ".")
            }, a)) : p9(a, "Sending yt message without session: " + g.tn(c))
        },
        WGb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.vY(b, function(c) {
                o9(a, c)
            }, function() {
                return a.Ej()
            }, 5)) : a.Ej(Error("Waiting for session status timed out."))
        },
        YGb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new i8(b);
            XGb(a, d, function(e) {
                e ? (a.Ca = !0, m9(a.D, d), o9(a, d), a.Y = "unknown", TGb(a, c)) : (g.uA(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Ej())
            }, 5)
        },
        RGb = function(a, b) {
            g.LA(a.qa);
            a.qa = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? YGb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.uA(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), WGb(a, b.screenId))) : (g.uA(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), WGb(a, b.screenId)) :
                WGb(a, b.screenId) : a.Ej(Error("Waiting for session status timed out."))
        },
        VGb = function(a, b) {
            g.LA(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, TGb(a, 3E4)) : (QGb(a, b.loungeToken), a.Ca = !1, a.Y = "unknown", TGb(a, b.loungeTokenRefreshIntervalMs))
        },
        XGb = function(a, b, c, d) {
            g.LA(a.K);
            a.K = 0;
            MGb(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.JA(function() {
                    XGb(a, b, c, d - 1)
                }, 300)
            })
        },
        ZGb = function(a) {
            g.LA(a.Z);
            a.Z = 0;
            g.LA(a.K);
            a.K = 0;
            g.LA(a.qa);
            a.qa = 0;
            g.LA(a.G);
            a.G = 0;
            g.LA(a.N);
            a.N = 0
        },
        r9 = function(a, b, c, d) {
            n9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Fa = "";
            this.Sa = c;
            this.Na = null;
            this.qa = function() {};
            this.Y = NaN;
            this.La = (0, g.gb)(this.D5, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.ra = !1;
            this.Ca = "unknown"
        },
        s9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && ((b = a.C) == null ? 0 : b.getDialAppInfo))
        },
        $Gb = function(a) {
            a.G = a.D.kV(a.Fa, a.B.label, a.B.friendlyName, s9(a), function(b, c) {
                a.G = function() {};
                a.ra = !0;
                o9(a, b);
                b.idType == "shortLived" && c > 0 && t9(a, c)
            }, function(b) {
                a.G = function() {};
                a.Ej(b)
            })
        },
        aHb = function(a) {
            var b = {};
            b.pairingCode = a.Fa;
            b.theme = a.Sa;
            kEb() && (b.env_useStageMdx = 1);
            return g.xo(b)
        },
        bHb = function(a) {
            return new Promise(function(b) {
                a.Fa = YDb();
                if (a.Na) {
                    var c = new chrome.cast.DialLaunchResponse(!0, aHb(a));
                    b(c);
                    $Gb(a)
                } else a.qa = function() {
                    g.LA(a.Y);
                    a.qa = function() {};
                    a.Y = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, aHb(a));
                    b(d);
                    $Gb(a)
                }, a.Y = g.JA(function() {
                    a.qa()
                }, 100)
            })
        },
        dHb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new i8(b);
            return (new Promise(function(e) {
                cHb(a, d, function(f) {
                    f ? (a.ra = !0, m9(a.D, d), o9(a, d), t9(a, c)) : g.uA(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : bHb(a)
            })
        },
        eHb = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                KGb(a.D, c, b, d, function(f) {
                    f && f.token && o9(a, f);
                    e(f)
                }, function(f) {
                    p9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : bHb(a)
            })
        },
        cHb = function(a, b, c, d) {
            g.LA(a.K);
            a.K = 0;
            MGb(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.JA(function() {
                    cHb(a, b, c, d - 1)
                }, 300)
            })
        },
        t9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            s9(a) && (g.LA(a.N), a.N = 0, b == 0 ? fHb(a) : a.N = g.JA(function() {
                fHb(a)
            }, b))
        },
        fHb = function(a) {
            s9(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ca = c, t9(a, 3E4)) : (a.ra = !1, a.Ca = "unknown", QGb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ca = "noLoungeTokenResponse";
                t9(a, 3E4)
            })
        },
        gHb = function(a) {
            g.LA(a.K);
            a.K = 0;
            g.LA(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.LA(a.Y)
        },
        u9 = function(a, b) {
            n9.call(this, a, b, "ManualSession");
            this.C = g.JA((0, g.gb)(this.SA, this, null), 150)
        },
        v9 = function(a, b) {
            g.OE.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.Y = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.gb)(this.Gba, this)
        },
        hHb = function(a, b) {
            return b ? g.Db(a.C, function(c) {
                return j8(b, c.label)
            }, a) : null
        },
        w9 = function(a) {
            b9("Controller", a)
        },
        qGb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        x9 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        y9 = function(a, b, c) {
            b != a.j && (g.vb(a.j), (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed",
                b.B) : a.publish("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.gb)(a.b0, a, b)), b.subscribe("sessionFailed", function() {
                return iHb(a, b)
            }), b.j ? a.publish("yt-remote-cast2-session-change", b.j) : c && a.j.SA(null)) : a.publish("yt-remote-cast2-session-change", null))
        },
        iHb = function(a, b) {
            a.j == b && a.publish("yt-remote-cast2-session-failed")
        },
        jHb = function(a) {
            var b = a.B.jV(),
                c = a.j && a.j.B;
            a = g.es(b, function(d) {
                c && j8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = hHb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        qHb = function(a, b, c, d) {
            d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : kHb() ? lHb(b, d) && (mHb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? nHb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? nHb(a, c) : (A9("Failed to load cast API: " + f), oHb(!1), mHb(!1), g.LB("yt-remote-cast-available"), g.LB("yt-remote-cast-receiver"),
                    pHb(), c(!1))
            }, d.loadCastApiSetupScript ? g.kva("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? mEb() >= 60 && vEb() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? qEb() : mEb() >= 89 ? xEb() : (uEb(), s8(wEb.map(rEb))))) : z9("Cannot initialize because not running Chrome")
        },
        pHb = function() {
            z9("dispose");
            var a = B9();
            a && a.dispose();
            g.Ua("yt.mdx.remote.cloudview.instance_", null);
            rHb(!1);
            g.zD(sHb);
            sHb.length = 0
        },
        C9 = function() {
            return !!g.GB("yt-remote-cast-installed")
        },
        tHb = function() {
            var a = g.GB("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        uHb = function() {
            z9("clearCurrentReceiver");
            g.LB("yt-remote-cast-receiver")
        },
        vHb = function() {
            return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null)
        },
        wHb = function() {
            C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), sHb.push(g.yD("yt-remote-cast2-api-ready", wHb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!")
        },
        E9 = function(a, b) {
            D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.")
        },
        kHb = function() {
            var a = g.oc().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.QJ || a
        },
        xHb = function(a, b) {
            B9().init(a, b)
        },
        lHb = function(a, b) {
            var c = !1;
            B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.FB("yt-remote-cast-available", d);
                q8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                z9("onReceiverSelected: " + d.friendlyName);
                g.FB("yt-remote-cast-receiver", d);
                q8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                z9("onReceiverResumed: " + d.friendlyName);
                g.FB("yt-remote-cast-receiver", d);
                q8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                z9("onSessionChange: " + k8(d));
                d || g.LB("yt-remote-cast-receiver");
                q8("yt-remote-cast2-session-change", d)
            }), g.Ua("yt.mdx.remote.cloudview.instance_", a), c = !0);
            z9("cloudview.createSingleton_: " + c);
            return c
        },
        B9 = function() {
            return g.Xa("yt.mdx.remote.cloudview.instance_")
        },
        nHb = function(a, b) {
            oHb(!0);
            mHb(!1);
            xHb(a, function(c) {
                c ? (rHb(!0), g.AD("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), oHb(!1), g.LB("yt-remote-cast-available"), g.LB("yt-remote-cast-receiver"), pHb());
                b(c)
            })
        },
        z9 = function(a) {
            b9("cloudview", a)
        },
        A9 = function(a) {
            b9("cloudview", a)
        },
        oHb = function(a) {
            z9("setCastInstalled_ " + a);
            g.FB("yt-remote-cast-installed", a)
        },
        D9 = function() {
            return !!g.Xa("yt.mdx.remote.cloudview.apiReady_")
        },
        rHb = function(a) {
            z9("setApiReady_ " + a);
            g.Ua("yt.mdx.remote.cloudview.apiReady_", a)
        },
        mHb = function(a) {
            g.Ua("yt.mdx.remote.cloudview.initializing_", a)
        },
        F9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.jl = this.Sp = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        yHb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Sp = !1;
            a.jl = !1;
            a.N = 0;
            a.K = g.lb();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        G9 = function(a) {
            return a.isPlaying() ? (g.lb() - a.K) / 1E3 : 0
        },
        H9 = function(a, b) {
            a.N = b;
            a.K = g.lb()
        },
        I9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.lb() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        J9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && yHb(a)
        },
        zHb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.kd(a.trackData);
            b.hasPrevious = a.Sp;
            b.hasNext = a.jl;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        L9 = function(a, b) {
            g.OE.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new eGb;
            this.B = this.j = null;
            this.Y = (0, g.gb)(this.uaa, this);
            this.N = (0, g.gb)(this.dG, this);
            this.Z = (0, g.gb)(this.taa, this);
            this.qa = (0, g.gb)(this.waa, this);
            var d = 0;
            a ? (d = a.getProxyState(), d != 3 && (a.subscribe("proxyStateChange", this.iT, this), AHb(this))) : d = 3;
            d != 0 && (b ? this.iT(d) : g.JA(function() {
                c.iT(d)
            }, 0));
            (a = vHb()) && K9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.qa)
        },
        M9 = function(a) {
            return new F9(a.D.getPlayerContextData())
        },
        AHb = function(a) {
            g.$b("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.ib(this.Eba, b), this))
            }, a)
        },
        BHb = function(a) {
            g.$b(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        N9 = function(a) {
            return a.getState() == 1
        },
        O9 = function(a, b) {
            var c = a.G;
            c.j.length + c.B.length < 50 && a.G.enqueue(b)
        },
        CHb = function(a, b, c) {
            var d = M9(a);
            H9(d, c);
            d.playerState != -1E3 && (d.playerState = b);
            P9(a, d)
        },
        Q9 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        P9 = function(a, b) {
            BHb(a);
            a.D.setPlayerContextData(zHb(b));
            AHb(a)
        },
        K9 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.Y), a.B.removeMediaListener(a.N), a.dG(null));
            a.B = b;
            a.B && (c9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Y), a.B.addMediaListener(a.N), a.B.media.length && a.dG(a.B.media[0]))
        },
        DHb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = M9(a);
                b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                H9(d, a.j.getEstimatedTime());
                P9(a, d)
            } else c9("No cast media video. Ignoring state update.")
        },
        R9 = function(a, b, c) {
            return (0, g.gb)(function(d) {
                this.fg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.fg("Retrying " + b + " using MDx browser channel."), Q9(this, b, c))
            }, a)
        },
        U9 = function(a, b, c, d) {
            d = d === void 0 ? !1 : d;
            g.OE.call(this);
            var e = this;
            this.K = NaN;
            this.Fa = !1;
            this.Y = this.Z = this.ra = this.Ca = NaN;
            this.qa = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Na = a;
            this.La = d;
            this.qa.push(g.wB(window, "beforeunload", function() {
                e.Uz(2)
            }));
            this.C = [];
            this.j = new F9;
            this.Sa = b.id;
            this.Ha = b.idType;
            this.B = pGb(this.Na, c, this.oV, this.Ha == "shortLived", this.Sa);
            this.B.listen("channelOpened", function() {
                EHb(e)
            });
            this.B.listen("channelClosed", function() {
                S9("Channel closed");
                isNaN(e.K) ? o8(!0) : o8();
                e.dispose()
            });
            this.B.listen("channelError", function(f) {
                o8();
                isNaN(e.WE()) ? (f == 1 && e.Ha == "shortLived" && e.publish("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Fa = !0, S9("Channel error: " + f + " with reconnection in " + e.WE() + " ms"), T9(e, 2))
            });
            this.B.listen("channelMessage", function(f) {
                FHb(e, f)
            });
            this.B.zs(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.MB() && g.FB("yt-remote-session-video-id", f)
            })
        },
        GHb = function(a) {
            return g.Db(a.C, function(b) {
                return b.type == "LOUNGE_SCREEN"
            })
        },
        S9 = function(a) {
            b9("conn", a)
        },
        T9 = function(a, b) {
            a.publish("proxyStateChange", b)
        },
        HHb = function(a) {
            a.K = g.JA(function() {
                S9("Connecting timeout");
                a.Uz(1)
            }, 2E4)
        },
        IHb = function(a) {
            g.LA(a.K);
            a.K = NaN
        },
        JHb = function(a) {
            g.LA(a.Ca);
            a.Ca = NaN
        },
        LHb = function(a) {
            KHb(a);
            a.ra = g.JA(function() {
                V9(a, "getNowPlaying")
            }, 2E4)
        },
        KHb = function(a) {
            g.LA(a.ra);
            a.ra = NaN
        },
        EHb = function(a) {
            S9("Channel opened");
            a.Fa && (a.Fa = !1, JHb(a), a.Ca = g.JA(function() {
                S9("Timing out waiting for a screen.");
                a.Uz(1)
            }, 15E3))
        },
        NHb = function(a, b) {
            var c = null;
            if (b) {
                var d = GHb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ua("yt.mdx.remote.remoteClient_", c);
            b && (IHb(a), JHb(a));
            c = a.B.EA() && isNaN(a.K);
            b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.qY() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), MHb(a)) : a.Uz(1)
        },
        OHb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.gd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.publish("remotePlayerChange"))
        },
        PHb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            J9(a.j, d, e);
            a.publish("remoteQueueChange", c)
        },
        RHb = function(a, b) {
            b.params = b.params || {};
            PHb(a, b, "NOW_PLAYING_MAY_CHANGE");
            QHb(a, b);
            a.publish("autoplayDismissed")
        },
        QHb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            H9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c;
            c == -1 && a.j.playerState == -1E3 && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.Dl(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            a.j.playerState == 1 ? LHb(a) : KHb(a);
            a.publish("remotePlayerChange")
        },
        SHb = function(a, b) {
            if (a.j.playerState != -1E3) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                H9(a.j, isNaN(b) ? 0 : b);
                a.publish("remotePlayerChange")
            }
        },
        THb = function(a, b) {
            var c = b.params.muted == "true";
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.publish("remotePlayerChange")
        },
        UHb = function(a, b) {
            a.N = b.params.videoId;
            a.publish("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        VHb = function(a, b) {
            a.N = b.params.videoId || null;
            a.publish("autoplayUpNext", a.N)
        },
        WHb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.publish("autoplayModeChange", a.G);
            a.G == "DISABLED" && a.publish("autoplayDismissed")
        },
        XHb = function(a, b) {
            var c = b.params.hasNext == "true";
            a.j.Sp = b.params.hasPrevious == "true";
            a.j.jl = c;
            a.publish("previousNextChange")
        },
        FHb = function(a, b) {
            b = b.message;
            b.params ? S9("Received: action=" + b.action + ", params=" + g.tn(b.params)) : S9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = d8(b.params.devices);
                    a.C = g.es(b, function(d) {
                        return new RDb(d)
                    });
                    b = !!g.Db(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    NHb(a, b);
                    b = a.rZ("mlm");
                    a.publish("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Jb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    NHb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new RDb(d8(b.params.device));
                    g.Db(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || vDb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new RDb(d8(b.params.device));
                    g.Jb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    PHb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    RHb(a, b);
                    break;
                case "onStateChange":
                    QHb(a, b);
                    break;
                case "onAdStateChange":
                    SHb(a, b);
                    break;
                case "onVolumeChanged":
                    THb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    OHb(a, b);
                    break;
                case "nowAutoplaying":
                    UHb(a, b);
                    break;
                case "autoplayDismissed":
                    a.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    VHb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    WHb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    XHb(a,
                        b);
                    break;
                case "requestAssistedSignIn":
                    a.publish("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.publish("loopModeChange", b.params.loopMode);
                    break;
                default:
                    S9("Unrecognized action: " + b.action)
            }
        },
        MHb = function(a) {
            g.LA(a.Y);
            a.Y = g.JA(function() {
                a.Uz(1)
            }, 864E5)
        },
        V9 = function(a, b, c) {
            c ? S9("Sending: action=" + b + ", params=" + g.tn(c)) : S9("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        YHb = function(a) {
            g9.call(this, "ScreenServiceProxy");
            this.ih = a;
            this.j = [];
            this.j.push(this.ih.$_s("screenChange", (0, g.gb)(this.H5, this)));
            this.j.push(this.ih.$_s("onlineScreenChange", (0, g.gb)(this.mba, this)))
        },
        cIb = function(a, b) {
            jEb();
            if (!p8 || !p8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.rA("MDX_CONFIG") || b;
                aEb();
                eEb();
                W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), kEb() && (W9.j = "/api/loungedev"));
                X9 || (X9 = g.Xa("yt.mdx.remote.deferredProxies_") || [], g.Ua("yt.mdx.remote.deferredProxies_", X9));
                ZHb();
                var c = Y9();
                if (!c) {
                    var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ua("yt.mdx.remote.screenService_", d);
                    c = Y9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ua("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    qHb(a, d, function(f) {
                        f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            q8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Xa("yt.mdx.remote.initialized_") && (g.Ua("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.tn(b)),
                    a$.push(g.yD("yt-remote-cast2-api-ready", function() {
                        q8("yt-remote-api-ready")
                    })), a$.push(g.yD("yt-remote-cast2-availability-change", function() {
                        q8("yt-remote-receiver-availability-change")
                    })), a$.push(g.yD("yt-remote-cast2-receiver-selected", function() {
                        b$(null);
                        q8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), a$.push(g.yD("yt-remote-cast2-receiver-resumed", function() {
                        q8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), a$.push(g.yD("yt-remote-cast2-session-change", $Hb)), a$.push(g.yD("yt-remote-connection-change", function(f) {
                        f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), uHb())
                    })), a$.push(g.yD("yt-remote-cast2-session-failed", function() {
                        q8("yt-remote-connection-failed")
                    })), a = aIb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.NA("desktop_enable_autoplay") &&
                    e.push("atp"), e.length > 0 && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.tn(a)), a ? (g.FB("yt-remote-session-app", a.app), g.FB("yt-remote-session-name", a.name)) : (g.LB("yt-remote-session-app"), g.LB("yt-remote-session-name")), g.Ua("yt.mdx.remote.channelParams_", a), c.start(), Z9() || bIb())
            }
        },
        dIb = function() {
            var a = Y9().ih.$_gos();
            var b = d$();
            b && e$() && ($Db(a, b) || a.push(b));
            return ZDb(a)
        },
        fIb = function() {
            var a = eIb();
            !a && C9() && tHb() && (a = {
                key: "cast-selector-receiver",
                name: tHb()
            });
            return a
        },
        eIb = function() {
            var a = dIb(),
                b = d$();
            b || (b = c$());
            return g.Db(a, function(c) {
                return b && j8(b, c.key) ? !0 : !1
            })
        },
        d$ = function() {
            var a = Z9();
            if (!a) return null;
            var b = Y9().bl();
            return l8(b, a)
        },
        $Hb = function(a) {
            $9("remote.onCastSessionChange_: " + k8(a));
            if (a) {
                var b = d$();
                if (b && b.id == a.id) {
                    if (E9(b.id, "YouTube TV"), a.idType == "shortLived" && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.zs(a)
                } else b && g$(), h$(a, 1)
            } else e$() && g$()
        },
        g$ = function() {
            D9() ? B9().stopSession() : A9("stopSession called before API ready.");
            var a = e$();
            a && (a.disconnect(1), gIb(null))
        },
        hIb = function() {
            var a = e$();
            return !!a && a.getProxyState() != 3
        },
        $9 = function(a) {
            b9("remote", a)
        },
        Y9 = function() {
            if (!iIb) {
                var a = g.Xa("yt.mdx.remote.screenService_");
                iIb = a ? new YHb(a) : null
            }
            return iIb
        },
        Z9 = function() {
            return g.Xa("yt.mdx.remote.currentScreenId_")
        },
        jIb = function(a) {
            g.Ua("yt.mdx.remote.currentScreenId_", a)
        },
        kIb = function() {
            return g.Xa("yt.mdx.remote.connectData_")
        },
        b$ = function(a) {
            g.Ua("yt.mdx.remote.connectData_", a)
        },
        e$ = function() {
            return g.Xa("yt.mdx.remote.connection_")
        },
        gIb = function(a) {
            var b = e$();
            b$(null);
            a || jIb("");
            g.Ua("yt.mdx.remote.connection_", a);
            X9 && (g.$b(X9, function(c) {
                c(a)
            }), X9.length = 0);
            b && !a ? q8("yt-remote-connection-change", !1) : !b && a && q8("yt-remote-connection-change", !0)
        },
        c$ = function() {
            var a = g.MB();
            if (!a) return null;
            var b = Y9();
            if (!b) return null;
            b = b.bl();
            return l8(b, a)
        },
        h$ = function(a, b) {
            Z9();
            d$() && d$();
            if (i$) f$ = a;
            else {
                jIb(a.id);
                var c = g.Xa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new U9(W9, a, aIb(), c);
                a.connect(b, kIb());
                a.subscribe("beforeDisconnect", function(d) {
                    q8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    e$() && (e$(), gIb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = d$();
                    d && d.idType == "shortLived" && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready."))
                });
                gIb(a)
            }
        },
        bIb = function() {
            var a = c$();
            a ? ($9("Resume connection to: " + k8(a)), h$(a, 0)) : (o8(), uHb(), $9("Skipping connecting because no session screen found."))
        },
        ZHb = function() {
            var a = aIb();
            if (g.gd(a)) {
                a = n8();
                var b = g.GB("yt-remote-session-name") || "",
                    c = g.GB("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.rA("SESSION_INDEX", "0"));
                (b = g.rA("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ua("yt.mdx.remote.channelParams_", a)
            }
        },
        aIb = function() {
            return g.Xa("yt.mdx.remote.channelParams_") || {}
        },
        nIb = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Jc = c;
            this.events = new g.SJ(this);
            this.Y = this.events.T(this.J, "onVolumeChange", function(e) {
                lIb(d, e)
            });
            this.D = !1;
            this.G = new g.FK(64);
            this.j = new g.Lv(this.W1, 500, this);
            this.B = new g.Lv(this.X1, 1E3, this);
            this.N = new t8(this.Uea, 0, this);
            this.C = {};
            this.Z = new g.Lv(this.Y2, 1E3, this);
            this.K = new u8(this.seekTo, 1E3, this);
            g.M(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.Vaa);
            this.events.T(b, "captionschanged", this.raa);
            this.events.T(b, "captionssettingschanged", this.j2);
            this.events.T(b, "videoplayerreset", this.mL);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Jc.DX()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                mIb(d.module) || j$(d) || k$(d, 0)
            });
            a = this.Jc;
            a.Ma();
            a.subscribe("proxyStateChange", this.W_, this);
            a.subscribe("remotePlayerChange", this.kG, this);
            a.subscribe("remoteQueueChange", this.mL, this);
            a.subscribe("previousNextChange", this.T_, this);
            a.subscribe("nowAutoplaying", this.P_, this);
            a.subscribe("autoplayDismissed", this.y_, this);
            g.M(this, this.j);
            g.M(this, this.B);
            g.M(this, this.N);
            g.M(this, this.Z);
            g.M(this, this.K);
            this.j2();
            this.mL();
            this.kG()
        },
        lIb = function(a, b) {
            if (j$(a)) {
                a.Jc.unsubscribe("remotePlayerChange", a.kG, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = M9(a.Jc);
                if (c !== d.volume || b !== d.muted) a.Jc.setVolume(c, b), a.Z.start();
                a.Jc.subscribe("remotePlayerChange", a.kG, a)
            }
        },
        oIb = function(a) {
            a.Rc(0);
            a.j.stop();
            a.Gc(new g.FK(64))
        },
        pIb = function(a, b) {
            if (j$(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.ld(c, b));
                a.Jc.nV(a.J.getVideoData(1).videoId, c);
                a.C = M9(a.Jc).trackData
            }
        },
        k$ = function(a, b) {
            var c = a.J.getPlaylist();
            if (c == null ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Jc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ca, uDb(c));
            a.Gc(new g.FK(1))
        },
        qIb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    eZ: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        j$ = function(a) {
            return M9(a.Jc).videoId === a.J.getVideoData(1).videoId
        },
        l$ = function() {
            g.W.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                W: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        va: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        va: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            Ka: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            va: "Cancel"
                        }, {
                            I: "button",
                            Ka: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            va: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.zF(this, 250);
            this.cancelButton = this.Ga("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ga("ytp-mdx-privacy-popup-confirm");
            g.M(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        m$ = function(a) {
            g.W.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.gya()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        va: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.zF(this, 250);
            g.M(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.Hc(a.getPlayerStateObject())
        },
        n$ = function(a, b) {
            g.KU.call(this, "Play on", 1, a, b);
            this.J = a;
            this.Qu = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        rIb = function(a) {
            g.pV.call(this, a);
            this.hq = {
                key: YDb(),
                name: "This computer"
            };
            this.jm = null;
            this.subscriptions = [];
            this.pS = this.Jc = null;
            this.Qu = [this.hq];
            this.Ct = this.hq;
            this.De = new g.FK(64);
            this.EZ = 0;
            this.ai = -1;
            this.DG = !1;
            this.CG = this.LB = null;
            if (!g.CR(this.player.U()) && !g.XF(this.player.U())) {
                a = this.player;
                var b = g.ET(a);
                b && (b = b.Sn()) && (b = new n$(a, b), g.M(this, b));
                b = new m$(a);
                g.M(this, b);
                g.QT(a, b.element, 4);
                this.LB = new l$;
                g.M(this, this.LB);
                g.QT(a, this.LB.element, 4);
                this.DG = !!c$()
            }
        },
        o$ = function(a) {
            a.CG && (a.player.removeEventListener("presentingplayerstatechange",
                a.CG), a.CG = null)
        },
        sIb = function(a, b, c) {
            a.De = c;
            a.player.publish("presentingplayerstatechange", new g.FF(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.Ct.key)
                if (b.key === a.hq.key) g$();
                else if (mIb(a) && tIb(a), a.Ct = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.XF(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (a.player.getAppState() === 2 || a.player.getAppState() === 1) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.mV(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ca,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: f === 0 ? void 0 : f
                    };
                    (d = uDb(d)) && (a.locationInfo = d);
                    d = a
                }
                $9("Connecting to: " + g.tn(b));
                b.key == "cast-selector-receiver" ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && hIb() && Z9() == b.key ? q8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().bl(), (b = l8(d, b.key)) && h$(b, 1))
            }
        },
        mIb = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.DG || !a.LB ? !1 : g.MR(b) || g.OR(b)
        },
        tIb = function(a) {
            a.player.getPlayerStateObject().isPlaying() ? a.player.pauseVideo() : (a.CG = function(b) {
                !a.DG && g.IF(b, 8) && (a.player.pauseVideo(), o$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.CG));
            a.LB && a.LB.rd();
            e$() || (i$ = !0)
        };
    g.k = g8.prototype;
    g.k.Cm = function() {
        h8(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.B[this.j[b]]);
        return a
    };
    g.k.Rn = function() {
        h8(this);
        return this.j.concat()
    };
    g.k.has = function(a) {
        return f8(this.B, a)
    };
    g.k.isEmpty = function() {
        return this.size == 0
    };
    g.k.clear = function() {
        this.B = {};
        this.wv = this.size = this.j.length = 0
    };
    g.k.remove = function(a) {
        return this.delete(a)
    };
    g.k.delete = function(a) {
        return f8(this.B, a) ? (delete this.B[a], --this.size, this.wv++, this.j.length > 2 * this.size && h8(this), !0) : !1
    };
    g.k.get = function(a, b) {
        return f8(this.B, a) ? this.B[a] : b
    };
    g.k.set = function(a, b) {
        f8(this.B, a) || (this.size += 1, this.j.push(a), this.wv++);
        this.B[a] = b
    };
    g.k.forEach = function(a, b) {
        for (var c = this.Rn(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.k.clone = function() {
        return new g8(this)
    };
    g.k.keys = function() {
        return g.Fla(this.hm(!0)).j()
    };
    g.k.values = function() {
        return g.Fla(this.hm(!1)).j()
    };
    g.k.entries = function() {
        var a = this;
        return NDb(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    g.k.hm = function(a) {
        h8(this);
        var b = 0,
            c = this.wv,
            d = this,
            e = new g.Ot;
        e.next = function() {
            if (c != d.wv) throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length) return g.s2;
            var f = d.j[b++];
            return g.Pt(a ? f : d.B[f])
        };
        return e
    };
    var SDb = {
            Jqa: "atp",
            W8a: "ska",
            d5a: "que",
            jXa: "mus",
            U8a: "sus",
            aIa: "dsp",
            U6a: "seq",
            GVa: "mic",
            vya: "dpa",
            lsa: "cds",
            XWa: "mlm",
            jya: "dsdtr",
            JXa: "ntb",
            Pkb: "vsp",
            jza: "scn",
            r5a: "rpe",
            gya: "dcn",
            hya: "dcp",
            D1a: "pas",
            iya: "drq",
            j0a: "opf",
            iza: "els",
            m7a: "svq",
            YWa: "mvp"
        },
        TDb = {
            I6: "u",
            N3: "cl",
            n6: "k",
            j4: "i",
            Q3: "cr",
            u6: "m",
            f4: "g",
            jW: "up"
        },
        dEb = "",
        p8 = null;
    lEb.prototype.flush = function(a, b) {
        a = a === void 0 ? [] : a;
        b = b === void 0 ? !1 : b;
        if (g.NA("enable_client_streamz_web")) {
            a = g.v(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.ifa(c.value), c = {
                serializedIncrementBatch: g.Hg(c.j())
            }, g.cC("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var r8, tEb = nEb("loadCastFramework") || nEb("loadCastApplicationFramework"),
        wEb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.nb(t8, g.I);
    g.k = t8.prototype;
    g.k.l5 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.md ? this.C = g.lb() + this.Ui : this.md = g.og(this.G, this.Ui)
    };
    g.k.stop = function() {
        this.md && (g.Ta.clearTimeout(this.md), this.md = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        t8.Pf.xa.call(this)
    };
    g.k.m5 = function() {
        this.md && (g.Ta.clearTimeout(this.md), this.md = null);
        this.C ? (this.md = g.og(this.G, this.C - g.lb()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.y(u8, g.I);
    g.k = u8.prototype;
    g.k.aN = function(a) {
        this.C = arguments;
        this.md || this.B ? this.j = !0 : yEb(this)
    };
    g.k.stop = function() {
        this.md && (g.Ta.clearTimeout(this.md), this.md = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.md || (this.j = !1, yEb(this))
    };
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.stop()
    };
    v8.prototype.stringify = function(a) {
        return g.Ta.JSON.stringify(a, void 0)
    };
    v8.prototype.parse = function(a) {
        return g.Ta.JSON.parse(a, void 0)
    };
    g.nb(zEb, g.zb);
    g.nb(AEb, g.zb);
    var BEb = null;
    g.nb(DEb, g.zb);
    g.nb(EEb, g.zb);
    g.nb(FEb, g.zb);
    z8.prototype.debug = function() {};
    z8.prototype.info = function() {};
    z8.prototype.warning = function() {};
    var MEb = {},
        LEb = {};
    g.k = A8.prototype;
    g.k.setTimeout = function(a) {
        this.fb = a
    };
    g.k.o5 = function(a) {
        a = a.target;
        var b = this.Wa;
        b && g.Fo(a) == 3 ? b.aN() : this.RU(a)
    };
    g.k.RU = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Fo(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(b < 3) && (b != 3 || this.j && (this.B.B || g.Ho(this.j) || g.Io(this.j)))) {
                    this.La || b != 4 || c == 7 || (c == 8 || d <= 0 ? w8(3) : w8(2));
                    PEb(this);
                    var e = this.j.getStatus();
                    this.Jb = e;
                    b: if (KEb(this)) {
                        var f = g.Io(this.j);
                        a = "";
                        var h = f.length,
                            l = g.Fo(this.j) == 4;
                        if (!this.B.C) {
                            if (typeof TextDecoder === "undefined") {
                                D8(this);
                                C8(this);
                                var m = "";
                                break b
                            }
                            this.B.C = new g.Ta.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.B.B = !0, a += this.B.C.decode(f[c], {
                            stream: !(l &&
                                c == h - 1)
                        });
                        f.length = 0;
                        this.B.j += a;
                        this.N = 0;
                        m = this.B.j
                    } else m = g.Ho(this.j);
                    if (this.K = e == 200) {
                        if (this.Gb && !this.Va) {
                            b: {
                                if (this.j) {
                                    var n = g.Jo(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.fc(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Va = !0,
                            YEb(this, e);
                            else {
                                this.K = !1;
                                this.G = 3;
                                x8(12);
                                D8(this);
                                C8(this);
                                break a
                            }
                        }
                        if (this.Ha) {
                            e = !0;
                            for (var q; !this.La && this.N < m.length;)
                                if (q = NEb(this, m), q == LEb) {
                                    b == 4 && (this.G = 4, x8(14), e = !1);
                                    break
                                } else if (q == MEb) {
                                this.G = 4;
                                x8(15);
                                e = !1;
                                break
                            } else YEb(this, q);
                            KEb(this) && this.N != 0 && (this.B.j =
                                this.B.j.slice(this.N), this.N = 0);
                            b != 4 || m.length != 0 || this.B.B || (this.G = 1, x8(16), e = !1);
                            this.K = this.K && e;
                            e ? m.length > 0 && !this.Kb && (this.Kb = !0, this.C.AR(this)) : (D8(this), C8(this))
                        } else YEb(this, m);
                        b == 4 && D8(this);
                        this.K && !this.La && (b == 4 ? QEb(this.C, this) : (this.K = !1, B8(this)))
                    } else g.Wfa(this.j), e == 400 && m.indexOf("Unknown SID") > 0 ? (this.G = 3, x8(12)) : (this.G = 0, x8(13)), D8(this), C8(this)
                }
            }
        } catch (r) {} finally {}
    };
    g.k.cancel = function() {
        this.La = !0;
        D8(this)
    };
    g.k.n5 = function() {
        this.qa = null;
        var a = Date.now();
        a - this.rb >= 0 ? (this.Sa != 2 && (w8(3), x8(17)), D8(this), this.G = 2, C8(this)) : OEb(this, this.rb - a)
    };
    g.k.getLastError = function() {
        return this.G
    };
    g.k.QP = function() {
        return this.j
    };
    $Eb.prototype.cancel = function() {
        this.C = bFb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && this.j.size !== 0) {
            for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = gFb.prototype;
    g.k.SU = 8;
    g.k.Qh = 1;
    g.k.connect = function(a, b, c, d) {
        x8(0);
        this.Sb = a;
        this.La = b || {};
        c && d !== void 0 && (this.La.OSID = c, this.La.OAID = d);
        this.Va = this.vc;
        this.Na = VEb(this, null, this.Sb);
        H8(this)
    };
    g.k.disconnect = function() {
        iFb(this);
        if (this.Qh == 3) {
            var a = this.eb++,
                b = this.Na.clone();
            g.oq(b, "SID", this.D);
            g.oq(b, "RID", a);
            g.oq(b, "TYPE", "terminate");
            K8(this, b);
            a = new A8(this, this.D, a);
            a.Sa = 2;
            a.Z = b8(b.clone());
            b = !1;
            if (g.Ta.navigator && g.Ta.navigator.sendBeacon) try {
                b = g.Ta.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Ta.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = JEb(a.C, null), a.j.send(a.Z));
            a.Ca = Date.now();
            B8(a)
        }
        oFb(this)
    };
    g.k.Og = function() {
        return this.Qh == 0
    };
    g.k.getState = function() {
        return this.Qh
    };
    g.k.UU = function(a) {
        if (this.K)
            if (this.K = null, this.Qh == 1) {
                if (!a) {
                    this.eb = Math.floor(Math.random() * 1E5);
                    a = this.eb++;
                    var b = new A8(this, "", a),
                        c = this.Y;
                    this.Jb && (c ? (c = g.jd(c), g.ld(c, this.Jb)) : c = this.Jb);
                    this.N !== null || this.rb || (b.Na = c, c = null);
                    var d;
                    if (this.Eb) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, typeof f === "string")) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (f === void 0) break;d += f;
                            if (d > 4096) {
                                d = e;
                                break a
                            }
                            if (d === 4096 || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = lFb(this, b, d);
                    e = this.Na.clone();
                    g.oq(e, "RID", a);
                    g.oq(e, "CVER", 22);
                    this.Ha && g.oq(e, "X-HTTP-Session-Id", this.Ha);
                    K8(this, e);
                    c && (this.rb ? d = "headers=" + g.Xe(g.Ega(c)) + "&" + d : this.N && g.sq(e, this.N, c));
                    UEb(this.B, b);
                    this.Uf && g.oq(e, "TYPE", "init");
                    this.Eb ? (g.oq(e, "$req", d), g.oq(e, "SID", "null"), b.Gb = !0, IEb(b, e, null)) : IEb(b, e, d);
                    this.Qh = 2
                }
            } else this.Qh == 3 && (a ? mFb(this, a) : this.C.length == 0 || aFb(this.B) || mFb(this))
    };
    g.k.TU = function() {
        this.Z = null;
        nFb(this);
        if (this.Ac && !(this.fb || this.j == null || this.Nd <= 0)) {
            var a = 2 * this.Nd;
            this.Fa = y8((0, g.gb)(this.qaa, this), a)
        }
    };
    g.k.qaa = function() {
        this.Fa && (this.Fa = null, this.Va = !1, this.fb = !0, x8(10), F8(this), nFb(this))
    };
    g.k.AR = function(a) {
        this.j == a && this.Ac && !this.fb && (hFb(this), this.fb = !0, x8(11))
    };
    g.k.p5 = function() {
        this.qa != null && (this.qa = null, F8(this), SEb(this), x8(19))
    };
    g.k.yea = function(a) {
        a ? x8(2) : x8(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = qFb.prototype;
    g.k.YU = function() {};
    g.k.XU = function() {};
    g.k.WU = function() {};
    g.k.VU = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.q5 = function() {};
    g.nb(M8, g.Ed);
    M8.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Sa = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    M8.prototype.close = function() {
        this.j.disconnect()
    };
    M8.prototype.send = function(a) {
        var b = this.j;
        if (typeof a === "string") {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.tn(a), a = c);
        b.C.push(new ZEb(b.Sf++, a));
        b.Qh == 3 && H8(b)
    };
    M8.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        M8.Pf.xa.call(this)
    };
    g.nb(sFb, zEb);
    g.nb(tFb, AEb);
    g.nb(L8, qFb);
    L8.prototype.YU = function() {
        this.j.dispatchEvent("m")
    };
    L8.prototype.XU = function(a) {
        this.j.dispatchEvent(new sFb(a))
    };
    L8.prototype.WU = function(a) {
        this.j.dispatchEvent(new tFb(a))
    };
    L8.prototype.VU = function() {
        this.j.dispatchEvent("n")
    };
    var O8 = new g.Ed;
    g.y(wFb, g.zb);
    g.k = Q8.prototype;
    g.k.Jv = null;
    g.k.Qs = !1;
    g.k.Uy = null;
    g.k.cN = null;
    g.k.jD = null;
    g.k.aI = null;
    g.k.gD = null;
    g.k.ZH = null;
    g.k.Lv = null;
    g.k.nj = null;
    g.k.cI = 0;
    g.k.D2 = null;
    g.k.bI = null;
    g.k.Kv = null;
    g.k.iD = -1;
    g.k.w1 = !0;
    g.k.hD = !1;
    g.k.bN = 0;
    g.k.YH = null;
    var CFb = {},
        BFb = {};
    g.k = Q8.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.s5 = function(a) {
        a = a.target;
        var b = this.YH;
        b && g.Fo(a) == 3 ? b.aN() : this.ZU(a)
    };
    g.k.ZU = function(a) {
        try {
            if (a == this.nj) a: {
                var b = g.Fo(this.nj),
                    c = this.nj.B,
                    d = this.nj.getStatus();
                if (g.Pc && !g.Oc("420+")) {
                    if (b < 4) break a
                } else if (b < 3 || b == 3 && !g.Ho(this.nj)) break a;this.hD || b != 4 || c == 7 || (c == 8 || d <= 0 ? this.j.Vr(3) : this.j.Vr(2));FFb(this);
                var e = this.nj.getStatus();this.iD = e;
                var f = g.Ho(this.nj);
                if (this.Qs = e == 200) {
                    b == 4 && R8(this);
                    if (this.Ha) {
                        for (a = !0; !this.hD && this.cI < f.length;) {
                            var h = DFb(this, f);
                            if (h == BFb) {
                                b == 4 && (this.Kv = 4, P8(15), a = !1);
                                break
                            } else if (h == CFb) {
                                this.Kv = 4;
                                P8(16);
                                a = !1;
                                break
                            } else HFb(this,
                                h)
                        }
                        b == 4 && f.length == 0 && (this.Kv = 1, P8(17), a = !1);
                        this.Qs = this.Qs && a;
                        a || (R8(this), GFb(this))
                    } else HFb(this, f);
                    this.Qs && !this.hD && (b == 4 ? this.j.fN(this) : (this.Qs = !1, AFb(this)))
                } else e == 400 && f.indexOf("Unknown SID") > 0 ? (this.Kv = 3, P8(13)) : (this.Kv = 0, P8(14)),
                R8(this),
                GFb(this)
            }
        } catch (l) {} finally {}
    };
    g.k.cancel = function() {
        this.hD = !0;
        R8(this)
    };
    g.k.r5 = function() {
        this.Uy = null;
        var a = Date.now();
        a - this.cN >= 0 ? (this.aI != 2 && this.j.Vr(3), R8(this), this.Kv = 2, P8(18), GFb(this)) : EFb(this, this.cN - a)
    };
    g.k.getLastError = function() {
        return this.Kv
    };
    g.k = KFb.prototype;
    g.k.eN = null;
    g.k.Ok = null;
    g.k.ML = !1;
    g.k.gN = null;
    g.k.Xl = null;
    g.k.Uq = -1;
    g.k.dI = null;
    g.k.WD = null;
    g.k.connect = function(a) {
        this.gN = a;
        a = T8(this.j, null, this.gN);
        P8(3);
        Date.now();
        var b = this.j.Y;
        b != null ? (this.dI = b[0], (this.WD = b[1]) ? (this.Xl = 1, LFb(this)) : (this.Xl = 2, MFb(this))) : (c8(a, "MODE", "init"), this.Ok = new Q8(this), this.Ok.Jv = this.eN, zFb(this.Ok, a, !1, null, !0), this.Xl = 0)
    };
    g.k.t7 = function(a) {
        if (a) this.Xl = 2, MFb(this);
        else {
            P8(4);
            var b = this.j;
            b.ip = b.zt.Uq;
            X8(b, 9)
        }
        a && this.Vr(2)
    };
    g.k.dN = function(a) {
        return this.j.dN(a)
    };
    g.k.abort = function() {
        this.Ok && (this.Ok.cancel(), this.Ok = null);
        this.Uq = -1
    };
    g.k.Og = function() {
        return !1
    };
    g.k.aV = function(a, b) {
        this.Uq = a.iD;
        if (this.Xl == 0)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.ip = this.Uq;
                    X8(a, 2);
                    return
                }
                this.dI = c[0];
                this.WD = c[1]
            } else a = this.j, a.ip = this.Uq, X8(a, 2);
        else this.Xl == 2 && (this.ML ? (P8(7), Date.now()) : b == "11111" ? (P8(6), this.ML = !0, Date.now(), this.Uq = 200, this.Ok.cancel(), P8(12), U8(this.j, this, !0)) : (P8(8), Date.now(), this.ML = !1))
    };
    g.k.fN = function() {
        this.Uq = this.Ok.iD;
        if (this.Ok.Qs) this.Xl == 0 ? this.WD ? (this.Xl = 1, LFb(this)) : (this.Xl = 2, MFb(this)) : this.Xl == 2 && (this.ML ? (P8(12), U8(this.j, this, !0)) : (P8(11), U8(this.j, this, !1)));
        else {
            this.Xl == 0 ? P8(9) : this.Xl == 2 && P8(10);
            var a = this.j;
            this.Ok.getLastError();
            a.ip = this.Uq;
            X8(a, 2)
        }
    };
    g.k.kD = function() {
        return this.j.kD()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Vr = function(a) {
        this.j.Vr(a)
    };
    g.k = NFb.prototype;
    g.k.hp = null;
    g.k.lD = null;
    g.k.ek = null;
    g.k.Wg = null;
    g.k.iN = null;
    g.k.eI = null;
    g.k.bV = null;
    g.k.hN = null;
    g.k.mD = 0;
    g.k.u5 = 0;
    g.k.Mi = null;
    g.k.Rs = null;
    g.k.Vq = null;
    g.k.Nv = null;
    g.k.zt = null;
    g.k.FM = null;
    g.k.Xy = -1;
    g.k.cV = -1;
    g.k.ip = -1;
    g.k.Wy = 0;
    g.k.Vy = 0;
    g.k.Mv = 8;
    g.nb(PFb, g.zb);
    g.nb(QFb, g.zb);
    g.k = NFb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        P8(0);
        this.iN = b;
        this.lD = c || {};
        d && e !== void 0 && (this.lD.OSID = d, this.lD.OAID = e);
        this.Z ? (N8((0, g.gb)(this.pX, this, a), 100), SFb(this)) : this.pX(a)
    };
    g.k.disconnect = function() {
        TFb(this);
        if (this.j == 3) {
            var a = this.mD++,
                b = this.eI.clone();
            g.oq(b, "SID", this.D);
            g.oq(b, "RID", a);
            g.oq(b, "TYPE", "terminate");
            W8(this, b);
            a = new Q8(this, this.D, a);
            a.aI = 2;
            a.gD = b8(b.clone());
            (new Image).src = a.gD.toString();
            a.jD = Date.now();
            AFb(a)
        }
        cGb(this)
    };
    g.k.pX = function(a) {
        this.zt = new KFb(this);
        this.zt.eN = this.hp;
        this.zt.B = this.G;
        this.zt.connect(a)
    };
    g.k.Og = function() {
        return this.j == 0
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.eV = function(a) {
        this.Rs = null;
        YFb(this, a)
    };
    g.k.dV = function() {
        this.Vq = null;
        this.Wg = new Q8(this, this.D, "rpc", this.N);
        this.Wg.Jv = this.hp;
        this.Wg.bN = 0;
        var a = this.bV.clone();
        g.oq(a, "RID", "rpc");
        g.oq(a, "SID", this.D);
        g.oq(a, "CI", this.FM ? "0" : "1");
        g.oq(a, "AID", this.Xy);
        W8(this, a);
        g.oq(a, "TYPE", "xmlhttp");
        zFb(this.Wg, a, !0, this.hN, !1)
    };
    g.k.aV = function(a, b) {
        if (this.j != 0 && (this.Wg == a || this.ek == a))
            if (this.ip = a.iD, this.ek == a && this.j == 3)
                if (this.Mv > 7) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && c.length == 3)
                        if (a = c, a[0] == 0) a: {
                            if (!this.Vq) {
                                if (this.Wg)
                                    if (this.Wg.jD + 3E3 < this.ek.jD) V8(this), this.Wg.cancel(), this.Wg = null;
                                    else break a;
                                aGb(this);
                                P8(19)
                            }
                        }
                    else this.cV = a[1], 0 < this.cV - this.Xy && a[2] < 37500 && this.FM && this.Vy == 0 && !this.Nv && (this.Nv = N8((0, g.gb)(this.v5, this), 6E3));
                    else X8(this, 11)
                } else b != null && X8(this, 11);
        else if (this.Wg ==
            a && V8(this), !g.fc(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Xy = c[0], c = c[1], this.j == 2 ? c[0] == "c" ? (this.D = c[1], this.hN = c[2], c = c[3], c != null ? this.Mv = c : this.Mv = 6, this.j = 3, this.Mi && this.Mi.hV(), this.bV = T8(this, this.kD() ? this.hN : null, this.iN), ZFb(this)) : c[0] == "stop" && X8(this, 7) : this.j == 3 && (c[0] == "stop" ? X8(this, 7) : c[0] != "noop" && this.Mi && this.Mi.gV(c), this.Vy = 0)
    };
    g.k.v5 = function() {
        this.Nv != null && (this.Nv = null, this.Wg.cancel(), this.Wg = null, aGb(this), P8(20))
    };
    g.k.fN = function(a) {
        if (this.Wg == a) {
            V8(this);
            this.Wg = null;
            var b = 2
        } else if (this.ek == a) this.ek = null, b = 1;
        else return;
        this.ip = a.iD;
        if (this.j != 0)
            if (a.Qs)
                if (b == 1) {
                    b = a.Lv ? a.Lv.length : 0;
                    a = Date.now() - a.jD;
                    var c = O8;
                    c.dispatchEvent(new PFb(c, b, a, this.Wy));
                    RFb(this);
                    this.C.length = 0
                } else ZFb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = c == 3 || c == 7 || c == 0 && this.ip > 0)) {
                if (d = b == 1) this.ek || this.Rs || this.j == 1 || this.Wy >= 2 ? d = !1 : (this.Rs = N8((0, g.gb)(this.eV, this, a), $Fb(this, this.Wy)), this.Wy++, d = !0);
                d = !(d || b == 2 && aGb(this))
            }
            if (d) switch (c) {
                case 1:
                    X8(this,
                        5);
                    break;
                case 4:
                    X8(this, 10);
                    break;
                case 3:
                    X8(this, 6);
                    break;
                case 7:
                    X8(this, 12);
                    break;
                default:
                    X8(this, 2)
            }
        }
    };
    g.k.t5 = function(a) {
        if (!g.Fb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.xea = function(a) {
        a ? P8(2) : (P8(1), bGb(this, 8))
    };
    g.k.dN = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Co;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Mi && this.Mi.isActive(this)
    };
    g.k.Vr = function(a) {
        var b = O8;
        b.dispatchEvent(new QFb(b, a))
    };
    g.k.kD = function() {
        return !1
    };
    g.k = dGb.prototype;
    g.k.hV = function() {};
    g.k.gV = function() {};
    g.k.fV = function() {};
    g.k.jN = function() {};
    g.k.iV = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = eGb.prototype;
    g.k.enqueue = function(a) {
        this.B.push(a)
    };
    g.k.isEmpty = function() {
        return this.j.length === 0 && this.B.length === 0
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Fb(this.j, a) || g.Fb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.xkb)(b, a);
        c >= 0 ? (g.Gb(b, c), b = !0) : b = !1;
        return b || g.Hb(this.B, a)
    };
    g.k.Cm = function() {
        for (var a = [], b = this.j.length - 1; b >= 0; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.y(fGb, g.zb);
    g.y(gGb, g.zb);
    g.nb(Y8, g.I);
    g.k = Y8.prototype;
    g.k.sca = function() {
        this.Ui = Math.min(3E5, this.Ui * 2);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.Ui + 15E3 * Math.random();
        g.Mv(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Ui = 5E3
    };
    g.nb(iGb, dGb);
    g.k = iGb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Ph = function(a) {
        return this.C.Ph(a)
    };
    g.k.publish = function(a, b) {
        return this.C.publish.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.qa || (this.qa = !0, g.vb(this.C), this.disconnect(), g.vb(this.B), this.B = null, this.ra = function() {
            return ""
        })
    };
    g.k.Ma = function() {
        return this.qa
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || this.j.getState() != 2) {
            this.Y = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ca + "/test";
            b = this.Ca + "/bind";
            var d = new NFb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Sa),
                e = this.j;
            e && (e.Mi = null);
            d.Mi = this;
            this.j = d;
            jGb(this);
            if (this.j) {
                d = g.rA("ID_TOKEN");
                var f = this.j.hp || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.hp = f
            }
            e ? (e.getState() != 3 && VFb(e) == 0 || e.getState(), this.j.connect(a, b, this.N, e.D, e.Xy)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        jGb(this);
        this.j && (this.j.getState() == 3 && YFb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.ld(a, b);
        this.B.isActive() || (this.j ? this.j.getState() : 0) == 2 ? this.D.push(a) : this.EA() && (jGb(this), UFb(this.j, a))
    };
    g.k.hV = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) UFb(this.j, a[b])
        }
        this.publish("handlerOpened");
        EDb(this.Na, "BROWSER_CHANNEL")
    };
    g.k.fV = function(a) {
        var b = a == 2 && this.j.ip == 401;
        a == 4 || b || this.B.start();
        this.publish("handlerError", a, b);
        KDb(this.Ha, "BROWSER_CHANNEL")
    };
    g.k.jN = function(a, b) {
        if (!this.B.isActive()) this.publish("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        GDb(this.Fa, "BROWSER_CHANNEL");
        a && this.Wa.j.lN("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.eb.j.lN("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.iV = function() {
        var a = {
            v: 2
        };
        this.Y && (a.gsessionid = this.Y);
        this.G != 0 && (a.ui = "" + this.G);
        this.Z != 0 && (a.ui = "" + this.Z);
        this.K && g.ld(a, this.K);
        return a
    };
    g.k.gV = function(a) {
        a[0] == "S" ? this.Y = a[1] : a[0] == "gracefulReconnect" ? (this.B.start(), this.j.disconnect()) : this.publish("handlerMessage", new hGb(a[0], a[1]));
        IDb(this.La, "BROWSER_CHANNEL")
    };
    g.k.EA = function() {
        return !!this.j && this.j.getState() == 3
    };
    g.k.zs = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Va && this.j) {
            var b = this.j.hp || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.hp = b
        }
    };
    g.k.getDeviceId = function() {
        return this.N.id
    };
    g.k.Pt = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.iy = function() {
        var a = this.B;
        g.Nv(a.j);
        a.start()
    };
    g.k.Gda = function() {
        this.B.isActive();
        VFb(this.j) == 0 && this.connect(this.K, this.G)
    };
    Z8.prototype.sendRequest = function(a, b, c, d, e, f, h) {
        a = {
            format: f ? "RAW" : "JSON",
            method: a,
            context: this,
            timeout: 5E3,
            withCredentials: !!h,
            onSuccess: g.ib(this.D, d, !f),
            onError: g.ib(this.C, e),
            onTimeout: g.ib(this.G, e)
        };
        c && (a.postParams = c, a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.PA(b, a)
    };
    Z8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.y(kGb, g.Ed);
    g.k = kGb.prototype;
    g.k.connect = function(a, b, c) {
        this.Id.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Id.disconnect(a)
    };
    g.k.iy = function() {
        this.Id.iy()
    };
    g.k.getDeviceId = function() {
        return this.Id.getDeviceId()
    };
    g.k.Pt = function() {
        return this.Id.Pt()
    };
    g.k.EA = function() {
        return this.Id.EA()
    };
    g.k.w5 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Id,
            b = this.j;
        g.FB("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.FM,
            sessionId: a.j.D,
            arrayId: a.j.Xy
        });
        g.FB("yt-remote-session-screen-id", b);
        a = m8();
        b = n8();
        g.Fb(a, b) || a.push(b);
        cEb(a);
        eEb()
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new fGb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new gGb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Id.sendMessage(a, b)
    };
    g.k.zs = function(a) {
        this.Id.zs(a)
    };
    g.k.dispose = function() {
        this.Id.dispose()
    };
    g.k = lGb.prototype;
    g.k.connect = function(a, b) {
        a = a === void 0 ? {} : a;
        b = b === void 0 ? 0 : b;
        this.K !== 2 && (this.C.stop(), this.Z = a, this.N = b, nGb(this), (a = g.rA("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.H$ && (this.B.mdxVersion = "" + this.j.H$), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.L7 && (this.B.cst = this.j.L7),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), this.N !== 0 ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new M8(this.pathPrefix, {
            T9: "gsessionid",
            L$: this.D,
            M$: this.B
        }), this.channel.open(), this.K = 2, mGb(this))
    };
    g.k.disconnect = function(a) {
        this.Y = a === void 0 ? 0 : a;
        this.C.stop();
        nGb(this);
        this.channel && (this.Y !== 0 ? this.B.ui = "" + this.Y : delete this.B.ui, this.channel.close());
        this.Y = 0
    };
    g.k.Pt = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.iy = function() {
        var a = this.C;
        g.Nv(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (nGb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.zs = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.getDeviceId = function() {
        return this.j ? this.j.id : ""
    };
    g.k.publish = function(a) {
        return this.G.publish.apply(this.G, [a].concat(g.qa(g.Ja.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Ph = function(a) {
        return this.G.Ph(a)
    };
    g.k.dispose = function() {
        this.qa || (this.qa = !0, g.vb(this.G), this.disconnect(), g.vb(this.C), this.Ca = function() {
            return ""
        })
    };
    g.k.Ma = function() {
        return this.qa
    };
    g.y(oGb, g.Ed);
    g.k = oGb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.iy = function() {
        this.j.iy()
    };
    g.k.getDeviceId = function() {
        return this.j.getDeviceId()
    };
    g.k.Pt = function() {
        return this.j.Pt()
    };
    g.k.EA = function() {
        return this.j.K === 3
    };
    g.k.x5 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new fGb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new gGb(this.j.Bg === 401 ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.zs = function(a) {
        this.j.zs(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var wGb = Date.now(),
        a9 = null,
        e9 = Array(50),
        d9 = -1,
        f9 = !1;
    g.nb(g9, g.OE);
    g9.prototype.bl = function() {
        return this.screens
    };
    g9.prototype.contains = function(a) {
        return !!$Db(this.screens, a)
    };
    g9.prototype.get = function(a) {
        return a ? l8(this.screens, a) : null
    };
    g9.prototype.info = function(a) {
        b9(this.K, a)
    };
    g.y(AGb, g.OE);
    g.k = AGb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.md) && this.B0()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.md) || (g.LA(this.md), this.md = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.OE.prototype.xa.call(this)
    };
    g.k.B0 = function() {
        this.md = NaN;
        this.j = g.PA($8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.gb)(this.z5, this),
            onError: (0, g.gb)(this.y5, this),
            onTimeout: (0, g.gb)(this.A5, this)
        })
    };
    g.k.z5 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new i8(a), b)
    };
    g.k.y5 = function(a) {
        this.j = null;
        a.status && a.status == 404 ? this.B >= uIb.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = uIb[this.B], this.md = g.JA((0, g.gb)(this.B0, this), a), this.B++) : this.publish("pairingFailed", Error("Server error " + a.status))
    };
    g.k.A5 = function() {
        this.j = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var uIb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.nb(i9, g9);
    g.k = i9.prototype;
    g.k.start = function() {
        h9(this) && this.publish("screenChange");
        !g.GB("yt-remote-lounge-token-expiration") && BGb(this);
        g.LA(this.j);
        this.j = g.JA((0, g.gb)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        h9(this);
        xGb(this, a);
        j9(this, !1);
        this.publish("screenChange");
        b(a);
        a.token || BGb(this)
    };
    g.k.remove = function(a, b) {
        var c = h9(this);
        zGb(this, a) && (j9(this, !1), c = !0);
        b(a);
        c && this.publish("screenChange")
    };
    g.k.EM = function(a, b, c, d) {
        var e = h9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.publish("screenChange")
    };
    g.k.xa = function() {
        g.LA(this.j);
        i9.Pf.xa.call(this)
    };
    g.k.r9 = function(a) {
        h9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        j9(this, !b);
        b && b9(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.q9 = function(a) {
        b9(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.y(DGb, g.OE);
    g.k = DGb.prototype;
    g.k.start = function() {
        var a = parseInt(g.GB("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.lb() - 144E5 < a ? 0 : a) ? k9(this): (this.D = g.lb() + 3E5, g.FB("yt-remote-fast-check-period", this.D), this.IS())
    };
    g.k.isEmpty = function() {
        return g.gd(this.j)
    };
    g.k.update = function() {
        CGb("Updating availability on schedule.");
        var a = this.K(),
            b = g.Vc(this.j, function(c, d) {
                return c && !!l8(a, d)
            }, this);
        GGb(this, b)
    };
    g.k.xa = function() {
        g.LA(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.OE.prototype.xa.call(this)
    };
    g.k.IS = function() {
        g.LA(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = HGb(this);
        if (wDb(a)) {
            var b = $8(this.G, "/pairing/get_screen_availability");
            this.B = this.G.sendRequest("POST", b, {
                lounge_token: g.cd(a).join(",")
            }, (0, g.gb)(this.bca, this, a), (0, g.gb)(this.aca, this))
        } else GGb(this, {}), k9(this)
    };
    g.k.bca = function(a, b) {
        this.B = null;
        var c = g.cd(HGb(this));
        if (g.Xb(c, g.cd(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = b[e].status == "online";
            GGb(this, c);
            k9(this)
        } else this.fg("Changing Screen set during request."), this.IS()
    };
    g.k.aca = function(a) {
        this.fg("Screen availability failed: " + a);
        this.B = null;
        k9(this)
    };
    g.k.fg = function(a) {
        b9("OnlineScreenService", a)
    };
    g.nb(l9, g9);
    g.k = l9.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.publish("screenChange"), this.j.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.EM = function(a, b, c, d) {
        this.B.contains(a) ? this.B.EM(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.K, a), d(Error(a)))
    };
    g.k.bl = function(a) {
        return a ? this.screens : g.Kb(this.screens, g.Tt(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.jV = function() {
        return g.Tt(this.bl(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.kV = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new AGb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.vb(l);
            e(m9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.vb(l);
            f(m)
        });
        l.start();
        return (0, g.gb)(l.stop, l)
    };
    g.k.B5 = function(a, b, c, d) {
        g.PA($8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.gb)(function(e, f) {
                e = new i8(f.screen || {});
                if (!e.name || LGb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); LGb(this, l);) {
                            h++;
                            if (h > 20) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(m9(this, e))
            }, this),
            onError: (0, g.gb)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.gb)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.vb(this.B);
        g.vb(this.j);
        l9.Pf.xa.call(this)
    };
    g.k.B9 = function() {
        NGb(this);
        this.publish("screenChange");
        this.j.update()
    };
    l9.prototype.dispose = l9.prototype.dispose;
    g.nb(n9, g.OE);
    g.k = n9.prototype;
    g.k.Ej = function(a) {
        this.Ma() || (a && (p9(this, "" + a), this.publish("sessionFailed")), this.j = null, this.publish("sessionScreen", null))
    };
    g.k.info = function(a) {
        b9(this.Ha, a)
    };
    g.k.lV = function() {
        return null
    };
    g.k.eT = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.gb)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.gb)(function() {
            p9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.eT("");
        n9.Pf.xa.call(this)
    };
    g.y(q9, n9);
    g.k = q9.prototype;
    g.k.bT = function(a) {
        if (this.C) {
            if (this.C == a) return;
            p9(this, "Overriding cast session with new session object");
            ZGb(this);
            this.Ca = !1;
            this.Y = "unknown";
            this.C.removeUpdateListener(this.ra);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa)
        }
        this.C = a;
        this.C.addUpdateListener(this.ra);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa);
        UGb(this, "getMdxSessionStatus")
    };
    g.k.SA = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.tn(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.gb)(function() {
            this.Ej()
        }, this), (0, g.gb)(function() {
            this.Ej(Error("Failed to stop receiver app."))
        }, this)) : this.Ej(Error("Stopping cast device without session."))
    };
    g.k.eT = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        ZGb(this);
        this.C && (this.C.removeUpdateListener(this.ra), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa));
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.Fca = function(a, b) {
        if (!this.Ma())
            if (b)
                if (b = d8(b), g.db(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.tn(b)), a) {
                    case "mdxSessionStatus":
                        RGb(this, b);
                        break;
                    case "loungeToken":
                        VGb(this, b);
                        break;
                    default:
                        p9(this, "Unknown youtube message: " + a)
                } else p9(this, "Unable to parse message.");
                else p9(this, "No data in message.")
    };
    g.k.vY = function(a, b, c, d) {
        g.LA(this.Z);
        this.Z = 0;
        KGb(this.D, this.B.label, a, this.B.friendlyName, (0, g.gb)(function(e) {
            e ? b(e) : d >= 0 ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.JA((0, g.gb)(this.vY, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.lV = function() {
        return this.C
    };
    g.k.C5 = function(a) {
        this.Ma() || a || (p9(this, "Cast session died."), this.Ej())
    };
    g.y(r9, n9);
    g.k = r9.prototype;
    g.k.bT = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.La)
    };
    g.k.SA = function(a) {
        this.Na = a;
        this.qa()
    };
    g.k.stop = function() {
        gHb(this);
        this.C ? this.C.stop((0, g.gb)(this.Ej, this, null), (0, g.gb)(this.Ej, this, "Failed to stop DIAL device.")) : this.Ej()
    };
    g.k.xa = function() {
        gHb(this);
        this.C && this.C.removeUpdateListener(this.La);
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.D5 = function(a) {
        this.Ma() || a || (p9(this, "DIAL session died."), this.G(), this.G = function() {}, this.Ej())
    };
    g.y(u9, n9);
    u9.prototype.stop = function() {
        this.Ej()
    };
    u9.prototype.bT = function() {};
    u9.prototype.SA = function() {
        g.LA(this.C);
        this.C = NaN;
        var a = l8(this.D.bl(), this.B.label);
        a ? o9(this, a) : this.Ej(Error("No such screen"))
    };
    u9.prototype.xa = function() {
        g.LA(this.C);
        this.C = NaN;
        n9.prototype.xa.call(this)
    };
    g.y(v9, g.OE);
    g.k = v9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.gb)(this.Jba, this);
        c = new chrome.cast.ApiConfig(c, (0, g.gb)(this.Y_, this), e, d, a);
        c.customDialLaunchCallback = (0, g.gb)(this.Daa, this);
        chrome.cast.initialize(c, (0, g.gb)(function() {
            this.Ma() || (chrome.cast.addReceiverActionListener(this.G), tGb(), this.B.subscribe("onlineScreenChange", (0, g.gb)(this.mV, this)), this.C = jHb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.gb)(function(f) {
                this.fg("Failed to set initial custom receivers: " + g.tn(f))
            }, this)), this.publish("yt-remote-cast2-availability-change", x9(this)), b(!0))
        }, this), (0, g.gb)(function(f) {
            this.fg("Failed to initialize API: " + g.tn(f));
            b(!1)
        }, this))
    };
    g.k.Qda = function(a, b) {
        w9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.B.friendlyName), y9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = l8(this.B.bl(), a);
                if (!a) {
                    w9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (a.idType == "shortLived") {
                    w9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = hHb(this, a);
                c || (w9("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.gb)(function(d) {
                    this.fg("Failed to set initial custom receivers: " + g.tn(d))
                }, this)));
                w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                y9(this, new u9(this.B, c), !0)
            }
            this.j.eT(b)
        } else w9("setConnectedScreenStatus: no screen.")
    };
    g.k.Tda = function(a) {
        this.Ma() ? this.fg("Setting connection data on disposed cast v2") : this.j ? this.j.SA(a) : this.fg("Setting connection data without a session")
    };
    g.k.F5 = function() {
        this.Ma() ? this.fg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.gb)(this.Y_, this), (0, g.gb)(this.eca, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.gb)(this.mV, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = qGb,
            b = g.Xa("yt.mdx.remote.debug.handlers_");
        g.Hb(b || [], a);
        g.vb(this.j);
        g.OE.prototype.xa.call(this)
    };
    g.k.fg = function(a) {
        b9("Controller", a)
    };
    g.k.b0 = function(a, b) {
        this.j == a && (b || y9(this, null), this.publish("yt-remote-cast2-session-change", b))
    };
    g.k.Gba = function(a, b) {
        if (!this.Ma())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            w9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.publish("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            y9(this,
                                new u9(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            y9(this, new r9(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            y9(this, new q9(this.B, a, this.config_));
                            break;
                        default:
                            this.fg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.fg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.fg("onReceiverAction_ called without receiver.")
    };
    g.k.Daa = function(a) {
        if (this.Ma()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.fg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.fg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return w9("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.fg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            y9(this, new r9(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = dHb(b, {
            name: b.B.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.Z.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.uA(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = eHb(b, c)) : a = eHb(b, c)) : a = bHb(b);
        return a
    };
    g.k.Y_ = function(a) {
        var b = this;
        if (!this.Ma() && !this.K) {
            w9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.B, c, this.config_), !0);
                    else {
                        this.fg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = l8(this.B.bl(),
                        d.label);
                e && j8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.vb(this.j), this.j = new q9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.gb)(this.b0, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return iHb(b, b.j)
                }), this.j.SA(null));
                this.j.bT(a)
            }
        }
    };
    g.k.E5 = function() {
        return this.j ? this.j.lV() : null
    };
    g.k.eca = function(a) {
        this.Ma() || (this.fg("Failed to estabilish a session: " + g.tn(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.k.Jba = function(a) {
        w9("Receiver availability updated: " + a);
        if (!this.Ma()) {
            var b = x9(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            x9(this) != b && this.publish("yt-remote-cast2-availability-change", x9(this))
        }
    };
    g.k.mV = function() {
        this.Ma() || (this.C = jHb(this), w9("Updating custom receivers: " + g.tn(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.gb)(function() {
            this.fg("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", x9(this)))
    };
    v9.prototype.setLaunchParams = v9.prototype.Tda;
    v9.prototype.setConnectedScreenStatus = v9.prototype.Qda;
    v9.prototype.stopSession = v9.prototype.F5;
    v9.prototype.getCastSession = v9.prototype.E5;
    v9.prototype.requestSession = v9.prototype.requestSession;
    v9.prototype.init = v9.prototype.init;
    v9.prototype.dispose = v9.prototype.dispose;
    var sHb = [];
    g.k = F9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        yHb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Sp = a.hasPrevious, this.jl = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return this.playerState == 1
    };
    g.k.isBuffering = function() {
        return this.playerState == 3
    };
    g.k.ll = function() {
        return this.playerState == 1081
    };
    g.k.Dl = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + G9(this) : this.G
    };
    g.k.clone = function() {
        return new F9(zHb(this))
    };
    g.y(L9, g.OE);
    g.k = L9.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.Pt = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.iy = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        N9(this) ? (this.j ? this.j.play(null, g.Jd, R9(this, "play")) : Q9(this, "play"), CHb(this, 1, I9(M9(this))), this.publish("remotePlayerChange")) : O9(this, this.play)
    };
    g.k.pause = function() {
        N9(this) ? (this.j ? this.j.pause(null, g.Jd, R9(this, "pause")) : Q9(this, "pause"), CHb(this, 2, I9(M9(this))), this.publish("remotePlayerChange")) : O9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (N9(this)) {
            if (this.j) {
                var b = M9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || b.isBuffering() ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Jd, R9(this, "seekTo", {
                    newTime: a
                }))
            } else Q9(this, "seekTo", {
                newTime: a
            });
            CHb(this, 3, a);
            this.publish("remotePlayerChange")
        } else O9(this, g.ib(this.seekTo, a))
    };
    g.k.stop = function() {
        if (N9(this)) {
            this.j ? this.j.stop(null, g.Jd, R9(this, "stopVideo")) : Q9(this, "stopVideo");
            var a = M9(this);
            a.index = -1;
            a.videoId = "";
            yHb(a);
            P9(this, a);
            this.publish("remotePlayerChange")
        } else O9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.gb)(function() {
                        c9("set receiver volume: " + d)
                    }, this), (0, g.gb)(function() {
                        this.fg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.gb)(function() {
                    c9("set receiver muted: " + b)
                }, this), (0, g.gb)(function() {
                    this.fg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                c.volume != -1 && (e.delta = a - c.volume);
                Q9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            P9(this, c)
        } else O9(this, g.ib(this.setVolume, a, b))
    };
    g.k.nV = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.tn(b.style), g.ld(a, c.trackData));
            Q9(this, "setSubtitlesTrack", a);
            P9(this, c)
        } else O9(this, g.ib(this.nV, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.ib(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = d === void 0 ? null : d;
        e = e === void 0 ? null : e;
        f = f === void 0 ? null : f;
        h = h === void 0 ? null : h;
        var l = M9(this),
            m = {
                videoId: a
            };
        c !== void 0 && (m.currentIndex = c);
        J9(l, a, c || 0);
        b !== void 0 && (H9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.tn(h));
        Q9(this, "setPlaylist", m);
        d || P9(this, l)
    };
    g.k.GL = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "previous")
        } else O9(this, g.ib(this.GL, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "next")
        } else O9(this, g.ib(this.nextVideo, a, b))
    };
    g.k.vO = function() {
        if (N9(this)) {
            Q9(this, "clearPlaylist");
            var a = M9(this);
            a.reset();
            P9(this, a);
            this.publish("remotePlayerChange")
        } else O9(this, this.vO)
    };
    g.k.DX = function() {
        N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.DX)
    };
    g.k.dispose = function() {
        if (this.C != 3) {
            var a = this.C;
            this.C = 3;
            this.publish("proxyStateChange", a, this.C)
        }
        g.OE.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        BHb(this);
        this.D = null;
        this.G.clear();
        K9(this, null);
        g.OE.prototype.xa.call(this)
    };
    g.k.iT = function(a) {
        if ((a != this.C || a == 2) && this.C != 3 && a != 0) {
            var b = this.C;
            this.C = a;
            this.publish("proxyStateChange", b, a);
            if (a == 1)
                for (; !this.G.isEmpty();) b = a = this.G, b.j.length === 0 && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else a == 3 && this.dispose()
        }
    };
    g.k.Eba = function(a, b) {
        this.publish(a, b)
    };
    g.k.uaa = function(a) {
        if (!a) this.dG(null), K9(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = M9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b)
        }
    };
    g.k.dG = function(a) {
        c9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), DHb(this), this.publish("remotePlayerChange")
    };
    g.k.taa = function(a) {
        a ? (DHb(this), this.publish("remotePlayerChange")) : this.dG(null)
    };
    g.k.NT = function() {
        Q9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.waa = function() {
        var a = vHb();
        a && K9(this, a)
    };
    g.k.fg = function(a) {
        b9("CP", a)
    };
    g.y(U9, g.OE);
    g.k = U9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            n !== void 0 && (m.currentTime = n <= 5 ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && e.length > 0 && (m.videoIds = e.join(","));
            l !== void 0 && (m.currentIndex = l);
            this.La && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            H9(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.La ? "setInitialState" : "setPlaylist";
            S9("Connecting with " + c + " and params: " + g.tn(m));
            this.B.connect({
                method: c,
                params: g.tn(m)
            }, a, fEb())
        } else S9("Connecting without params"), this.B.connect({}, a, fEb());
        HHb(this)
    };
    g.k.zs = function(a) {
        this.B.zs(a)
    };
    g.k.dispose = function() {
        this.Ma() || (g.Ua("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), T9(this, 3));
        g.OE.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        IHb(this);
        KHb(this);
        JHb(this);
        g.LA(this.Z);
        this.Z = NaN;
        g.LA(this.Y);
        this.Y = NaN;
        this.D = null;
        g.xB(this.qa);
        this.qa.length = 0;
        this.B.dispose();
        g.OE.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.rZ = function(a) {
        if (!this.C || this.C.length === 0) return !1;
        for (var b = g.v(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.Y8 = function() {
        var a = 3;
        this.Ma() || (a = 0, isNaN(this.WE()) ? this.B.EA() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.Uz = function(a) {
        S9("Disconnecting with " + a);
        g.Ua("yt.mdx.remote.remoteClient_", null);
        IHb(this);
        this.publish("beforeDisconnect", a);
        a == 1 && o8();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.S8 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), J9(a, this.D, a.index));
        return zHb(a)
    };
    g.k.Vda = function(a) {
        var b = this,
            c = new F9(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.LA(this.Z), this.Z = g.JA(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && V9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.tn(this.j.trackData) == g.tn(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.$b(d, function(e) {
            this.publish(e)
        }, this)
    };
    g.k.qY = function() {
        var a = this.B.getDeviceId(),
            b = g.Db(this.C, function(c) {
                return c.type == "REMOTE_CONTROL" && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.WE = function() {
        return this.B.Pt()
    };
    g.k.B8 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.C8 = function() {
        return this.N || ""
    };
    g.k.G5 = function() {
        !isNaN(this.WE()) && this.B.iy()
    };
    g.k.Oda = function(a, b) {
        V9(this, a, b);
        MHb(this)
    };
    g.k.oV = function() {
        var a = g.ZA("SAPISID", "") || g.ZA("__Secure-1PAPISID") || "",
            b = g.ZA("__Secure-3PAPISID", "") || "";
        if (!a && !b) return "";
        a = g.Hg(g.Gg(a), 2);
        b = g.Hg(g.Gg(b), 2);
        return g.Hg(g.Gg("," + a + "," + b), 2)
    };
    U9.prototype.subscribe = U9.prototype.subscribe;
    U9.prototype.unsubscribeByKey = U9.prototype.Ph;
    U9.prototype.getProxyState = U9.prototype.Y8;
    U9.prototype.disconnect = U9.prototype.Uz;
    U9.prototype.getPlayerContextData = U9.prototype.S8;
    U9.prototype.setPlayerContextData = U9.prototype.Vda;
    U9.prototype.getOtherConnectedRemoteId = U9.prototype.qY;
    U9.prototype.getReconnectTimeout = U9.prototype.WE;
    U9.prototype.getAutoplayMode = U9.prototype.B8;
    U9.prototype.getAutoplayVideoId = U9.prototype.C8;
    U9.prototype.reconnect = U9.prototype.G5;
    U9.prototype.sendMessage = U9.prototype.Oda;
    U9.prototype.getXsrfToken = U9.prototype.oV;
    U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.rZ;
    g.y(YHb, g9);
    g.k = YHb.prototype;
    g.k.bl = function(a) {
        return this.ih.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.ih.$_c(a)
    };
    g.k.get = function(a) {
        return this.ih.$_g(a)
    };
    g.k.start = function() {
        this.ih.$_st()
    };
    g.k.add = function(a, b, c) {
        this.ih.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.ih.$_r(a, b, c)
    };
    g.k.EM = function(a, b, c, d) {
        this.ih.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.ih.$_ubk(this.j[a]);
        this.j.length = 0;
        this.ih = null;
        g9.prototype.xa.call(this)
    };
    g.k.H5 = function() {
        this.publish("screenChange")
    };
    g.k.mba = function() {
        this.publish("onlineScreenChange")
    };
    l9.prototype.$_st = l9.prototype.start;
    l9.prototype.$_gspc = l9.prototype.B5;
    l9.prototype.$_gsppc = l9.prototype.kV;
    l9.prototype.$_c = l9.prototype.contains;
    l9.prototype.$_g = l9.prototype.get;
    l9.prototype.$_a = l9.prototype.add;
    l9.prototype.$_un = l9.prototype.EM;
    l9.prototype.$_r = l9.prototype.remove;
    l9.prototype.$_gs = l9.prototype.bl;
    l9.prototype.$_gos = l9.prototype.jV;
    l9.prototype.$_s = l9.prototype.subscribe;
    l9.prototype.$_ubk = l9.prototype.Ph;
    var f$ = null,
        i$ = !1,
        W9 = null,
        X9 = null,
        iIb = null,
        a$ = [];
    g.y(nIb, g.I);
    g.k = nIb.prototype;
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Jc;
        a.unsubscribe("proxyStateChange", this.W_, this);
        a.unsubscribe("remotePlayerChange", this.kG, this);
        a.unsubscribe("remoteQueueChange", this.mL, this);
        a.unsubscribe("previousNextChange", this.T_, this);
        a.unsubscribe("nowAutoplaying", this.P_, this);
        a.unsubscribe("autoplayDismissed", this.y_, this);
        this.Jc = this.module = null
    };
    g.k.il = function(a) {
        var b = g.Ja.apply(1, arguments);
        if (this.Jc.C != 2)
            if (j$(this)) {
                if (!M9(this.Jc).ll() || a !== "control_seek") switch (a) {
                    case "control_toggle_play_pause":
                        M9(this.Jc).isPlaying() ? this.Jc.pause() : this.Jc.play();
                        break;
                    case "control_play":
                        this.Jc.play();
                        break;
                    case "control_pause":
                        this.Jc.pause();
                        break;
                    case "control_seek":
                        this.K.aN(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        pIb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    k$(this, b === 0 ? void 0 : b);
                    break;
                case "control_seek":
                    k$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    pIb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.raa = function(a) {
        this.N.l5(a)
    };
    g.k.Uea = function(a) {
        this.il("control_subtitles_set_track", g.gd(a) ? null : a)
    };
    g.k.j2 = function() {
        var a = this.J.getOption("captions", "track");
        g.gd(a) || pIb(this, a)
    };
    g.k.Rc = function(a) {
        this.module.Rc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.Vaa = function() {
        g.gd(this.C) || qIb(this, this.C);
        this.D = !1
    };
    g.k.W_ = function(a, b) {
        this.B.stop();
        b === 2 && this.X1()
    };
    g.k.kG = function() {
        if (j$(this)) {
            this.j.stop();
            var a = M9(this.Jc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.ai = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.ai = 0;
                    break;
                default:
                    this.module.ai = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Gc(new g.FK(8));
                    this.W1();
                    break;
                case 1085:
                case 3:
                    this.Gc(new g.FK(9));
                    break;
                case 1083:
                case 0:
                    this.Gc(new g.FK(2));
                    this.K.stop();
                    this.Rc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Gc(new g.FK(4));
                    break;
                case 2:
                    this.Gc(new g.FK(4));
                    this.Rc(I9(a));
                    break;
                case -1:
                    this.Gc(new g.FK(64));
                    break;
                case -1E3:
                    this.Gc(new g.FK(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        mJ: 2
                    }))
            }
            a = M9(this.Jc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, qIb(this, a));
            a = M9(this.Jc);
            a.volume === -1 || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.Y2()
        } else oIb(this)
    };
    g.k.T_ = function() {
        this.J.publish("mdxpreviousnextchange")
    };
    g.k.mL = function() {
        j$(this) || oIb(this)
    };
    g.k.P_ = function(a) {
        isNaN(a) || this.J.publish("mdxnowautoplaying", a)
    };
    g.k.y_ = function() {
        this.J.publish("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        j$(this) && this.Jc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        M9(this.Jc).playerState === -1 ? k$(this, a) : b && this.Jc.seekTo(a)
    };
    g.k.Y2 = function() {
        var a = this;
        if (j$(this)) {
            var b = M9(this.Jc);
            this.events.Pc(this.Y);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.Y = this.events.T(this.J, "onVolumeChange", function(c) {
                lIb(a, c)
            })
        }
    };
    g.k.W1 = function() {
        this.j.stop();
        if (!this.Jc.Ma()) {
            var a = M9(this.Jc);
            a.isPlaying() && this.Gc(new g.FK(8));
            this.Rc(I9(a));
            this.j.start()
        }
    };
    g.k.X1 = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Jc.Pt();
        this.Jc.C == 2 && !isNaN(a) && this.B.start()
    };
    g.k.Gc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.hFa(b, a)) {
            var c = g.GF(a, 2);
            c !== g.GF(this.G, 2) && this.J.hC(c);
            this.G = a;
            sIb(this.module, b, a)
        }
    };
    g.y(l$, g.W);
    l$.prototype.rd = function() {
        this.j.show()
    };
    l$.prototype.Mb = function() {
        this.j.hide()
    };
    l$.prototype.B = function() {
        q8("mdx-privacy-popup-cancel");
        this.Mb()
    };
    l$.prototype.C = function() {
        q8("mdx-privacy-popup-confirm");
        this.Mb()
    };
    g.y(m$, g.W);
    m$.prototype.onStateChange = function(a) {
        this.Hc(a.state)
    };
    m$.prototype.Hc = function(a) {
        if (this.api.getPresentingPlayerType() === 3) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.GF(a, 128) ? g.dJ("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.dJ("Playing on $RECEIVER_NAME", b) : g.dJ("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.y(n$, g.KU);
    n$.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && a.length > 1 && !this.J.getOption("remote", "quickCast") ? (this.Qu = g.cc(a, this.j, this), g.LU(this, g.es(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.wi(a), this.enable(!0)) : this.enable(!1)
    };
    n$.prototype.j = function(a) {
        return a.key
    };
    n$.prototype.Rk = function(a) {
        return a === "cast-selector-receiver" ? "Cast..." : this.Qu[a].name
    };
    n$.prototype.xg = function(a) {
        g.KU.prototype.xg.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.Qu[a]);
        this.Cb.Mb()
    };
    g.y(rIb, g.pV);
    g.k = rIb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.BR(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        cIb(b, a);
        this.subscriptions.push(g.yD("yt-remote-before-disconnect", this.paa, this));
        this.subscriptions.push(g.yD("yt-remote-connection-change", this.Kba, this));
        this.subscriptions.push(g.yD("yt-remote-receiver-availability-change", this.V_,
            this));
        this.subscriptions.push(g.yD("yt-remote-auto-connect", this.Iba, this));
        this.subscriptions.push(g.yD("yt-remote-receiver-resumed", this.Hba, this));
        this.subscriptions.push(g.yD("mdx-privacy-popup-confirm", this.dda, this));
        this.subscriptions.push(g.yD("mdx-privacy-popup-cancel", this.cda, this));
        this.V_()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.pV.prototype.load.call(this);
        this.jm = new nIb(this, this.player, this.Jc);
        var a = (a = kIb()) ? a.currentTime : 0;
        var b = hIb() ? new L9(e$(), void 0) : null;
        a == 0 && b && (a = I9(M9(b)));
        a !== 0 && this.Rc(a);
        sIb(this, this.De, this.De);
        this.player.Fq(6)
    };
    g.k.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.Ct = this.hq;
        g.wb(this.jm, this.Jc);
        this.Jc = this.jm = null;
        g.pV.prototype.unload.call(this);
        this.player.Fq(5);
        o$(this)
    };
    g.k.xa = function() {
        g.zD(this.subscriptions);
        g.pV.prototype.xa.call(this)
    };
    g.k.fG = function(a) {
        var b = g.Ja.apply(1, arguments);
        this.loaded && this.jm.il.apply(this.jm, [a].concat(g.qa(b)))
    };
    g.k.getAdState = function() {
        return this.ai
    };
    g.k.Sp = function() {
        return this.Jc ? M9(this.Jc).Sp : !1
    };
    g.k.jl = function() {
        return this.Jc ? M9(this.Jc).jl : !1
    };
    g.k.Rc = function(a, b) {
        this.EZ = a || 0;
        this.player.publish("progresssync", a, b);
        this.player.Dc("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.EZ
    };
    g.k.getProgressState = function() {
        var a = M9(this.Jc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !a.ll() && this.player.Zh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + G9(a) : a.C,
            isAtLiveHead: (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime() <= 1,
            loaded: a.Z,
            seekableEnd: a.B ? a.j + G9(a) : a.j,
            seekableStart: a.D > 0 ? a.D + G9(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Jc && this.Jc.nextVideo()
    };
    g.k.GL = function() {
        this.Jc && this.Jc.GL()
    };
    g.k.paa = function(a) {
        a === 1 && (this.pS = this.Jc ? M9(this.Jc) : null)
    };
    g.k.Kba = function() {
        var a = hIb() ? new L9(e$(), void 0) : null;
        if (a) {
            var b = this.Ct;
            this.loaded && this.unload();
            this.Jc = a;
            this.pS = null;
            b.key !== this.hq.key && (this.Ct = b, this.load())
        } else g.vb(this.Jc), this.Jc = null, this.loaded && (this.unload(), (a = this.pS) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.V_ = function() {
        var a = [this.hq],
            b = a.concat,
            c = dIb();
        C9() && g.GB("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Qu = b.call(a, c);
        a = fIb() || this.hq;
        p$(this, a);
        this.player.Dc("onMdxReceiversChange")
    };
    g.k.Iba = function() {
        var a = fIb();
        p$(this, a)
    };
    g.k.Hba = function() {
        this.Ct = fIb()
    };
    g.k.dda = function() {
        this.DG = !0;
        o$(this);
        i$ = !1;
        f$ && h$(f$, 1);
        f$ = null
    };
    g.k.cda = function() {
        this.DG = !1;
        o$(this);
        p$(this, this.hq);
        this.Ct = this.hq;
        i$ = !1;
        f$ = null;
        this.player.playVideo()
    };
    g.k.Sh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Qu;
            case "currentReceiver":
                return b && (b.key === "cast-selector-receiver" ? wHb() : p$(this, b)), this.loaded ? this.Ct : this.hq;
            case "quickCast":
                return this.Qu.length === 2 && this.Qu[1].key === "cast-selector-receiver" ? (b && wHb(), !0) : !1
        }
    };
    g.k.NT = function() {
        this.Jc.NT()
    };
    g.k.Zm = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return ((a = g.rA("PLAYER_CONFIG")) == null ? void 0 : (b = a.args) == null ? void 0 : b.authuser) !== void 0 ? !0 : !(!g.rA("SESSION_INDEX") && !g.rA("LOGGED_IN"))
    };
    g.oV("remote", rIb);
})(_yt_player);