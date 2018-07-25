/**
 * Created by owais on 3/24/17.
 */
/*
 Highcharts JS v5.0.9 (2017-03-08)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
 */
(function (I, a) {
    "object" === typeof module && module.exports ? module.exports = I.document ? a(I) : a : I.Highcharts = a(I)
})("undefined" !== typeof window ? window : this, function (I) {
    I = function () {
        var a = window, B = a.document, z = a.navigator && a.navigator.userAgent || "", C = B && B.createElementNS && !!B.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, E = /(edge|msie|trident)/i.test(z) && !window.opera, u = !C, h = /Firefox/.test(z), n = h && 4 > parseInt(z.split("Firefox/")[1], 10);
        return a.Highcharts ? a.Highcharts.error(16, !0) : {
            product: "Highcharts",
            version: "5.0.9",
            deg2rad: 2 * Math.PI / 360,
            doc: B,
            hasBidiBug: n,
            hasTouch: B && void 0 !== B.documentElement.ontouchstart,
            isMS: E,
            isWebKit: /AppleWebKit/.test(z),
            isFirefox: h,
            isTouchDevice: /(Mobile|Android|Windows Phone)/.test(z),
            SVG_NS: "http://www.w3.org/2000/svg",
            chartCount: 0,
            seriesTypes: {},
            symbolSizes: {},
            svg: C,
            vml: u,
            win: a,
            charts: [],
            marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
            noop: function () {
            }
        }
    }();
    (function (a) {
        var B = [], z = a.charts, C = a.doc, E = a.win;
        a.error = function (u, h) {
            u = a.isNumber(u) ? "Highcharts error #" +
            u + ": www.highcharts.com/errors/" + u : u;
            if (h)throw Error(u);
            E.console && console.log(u)
        };
        a.Fx = function (a, h, n) {
            this.options = h;
            this.elem = a;
            this.prop = n
        };
        a.Fx.prototype = {
            dSetter: function () {
                var a = this.paths[0], h = this.paths[1], n = [], t = this.now, l = a.length, k;
                if (1 === t)n = this.toD; else if (l === h.length && 1 > t)for (; l--;)k = parseFloat(a[l]), n[l] = isNaN(k) ? a[l] : t * parseFloat(h[l] - k) + k; else n = h;
                this.elem.attr("d", n, null, !0)
            }, update: function () {
                var a = this.elem, h = this.prop, n = this.now, t = this.options.step;
                if (this[h + "Setter"])this[h +
                "Setter"](); else a.attr ? a.element && a.attr(h, n, null, !0) : a.style[h] = n + this.unit;
                t && t.call(a, n, this)
            }, run: function (a, h, n) {
                var u = this, l = function (a) {
                    return l.stopped ? !1 : u.step(a)
                }, k;
                this.startTime = +new Date;
                this.start = a;
                this.end = h;
                this.unit = n;
                this.now = this.start;
                this.pos = 0;
                l.elem = this.elem;
                l.prop = this.prop;
                l() && 1 === B.push(l) && (l.timerId = setInterval(function () {
                    for (k = 0; k < B.length; k++)B[k]() || B.splice(k--, 1);
                    B.length || clearInterval(l.timerId)
                }, 13))
            }, step: function (a) {
                var h = +new Date, u, t = this.options;
                u = this.elem;
                var l = t.complete, k = t.duration, e = t.curAnim, c;
                if (u.attr && !u.element)u = !1; else if (a || h >= k + this.startTime) {
                    this.now = this.end;
                    this.pos = 1;
                    this.update();
                    a = e[this.prop] = !0;
                    for (c in e)!0 !== e[c] && (a = !1);
                    a && l && l.call(u);
                    u = !1
                } else this.pos = t.easing((h - this.startTime) / k), this.now = this.start + (this.end - this.start) * this.pos, this.update(), u = !0;
                return u
            }, initPath: function (u, h, n) {
                function t(a) {
                    var b, f;
                    for (r = a.length; r--;)b = "M" === a[r] || "L" === a[r], f = /[a-zA-Z]/.test(a[r + 3]), b && f && a.splice(r + 1, 0, a[r + 1], a[r + 2], a[r + 1], a[r +
                    2])
                }

                function l(a, f) {
                    for (; a.length < m;) {
                        a[0] = f[m - a.length];
                        var d = a.slice(0, b);
                        [].splice.apply(a, [0, 0].concat(d));
                        A && (d = a.slice(a.length - b), [].splice.apply(a, [a.length, 0].concat(d)), r--)
                    }
                    a[0] = "M"
                }

                function k(a, f) {
                    for (var c = (m - a.length) / b; 0 < c && c--;)d = a.slice().splice(a.length / v - b, b * v), d[0] = f[m - b - c * b], H && (d[b - 6] = d[b - 2], d[b - 5] = d[b - 1]), [].splice.apply(a, [a.length / v, 0].concat(d)), A && c--
                }

                h = h || "";
                var e, c = u.startX, p = u.endX, H = -1 < h.indexOf("C"), b = H ? 7 : 3, m, d, r;
                h = h.split(" ");
                n = n.slice();
                var A = u.isArea, v = A ? 2 : 1, f;
                H && (t(h), t(n));
                if (c && p) {
                    for (r = 0; r < c.length; r++)if (c[r] === p[0]) {
                        e = r;
                        break
                    } else if (c[0] === p[p.length - c.length + r]) {
                        e = r;
                        f = !0;
                        break
                    }
                    void 0 === e && (h = [])
                }
                h.length && a.isNumber(e) && (m = n.length + e * v * b, f ? (l(h, n), k(n, h)) : (l(n, h), k(h, n)));
                return [h, n]
            }
        };
        a.extend = function (a, h) {
            var u;
            a || (a = {});
            for (u in h)a[u] = h[u];
            return a
        };
        a.merge = function () {
            var u, h = arguments, n, t = {}, l = function (k, e) {
                var c, p;
                "object" !== typeof k && (k = {});
                for (p in e)e.hasOwnProperty(p) && (c = e[p], a.isObject(c, !0) && "renderTo" !== p && "number" !== typeof c.nodeType ?
                    k[p] = l(k[p] || {}, c) : k[p] = e[p]);
                return k
            };
            !0 === h[0] && (t = h[1], h = Array.prototype.slice.call(h, 2));
            n = h.length;
            for (u = 0; u < n; u++)t = l(t, h[u]);
            return t
        };
        a.pInt = function (a, h) {
            return parseInt(a, h || 10)
        };
        a.isString = function (a) {
            return "string" === typeof a
        };
        a.isArray = function (a) {
            a = Object.prototype.toString.call(a);
            return "[object Array]" === a || "[object Array Iterator]" === a
        };
        a.isObject = function (u, h) {
            return u && "object" === typeof u && (!h || !a.isArray(u))
        };
        a.isNumber = function (a) {
            return "number" === typeof a && !isNaN(a)
        };
        a.erase =
            function (a, h) {
                for (var u = a.length; u--;)if (a[u] === h) {
                    a.splice(u, 1);
                    break
                }
            };
        a.defined = function (a) {
            return void 0 !== a && null !== a
        };
        a.attr = function (u, h, n) {
            var t, l;
            if (a.isString(h))a.defined(n) ? u.setAttribute(h, n) : u && u.getAttribute && (l = u.getAttribute(h)); else if (a.defined(h) && a.isObject(h))for (t in h)u.setAttribute(t, h[t]);
            return l
        };
        a.splat = function (u) {
            return a.isArray(u) ? u : [u]
        };
        a.syncTimeout = function (a, h, n) {
            if (h)return setTimeout(a, h, n);
            a.call(0, n)
        };
        a.pick = function () {
            var a = arguments, h, n, t = a.length;
            for (h =
                     0; h < t; h++)if (n = a[h], void 0 !== n && null !== n)return n
        };
        a.css = function (u, h) {
            a.isMS && !a.svg && h && void 0 !== h.opacity && (h.filter = "alpha(opacity\x3d" + 100 * h.opacity + ")");
            a.extend(u.style, h)
        };
        a.createElement = function (u, h, n, t, l) {
            u = C.createElement(u);
            var k = a.css;
            h && a.extend(u, h);
            l && k(u, {padding: 0, border: "none", margin: 0});
            n && k(u, n);
            t && t.appendChild(u);
            return u
        };
        a.extendClass = function (u, h) {
            var n = function () {
            };
            n.prototype = new u;
            a.extend(n.prototype, h);
            return n
        };
        a.pad = function (a, h, n) {
            return Array((h || 2) + 1 - String(a).length).join(n ||
                    0) + a
        };
        a.relativeLength = function (a, h) {
            return /%$/.test(a) ? h * parseFloat(a) / 100 : parseFloat(a)
        };
        a.wrap = function (a, h, n) {
            var t = a[h];
            a[h] = function () {
                var a = Array.prototype.slice.call(arguments), k = arguments, e = this;
                e.proceed = function () {
                    t.apply(e, arguments.length ? arguments : k)
                };
                a.unshift(t);
                a = n.apply(this, a);
                e.proceed = null;
                return a
            }
        };
        a.getTZOffset = function (u) {
            var h = a.Date;
            return 6E4 * (h.hcGetTimezoneOffset && h.hcGetTimezoneOffset(u) || h.hcTimezoneOffset || 0)
        };
        a.dateFormat = function (u, h, n) {
            if (!a.defined(h) || isNaN(h))return a.defaultOptions.lang.invalidDate ||
                "";
            u = a.pick(u, "%Y-%m-%d %H:%M:%S");
            var t = a.Date, l = new t(h - a.getTZOffset(h)), k, e = l[t.hcGetHours](), c = l[t.hcGetDay](), p = l[t.hcGetDate](), H = l[t.hcGetMonth](), b = l[t.hcGetFullYear](), m = a.defaultOptions.lang, d = m.weekdays, r = m.shortWeekdays, A = a.pad, t = a.extend({
                a: r ? r[c] : d[c].substr(0, 3),
                A: d[c],
                d: A(p),
                e: A(p, 2, " "),
                w: c,
                b: m.shortMonths[H],
                B: m.months[H],
                m: A(H + 1),
                y: b.toString().substr(2, 2),
                Y: b,
                H: A(e),
                k: e,
                I: A(e % 12 || 12),
                l: e % 12 || 12,
                M: A(l[t.hcGetMinutes]()),
                p: 12 > e ? "AM" : "PM",
                P: 12 > e ? "am" : "pm",
                S: A(l.getSeconds()),
                L: A(Math.round(h %
                    1E3), 3)
            }, a.dateFormats);
            for (k in t)for (; -1 !== u.indexOf("%" + k);)u = u.replace("%" + k, "function" === typeof t[k] ? t[k](h) : t[k]);
            return n ? u.substr(0, 1).toUpperCase() + u.substr(1) : u
        };
        a.formatSingle = function (u, h) {
            var n = /\.([0-9])/, t = a.defaultOptions.lang;
            /f$/.test(u) ? (n = (n = u.match(n)) ? n[1] : -1, null !== h && (h = a.numberFormat(h, n, t.decimalPoint, -1 < u.indexOf(",") ? t.thousandsSep : ""))) : h = a.dateFormat(u, h);
            return h
        };
        a.format = function (u, h) {
            for (var n = "{", t = !1, l, k, e, c, p = [], H; u;) {
                n = u.indexOf(n);
                if (-1 === n)break;
                l = u.slice(0,
                    n);
                if (t) {
                    l = l.split(":");
                    k = l.shift().split(".");
                    c = k.length;
                    H = h;
                    for (e = 0; e < c; e++)H = H[k[e]];
                    l.length && (H = a.formatSingle(l.join(":"), H));
                    p.push(H)
                } else p.push(l);
                u = u.slice(n + 1);
                n = (t = !t) ? "}" : "{"
            }
            p.push(u);
            return p.join("")
        };
        a.getMagnitude = function (a) {
            return Math.pow(10, Math.floor(Math.log(a) / Math.LN10))
        };
        a.normalizeTickInterval = function (u, h, n, t, l) {
            var k, e = u;
            n = a.pick(n, 1);
            k = u / n;
            h || (h = l ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === t && (1 === n ? h = a.grep(h, function (a) {
                return 0 === a % 1
            }) : .1 >= n && (h = [1 / n])));
            for (t = 0; t < h.length && !(e = h[t], l && e * n >= u || !l && k <= (h[t] + (h[t + 1] || h[t])) / 2); t++);
            return e = a.correctFloat(e * n, -Math.round(Math.log(.001) / Math.LN10))
        };
        a.stableSort = function (a, h) {
            var n = a.length, t, l;
            for (l = 0; l < n; l++)a[l].safeI = l;
            a.sort(function (a, e) {
                t = h(a, e);
                return 0 === t ? a.safeI - e.safeI : t
            });
            for (l = 0; l < n; l++)delete a[l].safeI
        };
        a.arrayMin = function (a) {
            for (var h = a.length, n = a[0]; h--;)a[h] < n && (n = a[h]);
            return n
        };
        a.arrayMax = function (a) {
            for (var h = a.length, n = a[0]; h--;)a[h] > n && (n = a[h]);
            return n
        };
        a.destroyObjectProperties =
            function (a, h) {
                for (var n in a)a[n] && a[n] !== h && a[n].destroy && a[n].destroy(), delete a[n]
            };
        a.discardElement = function (u) {
            var h = a.garbageBin;
            h || (h = a.createElement("div"));
            u && h.appendChild(u);
            h.innerHTML = ""
        };
        a.correctFloat = function (a, h) {
            return parseFloat(a.toPrecision(h || 14))
        };
        a.setAnimation = function (u, h) {
            h.renderer.globalAnimation = a.pick(u, h.options.chart.animation, !0)
        };
        a.animObject = function (u) {
            return a.isObject(u) ? a.merge(u) : {duration: u ? 500 : 0}
        };
        a.timeUnits = {
            millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5,
            day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5
        };
        a.numberFormat = function (u, h, n, t) {
            u = +u || 0;
            h = +h;
            var l = a.defaultOptions.lang, k = (u.toString().split(".")[1] || "").length, e, c;
            -1 === h ? h = Math.min(k, 20) : a.isNumber(h) || (h = 2);
            c = (Math.abs(u) + Math.pow(10, -Math.max(h, k) - 1)).toFixed(h);
            k = String(a.pInt(c));
            e = 3 < k.length ? k.length % 3 : 0;
            n = a.pick(n, l.decimalPoint);
            t = a.pick(t, l.thousandsSep);
            u = (0 > u ? "-" : "") + (e ? k.substr(0, e) + t : "");
            u += k.substr(e).replace(/(\d{3})(?=\d)/g, "$1" + t);
            h && (u += n + c.slice(-h));
            return u
        };
        Math.easeInOutSine =
            function (a) {
                return -.5 * (Math.cos(Math.PI * a) - 1)
            };
        a.getStyle = function (u, h) {
            return "width" === h ? Math.min(u.offsetWidth, u.scrollWidth) - a.getStyle(u, "padding-left") - a.getStyle(u, "padding-right") : "height" === h ? Math.min(u.offsetHeight, u.scrollHeight) - a.getStyle(u, "padding-top") - a.getStyle(u, "padding-bottom") : (u = E.getComputedStyle(u, void 0)) && a.pInt(u.getPropertyValue(h))
        };
        a.inArray = function (a, h) {
            return h.indexOf ? h.indexOf(a) : [].indexOf.call(h, a)
        };
        a.grep = function (a, h) {
            return [].filter.call(a, h)
        };
        a.find = function (a,
                           h) {
            return [].find.call(a, h)
        };
        a.map = function (a, h) {
            for (var n = [], t = 0, l = a.length; t < l; t++)n[t] = h.call(a[t], a[t], t, a);
            return n
        };
        a.offset = function (a) {
            var h = C.documentElement;
            a = a.getBoundingClientRect();
            return {
                top: a.top + (E.pageYOffset || h.scrollTop) - (h.clientTop || 0),
                left: a.left + (E.pageXOffset || h.scrollLeft) - (h.clientLeft || 0)
            }
        };
        a.stop = function (a, h) {
            for (var n = B.length; n--;)B[n].elem !== a || h && h !== B[n].prop || (B[n].stopped = !0)
        };
        a.each = function (a, h, n) {
            return Array.prototype.forEach.call(a, h, n)
        };
        a.addEvent = function (u,
                               h, n) {
            function t(a) {
                a.target = a.srcElement || E;
                n.call(u, a)
            }

            var l = u.hcEvents = u.hcEvents || {};
            u.addEventListener ? u.addEventListener(h, n, !1) : u.attachEvent && (u.hcEventsIE || (u.hcEventsIE = {}), u.hcEventsIE[n.toString()] = t, u.attachEvent("on" + h, t));
            l[h] || (l[h] = []);
            l[h].push(n);
            return function () {
                a.removeEvent(u, h, n)
            }
        };
        a.removeEvent = function (u, h, n) {
            function t(a, c) {
                u.removeEventListener ? u.removeEventListener(a, c, !1) : u.attachEvent && (c = u.hcEventsIE[c.toString()], u.detachEvent("on" + a, c))
            }

            function l() {
                var a, c;
                if (u.nodeName)for (c in h ?
                    (a = {}, a[h] = !0) : a = e, a)if (e[c])for (a = e[c].length; a--;)t(c, e[c][a])
            }

            var k, e = u.hcEvents, c;
            e && (h ? (k = e[h] || [], n ? (c = a.inArray(n, k), -1 < c && (k.splice(c, 1), e[h] = k), t(h, n)) : (l(), e[h] = [])) : (l(), u.hcEvents = {}))
        };
        a.fireEvent = function (u, h, n, t) {
            var l;
            l = u.hcEvents;
            var k, e;
            n = n || {};
            if (C.createEvent && (u.dispatchEvent || u.fireEvent))l = C.createEvent("Events"), l.initEvent(h, !0, !0), a.extend(l, n), u.dispatchEvent ? u.dispatchEvent(l) : u.fireEvent(h, l); else if (l)for (l = l[h] || [], k = l.length, n.target || a.extend(n, {
                preventDefault: function () {
                    n.defaultPrevented = !0
                }, target: u, type: h
            }), h = 0; h < k; h++)(e = l[h]) && !1 === e.call(u, n) && n.preventDefault();
            t && !n.defaultPrevented && t(n)
        };
        a.animate = function (u, h, n) {
            var t, l = "", k, e, c;
            a.isObject(n) || (t = arguments, n = {duration: t[2], easing: t[3], complete: t[4]});
            a.isNumber(n.duration) || (n.duration = 400);
            n.easing = "function" === typeof n.easing ? n.easing : Math[n.easing] || Math.easeInOutSine;
            n.curAnim = a.merge(h);
            for (c in h)a.stop(u, c), e = new a.Fx(u, n, c), k = null, "d" === c ? (e.paths = e.initPath(u, u.d, h.d), e.toD = h.d, t = 0, k = 1) : u.attr ? t = u.attr(c) : (t = parseFloat(a.getStyle(u,
                    c)) || 0, "opacity" !== c && (l = "px")), k || (k = h[c]), k && k.match && k.match("px") && (k = k.replace(/px/g, "")), e.run(t, k, l)
        };
        a.seriesType = function (u, h, n, t, l) {
            var k = a.getOptions(), e = a.seriesTypes;
            k.plotOptions[u] = a.merge(k.plotOptions[h], n);
            e[u] = a.extendClass(e[h] || function () {
                }, t);
            e[u].prototype.type = u;
            l && (e[u].prototype.pointClass = a.extendClass(a.Point, l));
            return e[u]
        };
        a.uniqueKey = function () {
            var a = Math.random().toString(36).substring(2, 9), h = 0;
            return function () {
                return "highcharts-" + a + "-" + h++
            }
        }();
        E.jQuery && (E.jQuery.fn.highcharts =
            function () {
                var u = [].slice.call(arguments);
                if (this[0])return u[0] ? (new (a[a.isString(u[0]) ? u.shift() : "Chart"])(this[0], u[0], u[1]), this) : z[a.attr(this[0], "data-highcharts-chart")]
            });
        C && !C.defaultView && (a.getStyle = function (u, h) {
            var n = {width: "clientWidth", height: "clientHeight"}[h];
            if (u.style[h])return a.pInt(u.style[h]);
            "opacity" === h && (h = "filter");
            if (n)return u.style.zoom = 1, Math.max(u[n] - 2 * a.getStyle(u, "padding"), 0);
            u = u.currentStyle[h.replace(/\-(\w)/g, function (a, l) {
                return l.toUpperCase()
            })];
            "filter" ===
            h && (u = u.replace(/alpha\(opacity=([0-9]+)\)/, function (a, l) {
                return l / 100
            }));
            return "" === u ? 1 : a.pInt(u)
        });
        Array.prototype.forEach || (a.each = function (a, h, n) {
            for (var t = 0, l = a.length; t < l; t++)if (!1 === h.call(n, a[t], t, a))return t
        });
        Array.prototype.indexOf || (a.inArray = function (a, h) {
            var n, t = 0;
            if (h)for (n = h.length; t < n; t++)if (h[t] === a)return t;
            return -1
        });
        Array.prototype.filter || (a.grep = function (a, h) {
            for (var n = [], t = 0, l = a.length; t < l; t++)h(a[t], t) && n.push(a[t]);
            return n
        });
        Array.prototype.find || (a.find = function (a, h) {
            var n,
                t = a.length;
            for (n = 0; n < t; n++)if (h(a[n], n))return a[n]
        })
    })(I);
    (function (a) {
        var B = a.each, z = a.isNumber, C = a.map, E = a.merge, u = a.pInt;
        a.Color = function (h) {
            if (!(this instanceof a.Color))return new a.Color(h);
            this.init(h)
        };
        a.Color.prototype = {
            parsers: [{
                regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                parse: function (a) {
                    return [u(a[1]), u(a[2]), u(a[3]), parseFloat(a[4], 10)]
                }
            }, {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (a) {
                    return [u(a[1]),
                        u(a[2]), u(a[3]), 1]
                }
            }], names: {white: "#ffffff", black: "#000000"}, init: function (h) {
                var n, t, l, k;
                if ((this.input = h = this.names[h] || h) && h.stops)this.stops = C(h.stops, function (e) {
                    return new a.Color(e[1])
                }); else if (h && "#" === h[0] && (n = h.length, h = parseInt(h.substr(1), 16), 7 === n ? t = [(h & 16711680) >> 16, (h & 65280) >> 8, h & 255, 1] : 4 === n && (t = [(h & 3840) >> 4 | (h & 3840) >> 8, (h & 240) >> 4 | h & 240, (h & 15) << 4 | h & 15, 1])), !t)for (l = this.parsers.length; l-- && !t;)k = this.parsers[l], (n = k.regex.exec(h)) && (t = k.parse(n));
                this.rgba = t || []
            }, get: function (a) {
                var h =
                    this.input, t = this.rgba, l;
                this.stops ? (l = E(h), l.stops = [].concat(l.stops), B(this.stops, function (k, e) {
                    l.stops[e] = [l.stops[e][0], k.get(a)]
                })) : l = t && z(t[0]) ? "rgb" === a || !a && 1 === t[3] ? "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")" : "a" === a ? t[3] : "rgba(" + t.join(",") + ")" : h;
                return l
            }, brighten: function (a) {
                var h, t = this.rgba;
                if (this.stops)B(this.stops, function (l) {
                    l.brighten(a)
                }); else if (z(a) && 0 !== a)for (h = 0; 3 > h; h++)t[h] += u(255 * a), 0 > t[h] && (t[h] = 0), 255 < t[h] && (t[h] = 255);
                return this
            }, setOpacity: function (a) {
                this.rgba[3] = a;
                return this
            }
        };
        a.color = function (h) {
            return new a.Color(h)
        }
    })(I);
    (function (a) {
        var B, z, C = a.addEvent, E = a.animate, u = a.attr, h = a.charts, n = a.color, t = a.css, l = a.createElement, k = a.defined, e = a.deg2rad, c = a.destroyObjectProperties, p = a.doc, H = a.each, b = a.extend, m = a.erase, d = a.grep, r = a.hasTouch, A = a.inArray, v = a.isArray, f = a.isFirefox, y = a.isMS, G = a.isObject, F = a.isString, q = a.isWebKit, x = a.merge, J = a.noop, K = a.pick, L = a.pInt, g = a.removeEvent, D = a.stop, S = a.svg, M = a.SVG_NS, R = a.symbolSizes, N = a.win;
        B = a.SVGElement = function () {
            return this
        };
        B.prototype =
        {
            opacity: 1,
            SVG_NS: M,
            textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
            init: function (a, g) {
                this.element = "span" === g ? l(g) : p.createElementNS(this.SVG_NS, g);
                this.renderer = a
            },
            animate: function (w, g, b) {
                g = a.animObject(K(g, this.renderer.globalAnimation, !0));
                0 !== g.duration ? (b && (g.complete = b), E(this, w, g)) : (this.attr(w, null, b), g.step && g.step.call(this));
                return this
            },
            colorGradient: function (w, g, b) {
                var f = this.renderer,
                    d, c, q, D, O, y, r, G, e, m, p, l = [], Q;
                w.linearGradient ? c = "linearGradient" : w.radialGradient && (c = "radialGradient");
                if (c) {
                    q = w[c];
                    O = f.gradients;
                    r = w.stops;
                    m = b.radialReference;
                    v(q) && (w[c] = q = {x1: q[0], y1: q[1], x2: q[2], y2: q[3], gradientUnits: "userSpaceOnUse"});
                    "radialGradient" === c && m && !k(q.gradientUnits) && (D = q, q = x(q, f.getRadialAttr(m, D), {gradientUnits: "userSpaceOnUse"}));
                    for (p in q)"id" !== p && l.push(p, q[p]);
                    for (p in r)l.push(r[p]);
                    l = l.join(",");
                    O[l] ? m = O[l].attr("id") : (q.id = m = a.uniqueKey(), O[l] = y = f.createElement(c).attr(q).add(f.defs),
                        y.radAttr = D, y.stops = [], H(r, function (w) {
                        0 === w[1].indexOf("rgba") ? (d = a.color(w[1]), G = d.get("rgb"), e = d.get("a")) : (G = w[1], e = 1);
                        w = f.createElement("stop").attr({offset: w[0], "stop-color": G, "stop-opacity": e}).add(y);
                        y.stops.push(w)
                    }));
                    Q = "url(" + f.url + "#" + m + ")";
                    b.setAttribute(g, Q);
                    b.gradient = l;
                    w.toString = function () {
                        return Q
                    }
                }
            },
            applyTextOutline: function (a) {
                var w = this.element, g, b, f, d;
                -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(w.style.fill)));
                this.fakeTS = !0;
                this.ySetter = this.xSetter;
                g = [].slice.call(w.getElementsByTagName("tspan"));
                a = a.split(" ");
                b = a[a.length - 1];
                (f = a[0]) && "none" !== f && (f = f.replace(/(^[\d\.]+)(.*?)$/g, function (a, w, g) {
                    return 2 * w + g
                }), H(g, function (a) {
                    "highcharts-text-outline" === a.getAttribute("class") && m(g, w.removeChild(a))
                }), d = w.firstChild, H(g, function (a, g) {
                    0 === g && (a.setAttribute("x", w.getAttribute("x")), g = w.getAttribute("y"), a.setAttribute("y", g || 0), null === g && w.setAttribute("y", 0));
                    a = a.cloneNode(1);
                    u(a, {
                        "class": "highcharts-text-outline", fill: b, stroke: b, "stroke-width": f,
                        "stroke-linejoin": "round"
                    });
                    w.insertBefore(a, d)
                }))
            },
            attr: function (a, g, b, f) {
                var w, d = this.element, q, c = this, y;
                "string" === typeof a && void 0 !== g && (w = a, a = {}, a[w] = g);
                if ("string" === typeof a)c = (this[a + "Getter"] || this._defaultGetter).call(this, a, d); else {
                    for (w in a)g = a[w], y = !1, f || D(this, w), this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(w) && (q || (this.symbolAttr(a), q = !0), y = !0), !this.rotation || "x" !== w && "y" !== w || (this.doTransform = !0), y || (y = this[w + "Setter"] || this._defaultSetter, y.call(this,
                        g, w, d), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(w) && this.updateShadows(w, g, y));
                    this.doTransform && (this.updateTransform(), this.doTransform = !1)
                }
                b && b();
                return c
            },
            updateShadows: function (a, g, b) {
                for (var w = this.shadows, f = w.length; f--;)b.call(w[f], "height" === a ? Math.max(g - (w[f].cutHeight || 0), 0) : "d" === a ? this.d : g, a, w[f])
            },
            addClass: function (a, g) {
                var w = this.attr("class") || "";
                -1 === w.indexOf(a) && (g || (a = (w + (w ? " " : "") + a).replace("  ", " ")), this.attr("class", a));
                return this
            },
            hasClass: function (a) {
                return -1 !==
                    u(this.element, "class").indexOf(a)
            },
            removeClass: function (a) {
                u(this.element, "class", (u(this.element, "class") || "").replace(a, ""));
                return this
            },
            symbolAttr: function (a) {
                var w = this;
                H("x y r start end width height innerR anchorX anchorY".split(" "), function (g) {
                    w[g] = K(a[g], w[g])
                });
                w.attr({d: w.renderer.symbols[w.symbolName](w.x, w.y, w.width, w.height, w)})
            },
            clip: function (a) {
                return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none")
            },
            crisp: function (a, g) {
                var w, f = {}, b;
                g = g || a.strokeWidth || 0;
                b = Math.round(g) %
                    2 / 2;
                a.x = Math.floor(a.x || this.x || 0) + b;
                a.y = Math.floor(a.y || this.y || 0) + b;
                a.width = Math.floor((a.width || this.width || 0) - 2 * b);
                a.height = Math.floor((a.height || this.height || 0) - 2 * b);
                k(a.strokeWidth) && (a.strokeWidth = g);
                for (w in a)this[w] !== a[w] && (this[w] = f[w] = a[w]);
                return f
            },
            css: function (a) {
                var w = this.styles, g = {}, f = this.element, d, q = "", c = !w, D = ["textOverflow", "width"];
                a && a.color && (a.fill = a.color);
                if (w)for (d in a)a[d] !== w[d] && (g[d] = a[d], c = !0);
                if (c) {
                    w && (a = b(w, g));
                    w = this.textWidth = a && a.width && "auto" !== a.width && "text" ===
                        f.nodeName.toLowerCase() && L(a.width);
                    this.styles = a;
                    w && !S && this.renderer.forExport && delete a.width;
                    if (y && !S)t(this.element, a); else {
                        w = function (a, w) {
                            return "-" + w.toLowerCase()
                        };
                        for (d in a)-1 === A(d, D) && (q += d.replace(/([A-Z])/g, w) + ":" + a[d] + ";");
                        q && u(f, "style", q)
                    }
                    this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline))
                }
                return this
            },
            strokeWidth: function () {
                return this["stroke-width"] || 0
            },
            on: function (a, g) {
                var w = this, f = w.element;
                r && "click" ===
                a ? (f.ontouchstart = function (a) {
                    w.touchEventFired = Date.now();
                    a.preventDefault();
                    g.call(f, a)
                }, f.onclick = function (a) {
                    (-1 === N.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (w.touchEventFired || 0)) && g.call(f, a)
                }) : f["on" + a] = g;
                return this
            },
            setRadialReference: function (a) {
                var w = this.renderer.gradients[this.element.gradient];
                this.element.radialReference = a;
                w && w.radAttr && w.animate(this.renderer.getRadialAttr(a, w.radAttr));
                return this
            },
            translate: function (a, g) {
                return this.attr({translateX: a, translateY: g})
            },
            invert: function (a) {
                this.inverted = a;
                this.updateTransform();
                return this
            },
            updateTransform: function () {
                var a = this.translateX || 0, g = this.translateY || 0, f = this.scaleX, b = this.scaleY, d = this.inverted, q = this.rotation, c = this.element;
                d && (a += this.width, g += this.height);
                a = ["translate(" + a + "," + g + ")"];
                d ? a.push("rotate(90) scale(-1,1)") : q && a.push("rotate(" + q + " " + (c.getAttribute("x") || 0) + " " + (c.getAttribute("y") || 0) + ")");
                (k(f) || k(b)) && a.push("scale(" + K(f, 1) + " " + K(b, 1) + ")");
                a.length && c.setAttribute("transform", a.join(" "))
            },
            toFront: function () {
                var a = this.element;
                a.parentNode.appendChild(a);
                return this
            },
            align: function (a, g, f) {
                var w, b, d, q, c = {};
                b = this.renderer;
                d = b.alignedObjects;
                var D, y;
                if (a) {
                    if (this.alignOptions = a, this.alignByTranslate = g, !f || F(f))this.alignTo = w = f || "renderer", m(d, this), d.push(this), f = null
                } else a = this.alignOptions, g = this.alignByTranslate, w = this.alignTo;
                f = K(f, b[w], b);
                w = a.align;
                b = a.verticalAlign;
                d = (f.x || 0) + (a.x || 0);
                q = (f.y || 0) + (a.y || 0);
                "right" === w ? D = 1 : "center" === w && (D = 2);
                D && (d += (f.width - (a.width || 0)) / D);
                c[g ?
                    "translateX" : "x"] = Math.round(d);
                "bottom" === b ? y = 1 : "middle" === b && (y = 2);
                y && (q += (f.height - (a.height || 0)) / y);
                c[g ? "translateY" : "y"] = Math.round(q);
                this[this.placed ? "animate" : "attr"](c);
                this.placed = !0;
                this.alignAttr = c;
                return this
            },
            getBBox: function (a, g) {
                var w, f = this.renderer, d, q = this.element, c = this.styles, D, y = this.textStr, x, r = f.cache, G = f.cacheKeys, m;
                g = K(g, this.rotation);
                d = g * e;
                D = c && c.fontSize;
                void 0 !== y && (m = y.toString(), -1 === m.indexOf("\x3c") && (m = m.replace(/[0-9]/g, "0")), m += ["", g || 0, D, c && c.width, c && c.textOverflow].join());
                m && !a && (w = r[m]);
                if (!w) {
                    if (q.namespaceURI === this.SVG_NS || f.forExport) {
                        try {
                            (x = this.fakeTS && function (a) {
                                    H(q.querySelectorAll(".highcharts-text-outline"), function (w) {
                                        w.style.display = a
                                    })
                                }) && x("none"), w = q.getBBox ? b({}, q.getBBox()) : {
                                width: q.offsetWidth,
                                height: q.offsetHeight
                            }, x && x("")
                        } catch (X) {
                        }
                        if (!w || 0 > w.width)w = {width: 0, height: 0}
                    } else w = this.htmlGetBBox();
                    f.isSVG && (a = w.width, f = w.height, c && "11px" === c.fontSize && 17 === Math.round(f) && (w.height = f = 14), g && (w.width = Math.abs(f * Math.sin(d)) + Math.abs(a * Math.cos(d)),
                        w.height = Math.abs(f * Math.cos(d)) + Math.abs(a * Math.sin(d))));
                    if (m && 0 < w.height) {
                        for (; 250 < G.length;)delete r[G.shift()];
                        r[m] || G.push(m);
                        r[m] = w
                    }
                }
                return w
            },
            show: function (a) {
                return this.attr({visibility: a ? "inherit" : "visible"})
            },
            hide: function () {
                return this.attr({visibility: "hidden"})
            },
            fadeOut: function (a) {
                var w = this;
                w.animate({opacity: 0}, {
                    duration: a || 150, complete: function () {
                        w.attr({y: -9999})
                    }
                })
            },
            add: function (a) {
                var w = this.renderer, g = this.element, f;
                a && (this.parentGroup = a);
                this.parentInverted = a && a.inverted;
                void 0 !== this.textStr && w.buildText(this);
                this.added = !0;
                if (!a || a.handleZ || this.zIndex)f = this.zIndexSetter();
                f || (a ? a.element : w.box).appendChild(g);
                if (this.onAdd)this.onAdd();
                return this
            },
            safeRemoveChild: function (a) {
                var w = a.parentNode;
                w && w.removeChild(a)
            },
            destroy: function () {
                var a = this.element || {}, g = this.renderer.isSVG && "SPAN" === a.nodeName && this.parentGroup, f, b;
                a.onclick = a.onmouseout = a.onmouseover = a.onmousemove = a.point = null;
                D(this);
                this.clipPath && (this.clipPath = this.clipPath.destroy());
                if (this.stops) {
                    for (b =
                             0; b < this.stops.length; b++)this.stops[b] = this.stops[b].destroy();
                    this.stops = null
                }
                this.safeRemoveChild(a);
                for (this.destroyShadows(); g && g.div && 0 === g.div.childNodes.length;)a = g.parentGroup, this.safeRemoveChild(g.div), delete g.div, g = a;
                this.alignTo && m(this.renderer.alignedObjects, this);
                for (f in this)delete this[f];
                return null
            },
            shadow: function (a, g, f) {
                var w = [], b, d, c = this.element, q, D, y, x;
                if (!a)this.destroyShadows(); else if (!this.shadows) {
                    D = K(a.width, 3);
                    y = (a.opacity || .15) / D;
                    x = this.parentInverted ? "(-1,-1)" :
                    "(" + K(a.offsetX, 1) + ", " + K(a.offsetY, 1) + ")";
                    for (b = 1; b <= D; b++)d = c.cloneNode(0), q = 2 * D + 1 - 2 * b, u(d, {
                        isShadow: "true",
                        stroke: a.color || "#000000",
                        "stroke-opacity": y * b,
                        "stroke-width": q,
                        transform: "translate" + x,
                        fill: "none"
                    }), f && (u(d, "height", Math.max(u(d, "height") - q, 0)), d.cutHeight = q), g ? g.element.appendChild(d) : c.parentNode.insertBefore(d, c), w.push(d);
                    this.shadows = w
                }
                return this
            },
            destroyShadows: function () {
                H(this.shadows || [], function (a) {
                    this.safeRemoveChild(a)
                }, this);
                this.shadows = void 0
            },
            xGetter: function (a) {
                "circle" ===
                this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
                return this._defaultGetter(a)
            },
            _defaultGetter: function (a) {
                a = K(this[a], this.element ? this.element.getAttribute(a) : null, 0);
                /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
                return a
            },
            dSetter: function (a, g, f) {
                a && a.join && (a = a.join(" "));
                /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
                f.setAttribute(g, a);
                this[g] = a
            },
            dashstyleSetter: function (a) {
                var w, g = this["stroke-width"];
                "inherit" === g && (g = 1);
                if (a = a && a.toLowerCase()) {
                    a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot",
                        "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                    for (w = a.length; w--;)a[w] = L(a[w]) * g;
                    a = a.join(",").replace(/NaN/g, "none");
                    this.element.setAttribute("stroke-dasharray", a)
                }
            },
            alignSetter: function (a) {
                this.element.setAttribute("text-anchor", {left: "start", center: "middle", right: "end"}[a])
            },
            opacitySetter: function (a, g, f) {
                this[g] = a;
                f.setAttribute(g, a)
            },
            titleSetter: function (a) {
                var w = this.element.getElementsByTagName("title")[0];
                w || (w = p.createElementNS(this.SVG_NS, "title"), this.element.appendChild(w));
                w.firstChild && w.removeChild(w.firstChild);
                w.appendChild(p.createTextNode(String(K(a), "").replace(/<[^>]*>/g, "")))
            },
            textSetter: function (a) {
                a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
            },
            fillSetter: function (a, g, f) {
                "string" === typeof a ? f.setAttribute(g, a) : a && this.colorGradient(a, g, f)
            },
            visibilitySetter: function (a, g, f) {
                "inherit" === a ? f.removeAttribute(g) : f.setAttribute(g, a)
            },
            zIndexSetter: function (a,
                                    g) {
                var w = this.renderer, f = this.parentGroup, b = (f || w).element || w.box, d, c = this.element, q;
                d = this.added;
                var D;
                k(a) && (c.zIndex = a, a = +a, this[g] === a && (d = !1), this[g] = a);
                if (d) {
                    (a = this.zIndex) && f && (f.handleZ = !0);
                    g = b.childNodes;
                    for (D = 0; D < g.length && !q; D++)f = g[D], d = f.zIndex, f !== c && (L(d) > a || !k(a) && k(d) || 0 > a && !k(d) && b !== w.box) && (b.insertBefore(c, f), q = !0);
                    q || b.appendChild(c)
                }
                return q
            },
            _defaultSetter: function (a, g, f) {
                f.setAttribute(g, a)
            }
        };
        B.prototype.yGetter = B.prototype.xGetter;
        B.prototype.translateXSetter = B.prototype.translateYSetter =
            B.prototype.rotationSetter = B.prototype.verticalAlignSetter = B.prototype.scaleXSetter = B.prototype.scaleYSetter = function (a, g) {
                this[g] = a;
                this.doTransform = !0
            };
        B.prototype["stroke-widthSetter"] = B.prototype.strokeSetter = function (a, g, f) {
            this[g] = a;
            this.stroke && this["stroke-width"] ? (B.prototype.fillSetter.call(this, this.stroke, "stroke", f), f.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === g && 0 === a && this.hasStroke && (f.removeAttribute("stroke"), this.hasStroke = !1)
        };
        z = a.SVGRenderer =
            function () {
                this.init.apply(this, arguments)
            };
        z.prototype = {
            Element: B, SVG_NS: M, init: function (a, g, b, d, c, D) {
                var w;
                d = this.createElement("svg").attr({version: "1.1", "class": "highcharts-root"}).css(this.getStyle(d));
                w = d.element;
                a.appendChild(w);
                -1 === a.innerHTML.indexOf("xmlns") && u(w, "xmlns", this.SVG_NS);
                this.isSVG = !0;
                this.box = w;
                this.boxWrapper = d;
                this.alignedObjects = [];
                this.url = (f || q) && p.getElementsByTagName("base").length ? N.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g,
                    "%20") : "";
                this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 5.0.9"));
                this.defs = this.createElement("defs").add();
                this.allowHTML = D;
                this.forExport = c;
                this.gradients = {};
                this.cache = {};
                this.cacheKeys = [];
                this.imgCount = 0;
                this.setSize(g, b, !1);
                var y;
                f && a.getBoundingClientRect && (g = function () {
                    t(a, {left: 0, top: 0});
                    y = a.getBoundingClientRect();
                    t(a, {left: Math.ceil(y.left) - y.left + "px", top: Math.ceil(y.top) - y.top + "px"})
                }, g(), this.unSubPixelFix = C(N, "resize", g))
            }, getStyle: function (a) {
                return this.style =
                    b({
                        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        fontSize: "12px"
                    }, a)
            }, setStyle: function (a) {
                this.boxWrapper.css(this.getStyle(a))
            }, isHidden: function () {
                return !this.boxWrapper.getBBox().width
            }, destroy: function () {
                var a = this.defs;
                this.box = null;
                this.boxWrapper = this.boxWrapper.destroy();
                c(this.gradients || {});
                this.gradients = null;
                a && (this.defs = a.destroy());
                this.unSubPixelFix && this.unSubPixelFix();
                return this.alignedObjects = null
            }, createElement: function (a) {
                var g = new this.Element;
                g.init(this, a);
                return g
            }, draw: J, getRadialAttr: function (a, g) {
                return {cx: a[0] - a[2] / 2 + g.cx * a[2], cy: a[1] - a[2] / 2 + g.cy * a[2], r: g.r * a[2]}
            }, buildText: function (a) {
                var g = a.element, f = this, w = f.forExport, b = K(a.textStr, "").toString(), c = -1 !== b.indexOf("\x3c"), q = g.childNodes, D, y, x, r, G = u(g, "x"), m = a.styles, e = a.textWidth, l = m && m.lineHeight, v = m && m.textOutline, k = m && "ellipsis" === m.textOverflow, h = m && "nowrap" === m.whiteSpace, F = m && m.fontSize, A, J = q.length, m = e && !a.added && this.box, n = function (a) {
                    var w;
                    w = /(px|em)$/.test(a && a.style.fontSize) ?
                        a.style.fontSize : F || f.style.fontSize || 12;
                    return l ? L(l) : f.fontMetrics(w, a.getAttribute("style") ? a : g).h
                };
                A = [b, k, h, l, v, F, e].join();
                if (A !== a.textCache) {
                    for (a.textCache = A; J--;)g.removeChild(q[J]);
                    c || v || k || e || -1 !== b.indexOf(" ") ? (D = /<.*class="([^"]+)".*>/, y = /<.*style="([^"]+)".*>/, x = /<.*href="(http[^"]+)".*>/, m && m.appendChild(g), b = c ? b.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g, '\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,
                        "\x3c/span\x3e").split(/<br.*?>/g) : [b], b = d(b, function (a) {
                        return "" !== a
                    }), H(b, function (b, d) {
                        var c, q = 0;
                        b = b.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||");
                        c = b.split("|||");
                        H(c, function (b) {
                            if ("" !== b || 1 === c.length) {
                                var m = {}, v = p.createElementNS(f.SVG_NS, "tspan"), l, F;
                                D.test(b) && (l = b.match(D)[1], u(v, "class", l));
                                y.test(b) && (F = b.match(y)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), u(v, "style", F));
                                x.test(b) && !w && (u(v, "onclick", 'location.href\x3d"' + b.match(x)[1] +
                                    '"'), t(v, {cursor: "pointer"}));
                                b = (b.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e");
                                if (" " !== b) {
                                    v.appendChild(p.createTextNode(b));
                                    q ? m.dx = 0 : d && null !== G && (m.x = G);
                                    u(v, m);
                                    g.appendChild(v);
                                    !q && d && (!S && w && t(v, {display: "block"}), u(v, "dy", n(v)));
                                    if (e) {
                                        m = b.replace(/([^\^])-/g, "$1- ").split(" ");
                                        l = 1 < c.length || d || 1 < m.length && !h;
                                        for (var A, H, O = [], J = n(v), K = a.rotation, L = b, P = L.length; (l || k) && (m.length || O.length);)a.rotation = 0, A = a.getBBox(!0), H = A.width, !S && f.forExport && (H = f.measureSpanWidth(v.firstChild.data,
                                            a.styles)), A = H > e, void 0 === r && (r = A), k && r ? (P /= 2, "" === L || !A && .5 > P ? m = [] : (L = b.substring(0, L.length + (A ? -1 : 1) * Math.ceil(P)), m = [L + (3 < e ? "\u2026" : "")], v.removeChild(v.firstChild))) : A && 1 !== m.length ? (v.removeChild(v.firstChild), O.unshift(m.pop())) : (m = O, O = [], m.length && !h && (v = p.createElementNS(M, "tspan"), u(v, {
                                            dy: J,
                                            x: G
                                        }), F && u(v, "style", F), g.appendChild(v)), H > e && (e = H)), m.length && v.appendChild(p.createTextNode(m.join(" ").replace(/- /g, "-")));
                                        a.rotation = K
                                    }
                                    q++
                                }
                            }
                        })
                    }), r && a.attr("title", a.textStr), m && m.removeChild(g),
                    v && a.applyTextOutline && a.applyTextOutline(v)) : g.appendChild(p.createTextNode(b.replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e")))
                }
            }, getContrast: function (a) {
                a = n(a).rgba;
                return 510 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF"
            }, button: function (a, g, f, d, c, q, D, m, r) {
                var w = this.label(a, g, f, r, null, null, null, null, "button"), G = 0;
                w.attr(x({padding: 8, r: 2}, c));
                var e, v, p, l;
                c = x({
                    fill: "#f7f7f7",
                    stroke: "#cccccc",
                    "stroke-width": 1,
                    style: {color: "#333333", cursor: "pointer", fontWeight: "normal"}
                }, c);
                e = c.style;
                delete c.style;
                q = x(c, {fill: "#e6e6e6"},
                    q);
                v = q.style;
                delete q.style;
                D = x(c, {fill: "#e6ebf5", style: {color: "#000000", fontWeight: "bold"}}, D);
                p = D.style;
                delete D.style;
                m = x(c, {style: {color: "#cccccc"}}, m);
                l = m.style;
                delete m.style;
                C(w.element, y ? "mouseover" : "mouseenter", function () {
                    3 !== G && w.setState(1)
                });
                C(w.element, y ? "mouseout" : "mouseleave", function () {
                    3 !== G && w.setState(G)
                });
                w.setState = function (a) {
                    1 !== a && (w.state = G = a);
                    w.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a ||
                        0]);
                    w.attr([c, q, D, m][a || 0]).css([e, v, p, l][a || 0])
                };
                w.attr(c).css(b({cursor: "default"}, e));
                return w.on("click", function (a) {
                    3 !== G && d.call(w, a)
                })
            }, crispLine: function (a, g) {
                a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - g % 2 / 2);
                a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + g % 2 / 2);
                return a
            }, path: function (a) {
                var g = {fill: "none"};
                v(a) ? g.d = a : G(a) && b(g, a);
                return this.createElement("path").attr(g)
            }, circle: function (a, g, f) {
                a = G(a) ? a : {x: a, y: g, r: f};
                g = this.createElement("circle");
                g.xSetter = g.ySetter = function (a, g, f) {
                    f.setAttribute("c" +
                        g, a)
                };
                return g.attr(a)
            }, arc: function (a, g, f, b, d, c) {
                G(a) ? (b = a, g = b.y, f = b.r, a = b.x) : b = {innerR: b, start: d, end: c};
                a = this.symbol("arc", a, g, f, f, b);
                a.r = f;
                return a
            }, rect: function (a, g, f, b, d, c) {
                d = G(a) ? a.r : d;
                var w = this.createElement("rect");
                a = G(a) ? a : void 0 === a ? {} : {x: a, y: g, width: Math.max(f, 0), height: Math.max(b, 0)};
                void 0 !== c && (a.strokeWidth = c, a = w.crisp(a));
                a.fill = "none";
                d && (a.r = d);
                w.rSetter = function (a, g, f) {
                    u(f, {rx: a, ry: a})
                };
                return w.attr(a)
            }, setSize: function (a, g, f) {
                var b = this.alignedObjects, d = b.length;
                this.width =
                    a;
                this.height = g;
                for (this.boxWrapper.animate({width: a, height: g}, {
                    step: function () {
                        this.attr({viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")})
                    }, duration: K(f, !0) ? void 0 : 0
                }); d--;)b[d].align()
            }, g: function (a) {
                var g = this.createElement("g");
                return a ? g.attr({"class": "highcharts-" + a}) : g
            }, image: function (a, g, f, d, c) {
                var w = {preserveAspectRatio: "none"};
                1 < arguments.length && b(w, {x: g, y: f, width: d, height: c});
                w = this.createElement("image").attr(w);
                w.element.setAttributeNS ? w.element.setAttributeNS("http://www.w3.org/1999/xlink",
                    "href", a) : w.element.setAttribute("hc-svg-href", a);
                return w
            }, symbol: function (a, g, f, d, c, q) {
                var w = this, D, y = this.symbols[a], m = k(g) && y && this.symbols[a](Math.round(g), Math.round(f), d, c, q), x = /^url\((.*?)\)$/, G, r;
                y ? (D = this.path(m), D.attr("fill", "none"), b(D, {
                    symbolName: a,
                    x: g,
                    y: f,
                    width: d,
                    height: c
                }), q && b(D, q)) : x.test(a) && (G = a.match(x)[1], D = this.image(G), D.imgwidth = K(R[G] && R[G].width, q && q.width), D.imgheight = K(R[G] && R[G].height, q && q.height), r = function () {
                    D.attr({width: D.width, height: D.height})
                }, H(["width", "height"],
                    function (a) {
                        D[a + "Setter"] = function (a, g) {
                            var f = {}, b = this["img" + g], d = "width" === g ? "translateX" : "translateY";
                            this[g] = a;
                            k(b) && (this.element && this.element.setAttribute(g, b), this.alignByTranslate || (f[d] = ((this[g] || 0) - b) / 2, this.attr(f)))
                        }
                    }), k(g) && D.attr({
                    x: g,
                    y: f
                }), D.isImg = !0, k(D.imgwidth) && k(D.imgheight) ? r() : (D.attr({width: 0, height: 0}), l("img", {
                    onload: function () {
                        var a = h[w.chartIndex];
                        0 === this.width && (t(this, {position: "absolute", top: "-999em"}), p.body.appendChild(this));
                        R[G] = {width: this.width, height: this.height};
                        D.imgwidth = this.width;
                        D.imgheight = this.height;
                        D.element && r();
                        this.parentNode && this.parentNode.removeChild(this);
                        w.imgCount--;
                        if (!w.imgCount && a && a.onload)a.onload()
                    }, src: G
                }), this.imgCount++));
                return D
            }, symbols: {
                circle: function (a, g, f, b) {
                    return this.arc(a + f / 2, g + b / 2, f / 2, b / 2, {start: 0, end: 2 * Math.PI, open: !1})
                }, square: function (a, g, f, b) {
                    return ["M", a, g, "L", a + f, g, a + f, g + b, a, g + b, "Z"]
                }, triangle: function (a, g, f, b) {
                    return ["M", a + f / 2, g, "L", a + f, g + b, a, g + b, "Z"]
                }, "triangle-down": function (a, g, f, b) {
                    return ["M", a, g, "L", a + f,
                        g, a + f / 2, g + b, "Z"]
                }, diamond: function (a, g, f, b) {
                    return ["M", a + f / 2, g, "L", a + f, g + b / 2, a + f / 2, g + b, a, g + b / 2, "Z"]
                }, arc: function (a, g, f, b, d) {
                    var c = d.start, w = d.r || f, q = d.r || b || f, D = d.end - .001;
                    f = d.innerR;
                    b = d.open;
                    var y = Math.cos(c), m = Math.sin(c), x = Math.cos(D), D = Math.sin(D);
                    d = d.end - c < Math.PI ? 0 : 1;
                    w = ["M", a + w * y, g + q * m, "A", w, q, 0, d, 1, a + w * x, g + q * D];
                    k(f) && w.push(b ? "M" : "L", a + f * x, g + f * D, "A", f, f, 0, d, 0, a + f * y, g + f * m);
                    w.push(b ? "" : "Z");
                    return w
                }, callout: function (a, g, f, b, d) {
                    var c = Math.min(d && d.r || 0, f, b), q = c + 6, D = d && d.anchorX;
                    d = d && d.anchorY;
                    var w;
                    w = ["M", a + c, g, "L", a + f - c, g, "C", a + f, g, a + f, g, a + f, g + c, "L", a + f, g + b - c, "C", a + f, g + b, a + f, g + b, a + f - c, g + b, "L", a + c, g + b, "C", a, g + b, a, g + b, a, g + b - c, "L", a, g + c, "C", a, g, a, g, a + c, g];
                    D && D > f ? d > g + q && d < g + b - q ? w.splice(13, 3, "L", a + f, d - 6, a + f + 6, d, a + f, d + 6, a + f, g + b - c) : w.splice(13, 3, "L", a + f, b / 2, D, d, a + f, b / 2, a + f, g + b - c) : D && 0 > D ? d > g + q && d < g + b - q ? w.splice(33, 3, "L", a, d + 6, a - 6, d, a, d - 6, a, g + c) : w.splice(33, 3, "L", a, b / 2, D, d, a, b / 2, a, g + c) : d && d > b && D > a + q && D < a + f - q ? w.splice(23, 3, "L", D + 6, g + b, D, g + b + 6, D - 6, g + b, a + c, g + b) : d && 0 > d && D > a + q && D < a + f - q && w.splice(3,
                        3, "L", D - 6, g, D, g - 6, D + 6, g, f - c, g);
                    return w
                }
            }, clipRect: function (g, f, b, d) {
                var c = a.uniqueKey(), q = this.createElement("clipPath").attr({id: c}).add(this.defs);
                g = this.rect(g, f, b, d, 0).add(q);
                g.id = c;
                g.clipPath = q;
                g.count = 0;
                return g
            }, text: function (a, g, f, b) {
                var d = !S && this.forExport, c = {};
                if (b && (this.allowHTML || !this.forExport))return this.html(a, g, f);
                c.x = Math.round(g || 0);
                f && (c.y = Math.round(f));
                if (a || 0 === a)c.text = a;
                a = this.createElement("text").attr(c);
                d && a.css({position: "absolute"});
                b || (a.xSetter = function (a, g, f) {
                    var b =
                        f.getElementsByTagName("tspan"), d, c = f.getAttribute(g), q;
                    for (q = 0; q < b.length; q++)d = b[q], d.getAttribute(g) === c && d.setAttribute(g, a);
                    f.setAttribute(g, a)
                });
                return a
            }, fontMetrics: function (a, g) {
                a = a || g && g.style && g.style.fontSize || this.style && this.style.fontSize;
                a = /px/.test(a) ? L(a) : /em/.test(a) ? parseFloat(a) * (g ? this.fontMetrics(null, g.parentNode).f : 16) : 12;
                g = 24 > a ? a + 3 : Math.round(1.2 * a);
                return {h: g, b: Math.round(.8 * g), f: a}
            }, rotCorr: function (a, g, f) {
                var b = a;
                g && f && (b = Math.max(b * Math.cos(g * e), 4));
                return {
                    x: -a / 3 * Math.sin(g *
                        e), y: b
                }
            }, label: function (f, d, c, q, D, y, m, G, r) {
                var w = this, e = w.g("button" !== r && "label"), v = e.text = w.text("", 0, 0, m).attr({zIndex: 1}), p, l, F = 0, A = 3, h = 0, J, t, S, n, M, K = {}, L, u, O = /^url\((.*?)\)$/.test(q), R = O, P, Q, N, U;
                r && e.addClass("highcharts-" + r);
                R = O;
                P = function () {
                    return (L || 0) % 2 / 2
                };
                Q = function () {
                    var a = v.element.style, g = {};
                    l = (void 0 === J || void 0 === t || M) && k(v.textStr) && v.getBBox();
                    e.width = (J || l.width || 0) + 2 * A + h;
                    e.height = (t || l.height || 0) + 2 * A;
                    u = A + w.fontMetrics(a && a.fontSize, v).b;
                    R && (p || (e.box = p = w.symbols[q] || O ? w.symbol(q) :
                        w.rect(), p.addClass(("button" === r ? "" : "highcharts-label-box") + (r ? " highcharts-" + r + "-box" : "")), p.add(e), a = P(), g.x = a, g.y = (G ? -u : 0) + a), g.width = Math.round(e.width), g.height = Math.round(e.height), p.attr(b(g, K)), K = {})
                };
                N = function () {
                    var a = h + A, g;
                    g = G ? 0 : u;
                    k(J) && l && ("center" === M || "right" === M) && (a += {center: .5, right: 1}[M] * (J - l.width));
                    if (a !== v.x || g !== v.y)v.attr("x", a), void 0 !== g && v.attr("y", g);
                    v.x = a;
                    v.y = g
                };
                U = function (a, g) {
                    p ? p.attr(a, g) : K[a] = g
                };
                e.onAdd = function () {
                    v.add(e);
                    e.attr({text: f || 0 === f ? f : "", x: d, y: c});
                    p && k(D) &&
                    e.attr({anchorX: D, anchorY: y})
                };
                e.widthSetter = function (g) {
                    J = a.isNumber(g) ? g : null
                };
                e.heightSetter = function (a) {
                    t = a
                };
                e["text-alignSetter"] = function (a) {
                    M = a
                };
                e.paddingSetter = function (a) {
                    k(a) && a !== A && (A = e.padding = a, N())
                };
                e.paddingLeftSetter = function (a) {
                    k(a) && a !== h && (h = a, N())
                };
                e.alignSetter = function (a) {
                    a = {left: 0, center: .5, right: 1}[a];
                    a !== F && (F = a, l && e.attr({x: S}))
                };
                e.textSetter = function (a) {
                    void 0 !== a && v.textSetter(a);
                    Q();
                    N()
                };
                e["stroke-widthSetter"] = function (a, g) {
                    a && (R = !0);
                    L = this["stroke-width"] = a;
                    U(g, a)
                };
                e.strokeSetter = e.fillSetter = e.rSetter = function (a, g) {
                    "fill" === g && a && (R = !0);
                    U(g, a)
                };
                e.anchorXSetter = function (a, g) {
                    D = a;
                    U(g, Math.round(a) - P() - S)
                };
                e.anchorYSetter = function (a, g) {
                    y = a;
                    U(g, a - n)
                };
                e.xSetter = function (a) {
                    e.x = a;
                    F && (a -= F * ((J || l.width) + 2 * A));
                    S = Math.round(a);
                    e.attr("translateX", S)
                };
                e.ySetter = function (a) {
                    n = e.y = Math.round(a);
                    e.attr("translateY", n)
                };
                var W = e.css;
                return b(e, {
                    css: function (a) {
                        if (a) {
                            var g = {};
                            a = x(a);
                            H(e.textProps, function (f) {
                                void 0 !== a[f] && (g[f] = a[f], delete a[f])
                            });
                            v.css(g)
                        }
                        return W.call(e,
                            a)
                    }, getBBox: function () {
                        return {width: l.width + 2 * A, height: l.height + 2 * A, x: l.x - A, y: l.y - A}
                    }, shadow: function (a) {
                        a && (Q(), p && p.shadow(a));
                        return e
                    }, destroy: function () {
                        g(e.element, "mouseenter");
                        g(e.element, "mouseleave");
                        v && (v = v.destroy());
                        p && (p = p.destroy());
                        B.prototype.destroy.call(e);
                        e = w = Q = N = U = null
                    }
                })
            }
        };
        a.Renderer = z
    })(I);
    (function (a) {
        var B = a.attr, z = a.createElement, C = a.css, E = a.defined, u = a.each, h = a.extend, n = a.isFirefox, t = a.isMS, l = a.isWebKit, k = a.pInt, e = a.SVGRenderer, c = a.win, p = a.wrap;
        h(a.SVGElement.prototype,
            {
                htmlCss: function (a) {
                    var b = this.element;
                    if (b = a && "SPAN" === b.tagName && a.width)delete a.width, this.textWidth = b, this.updateTransform();
                    a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");
                    this.styles = h(this.styles, a);
                    C(this.element, a);
                    return this
                }, htmlGetBBox: function () {
                var a = this.element;
                "text" === a.nodeName && (a.style.position = "absolute");
                return {x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight}
            }, htmlUpdateTransform: function () {
                if (this.added) {
                    var a = this.renderer,
                        b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, p = this.y || 0, v = this.textAlign || "left", f = {
                            left: 0,
                            center: .5,
                            right: 1
                        }[v], y = this.styles;
                    C(b, {marginLeft: c, marginTop: d});
                    this.shadows && u(this.shadows, function (a) {
                        C(a, {marginLeft: c + 1, marginTop: d + 1})
                    });
                    this.inverted && u(b.childNodes, function (f) {
                        a.invertChild(f, b)
                    });
                    if ("SPAN" === b.tagName) {
                        var G = this.rotation, F = k(this.textWidth), q = y && y.whiteSpace, x = [G, v, b.innerHTML, this.textWidth, this.textAlign].join();
                        x !== this.cTT && (y = a.fontMetrics(b.style.fontSize).b,
                        E(G) && this.setSpanRotation(G, f, y), C(b, {
                            width: "",
                            whiteSpace: q || "nowrap"
                        }), b.offsetWidth > F && /[ \-]/.test(b.textContent || b.innerText) && C(b, {
                            width: F + "px",
                            display: "block",
                            whiteSpace: q || "normal"
                        }), this.getSpanCorrection(b.offsetWidth, y, f, G, v));
                        C(b, {left: e + (this.xCorr || 0) + "px", top: p + (this.yCorr || 0) + "px"});
                        l && (y = b.offsetHeight);
                        this.cTT = x
                    }
                } else this.alignOnAdd = !0
            }, setSpanRotation: function (a, b, e) {
                var d = {}, m = t ? "-ms-transform" : l ? "-webkit-transform" : n ? "MozTransform" : c.opera ? "-o-transform" : "";
                d[m] = d.transform =
                    "rotate(" + a + "deg)";
                d[m + (n ? "Origin" : "-origin")] = d.transformOrigin = 100 * b + "% " + e + "px";
                C(this.element, d)
            }, getSpanCorrection: function (a, b, c) {
                this.xCorr = -a * c;
                this.yCorr = -b
            }
            });
        h(e.prototype, {
            html: function (a, b, c) {
                var d = this.createElement("span"), e = d.element, m = d.renderer, v = m.isSVG, f = function (a, f) {
                    u(["opacity", "visibility"], function (b) {
                        p(a, b + "Setter", function (a, b, d, c) {
                            a.call(this, b, d, c);
                            f[d] = b
                        })
                    })
                };
                d.textSetter = function (a) {
                    a !== e.innerHTML && delete this.bBox;
                    e.innerHTML = this.textStr = a;
                    d.htmlUpdateTransform()
                };
                v && f(d, d.element.style);
                d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function (a, f) {
                    "align" === f && (f = "textAlign");
                    d[f] = a;
                    d.htmlUpdateTransform()
                };
                d.attr({text: a, x: Math.round(b), y: Math.round(c)}).css({
                    fontFamily: this.style.fontFamily,
                    fontSize: this.style.fontSize,
                    position: "absolute"
                });
                e.style.whiteSpace = "nowrap";
                d.css = d.htmlCss;
                v && (d.add = function (a) {
                    var b, c = m.box.parentNode, q = [];
                    if (this.parentGroup = a) {
                        if (b = a.div, !b) {
                            for (; a;)q.push(a), a = a.parentGroup;
                            u(q.reverse(), function (a) {
                                var y, e = B(a.element,
                                    "class");
                                e && (e = {className: e});
                                b = a.div = a.div || z("div", e, {
                                        position: "absolute",
                                        left: (a.translateX || 0) + "px",
                                        top: (a.translateY || 0) + "px",
                                        display: a.display,
                                        opacity: a.opacity,
                                        pointerEvents: a.styles && a.styles.pointerEvents
                                    }, b || c);
                                y = b.style;
                                h(a, {
                                    on: function () {
                                        d.on.apply({element: q[0].div}, arguments);
                                        return a
                                    }, translateXSetter: function (f, g) {
                                        y.left = f + "px";
                                        a[g] = f;
                                        a.doTransform = !0
                                    }, translateYSetter: function (f, g) {
                                        y.top = f + "px";
                                        a[g] = f;
                                        a.doTransform = !0
                                    }
                                });
                                f(a, y)
                            })
                        }
                    } else b = c;
                    b.appendChild(e);
                    d.added = !0;
                    d.alignOnAdd &&
                    d.htmlUpdateTransform();
                    return d
                });
                return d
            }
        })
    })(I);
    (function (a) {
        var B, z, C = a.createElement, E = a.css, u = a.defined, h = a.deg2rad, n = a.discardElement, t = a.doc, l = a.each, k = a.erase, e = a.extend;
        B = a.extendClass;
        var c = a.isArray, p = a.isNumber, H = a.isObject, b = a.merge;
        z = a.noop;
        var m = a.pick, d = a.pInt, r = a.SVGElement, A = a.SVGRenderer, v = a.win;
        a.svg || (z = {
            docMode8: t && 8 === t.documentMode, init: function (a, b) {
                var f = ["\x3c", b, ' filled\x3d"f" stroked\x3d"f"'], d = ["position: ", "absolute", ";"], c = "div" === b;
                ("shape" === b || c) && d.push("left:0;top:0;width:1px;height:1px;");
                d.push("visibility: ", c ? "hidden" : "visible");
                f.push(' style\x3d"', d.join(""), '"/\x3e');
                b && (f = c || "span" === b || "img" === b ? f.join("") : a.prepVML(f), this.element = C(f));
                this.renderer = a
            }, add: function (a) {
                var f = this.renderer, b = this.element, d = f.box, c = a && a.inverted, d = a ? a.element || a : d;
                a && (this.parentGroup = a);
                c && f.invertChild(b, d);
                d.appendChild(b);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                if (this.onAdd)this.onAdd();
                this.className && this.attr("class", this.className);
                return this
            },
            updateTransform: r.prototype.htmlUpdateTransform, setSpanRotation: function () {
                var a = this.rotation, b = Math.cos(a * h), d = Math.sin(a * h);
                E(this.element, {filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11\x3d", b, ", M12\x3d", -d, ", M21\x3d", d, ", M22\x3d", b, ", sizingMethod\x3d'auto expand')"].join("") : "none"})
            }, getSpanCorrection: function (a, b, d, c, q) {
                var f = c ? Math.cos(c * h) : 1, e = c ? Math.sin(c * h) : 0, y = m(this.elemHeight, this.element.offsetHeight), r;
                this.xCorr = 0 > f && -a;
                this.yCorr = 0 > e && -y;
                r = 0 > f * e;
                this.xCorr += e * b * (r ? 1 -
                    d : d);
                this.yCorr -= f * b * (c ? r ? d : 1 - d : 1);
                q && "left" !== q && (this.xCorr -= a * d * (0 > f ? -1 : 1), c && (this.yCorr -= y * d * (0 > e ? -1 : 1)), E(this.element, {textAlign: q}))
            }, pathToVML: function (a) {
                for (var f = a.length, b = []; f--;)p(a[f]) ? b[f] = Math.round(10 * a[f]) - 5 : "Z" === a[f] ? b[f] = "x" : (b[f] = a[f], !a.isArc || "wa" !== a[f] && "at" !== a[f] || (b[f + 5] === b[f + 7] && (b[f + 7] += a[f + 7] > a[f + 5] ? 1 : -1), b[f + 6] === b[f + 8] && (b[f + 8] += a[f + 8] > a[f + 6] ? 1 : -1)));
                return b.join(" ") || "x"
            }, clip: function (a) {
                var f = this, b;
                a ? (b = a.members, k(b, f), b.push(f), f.destroyClip = function () {
                    k(b,
                        f)
                }, a = a.getCSS(f)) : (f.destroyClip && f.destroyClip(), a = {clip: f.docMode8 ? "inherit" : "rect(auto)"});
                return f.css(a)
            }, css: r.prototype.htmlCss, safeRemoveChild: function (a) {
                a.parentNode && n(a)
            }, destroy: function () {
                this.destroyClip && this.destroyClip();
                return r.prototype.destroy.apply(this)
            }, on: function (a, b) {
                this.element["on" + a] = function () {
                    var a = v.event;
                    a.target = a.srcElement;
                    b(a)
                };
                return this
            }, cutOffPath: function (a, b) {
                var f;
                a = a.split(/[ ,]/);
                f = a.length;
                if (9 === f || 11 === f)a[f - 4] = a[f - 2] = d(a[f - 2]) - 10 * b;
                return a.join(" ")
            },
            shadow: function (a, b, c) {
                var f = [], q, e = this.element, y = this.renderer, r, v = e.style, g, D = e.path, p, l, G, k;
                D && "string" !== typeof D.value && (D = "x");
                l = D;
                if (a) {
                    G = m(a.width, 3);
                    k = (a.opacity || .15) / G;
                    for (q = 1; 3 >= q; q++)p = 2 * G + 1 - 2 * q, c && (l = this.cutOffPath(D.value, p + .5)), g = ['\x3cshape isShadow\x3d"true" strokeweight\x3d"', p, '" filled\x3d"false" path\x3d"', l, '" coordsize\x3d"10 10" style\x3d"', e.style.cssText, '" /\x3e'], r = C(y.prepVML(g), null, {
                        left: d(v.left) + m(a.offsetX, 1),
                        top: d(v.top) + m(a.offsetY, 1)
                    }), c && (r.cutOff = p + 1), g = ['\x3cstroke color\x3d"',
                        a.color || "#000000", '" opacity\x3d"', k * q, '"/\x3e'], C(y.prepVML(g), null, null, r), b ? b.element.appendChild(r) : e.parentNode.insertBefore(r, e), f.push(r);
                    this.shadows = f
                }
                return this
            }, updateShadows: z, setAttr: function (a, b) {
                this.docMode8 ? this.element[a] = b : this.element.setAttribute(a, b)
            }, classSetter: function (a) {
                (this.added ? this.element : this).className = a
            }, dashstyleSetter: function (a, b, d) {
                (d.getElementsByTagName("stroke")[0] || C(this.renderer.prepVML(["\x3cstroke/\x3e"]), null, null, d))[b] = a || "solid";
                this[b] = a
            }, dSetter: function (a,
                                  b, d) {
                var f = this.shadows;
                a = a || [];
                this.d = a.join && a.join(" ");
                d.path = a = this.pathToVML(a);
                if (f)for (d = f.length; d--;)f[d].path = f[d].cutOff ? this.cutOffPath(a, f[d].cutOff) : a;
                this.setAttr(b, a)
            }, fillSetter: function (a, b, d) {
                var f = d.nodeName;
                "SPAN" === f ? d.style.color = a : "IMG" !== f && (d.filled = "none" !== a, this.setAttr("fillcolor", this.renderer.color(a, d, b, this)))
            }, "fill-opacitySetter": function (a, b, d) {
                C(this.renderer.prepVML(["\x3c", b.split("-")[0], ' opacity\x3d"', a, '"/\x3e']), null, null, d)
            }, opacitySetter: z, rotationSetter: function (a,
                                                           b, d) {
                d = d.style;
                this[b] = d[b] = a;
                d.left = -Math.round(Math.sin(a * h) + 1) + "px";
                d.top = Math.round(Math.cos(a * h)) + "px"
            }, strokeSetter: function (a, b, d) {
                this.setAttr("strokecolor", this.renderer.color(a, d, b, this))
            }, "stroke-widthSetter": function (a, b, d) {
                d.stroked = !!a;
                this[b] = a;
                p(a) && (a += "px");
                this.setAttr("strokeweight", a)
            }, titleSetter: function (a, b) {
                this.setAttr(b, a)
            }, visibilitySetter: function (a, b, d) {
                "inherit" === a && (a = "visible");
                this.shadows && l(this.shadows, function (f) {
                    f.style[b] = a
                });
                "DIV" === d.nodeName && (a = "hidden" ===
                a ? "-999em" : 0, this.docMode8 || (d.style[b] = a ? "visible" : "hidden"), b = "top");
                d.style[b] = a
            }, xSetter: function (a, b, d) {
                this[b] = a;
                "x" === b ? b = "left" : "y" === b && (b = "top");
                this.updateClipping ? (this[b] = a, this.updateClipping()) : d.style[b] = a
            }, zIndexSetter: function (a, b, d) {
                d.style[b] = a
            }
        }, z["stroke-opacitySetter"] = z["fill-opacitySetter"], a.VMLElement = z = B(r, z), z.prototype.ySetter = z.prototype.widthSetter = z.prototype.heightSetter = z.prototype.xSetter, z = {
            Element: z, isIE8: -1 < v.navigator.userAgent.indexOf("MSIE 8.0"), init: function (a,
                                                                                               b, d) {
                var f, c;
                this.alignedObjects = [];
                f = this.createElement("div").css({position: "relative"});
                c = f.element;
                a.appendChild(f.element);
                this.isVML = !0;
                this.box = c;
                this.boxWrapper = f;
                this.gradients = {};
                this.cache = {};
                this.cacheKeys = [];
                this.imgCount = 0;
                this.setSize(b, d, !1);
                if (!t.namespaces.hcv) {
                    t.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    try {
                        t.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    } catch (x) {
                        t.styleSheets[0].cssText +=
                            "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    }
                }
            }, isHidden: function () {
                return !this.box.offsetWidth
            }, clipRect: function (a, b, d, c) {
                var f = this.createElement(), m = H(a);
                return e(f, {
                    members: [],
                    count: 0,
                    left: (m ? a.x : a) + 1,
                    top: (m ? a.y : b) + 1,
                    width: (m ? a.width : d) - 1,
                    height: (m ? a.height : c) - 1,
                    getCSS: function (a) {
                        var b = a.element, d = b.nodeName, g = a.inverted, f = this.top - ("shape" === d ? b.offsetTop : 0), c = this.left, b = c + this.width, q = f + this.height, f = {
                            clip: "rect(" + Math.round(g ?
                                c : f) + "px," + Math.round(g ? q : b) + "px," + Math.round(g ? b : q) + "px," + Math.round(g ? f : c) + "px)"
                        };
                        !g && a.docMode8 && "DIV" === d && e(f, {width: b + "px", height: q + "px"});
                        return f
                    },
                    updateClipping: function () {
                        l(f.members, function (a) {
                            a.element && a.css(f.getCSS(a))
                        })
                    }
                })
            }, color: function (b, d, c, e) {
                var f = this, m, r = /^rgba/, v, p, g = "none";
                b && b.linearGradient ? p = "gradient" : b && b.radialGradient && (p = "pattern");
                if (p) {
                    var D, y, k = b.linearGradient || b.radialGradient, A, h, w, G, t, F = "";
                    b = b.stops;
                    var n, H = [], u = function () {
                        v = ['\x3cfill colors\x3d"' + H.join(",") +
                        '" opacity\x3d"', w, '" o:opacity2\x3d"', h, '" type\x3d"', p, '" ', F, 'focus\x3d"100%" method\x3d"any" /\x3e'];
                        C(f.prepVML(v), null, null, d)
                    };
                    A = b[0];
                    n = b[b.length - 1];
                    0 < A[0] && b.unshift([0, A[1]]);
                    1 > n[0] && b.push([1, n[1]]);
                    l(b, function (g, b) {
                        r.test(g[1]) ? (m = a.color(g[1]), D = m.get("rgb"), y = m.get("a")) : (D = g[1], y = 1);
                        H.push(100 * g[0] + "% " + D);
                        b ? (w = y, G = D) : (h = y, t = D)
                    });
                    if ("fill" === c)if ("gradient" === p)c = k.x1 || k[0] || 0, b = k.y1 || k[1] || 0, A = k.x2 || k[2] || 0, k = k.y2 || k[3] || 0, F = 'angle\x3d"' + (90 - 180 * Math.atan((k - b) / (A - c)) / Math.PI) + '"',
                        u(); else {
                        var g = k.r, z = 2 * g, B = 2 * g, E = k.cx, V = k.cy, I = d.radialReference, T, g = function () {
                            I && (T = e.getBBox(), E += (I[0] - T.x) / T.width - .5, V += (I[1] - T.y) / T.height - .5, z *= I[2] / T.width, B *= I[2] / T.height);
                            F = 'src\x3d"' + a.getOptions().global.VMLRadialGradientURL + '" size\x3d"' + z + "," + B + '" origin\x3d"0.5,0.5" position\x3d"' + E + "," + V + '" color2\x3d"' + t + '" ';
                            u()
                        };
                        e.added ? g() : e.onAdd = g;
                        g = G
                    } else g = D
                } else r.test(b) && "IMG" !== d.tagName ? (m = a.color(b), e[c + "-opacitySetter"](m.get("a"), c, d), g = m.get("rgb")) : (g = d.getElementsByTagName(c),
                g.length && (g[0].opacity = 1, g[0].type = "solid"), g = b);
                return g
            }, prepVML: function (a) {
                var b = this.isIE8;
                a = a.join("");
                b ? (a = a.replace("/\x3e", ' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'), a = -1 === a.indexOf('style\x3d"') ? a.replace("/\x3e", ' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e') : a.replace('style\x3d"', 'style\x3d"display:inline-block;behavior:url(#default#VML);')) : a = a.replace("\x3c", "\x3chcv:");
                return a
            }, text: A.prototype.html, path: function (a) {
                var b = {coordsize: "10 10"};
                c(a) ? b.d =
                    a : H(a) && e(b, a);
                return this.createElement("shape").attr(b)
            }, circle: function (a, b, d) {
                var f = this.symbol("circle");
                H(a) && (d = a.r, b = a.y, a = a.x);
                f.isCircle = !0;
                f.r = d;
                return f.attr({x: a, y: b})
            }, g: function (a) {
                var b;
                a && (b = {className: "highcharts-" + a, "class": "highcharts-" + a});
                return this.createElement("div").attr(b)
            }, image: function (a, b, d, c, q) {
                var f = this.createElement("img").attr({src: a});
                1 < arguments.length && f.attr({x: b, y: d, width: c, height: q});
                return f
            }, createElement: function (a) {
                return "rect" === a ? this.symbol(a) : A.prototype.createElement.call(this,
                    a)
            }, invertChild: function (a, b) {
                var f = this;
                b = b.style;
                var c = "IMG" === a.tagName && a.style;
                E(a, {
                    flip: "x",
                    left: d(b.width) - (c ? d(c.top) : 1),
                    top: d(b.height) - (c ? d(c.left) : 1),
                    rotation: -90
                });
                l(a.childNodes, function (b) {
                    f.invertChild(b, a)
                })
            }, symbols: {
                arc: function (a, b, d, c, q) {
                    var f = q.start, e = q.end, m = q.r || d || c;
                    d = q.innerR;
                    c = Math.cos(f);
                    var r = Math.sin(f), g = Math.cos(e), D = Math.sin(e);
                    if (0 === e - f)return ["x"];
                    f = ["wa", a - m, b - m, a + m, b + m, a + m * c, b + m * r, a + m * g, b + m * D];
                    q.open && !d && f.push("e", "M", a, b);
                    f.push("at", a - d, b - d, a + d, b + d, a + d * g,
                        b + d * D, a + d * c, b + d * r, "x", "e");
                    f.isArc = !0;
                    return f
                }, circle: function (a, b, d, c, q) {
                    q && u(q.r) && (d = c = 2 * q.r);
                    q && q.isCircle && (a -= d / 2, b -= c / 2);
                    return ["wa", a, b, a + d, b + c, a + d, b + c / 2, a + d, b + c / 2, "e"]
                }, rect: function (a, b, d, c, q) {
                    return A.prototype.symbols[u(q) && q.r ? "callout" : "square"].call(0, a, b, d, c, q)
                }
            }
        }, a.VMLRenderer = B = function () {
            this.init.apply(this, arguments)
        }, B.prototype = b(A.prototype, z), a.Renderer = B);
        A.prototype.measureSpanWidth = function (a, b) {
            var d = t.createElement("span");
            a = t.createTextNode(a);
            d.appendChild(a);
            E(d,
                b);
            this.box.appendChild(d);
            b = d.offsetWidth;
            n(d);
            return b
        }
    })(I);
    (function (a) {
        function B() {
            var l = a.defaultOptions.global, k = t.moment;
            if (l.timezone) {
                if (k)return function (a) {
                    return -k.tz(a, l.timezone).utcOffset()
                };
                a.error(25)
            }
            return l.useUTC && l.getTimezoneOffset
        }

        function z() {
            var l = a.defaultOptions.global, k, e = l.useUTC, c = e ? "getUTC" : "get", p = e ? "setUTC" : "set";
            a.Date = k = l.Date || t.Date;
            k.hcTimezoneOffset = e && l.timezoneOffset;
            k.hcGetTimezoneOffset = B();
            k.hcMakeTime = function (a, b, c, d, r, p) {
                var m;
                e ? (m = k.UTC.apply(0, arguments),
                    m += u(m)) : m = (new k(a, b, n(c, 1), n(d, 0), n(r, 0), n(p, 0))).getTime();
                return m
            };
            E("Minutes Hours Day Date Month FullYear".split(" "), function (a) {
                k["hcGet" + a] = c + a
            });
            E("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "), function (a) {
                k["hcSet" + a] = p + a
            })
        }

        var C = a.color, E = a.each, u = a.getTZOffset, h = a.merge, n = a.pick, t = a.win;
        a.defaultOptions = {
            colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
            lang: {
                loading: "Loading...",
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                decimalPoint: ".",
                numericSymbols: "kMGTPE".split(""),
                resetZoom: "Reset zoom",
                resetZoomTitle: "Reset zoom level 1:1",
                thousandsSep: " "
            },
            global: {useUTC: !0, VMLRadialGradientURL: "http://code.highcharts.com/5.0.9/gfx/vml-radial-gradient.png"},
            chart: {
                borderRadius: 0,
                defaultSeriesType: "line",
                ignoreHiddenSeries: !0,
                spacing: [10, 10, 15, 10],
                resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}},
                width: null,
                height: null,
                borderColor: "#335cad",
                backgroundColor: "#ffffff",
                plotBorderColor: "#cccccc"
            },
            title: {text: "Chart title", align: "center", margin: 15, widthAdjust: -44},
            subtitle: {text: "", align: "center", widthAdjust: -44},
            plotOptions: {},
            labels: {style: {position: "absolute", color: "#333333"}},
            legend: {
                enabled: !0,
                align: "center",
                layout: "horizontal",
                labelFormatter: function () {
                    return this.name
                },
                borderColor: "#999999",
                borderRadius: 0,
                navigation: {activeColor: "#003399", inactiveColor: "#cccccc"},
                itemStyle: {color: "#333333", fontSize: "12px", fontWeight: "bold"},
                itemHoverStyle: {color: "#000000"},
                itemHiddenStyle: {color: "#cccccc"},
                shadow: !1,
                itemCheckboxStyle: {position: "absolute", width: "13px", height: "13px"},
                squareSymbol: !0,
                symbolPadding: 5,
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                title: {style: {fontWeight: "bold"}}
            },
            loading: {
                labelStyle: {
                    fontWeight: "bold", position: "relative",
                    top: "45%"
                }, style: {position: "absolute", backgroundColor: "#ffffff", opacity: .5, textAlign: "center"}
            },
            tooltip: {
                enabled: !0,
                animation: a.svg,
                borderRadius: 3,
                dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                    second: "%A, %b %e, %H:%M:%S",
                    minute: "%A, %b %e, %H:%M",
                    hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y",
                    week: "Week from %A, %b %e, %Y",
                    month: "%B %Y",
                    year: "%Y"
                },
                footerFormat: "",
                padding: 8,
                snap: a.isTouchDevice ? 25 : 10,
                backgroundColor: C("#f7f7f7").setOpacity(.85).get(),
                borderWidth: 1,
                headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
                shadow: !0,
                style: {
                    color: "#333333",
                    cursor: "default",
                    fontSize: "12px",
                    pointerEvents: "none",
                    whiteSpace: "nowrap"
                }
            },
            credits: {
                enabled: !0,
                href: "http://www.highcharts.com",
                position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
                style: {cursor: "pointer", color: "#999999", fontSize: "9px"},
                text: "Highcharts.com"
            }
        };
        a.setOptions = function (l) {
            a.defaultOptions = h(!0, a.defaultOptions, l);
            z();
            return a.defaultOptions
        };
        a.getOptions = function () {
            return a.defaultOptions
        };
        a.defaultPlotOptions = a.defaultOptions.plotOptions;
        z()
    })(I);
    (function (a) {
        var B = a.arrayMax, z = a.arrayMin, C = a.defined, E = a.destroyObjectProperties, u = a.each, h = a.erase, n = a.merge, t = a.pick;
        a.PlotLineOrBand = function (a, k) {
            this.axis = a;
            k && (this.options = k, this.id = k.id)
        };
        a.PlotLineOrBand.prototype = {
            render: function () {
                var a = this, k = a.axis, e = k.horiz, c = a.options, p = c.label, h = a.label, b = c.to, m = c.from, d = c.value, r = C(m) && C(b), A = C(d), v = a.svgElem, f = !v,
                    y = [], G, F = c.color, q = t(c.zIndex, 0), x = c.events, y = {"class": "highcharts-plot-" + (r ? "band " : "line ") + (c.className || "")}, J = {}, u = k.chart.renderer, L = r ? "bands" : "lines", g = k.log2lin;
                k.isLog && (m = g(m), b = g(b), d = g(d));
                A ? (y = {
                    stroke: F,
                    "stroke-width": c.width
                }, c.dashStyle && (y.dashstyle = c.dashStyle)) : r && (F && (y.fill = F), c.borderWidth && (y.stroke = c.borderColor, y["stroke-width"] = c.borderWidth));
                J.zIndex = q;
                L += "-" + q;
                (F = k[L]) || (k[L] = F = u.g("plot-" + L).attr(J).add());
                f && (a.svgElem = v = u.path().attr(y).add(F));
                if (A)y = k.getPlotLinePath(d,
                    v.strokeWidth()); else if (r)y = k.getPlotBandPath(m, b, c); else return;
                if (f && y && y.length) {
                    if (v.attr({d: y}), x)for (G in c = function (b) {
                        v.on(b, function (g) {
                            x[b].apply(a, [g])
                        })
                    }, x)c(G)
                } else v && (y ? (v.show(), v.animate({d: y})) : (v.hide(), h && (a.label = h = h.destroy())));
                p && C(p.text) && y && y.length && 0 < k.width && 0 < k.height && !y.flat ? (p = n({
                    align: e && r && "center",
                    x: e ? !r && 4 : 10,
                    verticalAlign: !e && r && "middle",
                    y: e ? r ? 16 : 10 : r ? 6 : -4,
                    rotation: e && !r && 90
                }, p), this.renderLabel(p, y, r, q)) : h && h.hide();
                return a
            }, renderLabel: function (a, k, e, c) {
                var p =
                    this.label, l = this.axis.chart.renderer;
                p || (p = {
                    align: a.textAlign || a.align,
                    rotation: a.rotation,
                    "class": "highcharts-plot-" + (e ? "band" : "line") + "-label " + (a.className || "")
                }, p.zIndex = c, this.label = p = l.text(a.text, 0, 0, a.useHTML).attr(p).add(), p.css(a.style));
                c = [k[1], k[4], e ? k[6] : k[1]];
                k = [k[2], k[5], e ? k[7] : k[2]];
                e = z(c);
                l = z(k);
                p.align(a, !1, {x: e, y: l, width: B(c) - e, height: B(k) - l});
                p.show()
            }, destroy: function () {
                h(this.axis.plotLinesAndBands, this);
                delete this.axis;
                E(this)
            }
        };
        a.AxisPlotLineOrBandExtension = {
            getPlotBandPath: function (a,
                                       k) {
                k = this.getPlotLinePath(k, null, null, !0);
                (a = this.getPlotLinePath(a, null, null, !0)) && k ? (a.flat = a.toString() === k.toString(), a.push(k[4], k[5], k[1], k[2], "z")) : a = null;
                return a
            }, addPlotBand: function (a) {
                return this.addPlotBandOrLine(a, "plotBands")
            }, addPlotLine: function (a) {
                return this.addPlotBandOrLine(a, "plotLines")
            }, addPlotBandOrLine: function (l, k) {
                var e = (new a.PlotLineOrBand(this, l)).render(), c = this.userOptions;
                e && (k && (c[k] = c[k] || [], c[k].push(l)), this.plotLinesAndBands.push(e));
                return e
            }, removePlotBandOrLine: function (a) {
                for (var k =
                    this.plotLinesAndBands, e = this.options, c = this.userOptions, p = k.length; p--;)k[p].id === a && k[p].destroy();
                u([e.plotLines || [], c.plotLines || [], e.plotBands || [], c.plotBands || []], function (c) {
                    for (p = c.length; p--;)c[p].id === a && h(c, c[p])
                })
            }
        }
    })(I);
    (function (a) {
        var B = a.correctFloat, z = a.defined, C = a.destroyObjectProperties, E = a.isNumber, u = a.merge, h = a.pick, n = a.deg2rad;
        a.Tick = function (a, l, k, e) {
            this.axis = a;
            this.pos = l;
            this.type = k || "";
            this.isNew = !0;
            k || e || this.addLabel()
        };
        a.Tick.prototype = {
            addLabel: function () {
                var a = this.axis,
                    l = a.options, k = a.chart, e = a.categories, c = a.names, p = this.pos, n = l.labels, b = a.tickPositions, m = p === b[0], d = p === b[b.length - 1], c = e ? h(e[p], c[p], p) : p, e = this.label, b = b.info, r;
                a.isDatetimeAxis && b && (r = l.dateTimeLabelFormats[b.higherRanks[p] || b.unitName]);
                this.isFirst = m;
                this.isLast = d;
                l = a.labelFormatter.call({
                    axis: a,
                    chart: k,
                    isFirst: m,
                    isLast: d,
                    dateTimeLabelFormat: r,
                    value: a.isLog ? B(a.lin2log(c)) : c
                });
                z(e) ? e && e.attr({text: l}) : (this.labelLength = (this.label = e = z(l) && n.enabled ? k.renderer.text(l, 0, 0, n.useHTML).css(u(n.style)).add(a.labelGroup) :
                        null) && e.getBBox().width, this.rotation = 0)
            }, getLabelSize: function () {
                return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
            }, handleOverflow: function (a) {
                var l = this.axis, k = a.x, e = l.chart.chartWidth, c = l.chart.spacing, p = h(l.labelLeft, Math.min(l.pos, c[3])), c = h(l.labelRight, Math.max(l.pos + l.len, e - c[1])), t = this.label, b = this.rotation, m = {
                    left: 0,
                    center: .5,
                    right: 1
                }[l.labelAlign], d = t.getBBox().width, r = l.getSlotWidth(), A = r, v = 1, f, y = {};
                if (b)0 > b && k - m * d < p ? f = Math.round(k / Math.cos(b * n) - p) : 0 < b && k + m *
                d > c && (f = Math.round((e - k) / Math.cos(b * n))); else if (e = k + (1 - m) * d, k - m * d < p ? A = a.x + A * (1 - m) - p : e > c && (A = c - a.x + A * m, v = -1), A = Math.min(r, A), A < r && "center" === l.labelAlign && (a.x += v * (r - A - m * (r - Math.min(d, A)))), d > A || l.autoRotation && (t.styles || {}).width)f = A;
                f && (y.width = f, (l.options.labels.style || {}).textOverflow || (y.textOverflow = "ellipsis"), t.css(y))
            }, getPosition: function (a, l, k, e) {
                var c = this.axis, p = c.chart, h = e && p.oldChartHeight || p.chartHeight;
                return {
                    x: a ? c.translate(l + k, null, null, e) + c.transB : c.left + c.offset + (c.opposite ?
                    (e && p.oldChartWidth || p.chartWidth) - c.right - c.left : 0),
                    y: a ? h - c.bottom + c.offset - (c.opposite ? c.height : 0) : h - c.translate(l + k, null, null, e) - c.transB
                }
            }, getLabelPosition: function (a, h, k, e, c, p, H, b) {
                var m = this.axis, d = m.transA, r = m.reversed, l = m.staggerLines, v = m.tickRotCorr || {
                        x: 0,
                        y: 0
                    }, f = c.y;
                z(f) || (f = 0 === m.side ? k.rotation ? -8 : -k.getBBox().height : 2 === m.side ? v.y + 8 : Math.cos(k.rotation * n) * (v.y - k.getBBox(!1, 0).height / 2));
                a = a + c.x + v.x - (p && e ? p * d * (r ? -1 : 1) : 0);
                h = h + f - (p && !e ? p * d * (r ? 1 : -1) : 0);
                l && (k = H / (b || 1) % l, m.opposite && (k = l - k -
                    1), h += m.labelOffset / l * k);
                return {x: a, y: Math.round(h)}
            }, getMarkPath: function (a, h, k, e, c, p) {
                return p.crispLine(["M", a, h, "L", a + (c ? 0 : -k), h + (c ? k : 0)], e)
            }, renderGridLine: function (a, h, k) {
                var e = this.axis, c = e.options, p = this.gridLine, l = {}, b = this.pos, m = this.type, d = e.tickmarkOffset, r = e.chart.renderer, A = m ? m + "Grid" : "grid", v = c[A + "LineWidth"], f = c[A + "LineColor"], c = c[A + "LineDashStyle"];
                p || (l.stroke = f, l["stroke-width"] = v, c && (l.dashstyle = c), m || (l.zIndex = 1), a && (l.opacity = 0), this.gridLine = p = r.path().attr(l).addClass("highcharts-" +
                    (m ? m + "-" : "") + "grid-line").add(e.gridGroup));
                if (!a && p && (a = e.getPlotLinePath(b + d, p.strokeWidth() * k, a, !0)))p[this.isNew ? "attr" : "animate"]({
                    d: a,
                    opacity: h
                })
            }, renderMark: function (a, l, k) {
                var e = this.axis, c = e.options, p = e.chart.renderer, n = this.type, b = n ? n + "Tick" : "tick", m = e.tickSize(b), d = this.mark, r = !d, A = a.x;
                a = a.y;
                var v = h(c[b + "Width"], !n && e.isXAxis ? 1 : 0), c = c[b + "Color"];
                m && (e.opposite && (m[0] = -m[0]), r && (this.mark = d = p.path().addClass("highcharts-" + (n ? n + "-" : "") + "tick").add(e.axisGroup), d.attr({
                    stroke: c,
                    "stroke-width": v
                })),
                    d[r ? "attr" : "animate"]({
                        d: this.getMarkPath(A, a, m[0], d.strokeWidth() * k, e.horiz, p),
                        opacity: l
                    }))
            }, renderLabel: function (a, l, k, e) {
                var c = this.axis, p = c.horiz, n = c.options, b = this.label, m = n.labels, d = m.step, r = c.tickmarkOffset, A = !0, v = a.x;
                a = a.y;
                b && E(v) && (b.xy = a = this.getLabelPosition(v, a, b, p, m, r, e, d), this.isFirst && !this.isLast && !h(n.showFirstLabel, 1) || this.isLast && !this.isFirst && !h(n.showLastLabel, 1) ? A = !1 : !p || c.isRadial || m.step || m.rotation || l || 0 === k || this.handleOverflow(a), d && e % d && (A = !1), A && E(a.y) ? (a.opacity = k,
                    b[this.isNew ? "attr" : "animate"](a)) : b.attr("y", -9999), this.isNew = !1)
            }, render: function (a, l, k) {
                var e = this.axis, c = e.horiz, p = this.getPosition(c, this.pos, e.tickmarkOffset, l), n = p.x, b = p.y, e = c && n === e.pos + e.len || !c && b === e.pos ? -1 : 1;
                k = h(k, 1);
                this.isActive = !0;
                this.renderGridLine(l, k, e);
                this.renderMark(p, k, e);
                this.renderLabel(p, l, k, a)
            }, destroy: function () {
                C(this, this.axis)
            }
        }
    })(I);
    (function (a) {
        var B = a.addEvent, z = a.animObject, C = a.arrayMax, E = a.arrayMin, u = a.AxisPlotLineOrBandExtension, h = a.color, n = a.correctFloat, t = a.defaultOptions,
            l = a.defined, k = a.deg2rad, e = a.destroyObjectProperties, c = a.each, p = a.extend, H = a.fireEvent, b = a.format, m = a.getMagnitude, d = a.grep, r = a.inArray, A = a.isArray, v = a.isNumber, f = a.isString, y = a.merge, G = a.normalizeTickInterval, F = a.pick, q = a.PlotLineOrBand, x = a.removeEvent, J = a.splat, K = a.syncTimeout, L = a.Tick;
        a.Axis = function () {
            this.init.apply(this, arguments)
        };
        a.Axis.prototype = {
            defaultOptions: {
                dateTimeLabelFormats: {
                    millisecond: "%H:%M:%S.%L",
                    second: "%H:%M:%S",
                    minute: "%H:%M",
                    hour: "%H:%M",
                    day: "%e. %b",
                    week: "%e. %b",
                    month: "%b '%y",
                    year: "%Y"
                },
                endOnTick: !1,
                labels: {enabled: !0, style: {color: "#666666", cursor: "default", fontSize: "11px"}, x: 0},
                minPadding: .01,
                maxPadding: .01,
                minorTickLength: 2,
                minorTickPosition: "outside",
                startOfWeek: 1,
                startOnTick: !1,
                tickLength: 10,
                tickmarkPlacement: "between",
                tickPixelInterval: 100,
                tickPosition: "outside",
                title: {align: "middle", style: {color: "#666666"}},
                type: "linear",
                minorGridLineColor: "#f2f2f2",
                minorGridLineWidth: 1,
                minorTickColor: "#999999",
                lineColor: "#ccd6eb",
                lineWidth: 1,
                gridLineColor: "#e6e6e6",
                tickColor: "#ccd6eb"
            },
            defaultYAxisOptions: {
                endOnTick: !0,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: {x: -8},
                maxPadding: .05,
                minPadding: .05,
                startOnTick: !0,
                title: {rotation: 270, text: "Values"},
                stackLabels: {
                    enabled: !1, formatter: function () {
                        return a.numberFormat(this.total, -1)
                    }, style: {fontSize: "11px", fontWeight: "bold", color: "#000000", textOutline: "1px contrast"}
                },
                gridLineWidth: 1,
                lineWidth: 0
            },
            defaultLeftAxisOptions: {labels: {x: -15}, title: {rotation: 270}},
            defaultRightAxisOptions: {labels: {x: 15}, title: {rotation: 90}},
            defaultBottomAxisOptions: {
                labels: {
                    autoRotation: [-45],
                    x: 0
                }, title: {rotation: 0}
            },
            defaultTopAxisOptions: {labels: {autoRotation: [-45], x: 0}, title: {rotation: 0}},
            init: function (a, b) {
                var g = b.isX;
                this.chart = a;
                this.horiz = a.inverted ? !g : g;
                this.isXAxis = g;
                this.coll = this.coll || (g ? "xAxis" : "yAxis");
                this.opposite = b.opposite;
                this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
                this.setOptions(b);
                var d = this.options, c = d.type;
                this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
                this.userOptions = b;
                this.minPixelPadding = 0;
                this.reversed = d.reversed;
                this.visible =
                    !1 !== d.visible;
                this.zoomEnabled = !1 !== d.zoomEnabled;
                this.hasNames = "category" === c || !0 === d.categories;
                this.categories = d.categories || this.hasNames;
                this.names = this.names || [];
                this.isLog = "logarithmic" === c;
                this.isDatetimeAxis = "datetime" === c;
                this.positiveValuesOnly = this.isLog && !this.allowNegativeLog;
                this.isLinked = l(d.linkedTo);
                this.ticks = {};
                this.labelEdge = [];
                this.minorTicks = {};
                this.plotLinesAndBands = [];
                this.alternateBands = {};
                this.len = 0;
                this.minRange = this.userMinRange = d.minRange || d.maxZoom;
                this.range = d.range;
                this.offset = d.offset || 0;
                this.stacks = {};
                this.oldStacks = {};
                this.stacksTouched = 0;
                this.min = this.max = null;
                this.crosshair = F(d.crosshair, J(a.options.tooltip.crosshairs)[g ? 0 : 1], !1);
                var f;
                b = this.options.events;
                -1 === r(this, a.axes) && (g ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
                this.series = this.series || [];
                a.inverted && g && void 0 === this.reversed && (this.reversed = !0);
                this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
                for (f in b)B(this, f, b[f]);
                this.lin2log = d.linearToLogConverter ||
                    this.lin2log;
                this.isLog && (this.val2lin = this.log2lin, this.lin2val = this.lin2log)
            },
            setOptions: function (a) {
                this.options = y(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], y(t[this.coll], a))
            },
            defaultLabelFormatter: function () {
                var g = this.axis, d = this.value, c = g.categories, f = this.dateTimeLabelFormat, q = t.lang, e = q.numericSymbols, q = q.numericSymbolMagnitude || 1E3, w = e && e.length,
                    m, r = g.options.labels.format, g = g.isLog ? Math.abs(d) : g.tickInterval;
                if (r)m = b(r, this); else if (c)m = d; else if (f)m = a.dateFormat(f, d); else if (w && 1E3 <= g)for (; w-- && void 0 === m;)c = Math.pow(q, w + 1), g >= c && 0 === 10 * d % c && null !== e[w] && 0 !== d && (m = a.numberFormat(d / c, -1) + e[w]);
                void 0 === m && (m = 1E4 <= Math.abs(d) ? a.numberFormat(d, -1) : a.numberFormat(d, -1, void 0, ""));
                return m
            },
            getSeriesExtremes: function () {
                var a = this, b = a.chart;
                a.hasVisibleSeries = !1;
                a.dataMin = a.dataMax = a.threshold = null;
                a.softThreshold = !a.isXAxis;
                a.buildStacks && a.buildStacks();
                c(a.series, function (g) {
                    if (g.visible || !b.options.chart.ignoreHiddenSeries) {
                        var c = g.options, f = c.threshold, q;
                        a.hasVisibleSeries = !0;
                        a.positiveValuesOnly && 0 >= f && (f = null);
                        if (a.isXAxis)c = g.xData, c.length && (g = E(c), v(g) || g instanceof Date || (c = d(c, function (a) {
                            return v(a)
                        }), g = E(c)), a.dataMin = Math.min(F(a.dataMin, c[0]), g), a.dataMax = Math.max(F(a.dataMax, c[0]), C(c))); else if (g.getExtremes(), q = g.dataMax, g = g.dataMin, l(g) && l(q) && (a.dataMin = Math.min(F(a.dataMin, g), g), a.dataMax = Math.max(F(a.dataMax, q), q)), l(f) && (a.threshold =
                                f), !c.softThreshold || a.positiveValuesOnly)a.softThreshold = !1
                    }
                })
            },
            translate: function (a, b, d, c, f, q) {
                var g = this.linkedParent || this, D = 1, e = 0, m = c ? g.oldTransA : g.transA;
                c = c ? g.oldMin : g.min;
                var r = g.minPixelPadding;
                f = (g.isOrdinal || g.isBroken || g.isLog && f) && g.lin2val;
                m || (m = g.transA);
                d && (D *= -1, e = g.len);
                g.reversed && (D *= -1, e -= D * (g.sector || g.len));
                b ? (a = (a * D + e - r) / m + c, f && (a = g.lin2val(a))) : (f && (a = g.val2lin(a)), a = D * (a - c) * m + e + D * r + (v(q) ? m * q : 0));
                return a
            },
            toPixels: function (a, b) {
                return this.translate(a, !1, !this.horiz, null,
                        !0) + (b ? 0 : this.pos)
            },
            toValue: function (a, b) {
                return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
            },
            getPlotLinePath: function (a, b, d, c, f) {
                var g = this.chart, q = this.left, D = this.top, e, m, r = d && g.oldChartHeight || g.chartHeight, p = d && g.oldChartWidth || g.chartWidth, x;
                e = this.transB;
                var k = function (a, b, g) {
                    if (a < b || a > g)c ? a = Math.min(Math.max(b, a), g) : x = !0;
                    return a
                };
                f = F(f, this.translate(a, null, null, d));
                a = d = Math.round(f + e);
                e = m = Math.round(r - f - e);
                v(f) ? this.horiz ? (e = D, m = r - this.bottom, a = d = k(a, q, q + this.width)) : (a = q, d =
                    p - this.right, e = m = k(e, D, D + this.height)) : x = !0;
                return x && !c ? null : g.renderer.crispLine(["M", a, e, "L", d, m], b || 1)
            },
            getLinearTickPositions: function (a, b, d) {
                var g, c = n(Math.floor(b / a) * a);
                d = n(Math.ceil(d / a) * a);
                var f = [];
                if (this.single)return [b];
                for (b = c; b <= d;) {
                    f.push(b);
                    b = n(b + a);
                    if (b === g)break;
                    g = b
                }
                return f
            },
            getMinorTickPositions: function () {
                var a = this, b = a.options, d = a.tickPositions, f = a.minorTickInterval, q = [], e = a.pointRangePadding || 0, m = a.min - e, e = a.max + e, r = e - m;
                if (r && r / f < a.len / 3)if (a.isLog)c(this.paddedTicks, function (b,
                                                                                     g, d) {
                    g && q.push.apply(q, a.getLogTickPositions(f, d[g - 1], d[g], !0))
                }); else if (a.isDatetimeAxis && "auto" === b.minorTickInterval)q = q.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f), m, e, b.startOfWeek)); else for (b = m + (d[0] - m) % f; b <= e && b !== q[0]; b += f)q.push(b);
                0 !== q.length && a.trimTicks(q);
                return q
            },
            adjustForMinRange: function () {
                var a = this.options, b = this.min, d = this.max, f, q = this.dataMax - this.dataMin >= this.minRange, e, m, r, p, v, x;
                this.isXAxis && void 0 === this.minRange && !this.isLog && (l(a.min) || l(a.max) ? this.minRange =
                    null : (c(this.series, function (a) {
                    p = a.xData;
                    for (m = v = a.xIncrement ? 1 : p.length - 1; 0 < m; m--)if (r = p[m] - p[m - 1], void 0 === e || r < e)e = r
                }), this.minRange = Math.min(5 * e, this.dataMax - this.dataMin)));
                d - b < this.minRange && (x = this.minRange, f = (x - d + b) / 2, f = [b - f, F(a.min, b - f)], q && (f[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), b = C(f), d = [b + x, F(a.max, b + x)], q && (d[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), d = E(d), d - b < x && (f[0] = d - x, f[1] = F(a.min, d - x), b = C(f)));
                this.min = b;
                this.max = d
            },
            getClosest: function () {
                var a;
                this.categories ?
                    a = 1 : c(this.series, function (b) {
                    var g = b.closestPointRange, d = b.visible || !b.chart.options.chart.ignoreHiddenSeries;
                    !b.noSharedTooltip && l(g) && d && (a = l(a) ? Math.min(a, g) : g)
                });
                return a
            },
            nameToX: function (a) {
                var b = A(this.categories), g = b ? this.categories : this.names, d = a.options.x, c;
                a.series.requireSorting = !1;
                l(d) || (d = !1 === this.options.uniqueNames ? a.series.autoIncrement() : r(a.name, g));
                -1 === d ? b || (c = g.length) : c = d;
                this.names[c] = a.name;
                return c
            },
            updateNames: function () {
                var a = this;
                0 < this.names.length && (this.names.length =
                    0, this.minRange = void 0, c(this.series || [], function (b) {
                    b.xIncrement = null;
                    if (!b.points || b.isDirtyData)b.processData(), b.generatePoints();
                    c(b.points, function (g, d) {
                        var c;
                        g.options && (c = a.nameToX(g), c !== g.x && (g.x = c, b.xData[d] = c))
                    })
                }))
            },
            setAxisTranslation: function (a) {
                var b = this, g = b.max - b.min, d = b.axisPointRange || 0, q, e = 0, m = 0, r = b.linkedParent, p = !!b.categories, v = b.transA, x = b.isXAxis;
                if (x || p || d)q = b.getClosest(), r ? (e = r.minPointOffset, m = r.pointRangePadding) : c(b.series, function (a) {
                    var g = p ? 1 : x ? F(a.options.pointRange,
                        q, 0) : b.axisPointRange || 0;
                    a = a.options.pointPlacement;
                    d = Math.max(d, g);
                    b.single || (e = Math.max(e, f(a) ? 0 : g / 2), m = Math.max(m, "on" === a ? 0 : g))
                }), r = b.ordinalSlope && q ? b.ordinalSlope / q : 1, b.minPointOffset = e *= r, b.pointRangePadding = m *= r, b.pointRange = Math.min(d, g), x && (b.closestPointRange = q);
                a && (b.oldTransA = v);
                b.translationSlope = b.transA = v = b.options.staticScale || b.len / (g + m || 1);
                b.transB = b.horiz ? b.left : b.bottom;
                b.minPixelPadding = v * e
            },
            minFromRange: function () {
                return this.max - this.range
            },
            setTickInterval: function (b) {
                var g =
                    this, d = g.chart, f = g.options, q = g.isLog, e = g.log2lin, r = g.isDatetimeAxis, p = g.isXAxis, x = g.isLinked, k = f.maxPadding, h = f.minPadding, y = f.tickInterval, A = f.tickPixelInterval, J = g.categories, t = g.threshold, u = g.softThreshold, L, K, z, B;
                r || J || x || this.getTickAmount();
                z = F(g.userMin, f.min);
                B = F(g.userMax, f.max);
                x ? (g.linkedParent = d[g.coll][f.linkedTo], d = g.linkedParent.getExtremes(), g.min = F(d.min, d.dataMin), g.max = F(d.max, d.dataMax), f.type !== g.linkedParent.options.type && a.error(11, 1)) : (!u && l(t) && (g.dataMin >= t ? (L = t, h = 0) : g.dataMax <=
                t && (K = t, k = 0)), g.min = F(z, L, g.dataMin), g.max = F(B, K, g.dataMax));
                q && (g.positiveValuesOnly && !b && 0 >= Math.min(g.min, F(g.dataMin, g.min)) && a.error(10, 1), g.min = n(e(g.min), 15), g.max = n(e(g.max), 15));
                g.range && l(g.max) && (g.userMin = g.min = z = Math.max(g.min, g.minFromRange()), g.userMax = B = g.max, g.range = null);
                H(g, "foundExtremes");
                g.beforePadding && g.beforePadding();
                g.adjustForMinRange();
                !(J || g.axisPointRange || g.usePercentage || x) && l(g.min) && l(g.max) && (e = g.max - g.min) && (!l(z) && h && (g.min -= e * h), !l(B) && k && (g.max += e * k));
                v(f.floor) ?
                    g.min = Math.max(g.min, f.floor) : v(f.softMin) && (g.min = Math.min(g.min, f.softMin));
                v(f.ceiling) ? g.max = Math.min(g.max, f.ceiling) : v(f.softMax) && (g.max = Math.max(g.max, f.softMax));
                u && l(g.dataMin) && (t = t || 0, !l(z) && g.min < t && g.dataMin >= t ? g.min = t : !l(B) && g.max > t && g.dataMax <= t && (g.max = t));
                g.tickInterval = g.min === g.max || void 0 === g.min || void 0 === g.max ? 1 : x && !y && A === g.linkedParent.options.tickPixelInterval ? y = g.linkedParent.tickInterval : F(y, this.tickAmount ? (g.max - g.min) / Math.max(this.tickAmount - 1, 1) : void 0, J ? 1 : (g.max -
                g.min) * A / Math.max(g.len, A));
                p && !b && c(g.series, function (a) {
                    a.processData(g.min !== g.oldMin || g.max !== g.oldMax)
                });
                g.setAxisTranslation(!0);
                g.beforeSetTickPositions && g.beforeSetTickPositions();
                g.postProcessTickInterval && (g.tickInterval = g.postProcessTickInterval(g.tickInterval));
                g.pointRange && !y && (g.tickInterval = Math.max(g.pointRange, g.tickInterval));
                b = F(f.minTickInterval, g.isDatetimeAxis && g.closestPointRange);
                !y && g.tickInterval < b && (g.tickInterval = b);
                r || q || y || (g.tickInterval = G(g.tickInterval, null, m(g.tickInterval),
                    F(f.allowDecimals, !(.5 < g.tickInterval && 5 > g.tickInterval && 1E3 < g.max && 9999 > g.max)), !!this.tickAmount));
                this.tickAmount || (g.tickInterval = g.unsquish());
                this.setTickPositions()
            },
            setTickPositions: function () {
                var a = this.options, b, d = a.tickPositions, c = a.tickPositioner, f = a.startOnTick, q = a.endOnTick;
                this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
                this.minorTickInterval = "auto" === a.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
                this.single =
                    this.min === this.max && l(this.min) && !this.tickAmount && !1 !== a.allowDecimals;
                this.tickPositions = b = d && d.slice();
                !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, c && (c = c.apply(this,
                    [this.min, this.max]))) && (this.tickPositions = b = c);
                this.paddedTicks = b.slice(0);
                this.trimTicks(b, f, q);
                this.isLinked || (this.single && (this.min -= .5, this.max += .5), d || c || this.adjustTickAmount())
            },
            trimTicks: function (a, b, d) {
                var g = a[0], c = a[a.length - 1], f = this.minPointOffset || 0;
                if (!this.isLinked) {
                    if (b)this.min = g; else for (; this.min - f > a[0];)a.shift();
                    if (d)this.max = c; else for (; this.max + f < a[a.length - 1];)a.pop();
                    0 === a.length && l(g) && a.push((c + g) / 2)
                }
            },
            alignToOthers: function () {
                var a = {}, b, d = this.options;
                !1 === this.chart.options.chart.alignTicks ||
                !1 === d.alignTicks || this.isLog || c(this.chart[this.coll], function (g) {
                    var d = g.options, d = [g.horiz ? d.left : d.top, d.width, d.height, d.pane].join();
                    g.series.length && (a[d] ? b = !0 : a[d] = 1)
                });
                return b
            },
            getTickAmount: function () {
                var a = this.options, b = a.tickAmount, d = a.tickPixelInterval;
                !l(a.tickInterval) && this.len < d && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
                !b && this.alignToOthers() && (b = Math.ceil(this.len / d) + 1);
                4 > b && (this.finalTickAmt = b, b = 5);
                this.tickAmount = b
            },
            adjustTickAmount: function () {
                var a =
                    this.tickInterval, b = this.tickPositions, d = this.tickAmount, c = this.finalTickAmt, f = b && b.length;
                if (f < d) {
                    for (; b.length < d;)b.push(n(b[b.length - 1] + a));
                    this.transA *= (f - 1) / (d - 1);
                    this.max = b[b.length - 1]
                } else f > d && (this.tickInterval *= 2, this.setTickPositions());
                if (l(c)) {
                    for (a = d = b.length; a--;)(3 === c && 1 === a % 2 || 2 >= c && 0 < a && a < d - 1) && b.splice(a, 1);
                    this.finalTickAmt = void 0
                }
            },
            setScale: function () {
                var a, b;
                this.oldMin = this.min;
                this.oldMax = this.max;
                this.oldAxisLength = this.len;
                this.setAxisSize();
                b = this.len !== this.oldAxisLength;
                c(this.series, function (b) {
                    if (b.isDirtyData || b.isDirty || b.xAxis.isDirty)a = !0
                });
                b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
            },
            setExtremes: function (a,
                                   b, d, f, q) {
                var g = this, e = g.chart;
                d = F(d, !0);
                c(g.series, function (a) {
                    delete a.kdTree
                });
                q = p(q, {min: a, max: b});
                H(g, "setExtremes", q, function () {
                    g.userMin = a;
                    g.userMax = b;
                    g.eventArgs = q;
                    d && e.redraw(f)
                })
            },
            zoom: function (a, b) {
                var g = this.dataMin, d = this.dataMax, c = this.options, f = Math.min(g, F(c.min, g)), c = Math.max(d, F(c.max, d));
                if (a !== this.min || b !== this.max)this.allowZoomOutside || (l(g) && (a < f && (a = f), a > c && (a = c)), l(d) && (b < f && (b = f), b > c && (b = c))), this.displayBtn = void 0 !== a || void 0 !== b, this.setExtremes(a, b, !1, void 0, {trigger: "zoom"});
                return !0
            },
            setAxisSize: function () {
                var a = this.chart, b = this.options, d = b.offsets || [0, 0, 0, 0], c = this.horiz, f = F(b.width, a.plotWidth - d[3] + d[1]), q = F(b.height, a.plotHeight - d[0] + d[2]), e = F(b.top, a.plotTop + d[0]), b = F(b.left, a.plotLeft + d[3]), d = /%$/;
                d.test(q) && (q = Math.round(parseFloat(q) / 100 * a.plotHeight));
                d.test(e) && (e = Math.round(parseFloat(e) / 100 * a.plotHeight + a.plotTop));
                this.left = b;
                this.top = e;
                this.width = f;
                this.height = q;
                this.bottom = a.chartHeight - q - e;
                this.right = a.chartWidth - f - b;
                this.len = Math.max(c ? f : q, 0);
                this.pos =
                    c ? b : e
            },
            getExtremes: function () {
                var a = this.isLog, b = this.lin2log;
                return {
                    min: a ? n(b(this.min)) : this.min,
                    max: a ? n(b(this.max)) : this.max,
                    dataMin: this.dataMin,
                    dataMax: this.dataMax,
                    userMin: this.userMin,
                    userMax: this.userMax
                }
            },
            getThreshold: function (a) {
                var b = this.isLog, g = this.lin2log, d = b ? g(this.min) : this.min, b = b ? g(this.max) : this.max;
                null === a ? a = d : d > a ? a = d : b < a && (a = b);
                return this.translate(a, 0, 1, 0, 1)
            },
            autoLabelAlign: function (a) {
                a = (F(a, 0) - 90 * this.side + 720) % 360;
                return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center"
            },
            tickSize: function (a) {
                var b = this.options, g = b[a + "Length"], d = F(b[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0);
                if (d && g)return "inside" === b[a + "Position"] && (g = -g), [g, d]
            },
            labelMetrics: function () {
                return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label)
            },
            unsquish: function () {
                var a = this.options.labels, b = this.horiz, d = this.tickInterval, f = d, q = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d), e, m = a.rotation, r = this.labelMetrics(), p, x =
                    Number.MAX_VALUE, v, h = function (a) {
                    a /= q || 1;
                    a = 1 < a ? Math.ceil(a) : 1;
                    return a * d
                };
                b ? (v = !a.staggerLines && !a.step && (l(m) ? [m] : q < F(a.autoRotationLimit, 80) && a.autoRotation)) && c(v, function (a) {
                    var b;
                    if (a === m || a && -90 <= a && 90 >= a)p = h(Math.abs(r.h / Math.sin(k * a))), b = p + Math.abs(a / 360), b < x && (x = b, e = a, f = p)
                }) : a.step || (f = h(r.h));
                this.autoRotation = v;
                this.labelRotation = F(e, m);
                return f
            },
            getSlotWidth: function () {
                var a = this.chart, b = this.horiz, d = this.options.labels, c = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), f = a.margin[3];
                return b && 2 > (d.step || 0) && !d.rotation && (this.staggerLines || 1) * this.len / c || !b && (f && f - a.spacing[3] || .33 * a.chartWidth)
            },
            renderUnsquish: function () {
                var a = this.chart, b = a.renderer, d = this.tickPositions, q = this.ticks, e = this.options.labels, m = this.horiz, r = this.getSlotWidth(), p = Math.max(1, Math.round(r - 2 * (e.padding || 5))), x = {}, v = this.labelMetrics(), k = e.style && e.style.textOverflow, h, l = 0, A, n;
                f(e.rotation) || (x.rotation = e.rotation || 0);
                c(d, function (a) {
                    (a = q[a]) && a.labelLength > l && (l = a.labelLength)
                });
                this.maxLabelLength =
                    l;
                if (this.autoRotation)l > p && l > v.h ? x.rotation = this.labelRotation : this.labelRotation = 0; else if (r && (h = {width: p + "px"}, !k))for (h.textOverflow = "clip", A = d.length; !m && A--;)if (n = d[A], p = q[n].label)p.styles && "ellipsis" === p.styles.textOverflow ? p.css({textOverflow: "clip"}) : q[n].labelLength > r && p.css({width: r + "px"}), p.getBBox().height > this.len / d.length - (v.h - v.f) && (p.specCss = {textOverflow: "ellipsis"});
                x.rotation && (h = {width: (l > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px"}, k || (h.textOverflow = "ellipsis"));
                if (this.labelAlign = e.align || this.autoLabelAlign(this.labelRotation))x.align = this.labelAlign;
                c(d, function (a) {
                    var b = (a = q[a]) && a.label;
                    b && (b.attr(x), h && b.css(y(h, b.specCss)), delete b.specCss, a.rotation = x.rotation)
                });
                this.tickRotCorr = b.rotCorr(v.b, this.labelRotation || 0, 0 !== this.side)
            },
            hasData: function () {
                return this.hasVisibleSeries || l(this.min) && l(this.max) && !!this.tickPositions
            },
            addTitle: function (a) {
                var b = this.chart.renderer, d = this.horiz, g = this.opposite, c = this.options.title, f;
                this.axisTitle || ((f = c.textAlign) ||
                (f = (d ? {low: "left", middle: "center", high: "right"} : {
                    low: g ? "right" : "left",
                    middle: "center",
                    high: g ? "left" : "right"
                })[c.align]), this.axisTitle = b.text(c.text, 0, 0, c.useHTML).attr({
                    zIndex: 7,
                    rotation: c.rotation || 0,
                    align: f
                }).addClass("highcharts-axis-title").css(c.style).add(this.axisGroup), this.axisTitle.isNew = !0);
                this.axisTitle[a ? "show" : "hide"](!0)
            },
            generateTick: function (a) {
                var b = this.ticks;
                b[a] ? b[a].addLabel() : b[a] = new L(this, a)
            },
            getOffset: function () {
                var a = this, b = a.chart, d = b.renderer, f = a.options, q = a.tickPositions,
                    e = a.ticks, m = a.horiz, r = a.side, p = b.inverted ? [1, 0, 3, 2][r] : r, x, v, h = 0, k, y = 0, A = f.title, n = f.labels, G = 0, J = b.axisOffset, b = b.clipOffset, t = [-1, 1, 1, -1][r], u, H = f.className, L = a.axisParent, K = this.tickSize("tick");
                x = a.hasData();
                a.showAxis = v = x || F(f.showEmpty, !0);
                a.staggerLines = a.horiz && n.staggerLines;
                a.axisGroup || (a.gridGroup = d.g("grid").attr({zIndex: f.gridZIndex || 1}).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (H || "")).add(L), a.axisGroup = d.g("axis").attr({zIndex: f.zIndex || 2}).addClass("highcharts-" + this.coll.toLowerCase() +
                    " " + (H || "")).add(L), a.labelGroup = d.g("axis-labels").attr({zIndex: n.zIndex || 7}).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (H || "")).add(L));
                if (x || a.isLinked)c(q, function (b, d) {
                    a.generateTick(b, d)
                }), a.renderUnsquish(), !1 === n.reserveSpace || 0 !== r && 2 !== r && {
                    1: "left",
                    3: "right"
                }[r] !== a.labelAlign && "center" !== a.labelAlign || c(q, function (a) {
                    G = Math.max(e[a].getLabelSize(), G)
                }), a.staggerLines && (G *= a.staggerLines, a.labelOffset = G * (a.opposite ? -1 : 1)); else for (u in e)e[u].destroy(), delete e[u];
                A && A.text &&
                !1 !== A.enabled && (a.addTitle(v), v && (h = a.axisTitle.getBBox()[m ? "height" : "width"], k = A.offset, y = l(k) ? 0 : F(A.margin, m ? 5 : 10)));
                a.renderLine();
                a.offset = t * F(f.offset, J[r]);
                a.tickRotCorr = a.tickRotCorr || {x: 0, y: 0};
                d = 0 === r ? -a.labelMetrics().h : 2 === r ? a.tickRotCorr.y : 0;
                y = Math.abs(G) + y;
                G && (y = y - d + t * (m ? F(n.y, a.tickRotCorr.y + 8 * t) : n.x));
                a.axisTitleMargin = F(k, y);
                J[r] = Math.max(J[r], a.axisTitleMargin + h + t * a.offset, y, x && q.length && K ? K[0] + t * a.offset : 0);
                f = f.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);
                b[p] = Math.max(b[p],
                    f)
            },
            getLinePath: function (a) {
                var b = this.chart, d = this.opposite, g = this.offset, f = this.horiz, c = this.left + (d ? this.width : 0) + g, g = b.chartHeight - this.bottom - (d ? this.height : 0) + g;
                d && (a *= -1);
                return b.renderer.crispLine(["M", f ? this.left : c, f ? g : this.top, "L", f ? b.chartWidth - this.right : c, f ? g : b.chartHeight - this.bottom], a)
            },
            renderLine: function () {
                this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.axisLine.attr({
                    stroke: this.options.lineColor, "stroke-width": this.options.lineWidth,
                    zIndex: 7
                }))
            },
            getTitlePosition: function () {
                var a = this.horiz, b = this.left, d = this.top, f = this.len, c = this.options.title, q = a ? b : d, e = this.opposite, m = this.offset, r = c.x || 0, p = c.y || 0, x = this.chart.renderer.fontMetrics(c.style && c.style.fontSize, this.axisTitle).f, f = {
                    low: q + (a ? 0 : f),
                    middle: q + f / 2,
                    high: q + (a ? f : 0)
                }[c.align], b = (a ? d + this.height : b) + (a ? 1 : -1) * (e ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? x : 0);
                return {
                    x: a ? f + r : b + (e ? this.width : 0) + m + r,
                    y: a ? b + p - (e ? this.height : 0) + m : f + p
                }
            },
            renderMinorTick: function (a) {
                var b = this.chart.hasRendered &&
                    v(this.oldMin), d = this.minorTicks;
                d[a] || (d[a] = new L(this, a, "minor"));
                b && d[a].isNew && d[a].render(null, !0);
                d[a].render(null, !1, 1)
            },
            renderTick: function (a, b) {
                var d = this.isLinked, g = this.ticks, f = this.chart.hasRendered && v(this.oldMin);
                if (!d || a >= this.min && a <= this.max)g[a] || (g[a] = new L(this, a)), f && g[a].isNew && g[a].render(b, !0, .1), g[a].render(b)
            },
            render: function () {
                var a = this, b = a.chart, d = a.options, f = a.isLog, e = a.lin2log, m = a.isLinked, r = a.tickPositions, p = a.axisTitle, x = a.ticks, v = a.minorTicks, h = a.alternateBands, k =
                    d.stackLabels, y = d.alternateGridColor, l = a.tickmarkOffset, A = a.axisLine, n = a.showAxis, G = z(b.renderer.globalAnimation), J, t;
                a.labelEdge.length = 0;
                a.overlap = !1;
                c([x, v, h], function (a) {
                    for (var b in a)a[b].isActive = !1
                });
                if (a.hasData() || m)a.minorTickInterval && !a.categories && c(a.getMinorTickPositions(), function (b) {
                    a.renderMinorTick(b)
                }), r.length && (c(r, function (b, d) {
                    a.renderTick(b, d)
                }), l && (0 === a.min || a.single) && (x[-1] || (x[-1] = new L(a, -1, null, !0)), x[-1].render(-1))), y && c(r, function (d, g) {
                    t = void 0 !== r[g + 1] ? r[g + 1] +
                    l : a.max - l;
                    0 === g % 2 && d < a.max && t <= a.max + (b.polar ? -l : l) && (h[d] || (h[d] = new q(a)), J = d + l, h[d].options = {
                        from: f ? e(J) : J,
                        to: f ? e(t) : t,
                        color: y
                    }, h[d].render(), h[d].isActive = !0)
                }), a._addedPlotLB || (c((d.plotLines || []).concat(d.plotBands || []), function (b) {
                    a.addPlotBandOrLine(b)
                }), a._addedPlotLB = !0);
                c([x, v, h], function (a) {
                    var d, g, f = [], c = G.duration;
                    for (d in a)a[d].isActive || (a[d].render(d, !1, 0), a[d].isActive = !1, f.push(d));
                    K(function () {
                            for (g = f.length; g--;)a[f[g]] && !a[f[g]].isActive && (a[f[g]].destroy(), delete a[f[g]])
                        },
                        a !== h && b.hasRendered && c ? c : 0)
                });
                A && (A[A.isPlaced ? "animate" : "attr"]({d: this.getLinePath(A.strokeWidth())}), A.isPlaced = !0, A[n ? "show" : "hide"](!0));
                p && n && (p[p.isNew ? "attr" : "animate"](a.getTitlePosition()), p.isNew = !1);
                k && k.enabled && a.renderStackTotals();
                a.isDirty = !1
            },
            redraw: function () {
                this.visible && (this.render(), c(this.plotLinesAndBands, function (a) {
                    a.render()
                }));
                c(this.series, function (a) {
                    a.isDirty = !0
                })
            },
            keepProps: "extKey hcEvents names series userMax userMin".split(" "),
            destroy: function (a) {
                var b = this,
                    d = b.stacks, g, f = b.plotLinesAndBands, q;
                a || x(b);
                for (g in d)e(d[g]), d[g] = null;
                c([b.ticks, b.minorTicks, b.alternateBands], function (a) {
                    e(a)
                });
                if (f)for (a = f.length; a--;)f[a].destroy();
                c("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function (a) {
                    b[a] && (b[a] = b[a].destroy())
                });
                for (q in b)b.hasOwnProperty(q) && -1 === r(q, b.keepProps) && delete b[q]
            },
            drawCrosshair: function (a, b) {
                var d, f = this.crosshair, g = F(f.snap, !0), c, q = this.cross;
                a || (a = this.cross && this.cross.e);
                this.crosshair &&
                !1 !== (l(b) || !g) ? (g ? l(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos), l(c) && (d = this.getPlotLinePath(b && (this.isXAxis ? b.x : F(b.stackY, b.y)), null, null, null, c) || null), l(d) ? (b = this.categories && !this.isRadial, q || (this.cross = q = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (b ? "category " : "thin ") + f.className).attr({zIndex: F(f.zIndex, 2)}).add(), q.attr({
                    stroke: f.color || (b ? h("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                    "stroke-width": F(f.width, 1)
                }), f.dashStyle && q.attr({dashstyle: f.dashStyle})), q.show().attr({d: d}), b && !f.width && q.attr({"stroke-width": this.transA}), this.cross.e = a) : this.hideCrosshair()) : this.hideCrosshair()
            },
            hideCrosshair: function () {
                this.cross && this.cross.hide()
            }
        };
        p(a.Axis.prototype, u)
    })(I);
    (function (a) {
        var B = a.Axis, z = a.Date, C = a.dateFormat, E = a.defaultOptions, u = a.defined, h = a.each, n = a.extend, t = a.getMagnitude, l = a.getTZOffset, k = a.normalizeTickInterval, e = a.pick, c = a.timeUnits;
        B.prototype.getTimeTicks = function (a,
                                             k, b, m) {
            var d = [], r = {}, p = E.global.useUTC, v, f = new z(k - Math.abs(l(k))), y = z.hcMakeTime, G = a.unitRange, t = a.count, q;
            if (u(k)) {
                f[z.hcSetMilliseconds](G >= c.second ? 0 : t * Math.floor(f.getMilliseconds() / t));
                if (G >= c.second)f[z.hcSetSeconds](G >= c.minute ? 0 : t * Math.floor(f.getSeconds() / t));
                if (G >= c.minute)f[z.hcSetMinutes](G >= c.hour ? 0 : t * Math.floor(f[z.hcGetMinutes]() / t));
                if (G >= c.hour)f[z.hcSetHours](G >= c.day ? 0 : t * Math.floor(f[z.hcGetHours]() / t));
                if (G >= c.day)f[z.hcSetDate](G >= c.month ? 1 : t * Math.floor(f[z.hcGetDate]() / t));
                G >= c.month && (f[z.hcSetMonth](G >= c.year ? 0 : t * Math.floor(f[z.hcGetMonth]() / t)), v = f[z.hcGetFullYear]());
                if (G >= c.year)f[z.hcSetFullYear](v - v % t);
                if (G === c.week)f[z.hcSetDate](f[z.hcGetDate]() - f[z.hcGetDay]() + e(m, 1));
                v = f[z.hcGetFullYear]();
                m = f[z.hcGetMonth]();
                var x = f[z.hcGetDate](), J = f[z.hcGetHours]();
                if (z.hcTimezoneOffset || z.hcGetTimezoneOffset)q = (!p || !!z.hcGetTimezoneOffset) && (b - k > 4 * c.month || l(k) !== l(b)), f = f.getTime(), f = new z(f + l(f));
                p = f.getTime();
                for (k = 1; p < b;)d.push(p), p = G === c.year ? y(v + k * t, 0) : G === c.month ?
                    y(v, m + k * t) : !q || G !== c.day && G !== c.week ? q && G === c.hour ? y(v, m, x, J + k * t) : p + G * t : y(v, m, x + k * t * (G === c.day ? 1 : 7)), k++;
                d.push(p);
                G <= c.hour && 1E4 > d.length && h(d, function (a) {
                    0 === a % 18E5 && "000000000" === C("%H%M%S%L", a) && (r[a] = "day")
                })
            }
            d.info = n(a, {higherRanks: r, totalRange: G * t});
            return d
        };
        B.prototype.normalizeTimeTickInterval = function (a, e) {
            var b = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2,
                    3, 4, 6]], ["year", null]];
            e = b[b.length - 1];
            var m = c[e[0]], d = e[1], r;
            for (r = 0; r < b.length && !(e = b[r], m = c[e[0]], d = e[1], b[r + 1] && a <= (m * d[d.length - 1] + c[b[r + 1][0]]) / 2); r++);
            m === c.year && a < 5 * m && (d = [1, 2, 5]);
            a = k(a / m, d, "year" === e[0] ? Math.max(t(a / m), 1) : 1);
            return {unitRange: m, count: a, unitName: e[0]}
        }
    })(I);
    (function (a) {
        var B = a.Axis, z = a.getMagnitude, C = a.map, E = a.normalizeTickInterval, u = a.pick;
        B.prototype.getLogTickPositions = function (a, n, t, l) {
            var k = this.options, e = this.len, c = this.lin2log, p = this.log2lin, h = [];
            l || (this._minorAutoInterval =
                null);
            if (.5 <= a)a = Math.round(a), h = this.getLinearTickPositions(a, n, t); else if (.08 <= a)for (var e = Math.floor(n), b, m, d, r, A, k = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; e < t + 1 && !A; e++)for (m = k.length, b = 0; b < m && !A; b++)d = p(c(e) * k[b]), d > n && (!l || r <= t) && void 0 !== r && h.push(r), r > t && (A = !0), r = d; else n = c(n), t = c(t), a = k[l ? "minorTickInterval" : "tickInterval"], a = u("auto" === a ? null : a, this._minorAutoInterval, k.tickPixelInterval / (l ? 5 : 1) * (t - n) / ((l ? e / this.tickPositions.length : e) || 1)), a = E(a, null, z(a)), h = C(this.getLinearTickPositions(a,
                n, t), p), l || (this._minorAutoInterval = a / 5);
            l || (this.tickInterval = a);
            return h
        };
        B.prototype.log2lin = function (a) {
            return Math.log(a) / Math.LN10
        };
        B.prototype.lin2log = function (a) {
            return Math.pow(10, a)
        }
    })(I);
    (function (a) {
        var B = a.dateFormat, z = a.each, C = a.extend, E = a.format, u = a.isNumber, h = a.map, n = a.merge, t = a.pick, l = a.splat, k = a.syncTimeout, e = a.timeUnits;
        a.Tooltip = function () {
            this.init.apply(this, arguments)
        };
        a.Tooltip.prototype = {
            init: function (a, e) {
                this.chart = a;
                this.options = e;
                this.crosshairs = [];
                this.now = {x: 0, y: 0};
                this.isHidden = !0;
                this.split = e.split && !a.inverted;
                this.shared = e.shared || this.split
            }, cleanSplit: function (a) {
                z(this.chart.series, function (c) {
                    var e = c && c.tt;
                    e && (!e.isActive || a ? c.tt = e.destroy() : e.isActive = !1)
                })
            }, getLabel: function () {
                var a = this.chart.renderer, e = this.options;
                this.label || (this.split ? this.label = a.g("tooltip") : (this.label = a.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                    padding: e.padding,
                    r: e.borderRadius
                }), this.label.attr({
                    fill: e.backgroundColor,
                    "stroke-width": e.borderWidth
                }).css(e.style).shadow(e.shadow)),
                    this.label.attr({zIndex: 8}).add());
                return this.label
            }, update: function (a) {
                this.destroy();
                this.init(this.chart, n(!0, this.options, a))
            }, destroy: function () {
                this.label && (this.label = this.label.destroy());
                this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
                clearTimeout(this.hideTimer);
                clearTimeout(this.tooltipTimeout)
            }, move: function (a, e, k, b) {
                var c = this, d = c.now, r = !1 !== c.options.animation && !c.isHidden && (1 < Math.abs(a - d.x) || 1 < Math.abs(e - d.y)), p = c.followPointer || 1 < c.len;
                C(d, {
                    x: r ? (2 *
                    d.x + a) / 3 : a,
                    y: r ? (d.y + e) / 2 : e,
                    anchorX: p ? void 0 : r ? (2 * d.anchorX + k) / 3 : k,
                    anchorY: p ? void 0 : r ? (d.anchorY + b) / 2 : b
                });
                c.getLabel().attr(d);
                r && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                    c && c.move(a, e, k, b)
                }, 32))
            }, hide: function (a) {
                var c = this;
                clearTimeout(this.hideTimer);
                a = t(a, this.options.hideDelay, 500);
                this.isHidden || (this.hideTimer = k(function () {
                    c.getLabel()[a ? "fadeOut" : "hide"]();
                    c.isHidden = !0
                }, a))
            }, getAnchor: function (a, e) {
                var c, b = this.chart, m = b.inverted, d = b.plotTop, r = b.plotLeft,
                    p = 0, v = 0, f, k;
                a = l(a);
                c = a[0].tooltipPos;
                this.followPointer && e && (void 0 === e.chartX && (e = b.pointer.normalize(e)), c = [e.chartX - b.plotLeft, e.chartY - d]);
                c || (z(a, function (a) {
                    f = a.series.yAxis;
                    k = a.series.xAxis;
                    p += a.plotX + (!m && k ? k.left - r : 0);
                    v += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!m && f ? f.top - d : 0)
                }), p /= a.length, v /= a.length, c = [m ? b.plotWidth - v : p, this.shared && !m && 1 < a.length && e ? e.chartY - d : m ? b.plotHeight - p : v]);
                return h(c, Math.round)
            }, getPosition: function (a, e, k) {
                var b = this.chart, c = this.distance, d = {}, r = k.h || 0,
                    p, v = ["y", b.chartHeight, e, k.plotY + b.plotTop, b.plotTop, b.plotTop + b.plotHeight], f = ["x", b.chartWidth, a, k.plotX + b.plotLeft, b.plotLeft, b.plotLeft + b.plotWidth], h = !this.followPointer && t(k.ttBelow, !b.inverted === !!k.negative), l = function (a, b, f, g, q, e) {
                        var m = f < g - c, x = g + c + f < b, v = g - c - f;
                        g += c;
                        if (h && x)d[a] = g; else if (!h && m)d[a] = v; else if (m)d[a] = Math.min(e - f, 0 > v - r ? v : v - r); else if (x)d[a] = Math.max(q, g + r + f > b ? g : g + r); else return !1
                    }, n = function (a, b, f, g) {
                        var q;
                        g < c || g > b - c ? q = !1 : d[a] = g < f / 2 ? 1 : g > b - f / 2 ? b - f - 2 : g - f / 2;
                        return q
                    }, q = function (a) {
                        var b =
                            v;
                        v = f;
                        f = b;
                        p = a
                    }, x = function () {
                        !1 !== l.apply(0, v) ? !1 !== n.apply(0, f) || p || (q(!0), x()) : p ? d.x = d.y = 0 : (q(!0), x())
                    };
                (b.inverted || 1 < this.len) && q();
                x();
                return d
            }, defaultFormatter: function (a) {
                var c = this.points || l(this), e;
                e = [a.tooltipFooterHeaderFormatter(c[0])];
                e = e.concat(a.bodyFormatter(c));
                e.push(a.tooltipFooterHeaderFormatter(c[0], !0));
                return e
            }, refresh: function (a, e) {
                var c, b = this.options, m, d = a, r, p = {}, v = [];
                c = b.formatter || this.defaultFormatter;
                var p = this.shared, f;
                clearTimeout(this.hideTimer);
                this.followPointer =
                    l(d)[0].series.tooltipOptions.followPointer;
                r = this.getAnchor(d, e);
                e = r[0];
                m = r[1];
                !p || d.series && d.series.noSharedTooltip ? p = d.getLabelConfig() : (z(d, function (a) {
                    a.setState("hover");
                    v.push(a.getLabelConfig())
                }), p = {x: d[0].category, y: d[0].y}, p.points = v, d = d[0]);
                this.len = v.length;
                p = c.call(p, this);
                f = d.series;
                this.distance = t(f.tooltipOptions.distance, 16);
                !1 === p ? this.hide() : (c = this.getLabel(), this.isHidden && c.attr({opacity: 1}).show(), this.split ? this.renderSplit(p, a) : (c.attr({text: p && p.join ? p.join("") : p}), c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" +
                    t(d.colorIndex, f.colorIndex)), c.attr({stroke: b.borderColor || d.color || f.color || "#666666"}), this.updatePosition({
                    plotX: e,
                    plotY: m,
                    negative: d.negative,
                    ttBelow: d.ttBelow,
                    h: r[2] || 0
                })), this.isHidden = !1)
            }, renderSplit: function (c, e) {
                var p = this, b = [], m = this.chart, d = m.renderer, r = !0, k = this.options, v, f = this.getLabel();
                z(c.slice(0, e.length + 1), function (a, c) {
                    c = e[c - 1] || {isHeader: !0, plotX: e[0].plotX};
                    var h = c.series || p, q = h.tt, x = c.series || {}, l = "highcharts-color-" + t(c.colorIndex, x.colorIndex, "none");
                    q || (h.tt = q = d.label(null,
                        null, null, "callout").addClass("highcharts-tooltip-box " + l).attr({
                            padding: k.padding,
                            r: k.borderRadius,
                            fill: k.backgroundColor,
                            stroke: c.color || x.color || "#333333",
                            "stroke-width": k.borderWidth
                        }).add(f));
                    q.isActive = !0;
                    q.attr({text: a});
                    q.css(k.style);
                    a = q.getBBox();
                    x = a.width + q.strokeWidth();
                    c.isHeader ? (v = a.height, x = Math.max(0, Math.min(c.plotX + m.plotLeft - x / 2, m.chartWidth - x))) : x = c.plotX + m.plotLeft - t(k.distance, 16) - x;
                    0 > x && (r = !1);
                    a = (c.series && c.series.yAxis && c.series.yAxis.pos) + (c.plotY || 0);
                    a -= m.plotTop;
                    b.push({
                        target: c.isHeader ?
                        m.plotHeight + v : a,
                        rank: c.isHeader ? 1 : 0,
                        size: h.tt.getBBox().height + 1,
                        point: c,
                        x: x,
                        tt: q
                    })
                });
                this.cleanSplit();
                a.distribute(b, m.plotHeight + v);
                z(b, function (a) {
                    var b = a.point, d = b.series;
                    a.tt.attr({
                        visibility: void 0 === a.pos ? "hidden" : "inherit",
                        x: r || b.isHeader ? a.x : b.plotX + m.plotLeft + t(k.distance, 16),
                        y: a.pos + m.plotTop,
                        anchorX: b.isHeader ? b.plotX + m.plotLeft : b.plotX + d.xAxis.pos,
                        anchorY: b.isHeader ? a.pos + m.plotTop - 15 : b.plotY + d.yAxis.pos
                    })
                })
            }, updatePosition: function (a) {
                var c = this.chart, e = this.getLabel(), e = (this.options.positioner ||
                this.getPosition).call(this, e.width, e.height, a);
                this.move(Math.round(e.x), Math.round(e.y || 0), a.plotX + c.plotLeft, a.plotY + c.plotTop)
            }, getDateFormat: function (a, p, k, b) {
                var c = B("%m-%d %H:%M:%S.%L", p), d, r, h = {
                    millisecond: 15,
                    second: 12,
                    minute: 9,
                    hour: 6,
                    day: 3
                }, v = "millisecond";
                for (r in e) {
                    if (a === e.week && +B("%w", p) === k && "00:00:00.000" === c.substr(6)) {
                        r = "week";
                        break
                    }
                    if (e[r] > a) {
                        r = v;
                        break
                    }
                    if (h[r] && c.substr(h[r]) !== "01-01 00:00:00.000".substr(h[r]))break;
                    "week" !== r && (v = r)
                }
                r && (d = b[r]);
                return d
            }, getXDateFormat: function (a,
                                         e, k) {
                e = e.dateTimeLabelFormats;
                var b = k && k.closestPointRange;
                return (b ? this.getDateFormat(b, a.x, k.options.startOfWeek, e) : e.day) || e.year
            }, tooltipFooterHeaderFormatter: function (a, e) {
                var c = e ? "footer" : "header";
                e = a.series;
                var b = e.tooltipOptions, m = b.xDateFormat, d = e.xAxis, r = d && "datetime" === d.options.type && u(a.key), c = b[c + "Format"];
                r && !m && (m = this.getXDateFormat(a, b, d));
                r && m && (c = c.replace("{point.key}", "{point.key:" + m + "}"));
                return E(c, {point: a, series: e})
            }, bodyFormatter: function (a) {
                return h(a, function (a) {
                    var c =
                        a.series.tooltipOptions;
                    return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat)
                })
            }
        }
    })(I);
    (function (a) {
        var B = a.addEvent, z = a.attr, C = a.charts, E = a.color, u = a.css, h = a.defined, n = a.doc, t = a.each, l = a.extend, k = a.fireEvent, e = a.offset, c = a.pick, p = a.removeEvent, H = a.splat, b = a.Tooltip, m = a.win;
        a.Pointer = function (a, b) {
            this.init(a, b)
        };
        a.Pointer.prototype = {
            init: function (a, e) {
                this.options = e;
                this.chart = a;
                this.runChartClick = e.chart.events && !!e.chart.events.click;
                this.pinchDown = [];
                this.lastValidTouch =
                {};
                b && e.tooltip.enabled && (a.tooltip = new b(a, e.tooltip), this.followTouchMove = c(e.tooltip.followTouchMove, !0));
                this.setDOMEvents()
            }, zoomOption: function (a) {
                var b = this.chart, d = b.options.chart, e = d.zoomType || "", b = b.inverted;
                /touch/.test(a.type) && (e = c(d.pinchType, e));
                this.zoomX = a = /x/.test(e);
                this.zoomY = e = /y/.test(e);
                this.zoomHor = a && !b || e && b;
                this.zoomVert = e && !b || a && b;
                this.hasZoom = a || e
            }, normalize: function (a, b) {
                var d, c;
                a = a || m.event;
                a.target || (a.target = a.srcElement);
                c = a.touches ? a.touches.length ? a.touches.item(0) :
                    a.changedTouches[0] : a;
                b || (this.chartPosition = b = e(this.chart.container));
                void 0 === c.pageX ? (d = Math.max(a.x, a.clientX - b.left), b = a.y) : (d = c.pageX - b.left, b = c.pageY - b.top);
                return l(a, {chartX: Math.round(d), chartY: Math.round(b)})
            }, getCoordinates: function (a) {
                var b = {xAxis: [], yAxis: []};
                t(this.chart.axes, function (d) {
                    b[d.isXAxis ? "xAxis" : "yAxis"].push({axis: d, value: d.toValue(a[d.horiz ? "chartX" : "chartY"])})
                });
                return b
            }, getKDPoints: function (a, b, e) {
                var d = [], f, m, r;
                t(a, function (a) {
                    f = a.noSharedTooltip && b;
                    m = !b && a.directTouch;
                    a.visible && !f && !m && c(a.options.enableMouseTracking, !0) && (r = a.searchPoint(e, !f && 1 === a.kdDimensions)) && r.series && d.push(r)
                });
                d.sort(function (a, d) {
                    var f = a.distX - d.distX, c = a.dist - d.dist, e = (d.series.group && d.series.group.zIndex) - (a.series.group && a.series.group.zIndex);
                    return 0 !== f && b ? f : 0 !== c ? c : 0 !== e ? e : a.series.index > d.series.index ? -1 : 1
                });
                if (b)for (a = d.length; a--;)(d[a].x !== d[0].x || d[a].series.noSharedTooltip) && d.splice(a, 1);
                return d
            }, getPointFromEvent: function (a) {
                a = a.target;
                for (var b; a && !b;)b = a.point, a =
                    a.parentNode;
                return b
            }, getHoverData: function (a, b, e, m, f, k) {
                var d = a;
                a = b;
                var r;
                if (m)f ? (r = [], t(e, function (a) {
                    var b = a.noSharedTooltip && f, e = !f && a.directTouch;
                    a.visible && !b && !e && c(a.options.enableMouseTracking, !0) && (a = a.searchKDTree({
                        clientX: d.clientX,
                        plotY: d.plotY
                    }, !b && 1 === a.kdDimensions)) && a.series && r.push(a)
                }), 0 === r.length && (r = [d])) : r = [d]; else {
                    if (a && !a.options.stickyTracking)r = this.getKDPoints([a], f, k); else {
                        if (!f)if (a)a.options.stickyTracking || (e = [a]); else for (m = 0; m < e.length; m++)if (e[m].directTouch || !e[m].options.stickyTracking)e = [];
                        r = this.getKDPoints(e, f, k)
                    }
                    a = (d = r[0]) && d.series
                }
                r.sort(function (a, b) {
                    return a.series.index - b.series.index
                });
                return {hoverPoint: d, hoverSeries: a, hoverPoints: r}
            }, runPointActions: function (b, c) {
                var d = this.chart, e = d.tooltip, f = e ? e.shared : !1, m = c || d.hoverPoint, r = m && m.series || d.hoverSeries;
                c = this.getHoverData(m, r, d.series, !!c || r && r.directTouch, f, b);
                var k, q, m = c.hoverPoint;
                k = (r = c.hoverSeries) && r.tooltipOptions.followPointer;
                q = (f = f && m && !m.series.noSharedTooltip) ? c.hoverPoints : [m];
                if (m && (m !== d.hoverPoint || e && e.isHidden)) {
                    t(d.hoverPoints || [], function (b) {
                        -1 === a.inArray(b, q) && b.setState()
                    });
                    t(q || [], function (a) {
                        a.setState("hover")
                    });
                    if (d.hoverSeries !== r)r.onMouseOver();
                    r && !r.directTouch && (d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut"), m.firePointEvent("mouseOver"));
                    d.hoverPoints = q;
                    d.hoverPoint = m;
                    e && e.refresh(f ? q : m, b)
                } else k && e && !e.isHidden && (m = e.getAnchor([{}], b), e.updatePosition({
                    plotX: m[0],
                    plotY: m[1]
                }));
                this.unDocMouseMove || (this.unDocMouseMove = B(n, "mousemove", function (b) {
                    var d =
                        C[a.hoverChartIndex];
                    if (d)d.pointer.onDocumentMouseMove(b)
                }));
                t(q, function (a) {
                    t(d.axes, function (d) {
                        (!a || a.series && a.series[d.coll] === d) && d.drawCrosshair(b, a)
                    })
                })
            }, reset: function (a, b) {
                var d = this.chart, c = d.hoverSeries, f = d.hoverPoint, e = d.hoverPoints, m = d.tooltip, r = m && m.shared ? e : f;
                a && r && t(H(r), function (b) {
                    b.series.isCartesian && void 0 === b.plotX && (a = !1)
                });
                if (a)m && r && (m.refresh(r), f && (f.setState(f.state, !0), t(d.axes, function (a) {
                    a.crosshair && a.drawCrosshair(null, f)
                }))); else {
                    if (f)f.onMouseOut();
                    e && t(e, function (a) {
                        a.setState()
                    });
                    if (c)c.onMouseOut();
                    m && m.hide(b);
                    this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
                    t(d.axes, function (a) {
                        a.hideCrosshair()
                    });
                    this.hoverX = d.hoverPoints = d.hoverPoint = null
                }
            }, scaleGroups: function (a, b) {
                var d = this.chart, c;
                t(d.series, function (f) {
                    c = a || f.getPlotBox();
                    f.xAxis && f.xAxis.zoomEnabled && f.group && (f.group.attr(c), f.markerGroup && (f.markerGroup.attr(c), f.markerGroup.clip(b ? d.clipRect : null)), f.dataLabelsGroup && f.dataLabelsGroup.attr(c))
                });
                d.clipRect.attr(b || d.clipBox)
            }, dragStart: function (a) {
                var b =
                    this.chart;
                b.mouseIsDown = a.type;
                b.cancelClick = !1;
                b.mouseDownX = this.mouseDownX = a.chartX;
                b.mouseDownY = this.mouseDownY = a.chartY
            }, drag: function (a) {
                var b = this.chart, d = b.options.chart, c = a.chartX, f = a.chartY, e = this.zoomHor, m = this.zoomVert, k = b.plotLeft, q = b.plotTop, x = b.plotWidth, p = b.plotHeight, h, l = this.selectionMarker, g = this.mouseDownX, n = this.mouseDownY, t = d.panKey && a[d.panKey + "Key"];
                l && l.touch || (c < k ? c = k : c > k + x && (c = k + x), f < q ? f = q : f > q + p && (f = q + p), this.hasDragged = Math.sqrt(Math.pow(g - c, 2) + Math.pow(n - f, 2)), 10 < this.hasDragged &&
                (h = b.isInsidePlot(g - k, n - q), b.hasCartesianSeries && (this.zoomX || this.zoomY) && h && !t && !l && (this.selectionMarker = l = b.renderer.rect(k, q, e ? 1 : x, m ? 1 : p, 0).attr({
                    fill: d.selectionMarkerFill || E("#335cad").setOpacity(.25).get(),
                    "class": "highcharts-selection-marker",
                    zIndex: 7
                }).add()), l && e && (c -= g, l.attr({
                    width: Math.abs(c),
                    x: (0 < c ? 0 : c) + g
                })), l && m && (c = f - n, l.attr({
                    height: Math.abs(c),
                    y: (0 < c ? 0 : c) + n
                })), h && !l && d.panning && b.pan(a, d.panning)))
            }, drop: function (a) {
                var b = this, d = this.chart, c = this.hasPinched;
                if (this.selectionMarker) {
                    var f =
                    {
                        originalEvent: a,
                        xAxis: [],
                        yAxis: []
                    }, e = this.selectionMarker, m = e.attr ? e.attr("x") : e.x, p = e.attr ? e.attr("y") : e.y, q = e.attr ? e.attr("width") : e.width, x = e.attr ? e.attr("height") : e.height, n;
                    if (this.hasDragged || c)t(d.axes, function (d) {
                        if (d.zoomEnabled && h(d.min) && (c || b[{xAxis: "zoomX", yAxis: "zoomY"}[d.coll]])) {
                            var e = d.horiz, g = "touchend" === a.type ? d.minPixelPadding : 0, r = d.toValue((e ? m : p) + g), e = d.toValue((e ? m + q : p + x) - g);
                            f[d.coll].push({axis: d, min: Math.min(r, e), max: Math.max(r, e)});
                            n = !0
                        }
                    }), n && k(d, "selection", f, function (a) {
                        d.zoom(l(a,
                            c ? {animation: !1} : null))
                    });
                    this.selectionMarker = this.selectionMarker.destroy();
                    c && this.scaleGroups()
                }
                d && (u(d.container, {cursor: d._cursor}), d.cancelClick = 10 < this.hasDragged, d.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
            }, onContainerMouseDown: function (a) {
                a = this.normalize(a);
                this.zoomOption(a);
                a.preventDefault && a.preventDefault();
                this.dragStart(a)
            }, onDocumentMouseUp: function (b) {
                C[a.hoverChartIndex] && C[a.hoverChartIndex].pointer.drop(b)
            }, onDocumentMouseMove: function (a) {
                var b = this.chart,
                    d = this.chartPosition;
                a = this.normalize(a, d);
                !d || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset()
            }, onContainerMouseLeave: function (b) {
                var d = C[a.hoverChartIndex];
                d && (b.relatedTarget || b.toElement) && (d.pointer.reset(), d.pointer.chartPosition = null)
            }, onContainerMouseMove: function (b) {
                var d = this.chart;
                h(a.hoverChartIndex) && C[a.hoverChartIndex] && C[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = d.index);
                b = this.normalize(b);
                b.returnValue = !1;
                "mousedown" === d.mouseIsDown && this.drag(b);
                !this.inClass(b.target, "highcharts-tracker") && !d.isInsidePlot(b.chartX - d.plotLeft, b.chartY - d.plotTop) || d.openMenu || this.runPointActions(b)
            }, inClass: function (a, b) {
                for (var d; a;) {
                    if (d = z(a, "class")) {
                        if (-1 !== d.indexOf(b))return !0;
                        if (-1 !== d.indexOf("highcharts-container"))return !1
                    }
                    a = a.parentNode
                }
            }, onTrackerMouseOut: function (a) {
                var b = this.chart.hoverSeries;
                a = a.relatedTarget || a.toElement;
                if (!(!b || !a || b.options.stickyTracking || this.inClass(a, "highcharts-tooltip") ||
                    this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker")))b.onMouseOut()
            }, onContainerClick: function (a) {
                var b = this.chart, d = b.hoverPoint, c = b.plotLeft, f = b.plotTop;
                a = this.normalize(a);
                b.cancelClick || (d && this.inClass(a.target, "highcharts-tracker") ? (k(d.series, "click", l(a, {point: d})), b.hoverPoint && d.firePointEvent("click", a)) : (l(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - c, a.chartY - f) && k(b, "click", a)))
            }, setDOMEvents: function () {
                var b = this, c = b.chart.container;
                c.onmousedown =
                    function (a) {
                        b.onContainerMouseDown(a)
                    };
                c.onmousemove = function (a) {
                    b.onContainerMouseMove(a)
                };
                c.onclick = function (a) {
                    b.onContainerClick(a)
                };
                B(c, "mouseleave", b.onContainerMouseLeave);
                1 === a.chartCount && B(n, "mouseup", b.onDocumentMouseUp);
                a.hasTouch && (c.ontouchstart = function (a) {
                    b.onContainerTouchStart(a)
                }, c.ontouchmove = function (a) {
                    b.onContainerTouchMove(a)
                }, 1 === a.chartCount && B(n, "touchend", b.onDocumentTouchEnd))
            }, destroy: function () {
                var b;
                p(this.chart.container, "mouseleave", this.onContainerMouseLeave);
                a.chartCount ||
                (p(n, "mouseup", this.onDocumentMouseUp), p(n, "touchend", this.onDocumentTouchEnd));
                clearInterval(this.tooltipTimeout);
                for (b in this)this[b] = null
            }
        }
    })(I);
    (function (a) {
        var B = a.charts, z = a.each, C = a.extend, E = a.map, u = a.noop, h = a.pick;
        C(a.Pointer.prototype, {
            pinchTranslate: function (a, h, l, k, e, c) {
                this.zoomHor && this.pinchTranslateDirection(!0, a, h, l, k, e, c);
                this.zoomVert && this.pinchTranslateDirection(!1, a, h, l, k, e, c)
            }, pinchTranslateDirection: function (a, h, l, k, e, c, p, u) {
                var b = this.chart, m = a ? "x" : "y", d = a ? "X" : "Y", r = "chart" +
                    d, n = a ? "width" : "height", v = b["plot" + (a ? "Left" : "Top")], f, y, t = u || 1, F = b.inverted, q = b.bounds[a ? "h" : "v"], x = 1 === h.length, J = h[0][r], K = l[0][r], L = !x && h[1][r], g = !x && l[1][r], D;
                l = function () {
                    !x && 20 < Math.abs(J - L) && (t = u || Math.abs(K - g) / Math.abs(J - L));
                    y = (v - K) / t + J;
                    f = b["plot" + (a ? "Width" : "Height")] / t
                };
                l();
                h = y;
                h < q.min ? (h = q.min, D = !0) : h + f > q.max && (h = q.max - f, D = !0);
                D ? (K -= .8 * (K - p[m][0]), x || (g -= .8 * (g - p[m][1])), l()) : p[m] = [K, g];
                F || (c[m] = y - v, c[n] = f);
                c = F ? 1 / t : t;
                e[n] = f;
                e[m] = h;
                k[F ? a ? "scaleY" : "scaleX" : "scale" + d] = t;
                k["translate" + d] = c *
                    v + (K - c * J)
            }, pinch: function (a) {
                var n = this, l = n.chart, k = n.pinchDown, e = a.touches, c = e.length, p = n.lastValidTouch, H = n.hasZoom, b = n.selectionMarker, m = {}, d = 1 === c && (n.inClass(a.target, "highcharts-tracker") && l.runTrackerClick || n.runChartClick), r = {};
                1 < c && (n.initiated = !0);
                H && n.initiated && !d && a.preventDefault();
                E(e, function (a) {
                    return n.normalize(a)
                });
                "touchstart" === a.type ? (z(e, function (a, b) {
                    k[b] = {chartX: a.chartX, chartY: a.chartY}
                }), p.x = [k[0].chartX, k[1] && k[1].chartX], p.y = [k[0].chartY, k[1] && k[1].chartY], z(l.axes, function (a) {
                    if (a.zoomEnabled) {
                        var b =
                            l.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, c = a.toPixels(h(a.options.min, a.dataMin)), e = a.toPixels(h(a.options.max, a.dataMax)), m = Math.max(c, e);
                        b.min = Math.min(a.pos, Math.min(c, e) - d);
                        b.max = Math.max(a.pos + a.len, m + d)
                    }
                }), n.res = !0) : n.followTouchMove && 1 === c ? this.runPointActions(n.normalize(a)) : k.length && (b || (n.selectionMarker = b = C({
                    destroy: u,
                    touch: !0
                }, l.plotBox)), n.pinchTranslate(k, e, m, b, r, p), n.hasPinched = H, n.scaleGroups(m, r), n.res && (n.res = !1, this.reset(!1, 0)))
            }, touch: function (n, t) {
                var l = this.chart, k, e;
                if (l.index !== a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget: !0});
                a.hoverChartIndex = l.index;
                1 === n.touches.length ? (n = this.normalize(n), (e = l.isInsidePlot(n.chartX - l.plotLeft, n.chartY - l.plotTop)) && !l.openMenu ? (t && this.runPointActions(n), "touchmove" === n.type && (t = this.pinchDown, k = t[0] ? 4 <= Math.sqrt(Math.pow(t[0].chartX - n.chartX, 2) + Math.pow(t[0].chartY - n.chartY, 2)) : !1), h(k, !0) && this.pinch(n)) : t && this.reset()) : 2 === n.touches.length && this.pinch(n)
            }, onContainerTouchStart: function (a) {
                this.zoomOption(a);
                this.touch(a, !0)
            }, onContainerTouchMove: function (a) {
                this.touch(a)
            }, onDocumentTouchEnd: function (h) {
                B[a.hoverChartIndex] && B[a.hoverChartIndex].pointer.drop(h)
            }
        })
    })(I);
    (function (a) {
        var B = a.addEvent, z = a.charts, C = a.css, E = a.doc, u = a.extend, h = a.noop, n = a.Pointer, t = a.removeEvent, l = a.win, k = a.wrap;
        if (l.PointerEvent || l.MSPointerEvent) {
            var e = {}, c = !!l.PointerEvent, p = function () {
                var a, c = [];
                c.item = function (a) {
                    return this[a]
                };
                for (a in e)e.hasOwnProperty(a) && c.push({pageX: e[a].pageX, pageY: e[a].pageY, target: e[a].target});
                return c
            }, H = function (b, c, d, e) {
                "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !z[a.hoverChartIndex] || (e(b), e = z[a.hoverChartIndex].pointer, e[c]({
                    type: d,
                    target: b.currentTarget,
                    preventDefault: h,
                    touches: p()
                }))
            };
            u(n.prototype, {
                onContainerPointerDown: function (a) {
                    H(a, "onContainerTouchStart", "touchstart", function (a) {
                        e[a.pointerId] = {pageX: a.pageX, pageY: a.pageY, target: a.currentTarget}
                    })
                }, onContainerPointerMove: function (a) {
                    H(a, "onContainerTouchMove", "touchmove", function (a) {
                        e[a.pointerId] = {
                            pageX: a.pageX,
                            pageY: a.pageY
                        };
                        e[a.pointerId].target || (e[a.pointerId].target = a.currentTarget)
                    })
                }, onDocumentPointerUp: function (a) {
                    H(a, "onDocumentTouchEnd", "touchend", function (a) {
                        delete e[a.pointerId]
                    })
                }, batchMSEvents: function (a) {
                    a(this.chart.container, c ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                    a(this.chart.container, c ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                    a(E, c ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                }
            });
            k(n.prototype, "init", function (a, c, d) {
                a.call(this, c, d);
                this.hasZoom &&
                C(c.container, {"-ms-touch-action": "none", "touch-action": "none"})
            });
            k(n.prototype, "setDOMEvents", function (a) {
                a.apply(this);
                (this.hasZoom || this.followTouchMove) && this.batchMSEvents(B)
            });
            k(n.prototype, "destroy", function (a) {
                this.batchMSEvents(t);
                a.call(this)
            })
        }
    })(I);
    (function (a) {
        var B, z = a.addEvent, C = a.css, E = a.discardElement, u = a.defined, h = a.each, n = a.isFirefox, t = a.marginNames, l = a.merge, k = a.pick, e = a.setAnimation, c = a.stableSort, p = a.win, H = a.wrap;
        B = a.Legend = function (a, c) {
            this.init(a, c)
        };
        B.prototype = {
            init: function (a,
                            c) {
                this.chart = a;
                this.setOptions(c);
                c.enabled && (this.render(), z(this.chart, "endResize", function () {
                    this.legend.positionCheckboxes()
                }))
            }, setOptions: function (a) {
                var b = k(a.padding, 8);
                this.options = a;
                this.itemStyle = a.itemStyle;
                this.itemHiddenStyle = l(this.itemStyle, a.itemHiddenStyle);
                this.itemMarginTop = a.itemMarginTop || 0;
                this.initialItemX = this.padding = b;
                this.initialItemY = b - 5;
                this.itemHeight = this.maxItemWidth = 0;
                this.symbolWidth = k(a.symbolWidth, 16);
                this.pages = []
            }, update: function (a, c) {
                var b = this.chart;
                this.setOptions(l(!0,
                    this.options, a));
                this.destroy();
                b.isDirtyLegend = b.isDirtyBox = !0;
                k(c, !0) && b.redraw()
            }, colorizeItem: function (a, c) {
                a.legendGroup[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                var b = this.options, e = a.legendItem, m = a.legendLine, k = a.legendSymbol, f = this.itemHiddenStyle.color, b = c ? b.itemStyle.color : f, p = c ? a.color || f : f, h = a.options && a.options.marker, l = {fill: p}, q;
                e && e.css({fill: b, color: b});
                m && m.attr({stroke: p});
                if (k) {
                    if (h && k.isMarker && (l = a.pointAttribs(), !c))for (q in l)l[q] = f;
                    k.attr(l)
                }
            }, positionItem: function (a) {
                var b =
                    this.options, d = b.symbolPadding, b = !b.rtl, c = a._legendItemPos, e = c[0], c = c[1], k = a.checkbox;
                (a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * d - 4, c);
                k && (k.x = e, k.y = c)
            }, destroyItem: function (a) {
                var b = a.checkbox;
                h(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
                    a[b] && (a[b] = a[b].destroy())
                });
                b && E(a.checkbox)
            }, destroy: function () {
                function a(a) {
                    this[a] && (this[a] = this[a].destroy())
                }

                h(this.getAllItems(), function (b) {
                    h(["legendItem", "legendGroup"], a, b)
                });
                h("clipRect up down pager nav box title group".split(" "),
                    a, this);
                this.display = null
            }, positionCheckboxes: function (a) {
                var b = this.group && this.group.alignAttr, d, c = this.clipHeight || this.legendHeight, e = this.titleHeight;
                b && (d = b.translateY, h(this.allItems, function (m) {
                    var f = m.checkbox, k;
                    f && (k = d + e + f.y + (a || 0) + 3, C(f, {
                        left: b.translateX + m.checkboxOffset + f.x - 20 + "px",
                        top: k + "px",
                        display: k > d - 6 && k < d + c - 6 ? "" : "none"
                    }))
                }))
            }, renderTitle: function () {
                var a = this.padding, c = this.options.title, d = 0;
                c.text && (this.title || (this.title = this.chart.renderer.label(c.text, a - 3, a - 4, null, null, null,
                    null, null, "legend-title").attr({zIndex: 1}).css(c.style).add(this.group)), a = this.title.getBBox(), d = a.height, this.offsetWidth = a.width, this.contentGroup.attr({translateY: d}));
                this.titleHeight = d
            }, setText: function (b) {
                var c = this.options;
                b.legendItem.attr({text: c.labelFormat ? a.format(c.labelFormat, b) : c.labelFormatter.call(b)})
            }, renderItem: function (a) {
                var b = this.chart, d = b.renderer, c = this.options, e = "horizontal" === c.layout, p = this.symbolWidth, f = c.symbolPadding, h = this.itemStyle, n = this.itemHiddenStyle, t = this.padding,
                    q = e ? k(c.itemDistance, 20) : 0, x = !c.rtl, J = c.width, u = c.itemMarginBottom || 0, L = this.itemMarginTop, g = this.initialItemX, D = a.legendItem, H = !a.series, z = !H && a.series.drawLegendSymbol ? a.series : a, B = z.options, B = this.createCheckboxForItem && B && B.showCheckbox, C = c.useHTML;
                D || (a.legendGroup = d.g("legend-item").addClass("highcharts-" + z.type + "-series highcharts-color-" + a.colorIndex + (a.options.className ? " " + a.options.className : "") + (H ? " highcharts-series-" + a.index : "")).attr({zIndex: 1}).add(this.scrollGroup), a.legendItem = D =
                    d.text("", x ? p + f : -f, this.baseline || 0, C).css(l(a.visible ? h : n)).attr({
                        align: x ? "left" : "right",
                        zIndex: 2
                    }).add(a.legendGroup), this.baseline || (h = h.fontSize, this.fontMetrics = d.fontMetrics(h, D), this.baseline = this.fontMetrics.f + 3 + L, D.attr("y", this.baseline)), this.symbolHeight = c.symbolHeight || this.fontMetrics.f, z.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, D, C), B && this.createCheckboxForItem(a));
                this.colorizeItem(a, a.visible);
                this.setText(a);
                d = D.getBBox();
                p = a.checkboxOffset = c.itemWidth ||
                    a.legendItemWidth || p + f + d.width + q + (B ? 20 : 0);
                this.itemHeight = f = Math.round(a.legendItemHeight || d.height);
                e && this.itemX - g + p > (J || b.chartWidth - 2 * t - g - c.x) && (this.itemX = g, this.itemY += L + this.lastLineHeight + u, this.lastLineHeight = 0);
                this.maxItemWidth = Math.max(this.maxItemWidth, p);
                this.lastItemY = L + this.itemY + u;
                this.lastLineHeight = Math.max(f, this.lastLineHeight);
                a._legendItemPos = [this.itemX, this.itemY];
                e ? this.itemX += p : (this.itemY += L + f + u, this.lastLineHeight = f);
                this.offsetWidth = J || Math.max((e ? this.itemX - g - q : p) + t,
                        this.offsetWidth)
            }, getAllItems: function () {
                var a = [];
                h(this.chart.series, function (b) {
                    var d = b && b.options;
                    b && k(d.showInLegend, u(d.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === d.legendType ? b.data : b)))
                });
                return a
            }, adjustMargins: function (a, c) {
                var b = this.chart, e = this.options, m = e.align.charAt(0) + e.verticalAlign.charAt(0) + e.layout.charAt(0);
                e.floating || h([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (d, f) {
                    d.test(m) && !u(a[f]) && (b[t[f]] = Math.max(b[t[f]], b.legend[(f + 1) %
                        2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][f] * e[f % 2 ? "x" : "y"] + k(e.margin, 12) + c[f]))
                })
            }, render: function () {
                var a = this, e = a.chart, d = e.renderer, k = a.group, p, n, f, y, t = a.box, u = a.options, q = a.padding;
                a.itemX = a.initialItemX;
                a.itemY = a.initialItemY;
                a.offsetWidth = 0;
                a.lastItemY = 0;
                k || (a.group = k = d.g("legend").attr({zIndex: 7}).add(), a.contentGroup = d.g().attr({zIndex: 1}).add(k), a.scrollGroup = d.g().add(a.contentGroup));
                a.renderTitle();
                p = a.getAllItems();
                c(p, function (a, b) {
                    return (a.options && a.options.legendIndex || 0) - (b.options &&
                        b.options.legendIndex || 0)
                });
                u.reversed && p.reverse();
                a.allItems = p;
                a.display = n = !!p.length;
                a.lastLineHeight = 0;
                h(p, function (b) {
                    a.renderItem(b)
                });
                f = (u.width || a.offsetWidth) + q;
                y = a.lastItemY + a.lastLineHeight + a.titleHeight;
                y = a.handleOverflow(y);
                y += q;
                t || (a.box = t = d.rect().addClass("highcharts-legend-box").attr({r: u.borderRadius}).add(k), t.isNew = !0);
                t.attr({
                    stroke: u.borderColor,
                    "stroke-width": u.borderWidth || 0,
                    fill: u.backgroundColor || "none"
                }).shadow(u.shadow);
                0 < f && 0 < y && (t[t.isNew ? "attr" : "animate"](t.crisp({
                    x: 0,
                    y: 0, width: f, height: y
                }, t.strokeWidth())), t.isNew = !1);
                t[n ? "show" : "hide"]();
                a.legendWidth = f;
                a.legendHeight = y;
                h(p, function (b) {
                    a.positionItem(b)
                });
                n && k.align(l(u, {width: f, height: y}), !0, "spacingBox");
                e.isResizing || this.positionCheckboxes()
            }, handleOverflow: function (a) {
                var b = this, d = this.chart, c = d.renderer, e = this.options, p = e.y, d = d.spacingBox.height + ("top" === e.verticalAlign ? -p : p) - this.padding, p = e.maxHeight, f, l = this.clipRect, n = e.navigation, t = k(n.animation, !0), q = n.arrowSize || 12, x = this.nav, u = this.pages, K = this.padding,
                    L, g = this.allItems, D = function (a) {
                        a ? l.attr({height: a}) : l && (b.clipRect = l.destroy(), b.contentGroup.clip());
                        b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + K + "px,9999px," + (K + a) + "px,0)" : "auto")
                    };
                "horizontal" !== e.layout || "middle" === e.verticalAlign || e.floating || (d /= 2);
                p && (d = Math.min(d, p));
                u.length = 0;
                a > d && !1 !== n.enabled ? (this.clipHeight = f = Math.max(d - 20 - this.titleHeight - K, 0), this.currentPage = k(this.currentPage, 1), this.fullHeight = a, h(g, function (a, b) {
                    var d = a._legendItemPos[1];
                    a = Math.round(a.legendItem.getBBox().height);
                    var c = u.length;
                    if (!c || d - u[c - 1] > f && (L || d) !== u[c - 1])u.push(L || d), c++;
                    b === g.length - 1 && d + a - u[c - 1] > f && u.push(d);
                    d !== L && (L = d)
                }), l || (l = b.clipRect = c.clipRect(0, K, 9999, 0), b.contentGroup.clip(l)), D(f), x || (this.nav = x = c.g().attr({zIndex: 1}).add(this.group), this.up = c.symbol("triangle", 0, 0, q, q).on("click", function () {
                    b.scroll(-1, t)
                }).add(x), this.pager = c.text("", 15, 10).addClass("highcharts-legend-navigation").css(n.style).add(x), this.down = c.symbol("triangle-down", 0, 0, q, q).on("click", function () {
                    b.scroll(1, t)
                }).add(x)),
                    b.scroll(0), a = d) : x && (D(), this.nav = x.destroy(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0);
                return a
            }, scroll: function (a, c) {
                var b = this.pages, m = b.length;
                a = this.currentPage + a;
                var k = this.clipHeight, p = this.options.navigation, f = this.pager, h = this.padding;
                a > m && (a = m);
                0 < a && (void 0 !== c && e(c, this.chart), this.nav.attr({
                    translateX: h,
                    translateY: k + this.padding + 7 + this.titleHeight,
                    visibility: "visible"
                }), this.up.attr({"class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"}), f.attr({
                    text: a +
                    "/" + m
                }), this.down.attr({
                    x: 18 + this.pager.getBBox().width,
                    "class": a === m ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                }), this.up.attr({fill: 1 === a ? p.inactiveColor : p.activeColor}).css({cursor: 1 === a ? "default" : "pointer"}), this.down.attr({fill: a === m ? p.inactiveColor : p.activeColor}).css({cursor: a === m ? "default" : "pointer"}), c = -b[a - 1] + this.initialItemY, this.scrollGroup.animate({translateY: c}), this.currentPage = a, this.positionCheckboxes(c))
            }
        };
        a.LegendSymbolMixin = {
            drawRectangle: function (a, c) {
                var b =
                    a.symbolHeight, e = a.options.squareSymbol;
                c.legendSymbol = this.chart.renderer.rect(e ? (a.symbolWidth - b) / 2 : 0, a.baseline - b + 1, e ? b : a.symbolWidth, b, k(a.options.symbolRadius, b / 2)).addClass("highcharts-point").attr({zIndex: 3}).add(c.legendGroup)
            }, drawLineMarker: function (a) {
                var b = this.options, c = b.marker, e = a.symbolWidth, p = a.symbolHeight, h = p / 2, f = this.chart.renderer, n = this.legendGroup;
                a = a.baseline - Math.round(.3 * a.fontMetrics.b);
                var t;
                t = {"stroke-width": b.lineWidth || 0};
                b.dashStyle && (t.dashstyle = b.dashStyle);
                this.legendLine =
                    f.path(["M", 0, a, "L", e, a]).addClass("highcharts-graph").attr(t).add(n);
                c && !1 !== c.enabled && (b = Math.min(k(c.radius, h), h), 0 === this.symbol.indexOf("url") && (c = l(c, {
                    width: p,
                    height: p
                }), b = 0), this.legendSymbol = c = f.symbol(this.symbol, e / 2 - b, a - b, 2 * b, 2 * b, c).addClass("highcharts-point").add(n), c.isMarker = !0)
            }
        };
        (/Trident\/7\.0/.test(p.navigator.userAgent) || n) && H(B.prototype, "positionItem", function (a, c) {
            var b = this, e = function () {
                c._legendItemPos && a.call(b, c)
            };
            e();
            setTimeout(e)
        })
    })(I);
    (function (a) {
        var B = a.addEvent, z =
            a.animate, C = a.animObject, E = a.attr, u = a.doc, h = a.Axis, n = a.createElement, t = a.defaultOptions, l = a.discardElement, k = a.charts, e = a.css, c = a.defined, p = a.each, H = a.extend, b = a.find, m = a.fireEvent, d = a.getStyle, r = a.grep, A = a.isNumber, v = a.isObject, f = a.isString, y = a.Legend, G = a.marginNames, F = a.merge, q = a.Pointer, x = a.pick, J = a.pInt, K = a.removeEvent, L = a.seriesTypes, g = a.splat, D = a.svg, S = a.syncTimeout, M = a.win, R = a.Renderer, N = a.Chart = function () {
            this.getArgs.apply(this, arguments)
        };
        a.chart = function (a, b, c) {
            return new N(a, b, c)
        };
        N.prototype =
        {
            callbacks: [], getArgs: function () {
            var a = [].slice.call(arguments);
            if (f(a[0]) || a[0].nodeName)this.renderTo = a.shift();
            this.init(a[0], a[1])
        }, init: function (b, c) {
            var d, f = b.series;
            b.series = null;
            d = F(t, b);
            d.series = b.series = f;
            this.userOptions = b;
            b = d.chart;
            f = b.events;
            this.margin = [];
            this.spacing = [];
            this.bounds = {h: {}, v: {}};
            this.callback = c;
            this.isResizing = 0;
            this.options = d;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = b.showAxes;
            var g;
            this.index = k.length;
            k.push(this);
            a.chartCount++;
            if (f)for (g in f)B(this, g,
                f[g]);
            this.xAxis = [];
            this.yAxis = [];
            this.pointCount = this.colorCounter = this.symbolCounter = 0;
            this.firstRender()
        }, initSeries: function (b) {
            var c = this.options.chart;
            (c = L[b.type || c.type || c.defaultSeriesType]) || a.error(17, !0);
            c = new c;
            c.init(this, b);
            return c
        }, orderSeries: function (a) {
            var b = this.series;
            for (a = a || 0; a < b.length; a++)b[a] && (b[a].index = a, b[a].name = b[a].name || "Series " + (b[a].index + 1))
        }, isInsidePlot: function (a, b, c) {
            var d = c ? b : a;
            a = c ? a : b;
            return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight
        }, redraw: function (b) {
            var c =
                this.axes, d = this.series, f = this.pointer, g = this.legend, e = this.isDirtyLegend, q, k, h = this.hasCartesianSeries, x = this.isDirtyBox, l, w = this.renderer, r = w.isHidden(), n = [];
            this.setResponsive && this.setResponsive(!1);
            a.setAnimation(b, this);
            r && this.cloneRenderTo();
            this.layOutTitles();
            for (b = d.length; b--;)if (l = d[b], l.options.stacking && (q = !0, l.isDirty)) {
                k = !0;
                break
            }
            if (k)for (b = d.length; b--;)l = d[b], l.options.stacking && (l.isDirty = !0);
            p(d, function (a) {
                a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(),
                    e = !0);
                a.isDirtyData && m(a, "updatedData")
            });
            e && g.options.enabled && (g.render(), this.isDirtyLegend = !1);
            q && this.getStacks();
            h && p(c, function (a) {
                a.updateNames();
                a.setScale()
            });
            this.getMargins();
            h && (p(c, function (a) {
                a.isDirty && (x = !0)
            }), p(c, function (a) {
                var b = a.min + "," + a.max;
                a.extKey !== b && (a.extKey = b, n.push(function () {
                    m(a, "afterSetExtremes", H(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                }));
                (x || q) && a.redraw()
            }));
            x && this.drawChartBox();
            m(this, "predraw");
            p(d, function (a) {
                (x || a.isDirty) && a.visible && a.redraw();
                a.isDirtyData = !1
            });
            f && f.reset(!0);
            w.draw();
            m(this, "redraw");
            m(this, "render");
            r && this.cloneRenderTo(!0);
            p(n, function (a) {
                a.call()
            })
        }, get: function (a) {
            function c(b) {
                return b.id === a || b.options && b.options.id === a
            }

            var d, f = this.series, g;
            d = b(this.axes, c) || b(this.series, c);
            for (g = 0; !d && g < f.length; g++)d = b(f[g].points || [], c);
            return d
        }, getAxes: function () {
            var a = this, b = this.options, c = b.xAxis = g(b.xAxis || {}), b = b.yAxis = g(b.yAxis || {});
            p(c, function (a, b) {
                a.index = b;
                a.isX = !0
            });
            p(b, function (a, b) {
                a.index = b
            });
            c = c.concat(b);
            p(c, function (b) {
                new h(a, b)
            })
        }, getSelectedPoints: function () {
            var a = [];
            p(this.series, function (b) {
                a = a.concat(r(b.points || [], function (a) {
                    return a.selected
                }))
            });
            return a
        }, getSelectedSeries: function () {
            return r(this.series, function (a) {
                return a.selected
            })
        }, setTitle: function (a, b, c) {
            var d = this, f = d.options, g;
            g = f.title = F({style: {color: "#333333", fontSize: f.isStock ? "16px" : "18px"}}, f.title, a);
            f = f.subtitle = F({style: {color: "#666666"}}, f.subtitle, b);
            p([["title", a, g], ["subtitle", b, f]], function (a, b) {
                var c = a[0], f = d[c],
                    g = a[1];
                a = a[2];
                f && g && (d[c] = f = f.destroy());
                a && a.text && !f && (d[c] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + c,
                    zIndex: a.zIndex || 4
                }).add(), d[c].update = function (a) {
                    d.setTitle(!b && a, b && a)
                }, d[c].css(a.style))
            });
            d.layOutTitles(c)
        }, layOutTitles: function (a) {
            var b = 0, c, d = this.renderer, f = this.spacingBox;
            p(["title", "subtitle"], function (a) {
                var c = this[a], g = this.options[a], e;
                c && (e = g.style.fontSize, e = d.fontMetrics(e, c).b, c.css({width: (g.width || f.width + g.widthAdjust) + "px"}).align(H({
                    y: b +
                    e + ("title" === a ? -3 : 2)
                }, g), !1, "spacingBox"), g.floating || g.verticalAlign || (b = Math.ceil(b + c.getBBox().height)))
            }, this);
            c = this.titleOffset !== b;
            this.titleOffset = b;
            !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && x(a, !0) && this.isDirtyBox && this.redraw())
        }, getChartSize: function () {
            var b = this.options.chart, f = b.width, b = b.height, g = this.renderToClone || this.renderTo;
            c(f) || (this.containerWidth = d(g, "width"));
            c(b) || (this.containerHeight = d(g, "height"));
            this.chartWidth = Math.max(0, f || this.containerWidth || 600);
            this.chartHeight = Math.max(0, a.relativeLength(b, this.chartWidth) || this.containerHeight || 400)
        }, cloneRenderTo: function (a) {
            var b = this.renderToClone, c = this.container;
            if (a) {
                if (b) {
                    for (; b.childNodes.length;)this.renderTo.appendChild(b.firstChild);
                    l(b);
                    delete this.renderToClone
                }
            } else c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), e(b, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), b.style.setProperty && b.style.setProperty("display", "block",
                "important"), u.body.appendChild(b), c && b.appendChild(c)
        }, setClassName: function (a) {
            this.container.className = "highcharts-container " + (a || "")
        }, getContainer: function () {
            var b, c = this.options, d = c.chart, g, e;
            b = this.renderTo;
            var q = a.uniqueKey(), m;
            b || (this.renderTo = b = d.renderTo);
            f(b) && (this.renderTo = b = u.getElementById(b));
            b || a.error(13, !0);
            g = J(E(b, "data-highcharts-chart"));
            A(g) && k[g] && k[g].hasRendered && k[g].destroy();
            E(b, "data-highcharts-chart", this.index);
            b.innerHTML = "";
            d.skipClone || b.offsetWidth || this.cloneRenderTo();
            this.getChartSize();
            g = this.chartWidth;
            e = this.chartHeight;
            m = H({
                position: "relative",
                overflow: "hidden",
                width: g + "px",
                height: e + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, d.style);
            this.container = b = n("div", {id: q}, m, this.renderToClone || b);
            this._cursor = b.style.cursor;
            this.renderer = new (a[d.renderer] || R)(b, g, e, null, d.forExport, c.exporting && c.exporting.allowHTML);
            this.setClassName(d.className);
            this.renderer.setStyle(d.style);
            this.renderer.chartIndex = this.index
        },
            getMargins: function (a) {
                var b = this.spacing, d = this.margin, f = this.titleOffset;
                this.resetMargins();
                f && !c(d[0]) && (this.plotTop = Math.max(this.plotTop, f + this.options.title.margin + b[0]));
                this.legend.display && this.legend.adjustMargins(d, b);
                this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] || 0) + this.extraMargin.value);
                this.extraTopMargin && (this.plotTop += this.extraTopMargin);
                a || this.getAxisMargins()
            }, getAxisMargins: function () {
            var a = this, b = a.axisOffset = [0, 0, 0, 0], d = a.margin;
            a.hasCartesianSeries &&
            p(a.axes, function (a) {
                a.visible && a.getOffset()
            });
            p(G, function (f, g) {
                c(d[g]) || (a[f] += b[g])
            });
            a.setChartSize()
        }, reflow: function (a) {
            var b = this, f = b.options.chart, g = b.renderTo, e = c(f.width), q = f.width || d(g, "width"), f = f.height || d(g, "height"), g = a ? a.target : M;
            if (!e && !b.isPrinting && q && f && (g === M || g === u)) {
                if (q !== b.containerWidth || f !== b.containerHeight)clearTimeout(b.reflowTimeout), b.reflowTimeout = S(function () {
                    b.container && b.setSize(void 0, void 0, !1)
                }, a ? 100 : 0);
                b.containerWidth = q;
                b.containerHeight = f
            }
        }, initReflow: function () {
            var a =
                this, b;
            b = B(M, "resize", function (b) {
                a.reflow(b)
            });
            B(a, "destroy", b)
        }, setSize: function (b, c, d) {
            var f = this, g = f.renderer;
            f.isResizing += 1;
            a.setAnimation(d, f);
            f.oldChartHeight = f.chartHeight;
            f.oldChartWidth = f.chartWidth;
            void 0 !== b && (f.options.chart.width = b);
            void 0 !== c && (f.options.chart.height = c);
            f.getChartSize();
            b = g.globalAnimation;
            (b ? z : e)(f.container, {width: f.chartWidth + "px", height: f.chartHeight + "px"}, b);
            f.setChartSize(!0);
            g.setSize(f.chartWidth, f.chartHeight, d);
            p(f.axes, function (a) {
                a.isDirty = !0;
                a.setScale()
            });
            f.isDirtyLegend = !0;
            f.isDirtyBox = !0;
            f.layOutTitles();
            f.getMargins();
            f.redraw(d);
            f.oldChartHeight = null;
            m(f, "resize");
            S(function () {
                f && m(f, "endResize", null, function () {
                    --f.isResizing
                })
            }, C(b).duration)
        }, setChartSize: function (a) {
            var b = this.inverted, c = this.renderer, d = this.chartWidth, f = this.chartHeight, g = this.options.chart, e = this.spacing, q = this.clipOffset, k, m, h, x;
            this.plotLeft = k = Math.round(this.plotLeft);
            this.plotTop = m = Math.round(this.plotTop);
            this.plotWidth = h = Math.max(0, Math.round(d - k - this.marginRight));
            this.plotHeight = x = Math.max(0, Math.round(f - m - this.marginBottom));
            this.plotSizeX = b ? x : h;
            this.plotSizeY = b ? h : x;
            this.plotBorderWidth = g.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {x: e[3], y: e[0], width: d - e[3] - e[1], height: f - e[0] - e[2]};
            this.plotBox = c.plotBox = {x: k, y: m, width: h, height: x};
            d = 2 * Math.floor(this.plotBorderWidth / 2);
            b = Math.ceil(Math.max(d, q[3]) / 2);
            c = Math.ceil(Math.max(d, q[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: Math.floor(this.plotSizeX - Math.max(d, q[1]) / 2 - b),
                height: Math.max(0, Math.floor(this.plotSizeY -
                    Math.max(d, q[2]) / 2 - c))
            };
            a || p(this.axes, function (a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        }, resetMargins: function () {
            var a = this, b = a.options.chart;
            p(["margin", "spacing"], function (c) {
                var d = b[c], f = v(d) ? d : [d, d, d, d];
                p(["Top", "Right", "Bottom", "Left"], function (d, g) {
                    a[c][g] = x(b[c + d], f[g])
                })
            });
            p(G, function (b, c) {
                a[b] = x(a.margin[c], a.spacing[c])
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0]
        }, drawChartBox: function () {
            var a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, f = this.chartBackground,
                g = this.plotBackground, e = this.plotBorder, q, k = this.plotBGImage, m = a.backgroundColor, p = a.plotBackgroundColor, h = a.plotBackgroundImage, x, l = this.plotLeft, r = this.plotTop, n = this.plotWidth, v = this.plotHeight, t = this.plotBox, y = this.clipRect, u = this.clipBox, J = "animate";
            f || (this.chartBackground = f = b.rect().addClass("highcharts-background").add(), J = "attr");
            q = a.borderWidth || 0;
            x = q + (a.shadow ? 8 : 0);
            m = {fill: m || "none"};
            if (q || f["stroke-width"])m.stroke = a.borderColor, m["stroke-width"] = q;
            f.attr(m).shadow(a.shadow);
            f[J]({
                x: x /
                2, y: x / 2, width: c - x - q % 2, height: d - x - q % 2, r: a.borderRadius
            });
            J = "animate";
            g || (J = "attr", this.plotBackground = g = b.rect().addClass("highcharts-plot-background").add());
            g[J](t);
            g.attr({fill: p || "none"}).shadow(a.plotShadow);
            h && (k ? k.animate(t) : this.plotBGImage = b.image(h, l, r, n, v).add());
            y ? y.animate({width: u.width, height: u.height}) : this.clipRect = b.clipRect(u);
            J = "animate";
            e || (J = "attr", this.plotBorder = e = b.rect().addClass("highcharts-plot-border").attr({zIndex: 1}).add());
            e.attr({
                stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth ||
                0, fill: "none"
            });
            e[J](e.crisp({x: l, y: r, width: n, height: v}, -e.strokeWidth()));
            this.isDirtyBox = !1
        }, propFromSeries: function () {
            var a = this, b = a.options.chart, c, d = a.options.series, f, g;
            p(["inverted", "angular", "polar"], function (e) {
                c = L[b.type || b.defaultSeriesType];
                g = b[e] || c && c.prototype[e];
                for (f = d && d.length; !g && f--;)(c = L[d[f].type]) && c.prototype[e] && (g = !0);
                a[e] = g
            })
        }, linkSeries: function () {
            var a = this, b = a.series;
            p(b, function (a) {
                a.linkedSeries.length = 0
            });
            p(b, function (b) {
                var c = b.options.linkedTo;
                f(c) && (c = ":previous" ===
                c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, b.visible = x(b.options.visible, c.options.visible, b.visible))
            })
        }, renderSeries: function () {
            p(this.series, function (a) {
                a.translate();
                a.render()
            })
        }, renderLabels: function () {
            var a = this, b = a.options.labels;
            b.items && p(b.items, function (c) {
                var d = H(b.style, c.style), f = J(d.left) + a.plotLeft, g = J(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, f, g).attr({zIndex: 2}).css(d).add()
            })
        }, render: function () {
            var a =
                this.axes, b = this.renderer, c = this.options, d, f, g;
            this.setTitle();
            this.legend = new y(this, c.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            c = this.plotWidth;
            d = this.plotHeight -= 21;
            p(a, function (a) {
                a.setScale()
            });
            this.getAxisMargins();
            f = 1.1 < c / this.plotWidth;
            g = 1.05 < d / this.plotHeight;
            if (f || g)p(a, function (a) {
                (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0)
            }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && p(a, function (a) {
                a.visible && a.render()
            });
            this.seriesGroup ||
            (this.seriesGroup = b.g("series-group").attr({zIndex: 3}).add());
            this.renderSeries();
            this.renderLabels();
            this.addCredits();
            this.setResponsive && this.setResponsive();
            this.hasRendered = !0
        }, addCredits: function (a) {
            var b = this;
            a = F(!0, this.options.credits, a);
            a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
                a.href && (M.location.href = a.href)
            }).attr({align: a.position.align, zIndex: 8}).css(a.style).add().align(a.position),
                this.credits.update = function (a) {
                    b.credits = b.credits.destroy();
                    b.addCredits(a)
                })
        }, destroy: function () {
            var b = this, c = b.axes, d = b.series, f = b.container, g, e = f && f.parentNode;
            m(b, "destroy");
            k[b.index] = void 0;
            a.chartCount--;
            b.renderTo.removeAttribute("data-highcharts-chart");
            K(b);
            for (g = c.length; g--;)c[g] = c[g].destroy();
            this.scroller && this.scroller.destroy && this.scroller.destroy();
            for (g = d.length; g--;)d[g] = d[g].destroy();
            p("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
                function (a) {
                    var c = b[a];
                    c && c.destroy && (b[a] = c.destroy())
                });
            f && (f.innerHTML = "", K(f), e && l(f));
            for (g in b)delete b[g]
        }, isReadyToRender: function () {
            var a = this;
            return D || M != M.top || "complete" === u.readyState ? !0 : (u.attachEvent("onreadystatechange", function () {
                u.detachEvent("onreadystatechange", a.firstRender);
                "complete" === u.readyState && a.firstRender()
            }), !1)
        }, firstRender: function () {
            var a = this, b = a.options;
            if (a.isReadyToRender()) {
                a.getContainer();
                m(a, "init");
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                p(b.series || [], function (b) {
                    a.initSeries(b)
                });
                a.linkSeries();
                m(a, "beforeRender");
                q && (a.pointer = new q(a, b));
                a.render();
                if (!a.renderer.imgCount && a.onload)a.onload();
                a.cloneRenderTo(!0)
            }
        }, onload: function () {
            p([this.callback].concat(this.callbacks), function (a) {
                a && void 0 !== this.index && a.apply(this, [this])
            }, this);
            m(this, "load");
            m(this, "render");
            c(this.index) && !1 !== this.options.chart.reflow && this.initReflow();
            this.onload = null
        }
        }
    })(I);
    (function (a) {
        var B, z = a.each, C = a.extend, E = a.erase, u = a.fireEvent,
            h = a.format, n = a.isArray, t = a.isNumber, l = a.pick, k = a.removeEvent;
        B = a.Point = function () {
        };
        B.prototype = {
            init: function (a, c, k) {
                this.series = a;
                this.color = a.color;
                this.applyOptions(c, k);
                a.options.colorByPoint ? (c = a.options.colors || a.chart.options.colors, this.color = this.color || c[a.colorCounter], c = c.length, k = a.colorCounter, a.colorCounter++, a.colorCounter === c && (a.colorCounter = 0)) : k = a.colorIndex;
                this.colorIndex = l(this.colorIndex, k);
                a.chart.pointCount++;
                return this
            }, applyOptions: function (a, c) {
                var e = this.series, k = e.options.pointValKey ||
                    e.pointValKey;
                a = B.prototype.optionsToObject.call(this, a);
                C(this, a);
                this.options = this.options ? C(this.options, a) : a;
                a.group && delete this.group;
                k && (this.y = this[k]);
                this.isNull = l(this.isValid && !this.isValid(), null === this.x || !t(this.y, !0));
                this.selected && (this.state = "select");
                "name"in this && void 0 === c && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this));
                void 0 === this.x && e && (this.x = void 0 === c ? e.autoIncrement(this) : c);
                return this
            }, optionsToObject: function (a) {
                var c = {}, e = this.series, k = e.options.keys,
                    b = k || e.pointArrayMap || ["y"], m = b.length, d = 0, h = 0;
                if (t(a) || null === a)c[b[0]] = a; else if (n(a))for (!k && a.length > m && (e = typeof a[0], "string" === e ? c.name = a[0] : "number" === e && (c.x = a[0]), d++); h < m;)k && void 0 === a[d] || (c[b[h]] = a[d]), d++, h++; else"object" === typeof a && (c = a, a.dataLabels && (e._hasPointLabels = !0), a.marker && (e._hasPointMarkers = !0));
                return c
            }, getClassName: function () {
                return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" :
                        "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
            }, getZone: function () {
                var a = this.series, c = a.zones, a = a.zoneAxis || "y", k = 0, h;
                for (h = c[k]; this[a] >= h.value;)h = c[++k];
                h && h.color && !this.options.color && (this.color = h.color);
                return h
            }, destroy: function () {
                var a = this.series.chart, c = a.hoverPoints, h;
                a.pointCount--;
                c && (this.setState(), E(c, this), c.length ||
                (a.hoverPoints = null));
                if (this === a.hoverPoint)this.onMouseOut();
                if (this.graphic || this.dataLabel)k(this), this.destroyElements();
                this.legendItem && a.legend.destroyItem(this);
                for (h in this)this[h] = null
            }, destroyElements: function () {
                for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], c, k = 6; k--;)c = a[k], this[c] && (this[c] = this[c].destroy())
            }, getLabelConfig: function () {
                return {
                    x: this.category,
                    y: this.y,
                    color: this.color,
                    colorIndex: this.colorIndex,
                    key: this.name || this.category,
                    series: this.series,
                    point: this,
                    percentage: this.percentage,
                    total: this.total || this.stackTotal
                }
            }, tooltipFormatter: function (a) {
                var c = this.series, e = c.tooltipOptions, k = l(e.valueDecimals, ""), b = e.valuePrefix || "", m = e.valueSuffix || "";
                z(c.pointArrayMap || ["y"], function (c) {
                    c = "{point." + c;
                    if (b || m)a = a.replace(c + "}", b + c + "}" + m);
                    a = a.replace(c + "}", c + ":,." + k + "f}")
                });
                return h(a, {point: this, series: this.series})
            }, firePointEvent: function (a, c, k) {
                var e = this, b = this.series.options;
                (b.point.events[a] || e.options && e.options.events && e.options.events[a]) &&
                this.importEvents();
                "click" === a && b.allowPointSelect && (k = function (a) {
                    e.select && e.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
                });
                u(this, a, c, k)
            }, visible: !0
        }
    })(I);
    (function (a) {
        var B = a.addEvent, z = a.animObject, C = a.arrayMax, E = a.arrayMin, u = a.correctFloat, h = a.Date, n = a.defaultOptions, t = a.defaultPlotOptions, l = a.defined, k = a.each, e = a.erase, c = a.extend, p = a.fireEvent, H = a.grep, b = a.isArray, m = a.isNumber, d = a.isString, r = a.merge, A = a.pick, v = a.removeEvent, f = a.splat, y = a.SVGElement, G = a.syncTimeout, F = a.win;
        a.Series = a.seriesType("line",
            null, {
                lineWidth: 2,
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {duration: 1E3},
                events: {},
                marker: {
                    lineWidth: 0,
                    lineColor: "#ffffff",
                    radius: 4,
                    states: {
                        hover: {animation: {duration: 50}, enabled: !0, radiusPlus: 2, lineWidthPlus: 1},
                        select: {fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2}
                    }
                },
                point: {events: {}},
                dataLabels: {
                    align: "center",
                    formatter: function () {
                        return null === this.y ? "" : a.numberFormat(this.y, -1)
                    },
                    style: {fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast"},
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                softThreshold: !0,
                states: {
                    hover: {
                        animation: {duration: 50},
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {size: 10, opacity: .25}
                    }, select: {marker: {}}
                },
                stickyTracking: !0,
                turboThreshold: 1E3
            }, {
                isCartesian: !0,
                pointClass: a.Point,
                sorted: !0,
                requireSorting: !0,
                directTouch: !1,
                axisTypes: ["xAxis", "yAxis"],
                colorCounter: 0,
                parallelArrays: ["x", "y"],
                coll: "series",
                init: function (a, b) {
                    var d = this, f, e, g = a.series, q;
                    d.chart = a;
                    d.options = b = d.setOptions(b);
                    d.linkedSeries = [];
                    d.bindAxes();
                    c(d, {
                        name: b.name,
                        state: "", visible: !1 !== b.visible, selected: !0 === b.selected
                    });
                    e = b.events;
                    for (f in e)B(d, f, e[f]);
                    if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect)a.runTrackerClick = !0;
                    d.getColor();
                    d.getSymbol();
                    k(d.parallelArrays, function (a) {
                        d[a + "Data"] = []
                    });
                    d.setData(b.data, !1);
                    d.isCartesian && (a.hasCartesianSeries = !0);
                    g.length && (q = g[g.length - 1]);
                    d._i = A(q && q._i, -1) + 1;
                    a.orderSeries(this.insert(g))
                },
                insert: function (a) {
                    var b = this.options.index, c;
                    if (m(b)) {
                        for (c = a.length; c--;)if (b >= A(a[c].options.index,
                                a[c]._i)) {
                            a.splice(c + 1, 0, this);
                            break
                        }
                        -1 === c && a.unshift(this);
                        c += 1
                    } else a.push(this);
                    return A(c, a.length - 1)
                },
                bindAxes: function () {
                    var b = this, c = b.options, d = b.chart, f;
                    k(b.axisTypes || [], function (e) {
                        k(d[e], function (a) {
                            f = a.options;
                            if (c[e] === f.index || void 0 !== c[e] && c[e] === f.id || void 0 === c[e] && 0 === f.index)b.insert(a.series), b[e] = a, a.isDirty = !0
                        });
                        b[e] || b.optionalAxis === e || a.error(18, !0)
                    })
                },
                updateParallelArrays: function (a, b) {
                    var c = a.series, d = arguments, f = m(b) ? function (d) {
                        var f = "y" === d && c.toYData ? c.toYData(a) :
                            a[d];
                        c[d + "Data"][b] = f
                    } : function (a) {
                        Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
                    };
                    k(c.parallelArrays, f)
                },
                autoIncrement: function () {
                    var a = this.options, b = this.xIncrement, c, d = a.pointIntervalUnit, b = A(b, a.pointStart, 0);
                    this.pointInterval = c = A(this.pointInterval, a.pointInterval, 1);
                    d && (a = new h(b), "day" === d ? a = +a[h.hcSetDate](a[h.hcGetDate]() + c) : "month" === d ? a = +a[h.hcSetMonth](a[h.hcGetMonth]() + c) : "year" === d && (a = +a[h.hcSetFullYear](a[h.hcGetFullYear]() + c)), c = a - b);
                    this.xIncrement = b + c;
                    return b
                },
                setOptions: function (a) {
                    var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, f = c[this.type];
                    this.userOptions = a;
                    c = r(f, c.series, a);
                    this.tooltipOptions = r(n.tooltip, n.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
                    null === f.marker && delete c.marker;
                    this.zoneAxis = c.zoneAxis;
                    a = this.zones = (c.zones || []).slice();
                    !c.negativeColor && !c.negativeFillColor || c.zones || a.push({
                        value: c[this.zoneAxis + "Threshold"] || c.threshold ||
                        0, className: "highcharts-negative", color: c.negativeColor, fillColor: c.negativeFillColor
                    });
                    a.length && l(a[a.length - 1].value) && a.push({color: this.color, fillColor: this.fillColor});
                    return c
                },
                getCyclic: function (a, b, c) {
                    var d, f = this.chart, g = this.userOptions, e = a + "Index", q = a + "Counter", k = c ? c.length : A(f.options.chart[a + "Count"], f[a + "Count"]);
                    b || (d = A(g[e], g["_" + e]), l(d) || (f.series.length || (f[q] = 0), g["_" + e] = d = f[q] % k, f[q] += 1), c && (b = c[d]));
                    void 0 !== d && (this[e] = d);
                    this[a] = b
                },
                getColor: function () {
                    this.options.colorByPoint ?
                        this.options.color = null : this.getCyclic("color", this.options.color || t[this.type].color, this.chart.options.colors)
                },
                getSymbol: function () {
                    this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
                },
                drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker,
                setData: function (c, f, e, h) {
                    var q = this, g = q.points, p = g && g.length || 0, l, x = q.options, r = q.chart, n = null, v = q.xAxis, t = x.turboThreshold, y = this.xData, u = this.yData, G = (l = q.pointArrayMap) && l.length;
                    c = c || [];
                    l = c.length;
                    f = A(f, !0);
                    if (!1 !== h && l && p === l && !q.cropped && !q.hasGroupedData && q.visible)k(c, function (a, b) {
                        g[b].update && a !== x.data[b] && g[b].update(a, !1, null, !1)
                    }); else {
                        q.xIncrement = null;
                        q.colorCounter = 0;
                        k(this.parallelArrays, function (a) {
                            q[a + "Data"].length = 0
                        });
                        if (t && l > t) {
                            for (e = 0; null === n && e < l;)n = c[e], e++;
                            if (m(n))for (e = 0; e < l; e++)y[e] = this.autoIncrement(), u[e] = c[e]; else if (b(n))if (G)for (e = 0; e < l; e++)n = c[e], y[e] = n[0], u[e] = n.slice(1, G + 1); else for (e = 0; e < l; e++)n = c[e], y[e] = n[0], u[e] = n[1]; else a.error(12)
                        } else for (e = 0; e < l; e++)void 0 !== c[e] && (n = {series: q}, q.pointClass.prototype.applyOptions.apply(n,
                            [c[e]]), q.updateParallelArrays(n, e));
                        d(u[0]) && a.error(14, !0);
                        q.data = [];
                        q.options.data = q.userOptions.data = c;
                        for (e = p; e--;)g[e] && g[e].destroy && g[e].destroy();
                        v && (v.minRange = v.userMinRange);
                        q.isDirty = r.isDirtyBox = !0;
                        q.isDirtyData = !!g;
                        e = !1
                    }
                    "point" === x.legendType && (this.processData(), this.generatePoints());
                    f && r.redraw(e)
                },
                processData: function (b) {
                    var c = this.xData, d = this.yData, f = c.length, e;
                    e = 0;
                    var g, q, k = this.xAxis, m, h = this.options;
                    m = h.cropThreshold;
                    var l = this.getExtremesFromAll || h.getExtremesFromAll, p = this.isCartesian,
                        h = k && k.val2lin, n = k && k.isLog, r, v;
                    if (p && !this.isDirty && !k.isDirty && !this.yAxis.isDirty && !b)return !1;
                    k && (b = k.getExtremes(), r = b.min, v = b.max);
                    if (p && this.sorted && !l && (!m || f > m || this.forceCrop))if (c[f - 1] < r || c[0] > v)c = [], d = []; else if (c[0] < r || c[f - 1] > v)e = this.cropData(this.xData, this.yData, r, v), c = e.xData, d = e.yData, e = e.start, g = !0;
                    for (m = c.length || 1; --m;)f = n ? h(c[m]) - h(c[m - 1]) : c[m] - c[m - 1], 0 < f && (void 0 === q || f < q) ? q = f : 0 > f && this.requireSorting && a.error(15);
                    this.cropped = g;
                    this.cropStart = e;
                    this.processedXData = c;
                    this.processedYData =
                        d;
                    this.closestPointRange = q
                },
                cropData: function (a, b, c, d) {
                    var f = a.length, g = 0, e = f, q = A(this.cropShoulder, 1), k;
                    for (k = 0; k < f; k++)if (a[k] >= c) {
                        g = Math.max(0, k - q);
                        break
                    }
                    for (c = k; c < f; c++)if (a[c] > d) {
                        e = c + q;
                        break
                    }
                    return {xData: a.slice(g, e), yData: b.slice(g, e), start: g, end: e}
                },
                generatePoints: function () {
                    var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, g = this.pointClass, k = d.length, m = this.cropStart || 0, h, l = this.hasGroupedData, p, n = [], r;
                    b || l || (b = [], b.length = a.length, b = this.data = b);
                    for (r = 0; r <
                    k; r++)h = m + r, l ? (p = (new g).init(this, [d[r]].concat(f(e[r]))), p.dataGroup = this.groupMap[r]) : (p = b[h]) || void 0 === a[h] || (b[h] = p = (new g).init(this, a[h], d[r])), p.index = h, n[r] = p;
                    if (b && (k !== (c = b.length) || l))for (r = 0; r < c; r++)r !== m || l || (r += k), b[r] && (b[r].destroyElements(), b[r].plotX = void 0);
                    this.data = b;
                    this.points = n
                },
                getExtremes: function (a) {
                    var c = this.yAxis, d = this.processedXData, f, e = [], g = 0;
                    f = this.xAxis.getExtremes();
                    var q = f.min, k = f.max, h, l, p, r;
                    a = a || this.stackedYData || this.processedYData || [];
                    f = a.length;
                    for (r = 0; r <
                    f; r++)if (l = d[r], p = a[r], h = (m(p, !0) || b(p)) && (!c.positiveValuesOnly || p.length || 0 < p), l = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (d[r + 1] || l) >= q && (d[r - 1] || l) <= k, h && l)if (h = p.length)for (; h--;)null !== p[h] && (e[g++] = p[h]); else e[g++] = p;
                    this.dataMin = E(e);
                    this.dataMax = C(e)
                },
                translate: function () {
                    this.processedXData || this.processData();
                    this.generatePoints();
                    var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, f = this.yAxis, e = this.points, k = e.length, h = !!this.modifyValue, p = a.pointPlacement,
                        r = "between" === p || m(p), n = a.threshold, v = a.startFromThreshold ? n : 0, t, y, G, F, H = Number.MAX_VALUE;
                    "between" === p && (p = .5);
                    m(p) && (p *= A(a.pointRange || c.pointRange));
                    for (a = 0; a < k; a++) {
                        var z = e[a], B = z.x, C = z.y;
                        y = z.low;
                        var E = b && f.stacks[(this.negStacks && C < (v ? 0 : n) ? "-" : "") + this.stackKey], I;
                        f.positiveValuesOnly && null !== C && 0 >= C && (z.isNull = !0);
                        z.plotX = t = u(Math.min(Math.max(-1E5, c.translate(B, 0, 0, 0, 1, p, "flags" === this.type)), 1E5));
                        b && this.visible && !z.isNull && E && E[B] && (F = this.getStackIndicator(F, B, this.index), I = E[B], C = I.points[F.key],
                            y = C[0], C = C[1], y === v && F.key === E[B].base && (y = A(n, f.min)), f.positiveValuesOnly && 0 >= y && (y = null), z.total = z.stackTotal = I.total, z.percentage = I.total && z.y / I.total * 100, z.stackY = C, I.setOffset(this.pointXOffset || 0, this.barW || 0));
                        z.yBottom = l(y) ? f.translate(y, 0, 1, 0, 1) : null;
                        h && (C = this.modifyValue(C, z));
                        z.plotY = y = "number" === typeof C && Infinity !== C ? Math.min(Math.max(-1E5, f.translate(C, 0, 1, 0, 1)), 1E5) : void 0;
                        z.isInside = void 0 !== y && 0 <= y && y <= f.len && 0 <= t && t <= c.len;
                        z.clientX = r ? u(c.translate(B, 0, 0, 0, 1, p)) : t;
                        z.negative = z.y <
                            (n || 0);
                        z.category = d && void 0 !== d[z.x] ? d[z.x] : z.x;
                        z.isNull || (void 0 !== G && (H = Math.min(H, Math.abs(t - G))), G = t);
                        z.zone = this.zones.length && z.getZone()
                    }
                    this.closestPointRangePx = H
                },
                getValidPoints: function (a, b) {
                    var c = this.chart;
                    return H(a || this.points || [], function (a) {
                        return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : !a.isNull
                    })
                },
                setClip: function (a) {
                    var b = this.chart, c = this.options, d = b.renderer, f = b.inverted, e = this.clipBox, q = e || b.clipBox, k = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, q.height,
                            c.xAxis, c.yAxis].join(), m = b[k], h = b[k + "m"];
                    m || (a && (q.width = 0, b[k + "m"] = h = d.clipRect(-99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), b[k] = m = d.clipRect(q), m.count = {length: 0});
                    a && !m.count[this.index] && (m.count[this.index] = !0, m.count.length += 1);
                    !1 !== c.clip && (this.group.clip(a || e ? m : b.clipRect), this.markerGroup.clip(h), this.sharedClipKey = k);
                    a || (m.count[this.index] && (delete m.count[this.index], --m.count.length), 0 === m.count.length && k && b[k] && (e || (b[k] = b[k].destroy()), b[k + "m"] && (this.markerGroup.clip(),
                        b[k + "m"] = b[k + "m"].destroy())))
                },
                animate: function (a) {
                    var b = this.chart, c = z(this.options.animation), d;
                    a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({width: b.plotSizeX}, c), b[d + "m"] && b[d + "m"].animate({width: b.plotSizeX + 99}, c), this.animate = null)
                },
                afterAnimate: function () {
                    this.setClip();
                    p(this, "afterAnimate")
                },
                drawPoints: function () {
                    var a = this.points, b = this.chart, c, d, f, e, k = this.options.marker, h, p, l, r, n = this.markerGroup, v = A(k.enabled, this.xAxis.isRadial ? !0 : null, this.closestPointRangePx >= 2 * k.radius);
                    if (!1 !== k.enabled || this._hasPointMarkers)for (d = 0; d < a.length; d++)f = a[d], c = f.plotY, e = f.graphic, h = f.marker || {}, p = !!f.marker, l = v && void 0 === h.enabled || h.enabled, r = f.isInside, l && m(c) && null !== f.y ? (c = A(h.symbol, this.symbol), f.hasImage = 0 === c.indexOf("url"), l = this.markerAttribs(f, f.selected && "select"), e ? e[r ? "show" : "hide"](!0).animate(l) : r && (0 < l.width || f.hasImage) && (f.graphic = e = b.renderer.symbol(c, l.x, l.y, l.width, l.height, p ? h : k).add(n)), e && e.attr(this.pointAttribs(f, f.selected && "select")), e && e.addClass(f.getClassName(),
                        !0)) : e && (f.graphic = e.destroy())
                },
                markerAttribs: function (a, b) {
                    var c = this.options.marker, d = a.marker || {}, f = A(d.radius, c.radius);
                    b && (c = c.states[b], b = d.states && d.states[b], f = A(b && b.radius, c && c.radius, f + (c && c.radiusPlus || 0)));
                    a.hasImage && (f = 0);
                    a = {x: Math.floor(a.plotX) - f, y: a.plotY - f};
                    f && (a.width = a.height = 2 * f);
                    return a
                },
                pointAttribs: function (a, b) {
                    var c = this.options.marker, d = a && a.options, f = d && d.marker || {}, e = this.color, q = d && d.color, k = a && a.color, d = A(f.lineWidth, c.lineWidth);
                    a = a && a.zone && a.zone.color;
                    e = q || a ||
                        k || e;
                    a = f.fillColor || c.fillColor || e;
                    e = f.lineColor || c.lineColor || e;
                    b && (c = c.states[b], b = f.states && f.states[b] || {}, d = A(b.lineWidth, c.lineWidth, d + A(b.lineWidthPlus, c.lineWidthPlus, 0)), a = b.fillColor || c.fillColor || a, e = b.lineColor || c.lineColor || e);
                    return {stroke: e, "stroke-width": d, fill: a}
                },
                destroy: function () {
                    var a = this, b = a.chart, c = /AppleWebKit\/533/.test(F.navigator.userAgent), d, f = a.data || [], g, m, h;
                    p(a, "destroy");
                    v(a);
                    k(a.axisTypes || [], function (b) {
                        (h = a[b]) && h.series && (e(h.series, a), h.isDirty = h.forceRedraw = !0)
                    });
                    a.legendItem && a.chart.legend.destroyItem(a);
                    for (d = f.length; d--;)(g = f[d]) && g.destroy && g.destroy();
                    a.points = null;
                    clearTimeout(a.animationTimeout);
                    for (m in a)a[m]instanceof y && !a[m].survive && (d = c && "group" === m ? "hide" : "destroy", a[m][d]());
                    b.hoverSeries === a && (b.hoverSeries = null);
                    e(b.series, a);
                    b.orderSeries();
                    for (m in a)delete a[m]
                },
                getGraphPath: function (a, b, c) {
                    var d = this, f = d.options, e = f.step, q, m = [], h = [], p;
                    a = a || d.points;
                    (q = a.reversed) && a.reverse();
                    (e = {right: 1, center: 2}[e] || e && 3) && q && (e = 4 - e);
                    !f.connectNulls ||
                    b || c || (a = this.getValidPoints(a));
                    k(a, function (g, k) {
                        var q = g.plotX, r = g.plotY, n = a[k - 1];
                        (g.leftCliff || n && n.rightCliff) && !c && (p = !0);
                        g.isNull && !l(b) && 0 < k ? p = !f.connectNulls : g.isNull && !b ? p = !0 : (0 === k || p ? k = ["M", g.plotX, g.plotY] : d.getPointSpline ? k = d.getPointSpline(a, g, k) : e ? (k = 1 === e ? ["L", n.plotX, r] : 2 === e ? ["L", (n.plotX + q) / 2, n.plotY, "L", (n.plotX + q) / 2, r] : ["L", q, n.plotY], k.push("L", q, r)) : k = ["L", q, r], h.push(g.x), e && h.push(g.x), m.push.apply(m, k), p = !1)
                    });
                    m.xMap = h;
                    return d.graphPath = m
                },
                drawGraph: function () {
                    var a = this,
                        b = this.options, c = (this.gappedPath || this.getGraphPath).call(this), d = [["graph", "highcharts-graph", b.lineColor || this.color, b.dashStyle]];
                    k(this.zones, function (c, f) {
                        d.push(["zone-graph-" + f, "highcharts-graph highcharts-zone-graph-" + f + " " + (c.className || ""), c.color || a.color, c.dashStyle || b.dashStyle])
                    });
                    k(d, function (d, f) {
                        var e = d[0], g = a[e];
                        g ? (g.endX = c.xMap, g.animate({d: c})) : c.length && (a[e] = a.chart.renderer.path(c).addClass(d[1]).attr({zIndex: 1}).add(a.group), g = {
                            stroke: d[2], "stroke-width": b.lineWidth, fill: a.fillGraph &&
                            a.color || "none"
                        }, d[3] ? g.dashstyle = d[3] : "square" !== b.linecap && (g["stroke-linecap"] = g["stroke-linejoin"] = "round"), g = a[e].attr(g).shadow(2 > f && b.shadow));
                        g && (g.startX = c.xMap, g.isArea = c.isArea)
                    })
                },
                applyZones: function () {
                    var a = this, b = this.chart, c = b.renderer, d = this.zones, f, e, m = this.clips || [], h, p = this.graph, l = this.area, r = Math.max(b.chartWidth, b.chartHeight), n = this[(this.zoneAxis || "y") + "Axis"], v, t, y = b.inverted, u, G, F, H, z = !1;
                    d.length && (p || l) && n && void 0 !== n.min && (t = n.reversed, u = n.horiz, p && p.hide(), l && l.hide(),
                        v = n.getExtremes(), k(d, function (d, g) {
                        f = t ? u ? b.plotWidth : 0 : u ? 0 : n.toPixels(v.min);
                        f = Math.min(Math.max(A(e, f), 0), r);
                        e = Math.min(Math.max(Math.round(n.toPixels(A(d.value, v.max), !0)), 0), r);
                        z && (f = e = n.toPixels(v.max));
                        G = Math.abs(f - e);
                        F = Math.min(f, e);
                        H = Math.max(f, e);
                        n.isXAxis ? (h = {
                            x: y ? H : F,
                            y: 0,
                            width: G,
                            height: r
                        }, u || (h.x = b.plotHeight - h.x)) : (h = {
                            x: 0,
                            y: y ? H : F,
                            width: r,
                            height: G
                        }, u && (h.y = b.plotWidth - h.y));
                        y && c.isVML && (h = n.isXAxis ? {x: 0, y: t ? F : H, height: h.width, width: b.chartWidth} : {
                            x: h.y - b.plotLeft - b.spacingBox.x, y: 0, width: h.height,
                            height: b.chartHeight
                        });
                        m[g] ? m[g].animate(h) : (m[g] = c.clipRect(h), p && a["zone-graph-" + g].clip(m[g]), l && a["zone-area-" + g].clip(m[g]));
                        z = d.value > v.max
                    }), this.clips = m)
                },
                invertGroups: function (a) {
                    function b() {
                        k(["group", "markerGroup"], function (b) {
                            c[b] && (d.renderer.isVML && c[b].attr({
                                width: c.yAxis.len,
                                height: c.xAxis.len
                            }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(a))
                        })
                    }

                    var c = this, d = c.chart, f;
                    c.xAxis && (f = B(d, "resize", b), B(c, "destroy", f), b(a), c.invertGroups = b)
                },
                plotGroup: function (a, b, c, d, f) {
                    var e =
                        this[a], k = !e;
                    k && (this[a] = e = this.chart.renderer.g(b).attr({zIndex: d || .1}).add(f), e.addClass("highcharts-series-" + this.index + " highcharts-" + this.type + "-series highcharts-color-" + this.colorIndex + " " + (this.options.className || "")));
                    e.attr({visibility: c})[k ? "attr" : "animate"](this.getPlotBox());
                    return e
                },
                getPlotBox: function () {
                    var a = this.chart, b = this.xAxis, c = this.yAxis;
                    a.inverted && (b = c, c = this.xAxis);
                    return {
                        translateX: b ? b.left : a.plotLeft,
                        translateY: c ? c.top : a.plotTop,
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                render: function () {
                    var a =
                        this, b = a.chart, c, d = a.options, f = !!a.animate && b.renderer.isSVG && z(d.animation).duration, e = a.visible ? "inherit" : "hidden", k = d.zIndex, m = a.hasRendered, h = b.seriesGroup, p = b.inverted;
                    c = a.plotGroup("group", "series", e, k, h);
                    a.markerGroup = a.plotGroup("markerGroup", "markers", e, k, h);
                    f && a.animate(!0);
                    c.inverted = a.isCartesian ? p : !1;
                    a.drawGraph && (a.drawGraph(), a.applyZones());
                    a.drawDataLabels && a.drawDataLabels();
                    a.visible && a.drawPoints();
                    a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
                    a.invertGroups(p);
                    !1 === d.clip || a.sharedClipKey || m || c.clip(b.clipRect);
                    f && a.animate();
                    m || (a.animationTimeout = G(function () {
                        a.afterAnimate()
                    }, f));
                    a.isDirty = !1;
                    a.hasRendered = !0
                },
                redraw: function () {
                    var a = this.chart, b = this.isDirty || this.isDirtyData, c = this.group, d = this.xAxis, f = this.yAxis;
                    c && (a.inverted && c.attr({
                        width: a.plotWidth,
                        height: a.plotHeight
                    }), c.animate({translateX: A(d && d.left, a.plotLeft), translateY: A(f && f.top, a.plotTop)}));
                    this.translate();
                    this.render();
                    b && delete this.kdTree
                },
                kdDimensions: 1,
                kdAxisArray: ["clientX",
                    "plotY"],
                searchPoint: function (a, b) {
                    var c = this.xAxis, d = this.yAxis, f = this.chart.inverted;
                    return this.searchKDTree({
                        clientX: f ? c.len - a.chartY + c.pos : a.chartX - c.pos,
                        plotY: f ? d.len - a.chartX + d.pos : a.chartY - d.pos
                    }, b)
                },
                buildKDTree: function () {
                    function a(c, d, f) {
                        var e, g;
                        if (g = c && c.length)return e = b.kdAxisArray[d % f], c.sort(function (a, b) {
                            return a[e] - b[e]
                        }), g = Math.floor(g / 2), {
                            point: c[g],
                            left: a(c.slice(0, g), d + 1, f),
                            right: a(c.slice(g + 1), d + 1, f)
                        }
                    }

                    this.buildingKdTree = !0;
                    var b = this, c = b.kdDimensions;
                    delete b.kdTree;
                    G(function () {
                        b.kdTree =
                            a(b.getValidPoints(null, !b.directTouch), c, c);
                        b.buildingKdTree = !1
                    }, b.options.kdNow ? 0 : 1)
                },
                searchKDTree: function (a, b) {
                    function c(a, b, g, m) {
                        var h = b.point, p = d.kdAxisArray[g % m], q, r, n = h;
                        r = l(a[f]) && l(h[f]) ? Math.pow(a[f] - h[f], 2) : null;
                        q = l(a[e]) && l(h[e]) ? Math.pow(a[e] - h[e], 2) : null;
                        q = (r || 0) + (q || 0);
                        h.dist = l(q) ? Math.sqrt(q) : Number.MAX_VALUE;
                        h.distX = l(r) ? Math.sqrt(r) : Number.MAX_VALUE;
                        p = a[p] - h[p];
                        q = 0 > p ? "left" : "right";
                        r = 0 > p ? "right" : "left";
                        b[q] && (q = c(a, b[q], g + 1, m), n = q[k] < n[k] ? q : h);
                        b[r] && Math.sqrt(p * p) < n[k] && (a = c(a,
                            b[r], g + 1, m), n = a[k] < n[k] ? a : n);
                        return n
                    }

                    var d = this, f = this.kdAxisArray[0], e = this.kdAxisArray[1], k = b ? "distX" : "dist";
                    this.kdTree || this.buildingKdTree || this.buildKDTree();
                    if (this.kdTree)return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
                }
            })
    })(I);
    (function (a) {
        function B(a, e, c, h, n) {
            var b = a.chart.inverted;
            this.axis = a;
            this.isNegative = c;
            this.options = e;
            this.x = h;
            this.total = null;
            this.points = {};
            this.stack = n;
            this.rightCliff = this.leftCliff = 0;
            this.alignOptions = {
                align: e.align || (b ? c ? "left" : "right" : "center"),
                verticalAlign: e.verticalAlign || (b ? "middle" : c ? "bottom" : "top"),
                y: l(e.y, b ? 4 : c ? 14 : -6),
                x: l(e.x, b ? c ? -6 : 6 : 0)
            };
            this.textAlign = e.textAlign || (b ? c ? "right" : "left" : "center")
        }

        var z = a.Axis, C = a.Chart, E = a.correctFloat, u = a.defined, h = a.destroyObjectProperties, n = a.each, t = a.format, l = a.pick;
        a = a.Series;
        B.prototype = {
            destroy: function () {
                h(this, this.axis)
            }, render: function (a) {
                var e = this.options, c = e.format, c = c ? t(c, this) : e.formatter.call(this);
                this.label ? this.label.attr({
                    text: c,
                    visibility: "hidden"
                }) : this.label = this.axis.chart.renderer.text(c,
                    null, null, e.useHTML).css(e.style).attr({
                        align: this.textAlign,
                        rotation: e.rotation,
                        visibility: "hidden"
                    }).add(a)
            }, setOffset: function (a, e) {
                var c = this.axis, k = c.chart, h = k.inverted, b = c.reversed, b = this.isNegative && !b || !this.isNegative && b, m = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1), c = c.translate(0), c = Math.abs(m - c);
                a = k.xAxis[0].translate(this.x) + a;
                var d = k.plotHeight, h = {
                    x: h ? b ? m : m - c : a,
                    y: h ? d - a - e : b ? d - m - c : d - m,
                    width: h ? c : e,
                    height: h ? e : c
                };
                if (e = this.label)e.align(this.alignOptions, null, h), h = e.alignAttr, e[!1 ===
                this.options.crop || k.isInsidePlot(h.x, h.y) ? "show" : "hide"](!0)
            }
        };
        C.prototype.getStacks = function () {
            var a = this;
            n(a.yAxis, function (a) {
                a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks)
            });
            n(a.series, function (e) {
                !e.options.stacking || !0 !== e.visible && !1 !== a.options.chart.ignoreHiddenSeries || (e.stackKey = e.type + l(e.options.stack, ""))
            })
        };
        z.prototype.buildStacks = function () {
            var a = this.series, e, c = l(this.options.reversedStacks, !0), h = a.length, n;
            if (!this.isXAxis) {
                this.usePercentage = !1;
                for (n = h; n--;)a[c ? n : h - n - 1].setStackedPoints();
                for (n = h; n--;)e = a[c ? n : h - n - 1], e.setStackCliffs && e.setStackCliffs();
                if (this.usePercentage)for (n = 0; n < h; n++)a[n].setPercentStacks()
            }
        };
        z.prototype.renderStackTotals = function () {
            var a = this.chart, e = a.renderer, c = this.stacks, h, l, b = this.stackTotalGroup;
            b || (this.stackTotalGroup = b = e.g("stack-labels").attr({visibility: "visible", zIndex: 6}).add());
            b.translate(a.plotLeft, a.plotTop);
            for (h in c)for (l in a = c[h], a)a[l].render(b)
        };
        z.prototype.resetStacks = function () {
            var a = this.stacks, e, c;
            if (!this.isXAxis)for (e in a)for (c in a[e])a[e][c].touched <
            this.stacksTouched ? (a[e][c].destroy(), delete a[e][c]) : (a[e][c].total = null, a[e][c].cum = null)
        };
        z.prototype.cleanStacks = function () {
            var a, e, c;
            if (!this.isXAxis)for (e in this.oldStacks && (a = this.stacks = this.oldStacks), a)for (c in a[e])a[e][c].cum = a[e][c].total
        };
        a.prototype.setStackedPoints = function () {
            if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                var a = this.processedXData, e = this.processedYData, c = [], h = e.length, n = this.options, b = n.threshold, m = n.startFromThreshold ?
                    b : 0, d = n.stack, n = n.stacking, r = this.stackKey, t = "-" + r, v = this.negStacks, f = this.yAxis, y = f.stacks, G = f.oldStacks, F, q, x, z, K, C, g;
                f.stacksTouched += 1;
                for (K = 0; K < h; K++)C = a[K], g = e[K], F = this.getStackIndicator(F, C, this.index), z = F.key, x = (q = v && g < (m ? 0 : b)) ? t : r, y[x] || (y[x] = {}), y[x][C] || (G[x] && G[x][C] ? (y[x][C] = G[x][C], y[x][C].total = null) : y[x][C] = new B(f, f.options.stackLabels, q, C, d)), x = y[x][C], null !== g && (x.points[z] = x.points[this.index] = [l(x.cum, m)], u(x.cum) || (x.base = z), x.touched = f.stacksTouched, 0 < F.index && !1 === this.singleStacks &&
                (x.points[z][0] = x.points[this.index + "," + C + ",0"][0])), "percent" === n ? (q = q ? r : t, v && y[q] && y[q][C] ? (q = y[q][C], x.total = q.total = Math.max(q.total, x.total) + Math.abs(g) || 0) : x.total = E(x.total + (Math.abs(g) || 0))) : x.total = E(x.total + (g || 0)), x.cum = l(x.cum, m) + (g || 0), null !== g && (x.points[z].push(x.cum), c[K] = x.cum);
                "percent" === n && (f.usePercentage = !0);
                this.stackedYData = c;
                f.oldStacks = {}
            }
        };
        a.prototype.setPercentStacks = function () {
            var a = this, e = a.stackKey, c = a.yAxis.stacks, h = a.processedXData, l;
            n([e, "-" + e], function (b) {
                for (var e =
                    h.length, d, k; e--;)if (d = h[e], l = a.getStackIndicator(l, d, a.index, b), d = (k = c[b] && c[b][d]) && k.points[l.key])k = k.total ? 100 / k.total : 0, d[0] = E(d[0] * k), d[1] = E(d[1] * k), a.stackedYData[e] = d[1]
            })
        };
        a.prototype.getStackIndicator = function (a, e, c, h) {
            !u(a) || a.x !== e || h && a.key !== h ? a = {x: e, index: 0, key: h} : a.index++;
            a.key = [c, e, a.index].join();
            return a
        }
    })(I);
    (function (a) {
        var B = a.addEvent, z = a.animate, C = a.Axis, E = a.createElement, u = a.css, h = a.defined, n = a.each, t = a.erase, l = a.extend, k = a.fireEvent, e = a.inArray, c = a.isNumber, p = a.isObject,
            H = a.merge, b = a.pick, m = a.Point, d = a.Series, r = a.seriesTypes, A = a.setAnimation, v = a.splat;
        l(a.Chart.prototype, {
            addSeries: function (a, c, d) {
                var f, e = this;
                a && (c = b(c, !0), k(e, "addSeries", {options: a}, function () {
                    f = e.initSeries(a);
                    e.isDirtyLegend = !0;
                    e.linkSeries();
                    c && e.redraw(d)
                }));
                return f
            },
            addAxis: function (a, c, d, e) {
                var f = c ? "xAxis" : "yAxis", h = this.options;
                a = H(a, {index: this[f].length, isX: c});
                new C(this, a);
                h[f] = v(h[f] || {});
                h[f].push(a);
                b(d, !0) && this.redraw(e)
            },
            showLoading: function (a) {
                var b = this, c = b.options, d = b.loadingDiv,
                    f = c.loading, e = function () {
                        d && u(d, {
                            left: b.plotLeft + "px",
                            top: b.plotTop + "px",
                            width: b.plotWidth + "px",
                            height: b.plotHeight + "px"
                        })
                    };
                d || (b.loadingDiv = d = E("div", {className: "highcharts-loading highcharts-loading-hidden"}, null, b.container), b.loadingSpan = E("span", {className: "highcharts-loading-inner"}, null, d), B(b, "redraw", e));
                d.className = "highcharts-loading";
                b.loadingSpan.innerHTML = a || c.lang.loading;
                u(d, l(f.style, {zIndex: 10}));
                u(b.loadingSpan, f.labelStyle);
                b.loadingShown || (u(d, {opacity: 0, display: ""}), z(d, {
                    opacity: f.style.opacity ||
                    .5
                }, {duration: f.showDuration || 0}));
                b.loadingShown = !0;
                e()
            },
            hideLoading: function () {
                var a = this.options, b = this.loadingDiv;
                b && (b.className = "highcharts-loading highcharts-loading-hidden", z(b, {opacity: 0}, {
                    duration: a.loading.hideDuration || 100,
                    complete: function () {
                        u(b, {display: "none"})
                    }
                }));
                this.loadingShown = !1
            },
            propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),
            update: function (a, d) {
                var f, k = {credits: "addCredits", title: "setTitle", subtitle: "setSubtitle"}, m = a.chart, l, p;
                if (m) {
                    H(!0, this.options.chart, m);
                    "className"in m && this.setClassName(m.className);
                    if ("inverted"in m || "polar"in m)this.propFromSeries(), l = !0;
                    for (f in m)m.hasOwnProperty(f) && (-1 !== e("chart." + f, this.propsRequireUpdateSeries) && (p = !0), -1 !== e(f, this.propsRequireDirtyBox) && (this.isDirtyBox = !0));
                    "style"in m && this.renderer.setStyle(m.style)
                }
                for (f in a) {
                    if (this[f] && "function" === typeof this[f].update)this[f].update(a[f], !1); else if ("function" === typeof this[k[f]])this[k[f]](a[f]);
                    "chart" !== f && -1 !== e(f, this.propsRequireUpdateSeries) && (p = !0)
                }
                a.colors && (this.options.colors = a.colors);
                a.plotOptions && H(!0, this.options.plotOptions, a.plotOptions);
                n(["xAxis", "yAxis", "series"], function (b) {
                    a[b] && n(v(a[b]), function (a, c) {
                        (c = h(a.id) && this.get(a.id) || this[b][c]) && c.coll === b && c.update(a, !1)
                    }, this)
                }, this);
                l && n(this.axes, function (a) {
                    a.update({}, !1)
                });
                p && n(this.series, function (a) {
                    a.update({}, !1)
                });
                a.loading && H(!0, this.options.loading, a.loading);
                f = m && m.width;
                m = m && m.height;
                c(f) && f !== this.chartWidth || c(m) && m !== this.chartHeight ? this.setSize(f, m) : b(d, !0) && this.redraw()
            },
            setSubtitle: function (a) {
                this.setTitle(void 0, a)
            }
        });
        l(m.prototype, {
            update: function (a, c, d, e) {
                function f() {
                    h.applyOptions(a);
                    null === h.y && k && (h.graphic = k.destroy());
                    p(a, !0) && (k && k.element && a && a.marker && a.marker.symbol && (h.graphic = k.destroy()),
                    a && a.dataLabels && h.dataLabel && (h.dataLabel = h.dataLabel.destroy()));
                    l = h.index;
                    m.updateParallelArrays(h, l);
                    n.data[l] = p(n.data[l], !0) || p(a, !0) ? h.options : a;
                    m.isDirty = m.isDirtyData = !0;
                    !m.fixedBox && m.hasCartesianSeries && (g.isDirtyBox = !0);
                    "point" === n.legendType && (g.isDirtyLegend = !0);
                    c && g.redraw(d)
                }

                var h = this, m = h.series, k = h.graphic, l, g = m.chart, n = m.options;
                c = b(c, !0);
                !1 === e ? f() : h.firePointEvent("update", {options: a}, f)
            }, remove: function (a, b) {
                this.series.removePoint(e(this, this.series.data), a, b)
            }
        });
        l(d.prototype,
            {
                addPoint: function (a, c, d, e) {
                    var f = this.options, h = this.data, m = this.chart, k = this.xAxis, k = k && k.hasNames && k.names, l = f.data, g, p, n = this.xData, r, v;
                    c = b(c, !0);
                    g = {series: this};
                    this.pointClass.prototype.applyOptions.apply(g, [a]);
                    v = g.x;
                    r = n.length;
                    if (this.requireSorting && v < n[r - 1])for (p = !0; r && n[r - 1] > v;)r--;
                    this.updateParallelArrays(g, "splice", r, 0, 0);
                    this.updateParallelArrays(g, r);
                    k && g.name && (k[v] = g.name);
                    l.splice(r, 0, a);
                    p && (this.data.splice(r, 0, null), this.processData());
                    "point" === f.legendType && this.generatePoints();
                    d && (h[0] && h[0].remove ? h[0].remove(!1) : (h.shift(), this.updateParallelArrays(g, "shift"), l.shift()));
                    this.isDirtyData = this.isDirty = !0;
                    c && m.redraw(e)
                }, removePoint: function (a, c, d) {
                var f = this, e = f.data, h = e[a], m = f.points, k = f.chart, l = function () {
                    m && m.length === e.length && m.splice(a, 1);
                    e.splice(a, 1);
                    f.options.data.splice(a, 1);
                    f.updateParallelArrays(h || {series: f}, "splice", a, 1);
                    h && h.destroy();
                    f.isDirty = !0;
                    f.isDirtyData = !0;
                    c && k.redraw()
                };
                A(d, k);
                c = b(c, !0);
                h ? h.firePointEvent("remove", null, l) : l()
            }, remove: function (a,
                                 c, d) {
                function f() {
                    e.destroy();
                    h.isDirtyLegend = h.isDirtyBox = !0;
                    h.linkSeries();
                    b(a, !0) && h.redraw(c)
                }

                var e = this, h = e.chart;
                !1 !== d ? k(e, "remove", null, f) : f()
            }, update: function (a, c) {
                var d = this, f = this.chart, e = this.userOptions, h = this.oldType || this.type, m = a.type || e.type || f.options.chart.type, k = r[h].prototype, p = ["group", "markerGroup", "dataLabelsGroup"], g;
                if (m && m !== h || void 0 !== a.zIndex)p.length = 0;
                n(p, function (a) {
                    p[a] = d[a];
                    delete d[a]
                });
                a = H(e, {animation: !1, index: this.index, pointStart: this.xData[0]}, {data: this.options.data},
                    a);
                this.remove(!1, null, !1);
                for (g in k)this[g] = void 0;
                l(this, r[m || h].prototype);
                n(p, function (a) {
                    d[a] = p[a]
                });
                this.init(f, a);
                this.oldType = h;
                f.linkSeries();
                b(c, !0) && f.redraw(!1)
            }
            });
        l(C.prototype, {
            update: function (a, c) {
                var d = this.chart;
                a = d.options[this.coll][this.options.index] = H(this.userOptions, a);
                this.destroy(!0);
                this.init(d, l(a, {events: void 0}));
                d.isDirtyBox = !0;
                b(c, !0) && d.redraw()
            }, remove: function (a) {
                for (var c = this.chart, d = this.coll, f = this.series, e = f.length; e--;)f[e] && f[e].remove(!1);
                t(c.axes, this);
                t(c[d], this);
                c.options[d].splice(this.options.index, 1);
                n(c[d], function (a, b) {
                    a.options.index = b
                });
                this.destroy();
                c.isDirtyBox = !0;
                b(a, !0) && c.redraw()
            }, setTitle: function (a, b) {
                this.update({title: a}, b)
            }, setCategories: function (a, b) {
                this.update({categories: a}, b)
            }
        })
    })(I);
    (function (a) {
        var B = a.color, z = a.each, C = a.map, E = a.pick, u = a.Series, h = a.seriesType;
        h("area", "line", {softThreshold: !1, threshold: 0}, {
            singleStacks: !1, getStackPoints: function () {
                var a = [], h = [], l = this.xAxis, k = this.yAxis, e = k.stacks[this.stackKey], c = {},
                    p = this.points, u = this.index, b = k.series, m = b.length, d, r = E(k.options.reversedStacks, !0) ? 1 : -1, A, v;
                if (this.options.stacking) {
                    for (A = 0; A < p.length; A++)c[p[A].x] = p[A];
                    for (v in e)null !== e[v].total && h.push(v);
                    h.sort(function (a, b) {
                        return a - b
                    });
                    d = C(b, function () {
                        return this.visible
                    });
                    z(h, function (b, p) {
                        var f = 0, n, q;
                        if (c[b] && !c[b].isNull)a.push(c[b]), z([-1, 1], function (a) {
                            var f = 1 === a ? "rightNull" : "leftNull", k = 0, l = e[h[p + a]];
                            if (l)for (A = u; 0 <= A && A < m;)n = l.points[A], n || (A === u ? c[b][f] = !0 : d[A] && (q = e[b].points[A]) && (k -= q[1] -
                                q[0])), A += r;
                            c[b][1 === a ? "rightCliff" : "leftCliff"] = k
                        }); else {
                            for (A = u; 0 <= A && A < m;) {
                                if (n = e[b].points[A]) {
                                    f = n[1];
                                    break
                                }
                                A += r
                            }
                            f = k.translate(f, 0, 1, 0, 1);
                            a.push({isNull: !0, plotX: l.translate(b, 0, 0, 0, 1), x: b, plotY: f, yBottom: f})
                        }
                    })
                }
                return a
            }, getGraphPath: function (a) {
                var h = u.prototype.getGraphPath, l = this.options, k = l.stacking, e = this.yAxis, c, p, n = [], b = [], m = this.index, d, r = e.stacks[this.stackKey], A = l.threshold, v = e.getThreshold(l.threshold), f, l = l.connectNulls || "percent" === k, y = function (c, f, h) {
                    var l = a[c];
                    c = k && r[l.x].points[m];
                    var p = l[h + "Null"] || 0;
                    h = l[h + "Cliff"] || 0;
                    var q, t, l = !0;
                    h || p ? (q = (p ? c[0] : c[1]) + h, t = c[0] + h, l = !!p) : !k && a[f] && a[f].isNull && (q = t = A);
                    void 0 !== q && (b.push({
                        plotX: d,
                        plotY: null === q ? v : e.getThreshold(q),
                        isNull: l,
                        isCliff: !0
                    }), n.push({plotX: d, plotY: null === t ? v : e.getThreshold(t), doCurve: !1}))
                };
                a = a || this.points;
                k && (a = this.getStackPoints());
                for (c = 0; c < a.length; c++)if (p = a[c].isNull, d = E(a[c].rectPlotX, a[c].plotX), f = E(a[c].yBottom, v), !p || l)l || y(c, c - 1, "left"), p && !k && l || (b.push(a[c]), n.push({
                    x: c,
                    plotX: d,
                    plotY: f
                })), l || y(c, c +
                    1, "right");
                c = h.call(this, b, !0, !0);
                n.reversed = !0;
                p = h.call(this, n, !0, !0);
                p.length && (p[0] = "L");
                p = c.concat(p);
                h = h.call(this, b, !1, l);
                p.xMap = c.xMap;
                this.areaPath = p;
                return h
            }, drawGraph: function () {
                this.areaPath = [];
                u.prototype.drawGraph.apply(this);
                var a = this, h = this.areaPath, l = this.options, k = [["area", "highcharts-area", this.color, l.fillColor]];
                z(this.zones, function (e, c) {
                    k.push(["zone-area-" + c, "highcharts-area highcharts-zone-area-" + c + " " + e.className, e.color || a.color, e.fillColor || l.fillColor])
                });
                z(k, function (e) {
                    var c =
                        e[0], k = a[c];
                    k ? (k.endX = h.xMap, k.animate({d: h})) : (k = a[c] = a.chart.renderer.path(h).addClass(e[1]).attr({
                        fill: E(e[3], B(e[2]).setOpacity(E(l.fillOpacity, .75)).get()),
                        zIndex: 0
                    }).add(a.group), k.isArea = !0);
                    k.startX = h.xMap;
                    k.shiftUnit = l.step ? 2 : 1
                })
            }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
        })
    })(I);
    (function (a) {
        var B = a.pick;
        a = a.seriesType;
        a("spline", "line", {}, {
            getPointSpline: function (a, C, E) {
                var u = C.plotX, h = C.plotY, n = a[E - 1];
                E = a[E + 1];
                var t, l, k, e;
                if (n && !n.isNull && !1 !== n.doCurve && !C.isCliff && E && !E.isNull &&
                    !1 !== E.doCurve && !C.isCliff) {
                    a = n.plotY;
                    k = E.plotX;
                    E = E.plotY;
                    var c = 0;
                    t = (1.5 * u + n.plotX) / 2.5;
                    l = (1.5 * h + a) / 2.5;
                    k = (1.5 * u + k) / 2.5;
                    e = (1.5 * h + E) / 2.5;
                    k !== t && (c = (e - l) * (k - u) / (k - t) + h - e);
                    l += c;
                    e += c;
                    l > a && l > h ? (l = Math.max(a, h), e = 2 * h - l) : l < a && l < h && (l = Math.min(a, h), e = 2 * h - l);
                    e > E && e > h ? (e = Math.max(E, h), l = 2 * h - e) : e < E && e < h && (e = Math.min(E, h), l = 2 * h - e);
                    C.rightContX = k;
                    C.rightContY = e
                }
                C = ["C", B(n.rightContX, n.plotX), B(n.rightContY, n.plotY), B(t, u), B(l, h), u, h];
                n.rightContX = n.rightContY = null;
                return C
            }
        })
    })(I);
    (function (a) {
        var B = a.seriesTypes.area.prototype,
            z = a.seriesType;
        z("areaspline", "spline", a.defaultPlotOptions.area, {
            getStackPoints: B.getStackPoints,
            getGraphPath: B.getGraphPath,
            setStackCliffs: B.setStackCliffs,
            drawGraph: B.drawGraph,
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
        })
    })(I);
    (function (a) {
        var B = a.animObject, z = a.color, C = a.each, E = a.extend, u = a.isNumber, h = a.merge, n = a.pick, t = a.Series, l = a.seriesType, k = a.svg;
        l("column", "line", {
            borderRadius: 0,
            groupPadding: .2,
            marker: null,
            pointPadding: .1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null,
            states: {
                hover: {
                    halo: !1,
                    brightness: .1, shadow: !1
                }, select: {color: "#cccccc", borderColor: "#000000", shadow: !1}
            },
            dataLabels: {align: null, verticalAlign: null, y: null},
            softThreshold: !1,
            startFromThreshold: !0,
            stickyTracking: !1,
            tooltip: {distance: 6},
            threshold: 0,
            borderColor: "#ffffff"
        }, {
            cropShoulder: 0,
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            negStacks: !0,
            init: function () {
                t.prototype.init.apply(this, arguments);
                var a = this, c = a.chart;
                c.hasRendered && C(c.series, function (c) {
                    c.type === a.type && (c.isDirty = !0)
                })
            },
            getColumnMetrics: function () {
                var a =
                    this, c = a.options, h = a.xAxis, k = a.yAxis, b = h.reversed, m, d = {}, l = 0;
                !1 === c.grouping ? l = 1 : C(a.chart.series, function (b) {
                    var c = b.options, f = b.yAxis, e;
                    b.type === a.type && b.visible && k.len === f.len && k.pos === f.pos && (c.stacking ? (m = b.stackKey, void 0 === d[m] && (d[m] = l++), e = d[m]) : !1 !== c.grouping && (e = l++), b.columnIndex = e)
                });
                var t = Math.min(Math.abs(h.transA) * (h.ordinalSlope || c.pointRange || h.closestPointRange || h.tickInterval || 1), h.len), v = t * c.groupPadding, f = (t - 2 * v) / (l || 1), c = Math.min(c.maxPointWidth || h.len, n(c.pointWidth, f * (1 -
                    2 * c.pointPadding)));
                a.columnMetrics = {
                    width: c,
                    offset: (f - c) / 2 + (v + ((a.columnIndex || 0) + (b ? 1 : 0)) * f - t / 2) * (b ? -1 : 1)
                };
                return a.columnMetrics
            },
            crispCol: function (a, c, h, k) {
                var b = this.chart, e = this.borderWidth, d = -(e % 2 ? .5 : 0), e = e % 2 ? .5 : 1;
                b.inverted && b.renderer.isVML && (e += 1);
                h = Math.round(a + h) + d;
                a = Math.round(a) + d;
                k = Math.round(c + k) + e;
                d = .5 >= Math.abs(c) && .5 < k;
                c = Math.round(c) + e;
                k -= c;
                d && k && (--c, k += 1);
                return {x: a, y: c, width: h - a, height: k}
            },
            translate: function () {
                var a = this, c = a.chart, h = a.options, k = a.dense = 2 > a.closestPointRange *
                    a.xAxis.transA, k = a.borderWidth = n(h.borderWidth, k ? 0 : 1), b = a.yAxis, m = a.translatedThreshold = b.getThreshold(h.threshold), d = n(h.minPointLength, 5), l = a.getColumnMetrics(), u = l.width, v = a.barW = Math.max(u, 1 + 2 * k), f = a.pointXOffset = l.offset;
                c.inverted && (m -= .5);
                h.pointPadding && (v = Math.ceil(v));
                t.prototype.translate.apply(a);
                C(a.points, function (e) {
                    var h = n(e.yBottom, m), k = 999 + Math.abs(h), k = Math.min(Math.max(-k, e.plotY), b.len + k), l = e.plotX + f, p = v, r = Math.min(k, h), t, y = Math.max(k, h) - r;
                    Math.abs(y) < d && d && (y = d, t = !b.reversed && !e.negative || b.reversed && e.negative, r = Math.abs(r - m) > d ? h - d : m - (t ? d : 0));
                    e.barX = l;
                    e.pointWidth = u;
                    e.tooltipPos = c.inverted ? [b.len + b.pos - c.plotLeft - k, a.xAxis.len - l - p / 2, y] : [l + p / 2, k + b.pos - c.plotTop, y];
                    e.shapeType = "rect";
                    e.shapeArgs = a.crispCol.apply(a, e.isNull ? [e.plotX, b.len / 2, 0, 0] : [l, r, p, y])
                })
            },
            getSymbol: a.noop,
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
            drawGraph: function () {
                this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
            },
            pointAttribs: function (a, c) {
                var e = this.options, k, b = this.pointAttrToOptions ||
                    {};
                k = b.stroke || "borderColor";
                var m = b["stroke-width"] || "borderWidth", d = a && a.color || this.color, l = a[k] || e[k] || this.color || d, n = a[m] || e[m] || this[m] || 0, b = e.dashStyle;
                a && this.zones.length && (d = (d = a.getZone()) && d.color || a.options.color || this.color);
                c && (a = h(e.states[c], a.options.states && a.options.states[c] || {}), c = a.brightness, d = a.color || void 0 !== c && z(d).brighten(a.brightness).get() || d, l = a[k] || l, n = a[m] || n, b = a.dashStyle || b);
                k = {fill: d, stroke: l, "stroke-width": n};
                e.borderRadius && (k.r = e.borderRadius);
                b && (k.dashstyle =
                    b);
                return k
            },
            drawPoints: function () {
                var a = this, c = this.chart, k = a.options, l = c.renderer, b = k.animationLimit || 250, m;
                C(a.points, function (d) {
                    var e = d.graphic;
                    if (u(d.plotY) && null !== d.y) {
                        m = d.shapeArgs;
                        if (e)e[c.pointCount < b ? "animate" : "attr"](h(m)); else d.graphic = e = l[d.shapeType](m).add(d.group || a.group);
                        e.attr(a.pointAttribs(d, d.selected && "select")).shadow(k.shadow, null, k.stacking && !k.borderRadius);
                        e.addClass(d.getClassName(), !0)
                    } else e && (d.graphic = e.destroy())
                })
            },
            animate: function (a) {
                var c = this, e = this.yAxis,
                    h = c.options, b = this.chart.inverted, m = {};
                k && (a ? (m.scaleY = .001, a = Math.min(e.pos + e.len, Math.max(e.pos, e.toPixels(h.threshold))), b ? m.translateX = a - e.len : m.translateY = a, c.group.attr(m)) : (m[b ? "translateX" : "translateY"] = e.pos, c.group.animate(m, E(B(c.options.animation), {
                    step: function (a, b) {
                        c.group.attr({scaleY: Math.max(.001, b.pos)})
                    }
                })), c.animate = null))
            },
            remove: function () {
                var a = this, c = a.chart;
                c.hasRendered && C(c.series, function (c) {
                    c.type === a.type && (c.isDirty = !0)
                });
                t.prototype.remove.apply(a, arguments)
            }
        })
    })(I);
    (function (a) {
        a = a.seriesType;
        a("bar", "column", null, {inverted: !0})
    })(I);
    (function (a) {
        var B = a.Series;
        a = a.seriesType;
        a("scatter", "line", {
            lineWidth: 0,
            marker: {enabled: !0},
            tooltip: {
                headerFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"
            }
        }, {
            sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group",
                "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, kdDimensions: 2, drawGraph: function () {
                this.options.lineWidth && B.prototype.drawGraph.call(this)
            }
        })
    })(I);
    (function (a) {
        var B = a.pick, z = a.relativeLength;
        a.CenteredSeriesMixin = {
            getCenter: function () {
                var a = this.options, E = this.chart, u = 2 * (a.slicedOffset || 0), h = E.plotWidth - 2 * u, E = E.plotHeight - 2 * u, n = a.center, n = [B(n[0], "50%"), B(n[1], "50%"), a.size || "100%", a.innerSize || 0], t = Math.min(h, E), l, k;
                for (l = 0; 4 > l; ++l)k = n[l], a = 2 > l || 2 === l && /%$/.test(k), n[l] = z(k, [h, E, t, n[2]][l]) +
                    (a ? u : 0);
                n[3] > n[2] && (n[3] = n[2]);
                return n
            }
        }
    })(I);
    (function (a) {
        var B = a.addEvent, z = a.defined, C = a.each, E = a.extend, u = a.inArray, h = a.noop, n = a.pick, t = a.Point, l = a.Series, k = a.seriesType, e = a.setAnimation;
        k("pie", "line", {
            center: [null, null],
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
                distance: 30, enabled: !0, formatter: function () {
                    return null === this.y ? void 0 : this.point.name
                }, x: 0
            },
            ignoreHiddenPoint: !0,
            legendType: "point",
            marker: null,
            size: null,
            showInLegend: !1,
            slicedOffset: 10,
            stickyTracking: !1,
            tooltip: {followPointer: !0},
            borderColor: "#ffffff",
            borderWidth: 1,
            states: {hover: {brightness: .1, shadow: !1}}
        }, {
            isCartesian: !1,
            requireSorting: !1,
            directTouch: !0,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            axisTypes: [],
            pointAttribs: a.seriesTypes.column.prototype.pointAttribs,
            animate: function (a) {
                var c = this, e = c.points, b = c.startAngleRad;
                a || (C(e, function (a) {
                    var d = a.graphic, e = a.shapeArgs;
                    d && (d.attr({r: a.startR || c.center[3] / 2, start: b, end: b}), d.animate({
                        r: e.r,
                        start: e.start,
                        end: e.end
                    }, c.options.animation))
                }), c.animate = null)
            },
            updateTotals: function () {
                var a,
                    e = 0, h = this.points, b = h.length, k, d = this.options.ignoreHiddenPoint;
                for (a = 0; a < b; a++)k = h[a], 0 > k.y && (k.y = null), e += d && !k.visible ? 0 : k.y;
                this.total = e;
                for (a = 0; a < b; a++)k = h[a], k.percentage = 0 < e && (k.visible || !d) ? k.y / e * 100 : 0, k.total = e
            },
            generatePoints: function () {
                l.prototype.generatePoints.call(this);
                this.updateTotals()
            },
            translate: function (a) {
                this.generatePoints();
                var c = 0, e = this.options, b = e.slicedOffset, h = b + (e.borderWidth || 0), d, k, l, v = e.startAngle || 0, f = this.startAngleRad = Math.PI / 180 * (v - 90), v = (this.endAngleRad = Math.PI /
                        180 * (n(e.endAngle, v + 360) - 90)) - f, t = this.points, u = e.dataLabels.distance, e = e.ignoreHiddenPoint, F, q = t.length, x;
                a || (this.center = a = this.getCenter());
                this.getX = function (b, c) {
                    l = Math.asin(Math.min((b - a[1]) / (a[2] / 2 + u), 1));
                    return a[0] + (c ? -1 : 1) * Math.cos(l) * (a[2] / 2 + u)
                };
                for (F = 0; F < q; F++) {
                    x = t[F];
                    d = f + c * v;
                    if (!e || x.visible)c += x.percentage / 100;
                    k = f + c * v;
                    x.shapeType = "arc";
                    x.shapeArgs = {
                        x: a[0],
                        y: a[1],
                        r: a[2] / 2,
                        innerR: a[3] / 2,
                        start: Math.round(1E3 * d) / 1E3,
                        end: Math.round(1E3 * k) / 1E3
                    };
                    l = (k + d) / 2;
                    l > 1.5 * Math.PI ? l -= 2 * Math.PI : l < -Math.PI /
                    2 && (l += 2 * Math.PI);
                    x.slicedTranslation = {
                        translateX: Math.round(Math.cos(l) * b),
                        translateY: Math.round(Math.sin(l) * b)
                    };
                    d = Math.cos(l) * a[2] / 2;
                    k = Math.sin(l) * a[2] / 2;
                    x.tooltipPos = [a[0] + .7 * d, a[1] + .7 * k];
                    x.half = l < -Math.PI / 2 || l > Math.PI / 2 ? 1 : 0;
                    x.angle = l;
                    h = Math.min(h, u / 5);
                    x.labelPos = [a[0] + d + Math.cos(l) * u, a[1] + k + Math.sin(l) * u, a[0] + d + Math.cos(l) * h, a[1] + k + Math.sin(l) * h, a[0] + d, a[1] + k, 0 > u ? "center" : x.half ? "right" : "left", l]
                }
            },
            drawGraph: null,
            drawPoints: function () {
                var a = this, e = a.chart.renderer, h, b, k, d, l = a.options.shadow;
                l && !a.shadowGroup && (a.shadowGroup = e.g("shadow").add(a.group));
                C(a.points, function (c) {
                    if (null !== c.y) {
                        b = c.graphic;
                        d = c.shapeArgs;
                        h = c.getTranslate();
                        var m = c.shadowGroup;
                        l && !m && (m = c.shadowGroup = e.g("shadow").add(a.shadowGroup));
                        m && m.attr(h);
                        k = a.pointAttribs(c, c.selected && "select");
                        b ? b.setRadialReference(a.center).attr(k).animate(E(d, h)) : (c.graphic = b = e[c.shapeType](d).setRadialReference(a.center).attr(h).add(a.group), c.visible || b.attr({visibility: "hidden"}), b.attr(k).attr({"stroke-linejoin": "round"}).shadow(l,
                            m));
                        b.addClass(c.getClassName())
                    }
                })
            },
            searchPoint: h,
            sortByAngle: function (a, e) {
                a.sort(function (a, b) {
                    return void 0 !== a.angle && (b.angle - a.angle) * e
                })
            },
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
            getCenter: a.CenteredSeriesMixin.getCenter,
            getSymbol: h
        }, {
            init: function () {
                t.prototype.init.apply(this, arguments);
                var a = this, e;
                a.name = n(a.name, "Slice");
                e = function (c) {
                    a.slice("select" === c.type)
                };
                B(a, "select", e);
                B(a, "unselect", e);
                return a
            }, setVisible: function (a, e) {
                var c = this, b = c.series, h = b.chart, d = b.options.ignoreHiddenPoint;
                e = n(e, d);
                a !== c.visible && (c.visible = c.options.visible = a = void 0 === a ? !c.visible : a, b.options.data[u(c, b.data)] = c.options, C(["graphic", "dataLabel", "connector", "shadowGroup"], function (b) {
                    if (c[b])c[b][a ? "show" : "hide"](!0)
                }), c.legendItem && h.legend.colorizeItem(c, a), a || "hover" !== c.state || c.setState(""), d && (b.isDirty = !0), e && h.redraw())
            }, slice: function (a, h, k) {
                var b = this.series;
                e(k, b.chart);
                n(h, !0);
                this.sliced = this.options.sliced = z(a) ? a : !this.sliced;
                b.options.data[u(this, b.data)] = this.options;
                this.graphic.animate(this.getTranslate());
                this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
            }, getTranslate: function () {
                return this.sliced ? this.slicedTranslation : {translateX: 0, translateY: 0}
            }, haloPath: function (a) {
                var c = this.shapeArgs;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.x, c.y, c.r + a, c.r + a, {
                    innerR: this.shapeArgs.r,
                    start: c.start,
                    end: c.end
                })
            }
        })
    })(I);
    (function (a) {
        var B = a.addEvent, z = a.arrayMax, C = a.defined, E = a.each, u = a.extend, h = a.format, n = a.map, t = a.merge, l = a.noop, k = a.pick, e = a.relativeLength, c = a.Series,
            p = a.seriesTypes, H = a.stableSort;
        a.distribute = function (a, c) {
            function b(a, b) {
                return a.target - b.target
            }

            var e, h = !0, k = a, f = [], l;
            l = 0;
            for (e = a.length; e--;)l += a[e].size;
            if (l > c) {
                H(a, function (a, b) {
                    return (b.rank || 0) - (a.rank || 0)
                });
                for (l = e = 0; l <= c;)l += a[e].size, e++;
                f = a.splice(e - 1, a.length)
            }
            H(a, b);
            for (a = n(a, function (a) {
                return {size: a.size, targets: [a.target]}
            }); h;) {
                for (e = a.length; e--;)h = a[e], l = (Math.min.apply(0, h.targets) + Math.max.apply(0, h.targets)) / 2, h.pos = Math.min(Math.max(0, l - h.size / 2), c - h.size);
                e = a.length;
                for (h = !1; e--;)0 < e && a[e - 1].pos + a[e - 1].size > a[e].pos && (a[e - 1].size += a[e].size, a[e - 1].targets = a[e - 1].targets.concat(a[e].targets), a[e - 1].pos + a[e - 1].size > c && (a[e - 1].pos = c - a[e - 1].size), a.splice(e, 1), h = !0)
            }
            e = 0;
            E(a, function (a) {
                var b = 0;
                E(a.targets, function () {
                    k[e].pos = a.pos + b;
                    b += k[e].size;
                    e++
                })
            });
            k.push.apply(k, f);
            H(k, b)
        };
        c.prototype.drawDataLabels = function () {
            var a = this, c = a.options, d = c.dataLabels, e = a.points, l, n, f = a.hasRendered || 0, p, u, F = k(d.defer, !0), q = a.chart.renderer;
            if (d.enabled || a._hasPointLabels)a.dlProcessOptions &&
            a.dlProcessOptions(d), u = a.plotGroup("dataLabelsGroup", "data-labels", F && !f ? "hidden" : "visible", d.zIndex || 6), F && (u.attr({opacity: +f}), f || B(a, "afterAnimate", function () {
                a.visible && u.show(!0);
                u[c.animation ? "animate" : "attr"]({opacity: 1}, {duration: 200})
            })), n = d, E(e, function (b) {
                var f, e = b.dataLabel, m, g, r, v = b.connector, y = !e, x;
                l = b.dlOptions || b.options && b.options.dataLabels;
                if (f = k(l && l.enabled, n.enabled) && null !== b.y)for (g in d = t(n, l), m = b.getLabelConfig(), p = d.format ? h(d.format, m) : d.formatter.call(m, d), x = d.style,
                    r = d.rotation, x.color = k(d.color, x.color, a.color, "#000000"), "contrast" === x.color && (x.color = d.inside || 0 > d.distance || c.stacking ? q.getContrast(b.color || a.color) : "#000000"), c.cursor && (x.cursor = c.cursor), m = {
                    fill: d.backgroundColor,
                    stroke: d.borderColor,
                    "stroke-width": d.borderWidth,
                    r: d.borderRadius || 0,
                    rotation: r,
                    padding: d.padding,
                    zIndex: 1
                }, m)void 0 === m[g] && delete m[g];
                !e || f && C(p) ? f && C(p) && (e ? m.text = p : (e = b.dataLabel = q[r ? "text" : "label"](p, 0, -9999, d.shape, null, null, d.useHTML, null, "data-label"), e.addClass("highcharts-data-label-color-" +
                    b.colorIndex + " " + (d.className || "") + (d.useHTML ? "highcharts-tracker" : ""))), e.attr(m), e.css(x).shadow(d.shadow), e.added || e.add(u), a.alignDataLabel(b, e, d, null, y)) : (b.dataLabel = e.destroy(), v && (b.connector = v.destroy()))
            })
        };
        c.prototype.alignDataLabel = function (a, c, d, e, h) {
            var b = this.chart, f = b.inverted, l = k(a.plotX, -9999), m = k(a.plotY, -9999), n = c.getBBox(), q, p = d.rotation, r = d.align, t = this.visible && (a.series.forceDL || b.isInsidePlot(l, Math.round(m), f) || e && b.isInsidePlot(l, f ? e.x + 1 : e.y + e.height - 1, f)), A = "justify" ===
                k(d.overflow, "justify");
            t && (q = d.style.fontSize, q = b.renderer.fontMetrics(q, c).b, e = u({
                x: f ? b.plotWidth - m : l,
                y: Math.round(f ? b.plotHeight - l : m),
                width: 0,
                height: 0
            }, e), u(d, {
                width: n.width,
                height: n.height
            }), p ? (A = !1, f = b.renderer.rotCorr(q, p), f = {
                x: e.x + d.x + e.width / 2 + f.x,
                y: e.y + d.y + {top: 0, middle: .5, bottom: 1}[d.verticalAlign] * e.height
            }, c[h ? "attr" : "animate"](f).attr({align: r}), l = (p + 720) % 360, l = 180 < l && 360 > l, "left" === r ? f.y -= l ? n.height : 0 : "center" === r ? (f.x -= n.width / 2, f.y -= n.height / 2) : "right" === r && (f.x -= n.width, f.y -= l ? 0 :
                n.height)) : (c.align(d, null, e), f = c.alignAttr), A ? this.justifyDataLabel(c, d, f, n, e, h) : k(d.crop, !0) && (t = b.isInsidePlot(f.x, f.y) && b.isInsidePlot(f.x + n.width, f.y + n.height)), d.shape && !p && c.attr({
                anchorX: a.plotX,
                anchorY: a.plotY
            }));
            t || (c.attr({y: -9999}), c.placed = !1)
        };
        c.prototype.justifyDataLabel = function (a, c, d, e, h, k) {
            var b = this.chart, l = c.align, m = c.verticalAlign, n, q, p = a.box ? 0 : a.padding || 0;
            n = d.x + p;
            0 > n && ("right" === l ? c.align = "left" : c.x = -n, q = !0);
            n = d.x + e.width - p;
            n > b.plotWidth && ("left" === l ? c.align = "right" : c.x = b.plotWidth -
                n, q = !0);
            n = d.y + p;
            0 > n && ("bottom" === m ? c.verticalAlign = "top" : c.y = -n, q = !0);
            n = d.y + e.height - p;
            n > b.plotHeight && ("top" === m ? c.verticalAlign = "bottom" : c.y = b.plotHeight - n, q = !0);
            q && (a.placed = !k, a.align(c, null, h))
        };
        p.pie && (p.pie.prototype.drawDataLabels = function () {
            var b = this, e = b.data, d, h = b.chart, l = b.options.dataLabels, p = k(l.connectorPadding, 10), f = k(l.connectorWidth, 1), t = h.plotWidth, u = h.plotHeight, F, q = l.distance, x = b.center, B = x[2] / 2, C = x[1], H = 0 < q, g, D, I, M, R = [[], []], N, w, O, Q, P = [0, 0, 0, 0];
            b.visible && (l.enabled || b._hasPointLabels) &&
            (E(e, function (a) {
                a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({width: "auto"}).css({
                    width: "auto",
                    textOverflow: "clip"
                }), a.dataLabel.shortened = !1)
            }), c.prototype.drawDataLabels.apply(b), E(e, function (a) {
                a.dataLabel && a.visible && (R[a.half].push(a), a.dataLabel._pos = null)
            }), E(R, function (c, f) {
                var e, k, m = c.length, r, v, y;
                if (m)for (b.sortByAngle(c, f - .5), 0 < q && (e = Math.max(0, C - B - q), k = Math.min(C + B + q, h.plotHeight), r = n(c, function (a) {
                    if (a.dataLabel)return y = a.dataLabel.getBBox().height || 21, {
                        target: a.labelPos[1] -
                        e + y / 2, size: y, rank: a.y
                    }
                }), a.distribute(r, k + y - e)), Q = 0; Q < m; Q++)d = c[Q], I = d.labelPos, g = d.dataLabel, O = !1 === d.visible ? "hidden" : "inherit", v = I[1], r ? void 0 === r[Q].pos ? O = "hidden" : (M = r[Q].size, w = e + r[Q].pos) : w = v, N = l.justify ? x[0] + (f ? -1 : 1) * (B + q) : b.getX(w < e + 2 || w > k - 2 ? v : w, f), g._attr = {
                    visibility: O,
                    align: I[6]
                }, g._pos = {
                    x: N + l.x + ({left: p, right: -p}[I[6]] || 0),
                    y: w + l.y - 10
                }, I.x = N, I.y = w, null === b.options.size && (D = g.getBBox().width, v = null, N - D < p ? (v = Math.round(D - N + p), P[3] = Math.max(v, P[3])) : N + D > t - p && (v = Math.round(N + D - t + p), P[1] = Math.max(v,
                    P[1])), 0 > w - M / 2 ? P[0] = Math.max(Math.round(-w + M / 2), P[0]) : w + M / 2 > u && (P[2] = Math.max(Math.round(w + M / 2 - u), P[2])), g.sideOverflow = v)
            }), 0 === z(P) || this.verifyDataLabelOverflow(P)) && (this.placeDataLabels(), H && f && E(this.points, function (a) {
                var c;
                F = a.connector;
                if ((g = a.dataLabel) && g._pos && a.visible) {
                    O = g._attr.visibility;
                    if (c = !F)a.connector = F = h.renderer.path().addClass("highcharts-data-label-connector highcharts-color-" + a.colorIndex).add(b.dataLabelsGroup), F.attr({
                        "stroke-width": f, stroke: l.connectorColor || a.color ||
                        "#666666"
                    });
                    F[c ? "attr" : "animate"]({d: b.connectorPath(a.labelPos)});
                    F.attr("visibility", O)
                } else F && (a.connector = F.destroy())
            }))
        }, p.pie.prototype.connectorPath = function (a) {
            var b = a.x, c = a.y;
            return k(this.options.dataLabels.softConnector, !0) ? ["M", b + ("left" === a[6] ? 5 : -5), c, "C", b, c, 2 * a[2] - a[4], 2 * a[3] - a[5], a[2], a[3], "L", a[4], a[5]] : ["M", b + ("left" === a[6] ? 5 : -5), c, "L", a[2], a[3], "L", a[4], a[5]]
        }, p.pie.prototype.placeDataLabels = function () {
            E(this.points, function (a) {
                var b = a.dataLabel;
                b && a.visible && ((a = b._pos) ? (b.sideOverflow &&
                (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({
                    width: b._attr.width + "px",
                    textOverflow: "ellipsis"
                }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({y: -9999}))
            }, this)
        }, p.pie.prototype.alignDataLabel = l, p.pie.prototype.verifyDataLabelOverflow = function (a) {
            var b = this.center, c = this.options, h = c.center, k = c.minSize || 80, l, f;
            null !== h[0] ? l = Math.max(b[2] - Math.max(a[1], a[3]), k) : (l = Math.max(b[2] - a[1] - a[3], k), b[0] += (a[3] - a[1]) / 2);
            null !== h[1] ? l = Math.max(Math.min(l, b[2] -
                Math.max(a[0], a[2])), k) : (l = Math.max(Math.min(l, b[2] - a[0] - a[2]), k), b[1] += (a[0] - a[2]) / 2);
            l < b[2] ? (b[2] = l, b[3] = Math.min(e(c.innerSize || 0, l), l), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : f = !0;
            return f
        });
        p.column && (p.column.prototype.alignDataLabel = function (a, e, d, h, l) {
            var b = this.chart.inverted, f = a.series, m = a.dlBox || a.shapeArgs, n = k(a.below, a.plotY > k(this.translatedThreshold, f.yAxis.len)), p = k(d.inside, !!this.options.stacking);
            m && (h = t(m), 0 > h.y && (h.height += h.y, h.y = 0), m = h.y + h.height - f.yAxis.len,
            0 < m && (h.height -= m), b && (h = {
                x: f.yAxis.len - h.y - h.height,
                y: f.xAxis.len - h.x - h.width,
                width: h.height,
                height: h.width
            }), p || (b ? (h.x += n ? 0 : h.width, h.width = 0) : (h.y += n ? h.height : 0, h.height = 0)));
            d.align = k(d.align, !b || p ? "center" : n ? "right" : "left");
            d.verticalAlign = k(d.verticalAlign, b || p ? "middle" : n ? "top" : "bottom");
            c.prototype.alignDataLabel.call(this, a, e, d, h, l)
        })
    })(I);
    (function (a) {
        var B = a.Chart, z = a.each, C = a.pick, E = a.addEvent;
        B.prototype.callbacks.push(function (a) {
            function h() {
                var h = [];
                z(a.series || [], function (a) {
                    var l =
                        a.options.dataLabels, k = a.dataLabelCollections || ["dataLabel"];
                    (l.enabled || a._hasPointLabels) && !l.allowOverlap && a.visible && z(k, function (e) {
                        z(a.points, function (a) {
                            a[e] && (a[e].labelrank = C(a.labelrank, a.shapeArgs && a.shapeArgs.height), h.push(a[e]))
                        })
                    })
                });
                a.hideOverlappingLabels(h)
            }

            h();
            E(a, "redraw", h)
        });
        B.prototype.hideOverlappingLabels = function (a) {
            var h = a.length, n, t, l, k, e, c, p, u, b, m = function (a, b, c, e, f, h, k, l) {
                return !(f > a + c || f + k < a || h > b + e || h + l < b)
            };
            for (t = 0; t < h; t++)if (n = a[t])n.oldOpacity = n.opacity, n.newOpacity =
                1;
            a.sort(function (a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (t = 0; t < h; t++)for (l = a[t], n = t + 1; n < h; ++n)if (k = a[n], l && k && l.placed && k.placed && 0 !== l.newOpacity && 0 !== k.newOpacity && (e = l.alignAttr, c = k.alignAttr, p = l.parentGroup, u = k.parentGroup, b = 2 * (l.box ? 0 : l.padding), e = m(e.x + p.translateX, e.y + p.translateY, l.width - b, l.height - b, c.x + u.translateX, c.y + u.translateY, k.width - b, k.height - b)))(l.labelrank < k.labelrank ? l : k).newOpacity = 0;
            z(a, function (a) {
                var b, c;
                a && (c = a.newOpacity, a.oldOpacity !== c && a.placed && (c ? a.show(!0) :
                    b = function () {
                        a.hide()
                    }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b)), a.isOld = !0)
            })
        }
    })(I);
    (function (a) {
        var B = a.addEvent, z = a.Chart, C = a.createElement, E = a.css, u = a.defaultOptions, h = a.defaultPlotOptions, n = a.each, t = a.extend, l = a.fireEvent, k = a.hasTouch, e = a.inArray, c = a.isObject, p = a.Legend, H = a.merge, b = a.pick, m = a.Point, d = a.Series, r = a.seriesTypes, A = a.svg;
        a = a.TrackerMixin = {
            drawTrackerPoint: function () {
                var a = this, b = a.chart.pointer, c = function (a) {
                    var c = b.getPointFromEvent(a);
                    if (void 0 !== c)c.onMouseOver(a)
                };
                n(a.points, function (a) {
                    a.graphic && (a.graphic.element.point = a);
                    a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a)
                });
                a._hasTracking || (n(a.trackerGroups, function (d) {
                    if (a[d]) {
                        a[d].addClass("highcharts-tracker").on("mouseover", c).on("mouseout", function (a) {
                            b.onTrackerMouseOut(a)
                        });
                        if (k)a[d].on("touchstart", c);
                        a.options.cursor && a[d].css(E).css({cursor: a.options.cursor})
                    }
                }), a._hasTracking = !0)
            }, drawTrackerGraph: function () {
                var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ?
                    a.areaPath : a.graphPath), e = d.length, h = a.chart, l = h.pointer, m = h.renderer, p = h.options.tooltip.snap, t = a.tracker, g, r = function () {
                    if (h.hoverSeries !== a)a.onMouseOver()
                }, u = "rgba(192,192,192," + (A ? .0001 : .002) + ")";
                if (e && !c)for (g = e + 1; g--;)"M" === d[g] && d.splice(g + 1, 0, d[g + 1] - p, d[g + 2], "L"), (g && "M" === d[g] || g === e) && d.splice(g, 0, "L", d[g - 2] + p, d[g - 1]);
                t ? t.attr({d: d}) : a.graph && (a.tracker = m.path(d).attr({
                    "stroke-linejoin": "round",
                    visibility: a.visible ? "visible" : "hidden",
                    stroke: u,
                    fill: c ? u : "none",
                    "stroke-width": a.graph.strokeWidth() +
                    (c ? 0 : 2 * p),
                    zIndex: 2
                }).add(a.group), n([a.tracker, a.markerGroup], function (a) {
                    a.addClass("highcharts-tracker").on("mouseover", r).on("mouseout", function (a) {
                        l.onTrackerMouseOut(a)
                    });
                    b.cursor && a.css({cursor: b.cursor});
                    if (k)a.on("touchstart", r)
                }))
            }
        };
        r.column && (r.column.prototype.drawTracker = a.drawTrackerPoint);
        r.pie && (r.pie.prototype.drawTracker = a.drawTrackerPoint);
        r.scatter && (r.scatter.prototype.drawTracker = a.drawTrackerPoint);
        t(p.prototype, {
            setItemEvents: function (a, b, c) {
                var d = this, e = d.chart.renderer.boxWrapper,
                    f = "highcharts-legend-" + (a.series ? "point" : "series") + "-active";
                (c ? b : a.legendGroup).on("mouseover", function () {
                    a.setState("hover");
                    e.addClass(f);
                    b.css(d.options.itemHoverStyle)
                }).on("mouseout", function () {
                    b.css(a.visible ? d.itemStyle : d.itemHiddenStyle);
                    e.removeClass(f);
                    a.setState()
                }).on("click", function (b) {
                    var c = function () {
                        a.setVisible && a.setVisible()
                    };
                    b = {browserEvent: b};
                    a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : l(a, "legendItemClick", b, c)
                })
            }, createCheckboxForItem: function (a) {
                a.checkbox = C("input",
                    {
                        type: "checkbox",
                        checked: a.selected,
                        defaultChecked: a.selected
                    }, this.options.itemCheckboxStyle, this.chart.container);
                B(a.checkbox, "click", function (b) {
                    l(a.series || a, "checkboxClick", {checked: b.target.checked, item: a}, function () {
                        a.select()
                    })
                })
            }
        });
        u.legend.itemStyle.cursor = "pointer";
        t(z.prototype, {
            showResetZoom: function () {
                var a = this, b = u.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, h = "chart" === c.relativeTo ? null : "plotBox";
                this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () {
                        a.zoomOut()
                    },
                    d, e && e.hover).attr({
                        align: c.position.align,
                        title: b.resetZoomTitle
                    }).addClass("highcharts-reset-zoom").add().align(c.position, !1, h)
            }, zoomOut: function () {
                var a = this;
                l(a, "selection", {resetSelection: !0}, function () {
                    a.zoom()
                })
            }, zoom: function (a) {
                var d, e = this.pointer, h = !1, k;
                !a || a.resetSelection ? n(this.axes, function (a) {
                    d = a.zoom()
                }) : n(a.xAxis.concat(a.yAxis), function (a) {
                    var b = a.axis;
                    e[b.isXAxis ? "zoomX" : "zoomY"] && (d = b.zoom(a.min, a.max), b.displayBtn && (h = !0))
                });
                k = this.resetZoomButton;
                h && !k ? this.showResetZoom() :
                !h && c(k) && (this.resetZoomButton = k.destroy());
                d && this.redraw(b(this.options.chart.animation, a && a.animation, 100 > this.pointCount))
            }, pan: function (a, b) {
                var c = this, d = c.hoverPoints, e;
                d && n(d, function (a) {
                    a.setState()
                });
                n("xy" === b ? [1, 0] : [1], function (b) {
                    b = c[b ? "xAxis" : "yAxis"][0];
                    var d = b.horiz, f = a[d ? "chartX" : "chartY"], d = d ? "mouseDownX" : "mouseDownY", h = c[d], k = (b.pointRange || 0) / 2, g = b.getExtremes(), l = b.toValue(h - f, !0) + k, k = b.toValue(h + b.len - f, !0) - k, m = k < l, h = m ? k : l, l = m ? l : k, m = b.toValue(b.toPixels(g.min) - b.minPixelPadding),
                        k = b.toValue(b.toPixels(g.max) + b.minPixelPadding), m = Math.min(g.dataMin, m) - h, g = l - Math.max(g.dataMax, k);
                    b.series.length && 0 > m && 0 > g && (b.setExtremes(h, l, !1, !1, {trigger: "pan"}), e = !0);
                    c[d] = f
                });
                e && c.redraw(!1);
                E(c.container, {cursor: "move"})
            }
        });
        t(m.prototype, {
            select: function (a, c) {
                var d = this, f = d.series, h = f.chart;
                a = b(a, !d.selected);
                d.firePointEvent(a ? "select" : "unselect", {accumulate: c}, function () {
                    d.selected = d.options.selected = a;
                    f.options.data[e(d, f.data)] = d.options;
                    d.setState(a && "select");
                    c || n(h.getSelectedPoints(),
                        function (a) {
                            a.selected && a !== d && (a.selected = a.options.selected = !1, f.options.data[e(a, f.data)] = a.options, a.setState(""), a.firePointEvent("unselect"))
                        })
                })
            }, onMouseOver: function (a) {
                var b = this.series.chart.pointer;
                this.firePointEvent("mouseOver");
                b.runPointActions(a, this)
            }, onMouseOut: function () {
                var a = this.series.chart;
                this.firePointEvent("mouseOut");
                n(a.hoverPoints || [], function (a) {
                    a.setState()
                });
                a.hoverPoints = a.hoverPoint = null
            }, importEvents: function () {
                if (!this.hasImportedEvents) {
                    var a = H(this.series.options.point,
                        this.options).events, b;
                    this.events = a;
                    for (b in a)B(this, b, a[b]);
                    this.hasImportedEvents = !0
                }
            }, setState: function (a, c) {
                var d = Math.floor(this.plotX), e = this.plotY, f = this.series, k = f.options.states[a] || {}, l = h[f.type].marker && f.options.marker, m = l && !1 === l.enabled, n = l && l.states && l.states[a] || {}, p = !1 === n.enabled, g = f.stateMarkerGraphic, r = this.marker || {}, u = f.chart, v = f.halo, z, A = l && f.markerAttribs;
                a = a || "";
                if (!(a === this.state && !c || this.selected && "select" !== a || !1 === k.enabled || a && (p || m && !1 === n.enabled) || a && r.states &&
                    r.states[a] && !1 === r.states[a].enabled)) {
                    A && (z = f.markerAttribs(this, a));
                    if (this.graphic)this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), this.graphic.attr(f.pointAttribs(this, a)), z && this.graphic.animate(z, b(u.options.chart.animation, n.animation, l.animation)), g && g.hide(); else {
                        if (a && n) {
                            l = r.symbol || f.symbol;
                            g && g.currentSymbol !== l && (g = g.destroy());
                            if (g)g[c ? "animate" : "attr"]({
                                x: z.x,
                                y: z.y
                            }); else l && (f.stateMarkerGraphic = g = u.renderer.symbol(l,
                                z.x, z.y, z.width, z.height).add(f.markerGroup), g.currentSymbol = l);
                            g && g.attr(f.pointAttribs(this, a))
                        }
                        g && (g[a && u.isInsidePlot(d, e, u.inverted) ? "show" : "hide"](), g.element.point = this)
                    }
                    (d = k.halo) && d.size ? (v || (f.halo = v = u.renderer.path().add(A ? f.markerGroup : f.group)), v[c ? "animate" : "attr"]({d: this.haloPath(d.size)}), v.attr({"class": "highcharts-halo highcharts-color-" + b(this.colorIndex, f.colorIndex)}), v.point = this, v.attr(t({
                        fill: this.color || f.color,
                        "fill-opacity": d.opacity,
                        zIndex: -1
                    }, d.attributes))) : v && v.point &&
                    v.point.haloPath && v.animate({d: v.point.haloPath(0)});
                    this.state = a
                }
            }, haloPath: function (a) {
                return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a)
            }
        });
        t(d.prototype, {
            onMouseOver: function () {
                var a = this.chart, b = a.hoverSeries;
                if (b && b !== this)b.onMouseOut();
                this.options.events.mouseOver && l(this, "mouseOver");
                this.setState("hover");
                a.hoverSeries = this
            }, onMouseOut: function () {
                var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
                b.hoverSeries = null;
                if (d)d.onMouseOut();
                this && a.events.mouseOut && l(this, "mouseOut");
                !c || a.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
                this.setState()
            }, setState: function (a) {
                var c = this, d = c.options, e = c.graph, h = d.states, k = d.lineWidth, d = 0;
                a = a || "";
                if (c.state !== a && (n([c.group, c.markerGroup, c.dataLabelsGroup], function (b) {
                        b && (c.state && b.removeClass("highcharts-series-" + c.state), a && b.addClass("highcharts-series-" + a))
                    }), c.state = a, !h[a] || !1 !== h[a].enabled) && (a && (k = h[a].lineWidth || k + (h[a].lineWidthPlus || 0)), e && !e.dashstyle))for (k = {"stroke-width": k},
                                                                                                                                                               e.animate(k, b(c.chart.options.chart.animation, h[a] && h[a].animation)); c["zone-graph-" + d];)c["zone-graph-" + d].attr(k), d += 1
            }, setVisible: function (a, b) {
                var c = this, d = c.chart, e = c.legendItem, f, h = d.options.chart.ignoreHiddenSeries, k = c.visible;
                f = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !k : a) ? "show" : "hide";
                n(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function (a) {
                    if (c[a])c[a][f]()
                });
                if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c)c.onMouseOut();
                e && d.legend.colorizeItem(c,
                    a);
                c.isDirty = !0;
                c.options.stacking && n(d.series, function (a) {
                    a.options.stacking && a.visible && (a.isDirty = !0)
                });
                n(c.linkedSeries, function (b) {
                    b.setVisible(a, !1)
                });
                h && (d.isDirtyBox = !0);
                !1 !== b && d.redraw();
                l(c, f)
            }, show: function () {
                this.setVisible(!0)
            }, hide: function () {
                this.setVisible(!1)
            }, select: function (a) {
                this.selected = a = void 0 === a ? !this.selected : a;
                this.checkbox && (this.checkbox.checked = a);
                l(this, a ? "select" : "unselect")
            }, drawTracker: a.drawTrackerGraph
        })
    })(I);
    (function (a) {
        var B = a.Chart, z = a.each, C = a.inArray, E =
            a.isArray, u = a.isObject, h = a.pick, n = a.splat;
        B.prototype.setResponsive = function (h) {
            var l = this.options.responsive, k = [], e = this.currentResponsive;
            l && l.rules && z(l.rules, function (c) {
                void 0 === c._id && (c._id = a.uniqueKey());
                this.matchResponsiveRule(c, k, h)
            }, this);
            var c = a.merge.apply(0, a.map(k, function (c) {
                return a.find(l.rules, function (a) {
                    return a._id === c
                }).chartOptions
            })), k = k.toString() || void 0;
            k !== (e && e.ruleIds) && (e && this.update(e.undoOptions, h), k ? (this.currentResponsive = {
                ruleIds: k,
                mergedOptions: c,
                undoOptions: this.currentOptions(c)
            },
                this.update(c, h)) : this.currentResponsive = void 0)
        };
        B.prototype.matchResponsiveRule = function (a, l) {
            var k = a.condition;
            (k.callback || function () {
                return this.chartWidth <= h(k.maxWidth, Number.MAX_VALUE) && this.chartHeight <= h(k.maxHeight, Number.MAX_VALUE) && this.chartWidth >= h(k.minWidth, 0) && this.chartHeight >= h(k.minHeight, 0)
            }).call(this) && l.push(a._id)
        };
        B.prototype.currentOptions = function (a) {
            function h(a, c, k, l) {
                var b, e;
                for (b in a)if (!l && -1 < C(b, ["series", "xAxis", "yAxis"]))for (a[b] = n(a[b]), k[b] = [], e = 0; e < a[b].length; e++)c[b][e] &&
                (k[b][e] = {}, h(a[b][e], c[b][e], k[b][e], l + 1)); else u(a[b]) ? (k[b] = E(a[b]) ? [] : {}, h(a[b], c[b] || {}, k[b], l + 1)) : k[b] = c[b] || null
            }

            var k = {};
            h(a, this.options, k, 0);
            return k
        }
    })(I);
    return I
});