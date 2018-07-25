/**
 * Created by owais on 3/24/17.
 */
/**
 * vis.js
 * https://github.com/almende/vis
 *
 * A dynamic, browser-based visualization library.
 *
 * @version 4.17.0
 * @date    2016-11-05
 *
 * @license
 * Copyright (C) 2011-2016 Almende B.V, http://almende.com
 *
 * Vis.js is dual licensed under both
 *
 * * The Apache 2.0 License
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * and
 *
 * * The MIT License
 *   http://opensource.org/licenses/MIT
 *
 * Vis.js may be distributed under either license.
 */
"use strict";
!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.vis = e() : t.vis = e()
}(this, function () {
    return function (t) {
        function e(o) {
            if (i[o])return i[o].exports;
            var n = i[o] = {exports: {}, id: o, loaded: !1};
            return t[o].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.p = "", e(0)
    }([function (t, e, i) {
        var o = i(1);
        o.extend(e, i(7)), o.extend(e, i(26)), o.extend(e, i(62))
    }, function (t, e, i) {
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n = i(2), s = i(6);
        e.isNumber = function (t) {
            return t instanceof Number || "number" == typeof t
        }, e.recursiveDOMDelete = function (t) {
            if (t)for (; t.hasChildNodes() === !0;)e.recursiveDOMDelete(t.firstChild), t.removeChild(t.firstChild)
        }, e.giveRange = function (t, e, i, o) {
            if (e == t)return .5;
            var n = 1 / (e - t);
            return Math.max(0, (o - t) * n)
        }, e.isString = function (t) {
            return t instanceof String || "string" == typeof t
        }, e.isDate = function (t) {
            if (t instanceof Date)return !0;
            if (e.isString(t)) {
                var i = r.exec(t);
                if (i)return !0;
                if (!isNaN(Date.parse(t)))return !0
            }
            return !1
        }, e.randomUUID = function () {
            return s.v4()
        }, e.assignAllKeys = function (t, e) {
            for (var i in t)t.hasOwnProperty(i) && "object" !== o(t[i]) && (t[i] = e)
        }, e.fillIfDefined = function (t, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            for (var s in t)void 0 !== i[s] && ("object" !== o(i[s]) ? void 0 !== i[s] && null !== i[s] || void 0 === t[s] || n !== !0 ? t[s] = i[s] : delete t[s] : "object" === o(t[s]) && e.fillIfDefined(t[s], i[s], n))
        }, e.protoExtend = function (t, e) {
            for (var i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                for (var n in o)t[n] = o[n]
            }
            return t
        }, e.extend = function (t, e) {
            for (var i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                for (var n in o)o.hasOwnProperty(n) && (t[n] = o[n])
            }
            return t
        }, e.selectiveExtend = function (t, e, i) {
            if (!Array.isArray(t))throw new Error("Array with property names expected as first argument");
            for (var o = 2; o < arguments.length; o++)for (var n = arguments[o], s = 0; s < t.length; s++) {
                var r = t[s];
                n.hasOwnProperty(r) && (e[r] = n[r])
            }
            return e
        }, e.selectiveDeepExtend = function (t, i, o) {
            var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Array.isArray(o))throw new TypeError("Arrays are not supported by deepExtend");
            for (var s = 2; s < arguments.length; s++)for (var r = arguments[s], a = 0; a < t.length; a++) {
                var h = t[a];
                if (r.hasOwnProperty(h))if (o[h] && o[h].constructor === Object)void 0 === i[h] && (i[h] = {}), i[h].constructor === Object ? e.deepExtend(i[h], o[h], !1, n) : null === o[h] && void 0 !== i[h] && n === !0 ? delete i[h] : i[h] = o[h]; else {
                    if (Array.isArray(o[h]))throw new TypeError("Arrays are not supported by deepExtend");
                    null === o[h] && void 0 !== i[h] && n === !0 ? delete i[h] : i[h] = o[h]
                }
            }
            return i
        }, e.selectiveNotDeepExtend = function (t, i, o) {
            var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (Array.isArray(o))throw new TypeError("Arrays are not supported by deepExtend");
            for (var s in o)if (o.hasOwnProperty(s) && t.indexOf(s) == -1)if (o[s] && o[s].constructor === Object)void 0 === i[s] && (i[s] = {}), i[s].constructor === Object ? e.deepExtend(i[s], o[s]) : null === o[s] && void 0 !== i[s] && n === !0 ? delete i[s] : i[s] = o[s]; else if (Array.isArray(o[s])) {
                i[s] = [];
                for (var r = 0; r < o[s].length; r++)i[s].push(o[s][r])
            } else null === o[s] && void 0 !== i[s] && n === !0 ? delete i[s] : i[s] = o[s];
            return i
        }, e.deepExtend = function (t, i, o, n) {
            for (var s in i)if (i.hasOwnProperty(s) || o === !0)if (i[s] && i[s].constructor === Object)void 0 === t[s] && (t[s] = {}), t[s].constructor === Object ? e.deepExtend(t[s], i[s], o) : null === i[s] && void 0 !== t[s] && n === !0 ? delete t[s] : t[s] = i[s]; else if (Array.isArray(i[s])) {
                t[s] = [];
                for (var r = 0; r < i[s].length; r++)t[s].push(i[s][r])
            } else null === i[s] && void 0 !== t[s] && n === !0 ? delete t[s] : t[s] = i[s];
            return t
        }, e.equalArray = function (t, e) {
            if (t.length != e.length)return !1;
            for (var i = 0, o = t.length; i < o; i++)if (t[i] != e[i])return !1;
            return !0
        }, e.convert = function (t, i) {
            var o;
            if (void 0 !== t) {
                if (null === t)return null;
                if (!i)return t;
                if ("string" != typeof i && !(i instanceof String))throw new Error("Type must be a string");
                switch (i) {
                    case"boolean":
                    case"Boolean":
                        return Boolean(t);
                    case"number":
                    case"Number":
                        return isNaN(Date.parse(t)) ? Number(t.valueOf()) : n(t).valueOf();
                    case"string":
                    case"String":
                        return String(t);
                    case"Date":
                        if (e.isNumber(t))return new Date(t);
                        if (t instanceof Date)return new Date(t.valueOf());
                        if (n.isMoment(t))return new Date(t.valueOf());
                        if (e.isString(t))return o = r.exec(t), o ? new Date(Number(o[1])) : n(new Date(t)).toDate();
                        throw new Error("Cannot convert object of type " + e.getType(t) + " to type Date");
                    case"Moment":
                        if (e.isNumber(t))return n(t);
                        if (t instanceof Date)return n(t.valueOf());
                        if (n.isMoment(t))return n(t);
                        if (e.isString(t))return o = r.exec(t), n(o ? Number(o[1]) : t);
                        throw new Error("Cannot convert object of type " + e.getType(t) + " to type Date");
                    case"ISODate":
                        if (e.isNumber(t))return new Date(t);
                        if (t instanceof Date)return t.toISOString();
                        if (n.isMoment(t))return t.toDate().toISOString();
                        if (e.isString(t))return o = r.exec(t), o ? new Date(Number(o[1])).toISOString() : n(t).format();
                        throw new Error("Cannot convert object of type " + e.getType(t) + " to type ISODate");
                    case"ASPDate":
                        if (e.isNumber(t))return "/Date(" + t + ")/";
                        if (t instanceof Date)return "/Date(" + t.valueOf() + ")/";
                        if (e.isString(t)) {
                            o = r.exec(t);
                            var s;
                            return s = o ? new Date(Number(o[1])).valueOf() : new Date(t).valueOf(), "/Date(" + s + ")/"
                        }
                        throw new Error("Cannot convert object of type " + e.getType(t) + " to type ASPDate");
                    default:
                        throw new Error('Unknown type "' + i + '"')
                }
            }
        };
        var r = /^\/?Date\((\-?\d+)/i;
        e.getType = function (t) {
            var e = "undefined" == typeof t ? "undefined" : o(t);
            return "object" == e ? null === t ? "null" : t instanceof Boolean ? "Boolean" : t instanceof Number ? "Number" : t instanceof String ? "String" : Array.isArray(t) ? "Array" : t instanceof Date ? "Date" : "Object" : "number" == e ? "Number" : "boolean" == e ? "Boolean" : "string" == e ? "String" : void 0 === e ? "undefined" : e
        }, e.copyAndExtendArray = function (t, e) {
            for (var i = [], o = 0; o < t.length; o++)i.push(t[o]);
            return i.push(e), i
        }, e.copyArray = function (t) {
            for (var e = [], i = 0; i < t.length; i++)e.push(t[i]);
            return e
        }, e.getAbsoluteLeft = function (t) {
            return t.getBoundingClientRect().left
        }, e.getAbsoluteRight = function (t) {
            return t.getBoundingClientRect().right
        }, e.getAbsoluteTop = function (t) {
            return t.getBoundingClientRect().top
        }, e.addClassName = function (t, e) {
            var i = t.className.split(" ");
            i.indexOf(e) == -1 && (i.push(e), t.className = i.join(" "))
        }, e.removeClassName = function (t, e) {
            var i = t.className.split(" "), o = i.indexOf(e);
            o != -1 && (i.splice(o, 1), t.className = i.join(" "))
        }, e.forEach = function (t, e) {
            var i, o;
            if (Array.isArray(t))for (i = 0, o = t.length; i < o; i++)e(t[i], i, t); else for (i in t)t.hasOwnProperty(i) && e(t[i], i, t)
        }, e.toArray = function (t) {
            var e = [];
            for (var i in t)t.hasOwnProperty(i) && e.push(t[i]);
            return e
        }, e.updateProperty = function (t, e, i) {
            return t[e] !== i && (t[e] = i, !0)
        }, e.throttle = function (t) {
            var e = !1;
            return function () {
                e || (e = !0, requestAnimationFrame(function () {
                    e = !1, t()
                }))
            }
        }, e.addEventListener = function (t, e, i, o) {
            t.addEventListener ? (void 0 === o && (o = !1), "mousewheel" === e && navigator.userAgent.indexOf("Firefox") >= 0 && (e = "DOMMouseScroll"), t.addEventListener(e, i, o)) : t.attachEvent("on" + e, i)
        }, e.removeEventListener = function (t, e, i, o) {
            t.removeEventListener ? (void 0 === o && (o = !1), "mousewheel" === e && navigator.userAgent.indexOf("Firefox") >= 0 && (e = "DOMMouseScroll"), t.removeEventListener(e, i, o)) : t.detachEvent("on" + e, i)
        }, e.preventDefault = function (t) {
            t || (t = window.event), t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }, e.getTarget = function (t) {
            t || (t = window.event);
            var e;
            return t.target ? e = t.target : t.srcElement && (e = t.srcElement), void 0 != e.nodeType && 3 == e.nodeType && (e = e.parentNode), e
        }, e.hasParent = function (t, e) {
            for (var i = t; i;) {
                if (i === e)return !0;
                i = i.parentNode
            }
            return !1
        }, e.option = {}, e.option.asBoolean = function (t, e) {
            return "function" == typeof t && (t = t()), null != t ? 0 != t : e || null
        }, e.option.asNumber = function (t, e) {
            return "function" == typeof t && (t = t()), null != t ? Number(t) || e || null : e || null
        }, e.option.asString = function (t, e) {
            return "function" == typeof t && (t = t()), null != t ? String(t) : e || null
        }, e.option.asSize = function (t, i) {
            return "function" == typeof t && (t = t()), e.isString(t) ? t : e.isNumber(t) ? t + "px" : i || null
        }, e.option.asElement = function (t, e) {
            return "function" == typeof t && (t = t()), t || e || null
        }, e.hexToRGB = function (t) {
            var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            t = t.replace(e, function (t, e, i, o) {
                return e + e + i + i + o + o
            });
            var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return i ? {r: parseInt(i[1], 16), g: parseInt(i[2], 16), b: parseInt(i[3], 16)} : null
        }, e.overrideOpacity = function (t, i) {
            if (t.indexOf("rgba") != -1)return t;
            if (t.indexOf("rgb") != -1) {
                var o = t.substr(t.indexOf("(") + 1).replace(")", "").split(",");
                return "rgba(" + o[0] + "," + o[1] + "," + o[2] + "," + i + ")"
            }
            var o = e.hexToRGB(t);
            return null == o ? t : "rgba(" + o.r + "," + o.g + "," + o.b + "," + i + ")"
        }, e.RGBToHex = function (t, e, i) {
            return "#" + ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1)
        }, e.parseColor = function (t) {
            var i;
            if (e.isString(t) === !0) {
                if (e.isValidRGB(t) === !0) {
                    var o = t.substr(4).substr(0, t.length - 5).split(",").map(function (t) {
                        return parseInt(t)
                    });
                    t = e.RGBToHex(o[0], o[1], o[2])
                }
                if (e.isValidHex(t) === !0) {
                    var n = e.hexToHSV(t), s = {h: n.h, s: .8 * n.s, v: Math.min(1, 1.02 * n.v)}, r = {
                        h: n.h,
                        s: Math.min(1, 1.25 * n.s),
                        v: .8 * n.v
                    }, a = e.HSVToHex(r.h, r.s, r.v), h = e.HSVToHex(s.h, s.s, s.v);
                    i = {
                        background: t,
                        border: a,
                        highlight: {background: h, border: a},
                        hover: {background: h, border: a}
                    }
                } else i = {
                    background: t,
                    border: t,
                    highlight: {background: t, border: t},
                    hover: {background: t, border: t}
                }
            } else i = {}, i.background = t.background || void 0, i.border = t.border || void 0, e.isString(t.highlight) ? i.highlight = {
                border: t.highlight,
                background: t.highlight
            } : (i.highlight = {}, i.highlight.background = t.highlight && t.highlight.background || void 0, i.highlight.border = t.highlight && t.highlight.border || void 0), e.isString(t.hover) ? i.hover = {
                border: t.hover,
                background: t.hover
            } : (i.hover = {}, i.hover.background = t.hover && t.hover.background || void 0, i.hover.border = t.hover && t.hover.border || void 0);
            return i
        }, e.RGBToHSV = function (t, e, i) {
            t /= 255, e /= 255, i /= 255;
            var o = Math.min(t, Math.min(e, i)), n = Math.max(t, Math.max(e, i));
            if (o == n)return {h: 0, s: 0, v: o};
            var s = t == o ? e - i : i == o ? t - e : i - t, r = t == o ? 3 : i == o ? 1 : 5, a = 60 * (r - s / (n - o)) / 360, h = (n - o) / n, d = n;
            return {h: a, s: h, v: d}
        };
        var a = {
            split: function (t) {
                var e = {};
                return t.split(";").forEach(function (t) {
                    if ("" != t.trim()) {
                        var i = t.split(":"), o = i[0].trim(), n = i[1].trim();
                        e[o] = n
                    }
                }), e
            }, join: function (t) {
                return Object.keys(t).map(function (e) {
                    return e + ": " + t[e]
                }).join("; ")
            }
        };
        e.addCssText = function (t, i) {
            var o = a.split(t.style.cssText), n = a.split(i), s = e.extend(o, n);
            t.style.cssText = a.join(s)
        }, e.removeCssText = function (t, e) {
            var i = a.split(t.style.cssText), o = a.split(e);
            for (var n in o)o.hasOwnProperty(n) && delete i[n];
            t.style.cssText = a.join(i)
        }, e.HSVToRGB = function (t, e, i) {
            var o, n, s, r = Math.floor(6 * t), a = 6 * t - r, h = i * (1 - e), d = i * (1 - a * e), l = i * (1 - (1 - a) * e);
            switch (r % 6) {
                case 0:
                    o = i, n = l, s = h;
                    break;
                case 1:
                    o = d, n = i, s = h;
                    break;
                case 2:
                    o = h, n = i, s = l;
                    break;
                case 3:
                    o = h, n = d, s = i;
                    break;
                case 4:
                    o = l, n = h, s = i;
                    break;
                case 5:
                    o = i, n = h, s = d
            }
            return {r: Math.floor(255 * o), g: Math.floor(255 * n), b: Math.floor(255 * s)}
        }, e.HSVToHex = function (t, i, o) {
            var n = e.HSVToRGB(t, i, o);
            return e.RGBToHex(n.r, n.g, n.b)
        }, e.hexToHSV = function (t) {
            var i = e.hexToRGB(t);
            return e.RGBToHSV(i.r, i.g, i.b)
        }, e.isValidHex = function (t) {
            var e = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
            return e
        }, e.isValidRGB = function (t) {
            t = t.replace(" ", "");
            var e = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i.test(t);
            return e
        }, e.isValidRGBA = function (t) {
            t = t.replace(" ", "");
            var e = /rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(.{1,3})\)/i.test(t);
            return e
        }, e.selectiveBridgeObject = function (t, i) {
            if ("object" == ("undefined" == typeof i ? "undefined" : o(i))) {
                for (var n = Object.create(i), s = 0; s < t.length; s++)i.hasOwnProperty(t[s]) && "object" == o(i[t[s]]) && (n[t[s]] = e.bridgeObject(i[t[s]]));
                return n
            }
            return null
        }, e.bridgeObject = function (t) {
            if ("object" == ("undefined" == typeof t ? "undefined" : o(t))) {
                var i = Object.create(t);
                for (var n in t)t.hasOwnProperty(n) && "object" == o(t[n]) && (i[n] = e.bridgeObject(t[n]));
                return i
            }
            return null
        }, e.insertSort = function (t, e) {
            for (var i = 0; i < t.length; i++) {
                for (var o = t[i], n = i; n > 0 && e(o, t[n - 1]) < 0; n--)t[n] = t[n - 1];
                t[n] = o
            }
            return t
        }, e.mergeOptions = function (t, e, i) {
            var o = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {});
            if (null === e[i])t[i] = Object.create(o[i]); else if (void 0 !== e[i])if ("boolean" == typeof e[i])t[i].enabled = e[i]; else {
                void 0 === e[i].enabled && (t[i].enabled = !0);
                for (var n in e[i])e[i].hasOwnProperty(n) && (t[i][n] = e[i][n])
            }
        }, e.binarySearchCustom = function (t, e, i, o) {
            for (var n = 1e4, s = 0, r = 0, a = t.length - 1; r <= a && s < n;) {
                var h = Math.floor((r + a) / 2), d = t[h], l = void 0 === o ? d[i] : d[i][o], c = e(l);
                if (0 == c)return h;
                c == -1 ? r = h + 1 : a = h - 1, s++
            }
            return -1
        }, e.binarySearchValue = function (t, e, i, o, n) {
            for (var s, r, a, h, d = 1e4, l = 0, c = 0, u = t.length - 1, n = void 0 != n ? n : function (t, e) {
                return t == e ? 0 : t < e ? -1 : 1
            }; c <= u && l < d;) {
                if (h = Math.floor(.5 * (u + c)), s = t[Math.max(0, h - 1)][i], r = t[h][i], a = t[Math.min(t.length - 1, h + 1)][i], 0 == n(r, e))return h;
                if (n(s, e) < 0 && n(r, e) > 0)return "before" == o ? Math.max(0, h - 1) : h;
                if (n(r, e) < 0 && n(a, e) > 0)return "before" == o ? h : Math.min(t.length - 1, h + 1);
                n(r, e) < 0 ? c = h + 1 : u = h - 1, l++
            }
            return -1
        }, e.easingFunctions = {
            linear: function (t) {
                return t
            }, easeInQuad: function (t) {
                return t * t
            }, easeOutQuad: function (t) {
                return t * (2 - t)
            }, easeInOutQuad: function (t) {
                return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            }, easeInCubic: function (t) {
                return t * t * t
            }, easeOutCubic: function (t) {
                return --t * t * t + 1
            }, easeInOutCubic: function (t) {
                return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            }, easeInQuart: function (t) {
                return t * t * t * t
            }, easeOutQuart: function (t) {
                return 1 - --t * t * t * t
            }, easeInOutQuart: function (t) {
                return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
            }, easeInQuint: function (t) {
                return t * t * t * t * t
            }, easeOutQuint: function (t) {
                return 1 + --t * t * t * t * t
            }, easeInOutQuint: function (t) {
                return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
            }
        }, e.getScrollBarWidth = function () {
            var t = document.createElement("p");
            t.style.width = "100%", t.style.height = "200px";
            var e = document.createElement("div");
            e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.visibility = "hidden", e.style.width = "200px", e.style.height = "150px", e.style.overflow = "hidden", e.appendChild(t), document.body.appendChild(e);
            var i = t.offsetWidth;
            e.style.overflow = "scroll";
            var o = t.offsetWidth;
            return i == o && (o = e.clientWidth), document.body.removeChild(e), i - o
        }
    }, function (t, e, i) {
        t.exports = "undefined" != typeof window && window.moment || i(3)
    }, function (t, e, i) {
        (function (t) {
            !function (e, i) {
                t.exports = i()
            }(this, function () {
                function e() {
                    return fo.apply(null, arguments)
                }

                function i(t) {
                    fo = t
                }

                function o(t) {
                    return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
                }

                function n(t) {
                    return null != t && "[object Object]" === Object.prototype.toString.call(t)
                }

                function s(t) {
                    var e;
                    for (e in t)return !1;
                    return !0
                }

                function r(t) {
                    return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
                }

                function a(t, e) {
                    var i, o = [];
                    for (i = 0; i < t.length; ++i)o.push(e(t[i], i));
                    return o
                }

                function h(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }

                function d(t, e) {
                    for (var i in e)h(e, i) && (t[i] = e[i]);
                    return h(e, "toString") && (t.toString = e.toString), h(e, "valueOf") && (t.valueOf = e.valueOf), t
                }

                function l(t, e, i, o) {
                    return ge(t, e, i, o, !0).utc()
                }

                function c() {
                    return {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        meridiem: null
                    }
                }

                function u(t) {
                    return null == t._pf && (t._pf = c()), t._pf
                }

                function p(t) {
                    if (null == t._isValid) {
                        var e = u(t), i = mo.call(e.parsedDateParts, function (t) {
                            return null != t
                        }), o = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
                        if (t._strict && (o = o && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t))return o;
                        t._isValid = o
                    }
                    return t._isValid
                }

                function f(t) {
                    var e = l(NaN);
                    return null != t ? d(u(e), t) : u(e).userInvalidated = !0, e
                }

                function m(t) {
                    return void 0 === t
                }

                function v(t, e) {
                    var i, o, n;
                    if (m(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), m(e._i) || (t._i = e._i), m(e._f) || (t._f = e._f), m(e._l) || (t._l = e._l), m(e._strict) || (t._strict = e._strict), m(e._tzm) || (t._tzm = e._tzm), m(e._isUTC) || (t._isUTC = e._isUTC), m(e._offset) || (t._offset = e._offset), m(e._pf) || (t._pf = u(e)), m(e._locale) || (t._locale = e._locale), vo.length > 0)for (i in vo)o = vo[i], n = e[o], m(n) || (t[o] = n);
                    return t
                }

                function g(t) {
                    v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), go === !1 && (go = !0, e.updateOffset(this), go = !1)
                }

                function y(t) {
                    return t instanceof g || null != t && null != t._isAMomentObject
                }

                function b(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                }

                function _(t) {
                    var e = +t, i = 0;
                    return 0 !== e && isFinite(e) && (i = b(e)), i
                }

                function w(t, e, i) {
                    var o, n = Math.min(t.length, e.length), s = Math.abs(t.length - e.length), r = 0;
                    for (o = 0; o < n; o++)(i && t[o] !== e[o] || !i && _(t[o]) !== _(e[o])) && r++;
                    return r + s
                }

                function x(t) {
                    e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
                }

                function k(t, i) {
                    var o = !0;
                    return d(function () {
                        if (null != e.deprecationHandler && e.deprecationHandler(null, t), o) {
                            for (var n, s = [], r = 0; r < arguments.length; r++) {
                                if (n = "", "object" == typeof arguments[r]) {
                                    n += "\n[" + r + "] ";
                                    for (var a in arguments[0])n += a + ": " + arguments[0][a] + ", ";
                                    n = n.slice(0, -2)
                                } else n = arguments[r];
                                s.push(n)
                            }
                            x(t + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), o = !1
                        }
                        return i.apply(this, arguments)
                    }, i)
                }

                function O(t, i) {
                    null != e.deprecationHandler && e.deprecationHandler(t, i), yo[t] || (x(i), yo[t] = !0)
                }

                function D(t) {
                    return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
                }

                function S(t) {
                    var e, i;
                    for (i in t)e = t[i], D(e) ? this[i] = e : this["_" + i] = e;
                    this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
                }

                function C(t, e) {
                    var i, o = d({}, t);
                    for (i in e)h(e, i) && (n(t[i]) && n(e[i]) ? (o[i] = {}, d(o[i], t[i]), d(o[i], e[i])) : null != e[i] ? o[i] = e[i] : delete o[i]);
                    for (i in t)h(t, i) && !h(e, i) && n(t[i]) && (o[i] = d({}, o[i]));
                    return o
                }

                function T(t) {
                    null != t && this.set(t)
                }

                function E(t, e, i) {
                    var o = this._calendar[t] || this._calendar.sameElse;
                    return D(o) ? o.call(e, i) : o
                }

                function M(t) {
                    var e = this._longDateFormat[t], i = this._longDateFormat[t.toUpperCase()];
                    return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (t) {
                        return t.slice(1)
                    }), this._longDateFormat[t])
                }

                function P() {
                    return this._invalidDate
                }

                function I(t) {
                    return this._ordinal.replace("%d", t)
                }

                function N(t, e, i, o) {
                    var n = this._relativeTime[i];
                    return D(n) ? n(t, e, i, o) : n.replace(/%d/i, t)
                }

                function R(t, e) {
                    var i = this._relativeTime[t > 0 ? "future" : "past"];
                    return D(i) ? i(e) : i.replace(/%s/i, e)
                }

                function L(t, e) {
                    var i = t.toLowerCase();
                    Co[i] = Co[i + "s"] = Co[e] = t
                }

                function z(t) {
                    return "string" == typeof t ? Co[t] || Co[t.toLowerCase()] : void 0
                }

                function A(t) {
                    var e, i, o = {};
                    for (i in t)h(t, i) && (e = z(i), e && (o[e] = t[i]));
                    return o
                }

                function B(t, e) {
                    To[t] = e
                }

                function j(t) {
                    var e = [];
                    for (var i in t)e.push({unit: i, priority: To[i]});
                    return e.sort(function (t, e) {
                        return t.priority - e.priority
                    }), e
                }

                function F(t, i) {
                    return function (o) {
                        return null != o ? (W(this, t, o), e.updateOffset(this, i), this) : H(this, t)
                    }
                }

                function H(t, e) {
                    return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
                }

                function W(t, e, i) {
                    t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](i)
                }

                function Y(t) {
                    return t = z(t), D(this[t]) ? this[t]() : this
                }

                function G(t, e) {
                    if ("object" == typeof t) {
                        t = A(t);
                        for (var i = j(t), o = 0; o < i.length; o++)this[i[o].unit](t[i[o].unit])
                    } else if (t = z(t), D(this[t]))return this[t](e);
                    return this
                }

                function V(t, e, i) {
                    var o = "" + Math.abs(t), n = e - o.length, s = t >= 0;
                    return (s ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + o
                }

                function U(t, e, i, o) {
                    var n = o;
                    "string" == typeof o && (n = function () {
                        return this[o]()
                    }), t && (Io[t] = n), e && (Io[e[0]] = function () {
                        return V(n.apply(this, arguments), e[1], e[2])
                    }), i && (Io[i] = function () {
                        return this.localeData().ordinal(n.apply(this, arguments), t)
                    })
                }

                function q(t) {
                    return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
                }

                function X(t) {
                    var e, i, o = t.match(Eo);
                    for (e = 0, i = o.length; e < i; e++)Io[o[e]] ? o[e] = Io[o[e]] : o[e] = q(o[e]);
                    return function (e) {
                        var n, s = "";
                        for (n = 0; n < i; n++)s += o[n]instanceof Function ? o[n].call(e, t) : o[n];
                        return s
                    }
                }

                function Z(t, e) {
                    return t.isValid() ? (e = K(e, t.localeData()), Po[e] = Po[e] || X(e), Po[e](t)) : t.localeData().invalidDate()
                }

                function K(t, e) {
                    function i(t) {
                        return e.longDateFormat(t) || t
                    }

                    var o = 5;
                    for (Mo.lastIndex = 0; o >= 0 && Mo.test(t);)t = t.replace(Mo, i), Mo.lastIndex = 0, o -= 1;
                    return t
                }

                function J(t, e, i) {
                    Ko[t] = D(e) ? e : function (t, o) {
                        return t && i ? i : e
                    }
                }

                function Q(t, e) {
                    return h(Ko, t) ? Ko[t](e._strict, e._locale) : new RegExp($(t))
                }

                function $(t) {
                    return tt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, o, n) {
                        return e || i || o || n
                    }))
                }

                function tt(t) {
                    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function et(t, e) {
                    var i, o = e;
                    for ("string" == typeof t && (t = [t]), "number" == typeof e && (o = function (t, i) {
                        i[e] = _(t)
                    }), i = 0; i < t.length; i++)Jo[t[i]] = o
                }

                function it(t, e) {
                    et(t, function (t, i, o, n) {
                        o._w = o._w || {}, e(t, o._w, o, n)
                    })
                }

                function ot(t, e, i) {
                    null != e && h(Jo, t) && Jo[t](e, i._a, i, t)
                }

                function nt(t, e) {
                    return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
                }

                function st(t, e) {
                    return t ? o(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || hn).test(e) ? "format" : "standalone"][t.month()] : this._months
                }

                function rt(t, e) {
                    return t ? o(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[hn.test(e) ? "format" : "standalone"][t.month()] : this._monthsShort
                }

                function at(t, e, i) {
                    var o, n, s, r = t.toLocaleLowerCase();
                    if (!this._monthsParse)for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], o = 0; o < 12; ++o)s = l([2e3, o]), this._shortMonthsParse[o] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[o] = this.months(s, "").toLocaleLowerCase();
                    return i ? "MMM" === e ? (n = _o.call(this._shortMonthsParse, r), n !== -1 ? n : null) : (n = _o.call(this._longMonthsParse, r), n !== -1 ? n : null) : "MMM" === e ? (n = _o.call(this._shortMonthsParse, r), n !== -1 ? n : (n = _o.call(this._longMonthsParse, r), n !== -1 ? n : null)) : (n = _o.call(this._longMonthsParse, r), n !== -1 ? n : (n = _o.call(this._shortMonthsParse, r), n !== -1 ? n : null))
                }

                function ht(t, e, i) {
                    var o, n, s;
                    if (this._monthsParseExact)return at.call(this, t, e, i);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), o = 0; o < 12; o++) {
                        if (n = l([2e3, o]), i && !this._longMonthsParse[o] && (this._longMonthsParse[o] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), this._shortMonthsParse[o] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), i || this._monthsParse[o] || (s = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[o] = new RegExp(s.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[o].test(t))return o;
                        if (i && "MMM" === e && this._shortMonthsParse[o].test(t))return o;
                        if (!i && this._monthsParse[o].test(t))return o
                    }
                }

                function dt(t, e) {
                    var i;
                    if (!t.isValid())return t;
                    if ("string" == typeof e)if (/^\d+$/.test(e))e = _(e); else if (e = t.localeData().monthsParse(e), "number" != typeof e)return t;
                    return i = Math.min(t.date(), nt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
                }

                function lt(t) {
                    return null != t ? (dt(this, t), e.updateOffset(this, !0), this) : H(this, "Month")
                }

                function ct() {
                    return nt(this.year(), this.month())
                }

                function ut(t) {
                    return this._monthsParseExact ? (h(this, "_monthsRegex") || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = cn), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }

                function pt(t) {
                    return this._monthsParseExact ? (h(this, "_monthsRegex") || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = un), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
                }

                function ft() {
                    function t(t, e) {
                        return e.length - t.length
                    }

                    var e, i, o = [], n = [], s = [];
                    for (e = 0; e < 12; e++)i = l([2e3, e]), o.push(this.monthsShort(i, "")), n.push(this.months(i, "")), s.push(this.months(i, "")), s.push(this.monthsShort(i, ""));
                    for (o.sort(t), n.sort(t), s.sort(t), e = 0; e < 12; e++)o[e] = tt(o[e]), n[e] = tt(n[e]);
                    for (e = 0; e < 24; e++)s[e] = tt(s[e]);
                    this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
                }

                function mt(t) {
                    return vt(t) ? 366 : 365
                }

                function vt(t) {
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
                }

                function gt() {
                    return vt(this.year())
                }

                function yt(t, e, i, o, n, s, r) {
                    var a = new Date(t, e, i, o, n, s, r);
                    return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
                }

                function bt(t) {
                    var e = new Date(Date.UTC.apply(null, arguments));
                    return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
                }

                function _t(t, e, i) {
                    var o = 7 + e - i, n = (7 + bt(t, 0, o).getUTCDay() - e) % 7;
                    return -n + o - 1
                }

                function wt(t, e, i, o, n) {
                    var s, r, a = (7 + i - o) % 7, h = _t(t, o, n), d = 1 + 7 * (e - 1) + a + h;
                    return d <= 0 ? (s = t - 1, r = mt(s) + d) : d > mt(t) ? (s = t + 1, r = d - mt(t)) : (s = t, r = d), {
                        year: s,
                        dayOfYear: r
                    }
                }

                function xt(t, e, i) {
                    var o, n, s = _t(t.year(), e, i), r = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
                    return r < 1 ? (n = t.year() - 1, o = r + kt(n, e, i)) : r > kt(t.year(), e, i) ? (o = r - kt(t.year(), e, i), n = t.year() + 1) : (n = t.year(), o = r), {
                        week: o,
                        year: n
                    }
                }

                function kt(t, e, i) {
                    var o = _t(t, e, i), n = _t(t + 1, e, i);
                    return (mt(t) - o + n) / 7
                }

                function Ot(t) {
                    return xt(t, this._week.dow, this._week.doy).week
                }

                function Dt() {
                    return this._week.dow
                }

                function St() {
                    return this._week.doy
                }

                function Ct(t) {
                    var e = this.localeData().week(this);
                    return null == t ? e : this.add(7 * (t - e), "d")
                }

                function Tt(t) {
                    var e = xt(this, 1, 4).week;
                    return null == t ? e : this.add(7 * (t - e), "d")
                }

                function Et(t, e) {
                    return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
                }

                function Mt(t, e) {
                    return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
                }

                function Pt(t, e) {
                    return t ? o(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : this._weekdays
                }

                function It(t) {
                    return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
                }

                function Nt(t) {
                    return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
                }

                function Rt(t, e, i) {
                    var o, n, s, r = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], o = 0; o < 7; ++o)s = l([2e3, 1]).day(o), this._minWeekdaysParse[o] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[o] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[o] = this.weekdays(s, "").toLocaleLowerCase();
                    return i ? "dddd" === e ? (n = _o.call(this._weekdaysParse, r), n !== -1 ? n : null) : "ddd" === e ? (n = _o.call(this._shortWeekdaysParse, r), n !== -1 ? n : null) : (n = _o.call(this._minWeekdaysParse, r), n !== -1 ? n : null) : "dddd" === e ? (n = _o.call(this._weekdaysParse, r), n !== -1 ? n : (n = _o.call(this._shortWeekdaysParse, r), n !== -1 ? n : (n = _o.call(this._minWeekdaysParse, r), n !== -1 ? n : null))) : "ddd" === e ? (n = _o.call(this._shortWeekdaysParse, r), n !== -1 ? n : (n = _o.call(this._weekdaysParse, r), n !== -1 ? n : (n = _o.call(this._minWeekdaysParse, r), n !== -1 ? n : null))) : (n = _o.call(this._minWeekdaysParse, r), n !== -1 ? n : (n = _o.call(this._weekdaysParse, r), n !== -1 ? n : (n = _o.call(this._shortWeekdaysParse, r), n !== -1 ? n : null)))
                }

                function Lt(t, e, i) {
                    var o, n, s;
                    if (this._weekdaysParseExact)return Rt.call(this, t, e, i);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), o = 0; o < 7; o++) {
                        if (n = l([2e3, 1]).day(o), i && !this._fullWeekdaysParse[o] && (this._fullWeekdaysParse[o] = new RegExp("^" + this.weekdays(n, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[o] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[o] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[o] || (s = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[o] = new RegExp(s.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[o].test(t))return o;
                        if (i && "ddd" === e && this._shortWeekdaysParse[o].test(t))return o;
                        if (i && "dd" === e && this._minWeekdaysParse[o].test(t))return o;
                        if (!i && this._weekdaysParse[o].test(t))return o
                    }
                }

                function zt(t) {
                    if (!this.isValid())return null != t ? this : NaN;
                    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != t ? (t = Et(t, this.localeData()), this.add(t - e, "d")) : e
                }

                function At(t) {
                    if (!this.isValid())return null != t ? this : NaN;
                    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == t ? e : this.add(t - e, "d")
                }

                function Bt(t) {
                    if (!this.isValid())return null != t ? this : NaN;
                    if (null != t) {
                        var e = Mt(t, this.localeData());
                        return this.day(this.day() % 7 ? e : e - 7)
                    }
                    return this.day() || 7
                }

                function jt(t) {
                    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Wt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = yn), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }

                function Ft(t) {
                    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Wt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = bn), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }

                function Ht(t) {
                    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Wt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = _n), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }

                function Wt() {
                    function t(t, e) {
                        return e.length - t.length
                    }

                    var e, i, o, n, s, r = [], a = [], h = [], d = [];
                    for (e = 0; e < 7; e++)i = l([2e3, 1]).day(e), o = this.weekdaysMin(i, ""), n = this.weekdaysShort(i, ""), s = this.weekdays(i, ""), r.push(o), a.push(n), h.push(s), d.push(o), d.push(n), d.push(s);
                    for (r.sort(t), a.sort(t), h.sort(t), d.sort(t), e = 0; e < 7; e++)a[e] = tt(a[e]), h[e] = tt(h[e]), d[e] = tt(d[e]);
                    this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
                }

                function Yt() {
                    return this.hours() % 12 || 12
                }

                function Gt() {
                    return this.hours() || 24
                }

                function Vt(t, e) {
                    U(t, 0, 0, function () {
                        return this.localeData().meridiem(this.hours(), this.minutes(), e)
                    })
                }

                function Ut(t, e) {
                    return e._meridiemParse
                }

                function qt(t) {
                    return "p" === (t + "").toLowerCase().charAt(0)
                }

                function Xt(t, e, i) {
                    return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
                }

                function Zt(t) {
                    return t ? t.toLowerCase().replace("_", "-") : t
                }

                function Kt(t) {
                    for (var e, i, o, n, s = 0; s < t.length;) {
                        for (n = Zt(t[s]).split("-"), e = n.length, i = Zt(t[s + 1]), i = i ? i.split("-") : null; e > 0;) {
                            if (o = Jt(n.slice(0, e).join("-")))return o;
                            if (i && i.length >= e && w(n, i, !0) >= e - 1)break;
                            e--
                        }
                        s++
                    }
                    return null
                }

                function Jt(e) {
                    var i = null;
                    if (!Dn[e] && "undefined" != typeof t && t && t.exports)try {
                        i = wn._abbr, !function () {
                            var t = new Error('Cannot find module "./locale"');
                            throw t.code = "MODULE_NOT_FOUND", t
                        }(), Qt(i)
                    } catch (t) {
                    }
                    return Dn[e]
                }

                function Qt(t, e) {
                    var i;
                    return t && (i = m(e) ? ee(t) : $t(t, e), i && (wn = i)), wn._abbr
                }

                function $t(t, e) {
                    if (null !== e) {
                        var i = On;
                        return e.abbr = t, null != Dn[t] ? (O("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = Dn[t]._config) : null != e.parentLocale && (null != Dn[e.parentLocale] ? i = Dn[e.parentLocale]._config : O("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), Dn[t] = new T(C(i, e)), Qt(t), Dn[t]
                    }
                    return delete Dn[t], null
                }

                function te(t, e) {
                    if (null != e) {
                        var i, o = On;
                        null != Dn[t] && (o = Dn[t]._config), e = C(o, e), i = new T(e), i.parentLocale = Dn[t], Dn[t] = i, Qt(t)
                    } else null != Dn[t] && (null != Dn[t].parentLocale ? Dn[t] = Dn[t].parentLocale : null != Dn[t] && delete Dn[t]);
                    return Dn[t]
                }

                function ee(t) {
                    var e;
                    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)return wn;
                    if (!o(t)) {
                        if (e = Jt(t))return e;
                        t = [t]
                    }
                    return Kt(t)
                }

                function ie() {
                    return bo(Dn)
                }

                function oe(t) {
                    var e, i = t._a;
                    return i && u(t).overflow === -2 && (e = i[$o] < 0 || i[$o] > 11 ? $o : i[tn] < 1 || i[tn] > nt(i[Qo], i[$o]) ? tn : i[en] < 0 || i[en] > 24 || 24 === i[en] && (0 !== i[on] || 0 !== i[nn] || 0 !== i[sn]) ? en : i[on] < 0 || i[on] > 59 ? on : i[nn] < 0 || i[nn] > 59 ? nn : i[sn] < 0 || i[sn] > 999 ? sn : -1, u(t)._overflowDayOfYear && (e < Qo || e > tn) && (e = tn), u(t)._overflowWeeks && e === -1 && (e = rn), u(t)._overflowWeekday && e === -1 && (e = an), u(t).overflow = e), t
                }

                function ne(t) {
                    var e, i, o, n, s, r, a = t._i, h = Sn.exec(a) || Cn.exec(a);
                    if (h) {
                        for (u(t).iso = !0, e = 0, i = En.length; e < i; e++)if (En[e][1].exec(h[1])) {
                            n = En[e][0], o = En[e][2] !== !1;
                            break
                        }
                        if (null == n)return void(t._isValid = !1);
                        if (h[3]) {
                            for (e = 0, i = Mn.length; e < i; e++)if (Mn[e][1].exec(h[3])) {
                                s = (h[2] || " ") + Mn[e][0];
                                break
                            }
                            if (null == s)return void(t._isValid = !1)
                        }
                        if (!o && null != s)return void(t._isValid = !1);
                        if (h[4]) {
                            if (!Tn.exec(h[4]))return void(t._isValid = !1);
                            r = "Z"
                        }
                        t._f = n + (s || "") + (r || ""), le(t)
                    } else t._isValid = !1
                }

                function se(t) {
                    var i = Pn.exec(t._i);
                    return null !== i ? void(t._d = new Date(+i[1])) : (ne(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
                }

                function re(t, e, i) {
                    return null != t ? t : null != e ? e : i
                }

                function ae(t) {
                    var i = new Date(e.now());
                    return t._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
                }

                function he(t) {
                    var e, i, o, n, s = [];
                    if (!t._d) {
                        for (o = ae(t), t._w && null == t._a[tn] && null == t._a[$o] && de(t), t._dayOfYear && (n = re(t._a[Qo], o[Qo]), t._dayOfYear > mt(n) && (u(t)._overflowDayOfYear = !0), i = bt(n, 0, t._dayOfYear), t._a[$o] = i.getUTCMonth(), t._a[tn] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e)t._a[e] = s[e] = o[e];
                        for (; e < 7; e++)t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                        24 === t._a[en] && 0 === t._a[on] && 0 === t._a[nn] && 0 === t._a[sn] && (t._nextDay = !0, t._a[en] = 0), t._d = (t._useUTC ? bt : yt).apply(null, s), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[en] = 24)
                    }
                }

                function de(t) {
                    var e, i, o, n, s, r, a, h;
                    e = t._w, null != e.GG || null != e.W || null != e.E ? (s = 1, r = 4, i = re(e.GG, t._a[Qo], xt(ye(), 1, 4).year), o = re(e.W, 1), n = re(e.E, 1), (n < 1 || n > 7) && (h = !0)) : (s = t._locale._week.dow, r = t._locale._week.doy, i = re(e.gg, t._a[Qo], xt(ye(), s, r).year), o = re(e.w, 1), null != e.d ? (n = e.d, (n < 0 || n > 6) && (h = !0)) : null != e.e ? (n = e.e + s, (e.e < 0 || e.e > 6) && (h = !0)) : n = s), o < 1 || o > kt(i, s, r) ? u(t)._overflowWeeks = !0 : null != h ? u(t)._overflowWeekday = !0 : (a = wt(i, o, n, s, r), t._a[Qo] = a.year, t._dayOfYear = a.dayOfYear)
                }

                function le(t) {
                    if (t._f === e.ISO_8601)return void ne(t);
                    t._a = [], u(t).empty = !0;
                    var i, o, n, s, r, a = "" + t._i, h = a.length, d = 0;
                    for (n = K(t._f, t._locale).match(Eo) || [], i = 0; i < n.length; i++)s = n[i], o = (a.match(Q(s, t)) || [])[0], o && (r = a.substr(0, a.indexOf(o)), r.length > 0 && u(t).unusedInput.push(r), a = a.slice(a.indexOf(o) + o.length), d += o.length), Io[s] ? (o ? u(t).empty = !1 : u(t).unusedTokens.push(s), ot(s, o, t)) : t._strict && !o && u(t).unusedTokens.push(s);
                    u(t).charsLeftOver = h - d, a.length > 0 && u(t).unusedInput.push(a), t._a[en] <= 12 && u(t).bigHour === !0 && t._a[en] > 0 && (u(t).bigHour = void 0), u(t).parsedDateParts = t._a.slice(0), u(t).meridiem = t._meridiem, t._a[en] = ce(t._locale, t._a[en], t._meridiem), he(t), oe(t)
                }

                function ce(t, e, i) {
                    var o;
                    return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? (o = t.isPM(i), o && e < 12 && (e += 12), o || 12 !== e || (e = 0), e) : e
                }

                function ue(t) {
                    var e, i, o, n, s;
                    if (0 === t._f.length)return u(t).invalidFormat = !0, void(t._d = new Date(NaN));
                    for (n = 0; n < t._f.length; n++)s = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[n], le(e), p(e) && (s += u(e).charsLeftOver, s += 10 * u(e).unusedTokens.length, u(e).score = s, (null == o || s < o) && (o = s, i = e));
                    d(t, i || e)
                }

                function pe(t) {
                    if (!t._d) {
                        var e = A(t._i);
                        t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                            return t && parseInt(t, 10)
                        }), he(t)
                    }
                }

                function fe(t) {
                    var e = new g(oe(me(t)));
                    return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
                }

                function me(t) {
                    var e = t._i, i = t._f;
                    return t._locale = t._locale || ee(t._l), null === e || void 0 === i && "" === e ? f({nullInput: !0}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new g(oe(e)) : (o(i) ? ue(t) : r(e) ? t._d = e : i ? le(t) : ve(t), p(t) || (t._d = null), t))
                }

                function ve(t) {
                    var i = t._i;
                    void 0 === i ? t._d = new Date(e.now()) : r(i) ? t._d = new Date(i.valueOf()) : "string" == typeof i ? se(t) : o(i) ? (t._a = a(i.slice(0), function (t) {
                        return parseInt(t, 10)
                    }), he(t)) : "object" == typeof i ? pe(t) : "number" == typeof i ? t._d = new Date(i) : e.createFromInputFallback(t)
                }

                function ge(t, e, i, r, a) {
                    var h = {};
                    return "boolean" == typeof i && (r = i, i = void 0), (n(t) && s(t) || o(t) && 0 === t.length) && (t = void 0), h._isAMomentObject = !0, h._useUTC = h._isUTC = a, h._l = i, h._i = t, h._f = e, h._strict = r, fe(h)
                }

                function ye(t, e, i, o) {
                    return ge(t, e, i, o, !1)
                }

                function be(t, e) {
                    var i, n;
                    if (1 === e.length && o(e[0]) && (e = e[0]), !e.length)return ye();
                    for (i = e[0], n = 1; n < e.length; ++n)e[n].isValid() && !e[n][t](i) || (i = e[n]);
                    return i
                }

                function _e() {
                    var t = [].slice.call(arguments, 0);
                    return be("isBefore", t)
                }

                function we() {
                    var t = [].slice.call(arguments, 0);
                    return be("isAfter", t)
                }

                function xe(t) {
                    var e = A(t), i = e.year || 0, o = e.quarter || 0, n = e.month || 0, s = e.week || 0, r = e.day || 0, a = e.hour || 0, h = e.minute || 0, d = e.second || 0, l = e.millisecond || 0;
                    this._milliseconds = +l + 1e3 * d + 6e4 * h + 1e3 * a * 60 * 60, this._days = +r + 7 * s, this._months = +n + 3 * o + 12 * i, this._data = {}, this._locale = ee(), this._bubble()
                }

                function ke(t) {
                    return t instanceof xe
                }

                function Oe(t) {
                    return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
                }

                function De(t, e) {
                    U(t, 0, 0, function () {
                        var t = this.utcOffset(), i = "+";
                        return t < 0 && (t = -t, i = "-"), i + V(~~(t / 60), 2) + e + V(~~t % 60, 2)
                    })
                }

                function Se(t, e) {
                    var i = (e || "").match(t) || [], o = i[i.length - 1] || [], n = (o + "").match(Ln) || ["-", 0, 0], s = +(60 * n[1]) + _(n[2]);
                    return "+" === n[0] ? s : -s
                }

                function Ce(t, i) {
                    var o, n;
                    return i._isUTC ? (o = i.clone(), n = (y(t) || r(t) ? t.valueOf() : ye(t).valueOf()) - o.valueOf(), o._d.setTime(o._d.valueOf() + n), e.updateOffset(o, !1), o) : ye(t).local()
                }

                function Te(t) {
                    return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
                }

                function Ee(t, i) {
                    var o, n = this._offset || 0;
                    return this.isValid() ? null != t ? ("string" == typeof t ? t = Se(qo, t) : Math.abs(t) < 16 && (t *= 60), !this._isUTC && i && (o = Te(this)), this._offset = t, this._isUTC = !0, null != o && this.add(o, "m"), n !== t && (!i || this._changeInProgress ? Ve(this, Fe(t - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? n : Te(this) : null != t ? this : NaN
                }

                function Me(t, e) {
                    return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
                }

                function Pe(t) {
                    return this.utcOffset(0, t)
                }

                function Ie(t) {
                    return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Te(this), "m")), this
                }

                function Ne() {
                    if (this._tzm)this.utcOffset(this._tzm); else if ("string" == typeof this._i) {
                        var t = Se(Uo, this._i);
                        0 === t ? this.utcOffset(0, !0) : this.utcOffset(Se(Uo, this._i))
                    }
                    return this
                }

                function Re(t) {
                    return !!this.isValid() && (t = t ? ye(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
                }

                function Le() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }

                function ze() {
                    if (!m(this._isDSTShifted))return this._isDSTShifted;
                    var t = {};
                    if (v(t, this), t = me(t), t._a) {
                        var e = t._isUTC ? l(t._a) : ye(t._a);
                        this._isDSTShifted = this.isValid() && w(t._a, e.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                }

                function Ae() {
                    return !!this.isValid() && !this._isUTC
                }

                function Be() {
                    return !!this.isValid() && this._isUTC
                }

                function je() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function Fe(t, e) {
                    var i, o, n, s = t, r = null;
                    return ke(t) ? s = {
                        ms: t._milliseconds,
                        d: t._days,
                        M: t._months
                    } : "number" == typeof t ? (s = {}, e ? s[e] = t : s.milliseconds = t) : (r = zn.exec(t)) ? (i = "-" === r[1] ? -1 : 1, s = {
                        y: 0,
                        d: _(r[tn]) * i,
                        h: _(r[en]) * i,
                        m: _(r[on]) * i,
                        s: _(r[nn]) * i,
                        ms: _(Oe(1e3 * r[sn])) * i
                    }) : (r = An.exec(t)) ? (i = "-" === r[1] ? -1 : 1, s = {
                        y: He(r[2], i),
                        M: He(r[3], i),
                        w: He(r[4], i),
                        d: He(r[5], i),
                        h: He(r[6], i),
                        m: He(r[7], i),
                        s: He(r[8], i)
                    }) : null == s ? s = {} : "object" == typeof s && ("from"in s || "to"in s) && (n = Ye(ye(s.from), ye(s.to)), s = {}, s.ms = n.milliseconds, s.M = n.months), o = new xe(s), ke(t) && h(t, "_locale") && (o._locale = t._locale), o
                }

                function He(t, e) {
                    var i = t && parseFloat(t.replace(",", "."));
                    return (isNaN(i) ? 0 : i) * e
                }

                function We(t, e) {
                    var i = {milliseconds: 0, months: 0};
                    return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
                }

                function Ye(t, e) {
                    var i;
                    return t.isValid() && e.isValid() ? (e = Ce(e, t), t.isBefore(e) ? i = We(t, e) : (i = We(e, t), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
                        milliseconds: 0,
                        months: 0
                    }
                }

                function Ge(t, e) {
                    return function (i, o) {
                        var n, s;
                        return null === o || isNaN(+o) || (O(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = i, i = o, o = s), i = "string" == typeof i ? +i : i, n = Fe(i, o), Ve(this, n, t), this
                    }
                }

                function Ve(t, i, o, n) {
                    var s = i._milliseconds, r = Oe(i._days), a = Oe(i._months);
                    t.isValid() && (n = null == n || n, s && t._d.setTime(t._d.valueOf() + s * o), r && W(t, "Date", H(t, "Date") + r * o), a && dt(t, H(t, "Month") + a * o), n && e.updateOffset(t, r || a))
                }

                function Ue(t, e) {
                    var i = t.diff(e, "days", !0);
                    return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
                }

                function qe(t, i) {
                    var o = t || ye(), n = Ce(o, this).startOf("day"), s = e.calendarFormat(this, n) || "sameElse", r = i && (D(i[s]) ? i[s].call(this, o) : i[s]);
                    return this.format(r || this.localeData().calendar(s, this, ye(o)))
                }

                function Xe() {
                    return new g(this)
                }

                function Ze(t, e) {
                    var i = y(t) ? t : ye(t);
                    return !(!this.isValid() || !i.isValid()) && (e = z(m(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
                }

                function Ke(t, e) {
                    var i = y(t) ? t : ye(t);
                    return !(!this.isValid() || !i.isValid()) && (e = z(m(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
                }

                function Je(t, e, i, o) {
                    return o = o || "()", ("(" === o[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === o[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
                }

                function Qe(t, e) {
                    var i, o = y(t) ? t : ye(t);
                    return !(!this.isValid() || !o.isValid()) && (e = z(e || "millisecond"), "millisecond" === e ? this.valueOf() === o.valueOf() : (i = o.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
                }

                function $e(t, e) {
                    return this.isSame(t, e) || this.isAfter(t, e)
                }

                function ti(t, e) {
                    return this.isSame(t, e) || this.isBefore(t, e)
                }

                function ei(t, e, i) {
                    var o, n, s, r;
                    return this.isValid() ? (o = Ce(t, this), o.isValid() ? (n = 6e4 * (o.utcOffset() - this.utcOffset()), e = z(e), "year" === e || "month" === e || "quarter" === e ? (r = ii(this, o), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (s = this - o, r = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? (s - n) / 864e5 : "week" === e ? (s - n) / 6048e5 : s), i ? r : b(r)) : NaN) : NaN
                }

                function ii(t, e) {
                    var i, o, n = 12 * (e.year() - t.year()) + (e.month() - t.month()), s = t.clone().add(n, "months");
                    return e - s < 0 ? (i = t.clone().add(n - 1, "months"), o = (e - s) / (s - i)) : (i = t.clone().add(n + 1, "months"), o = (e - s) / (i - s)), -(n + o) || 0
                }

                function oi() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function ni() {
                    var t = this.clone().utc();
                    return 0 < t.year() && t.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : Z(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Z(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }

                function si(t) {
                    t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
                    var i = Z(this, t);
                    return this.localeData().postformat(i)
                }

                function ri(t, e) {
                    return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? Fe({
                        to: this,
                        from: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }

                function ai(t) {
                    return this.from(ye(), t)
                }

                function hi(t, e) {
                    return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? Fe({
                        from: this,
                        to: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }

                function di(t) {
                    return this.to(ye(), t)
                }

                function li(t) {
                    var e;
                    return void 0 === t ? this._locale._abbr : (e = ee(t), null != e && (this._locale = e), this)
                }

                function ci() {
                    return this._locale
                }

                function ui(t) {
                    switch (t = z(t)) {
                        case"year":
                            this.month(0);
                        case"quarter":
                        case"month":
                            this.date(1);
                        case"week":
                        case"isoWeek":
                        case"day":
                        case"date":
                            this.hours(0);
                        case"hour":
                            this.minutes(0);
                        case"minute":
                            this.seconds(0);
                        case"second":
                            this.milliseconds(0)
                    }
                    return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
                }

                function pi(t) {
                    return t = z(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
                }

                function fi() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }

                function mi() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function vi() {
                    return new Date(this.valueOf())
                }

                function gi() {
                    var t = this;
                    return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
                }

                function yi() {
                    var t = this;
                    return {
                        years: t.year(),
                        months: t.month(),
                        date: t.date(),
                        hours: t.hours(),
                        minutes: t.minutes(),
                        seconds: t.seconds(),
                        milliseconds: t.milliseconds()
                    }
                }

                function bi() {
                    return this.isValid() ? this.toISOString() : null
                }

                function _i() {
                    return p(this)
                }

                function wi() {
                    return d({}, u(this))
                }

                function xi() {
                    return u(this).overflow
                }

                function ki() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function Oi(t, e) {
                    U(0, [t, t.length], 0, e)
                }

                function Di(t) {
                    return Ei.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function Si(t) {
                    return Ei.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function Ci() {
                    return kt(this.year(), 1, 4)
                }

                function Ti() {
                    var t = this.localeData()._week;
                    return kt(this.year(), t.dow, t.doy)
                }

                function Ei(t, e, i, o, n) {
                    var s;
                    return null == t ? xt(this, o, n).year : (s = kt(t, o, n), e > s && (e = s), Mi.call(this, t, e, i, o, n))
                }

                function Mi(t, e, i, o, n) {
                    var s = wt(t, e, i, o, n), r = bt(s.year, 0, s.dayOfYear);
                    return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
                }

                function Pi(t) {
                    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
                }

                function Ii(t) {
                    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == t ? e : this.add(t - e, "d")
                }

                function Ni(t, e) {
                    e[sn] = _(1e3 * ("0." + t))
                }

                function Ri() {
                    return this._isUTC ? "UTC" : ""
                }

                function Li() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                function zi(t) {
                    return ye(1e3 * t)
                }

                function Ai() {
                    return ye.apply(null, arguments).parseZone()
                }

                function Bi(t) {
                    return t
                }

                function ji(t, e, i, o) {
                    var n = ee(), s = l().set(o, e);
                    return n[i](s, t)
                }

                function Fi(t, e, i) {
                    if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e)return ji(t, e, i, "month");
                    var o, n = [];
                    for (o = 0; o < 12; o++)n[o] = ji(t, o, i, "month");
                    return n
                }

                function Hi(t, e, i, o) {
                    "boolean" == typeof t ? ("number" == typeof e && (i = e, e = void 0), e = e || "") : (e = t, i = e, t = !1, "number" == typeof e && (i = e, e = void 0), e = e || "");
                    var n = ee(), s = t ? n._week.dow : 0;
                    if (null != i)return ji(e, (i + s) % 7, o, "day");
                    var r, a = [];
                    for (r = 0; r < 7; r++)a[r] = ji(e, (r + s) % 7, o, "day");
                    return a
                }

                function Wi(t, e) {
                    return Fi(t, e, "months")
                }

                function Yi(t, e) {
                    return Fi(t, e, "monthsShort")
                }

                function Gi(t, e, i) {
                    return Hi(t, e, i, "weekdays")
                }

                function Vi(t, e, i) {
                    return Hi(t, e, i, "weekdaysShort")
                }

                function Ui(t, e, i) {
                    return Hi(t, e, i, "weekdaysMin")
                }

                function qi() {
                    var t = this._data;
                    return this._milliseconds = Zn(this._milliseconds), this._days = Zn(this._days), this._months = Zn(this._months), t.milliseconds = Zn(t.milliseconds), t.seconds = Zn(t.seconds), t.minutes = Zn(t.minutes), t.hours = Zn(t.hours), t.months = Zn(t.months), t.years = Zn(t.years), this
                }

                function Xi(t, e, i, o) {
                    var n = Fe(e, i);
                    return t._milliseconds += o * n._milliseconds, t._days += o * n._days, t._months += o * n._months, t._bubble()
                }

                function Zi(t, e) {
                    return Xi(this, t, e, 1)
                }

                function Ki(t, e) {
                    return Xi(this, t, e, -1)
                }

                function Ji(t) {
                    return t < 0 ? Math.floor(t) : Math.ceil(t)
                }

                function Qi() {
                    var t, e, i, o, n, s = this._milliseconds, r = this._days, a = this._months, h = this._data;
                    return s >= 0 && r >= 0 && a >= 0 || s <= 0 && r <= 0 && a <= 0 || (s += 864e5 * Ji(to(a) + r), r = 0, a = 0), h.milliseconds = s % 1e3, t = b(s / 1e3), h.seconds = t % 60, e = b(t / 60), h.minutes = e % 60, i = b(e / 60), h.hours = i % 24, r += b(i / 24), n = b($i(r)), a += n, r -= Ji(to(n)), o = b(a / 12), a %= 12, h.days = r, h.months = a, h.years = o, this
                }

                function $i(t) {
                    return 4800 * t / 146097
                }

                function to(t) {
                    return 146097 * t / 4800
                }

                function eo(t) {
                    var e, i, o = this._milliseconds;
                    if (t = z(t), "month" === t || "year" === t)return e = this._days + o / 864e5, i = this._months + $i(e), "month" === t ? i : i / 12;
                    switch (e = this._days + Math.round(to(this._months)), t) {
                        case"week":
                            return e / 7 + o / 6048e5;
                        case"day":
                            return e + o / 864e5;
                        case"hour":
                            return 24 * e + o / 36e5;
                        case"minute":
                            return 1440 * e + o / 6e4;
                        case"second":
                            return 86400 * e + o / 1e3;
                        case"millisecond":
                            return Math.floor(864e5 * e) + o;
                        default:
                            throw new Error("Unknown unit " + t)
                    }
                }

                function io() {
                    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12)
                }

                function oo(t) {
                    return function () {
                        return this.as(t)
                    }
                }

                function no(t) {
                    return t = z(t), this[t + "s"]()
                }

                function so(t) {
                    return function () {
                        return this._data[t]
                    }
                }

                function ro() {
                    return b(this.days() / 7)
                }

                function ao(t, e, i, o, n) {
                    return n.relativeTime(e || 1, !!i, t, o)
                }

                function ho(t, e, i) {
                    var o = Fe(t).abs(), n = cs(o.as("s")), s = cs(o.as("m")), r = cs(o.as("h")), a = cs(o.as("d")), h = cs(o.as("M")), d = cs(o.as("y")), l = n < us.s && ["s", n] || s <= 1 && ["m"] || s < us.m && ["mm", s] || r <= 1 && ["h"] || r < us.h && ["hh", r] || a <= 1 && ["d"] || a < us.d && ["dd", a] || h <= 1 && ["M"] || h < us.M && ["MM", h] || d <= 1 && ["y"] || ["yy", d];
                    return l[2] = e, l[3] = +t > 0, l[4] = i, ao.apply(null, l)
                }

                function lo(t) {
                    return void 0 === t ? cs : "function" == typeof t && (cs = t, !0)
                }

                function co(t, e) {
                    return void 0 !== us[t] && (void 0 === e ? us[t] : (us[t] = e, !0))
                }

                function uo(t) {
                    var e = this.localeData(), i = ho(this, !t, e);
                    return t && (i = e.pastFuture(+this, i)), e.postformat(i)
                }

                function po() {
                    var t, e, i, o = ps(this._milliseconds) / 1e3, n = ps(this._days), s = ps(this._months);
                    t = b(o / 60), e = b(t / 60), o %= 60, t %= 60, i = b(s / 12), s %= 12;
                    var r = i, a = s, h = n, d = e, l = t, c = o, u = this.asSeconds();
                    return u ? (u < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (a ? a + "M" : "") + (h ? h + "D" : "") + (d || l || c ? "T" : "") + (d ? d + "H" : "") + (l ? l + "M" : "") + (c ? c + "S" : "") : "P0D"
                }

                var fo, mo;
                mo = Array.prototype.some ? Array.prototype.some : function (t) {
                    for (var e = Object(this), i = e.length >>> 0, o = 0; o < i; o++)if (o in e && t.call(this, e[o], o, e))return !0;
                    return !1
                };
                var vo = e.momentProperties = [], go = !1, yo = {};
                e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
                var bo;
                bo = Object.keys ? Object.keys : function (t) {
                    var e, i = [];
                    for (e in t)h(t, e) && i.push(e);
                    return i
                };
                var _o, wo = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                }, xo = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                }, ko = "Invalid date", Oo = "%d", Do = /\d{1,2}/, So = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                }, Co = {}, To = {}, Eo = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Mo = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Po = {}, Io = {}, No = /\d/, Ro = /\d\d/, Lo = /\d{3}/, zo = /\d{4}/, Ao = /[+-]?\d{6}/, Bo = /\d\d?/, jo = /\d\d\d\d?/, Fo = /\d\d\d\d\d\d?/, Ho = /\d{1,3}/, Wo = /\d{1,4}/, Yo = /[+-]?\d{1,6}/, Go = /\d+/, Vo = /[+-]?\d+/, Uo = /Z|[+-]\d\d:?\d\d/gi, qo = /Z|[+-]\d\d(?::?\d\d)?/gi, Xo = /[+-]?\d+(\.\d{1,3})?/, Zo = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ko = {}, Jo = {}, Qo = 0, $o = 1, tn = 2, en = 3, on = 4, nn = 5, sn = 6, rn = 7, an = 8;
                _o = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
                    var e;
                    for (e = 0; e < this.length; ++e)if (this[e] === t)return e;
                    return -1
                }, U("M", ["MM", 2], "Mo", function () {
                    return this.month() + 1
                }), U("MMM", 0, 0, function (t) {
                    return this.localeData().monthsShort(this, t)
                }), U("MMMM", 0, 0, function (t) {
                    return this.localeData().months(this, t)
                }), L("month", "M"), B("month", 8), J("M", Bo), J("MM", Bo, Ro), J("MMM", function (t, e) {
                    return e.monthsShortRegex(t)
                }), J("MMMM", function (t, e) {
                    return e.monthsRegex(t)
                }), et(["M", "MM"], function (t, e) {
                    e[$o] = _(t) - 1
                }), et(["MMM", "MMMM"], function (t, e, i, o) {
                    var n = i._locale.monthsParse(t, o, i._strict);
                    null != n ? e[$o] = n : u(i).invalidMonth = t
                });
                var hn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, dn = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ln = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), cn = Zo, un = Zo;
                U("Y", 0, 0, function () {
                    var t = this.year();
                    return t <= 9999 ? "" + t : "+" + t
                }), U(0, ["YY", 2], 0, function () {
                    return this.year() % 100
                }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), B("year", 1), J("Y", Vo), J("YY", Bo, Ro), J("YYYY", Wo, zo), J("YYYYY", Yo, Ao), J("YYYYYY", Yo, Ao), et(["YYYYY", "YYYYYY"], Qo), et("YYYY", function (t, i) {
                    i[Qo] = 2 === t.length ? e.parseTwoDigitYear(t) : _(t)
                }), et("YY", function (t, i) {
                    i[Qo] = e.parseTwoDigitYear(t)
                }), et("Y", function (t, e) {
                    e[Qo] = parseInt(t, 10)
                }), e.parseTwoDigitYear = function (t) {
                    return _(t) + (_(t) > 68 ? 1900 : 2e3)
                };
                var pn = F("FullYear", !0);
                U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), B("week", 5), B("isoWeek", 5), J("w", Bo), J("ww", Bo, Ro), J("W", Bo), J("WW", Bo, Ro), it(["w", "ww", "W", "WW"], function (t, e, i, o) {
                    e[o.substr(0, 1)] = _(t)
                });
                var fn = {dow: 0, doy: 6};
                U("d", 0, "do", "day"), U("dd", 0, 0, function (t) {
                    return this.localeData().weekdaysMin(this, t)
                }), U("ddd", 0, 0, function (t) {
                    return this.localeData().weekdaysShort(this, t)
                }), U("dddd", 0, 0, function (t) {
                    return this.localeData().weekdays(this, t)
                }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), B("day", 11), B("weekday", 11), B("isoWeekday", 11), J("d", Bo), J("e", Bo), J("E", Bo), J("dd", function (t, e) {
                    return e.weekdaysMinRegex(t)
                }), J("ddd", function (t, e) {
                    return e.weekdaysShortRegex(t)
                }), J("dddd", function (t, e) {
                    return e.weekdaysRegex(t)
                }), it(["dd", "ddd", "dddd"], function (t, e, i, o) {
                    var n = i._locale.weekdaysParse(t, o, i._strict);
                    null != n ? e.d = n : u(i).invalidWeekday = t
                }), it(["d", "e", "E"], function (t, e, i, o) {
                    e[o] = _(t)
                });
                var mn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), vn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), gn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), yn = Zo, bn = Zo, _n = Zo;
                U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Yt), U("k", ["kk", 2], 0, Gt), U("hmm", 0, 0, function () {
                    return "" + Yt.apply(this) + V(this.minutes(), 2)
                }), U("hmmss", 0, 0, function () {
                    return "" + Yt.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2)
                }), U("Hmm", 0, 0, function () {
                    return "" + this.hours() + V(this.minutes(), 2)
                }), U("Hmmss", 0, 0, function () {
                    return "" + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2)
                }), Vt("a", !0), Vt("A", !1), L("hour", "h"), B("hour", 13), J("a", Ut), J("A", Ut), J("H", Bo), J("h", Bo), J("HH", Bo, Ro), J("hh", Bo, Ro), J("hmm", jo), J("hmmss", Fo), J("Hmm", jo), J("Hmmss", Fo), et(["H", "HH"], en), et(["a", "A"], function (t, e, i) {
                    i._isPm = i._locale.isPM(t), i._meridiem = t
                }), et(["h", "hh"], function (t, e, i) {
                    e[en] = _(t), u(i).bigHour = !0
                }), et("hmm", function (t, e, i) {
                    var o = t.length - 2;
                    e[en] = _(t.substr(0, o)), e[on] = _(t.substr(o)), u(i).bigHour = !0
                }), et("hmmss", function (t, e, i) {
                    var o = t.length - 4, n = t.length - 2;
                    e[en] = _(t.substr(0, o)), e[on] = _(t.substr(o, 2)), e[nn] = _(t.substr(n)), u(i).bigHour = !0
                }), et("Hmm", function (t, e, i) {
                    var o = t.length - 2;
                    e[en] = _(t.substr(0, o)), e[on] = _(t.substr(o))
                }), et("Hmmss", function (t, e, i) {
                    var o = t.length - 4, n = t.length - 2;
                    e[en] = _(t.substr(0, o)), e[on] = _(t.substr(o, 2)), e[nn] = _(t.substr(n))
                });
                var wn, xn = /[ap]\.?m?\.?/i, kn = F("Hours", !0), On = {
                    calendar: wo,
                    longDateFormat: xo,
                    invalidDate: ko,
                    ordinal: Oo,
                    ordinalParse: Do,
                    relativeTime: So,
                    months: dn,
                    monthsShort: ln,
                    week: fn,
                    weekdays: mn,
                    weekdaysMin: gn,
                    weekdaysShort: vn,
                    meridiemParse: xn
                }, Dn = {}, Sn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Cn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Tn = /Z|[+-]\d\d(?::?\d\d)?/, En = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], Mn = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Pn = /^\/?Date\((\-?\d+)/i;
                e.createFromInputFallback = k("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
                    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
                }), e.ISO_8601 = function () {
                };
                var In = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var t = ye.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this : t : f()
                }), Nn = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var t = ye.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t > this ? this : t : f()
                }), Rn = function () {
                    return Date.now ? Date.now() : +new Date
                };
                De("Z", ":"), De("ZZ", ""), J("Z", qo), J("ZZ", qo), et(["Z", "ZZ"], function (t, e, i) {
                    i._useUTC = !0, i._tzm = Se(qo, t)
                });
                var Ln = /([\+\-]|\d\d)/gi;
                e.updateOffset = function () {
                };
                var zn = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, An = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                Fe.fn = xe.prototype;
                var Bn = Ge(1, "add"), jn = Ge(-1, "subtract");
                e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Fn = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
                    return void 0 === t ? this.localeData() : this.locale(t)
                });
                U(0, ["gg", 2], 0, function () {
                    return this.weekYear() % 100
                }), U(0, ["GG", 2], 0, function () {
                    return this.isoWeekYear() % 100
                }), Oi("gggg", "weekYear"), Oi("ggggg", "weekYear"), Oi("GGGG", "isoWeekYear"), Oi("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), B("weekYear", 1), B("isoWeekYear", 1), J("G", Vo), J("g", Vo), J("GG", Bo, Ro), J("gg", Bo, Ro), J("GGGG", Wo, zo), J("gggg", Wo, zo), J("GGGGG", Yo, Ao), J("ggggg", Yo, Ao), it(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, o) {
                    e[o.substr(0, 2)] = _(t)
                }), it(["gg", "GG"], function (t, i, o, n) {
                    i[n] = e.parseTwoDigitYear(t)
                }), U("Q", 0, "Qo", "quarter"), L("quarter", "Q"), B("quarter", 7), J("Q", No), et("Q", function (t, e) {
                    e[$o] = 3 * (_(t) - 1)
                }), U("D", ["DD", 2], "Do", "date"), L("date", "D"), B("date", 9), J("D", Bo), J("DD", Bo, Ro), J("Do", function (t, e) {
                    return t ? e._ordinalParse : e._ordinalParseLenient
                }), et(["D", "DD"], tn), et("Do", function (t, e) {
                    e[tn] = _(t.match(Bo)[0], 10)
                });
                var Hn = F("Date", !0);
                U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), B("dayOfYear", 4), J("DDD", Ho), J("DDDD", Lo), et(["DDD", "DDDD"], function (t, e, i) {
                    i._dayOfYear = _(t)
                }), U("m", ["mm", 2], 0, "minute"), L("minute", "m"), B("minute", 14), J("m", Bo), J("mm", Bo, Ro), et(["m", "mm"], on);
                var Wn = F("Minutes", !1);
                U("s", ["ss", 2], 0, "second"), L("second", "s"), B("second", 15), J("s", Bo), J("ss", Bo, Ro), et(["s", "ss"], nn);
                var Yn = F("Seconds", !1);
                U("S", 0, 0, function () {
                    return ~~(this.millisecond() / 100)
                }), U(0, ["SS", 2], 0, function () {
                    return ~~(this.millisecond() / 10)
                }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
                    return 10 * this.millisecond()
                }), U(0, ["SSSSS", 5], 0, function () {
                    return 100 * this.millisecond()
                }), U(0, ["SSSSSS", 6], 0, function () {
                    return 1e3 * this.millisecond()
                }), U(0, ["SSSSSSS", 7], 0, function () {
                    return 1e4 * this.millisecond()
                }), U(0, ["SSSSSSSS", 8], 0, function () {
                    return 1e5 * this.millisecond()
                }), U(0, ["SSSSSSSSS", 9], 0, function () {
                    return 1e6 * this.millisecond()
                }), L("millisecond", "ms"), B("millisecond", 16), J("S", Ho, No), J("SS", Ho, Ro), J("SSS", Ho, Lo);
                var Gn;
                for (Gn = "SSSS"; Gn.length <= 9; Gn += "S")J(Gn, Go);
                for (Gn = "S"; Gn.length <= 9; Gn += "S")et(Gn, Ni);
                var Vn = F("Milliseconds", !1);
                U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
                var Un = g.prototype;
                Un.add = Bn, Un.calendar = qe, Un.clone = Xe, Un.diff = ei, Un.endOf = pi, Un.format = si, Un.from = ri, Un.fromNow = ai, Un.to = hi, Un.toNow = di, Un.get = Y, Un.invalidAt = xi, Un.isAfter = Ze, Un.isBefore = Ke, Un.isBetween = Je, Un.isSame = Qe, Un.isSameOrAfter = $e, Un.isSameOrBefore = ti, Un.isValid = _i, Un.lang = Fn, Un.locale = li, Un.localeData = ci, Un.max = Nn, Un.min = In, Un.parsingFlags = wi, Un.set = G, Un.startOf = ui, Un.subtract = jn, Un.toArray = gi, Un.toObject = yi, Un.toDate = vi, Un.toISOString = ni, Un.toJSON = bi, Un.toString = oi, Un.unix = mi, Un.valueOf = fi, Un.creationData = ki, Un.year = pn, Un.isLeapYear = gt, Un.weekYear = Di, Un.isoWeekYear = Si, Un.quarter = Un.quarters = Pi, Un.month = lt, Un.daysInMonth = ct, Un.week = Un.weeks = Ct, Un.isoWeek = Un.isoWeeks = Tt, Un.weeksInYear = Ti, Un.isoWeeksInYear = Ci, Un.date = Hn, Un.day = Un.days = zt, Un.weekday = At, Un.isoWeekday = Bt, Un.dayOfYear = Ii, Un.hour = Un.hours = kn, Un.minute = Un.minutes = Wn, Un.second = Un.seconds = Yn, Un.millisecond = Un.milliseconds = Vn, Un.utcOffset = Ee, Un.utc = Pe, Un.local = Ie, Un.parseZone = Ne, Un.hasAlignedHourOffset = Re, Un.isDST = Le, Un.isLocal = Ae, Un.isUtcOffset = Be, Un.isUtc = je, Un.isUTC = je, Un.zoneAbbr = Ri, Un.zoneName = Li, Un.dates = k("dates accessor is deprecated. Use date instead.", Hn), Un.months = k("months accessor is deprecated. Use month instead", lt), Un.years = k("years accessor is deprecated. Use year instead", pn), Un.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Me), Un.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", ze);
                var qn = Un, Xn = T.prototype;
                Xn.calendar = E, Xn.longDateFormat = M, Xn.invalidDate = P, Xn.ordinal = I, Xn.preparse = Bi, Xn.postformat = Bi, Xn.relativeTime = N, Xn.pastFuture = R, Xn.set = S, Xn.months = st, Xn.monthsShort = rt, Xn.monthsParse = ht, Xn.monthsRegex = pt, Xn.monthsShortRegex = ut, Xn.week = Ot, Xn.firstDayOfYear = St, Xn.firstDayOfWeek = Dt, Xn.weekdays = Pt, Xn.weekdaysMin = Nt, Xn.weekdaysShort = It, Xn.weekdaysParse = Lt, Xn.weekdaysRegex = jt, Xn.weekdaysShortRegex = Ft, Xn.weekdaysMinRegex = Ht, Xn.isPM = qt, Xn.meridiem = Xt, Qt("en", {
                    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function (t) {
                        var e = t % 10, i = 1 === _(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                        return t + i
                    }
                }), e.lang = k("moment.lang is deprecated. Use moment.locale instead.", Qt), e.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ee);
                var Zn = Math.abs, Kn = oo("ms"), Jn = oo("s"), Qn = oo("m"), $n = oo("h"), ts = oo("d"), es = oo("w"), is = oo("M"), os = oo("y"), ns = so("milliseconds"), ss = so("seconds"), rs = so("minutes"), as = so("hours"), hs = so("days"), ds = so("months"), ls = so("years"), cs = Math.round, us = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                }, ps = Math.abs, fs = xe.prototype;
                fs.abs = qi, fs.add = Zi, fs.subtract = Ki, fs.as = eo, fs.asMilliseconds = Kn, fs.asSeconds = Jn, fs.asMinutes = Qn, fs.asHours = $n, fs.asDays = ts, fs.asWeeks = es, fs.asMonths = is, fs.asYears = os, fs.valueOf = io, fs._bubble = Qi, fs.get = no, fs.milliseconds = ns, fs.seconds = ss, fs.minutes = rs, fs.hours = as, fs.days = hs, fs.weeks = ro, fs.months = ds, fs.years = ls, fs.humanize = uo, fs.toISOString = po, fs.toString = po, fs.toJSON = po, fs.locale = li, fs.localeData = ci, fs.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", po), fs.lang = Fn, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), J("x", Vo), J("X", Xo), et("X", function (t, e, i) {
                    i._d = new Date(1e3 * parseFloat(t, 10))
                }), et("x", function (t, e, i) {
                    i._d = new Date(_(t))
                }), e.version = "2.15.2", i(ye), e.fn = qn, e.min = _e, e.max = we, e.now = Rn, e.utc = l, e.unix = zi, e.months = Wi, e.isDate = r, e.locale = Qt, e.invalid = f, e.duration = Fe, e.isMoment = y, e.weekdays = Gi, e.parseZone = Ai, e.localeData = ee, e.isDuration = ke, e.monthsShort = Yi, e.weekdaysMin = Ui, e.defineLocale = $t, e.updateLocale = te, e.locales = ie, e.weekdaysShort = Vi, e.normalizeUnits = z, e.relativeTimeRounding = lo, e.relativeTimeThreshold = co, e.calendarFormat = Ue, e.prototype = qn;
                var ms = e;
                return ms
            })
        }).call(e, i(4)(t))
    }, function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {
            }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
        }
    }, function (t, e) {
        function i(t) {
            throw new Error("Cannot find module '" + t + "'.")
        }

        i.keys = function () {
            return []
        }, i.resolve = i, t.exports = i, i.id = 5
    }, function (t, e) {
        (function (e) {
            function i(t, e, i) {
                var o = e && i || 0, n = 0;
                for (e = e || [], t.toLowerCase().replace(/[0-9a-f]{2}/g, function (t) {
                    n < 16 && (e[o + n++] = c[t])
                }); n < 16;)e[o + n++] = 0;
                return e
            }

            function o(t, e) {
                var i = e || 0, o = l;
                return o[t[i++]] + o[t[i++]] + o[t[i++]] + o[t[i++]] + "-" + o[t[i++]] + o[t[i++]] + "-" + o[t[i++]] + o[t[i++]] + "-" + o[t[i++]] + o[t[i++]] + "-" + o[t[i++]] + o[t[i++]] + o[t[i++]] + o[t[i++]] + o[t[i++]] + o[t[i++]]
            }

            function n(t, e, i) {
                var n = e && i || 0, s = e || [];
                t = t || {};
                var r = void 0 !== t.clockseq ? t.clockseq : m, a = void 0 !== t.msecs ? t.msecs : (new Date).getTime(), h = void 0 !== t.nsecs ? t.nsecs : g + 1, d = a - v + (h - g) / 1e4;
                if (d < 0 && void 0 === t.clockseq && (r = r + 1 & 16383), (d < 0 || a > v) && void 0 === t.nsecs && (h = 0), h >= 1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                v = a, g = h, m = r, a += 122192928e5;
                var l = (1e4 * (268435455 & a) + h) % 4294967296;
                s[n++] = l >>> 24 & 255, s[n++] = l >>> 16 & 255, s[n++] = l >>> 8 & 255, s[n++] = 255 & l;
                var c = a / 4294967296 * 1e4 & 268435455;
                s[n++] = c >>> 8 & 255, s[n++] = 255 & c, s[n++] = c >>> 24 & 15 | 16, s[n++] = c >>> 16 & 255, s[n++] = r >>> 8 | 128, s[n++] = 255 & r;
                for (var u = t.node || f, p = 0; p < 6; p++)s[n + p] = u[p];
                return e ? e : o(s)
            }

            function s(t, e, i) {
                var n = e && i || 0;
                "string" == typeof t && (e = "binary" == t ? new Array(16) : null,
                    t = null), t = t || {};
                var s = t.random || (t.rng || r)();
                if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e)for (var a = 0; a < 16; a++)e[n + a] = s[a];
                return e || o(s)
            }

            var r, a = "undefined" != typeof window ? window : "undefined" != typeof e ? e : null;
            if (a && a.crypto && crypto.getRandomValues) {
                var h = new Uint8Array(16);
                r = function () {
                    return crypto.getRandomValues(h), h
                }
            }
            if (!r) {
                var d = new Array(16);
                r = function () {
                    for (var t, e = 0; e < 16; e++)0 === (3 & e) && (t = 4294967296 * Math.random()), d[e] = t >>> ((3 & e) << 3) & 255;
                    return d
                }
            }
            for (var l = [], c = {}, u = 0; u < 256; u++)l[u] = (u + 256).toString(16).substr(1), c[l[u]] = u;
            var p = r(), f = [1 | p[0], p[1], p[2], p[3], p[4], p[5]], m = 16383 & (p[6] << 8 | p[7]), v = 0, g = 0, y = s;
            y.v1 = n, y.v4 = s, y.parse = i, y.unparse = o, t.exports = y
        }).call(e, function () {
                return this
            }())
    }, function (t, e, i) {
        e.util = i(1), e.DOMutil = i(8), e.DataSet = i(9), e.DataView = i(11), e.Queue = i(10), e.Graph3d = i(12), e.graph3d = {
            Camera: i(16),
            Filter: i(17),
            Point2d: i(15),
            Point3d: i(14),
            Slider: i(18),
            StepNumber: i(19)
        }, e.moment = i(2), e.Hammer = i(22), e.keycharm = i(25)
    }, function (t, e) {
        e.prepareElements = function (t) {
            for (var e in t)t.hasOwnProperty(e) && (t[e].redundant = t[e].used, t[e].used = [])
        }, e.cleanupElements = function (t) {
            for (var e in t)if (t.hasOwnProperty(e) && t[e].redundant) {
                for (var i = 0; i < t[e].redundant.length; i++)t[e].redundant[i].parentNode.removeChild(t[e].redundant[i]);
                t[e].redundant = []
            }
        }, e.resetElements = function (t) {
            e.prepareElements(t), e.cleanupElements(t), e.prepareElements(t)
        }, e.getSVGElement = function (t, e, i) {
            var o;
            return e.hasOwnProperty(t) ? e[t].redundant.length > 0 ? (o = e[t].redundant[0], e[t].redundant.shift()) : (o = document.createElementNS("http://www.w3.org/2000/svg", t), i.appendChild(o)) : (o = document.createElementNS("http://www.w3.org/2000/svg", t), e[t] = {
                used: [],
                redundant: []
            }, i.appendChild(o)), e[t].used.push(o), o
        }, e.getDOMElement = function (t, e, i, o) {
            var n;
            return e.hasOwnProperty(t) ? e[t].redundant.length > 0 ? (n = e[t].redundant[0], e[t].redundant.shift()) : (n = document.createElement(t), void 0 !== o ? i.insertBefore(n, o) : i.appendChild(n)) : (n = document.createElement(t), e[t] = {
                used: [],
                redundant: []
            }, void 0 !== o ? i.insertBefore(n, o) : i.appendChild(n)), e[t].used.push(n), n
        }, e.drawPoint = function (t, i, o, n, s, r) {
            var a;
            if ("circle" == o.style ? (a = e.getSVGElement("circle", n, s), a.setAttributeNS(null, "cx", t), a.setAttributeNS(null, "cy", i), a.setAttributeNS(null, "r", .5 * o.size)) : (a = e.getSVGElement("rect", n, s), a.setAttributeNS(null, "x", t - .5 * o.size), a.setAttributeNS(null, "y", i - .5 * o.size), a.setAttributeNS(null, "width", o.size), a.setAttributeNS(null, "height", o.size)), void 0 !== o.styles && a.setAttributeNS(null, "style", o.styles), a.setAttributeNS(null, "class", o.className + " vis-point"), r) {
                var h = e.getSVGElement("text", n, s);
                r.xOffset && (t += r.xOffset), r.yOffset && (i += r.yOffset), r.content && (h.textContent = r.content), r.className && h.setAttributeNS(null, "class", r.className + " vis-label"), h.setAttributeNS(null, "x", t), h.setAttributeNS(null, "y", i)
            }
            return a
        }, e.drawBar = function (t, i, o, n, s, r, a, h) {
            if (0 != n) {
                n < 0 && (n *= -1, i -= n);
                var d = e.getSVGElement("rect", r, a);
                d.setAttributeNS(null, "x", t - .5 * o), d.setAttributeNS(null, "y", i), d.setAttributeNS(null, "width", o), d.setAttributeNS(null, "height", n), d.setAttributeNS(null, "class", s), h && d.setAttributeNS(null, "style", h)
            }
        }
    }, function (t, e, i) {
        function o(t, e) {
            if (t && !Array.isArray(t) && (e = t, t = null), this._options = e || {}, this._data = {}, this.length = 0, this._fieldId = this._options.fieldId || "id", this._type = {}, this._options.type)for (var i = Object.keys(this._options.type), o = 0, n = i.length; o < n; o++) {
                var s = i[o], r = this._options.type[s];
                "Date" == r || "ISODate" == r || "ASPDate" == r ? this._type[s] = "Date" : this._type[s] = r
            }
            if (this._options.convert)throw new Error('Option "convert" is deprecated. Use "type" instead.');
            this._subscribers = {}, t && this.add(t), this.setOptions(e)
        }

        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s = i(1), r = i(10);
        o.prototype.setOptions = function (t) {
            t && void 0 !== t.queue && (t.queue === !1 ? this._queue && (this._queue.destroy(), delete this._queue) : (this._queue || (this._queue = r.extend(this, {replace: ["add", "update", "remove"]})), "object" === n(t.queue) && this._queue.setOptions(t.queue)))
        }, o.prototype.on = function (t, e) {
            var i = this._subscribers[t];
            i || (i = [], this._subscribers[t] = i), i.push({callback: e})
        }, o.prototype.subscribe = function () {
            throw new Error("DataSet.subscribe is deprecated. Use DataSet.on instead.")
        }, o.prototype.off = function (t, e) {
            var i = this._subscribers[t];
            i && (this._subscribers[t] = i.filter(function (t) {
                return t.callback != e
            }))
        }, o.prototype.unsubscribe = function () {
            throw new Error("DataSet.unsubscribe is deprecated. Use DataSet.off instead.")
        }, o.prototype._trigger = function (t, e, i) {
            if ("*" == t)throw new Error("Cannot trigger event *");
            var o = [];
            t in this._subscribers && (o = o.concat(this._subscribers[t])), "*"in this._subscribers && (o = o.concat(this._subscribers["*"]));
            for (var n = 0, s = o.length; n < s; n++) {
                var r = o[n];
                r.callback && r.callback(t, e, i || null)
            }
        }, o.prototype.add = function (t, e) {
            var i, o = [], n = this;
            if (Array.isArray(t))for (var s = 0, r = t.length; s < r; s++)i = n._addItem(t[s]), o.push(i); else {
                if (!(t instanceof Object))throw new Error("Unknown dataType");
                i = n._addItem(t), o.push(i)
            }
            return o.length && this._trigger("add", {items: o}, e), o
        }, o.prototype.update = function (t, e) {
            var i = [], o = [], n = [], r = [], a = this, h = a._fieldId, d = function (t) {
                var e = t[h];
                if (a._data[e]) {
                    var d = s.extend({}, a._data[e]);
                    e = a._updateItem(t), o.push(e), r.push(t), n.push(d)
                } else e = a._addItem(t), i.push(e)
            };
            if (Array.isArray(t))for (var l = 0, c = t.length; l < c; l++)t[l]instanceof Object ? d(t[l]) : console.warn("Ignoring input item, which is not an object at index " + l); else {
                if (!(t instanceof Object))throw new Error("Unknown dataType");
                d(t)
            }
            if (i.length && this._trigger("add", {items: i}, e), o.length) {
                var u = {items: o, oldData: n, data: r};
                this._trigger("update", u, e)
            }
            return i.concat(o)
        }, o.prototype.get = function (t) {
            var e, i, o, n = this, r = s.getType(arguments[0]);
            "String" == r || "Number" == r ? (e = arguments[0], o = arguments[1]) : "Array" == r ? (i = arguments[0], o = arguments[1]) : o = arguments[0];
            var a;
            if (o && o.returnType) {
                var h = ["Array", "Object"];
                a = h.indexOf(o.returnType) == -1 ? "Array" : o.returnType
            } else a = "Array";
            var d, l, c, u, p, f = o && o.type || this._options.type, m = o && o.filter, v = [];
            if (void 0 != e)d = n._getItem(e, f), d && m && !m(d) && (d = null); else if (void 0 != i)for (u = 0, p = i.length; u < p; u++)d = n._getItem(i[u], f), m && !m(d) || v.push(d); else for (l = Object.keys(this._data), u = 0, p = l.length; u < p; u++)c = l[u], d = n._getItem(c, f), m && !m(d) || v.push(d);
            if (o && o.order && void 0 == e && this._sort(v, o.order), o && o.fields) {
                var g = o.fields;
                if (void 0 != e)d = this._filterFields(d, g); else for (u = 0, p = v.length; u < p; u++)v[u] = this._filterFields(v[u], g)
            }
            if ("Object" == a) {
                var y, b = {};
                for (u = 0, p = v.length; u < p; u++)y = v[u], b[y.id] = y;
                return b
            }
            return void 0 != e ? d : v
        }, o.prototype.getIds = function (t) {
            var e, i, o, n, s, r = this._data, a = t && t.filter, h = t && t.order, d = t && t.type || this._options.type, l = Object.keys(r), c = [];
            if (a)if (h) {
                for (s = [], e = 0, i = l.length; e < i; e++)o = l[e], n = this._getItem(o, d), a(n) && s.push(n);
                for (this._sort(s, h), e = 0, i = s.length; e < i; e++)c.push(s[e][this._fieldId])
            } else for (e = 0, i = l.length; e < i; e++)o = l[e], n = this._getItem(o, d), a(n) && c.push(n[this._fieldId]); else if (h) {
                for (s = [], e = 0, i = l.length; e < i; e++)o = l[e], s.push(r[o]);
                for (this._sort(s, h), e = 0, i = s.length; e < i; e++)c.push(s[e][this._fieldId])
            } else for (e = 0, i = l.length; e < i; e++)o = l[e], n = r[o], c.push(n[this._fieldId]);
            return c
        }, o.prototype.getDataSet = function () {
            return this
        }, o.prototype.forEach = function (t, e) {
            var i, o, n, s, r = e && e.filter, a = e && e.type || this._options.type, h = this._data, d = Object.keys(h);
            if (e && e.order) {
                var l = this.get(e);
                for (i = 0, o = l.length; i < o; i++)n = l[i], s = n[this._fieldId], t(n, s)
            } else for (i = 0, o = d.length; i < o; i++)s = d[i], n = this._getItem(s, a), r && !r(n) || t(n, s)
        }, o.prototype.map = function (t, e) {
            var i, o, n, s, r = e && e.filter, a = e && e.type || this._options.type, h = [], d = this._data, l = Object.keys(d);
            for (i = 0, o = l.length; i < o; i++)n = l[i], s = this._getItem(n, a), r && !r(s) || h.push(t(s, n));
            return e && e.order && this._sort(h, e.order), h
        }, o.prototype._filterFields = function (t, e) {
            if (!t)return t;
            var i, o, n = {}, s = Object.keys(t), r = s.length;
            if (Array.isArray(e))for (i = 0; i < r; i++)o = s[i], e.indexOf(o) != -1 && (n[o] = t[o]); else for (i = 0; i < r; i++)o = s[i], e.hasOwnProperty(o) && (n[e[o]] = t[o]);
            return n
        }, o.prototype._sort = function (t, e) {
            if (s.isString(e)) {
                var i = e;
                t.sort(function (t, e) {
                    var o = t[i], n = e[i];
                    return o > n ? 1 : o < n ? -1 : 0
                })
            } else {
                if ("function" != typeof e)throw new TypeError("Order must be a function or a string");
                t.sort(e)
            }
        }, o.prototype.remove = function (t, e) {
            var i, o, n, s, r = [], a = [], h = [];
            for (h = Array.isArray(t) ? t : [t], i = 0, o = h.length; i < o; i++)s = this._remove(h[i]), s && (n = s[this._fieldId], n && (r.push(n), a.push(s)));
            return r.length && this._trigger("remove", {items: r, oldData: a}, e), r
        }, o.prototype._remove = function (t) {
            var e, i;
            return s.isNumber(t) || s.isString(t) ? i = t : t instanceof Object && (i = t[this._fieldId]), void 0 !== i && this._data[i] ? (e = this._data[i], delete this._data[i], this.length--, e) : null
        }, o.prototype.clear = function (t) {
            var e, i, o = Object.keys(this._data), n = [];
            for (e = 0, i = o.length; e < i; e++)n.push(this._data[o[e]]);
            return this._data = {}, this.length = 0, this._trigger("remove", {items: o, oldData: n}, t), o
        }, o.prototype.max = function (t) {
            var e, i, o = this._data, n = Object.keys(o), s = null, r = null;
            for (e = 0, i = n.length; e < i; e++) {
                var a = n[e], h = o[a], d = h[t];
                null != d && (!s || d > r) && (s = h, r = d)
            }
            return s
        }, o.prototype.min = function (t) {
            var e, i, o = this._data, n = Object.keys(o), s = null, r = null;
            for (e = 0, i = n.length; e < i; e++) {
                var a = n[e], h = o[a], d = h[t];
                null != d && (!s || d < r) && (s = h, r = d)
            }
            return s
        }, o.prototype.distinct = function (t) {
            var e, i, o, n = this._data, r = Object.keys(n), a = [], h = this._options.type && this._options.type[t] || null, d = 0;
            for (e = 0, o = r.length; e < o; e++) {
                var l = r[e], c = n[l], u = c[t], p = !1;
                for (i = 0; i < d; i++)if (a[i] == u) {
                    p = !0;
                    break
                }
                p || void 0 === u || (a[d] = u, d++)
            }
            if (h)for (e = 0, o = a.length; e < o; e++)a[e] = s.convert(a[e], h);
            return a
        }, o.prototype._addItem = function (t) {
            var e = t[this._fieldId];
            if (void 0 != e) {
                if (this._data[e])throw new Error("Cannot add item: item with id " + e + " already exists")
            } else e = s.randomUUID(), t[this._fieldId] = e;
            var i, o, n = {}, r = Object.keys(t);
            for (i = 0, o = r.length; i < o; i++) {
                var a = r[i], h = this._type[a];
                n[a] = s.convert(t[a], h)
            }
            return this._data[e] = n, this.length++, e
        }, o.prototype._getItem = function (t, e) {
            var i, o, n, r, a = this._data[t];
            if (!a)return null;
            var h = {}, d = Object.keys(a);
            if (e)for (n = 0, r = d.length; n < r; n++)i = d[n], o = a[i], h[i] = s.convert(o, e[i]); else for (n = 0, r = d.length; n < r; n++)i = d[n], o = a[i], h[i] = o;
            return h
        }, o.prototype._updateItem = function (t) {
            var e = t[this._fieldId];
            if (void 0 == e)throw new Error("Cannot update item: item has no id (item: " + JSON.stringify(t) + ")");
            var i = this._data[e];
            if (!i)throw new Error("Cannot update item: no item with id " + e + " found");
            for (var o = Object.keys(t), n = 0, r = o.length; n < r; n++) {
                var a = o[n], h = this._type[a];
                i[a] = s.convert(t[a], h)
            }
            return e
        }, t.exports = o
    }, function (t, e) {
        function i(t) {
            this.delay = null, this.max = 1 / 0, this._queue = [], this._timeout = null, this._extended = null, this.setOptions(t)
        }

        i.prototype.setOptions = function (t) {
            t && "undefined" != typeof t.delay && (this.delay = t.delay), t && "undefined" != typeof t.max && (this.max = t.max), this._flushIfNeeded()
        }, i.extend = function (t, e) {
            var o = new i(e);
            if (void 0 !== t.flush)throw new Error("Target object already has a property flush");
            t.flush = function () {
                o.flush()
            };
            var n = [{name: "flush", original: void 0}];
            if (e && e.replace)for (var s = 0; s < e.replace.length; s++) {
                var r = e.replace[s];
                n.push({name: r, original: t[r]}), o.replace(t, r)
            }
            return o._extended = {object: t, methods: n}, o
        }, i.prototype.destroy = function () {
            if (this.flush(), this._extended) {
                for (var t = this._extended.object, e = this._extended.methods, i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.original ? t[o.name] = o.original : delete t[o.name]
                }
                this._extended = null
            }
        }, i.prototype.replace = function (t, e) {
            var i = this, o = t[e];
            if (!o)throw new Error("Method " + e + " undefined");
            t[e] = function () {
                for (var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
                i.queue({args: t, fn: o, context: this})
            }
        }, i.prototype.queue = function (t) {
            "function" == typeof t ? this._queue.push({fn: t}) : this._queue.push(t), this._flushIfNeeded()
        }, i.prototype._flushIfNeeded = function () {
            if (this._queue.length > this.max && this.flush(), clearTimeout(this._timeout), this.queue.length > 0 && "number" == typeof this.delay) {
                var t = this;
                this._timeout = setTimeout(function () {
                    t.flush()
                }, this.delay)
            }
        }, i.prototype.flush = function () {
            for (; this._queue.length > 0;) {
                var t = this._queue.shift();
                t.fn.apply(t.context || t.fn, t.args || [])
            }
        }, t.exports = i
    }, function (t, e, i) {
        function o(t, e) {
            this._data = null, this._ids = {}, this.length = 0, this._options = e || {}, this._fieldId = "id", this._subscribers = {};
            var i = this;
            this.listener = function () {
                i._onEvent.apply(i, arguments)
            }, this.setData(t)
        }

        var n = i(1), s = i(9);
        o.prototype.setData = function (t) {
            var e, i, o, n, s;
            if (this._data) {
                for (this._data.off && this._data.off("*", this.listener), e = this._data.getIds({filter: this._options && this._options.filter}), s = [], o = 0, n = e.length; o < n; o++)s.push(this._data._data[e[o]]);
                this._ids = {}, this.length = 0, this._trigger("remove", {items: e, oldData: s})
            }
            if (this._data = t, this._data) {
                for (this._fieldId = this._options.fieldId || this._data && this._data.options && this._data.options.fieldId || "id", e = this._data.getIds({filter: this._options && this._options.filter}), o = 0, n = e.length; o < n; o++)i = e[o], this._ids[i] = !0;
                this.length = e.length, this._trigger("add", {items: e}), this._data.on && this._data.on("*", this.listener)
            }
        }, o.prototype.refresh = function () {
            var t, e, i, o = this._data.getIds({filter: this._options && this._options.filter}), n = Object.keys(this._ids), s = {}, r = [], a = [], h = [];
            for (e = 0, i = o.length; e < i; e++)t = o[e], s[t] = !0, this._ids[t] || (r.push(t), this._ids[t] = !0);
            for (e = 0, i = n.length; e < i; e++)t = n[e], s[t] || (a.push(t), h.push(this._data[t]), delete this._ids[t]);
            this.length += r.length - a.length, r.length && this._trigger("add", {items: r}), a.length && this._trigger("remove", {
                items: a,
                oldData: h
            })
        }, o.prototype.get = function (t) {
            var e, i, o, s = this, r = n.getType(arguments[0]);
            "String" == r || "Number" == r || "Array" == r ? (e = arguments[0], i = arguments[1], o = arguments[2]) : (i = arguments[0], o = arguments[1]);
            var a = n.extend({}, this._options, i);
            this._options.filter && i && i.filter && (a.filter = function (t) {
                return s._options.filter(t) && i.filter(t)
            });
            var h = [];
            return void 0 != e && h.push(e), h.push(a), h.push(o), this._data && this._data.get.apply(this._data, h)
        }, o.prototype.getIds = function (t) {
            var e;
            if (this._data) {
                var i, o = this._options.filter;
                i = t && t.filter ? o ? function (e) {
                    return o(e) && t.filter(e)
                } : t.filter : o, e = this._data.getIds({filter: i, order: t && t.order})
            } else e = [];
            return e
        }, o.prototype.map = function (t, e) {
            var i = [];
            if (this._data) {
                var o, n = this._options.filter;
                o = e && e.filter ? n ? function (t) {
                    return n(t) && e.filter(t)
                } : e.filter : n, i = this._data.map(t, {filter: o, order: e && e.order})
            } else i = [];
            return i
        }, o.prototype.getDataSet = function () {
            for (var t = this; t instanceof o;)t = t._data;
            return t || null
        }, o.prototype._onEvent = function (t, e, i) {
            var o, n, s, r, a = e && e.items, h = [], d = [], l = [], c = [], u = [], p = [];
            if (a && this._data) {
                switch (t) {
                    case"add":
                        for (o = 0, n = a.length; o < n; o++)s = a[o], r = this.get(s), r && (this._ids[s] = !0, h.push(s));
                        break;
                    case"update":
                        for (o = 0, n = a.length; o < n; o++)s = a[o], r = this.get(s), r ? this._ids[s] ? (d.push(s), u.push(e.data[o]), c.push(e.oldData[o])) : (this._ids[s] = !0, h.push(s)) : this._ids[s] && (delete this._ids[s], l.push(s), p.push(e.oldData[o]));
                        break;
                    case"remove":
                        for (o = 0, n = a.length; o < n; o++)s = a[o], this._ids[s] && (delete this._ids[s], l.push(s), p.push(e.oldData[o]))
                }
                this.length += h.length - l.length, h.length && this._trigger("add", {items: h}, i), d.length && this._trigger("update", {
                    items: d,
                    oldData: c,
                    data: u
                }, i), l.length && this._trigger("remove", {items: l, oldData: p}, i)
            }
        }, o.prototype.on = s.prototype.on, o.prototype.off = s.prototype.off, o.prototype._trigger = s.prototype._trigger, o.prototype.subscribe = o.prototype.on, o.prototype.unsubscribe = o.prototype.off, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i) {
            if (!(this instanceof o))throw new SyntaxError("Constructor must be called with the new operator");
            this.containerElement = t, this.dataTable = null, this.dataPoints = null, this.create(), v.setDefaults(y, this), this.colX = void 0, this.colY = void 0, this.colZ = void 0, this.colValue = void 0, this.colFilter = void 0, this.setOptions(i), e && this.setData(e)
        }

        function n(t) {
            return "clientX"in t ? t.clientX : t.targetTouches[0] && t.targetTouches[0].clientX || 0
        }

        function s(t) {
            return "clientY"in t ? t.clientY : t.targetTouches[0] && t.targetTouches[0].clientY || 0
        }

        var r = i(13), a = i(9), h = i(11), d = i(1), l = i(14), c = i(15), u = (i(16), i(17)), p = i(18), f = i(19), m = i(20), v = i(21);
        o.STYLE = v.STYLE;
        var g = void 0, y = {
            width: "400px",
            height: "400px",
            filterLabel: "time",
            legendLabel: "value",
            xLabel: "x",
            yLabel: "y",
            zLabel: "z",
            xValueLabel: function (t) {
                return t
            },
            yValueLabel: function (t) {
                return t
            },
            zValueLabel: function (t) {
                return t
            },
            showGrid: !0,
            showPerspective: !0,
            showShadow: !1,
            keepAspectRatio: !0,
            verticalRatio: .5,
            dotSizeRatio: .02,
            showAnimationControls: g,
            animationInterval: 1e3,
            animationPreload: !1,
            animationAutoStart: g,
            axisColor: "#4D4D4D",
            gridColor: "#D3D3D3",
            xCenter: "55%",
            yCenter: "50%",
            style: o.STYLE.DOT,
            tooltip: !1,
            showLegend: g,
            backgroundColor: g,
            dataColor: {fill: "#7DC1FF", stroke: "#3267D2", strokeWidth: 1},
            cameraPosition: {horizontal: 1, vertical: .5, distance: 1.7},
            xBarWidth: g,
            yBarWidth: g,
            valueMin: g,
            valueMax: g,
            xMin: g,
            xMax: g,
            xStep: g,
            yMin: g,
            yMax: g,
            yStep: g,
            zMin: g,
            zMax: g,
            zStep: g
        };
        r(o.prototype), o.prototype._setScale = function () {
            this.scale = new l(1 / this.xRange.range(), 1 / this.yRange.range(), 1 / this.zRange.range()), this.keepAspectRatio && (this.scale.x < this.scale.y ? this.scale.y = this.scale.x : this.scale.x = this.scale.y), this.scale.z *= this.verticalRatio, void 0 !== this.valueRange && (this.scale.value = 1 / this.valueRange.range());
            var t = this.xRange.center() * this.scale.x, e = this.yRange.center() * this.scale.y, i = this.zRange.center() * this.scale.z;
            this.camera.setArmLocation(t, e, i)
        }, o.prototype._convert3Dto2D = function (t) {
            var e = this._convertPointToTranslation(t);
            return this._convertTranslationToScreen(e)
        }, o.prototype._convertPointToTranslation = function (t) {
            var e = this.camera.getCameraLocation(), i = this.camera.getCameraRotation(), o = t.x * this.scale.x, n = t.y * this.scale.y, s = t.z * this.scale.z, r = e.x, a = e.y, h = e.z, d = Math.sin(i.x), c = Math.cos(i.x), u = Math.sin(i.y), p = Math.cos(i.y), f = Math.sin(i.z), m = Math.cos(i.z), v = p * (f * (n - a) + m * (o - r)) - u * (s - h), g = d * (p * (s - h) + u * (f * (n - a) + m * (o - r))) + c * (m * (n - a) - f * (o - r)), y = c * (p * (s - h) + u * (f * (n - a) + m * (o - r))) - d * (m * (n - a) - f * (o - r));
            return new l(v, g, y)
        }, o.prototype._convertTranslationToScreen = function (t) {
            var e, i, o = this.eye.x, n = this.eye.y, s = this.eye.z, r = t.x, a = t.y, h = t.z;
            return this.showPerspective ? (e = (r - o) * (s / h), i = (a - n) * (s / h)) : (e = r * -(s / this.camera.getArmLength()), i = a * -(s / this.camera.getArmLength())), new c(this.currentXCenter + e * this.frame.canvas.clientWidth, this.currentYCenter - i * this.frame.canvas.clientWidth)
        }, o.prototype._calcTranslations = function (t, e) {
            void 0 === e && (e = !0);
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.trans = this._convertPointToTranslation(o.point), o.screen = this._convertTranslationToScreen(o.trans);
                var n = this._convertPointToTranslation(o.bottom);
                o.dist = this.showPerspective ? n.length() : -n.z
            }
            if (e) {
                var s = function (t, e) {
                    return e.dist - t.dist
                };
                t.sort(s)
            }
        }, o.prototype.getNumberOfRows = function (t) {
            return t.length
        }, o.prototype.getNumberOfColumns = function (t) {
            var e = 0;
            for (var i in t[0])t[0].hasOwnProperty(i) && e++;
            return e
        }, o.prototype.getDistinctValues = function (t, e) {
            for (var i = [], o = 0; o < t.length; o++)i.indexOf(t[o][e]) == -1 && i.push(t[o][e]);
            return i
        }, o.prototype.getColumnRange = function (t, e) {
            for (var i = new m, o = 0; o < t.length; o++) {
                var n = t[o][e];
                i.adjust(n)
            }
            return i
        }, o.prototype._checkValueField = function (t) {
            var e = this.style === o.STYLE.BARCOLOR || this.style === o.STYLE.BARSIZE || this.style === o.STYLE.DOTCOLOR || this.style === o.STYLE.DOTSIZE;
            if (e) {
                if (void 0 === this.colValue)throw new Error("Expected data to have  field 'style'  for graph style '" + this.style + "'");
                if (void 0 === t[0][this.colValue])throw new Error("Expected data to have  field '" + this.colValue + "'  for graph style '" + this.style + "'")
            }
        }, o.prototype._setRangeDefaults = function (t, e, i) {
            void 0 !== e && (t.min = e), void 0 !== i && (t.max = i), t.max <= t.min && (t.max = t.min + 1)
        }, o.prototype._dataInitialize = function (t, e) {
            var i = this;
            if (this.dataSet && this.dataSet.off("*", this._onChange), void 0 !== t) {
                Array.isArray(t) && (t = new a(t));
                var n;
                if (!(t instanceof a || t instanceof h))throw new Error("Array, DataSet, or DataView expected");
                if (n = t.get(), 0 != n.length) {
                    this.dataSet = t, this.dataTable = n, this._onChange = function () {
                        i.setData(i.dataSet)
                    }, this.dataSet.on("*", this._onChange), this.colX = "x", this.colY = "y", this.colZ = "z";
                    var s = this.style == o.STYLE.BAR || this.style == o.STYLE.BARCOLOR || this.style == o.STYLE.BARSIZE;
                    if (s) {
                        if (void 0 !== this.defaultXBarWidth)this.xBarWidth = this.defaultXBarWidth; else {
                            var r = this.getDistinctValues(n, this.colX);
                            this.xBarWidth = r[1] - r[0] || 1
                        }
                        if (void 0 !== this.defaultYBarWidth)this.yBarWidth = this.defaultYBarWidth; else {
                            var d = this.getDistinctValues(n, this.colY);
                            this.yBarWidth = d[1] - d[0] || 1
                        }
                    }
                    var l = 5, c = this.getColumnRange(n, this.colX);
                    s && c.expand(this.xBarWidth / 2), this._setRangeDefaults(c, this.defaultXMin, this.defaultXMax), this.xRange = c, this.xStep = void 0 !== this.defaultXStep ? this.defaultXStep : c.range() / l;
                    var p = this.getColumnRange(n, this.colY);
                    s && p.expand(this.yBarWidth / 2), this._setRangeDefaults(p, this.defaultYMin, this.defaultYMax), this.yRange = p, this.yStep = void 0 !== this.defaultYStep ? this.defaultYStep : p.range() / l;
                    var f = this.getColumnRange(n, this.colZ);
                    if (this._setRangeDefaults(f, this.defaultZMin, this.defaultZMax), this.zRange = f, this.zStep = void 0 !== this.defaultZStep ? this.defaultZStep : f.range() / l, n[0].hasOwnProperty("style")) {
                        this.colValue = "style";
                        var m = this.getColumnRange(n, this.colValue);
                        this._setRangeDefaults(m, this.defaultValueMin, this.defaultValueMax), this.valueRange = m
                    }
                    n[0].hasOwnProperty("filter") && (this.colFilter = "filter", void 0 === this.dataFilter && (this.dataFilter = new u(t, this.colFilter, this), this.dataFilter.setOnLoadCallback(function () {
                        i.redraw()
                    }))), this._setScale()
                }
            }
        }, o.prototype._getDataPoints = function (t) {
            var e, i, n, s, r, a, h = [];
            if (this.style === o.STYLE.GRID || this.style === o.STYLE.SURFACE) {
                var d = [], c = [];
                for (n = 0; n < this.getNumberOfRows(t); n++)e = t[n][this.colX] || 0, i = t[n][this.colY] || 0, d.indexOf(e) === -1 && d.push(e), c.indexOf(i) === -1 && c.push(i);
                var u = function (t, e) {
                    return t - e
                };
                d.sort(u), c.sort(u);
                var p = [];
                for (n = 0; n < t.length; n++) {
                    e = t[n][this.colX] || 0, i = t[n][this.colY] || 0, s = t[n][this.colZ] || 0;
                    var f = d.indexOf(e), m = c.indexOf(i);
                    void 0 === p[f] && (p[f] = []);
                    var v = new l;
                    v.x = e, v.y = i, v.z = s, v.data = t[n], r = {}, r.point = v, r.trans = void 0, r.screen = void 0, r.bottom = new l(e, i, this.zRange.min), p[f][m] = r, h.push(r)
                }
                for (e = 0; e < p.length; e++)for (i = 0; i < p[e].length; i++)p[e][i] && (p[e][i].pointRight = e < p.length - 1 ? p[e + 1][i] : void 0, p[e][i].pointTop = i < p[e].length - 1 ? p[e][i + 1] : void 0, p[e][i].pointCross = e < p.length - 1 && i < p[e].length - 1 ? p[e + 1][i + 1] : void 0)
            } else for (this._checkValueField(t), n = 0; n < t.length; n++)a = new l, a.x = t[n][this.colX] || 0, a.y = t[n][this.colY] || 0, a.z = t[n][this.colZ] || 0, a.data = t[n], void 0 !== this.colValue && (a.value = t[n][this.colValue] || 0), r = {}, r.point = a, r.bottom = new l(a.x, a.y, this.zRange.min), r.trans = void 0, r.screen = void 0, this.style === o.STYLE.LINE && n > 0 && (h[n - 1].pointNext = r), h.push(r);
            return h
        }, o.prototype.create = function () {
            for (; this.containerElement.hasChildNodes();)this.containerElement.removeChild(this.containerElement.firstChild);
            this.frame = document.createElement("div"), this.frame.style.position = "relative", this.frame.style.overflow = "hidden", this.frame.canvas = document.createElement("canvas"), this.frame.canvas.style.position = "relative", this.frame.appendChild(this.frame.canvas);
            var t = document.createElement("DIV");
            t.style.color = "red", t.style.fontWeight = "bold", t.style.padding = "10px", t.innerHTML = "Error: your browser does not support HTML canvas", this.frame.canvas.appendChild(t), this.frame.filter = document.createElement("div"), this.frame.filter.style.position = "absolute", this.frame.filter.style.bottom = "0px", this.frame.filter.style.left = "0px", this.frame.filter.style.width = "100%", this.frame.appendChild(this.frame.filter);
            var e = this, i = function (t) {
                e._onMouseDown(t)
            }, o = function (t) {
                e._onTouchStart(t)
            }, n = function (t) {
                e._onWheel(t)
            }, s = function (t) {
                e._onTooltip(t)
            };
            d.addEventListener(this.frame.canvas, "keydown", onkeydown), d.addEventListener(this.frame.canvas, "mousedown", i), d.addEventListener(this.frame.canvas, "touchstart", o), d.addEventListener(this.frame.canvas, "mousewheel", n), d.addEventListener(this.frame.canvas, "mousemove", s), this.containerElement.appendChild(this.frame)
        }, o.prototype.setSize = function (t, e) {
            this.frame.style.width = t, this.frame.style.height = e, this._resizeCanvas()
        }, o.prototype._resizeCanvas = function () {
            this.frame.canvas.style.width = "100%", this.frame.canvas.style.height = "100%", this.frame.canvas.width = this.frame.canvas.clientWidth, this.frame.canvas.height = this.frame.canvas.clientHeight, this.frame.filter.style.width = this.frame.canvas.clientWidth - 20 + "px"
        }, o.prototype.animationStart = function () {
            if (!this.frame.filter || !this.frame.filter.slider)throw new Error("No animation available");
            this.frame.filter.slider.play()
        }, o.prototype.animationStop = function () {
            this.frame.filter && this.frame.filter.slider && this.frame.filter.slider.stop()
        }, o.prototype._resizeCenter = function () {
            "%" === this.xCenter.charAt(this.xCenter.length - 1) ? this.currentXCenter = parseFloat(this.xCenter) / 100 * this.frame.canvas.clientWidth : this.currentXCenter = parseFloat(this.xCenter), "%" === this.yCenter.charAt(this.yCenter.length - 1) ? this.currentYCenter = parseFloat(this.yCenter) / 100 * (this.frame.canvas.clientHeight - this.frame.filter.clientHeight) : this.currentYCenter = parseFloat(this.yCenter)
        }, o.prototype.getCameraPosition = function () {
            var t = this.camera.getArmRotation();
            return t.distance = this.camera.getArmLength(), t
        }, o.prototype._readData = function (t) {
            this._dataInitialize(t, this.style), this.dataFilter ? this.dataPoints = this.dataFilter._getDataPoints() : this.dataPoints = this._getDataPoints(this.dataTable), this._redrawFilter()
        }, o.prototype.setData = function (t) {
            this._readData(t), this.redraw(), this.animationAutoStart && this.dataFilter && this.animationStart()
        }, o.prototype.setOptions = function (t) {
            this.animationStop(), v.setOptions(t, this), this.setPointDrawingMethod(), this.setSize(this.width, this.height), this.dataTable && this.setData(this.dataTable), this.animationAutoStart && this.dataFilter && this.animationStart()
        }, o.prototype.setPointDrawingMethod = function () {
            var t = void 0;
            switch (this.style) {
                case o.STYLE.BAR:
                    t = o.prototype._redrawBarGraphPoint;
                    break;
                case o.STYLE.BARCOLOR:
                    t = o.prototype._redrawBarColorGraphPoint;
                    break;
                case o.STYLE.BARSIZE:
                    t = o.prototype._redrawBarSizeGraphPoint;
                    break;
                case o.STYLE.DOT:
                    t = o.prototype._redrawDotGraphPoint;
                    break;
                case o.STYLE.DOTLINE:
                    t = o.prototype._redrawDotLineGraphPoint;
                    break;
                case o.STYLE.DOTCOLOR:
                    t = o.prototype._redrawDotColorGraphPoint;
                    break;
                case o.STYLE.DOTSIZE:
                    t = o.prototype._redrawDotSizeGraphPoint;
                    break;
                case o.STYLE.SURFACE:
                    t = o.prototype._redrawSurfaceGraphPoint;
                    break;
                case o.STYLE.GRID:
                    t = o.prototype._redrawGridGraphPoint;
                    break;
                case o.STYLE.LINE:
                    t = o.prototype._redrawLineGraphPoint;
                    break;
                default:
                    throw new Error("Can not determine point drawing method for graph style '" + this.style + "'")
            }
            this._pointDrawingMethod = t
        }, o.prototype.redraw = function () {
            if (void 0 === this.dataPoints)throw new Error("Graph data not initialized");
            this._resizeCanvas(), this._resizeCenter(), this._redrawSlider(), this._redrawClear(), this._redrawAxis(), this._redrawDataGraph(), this._redrawInfo(), this._redrawLegend()
        }, o.prototype._getContext = function () {
            var t = this.frame.canvas, e = t.getContext("2d");
            return e.lineJoin = "round", e.lineCap = "round", e
        }, o.prototype._redrawClear = function () {
            var t = this.frame.canvas, e = t.getContext("2d");
            e.clearRect(0, 0, t.width, t.height)
        }, o.prototype._dotSize = function () {
            return this.frame.clientWidth * this.dotSizeRatio
        }, o.prototype._getLegendWidth = function () {
            var t;
            if (this.style === o.STYLE.DOTSIZE) {
                var e = this._dotSize();
                t = e / 2 + 2 * e
            } else t = this.style === o.STYLE.BARSIZE ? this.xBarWidth : 20;
            return t
        }, o.prototype._redrawLegend = function () {
            if (this.showLegend === !0 && this.style !== o.STYLE.LINE && this.style !== o.STYLE.BARSIZE) {
                var t = this.style === o.STYLE.BARSIZE || this.style === o.STYLE.DOTSIZE, e = this.style === o.STYLE.DOTSIZE || this.style === o.STYLE.DOTCOLOR || this.style === o.STYLE.BARCOLOR, i = Math.max(.25 * this.frame.clientHeight, 100), n = this.margin, s = this._getLegendWidth(), r = this.frame.clientWidth - this.margin, a = r - s, h = n + i, d = this._getContext();
                if (d.lineWidth = 1, d.font = "14px arial", t === !1) {
                    var l, u = 0, p = i;
                    for (l = u; l < p; l++) {
                        var m = (l - u) / (p - u), v = 240 * m, g = this._hsv2rgb(v, 1, 1);
                        d.strokeStyle = g, d.beginPath(), d.moveTo(a, n + l), d.lineTo(r, n + l), d.stroke()
                    }
                    d.strokeStyle = this.axisColor, d.strokeRect(a, n, s, i)
                } else {
                    var y;
                    if (this.style === o.STYLE.DOTSIZE) {
                        var b = this._dotSize();
                        y = b / 2
                    } else this.style === o.STYLE.BARSIZE;
                    d.strokeStyle = this.axisColor, d.fillStyle = this.dataColor.fill, d.beginPath(), d.moveTo(a, n), d.lineTo(r, n), d.lineTo(r - s + y, h), d.lineTo(a, h), d.closePath(), d.fill(), d.stroke()
                }
                var _ = 5, w = e ? this.valueRange.min : this.zRange.min, x = e ? this.valueRange.max : this.zRange.max, k = new f(w, x, (x - w) / 5, !0);
                k.start(!0);
                for (var l, O, D; !k.end();)l = h - (k.getCurrent() - w) / (x - w) * i, O = new c(a - _, l), D = new c(a, l), this._line(d, O, D), d.textAlign = "right", d.textBaseline = "middle", d.fillStyle = this.axisColor, d.fillText(k.getCurrent(), a - 2 * _, l), k.next();
                d.textAlign = "right", d.textBaseline = "top";
                var S = this.legendLabel;
                d.fillText(S, r, h + this.margin)
            }
        }, o.prototype._redrawFilter = function () {
            if (this.frame.filter.innerHTML = "", this.dataFilter) {
                var t = {visible: this.showAnimationControls}, e = new p(this.frame.filter, t);
                this.frame.filter.slider = e, this.frame.filter.style.padding = "10px", e.setValues(this.dataFilter.values), e.setPlayInterval(this.animationInterval);
                var i = this, o = function () {
                    var t = e.getIndex();
                    i.dataFilter.selectValue(t), i.dataPoints = i.dataFilter._getDataPoints(), i.redraw()
                };
                e.setOnChangeCallback(o)
            } else this.frame.filter.slider = void 0
        }, o.prototype._redrawSlider = function () {
            void 0 !== this.frame.filter.slider && this.frame.filter.slider.redraw()
        }, o.prototype._redrawInfo = function () {
            if (this.dataFilter) {
                var t = this._getContext();
                t.font = "14px arial", t.lineStyle = "gray", t.fillStyle = "gray", t.textAlign = "left", t.textBaseline = "top";
                var e = this.margin, i = this.margin;
                t.fillText(this.dataFilter.getLabel() + ": " + this.dataFilter.getSelectedValue(), e, i)
            }
        }, o.prototype._line = function (t, e, i, o) {
            void 0 !== o && (t.strokeStyle = o), t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.stroke()
        }, o.prototype.drawAxisLabelX = function (t, e, i, o, n) {
            void 0 === n && (n = 0);
            var s = this._convert3Dto2D(e);
            Math.cos(2 * o) > 0 ? (t.textAlign = "center", t.textBaseline = "top", s.y += n) : Math.sin(2 * o) < 0 ? (t.textAlign = "right", t.textBaseline = "middle") : (t.textAlign = "left", t.textBaseline = "middle"), t.fillStyle = this.axisColor, t.fillText(i, s.x, s.y)
        }, o.prototype.drawAxisLabelY = function (t, e, i, o, n) {
            void 0 === n && (n = 0);
            var s = this._convert3Dto2D(e);
            Math.cos(2 * o) < 0 ? (t.textAlign = "center", t.textBaseline = "top", s.y += n) : Math.sin(2 * o) > 0 ? (t.textAlign = "right", t.textBaseline = "middle") : (t.textAlign = "left", t.textBaseline = "middle"), t.fillStyle = this.axisColor, t.fillText(i, s.x, s.y)
        }, o.prototype.drawAxisLabelZ = function (t, e, i, o) {
            void 0 === o && (o = 0);
            var n = this._convert3Dto2D(e);
            t.textAlign = "right", t.textBaseline = "middle", t.fillStyle = this.axisColor, t.fillText(i, n.x - o, n.y)
        }, o.prototype._line3d = function (t, e, i, o) {
            var n = this._convert3Dto2D(e), s = this._convert3Dto2D(i);
            this._line(t, n, s, o)
        }, o.prototype._redrawAxis = function () {
            var t, e, i, o, n, s, r, a, h, d, u, p = this._getContext();
            p.font = 24 / this.camera.getArmLength() + "px arial";
            var m = .025 / this.scale.x, v = .025 / this.scale.y, g = 5 / this.camera.getArmLength(), y = this.camera.getArmRotation().horizontal, b = new c(Math.cos(y), Math.sin(y)), _ = this.xRange, w = this.yRange, x = this.zRange;
            for (p.lineWidth = 1, o = void 0 === this.defaultXStep, i = new f(_.min, _.max, this.xStep, o), i.start(!0); !i.end();) {
                var k = i.getCurrent();
                this.showGrid ? (t = new l(k, w.min, x.min), e = new l(k, w.max, x.min), this._line3d(p, t, e, this.gridColor)) : (t = new l(k, w.min, x.min), e = new l(k, w.min + m, x.min), this._line3d(p, t, e, this.axisColor), t = new l(k, w.max, x.min), e = new l(k, w.max - m, x.min), this._line3d(p, t, e, this.axisColor)), r = b.x > 0 ? w.min : w.max;
                var O = new l(k, r, x.min), D = "  " + this.xValueLabel(k) + "  ";
                this.drawAxisLabelX(p, O, D, y, g), i.next()
            }
            for (p.lineWidth = 1, o = void 0 === this.defaultYStep, i = new f(w.min, w.max, this.yStep, o), i.start(!0); !i.end();) {
                var S = i.getCurrent();
                this.showGrid ? (t = new l(_.min, S, x.min), e = new l(_.max, S, x.min), this._line3d(p, t, e, this.gridColor)) : (t = new l(_.min, S, x.min), e = new l(_.min + v, S, x.min), this._line3d(p, t, e, this.axisColor), t = new l(_.max, S, x.min), e = new l(_.max - v, S, x.min), this._line3d(p, t, e, this.axisColor)), s = b.y > 0 ? _.min : _.max, O = new l(s, S, x.min);
                var D = "  " + this.yValueLabel(S) + "  ";
                this.drawAxisLabelY(p, O, D, y, g), i.next()
            }
            for (p.lineWidth = 1, o = void 0 === this.defaultZStep, i = new f(x.min, x.max, this.zStep, o),
                     i.start(!0), s = b.x > 0 ? _.min : _.max, r = b.y < 0 ? w.min : w.max; !i.end();) {
                var C = i.getCurrent(), T = new l(s, r, C), E = this._convert3Dto2D(T);
                e = new c(E.x - g, E.y), this._line(p, E, e, this.axisColor);
                var D = this.zValueLabel(C) + " ";
                this.drawAxisLabelZ(p, T, D, 5), i.next()
            }
            p.lineWidth = 1, t = new l(s, r, x.min), e = new l(s, r, x.max), this._line3d(p, t, e, this.axisColor);
            var M, P;
            p.lineWidth = 1, M = new l(_.min, w.min, x.min), P = new l(_.max, w.min, x.min), this._line3d(p, M, P, this.axisColor), M = new l(_.min, w.max, x.min), P = new l(_.max, w.max, x.min), this._line3d(p, M, P, this.axisColor), p.lineWidth = 1, t = new l(_.min, w.min, x.min), e = new l(_.min, w.max, x.min), this._line3d(p, t, e, this.axisColor), t = new l(_.max, w.min, x.min), e = new l(_.max, w.max, x.min), this._line3d(p, t, e, this.axisColor);
            var I = this.xLabel;
            I.length > 0 && (u = .1 / this.scale.y, s = _.center() / 2, r = b.x > 0 ? w.min - u : w.max + u, n = new l(s, r, x.min), this.drawAxisLabelX(p, n, I, y));
            var N = this.yLabel;
            N.length > 0 && (d = .1 / this.scale.x, s = b.y > 0 ? _.min - d : _.max + d, r = w.center() / 2, n = new l(s, r, x.min), this.drawAxisLabelY(p, n, N, y));
            var R = this.zLabel;
            R.length > 0 && (h = 30, s = b.x > 0 ? _.min : _.max, r = b.y < 0 ? w.min : w.max, a = x.center() / 2, n = new l(s, r, a), this.drawAxisLabelZ(p, n, R, h))
        }, o.prototype._hsv2rgb = function (t, e, i) {
            var o, n, s, r, a, h;
            switch (r = i * e, a = Math.floor(t / 60), h = r * (1 - Math.abs(t / 60 % 2 - 1)), a) {
                case 0:
                    o = r, n = h, s = 0;
                    break;
                case 1:
                    o = h, n = r, s = 0;
                    break;
                case 2:
                    o = 0, n = r, s = h;
                    break;
                case 3:
                    o = 0, n = h, s = r;
                    break;
                case 4:
                    o = h, n = 0, s = r;
                    break;
                case 5:
                    o = r, n = 0, s = h;
                    break;
                default:
                    o = 0, n = 0, s = 0
            }
            return "RGB(" + parseInt(255 * o) + "," + parseInt(255 * n) + "," + parseInt(255 * s) + ")"
        }, o.prototype._getStrokeWidth = function (t) {
            return void 0 !== t ? this.showPerspective ? 1 / -t.trans.z * this.dataColor.strokeWidth : -(this.eye.z / this.camera.getArmLength()) * this.dataColor.strokeWidth : this.dataColor.strokeWidth
        }, o.prototype._redrawBar = function (t, e, i, o, n, s) {
            var r, a, h = this, d = e.point, c = this.zRange.min, u = [{point: new l(d.x - i, d.y - o, d.z)}, {point: new l(d.x + i, d.y - o, d.z)}, {point: new l(d.x + i, d.y + o, d.z)}, {point: new l(d.x - i, d.y + o, d.z)}], p = [{point: new l(d.x - i, d.y - o, c)}, {point: new l(d.x + i, d.y - o, c)}, {point: new l(d.x + i, d.y + o, c)}, {point: new l(d.x - i, d.y + o, c)}];
            u.forEach(function (t) {
                t.screen = h._convert3Dto2D(t.point)
            }), p.forEach(function (t) {
                t.screen = h._convert3Dto2D(t.point)
            });
            var f = [{corners: u, center: l.avg(p[0].point, p[2].point)}, {
                corners: [u[0], u[1], p[1], p[0]],
                center: l.avg(p[1].point, p[0].point)
            }, {
                corners: [u[1], u[2], p[2], p[1]],
                center: l.avg(p[2].point, p[1].point)
            }, {
                corners: [u[2], u[3], p[3], p[2]],
                center: l.avg(p[3].point, p[2].point)
            }, {corners: [u[3], u[0], p[0], p[3]], center: l.avg(p[0].point, p[3].point)}];
            for (e.surfaces = f, r = 0; r < f.length; r++) {
                a = f[r];
                var m = this._convertPointToTranslation(a.center);
                a.dist = this.showPerspective ? m.length() : -m.z
            }
            for (f.sort(function (t, e) {
                var i = e.dist - t.dist;
                return i ? i : t.corners === u ? 1 : e.corners === u ? -1 : 0
            }), t.lineWidth = this._getStrokeWidth(e), t.strokeStyle = s, t.fillStyle = n, r = 2; r < f.length; r++)a = f[r], this._polygon(t, a.corners)
        }, o.prototype._polygon = function (t, e, i, o) {
            if (!(e.length < 2)) {
                void 0 !== i && (t.fillStyle = i), void 0 !== o && (t.strokeStyle = o), t.beginPath(), t.moveTo(e[0].screen.x, e[0].screen.y);
                for (var n = 1; n < e.length; ++n) {
                    var s = e[n];
                    t.lineTo(s.screen.x, s.screen.y)
                }
                t.closePath(), t.fill(), t.stroke()
            }
        }, o.prototype._drawCircle = function (t, e, i, o, n) {
            var s = this._calcRadius(e, n);
            t.lineWidth = this._getStrokeWidth(e), t.strokeStyle = o, t.fillStyle = i, t.beginPath(), t.arc(e.screen.x, e.screen.y, s, 0, 2 * Math.PI, !0), t.fill(), t.stroke()
        }, o.prototype._getColorsRegular = function (t) {
            var e = 240 * (1 - (t.point.z - this.zRange.min) * this.scale.z / this.verticalRatio), i = this._hsv2rgb(e, 1, 1), o = this._hsv2rgb(e, 1, .8);
            return {fill: i, border: o}
        }, o.prototype._getColorsColor = function (t) {
            var e = 240 * (1 - (t.point.value - this.valueRange.min) * this.scale.value), i = this._hsv2rgb(e, 1, 1), o = this._hsv2rgb(e, 1, .8);
            return {fill: i, border: o}
        }, o.prototype._getColorsSize = function () {
            return {fill: this.dataColor.fill, border: this.dataColor.stroke}
        }, o.prototype._calcRadius = function (t, e) {
            void 0 === e && (e = this._dotSize());
            var i;
            return i = this.showPerspective ? e / -t.trans.z : e * -(this.eye.z / this.camera.getArmLength()), i < 0 && (i = 0), i
        }, o.prototype._redrawBarGraphPoint = function (t, e) {
            var i = this.xBarWidth / 2, o = this.yBarWidth / 2, n = this._getColorsRegular(e);
            this._redrawBar(t, e, i, o, n.fill, n.border)
        }, o.prototype._redrawBarColorGraphPoint = function (t, e) {
            var i = this.xBarWidth / 2, o = this.yBarWidth / 2, n = this._getColorsColor(e);
            this._redrawBar(t, e, i, o, n.fill, n.border)
        }, o.prototype._redrawBarSizeGraphPoint = function (t, e) {
            var i = (e.point.value - this.valueRange.min) / this.valueRange.range(), o = this.xBarWidth / 2 * (.8 * i + .2), n = this.yBarWidth / 2 * (.8 * i + .2), s = this._getColorsSize();
            this._redrawBar(t, e, o, n, s.fill, s.border)
        }, o.prototype._redrawDotGraphPoint = function (t, e) {
            var i = this._getColorsRegular(e);
            this._drawCircle(t, e, i.fill, i.border)
        }, o.prototype._redrawDotLineGraphPoint = function (t, e) {
            var i = this._convert3Dto2D(e.bottom);
            t.lineWidth = 1, this._line(t, i, e.screen, this.gridColor), this._redrawDotGraphPoint(t, e)
        }, o.prototype._redrawDotColorGraphPoint = function (t, e) {
            var i = this._getColorsColor(e);
            this._drawCircle(t, e, i.fill, i.border)
        }, o.prototype._redrawDotSizeGraphPoint = function (t, e) {
            var i = this._dotSize(), o = (e.point.value - this.valueRange.min) / this.valueRange.range(), n = i / 2 + 2 * i * o, s = this._getColorsSize();
            this._drawCircle(t, e, s.fill, s.border, n)
        }, o.prototype._redrawSurfaceGraphPoint = function (t, e) {
            var i = e.pointRight, o = e.pointTop, n = e.pointCross;
            if (void 0 !== e && void 0 !== i && void 0 !== o && void 0 !== n) {
                var s, r, a = !0;
                if (this.showGrayBottom || this.showShadow) {
                    var h = l.subtract(n.trans, e.trans), d = l.subtract(o.trans, i.trans), c = l.crossProduct(h, d), u = c.length();
                    a = c.z > 0
                }
                if (a) {
                    var p, f = (e.point.z + i.point.z + o.point.z + n.point.z) / 4, m = 240 * (1 - (f - this.zRange.min) * this.scale.z / this.verticalRatio), v = 1;
                    this.showShadow ? (p = Math.min(1 + c.x / u / 2, 1), s = this._hsv2rgb(m, v, p), r = s) : (p = 1, s = this._hsv2rgb(m, v, p), r = this.axisColor)
                } else s = "gray", r = this.axisColor;
                t.lineWidth = this._getStrokeWidth(e);
                var g = [e, i, n, o];
                this._polygon(t, g, s, r)
            }
        }, o.prototype._drawGridLine = function (t, e, i) {
            if (void 0 !== e && void 0 !== i) {
                var o = (e.point.z + i.point.z) / 2, n = 240 * (1 - (o - this.zRange.min) * this.scale.z / this.verticalRatio);
                t.lineWidth = 2 * this._getStrokeWidth(e), t.strokeStyle = this._hsv2rgb(n, 1, 1), this._line(t, e.screen, i.screen)
            }
        }, o.prototype._redrawGridGraphPoint = function (t, e) {
            this._drawGridLine(t, e, e.pointRight), this._drawGridLine(t, e, e.pointTop)
        }, o.prototype._redrawLineGraphPoint = function (t, e) {
            void 0 !== e.pointNext && (t.lineWidth = this._getStrokeWidth(e), t.strokeStyle = this.dataColor.stroke, this._line(t, e.screen, e.pointNext.screen))
        }, o.prototype._redrawDataGraph = function () {
            var t, e = this._getContext();
            if (!(void 0 === this.dataPoints || this.dataPoints.length <= 0))for (this._calcTranslations(this.dataPoints), t = 0; t < this.dataPoints.length; t++) {
                var i = this.dataPoints[t];
                this._pointDrawingMethod.call(this, e, i)
            }
        }, o.prototype._onMouseDown = function (t) {
            if (t = t || window.event, this.leftButtonDown && this._onMouseUp(t), this.leftButtonDown = t.which ? 1 === t.which : 1 === t.button, this.leftButtonDown || this.touchDown) {
                this.startMouseX = n(t), this.startMouseY = s(t), this.startStart = new Date(this.start), this.startEnd = new Date(this.end), this.startArmRotation = this.camera.getArmRotation(), this.frame.style.cursor = "move";
                var e = this;
                this.onmousemove = function (t) {
                    e._onMouseMove(t)
                }, this.onmouseup = function (t) {
                    e._onMouseUp(t)
                }, d.addEventListener(document, "mousemove", e.onmousemove), d.addEventListener(document, "mouseup", e.onmouseup), d.preventDefault(t)
            }
        }, o.prototype._onMouseMove = function (t) {
            t = t || window.event;
            var e = parseFloat(n(t)) - this.startMouseX, i = parseFloat(s(t)) - this.startMouseY, o = this.startArmRotation.horizontal + e / 200, r = this.startArmRotation.vertical + i / 200, a = 4, h = Math.sin(a / 360 * 2 * Math.PI);
            Math.abs(Math.sin(o)) < h && (o = Math.round(o / Math.PI) * Math.PI - .001), Math.abs(Math.cos(o)) < h && (o = (Math.round(o / Math.PI - .5) + .5) * Math.PI - .001), Math.abs(Math.sin(r)) < h && (r = Math.round(r / Math.PI) * Math.PI), Math.abs(Math.cos(r)) < h && (r = (Math.round(r / Math.PI - .5) + .5) * Math.PI), this.camera.setArmRotation(o, r), this.redraw();
            var l = this.getCameraPosition();
            this.emit("cameraPositionChange", l), d.preventDefault(t)
        }, o.prototype._onMouseUp = function (t) {
            this.frame.style.cursor = "auto", this.leftButtonDown = !1, d.removeEventListener(document, "mousemove", this.onmousemove), d.removeEventListener(document, "mouseup", this.onmouseup), d.preventDefault(t)
        }, o.prototype._onTooltip = function (t) {
            var e = 300, i = this.frame.getBoundingClientRect(), o = n(t) - i.left, r = s(t) - i.top;
            if (this.showTooltip) {
                if (this.tooltipTimeout && clearTimeout(this.tooltipTimeout), this.leftButtonDown)return void this._hideTooltip();
                if (this.tooltip && this.tooltip.dataPoint) {
                    var a = this._dataPointFromXY(o, r);
                    a !== this.tooltip.dataPoint && (a ? this._showTooltip(a) : this._hideTooltip())
                } else {
                    var h = this;
                    this.tooltipTimeout = setTimeout(function () {
                        h.tooltipTimeout = null;
                        var t = h._dataPointFromXY(o, r);
                        t && h._showTooltip(t)
                    }, e)
                }
            }
        }, o.prototype._onTouchStart = function (t) {
            this.touchDown = !0;
            var e = this;
            this.ontouchmove = function (t) {
                e._onTouchMove(t)
            }, this.ontouchend = function (t) {
                e._onTouchEnd(t)
            }, d.addEventListener(document, "touchmove", e.ontouchmove), d.addEventListener(document, "touchend", e.ontouchend), this._onMouseDown(t)
        }, o.prototype._onTouchMove = function (t) {
            this._onMouseMove(t)
        }, o.prototype._onTouchEnd = function (t) {
            this.touchDown = !1, d.removeEventListener(document, "touchmove", this.ontouchmove), d.removeEventListener(document, "touchend", this.ontouchend), this._onMouseUp(t)
        }, o.prototype._onWheel = function (t) {
            t || (t = window.event);
            var e = 0;
            if (t.wheelDelta ? e = t.wheelDelta / 120 : t.detail && (e = -t.detail / 3), e) {
                var i = this.camera.getArmLength(), o = i * (1 - e / 10);
                this.camera.setArmLength(o), this.redraw(), this._hideTooltip()
            }
            var n = this.getCameraPosition();
            this.emit("cameraPositionChange", n), d.preventDefault(t)
        }, o.prototype._insideTriangle = function (t, e) {
            function i(t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }

            var o = e[0], n = e[1], s = e[2], r = i((n.x - o.x) * (t.y - o.y) - (n.y - o.y) * (t.x - o.x)), a = i((s.x - n.x) * (t.y - n.y) - (s.y - n.y) * (t.x - n.x)), h = i((o.x - s.x) * (t.y - s.y) - (o.y - s.y) * (t.x - s.x));
            return !(0 != r && 0 != a && r != a || 0 != a && 0 != h && a != h || 0 != r && 0 != h && r != h)
        }, o.prototype._dataPointFromXY = function (t, e) {
            var i, n = 100, s = null, r = null, a = null, h = new c(t, e);
            if (this.style === o.STYLE.BAR || this.style === o.STYLE.BARCOLOR || this.style === o.STYLE.BARSIZE)for (i = this.dataPoints.length - 1; i >= 0; i--) {
                s = this.dataPoints[i];
                var d = s.surfaces;
                if (d)for (var l = d.length - 1; l >= 0; l--) {
                    var u = d[l], p = u.corners, f = [p[0].screen, p[1].screen, p[2].screen], m = [p[2].screen, p[3].screen, p[0].screen];
                    if (this._insideTriangle(h, f) || this._insideTriangle(h, m))return s
                }
            } else for (i = 0; i < this.dataPoints.length; i++) {
                s = this.dataPoints[i];
                var v = s.screen;
                if (v) {
                    var g = Math.abs(t - v.x), y = Math.abs(e - v.y), b = Math.sqrt(g * g + y * y);
                    (null === a || b < a) && b < n && (a = b, r = s)
                }
            }
            return r
        }, o.prototype._showTooltip = function (t) {
            var e, i, o;
            this.tooltip ? (e = this.tooltip.dom.content, i = this.tooltip.dom.line, o = this.tooltip.dom.dot) : (e = document.createElement("div"), e.style.position = "absolute", e.style.padding = "10px", e.style.border = "1px solid #4d4d4d", e.style.color = "#1a1a1a", e.style.background = "rgba(255,255,255,0.7)", e.style.borderRadius = "2px", e.style.boxShadow = "5px 5px 10px rgba(128,128,128,0.5)", i = document.createElement("div"), i.style.position = "absolute", i.style.height = "40px", i.style.width = "0", i.style.borderLeft = "1px solid #4d4d4d", o = document.createElement("div"), o.style.position = "absolute", o.style.height = "0", o.style.width = "0", o.style.border = "5px solid #4d4d4d", o.style.borderRadius = "5px", this.tooltip = {
                dataPoint: null,
                dom: {content: e, line: i, dot: o}
            }), this._hideTooltip(), this.tooltip.dataPoint = t, "function" == typeof this.showTooltip ? e.innerHTML = this.showTooltip(t.point) : e.innerHTML = "<table><tr><td>" + this.xLabel + ":</td><td>" + t.point.x + "</td></tr><tr><td>" + this.yLabel + ":</td><td>" + t.point.y + "</td></tr><tr><td>" + this.zLabel + ":</td><td>" + t.point.z + "</td></tr></table>", e.style.left = "0", e.style.top = "0", this.frame.appendChild(e), this.frame.appendChild(i), this.frame.appendChild(o);
            var n = e.offsetWidth, s = e.offsetHeight, r = i.offsetHeight, a = o.offsetWidth, h = o.offsetHeight, d = t.screen.x - n / 2;
            d = Math.min(Math.max(d, 10), this.frame.clientWidth - 10 - n), i.style.left = t.screen.x + "px", i.style.top = t.screen.y - r + "px", e.style.left = d + "px", e.style.top = t.screen.y - r - s + "px", o.style.left = t.screen.x - a / 2 + "px", o.style.top = t.screen.y - h / 2 + "px"
        }, o.prototype._hideTooltip = function () {
            if (this.tooltip) {
                this.tooltip.dataPoint = null;
                for (var t in this.tooltip.dom)if (this.tooltip.dom.hasOwnProperty(t)) {
                    var e = this.tooltip.dom[t];
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
            }
        }, o.prototype.setCameraPosition = function (t) {
            v.setCameraPosition(t, this), this.redraw()
        }, t.exports = o
    }, function (t, e) {
        function i(t) {
            if (t)return o(t)
        }

        function o(t) {
            for (var e in i.prototype)t[e] = i.prototype[e];
            return t
        }

        t.exports = i, i.prototype.on = i.prototype.addEventListener = function (t, e) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this
        }, i.prototype.once = function (t, e) {
            function i() {
                o.off(t, i), e.apply(this, arguments)
            }

            var o = this;
            return this._callbacks = this._callbacks || {}, i.fn = e, this.on(t, i), this
        }, i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function (t, e) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length)return this._callbacks = {}, this;
            var i = this._callbacks[t];
            if (!i)return this;
            if (1 == arguments.length)return delete this._callbacks[t], this;
            for (var o, n = 0; n < i.length; n++)if (o = i[n], o === e || o.fn === e) {
                i.splice(n, 1);
                break
            }
            return this
        }, i.prototype.emit = function (t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1), i = this._callbacks[t];
            if (i) {
                i = i.slice(0);
                for (var o = 0, n = i.length; o < n; ++o)i[o].apply(this, e)
            }
            return this
        }, i.prototype.listeners = function (t) {
            return this._callbacks = this._callbacks || {}, this._callbacks[t] || []
        }, i.prototype.hasListeners = function (t) {
            return !!this.listeners(t).length
        }
    }, function (t, e) {
        function i(t, e, i) {
            this.x = void 0 !== t ? t : 0, this.y = void 0 !== e ? e : 0, this.z = void 0 !== i ? i : 0
        }

        i.subtract = function (t, e) {
            var o = new i;
            return o.x = t.x - e.x, o.y = t.y - e.y, o.z = t.z - e.z, o
        }, i.add = function (t, e) {
            var o = new i;
            return o.x = t.x + e.x, o.y = t.y + e.y, o.z = t.z + e.z, o
        }, i.avg = function (t, e) {
            return new i((t.x + e.x) / 2, (t.y + e.y) / 2, (t.z + e.z) / 2)
        }, i.crossProduct = function (t, e) {
            var o = new i;
            return o.x = t.y * e.z - t.z * e.y, o.y = t.z * e.x - t.x * e.z, o.z = t.x * e.y - t.y * e.x, o
        }, i.prototype.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }, t.exports = i
    }, function (t, e) {
        function i(t, e) {
            this.x = void 0 !== t ? t : 0, this.y = void 0 !== e ? e : 0
        }

        t.exports = i
    }, function (t, e, i) {
        function o() {
            this.armLocation = new n, this.armRotation = {}, this.armRotation.horizontal = 0, this.armRotation.vertical = 0, this.armLength = 1.7, this.cameraLocation = new n, this.cameraRotation = new n(.5 * Math.PI, 0, 0), this.calculateCameraOrientation()
        }

        var n = i(14);
        o.prototype.setArmLocation = function (t, e, i) {
            this.armLocation.x = t, this.armLocation.y = e, this.armLocation.z = i, this.calculateCameraOrientation()
        }, o.prototype.setArmRotation = function (t, e) {
            void 0 !== t && (this.armRotation.horizontal = t), void 0 !== e && (this.armRotation.vertical = e, this.armRotation.vertical < 0 && (this.armRotation.vertical = 0), this.armRotation.vertical > .5 * Math.PI && (this.armRotation.vertical = .5 * Math.PI)), void 0 === t && void 0 === e || this.calculateCameraOrientation()
        }, o.prototype.getArmRotation = function () {
            var t = {};
            return t.horizontal = this.armRotation.horizontal, t.vertical = this.armRotation.vertical, t
        }, o.prototype.setArmLength = function (t) {
            void 0 !== t && (this.armLength = t, this.armLength < .71 && (this.armLength = .71), this.armLength > 5 && (this.armLength = 5), this.calculateCameraOrientation())
        }, o.prototype.getArmLength = function () {
            return this.armLength
        }, o.prototype.getCameraLocation = function () {
            return this.cameraLocation
        }, o.prototype.getCameraRotation = function () {
            return this.cameraRotation
        }, o.prototype.calculateCameraOrientation = function () {
            this.cameraLocation.x = this.armLocation.x - this.armLength * Math.sin(this.armRotation.horizontal) * Math.cos(this.armRotation.vertical), this.cameraLocation.y = this.armLocation.y - this.armLength * Math.cos(this.armRotation.horizontal) * Math.cos(this.armRotation.vertical), this.cameraLocation.z = this.armLocation.z + this.armLength * Math.sin(this.armRotation.vertical), this.cameraRotation.x = Math.PI / 2 - this.armRotation.vertical, this.cameraRotation.y = 0, this.cameraRotation.z = -this.armRotation.horizontal
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i) {
            this.data = t, this.column = e, this.graph = i, this.index = void 0, this.value = void 0, this.values = i.getDistinctValues(t.get(), this.column), this.values.sort(function (t, e) {
                return t > e ? 1 : t < e ? -1 : 0
            }), this.values.length > 0 && this.selectValue(0), this.dataPoints = [], this.loaded = !1, this.onLoadCallback = void 0, i.animationPreload ? (this.loaded = !1, this.loadInBackground()) : this.loaded = !0
        }

        var n = i(11);
        o.prototype.isLoaded = function () {
            return this.loaded
        }, o.prototype.getLoadedProgress = function () {
            for (var t = this.values.length, e = 0; this.dataPoints[e];)e++;
            return Math.round(e / t * 100)
        }, o.prototype.getLabel = function () {
            return this.graph.filterLabel
        }, o.prototype.getColumn = function () {
            return this.column
        }, o.prototype.getSelectedValue = function () {
            if (void 0 !== this.index)return this.values[this.index]
        }, o.prototype.getValues = function () {
            return this.values
        }, o.prototype.getValue = function (t) {
            if (t >= this.values.length)throw new Error("Index out of range");
            return this.values[t]
        }, o.prototype._getDataPoints = function (t) {
            if (void 0 === t && (t = this.index), void 0 === t)return [];
            var e;
            if (this.dataPoints[t])e = this.dataPoints[t]; else {
                var i = {};
                i.column = this.column, i.value = this.values[t];
                var o = new n(this.data, {
                    filter: function (t) {
                        return t[i.column] == i.value
                    }
                }).get();
                e = this.graph._getDataPoints(o), this.dataPoints[t] = e
            }
            return e
        }, o.prototype.setOnLoadCallback = function (t) {
            this.onLoadCallback = t
        }, o.prototype.selectValue = function (t) {
            if (t >= this.values.length)throw new Error("Index out of range");
            this.index = t, this.value = this.values[t]
        }, o.prototype.loadInBackground = function (t) {
            void 0 === t && (t = 0);
            var e = this.graph.frame;
            if (t < this.values.length) {
                this._getDataPoints(t);
                void 0 === e.progress && (e.progress = document.createElement("DIV"), e.progress.style.position = "absolute", e.progress.style.color = "gray", e.appendChild(e.progress));
                var i = this.getLoadedProgress();
                e.progress.innerHTML = "Loading animation... " + i + "%", e.progress.style.bottom = "60px", e.progress.style.left = "10px";
                var o = this;
                setTimeout(function () {
                    o.loadInBackground(t + 1)
                }, 10), this.loaded = !1
            } else this.loaded = !0, void 0 !== e.progress && (e.removeChild(e.progress), e.progress = void 0), this.onLoadCallback && this.onLoadCallback()
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e) {
            if (void 0 === t)throw new Error("No container element defined");
            if (this.container = t, this.visible = !e || void 0 == e.visible || e.visible, this.visible) {
                this.frame = document.createElement("DIV"), this.frame.style.width = "100%", this.frame.style.position = "relative", this.container.appendChild(this.frame), this.frame.prev = document.createElement("INPUT"), this.frame.prev.type = "BUTTON", this.frame.prev.value = "Prev", this.frame.appendChild(this.frame.prev), this.frame.play = document.createElement("INPUT"), this.frame.play.type = "BUTTON", this.frame.play.value = "Play", this.frame.appendChild(this.frame.play), this.frame.next = document.createElement("INPUT"), this.frame.next.type = "BUTTON", this.frame.next.value = "Next", this.frame.appendChild(this.frame.next), this.frame.bar = document.createElement("INPUT"), this.frame.bar.type = "BUTTON", this.frame.bar.style.position = "absolute", this.frame.bar.style.border = "1px solid red", this.frame.bar.style.width = "100px", this.frame.bar.style.height = "6px", this.frame.bar.style.borderRadius = "2px", this.frame.bar.style.MozBorderRadius = "2px", this.frame.bar.style.border = "1px solid #7F7F7F", this.frame.bar.style.backgroundColor = "#E5E5E5", this.frame.appendChild(this.frame.bar), this.frame.slide = document.createElement("INPUT"), this.frame.slide.type = "BUTTON", this.frame.slide.style.margin = "0px", this.frame.slide.value = " ", this.frame.slide.style.position = "relative", this.frame.slide.style.left = "-100px", this.frame.appendChild(this.frame.slide);
                var i = this;
                this.frame.slide.onmousedown = function (t) {
                    i._onMouseDown(t)
                }, this.frame.prev.onclick = function (t) {
                    i.prev(t)
                }, this.frame.play.onclick = function (t) {
                    i.togglePlay(t)
                }, this.frame.next.onclick = function (t) {
                    i.next(t)
                }
            }
            this.onChangeCallback = void 0, this.values = [], this.index = void 0, this.playTimeout = void 0, this.playInterval = 1e3, this.playLoop = !0
        }

        var n = i(1);
        o.prototype.prev = function () {
            var t = this.getIndex();
            t > 0 && (t--, this.setIndex(t))
        }, o.prototype.next = function () {
            var t = this.getIndex();
            t < this.values.length - 1 && (t++, this.setIndex(t))
        }, o.prototype.playNext = function () {
            var t = new Date, e = this.getIndex();
            e < this.values.length - 1 ? (e++, this.setIndex(e)) : this.playLoop && (e = 0, this.setIndex(e));
            var i = new Date, o = i - t, n = Math.max(this.playInterval - o, 0), s = this;
            this.playTimeout = setTimeout(function () {
                s.playNext()
            }, n)
        }, o.prototype.togglePlay = function () {
            void 0 === this.playTimeout ? this.play() : this.stop()
        }, o.prototype.play = function () {
            this.playTimeout || (this.playNext(), this.frame && (this.frame.play.value = "Stop"))
        }, o.prototype.stop = function () {
            clearInterval(this.playTimeout), this.playTimeout = void 0, this.frame && (this.frame.play.value = "Play")
        }, o.prototype.setOnChangeCallback = function (t) {
            this.onChangeCallback = t
        }, o.prototype.setPlayInterval = function (t) {
            this.playInterval = t
        }, o.prototype.getPlayInterval = function (t) {
            return this.playInterval
        }, o.prototype.setPlayLoop = function (t) {
            this.playLoop = t
        }, o.prototype.onChange = function () {
            void 0 !== this.onChangeCallback && this.onChangeCallback()
        }, o.prototype.redraw = function () {
            if (this.frame) {
                this.frame.bar.style.top = this.frame.clientHeight / 2 - this.frame.bar.offsetHeight / 2 + "px", this.frame.bar.style.width = this.frame.clientWidth - this.frame.prev.clientWidth - this.frame.play.clientWidth - this.frame.next.clientWidth - 30 + "px";
                var t = this.indexToLeft(this.index);
                this.frame.slide.style.left = t + "px"
            }
        }, o.prototype.setValues = function (t) {
            this.values = t, this.values.length > 0 ? this.setIndex(0) : this.index = void 0
        }, o.prototype.setIndex = function (t) {
            if (!(t < this.values.length))throw new Error("Index out of range");
            this.index = t, this.redraw(), this.onChange()
        }, o.prototype.getIndex = function () {
            return this.index
        }, o.prototype.get = function () {
            return this.values[this.index]
        }, o.prototype._onMouseDown = function (t) {
            var e = t.which ? 1 === t.which : 1 === t.button;
            if (e) {
                this.startClientX = t.clientX, this.startSlideX = parseFloat(this.frame.slide.style.left), this.frame.style.cursor = "move";
                var i = this;
                this.onmousemove = function (t) {
                    i._onMouseMove(t)
                }, this.onmouseup = function (t) {
                    i._onMouseUp(t)
                }, n.addEventListener(document, "mousemove", this.onmousemove), n.addEventListener(document, "mouseup", this.onmouseup), n.preventDefault(t)
            }
        }, o.prototype.leftToIndex = function (t) {
            var e = parseFloat(this.frame.bar.style.width) - this.frame.slide.clientWidth - 10, i = t - 3, o = Math.round(i / e * (this.values.length - 1));
            return o < 0 && (o = 0), o > this.values.length - 1 && (o = this.values.length - 1), o
        }, o.prototype.indexToLeft = function (t) {
            var e = parseFloat(this.frame.bar.style.width) - this.frame.slide.clientWidth - 10, i = t / (this.values.length - 1) * e, o = i + 3;
            return o
        }, o.prototype._onMouseMove = function (t) {
            var e = t.clientX - this.startClientX, i = this.startSlideX + e, o = this.leftToIndex(i);
            this.setIndex(o), n.preventDefault()
        }, o.prototype._onMouseUp = function (t) {
            this.frame.style.cursor = "auto", n.removeEventListener(document, "mousemove", this.onmousemove), n.removeEventListener(document, "mouseup", this.onmouseup), n.preventDefault()
        }, t.exports = o
    }, function (t, e) {
        function i(t, e, i, o) {
            this._start = 0, this._end = 0, this._step = 1, this.prettyStep = !0, this.precision = 5, this._current = 0, this.setRange(t, e, i, o)
        }

        i.prototype.isNumeric = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, i.prototype.setRange = function (t, e, i, o) {
            if (!this.isNumeric(t))throw new Error("Parameter 'start' is not numeric; value: " + t);
            if (!this.isNumeric(e))throw new Error("Parameter 'end' is not numeric; value: " + t);
            if (!this.isNumeric(i))throw new Error("Parameter 'step' is not numeric; value: " + t);
            this._start = t ? t : 0, this._end = e ? e : 0, this.setStep(i, o)
        }, i.prototype.setStep = function (t, e) {
            void 0 === t || t <= 0 || (void 0 !== e && (this.prettyStep = e), this.prettyStep === !0 ? this._step = i.calculatePrettyStep(t) : this._step = t)
        }, i.calculatePrettyStep = function (t) {
            var e = function (t) {
                return Math.log(t) / Math.LN10
            }, i = Math.pow(10, Math.round(e(t))), o = 2 * Math.pow(10, Math.round(e(t / 2))), n = 5 * Math.pow(10, Math.round(e(t / 5))), s = i;
            return Math.abs(o - t) <= Math.abs(s - t) && (s = o), Math.abs(n - t) <= Math.abs(s - t) && (s = n), s <= 0 && (s = 1), s
        }, i.prototype.getCurrent = function () {
            return parseFloat(this._current.toPrecision(this.precision))
        }, i.prototype.getStep = function () {
            return this._step
        }, i.prototype.start = function (t) {
            void 0 === t && (t = !1), this._current = this._start - this._start % this._step, t && this.getCurrent() < this._start && this.next()
        }, i.prototype.next = function () {
            this._current += this._step
        }, i.prototype.end = function () {
            return this._current > this._end
        }, t.exports = i
    }, function (t, e) {
        function i() {
            this.min = void 0, this.max = void 0
        }

        i.prototype.adjust = function (t) {
            void 0 !== t && ((void 0 === this.min || this.min > t) && (this.min = t), (void 0 === this.max || this.max < t) && (this.max = t))
        }, i.prototype.combine = function (t) {
            this.add(t.min), this.add(t.max)
        }, i.prototype.expand = function (t) {
            if (void 0 !== t) {
                var e = this.min - t, i = this.max + t;
                if (e > i)throw new Error("Passed expansion value makes range invalid");
                this.min = e, this.max = i
            }
        }, i.prototype.range = function () {
            return this.max - this.min
        }, i.prototype.center = function () {
            return (this.min + this.max) / 2
        }, t.exports = i
    }, function (t, e, i) {
        function o(t) {
            for (var e in t)if (t.hasOwnProperty(e))return !1;
            return !0
        }

        function n(t) {
            return void 0 === t || "" === t ? t : t.charAt(0).toUpperCase() + t.slice(1)
        }

        function s(t, e) {
            return void 0 === t || "" === t ? e : t + n(e)
        }

        function r(t, e, i, o) {
            var n, r;
            for (var a in i)n = i[a], r = s(o, n), e[r] = t[n]
        }

        function a(t, e, i, o) {
            var n, r;
            for (var a in i)n = i[a], void 0 !== t[n] && (r = s(o, n), e[r] = t[n])
        }

        function h(t, e) {
            if (void 0 === t || o(t))throw new Error("No DEFAULTS passed");
            if (void 0 === e)throw new Error("No dst passed");
            D = t, r(t, e, k), r(t, e, O, "default"), l(t, e), e.margin = 10, e.showGrayBottom = !1, e.showTooltip = !1, e.eye = new _(0, 0, -1)
        }

        function d(t, e) {
            if (void 0 !== t) {
                if (void 0 === e)throw new Error("No dst passed");
                if (void 0 === D || o(D))throw new Error("DEFAULTS not set for module Settings");
                a(t, e, k), a(t, e, O, "default"), l(t, e)
            }
        }

        function l(t, e) {
            void 0 !== t.backgroundColor && m(t.backgroundColor, e), v(t.dataColor, e), f(t.style, e), c(t.showLegend, e), g(t.cameraPosition, e), void 0 !== t.tooltip && (e.showTooltip = t.tooltip)
        }

        function c(t, e) {
            if (void 0 === t) {
                var i = void 0 === D.showLegend;
                if (i) {
                    var o = e.style === w.DOTCOLOR || e.style === w.DOTSIZE;
                    e.showLegend = o
                }
            } else e.showLegend = t
        }

        function u(t) {
            var e = x[t];
            return void 0 === e ? -1 : e
        }

        function p(t) {
            var e = !1;
            for (var i in w)if (w[i] === t) {
                e = !0;
                break
            }
            return e
        }

        function f(t, e) {
            if (void 0 !== t) {
                var i;
                if ("string" == typeof t) {
                    if (i = u(t), i === -1)throw new Error("Style '" + t + "' is invalid")
                } else {
                    if (!p(t))throw new Error("Style '" + t + "' is invalid");
                    i = t
                }
                e.style = i
            }
        }

        function m(t, e) {
            var i = "white", o = "gray", n = 1;
            if ("string" == typeof t)i = t, o = "none", n = 0; else {
                if ("object" !== ("undefined" == typeof t ? "undefined" : y(t)))throw new Error("Unsupported type of backgroundColor");
                void 0 !== t.fill && (i = t.fill), void 0 !== t.stroke && (o = t.stroke), void 0 !== t.strokeWidth && (n = t.strokeWidth)
            }
            e.frame.style.backgroundColor = i, e.frame.style.borderColor = o, e.frame.style.borderWidth = n + "px", e.frame.style.borderStyle = "solid"
        }

        function v(t, e) {
            void 0 !== t && (void 0 === e.dataColor && (e.dataColor = {}), "string" == typeof t ? (e.dataColor.fill = t, e.dataColor.stroke = t) : (t.fill && (e.dataColor.fill = t.fill), t.stroke && (e.dataColor.stroke = t.stroke), void 0 !== t.strokeWidth && (e.dataColor.strokeWidth = t.strokeWidth)))
        }

        function g(t, e) {
            var i = t;
            void 0 !== i && (void 0 === e.camera && (e.camera = new b), e.camera.setArmRotation(i.horizontal, i.vertical), e.camera.setArmLength(i.distance))
        }

        var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, b = i(16), _ = i(14), w = {
            BAR: 0,
            BARCOLOR: 1,
            BARSIZE: 2,
            DOT: 3,
            DOTLINE: 4,
            DOTCOLOR: 5,
            DOTSIZE: 6,
            GRID: 7,
            LINE: 8,
            SURFACE: 9
        }, x = {
            dot: w.DOT,
            "dot-line": w.DOTLINE,
            "dot-color": w.DOTCOLOR,
            "dot-size": w.DOTSIZE,
            line: w.LINE,
            grid: w.GRID,
            surface: w.SURFACE,
            bar: w.BAR,
            "bar-color": w.BARCOLOR,
            "bar-size": w.BARSIZE
        }, k = ["width", "height", "filterLabel", "legendLabel", "xLabel", "yLabel", "zLabel", "xValueLabel", "yValueLabel", "zValueLabel", "showGrid", "showPerspective", "showShadow", "keepAspectRatio", "verticalRatio", "dotSizeRatio", "showAnimationControls", "animationInterval", "animationPreload", "animationAutoStart", "axisColor", "gridColor", "xCenter", "yCenter"], O = ["xBarWidth", "yBarWidth", "valueMin", "valueMax", "xMin", "xMax", "xStep", "yMin", "yMax", "yStep", "zMin", "zMax", "zStep"], D = void 0;
        t.exports.STYLE = w, t.exports.setDefaults = h, t.exports.setOptions = d, t.exports.setCameraPosition = g
    }, function (t, e, i) {
        if ("undefined" != typeof window) {
            var o = i(23), n = window.Hammer || i(24);
            t.exports = o(n, {preventDefault: "mouse"})
        } else t.exports = function () {
            throw Error("hammer.js is only available in a browser, not in node.js.")
        }
    }, function (t, e, i) {
        var o, n, s;
        !function (i) {
            n = [], o = i, s = "function" == typeof o ? o.apply(e, n) : o, !(void 0 !== s && (t.exports = s))
        }(function () {
            var t = null;
            return function e(i, o) {
                function n(t) {
                    return t.match(/[^ ]+/g)
                }

                function s(e) {
                    if ("hammer.input" !== e.type) {
                        if (e.srcEvent._handled || (e.srcEvent._handled = {}), e.srcEvent._handled[e.type])return;
                        e.srcEvent._handled[e.type] = !0
                    }
                    var i = !1;
                    e.stopPropagation = function () {
                        i = !0
                    };
                    var o = e.srcEvent.stopPropagation.bind(e.srcEvent);
                    "function" == typeof o && (e.srcEvent.stopPropagation = function () {
                        o(), e.stopPropagation()
                    }), e.firstTarget = t;
                    for (var n = t; n && !i;) {
                        var s = n.hammer;
                        if (s)for (var r, a = 0; a < s.length; a++)if (r = s[a]._handlers[e.type])for (var h = 0; h < r.length && !i; h++)r[h](e);
                        n = n.parentNode
                    }
                }

                var r = o || {preventDefault: !1};
                if (i.Manager) {
                    var a = i, h = function (t, i) {
                        var o = Object.create(r);
                        return i && a.assign(o, i), e(new a(t, o), o)
                    };
                    return a.assign(h, a), h.Manager = function (t, i) {
                        var o = Object.create(r);
                        return i && a.assign(o, i), e(new a.Manager(t, o), o)
                    }, h
                }
                var d = Object.create(i), l = i.element;
                return l.hammer || (l.hammer = []), l.hammer.push(d), i.on("hammer.input", function (e) {
                    r.preventDefault !== !0 && r.preventDefault !== e.pointerType || e.preventDefault(), e.isFirst && (t = e.target)
                }), d._handlers = {}, d.on = function (t, e) {
                    return n(t).forEach(function (t) {
                        var o = d._handlers[t];
                        o || (d._handlers[t] = o = [], i.on(t, s)), o.push(e)
                    }), d
                }, d.off = function (t, e) {
                    return n(t).forEach(function (t) {
                        var o = d._handlers[t];
                        o && (o = e ? o.filter(function (t) {
                            return t !== e
                        }) : [], o.length > 0 ? d._handlers[t] = o : (i.off(t, s), delete d._handlers[t]))
                    }), d
                }, d.emit = function (e, o) {
                    t = o.target, i.emit(e, o)
                }, d.destroy = function () {
                    var t = i.element.hammer, e = t.indexOf(d);
                    e !== -1 && t.splice(e, 1), t.length || delete i.element.hammer, d._handlers = {}, i.destroy()
                }, d
            }
        })
    }, function (t, e, i) {
        var o;
        !function (n, s, r, a) {
            function h(t, e, i) {
                return setTimeout(p(t, i), e)
            }

            function d(t, e, i) {
                return !!Array.isArray(t) && (l(t, i[e], i), !0)
            }

            function l(t, e, i) {
                var o;
                if (t)if (t.forEach)t.forEach(e, i); else if (t.length !== a)for (o = 0; o < t.length;)e.call(i, t[o], o, t), o++; else for (o in t)t.hasOwnProperty(o) && e.call(i, t[o], o, t)
            }

            function c(t, e, i) {
                var o = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
                return function () {
                    var e = new Error("get-stack-trace"), i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", s = n.console && (n.console.warn || n.console.log);
                    return s && s.call(n.console, o, i), t.apply(this, arguments)
                }
            }

            function u(t, e, i) {
                var o, n = e.prototype;
                o = t.prototype = Object.create(n), o.constructor = t, o._super = n, i && mt(o, i)
            }

            function p(t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            }

            function f(t, e) {
                return typeof t == yt ? t.apply(e ? e[0] || a : a, e) : t
            }

            function m(t, e) {
                return t === a ? e : t
            }

            function v(t, e, i) {
                l(_(e), function (e) {
                    t.addEventListener(e, i, !1)
                })
            }

            function g(t, e, i) {
                l(_(e), function (e) {
                    t.removeEventListener(e, i, !1)
                })
            }

            function y(t, e) {
                for (; t;) {
                    if (t == e)return !0;
                    t = t.parentNode
                }
                return !1
            }

            function b(t, e) {
                return t.indexOf(e) > -1
            }

            function _(t) {
                return t.trim().split(/\s+/g)
            }

            function w(t, e, i) {
                if (t.indexOf && !i)return t.indexOf(e);
                for (var o = 0; o < t.length;) {
                    if (i && t[o][i] == e || !i && t[o] === e)return o;
                    o++
                }
                return -1
            }

            function x(t) {
                return Array.prototype.slice.call(t, 0)
            }

            function k(t, e, i) {
                for (var o = [], n = [], s = 0; s < t.length;) {
                    var r = e ? t[s][e] : t[s];
                    w(n, r) < 0 && o.push(t[s]), n[s] = r, s++
                }
                return i && (o = e ? o.sort(function (t, i) {
                    return t[e] > i[e]
                }) : o.sort()), o
            }

            function O(t, e) {
                for (var i, o, n = e[0].toUpperCase() + e.slice(1), s = 0; s < vt.length;) {
                    if (i = vt[s], o = i ? i + n : e, o in t)return o;
                    s++
                }
                return a
            }

            function D() {
                return Ot++
            }

            function S(t) {
                var e = t.ownerDocument || t;
                return e.defaultView || e.parentWindow || n;
            }

            function C(t, e) {
                var i = this;
                this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
                    f(t.options.enable, [t]) && i.handler(e)
                }, this.init()
            }

            function T(t) {
                var e, i = t.options.inputClass;
                return new (e = i ? i : Ct ? W : Tt ? V : St ? q : H)(t, E)
            }

            function E(t, e, i) {
                var o = i.pointers.length, n = i.changedPointers.length, s = e & Rt && o - n === 0, r = e & (zt | At) && o - n === 0;
                i.isFirst = !!s, i.isFinal = !!r, s && (t.session = {}), i.eventType = e, M(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
            }

            function M(t, e) {
                var i = t.session, o = e.pointers, n = o.length;
                i.firstInput || (i.firstInput = N(e)), n > 1 && !i.firstMultiple ? i.firstMultiple = N(e) : 1 === n && (i.firstMultiple = !1);
                var s = i.firstInput, r = i.firstMultiple, a = r ? r.center : s.center, h = e.center = R(o);
                e.timeStamp = wt(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = B(a, h), e.distance = A(a, h), P(i, e), e.offsetDirection = z(e.deltaX, e.deltaY);
                var d = L(e.deltaTime, e.deltaX, e.deltaY);
                e.overallVelocityX = d.x, e.overallVelocityY = d.y, e.overallVelocity = _t(d.x) > _t(d.y) ? d.x : d.y, e.scale = r ? F(r.pointers, o) : 1, e.rotation = r ? j(r.pointers, o) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, I(i, e);
                var l = t.element;
                y(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
            }

            function P(t, e) {
                var i = e.center, o = t.offsetDelta || {}, n = t.prevDelta || {}, s = t.prevInput || {};
                e.eventType !== Rt && s.eventType !== zt || (n = t.prevDelta = {
                    x: s.deltaX || 0,
                    y: s.deltaY || 0
                }, o = t.offsetDelta = {x: i.x, y: i.y}), e.deltaX = n.x + (i.x - o.x), e.deltaY = n.y + (i.y - o.y)
            }

            function I(t, e) {
                var i, o, n, s, r = t.lastInterval || e, h = e.timeStamp - r.timeStamp;
                if (e.eventType != At && (h > Nt || r.velocity === a)) {
                    var d = e.deltaX - r.deltaX, l = e.deltaY - r.deltaY, c = L(h, d, l);
                    o = c.x, n = c.y, i = _t(c.x) > _t(c.y) ? c.x : c.y, s = z(d, l), t.lastInterval = e
                } else i = r.velocity, o = r.velocityX, n = r.velocityY, s = r.direction;
                e.velocity = i, e.velocityX = o, e.velocityY = n, e.direction = s
            }

            function N(t) {
                for (var e = [], i = 0; i < t.pointers.length;)e[i] = {
                    clientX: bt(t.pointers[i].clientX),
                    clientY: bt(t.pointers[i].clientY)
                }, i++;
                return {timeStamp: wt(), pointers: e, center: R(e), deltaX: t.deltaX, deltaY: t.deltaY}
            }

            function R(t) {
                var e = t.length;
                if (1 === e)return {x: bt(t[0].clientX), y: bt(t[0].clientY)};
                for (var i = 0, o = 0, n = 0; n < e;)i += t[n].clientX, o += t[n].clientY, n++;
                return {x: bt(i / e), y: bt(o / e)}
            }

            function L(t, e, i) {
                return {x: e / t || 0, y: i / t || 0}
            }

            function z(t, e) {
                return t === e ? Bt : _t(t) >= _t(e) ? t < 0 ? jt : Ft : e < 0 ? Ht : Wt
            }

            function A(t, e, i) {
                i || (i = Ut);
                var o = e[i[0]] - t[i[0]], n = e[i[1]] - t[i[1]];
                return Math.sqrt(o * o + n * n)
            }

            function B(t, e, i) {
                i || (i = Ut);
                var o = e[i[0]] - t[i[0]], n = e[i[1]] - t[i[1]];
                return 180 * Math.atan2(n, o) / Math.PI
            }

            function j(t, e) {
                return B(e[1], e[0], qt) + B(t[1], t[0], qt)
            }

            function F(t, e) {
                return A(e[0], e[1], qt) / A(t[0], t[1], qt)
            }

            function H() {
                this.evEl = Zt, this.evWin = Kt, this.pressed = !1, C.apply(this, arguments)
            }

            function W() {
                this.evEl = $t, this.evWin = te, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
            }

            function Y() {
                this.evTarget = ie, this.evWin = oe, this.started = !1, C.apply(this, arguments)
            }

            function G(t, e) {
                var i = x(t.touches), o = x(t.changedTouches);
                return e & (zt | At) && (i = k(i.concat(o), "identifier", !0)), [i, o]
            }

            function V() {
                this.evTarget = se, this.targetIds = {}, C.apply(this, arguments)
            }

            function U(t, e) {
                var i = x(t.touches), o = this.targetIds;
                if (e & (Rt | Lt) && 1 === i.length)return o[i[0].identifier] = !0, [i, i];
                var n, s, r = x(t.changedTouches), a = [], h = this.target;
                if (s = i.filter(function (t) {
                        return y(t.target, h)
                    }), e === Rt)for (n = 0; n < s.length;)o[s[n].identifier] = !0, n++;
                for (n = 0; n < r.length;)o[r[n].identifier] && a.push(r[n]), e & (zt | At) && delete o[r[n].identifier], n++;
                return a.length ? [k(s.concat(a), "identifier", !0), a] : void 0
            }

            function q() {
                C.apply(this, arguments);
                var t = p(this.handler, this);
                this.touch = new V(this.manager, t), this.mouse = new H(this.manager, t), this.primaryTouch = null, this.lastTouches = []
            }

            function X(t, e) {
                t & Rt ? (this.primaryTouch = e.changedPointers[0].identifier, Z.call(this, e)) : t & (zt | At) && Z.call(this, e)
            }

            function Z(t) {
                var e = t.changedPointers[0];
                if (e.identifier === this.primaryTouch) {
                    var i = {x: e.clientX, y: e.clientY};
                    this.lastTouches.push(i);
                    var o = this.lastTouches, n = function () {
                        var t = o.indexOf(i);
                        t > -1 && o.splice(t, 1)
                    };
                    setTimeout(n, re)
                }
            }

            function K(t) {
                for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, o = 0; o < this.lastTouches.length; o++) {
                    var n = this.lastTouches[o], s = Math.abs(e - n.x), r = Math.abs(i - n.y);
                    if (s <= ae && r <= ae)return !0
                }
                return !1
            }

            function J(t, e) {
                this.manager = t, this.set(e)
            }

            function Q(t) {
                if (b(t, pe))return pe;
                var e = b(t, fe), i = b(t, me);
                return e && i ? pe : e || i ? e ? fe : me : b(t, ue) ? ue : ce
            }

            function $() {
                if (!de)return !1;
                var t = {}, e = n.CSS && n.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
                    t[i] = !e || n.CSS.supports("touch-action", i)
                }), t
            }

            function tt(t) {
                this.options = mt({}, this.defaults, t || {}), this.id = D(), this.manager = null, this.options.enable = m(this.options.enable, !0), this.state = ge, this.simultaneous = {}, this.requireFail = []
            }

            function et(t) {
                return t & xe ? "cancel" : t & _e ? "end" : t & be ? "move" : t & ye ? "start" : ""
            }

            function it(t) {
                return t == Wt ? "down" : t == Ht ? "up" : t == jt ? "left" : t == Ft ? "right" : ""
            }

            function ot(t, e) {
                var i = e.manager;
                return i ? i.get(t) : t
            }

            function nt() {
                tt.apply(this, arguments)
            }

            function st() {
                nt.apply(this, arguments), this.pX = null, this.pY = null
            }

            function rt() {
                nt.apply(this, arguments)
            }

            function at() {
                tt.apply(this, arguments), this._timer = null, this._input = null
            }

            function ht() {
                nt.apply(this, arguments)
            }

            function dt() {
                nt.apply(this, arguments)
            }

            function lt() {
                tt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
            }

            function ct(t, e) {
                return e = e || {}, e.recognizers = m(e.recognizers, ct.defaults.preset), new ut(t, e)
            }

            function ut(t, e) {
                this.options = mt({}, ct.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = T(this), this.touchAction = new J(this, this.options.touchAction), pt(this, !0), l(this.options.recognizers, function (t) {
                    var e = this.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                }, this)
            }

            function pt(t, e) {
                var i = t.element;
                if (i.style) {
                    var o;
                    l(t.options.cssProps, function (n, s) {
                        o = O(i.style, s), e ? (t.oldCssProps[o] = i.style[o], i.style[o] = n) : i.style[o] = t.oldCssProps[o] || ""
                    }), e || (t.oldCssProps = {})
                }
            }

            function ft(t, e) {
                var i = s.createEvent("Event");
                i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
            }

            var mt, vt = ["", "webkit", "Moz", "MS", "ms", "o"], gt = s.createElement("div"), yt = "function", bt = Math.round, _t = Math.abs, wt = Date.now;
            mt = "function" != typeof Object.assign ? function (t) {
                if (t === a || null === t)throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var o = arguments[i];
                    if (o !== a && null !== o)for (var n in o)o.hasOwnProperty(n) && (e[n] = o[n])
                }
                return e
            } : Object.assign;
            var xt = c(function (t, e, i) {
                for (var o = Object.keys(e), n = 0; n < o.length;)(!i || i && t[o[n]] === a) && (t[o[n]] = e[o[n]]), n++;
                return t
            }, "extend", "Use `assign`."), kt = c(function (t, e) {
                return xt(t, e, !0)
            }, "merge", "Use `assign`."), Ot = 1, Dt = /mobile|tablet|ip(ad|hone|od)|android/i, St = "ontouchstart"in n, Ct = O(n, "PointerEvent") !== a, Tt = St && Dt.test(navigator.userAgent), Et = "touch", Mt = "pen", Pt = "mouse", It = "kinect", Nt = 25, Rt = 1, Lt = 2, zt = 4, At = 8, Bt = 1, jt = 2, Ft = 4, Ht = 8, Wt = 16, Yt = jt | Ft, Gt = Ht | Wt, Vt = Yt | Gt, Ut = ["x", "y"], qt = ["clientX", "clientY"];
            C.prototype = {
                handler: function () {
                }, init: function () {
                    this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(S(this.element), this.evWin, this.domHandler)
                }, destroy: function () {
                    this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(S(this.element), this.evWin, this.domHandler)
                }
            };
            var Xt = {mousedown: Rt, mousemove: Lt, mouseup: zt}, Zt = "mousedown", Kt = "mousemove mouseup";
            u(H, C, {
                handler: function (t) {
                    var e = Xt[t.type];
                    e & Rt && 0 === t.button && (this.pressed = !0), e & Lt && 1 !== t.which && (e = zt), this.pressed && (e & zt && (this.pressed = !1), this.callback(this.manager, e, {
                        pointers: [t],
                        changedPointers: [t],
                        pointerType: Pt,
                        srcEvent: t
                    }))
                }
            });
            var Jt = {pointerdown: Rt, pointermove: Lt, pointerup: zt, pointercancel: At, pointerout: At}, Qt = {
                2: Et,
                3: Mt,
                4: Pt,
                5: It
            }, $t = "pointerdown", te = "pointermove pointerup pointercancel";
            n.MSPointerEvent && !n.PointerEvent && ($t = "MSPointerDown", te = "MSPointerMove MSPointerUp MSPointerCancel"), u(W, C, {
                handler: function (t) {
                    var e = this.store, i = !1, o = t.type.toLowerCase().replace("ms", ""), n = Jt[o], s = Qt[t.pointerType] || t.pointerType, r = s == Et, a = w(e, t.pointerId, "pointerId");
                    n & Rt && (0 === t.button || r) ? a < 0 && (e.push(t), a = e.length - 1) : n & (zt | At) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, n, {
                        pointers: e,
                        changedPointers: [t],
                        pointerType: s,
                        srcEvent: t
                    }), i && e.splice(a, 1))
                }
            });
            var ee = {
                touchstart: Rt,
                touchmove: Lt,
                touchend: zt,
                touchcancel: At
            }, ie = "touchstart", oe = "touchstart touchmove touchend touchcancel";
            u(Y, C, {
                handler: function (t) {
                    var e = ee[t.type];
                    if (e === Rt && (this.started = !0), this.started) {
                        var i = G.call(this, t, e);
                        e & (zt | At) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: Et,
                            srcEvent: t
                        })
                    }
                }
            });
            var ne = {
                touchstart: Rt,
                touchmove: Lt,
                touchend: zt,
                touchcancel: At
            }, se = "touchstart touchmove touchend touchcancel";
            u(V, C, {
                handler: function (t) {
                    var e = ne[t.type], i = U.call(this, t, e);
                    i && this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: Et,
                        srcEvent: t
                    })
                }
            });
            var re = 2500, ae = 25;
            u(q, C, {
                handler: function (t, e, i) {
                    var o = i.pointerType == Et, n = i.pointerType == Pt;
                    if (!(n && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                        if (o)X.call(this, e, i); else if (n && K.call(this, i))return;
                        this.callback(t, e, i)
                    }
                }, destroy: function () {
                    this.touch.destroy(), this.mouse.destroy()
                }
            });
            var he = O(gt.style, "touchAction"), de = he !== a, le = "compute", ce = "auto", ue = "manipulation", pe = "none", fe = "pan-x", me = "pan-y", ve = $();
            J.prototype = {
                set: function (t) {
                    t == le && (t = this.compute()), de && this.manager.element.style && ve[t] && (this.manager.element.style[he] = t), this.actions = t.toLowerCase().trim()
                }, update: function () {
                    this.set(this.manager.options.touchAction)
                }, compute: function () {
                    var t = [];
                    return l(this.manager.recognizers, function (e) {
                        f(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                    }), Q(t.join(" "))
                }, preventDefaults: function (t) {
                    var e = t.srcEvent, i = t.offsetDirection;
                    if (this.manager.session.prevented)return void e.preventDefault();
                    var o = this.actions, n = b(o, pe) && !ve[pe], s = b(o, me) && !ve[me], r = b(o, fe) && !ve[fe];
                    if (n) {
                        var a = 1 === t.pointers.length, h = t.distance < 2, d = t.deltaTime < 250;
                        if (a && h && d)return
                    }
                    return r && s ? void 0 : n || s && i & Yt || r && i & Gt ? this.preventSrc(e) : void 0
                }, preventSrc: function (t) {
                    this.manager.session.prevented = !0, t.preventDefault()
                }
            };
            var ge = 1, ye = 2, be = 4, _e = 8, we = _e, xe = 16, ke = 32;
            tt.prototype = {
                defaults: {}, set: function (t) {
                    return mt(this.options, t), this.manager && this.manager.touchAction.update(), this
                }, recognizeWith: function (t) {
                    if (d(t, "recognizeWith", this))return this;
                    var e = this.simultaneous;
                    return t = ot(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
                }, dropRecognizeWith: function (t) {
                    return d(t, "dropRecognizeWith", this) ? this : (t = ot(t, this), delete this.simultaneous[t.id], this)
                }, requireFailure: function (t) {
                    if (d(t, "requireFailure", this))return this;
                    var e = this.requireFail;
                    return t = ot(t, this), w(e, t) === -1 && (e.push(t), t.requireFailure(this)), this
                }, dropRequireFailure: function (t) {
                    if (d(t, "dropRequireFailure", this))return this;
                    t = ot(t, this);
                    var e = w(this.requireFail, t);
                    return e > -1 && this.requireFail.splice(e, 1), this
                }, hasRequireFailures: function () {
                    return this.requireFail.length > 0
                }, canRecognizeWith: function (t) {
                    return !!this.simultaneous[t.id]
                }, emit: function (t) {
                    function e(e) {
                        i.manager.emit(e, t)
                    }

                    var i = this, o = this.state;
                    o < _e && e(i.options.event + et(o)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), o >= _e && e(i.options.event + et(o))
                }, tryEmit: function (t) {
                    return this.canEmit() ? this.emit(t) : void(this.state = ke)
                }, canEmit: function () {
                    for (var t = 0; t < this.requireFail.length;) {
                        if (!(this.requireFail[t].state & (ke | ge)))return !1;
                        t++
                    }
                    return !0
                }, recognize: function (t) {
                    var e = mt({}, t);
                    return f(this.options.enable, [this, e]) ? (this.state & (we | xe | ke) && (this.state = ge), this.state = this.process(e), void(this.state & (ye | be | _e | xe) && this.tryEmit(e))) : (this.reset(), void(this.state = ke))
                }, process: function (t) {
                }, getTouchAction: function () {
                }, reset: function () {
                }
            }, u(nt, tt, {
                defaults: {pointers: 1}, attrTest: function (t) {
                    var e = this.options.pointers;
                    return 0 === e || t.pointers.length === e
                }, process: function (t) {
                    var e = this.state, i = t.eventType, o = e & (ye | be), n = this.attrTest(t);
                    return o && (i & At || !n) ? e | xe : o || n ? i & zt ? e | _e : e & ye ? e | be : ye : ke
                }
            }), u(st, nt, {
                defaults: {event: "pan", threshold: 10, pointers: 1, direction: Vt},
                getTouchAction: function () {
                    var t = this.options.direction, e = [];
                    return t & Yt && e.push(me), t & Gt && e.push(fe), e
                },
                directionTest: function (t) {
                    var e = this.options, i = !0, o = t.distance, n = t.direction, s = t.deltaX, r = t.deltaY;
                    return n & e.direction || (e.direction & Yt ? (n = 0 === s ? Bt : s < 0 ? jt : Ft, i = s != this.pX, o = Math.abs(t.deltaX)) : (n = 0 === r ? Bt : r < 0 ? Ht : Wt, i = r != this.pY, o = Math.abs(t.deltaY))), t.direction = n, i && o > e.threshold && n & e.direction
                },
                attrTest: function (t) {
                    return nt.prototype.attrTest.call(this, t) && (this.state & ye || !(this.state & ye) && this.directionTest(t))
                },
                emit: function (t) {
                    this.pX = t.deltaX, this.pY = t.deltaY;
                    var e = it(t.direction);
                    e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                }
            }), u(rt, nt, {
                defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
                    return [pe]
                }, attrTest: function (t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ye)
                }, emit: function (t) {
                    if (1 !== t.scale) {
                        var e = t.scale < 1 ? "in" : "out";
                        t.additionalEvent = this.options.event + e
                    }
                    this._super.emit.call(this, t)
                }
            }), u(at, tt, {
                defaults: {event: "press", pointers: 1, time: 251, threshold: 9},
                getTouchAction: function () {
                    return [ce]
                },
                process: function (t) {
                    var e = this.options, i = t.pointers.length === e.pointers, o = t.distance < e.threshold, n = t.deltaTime > e.time;
                    if (this._input = t, !o || !i || t.eventType & (zt | At) && !n)this.reset(); else if (t.eventType & Rt)this.reset(), this._timer = h(function () {
                        this.state = we, this.tryEmit()
                    }, e.time, this); else if (t.eventType & zt)return we;
                    return ke
                },
                reset: function () {
                    clearTimeout(this._timer)
                },
                emit: function (t) {
                    this.state === we && (t && t.eventType & zt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = wt(), this.manager.emit(this.options.event, this._input)))
                }
            }), u(ht, nt, {
                defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
                    return [pe]
                }, attrTest: function (t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ye)
                }
            }), u(dt, nt, {
                defaults: {event: "swipe", threshold: 10, velocity: .3, direction: Yt | Gt, pointers: 1},
                getTouchAction: function () {
                    return st.prototype.getTouchAction.call(this)
                },
                attrTest: function (t) {
                    var e, i = this.options.direction;
                    return i & (Yt | Gt) ? e = t.overallVelocity : i & Yt ? e = t.overallVelocityX : i & Gt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && _t(e) > this.options.velocity && t.eventType & zt
                },
                emit: function (t) {
                    var e = it(t.offsetDirection);
                    e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                }
            }), u(lt, tt, {
                defaults: {
                    event: "tap",
                    pointers: 1,
                    taps: 1,
                    interval: 300,
                    time: 250,
                    threshold: 9,
                    posThreshold: 10
                }, getTouchAction: function () {
                    return [ue]
                }, process: function (t) {
                    var e = this.options, i = t.pointers.length === e.pointers, o = t.distance < e.threshold, n = t.deltaTime < e.time;
                    if (this.reset(), t.eventType & Rt && 0 === this.count)return this.failTimeout();
                    if (o && n && i) {
                        if (t.eventType != zt)return this.failTimeout();
                        var s = !this.pTime || t.timeStamp - this.pTime < e.interval, r = !this.pCenter || A(this.pCenter, t.center) < e.posThreshold;
                        this.pTime = t.timeStamp, this.pCenter = t.center, r && s ? this.count += 1 : this.count = 1, this._input = t;
                        var a = this.count % e.taps;
                        if (0 === a)return this.hasRequireFailures() ? (this._timer = h(function () {
                            this.state = we, this.tryEmit()
                        }, e.interval, this), ye) : we
                    }
                    return ke
                }, failTimeout: function () {
                    return this._timer = h(function () {
                        this.state = ke
                    }, this.options.interval, this), ke
                }, reset: function () {
                    clearTimeout(this._timer)
                }, emit: function () {
                    this.state == we && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                }
            }), ct.VERSION = "2.0.7", ct.defaults = {
                domEvents: !1,
                touchAction: le,
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [[ht, {enable: !1}], [rt, {enable: !1}, ["rotate"]], [dt, {direction: Yt}], [st, {direction: Yt}, ["swipe"]], [lt], [lt, {
                    event: "doubletap",
                    taps: 2
                }, ["tap"]], [at]],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            };
            var Oe = 1, De = 2;
            ut.prototype = {
                set: function (t) {
                    return mt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                }, stop: function (t) {
                    this.session.stopped = t ? De : Oe
                }, recognize: function (t) {
                    var e = this.session;
                    if (!e.stopped) {
                        this.touchAction.preventDefaults(t);
                        var i, o = this.recognizers, n = e.curRecognizer;
                        (!n || n && n.state & we) && (n = e.curRecognizer = null);
                        for (var s = 0; s < o.length;)i = o[s], e.stopped === De || n && i != n && !i.canRecognizeWith(n) ? i.reset() : i.recognize(t), !n && i.state & (ye | be | _e) && (n = e.curRecognizer = i), s++
                    }
                }, get: function (t) {
                    if (t instanceof tt)return t;
                    for (var e = this.recognizers, i = 0; i < e.length; i++)if (e[i].options.event == t)return e[i];
                    return null
                }, add: function (t) {
                    if (d(t, "add", this))return this;
                    var e = this.get(t.options.event);
                    return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                }, remove: function (t) {
                    if (d(t, "remove", this))return this;
                    if (t = this.get(t)) {
                        var e = this.recognizers, i = w(e, t);
                        i !== -1 && (e.splice(i, 1), this.touchAction.update())
                    }
                    return this
                }, on: function (t, e) {
                    if (t !== a && e !== a) {
                        var i = this.handlers;
                        return l(_(t), function (t) {
                            i[t] = i[t] || [], i[t].push(e)
                        }), this
                    }
                }, off: function (t, e) {
                    if (t !== a) {
                        var i = this.handlers;
                        return l(_(t), function (t) {
                            e ? i[t] && i[t].splice(w(i[t], e), 1) : delete i[t]
                        }), this
                    }
                }, emit: function (t, e) {
                    this.options.domEvents && ft(t, e);
                    var i = this.handlers[t] && this.handlers[t].slice();
                    if (i && i.length) {
                        e.type = t, e.preventDefault = function () {
                            e.srcEvent.preventDefault()
                        };
                        for (var o = 0; o < i.length;)i[o](e), o++
                    }
                }, destroy: function () {
                    this.element && pt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                }
            }, mt(ct, {
                INPUT_START: Rt,
                INPUT_MOVE: Lt,
                INPUT_END: zt,
                INPUT_CANCEL: At,
                STATE_POSSIBLE: ge,
                STATE_BEGAN: ye,
                STATE_CHANGED: be,
                STATE_ENDED: _e,
                STATE_RECOGNIZED: we,
                STATE_CANCELLED: xe,
                STATE_FAILED: ke,
                DIRECTION_NONE: Bt,
                DIRECTION_LEFT: jt,
                DIRECTION_RIGHT: Ft,
                DIRECTION_UP: Ht,
                DIRECTION_DOWN: Wt,
                DIRECTION_HORIZONTAL: Yt,
                DIRECTION_VERTICAL: Gt,
                DIRECTION_ALL: Vt,
                Manager: ut,
                Input: C,
                TouchAction: J,
                TouchInput: V,
                MouseInput: H,
                PointerEventInput: W,
                TouchMouseInput: q,
                SingleTouchInput: Y,
                Recognizer: tt,
                AttrRecognizer: nt,
                Tap: lt,
                Pan: st,
                Swipe: dt,
                Pinch: rt,
                Rotate: ht,
                Press: at,
                on: v,
                off: g,
                each: l,
                merge: kt,
                extend: xt,
                assign: mt,
                inherit: u,
                bindFn: p,
                prefixed: O
            });
            var Se = "undefined" != typeof n ? n : "undefined" != typeof self ? self : {};
            Se.Hammer = ct, o = function () {
                return ct
            }.call(e, i, e, t), !(o !== a && (t.exports = o))
        }(window, document, "Hammer")
    }, function (t, e, i) {
        var o, n, s;
        !function (i, r) {
            n = [], o = r, s = "function" == typeof o ? o.apply(e, n) : o, !(void 0 !== s && (t.exports = s))
        }(this, function () {
            function t(t) {
                var e, i = t && t.preventDefault || !1, o = t && t.container || window, n = {}, s = {
                    keydown: {},
                    keyup: {}
                }, r = {};
                for (e = 97; e <= 122; e++)r[String.fromCharCode(e)] = {code: 65 + (e - 97), shift: !1};
                for (e = 65; e <= 90; e++)r[String.fromCharCode(e)] = {code: e, shift: !0};
                for (e = 0; e <= 9; e++)r["" + e] = {code: 48 + e, shift: !1};
                for (e = 1; e <= 12; e++)r["F" + e] = {code: 111 + e, shift: !1};
                for (e = 0; e <= 9; e++)r["num" + e] = {code: 96 + e, shift: !1};
                r["num*"] = {code: 106, shift: !1}, r["num+"] = {code: 107, shift: !1}, r["num-"] = {
                    code: 109,
                    shift: !1
                }, r["num/"] = {code: 111, shift: !1}, r["num."] = {code: 110, shift: !1}, r.left = {
                    code: 37,
                    shift: !1
                }, r.up = {code: 38, shift: !1}, r.right = {code: 39, shift: !1}, r.down = {
                    code: 40,
                    shift: !1
                }, r.space = {code: 32, shift: !1}, r.enter = {code: 13, shift: !1}, r.shift = {
                    code: 16,
                    shift: void 0
                }, r.esc = {code: 27, shift: !1}, r.backspace = {code: 8, shift: !1}, r.tab = {
                    code: 9,
                    shift: !1
                }, r.ctrl = {code: 17, shift: !1}, r.alt = {code: 18, shift: !1}, r.delete = {
                    code: 46,
                    shift: !1
                }, r.pageup = {code: 33, shift: !1}, r.pagedown = {code: 34, shift: !1}, r["="] = {
                    code: 187,
                    shift: !1
                }, r["-"] = {code: 189, shift: !1}, r["]"] = {code: 221, shift: !1}, r["["] = {code: 219, shift: !1};
                var a = function (t) {
                    d(t, "keydown")
                }, h = function (t) {
                    d(t, "keyup")
                }, d = function (t, e) {
                    if (void 0 !== s[e][t.keyCode]) {
                        for (var o = s[e][t.keyCode], n = 0; n < o.length; n++)void 0 === o[n].shift ? o[n].fn(t) : 1 == o[n].shift && 1 == t.shiftKey ? o[n].fn(t) : 0 == o[n].shift && 0 == t.shiftKey && o[n].fn(t);
                        1 == i && t.preventDefault()
                    }
                };
                return n.bind = function (t, e, i) {
                    if (void 0 === i && (i = "keydown"), void 0 === r[t])throw new Error("unsupported key: " + t);
                    void 0 === s[i][r[t].code] && (s[i][r[t].code] = []), s[i][r[t].code].push({
                        fn: e,
                        shift: r[t].shift
                    })
                }, n.bindAll = function (t, e) {
                    void 0 === e && (e = "keydown");
                    for (var i in r)r.hasOwnProperty(i) && n.bind(i, t, e)
                }, n.getKey = function (t) {
                    for (var e in r)if (r.hasOwnProperty(e)) {
                        if (1 == t.shiftKey && 1 == r[e].shift && t.keyCode == r[e].code)return e;
                        if (0 == t.shiftKey && 0 == r[e].shift && t.keyCode == r[e].code)return e;
                        if (t.keyCode == r[e].code && "shift" == e)return e
                    }
                    return "unknown key, currently not supported"
                }, n.unbind = function (t, e, i) {
                    if (void 0 === i && (i = "keydown"), void 0 === r[t])throw new Error("unsupported key: " + t);
                    if (void 0 !== e) {
                        var o = [], n = s[i][r[t].code];
                        if (void 0 !== n)for (var a = 0; a < n.length; a++)n[a].fn == e && n[a].shift == r[t].shift || o.push(s[i][r[t].code][a]);
                        s[i][r[t].code] = o
                    } else s[i][r[t].code] = []
                }, n.reset = function () {
                    s = {keydown: {}, keyup: {}}
                }, n.destroy = function () {
                    s = {
                        keydown: {},
                        keyup: {}
                    }, o.removeEventListener("keydown", a, !0), o.removeEventListener("keyup", h, !0)
                }, o.addEventListener("keydown", a, !0), o.addEventListener("keyup", h, !0), n
            }

            return t
        })
    }, function (t, e, i) {
        e.util = i(1), e.DOMutil = i(8), e.DataSet = i(9), e.DataView = i(11), e.Queue = i(10), e.Timeline = i(27), e.Graph2d = i(52), e.timeline = {
            Core: i(35),
            DateUtil: i(34),
            Range: i(32),
            stack: i(39),
            TimeStep: i(37),
            components: {
                items: {
                    Item: i(41),
                    BackgroundItem: i(45),
                    BoxItem: i(43),
                    PointItem: i(44),
                    RangeItem: i(40)
                },
                BackgroundGroup: i(42),
                Component: i(33),
                CurrentTime: i(50),
                CustomTime: i(48),
                DataAxis: i(54),
                DataScale: i(55),
                GraphGroup: i(56),
                Group: i(38),
                ItemSet: i(36),
                Legend: i(60),
                LineGraph: i(53),
                TimeAxis: i(46)
            }
        }, e.moment = i(2), e.Hammer = i(22), e.keycharm = i(25)
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e, i, o) {
            if (!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");
            if (!(Array.isArray(i) || i instanceof c || i instanceof u) && i instanceof Object) {
                var s = o;
                o = i, i = s
            }
            var r = this;
            if (this.defaultOptions = {
                    start: null,
                    end: null,
                    autoResize: !0,
                    orientation: {axis: "bottom", item: "bottom"},
                    moment: d,
                    width: null,
                    height: null,
                    maxHeight: null,
                    minHeight: null
                }, this.options = l.deepExtend({}, this.defaultOptions), this._create(t), !o || o && "undefined" == typeof o.rtl) {
                for (var a, h = this.dom.root; !a && h;)a = window.getComputedStyle(h, null).direction, h = h.parentElement;
                this.options.rtl = a && "rtl" == a.toLowerCase()
            } else this.options.rtl = o.rtl;
            this.components = [], this.body = {
                dom: this.dom,
                domProps: this.props,
                emitter: {on: this.on.bind(this), off: this.off.bind(this), emit: this.emit.bind(this)},
                hiddenDates: [],
                util: {
                    getScale: function () {
                        return r.timeAxis.step.scale
                    },
                    getStep: function () {
                        return r.timeAxis.step.step
                    },
                    toScreen: r._toScreen.bind(r),
                    toGlobalScreen: r._toGlobalScreen.bind(r),
                    toTime: r._toTime.bind(r),
                    toGlobalTime: r._toGlobalTime.bind(r)
                }
            }, this.range = new p(this.body, this.options), this.components.push(this.range), this.body.range = this.range, this.timeAxis = new m(this.body, this.options), this.timeAxis2 = null, this.components.push(this.timeAxis), this.currentTime = new v(this.body, this.options), this.components.push(this.currentTime), this.itemSet = new y(this.body, this.options), this.components.push(this.itemSet), this.itemsData = null, this.groupsData = null, this.on("tap", function (t) {
                r.emit("click", r.getEventProperties(t))
            }), this.on("doubletap", function (t) {
                r.emit("doubleClick", r.getEventProperties(t))
            }), this.dom.root.oncontextmenu = function (t) {
                r.emit("contextmenu", r.getEventProperties(t))
            }, this.fitDone = !1, this.on("changed", function () {
                if (null != this.itemsData && !r.fitDone)if (r.fitDone = !0, void 0 != r.options.start || void 0 != r.options.end) {
                    if (void 0 == r.options.start || void 0 == r.options.end)var t = r.getItemRange();
                    var e = void 0 != r.options.start ? r.options.start : t.min, i = void 0 != r.options.end ? r.options.end : t.max;
                    r.setWindow(e, i, {animation: !1})
                } else r.fit({animation: !1})
            }), o && this.setOptions(o), i && this.setGroups(i), e && this.setItems(e), this._redraw()
        }

        var s = i(28), r = o(s), a = i(31), h = o(a), d = (i(13), i(22), i(2)), l = i(1), c = i(9), u = i(11), p = i(32), f = i(35), m = i(46), v = i(50), g = i(48), y = i(36), b = i(31).printStyle, _ = i(51).allOptions, w = i(51).configureOptions;
        n.prototype = new f, n.prototype._createConfigurator = function () {
            return new r.default(this, this.dom.container, w)
        }, n.prototype.redraw = function () {
            this.itemSet && this.itemSet.markDirty({refreshItems: !0}), this._redraw()
        }, n.prototype.setOptions = function (t) {
            var e = h.default.validate(t, _);
            if (e === !0 && console.log("%cErrors have been found in the supplied options object.", b), f.prototype.setOptions.call(this, t), "type"in t && t.type !== this.options.type) {
                this.options.type = t.type;
                var i = this.itemsData;
                if (i) {
                    var o = this.getSelection();
                    this.setItems(null), this.setItems(i), this.setSelection(o)
                }
            }
        }, n.prototype.setItems = function (t) {
            var e;
            e = t ? t instanceof c || t instanceof u ? t : new c(t, {
                type: {
                    start: "Date",
                    end: "Date"
                }
            }) : null, this.itemsData = e, this.itemSet && this.itemSet.setItems(e)
        }, n.prototype.setGroups = function (t) {
            var e;
            e = t ? t instanceof c || t instanceof u ? t : new c(t) : null, this.groupsData = e, this.itemSet.setGroups(e)
        }, n.prototype.setData = function (t) {
            t && t.groups && this.setGroups(t.groups), t && t.items && this.setItems(t.items)
        }, n.prototype.setSelection = function (t, e) {
            this.itemSet && this.itemSet.setSelection(t), e && e.focus && this.focus(t, e)
        }, n.prototype.getSelection = function () {
            return this.itemSet && this.itemSet.getSelection() || []
        }, n.prototype.focus = function (t, e) {
            if (this.itemsData && void 0 != t) {
                var i = Array.isArray(t) ? t : [t], o = this.itemsData.getDataSet().get(i, {
                    type: {
                        start: "Date",
                        end: "Date"
                    }
                }), n = null, s = null;
                if (o.forEach(function (t) {
                        var e = t.start.valueOf(), i = "end"in t ? t.end.valueOf() : t.start.valueOf();
                        (null === n || e < n) && (n = e), (null === s || i > s) && (s = i)
                    }), null !== n && null !== s) {
                    var r = (n + s) / 2, a = Math.max(this.range.end - this.range.start, 1.1 * (s - n)), h = !e || void 0 === e.animation || e.animation;
                    this.range.setRange(r - a / 2, r + a / 2, h)
                }
            }
        }, n.prototype.fit = function (t) {
            var e, i = !t || void 0 === t.animation || t.animation, o = this.itemsData && this.itemsData.getDataSet();
            1 === o.length && void 0 === o.get()[0].end ? (e = this.getDataRange(), this.moveTo(e.min.valueOf(), {animation: i})) : (e = this.getItemRange(), this.range.setRange(e.min, e.max, i))
        }, n.prototype.getItemRange = function () {
            var t = this, e = this.getDataRange(), i = null !== e.min ? e.min.valueOf() : null, o = null !== e.max ? e.max.valueOf() : null, n = null, s = null;
            if (null != i && null != o) {
                var r, a, h, d, c;
                !function () {
                    var e = function (t) {
                        return l.convert(t.data.start, "Date").valueOf()
                    }, u = function (t) {
                        var e = void 0 != t.data.end ? t.data.end : t.data.start;
                        return l.convert(e, "Date").valueOf()
                    };
                    r = o - i, r <= 0 && (r = 10), a = r / t.props.center.width, l.forEach(t.itemSet.items, function (t) {
                        t.show(), t.repositionX();
                        var r = e(t), h = u(t);
                        if (this.options.rtl)var d = r - (t.getWidthRight() + 10) * a, l = h + (t.getWidthLeft() + 10) * a; else var d = r - (t.getWidthLeft() + 10) * a, l = h + (t.getWidthRight() + 10) * a;
                        d < i && (i = d, n = t), l > o && (o = l, s = t)
                    }.bind(t)), n && s && (h = n.getWidthLeft() + 10, d = s.getWidthRight() + 10, c = t.props.center.width - h - d, c > 0 && (t.options.rtl ? (i = e(n) - d * r / c, o = u(s) + h * r / c) : (i = e(n) - h * r / c, o = u(s) + d * r / c)))
                }()
            }
            return {min: null != i ? new Date(i) : null, max: null != o ? new Date(o) : null}
        }, n.prototype.getDataRange = function () {
            var t = null, e = null, i = this.itemsData && this.itemsData.getDataSet();
            return i && i.forEach(function (i) {
                var o = l.convert(i.start, "Date").valueOf(), n = l.convert(void 0 != i.end ? i.end : i.start, "Date").valueOf();
                (null === t || o < t) && (t = o), (null === e || n > e) && (e = n)
            }), {min: null != t ? new Date(t) : null, max: null != e ? new Date(e) : null}
        }, n.prototype.getEventProperties = function (t) {
            var e = t.center ? t.center.x : t.clientX, i = t.center ? t.center.y : t.clientY;
            if (this.options.rtl)var o = l.getAbsoluteRight(this.dom.centerContainer) - e; else var o = e - l.getAbsoluteLeft(this.dom.centerContainer);
            var n = i - l.getAbsoluteTop(this.dom.centerContainer), s = this.itemSet.itemFromTarget(t), r = this.itemSet.groupFromTarget(t), a = g.customTimeFromTarget(t), h = this.itemSet.options.snap || null, d = this.body.util.getScale(), c = this.body.util.getStep(), u = this._toTime(o), p = h ? h(u, d, c) : u, f = l.getTarget(t), m = null;
            return null != s ? m = "item" : null != a ? m = "custom-time" : l.hasParent(f, this.timeAxis.dom.foreground) ? m = "axis" : this.timeAxis2 && l.hasParent(f, this.timeAxis2.dom.foreground) ? m = "axis" : l.hasParent(f, this.itemSet.dom.labelSet) ? m = "group-label" : l.hasParent(f, this.currentTime.bar) ? m = "current-time" : l.hasParent(f, this.dom.center) && (m = "background"), {
                event: t,
                item: s ? s.id : null,
                group: r ? r.groupId : null,
                what: m,
                pageX: t.srcEvent ? t.srcEvent.pageX : t.pageX,
                pageY: t.srcEvent ? t.srcEvent.pageY : t.pageY,
                x: o,
                y: n,
                time: u,
                snappedTime: p
            }
        }, t.exports = n
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), a = i(29), h = o(a), d = i(1), l = function () {
            function t(e, i, o) {
                var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                n(this, t), this.parent = e, this.changedOptions = [], this.container = i, this.allowCreation = !1, this.options = {}, this.initialized = !1, this.popupCounter = 0, this.defaultOptions = {
                    enabled: !1,
                    filter: !0,
                    container: void 0,
                    showButton: !0
                }, d.extend(this.options, this.defaultOptions), this.configureOptions = o, this.moduleOptions = {}, this.domElements = [], this.popupDiv = {}, this.popupLimit = 5, this.popupHistory = {}, this.colorPicker = new h.default(s), this.wrapper = void 0
            }

            return r(t, [{
                key: "setOptions", value: function (t) {
                    if (void 0 !== t) {
                        this.popupHistory = {}, this._removePopup();
                        var e = !0;
                        "string" == typeof t ? this.options.filter = t : t instanceof Array ? this.options.filter = t.join() : "object" === ("undefined" == typeof t ? "undefined" : s(t)) ? (void 0 !== t.container && (this.options.container = t.container), void 0 !== t.filter && (this.options.filter = t.filter), void 0 !== t.showButton && (this.options.showButton = t.showButton), void 0 !== t.enabled && (e = t.enabled)) : "boolean" == typeof t ? (this.options.filter = !0, e = t) : "function" == typeof t && (this.options.filter = t, e = !0), this.options.filter === !1 && (e = !1), this.options.enabled = e
                    }
                    this._clean()
                }
            }, {
                key: "setModuleOptions", value: function (t) {
                    this.moduleOptions = t, this.options.enabled === !0 && (this._clean(), void 0 !== this.options.container && (this.container = this.options.container), this._create())
                }
            }, {
                key: "_create", value: function () {
                    var t = this;
                    this._clean(), this.changedOptions = [];
                    var e = this.options.filter, i = 0, o = !1;
                    for (var n in this.configureOptions)this.configureOptions.hasOwnProperty(n) && (this.allowCreation = !1, o = !1, "function" == typeof e ? (o = e(n, []), o = o || this._handleObject(this.configureOptions[n], [n], !0)) : e !== !0 && e.indexOf(n) === -1 || (o = !0), o !== !1 && (this.allowCreation = !0, i > 0 && this._makeItem([]), this._makeHeader(n), this._handleObject(this.configureOptions[n], [n])), i++);
                    this.options.showButton === !0 && !function () {
                        var e = document.createElement("div");
                        e.className = "vis-configuration vis-config-button", e.innerHTML = "generate options", e.onclick = function () {
                            t._printOptions()
                        }, e.onmouseover = function () {
                            e.className = "vis-configuration vis-config-button hover"
                        }, e.onmouseout = function () {
                            e.className = "vis-configuration vis-config-button"
                        }, t.optionsContainer = document.createElement("div"), t.optionsContainer.className = "vis-configuration vis-config-option-container", t.domElements.push(t.optionsContainer), t.domElements.push(e)
                    }(), this._push()
                }
            }, {
                key: "_push", value: function () {
                    this.wrapper = document.createElement("div"), this.wrapper.className = "vis-configuration-wrapper", this.container.appendChild(this.wrapper);
                    for (var t = 0; t < this.domElements.length; t++)this.wrapper.appendChild(this.domElements[t]);
                    this._showPopupIfNeeded()
                }
            }, {
                key: "_clean", value: function () {
                    for (var t = 0; t < this.domElements.length; t++)this.wrapper.removeChild(this.domElements[t]);
                    void 0 !== this.wrapper && (this.container.removeChild(this.wrapper),
                        this.wrapper = void 0), this.domElements = [], this._removePopup()
                }
            }, {
                key: "_getValue", value: function (t) {
                    for (var e = this.moduleOptions, i = 0; i < t.length; i++) {
                        if (void 0 === e[t[i]]) {
                            e = void 0;
                            break
                        }
                        e = e[t[i]]
                    }
                    return e
                }
            }, {
                key: "_makeItem", value: function (t) {
                    var e = arguments, i = this;
                    if (this.allowCreation === !0) {
                        var o, n, r, a = function () {
                            var s = document.createElement("div");
                            for (s.className = "vis-configuration vis-config-item vis-config-s" + t.length, o = e.length, n = Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)n[r - 1] = e[r];
                            return n.forEach(function (t) {
                                s.appendChild(t)
                            }), i.domElements.push(s), {v: i.domElements.length}
                        }();
                        if ("object" === ("undefined" == typeof a ? "undefined" : s(a)))return a.v
                    }
                    return 0
                }
            }, {
                key: "_makeHeader", value: function (t) {
                    var e = document.createElement("div");
                    e.className = "vis-configuration vis-config-header", e.innerHTML = t, this._makeItem([], e)
                }
            }, {
                key: "_makeLabel", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = document.createElement("div");
                    return o.className = "vis-configuration vis-config-label vis-config-s" + e.length, i === !0 ? o.innerHTML = "<i><b>" + t + ":</b></i>" : o.innerHTML = t + ":", o
                }
            }, {
                key: "_makeDropdown", value: function (t, e, i) {
                    var o = document.createElement("select");
                    o.className = "vis-configuration vis-config-select";
                    var n = 0;
                    void 0 !== e && t.indexOf(e) !== -1 && (n = t.indexOf(e));
                    for (var s = 0; s < t.length; s++) {
                        var r = document.createElement("option");
                        r.value = t[s], s === n && (r.selected = "selected"), r.innerHTML = t[s], o.appendChild(r)
                    }
                    var a = this;
                    o.onchange = function () {
                        a._update(this.value, i)
                    };
                    var h = this._makeLabel(i[i.length - 1], i);
                    this._makeItem(i, h, o)
                }
            }, {
                key: "_makeRange", value: function (t, e, i) {
                    var o = t[0], n = t[1], s = t[2], r = t[3], a = document.createElement("input");
                    a.className = "vis-configuration vis-config-range";
                    try {
                        a.type = "range", a.min = n, a.max = s
                    } catch (t) {
                    }
                    a.step = r;
                    var h = "", d = 0;
                    if (void 0 !== e) {
                        var l = 1.2;
                        e < 0 && e * l < n ? (a.min = Math.ceil(e * l), d = a.min, h = "range increased") : e / l < n && (a.min = Math.ceil(e / l), d = a.min, h = "range increased"), e * l > s && 1 !== s && (a.max = Math.ceil(e * l), d = a.max, h = "range increased"), a.value = e
                    } else a.value = o;
                    var c = document.createElement("input");
                    c.className = "vis-configuration vis-config-rangeinput", c.value = a.value;
                    var u = this;
                    a.onchange = function () {
                        c.value = this.value, u._update(Number(this.value), i)
                    }, a.oninput = function () {
                        c.value = this.value
                    };
                    var p = this._makeLabel(i[i.length - 1], i), f = this._makeItem(i, p, a, c);
                    "" !== h && this.popupHistory[f] !== d && (this.popupHistory[f] = d, this._setupPopup(h, f))
                }
            }, {
                key: "_setupPopup", value: function (t, e) {
                    var i = this;
                    if (this.initialized === !0 && this.allowCreation === !0 && this.popupCounter < this.popupLimit) {
                        var o = document.createElement("div");
                        o.id = "vis-configuration-popup", o.className = "vis-configuration-popup", o.innerHTML = t, o.onclick = function () {
                            i._removePopup()
                        }, this.popupCounter += 1, this.popupDiv = {html: o, index: e}
                    }
                }
            }, {
                key: "_removePopup", value: function () {
                    void 0 !== this.popupDiv.html && (this.popupDiv.html.parentNode.removeChild(this.popupDiv.html), clearTimeout(this.popupDiv.hideTimeout), clearTimeout(this.popupDiv.deleteTimeout), this.popupDiv = {})
                }
            }, {
                key: "_showPopupIfNeeded", value: function () {
                    var t = this;
                    if (void 0 !== this.popupDiv.html) {
                        var e = this.domElements[this.popupDiv.index], i = e.getBoundingClientRect();
                        this.popupDiv.html.style.left = i.left + "px", this.popupDiv.html.style.top = i.top - 30 + "px", document.body.appendChild(this.popupDiv.html), this.popupDiv.hideTimeout = setTimeout(function () {
                            t.popupDiv.html.style.opacity = 0
                        }, 1500), this.popupDiv.deleteTimeout = setTimeout(function () {
                            t._removePopup()
                        }, 1800)
                    }
                }
            }, {
                key: "_makeCheckbox", value: function (t, e, i) {
                    var o = document.createElement("input");
                    o.type = "checkbox", o.className = "vis-configuration vis-config-checkbox", o.checked = t, void 0 !== e && (o.checked = e, e !== t && ("object" === ("undefined" == typeof t ? "undefined" : s(t)) ? e !== t.enabled && this.changedOptions.push({
                        path: i,
                        value: e
                    }) : this.changedOptions.push({path: i, value: e})));
                    var n = this;
                    o.onchange = function () {
                        n._update(this.checked, i)
                    };
                    var r = this._makeLabel(i[i.length - 1], i);
                    this._makeItem(i, r, o)
                }
            }, {
                key: "_makeTextInput", value: function (t, e, i) {
                    var o = document.createElement("input");
                    o.type = "text", o.className = "vis-configuration vis-config-text", o.value = e, e !== t && this.changedOptions.push({
                        path: i,
                        value: e
                    });
                    var n = this;
                    o.onchange = function () {
                        n._update(this.value, i)
                    };
                    var s = this._makeLabel(i[i.length - 1], i);
                    this._makeItem(i, s, o)
                }
            }, {
                key: "_makeColorField", value: function (t, e, i) {
                    var o = this, n = t[1], s = document.createElement("div");
                    e = void 0 === e ? n : e, "none" !== e ? (s.className = "vis-configuration vis-config-colorBlock", s.style.backgroundColor = e) : s.className = "vis-configuration vis-config-colorBlock none", e = void 0 === e ? n : e, s.onclick = function () {
                        o._showColorPicker(e, s, i)
                    };
                    var r = this._makeLabel(i[i.length - 1], i);
                    this._makeItem(i, r, s)
                }
            }, {
                key: "_showColorPicker", value: function (t, e, i) {
                    var o = this;
                    e.onclick = function () {
                    }, this.colorPicker.insertTo(e), this.colorPicker.show(), this.colorPicker.setColor(t), this.colorPicker.setUpdateCallback(function (t) {
                        var n = "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
                        e.style.backgroundColor = n, o._update(n, i)
                    }), this.colorPicker.setCloseCallback(function () {
                        e.onclick = function () {
                            o._showColorPicker(t, e, i)
                        }
                    })
                }
            }, {
                key: "_handleObject", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = !1, n = this.options.filter, s = !1;
                    for (var r in t)if (t.hasOwnProperty(r)) {
                        o = !0;
                        var a = t[r], h = d.copyAndExtendArray(e, r);
                        if ("function" == typeof n && (o = n(r, e), o === !1 && !(a instanceof Array) && "string" != typeof a && "boolean" != typeof a && a instanceof Object && (this.allowCreation = !1, o = this._handleObject(a, h, !0), this.allowCreation = i === !1)), o !== !1) {
                            s = !0;
                            var l = this._getValue(h);
                            if (a instanceof Array)this._handleArray(a, l, h); else if ("string" == typeof a)this._makeTextInput(a, l, h); else if ("boolean" == typeof a)this._makeCheckbox(a, l, h); else if (a instanceof Object) {
                                var c = !0;
                                if (e.indexOf("physics") !== -1 && this.moduleOptions.physics.solver !== r && (c = !1), c === !0)if (void 0 !== a.enabled) {
                                    var u = d.copyAndExtendArray(h, "enabled"), p = this._getValue(u);
                                    if (p === !0) {
                                        var f = this._makeLabel(r, h, !0);
                                        this._makeItem(h, f), s = this._handleObject(a, h) || s
                                    } else this._makeCheckbox(a, p, h)
                                } else {
                                    var m = this._makeLabel(r, h, !0);
                                    this._makeItem(h, m), s = this._handleObject(a, h) || s
                                }
                            } else console.error("dont know how to handle", a, r, h)
                        }
                    }
                    return s
                }
            }, {
                key: "_handleArray", value: function (t, e, i) {
                    "string" == typeof t[0] && "color" === t[0] ? (this._makeColorField(t, e, i), t[1] !== e && this.changedOptions.push({
                        path: i,
                        value: e
                    })) : "string" == typeof t[0] ? (this._makeDropdown(t, e, i), t[0] !== e && this.changedOptions.push({
                        path: i,
                        value: e
                    })) : "number" == typeof t[0] && (this._makeRange(t, e, i), t[0] !== e && this.changedOptions.push({
                        path: i,
                        value: Number(e)
                    }))
                }
            }, {
                key: "_update", value: function (t, e) {
                    var i = this._constructOptions(t, e);
                    this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit && this.parent.body.emitter.emit("configChange", i), this.initialized = !0, this.parent.setOptions(i)
                }
            }, {
                key: "_constructOptions", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = i;
                    t = "true" === t || t, t = "false" !== t && t;
                    for (var n = 0; n < e.length; n++)"global" !== e[n] && (void 0 === o[e[n]] && (o[e[n]] = {}), n !== e.length - 1 ? o = o[e[n]] : o[e[n]] = t);
                    return i
                }
            }, {
                key: "_printOptions", value: function () {
                    var t = this.getOptions();
                    this.optionsContainer.innerHTML = "<pre>var options = " + JSON.stringify(t, null, 2) + "</pre>"
                }
            }, {
                key: "getOptions", value: function () {
                    for (var t = {}, e = 0; e < this.changedOptions.length; e++)this._constructOptions(this.changedOptions[e].value, this.changedOptions[e].path, t);
                    return t
                }
            }]), t
        }();
        e.default = l
    }, function (t, e, i) {
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), s = i(22), r = i(30), a = i(1), h = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                o(this, t), this.pixelRatio = e, this.generated = !1, this.centerCoordinates = {
                    x: 144.5,
                    y: 144.5
                }, this.r = 289 * .49, this.color = {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                }, this.hueCircle = void 0, this.initialColor = {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                }, this.previousColor = void 0, this.applied = !1, this.updateCallback = function () {
                }, this.closeCallback = function () {
                }, this._create()
            }

            return n(t, [{
                key: "insertTo", value: function (t) {
                    void 0 !== this.hammer && (this.hammer.destroy(), this.hammer = void 0), this.container = t, this.container.appendChild(this.frame), this._bindHammer(), this._setSize()
                }
            }, {
                key: "setUpdateCallback", value: function (t) {
                    if ("function" != typeof t)throw new Error("Function attempted to set as colorPicker update callback is not a function.");
                    this.updateCallback = t
                }
            }, {
                key: "setCloseCallback", value: function (t) {
                    if ("function" != typeof t)throw new Error("Function attempted to set as colorPicker closing callback is not a function.");
                    this.closeCallback = t
                }
            }, {
                key: "_isColorString", value: function (t) {
                    var e = {
                        black: "#000000",
                        navy: "#000080",
                        darkblue: "#00008B",
                        mediumblue: "#0000CD",
                        blue: "#0000FF",
                        darkgreen: "#006400",
                        green: "#008000",
                        teal: "#008080",
                        darkcyan: "#008B8B",
                        deepskyblue: "#00BFFF",
                        darkturquoise: "#00CED1",
                        mediumspringgreen: "#00FA9A",
                        lime: "#00FF00",
                        springgreen: "#00FF7F",
                        aqua: "#00FFFF",
                        cyan: "#00FFFF",
                        midnightblue: "#191970",
                        dodgerblue: "#1E90FF",
                        lightseagreen: "#20B2AA",
                        forestgreen: "#228B22",
                        seagreen: "#2E8B57",
                        darkslategray: "#2F4F4F",
                        limegreen: "#32CD32",
                        mediumseagreen: "#3CB371",
                        turquoise: "#40E0D0",
                        royalblue: "#4169E1",
                        steelblue: "#4682B4",
                        darkslateblue: "#483D8B",
                        mediumturquoise: "#48D1CC",
                        indigo: "#4B0082",
                        darkolivegreen: "#556B2F",
                        cadetblue: "#5F9EA0",
                        cornflowerblue: "#6495ED",
                        mediumaquamarine: "#66CDAA",
                        dimgray: "#696969",
                        slateblue: "#6A5ACD",
                        olivedrab: "#6B8E23",
                        slategray: "#708090",
                        lightslategray: "#778899",
                        mediumslateblue: "#7B68EE",
                        lawngreen: "#7CFC00",
                        chartreuse: "#7FFF00",
                        aquamarine: "#7FFFD4",
                        maroon: "#800000",
                        purple: "#800080",
                        olive: "#808000",
                        gray: "#808080",
                        skyblue: "#87CEEB",
                        lightskyblue: "#87CEFA",
                        blueviolet: "#8A2BE2",
                        darkred: "#8B0000",
                        darkmagenta: "#8B008B",
                        saddlebrown: "#8B4513",
                        darkseagreen: "#8FBC8F",
                        lightgreen: "#90EE90",
                        mediumpurple: "#9370D8",
                        darkviolet: "#9400D3",
                        palegreen: "#98FB98",
                        darkorchid: "#9932CC",
                        yellowgreen: "#9ACD32",
                        sienna: "#A0522D",
                        brown: "#A52A2A",
                        darkgray: "#A9A9A9",
                        lightblue: "#ADD8E6",
                        greenyellow: "#ADFF2F",
                        paleturquoise: "#AFEEEE",
                        lightsteelblue: "#B0C4DE",
                        powderblue: "#B0E0E6",
                        firebrick: "#B22222",
                        darkgoldenrod: "#B8860B",
                        mediumorchid: "#BA55D3",
                        rosybrown: "#BC8F8F",
                        darkkhaki: "#BDB76B",
                        silver: "#C0C0C0",
                        mediumvioletred: "#C71585",
                        indianred: "#CD5C5C",
                        peru: "#CD853F",
                        chocolate: "#D2691E",
                        tan: "#D2B48C",
                        lightgrey: "#D3D3D3",
                        palevioletred: "#D87093",
                        thistle: "#D8BFD8",
                        orchid: "#DA70D6",
                        goldenrod: "#DAA520",
                        crimson: "#DC143C",
                        gainsboro: "#DCDCDC",
                        plum: "#DDA0DD",
                        burlywood: "#DEB887",
                        lightcyan: "#E0FFFF",
                        lavender: "#E6E6FA",
                        darksalmon: "#E9967A",
                        violet: "#EE82EE",
                        palegoldenrod: "#EEE8AA",
                        lightcoral: "#F08080",
                        khaki: "#F0E68C",
                        aliceblue: "#F0F8FF",
                        honeydew: "#F0FFF0",
                        azure: "#F0FFFF",
                        sandybrown: "#F4A460",
                        wheat: "#F5DEB3",
                        beige: "#F5F5DC",
                        whitesmoke: "#F5F5F5",
                        mintcream: "#F5FFFA",
                        ghostwhite: "#F8F8FF",
                        salmon: "#FA8072",
                        antiquewhite: "#FAEBD7",
                        linen: "#FAF0E6",
                        lightgoldenrodyellow: "#FAFAD2",
                        oldlace: "#FDF5E6",
                        red: "#FF0000",
                        fuchsia: "#FF00FF",
                        magenta: "#FF00FF",
                        deeppink: "#FF1493",
                        orangered: "#FF4500",
                        tomato: "#FF6347",
                        hotpink: "#FF69B4",
                        coral: "#FF7F50",
                        darkorange: "#FF8C00",
                        lightsalmon: "#FFA07A",
                        orange: "#FFA500",
                        lightpink: "#FFB6C1",
                        pink: "#FFC0CB",
                        gold: "#FFD700",
                        peachpuff: "#FFDAB9",
                        navajowhite: "#FFDEAD",
                        moccasin: "#FFE4B5",
                        bisque: "#FFE4C4",
                        mistyrose: "#FFE4E1",
                        blanchedalmond: "#FFEBCD",
                        papayawhip: "#FFEFD5",
                        lavenderblush: "#FFF0F5",
                        seashell: "#FFF5EE",
                        cornsilk: "#FFF8DC",
                        lemonchiffon: "#FFFACD",
                        floralwhite: "#FFFAF0",
                        snow: "#FFFAFA",
                        yellow: "#FFFF00",
                        lightyellow: "#FFFFE0",
                        ivory: "#FFFFF0",
                        white: "#FFFFFF"
                    };
                    if ("string" == typeof t)return e[t]
                }
            }, {
                key: "setColor", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if ("none" !== t) {
                        var i = void 0, o = this._isColorString(t);
                        if (void 0 !== o && (t = o), a.isString(t) === !0) {
                            if (a.isValidRGB(t) === !0) {
                                var n = t.substr(4).substr(0, t.length - 5).split(",");
                                i = {r: n[0], g: n[1], b: n[2], a: 1}
                            } else if (a.isValidRGBA(t) === !0) {
                                var s = t.substr(5).substr(0, t.length - 6).split(",");
                                i = {r: s[0], g: s[1], b: s[2], a: s[3]}
                            } else if (a.isValidHex(t) === !0) {
                                var r = a.hexToRGB(t);
                                i = {r: r.r, g: r.g, b: r.b, a: 1}
                            }
                        } else if (t instanceof Object && void 0 !== t.r && void 0 !== t.g && void 0 !== t.b) {
                            var h = void 0 !== t.a ? t.a : "1.0";
                            i = {r: t.r, g: t.g, b: t.b, a: h}
                        }
                        if (void 0 === i)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " + JSON.stringify(t));
                        this._setColor(i, e)
                    }
                }
            }, {
                key: "show", value: function () {
                    void 0 !== this.closeCallback && (this.closeCallback(), this.closeCallback = void 0), this.applied = !1, this.frame.style.display = "block", this._generateHueCircle()
                }
            }, {
                key: "_hide", value: function () {
                    var t = this, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    e === !0 && (this.previousColor = a.extend({}, this.color)), this.applied === !0 && this.updateCallback(this.initialColor), this.frame.style.display = "none", setTimeout(function () {
                        void 0 !== t.closeCallback && (t.closeCallback(), t.closeCallback = void 0)
                    }, 0)
                }
            }, {
                key: "_save", value: function () {
                    this.updateCallback(this.color), this.applied = !1, this._hide()
                }
            }, {
                key: "_apply", value: function () {
                    this.applied = !0, this.updateCallback(this.color), this._updatePicker(this.color)
                }
            }, {
                key: "_loadLast", value: function () {
                    void 0 !== this.previousColor ? this.setColor(this.previousColor, !1) : alert("There is no last color to load...")
                }
            }, {
                key: "_setColor", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    e === !0 && (this.initialColor = a.extend({}, t)), this.color = t;
                    var i = a.RGBToHSV(t.r, t.g, t.b), o = 2 * Math.PI, n = this.r * i.s, s = this.centerCoordinates.x + n * Math.sin(o * i.h), r = this.centerCoordinates.y + n * Math.cos(o * i.h);
                    this.colorPickerSelector.style.left = s - .5 * this.colorPickerSelector.clientWidth + "px", this.colorPickerSelector.style.top = r - .5 * this.colorPickerSelector.clientHeight + "px", this._updatePicker(t)
                }
            }, {
                key: "_setOpacity", value: function (t) {
                    this.color.a = t / 100, this._updatePicker(this.color)
                }
            }, {
                key: "_setBrightness", value: function (t) {
                    var e = a.RGBToHSV(this.color.r, this.color.g, this.color.b);
                    e.v = t / 100;
                    var i = a.HSVToRGB(e.h, e.s, e.v);
                    i.a = this.color.a, this.color = i, this._updatePicker()
                }
            }, {
                key: "_updatePicker", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.color, e = a.RGBToHSV(t.r, t.g, t.b), i = this.colorPickerCanvas.getContext("2d");
                    void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1)), i.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
                    var o = this.colorPickerCanvas.clientWidth, n = this.colorPickerCanvas.clientHeight;
                    i.clearRect(0, 0, o, n), i.putImageData(this.hueCircle, 0, 0), i.fillStyle = "rgba(0,0,0," + (1 - e.v) + ")", i.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), i.fill(), this.brightnessRange.value = 100 * e.v, this.opacityRange.value = 100 * t.a, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")"
                }
            }, {
                key: "_setSize", value: function () {
                    this.colorPickerCanvas.style.width = "100%", this.colorPickerCanvas.style.height = "100%", this.colorPickerCanvas.width = 289 * this.pixelRatio, this.colorPickerCanvas.height = 289 * this.pixelRatio
                }
            }, {
                key: "_create", value: function () {
                    if (this.frame = document.createElement("div"), this.frame.className = "vis-color-picker", this.colorPickerDiv = document.createElement("div"), this.colorPickerSelector = document.createElement("div"), this.colorPickerSelector.className = "vis-selector", this.colorPickerDiv.appendChild(this.colorPickerSelector), this.colorPickerCanvas = document.createElement("canvas"), this.colorPickerDiv.appendChild(this.colorPickerCanvas), this.colorPickerCanvas.getContext) {
                        var t = this.colorPickerCanvas.getContext("2d");
                        this.pixelRatio = (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1), this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0)
                    } else {
                        var e = document.createElement("DIV");
                        e.style.color = "red", e.style.fontWeight = "bold", e.style.padding = "10px", e.innerHTML = "Error: your browser does not support HTML canvas", this.colorPickerCanvas.appendChild(e)
                    }
                    this.colorPickerDiv.className = "vis-color", this.opacityDiv = document.createElement("div"), this.opacityDiv.className = "vis-opacity", this.brightnessDiv = document.createElement("div"), this.brightnessDiv.className = "vis-brightness", this.arrowDiv = document.createElement("div"), this.arrowDiv.className = "vis-arrow", this.opacityRange = document.createElement("input");
                    try {
                        this.opacityRange.type = "range", this.opacityRange.min = "0", this.opacityRange.max = "100"
                    } catch (t) {
                    }
                    this.opacityRange.value = "100", this.opacityRange.className = "vis-range", this.brightnessRange = document.createElement("input");
                    try {
                        this.brightnessRange.type = "range", this.brightnessRange.min = "0", this.brightnessRange.max = "100"
                    } catch (t) {
                    }
                    this.brightnessRange.value = "100", this.brightnessRange.className = "vis-range", this.opacityDiv.appendChild(this.opacityRange), this.brightnessDiv.appendChild(this.brightnessRange);
                    var i = this;
                    this.opacityRange.onchange = function () {
                        i._setOpacity(this.value)
                    }, this.opacityRange.oninput = function () {
                        i._setOpacity(this.value)
                    }, this.brightnessRange.onchange = function () {
                        i._setBrightness(this.value)
                    }, this.brightnessRange.oninput = function () {
                        i._setBrightness(this.value)
                    }, this.brightnessLabel = document.createElement("div"), this.brightnessLabel.className = "vis-label vis-brightness", this.brightnessLabel.innerHTML = "brightness:", this.opacityLabel = document.createElement("div"), this.opacityLabel.className = "vis-label vis-opacity", this.opacityLabel.innerHTML = "opacity:", this.newColorDiv = document.createElement("div"), this.newColorDiv.className = "vis-new-color", this.newColorDiv.innerHTML = "new", this.initialColorDiv = document.createElement("div"), this.initialColorDiv.className = "vis-initial-color", this.initialColorDiv.innerHTML = "initial", this.cancelButton = document.createElement("div"), this.cancelButton.className = "vis-button vis-cancel", this.cancelButton.innerHTML = "cancel", this.cancelButton.onclick = this._hide.bind(this, !1), this.applyButton = document.createElement("div"), this.applyButton.className = "vis-button vis-apply", this.applyButton.innerHTML = "apply", this.applyButton.onclick = this._apply.bind(this), this.saveButton = document.createElement("div"), this.saveButton.className = "vis-button vis-save", this.saveButton.innerHTML = "save", this.saveButton.onclick = this._save.bind(this), this.loadButton = document.createElement("div"), this.loadButton.className = "vis-button vis-load", this.loadButton.innerHTML = "load last", this.loadButton.onclick = this._loadLast.bind(this), this.frame.appendChild(this.colorPickerDiv), this.frame.appendChild(this.arrowDiv), this.frame.appendChild(this.brightnessLabel), this.frame.appendChild(this.brightnessDiv), this.frame.appendChild(this.opacityLabel), this.frame.appendChild(this.opacityDiv), this.frame.appendChild(this.newColorDiv), this.frame.appendChild(this.initialColorDiv), this.frame.appendChild(this.cancelButton), this.frame.appendChild(this.applyButton), this.frame.appendChild(this.saveButton), this.frame.appendChild(this.loadButton)
                }
            }, {
                key: "_bindHammer", value: function () {
                    var t = this;
                    this.drag = {}, this.pinch = {}, this.hammer = new s(this.colorPickerCanvas), this.hammer.get("pinch").set({enable: !0}), r.onTouch(this.hammer, function (e) {
                        t._moveSelector(e)
                    }), this.hammer.on("tap", function (e) {
                        t._moveSelector(e)
                    }), this.hammer.on("panstart", function (e) {
                        t._moveSelector(e)
                    }), this.hammer.on("panmove", function (e) {
                        t._moveSelector(e)
                    }), this.hammer.on("panend", function (e) {
                        t._moveSelector(e)
                    })
                }
            }, {
                key: "_generateHueCircle", value: function () {
                    if (this.generated === !1) {
                        var t = this.colorPickerCanvas.getContext("2d");
                        void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)), t.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
                        var e = this.colorPickerCanvas.clientWidth, i = this.colorPickerCanvas.clientHeight;
                        t.clearRect(0, 0, e, i);
                        var o = void 0, n = void 0, s = void 0, r = void 0;
                        this.centerCoordinates = {x: .5 * e, y: .5 * i}, this.r = .49 * e;
                        var h = 2 * Math.PI / 360, d = 1 / 360, l = 1 / this.r, c = void 0;
                        for (s = 0; s < 360; s++)for (r = 0; r < this.r; r++)o = this.centerCoordinates.x + r * Math.sin(h * s), n = this.centerCoordinates.y + r * Math.cos(h * s), c = a.HSVToRGB(s * d, r * l, 1), t.fillStyle = "rgb(" + c.r + "," + c.g + "," + c.b + ")", t.fillRect(o - .5, n - .5, 2, 2);
                        t.strokeStyle = "rgba(0,0,0,1)", t.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), t.stroke(), this.hueCircle = t.getImageData(0, 0, e, i)
                    }
                    this.generated = !0
                }
            }, {
                key: "_moveSelector", value: function (t) {
                    var e = this.colorPickerDiv.getBoundingClientRect(), i = t.center.x - e.left, o = t.center.y - e.top, n = .5 * this.colorPickerDiv.clientHeight, s = .5 * this.colorPickerDiv.clientWidth, r = i - s, h = o - n, d = Math.atan2(r, h), l = .98 * Math.min(Math.sqrt(r * r + h * h), s), c = Math.cos(d) * l + n, u = Math.sin(d) * l + s;
                    this.colorPickerSelector.style.top = c - .5 * this.colorPickerSelector.clientHeight + "px", this.colorPickerSelector.style.left = u - .5 * this.colorPickerSelector.clientWidth + "px";
                    var p = d / (2 * Math.PI);
                    p = p < 0 ? p + 1 : p;
                    var f = l / this.r, m = a.RGBToHSV(this.color.r, this.color.g, this.color.b);
                    m.h = p, m.s = f;
                    var v = a.HSVToRGB(m.h, m.s, m.v);
                    v.a = this.color.a, this.color = v, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")"
                }
            }]), t
        }();
        e.default = h
    }, function (t, e, i) {
        i(22);
        e.onTouch = function (t, e) {
            e.inputHandler = function (t) {
                t.isFirst && e(t)
            }, t.on("hammer.input", e.inputHandler)
        }, e.onRelease = function (t, e) {
            return e.inputHandler = function (t) {
                t.isFinal && e(t)
            }, t.on("hammer.input", e.inputHandler)
        }, e.offTouch = function (t, e) {
            t.off("hammer.input", e.inputHandler)
        }, e.offRelease = e.offTouch, e.disablePreventDefaultVertically = function (t) {
            var e = "pan-y";
            return t.getTouchAction = function () {
                return [e]
            }, t
        }
    }, function (t, e, i) {
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), r = i(1), a = !1, h = void 0, d = "background: #FFeeee; color: #dd0000", l = function () {
            function t() {
                o(this, t)
            }

            return s(t, null, [{
                key: "validate", value: function (e, i, o) {
                    a = !1, h = i;
                    var n = i;
                    return void 0 !== o && (n = i[o]), t.parse(e, n, []), a
                }
            }, {
                key: "parse", value: function (e, i, o) {
                    for (var n in e)e.hasOwnProperty(n) && t.check(n, e, i, o)
                }
            }, {
                key: "check", value: function (e, i, o, n) {
                    void 0 === o[e] && void 0 === o.__any__ ? t.getSuggestion(e, o, n) : void 0 === o[e] && void 0 !== o.__any__ ? "object" === t.getType(i[e]) && void 0 !== o.__any__.__type__ ? t.checkFields(e, i, o, "__any__", o.__any__.__type__, n) : t.checkFields(e, i, o, "__any__", o.__any__, n) : void 0 !== o[e].__type__ ? t.checkFields(e, i, o, e, o[e].__type__, n) : t.checkFields(e, i, o, e, o[e], n)
                }
            }, {
                key: "checkFields", value: function (e, i, o, n, s, h) {
                    var l = t.getType(i[e]), c = s[l];
                    void 0 !== c ? "array" === t.getType(c) && c.indexOf(i[e]) === -1 ? (console.log('%cInvalid option detected in "' + e + '". Allowed values are:' + t.print(c) + ' not "' + i[e] + '". ' + t.printLocation(h, e), d), a = !0) : "object" === l && "__any__" !== n && (h = r.copyAndExtendArray(h, e), t.parse(i[e], o[n], h)) : void 0 === s.any && (console.log('%cInvalid type received for "' + e + '". Expected: ' + t.print(Object.keys(s)) + ". Received [" + l + '] "' + i[e] + '"' + t.printLocation(h, e), d), a = !0)
                }
            }, {
                key: "getType", value: function (t) {
                    var e = "undefined" == typeof t ? "undefined" : n(t);
                    return "object" === e ? null === t ? "null" : t instanceof Boolean ? "boolean" : t instanceof Number ? "number" : t instanceof String ? "string" : Array.isArray(t) ? "array" : t instanceof Date ? "date" : void 0 !== t.nodeType ? "dom" : t._isAMomentObject === !0 ? "moment" : "object" : "number" === e ? "number" : "boolean" === e ? "boolean" : "string" === e ? "string" : void 0 === e ? "undefined" : e
                }
            }, {
                key: "getSuggestion", value: function (e, i, o) {
                    var n = t.findInOptions(e, i, o, !1), s = t.findInOptions(e, h, [], !0), r = 8, l = 4;
                    void 0 !== n.indexMatch ? console.log('%cUnknown option detected: "' + e + '" in ' + t.printLocation(n.path, e, "") + 'Perhaps it was incomplete? Did you mean: "' + n.indexMatch + '"?\n\n', d) : s.distance <= l && n.distance > s.distance ? console.log('%cUnknown option detected: "' + e + '" in ' + t.printLocation(n.path, e, "") + "Perhaps it was misplaced? Matching option found at: " + t.printLocation(s.path, s.closestMatch, ""), d) : n.distance <= r ? console.log('%cUnknown option detected: "' + e + '". Did you mean "' + n.closestMatch + '"?' + t.printLocation(n.path, e), d) : console.log('%cUnknown option detected: "' + e + '". Did you mean one of these: ' + t.print(Object.keys(i)) + t.printLocation(o, e), d), a = !0
                }
            }, {
                key: "findInOptions", value: function (e, i, o) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], s = 1e9, a = "", h = [], d = e.toLowerCase(), l = void 0;
                    for (var c in i) {
                        var u = void 0;
                        if (void 0 !== i[c].__type__ && n === !0) {
                            var p = t.findInOptions(e, i[c], r.copyAndExtendArray(o, c));
                            s > p.distance && (a = p.closestMatch, h = p.path, s = p.distance, l = p.indexMatch)
                        } else c.toLowerCase().indexOf(d) !== -1 && (l = c), u = t.levenshteinDistance(e, c), s > u && (a = c, h = r.copyArray(o), s = u)
                    }
                    return {closestMatch: a, path: h, distance: s, indexMatch: l}
                }
            }, {
                key: "printLocation", value: function (t, e) {
                    for (var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Problem value found at: \n", o = "\n\n" + i + "options = {\n", n = 0; n < t.length; n++) {
                        for (var s = 0; s < n + 1; s++)o += "  ";
                        o += t[n] + ": {\n"
                    }
                    for (var r = 0; r < t.length + 1; r++)o += "  ";
                    o += e + "\n";
                    for (var a = 0; a < t.length + 1; a++) {
                        for (var h = 0; h < t.length - a; h++)o += "  ";
                        o += "}\n"
                    }
                    return o + "\n\n"
                }
            }, {
                key: "print", value: function (t) {
                    return JSON.stringify(t).replace(/(\")|(\[)|(\])|(,"__type__")/g, "").replace(/(\,)/g, ", ")
                }
            }, {
                key: "levenshteinDistance", value: function (t, e) {
                    if (0 === t.length)return e.length;
                    if (0 === e.length)return t.length;
                    var i, o = [];
                    for (i = 0; i <= e.length; i++)o[i] = [i];
                    var n;
                    for (n = 0; n <= t.length; n++)o[0][n] = n;
                    for (i = 1; i <= e.length; i++)for (n = 1; n <= t.length; n++)e.charAt(i - 1) == t.charAt(n - 1) ? o[i][n] = o[i - 1][n - 1] : o[i][n] = Math.min(o[i - 1][n - 1] + 1, Math.min(o[i][n - 1] + 1, o[i - 1][n] + 1));
                    return o[e.length][t.length]
                }
            }]), t
        }();
        e.default = l, e.printStyle = d
    }, function (t, e, i) {
        function o(t, e) {
            var i = a().hours(0).minutes(0).seconds(0).milliseconds(0);
            this.start = i.clone().add(-3, "days").valueOf(), this.end = i.clone().add(4, "days").valueOf(), this.body = t, this.deltaDifference = 0, this.scaleOffset = 0, this.startToFront = !1, this.endToFront = !0, this.defaultOptions = {
                rtl: !1,
                start: null,
                end: null,
                moment: a,
                direction: "horizontal",
                moveable: !0,
                zoomable: !0,
                min: null,
                max: null,
                zoomMin: 10,
                zoomMax: 31536e10
            }, this.options = r.extend({}, this.defaultOptions), this.props = {touch: {}}, this.animationTimer = null, this.body.emitter.on("panstart", this._onDragStart.bind(this)), this.body.emitter.on("panmove", this._onDrag.bind(this)), this.body.emitter.on("panend", this._onDragEnd.bind(this)), this.body.emitter.on("mousewheel", this._onMouseWheel.bind(this)), this.body.emitter.on("touch", this._onTouch.bind(this)), this.body.emitter.on("pinch", this._onPinch.bind(this)), this.setOptions(e)
        }

        function n(t) {
            if ("horizontal" != t && "vertical" != t)throw new TypeError('Unknown direction "' + t + '". Choose "horizontal" or "vertical".')
        }

        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r = i(1), a = (i(30), i(2)), h = i(33), d = i(34);
        o.prototype = new h, o.prototype.setOptions = function (t) {
            if (t) {
                var e = ["direction", "min", "max", "zoomMin", "zoomMax", "moveable", "zoomable", "moment", "activate", "hiddenDates", "zoomKey", "rtl", "horizontalScroll"];
                r.selectiveExtend(e, this.options, t), ("start"in t || "end"in t) && this.setRange(t.start, t.end)
            }
        }, o.prototype.setRange = function (t, e, i, o) {
            o !== !0 && (o = !1);
            var n = void 0 != t ? r.convert(t, "Date").valueOf() : null, a = void 0 != e ? r.convert(e, "Date").valueOf() : null;
            if (this._cancelAnimation(), i) {
                var h = this, l = this.start, c = this.end, u = "object" === ("undefined" == typeof i ? "undefined" : s(i)) && "duration"in i ? i.duration : 500, p = "object" === ("undefined" == typeof i ? "undefined" : s(i)) && "easingFunction"in i ? i.easingFunction : "easeInOutQuad", f = r.easingFunctions[p];
                if (!f)throw new Error("Unknown easing function " + JSON.stringify(p) + ". Choose from: " + Object.keys(r.easingFunctions).join(", "));
                var m = (new Date).valueOf(), v = !1, g = function t() {
                    if (!h.props.touch.dragging) {
                        var e = (new Date).valueOf(), i = e - m, s = f(i / u), r = i > u, p = r || null === n ? n : l + (n - l) * s, g = r || null === a ? a : c + (a - c) * s;
                        y = h._applyRange(p, g), d.updateHiddenDates(h.options.moment, h.body, h.options.hiddenDates), v = v || y, y && h.body.emitter.emit("rangechange", {
                            start: new Date(h.start),
                            end: new Date(h.end),
                            byUser: o
                        }), r ? v && h.body.emitter.emit("rangechanged", {
                            start: new Date(h.start),
                            end: new Date(h.end),
                            byUser: o
                        }) : h.animationTimer = setTimeout(t, 20)
                    }
                };
                return g()
            }
            var y = this._applyRange(n, a);
            if (d.updateHiddenDates(this.options.moment, this.body, this.options.hiddenDates), y) {
                var b = {start: new Date(this.start), end: new Date(this.end), byUser: o};
                this.body.emitter.emit("rangechange", b), this.body.emitter.emit("rangechanged", b)
            }
        }, o.prototype._cancelAnimation = function () {
            this.animationTimer && (clearTimeout(this.animationTimer), this.animationTimer = null)
        }, o.prototype._applyRange = function (t, e) {
            var i, o = null != t ? r.convert(t, "Date").valueOf() : this.start, n = null != e ? r.convert(e, "Date").valueOf() : this.end, s = null != this.options.max ? r.convert(this.options.max, "Date").valueOf() : null, a = null != this.options.min ? r.convert(this.options.min, "Date").valueOf() : null;
            if (isNaN(o) || null === o)throw new Error('Invalid start "' + t + '"');
            if (isNaN(n) || null === n)throw new Error('Invalid end "' + e + '"');
            if (n < o && (n = o), null !== a && o < a && (i = a - o, o += i, n += i, null != s && n > s && (n = s)), null !== s && n > s && (i = n - s, o -= i, n -= i, null != a && o < a && (o = a)), null !== this.options.zoomMin) {
                var h = parseFloat(this.options.zoomMin);
                h < 0 && (h = 0), n - o < h && (this.end - this.start === h && o > this.start && n < this.end ? (o = this.start, n = this.end) : (i = h - (n - o), o -= i / 2, n += i / 2))
            }
            if (null !== this.options.zoomMax) {
                var d = parseFloat(this.options.zoomMax);
                d < 0 && (d = 0), n - o > d && (this.end - this.start === d && o < this.start && n > this.end ? (o = this.start, n = this.end) : (i = n - o - d, o += i / 2, n -= i / 2))
            }
            var l = this.start != o || this.end != n;
            return o >= this.start && o <= this.end || n >= this.start && n <= this.end || this.start >= o && this.start <= n || this.end >= o && this.end <= n || this.body.emitter.emit("checkRangedItems"), this.start = o, this.end = n, l
        }, o.prototype.getRange = function () {
            return {start: this.start, end: this.end}
        }, o.prototype.conversion = function (t, e) {
            return o.conversion(this.start, this.end, t, e)
        }, o.conversion = function (t, e, i, o) {
            return void 0 === o && (o = 0), 0 != i && e - t != 0 ? {offset: t, scale: i / (e - t - o)} : {
                offset: 0,
                scale: 1
            }
        }, o.prototype._onDragStart = function (t) {
            this.deltaDifference = 0, this.previousDelta = 0, this.options.moveable && this._isInsideRange(t) && this.props.touch.allowDragging && (this.props.touch.start = this.start, this.props.touch.end = this.end, this.props.touch.dragging = !0, this.body.dom.root && (this.body.dom.root.style.cursor = "move"))
        }, o.prototype._onDrag = function (t) {
            if (t && this.props.touch.dragging && this.options.moveable && this.props.touch.allowDragging) {
                var e = this.options.direction;
                n(e);
                var i = "horizontal" == e ? t.deltaX : t.deltaY;
                i -= this.deltaDifference;
                var o = this.props.touch.end - this.props.touch.start, s = d.getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end);
                o -= s;
                var r = "horizontal" == e ? this.body.domProps.center.width : this.body.domProps.center.height;
                if (this.options.rtl)var a = i / r * o; else var a = -i / r * o;
                var h = this.props.touch.start + a, l = this.props.touch.end + a, c = d.snapAwayFromHidden(this.body.hiddenDates, h, this.previousDelta - i, !0), u = d.snapAwayFromHidden(this.body.hiddenDates, l, this.previousDelta - i, !0);
                if (c != h || u != l)return this.deltaDifference += i,
                    this.props.touch.start = c, this.props.touch.end = u, void this._onDrag(t);
                this.previousDelta = i, this._applyRange(h, l);
                var p = new Date(this.start), f = new Date(this.end);
                this.body.emitter.emit("rangechange", {start: p, end: f, byUser: !0}), this.body.emitter.emit("panmove")
            }
        }, o.prototype._onDragEnd = function (t) {
            this.props.touch.dragging && this.options.moveable && this.props.touch.allowDragging && (this.props.touch.dragging = !1, this.body.dom.root && (this.body.dom.root.style.cursor = "auto"), this.body.emitter.emit("rangechanged", {
                start: new Date(this.start),
                end: new Date(this.end),
                byUser: !0
            }))
        }, o.prototype._onMouseWheel = function (t) {
            t.preventDefault();
            var e = 0;
            if (t.wheelDelta ? e = t.wheelDelta / 120 : t.detail && (e = -t.detail / 3), this.options.zoomKey && !t[this.options.zoomKey] && this.options.zoomable || !this.options.zoomable && this.options.moveable) {
                if (this.options.horizontalScroll) {
                    var i = e * (this.end - this.start) / 20, o = this.start - i, n = this.end - i;
                    this.setRange(o, n)
                }
            } else if (this.options.zoomable && this.options.moveable && this._isInsideRange(t) && e) {
                var s;
                s = e < 0 ? 1 - e / 5 : 1 / (1 + e / 5);
                var r = this.getPointer({x: t.clientX, y: t.clientY}, this.body.dom.center), a = this._pointerToDate(r);
                this.zoom(s, a, e)
            }
        }, o.prototype._onTouch = function (t) {
            this.props.touch.start = this.start, this.props.touch.end = this.end, this.props.touch.allowDragging = !0, this.props.touch.center = null, this.scaleOffset = 0, this.deltaDifference = 0
        }, o.prototype._onPinch = function (t) {
            if (this.options.zoomable && this.options.moveable) {
                this.props.touch.allowDragging = !1, this.props.touch.center || (this.props.touch.center = this.getPointer(t.center, this.body.dom.center));
                var e = 1 / (t.scale + this.scaleOffset), i = this._pointerToDate(this.props.touch.center), o = d.getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end), n = d.getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this, i), s = o - n, r = i - n + (this.props.touch.start - (i - n)) * e, a = i + s + (this.props.touch.end - (i + s)) * e;
                this.startToFront = 1 - e <= 0, this.endToFront = e - 1 <= 0;
                var h = d.snapAwayFromHidden(this.body.hiddenDates, r, 1 - e, !0), l = d.snapAwayFromHidden(this.body.hiddenDates, a, e - 1, !0);
                h == r && l == a || (this.props.touch.start = h, this.props.touch.end = l, this.scaleOffset = 1 - t.scale, r = h, a = l), this.setRange(r, a, !1, !0), this.startToFront = !1, this.endToFront = !0
            }
        }, o.prototype._isInsideRange = function (t) {
            var e = t.center ? t.center.x : t.clientX;
            if (this.options.rtl)var i = e - r.getAbsoluteLeft(this.body.dom.centerContainer); else var i = r.getAbsoluteRight(this.body.dom.centerContainer) - e;
            var o = this.body.util.toTime(i);
            return o >= this.start && o <= this.end
        }, o.prototype._pointerToDate = function (t) {
            var e, i = this.options.direction;
            if (n(i), "horizontal" == i)return this.body.util.toTime(t.x).valueOf();
            var o = this.body.domProps.center.height;
            return e = this.conversion(o), t.y / e.scale + e.offset
        }, o.prototype.getPointer = function (t, e) {
            return this.options.rtl ? {
                x: r.getAbsoluteRight(e) - t.x,
                y: t.y - r.getAbsoluteTop(e)
            } : {x: t.x - r.getAbsoluteLeft(e), y: t.y - r.getAbsoluteTop(e)}
        }, o.prototype.zoom = function (t, e, i) {
            null == e && (e = (this.start + this.end) / 2);
            var o = d.getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end), n = d.getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this, e), s = o - n, r = e - n + (this.start - (e - n)) * t, a = e + s + (this.end - (e + s)) * t;
            this.startToFront = !(i > 0), this.endToFront = !(-i > 0);
            var h = d.snapAwayFromHidden(this.body.hiddenDates, r, i, !0), l = d.snapAwayFromHidden(this.body.hiddenDates, a, -i, !0);
            h == r && l == a || (r = h, a = l), this.setRange(r, a, !1, !0), this.startToFront = !1, this.endToFront = !0
        }, o.prototype.move = function (t) {
            var e = this.end - this.start, i = this.start + e * t, o = this.end + e * t;
            this.start = i, this.end = o
        }, o.prototype.moveTo = function (t) {
            var e = (this.start + this.end) / 2, i = e - t, o = this.start - i, n = this.end - i;
            this.setRange(o, n)
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e) {
            this.options = null, this.props = null
        }

        var n = i(1);
        o.prototype.setOptions = function (t) {
            t && n.extend(this.options, t)
        }, o.prototype.redraw = function () {
            return !1
        }, o.prototype.destroy = function () {
        }, o.prototype._isResized = function () {
            var t = this.props._previousWidth !== this.props.width || this.props._previousHeight !== this.props.height;
            return this.props._previousWidth = this.props.width, this.props._previousHeight = this.props.height, t
        }, t.exports = o
    }, function (t, e) {
        e.convertHiddenOptions = function (t, i, o) {
            if (o && !Array.isArray(o))return e.convertHiddenOptions(t, i, [o]);
            if (i.hiddenDates = [], o && 1 == Array.isArray(o)) {
                for (var n = 0; n < o.length; n++)if (void 0 === o[n].repeat) {
                    var s = {};
                    s.start = t(o[n].start).toDate().valueOf(), s.end = t(o[n].end).toDate().valueOf(), i.hiddenDates.push(s)
                }
                i.hiddenDates.sort(function (t, e) {
                    return t.start - e.start
                })
            }
        }, e.updateHiddenDates = function (t, i, o) {
            if (o && !Array.isArray(o))return e.updateHiddenDates(t, i, [o]);
            if (o && void 0 !== i.domProps.centerContainer.width) {
                e.convertHiddenOptions(t, i, o);
                for (var n = t(i.range.start), s = t(i.range.end), r = i.range.end - i.range.start, a = r / i.domProps.centerContainer.width, h = 0; h < o.length; h++)if (void 0 !== o[h].repeat) {
                    var d = t(o[h].start), l = t(o[h].end);
                    if ("Invalid Date" == d._d)throw new Error("Supplied start date is not valid: " + o[h].start);
                    if ("Invalid Date" == l._d)throw new Error("Supplied end date is not valid: " + o[h].end);
                    var c = l - d;
                    if (c >= 4 * a) {
                        var u = 0, p = s.clone();
                        switch (o[h].repeat) {
                            case"daily":
                                d.day() != l.day() && (u = 1), d.dayOfYear(n.dayOfYear()), d.year(n.year()), d.subtract(7, "days"), l.dayOfYear(n.dayOfYear()), l.year(n.year()), l.subtract(7 - u, "days"), p.add(1, "weeks");
                                break;
                            case"weekly":
                                var f = l.diff(d, "days"), m = d.day();
                                d.date(n.date()), d.month(n.month()), d.year(n.year()), l = d.clone(), d.day(m), l.day(m), l.add(f, "days"), d.subtract(1, "weeks"), l.subtract(1, "weeks"), p.add(1, "weeks");
                                break;
                            case"monthly":
                                d.month() != l.month() && (u = 1), d.month(n.month()), d.year(n.year()), d.subtract(1, "months"), l.month(n.month()), l.year(n.year()), l.subtract(1, "months"), l.add(u, "months"), p.add(1, "months");
                                break;
                            case"yearly":
                                d.year() != l.year() && (u = 1), d.year(n.year()), d.subtract(1, "years"), l.year(n.year()), l.subtract(1, "years"), l.add(u, "years"), p.add(1, "years");
                                break;
                            default:
                                return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", o[h].repeat)
                        }
                        for (; d < p;)switch (i.hiddenDates.push({start: d.valueOf(), end: l.valueOf()}), o[h].repeat) {
                            case"daily":
                                d.add(1, "days"), l.add(1, "days");
                                break;
                            case"weekly":
                                d.add(1, "weeks"), l.add(1, "weeks");
                                break;
                            case"monthly":
                                d.add(1, "months"), l.add(1, "months");
                                break;
                            case"yearly":
                                d.add(1, "y"), l.add(1, "y");
                                break;
                            default:
                                return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", o[h].repeat)
                        }
                        i.hiddenDates.push({start: d.valueOf(), end: l.valueOf()})
                    }
                }
                e.removeDuplicates(i);
                var v = e.isHidden(i.range.start, i.hiddenDates), g = e.isHidden(i.range.end, i.hiddenDates), y = i.range.start, b = i.range.end;
                1 == v.hidden && (y = 1 == i.range.startToFront ? v.startDate - 1 : v.endDate + 1), 1 == g.hidden && (b = 1 == i.range.endToFront ? g.startDate - 1 : g.endDate + 1), 1 != v.hidden && 1 != g.hidden || i.range._applyRange(y, b)
            }
        }, e.removeDuplicates = function (t) {
            for (var e = t.hiddenDates, i = [], o = 0; o < e.length; o++)for (var n = 0; n < e.length; n++)o != n && 1 != e[n].remove && 1 != e[o].remove && (e[n].start >= e[o].start && e[n].end <= e[o].end ? e[n].remove = !0 : e[n].start >= e[o].start && e[n].start <= e[o].end ? (e[o].end = e[n].end, e[n].remove = !0) : e[n].end >= e[o].start && e[n].end <= e[o].end && (e[o].start = e[n].start, e[n].remove = !0));
            for (var o = 0; o < e.length; o++)e[o].remove !== !0 && i.push(e[o]);
            t.hiddenDates = i, t.hiddenDates.sort(function (t, e) {
                return t.start - e.start
            })
        }, e.printDates = function (t) {
            for (var e = 0; e < t.length; e++)console.log(e, new Date(t[e].start), new Date(t[e].end), t[e].start, t[e].end, t[e].remove)
        }, e.stepOverHiddenDates = function (t, e, i) {
            for (var o = !1, n = e.current.valueOf(), s = 0; s < e.hiddenDates.length; s++) {
                var r = e.hiddenDates[s].start, a = e.hiddenDates[s].end;
                if (n >= r && n < a) {
                    o = !0;
                    break
                }
            }
            if (1 == o && n < e._end.valueOf() && n != i) {
                var h = t(i), d = t(a);
                h.year() != d.year() ? e.switchedYear = !0 : h.month() != d.month() ? e.switchedMonth = !0 : h.dayOfYear() != d.dayOfYear() && (e.switchedDay = !0), e.current = d
            }
        }, e.toScreen = function (t, i, o) {
            if (0 == t.body.hiddenDates.length) {
                var n = t.range.conversion(o);
                return (i.valueOf() - n.offset) * n.scale
            }
            var s = e.isHidden(i, t.body.hiddenDates);
            1 == s.hidden && (i = s.startDate);
            var r = e.getHiddenDurationBetween(t.body.hiddenDates, t.range.start, t.range.end);
            if (i < t.range.start) {
                var n = t.range.conversion(o, r), a = e.getHiddenDurationBeforeStart(t.body.hiddenDates, i, n.offset);
                return i = t.options.moment(i).toDate().valueOf(), i += a, -(n.offset - i.valueOf()) * n.scale
            }
            if (i > t.range.end) {
                var h = {start: t.range.start, end: i};
                i = e.correctTimeForHidden(t.options.moment, t.body.hiddenDates, h, i);
                var n = t.range.conversion(o, r);
                return (i.valueOf() - n.offset) * n.scale
            }
            i = e.correctTimeForHidden(t.options.moment, t.body.hiddenDates, t.range, i);
            var n = t.range.conversion(o, r);
            return (i.valueOf() - n.offset) * n.scale
        }, e.toTime = function (t, i, o) {
            if (0 == t.body.hiddenDates.length) {
                var n = t.range.conversion(o);
                return new Date(i / n.scale + n.offset)
            }
            var s = e.getHiddenDurationBetween(t.body.hiddenDates, t.range.start, t.range.end), r = t.range.end - t.range.start - s, a = r * i / o, h = e.getAccumulatedHiddenDuration(t.body.hiddenDates, t.range, a), d = new Date(h + a + t.range.start);
            return d
        }, e.getHiddenDurationBetween = function (t, e, i) {
            for (var o = 0, n = 0; n < t.length; n++) {
                var s = t[n].start, r = t[n].end;
                s >= e && r < i && (o += r - s)
            }
            return o
        }, e.getHiddenDurationBeforeStart = function (t, e, i) {
            for (var o = 0, n = 0; n < t.length; n++) {
                var s = t[n].start, r = t[n].end;
                s >= e && r <= i && (o += r - s)
            }
            return o
        }, e.correctTimeForHidden = function (t, i, o, n) {
            return n = t(n).toDate().valueOf(), n -= e.getHiddenDurationBefore(t, i, o, n)
        }, e.getHiddenDurationBefore = function (t, e, i, o) {
            var n = 0;
            o = t(o).toDate().valueOf();
            for (var s = 0; s < e.length; s++) {
                var r = e[s].start, a = e[s].end;
                r >= i.start && a < i.end && o >= a && (n += a - r)
            }
            return n
        }, e.getAccumulatedHiddenDuration = function (t, e, i) {
            for (var o = 0, n = 0, s = e.start, r = 0; r < t.length; r++) {
                var a = t[r].start, h = t[r].end;
                if (a >= e.start && h < e.end) {
                    if (n += a - s, s = h, n >= i)break;
                    o += h - a
                }
            }
            return o
        }, e.snapAwayFromHidden = function (t, i, o, n) {
            var s = e.isHidden(i, t);
            return 1 == s.hidden ? o < 0 ? 1 == n ? s.startDate - (s.endDate - i) - 1 : s.startDate - 1 : 1 == n ? s.endDate + (i - s.startDate) + 1 : s.endDate + 1 : i
        }, e.isHidden = function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i].start, n = e[i].end;
                if (t >= o && t < n)return {hidden: !0, startDate: o, endDate: n}
            }
            return {hidden: !1, startDate: o, endDate: n}
        }
    }, function (t, e, i) {
        function o() {
        }

        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s = i(13), r = i(22), a = i(30), h = i(1), d = (i(9), i(11), i(32), i(36), i(46)), l = i(47), c = i(34), u = i(48);
        s(o.prototype), o.prototype._create = function (t) {
            function e(t) {
                if (this.isActive() && this.emit("mousewheel", t), this.options.zoomKey && !t[this.options.zoomKey] && !this.options.horizontalScroll) {
                    var e = 0;
                    t.wheelDelta ? e = t.wheelDelta / 120 : t.detail && (e = -t.detail / 3);
                    var i = this.props.scrollTop, o = i + 120 * e;
                    this.isActive() && (this._setScrollTop(o), this.options.verticalScroll && (this.dom.left.parentNode.scrollTop = -o, this.dom.right.parentNode.scrollTop = -o), this._redraw(), this.emit("scroll", t)), t.preventDefault()
                }
            }

            function i(t) {
                if (s.options.verticalScroll && (t.preventDefault(), s.isActive())) {
                    var e = -t.target.scrollTop;
                    s._setScrollTop(e), s._redraw(), s.emit("scrollSide", t)
                }
            }

            function o(t) {
                if (t.preventDefault && t.preventDefault(), t.target.className.includes("vis") && !l)return t.dataTransfer.dropEffect = "move", l = !0, !1
            }

            function n(t) {
                try {
                    var e = JSON.parse(t.dataTransfer.getData("text/plain"));
                    if (!e.content)return
                } catch (t) {
                    return !1
                }
                return l = !1, t.center = {x: t.x, y: t.y}, s.itemSet._onAddItem(t), !1
            }

            this.dom = {}, this.dom.container = t, this.dom.root = document.createElement("div"), this.dom.background = document.createElement("div"), this.dom.backgroundVertical = document.createElement("div"), this.dom.backgroundHorizontal = document.createElement("div"), this.dom.centerContainer = document.createElement("div"), this.dom.leftContainer = document.createElement("div"), this.dom.rightContainer = document.createElement("div"), this.dom.center = document.createElement("div"), this.dom.left = document.createElement("div"), this.dom.right = document.createElement("div"), this.dom.top = document.createElement("div"), this.dom.bottom = document.createElement("div"), this.dom.shadowTop = document.createElement("div"), this.dom.shadowBottom = document.createElement("div"), this.dom.shadowTopLeft = document.createElement("div"), this.dom.shadowBottomLeft = document.createElement("div"), this.dom.shadowTopRight = document.createElement("div"), this.dom.shadowBottomRight = document.createElement("div"), this.dom.root.className = "vis-timeline", this.dom.background.className = "vis-panel vis-background", this.dom.backgroundVertical.className = "vis-panel vis-background vis-vertical", this.dom.backgroundHorizontal.className = "vis-panel vis-background vis-horizontal", this.dom.centerContainer.className = "vis-panel vis-center", this.dom.leftContainer.className = "vis-panel vis-left", this.dom.rightContainer.className = "vis-panel vis-right", this.dom.top.className = "vis-panel vis-top", this.dom.bottom.className = "vis-panel vis-bottom", this.dom.left.className = "vis-content", this.dom.center.className = "vis-content", this.dom.right.className = "vis-content", this.dom.shadowTop.className = "vis-shadow vis-top", this.dom.shadowBottom.className = "vis-shadow vis-bottom", this.dom.shadowTopLeft.className = "vis-shadow vis-top", this.dom.shadowBottomLeft.className = "vis-shadow vis-bottom", this.dom.shadowTopRight.className = "vis-shadow vis-top", this.dom.shadowBottomRight.className = "vis-shadow vis-bottom", this.dom.root.appendChild(this.dom.background), this.dom.root.appendChild(this.dom.backgroundVertical), this.dom.root.appendChild(this.dom.backgroundHorizontal), this.dom.root.appendChild(this.dom.centerContainer), this.dom.root.appendChild(this.dom.leftContainer), this.dom.root.appendChild(this.dom.rightContainer), this.dom.root.appendChild(this.dom.top), this.dom.root.appendChild(this.dom.bottom), this.dom.centerContainer.appendChild(this.dom.center), this.dom.leftContainer.appendChild(this.dom.left), this.dom.rightContainer.appendChild(this.dom.right), this.dom.centerContainer.appendChild(this.dom.shadowTop), this.dom.centerContainer.appendChild(this.dom.shadowBottom), this.dom.leftContainer.appendChild(this.dom.shadowTopLeft), this.dom.leftContainer.appendChild(this.dom.shadowBottomLeft), this.dom.rightContainer.appendChild(this.dom.shadowTopRight), this.dom.rightContainer.appendChild(this.dom.shadowBottomRight), this.props = {
                root: {},
                background: {},
                centerContainer: {},
                leftContainer: {},
                rightContainer: {},
                center: {},
                left: {},
                right: {},
                top: {},
                bottom: {},
                border: {},
                scrollTop: 0,
                scrollTopMin: 0
            }, this.on("rangechange", function () {
                this.initialDrawDone === !0 && this._redraw()
            }.bind(this)), this.on("touch", this._onTouch.bind(this)), this.on("panmove", this._onDrag.bind(this));
            var s = this;
            this.on("_change", function (t) {
                t && 1 == t.queue ? s._redrawTimer || (s._redrawTimer = setTimeout(function () {
                    s._redrawTimer = null, s._redraw()
                }, 0)) : s._redraw()
            }), this.hammer = new r(this.dom.root);
            var h = this.hammer.get("pinch").set({enable: !0});
            a.disablePreventDefaultVertically(h), this.hammer.get("pan").set({
                threshold: 5,
                direction: r.DIRECTION_HORIZONTAL
            }), this.listeners = {};
            var d = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];
            d.forEach(function (t) {
                var e = function (e) {
                    s.isActive() && s.emit(t, e)
                };
                s.hammer.on(t, e), s.listeners[t] = e
            }), a.onTouch(this.hammer, function (t) {
                s.emit("touch", t)
            }.bind(this)), a.onRelease(this.hammer, function (t) {
                s.emit("release", t)
            }.bind(this)), this.dom.centerContainer.addEventListener ? (this.dom.centerContainer.addEventListener("mousewheel", e.bind(this), !1), this.dom.centerContainer.addEventListener("DOMMouseScroll", e.bind(this), !1)) : this.dom.centerContainer.attachEvent("onmousewheel", e.bind(this)), this.dom.left.parentNode.addEventListener("scroll", i.bind(this)), this.dom.right.parentNode.addEventListener("scroll", i.bind(this));
            var l = !1;
            if (this.dom.center.addEventListener("dragover", o.bind(this), !1), this.dom.center.addEventListener("drop", n.bind(this), !1), this.customTimes = [], this.touch = {}, this.redrawCount = 0, this.initialDrawDone = !1, !t)throw new Error("No container provided");
            t.appendChild(this.dom.root)
        }, o.prototype.setOptions = function (t) {
            if (t) {
                var e = ["width", "height", "minHeight", "maxHeight", "autoResize", "start", "end", "clickToUse", "dataAttributes", "hiddenDates", "locale", "locales", "moment", "rtl", "zoomKey", "horizontalScroll", "verticalScroll"];
                if (h.selectiveExtend(e, this.options, t), this.options.rtl && (this.dom.container.style.direction = "rtl", this.dom.backgroundVertical.className = "vis-panel vis-background vis-vertical-rtl"), this.options.verticalScroll && (this.options.rtl ? this.dom.rightContainer.className = "vis-panel vis-right vis-vertical-scroll" : this.dom.leftContainer.className = "vis-panel vis-left vis-vertical-scroll"), this.options.orientation = {
                        item: void 0,
                        axis: void 0
                    }, "orientation"in t && ("string" == typeof t.orientation ? this.options.orientation = {
                        item: t.orientation,
                        axis: t.orientation
                    } : "object" === n(t.orientation) && ("item"in t.orientation && (this.options.orientation.item = t.orientation.item), "axis"in t.orientation && (this.options.orientation.axis = t.orientation.axis))), "both" === this.options.orientation.axis) {
                    if (!this.timeAxis2) {
                        var i = this.timeAxis2 = new d(this.body);
                        i.setOptions = function (t) {
                            var e = t ? h.extend({}, t) : {};
                            e.orientation = "top", d.prototype.setOptions.call(i, e)
                        }, this.components.push(i)
                    }
                } else if (this.timeAxis2) {
                    var o = this.components.indexOf(this.timeAxis2);
                    o !== -1 && this.components.splice(o, 1), this.timeAxis2.destroy(), this.timeAxis2 = null
                }
                if ("function" == typeof t.drawPoints && (t.drawPoints = {onRender: t.drawPoints}), "hiddenDates"in this.options && c.convertHiddenOptions(this.options.moment, this.body, this.options.hiddenDates), "clickToUse"in t && (t.clickToUse ? this.activator || (this.activator = new l(this.dom.root)) : this.activator && (this.activator.destroy(), delete this.activator)), "showCustomTime"in t)throw new Error("Option `showCustomTime` is deprecated. Create a custom time bar via timeline.addCustomTime(time [, id])");
                this._initAutoResize()
            }
            if (this.components.forEach(function (e) {
                    return e.setOptions(t)
                }), "configure"in t) {
                this.configurator || (this.configurator = this._createConfigurator()), this.configurator.setOptions(t.configure);
                var s = h.deepExtend({}, this.options);
                this.components.forEach(function (t) {
                    h.deepExtend(s, t.options)
                }), this.configurator.setModuleOptions({global: s})
            }
            this._origRedraw ? this._redraw() : (this._origRedraw = this._redraw.bind(this), this._redraw = h.throttle(this._origRedraw))
        }, o.prototype.isActive = function () {
            return !this.activator || this.activator.active
        }, o.prototype.destroy = function () {
            this.setItems(null), this.setGroups(null), this.off(), this._stopAutoResize(), this.dom.root.parentNode && this.dom.root.parentNode.removeChild(this.dom.root), this.dom = null, this.activator && (this.activator.destroy(), delete this.activator);
            for (var t in this.listeners)this.listeners.hasOwnProperty(t) && delete this.listeners[t];
            this.listeners = null, this.hammer = null, this.components.forEach(function (t) {
                return t.destroy()
            }), this.body = null
        }, o.prototype.setCustomTime = function (t, e) {
            var i = this.customTimes.filter(function (t) {
                return e === t.options.id
            });
            if (0 === i.length)throw new Error("No custom time bar found with id " + JSON.stringify(e));
            i.length > 0 && i[0].setCustomTime(t)
        }, o.prototype.getCustomTime = function (t) {
            var e = this.customTimes.filter(function (e) {
                return e.options.id === t
            });
            if (0 === e.length)throw new Error("No custom time bar found with id " + JSON.stringify(t));
            return e[0].getCustomTime()
        }, o.prototype.setCustomTimeTitle = function (t, e) {
            var i = this.customTimes.filter(function (t) {
                return t.options.id === e
            });
            if (0 === i.length)throw new Error("No custom time bar found with id " + JSON.stringify(e));
            if (i.length > 0)return i[0].setCustomTitle(t)
        }, o.prototype.getEventProperties = function (t) {
            return {event: t}
        }, o.prototype.addCustomTime = function (t, e) {
            var i = void 0 !== t ? h.convert(t, "Date").valueOf() : new Date, o = this.customTimes.some(function (t) {
                return t.options.id === e
            });
            if (o)throw new Error("A custom time with id " + JSON.stringify(e) + " already exists");
            var n = new u(this.body, h.extend({}, this.options, {time: i, id: e}));
            return this.customTimes.push(n), this.components.push(n), this._redraw(), e
        }, o.prototype.removeCustomTime = function (t) {
            var e = this.customTimes.filter(function (e) {
                return e.options.id === t
            });
            if (0 === e.length)throw new Error("No custom time bar found with id " + JSON.stringify(t));
            e.forEach(function (t) {
                this.customTimes.splice(this.customTimes.indexOf(t), 1), this.components.splice(this.components.indexOf(t), 1), t.destroy()
            }.bind(this))
        }, o.prototype.getVisibleItems = function () {
            return this.itemSet && this.itemSet.getVisibleItems() || []
        }, o.prototype.fit = function (t) {
            var e = this.getDataRange();
            if (null !== e.min || null !== e.max) {
                var i = e.max - e.min, o = new Date(e.min.valueOf() - .01 * i), n = new Date(e.max.valueOf() + .01 * i), s = !t || void 0 === t.animation || t.animation;
                this.range.setRange(o, n, s)
            }
        }, o.prototype.getDataRange = function () {
            throw new Error("Cannot invoke abstract method getDataRange")
        }, o.prototype.setWindow = function (t, e, i) {
            var o;
            if (1 == arguments.length) {
                var n = arguments[0];
                o = void 0 === n.animation || n.animation, this.range.setRange(n.start, n.end, o)
            } else o = !i || void 0 === i.animation || i.animation, this.range.setRange(t, e, o)
        }, o.prototype.moveTo = function (t, e) {
            var i = this.range.end - this.range.start, o = h.convert(t, "Date").valueOf(), n = o - i / 2, s = o + i / 2, r = !e || void 0 === e.animation || e.animation;
            this.range.setRange(n, s, r)
        }, o.prototype.getWindow = function () {
            var t = this.range.getRange();
            return {start: new Date(t.start), end: new Date(t.end)}
        }, o.prototype.zoomIn = function (t) {
            if (!(!t || t < 0 || t > 1)) {
                var e = this.getWindow(), i = e.start.valueOf(), o = e.end.valueOf(), n = o - i, s = n / (1 + t), r = (n - s) / 2, a = i + r, h = o - r;
                this.setWindow({start: a, end: h})
            }
        }, o.prototype.zoomOut = function (t) {
            if (!(!t || t < 0 || t > 1)) {
                var e = this.getWindow(), i = e.start.valueOf(), o = e.end.valueOf(), n = o - i, s = i - n * t / 2, r = o + n * t / 2;
                this.setWindow({start: s, end: r})
            }
        }, o.prototype.redraw = function () {
            this._redraw()
        }, o.prototype._redraw = function () {
            this.redrawCount++;
            var t = !1, e = this.options, i = this.props, o = this.dom;
            if (o && o.container && 0 != o.root.offsetWidth) {
                c.updateHiddenDates(this.options.moment, this.body, this.options.hiddenDates), "top" == e.orientation ? (h.addClassName(o.root, "vis-top"), h.removeClassName(o.root, "vis-bottom")) : (h.removeClassName(o.root, "vis-top"), h.addClassName(o.root, "vis-bottom")), o.root.style.maxHeight = h.option.asSize(e.maxHeight, ""), o.root.style.minHeight = h.option.asSize(e.minHeight, ""), o.root.style.width = h.option.asSize(e.width, ""), i.border.left = (o.centerContainer.offsetWidth - o.centerContainer.clientWidth) / 2, i.border.right = i.border.left, i.border.top = (o.centerContainer.offsetHeight - o.centerContainer.clientHeight) / 2, i.border.bottom = i.border.top;
                var n = o.root.offsetHeight - o.root.clientHeight, s = o.root.offsetWidth - o.root.clientWidth;
                0 === o.centerContainer.clientHeight && (i.border.left = i.border.top, i.border.right = i.border.left), 0 === o.root.clientHeight && (s = n), i.center.height = o.center.offsetHeight, i.left.height = o.left.offsetHeight, i.right.height = o.right.offsetHeight, i.top.height = o.top.clientHeight || -i.border.top, i.bottom.height = o.bottom.clientHeight || -i.border.bottom;
                var a = Math.max(i.left.height, i.center.height, i.right.height), d = i.top.height + a + i.bottom.height + n + i.border.top + i.border.bottom;
                o.root.style.height = h.option.asSize(e.height, d + "px"), i.root.height = o.root.offsetHeight, i.background.height = i.root.height - n;
                var l = i.root.height - i.top.height - i.bottom.height - n;
                i.centerContainer.height = l, i.leftContainer.height = l, i.rightContainer.height = i.leftContainer.height, i.root.width = o.root.offsetWidth, i.background.width = i.root.width - s, this.initialDrawDone || (i.scrollbarWidth = h.getScrollBarWidth()), this.options.verticalScroll ? this.options.rtl ? (i.left.width = o.leftContainer.clientWidth || -i.border.left, i.right.width = o.rightContainer.clientWidth + i.scrollbarWidth || -i.border.right) : (i.left.width = o.leftContainer.clientWidth + i.scrollbarWidth || -i.border.left, i.right.width = o.rightContainer.clientWidth || -i.border.right) : (i.left.width = o.leftContainer.clientWidth || -i.border.left, i.right.width = o.rightContainer.clientWidth || -i.border.right), i.leftContainer.width = i.left.width, i.rightContainer.width = i.right.width;
                var u = i.root.width - i.left.width - i.right.width - s;
                i.center.width = u, i.centerContainer.width = u, i.top.width = u, i.bottom.width = u, o.background.style.height = i.background.height + "px", o.backgroundVertical.style.height = i.background.height + "px", o.backgroundHorizontal.style.height = i.centerContainer.height + "px", o.centerContainer.style.height = i.centerContainer.height + "px", o.leftContainer.style.height = i.leftContainer.height + "px", o.rightContainer.style.height = i.rightContainer.height + "px", o.background.style.width = i.background.width + "px", o.backgroundVertical.style.width = i.centerContainer.width + "px", o.backgroundHorizontal.style.width = i.background.width + "px", o.centerContainer.style.width = i.center.width + "px", o.top.style.width = i.top.width + "px", o.bottom.style.width = i.bottom.width + "px", o.background.style.left = "0", o.background.style.top = "0", o.backgroundVertical.style.left = i.left.width + i.border.left + "px", o.backgroundVertical.style.top = "0", o.backgroundHorizontal.style.left = "0", o.backgroundHorizontal.style.top = i.top.height + "px", o.centerContainer.style.left = i.left.width + "px", o.centerContainer.style.top = i.top.height + "px", o.leftContainer.style.left = "0", o.leftContainer.style.top = i.top.height + "px", o.rightContainer.style.left = i.left.width + i.center.width + "px", o.rightContainer.style.top = i.top.height + "px", o.top.style.left = i.left.width + "px", o.top.style.top = "0", o.bottom.style.left = i.left.width + "px", o.bottom.style.top = i.top.height + i.centerContainer.height + "px";
                var p = this._updateScrollTop();
                "top" != e.orientation.item && (p += Math.max(this.props.centerContainer.height - this.props.center.height - this.props.border.top - this.props.border.bottom, 0)), o.center.style.left = "0", o.center.style.top = p + "px", o.left.style.left = "0", o.right.style.left = "0";
                var f = 0 == this.props.scrollTop ? "hidden" : "", m = this.props.scrollTop == this.props.scrollTopMin ? "hidden" : "";
                o.shadowTop.style.visibility = f, o.shadowBottom.style.visibility = m, o.shadowTopLeft.style.visibility = f, o.shadowBottomLeft.style.visibility = m, o.shadowTopRight.style.visibility = f, o.shadowBottomRight.style.visibility = m, this.options.verticalScroll ? (o.shadowTopRight.style.visibility = "hidden", o.shadowBottomRight.style.visibility = "hidden", o.shadowTopLeft.style.visibility = "hidden", o.shadowBottomLeft.style.visibility = "hidden") : (o.left.style.top = p + "px", o.right.style.top = p + "px");
                var v = this.props.center.height > this.props.centerContainer.height;
                this.hammer.get("pan").set({direction: v ? r.DIRECTION_ALL : r.DIRECTION_HORIZONTAL}), this.components.forEach(function (e) {
                    t = e.redraw() || t
                });
                var g = 5;
                if (t) {
                    if (this.redrawCount < g)return void this.body.emitter.emit("_change");
                    console.log("WARNING: infinite loop in redraw?")
                } else this.redrawCount = 0;
                this.initialDrawDone = !0, this.body.emitter.emit("changed")
            }
        }, o.prototype.repaint = function () {
            throw new Error("Function repaint is deprecated. Use redraw instead.")
        }, o.prototype.setCurrentTime = function (t) {
            if (!this.currentTime)throw new Error("Option showCurrentTime must be true");
            this.currentTime.setCurrentTime(t)
        }, o.prototype.getCurrentTime = function () {
            if (!this.currentTime)throw new Error("Option showCurrentTime must be true");
            return this.currentTime.getCurrentTime()
        }, o.prototype._toTime = function (t) {
            return c.toTime(this, t, this.props.center.width)
        }, o.prototype._toGlobalTime = function (t) {
            return c.toTime(this, t, this.props.root.width)
        }, o.prototype._toScreen = function (t) {
            return c.toScreen(this, t, this.props.center.width)
        }, o.prototype._toGlobalScreen = function (t) {
            return c.toScreen(this, t, this.props.root.width)
        }, o.prototype._initAutoResize = function () {
            1 == this.options.autoResize ? this._startAutoResize() : this._stopAutoResize()
        }, o.prototype._startAutoResize = function () {
            var t = this;
            this._stopAutoResize(), this._onResize = function () {
                return 1 != t.options.autoResize ? void t._stopAutoResize() : void(t.dom.root && (t.dom.root.offsetWidth == t.props.lastWidth && t.dom.root.offsetHeight == t.props.lastHeight || (t.props.lastWidth = t.dom.root.offsetWidth, t.props.lastHeight = t.dom.root.offsetHeight, t.body.emitter.emit("_change"))))
            }, h.addEventListener(window, "resize", this._onResize), t.dom.root && (t.props.lastWidth = t.dom.root.offsetWidth, t.props.lastHeight = t.dom.root.offsetHeight), this.watchTimer = setInterval(this._onResize, 1e3)
        }, o.prototype._stopAutoResize = function () {
            this.watchTimer && (clearInterval(this.watchTimer), this.watchTimer = void 0), this._onResize && (h.removeEventListener(window, "resize", this._onResize), this._onResize = null)
        }, o.prototype._onTouch = function (t) {
            this.touch.allowDragging = !0, this.touch.initialScrollTop = this.props.scrollTop
        }, o.prototype._onPinch = function (t) {
            this.touch.allowDragging = !1
        }, o.prototype._onDrag = function (t) {
            if (t && this.touch.allowDragging) {
                var e = t.deltaY, i = this._getScrollTop(), o = this._setScrollTop(this.touch.initialScrollTop + e);
                this.options.verticalScroll && (this.dom.left.parentNode.scrollTop = -this.props.scrollTop, this.dom.right.parentNode.scrollTop = -this.props.scrollTop), o != i && this.emit("verticalDrag")
            }
        }, o.prototype._setScrollTop = function (t) {
            return this.props.scrollTop = t, this._updateScrollTop(), this.props.scrollTop
        }, o.prototype._updateScrollTop = function () {
            var t = Math.min(this.props.centerContainer.height - this.props.center.height, 0);
            return t != this.props.scrollTopMin && ("top" != this.options.orientation.item && (this.props.scrollTop += t - this.props.scrollTopMin), this.props.scrollTopMin = t), this.props.scrollTop > 0 && (this.props.scrollTop = 0), this.props.scrollTop < t && (this.props.scrollTop = t), this.props.scrollTop
        }, o.prototype._getScrollTop = function () {
            return this.props.scrollTop
        }, o.prototype._createConfigurator = function () {
            throw new Error("Cannot invoke abstract method _createConfigurator")
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e) {
            this.body = t, this.defaultOptions = {
                type: null,
                orientation: {item: "bottom"},
                align: "auto",
                stack: !0,
                groupOrderSwap: function (t, e, i) {
                    var o = e.order;
                    e.order = t.order, t.order = o
                },
                groupOrder: "order",
                selectable: !0,
                multiselect: !1,
                itemsAlwaysDraggable: !1,
                editable: {updateTime: !1, updateGroup: !1, add: !1, remove: !1},
                groupEditable: {order: !1, add: !1, remove: !1},
                snap: d.snap,
                onAdd: function (t, e) {
                    e(t)
                },
                onUpdate: function (t, e) {
                    e(t)
                },
                onMove: function (t, e) {
                    e(t)
                },
                onRemove: function (t, e) {
                    e(t)
                },
                onMoving: function (t, e) {
                    e(t)
                },
                onAddGroup: function (t, e) {
                    e(t)
                },
                onMoveGroup: function (t, e) {
                    e(t)
                },
                onRemoveGroup: function (t, e) {
                    e(t)
                },
                margin: {item: {horizontal: 10, vertical: 10}, axis: 20},
                tooltipOnItemUpdateTime: !1
            }, this.options = r.extend({}, this.defaultOptions), this.options.rtl = e.rtl, this.itemOptions = {
                type: {
                    start: "Date",
                    end: "Date"
                }
            }, this.conversion = {
                toScreen: t.util.toScreen,
                toTime: t.util.toTime
            }, this.dom = {}, this.props = {}, this.hammer = null;
            var i = this;
            this.itemsData = null, this.groupsData = null, this.itemListeners = {
                add: function (t, e, o) {
                    i._onAdd(e.items)
                }, update: function (t, e, o) {
                    i._onUpdate(e.items)
                }, remove: function (t, e, o) {
                    i._onRemove(e.items)
                }
            }, this.groupListeners = {
                add: function (t, e, o) {
                    i._onAddGroups(e.items)
                }, update: function (t, e, o) {
                    i._onUpdateGroups(e.items)
                }, remove: function (t, e, o) {
                    i._onRemoveGroups(e.items)
                }
            }, this.items = {}, this.groups = {}, this.groupIds = [], this.selection = [], this.stackDirty = !0, this.touchParams = {}, this.groupTouchParams = {}, this._create(), this.setOptions(e)
        }

        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s = i(22), r = i(1), a = i(9), h = i(11), d = i(37), l = i(33), c = i(38), u = i(42), p = i(43), f = i(44), m = i(40), v = i(45), g = "__ungrouped__", y = "__background__";
        o.prototype = new l, o.types = {background: v, box: p, range: m, point: f}, o.prototype._create = function () {
            var t = document.createElement("div");
            t.className = "vis-itemset", t["timeline-itemset"] = this, this.dom.frame = t;
            var e = document.createElement("div");
            e.className = "vis-background", t.appendChild(e), this.dom.background = e;
            var i = document.createElement("div");
            i.className = "vis-foreground", t.appendChild(i), this.dom.foreground = i;
            var o = document.createElement("div");
            o.className = "vis-axis", this.dom.axis = o;
            var n = document.createElement("div");
            n.className = "vis-labelset", this.dom.labelSet = n, this._updateUngrouped();
            var r = new u(y, null, this);
            r.show(), this.groups[y] = r, this.hammer = new s(this.body.dom.centerContainer), this.hammer.on("hammer.input", function (t) {
                t.isFirst && this._onTouch(t)
            }.bind(this)), this.hammer.on("panstart", this._onDragStart.bind(this)), this.hammer.on("panmove", this._onDrag.bind(this)),
                this.hammer.on("panend", this._onDragEnd.bind(this)), this.hammer.get("pan").set({
                threshold: 5,
                direction: s.DIRECTION_HORIZONTAL
            }), this.hammer.on("tap", this._onSelectItem.bind(this)), this.hammer.on("press", this._onMultiSelectItem.bind(this)), this.hammer.on("doubletap", this._onAddItem.bind(this)), this.options.rtl ? this.groupHammer = new s(this.body.dom.rightContainer) : this.groupHammer = new s(this.body.dom.leftContainer), this.groupHammer.on("panstart", this._onGroupDragStart.bind(this)), this.groupHammer.on("panmove", this._onGroupDrag.bind(this)), this.groupHammer.on("panend", this._onGroupDragEnd.bind(this)), this.groupHammer.get("pan").set({
                threshold: 5,
                direction: s.DIRECTION_HORIZONTAL
            }), this.body.dom.centerContainer.addEventListener("mouseover", this._onMouseOver.bind(this)), this.body.dom.centerContainer.addEventListener("mouseout", this._onMouseOut.bind(this)), this.show()
        }, o.prototype.setOptions = function (t) {
            if (t) {
                var e = ["type", "rtl", "align", "order", "stack", "selectable", "multiselect", "itemsAlwaysDraggable", "multiselectPerGroup", "groupOrder", "dataAttributes", "template", "groupTemplate", "hide", "snap", "groupOrderSwap", "tooltipOnItemUpdateTime"];
                r.selectiveExtend(e, this.options, t), "orientation"in t && ("string" == typeof t.orientation ? this.options.orientation.item = "top" === t.orientation ? "top" : "bottom" : "object" === n(t.orientation) && "item"in t.orientation && (this.options.orientation.item = t.orientation.item)), "margin"in t && ("number" == typeof t.margin ? (this.options.margin.axis = t.margin, this.options.margin.item.horizontal = t.margin, this.options.margin.item.vertical = t.margin) : "object" === n(t.margin) && (r.selectiveExtend(["axis"], this.options.margin, t.margin), "item"in t.margin && ("number" == typeof t.margin.item ? (this.options.margin.item.horizontal = t.margin.item, this.options.margin.item.vertical = t.margin.item) : "object" === n(t.margin.item) && r.selectiveExtend(["horizontal", "vertical"], this.options.margin.item, t.margin.item)))), "editable"in t && ("boolean" == typeof t.editable ? (this.options.editable.updateTime = t.editable, this.options.editable.updateGroup = t.editable, this.options.editable.add = t.editable, this.options.editable.remove = t.editable) : "object" === n(t.editable) && r.selectiveExtend(["updateTime", "updateGroup", "add", "remove"], this.options.editable, t.editable)), "groupEditable"in t && ("boolean" == typeof t.groupEditable ? (this.options.groupEditable.order = t.groupEditable, this.options.groupEditable.add = t.groupEditable, this.options.groupEditable.remove = t.groupEditable) : "object" === n(t.groupEditable) && r.selectiveExtend(["order", "add", "remove"], this.options.groupEditable, t.groupEditable));
                var i = function (e) {
                    var i = t[e];
                    if (i) {
                        if (!(i instanceof Function))throw new Error("option " + e + " must be a function " + e + "(item, callback)");
                        this.options[e] = i
                    }
                }.bind(this);
                ["onAdd", "onUpdate", "onRemove", "onMove", "onMoving", "onAddGroup", "onMoveGroup", "onRemoveGroup"].forEach(i), this.markDirty()
            }
        }, o.prototype.markDirty = function (t) {
            this.groupIds = [], this.stackDirty = !0, t && t.refreshItems && r.forEach(this.items, function (t) {
                t.dirty = !0, t.displayed && t.redraw()
            })
        }, o.prototype.destroy = function () {
            this.hide(), this.setItems(null), this.setGroups(null), this.hammer = null, this.body = null, this.conversion = null
        }, o.prototype.hide = function () {
            this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame), this.dom.axis.parentNode && this.dom.axis.parentNode.removeChild(this.dom.axis), this.dom.labelSet.parentNode && this.dom.labelSet.parentNode.removeChild(this.dom.labelSet)
        }, o.prototype.show = function () {
            this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame), this.dom.axis.parentNode || this.body.dom.backgroundVertical.appendChild(this.dom.axis), this.dom.labelSet.parentNode || (this.options.rtl ? this.body.dom.right.appendChild(this.dom.labelSet) : this.body.dom.left.appendChild(this.dom.labelSet))
        }, o.prototype.setSelection = function (t) {
            var e, i, o, n;
            for (void 0 == t && (t = []), Array.isArray(t) || (t = [t]), e = 0, i = this.selection.length; e < i; e++)o = this.selection[e], n = this.items[o], n && n.unselect();
            for (this.selection = [], e = 0, i = t.length; e < i; e++)o = t[e], n = this.items[o], n && (this.selection.push(o), n.select())
        }, o.prototype.getSelection = function () {
            return this.selection.concat([])
        }, o.prototype.getVisibleItems = function () {
            var t = this.body.range.getRange();
            if (this.options.rtl)var e = this.body.util.toScreen(t.start), i = this.body.util.toScreen(t.end); else var i = this.body.util.toScreen(t.start), e = this.body.util.toScreen(t.end);
            var o = [];
            for (var n in this.groups)if (this.groups.hasOwnProperty(n))for (var s = this.groups[n], r = s.visibleItems, a = 0; a < r.length; a++) {
                var h = r[a];
                this.options.rtl ? h.right < i && h.right + h.width > e && o.push(h.id) : h.left < e && h.left + h.width > i && o.push(h.id)
            }
            return o
        }, o.prototype._deselect = function (t) {
            for (var e = this.selection, i = 0, o = e.length; i < o; i++)if (e[i] == t) {
                e.splice(i, 1);
                break
            }
        }, o.prototype.redraw = function () {
            var t = this.options.margin, e = this.body.range, i = r.option.asSize, o = this.options, n = o.orientation.item, s = !1, a = this.dom.frame;
            this.props.top = this.body.domProps.top.height + this.body.domProps.border.top, this.options.rtl ? this.props.right = this.body.domProps.right.width + this.body.domProps.border.right : this.props.left = this.body.domProps.left.width + this.body.domProps.border.left, a.className = "vis-itemset", s = this._orderGroups() || s;
            var h = e.end - e.start, d = h != this.lastVisibleInterval || this.props.width != this.props.lastWidth;
            d && (this.stackDirty = !0), this.lastVisibleInterval = h, this.props.lastWidth = this.props.width;
            var l = this.stackDirty, c = this._firstGroup(), u = {item: t.item, axis: t.axis}, p = {
                item: t.item,
                axis: t.item.vertical / 2
            }, f = 0, m = t.axis + t.item.vertical;
            return this.groups[y].redraw(e, p, l), r.forEach(this.groups, function (t) {
                var i = t == c ? u : p, o = t.redraw(e, i, l);
                s = o || s, f += t.height
            }), f = Math.max(f, m), this.stackDirty = !1, a.style.height = i(f), this.props.width = a.offsetWidth, this.props.height = f, this.dom.axis.style.top = i("top" == n ? this.body.domProps.top.height + this.body.domProps.border.top : this.body.domProps.top.height + this.body.domProps.centerContainer.height), this.options.rtl ? this.dom.axis.style.right = "0" : this.dom.axis.style.left = "0", s = this._isResized() || s
        }, o.prototype._firstGroup = function () {
            var t = "top" == this.options.orientation.item ? 0 : this.groupIds.length - 1, e = this.groupIds[t], i = this.groups[e] || this.groups[g];
            return i || null
        }, o.prototype._updateUngrouped = function () {
            var t, e, i = this.groups[g];
            this.groups[y];
            if (this.groupsData) {
                if (i) {
                    i.hide(), delete this.groups[g];
                    for (e in this.items)if (this.items.hasOwnProperty(e)) {
                        t = this.items[e], t.parent && t.parent.remove(t);
                        var o = this._getGroupId(t.data), n = this.groups[o];
                        n && n.add(t) || t.hide()
                    }
                }
            } else if (!i) {
                var s = null, r = null;
                i = new c(s, r, this), this.groups[g] = i;
                for (e in this.items)this.items.hasOwnProperty(e) && (t = this.items[e], i.add(t));
                i.show()
            }
        }, o.prototype.getLabelSet = function () {
            return this.dom.labelSet
        }, o.prototype.setItems = function (t) {
            var e, i = this, o = this.itemsData;
            if (t) {
                if (!(t instanceof a || t instanceof h))throw new TypeError("Data must be an instance of DataSet or DataView");
                this.itemsData = t
            } else this.itemsData = null;
            if (o && (r.forEach(this.itemListeners, function (t, e) {
                    o.off(e, t)
                }), e = o.getIds(), this._onRemove(e)), this.itemsData) {
                var n = this.id;
                r.forEach(this.itemListeners, function (t, e) {
                    i.itemsData.on(e, t, n)
                }), e = this.itemsData.getIds(), this._onAdd(e), this._updateUngrouped()
            }
            this.body.emitter.emit("_change", {queue: !0})
        }, o.prototype.getItems = function () {
            return this.itemsData
        }, o.prototype.setGroups = function (t) {
            var e, i = this;
            if (this.groupsData && (r.forEach(this.groupListeners, function (t, e) {
                    i.groupsData.off(e, t)
                }), e = this.groupsData.getIds(), this.groupsData = null, this._onRemoveGroups(e)), t) {
                if (!(t instanceof a || t instanceof h))throw new TypeError("Data must be an instance of DataSet or DataView");
                this.groupsData = t
            } else this.groupsData = null;
            if (this.groupsData) {
                var o = this.id;
                r.forEach(this.groupListeners, function (t, e) {
                    i.groupsData.on(e, t, o)
                }), e = this.groupsData.getIds(), this._onAddGroups(e)
            }
            this._updateUngrouped(), this._order(), this.body.emitter.emit("_change", {queue: !0})
        }, o.prototype.getGroups = function () {
            return this.groupsData
        }, o.prototype.removeItem = function (t) {
            var e = this.itemsData.get(t), i = this.itemsData.getDataSet();
            e && this.options.onRemove(e, function (e) {
                e && i.remove(t)
            })
        }, o.prototype._getType = function (t) {
            return t.type || this.options.type || (t.end ? "range" : "box")
        }, o.prototype._getGroupId = function (t) {
            var e = this._getType(t);
            return "background" == e && void 0 == t.group ? y : this.groupsData ? t.group : g
        }, o.prototype._onUpdate = function (t) {
            var e = this;
            t.forEach(function (t) {
                var i, n = e.itemsData.get(t, e.itemOptions), s = e.items[t], r = n ? e._getType(n) : null, a = o.types[r];
                if (s && (a && s instanceof a ? e._updateItem(s, n) : (i = s.selected, e._removeItem(s), s = null)), !s && n) {
                    if (!a)throw"rangeoverflow" == r ? new TypeError('Item type "rangeoverflow" is deprecated. Use css styling instead: .vis-item.vis-range .vis-item-content {overflow: visible;}') : new TypeError('Unknown item type "' + r + '"');
                    s = new a(n, e.conversion, e.options), s.id = t, e._addItem(s), i && (this.selection.push(t), s.select())
                }
            }.bind(this)), this._order(), this.stackDirty = !0, this.body.emitter.emit("_change", {queue: !0})
        }, o.prototype._onAdd = o.prototype._onUpdate, o.prototype._onRemove = function (t) {
            var e = 0, i = this;
            t.forEach(function (t) {
                var o = i.items[t];
                o && (e++, i._removeItem(o))
            }), e && (this._order(), this.stackDirty = !0, this.body.emitter.emit("_change", {queue: !0}))
        }, o.prototype._order = function () {
            r.forEach(this.groups, function (t) {
                t.order()
            })
        }, o.prototype._onUpdateGroups = function (t) {
            this._onAddGroups(t)
        }, o.prototype._onAddGroups = function (t) {
            var e = this;
            t.forEach(function (t) {
                var i = e.groupsData.get(t), o = e.groups[t];
                if (o)o.setData(i); else {
                    if (t == g || t == y)throw new Error("Illegal group id. " + t + " is a reserved id.");
                    var n = Object.create(e.options);
                    r.extend(n, {height: null}), o = new c(t, i, e), e.groups[t] = o;
                    for (var s in e.items)if (e.items.hasOwnProperty(s)) {
                        var a = e.items[s];
                        a.data.group == t && o.add(a)
                    }
                    o.order(), o.show()
                }
            }), this.body.emitter.emit("_change", {queue: !0})
        }, o.prototype._onRemoveGroups = function (t) {
            var e = this.groups;
            t.forEach(function (t) {
                var i = e[t];
                i && (i.hide(), delete e[t])
            }), this.markDirty(), this.body.emitter.emit("_change", {queue: !0})
        }, o.prototype._orderGroups = function () {
            if (this.groupsData) {
                var t = this.groupsData.getIds({order: this.options.groupOrder}), e = !r.equalArray(t, this.groupIds);
                if (e) {
                    var i = this.groups;
                    t.forEach(function (t) {
                        i[t].hide()
                    }), t.forEach(function (t) {
                        i[t].show()
                    }), this.groupIds = t
                }
                return e
            }
            return !1
        }, o.prototype._addItem = function (t) {
            this.items[t.id] = t;
            var e = this._getGroupId(t.data), i = this.groups[e];
            i && i.add(t)
        }, o.prototype._updateItem = function (t, e) {
            var i = t.data.group, o = t.data.subgroup;
            if (t.setData(e), i != t.data.group || o != t.data.subgroup) {
                var n = this.groups[i];
                n && n.remove(t);
                var s = this._getGroupId(t.data), r = this.groups[s];
                r && r.add(t)
            }
        }, o.prototype._removeItem = function (t) {
            t.hide(), delete this.items[t.id];
            var e = this.selection.indexOf(t.id);
            e != -1 && this.selection.splice(e, 1), t.parent && t.parent.remove(t)
        }, o.prototype._constructByEndArray = function (t) {
            for (var e = [], i = 0; i < t.length; i++)t[i]instanceof m && e.push(t[i]);
            return e
        }, o.prototype._onTouch = function (t) {
            this.touchParams.item = this.itemFromTarget(t), this.touchParams.dragLeftItem = t.target.dragLeftItem || !1, this.touchParams.dragRightItem = t.target.dragRightItem || !1, this.touchParams.itemProps = null
        }, o.prototype._getGroupIndex = function (t) {
            for (var e = 0; e < this.groupIds.length; e++)if (t == this.groupIds[e])return e
        }, o.prototype._onDragStart = function (t) {
            var e, i = this.touchParams.item || null, o = this;
            if (i && (i.selected || this.options.itemsAlwaysDraggable)) {
                if (!this.options.editable.updateTime && !this.options.editable.updateGroup && !i.editable)return;
                if (i.editable === !1)return;
                var n = this.touchParams.dragLeftItem, s = this.touchParams.dragRightItem;
                if (this.touchParams.itemIsDragging = !0, n)e = {
                    item: n,
                    initialX: t.center.x,
                    dragLeft: !0,
                    data: this._cloneItemData(i.data)
                }, this.touchParams.itemProps = [e]; else if (s)e = {
                    item: s,
                    initialX: t.center.x,
                    dragRight: !0,
                    data: this._cloneItemData(i.data)
                }, this.touchParams.itemProps = [e]; else {
                    this.touchParams.selectedItem = i;
                    var r = this._getGroupIndex(i.data.group), a = this.options.itemsAlwaysDraggable && !i.selected ? [i.id] : this.getSelection();
                    this.touchParams.itemProps = a.map(function (e) {
                        var i = o.items[e], n = o._getGroupIndex(i.data.group);
                        return {item: i, initialX: t.center.x, groupOffset: r - n, data: this._cloneItemData(i.data)}
                    }.bind(this))
                }
                t.stopPropagation()
            } else this.options.editable.add && (t.srcEvent.ctrlKey || t.srcEvent.metaKey) && this._onDragStartAddItem(t)
        }, o.prototype._onDragStartAddItem = function (t) {
            var e = this.options.snap || null;
            if (this.options.rtl)var i = r.getAbsoluteRight(this.dom.frame), o = i - t.center.x + 10; else var i = r.getAbsoluteLeft(this.dom.frame), o = t.center.x - i - 10;
            var n = this.body.util.toTime(o), s = this.body.util.getScale(), a = this.body.util.getStep(), h = e ? e(n, s, a) : n, d = h, l = {
                type: "range",
                start: h,
                end: d,
                content: "new item"
            }, c = r.randomUUID();
            l[this.itemsData._fieldId] = c;
            var u = this.groupFromTarget(t);
            u && (l.group = u.groupId);
            var p = new m(l, this.conversion, this.options);
            p.id = c, p.data = this._cloneItemData(l), this._addItem(p);
            var f = {item: p, initialX: t.center.x, data: p.data};
            this.options.rtl ? f.dragLeft = !0 : f.dragRight = !0, this.touchParams.itemProps = [f], t.stopPropagation()
        }, o.prototype._onDrag = function (t) {
            if (this.touchParams.itemProps) {
                t.stopPropagation();
                var e = this, i = this.options.snap || null;
                if (this.options.rtl)var o = this.body.dom.root.offsetLeft + this.body.domProps.right.width; else var o = this.body.dom.root.offsetLeft + this.body.domProps.left.width;
                var n = this.body.util.getScale(), s = this.body.util.getStep(), a = this.touchParams.selectedItem, h = e.options.editable.updateGroup, d = null;
                if (h && a && void 0 != a.data.group) {
                    var l = e.groupFromTarget(t);
                    l && (d = this._getGroupIndex(l.groupId))
                }
                this.touchParams.itemProps.forEach(function (a) {
                    var h = e.body.util.toTime(t.center.x - o), l = e.body.util.toTime(a.initialX - o);
                    if (this.options.rtl)var c = -(h - l); else var c = h - l;
                    var u = this._cloneItemData(a.item.data);
                    if (a.item.editable !== !1) {
                        var p = e.options.editable.updateTime || a.item.editable === !0;
                        if (p)if (a.dragLeft) {
                            if (this.options.rtl) {
                                if (void 0 != u.end) {
                                    var f = r.convert(a.data.end, "Date"), m = new Date(f.valueOf() + c);
                                    u.end = i ? i(m, n, s) : m
                                }
                            } else if (void 0 != u.start) {
                                var v = r.convert(a.data.start, "Date"), g = new Date(v.valueOf() + c);
                                u.start = i ? i(g, n, s) : g
                            }
                        } else if (a.dragRight) {
                            if (this.options.rtl) {
                                if (void 0 != u.start) {
                                    var v = r.convert(a.data.start, "Date"), g = new Date(v.valueOf() + c);
                                    u.start = i ? i(g, n, s) : g
                                }
                            } else if (void 0 != u.end) {
                                var f = r.convert(a.data.end, "Date"), m = new Date(f.valueOf() + c);
                                u.end = i ? i(m, n, s) : m
                            }
                        } else if (void 0 != u.start) {
                            var v = r.convert(a.data.start, "Date").valueOf(), g = new Date(v + c);
                            if (void 0 != u.end) {
                                var f = r.convert(a.data.end, "Date"), y = f.valueOf() - v.valueOf();
                                u.start = i ? i(g, n, s) : g, u.end = new Date(u.start.valueOf() + y)
                            } else u.start = i ? i(g, n, s) : g
                        }
                        var b = e.options.editable.updateGroup || a.item.editable === !0;
                        if (b && !a.dragLeft && !a.dragRight && null != d && void 0 != u.group) {
                            var _ = d - a.groupOffset;
                            _ = Math.max(0, _), _ = Math.min(e.groupIds.length - 1, _), u.group = e.groupIds[_]
                        }
                        u = this._cloneItemData(u), e.options.onMoving(u, function (t) {
                            t && a.item.setData(this._cloneItemData(t, "Date"))
                        }.bind(this))
                    }
                }.bind(this)), this.stackDirty = !0, this.body.emitter.emit("_change")
            }
        }, o.prototype._moveToGroup = function (t, e) {
            var i = this.groups[e];
            if (i && i.groupId != t.data.group) {
                var o = t.parent;
                o.remove(t), o.order(), i.add(t), i.order(), t.data.group = i.groupId
            }
        }, o.prototype._onDragEnd = function (t) {
            if (this.touchParams.itemProps) {
                t.stopPropagation();
                var e = this, i = this.itemsData.getDataSet(), o = this.touchParams.itemProps;
                this.touchParams.itemProps = null, this.touchParams.itemIsDragging = !1, o.forEach(function (t) {
                    var o = t.item.id, n = null != e.itemsData.get(o, e.itemOptions);
                    if (n) {
                        var s = this._cloneItemData(t.item.data);
                        e.options.onMove(s, function (n) {
                            n ? (n[i._fieldId] = o, i.update(n)) : (t.item.setData(t.data), e.stackDirty = !0, e.body.emitter.emit("_change"))
                        })
                    } else e.options.onAdd(t.item.data, function (i) {
                        e._removeItem(t.item), i && e.itemsData.getDataSet().add(i), e.stackDirty = !0, e.body.emitter.emit("_change")
                    })
                }.bind(this))
            }
        }, o.prototype._onGroupDragStart = function (t) {
            this.options.groupEditable.order && (this.groupTouchParams.group = this.groupFromTarget(t), this.groupTouchParams.group && (t.stopPropagation(), this.groupTouchParams.originalOrder = this.groupsData.getIds({order: this.options.groupOrder})))
        }, o.prototype._onGroupDrag = function (t) {
            if (this.options.groupEditable.order && this.groupTouchParams.group) {
                t.stopPropagation();
                var e = this.groupFromTarget(t);
                if (e && e.height != this.groupTouchParams.group.height) {
                    var i = e.top < this.groupTouchParams.group.top, o = t.center ? t.center.y : t.clientY, n = r.getAbsoluteTop(e.dom.foreground), s = this.groupTouchParams.group.height;
                    if (i) {
                        if (n + s < o)return
                    } else {
                        var a = e.height;
                        if (n + a - s > o)return
                    }
                }
                if (e && e != this.groupTouchParams.group) {
                    var h = this.groupsData, d = h.get(e.groupId), l = h.get(this.groupTouchParams.group.groupId);
                    l && d && (this.options.groupOrderSwap(l, d, this.groupsData), this.groupsData.update(l), this.groupsData.update(d));
                    var c = this.groupsData.getIds({order: this.options.groupOrder});
                    if (!r.equalArray(c, this.groupTouchParams.originalOrder))for (var h = this.groupsData, u = this.groupTouchParams.originalOrder, p = this.groupTouchParams.group.groupId, f = Math.min(u.length, c.length), m = 0, v = 0, g = 0; m < f;) {
                        for (; m + v < f && m + g < f && c[m + v] == u[m + g];)m++;
                        if (m + v >= f)break;
                        if (c[m + v] != p)if (u[m + g] != p) {
                            var y = c.indexOf(u[m + g]), b = h.get(c[m + v]), _ = h.get(u[m + g]);
                            this.options.groupOrderSwap(b, _, h), h.update(b), h.update(_);
                            var w = c[m + v];
                            c[m + v] = u[m + g], c[y] = w, m++
                        } else g = 1; else v = 1
                    }
                }
            }
        }, o.prototype._onGroupDragEnd = function (t) {
            if (this.options.groupEditable.order && this.groupTouchParams.group) {
                t.stopPropagation();
                var e = this, i = e.groupTouchParams.group.groupId, o = e.groupsData.getDataSet(), n = r.extend({}, o.get(i));
                e.options.onMoveGroup(n, function (t) {
                    if (t)t[o._fieldId] = i, o.update(t); else {
                        var n = o.getIds({order: e.options.groupOrder});
                        if (!r.equalArray(n, e.groupTouchParams.originalOrder))for (var s = e.groupTouchParams.originalOrder, a = Math.min(s.length, n.length), h = 0; h < a;) {
                            for (; h < a && n[h] == s[h];)h++;
                            if (h >= a)break;
                            var d = n.indexOf(s[h]), l = o.get(n[h]), c = o.get(s[h]);
                            e.options.groupOrderSwap(l, c, o), groupsData.update(l), groupsData.update(c);
                            var u = n[h];
                            n[h] = s[h], n[d] = u, h++
                        }
                    }
                }), e.body.emitter.emit("groupDragged", {groupId: i})
            }
        }, o.prototype._onSelectItem = function (t) {
            if (this.options.selectable) {
                var e = t.srcEvent && (t.srcEvent.ctrlKey || t.srcEvent.metaKey), i = t.srcEvent && t.srcEvent.shiftKey;
                if (e || i)return void this._onMultiSelectItem(t);
                var o = this.getSelection(), n = this.itemFromTarget(t), s = n ? [n.id] : [];
                this.setSelection(s);
                var r = this.getSelection();
                (r.length > 0 || o.length > 0) && this.body.emitter.emit("select", {items: r, event: t})
            }
        }, o.prototype._onMouseOver = function (t) {
            var e = this.itemFromTarget(t);
            e && this.body.emitter.emit("itemover", {item: e.id, event: t})
        }, o.prototype._onMouseOut = function (t) {
            var e = this.itemFromTarget(t);
            e && this.body.emitter.emit("itemout", {item: e.id, event: t})
        }, o.prototype._onAddItem = function (t) {
            if (this.options.selectable && this.options.editable.add) {
                var e = this, i = this.options.snap || null, o = this.itemFromTarget(t);
                if (o) {
                    var n = e.itemsData.get(o.id);
                    this.options.onUpdate(n, function (t) {
                        t && e.itemsData.getDataSet().update(t)
                    })
                } else {
                    if (this.options.rtl)var s = r.getAbsoluteRight(this.dom.frame), a = s - t.center.x; else var s = r.getAbsoluteLeft(this.dom.frame), a = t.center.x - s;
                    var h = this.body.util.toTime(a), d = this.body.util.getScale(), l = this.body.util.getStep(), c = {
                        start: i ? i(h, d, l) : h,
                        content: "new item"
                    };
                    if ("drop" == t.type) {
                        var n = JSON.parse(t.dataTransfer.getData("text/plain"));
                        if (c.content = n.content, c.type = n.type || "box", c[this.itemsData._fieldId] = n.id || r.randomUUID(), "range" == n.type || n.end && n.start)if (n.end)c.end = new Date(c.start._i).getTime() + new Date(n.end).getTime() - new Date(n.start).getTime(); else {
                            var u = this.body.util.toTime(a + this.props.width / 5);
                            c.end = i ? i(u, d, l) : u
                        }
                    } else if (c[this.itemsData._fieldId] = r.randomUUID(), "range" === this.options.type) {
                        var u = this.body.util.toTime(a + this.props.width / 5);
                        c.end = i ? i(u, d, l) : u
                    }
                    var p = this.groupFromTarget(t);
                    p && (c.group = p.groupId), c = this._cloneItemData(c), this.options.onAdd(c, function (i) {
                        i && (e.itemsData.getDataSet().add(i), "drop" == t.type && e.setSelection([i.id]))
                    })
                }
            }
        }, o.prototype._onMultiSelectItem = function (t) {
            if (this.options.selectable) {
                var e = this.itemFromTarget(t);
                if (e) {
                    var i = this.options.multiselect ? this.getSelection() : [], n = t.srcEvent && t.srcEvent.shiftKey || !1;
                    if (n && this.options.multiselect) {
                        var s = this.itemsData.get(e.id).group, r = void 0;
                        this.options.multiselectPerGroup && i.length > 0 && (r = this.itemsData.get(i[0]).group), this.options.multiselectPerGroup && void 0 != r && r != s || i.push(e.id);
                        var a = o._getItemRange(this.itemsData.get(i, this.itemOptions));
                        if (!this.options.multiselectPerGroup || r == s) {
                            i = [];
                            for (var h in this.items)if (this.items.hasOwnProperty(h)) {
                                var d = this.items[h], l = d.data.start, c = void 0 !== d.data.end ? d.data.end : l;
                                !(l >= a.min && c <= a.max) || this.options.multiselectPerGroup && r != this.itemsData.get(d.id).group || d instanceof v || i.push(d.id)
                            }
                        }
                    } else {
                        var u = i.indexOf(e.id);
                        u == -1 ? i.push(e.id) : i.splice(u, 1)
                    }
                    this.setSelection(i), this.body.emitter.emit("select", {items: this.getSelection(), event: t})
                }
            }
        }, o._getItemRange = function (t) {
            var e = null, i = null;
            return t.forEach(function (t) {
                (null == i || t.start < i) && (i = t.start), void 0 != t.end ? (null == e || t.end > e) && (e = t.end) : (null == e || t.start > e) && (e = t.start)
            }), {min: i, max: e}
        }, o.prototype.itemFromTarget = function (t) {
            for (var e = t.target; e;) {
                if (e.hasOwnProperty("timeline-item"))return e["timeline-item"];
                e = e.parentNode
            }
            return null
        }, o.prototype.groupFromTarget = function (t) {
            for (var e = t.center ? t.center.y : t.clientY, i = 0; i < this.groupIds.length; i++) {
                var o = this.groupIds[i], n = this.groups[o], s = n.dom.foreground, a = r.getAbsoluteTop(s);
                if (e > a && e < a + s.offsetHeight)return n;
                if ("top" === this.options.orientation.item) {
                    if (i === this.groupIds.length - 1 && e > a)return n
                } else if (0 === i && e < a + s.offset)return n
            }
            return null
        }, o.itemSetFromTarget = function (t) {
            for (var e = t.target; e;) {
                if (e.hasOwnProperty("timeline-itemset"))return e["timeline-itemset"];
                e = e.parentNode
            }
            return null
        }, o.prototype._cloneItemData = function (t, e) {
            var i = r.extend({}, t);
            return e || (e = this.itemsData.getDataSet()._options.type), void 0 != i.start && (i.start = r.convert(i.start, e && e.start || "Date")), void 0 != i.end && (i.end = r.convert(i.end, e && e.end || "Date")), i
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i, s) {
            this.moment = n, this.current = this.moment(), this._start = this.moment(), this._end = this.moment(), this.autoScale = !0, this.scale = "day", this.step = 1, this.setRange(t, e, i), this.switchedDay = !1, this.switchedMonth = !1, this.switchedYear = !1, Array.isArray(s) ? this.hiddenDates = s : void 0 != s ? this.hiddenDates = [s] : this.hiddenDates = [], this.format = o.FORMAT
        }

        var n = i(2), s = i(34), r = i(1);
        o.FORMAT = {
            minorLabels: {
                millisecond: "SSS",
                second: "s",
                minute: "HH:mm",
                hour: "HH:mm",
                weekday: "ddd D",
                day: "D",
                month: "MMM",
                year: "YYYY"
            },
            majorLabels: {
                millisecond: "HH:mm:ss",
                second: "D MMMM HH:mm",
                minute: "ddd D MMMM",
                hour: "ddd D MMMM",
                weekday: "MMMM YYYY",
                day: "MMMM YYYY",
                month: "YYYY",
                year: ""
            }
        }, o.prototype.setMoment = function (t) {
            this.moment = t, this.current = this.moment(this.current.valueOf()), this._start = this.moment(this._start.valueOf()), this._end = this.moment(this._end.valueOf())
        }, o.prototype.setFormat = function (t) {
            var e = r.deepExtend({}, o.FORMAT);
            this.format = r.deepExtend(e, t)
        }, o.prototype.setRange = function (t, e, i) {
            if (!(t instanceof Date && e instanceof Date))throw"No legal start or end date in method setRange";
            this._start = void 0 != t ? this.moment(t.valueOf()) : new Date, this._end = void 0 != e ? this.moment(e.valueOf()) : new Date, this.autoScale && this.setMinimumStep(i)
        }, o.prototype.start = function () {
            this.current = this._start.clone(), this.roundToMinor()
        }, o.prototype.roundToMinor = function () {
            switch (this.scale) {
                case"year":
                    this.current.year(this.step * Math.floor(this.current.year() / this.step)), this.current.month(0);
                case"month":
                    this.current.date(1);
                case"day":
                case"weekday":
                    this.current.hours(0);
                case"hour":
                    this.current.minutes(0);
                case"minute":
                    this.current.seconds(0);
                case"second":
                    this.current.milliseconds(0)
            }
            if (1 != this.step)switch (this.scale) {
                case"millisecond":
                    this.current.subtract(this.current.milliseconds() % this.step, "milliseconds");
                    break;
                case"second":
                    this.current.subtract(this.current.seconds() % this.step, "seconds");
                    break;
                case"minute":
                    this.current.subtract(this.current.minutes() % this.step, "minutes");
                    break;
                case"hour":
                    this.current.subtract(this.current.hours() % this.step, "hours");
                    break;
                case"weekday":
                case"day":
                    this.current.subtract((this.current.date() - 1) % this.step, "day");
                    break;
                case"month":
                    this.current.subtract(this.current.month() % this.step, "month");
                    break;
                case"year":
                    this.current.subtract(this.current.year() % this.step, "year")
            }
        }, o.prototype.hasNext = function () {
            return this.current.valueOf() <= this._end.valueOf()
        }, o.prototype.next = function () {
            var t = this.current.valueOf();
            if (this.current.month() < 6)switch (this.scale) {
                case"millisecond":
                    this.current.add(this.step, "millisecond");
                    break;
                case"second":
                    this.current.add(this.step, "second");
                    break;
                case"minute":
                    this.current.add(this.step, "minute");
                    break;
                case"hour":
                    this.current.add(this.step, "hour"), this.current.subtract(this.current.hours() % this.step, "hour");
                    break;
                case"weekday":
                case"day":
                    this.current.add(this.step, "day");
                    break;
                case"month":
                    this.current.add(this.step, "month");
                    break;
                case"year":
                    this.current.add(this.step, "year")
            } else switch (this.scale) {
                case"millisecond":
                    this.current.add(this.step, "millisecond");
                    break;
                case"second":
                    this.current.add(this.step, "second");
                    break;
                case"minute":
                    this.current.add(this.step, "minute");
                    break;
                case"hour":
                    this.current.add(this.step, "hour");
                    break;
                case"weekday":
                case"day":
                    this.current.add(this.step, "day");
                    break;
                case"month":
                    this.current.add(this.step, "month");
                    break;
                case"year":
                    this.current.add(this.step, "year")
            }
            if (1 != this.step)switch (this.scale) {
                case"millisecond":
                    this.current.milliseconds() < this.step && this.current.milliseconds(0);
                    break;
                case"second":
                    this.current.seconds() < this.step && this.current.seconds(0);
                    break;
                case"minute":
                    this.current.minutes() < this.step && this.current.minutes(0);
                    break;
                case"hour":
                    this.current.hours() < this.step && this.current.hours(0);
                    break;
                case"weekday":
                case"day":
                    this.current.date() < this.step + 1 && this.current.date(1);
                    break;
                case"month":
                    this.current.month() < this.step && this.current.month(0);
                    break;
                case"year":
            }
            this.current.valueOf() == t && (this.current = this._end.clone()), this.switchedDay = !1, this.switchedMonth = !1, this.switchedYear = !1, s.stepOverHiddenDates(this.moment, this, t)
        }, o.prototype.getCurrent = function () {
            return this.current
        }, o.prototype.setScale = function (t) {
            t && "string" == typeof t.scale && (this.scale = t.scale, this.step = t.step > 0 ? t.step : 1, this.autoScale = !1)
        }, o.prototype.setAutoScale = function (t) {
            this.autoScale = t
        }, o.prototype.setMinimumStep = function (t) {
            if (void 0 != t) {
                var e = 31104e6, i = 2592e6, o = 864e5, n = 36e5, s = 6e4, r = 1e3, a = 1;
                1e3 * e > t && (this.scale = "year", this.step = 1e3), 500 * e > t && (this.scale = "year", this.step = 500), 100 * e > t && (this.scale = "year", this.step = 100), 50 * e > t && (this.scale = "year", this.step = 50), 10 * e > t && (this.scale = "year", this.step = 10), 5 * e > t && (this.scale = "year", this.step = 5), e > t && (this.scale = "year", this.step = 1), 3 * i > t && (this.scale = "month", this.step = 3), i > t && (this.scale = "month", this.step = 1), 5 * o > t && (this.scale = "day", this.step = 5), 2 * o > t && (this.scale = "day", this.step = 2), o > t && (this.scale = "day", this.step = 1), o / 2 > t && (this.scale = "weekday", this.step = 1), 4 * n > t && (this.scale = "hour", this.step = 4), n > t && (this.scale = "hour", this.step = 1), 15 * s > t && (this.scale = "minute", this.step = 15), 10 * s > t && (this.scale = "minute", this.step = 10), 5 * s > t && (this.scale = "minute", this.step = 5), s > t && (this.scale = "minute", this.step = 1), 15 * r > t && (this.scale = "second", this.step = 15), 10 * r > t && (this.scale = "second", this.step = 10), 5 * r > t && (this.scale = "second", this.step = 5), r > t && (this.scale = "second", this.step = 1), 200 * a > t && (this.scale = "millisecond", this.step = 200), 100 * a > t && (this.scale = "millisecond", this.step = 100), 50 * a > t && (this.scale = "millisecond", this.step = 50), 10 * a > t && (this.scale = "millisecond", this.step = 10), 5 * a > t && (this.scale = "millisecond", this.step = 5), a > t && (this.scale = "millisecond", this.step = 1)
            }
        }, o.snap = function (t, e, i) {
            var o = n(t);
            if ("year" == e) {
                var s = o.year() + Math.round(o.month() / 12);
                o.year(Math.round(s / i) * i), o.month(0), o.date(0), o.hours(0), o.minutes(0), o.seconds(0), o.milliseconds(0)
            } else if ("month" == e)o.date() > 15 ? (o.date(1), o.add(1, "month")) : o.date(1), o.hours(0), o.minutes(0), o.seconds(0), o.milliseconds(0); else if ("day" == e) {
                switch (i) {
                    case 5:
                    case 2:
                        o.hours(24 * Math.round(o.hours() / 24));
                        break;
                    default:
                        o.hours(12 * Math.round(o.hours() / 12))
                }
                o.minutes(0), o.seconds(0), o.milliseconds(0)
            } else if ("weekday" == e) {
                switch (i) {
                    case 5:
                    case 2:
                        o.hours(12 * Math.round(o.hours() / 12));
                        break;
                    default:
                        o.hours(6 * Math.round(o.hours() / 6))
                }
                o.minutes(0), o.seconds(0), o.milliseconds(0)
            } else if ("hour" == e) {
                switch (i) {
                    case 4:
                        o.minutes(60 * Math.round(o.minutes() / 60));
                        break;
                    default:
                        o.minutes(30 * Math.round(o.minutes() / 30))
                }
                o.seconds(0), o.milliseconds(0)
            } else if ("minute" == e) {
                switch (i) {
                    case 15:
                    case 10:
                        o.minutes(5 * Math.round(o.minutes() / 5)), o.seconds(0);
                        break;
                    case 5:
                        o.seconds(60 * Math.round(o.seconds() / 60));
                        break;
                    default:
                        o.seconds(30 * Math.round(o.seconds() / 30))
                }
                o.milliseconds(0)
            } else if ("second" == e)switch (i) {
                case 15:
                case 10:
                    o.seconds(5 * Math.round(o.seconds() / 5)), o.milliseconds(0);
                    break;
                case 5:
                    o.milliseconds(1e3 * Math.round(o.milliseconds() / 1e3));
                    break;
                default:
                    o.milliseconds(500 * Math.round(o.milliseconds() / 500))
            } else if ("millisecond" == e) {
                var r = i > 5 ? i / 2 : 1;
                o.milliseconds(Math.round(o.milliseconds() / r) * r)
            }
            return o
        }, o.prototype.isMajor = function () {
            if (1 == this.switchedYear)switch (this.scale) {
                case"year":
                case"month":
                case"weekday":
                case"day":
                case"hour":
                case"minute":
                case"second":
                case"millisecond":
                    return !0;
                default:
                    return !1
            } else if (1 == this.switchedMonth)switch (this.scale) {
                case"weekday":
                case"day":
                case"hour":
                case"minute":
                case"second":
                case"millisecond":
                    return !0;
                default:
                    return !1
            } else if (1 == this.switchedDay)switch (this.scale) {
                case"millisecond":
                case"second":
                case"minute":
                case"hour":
                    return !0;
                default:
                    return !1
            }
            var t = this.moment(this.current);
            switch (this.scale) {
                case"millisecond":
                    return 0 == t.milliseconds();
                case"second":
                    return 0 == t.seconds();
                case"minute":
                    return 0 == t.hours() && 0 == t.minutes();
                case"hour":
                    return 0 == t.hours();
                case"weekday":
                case"day":
                    return 1 == t.date();
                case"month":
                    return 0 == t.month();
                case"year":
                    return !1;
                default:
                    return !1
            }
        }, o.prototype.getLabelMinor = function (t) {
            if (void 0 == t && (t = this.current), "function" == typeof this.format.minorLabels)return this.format.minorLabels(t, this.scale, this.step);
            var e = this.format.minorLabels[this.scale];
            return e && e.length > 0 ? this.moment(t).format(e) : ""
        }, o.prototype.getLabelMajor = function (t) {
            if (void 0 == t && (t = this.current), "function" == typeof this.format.majorLabels)return this.format.majorLabels(t, this.scale, this.step);
            var e = this.format.majorLabels[this.scale];
            return e && e.length > 0 ? this.moment(t).format(e) : ""
        }, o.prototype.getClassName = function () {
            function t(t) {
                return t / h % 2 == 0 ? " vis-even" : " vis-odd"
            }

            function e(t) {
                return t.isSame(new Date, "day") ? " vis-today" : t.isSame(s().add(1, "day"), "day") ? " vis-tomorrow" : t.isSame(s().add(-1, "day"), "day") ? " vis-yesterday" : ""
            }

            function i(t) {
                return t.isSame(new Date, "week") ? " vis-current-week" : ""
            }

            function o(t) {
                return t.isSame(new Date, "month") ? " vis-current-month" : ""
            }

            function n(t) {
                return t.isSame(new Date, "year") ? " vis-current-year" : ""
            }

            var s = this.moment, r = this.moment(this.current), a = r.locale ? r.locale("en") : r.lang("en"), h = this.step;
            switch (this.scale) {
                case"millisecond":
                    return e(a) + t(a.milliseconds()).trim();
                case"second":
                    return e(a) + t(a.seconds()).trim();
                case"minute":
                    return e(a) + t(a.minutes()).trim();
                case"hour":
                    return "vis-h" + a.hours() + (4 == this.step ? "-h" + (a.hours() + 4) : "") + e(a) + t(a.hours());
                case"weekday":
                    return "vis-" + a.format("dddd").toLowerCase() + e(a) + i(a) + t(a.date());
                case"day":
                    return "vis-day" + a.date() + " vis-" + a.format("MMMM").toLowerCase() + e(a) + o(a) + this.step <= 2 ? e(a) : "" + this.step <= 2 ? " vis-" + a.format("dddd").toLowerCase() : "" + t(a.date() - 1);
                case"month":
                    return "vis-" + a.format("MMMM").toLowerCase() + o(a) + t(a.month());
                case"year":
                    var d = a.year();
                    return "vis-year" + d + n(a) + t(d);
                default:
                    return ""
            }
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i) {
            this.groupId = t, this.subgroups = {}, this.subgroupIndex = 0, this.subgroupOrderer = e && e.subgroupOrder, this.itemSet = i, this.isVisible = null, this.dom = {}, this.props = {
                label: {
                    width: 0,
                    height: 0
                }
            }, this.className = null, this.items = {}, this.visibleItems = [], this.orderedItems = {
                byStart: [],
                byEnd: []
            }, this.checkRangedItems = !1;
            var o = this;
            this.itemSet.body.emitter.on("checkRangedItems", function () {
                o.checkRangedItems = !0
            }), this._create(), this.setData(e)
        }

        var n = i(1), s = i(39);
        i(40);
        o.prototype._create = function () {
            var t = document.createElement("div");
            this.itemSet.options.groupEditable.order ? t.className = "vis-label draggable" : t.className = "vis-label", this.dom.label = t;
            var e = document.createElement("div");
            e.className = "vis-inner", t.appendChild(e), this.dom.inner = e;
            var i = document.createElement("div");
            i.className = "vis-group", i["timeline-group"] = this, this.dom.foreground = i, this.dom.background = document.createElement("div"), this.dom.background.className = "vis-group", this.dom.axis = document.createElement("div"), this.dom.axis.className = "vis-group", this.dom.marker = document.createElement("div"), this.dom.marker.style.visibility = "hidden", this.dom.marker.innerHTML = "?", this.dom.background.appendChild(this.dom.marker)
        }, o.prototype.setData = function (t) {
            var e, i;
            if (this.itemSet.options && this.itemSet.options.groupTemplate ? (i = this.itemSet.options.groupTemplate.bind(this), e = i(t, this.dom.inner)) : e = t && t.content, e instanceof Element) {
                for (this.dom.inner.appendChild(e); this.dom.inner.firstChild;)this.dom.inner.removeChild(this.dom.inner.firstChild);
                this.dom.inner.appendChild(e)
            } else e instanceof Object ? i(t, this.dom.inner) : void 0 !== e && null !== e ? this.dom.inner.innerHTML = e : this.dom.inner.innerHTML = this.groupId || "";
            this.dom.label.title = t && t.title || "", this.dom.inner.firstChild ? n.removeClassName(this.dom.inner, "vis-hidden") : n.addClassName(this.dom.inner, "vis-hidden");
            var o = t && t.className || null;
            o != this.className && (this.className && (n.removeClassName(this.dom.label, this.className), n.removeClassName(this.dom.foreground, this.className), n.removeClassName(this.dom.background, this.className), n.removeClassName(this.dom.axis, this.className)), n.addClassName(this.dom.label, o), n.addClassName(this.dom.foreground, o), n.addClassName(this.dom.background, o), n.addClassName(this.dom.axis, o), this.className = o), this.style && (n.removeCssText(this.dom.label, this.style), this.style = null), t && t.style && (n.addCssText(this.dom.label, t.style), this.style = t.style)
        }, o.prototype.getLabelWidth = function () {
            return this.props.label.width
        }, o.prototype.redraw = function (t, e, i) {
            var o = !1, r = this.dom.marker.clientHeight;
            r != this.lastMarkerHeight && (this.lastMarkerHeight = r, n.forEach(this.items, function (t) {
                t.dirty = !0, t.displayed && t.redraw()
            }), i = !0), this._calculateSubGroupHeights(), this.isVisible = this._isGroupVisible(t, e);
            var a = this.dom.foreground;
            if (this.top = a.offsetTop, this.right = a.offsetLeft, this.width = a.offsetWidth, this.isVisible = this._isGroupVisible(t, e), "function" == typeof this.itemSet.options.order) {
                if (i) {
                    var h = this, d = !1;
                    n.forEach(this.items, function (t) {
                        t.displayed || (t.redraw(), h.visibleItems.push(t)), t.repositionX(d)
                    });
                    var l = this.orderedItems.byStart.slice().sort(function (t, e) {
                        return h.itemSet.options.order(t.data, e.data)
                    });
                    s.stack(l, e, !0)
                }
                this.visibleItems = this._updateVisibleItems(this.orderedItems, this.visibleItems, t)
            } else this.visibleItems = this._updateVisibleItems(this.orderedItems, this.visibleItems, t), this.itemSet.options.stack ? s.stack(this.visibleItems, e, i) : s.nostack(this.visibleItems, e, this.subgroups);
            if (!this.isVisible && this.height)return o = !1;
            var c = this._calculateHeight(e), a = this.dom.foreground;
            this.top = a.offsetTop, this.right = a.offsetLeft, this.width = a.offsetWidth, o = n.updateProperty(this, "height", c) || o, o = n.updateProperty(this.props.label, "width", this.dom.inner.clientWidth) || o, o = n.updateProperty(this.props.label, "height", this.dom.inner.clientHeight) || o, this.dom.background.style.height = c + "px", this.dom.foreground.style.height = c + "px", this.dom.label.style.height = c + "px";
            for (var u = 0, p = this.visibleItems.length; u < p; u++) {
                var f = this.visibleItems[u];
                f.repositionY(e)
            }
            return o
        }, o.prototype._calculateSubGroupHeights = function () {
            if (Object.keys(this.subgroups).length > 0) {
                var t = this;
                this.resetSubgroups(), n.forEach(this.visibleItems, function (e) {
                    void 0 !== e.data.subgroup && (t.subgroups[e.data.subgroup].height = Math.max(t.subgroups[e.data.subgroup].height, e.height), t.subgroups[e.data.subgroup].visible = !0)
                })
            }
        }, o.prototype._isGroupVisible = function (t, e) {
            var i = this.top <= t.body.domProps.centerContainer.height - t.body.domProps.scrollTop + e.axis && this.top + this.height + e.axis >= -t.body.domProps.scrollTop;
            return i
        }, o.prototype._calculateHeight = function (t) {
            var e, i = this.visibleItems;
            if (i.length > 0) {
                var o = i[0].top, s = i[0].top + i[0].height;
                if (n.forEach(i, function (t) {
                        o = Math.min(o, t.top), s = Math.max(s, t.top + t.height)
                    }), o > t.axis) {
                    var r = o - t.axis;
                    s -= r, n.forEach(i, function (t) {
                        t.top -= r
                    })
                }
                e = s + t.item.vertical / 2
            } else e = 0;
            return e = Math.max(e, this.props.label.height)
        }, o.prototype.show = function () {
            this.dom.label.parentNode || this.itemSet.dom.labelSet.appendChild(this.dom.label), this.dom.foreground.parentNode || this.itemSet.dom.foreground.appendChild(this.dom.foreground), this.dom.background.parentNode || this.itemSet.dom.background.appendChild(this.dom.background), this.dom.axis.parentNode || this.itemSet.dom.axis.appendChild(this.dom.axis)
        }, o.prototype.hide = function () {
            var t = this.dom.label;
            t.parentNode && t.parentNode.removeChild(t);
            var e = this.dom.foreground;
            e.parentNode && e.parentNode.removeChild(e);
            var i = this.dom.background;
            i.parentNode && i.parentNode.removeChild(i);
            var o = this.dom.axis;
            o.parentNode && o.parentNode.removeChild(o)
        }, o.prototype.add = function (t) {
            if (this.items[t.id] = t, t.setParent(this), void 0 !== t.data.subgroup && (void 0 === this.subgroups[t.data.subgroup] && (this.subgroups[t.data.subgroup] = {
                    height: 0,
                    visible: !1,
                    index: this.subgroupIndex,
                    items: []
                }, this.subgroupIndex++), this.subgroups[t.data.subgroup].items.push(t)), this.orderSubgroups(), this.visibleItems.indexOf(t) == -1) {
                var e = this.itemSet.body.range;
                this._checkIfVisible(t, this.visibleItems, e)
            }
        }, o.prototype.orderSubgroups = function () {
            if (void 0 !== this.subgroupOrderer) {
                var t = [];
                if ("string" == typeof this.subgroupOrderer) {
                    for (var e in this.subgroups)t.push({
                        subgroup: e,
                        sortField: this.subgroups[e].items[0].data[this.subgroupOrderer]
                    });
                    t.sort(function (t, e) {
                        return t.sortField - e.sortField
                    })
                } else if ("function" == typeof this.subgroupOrderer) {
                    for (var e in this.subgroups)t.push(this.subgroups[e].items[0].data);
                    t.sort(this.subgroupOrderer)
                }
                if (t.length > 0)for (var i = 0; i < t.length; i++)this.subgroups[t[i].subgroup].index = i
            }
        }, o.prototype.resetSubgroups = function () {
            for (var t in this.subgroups)this.subgroups.hasOwnProperty(t) && (this.subgroups[t].visible = !1)
        }, o.prototype.remove = function (t) {
            delete this.items[t.id], t.setParent(null);
            var e = this.visibleItems.indexOf(t);
            if (e != -1 && this.visibleItems.splice(e, 1), void 0 !== t.data.subgroup) {
                var i = this.subgroups[t.data.subgroup];
                if (i) {
                    var o = i.items.indexOf(t);
                    i.items.splice(o, 1), i.items.length || (delete this.subgroups[t.data.subgroup], this.subgroupIndex--), this.orderSubgroups()
                }
            }
        }, o.prototype.removeFromDataSet = function (t) {
            this.itemSet.removeItem(t.id)
        }, o.prototype.order = function () {
            for (var t = n.toArray(this.items), e = [], i = [], o = 0; o < t.length; o++)void 0 !== t[o].data.end && i.push(t[o]), e.push(t[o]);
            this.orderedItems = {
                byStart: e,
                byEnd: i
            }, s.orderByStart(this.orderedItems.byStart), s.orderByEnd(this.orderedItems.byEnd)
        }, o.prototype._updateVisibleItems = function (t, e, i) {
            var o = [], s = {};
            if (!this.isVisible && "__background__" != this.groupId) {
                for (var r = 0; r < e.length; r++) {
                    var a = e[r];
                    a.displayed && a.hide()
                }
                return o
            }
            var h = (i.end - i.start) / 4, d = i.start - h, l = i.end + h, c = function (t) {
                return t < d ? -1 : t <= l ? 0 : 1
            };
            if (e.length > 0)for (var r = 0; r < e.length; r++)this._checkIfVisibleWithReference(e[r], o, s, i);
            var u = n.binarySearchCustom(t.byStart, c, "data", "start");
            if (this._traceVisible(u, t.byStart, o, s, function (t) {
                    return t.data.start < d || t.data.start > l
                }), 1 == this.checkRangedItems)for (this.checkRangedItems = !1, r = 0; r < t.byEnd.length; r++)this._checkIfVisibleWithReference(t.byEnd[r], o, s, i); else {
                var p = n.binarySearchCustom(t.byEnd, c, "data", "end");
                this._traceVisible(p, t.byEnd, o, s, function (t) {
                    return t.data.end < d || t.data.end > l
                })
            }
            for (var r = 0; r < o.length; r++) {
                var a = o[r];
                a.displayed || a.show(), a.repositionX()
            }
            return o
        }, o.prototype._traceVisible = function (t, e, i, o, n) {
            if (t != -1) {
                for (var s = t; s >= 0; s--) {
                    var r = e[s];
                    if (n(r))break;
                    void 0 === o[r.id] && (o[r.id] = !0, i.push(r))
                }
                for (var s = t + 1; s < e.length; s++) {
                    var r = e[s];
                    if (n(r))break;
                    void 0 === o[r.id] && (o[r.id] = !0, i.push(r))
                }
            }
        }, o.prototype._checkIfVisible = function (t, e, i) {
            t.isVisible(i) ? (t.displayed || t.show(), t.repositionX(), e.push(t)) : t.displayed && t.hide()
        }, o.prototype._checkIfVisibleWithReference = function (t, e, i, o) {
            t.isVisible(o) ? void 0 === i[t.id] && (i[t.id] = !0, e.push(t)) : t.displayed && t.hide()
        }, t.exports = o
    }, function (t, e) {
        var i = .001;
        e.orderByStart = function (t) {
            t.sort(function (t, e) {
                return t.data.start - e.data.start
            })
        }, e.orderByEnd = function (t) {
            t.sort(function (t, e) {
                var i = "end"in t.data ? t.data.end : t.data.start, o = "end"in e.data ? e.data.end : e.data.start;
                return i - o
            })
        }, e.stack = function (t, i, o) {
            var n, s;
            if (o)for (n = 0, s = t.length; n < s; n++)t[n].top = null;
            for (n = 0, s = t.length; n < s; n++) {
                var r = t[n];
                if (r.stack && null === r.top) {
                    r.top = i.axis;
                    do {
                        for (var a = null, h = 0, d = t.length; h < d; h++) {
                            var l = t[h];
                            if (null !== l.top && l !== r && l.stack && e.collision(r, l, i.item, l.options.rtl)) {
                                a = l;
                                break
                            }
                        }
                        null != a && (r.top = a.top + a.height + i.item.vertical)
                    } while (a)
                }
            }
        }, e.nostack = function (t, e, i) {
            var o, n, s;
            for (o = 0, n = t.length; o < n; o++)if (void 0 !== t[o].data.subgroup) {
                s = e.axis;
                for (var r in i)i.hasOwnProperty(r) && 1 == i[r].visible && i[r].index < i[t[o].data.subgroup].index && (s += i[r].height + e.item.vertical);
                t[o].top = s
            } else t[o].top = e.axis
        }, e.collision = function (t, e, o, n) {
            return n ? t.right - o.horizontal + i < e.right + e.width && t.right + t.width + o.horizontal - i > e.right && t.top - o.vertical + i < e.top + e.height && t.top + t.height + o.vertical - i > e.top : t.left - o.horizontal + i < e.left + e.width && t.left + t.width + o.horizontal - i > e.left && t.top - o.vertical + i < e.top + e.height && t.top + t.height + o.vertical - i > e.top
        }
    }, function (t, e, i) {
        function o(t, e, i) {
            if (this.props = {content: {width: 0}}, this.overflow = !1, this.options = i, t) {
                if (void 0 == t.start)throw new Error('Property "start" missing in item ' + t.id);
                if (void 0 == t.end)throw new Error('Property "end" missing in item ' + t.id)
            }
            n.call(this, t, e, i)
        }

        var n = (i(22), i(41));
        o.prototype = new n(null, null, null), o.prototype.baseClassName = "vis-item vis-range", o.prototype.isVisible = function (t) {
            return this.data.start < t.end && this.data.end > t.start
        }, o.prototype.redraw = function () {
            var t = this.dom;
            if (t || (this.dom = {}, t = this.dom, t.box = document.createElement("div"), t.frame = document.createElement("div"), t.frame.className = "vis-item-overflow", t.box.appendChild(t.frame), t.content = document.createElement("div"), t.content.className = "vis-item-content", t.frame.appendChild(t.content), t.box["timeline-item"] = this, this.dirty = !0), !this.parent)throw new Error("Cannot redraw item: no parent attached");
            if (!t.box.parentNode) {
                var e = this.parent.dom.foreground;
                if (!e)throw new Error("Cannot redraw item: parent has no foreground container element");
                e.appendChild(t.box)
            }
            if (this.displayed = !0, this.dirty) {
                this._updateContents(this.dom.content), this._updateTitle(this.dom.box), this._updateDataAttributes(this.dom.box), this._updateStyle(this.dom.box);
                var i = (this.options.editable.updateTime || this.options.editable.updateGroup || this.editable === !0) && this.editable !== !1, o = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (i ? " vis-editable" : " vis-readonly");
                t.box.className = this.baseClassName + o, this.overflow = "hidden" !== window.getComputedStyle(t.frame).overflow, this.dom.content.style.maxWidth = "none", this.props.content.width = this.dom.content.offsetWidth, this.height = this.dom.box.offsetHeight, this.dom.content.style.maxWidth = "", this.dirty = !1
            }
            this._repaintOnItemUpdateTimeTooltip(t.box), this._repaintDeleteButton(t.box), this._repaintDragCenter(), this._repaintDragLeft(), this._repaintDragRight()
        }, o.prototype.show = function () {
            this.displayed || this.redraw()
        }, o.prototype.hide = function () {
            if (this.displayed) {
                var t = this.dom.box;
                t.parentNode && t.parentNode.removeChild(t), this.displayed = !1
            }
        }, o.prototype.repositionX = function (t) {
            var e, i, o = this.parent.width, n = this.conversion.toScreen(this.data.start), s = this.conversion.toScreen(this.data.end);
            void 0 !== t && t !== !0 || (n < -o && (n = -o), s > 2 * o && (s = 2 * o));
            var r = Math.max(s - n + .5, 1);
            switch (this.overflow ? (this.options.rtl ? this.right = n : this.left = n, this.width = r + this.props.content.width, i = this.props.content.width) : (this.options.rtl ? this.right = n : this.left = n, this.width = r, i = Math.min(s - n, this.props.content.width)), this.options.rtl ? this.dom.box.style.right = this.right + "px" : this.dom.box.style.left = this.left + "px", this.dom.box.style.width = r + "px", this.options.align) {
                case"left":
                    this.options.rtl ? this.dom.content.style.right = "0" : this.dom.content.style.left = "0";
                    break;
                case"right":
                    this.options.rtl ? this.dom.content.style.right = Math.max(r - i, 0) + "px" : this.dom.content.style.left = Math.max(r - i, 0) + "px";
                    break;
                case"center":
                    this.options.rtl ? this.dom.content.style.right = Math.max((r - i) / 2, 0) + "px" : this.dom.content.style.left = Math.max((r - i) / 2, 0) + "px";
                    break;
                default:
                    e = this.overflow ? s > 0 ? Math.max(-n, 0) : -i : n < 0 ? -n : 0, this.options.rtl ? this.dom.content.style.right = e + "px" : (this.dom.content.style.left = e + "px", this.dom.content.style.width = "calc(100% - " + e + "px)")
            }
        }, o.prototype.repositionY = function () {
            var t = this.options.orientation.item, e = this.dom.box;
            "top" == t ? e.style.top = this.top + "px" : e.style.top = this.parent.height - this.top - this.height + "px"
        }, o.prototype._repaintDragLeft = function () {
            if (this.selected && this.options.editable.updateTime && !this.dom.dragLeft) {
                var t = document.createElement("div");
                t.className = "vis-drag-left", t.dragLeftItem = this, this.dom.box.appendChild(t), this.dom.dragLeft = t
            } else!this.selected && this.dom.dragLeft && (this.dom.dragLeft.parentNode && this.dom.dragLeft.parentNode.removeChild(this.dom.dragLeft), this.dom.dragLeft = null)
        }, o.prototype._repaintDragRight = function () {
            if (this.selected && this.options.editable.updateTime && !this.dom.dragRight) {
                var t = document.createElement("div");
                t.className = "vis-drag-right", t.dragRightItem = this, this.dom.box.appendChild(t), this.dom.dragRight = t
            } else!this.selected && this.dom.dragRight && (this.dom.dragRight.parentNode && this.dom.dragRight.parentNode.removeChild(this.dom.dragRight), this.dom.dragRight = null)
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i) {
            this.id = null, this.parent = null, this.data = t, this.dom = null, this.conversion = e || {}, this.options = i || {}, this.selected = !1, this.displayed = !1, this.dirty = !0, this.top = null, this.right = null, this.left = null, this.width = null, this.height = null, this.editable = null, this.data && this.data.hasOwnProperty("editable") && "boolean" == typeof this.data.editable && (this.editable = t.editable)
        }

        var n = i(22), s = i(1), r = i(2);
        o.prototype.stack = !0, o.prototype.select = function () {
            this.selected = !0, this.dirty = !0, this.displayed && this.redraw()
        }, o.prototype.unselect = function () {
            this.selected = !1, this.dirty = !0, this.displayed && this.redraw()
        }, o.prototype.setData = function (t) {
            var e = void 0 != t.group && this.data.group != t.group;
            e && this.parent.itemSet._moveToGroup(this, t.group), t.hasOwnProperty("editable") && "boolean" == typeof t.editable && (this.editable = t.editable), this.data = t, this.dirty = !0, this.displayed && this.redraw()
        }, o.prototype.setParent = function (t) {
            this.displayed ? (this.hide(), this.parent = t, this.parent && this.show()) : this.parent = t
        }, o.prototype.isVisible = function (t) {
            return !1
        }, o.prototype.show = function () {
            return !1
        }, o.prototype.hide = function () {
            return !1
        }, o.prototype.redraw = function () {
        }, o.prototype.repositionX = function () {
        }, o.prototype.repositionY = function () {
        }, o.prototype._repaintDeleteButton = function (t) {
            var e = (this.options.editable.remove || this.data.editable === !0) && this.data.editable !== !1;
            if (this.selected && e && !this.dom.deleteButton) {
                var i = this, o = document.createElement("div");
                this.options.rtl ? o.className = "vis-delete-rtl" : o.className = "vis-delete", o.title = "Delete this item", new n(o).on("tap", function (t) {
                    t.stopPropagation(), i.parent.removeFromDataSet(i)
                }), t.appendChild(o), this.dom.deleteButton = o
            } else!this.selected && this.dom.deleteButton && (this.dom.deleteButton.parentNode && this.dom.deleteButton.parentNode.removeChild(this.dom.deleteButton), this.dom.deleteButton = null)
        }, o.prototype._repaintOnItemUpdateTimeTooltip = function (t) {
            if (this.options.tooltipOnItemUpdateTime) {
                var e = (this.options.editable.updateTime || this.data.editable === !0) && this.data.editable !== !1;
                if (this.selected && e && !this.dom.onItemUpdateTimeTooltip) {
                    var i = document.createElement("div");
                    i.className = "vis-onUpdateTime-tooltip", t.appendChild(i), this.dom.onItemUpdateTimeTooltip = i
                } else!this.selected && this.dom.onItemUpdateTimeTooltip && (this.dom.onItemUpdateTimeTooltip.parentNode && this.dom.onItemUpdateTimeTooltip.parentNode.removeChild(this.dom.onItemUpdateTimeTooltip), this.dom.onItemUpdateTimeTooltip = null);
                if (this.dom.onItemUpdateTimeTooltip) {
                    this.dom.onItemUpdateTimeTooltip.style.visibility = this.parent.itemSet.touchParams.itemIsDragging ? "visible" : "hidden", this.options.rtl ? this.dom.onItemUpdateTimeTooltip.style.right = this.dom.content.style.right : this.dom.onItemUpdateTimeTooltip.style.left = this.dom.content.style.left;
                    var o, n = 50, s = this.parent.itemSet.body.domProps.scrollTop;
                    o = "top" == this.options.orientation.item ? this.top : this.parent.height - this.top - this.height;
                    var a = o + this.parent.top - n < -s;
                    a ? (this.dom.onItemUpdateTimeTooltip.style.bottom = "", this.dom.onItemUpdateTimeTooltip.style.top = this.height + 2 + "px") : (this.dom.onItemUpdateTimeTooltip.style.top = "", this.dom.onItemUpdateTimeTooltip.style.bottom = this.height + 2 + "px");
                    var h, d;
                    this.options.tooltipOnItemUpdateTime && this.options.tooltipOnItemUpdateTime.template ? (d = this.options.tooltipOnItemUpdateTime.template.bind(this), h = d(this.data)) : (h = "start: " + r(this.data.start).format("MM/DD/YYYY hh:mm"), this.data.end && (h += "<br> end: " + r(this.data.end).format("MM/DD/YYYY hh:mm"))), this.dom.onItemUpdateTimeTooltip.innerHTML = h
                }
            }
        }, o.prototype._updateContents = function (t) {
            var e, i;
            if (this.options.template) {
                var o = this.parent.itemSet.itemsData.get(this.id);
                i = this.options.template.bind(this), e = i(o, t)
            } else e = this.data.content;
            if (e instanceof Object && !(e instanceof Element))i(o, t); else {
                var n = this._contentToString(this.content) !== this._contentToString(e);
                if (n) {
                    if (e instanceof Element)t.innerHTML = "", t.appendChild(e); else if (void 0 != e)t.innerHTML = e; else if ("background" != this.data.type || void 0 !== this.data.content)throw new Error('Property "content" missing in item ' + this.id);
                    this.content = e
                }
            }
        }, o.prototype._updateTitle = function (t) {
            null != this.data.title ? t.title = this.data.title || "" : t.removeAttribute("vis-title")
        }, o.prototype._updateDataAttributes = function (t) {
            if (this.options.dataAttributes && this.options.dataAttributes.length > 0) {
                var e = [];
                if (Array.isArray(this.options.dataAttributes))e = this.options.dataAttributes; else {
                    if ("all" != this.options.dataAttributes)return;
                    e = Object.keys(this.data)
                }
                for (var i = 0; i < e.length; i++) {
                    var o = e[i], n = this.data[o];
                    null != n ? t.setAttribute("data-" + o, n) : t.removeAttribute("data-" + o)
                }
            }
        }, o.prototype._updateStyle = function (t) {
            this.style && (s.removeCssText(t, this.style), this.style = null), this.data.style && (s.addCssText(t, this.data.style), this.style = this.data.style)
        }, o.prototype._contentToString = function (t) {
            return "string" == typeof t ? t : t && "outerHTML"in t ? t.outerHTML : t
        }, o.prototype.getWidthLeft = function () {
            return 0
        }, o.prototype.getWidthRight = function () {
            return 0
        }, o.prototype._repaintDragCenter = function () {
            if (this.selected && this.options.editable.updateTime && !this.dom.dragCenter) {
                var t = document.createElement("div");
                t.className = "vis-drag-center", t.dragCenterItem = this, this.dom.box ? this.dom.box.appendChild(t) : this.dom.point && this.dom.point.appendChild(t), this.dom.dragCenter = t
            } else!this.selected && this.dom.dragCenter && (this.dom.dragCenter.parentNode && this.dom.dragCenter.parentNode.removeChild(this.dom.dragCenter), this.dom.dragCenter = null)
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i) {
            n.call(this, t, e, i), this.width = 0, this.height = 0, this.top = 0, this.left = 0
        }

        var n = (i(1), i(38));
        o.prototype = Object.create(n.prototype), o.prototype.redraw = function (t, e, i) {
            var o = !1;
            this.visibleItems = this._updateVisibleItems(this.orderedItems, this.visibleItems, t), this.width = this.dom.background.offsetWidth, this.dom.background.style.height = "0";
            for (var n = 0, s = this.visibleItems.length; n < s; n++) {
                var r = this.visibleItems[n];
                r.repositionY(e)
            }
            return o
        }, o.prototype.show = function () {
            this.dom.background.parentNode || this.itemSet.dom.background.appendChild(this.dom.background)
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i) {
            if (this.props = {
                    dot: {width: 0, height: 0},
                    line: {width: 0, height: 0}
                }, this.options = i, t && void 0 == t.start)throw new Error('Property "start" missing in item ' + t);
            n.call(this, t, e, i)
        }

        var n = i(41);
        i(1);
        o.prototype = new n(null, null, null), o.prototype.isVisible = function (t) {
            var e, i = this.options.align, o = (t.end - t.start) / t.body.dom.center.clientWidth, n = this.width * o;
            return e = "right" == i ? this.data.start.getTime() > t.start && this.data.start.getTime() - n < t.end : "left" == i ? this.data.start.getTime() + n > t.start && this.data.start.getTime() < t.end : this.data.start.getTime() + n / 2 > t.start && this.data.start.getTime() - n / 2 < t.end
        }, o.prototype.redraw = function () {
            var t = this.dom;
            if (t || (this.dom = {}, t = this.dom, t.box = document.createElement("DIV"), t.content = document.createElement("DIV"), t.content.className = "vis-item-content", t.box.appendChild(t.content), t.line = document.createElement("DIV"), t.line.className = "vis-line", t.dot = document.createElement("DIV"), t.dot.className = "vis-dot", t.box["timeline-item"] = this, this.dirty = !0), !this.parent)throw new Error("Cannot redraw item: no parent attached");
            if (!t.box.parentNode) {
                var e = this.parent.dom.foreground;
                if (!e)throw new Error("Cannot redraw item: parent has no foreground container element");
                e.appendChild(t.box)
            }
            if (!t.line.parentNode) {
                var i = this.parent.dom.background;
                if (!i)throw new Error("Cannot redraw item: parent has no background container element");
                i.appendChild(t.line)
            }
            if (!t.dot.parentNode) {
                var o = this.parent.dom.axis;
                if (!i)throw new Error("Cannot redraw item: parent has no axis container element");
                o.appendChild(t.dot)
            }
            if (this.displayed = !0, this.dirty) {
                this._updateContents(this.dom.content), this._updateTitle(this.dom.box), this._updateDataAttributes(this.dom.box), this._updateStyle(this.dom.box);
                var n = (this.options.editable.updateTime || this.options.editable.updateGroup || this.editable === !0) && this.editable !== !1, s = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (n ? " vis-editable" : " vis-readonly");
                t.box.className = "vis-item vis-box" + s, t.line.className = "vis-item vis-line" + s, t.dot.className = "vis-item vis-dot" + s;
                var r = t.box.style.right, a = t.box.style.left;
                this.options.rtl ? t.box.style.right = "0px" : t.box.style.left = "0px", this.props.dot.height = t.dot.offsetHeight, this.props.dot.width = t.dot.offsetWidth, this.props.line.width = t.line.offsetWidth, this.width = t.box.offsetWidth, this.height = t.box.offsetHeight, this.options.rtl ? t.box.style.right = r : t.box.style.left = a, this.dirty = !1
            }
            this._repaintOnItemUpdateTimeTooltip(t.box), this._repaintDragCenter(), this._repaintDeleteButton(t.box)
        }, o.prototype.show = function () {
            this.displayed || this.redraw()
        }, o.prototype.hide = function () {
            if (this.displayed) {
                var t = this.dom;
                t.box.parentNode && t.box.parentNode.removeChild(t.box), t.line.parentNode && t.line.parentNode.removeChild(t.line), t.dot.parentNode && t.dot.parentNode.removeChild(t.dot), this.displayed = !1
            }
        }, o.prototype.repositionX = function () {
            var t = this.conversion.toScreen(this.data.start), e = this.options.align;
            "right" == e ? this.options.rtl ? (this.right = t - this.width, this.dom.box.style.right = this.right + "px", this.dom.line.style.right = t - this.props.line.width + "px", this.dom.dot.style.right = t - this.props.line.width / 2 - this.props.dot.width / 2 + "px") : (this.left = t - this.width, this.dom.box.style.left = this.left + "px", this.dom.line.style.left = t - this.props.line.width + "px", this.dom.dot.style.left = t - this.props.line.width / 2 - this.props.dot.width / 2 + "px") : "left" == e ? this.options.rtl ? (this.right = t, this.dom.box.style.right = this.right + "px", this.dom.line.style.right = t + "px", this.dom.dot.style.right = t + this.props.line.width / 2 - this.props.dot.width / 2 + "px") : (this.left = t, this.dom.box.style.left = this.left + "px", this.dom.line.style.left = t + "px", this.dom.dot.style.left = t + this.props.line.width / 2 - this.props.dot.width / 2 + "px") : this.options.rtl ? (this.right = t - this.width / 2, this.dom.box.style.right = this.right + "px", this.dom.line.style.right = t - this.props.line.width + "px", this.dom.dot.style.right = t - this.props.dot.width / 2 + "px") : (this.left = t - this.width / 2, this.dom.box.style.left = this.left + "px", this.dom.line.style.left = t - this.props.line.width / 2 + "px", this.dom.dot.style.left = t - this.props.dot.width / 2 + "px")
        }, o.prototype.repositionY = function () {
            var t = this.options.orientation.item, e = this.dom.box, i = this.dom.line, o = this.dom.dot;
            if ("top" == t)e.style.top = (this.top || 0) + "px", i.style.top = "0", i.style.height = this.parent.top + this.top + 1 + "px", i.style.bottom = ""; else {
                var n = this.parent.itemSet.props.height, s = n - this.parent.top - this.parent.height + this.top;
                e.style.top = (this.parent.height - this.top - this.height || 0) + "px", i.style.top = n - s + "px", i.style.bottom = "0"
            }
            o.style.top = -this.props.dot.height / 2 + "px"
        }, o.prototype.getWidthLeft = function () {
            return this.width / 2
        }, o.prototype.getWidthRight = function () {
            return this.width / 2
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i) {
            if (this.props = {
                    dot: {top: 0, width: 0, height: 0},
                    content: {height: 0, marginLeft: 0, marginRight: 0}
                }, this.options = i, t && void 0 == t.start)throw new Error('Property "start" missing in item ' + t);
            n.call(this, t, e, i)
        }

        var n = i(41);
        o.prototype = new n(null, null, null), o.prototype.isVisible = function (t) {
            var e = (t.end - t.start) / t.body.dom.center.clientWidth, i = this.width * e;
            return this.data.start.getTime() + i > t.start && this.data.start < t.end
        }, o.prototype.redraw = function () {
            var t = this.dom;
            if (t || (this.dom = {}, t = this.dom, t.point = document.createElement("div"), t.content = document.createElement("div"), t.content.className = "vis-item-content", t.point.appendChild(t.content), t.dot = document.createElement("div"), t.point.appendChild(t.dot), t.point["timeline-item"] = this, this.dirty = !0), !this.parent)throw new Error("Cannot redraw item: no parent attached");
            if (!t.point.parentNode) {
                var e = this.parent.dom.foreground;
                if (!e)throw new Error("Cannot redraw item: parent has no foreground container element");
                e.appendChild(t.point)
            }
            if (this.displayed = !0, this.dirty) {
                this._updateContents(this.dom.content), this._updateTitle(this.dom.point), this._updateDataAttributes(this.dom.point), this._updateStyle(this.dom.point);
                var i = (this.options.editable.updateTime || this.options.editable.updateGroup || this.editable === !0) && this.editable !== !1, o = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (i ? " vis-editable" : " vis-readonly");
                t.point.className = "vis-item vis-point" + o, t.dot.className = "vis-item vis-dot" + o, this.props.dot.width = t.dot.offsetWidth, this.props.dot.height = t.dot.offsetHeight, this.props.content.height = t.content.offsetHeight, this.options.rtl ? t.content.style.marginRight = 2 * this.props.dot.width + "px" : t.content.style.marginLeft = 2 * this.props.dot.width + "px", this.width = t.point.offsetWidth, this.height = t.point.offsetHeight, t.dot.style.top = (this.height - this.props.dot.height) / 2 + "px", this.options.rtl ? t.dot.style.right = this.props.dot.width / 2 + "px" : t.dot.style.left = this.props.dot.width / 2 + "px", this.dirty = !1
            }
            this._repaintOnItemUpdateTimeTooltip(t.point), this._repaintDragCenter(), this._repaintDeleteButton(t.point)
        }, o.prototype.show = function () {
            this.displayed || this.redraw()
        }, o.prototype.hide = function () {
            this.displayed && (this.dom.point.parentNode && this.dom.point.parentNode.removeChild(this.dom.point), this.displayed = !1)
        }, o.prototype.repositionX = function () {
            var t = this.conversion.toScreen(this.data.start);
            this.options.rtl ? (this.right = t - this.props.dot.width, this.dom.point.style.right = this.right + "px") : (this.left = t - this.props.dot.width, this.dom.point.style.left = this.left + "px")
        }, o.prototype.repositionY = function () {
            var t = this.options.orientation.item, e = this.dom.point;
            "top" == t ? e.style.top = this.top + "px" : e.style.top = this.parent.height - this.top - this.height + "px"
        }, o.prototype.getWidthLeft = function () {
            return this.props.dot.width
        }, o.prototype.getWidthRight = function () {
            return this.props.dot.width
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i) {
            if (this.props = {content: {width: 0}}, this.overflow = !1, t) {
                if (void 0 == t.start)throw new Error('Property "start" missing in item ' + t.id);
                if (void 0 == t.end)throw new Error('Property "end" missing in item ' + t.id)
            }
            n.call(this, t, e, i)
        }

        var n = (i(22), i(41)), s = i(42), r = i(40);
        o.prototype = new n(null, null, null), o.prototype.baseClassName = "vis-item vis-background", o.prototype.stack = !1, o.prototype.isVisible = function (t) {
            return this.data.start < t.end && this.data.end > t.start
        }, o.prototype.redraw = function () {
            var t = this.dom;
            if (t || (this.dom = {}, t = this.dom, t.box = document.createElement("div"), t.frame = document.createElement("div"), t.frame.className = "vis-item-overflow", t.box.appendChild(t.frame), t.content = document.createElement("div"), t.content.className = "vis-item-content", t.frame.appendChild(t.content), this.dirty = !0), !this.parent)throw new Error("Cannot redraw item: no parent attached");
            if (!t.box.parentNode) {
                var e = this.parent.dom.background;
                if (!e)throw new Error("Cannot redraw item: parent has no background container element");
                e.appendChild(t.box)
            }
            if (this.displayed = !0, this.dirty) {
                this._updateContents(this.dom.content), this._updateTitle(this.dom.content), this._updateDataAttributes(this.dom.content), this._updateStyle(this.dom.box);
                var i = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "");
                t.box.className = this.baseClassName + i, this.overflow = "hidden" !== window.getComputedStyle(t.content).overflow, this.props.content.width = this.dom.content.offsetWidth, this.height = 0, this.dirty = !1
            }
        }, o.prototype.show = r.prototype.show, o.prototype.hide = r.prototype.hide, o.prototype.repositionX = r.prototype.repositionX, o.prototype.repositionY = function (t) {
            var e = "top" === this.options.orientation.item;
            this.dom.content.style.top = e ? "" : "0", this.dom.content.style.bottom = e ? "0" : "";
            var i;
            if (void 0 !== this.data.subgroup) {
                var o = this.data.subgroup, n = this.parent.subgroups, r = n[o].index;
                if (1 == e) {
                    i = this.parent.subgroups[o].height + t.item.vertical, i += 0 == r ? t.axis - .5 * t.item.vertical : 0;
                    var a = this.parent.top;
                    for (var h in n)n.hasOwnProperty(h) && 1 == n[h].visible && n[h].index < r && (a += n[h].height + t.item.vertical);
                    a += 0 != r ? t.axis - .5 * t.item.vertical : 0, this.dom.box.style.top = a + "px", this.dom.box.style.bottom = ""
                } else {
                    var a = this.parent.top, d = 0;
                    for (var h in n)if (n.hasOwnProperty(h) && 1 == n[h].visible) {
                        var l = n[h].height + t.item.vertical;
                        d += l, n[h].index > r && (a += l)
                    }
                    i = this.parent.subgroups[o].height + t.item.vertical, this.dom.box.style.top = this.parent.height - d + a + "px", this.dom.box.style.bottom = ""
                }
            } else this.parent instanceof s ? (i = Math.max(this.parent.height, this.parent.itemSet.body.domProps.center.height, this.parent.itemSet.body.domProps.centerContainer.height), this.dom.box.style.top = e ? "0" : "", this.dom.box.style.bottom = e ? "" : "0") : (i = this.parent.height, this.dom.box.style.top = this.parent.top + "px", this.dom.box.style.bottom = "");
            this.dom.box.style.height = i + "px"
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e) {
            this.dom = {
                foreground: null,
                lines: [],
                majorTexts: [],
                minorTexts: [],
                redundant: {lines: [], majorTexts: [], minorTexts: []}
            }, this.props = {
                range: {start: 0, end: 0, minimumStep: 0},
                lineTop: 0
            }, this.defaultOptions = {
                orientation: {axis: "bottom"},
                showMinorLabels: !0,
                showMajorLabels: !0,
                maxMinorChars: 7,
                format: a.FORMAT,
                moment: d,
                timeAxis: null
            }, this.options = s.extend({}, this.defaultOptions), this.body = t, this._create(), this.setOptions(e)
        }

        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s = i(1), r = i(33), a = i(37), h = i(34), d = i(2);
        o.prototype = new r, o.prototype.setOptions = function (t) {
            t && (s.selectiveExtend(["showMinorLabels", "showMajorLabels", "maxMinorChars", "hiddenDates", "timeAxis", "moment", "rtl"], this.options, t), s.selectiveDeepExtend(["format"], this.options, t), "orientation"in t && ("string" == typeof t.orientation ? this.options.orientation.axis = t.orientation : "object" === n(t.orientation) && "axis"in t.orientation && (this.options.orientation.axis = t.orientation.axis)), "locale"in t && ("function" == typeof d.locale ? d.locale(t.locale) : d.lang(t.locale)))
        }, o.prototype._create = function () {
            this.dom.foreground = document.createElement("div"), this.dom.background = document.createElement("div"), this.dom.foreground.className = "vis-time-axis vis-foreground", this.dom.background.className = "vis-time-axis vis-background"
        }, o.prototype.destroy = function () {
            this.dom.foreground.parentNode && this.dom.foreground.parentNode.removeChild(this.dom.foreground), this.dom.background.parentNode && this.dom.background.parentNode.removeChild(this.dom.background), this.body = null
        }, o.prototype.redraw = function () {
            var t = this.props, e = this.dom.foreground, i = this.dom.background, o = "top" == this.options.orientation.axis ? this.body.dom.top : this.body.dom.bottom, n = e.parentNode !== o;
            this._calculateCharSize();
            var s = this.options.showMinorLabels && "none" !== this.options.orientation.axis, r = this.options.showMajorLabels && "none" !== this.options.orientation.axis;
            t.minorLabelHeight = s ? t.minorCharHeight : 0, t.majorLabelHeight = r ? t.majorCharHeight : 0, t.height = t.minorLabelHeight + t.majorLabelHeight, t.width = e.offsetWidth, t.minorLineHeight = this.body.domProps.root.height - t.majorLabelHeight - ("top" == this.options.orientation.axis ? this.body.domProps.bottom.height : this.body.domProps.top.height), t.minorLineWidth = 1, t.majorLineHeight = t.minorLineHeight + t.majorLabelHeight, t.majorLineWidth = 1;
            var a = e.nextSibling, h = i.nextSibling;
            return e.parentNode && e.parentNode.removeChild(e), i.parentNode && i.parentNode.removeChild(i), e.style.height = this.props.height + "px", this._repaintLabels(), a ? o.insertBefore(e, a) : o.appendChild(e), h ? this.body.dom.backgroundVertical.insertBefore(i, h) : this.body.dom.backgroundVertical.appendChild(i), this._isResized() || n
        }, o.prototype._repaintLabels = function () {
            var t = this.options.orientation.axis, e = s.convert(this.body.range.start, "Number"), i = s.convert(this.body.range.end, "Number"), o = this.body.util.toTime((this.props.minorCharWidth || 10) * this.options.maxMinorChars).valueOf(), n = o - h.getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this.body.range, o);
            n -= this.body.util.toTime(0).valueOf();
            var r = new a(new Date(e), new Date(i), n, this.body.hiddenDates);
            r.setMoment(this.options.moment), this.options.format && r.setFormat(this.options.format), this.options.timeAxis && r.setScale(this.options.timeAxis), this.step = r;
            var d = this.dom;
            d.redundant.lines = d.lines, d.redundant.majorTexts = d.majorTexts, d.redundant.minorTexts = d.minorTexts, d.lines = [], d.majorTexts = [], d.minorTexts = [];
            var c, u, p, f, m, v, g, y, b, _, w = 0, x = void 0, k = 0, O = 1e3;
            for (r.start(), u = r.getCurrent(), f = this.body.util.toScreen(u); r.hasNext() && k < O;) {
                k++, m = r.isMajor(), _ = r.getClassName(), b = r.getLabelMinor(), c = u, p = f, r.next(), u = r.getCurrent(), v = r.isMajor(), f = this.body.util.toScreen(u), g = w, w = f - p;
                var D = w >= .4 * g;
                if (this.options.showMinorLabels && D) {
                    var S = this._repaintMinorText(p, b, t, _);
                    S.style.width = w + "px"
                }
                m && this.options.showMajorLabels ? (p > 0 && (void 0 == x && (x = p), S = this._repaintMajorText(p, r.getLabelMajor(), t, _)), y = this._repaintMajorLine(p, w, t, _)) : D ? y = this._repaintMinorLine(p, w, t, _) : y && (y.style.width = parseInt(y.style.width) + w + "px")
            }
            if (k !== O || l || (console.warn("Something is wrong with the Timeline scale. Limited drawing of grid lines to " + O + " lines."), l = !0), this.options.showMajorLabels) {
                var C = this.body.util.toTime(0), T = r.getLabelMajor(C), E = T.length * (this.props.majorCharWidth || 10) + 10;
                (void 0 == x || E < x) && this._repaintMajorText(0, T, t, _)
            }
            s.forEach(this.dom.redundant, function (t) {
                for (; t.length;) {
                    var e = t.pop();
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
            })
        }, o.prototype._repaintMinorText = function (t, e, i, o) {
            var n = this.dom.redundant.minorTexts.shift();
            if (!n) {
                var s = document.createTextNode("");
                n = document.createElement("div"), n.appendChild(s), this.dom.foreground.appendChild(n)
            }
            return this.dom.minorTexts.push(n), n.childNodes[0].nodeValue = e, n.style.top = "top" == i ? this.props.majorLabelHeight + "px" : "0", this.options.rtl ? (n.style.left = "", n.style.right = t + "px") : n.style.left = t + "px", n.className = "vis-text vis-minor " + o, n
        }, o.prototype._repaintMajorText = function (t, e, i, o) {
            var n = this.dom.redundant.majorTexts.shift();
            if (!n) {
                var s = document.createTextNode(e);
                n = document.createElement("div"), n.appendChild(s), this.dom.foreground.appendChild(n)
            }
            return this.dom.majorTexts.push(n), n.childNodes[0].nodeValue = e, n.className = "vis-text vis-major " + o, n.style.top = "top" == i ? "0" : this.props.minorLabelHeight + "px", this.options.rtl ? (n.style.left = "", n.style.right = t + "px") : n.style.left = t + "px", n
        }, o.prototype._repaintMinorLine = function (t, e, i, o) {
            var n = this.dom.redundant.lines.shift();
            n || (n = document.createElement("div"), this.dom.background.appendChild(n)), this.dom.lines.push(n);
            var s = this.props;
            return "top" == i ? n.style.top = s.majorLabelHeight + "px" : n.style.top = this.body.domProps.top.height + "px", n.style.height = s.minorLineHeight + "px", this.options.rtl ? (n.style.left = "", n.style.right = t - s.minorLineWidth / 2 + "px", n.className = "vis-grid vis-vertical-rtl vis-minor " + o) : (n.style.left = t - s.minorLineWidth / 2 + "px", n.className = "vis-grid vis-vertical vis-minor " + o), n.style.width = e + "px", n
        }, o.prototype._repaintMajorLine = function (t, e, i, o) {
            var n = this.dom.redundant.lines.shift();
            n || (n = document.createElement("div"), this.dom.background.appendChild(n)), this.dom.lines.push(n);
            var s = this.props;
            return "top" == i ? n.style.top = "0" : n.style.top = this.body.domProps.top.height + "px", this.options.rtl ? (n.style.left = "", n.style.right = t - s.majorLineWidth / 2 + "px", n.className = "vis-grid vis-vertical-rtl vis-major " + o) : (n.style.left = t - s.majorLineWidth / 2 + "px", n.className = "vis-grid vis-vertical vis-major " + o), n.style.height = s.majorLineHeight + "px", n.style.width = e + "px", n
        }, o.prototype._calculateCharSize = function () {
            this.dom.measureCharMinor || (this.dom.measureCharMinor = document.createElement("DIV"), this.dom.measureCharMinor.className = "vis-text vis-minor vis-measure", this.dom.measureCharMinor.style.position = "absolute", this.dom.measureCharMinor.appendChild(document.createTextNode("0")), this.dom.foreground.appendChild(this.dom.measureCharMinor)), this.props.minorCharHeight = this.dom.measureCharMinor.clientHeight, this.props.minorCharWidth = this.dom.measureCharMinor.clientWidth, this.dom.measureCharMajor || (this.dom.measureCharMajor = document.createElement("DIV"), this.dom.measureCharMajor.className = "vis-text vis-major vis-measure", this.dom.measureCharMajor.style.position = "absolute", this.dom.measureCharMajor.appendChild(document.createTextNode("0")), this.dom.foreground.appendChild(this.dom.measureCharMajor)), this.props.majorCharHeight = this.dom.measureCharMajor.clientHeight, this.props.majorCharWidth = this.dom.measureCharMajor.clientWidth
        };
        var l = !1;
        t.exports = o
    }, function (t, e, i) {
        function o(t) {
            this.active = !1, this.dom = {container: t}, this.dom.overlay = document.createElement("div"), this.dom.overlay.className = "vis-overlay", this.dom.container.appendChild(this.dom.overlay), this.hammer = a(this.dom.overlay), this.hammer.on("tap", this._onTapOverlay.bind(this));
            var e = this, i = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];
            i.forEach(function (t) {
                e.hammer.on(t, function (t) {
                    t.stopPropagation()
                })
            }), document && document.body && (this.onClick = function (i) {
                n(i.target, t) || e.deactivate()
            }, document.body.addEventListener("click", this.onClick)), void 0 !== this.keycharm && this.keycharm.destroy(), this.keycharm = s(), this.escListener = this.deactivate.bind(this)
        }

        function n(t, e) {
            for (; t;) {
                if (t === e)return !0;
                t = t.parentNode
            }
            return !1
        }

        var s = i(25), r = i(13), a = i(22), h = i(1);
        r(o.prototype), o.current = null, o.prototype.destroy = function () {
            this.deactivate(), this.dom.overlay.parentNode.removeChild(this.dom.overlay), this.onClick && document.body.removeEventListener("click", this.onClick), this.hammer.destroy(), this.hammer = null
        }, o.prototype.activate = function () {
            o.current && o.current.deactivate(), o.current = this, this.active = !0, this.dom.overlay.style.display = "none", h.addClassName(this.dom.container, "vis-active"), this.emit("change"), this.emit("activate"), this.keycharm.bind("esc", this.escListener)
        }, o.prototype.deactivate = function () {
            this.active = !1, this.dom.overlay.style.display = "", h.removeClassName(this.dom.container, "vis-active"), this.keycharm.unbind("esc", this.escListener), this.emit("change"), this.emit("deactivate")
        }, o.prototype._onTapOverlay = function (t) {
            this.activate(), t.stopPropagation()
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e) {
            this.body = t, this.defaultOptions = {
                moment: a,
                locales: h,
                locale: "en",
                id: void 0,
                title: void 0
            }, this.options = s.extend({}, this.defaultOptions), e && e.time ? this.customTime = e.time : this.customTime = new Date, this.eventParams = {}, this.setOptions(e), this._create()
        }

        var n = i(22), s = i(1), r = i(33), a = i(2), h = i(49);
        o.prototype = new r, o.prototype.setOptions = function (t) {
            t && s.selectiveExtend(["moment", "locale", "locales", "id"], this.options, t)
        }, o.prototype._create = function () {
            var t = document.createElement("div");
            t["custom-time"] = this, t.className = "vis-custom-time " + (this.options.id || ""), t.style.position = "absolute", t.style.top = "0px", t.style.height = "100%", this.bar = t;
            var e = document.createElement("div");
            e.style.position = "relative", e.style.top = "0px", e.style.left = "-10px", e.style.height = "100%", e.style.width = "20px", t.appendChild(e), this.hammer = new n(e), this.hammer.on("panstart", this._onDragStart.bind(this)), this.hammer.on("panmove", this._onDrag.bind(this)), this.hammer.on("panend", this._onDragEnd.bind(this)), this.hammer.get("pan").set({
                threshold: 5,
                direction: n.DIRECTION_HORIZONTAL
            })
        }, o.prototype.destroy = function () {
            this.hide(), this.hammer.destroy(), this.hammer = null, this.body = null
        }, o.prototype.redraw = function () {
            var t = this.body.dom.backgroundVertical;
            this.bar.parentNode != t && (this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), t.appendChild(this.bar));
            var e = this.body.util.toScreen(this.customTime), i = this.options.locales[this.options.locale];
            i || (this.warned || (console.log("WARNING: options.locales['" + this.options.locale + "'] not found. See http://visjs.org/docs/timeline/#Localization"), this.warned = !0), i = this.options.locales.en);
            var o = this.options.title;
            return void 0 === o && (o = i.time + ": " + this.options.moment(this.customTime).format("dddd, MMMM Do YYYY, H:mm:ss"), o = o.charAt(0).toUpperCase() + o.substring(1)), this.bar.style.left = e + "px", this.bar.title = o, !1
        }, o.prototype.hide = function () {
            this.bar.parentNode && this.bar.parentNode.removeChild(this.bar)
        }, o.prototype.setCustomTime = function (t) {
            this.customTime = s.convert(t, "Date"), this.redraw()
        }, o.prototype.getCustomTime = function () {
            return new Date(this.customTime.valueOf())
        }, o.prototype.setCustomTitle = function (t) {
            this.options.title = t
        }, o.prototype._onDragStart = function (t) {
            this.eventParams.dragging = !0, this.eventParams.customTime = this.customTime, t.stopPropagation()
        }, o.prototype._onDrag = function (t) {
            if (this.eventParams.dragging) {
                var e = this.body.util.toScreen(this.eventParams.customTime) + t.deltaX, i = this.body.util.toTime(e);
                this.setCustomTime(i), this.body.emitter.emit("timechange", {
                    id: this.options.id,
                    time: new Date(this.customTime.valueOf())
                }), t.stopPropagation()
            }
        }, o.prototype._onDragEnd = function (t) {
            this.eventParams.dragging && (this.body.emitter.emit("timechanged", {
                id: this.options.id,
                time: new Date(this.customTime.valueOf())
            }), t.stopPropagation())
        }, o.customTimeFromTarget = function (t) {
            for (var e = t.target; e;) {
                if (e.hasOwnProperty("custom-time"))return e["custom-time"];
                e = e.parentNode
            }
            return null
        }, t.exports = o
    }, function (t, e) {
        e.en = {current: "current", time: "time"}, e.en_EN = e.en, e.en_US = e.en, e.it = {
            current: "attuale",
            time: "tempo"
        }, e.it_IT = e.it, e.it_CH = e.it, e.nl = {
            current: "huidige",
            time: "tijd"
        }, e.nl_NL = e.nl, e.nl_BE = e.nl, e.de = {current: "Aktuelle", time: "Zeit"}, e.de_DE = e.de
    }, function (t, e, i) {
        function o(t, e) {
            this.body = t, this.defaultOptions = {
                rtl: !1,
                showCurrentTime: !0,
                moment: r,
                locales: a,
                locale: "en"
            }, this.options = n.extend({}, this.defaultOptions), this.offset = 0, this._create(), this.setOptions(e)
        }

        var n = i(1), s = i(33), r = i(2), a = i(49);
        o.prototype = new s, o.prototype._create = function () {
            var t = document.createElement("div");
            t.className = "vis-current-time", t.style.position = "absolute", t.style.top = "0px", t.style.height = "100%", this.bar = t
        }, o.prototype.destroy = function () {
            this.options.showCurrentTime = !1, this.redraw(), this.body = null
        }, o.prototype.setOptions = function (t) {
            t && n.selectiveExtend(["rtl", "showCurrentTime", "moment", "locale", "locales"], this.options, t)
        }, o.prototype.redraw = function () {
            if (this.options.showCurrentTime) {
                var t = this.body.dom.backgroundVertical;
                this.bar.parentNode != t && (this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), t.appendChild(this.bar), this.start());
                var e = this.options.moment((new Date).valueOf() + this.offset), i = this.body.util.toScreen(e), o = this.options.locales[this.options.locale];
                o || (this.warned || (console.log("WARNING: options.locales['" + this.options.locale + "'] not found. See http://visjs.org/docs/timeline/#Localization"), this.warned = !0), o = this.options.locales.en);
                var n = o.current + " " + o.time + ": " + e.format("dddd, MMMM Do YYYY, H:mm:ss");
                n = n.charAt(0).toUpperCase() + n.substring(1), this.options.rtl ? this.bar.style.right = i + "px" : this.bar.style.left = i + "px", this.bar.title = n, this.bar.innerHTML="<span class ='inner_span'>"+e.format("H:mm:ss")+"</span>"
            } else this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), this.stop();
            return !1
        }, o.prototype.start = function () {
            function t() {
                e.stop();
                var i = e.body.range.conversion(e.body.domProps.center.width).scale, o = 1 / i / 10;
                o < 30 && (o = 30), o > 1e3 && (o = 1e3), e.redraw(), e.body.emitter.emit("currentTimeTick"), e.currentTimeTimer = setTimeout(t, o)
            }

            var e = this;
            t()
        }, o.prototype.stop = function () {
            void 0 !== this.currentTimeTimer && (clearTimeout(this.currentTimeTimer), delete this.currentTimeTimer)
        }, o.prototype.setCurrentTime = function (t) {
            var e = n.convert(t, "Date").valueOf(), i = (new Date).valueOf();
            this.offset = e - i, this.redraw()
        }, o.prototype.getCurrentTime = function () {
            return new Date((new Date).valueOf() + this.offset)
        }, t.exports = o
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = "string", o = "boolean", n = "number", s = "array", r = "date", a = "object", h = "dom", d = "moment", l = "any", c = {
            configure: {
                enabled: {boolean: o},
                filter: {boolean: o, function: "function"},
                container: {dom: h},
                __type__: {object: a, boolean: o, function: "function"}
            },
            align: {string: i},
            rtl: {boolean: o, undefined: "undefined"},
            verticalScroll: {boolean: o, undefined: "undefined"},
            horizontalScroll: {boolean: o, undefined: "undefined"},
            autoResize: {boolean: o},
            clickToUse: {boolean: o},
            dataAttributes: {string: i, array: s},
            editable: {
                add: {boolean: o, undefined: "undefined"},
                remove: {boolean: o, undefined: "undefined"},
                updateGroup: {boolean: o, undefined: "undefined"},
                updateTime: {boolean: o, undefined: "undefined"},
                __type__: {boolean: o, object: a}
            },
            end: {number: n, date: r, string: i, moment: d},
            format: {
                minorLabels: {
                    millisecond: {string: i, undefined: "undefined"},
                    second: {string: i, undefined: "undefined"},
                    minute: {string: i, undefined: "undefined"},
                    hour: {string: i, undefined: "undefined"},
                    weekday: {string: i, undefined: "undefined"},
                    day: {string: i, undefined: "undefined"},
                    month: {string: i, undefined: "undefined"},
                    year: {string: i, undefined: "undefined"},
                    __type__: {object: a, function: "function"}
                },
                majorLabels: {
                    millisecond: {string: i, undefined: "undefined"},
                    second: {string: i, undefined: "undefined"},
                    minute: {string: i, undefined: "undefined"},
                    hour: {string: i, undefined: "undefined"},
                    weekday: {string: i, undefined: "undefined"},
                    day: {string: i, undefined: "undefined"},
                    month: {string: i, undefined: "undefined"},
                    year: {string: i, undefined: "undefined"},
                    __type__: {object: a, function: "function"}
                },
                __type__: {object: a}
            },
            moment: {function: "function"},
            groupOrder: {string: i, function: "function"},
            groupEditable: {
                add: {boolean: o, undefined: "undefined"},
                remove: {boolean: o, undefined: "undefined"},
                order: {boolean: o, undefined: "undefined"},
                __type__: {boolean: o, object: a}
            },
            groupOrderSwap: {function: "function"},
            height: {string: i, number: n},
            hiddenDates: {
                start: {date: r, number: n, string: i, moment: d},
                end: {date: r, number: n, string: i, moment: d},
                repeat: {string: i},
                __type__: {object: a, array: s}
            },
            itemsAlwaysDraggable: {boolean: o},
            locale: {string: i},
            locales: {__any__: {any: l}, __type__: {object: a}},
            margin: {
                axis: {number: n},
                item: {
                    horizontal: {number: n, undefined: "undefined"},
                    vertical: {number: n, undefined: "undefined"},
                    __type__: {object: a, number: n}
                },
                __type__: {object: a, number: n}
            },
            max: {date: r, number: n, string: i, moment: d},
            maxHeight: {number: n, string: i},
            maxMinorChars: {number: n},
            min: {date: r, number: n, string: i, moment: d},
            minHeight: {number: n, string: i},
            moveable: {boolean: o},
            multiselect: {boolean: o},
            multiselectPerGroup: {boolean: o},
            onAdd: {function: "function"},
            onUpdate: {function: "function"},
            onMove: {function: "function"},
            onMoving: {function: "function"},
            onRemove: {function: "function"},
            onAddGroup: {function: "function"},
            onMoveGroup: {function: "function"},
            onRemoveGroup: {function: "function"},
            order: {function: "function"},
            orientation: {
                axis: {string: i, undefined: "undefined"},
                item: {string: i, undefined: "undefined"},
                __type__: {string: i, object: a}
            },
            selectable: {boolean: o},
            showCurrentTime: {boolean: o},
            showMajorLabels: {boolean: o},
            showMinorLabels: {boolean: o},
            stack: {boolean: o},
            snap: {function: "function", null: "null"},
            start: {date: r, number: n, string: i, moment: d},
            template: {function: "function"},
            groupTemplate: {function: "function"},
            tooltipOnItemUpdateTime: {template: {function: "function"}, __type__: {boolean: o, object: a}},
            timeAxis: {
                scale: {string: i, undefined: "undefined"},
                step: {number: n, undefined: "undefined"},
                __type__: {object: a}
            },
            type: {string: i},
            width: {string: i, number: n},
            zoomable: {boolean: o},
            zoomKey: {string: ["ctrlKey", "altKey", "metaKey", ""]},
            zoomMax: {number: n},
            zoomMin: {number: n},
            __type__: {object: a}
        }, u = {
            global: {
                align: ["center", "left", "right"],
                direction: !1,
                autoResize: !0,
                clickToUse: !1,
                editable: {add: !1, remove: !1, updateGroup: !1, updateTime: !1},
                end: "",
                format: {
                    minorLabels: {
                        millisecond: "SSS",
                        second: "s",
                        minute: "HH:mm",
                        hour: "HH:mm",
                        weekday: "ddd D",
                        day: "D",
                        month: "MMM",
                        year: "YYYY"
                    },
                    majorLabels: {
                        millisecond: "HH:mm:ss",
                        second: "D MMMM HH:mm",
                        minute: "ddd D MMMM",
                        hour: "ddd D MMMM",
                        weekday: "MMMM YYYY",
                        day: "MMMM YYYY",
                        month: "YYYY",
                        year: ""
                    }
                },
                groupsDraggable: !1,
                height: "",
                locale: "",
                margin: {axis: [20, 0, 100, 1], item: {horizontal: [10, 0, 100, 1], vertical: [10, 0, 100, 1]}},
                max: "",
                maxHeight: "",
                maxMinorChars: [7, 0, 20, 1],
                min: "",
                minHeight: "",
                moveable: !1,
                multiselect: !1,
                multiselectPerGroup: !1,
                orientation: {axis: ["both", "bottom", "top"], item: ["bottom", "top"]},
                selectable: !0,
                showCurrentTime: !1,
                showMajorLabels: !0,
                showMinorLabels: !0,
                stack: !0,
                start: "",
                tooltipOnItemUpdateTime: !1,
                type: ["box", "point", "range", "background"],
                width: "100%",
                zoomable: !0,
                zoomKey: ["ctrlKey", "altKey", "metaKey", ""],
                zoomMax: [31536e10, 10, 31536e10, 1],
                zoomMin: [10, 10, 31536e10, 1]
            }
        };
        e.allOptions = c, e.configureOptions = u
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e, i, o) {
            if (!(Array.isArray(i) || i instanceof c || i instanceof u) && i instanceof Object) {
                var n = o;
                o = i, i = n
            }
            var s = this;
            this.defaultOptions = {
                start: null,
                end: null,
                autoResize: !0,
                orientation: {axis: "bottom", item: "bottom"},
                moment: d,
                width: null,
                height: null,
                maxHeight: null,
                minHeight: null
            }, this.options = l.deepExtend({}, this.defaultOptions), this._create(t), this.components = [], this.body = {
                dom: this.dom,
                domProps: this.props,
                emitter: {on: this.on.bind(this), off: this.off.bind(this), emit: this.emit.bind(this)},
                hiddenDates: [],
                util: {
                    toScreen: s._toScreen.bind(s),
                    toGlobalScreen: s._toGlobalScreen.bind(s),
                    toTime: s._toTime.bind(s),
                    toGlobalTime: s._toGlobalTime.bind(s)
                }
            }, this.range = new p(this.body), this.components.push(this.range), this.body.range = this.range, this.timeAxis = new m(this.body), this.components.push(this.timeAxis), this.currentTime = new v(this.body), this.components.push(this.currentTime), this.linegraph = new y(this.body), this.components.push(this.linegraph), this.itemsData = null, this.groupsData = null, this.on("tap", function (t) {
                s.emit("click", s.getEventProperties(t))
            }), this.on("doubletap", function (t) {
                s.emit("doubleClick", s.getEventProperties(t))
            }), this.dom.root.oncontextmenu = function (t) {
                s.emit("contextmenu", s.getEventProperties(t))
            }, o && this.setOptions(o), i && this.setGroups(i), e && this.setItems(e), this._redraw()
        }

        var s = i(28), r = o(s), a = i(31), h = o(a), d = (i(13), i(22), i(2)), l = i(1), c = i(9), u = i(11), p = i(32), f = i(35), m = i(46), v = i(50), g = i(48), y = i(53), b = i(31).printStyle, _ = i(61).allOptions, w = i(61).configureOptions;
        n.prototype = new f, n.prototype.setOptions = function (t) {
            var e = h.default.validate(t, _);
            e === !0 && console.log("%cErrors have been found in the supplied options object.", b), f.prototype.setOptions.call(this, t)
        }, n.prototype.setItems = function (t) {
            var e, i = null == this.itemsData;
            if (e = t ? t instanceof c || t instanceof u ? t : new c(t, {
                    type: {
                        start: "Date",
                        end: "Date"
                    }
                }) : null, this.itemsData = e, this.linegraph && this.linegraph.setItems(e), i)if (void 0 != this.options.start || void 0 != this.options.end) {
                var o = void 0 != this.options.start ? this.options.start : null, n = void 0 != this.options.end ? this.options.end : null;
                this.setWindow(o, n, {animation: !1})
            } else this.fit({animation: !1})
        }, n.prototype.setGroups = function (t) {
            var e;
            e = t ? t instanceof c || t instanceof u ? t : new c(t) : null, this.groupsData = e, this.linegraph.setGroups(e)
        }, n.prototype.getLegend = function (t, e, i) {
            return void 0 === e && (e = 15), void 0 === i && (i = 15), void 0 !== this.linegraph.groups[t] ? this.linegraph.groups[t].getLegend(e, i) : "cannot find group:'" + t + "'"
        }, n.prototype.isGroupVisible = function (t) {
            return void 0 !== this.linegraph.groups[t] && (this.linegraph.groups[t].visible && (void 0 === this.linegraph.options.groups.visibility[t] || 1 == this.linegraph.options.groups.visibility[t]))
        }, n.prototype.getDataRange = function () {
            var t = null, e = null;
            for (var i in this.linegraph.groups)if (this.linegraph.groups.hasOwnProperty(i) && 1 == this.linegraph.groups[i].visible)for (var o = 0; o < this.linegraph.groups[i].itemsData.length; o++) {
                var n = this.linegraph.groups[i].itemsData[o], s = l.convert(n.x, "Date").valueOf();
                t = null == t ? s : t > s ? s : t, e = null == e ? s : e < s ? s : e
            }
            return {min: null != t ? new Date(t) : null, max: null != e ? new Date(e) : null}
        }, n.prototype.getEventProperties = function (t) {
            var e = t.center ? t.center.x : t.clientX, i = t.center ? t.center.y : t.clientY, o = e - l.getAbsoluteLeft(this.dom.centerContainer), n = i - l.getAbsoluteTop(this.dom.centerContainer), s = this._toTime(o), r = g.customTimeFromTarget(t), a = l.getTarget(t), h = null;
            l.hasParent(a, this.timeAxis.dom.foreground) ? h = "axis" : this.timeAxis2 && l.hasParent(a, this.timeAxis2.dom.foreground) ? h = "axis" : l.hasParent(a, this.linegraph.yAxisLeft.dom.frame) ? h = "data-axis" : l.hasParent(a, this.linegraph.yAxisRight.dom.frame) ? h = "data-axis" : l.hasParent(a, this.linegraph.legendLeft.dom.frame) ? h = "legend" : l.hasParent(a, this.linegraph.legendRight.dom.frame) ? h = "legend" : null != r ? h = "custom-time" : l.hasParent(a, this.currentTime.bar) ? h = "current-time" : l.hasParent(a, this.dom.center) && (h = "background");
            var d = [], c = this.linegraph.yAxisLeft, u = this.linegraph.yAxisRight;
            return c.hidden || d.push(c.screenToValue(n)), u.hidden || d.push(u.screenToValue(n)), {
                event: t,
                what: h,
                pageX: t.srcEvent ? t.srcEvent.pageX : t.pageX,
                pageY: t.srcEvent ? t.srcEvent.pageY : t.pageY,
                x: o,
                y: n,
                time: s,
                value: d
            }
        }, n.prototype._createConfigurator = function () {
            return new r.default(this, this.dom.container, w)
        }, t.exports = n
    }, function (t, e, i) {
        function o(t, e) {
            this.id = s.randomUUID(), this.body = t, this.defaultOptions = {
                yAxisOrientation: "left",
                defaultGroup: "default",
                sort: !0,
                sampling: !0,
                stack: !1,
                graphHeight: "400px",
                shaded: {enabled: !1, orientation: "bottom"},
                style: "line",
                barChart: {width: 50, sideBySide: !1, align: "center"},
                interpolation: {enabled: !0, parametrization: "centripetal", alpha: .5},
                drawPoints: {enabled: !0, size: 6, style: "square"},
                dataAxis: {},
                legend: {},
                groups: {visibility: {}}
            }, this.options = s.extend({}, this.defaultOptions), this.dom = {}, this.props = {}, this.hammer = null, this.groups = {}, this.abortedGraphUpdate = !1, this.updateSVGheight = !1, this.updateSVGheightOnResize = !1, this.forceGraphUpdate = !0;
            var i = this;
            this.itemsData = null, this.groupsData = null, this.itemListeners = {
                add: function (t, e, o) {
                    i._onAdd(e.items)
                }, update: function (t, e, o) {
                    i._onUpdate(e.items)
                }, remove: function (t, e, o) {
                    i._onRemove(e.items)
                }
            }, this.groupListeners = {
                add: function (t, e, o) {
                    i._onAddGroups(e.items)
                }, update: function (t, e, o) {
                    i._onUpdateGroups(e.items)
                }, remove: function (t, e, o) {
                    i._onRemoveGroups(e.items)
                }
            }, this.items = {}, this.selection = [], this.lastStart = this.body.range.start, this.touchParams = {}, this.svgElements = {}, this.setOptions(e), this.groupsUsingDefaultStyles = [0], this.body.emitter.on("rangechanged", function () {
                i.lastStart = i.body.range.start, i.svg.style.left = s.option.asSize(-i.props.width), i.forceGraphUpdate = !0, i.redraw.call(i)
            }), this._create(), this.framework = {
                svg: this.svg,
                svgElements: this.svgElements,
                options: this.options,
                groups: this.groups
            }
        }

        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s = i(1), r = i(8), a = i(9), h = i(11), d = i(33), l = i(54), c = i(56), u = i(60), p = i(57), f = i(59), m = i(58), v = "__ungrouped__";
        o.prototype = new d, o.prototype._create = function () {
            var t = document.createElement("div");
            t.className = "vis-line-graph", this.dom.frame = t, this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "relative", this.svg.style.height = ("" + this.options.graphHeight).replace("px", "") + "px", this.svg.style.display = "block", t.appendChild(this.svg), this.options.dataAxis.orientation = "left", this.yAxisLeft = new l(this.body, this.options.dataAxis, this.svg, this.options.groups), this.options.dataAxis.orientation = "right", this.yAxisRight = new l(this.body, this.options.dataAxis, this.svg, this.options.groups), delete this.options.dataAxis.orientation, this.legendLeft = new u(this.body, this.options.legend, "left", this.options.groups), this.legendRight = new u(this.body, this.options.legend, "right", this.options.groups), this.show()
        }, o.prototype.setOptions = function (t) {
            if (t) {
                var e = ["sampling", "defaultGroup", "stack", "height", "graphHeight", "yAxisOrientation", "style", "barChart", "dataAxis", "sort", "groups"];
                void 0 === t.graphHeight && void 0 !== t.height ? (this.updateSVGheight = !0, this.updateSVGheightOnResize = !0) : void 0 !== this.body.domProps.centerContainer.height && void 0 !== t.graphHeight && parseInt((t.graphHeight + "").replace("px", "")) < this.body.domProps.centerContainer.height && (this.updateSVGheight = !0), s.selectiveDeepExtend(e, this.options, t), s.mergeOptions(this.options, t, "interpolation"), s.mergeOptions(this.options, t, "drawPoints"), s.mergeOptions(this.options, t, "shaded"), s.mergeOptions(this.options, t, "legend"), t.interpolation && "object" == n(t.interpolation) && t.interpolation.parametrization && ("uniform" == t.interpolation.parametrization ? this.options.interpolation.alpha = 0 : "chordal" == t.interpolation.parametrization ? this.options.interpolation.alpha = 1 : (this.options.interpolation.parametrization = "centripetal", this.options.interpolation.alpha = .5)), this.yAxisLeft && void 0 !== t.dataAxis && (this.yAxisLeft.setOptions(this.options.dataAxis), this.yAxisRight.setOptions(this.options.dataAxis)), this.legendLeft && void 0 !== t.legend && (this.legendLeft.setOptions(this.options.legend), this.legendRight.setOptions(this.options.legend)), this.groups.hasOwnProperty(v) && this.groups[v].setOptions(t)
            }
            this.dom.frame && (this.forceGraphUpdate = !0, this.body.emitter.emit("_change", {queue: !0}))
        }, o.prototype.hide = function () {
            this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame)
        }, o.prototype.show = function () {
            this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame)
        }, o.prototype.setItems = function (t) {
            var e, i = this, o = this.itemsData;
            if (t) {
                if (!(t instanceof a || t instanceof h))throw new TypeError("Data must be an instance of DataSet or DataView");
                this.itemsData = t
            } else this.itemsData = null;
            if (o && (s.forEach(this.itemListeners, function (t, e) {
                    o.off(e, t)
                }), e = o.getIds(), this._onRemove(e)), this.itemsData) {
                var n = this.id;
                s.forEach(this.itemListeners, function (t, e) {
                    i.itemsData.on(e, t, n)
                }), e = this.itemsData.getIds(), this._onAdd(e)
            }
        }, o.prototype.setGroups = function (t) {
            var e, i = this;
            if (this.groupsData) {
                s.forEach(this.groupListeners, function (t, e) {
                    i.groupsData.off(e, t)
                }), e = this.groupsData.getIds(), this.groupsData = null;
                for (var o = 0; o < e.length; o++)this._removeGroup(e[o])
            }
            if (t) {
                if (!(t instanceof a || t instanceof h))throw new TypeError("Data must be an instance of DataSet or DataView");
                this.groupsData = t
            } else this.groupsData = null;
            if (this.groupsData) {
                var n = this.id;
                s.forEach(this.groupListeners, function (t, e) {
                    i.groupsData.on(e, t, n)
                }), e = this.groupsData.getIds(), this._onAddGroups(e)
            }
        }, o.prototype._onUpdate = function (t) {
            this._updateAllGroupData()
        }, o.prototype._onAdd = function (t) {
            this._onUpdate(t)
        }, o.prototype._onRemove = function (t) {
            this._onUpdate(t)
        }, o.prototype._onUpdateGroups = function (t) {
            this._updateAllGroupData()
        }, o.prototype._onAddGroups = function (t) {
            this._onUpdateGroups(t)
        }, o.prototype._onRemoveGroups = function (t) {
            for (var e = 0; e < t.length; e++)this._removeGroup(t[e]);
            this.forceGraphUpdate = !0, this.body.emitter.emit("_change", {queue: !0})
        }, o.prototype._removeGroup = function (t) {
            this.groups.hasOwnProperty(t) && ("right" == this.groups[t].options.yAxisOrientation ? (this.yAxisRight.removeGroup(t), this.legendRight.removeGroup(t), this.legendRight.redraw()) : (this.yAxisLeft.removeGroup(t), this.legendLeft.removeGroup(t), this.legendLeft.redraw()), delete this.groups[t])
        }, o.prototype._updateGroup = function (t, e) {
            this.groups.hasOwnProperty(e) ? (this.groups[e].update(t), "right" == this.groups[e].options.yAxisOrientation ? (this.yAxisRight.updateGroup(e, this.groups[e]), this.legendRight.updateGroup(e, this.groups[e]), this.yAxisLeft.removeGroup(e), this.legendLeft.removeGroup(e)) : (this.yAxisLeft.updateGroup(e, this.groups[e]), this.legendLeft.updateGroup(e, this.groups[e]), this.yAxisRight.removeGroup(e), this.legendRight.removeGroup(e))) : (this.groups[e] = new c(t, e, this.options, this.groupsUsingDefaultStyles), "right" == this.groups[e].options.yAxisOrientation ? (this.yAxisRight.addGroup(e, this.groups[e]), this.legendRight.addGroup(e, this.groups[e])) : (this.yAxisLeft.addGroup(e, this.groups[e]), this.legendLeft.addGroup(e, this.groups[e]))), this.legendLeft.redraw(), this.legendRight.redraw()
        }, o.prototype._updateAllGroupData = function () {
            if (null != this.itemsData) {
                for (var t = {}, e = this.itemsData.get(), i = {}, o = 0; o < e.length; o++) {
                    var n = e[o], r = n.group;
                    null !== r && void 0 !== r || (r = v), i.hasOwnProperty(r) ? i[r]++ : i[r] = 1
                }
                for (var o = 0; o < e.length; o++) {
                    var n = e[o], r = n.group;
                    null !== r && void 0 !== r || (r = v), t.hasOwnProperty(r) || (t[r] = new Array(i[r]));
                    var a = s.bridgeObject(n);
                    a.x = s.convert(n.x, "Date"), a.orginalY = n.y, a.y = Number(n.y);
                    var h = t[r].length - i[r]--;
                    t[r][h] = a
                }
                for (var r in this.groups)this.groups.hasOwnProperty(r) && (t.hasOwnProperty(r) || (t[r] = new Array(0)));
                for (var r in t)if (t.hasOwnProperty(r))if (0 == t[r].length)this.groups.hasOwnProperty(r) && this._removeGroup(r); else {
                    var d = void 0;
                    void 0 != this.groupsData && (d = this.groupsData.get(r)), void 0 == d && (d = {
                        id: r,
                        content: this.options.defaultGroup + r
                    }), this._updateGroup(d, r), this.groups[r].setItems(t[r])
                }
                this.forceGraphUpdate = !0, this.body.emitter.emit("_change", {queue: !0})
            }
        }, o.prototype.redraw = function () {
            var t = !1;
            this.props.width = this.dom.frame.offsetWidth, this.props.height = this.body.domProps.centerContainer.height - this.body.domProps.border.top - this.body.domProps.border.bottom, t = this._isResized() || t;
            var e = this.body.range.end - this.body.range.start, i = e != this.lastVisibleInterval;
            if (this.lastVisibleInterval = e, 1 == t && (this.svg.style.width = s.option.asSize(3 * this.props.width), this.svg.style.left = s.option.asSize(-this.props.width), (this.options.height + "").indexOf("%") == -1 && 1 != this.updateSVGheightOnResize || (this.updateSVGheight = !0)), 1 == this.updateSVGheight ? (this.options.graphHeight != this.props.height + "px" && (this.options.graphHeight = this.props.height + "px", this.svg.style.height = this.props.height + "px"), this.updateSVGheight = !1) : this.svg.style.height = ("" + this.options.graphHeight).replace("px", "") + "px", 1 == t || 1 == i || 1 == this.abortedGraphUpdate || 1 == this.forceGraphUpdate)t = this._updateGraph() || t, this.forceGraphUpdate = !1; else if (0 != this.lastStart) {
                var o = this.body.range.start - this.lastStart, n = this.body.range.end - this.body.range.start;
                if (0 != this.props.width) {
                    var r = this.props.width / n, a = o * r;
                    this.svg.style.left = -this.props.width - a + "px"
                }
            }
            return this.legendLeft.redraw(), this.legendRight.redraw(), t
        }, o.prototype._getSortedGroupIds = function () {
            var t = [];
            for (var e in this.groups)if (this.groups.hasOwnProperty(e)) {
                var i = this.groups[e];
                1 != i.visible || void 0 !== this.options.groups.visibility[e] && 1 != this.options.groups.visibility[e] || t.push({
                    id: e,
                    zIndex: i.options.zIndex
                })
            }
            s.insertSort(t, function (t, e) {
                var i = t.zIndex, o = e.zIndex;
                return void 0 === i && (i = 0), void 0 === o && (o = 0), i == o ? 0 : i < o ? -1 : 1
            });
            for (var o = new Array(t.length), n = 0; n < t.length; n++)o[n] = t[n].id;
            return o
        }, o.prototype._updateGraph = function () {
            if (r.prepareElements(this.svgElements), 0 != this.props.width && null != this.itemsData) {
                var t, e, i = {}, o = !1, n = this.body.util.toGlobalTime(-this.body.domProps.root.width), s = this.body.util.toGlobalTime(2 * this.body.domProps.root.width), a = this._getSortedGroupIds();
                if (a.length > 0) {
                    var h = {};
                    for (this._getRelevantData(a, h, n, s), this._applySampling(a, h), e = 0; e < a.length; e++)this._convertXcoordinates(h[a[e]]);
                    if (this._getYRanges(a, h, i), o = this._updateYAxis(a, i), 1 == o)return r.cleanupElements(this.svgElements), this.abortedGraphUpdate = !0, !0;
                    this.abortedGraphUpdate = !1;
                    var d = void 0;
                    for (e = 0; e < a.length; e++)t = this.groups[a[e]], this.options.stack === !0 && "line" === this.options.style && (void 0 != t.options.excludeFromStacking && t.options.excludeFromStacking || (void 0 != d && (this._stack(h[t.id], h[d.id]), 1 == t.options.shaded.enabled && "group" !== t.options.shaded.orientation && ("top" == t.options.shaded.orientation && "group" !== d.options.shaded.orientation ? (d.options.shaded.orientation = "group",
                        d.options.shaded.groupId = t.id) : (t.options.shaded.orientation = "group", t.options.shaded.groupId = d.id))), d = t)), this._convertYcoordinates(h[a[e]], t);
                    var l = {};
                    for (e = 0; e < a.length; e++)if (t = this.groups[a[e]], "line" === t.options.style && 1 == t.options.shaded.enabled) {
                        var c = h[a[e]];
                        if (null == c || 0 == c.length)continue;
                        if (l.hasOwnProperty(a[e]) || (l[a[e]] = f.calcPath(c, t)), "group" === t.options.shaded.orientation) {
                            var u = t.options.shaded.groupId;
                            if (a.indexOf(u) === -1) {
                                console.log(t.id + ": Unknown shading group target given:" + u);
                                continue
                            }
                            l.hasOwnProperty(u) || (l[u] = f.calcPath(h[u], this.groups[u])), f.drawShading(l[a[e]], t, l[u], this.framework)
                        } else f.drawShading(l[a[e]], t, void 0, this.framework)
                    }
                    for (p.draw(a, h, this.framework), e = 0; e < a.length; e++)if (t = this.groups[a[e]], h[a[e]].length > 0)switch (t.options.style) {
                        case"line":
                            l.hasOwnProperty(a[e]) || (l[a[e]] = f.calcPath(h[a[e]], t)), f.draw(l[a[e]], t, this.framework);
                        case"point":
                        case"points":
                            "point" != t.options.style && "points" != t.options.style && 1 != t.options.drawPoints.enabled || m.draw(h[a[e]], t, this.framework);
                            break;
                        case"bar":
                    }
                }
            }
            return r.cleanupElements(this.svgElements), !1
        }, o.prototype._stack = function (t, e) {
            var i, o, n, s, r;
            i = 0;
            for (var a = 0; a < t.length; a++) {
                s = void 0, r = void 0;
                for (var h = i; h < e.length; h++) {
                    if (e[h].x === t[a].x) {
                        s = e[h], r = e[h], i = h;
                        break
                    }
                    if (e[h].x > t[a].x) {
                        r = e[h], s = 0 == h ? r : e[h - 1], i = h;
                        break
                    }
                }
                void 0 === r && (s = e[e.length - 1], r = e[e.length - 1]), o = r.x - s.x, n = r.y - s.y, 0 == o ? t[a].y = t[a].orginalY + r.y : t[a].y = t[a].orginalY + n / o * (t[a].x - s.x) + s.y
            }
        }, o.prototype._getRelevantData = function (t, e, i, o) {
            var n, r, a, h;
            if (t.length > 0)for (r = 0; r < t.length; r++) {
                n = this.groups[t[r]];
                var d = n.getItems();
                if (1 == n.options.sort) {
                    var l = function (t, e) {
                        return t.getTime() == e.getTime() ? 0 : t < e ? -1 : 1
                    }, c = Math.max(0, s.binarySearchValue(d, i, "x", "before", l)), u = Math.min(d.length, s.binarySearchValue(d, o, "x", "after", l) + 1);
                    u <= 0 && (u = d.length);
                    var p = new Array(u - c);
                    for (a = c; a < u; a++)h = n.itemsData[a], p[a - c] = h;
                    e[t[r]] = p
                } else e[t[r]] = n.itemsData
            }
        }, o.prototype._applySampling = function (t, e) {
            var i;
            if (t.length > 0)for (var o = 0; o < t.length; o++)if (i = this.groups[t[o]], 1 == i.options.sampling) {
                var n = e[t[o]];
                if (n.length > 0) {
                    var s = 1, r = n.length, a = this.body.util.toGlobalScreen(n[n.length - 1].x) - this.body.util.toGlobalScreen(n[0].x), h = r / a;
                    s = Math.min(Math.ceil(.2 * r), Math.max(1, Math.round(h)));
                    for (var d = new Array(r), l = 0; l < r; l += s) {
                        var c = Math.round(l / s);
                        d[c] = n[l]
                    }
                    e[t[o]] = d.splice(0, Math.round(r / s))
                }
            }
        }, o.prototype._getYRanges = function (t, e, i) {
            var o, n, s, r, a = [], h = [];
            if (t.length > 0) {
                for (s = 0; s < t.length; s++)o = e[t[s]], r = this.groups[t[s]].options, o.length > 0 && (n = this.groups[t[s]], r.stack === !0 && "bar" === r.style ? "left" === r.yAxisOrientation ? a = a.concat(n.getItems()) : h = h.concat(n.getItems()) : i[t[s]] = n.getYRange(o, t[s]));
                p.getStackedYRange(a, i, t, "__barStackLeft", "left"), p.getStackedYRange(h, i, t, "__barStackRight", "right")
            }
        }, o.prototype._updateYAxis = function (t, e) {
            var i, o, n = !1, s = !1, r = !1, a = 1e9, h = 1e9, d = -1e9, l = -1e9;
            if (t.length > 0) {
                for (var c = 0; c < t.length; c++) {
                    var u = this.groups[t[c]];
                    u && "right" != u.options.yAxisOrientation ? (s = !0, a = 1e9, d = -1e9) : u && u.options.yAxisOrientation && (r = !0, h = 1e9, l = -1e9)
                }
                for (var c = 0; c < t.length; c++)e.hasOwnProperty(t[c]) && e[t[c]].ignore !== !0 && (i = e[t[c]].min, o = e[t[c]].max, "right" != e[t[c]].yAxisOrientation ? (s = !0, a = a > i ? i : a, d = d < o ? o : d) : (r = !0, h = h > i ? i : h, l = l < o ? o : l));
                1 == s && this.yAxisLeft.setRange(a, d), 1 == r && this.yAxisRight.setRange(h, l)
            }
            n = this._toggleAxisVisiblity(s, this.yAxisLeft) || n, n = this._toggleAxisVisiblity(r, this.yAxisRight) || n, 1 == r && 1 == s ? (this.yAxisLeft.drawIcons = !0, this.yAxisRight.drawIcons = !0) : (this.yAxisLeft.drawIcons = !1, this.yAxisRight.drawIcons = !1), this.yAxisRight.master = !s, this.yAxisRight.masterAxis = this.yAxisLeft, 0 == this.yAxisRight.master ? (1 == r ? this.yAxisLeft.lineOffset = this.yAxisRight.width : this.yAxisLeft.lineOffset = 0, n = this.yAxisLeft.redraw() || n, n = this.yAxisRight.redraw() || n) : n = this.yAxisRight.redraw() || n;
            for (var p = ["__barStackLeft", "__barStackRight", "__lineStackLeft", "__lineStackRight"], c = 0; c < p.length; c++)t.indexOf(p[c]) != -1 && t.splice(t.indexOf(p[c]), 1);
            return n
        }, o.prototype._toggleAxisVisiblity = function (t, e) {
            var i = !1;
            return 0 == t ? e.dom.frame.parentNode && 0 == e.hidden && (e.hide(), i = !0) : e.dom.frame.parentNode || 1 != e.hidden || (e.show(), i = !0), i
        }, o.prototype._convertXcoordinates = function (t) {
            for (var e = this.body.util.toScreen, i = 0; i < t.length; i++)t[i].screen_x = e(t[i].x) + this.props.width, t[i].screen_y = t[i].y
        }, o.prototype._convertYcoordinates = function (t, e) {
            var i = this.yAxisLeft, o = Number(this.svg.style.height.replace("px", ""));
            "right" == e.options.yAxisOrientation && (i = this.yAxisRight);
            for (var n = 0; n < t.length; n++)t[n].screen_y = Math.round(i.convertValue(t[n].y));
            e.setZeroPosition(Math.min(o, i.convertValue(0)))
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i, o) {
            this.id = n.randomUUID(), this.body = t, this.defaultOptions = {
                orientation: "left",
                showMinorLabels: !0,
                showMajorLabels: !0,
                icons: !1,
                majorLinesOffset: 7,
                minorLinesOffset: 4,
                labelOffsetX: 10,
                labelOffsetY: 2,
                iconWidth: 20,
                width: "40px",
                visible: !0,
                alignZeros: !0,
                left: {
                    range: {min: void 0, max: void 0}, format: function (t) {
                        return "" + parseFloat(t.toPrecision(3))
                    }, title: {text: void 0, style: void 0}
                },
                right: {
                    range: {min: void 0, max: void 0}, format: function (t) {
                        return "" + parseFloat(t.toPrecision(3))
                    }, title: {text: void 0, style: void 0}
                }
            }, this.linegraphOptions = o, this.linegraphSVG = i, this.props = {}, this.DOMelements = {
                lines: {},
                labels: {},
                title: {}
            }, this.dom = {}, this.scale = void 0, this.range = {
                start: 0,
                end: 0
            }, this.options = n.extend({}, this.defaultOptions), this.conversionFactor = 1, this.setOptions(e), this.width = Number(("" + this.options.width).replace("px", "")), this.minWidth = this.width, this.height = this.linegraphSVG.getBoundingClientRect().height, this.hidden = !1, this.stepPixels = 25, this.zeroCrossing = -1, this.amountOfSteps = -1, this.lineOffset = 0, this.master = !0, this.masterAxis = null, this.svgElements = {}, this.iconsRemoved = !1, this.groups = {}, this.amountOfGroups = 0, this._create(), this.framework = {
                svg: this.svg,
                svgElements: this.svgElements,
                options: this.options,
                groups: this.groups
            };
            var s = this;
            this.body.emitter.on("verticalDrag", function () {
                s.dom.lineContainer.style.top = s.body.domProps.scrollTop + "px"
            })
        }

        var n = i(1), s = i(8), r = i(33), a = i(55);
        o.prototype = new r, o.prototype.addGroup = function (t, e) {
            this.groups.hasOwnProperty(t) || (this.groups[t] = e), this.amountOfGroups += 1
        }, o.prototype.updateGroup = function (t, e) {
            this.groups.hasOwnProperty(t) || (this.amountOfGroups += 1), this.groups[t] = e
        }, o.prototype.removeGroup = function (t) {
            this.groups.hasOwnProperty(t) && (delete this.groups[t], this.amountOfGroups -= 1)
        }, o.prototype.setOptions = function (t) {
            if (t) {
                var e = !1;
                this.options.orientation != t.orientation && void 0 !== t.orientation && (e = !0);
                var i = ["orientation", "showMinorLabels", "showMajorLabels", "icons", "majorLinesOffset", "minorLinesOffset", "labelOffsetX", "labelOffsetY", "iconWidth", "width", "visible", "left", "right", "alignZeros"];
                n.selectiveDeepExtend(i, this.options, t), this.minWidth = Number(("" + this.options.width).replace("px", "")), e === !0 && this.dom.frame && (this.hide(), this.show())
            }
        }, o.prototype._create = function () {
            this.dom.frame = document.createElement("div"), this.dom.frame.style.width = this.options.width, this.dom.frame.style.height = this.height, this.dom.lineContainer = document.createElement("div"), this.dom.lineContainer.style.width = "100%", this.dom.lineContainer.style.height = this.height, this.dom.lineContainer.style.position = "relative", this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "absolute", this.svg.style.top = "0px", this.svg.style.height = "100%", this.svg.style.width = "100%", this.svg.style.display = "block", this.dom.frame.appendChild(this.svg)
        }, o.prototype._redrawGroupIcons = function () {
            s.prepareElements(this.svgElements);
            var t, e = this.options.iconWidth, i = 15, o = 4, n = o + .5 * i;
            t = "left" === this.options.orientation ? o : this.width - e - o;
            var r = Object.keys(this.groups);
            r.sort(function (t, e) {
                return t < e ? -1 : 1
            });
            for (var a = 0; a < r.length; a++) {
                var h = r[a];
                this.groups[h].visible !== !0 || void 0 !== this.linegraphOptions.visibility[h] && this.linegraphOptions.visibility[h] !== !0 || (this.groups[h].getLegend(e, i, this.framework, t, n), n += i + o)
            }
            s.cleanupElements(this.svgElements), this.iconsRemoved = !1
        }, o.prototype._cleanupIcons = function () {
            this.iconsRemoved === !1 && (s.prepareElements(this.svgElements), s.cleanupElements(this.svgElements), this.iconsRemoved = !0)
        }, o.prototype.show = function () {
            this.hidden = !1, this.dom.frame.parentNode || ("left" === this.options.orientation ? this.body.dom.left.appendChild(this.dom.frame) : this.body.dom.right.appendChild(this.dom.frame)), this.dom.lineContainer.parentNode || this.body.dom.backgroundHorizontal.appendChild(this.dom.lineContainer)
        }, o.prototype.hide = function () {
            this.hidden = !0, this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame), this.dom.lineContainer.parentNode && this.dom.lineContainer.parentNode.removeChild(this.dom.lineContainer)
        }, o.prototype.setRange = function (t, e) {
            this.range.start = t, this.range.end = e
        }, o.prototype.redraw = function () {
            var t = !1, e = 0;
            this.dom.lineContainer.style.top = this.body.domProps.scrollTop + "px";
            for (var i in this.groups)this.groups.hasOwnProperty(i) && (this.groups[i].visible !== !0 || void 0 !== this.linegraphOptions.visibility[i] && this.linegraphOptions.visibility[i] !== !0 || e++);
            if (0 === this.amountOfGroups || 0 === e)this.hide(); else {
                this.show(), this.height = Number(this.linegraphSVG.style.height.replace("px", "")), this.dom.lineContainer.style.height = this.height + "px", this.width = this.options.visible === !0 ? Number(("" + this.options.width).replace("px", "")) : 0;
                var o = this.props, n = this.dom.frame;
                n.className = "vis-data-axis", this._calculateCharSize();
                var s = this.options.orientation, r = this.options.showMinorLabels, a = this.options.showMajorLabels;
                o.minorLabelHeight = r ? o.minorCharHeight : 0, o.majorLabelHeight = a ? o.majorCharHeight : 0, o.minorLineWidth = this.body.dom.backgroundHorizontal.offsetWidth - this.lineOffset - this.width + 2 * this.options.minorLinesOffset, o.minorLineHeight = 1, o.majorLineWidth = this.body.dom.backgroundHorizontal.offsetWidth - this.lineOffset - this.width + 2 * this.options.majorLinesOffset, o.majorLineHeight = 1, "left" === s ? (n.style.top = "0", n.style.left = "0", n.style.bottom = "", n.style.width = this.width + "px", n.style.height = this.height + "px", this.props.width = this.body.domProps.left.width, this.props.height = this.body.domProps.left.height) : (n.style.top = "", n.style.bottom = "0", n.style.left = "0", n.style.width = this.width + "px", n.style.height = this.height + "px", this.props.width = this.body.domProps.right.width, this.props.height = this.body.domProps.right.height), t = this._redrawLabels(), t = this._isResized() || t, this.options.icons === !0 ? this._redrawGroupIcons() : this._cleanupIcons(), this._redrawTitle(s)
            }
            return t
        }, o.prototype._redrawLabels = function () {
            var t = this, e = !1;
            s.prepareElements(this.DOMelements.lines), s.prepareElements(this.DOMelements.labels);
            var i = this.options.orientation, o = void 0 != this.options[i].range ? this.options[i].range : {}, n = !0;
            void 0 != o.max && (this.range.end = o.max, n = !1);
            var r = !0;
            void 0 != o.min && (this.range.start = o.min, r = !1), this.scale = new a(this.range.start, this.range.end, r, n, this.dom.frame.offsetHeight, this.props.majorCharHeight, this.options.alignZeros, this.options[i].format), this.master === !1 && void 0 != this.masterAxis && this.scale.followScale(this.masterAxis.scale), this.maxLabelSize = 0;
            var h = this.scale.getLines();
            h.forEach(function (e) {
                var o = e.y, n = e.major;
                t.options.showMinorLabels && n === !1 && t._redrawLabel(o - 2, e.val, i, "vis-y-axis vis-minor", t.props.minorCharHeight), n && o >= 0 && t._redrawLabel(o - 2, e.val, i, "vis-y-axis vis-major", t.props.majorCharHeight), t.master === !0 && (n ? t._redrawLine(o, i, "vis-grid vis-horizontal vis-major", t.options.majorLinesOffset, t.props.majorLineWidth) : t._redrawLine(o, i, "vis-grid vis-horizontal vis-minor", t.options.minorLinesOffset, t.props.minorLineWidth))
            });
            var d = 0;
            void 0 !== this.options[i].title && void 0 !== this.options[i].title.text && (d = this.props.titleCharHeight);
            var l = this.options.icons === !0 ? Math.max(this.options.iconWidth, d) + this.options.labelOffsetX + 15 : d + this.options.labelOffsetX + 15;
            return this.maxLabelSize > this.width - l && this.options.visible === !0 ? (this.width = this.maxLabelSize + l, this.options.width = this.width + "px", s.cleanupElements(this.DOMelements.lines), s.cleanupElements(this.DOMelements.labels), this.redraw(), e = !0) : this.maxLabelSize < this.width - l && this.options.visible === !0 && this.width > this.minWidth ? (this.width = Math.max(this.minWidth, this.maxLabelSize + l), this.options.width = this.width + "px", s.cleanupElements(this.DOMelements.lines), s.cleanupElements(this.DOMelements.labels), this.redraw(), e = !0) : (s.cleanupElements(this.DOMelements.lines), s.cleanupElements(this.DOMelements.labels), e = !1), e
        }, o.prototype.convertValue = function (t) {
            return this.scale.convertValue(t)
        }, o.prototype.screenToValue = function (t) {
            return this.scale.screenToValue(t)
        }, o.prototype._redrawLabel = function (t, e, i, o, n) {
            var r = s.getDOMElement("div", this.DOMelements.labels, this.dom.frame);
            r.className = o, r.innerHTML = e, "left" === i ? (r.style.left = "-" + this.options.labelOffsetX + "px", r.style.textAlign = "right") : (r.style.right = "-" + this.options.labelOffsetX + "px", r.style.textAlign = "left"), r.style.top = t - .5 * n + this.options.labelOffsetY + "px", e += "";
            var a = Math.max(this.props.majorCharWidth, this.props.minorCharWidth);
            this.maxLabelSize < e.length * a && (this.maxLabelSize = e.length * a)
        }, o.prototype._redrawLine = function (t, e, i, o, n) {
            if (this.master === !0) {
                var r = s.getDOMElement("div", this.DOMelements.lines, this.dom.lineContainer);
                r.className = i, r.innerHTML = "", "left" === e ? r.style.left = this.width - o + "px" : r.style.right = this.width - o + "px", r.style.width = n + "px", r.style.top = t + "px"
            }
        }, o.prototype._redrawTitle = function (t) {
            if (s.prepareElements(this.DOMelements.title), void 0 !== this.options[t].title && void 0 !== this.options[t].title.text) {
                var e = s.getDOMElement("div", this.DOMelements.title, this.dom.frame);
                e.className = "vis-y-axis vis-title vis-" + t, e.innerHTML = this.options[t].title.text, void 0 !== this.options[t].title.style && n.addCssText(e, this.options[t].title.style), "left" === t ? e.style.left = this.props.titleCharHeight + "px" : e.style.right = this.props.titleCharHeight + "px", e.style.width = this.height + "px"
            }
            s.cleanupElements(this.DOMelements.title)
        }, o.prototype._calculateCharSize = function () {
            if (!("minorCharHeight"in this.props)) {
                var t = document.createTextNode("0"), e = document.createElement("div");
                e.className = "vis-y-axis vis-minor vis-measure", e.appendChild(t), this.dom.frame.appendChild(e), this.props.minorCharHeight = e.clientHeight, this.props.minorCharWidth = e.clientWidth, this.dom.frame.removeChild(e)
            }
            if (!("majorCharHeight"in this.props)) {
                var i = document.createTextNode("0"), o = document.createElement("div");
                o.className = "vis-y-axis vis-major vis-measure", o.appendChild(i), this.dom.frame.appendChild(o), this.props.majorCharHeight = o.clientHeight, this.props.majorCharWidth = o.clientWidth, this.dom.frame.removeChild(o)
            }
            if (!("titleCharHeight"in this.props)) {
                var n = document.createTextNode("0"), s = document.createElement("div");
                s.className = "vis-y-axis vis-title vis-measure", s.appendChild(n), this.dom.frame.appendChild(s), this.props.titleCharHeight = s.clientHeight, this.props.titleCharWidth = s.clientWidth, this.dom.frame.removeChild(s)
            }
        }, t.exports = o
    }, function (t, e) {
        function i(t, e, i, o, n, s) {
            var r = arguments.length > 6 && void 0 !== arguments[6] && arguments[6], a = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
            if (this.majorSteps = [1, 2, 5, 10], this.minorSteps = [.25, .5, 1, 2], this.customLines = null, this.containerHeight = n, this.majorCharHeight = s, this._start = t, this._end = e, this.scale = 1, this.minorStepIdx = -1, this.magnitudefactor = 1, this.determineScale(), this.zeroAlign = r, this.autoScaleStart = i, this.autoScaleEnd = o, this.formattingFunction = a, i || o) {
                var h = this, d = function (t) {
                    var e = t - t % (h.magnitudefactor * h.minorSteps[h.minorStepIdx]);
                    return t % (h.magnitudefactor * h.minorSteps[h.minorStepIdx]) > .5 * (h.magnitudefactor * h.minorSteps[h.minorStepIdx]) ? e + h.magnitudefactor * h.minorSteps[h.minorStepIdx] : e
                };
                i && (this._start -= 2 * this.magnitudefactor * this.minorSteps[this.minorStepIdx], this._start = d(this._start)), o && (this._end += this.magnitudefactor * this.minorSteps[this.minorStepIdx], this._end = d(this._end)), this.determineScale()
            }
        }

        i.prototype.setCharHeight = function (t) {
            this.majorCharHeight = t
        }, i.prototype.setHeight = function (t) {
            this.containerHeight = t
        }, i.prototype.determineScale = function () {
            var t = this._end - this._start;
            this.scale = this.containerHeight / t;
            var e = this.majorCharHeight / this.scale, i = t > 0 ? Math.round(Math.log(t) / Math.LN10) : 0;
            this.minorStepIdx = -1, this.magnitudefactor = Math.pow(10, i);
            var o = 0;
            i < 0 && (o = i);
            for (var n = !1, s = o; Math.abs(s) <= Math.abs(i); s++) {
                this.magnitudefactor = Math.pow(10, s);
                for (var r = 0; r < this.minorSteps.length; r++) {
                    var a = this.magnitudefactor * this.minorSteps[r];
                    if (a >= e) {
                        n = !0, this.minorStepIdx = r;
                        break
                    }
                }
                if (n === !0)break
            }
        }, i.prototype.is_major = function (t) {
            return t % (this.magnitudefactor * this.majorSteps[this.minorStepIdx]) === 0
        }, i.prototype.getStep = function () {
            return this.magnitudefactor * this.minorSteps[this.minorStepIdx]
        }, i.prototype.getFirstMajor = function () {
            var t = this.magnitudefactor * this.majorSteps[this.minorStepIdx];
            return this.convertValue(this._start + (t - this._start % t) % t)
        }, i.prototype.formatValue = function (t) {
            var e = t.toPrecision(5);
            return "function" == typeof this.formattingFunction && (e = this.formattingFunction(t)), "number" == typeof e ? "" + e : "string" == typeof e ? e : t.toPrecision(5)
        }, i.prototype.getLines = function () {
            for (var t = [], e = this.getStep(), i = (e - this._start % e) % e, o = this._start + i; this._end - o > 1e-5; o += e)o != this._start && t.push({
                major: this.is_major(o),
                y: this.convertValue(o),
                val: this.formatValue(o)
            });
            return t
        }, i.prototype.followScale = function (t) {
            var e = this.minorStepIdx, i = this._start, o = this._end, n = this, s = function () {
                n.magnitudefactor *= 2
            }, r = function () {
                n.magnitudefactor /= 2
            };
            t.minorStepIdx <= 1 && this.minorStepIdx <= 1 || t.minorStepIdx > 1 && this.minorStepIdx > 1 || (t.minorStepIdx < this.minorStepIdx ? (this.minorStepIdx = 1, 2 == e ? s() : (s(), s())) : (this.minorStepIdx = 2, 1 == e ? r() : (r(), r())));
            for (var a = (t.getLines(), t.convertValue(0)), h = t.getStep() * t.scale, d = !1, l = 0; !d && l++ < 5;) {
                this.scale = h / (this.minorSteps[this.minorStepIdx] * this.magnitudefactor);
                var c = this.containerHeight / this.scale;
                this._start = i, this._end = this._start + c;
                var u = this._end * this.scale, p = this.magnitudefactor * this.majorSteps[this.minorStepIdx], f = this.getFirstMajor() - t.getFirstMajor();
                if (this.zeroAlign) {
                    var m = a - u;
                    this._end += m / this.scale, this._start = this._end - c
                } else this.autoScaleStart ? (this._start -= f / this.scale, this._end = this._start + c) : (this._start += p - f / this.scale, this._end = this._start + c);
                if (!this.autoScaleEnd && this._end > o + 1e-5)r(), d = !1; else {
                    if (!this.autoScaleStart && this._start < i - 1e-5) {
                        if (!(this.zeroAlign && i >= 0)) {
                            r(), d = !1;
                            continue
                        }
                        console.warn("Can't adhere to given 'min' range, due to zeroalign")
                    }
                    this.autoScaleStart && this.autoScaleEnd && c < o - i ? (s(), d = !1) : d = !0
                }
            }
        }, i.prototype.convertValue = function (t) {
            return this.containerHeight - (t - this._start) * this.scale
        }, i.prototype.screenToValue = function (t) {
            return (this.containerHeight - t) / this.scale + this._start
        }, t.exports = i
    }, function (t, e, i) {
        function o(t, e, i, o) {
            this.id = e;
            var n = ["sampling", "style", "sort", "yAxisOrientation", "barChart", "drawPoints", "shaded", "interpolation", "zIndex", "excludeFromStacking", "excludeFromLegend"];
            this.options = s.selectiveBridgeObject(n, i), this.usingDefaultStyle = void 0 === t.className, this.groupsUsingDefaultStyles = o, this.zeroPosition = 0, this.update(t), 1 == this.usingDefaultStyle && (this.groupsUsingDefaultStyles[0] += 1), this.itemsData = [], this.visible = void 0 === t.visible || t.visible
        }

        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, s = i(1), r = (i(8), i(57)), a = i(59), h = i(58);
        o.prototype.setItems = function (t) {
            null != t ? (this.itemsData = t, 1 == this.options.sort && s.insertSort(this.itemsData, function (t, e) {
                return t.x > e.x ? 1 : -1
            })) : this.itemsData = []
        }, o.prototype.getItems = function () {
            return this.itemsData
        }, o.prototype.setZeroPosition = function (t) {
            this.zeroPosition = t
        }, o.prototype.setOptions = function (t) {
            if (void 0 !== t) {
                var e = ["sampling", "style", "sort", "yAxisOrientation", "barChart", "zIndex", "excludeFromStacking", "excludeFromLegend"];
                s.selectiveDeepExtend(e, this.options, t), "function" == typeof t.drawPoints && (t.drawPoints = {onRender: t.drawPoints}), s.mergeOptions(this.options, t, "interpolation"), s.mergeOptions(this.options, t, "drawPoints"), s.mergeOptions(this.options, t, "shaded"), t.interpolation && "object" == n(t.interpolation) && t.interpolation.parametrization && ("uniform" == t.interpolation.parametrization ? this.options.interpolation.alpha = 0 : "chordal" == t.interpolation.parametrization ? this.options.interpolation.alpha = 1 : (this.options.interpolation.parametrization = "centripetal", this.options.interpolation.alpha = .5))
            }
        }, o.prototype.update = function (t) {
            this.group = t, this.content = t.content || "graph", this.className = t.className || this.className || "vis-graph-group" + this.groupsUsingDefaultStyles[0] % 10, this.visible = void 0 === t.visible || t.visible, this.style = t.style, this.setOptions(t.options)
        }, o.prototype.getLegend = function (t, e, i, o, n) {
            if (void 0 == i || null == i) {
                var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                i = {svg: s, svgElements: {}, options: this.options, groups: [this]}
            }
            switch (void 0 != o && null != o || (o = 0), void 0 != n && null != n || (n = .5 * e), this.options.style) {
                case"line":
                    a.drawIcon(this, o, n, t, e, i);
                    break;
                case"points":
                case"point":
                    h.drawIcon(this, o, n, t, e, i);
                    break;
                case"bar":
                    r.drawIcon(this, o, n, t, e, i)
            }
            return {icon: i.svg, label: this.content, orientation: this.options.yAxisOrientation}
        }, o.prototype.getYRange = function (t) {
            for (var e = t[0].y, i = t[0].y, o = 0; o < t.length; o++)e = e > t[o].y ? t[o].y : e, i = i < t[o].y ? t[o].y : i;
            return {min: e, max: i, yAxisOrientation: this.options.yAxisOrientation}
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e) {
        }

        var n = i(8), s = i(58);
        o.drawIcon = function (t, e, i, o, s, r) {
            var a = .5 * s, h = n.getSVGElement("rect", r.svgElements, r.svg);
            h.setAttributeNS(null, "x", e), h.setAttributeNS(null, "y", i - a), h.setAttributeNS(null, "width", o), h.setAttributeNS(null, "height", 2 * a), h.setAttributeNS(null, "class", "vis-outline");
            var d = Math.round(.3 * o), l = t.options.barChart.width, c = l / d, u = Math.round(.4 * s), p = Math.round(.75 * s), f = Math.round((o - 2 * d) / 3);
            if (n.drawBar(e + .5 * d + f, i + a - u - 1, d, u, t.className + " vis-bar", r.svgElements, r.svg, t.style), n.drawBar(e + 1.5 * d + f + 2, i + a - p - 1, d, p, t.className + " vis-bar", r.svgElements, r.svg, t.style), 1 == t.options.drawPoints.enabled) {
                var m = {
                    style: t.options.drawPoints.style,
                    styles: t.options.drawPoints.styles,
                    size: t.options.drawPoints.size / c,
                    className: t.className
                };
                n.drawPoint(e + .5 * d + f, i + a - u - 1, m, r.svgElements, r.svg), n.drawPoint(e + 1.5 * d + f + 2, i + a - p - 1, m, r.svgElements, r.svg)
            }
        }, o.draw = function (t, e, i) {
            var r, a, h, d, l, c, u = [], p = {}, f = 0;
            for (l = 0; l < t.length; l++)if (d = i.groups[t[l]], "bar" === d.options.style && d.visible === !0 && (void 0 === i.options.groups.visibility[t[l]] || i.options.groups.visibility[t[l]] === !0))for (c = 0; c < e[t[l]].length; c++)u.push({
                screen_x: e[t[l]][c].screen_x,
                screen_y: e[t[l]][c].screen_y,
                x: e[t[l]][c].x,
                y: e[t[l]][c].y,
                groupId: t[l],
                label: e[t[l]][c].label
            }), f += 1;
            if (0 !== f)for (u.sort(function (t, e) {
                return t.screen_x === e.screen_x ? t.groupId < e.groupId ? -1 : 1 : t.screen_x - e.screen_x
            }), o._getDataIntersections(p, u), l = 0; l < u.length; l++) {
                d = i.groups[u[l].groupId];
                var m = void 0 != d.options.barChart.minWidth ? d.options.barChart.minWidth : .1 * d.options.barChart.width;
                a = u[l].screen_x;
                var v = 0;
                if (void 0 === p[a])l + 1 < u.length && (r = Math.abs(u[l + 1].screen_x - a)), h = o._getSafeDrawData(r, d, m); else {
                    var g = l + (p[a].amount - p[a].resolved);
                    l - (p[a].resolved + 1);
                    g < u.length && (r = Math.abs(u[g].screen_x - a)), h = o._getSafeDrawData(r, d, m), p[a].resolved += 1, d.options.stack === !0 && d.options.excludeFromStacking !== !0 ? u[l].screen_y < d.zeroPosition ? (v = p[a].accumulatedNegative, p[a].accumulatedNegative += d.zeroPosition - u[l].screen_y) : (v = p[a].accumulatedPositive, p[a].accumulatedPositive += d.zeroPosition - u[l].screen_y) : d.options.barChart.sideBySide === !0 && (h.width = h.width / p[a].amount, h.offset += p[a].resolved * h.width - .5 * h.width * (p[a].amount + 1))
                }
                if (n.drawBar(u[l].screen_x + h.offset, u[l].screen_y - v, h.width, d.zeroPosition - u[l].screen_y, d.className + " vis-bar", i.svgElements, i.svg, d.style), d.options.drawPoints.enabled === !0) {
                    var y = {
                        screen_x: u[l].screen_x,
                        screen_y: u[l].screen_y - v,
                        x: u[l].x,
                        y: u[l].y,
                        groupId: u[l].groupId,
                        label: u[l].label
                    };
                    s.draw([y], d, i, h.offset)
                }
            }
        }, o._getDataIntersections = function (t, e) {
            for (var i, o = 0; o < e.length; o++)o + 1 < e.length && (i = Math.abs(e[o + 1].screen_x - e[o].screen_x)), o > 0 && (i = Math.min(i, Math.abs(e[o - 1].screen_x - e[o].screen_x))), 0 === i && (void 0 === t[e[o].screen_x] && (t[e[o].screen_x] = {
                amount: 0,
                resolved: 0,
                accumulatedPositive: 0,
                accumulatedNegative: 0
            }), t[e[o].screen_x].amount += 1)
        }, o._getSafeDrawData = function (t, e, i) {
            var o, n;
            return t < e.options.barChart.width && t > 0 ? (o = t < i ? i : t, n = 0, "left" === e.options.barChart.align ? n -= .5 * t : "right" === e.options.barChart.align && (n += .5 * t)) : (o = e.options.barChart.width, n = 0, "left" === e.options.barChart.align ? n -= .5 * e.options.barChart.width : "right" === e.options.barChart.align && (n += .5 * e.options.barChart.width)), {
                width: o,
                offset: n
            }
        }, o.getStackedYRange = function (t, e, i, n, s) {
            if (t.length > 0) {
                t.sort(function (t, e) {
                    return t.screen_x === e.screen_x ? t.groupId < e.groupId ? -1 : 1 : t.screen_x - e.screen_x
                });
                var r = {};
                o._getDataIntersections(r, t), e[n] = o._getStackedYRange(r, t), e[n].yAxisOrientation = s, i.push(n)
            }
        }, o._getStackedYRange = function (t, e) {
            for (var i, o = e[0].screen_y, n = e[0].screen_y, s = 0; s < e.length; s++)i = e[s].screen_x, void 0 === t[i] ? (o = o > e[s].screen_y ? e[s].screen_y : o, n = n < e[s].screen_y ? e[s].screen_y : n) : e[s].screen_y < 0 ? t[i].accumulatedNegative += e[s].screen_y : t[i].accumulatedPositive += e[s].screen_y;
            for (var r in t)t.hasOwnProperty(r) && (o = o > t[r].accumulatedNegative ? t[r].accumulatedNegative : o, o = o > t[r].accumulatedPositive ? t[r].accumulatedPositive : o, n = n < t[r].accumulatedNegative ? t[r].accumulatedNegative : n, n = n < t[r].accumulatedPositive ? t[r].accumulatedPositive : n);
            return {min: o, max: n}
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e) {
        }

        function n(t, e) {
            return e = "undefined" == typeof e ? {} : e, {
                style: e.style || t.options.drawPoints.style,
                styles: e.styles || t.options.drawPoints.styles,
                size: e.size || t.options.drawPoints.size,
                className: e.className || t.className
            }
        }

        function s(t, e) {
            var i = void 0;
            return t.options && t.options.drawPoints && t.options.drawPoints.onRender && "function" == typeof t.options.drawPoints.onRender && (i = t.options.drawPoints.onRender), e.group.options && e.group.options.drawPoints && e.group.options.drawPoints.onRender && "function" == typeof e.group.options.drawPoints.onRender && (i = e.group.options.drawPoints.onRender), i
        }

        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, a = i(8);
        o.draw = function (t, e, i, o) {
            o = o || 0;
            for (var h = s(i, e), d = 0; d < t.length; d++)if (h) {
                var l = h(t[d], e);
                l !== !0 && "object" !== ("undefined" == typeof l ? "undefined" : r(l)) || a.drawPoint(t[d].screen_x + o, t[d].screen_y, n(e, l), i.svgElements, i.svg, t[d].label)
            } else a.drawPoint(t[d].screen_x + o, t[d].screen_y, n(e), i.svgElements, i.svg, t[d].label)
        }, o.drawIcon = function (t, e, i, o, s, r) {
            var h = .5 * s, d = a.getSVGElement("rect", r.svgElements, r.svg);
            d.setAttributeNS(null, "x", e), d.setAttributeNS(null, "y", i - h), d.setAttributeNS(null, "width", o), d.setAttributeNS(null, "height", 2 * h), d.setAttributeNS(null, "class", "vis-outline"), a.drawPoint(e + .5 * o, i, n(t), r.svgElements, r.svg)
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e) {
        }

        var n = i(8);
        o.calcPath = function (t, e) {
            if (null != t && t.length > 0) {
                var i = [];
                return i = 1 == e.options.interpolation.enabled ? o._catmullRom(t, e) : o._linear(t)
            }
        }, o.drawIcon = function (t, e, i, o, s, r) {
            var a, h, d = .5 * s, l = n.getSVGElement("rect", r.svgElements, r.svg);
            if (l.setAttributeNS(null, "x", e), l.setAttributeNS(null, "y", i - d), l.setAttributeNS(null, "width", o), l.setAttributeNS(null, "height", 2 * d), l.setAttributeNS(null, "class", "vis-outline"), a = n.getSVGElement("path", r.svgElements, r.svg), a.setAttributeNS(null, "class", t.className), void 0 !== t.style && a.setAttributeNS(null, "style", t.style), a.setAttributeNS(null, "d", "M" + e + "," + i + " L" + (e + o) + "," + i), 1 == t.options.shaded.enabled && (h = n.getSVGElement("path", r.svgElements, r.svg), "top" == t.options.shaded.orientation ? h.setAttributeNS(null, "d", "M" + e + ", " + (i - d) + "L" + e + "," + i + " L" + (e + o) + "," + i + " L" + (e + o) + "," + (i - d)) : h.setAttributeNS(null, "d", "M" + e + "," + i + " L" + e + "," + (i + d) + " L" + (e + o) + "," + (i + d) + "L" + (e + o) + "," + i), h.setAttributeNS(null, "class", t.className + " vis-icon-fill"), void 0 !== t.options.shaded.style && "" !== t.options.shaded.style && h.setAttributeNS(null, "style", t.options.shaded.style)), 1 == t.options.drawPoints.enabled) {
                var c = {
                    style: t.options.drawPoints.style,
                    styles: t.options.drawPoints.styles,
                    size: t.options.drawPoints.size,
                    className: t.className
                };
                n.drawPoint(e + .5 * o, i, c, r.svgElements, r.svg)
            }
        }, o.drawShading = function (t, e, i, o) {
            if (1 == e.options.shaded.enabled) {
                var s = Number(o.svg.style.height.replace("px", "")), r = n.getSVGElement("path", o.svgElements, o.svg), a = "L";
                1 == e.options.interpolation.enabled && (a = "C");
                var h, d = 0;
                d = "top" == e.options.shaded.orientation ? 0 : "bottom" == e.options.shaded.orientation ? s : Math.min(Math.max(0, e.zeroPosition), s), h = "group" == e.options.shaded.orientation && null != i && void 0 != i ? "M" + t[0][0] + "," + t[0][1] + " " + this.serializePath(t, a, !1) + " L" + i[i.length - 1][0] + "," + i[i.length - 1][1] + " " + this.serializePath(i, a, !0) + i[0][0] + "," + i[0][1] + " Z" : "M" + t[0][0] + "," + t[0][1] + " " + this.serializePath(t, a, !1) + " V" + d + " H" + t[0][0] + " Z", r.setAttributeNS(null, "class", e.className + " vis-fill"), void 0 !== e.options.shaded.style && r.setAttributeNS(null, "style", e.options.shaded.style), r.setAttributeNS(null, "d", h)
            }
        }, o.draw = function (t, e, i) {
            if (null != t && void 0 != t) {
                var o = n.getSVGElement("path", i.svgElements, i.svg);
                o.setAttributeNS(null, "class", e.className), void 0 !== e.style && o.setAttributeNS(null, "style", e.style);
                var s = "L";
                1 == e.options.interpolation.enabled && (s = "C"), o.setAttributeNS(null, "d", "M" + t[0][0] + "," + t[0][1] + " " + this.serializePath(t, s, !1))
            }
        }, o.serializePath = function (t, e, i) {
            if (t.length < 2)return "";
            var o = e;
            if (i)for (var n = t.length - 2; n > 0; n--)o += t[n][0] + "," + t[n][1] + " "; else for (var n = 1; n < t.length; n++)o += t[n][0] + "," + t[n][1] + " ";
            return o
        }, o._catmullRomUniform = function (t) {
            var e, i, o, n, s, r, a = [];
            a.push([Math.round(t[0].screen_x), Math.round(t[0].screen_y)]);
            for (var h = 1 / 6, d = t.length, l = 0; l < d - 1; l++)e = 0 == l ? t[0] : t[l - 1], i = t[l], o = t[l + 1], n = l + 2 < d ? t[l + 2] : o, s = {
                screen_x: (-e.screen_x + 6 * i.screen_x + o.screen_x) * h,
                screen_y: (-e.screen_y + 6 * i.screen_y + o.screen_y) * h
            }, r = {
                screen_x: (i.screen_x + 6 * o.screen_x - n.screen_x) * h,
                screen_y: (i.screen_y + 6 * o.screen_y - n.screen_y) * h
            }, a.push([s.screen_x, s.screen_y]), a.push([r.screen_x, r.screen_y]), a.push([o.screen_x, o.screen_y]);
            return a
        }, o._catmullRom = function (t, e) {
            var i = e.options.interpolation.alpha;
            if (0 == i || void 0 === i)return this._catmullRomUniform(t);
            var o, n, s, r, a, h, d, l, c, u, p, f, m, v, g, y, b, _, w, x = [];
            x.push([Math.round(t[0].screen_x), Math.round(t[0].screen_y)]);
            for (var k = t.length, O = 0; O < k - 1; O++)o = 0 == O ? t[0] : t[O - 1], n = t[O], s = t[O + 1], r = O + 2 < k ? t[O + 2] : s, d = Math.sqrt(Math.pow(o.screen_x - n.screen_x, 2) + Math.pow(o.screen_y - n.screen_y, 2)), l = Math.sqrt(Math.pow(n.screen_x - s.screen_x, 2) + Math.pow(n.screen_y - s.screen_y, 2)), c = Math.sqrt(Math.pow(s.screen_x - r.screen_x, 2) + Math.pow(s.screen_y - r.screen_y, 2)), v = Math.pow(c, i), y = Math.pow(c, 2 * i), g = Math.pow(l, i), b = Math.pow(l, 2 * i), w = Math.pow(d, i), _ = Math.pow(d, 2 * i), u = 2 * _ + 3 * w * g + b, p = 2 * y + 3 * v * g + b, f = 3 * w * (w + g), f > 0 && (f = 1 / f), m = 3 * v * (v + g), m > 0 && (m = 1 / m), a = {
                screen_x: (-b * o.screen_x + u * n.screen_x + _ * s.screen_x) * f,
                screen_y: (-b * o.screen_y + u * n.screen_y + _ * s.screen_y) * f
            }, h = {
                screen_x: (y * n.screen_x + p * s.screen_x - b * r.screen_x) * m,
                screen_y: (y * n.screen_y + p * s.screen_y - b * r.screen_y) * m
            }, 0 == a.screen_x && 0 == a.screen_y && (a = n), 0 == h.screen_x && 0 == h.screen_y && (h = s), x.push([a.screen_x, a.screen_y]), x.push([h.screen_x, h.screen_y]), x.push([s.screen_x, s.screen_y]);
            return x
        }, o._linear = function (t) {
            for (var e = [], i = 0; i < t.length; i++)e.push([t[i].screen_x, t[i].screen_y]);
            return e
        }, t.exports = o
    }, function (t, e, i) {
        function o(t, e, i, o) {
            this.body = t, this.defaultOptions = {
                enabled: !1,
                icons: !0,
                iconSize: 20,
                iconSpacing: 6,
                left: {visible: !0, position: "top-left"},
                right: {visible: !0, position: "top-right"}
            }, this.side = i, this.options = n.extend({}, this.defaultOptions), this.linegraphOptions = o, this.svgElements = {}, this.dom = {}, this.groups = {}, this.amountOfGroups = 0, this._create(), this.framework = {
                svg: this.svg,
                svgElements: this.svgElements,
                options: this.options,
                groups: this.groups
            }, this.setOptions(e)
        }

        var n = i(1), s = i(8), r = i(33);
        o.prototype = new r, o.prototype.clear = function () {
            this.groups = {}, this.amountOfGroups = 0
        }, o.prototype.addGroup = function (t, e) {
            1 != e.options.excludeFromLegend && (this.groups.hasOwnProperty(t) || (this.groups[t] = e), this.amountOfGroups += 1)
        }, o.prototype.updateGroup = function (t, e) {
            this.groups[t] = e
        }, o.prototype.removeGroup = function (t) {
            this.groups.hasOwnProperty(t) && (delete this.groups[t], this.amountOfGroups -= 1)
        }, o.prototype._create = function () {
            this.dom.frame = document.createElement("div"), this.dom.frame.className = "vis-legend", this.dom.frame.style.position = "absolute", this.dom.frame.style.top = "10px", this.dom.frame.style.display = "block", this.dom.textArea = document.createElement("div"), this.dom.textArea.className = "vis-legend-text", this.dom.textArea.style.position = "relative", this.dom.textArea.style.top = "0px", this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "absolute", this.svg.style.top = "0px", this.svg.style.width = this.options.iconSize + 5 + "px", this.svg.style.height = "100%", this.dom.frame.appendChild(this.svg), this.dom.frame.appendChild(this.dom.textArea)
        }, o.prototype.hide = function () {
            this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame)
        }, o.prototype.show = function () {
            this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame)
        }, o.prototype.setOptions = function (t) {
            var e = ["enabled", "orientation", "icons", "left", "right"];
            n.selectiveDeepExtend(e, this.options, t)
        }, o.prototype.redraw = function () {
            var t = 0, e = Object.keys(this.groups);
            e.sort(function (t, e) {
                return t < e ? -1 : 1
            });
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                1 != this.groups[o].visible || void 0 !== this.linegraphOptions.visibility[o] && 1 != this.linegraphOptions.visibility[o] || t++
            }
            if (0 == this.options[this.side].visible || 0 == this.amountOfGroups || 0 == this.options.enabled || 0 == t)this.hide(); else {
                if (this.show(), "top-left" == this.options[this.side].position || "bottom-left" == this.options[this.side].position ? (this.dom.frame.style.left = "4px", this.dom.frame.style.textAlign = "left", this.dom.textArea.style.textAlign = "left", this.dom.textArea.style.left = this.options.iconSize + 15 + "px", this.dom.textArea.style.right = "", this.svg.style.left = "0px", this.svg.style.right = "") : (this.dom.frame.style.right = "4px", this.dom.frame.style.textAlign = "right", this.dom.textArea.style.textAlign = "right", this.dom.textArea.style.right = this.options.iconSize + 15 + "px", this.dom.textArea.style.left = "", this.svg.style.right = "0px", this.svg.style.left = ""), "top-left" == this.options[this.side].position || "top-right" == this.options[this.side].position)this.dom.frame.style.top = 4 - Number(this.body.dom.center.style.top.replace("px", "")) + "px", this.dom.frame.style.bottom = ""; else {
                    var n = this.body.domProps.center.height - this.body.domProps.centerContainer.height;
                    this.dom.frame.style.bottom = 4 + n + Number(this.body.dom.center.style.top.replace("px", "")) + "px", this.dom.frame.style.top = ""
                }
                0 == this.options.icons ? (this.dom.frame.style.width = this.dom.textArea.offsetWidth + 10 + "px", this.dom.textArea.style.right = "", this.dom.textArea.style.left = "", this.svg.style.width = "0px") : (this.dom.frame.style.width = this.options.iconSize + 15 + this.dom.textArea.offsetWidth + 10 + "px", this.drawLegendIcons());
                for (var s = "", i = 0; i < e.length; i++) {
                    var o = e[i];
                    1 != this.groups[o].visible || void 0 !== this.linegraphOptions.visibility[o] && 1 != this.linegraphOptions.visibility[o] || (s += this.groups[o].content + "<br />")
                }
                this.dom.textArea.innerHTML = s, this.dom.textArea.style.lineHeight = .75 * this.options.iconSize + this.options.iconSpacing + "px"
            }
        }, o.prototype.drawLegendIcons = function () {
            if (this.dom.frame.parentNode) {
                var t = Object.keys(this.groups);
                t.sort(function (t, e) {
                    return t < e ? -1 : 1
                }), s.resetElements(this.svgElements);
                var e = window.getComputedStyle(this.dom.frame).paddingTop, i = Number(e.replace("px", "")), o = i, n = this.options.iconSize, r = .75 * this.options.iconSize, a = i + .5 * r + 3;
                this.svg.style.width = n + 5 + i + "px";
                for (var h = 0; h < t.length; h++) {
                    var d = t[h];
                    1 != this.groups[d].visible || void 0 !== this.linegraphOptions.visibility[d] && 1 != this.linegraphOptions.visibility[d] || (this.groups[d].getLegend(n, r, this.framework, o, a), a += r + this.options.iconSpacing)
                }
            }
        }, t.exports = o
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = "string", o = "boolean", n = "number", s = "array", r = "date", a = "object", h = "dom", d = "moment", l = "any", c = {
            configure: {
                enabled: {boolean: o},
                filter: {boolean: o, function: "function"},
                container: {dom: h},
                __type__: {object: a, boolean: o, function: "function"}
            },
            yAxisOrientation: {string: ["left", "right"]},
            defaultGroup: {string: i},
            sort: {boolean: o},
            sampling: {boolean: o},
            stack: {boolean: o},
            graphHeight: {string: i, number: n},
            shaded: {
                enabled: {boolean: o},
                orientation: {string: ["bottom", "top", "zero", "group"]},
                groupId: {object: a},
                __type__: {boolean: o, object: a}
            },
            style: {string: ["line", "bar", "points"]},
            barChart: {
                width: {number: n},
                minWidth: {number: n},
                sideBySide: {boolean: o},
                align: {string: ["left", "center", "right"]},
                __type__: {object: a}
            },
            interpolation: {
                enabled: {boolean: o},
                parametrization: {string: ["centripetal", "chordal", "uniform"]},
                alpha: {number: n},
                __type__: {object: a, boolean: o}
            },
            drawPoints: {
                enabled: {boolean: o},
                onRender: {function: "function"},
                size: {number: n},
                style: {string: ["square", "circle"]},
                __type__: {object: a, boolean: o, function: "function"}
            },
            dataAxis: {
                showMinorLabels: {boolean: o},
                showMajorLabels: {boolean: o},
                icons: {boolean: o},
                width: {string: i, number: n},
                visible: {boolean: o},
                alignZeros: {boolean: o},
                left: {
                    range: {min: {number: n}, max: {number: n}, __type__: {object: a}},
                    format: {function: "function"},
                    title: {text: {string: i, number: n}, style: {string: i}, __type__: {object: a}},
                    __type__: {object: a}
                },
                right: {
                    range: {min: {number: n}, max: {number: n}, __type__: {object: a}},
                    format: {function: "function"},
                    title: {text: {string: i, number: n}, style: {string: i}, __type__: {object: a}},
                    __type__: {object: a}
                },
                __type__: {object: a}
            },
            legend: {
                enabled: {boolean: o},
                icons: {boolean: o},
                left: {
                    visible: {boolean: o},
                    position: {string: ["top-right", "bottom-right", "top-left", "bottom-left"]},
                    __type__: {object: a}
                },
                right: {
                    visible: {boolean: o},
                    position: {string: ["top-right", "bottom-right", "top-left", "bottom-left"]},
                    __type__: {object: a}
                },
                __type__: {object: a, boolean: o}
            },
            groups: {visibility: {any: l}, __type__: {object: a}},
            autoResize: {boolean: o},
            clickToUse: {boolean: o},
            end: {number: n, date: r, string: i, moment: d},
            format: {
                minorLabels: {
                    millisecond: {string: i, undefined: "undefined"},
                    second: {string: i, undefined: "undefined"},
                    minute: {string: i, undefined: "undefined"},
                    hour: {string: i, undefined: "undefined"},
                    weekday: {string: i, undefined: "undefined"},
                    day: {string: i, undefined: "undefined"},
                    month: {string: i, undefined: "undefined"},
                    year: {string: i, undefined: "undefined"},
                    __type__: {object: a}
                },
                majorLabels: {
                    millisecond: {string: i, undefined: "undefined"},
                    second: {string: i, undefined: "undefined"},
                    minute: {string: i, undefined: "undefined"},
                    hour: {string: i, undefined: "undefined"},
                    weekday: {string: i, undefined: "undefined"},
                    day: {string: i, undefined: "undefined"},
                    month: {string: i, undefined: "undefined"},
                    year: {string: i, undefined: "undefined"},
                    __type__: {object: a}
                },
                __type__: {object: a}
            },
            moment: {function: "function"},
            height: {string: i, number: n},
            hiddenDates: {
                start: {date: r, number: n, string: i, moment: d},
                end: {date: r, number: n, string: i, moment: d},
                repeat: {string: i},
                __type__: {object: a, array: s}
            },
            locale: {string: i},
            locales: {__any__: {any: l}, __type__: {object: a}},
            max: {date: r, number: n, string: i, moment: d},
            maxHeight: {number: n, string: i},
            maxMinorChars: {number: n},
            min: {date: r, number: n, string: i, moment: d},
            minHeight: {number: n, string: i},
            moveable: {boolean: o},
            multiselect: {boolean: o},
            orientation: {string: i},
            showCurrentTime: {boolean: o},
            showMajorLabels: {boolean: o},
            showMinorLabels: {boolean: o},
            start: {date: r, number: n, string: i, moment: d},
            timeAxis: {
                scale: {string: i, undefined: "undefined"},
                step: {number: n, undefined: "undefined"},
                __type__: {object: a}
            },
            width: {string: i, number: n},
            zoomable: {boolean: o},
            zoomKey: {string: ["ctrlKey", "altKey", "metaKey", ""]},
            zoomMax: {number: n},
            zoomMin: {number: n},
            zIndex: {number: n},
            __type__: {object: a}
        }, u = {
            global: {
                sort: !0,
                sampling: !0,
                stack: !1,
                shaded: {enabled: !1, orientation: ["zero", "top", "bottom", "group"]},
                style: ["line", "bar", "points"],
                barChart: {
                    width: [50, 5, 100, 5],
                    minWidth: [50, 5, 100, 5],
                    sideBySide: !1,
                    align: ["left", "center", "right"]
                },
                interpolation: {enabled: !0, parametrization: ["centripetal", "chordal", "uniform"]},
                drawPoints: {enabled: !0, size: [6, 2, 30, 1], style: ["square", "circle"]},
                dataAxis: {
                    showMinorLabels: !0,
                    showMajorLabels: !0,
                    icons: !1,
                    width: [40, 0, 200, 1],
                    visible: !0,
                    alignZeros: !0,
                    left: {title: {text: "", style: ""}},
                    right: {title: {text: "", style: ""}}
                },
                legend: {
                    enabled: !1,
                    icons: !0,
                    left: {visible: !0, position: ["top-right", "bottom-right", "top-left", "bottom-left"]},
                    right: {visible: !0, position: ["top-right", "bottom-right", "top-left", "bottom-left"]}
                },
                autoResize: !0,
                clickToUse: !1,
                end: "",
                format: {
                    minorLabels: {
                        millisecond: "SSS",
                        second: "s",
                        minute: "HH:mm",
                        hour: "HH:mm",
                        weekday: "ddd D",
                        day: "D",
                        month: "MMM",
                        year: "YYYY"
                    },
                    majorLabels: {
                        millisecond: "HH:mm:ss",
                        second: "D MMMM HH:mm",
                        minute: "ddd D MMMM",
                        hour: "ddd D MMMM",
                        weekday: "MMMM YYYY",
                        day: "MMMM YYYY",
                        month: "YYYY",
                        year: ""
                    }
                },
                height: "",
                locale: "",
                max: "",
                maxHeight: "",
                maxMinorChars: [7, 0, 20, 1],
                min: "",
                minHeight: "",
                moveable: !0,
                orientation: ["both", "bottom", "top"],
                showCurrentTime: !1,
                showMajorLabels: !0,
                showMinorLabels: !0,
                start: "",
                width: "100%",
                zoomable: !0,
                zoomKey: ["ctrlKey", "altKey", "metaKey", ""],
                zoomMax: [31536e10, 10, 31536e10, 1],
                zoomMin: [10, 10, 31536e10, 1],
                zIndex: 0
            }
        };
        e.allOptions = c, e.configureOptions = u
    }, function (t, e, i) {
        e.util = i(1), e.DOMutil = i(8), e.DataSet = i(9), e.DataView = i(11), e.Queue = i(10), e.Network = i(63), e.network = {
            Images: i(64),
            dotparser: i(120),
            gephiParser: i(121),
            allOptions: i(116)
        }, e.network.convertDot = function (t) {
            return e.network.dotparser.DOTToGraph(t)
        }, e.network.convertGephi = function (t, i) {
            return e.network.gephiParser.parseGephi(t, i)
        }, e.moment = i(2), e.Hammer = i(22), e.keycharm = i(25)
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e, i) {
            var o = this;
            if (!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");
            this.options = {}, this.defaultOptions = {
                locale: "en",
                locales: Y,
                clickToUse: !1
            }, j.extend(this.options, this.defaultOptions), this.body = {
                container: t,
                nodes: {},
                nodeIndices: [],
                edges: {},
                edgeIndices: [],
                emitter: {
                    on: this.on.bind(this),
                    off: this.off.bind(this),
                    emit: this.emit.bind(this),
                    once: this.once.bind(this)
                },
                eventListeners: {
                    onTap: function () {
                    }, onTouch: function () {
                    }, onDoubleTap: function () {
                    }, onHold: function () {
                    }, onDragStart: function () {
                    }, onDrag: function () {
                    }, onDragEnd: function () {
                    }, onMouseWheel: function () {
                    }, onPinch: function () {
                    }, onMouseMove: function () {
                    }, onRelease: function () {
                    }, onContext: function () {
                    }
                },
                data: {nodes: null, edges: null},
                functions: {
                    createNode: function () {
                    }, createEdge: function () {
                    }, getPointer: function () {
                    }
                },
                modules: {},
                view: {scale: 1, translation: {x: 0, y: 0}}
            }, this.bindEventListeners(), this.images = new r.default(function () {
                return o.body.emitter.emit("_requestRedraw")
            }), this.groups = new h.default, this.canvas = new _.default(this.body), this.selectionHandler = new S.default(this.body, this.canvas), this.interactionHandler = new O.default(this.body, this.canvas, this.selectionHandler), this.view = new x.default(this.body, this.canvas), this.renderer = new y.default(this.body, this.canvas), this.physics = new f.default(this.body), this.layoutEngine = new T.default(this.body), this.clustering = new v.default(this.body), this.manipulation = new M.default(this.body, this.canvas, this.selectionHandler), this.nodesHandler = new l.default(this.body, this.images, this.groups, this.layoutEngine), this.edgesHandler = new u.default(this.body, this.images, this.groups), this.body.modules.kamadaKawai = new A.default(this.body, 150, .05), this.body.modules.clustering = this.clustering, this.canvas._create(), this.setOptions(i), this.setData(e)
        }

        var s = i(64), r = o(s), a = i(65), h = o(a), d = i(66), l = o(d), c = i(86), u = o(c), p = i(95), f = o(p), m = i(104), v = o(m), g = i(107), y = o(g), b = i(108), _ = o(b), w = i(109), x = o(w), k = i(110), O = o(k), D = i(113), S = o(D), C = i(114), T = o(C), E = i(115), M = o(E), P = i(28), I = o(P), N = i(31), R = o(N), L = i(116), z = i(117), A = o(z);
        i(119);
        var B = i(13), j = i(1), F = (i(9), i(11), i(120)), H = i(121), W = i(47), Y = i(122);
        B(n.prototype), n.prototype.setOptions = function (t) {
            var e = this;
            if (void 0 !== t) {
                var i = R.default.validate(t, L.allOptions);
                i === !0 && console.log("%cErrors have been found in the supplied options object.", N.printStyle);
                var o = ["locale", "locales", "clickToUse"];
                if (j.selectiveDeepExtend(o, this.options, t), t = this.layoutEngine.setOptions(t.layout, t), this.canvas.setOptions(t), this.groups.setOptions(t.groups), this.nodesHandler.setOptions(t.nodes), this.edgesHandler.setOptions(t.edges), this.physics.setOptions(t.physics), this.manipulation.setOptions(t.manipulation, t, this.options), this.interactionHandler.setOptions(t.interaction), this.renderer.setOptions(t.interaction), this.selectionHandler.setOptions(t.interaction), void 0 !== t.groups && this.body.emitter.emit("refreshNodes"), "configure"in t && (this.configurator || (this.configurator = new I.default(this, this.body.container, L.configureOptions, this.canvas.pixelRatio)), this.configurator.setOptions(t.configure)), this.configurator && this.configurator.options.enabled === !0) {
                    var n = {
                        nodes: {},
                        edges: {},
                        layout: {},
                        interaction: {},
                        manipulation: {},
                        physics: {},
                        global: {}
                    };
                    j.deepExtend(n.nodes, this.nodesHandler.options), j.deepExtend(n.edges, this.edgesHandler.options), j.deepExtend(n.layout, this.layoutEngine.options), j.deepExtend(n.interaction, this.selectionHandler.options), j.deepExtend(n.interaction, this.renderer.options), j.deepExtend(n.interaction, this.interactionHandler.options), j.deepExtend(n.manipulation, this.manipulation.options), j.deepExtend(n.physics, this.physics.options), j.deepExtend(n.global, this.canvas.options), j.deepExtend(n.global, this.options), this.configurator.setModuleOptions(n)
                }
                void 0 !== t.clickToUse ? t.clickToUse === !0 ? void 0 === this.activator && (this.activator = new W(this.canvas.frame), this.activator.on("change", function () {
                    e.body.emitter.emit("activate")
                })) : (void 0 !== this.activator && (this.activator.destroy(), delete this.activator), this.body.emitter.emit("activate")) : this.body.emitter.emit("activate"), this.canvas.setSize(), this.body.emitter.emit("startSimulation")
            }
        }, n.prototype._updateVisibleIndices = function () {
            var t = this.body.nodes, e = this.body.edges;
            this.body.nodeIndices = [], this.body.edgeIndices = [];
            for (var i in t)t.hasOwnProperty(i) && t[i].options.hidden === !1 && this.body.nodeIndices.push(t[i].id);
            for (var o in e)e.hasOwnProperty(o) && e[o].options.hidden === !1 && this.body.edgeIndices.push(e[o].id)
        }, n.prototype.bindEventListeners = function () {
            var t = this;
            this.body.emitter.on("_dataChanged", function () {
                t._updateVisibleIndices(), t.body.emitter.emit("_requestRedraw"), t.body.emitter.emit("_dataUpdated")
            }), this.body.emitter.on("_dataUpdated", function () {
                t._updateValueRange(t.body.nodes), t._updateValueRange(t.body.edges), t.body.emitter.emit("startSimulation"), t.body.emitter.emit("_requestRedraw")
            })
        }, n.prototype.setData = function (t) {
            if (this.body.emitter.emit("resetPhysics"), this.body.emitter.emit("_resetData"), this.selectionHandler.unselectAll(), t && t.dot && (t.nodes || t.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.');
            if (this.setOptions(t && t.options), t && t.dot) {
                console.log("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);");
                var e = F.DOTToGraph(t.dot);
                return void this.setData(e)
            }
            if (t && t.gephi) {
                console.log("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);");
                var i = H.parseGephi(t.gephi);
                return void this.setData(i)
            }
            this.nodesHandler.setData(t && t.nodes, !0), this.edgesHandler.setData(t && t.edges, !0), this.body.emitter.emit("_dataChanged"), this.body.emitter.emit("_dataLoaded"), this.body.emitter.emit("initPhysics")
        }, n.prototype.destroy = function () {
            this.body.emitter.emit("destroy"), this.body.emitter.off(), this.off(), delete this.groups, delete this.canvas, delete this.selectionHandler, delete this.interactionHandler, delete this.view, delete this.renderer, delete this.physics, delete this.layoutEngine, delete this.clustering, delete this.manipulation, delete this.nodesHandler, delete this.edgesHandler, delete this.configurator, delete this.images;
            for (var t in this.body.nodes)delete this.body.nodes[t];
            for (var e in this.body.edges)delete this.body.edges[e];
            j.recursiveDOMDelete(this.body.container)
        }, n.prototype._updateValueRange = function (t) {
            var e, i = void 0, o = void 0, n = 0;
            for (e in t)if (t.hasOwnProperty(e)) {
                var s = t[e].getValue();
                void 0 !== s && (i = void 0 === i ? s : Math.min(s, i), o = void 0 === o ? s : Math.max(s, o), n += s)
            }
            if (void 0 !== i && void 0 !== o)for (e in t)t.hasOwnProperty(e) && t[e].setValueRange(i, o, n)
        }, n.prototype.isActive = function () {
            return !this.activator || this.activator.active
        }, n.prototype.setSize = function () {
            return this.canvas.setSize.apply(this.canvas, arguments)
        }, n.prototype.canvasToDOM = function () {
            return this.canvas.canvasToDOM.apply(this.canvas, arguments)
        }, n.prototype.DOMtoCanvas = function () {
            return this.canvas.DOMtoCanvas.apply(this.canvas, arguments)
        }, n.prototype.findNode = function () {
            return this.clustering.findNode.apply(this.clustering, arguments)
        }, n.prototype.isCluster = function () {
            return this.clustering.isCluster.apply(this.clustering, arguments)
        }, n.prototype.openCluster = function () {
            return this.clustering.openCluster.apply(this.clustering, arguments)
        }, n.prototype.cluster = function () {
            return this.clustering.cluster.apply(this.clustering, arguments)
        }, n.prototype.getNodesInCluster = function () {
            return this.clustering.getNodesInCluster.apply(this.clustering, arguments)
        }, n.prototype.clusterByConnection = function () {
            return this.clustering.clusterByConnection.apply(this.clustering, arguments)
        }, n.prototype.clusterByHubsize = function () {
            return this.clustering.clusterByHubsize.apply(this.clustering, arguments)
        }, n.prototype.clusterOutliers = function () {
            return this.clustering.clusterOutliers.apply(this.clustering, arguments)
        }, n.prototype.getSeed = function () {
            return this.layoutEngine.getSeed.apply(this.layoutEngine, arguments)
        }, n.prototype.enableEditMode = function () {
            return this.manipulation.enableEditMode.apply(this.manipulation, arguments)
        }, n.prototype.disableEditMode = function () {
            return this.manipulation.disableEditMode.apply(this.manipulation, arguments)
        }, n.prototype.addNodeMode = function () {
            return this.manipulation.addNodeMode.apply(this.manipulation, arguments)
        }, n.prototype.editNode = function () {
            return this.manipulation.editNode.apply(this.manipulation, arguments)
        }, n.prototype.editNodeMode = function () {
            return console.log("Deprecated: Please use editNode instead of editNodeMode."), this.manipulation.editNode.apply(this.manipulation, arguments)
        }, n.prototype.addEdgeMode = function () {
            return this.manipulation.addEdgeMode.apply(this.manipulation, arguments)
        }, n.prototype.editEdgeMode = function () {
            return this.manipulation.editEdgeMode.apply(this.manipulation, arguments)
        }, n.prototype.deleteSelected = function () {
            return this.manipulation.deleteSelected.apply(this.manipulation, arguments)
        }, n.prototype.getPositions = function () {
            return this.nodesHandler.getPositions.apply(this.nodesHandler, arguments)
        }, n.prototype.storePositions = function () {
            return this.nodesHandler.storePositions.apply(this.nodesHandler, arguments)
        }, n.prototype.moveNode = function () {
            return this.nodesHandler.moveNode.apply(this.nodesHandler, arguments)
        }, n.prototype.getBoundingBox = function () {
            return this.nodesHandler.getBoundingBox.apply(this.nodesHandler, arguments)
        }, n.prototype.getConnectedNodes = function (t) {
            return void 0 !== this.body.nodes[t] ? this.nodesHandler.getConnectedNodes.apply(this.nodesHandler, arguments) : this.edgesHandler.getConnectedNodes.apply(this.edgesHandler, arguments)
        }, n.prototype.getConnectedEdges = function () {
            return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler, arguments)
        }, n.prototype.startSimulation = function () {
            return this.physics.startSimulation.apply(this.physics, arguments)
        }, n.prototype.stopSimulation = function () {
            return this.physics.stopSimulation.apply(this.physics, arguments)
        }, n.prototype.stabilize = function () {
            return this.physics.stabilize.apply(this.physics, arguments)
        }, n.prototype.getSelection = function () {
            return this.selectionHandler.getSelection.apply(this.selectionHandler, arguments)
        }, n.prototype.setSelection = function () {
            return this.selectionHandler.setSelection.apply(this.selectionHandler, arguments)
        }, n.prototype.getSelectedNodes = function () {
            return this.selectionHandler.getSelectedNodes.apply(this.selectionHandler, arguments)
        }, n.prototype.getSelectedEdges = function () {
            return this.selectionHandler.getSelectedEdges.apply(this.selectionHandler, arguments)
        }, n.prototype.getNodeAt = function () {
            var t = this.selectionHandler.getNodeAt.apply(this.selectionHandler, arguments);
            return void 0 !== t && void 0 !== t.id ? t.id : t
        }, n.prototype.getEdgeAt = function () {
            var t = this.selectionHandler.getEdgeAt.apply(this.selectionHandler, arguments);
            return void 0 !== t && void 0 !== t.id ? t.id : t
        }, n.prototype.selectNodes = function () {
            return this.selectionHandler.selectNodes.apply(this.selectionHandler, arguments)
        }, n.prototype.selectEdges = function () {
            return this.selectionHandler.selectEdges.apply(this.selectionHandler, arguments)
        }, n.prototype.unselectAll = function () {
            this.selectionHandler.unselectAll.apply(this.selectionHandler, arguments), this.redraw()
        }, n.prototype.redraw = function () {
            return this.renderer.redraw.apply(this.renderer, arguments)
        }, n.prototype.getScale = function () {
            return this.view.getScale.apply(this.view, arguments)
        }, n.prototype.getViewPosition = function () {
            return this.view.getViewPosition.apply(this.view, arguments)
        }, n.prototype.fit = function () {
            return this.view.fit.apply(this.view, arguments)
        }, n.prototype.moveTo = function () {
            return this.view.moveTo.apply(this.view, arguments)
        }, n.prototype.focus = function () {
            return this.view.focus.apply(this.view, arguments)
        }, n.prototype.releaseNode = function () {
            return this.view.releaseNode.apply(this.view, arguments)
        }, n.prototype.getOptionsFromConfigurator = function () {
            var t = {};
            return this.configurator && (t = this.configurator.getOptions.apply(this.configurator)), t
        }, t.exports = n
    }, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), n = function () {
            function t(e) {
                i(this, t), this.images = {}, this.imageBroken = {}, this.callback = e
            }

            return o(t, [{
                key: "_addImageToCache", value: function (t, e) {
                    0 === e.width && (document.body.appendChild(e), e.width = e.offsetWidth, e.height = e.offsetHeight, document.body.removeChild(e)), this.images[t] = e
                }
            }, {
                key: "_tryloadBrokenUrl", value: function (t, e, i) {
                    var o = this;
                    void 0 !== t && void 0 !== e && void 0 !== i && (i.onerror = function () {
                        console.error("Could not load brokenImage:", e), o._addImageToCache(t, new Image)
                    }, i.src = e)
                }
            }, {
                key: "_redrawWithImage", value: function (t) {
                    this.callback && this.callback(t)
                }
            }, {
                key: "load", value: function (t, e, i) {
                    var o = this, n = this.images[t];
                    if (n)return n;
                    var s = new Image;
                    return s.onload = function () {
                        o._addImageToCache(t, s), o._redrawWithImage(s)
                    }, s.onerror = function () {
                        console.error("Could not load image:", t), o._tryloadBrokenUrl(t, e, s)
                    }, s.src = t, s
                }
            }]), t
        }();
        e.default = n
    }, function (t, e, i) {
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), s = i(1), r = function () {
            function t() {
                o(this, t), this.clear(), this.defaultIndex = 0, this.groupsArray = [], this.groupIndex = 0, this.defaultGroups = [{
                    border: "#2B7CE9",
                    background: "#97C2FC",
                    highlight: {border: "#2B7CE9", background: "#D2E5FF"},
                    hover: {border: "#2B7CE9", background: "#D2E5FF"}
                }, {
                    border: "#FFA500",
                    background: "#FFFF00",
                    highlight: {border: "#FFA500", background: "#FFFFA3"},
                    hover: {border: "#FFA500", background: "#FFFFA3"}
                }, {
                    border: "#FA0A10",
                    background: "#FB7E81",
                    highlight: {border: "#FA0A10", background: "#FFAFB1"},
                    hover: {border: "#FA0A10", background: "#FFAFB1"}
                }, {
                    border: "#41A906",
                    background: "#7BE141",
                    highlight: {border: "#41A906", background: "#A1EC76"},
                    hover: {border: "#41A906", background: "#A1EC76"}
                }, {
                    border: "#E129F0",
                    background: "#EB7DF4",
                    highlight: {border: "#E129F0", background: "#F0B3F5"},
                    hover: {border: "#E129F0", background: "#F0B3F5"}
                }, {
                    border: "#7C29F0",
                    background: "#AD85E4",
                    highlight: {border: "#7C29F0", background: "#D3BDF0"},
                    hover: {border: "#7C29F0", background: "#D3BDF0"}
                }, {
                    border: "#C37F00",
                    background: "#FFA807",
                    highlight: {border: "#C37F00", background: "#FFCA66"},
                    hover: {border: "#C37F00", background: "#FFCA66"}
                }, {
                    border: "#4220FB",
                    background: "#6E6EFD",
                    highlight: {border: "#4220FB", background: "#9B9BFD"},
                    hover: {border: "#4220FB", background: "#9B9BFD"}
                }, {
                    border: "#FD5A77",
                    background: "#FFC0CB",
                    highlight: {border: "#FD5A77", background: "#FFD1D9"},
                    hover: {border: "#FD5A77", background: "#FFD1D9"}
                }, {
                    border: "#4AD63A",
                    background: "#C2FABC",
                    highlight: {border: "#4AD63A", background: "#E6FFE3"},
                    hover: {border: "#4AD63A", background: "#E6FFE3"}
                }, {
                    border: "#990000",
                    background: "#EE0000",
                    highlight: {border: "#BB0000", background: "#FF3333"},
                    hover: {border: "#BB0000", background: "#FF3333"}
                }, {
                    border: "#FF6000",
                    background: "#FF6000",
                    highlight: {border: "#FF6000", background: "#FF6000"},
                    hover: {border: "#FF6000", background: "#FF6000"}
                }, {
                    border: "#97C2FC",
                    background: "#2B7CE9",
                    highlight: {border: "#D2E5FF", background: "#2B7CE9"},
                    hover: {border: "#D2E5FF", background: "#2B7CE9"}
                }, {
                    border: "#399605",
                    background: "#255C03",
                    highlight: {border: "#399605", background: "#255C03"},
                    hover: {border: "#399605", background: "#255C03"}
                }, {
                    border: "#B70054",
                    background: "#FF007E",
                    highlight: {border: "#B70054", background: "#FF007E"},
                    hover: {border: "#B70054", background: "#FF007E"}
                }, {
                    border: "#AD85E4",
                    background: "#7C29F0",
                    highlight: {border: "#D3BDF0", background: "#7C29F0"},
                    hover: {border: "#D3BDF0", background: "#7C29F0"}
                }, {
                    border: "#4557FA",
                    background: "#000EA1",
                    highlight: {border: "#6E6EFD", background: "#000EA1"},
                    hover: {border: "#6E6EFD", background: "#000EA1"}
                }, {
                    border: "#FFC0CB",
                    background: "#FD5A77",
                    highlight: {border: "#FFD1D9", background: "#FD5A77"},
                    hover: {border: "#FFD1D9", background: "#FD5A77"}
                }, {
                    border: "#C2FABC",
                    background: "#74D66A",
                    highlight: {border: "#E6FFE3", background: "#74D66A"},
                    hover: {border: "#E6FFE3", background: "#74D66A"}
                }, {
                    border: "#EE0000",
                    background: "#990000",
                    highlight: {border: "#FF3333", background: "#BB0000"},
                    hover: {border: "#FF3333", background: "#BB0000"}
                }], this.options = {}, this.defaultOptions = {useDefaultGroups: !0}, s.extend(this.options, this.defaultOptions)
            }

            return n(t, [{
                key: "setOptions", value: function (t) {
                    var e = ["useDefaultGroups"];
                    if (void 0 !== t)for (var i in t)if (t.hasOwnProperty(i) && e.indexOf(i) === -1) {
                        var o = t[i];
                        this.add(i, o)
                    }
                }
            }, {
                key: "clear", value: function () {
                    this.groups = {}, this.groupsArray = []
                }
            }, {
                key: "get", value: function (t) {
                    var e = this.groups[t];
                    if (void 0 === e)if (this.options.useDefaultGroups === !1 && this.groupsArray.length > 0) {
                        var i = this.groupIndex % this.groupsArray.length;
                        this.groupIndex++, e = {}, e.color = this.groups[this.groupsArray[i]], this.groups[t] = e
                    } else {
                        var o = this.defaultIndex % this.defaultGroups.length;
                        this.defaultIndex++, e = {}, e.color = this.defaultGroups[o], this.groups[t] = e
                    }
                    return e
                }
            }, {
                key: "add", value: function (t, e) {
                    return this.groups[t] = e, this.groupsArray.push(t), e
                }
            }]), t
        }();
        e.default = r
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), r = i(67), a = o(r), h = i(68), d = o(h), l = i(1), c = i(9), u = i(11), p = function () {
            function t(e, i, o, s) {
                var r = this;
                n(this, t), this.body = e, this.images = i, this.groups = o, this.layoutEngine = s, this.body.functions.createNode = this.create.bind(this), this.nodesListeners = {
                    add: function (t, e) {
                        r.add(e.items)
                    }, update: function (t, e) {
                        r.update(e.items, e.data)
                    }, remove: function (t, e) {
                        r.remove(e.items)
                    }
                }, this.options = {}, this.defaultOptions = {
                    borderWidth: 1,
                    borderWidthSelected: 2,
                    brokenImage: void 0,
                    color: {
                        border: "#2B7CE9",
                        background: "#97C2FC",
                        highlight: {border: "#2B7CE9", background: "#D2E5FF"},
                        hover: {border: "#2B7CE9", background: "#D2E5FF"}
                    },
                    fixed: {x: !1, y: !1},
                    font: {
                        color: "#343434",
                        size: 14,
                        face: "arial",
                        background: "none",
                        strokeWidth: 0,
                        strokeColor: "#ffffff",
                        align: "center"
                    },
                    group: void 0,
                    hidden: !1,
                    icon: {face: "FontAwesome", code: void 0, size: 50, color: "#2B7CE9"},
                    image: void 0,
                    label: void 0,
                    labelHighlightBold: !0,
                    level: void 0,
                    mass: 1,
                    physics: !0,
                    scaling: {
                        min: 10,
                        max: 30,
                        label: {enabled: !1, min: 14, max: 30, maxVisible: 30, drawThreshold: 5},
                        customScalingFunction: function (t, e, i, o) {
                            if (e === t)return .5;
                            var n = 1 / (e - t);
                            return Math.max(0, (o - t) * n)
                        }
                    },
                    shadow: {enabled: !1, color: "rgba(0,0,0,0.5)", size: 10, x: 5, y: 5},
                    shape: "ellipse",
                    shapeProperties: {
                        borderDashes: !1,
                        borderRadius: 6,
                        interpolation: !0,
                        useImageSize: !1,
                        useBorderWithImage: !1
                    },
                    size: 25,
                    title: void 0,
                    value: void 0,
                    x: void 0,
                    y: void 0
                }, l.extend(this.options, this.defaultOptions), this.bindEventListeners()
            }

            return s(t, [{
                key: "bindEventListeners", value: function () {
                    var t = this;
                    this.body.emitter.on("refreshNodes", this.refresh.bind(this)), this.body.emitter.on("refresh", this.refresh.bind(this)), this.body.emitter.on("destroy", function () {
                        l.forEach(t.nodesListeners, function (e, i) {
                            t.body.data.nodes && t.body.data.nodes.off(i, e)
                        }), delete t.body.functions.createNode, delete t.nodesListeners.add, delete t.nodesListeners.update, delete t.nodesListeners.remove, delete t.nodesListeners
                    })
                }
            }, {
                key: "setOptions", value: function (t) {
                    if (void 0 !== t) {
                        if (a.default.parseOptions(this.options, t), void 0 !== t.shape)for (var e in this.body.nodes)this.body.nodes.hasOwnProperty(e) && this.body.nodes[e].updateShape();
                        if (void 0 !== t.font) {
                            d.default.parseOptions(this.options.font, t);
                            for (var i in this.body.nodes)this.body.nodes.hasOwnProperty(i) && (this.body.nodes[i].updateLabelModule(), this.body.nodes[i]._reset())
                        }
                        if (void 0 !== t.size)for (var o in this.body.nodes)this.body.nodes.hasOwnProperty(o) && this.body.nodes[o]._reset();
                        void 0 === t.hidden && void 0 === t.physics || this.body.emitter.emit("_dataChanged")
                    }
                }
            }, {
                key: "setData", value: function (t) {
                    var e = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = this.body.data.nodes;
                    if (t instanceof c || t instanceof u)this.body.data.nodes = t; else if (Array.isArray(t))this.body.data.nodes = new c, this.body.data.nodes.add(t); else {
                        if (t)throw new TypeError("Array or DataSet expected");
                        this.body.data.nodes = new c
                    }
                    o && l.forEach(this.nodesListeners, function (t, e) {
                        o.off(e, t)
                    }), this.body.nodes = {}, this.body.data.nodes && !function () {
                        var t = e;
                        l.forEach(e.nodesListeners, function (e, i) {
                            t.body.data.nodes.on(i, e)
                        });
                        var i = e.body.data.nodes.getIds();
                        e.add(i, !0)
                    }(), i === !1 && this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "add", value: function (t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = void 0, o = [], n = 0; n < t.length; n++) {
                        i = t[n];
                        var s = this.body.data.nodes.get(i), r = this.create(s);
                        o.push(r), this.body.nodes[i] = r
                    }
                    this.layoutEngine.positionInitially(o), e === !1 && this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "update", value: function (t, e) {
                    for (var i = this.body.nodes, o = !1, n = 0; n < t.length; n++) {
                        var s = t[n], r = i[s], a = e[n];
                        void 0 !== r ? o = r.setOptions(a) : (o = !0, r = this.create(a), i[s] = r)
                    }
                    o === !0 ? this.body.emitter.emit("_dataChanged") : this.body.emitter.emit("_dataUpdated")
                }
            }, {
                key: "remove", value: function (t) {
                    for (var e = this.body.nodes, i = 0; i < t.length; i++) {
                        var o = t[i];
                        delete e[o]
                    }
                    this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "create", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default;
                    return new e(t, this.body, this.images, this.groups, this.options)
                }
            }, {
                key: "refresh", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = this.body.nodes;
                    for (var i in e) {
                        var o = void 0;
                        e.hasOwnProperty(i) && (o = e[i]);
                        var n = this.body.data.nodes._data[i];
                        void 0 !== o && void 0 !== n && (t === !0 && o.setOptions({
                            x: null,
                            y: null
                        }), o.setOptions({fixed: !1}), o.setOptions(n))
                    }
                }
            }, {
                key: "getPositions", value: function (t) {
                    var e = {};
                    if (void 0 !== t) {
                        if (Array.isArray(t) === !0) {
                            for (var i = 0; i < t.length; i++)if (void 0 !== this.body.nodes[t[i]]) {
                                var o = this.body.nodes[t[i]];
                                e[t[i]] = {x: Math.round(o.x), y: Math.round(o.y)}
                            }
                        } else if (void 0 !== this.body.nodes[t]) {
                            var n = this.body.nodes[t];
                            e[t] = {
                                x: Math.round(n.x), y: Math.round(n.y)
                            }
                        }
                    } else for (var s = 0; s < this.body.nodeIndices.length; s++) {
                        var r = this.body.nodes[this.body.nodeIndices[s]];
                        e[this.body.nodeIndices[s]] = {x: Math.round(r.x), y: Math.round(r.y)}
                    }
                    return e
                }
            }, {
                key: "storePositions", value: function () {
                    var t = [], e = this.body.data.nodes.getDataSet();
                    for (var i in e._data)if (e._data.hasOwnProperty(i)) {
                        var o = this.body.nodes[i];
                        e._data[i].x == Math.round(o.x) && e._data[i].y == Math.round(o.y) || t.push({
                            id: o.id,
                            x: Math.round(o.x),
                            y: Math.round(o.y)
                        })
                    }
                    e.update(t)
                }
            }, {
                key: "getBoundingBox", value: function (t) {
                    if (void 0 !== this.body.nodes[t])return this.body.nodes[t].shape.boundingBox
                }
            }, {
                key: "getConnectedNodes", value: function (t) {
                    var e = [];
                    if (void 0 !== this.body.nodes[t])for (var i = this.body.nodes[t], o = {}, n = 0; n < i.edges.length; n++) {
                        var s = i.edges[n];
                        s.toId == i.id ? void 0 === o[s.fromId] && (e.push(s.fromId), o[s.fromId] = !0) : s.fromId == i.id && void 0 === o[s.toId] && (e.push(s.toId), o[s.toId] = !0)
                    }
                    return e
                }
            }, {
                key: "getConnectedEdges", value: function (t) {
                    var e = [];
                    if (void 0 !== this.body.nodes[t])for (var i = this.body.nodes[t], o = 0; o < i.edges.length; o++)e.push(i.edges[o].id); else console.log("NodeId provided for getConnectedEdges does not exist. Provided: ", t);
                    return e
                }
            }, {
                key: "moveNode", value: function (t, e, i) {
                    var o = this;
                    void 0 !== this.body.nodes[t] ? (this.body.nodes[t].x = Number(e), this.body.nodes[t].y = Number(i), setTimeout(function () {
                        o.body.emitter.emit("startSimulation")
                    }, 0)) : console.log("Node id supplied to moveNode does not exist. Provided: ", t)
                }
            }]), t
        }();
        e.default = p
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), r = i(68), a = o(r), h = i(69), d = o(h), l = i(71), c = o(l), u = i(73), p = o(u), f = i(74), m = o(f), v = i(75), g = o(v), y = i(77), b = o(y), _ = i(78), w = o(_), x = i(79), k = o(x), O = i(80), D = o(O), S = i(81), C = o(S), T = i(82), E = o(T), M = i(83), P = o(M), I = i(84), N = o(I), R = i(85), L = o(R), z = i(31), A = (o(z), i(1)), B = function () {
            function t(e, i, o, s, r) {
                n(this, t), this.options = A.bridgeObject(r), this.globalOptions = r, this.body = i, this.edges = [], this.id = void 0, this.imagelist = o, this.grouplist = s, this.x = void 0, this.y = void 0, this.baseSize = this.options.size, this.baseFontSize = this.options.font.size, this.predefinedPosition = !1, this.selected = !1, this.hover = !1, this.labelModule = new a.default(this.body, this.options, !1), this.setOptions(e)
            }

            return s(t, [{
                key: "attachEdge", value: function (t) {
                    this.edges.indexOf(t) === -1 && this.edges.push(t)
                }
            }, {
                key: "detachEdge", value: function (t) {
                    var e = this.edges.indexOf(t);
                    e != -1 && this.edges.splice(e, 1)
                }
            }, {
                key: "setOptions", value: function (e) {
                    var i = this.options.shape;
                    if (e) {
                        if (void 0 !== e.id && (this.id = e.id), void 0 === this.id)throw"Node must have an id";
                        if (void 0 !== e.x && (null === e.x ? (this.x = void 0, this.predefinedPosition = !1) : (this.x = parseInt(e.x), this.predefinedPosition = !0)), void 0 !== e.y && (null === e.y ? (this.y = void 0, this.predefinedPosition = !1) : (this.y = parseInt(e.y), this.predefinedPosition = !0)), void 0 !== e.size && (this.baseSize = e.size), void 0 !== e.value && (e.value = parseFloat(e.value)), "number" == typeof e.group || "string" == typeof e.group && "" != e.group) {
                            var o = this.grouplist.get(e.group);
                            A.deepExtend(this.options, o), this.options.color = A.parseColor(this.options.color)
                        }
                        if (t.parseOptions(this.options, e, !0, this.globalOptions), void 0 !== this.options.image) {
                            if (!this.imagelist)throw"No imagelist provided";
                            this.imageObj = this.imagelist.load(this.options.image, this.options.brokenImage, this.id)
                        }
                        return this.updateLabelModule(), this.updateShape(i), void 0 !== e.hidden || void 0 !== e.physics
                    }
                }
            }, {
                key: "updateLabelModule", value: function () {
                    void 0 !== this.options.label && null !== this.options.label || (this.options.label = ""), this.labelModule.setOptions(this.options, !0), void 0 !== this.labelModule.baseSize && (this.baseFontSize = this.labelModule.baseSize)
                }
            }, {
                key: "updateShape", value: function (t) {
                    if (t === this.options.shape && this.shape)this.shape.setOptions(this.options, this.imageObj); else switch (this.options.shape) {
                        case"box":
                            this.shape = new d.default(this.options, this.body, this.labelModule);
                            break;
                        case"circle":
                            this.shape = new c.default(this.options, this.body, this.labelModule);
                            break;
                        case"circularImage":
                            this.shape = new p.default(this.options, this.body, this.labelModule, this.imageObj);
                            break;
                        case"database":
                            this.shape = new m.default(this.options, this.body, this.labelModule);
                            break;
                        case"diamond":
                            this.shape = new g.default(this.options, this.body, this.labelModule);
                            break;
                        case"dot":
                            this.shape = new b.default(this.options, this.body, this.labelModule);
                            break;
                        case"ellipse":
                            this.shape = new w.default(this.options, this.body, this.labelModule);
                            break;
                        case"icon":
                            this.shape = new k.default(this.options, this.body, this.labelModule);
                            break;
                        case"image":
                            this.shape = new D.default(this.options, this.body, this.labelModule, this.imageObj);
                            break;
                        case"square":
                            this.shape = new C.default(this.options, this.body, this.labelModule);
                            break;
                        case"star":
                            this.shape = new E.default(this.options, this.body, this.labelModule);
                            break;
                        case"text":
                            this.shape = new P.default(this.options, this.body, this.labelModule);
                            break;
                        case"triangle":
                            this.shape = new N.default(this.options, this.body, this.labelModule);
                            break;
                        case"triangleDown":
                            this.shape = new L.default(this.options, this.body, this.labelModule);
                            break;
                        default:
                            this.shape = new w.default(this.options, this.body, this.labelModule)
                    }
                    this._reset()
                }
            }, {
                key: "select", value: function () {
                    this.selected = !0, this._reset()
                }
            }, {
                key: "unselect", value: function () {
                    this.selected = !1, this._reset()
                }
            }, {
                key: "_reset", value: function () {
                    this.shape.width = void 0, this.shape.height = void 0
                }
            }, {
                key: "getTitle", value: function () {
                    return this.options.title
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this.shape.distanceToBorder(t, e)
                }
            }, {
                key: "isFixed", value: function () {
                    return this.options.fixed.x && this.options.fixed.y
                }
            }, {
                key: "isSelected", value: function () {
                    return this.selected
                }
            }, {
                key: "getValue", value: function () {
                    return this.options.value
                }
            }, {
                key: "setValueRange", value: function (t, e, i) {
                    if (void 0 !== this.options.value) {
                        var o = this.options.scaling.customScalingFunction(t, e, i, this.options.value), n = this.options.scaling.max - this.options.scaling.min;
                        if (this.options.scaling.label.enabled === !0) {
                            var s = this.options.scaling.label.max - this.options.scaling.label.min;
                            this.options.font.size = this.options.scaling.label.min + o * s
                        }
                        this.options.size = this.options.scaling.min + o * n
                    } else this.options.size = this.baseSize, this.options.font.size = this.baseFontSize;
                    this.updateLabelModule()
                }
            }, {
                key: "draw", value: function (t) {
                    this.shape.draw(t, this.x, this.y, this.selected, this.hover)
                }
            }, {
                key: "updateBoundingBox", value: function (t) {
                    this.shape.updateBoundingBox(this.x, this.y, t)
                }
            }, {
                key: "resize", value: function (t) {
                    this.shape.resize(t, this.selected)
                }
            }, {
                key: "isOverlappingWith", value: function (t) {
                    return this.shape.left < t.right && this.shape.left + this.shape.width > t.left && this.shape.top < t.bottom && this.shape.top + this.shape.height > t.top
                }
            }, {
                key: "isBoundingBoxOverlappingWith", value: function (t) {
                    return this.shape.boundingBox.left < t.right && this.shape.boundingBox.right > t.left && this.shape.boundingBox.top < t.bottom && this.shape.boundingBox.bottom > t.top
                }
            }], [{
                key: "parseOptions", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, n = ["color", "font", "fixed", "shadow"];
                    if (A.selectiveNotDeepExtend(n, t, e, i), A.mergeOptions(t, e, "shadow", i, o), void 0 !== e.color && null !== e.color) {
                        var s = A.parseColor(e.color);
                        A.fillIfDefined(t.color, s)
                    } else i === !0 && null === e.color && (t.color = A.bridgeObject(o.color));
                    void 0 !== e.fixed && null !== e.fixed && ("boolean" == typeof e.fixed ? (t.fixed.x = e.fixed, t.fixed.y = e.fixed) : (void 0 !== e.fixed.x && "boolean" == typeof e.fixed.x && (t.fixed.x = e.fixed.x), void 0 !== e.fixed.y && "boolean" == typeof e.fixed.y && (t.fixed.y = e.fixed.y))), void 0 !== e.font && null !== e.font ? a.default.parseOptions(t.font, e) : i === !0 && null === e.font && (t.font = A.bridgeObject(o.font)), void 0 !== e.scaling && A.mergeOptions(t.scaling, e.scaling, "label", i, o.scaling)
                }
            }]), t
        }();
        e.default = B
    }, function (t, e, i) {
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function t(t, e) {
                var i = [], o = !0, n = !1, s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                } catch (t) {
                    n = !0, s = t
                } finally {
                    try {
                        !o && a.return && a.return()
                    } finally {
                        if (n)throw s
                    }
                }
                return i
            }

            return function (e, i) {
                if (Array.isArray(e))return e;
                if (Symbol.iterator in Object(e))return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), a = i(1), h = function () {
            function t(e, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                o(this, t), this.body = e, this.pointToSelf = !1, this.baseSize = void 0, this.fontOptions = {}, this.setOptions(i), this.size = {
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                    yLine: 0
                }, this.isEdgeLabel = n
            }

            return r(t, [{
                key: "setOptions", value: function (e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.nodeOptions = e, this.fontOptions = a.deepExtend({}, e.font, !0), void 0 !== e.label && (this.labelDirty = !0), void 0 !== e.font && (t.parseOptions(this.fontOptions, e, i), "string" == typeof e.font ? this.baseSize = this.fontOptions.size : "object" === s(e.font) && void 0 !== e.font.size && (this.baseSize = e.font.size))
                }
            }, {
                key: "draw", value: function (t, e, i, o) {
                    var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "middle";
                    if (void 0 !== this.nodeOptions.label) {
                        var s = this.fontOptions.size * this.body.view.scale;
                        this.nodeOptions.label && s < this.nodeOptions.scaling.label.drawThreshold - 1 || (this.calculateLabelSize(t, o, e, i, n), this._drawBackground(t), this._drawText(t, o, e, i, n))
                    }
                }
            }, {
                key: "_drawBackground", value: function (t) {
                    if (void 0 !== this.fontOptions.background && "none" !== this.fontOptions.background) {
                        t.fillStyle = this.fontOptions.background;
                        var e = 2;
                        if (this.isEdgeLabel)switch (this.fontOptions.align) {
                            case"middle":
                                t.fillRect(.5 * -this.size.width, .5 * -this.size.height, this.size.width, this.size.height);
                                break;
                            case"top":
                                t.fillRect(.5 * -this.size.width, -(this.size.height + e), this.size.width, this.size.height);
                                break;
                            case"bottom":
                                t.fillRect(.5 * -this.size.width, e, this.size.width, this.size.height);
                                break;
                            default:
                                t.fillRect(this.size.left, this.size.top - .5 * e, this.size.width, this.size.height)
                        } else t.fillRect(this.size.left, this.size.top - .5 * e, this.size.width, this.size.height)
                    }
                }
            }, {
                key: "_drawText", value: function (t, e, i, o) {
                    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "middle", r = this.fontOptions.size, a = r * this.body.view.scale;
                    a >= this.nodeOptions.scaling.label.maxVisible && (r = Number(this.nodeOptions.scaling.label.maxVisible) / this.body.view.scale);
                    var h = this.size.yLine, d = this._getColor(a), l = n(d, 2), c = l[0], u = l[1], p = this._setAlignment(t, i, h, s), f = n(p, 2);
                    i = f[0], h = f[1], t.font = (e && this.nodeOptions.labelHighlightBold ? "bold " : "") + r + "px " + this.fontOptions.face, t.fillStyle = c, this.isEdgeLabel || "left" !== this.fontOptions.align ? t.textAlign = "center" : (t.textAlign = this.fontOptions.align, i -= .5 * this.size.width), this.fontOptions.strokeWidth > 0 && (t.lineWidth = this.fontOptions.strokeWidth, t.strokeStyle = u, t.lineJoin = "round");
                    for (var m = 0; m < this.lineCount; m++)this.fontOptions.strokeWidth > 0 && t.strokeText(this.lines[m], i, h), t.fillText(this.lines[m], i, h), h += r
                }
            }, {
                key: "_setAlignment", value: function (t, e, i, o) {
                    if (this.isEdgeLabel && "horizontal" !== this.fontOptions.align && this.pointToSelf === !1) {
                        e = 0, i = 0;
                        var n = 2;
                        "top" === this.fontOptions.align ? (t.textBaseline = "alphabetic", i -= 2 * n) : "bottom" === this.fontOptions.align ? (t.textBaseline = "hanging", i += 2 * n) : t.textBaseline = "middle"
                    } else t.textBaseline = o;
                    return [e, i]
                }
            }, {
                key: "_getColor", value: function (t) {
                    var e = this.fontOptions.color || "#000000", i = this.fontOptions.strokeColor || "#ffffff";
                    if (t <= this.nodeOptions.scaling.label.drawThreshold) {
                        var o = Math.max(0, Math.min(1, 1 - (this.nodeOptions.scaling.label.drawThreshold - t)));
                        e = a.overrideOpacity(e, o), i = a.overrideOpacity(i, o)
                    }
                    return [e, i]
                }
            }, {
                key: "getTextSize", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = {
                        width: this._processLabel(t, e),
                        height: this.fontOptions.size * this.lineCount,
                        lineCount: this.lineCount
                    };
                    return i
                }
            }, {
                key: "calculateLabelSize", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "middle";
                    this.labelDirty === !0 && (this.size.width = this._processLabel(t, e)), this.size.height = this.fontOptions.size * this.lineCount, this.size.left = i - .5 * this.size.width, this.size.top = o - .5 * this.size.height, this.size.yLine = o + .5 * (1 - this.lineCount) * this.fontOptions.size, "hanging" === n && (this.size.top += .5 * this.fontOptions.size, this.size.top += 4, this.size.yLine += 4), this.labelDirty = !1
                }
            }, {
                key: "_processLabel", value: function (t, e) {
                    var i = 0, o = [""], n = 0;
                    if (void 0 !== this.nodeOptions.label) {
                        o = String(this.nodeOptions.label).split("\n"), n = o.length, t.font = (e && this.nodeOptions.labelHighlightBold ? "bold " : "") + this.fontOptions.size + "px " + this.fontOptions.face, i = t.measureText(o[0]).width;
                        for (var s = 1; s < n; s++) {
                            var r = t.measureText(o[s]).width;
                            i = r > i ? r : i
                        }
                    }
                    return this.lines = o, this.lineCount = n, i
                }
            }], [{
                key: "parseOptions", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if ("string" == typeof e.font) {
                        var o = e.font.split(" ");
                        t.size = o[0].replace("px", ""), t.face = o[1], t.color = o[2]
                    } else"object" === s(e.font) && a.fillIfDefined(t, e.font, i);
                    t.size = Number(t.size)
                }
            }]), t
        }();
        e.default = h
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(70), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t, e) {
                    if (void 0 === this.width) {
                        var i = 5, o = this.labelModule.getTextSize(t, e);
                        this.width = o.width + 2 * i, this.height = o.height + 2 * i, this.radius = .5 * this.width
                    }
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this.resize(t, o), this.left = e - this.width / 2, this.top = i - this.height / 2;
                    var s = this.options.borderWidth, r = this.options.borderWidthSelected || 2 * this.options.borderWidth;
                    t.strokeStyle = o ? this.options.color.highlight.border : n ? this.options.color.hover.border : this.options.color.border, t.lineWidth = o ? r : s, t.lineWidth /= this.body.view.scale, t.lineWidth = Math.min(this.width, t.lineWidth), t.fillStyle = o ? this.options.color.highlight.background : n ? this.options.color.hover.background : this.options.color.background;
                    var a = this.options.shapeProperties.borderRadius;
                    t.roundRect(this.left, this.top, this.width, this.height, a), this.enableShadow(t), t.fill(), this.disableShadow(t), t.save(), s > 0 && (this.enableBorderDashes(t), t.stroke(), this.disableBorderDashes(t)), t.restore(), this.updateBoundingBox(e, i, t, o), this.labelModule.draw(t, e, i, o)
                }
            }, {
                key: "updateBoundingBox", value: function (t, e, i, o) {
                    this.resize(i, o), this.left = t - .5 * this.width, this.top = e - .5 * this.height;
                    var n = this.options.shapeProperties.borderRadius;
                    this.boundingBox.left = this.left - n, this.boundingBox.top = this.top - n, this.boundingBox.bottom = this.top + this.height + n, this.boundingBox.right = this.left + this.width + n
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    this.resize(t);
                    var i = this.options.borderWidth;
                    return Math.min(Math.abs(this.width / 2 / Math.cos(e)), Math.abs(this.height / 2 / Math.sin(e))) + i
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), n = function () {
            function t(e, o, n) {
                i(this, t), this.body = o, this.labelModule = n, this.setOptions(e), this.top = void 0, this.left = void 0, this.height = void 0, this.width = void 0, this.radius = void 0, this.boundingBox = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }
            }

            return o(t, [{
                key: "setOptions", value: function (t) {
                    this.options = t
                }
            }, {
                key: "_distanceToBorder", value: function (t, e) {
                    var i = this.options.borderWidth;
                    return this.resize(t), Math.min(Math.abs(this.width / 2 / Math.cos(e)), Math.abs(this.height / 2 / Math.sin(e))) + i
                }
            }, {
                key: "enableShadow", value: function (t) {
                    this.options.shadow.enabled === !0 && (t.shadowColor = this.options.shadow.color, t.shadowBlur = this.options.shadow.size, t.shadowOffsetX = this.options.shadow.x, t.shadowOffsetY = this.options.shadow.y)
                }
            }, {
                key: "disableShadow", value: function (t) {
                    this.options.shadow.enabled === !0 && (t.shadowColor = "rgba(0,0,0,0)", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0)
                }
            }, {
                key: "enableBorderDashes", value: function (t) {
                    if (this.options.shapeProperties.borderDashes !== !1)if (void 0 !== t.setLineDash) {
                        var e = this.options.shapeProperties.borderDashes;
                        e === !0 && (e = [5, 15]), t.setLineDash(e)
                    } else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."), this.options.shapeProperties.borderDashes = !1
                }
            }, {
                key: "disableBorderDashes", value: function (t) {
                    this.options.shapeProperties.borderDashes !== !1 && (void 0 !== t.setLineDash ? t.setLineDash([0]) : (console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."), this.options.shapeProperties.borderDashes = !1))
                }
            }]), t
        }();
        e.default = n
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(72), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t, e) {
                    if (void 0 === this.width) {
                        var i = 5, o = this.labelModule.getTextSize(t, e), n = Math.max(o.width, o.height) + 2 * i;
                        this.options.size = n / 2, this.width = n, this.height = n, this.radius = .5 * this.width
                    }
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this.resize(t, o), this.left = e - this.width / 2, this.top = i - this.height / 2, this._drawRawCircle(t, e, i, o, n, this.options.size), this.boundingBox.top = i - this.options.size, this.boundingBox.left = e - this.options.size, this.boundingBox.right = e + this.options.size, this.boundingBox.bottom = i + this.options.size, this.updateBoundingBox(e, i), this.labelModule.draw(t, e, i, o)
                }
            }, {
                key: "updateBoundingBox", value: function (t, e) {
                    this.boundingBox.top = e - this.options.size, this.boundingBox.left = t - this.options.size, this.boundingBox.right = t + this.options.size, this.boundingBox.bottom = e + this.options.size
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this.resize(t), .5 * this.width
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(70), d = o(h), l = function (t) {
            function e(t, i, o) {
                n(this, e);
                var r = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o));
                return r.labelOffset = 0, r.imageLoaded = !1, r
            }

            return r(e, t), a(e, [{
                key: "setOptions", value: function (t, e) {
                    this.options = t, e && (this.imageObj = e)
                }
            }, {
                key: "_resizeImage", value: function () {
                    var t = !1;
                    if (this.imageObj.width && this.imageObj.height ? this.imageLoaded === !1 && (this.imageLoaded = !0, t = !0) : this.imageLoaded = !1, !this.width || !this.height || t === !0) {
                        var e, i, o;
                        this.imageObj.width && this.imageObj.height && (e = 0, i = 0), this.options.shapeProperties.useImageSize === !1 ? this.imageObj.width > this.imageObj.height ? (o = this.imageObj.width / this.imageObj.height, e = 2 * this.options.size * o || this.imageObj.width, i = 2 * this.options.size || this.imageObj.height) : (o = this.imageObj.width && this.imageObj.height ? this.imageObj.height / this.imageObj.width : 1, e = 2 * this.options.size, i = 2 * this.options.size * o) : (e = this.imageObj.width, i = this.imageObj.height), this.width = e, this.height = i, this.radius = .5 * this.width
                    }
                }
            }, {
                key: "_drawRawCircle", value: function (t, e, i, o, n, s) {
                    var r = this.options.borderWidth, a = this.options.borderWidthSelected || 2 * this.options.borderWidth, h = (o ? a : r) / this.body.view.scale;
                    t.lineWidth = Math.min(this.width, h), t.strokeStyle = o ? this.options.color.highlight.border : n ? this.options.color.hover.border : this.options.color.border, t.fillStyle = o ? this.options.color.highlight.background : n ? this.options.color.hover.background : this.options.color.background, t.circle(e, i, s), this.enableShadow(t), t.fill(), this.disableShadow(t), t.save(), h > 0 && (this.enableBorderDashes(t), t.stroke(), this.disableBorderDashes(t)), t.restore()
                }
            }, {
                key: "_drawImageAtPosition", value: function (t) {
                    if (0 != this.imageObj.width) {
                        t.globalAlpha = 1, this.enableShadow(t);
                        var e = this.imageObj.width / this.width / this.body.view.scale;
                        if (e > 2 && this.options.shapeProperties.interpolation === !0) {
                            var i = this.imageObj.width, o = this.imageObj.height, n = document.createElement("canvas");
                            n.width = i, n.height = i;
                            var s = n.getContext("2d");
                            e *= .5, i *= .5, o *= .5, s.drawImage(this.imageObj, 0, 0, i, o);
                            for (var r = 0, a = 1; e > 2 && a < 4;)s.drawImage(n, r, 0, i, o, r + i, 0, i / 2, o / 2), r += i, e *= .5, i *= .5, o *= .5, a += 1;
                            t.drawImage(n, r, 0, i, o, this.left, this.top, this.width, this.height)
                        } else t.drawImage(this.imageObj, this.left, this.top, this.width, this.height);
                        this.disableShadow(t)
                    }
                }
            }, {
                key: "_drawImageLabel", value: function (t, e, i, o) {
                    var n, s = 0;
                    if (void 0 !== this.height) {
                        s = .5 * this.height;
                        var r = this.labelModule.getTextSize(t);
                        r.lineCount >= 1 && (s += r.height / 2)
                    }
                    n = i + s, this.options.label && (this.labelOffset = s), this.labelModule.draw(t, e, n, o, "hanging")
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(72), d = o(h), l = function (t) {
            function e(t, i, o, r) {
                n(this, e);
                var a = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o));
                return a.imageObj = r, a._swapToImageResizeWhenImageLoaded = !0, a
            }

            return r(e, t), a(e, [{
                key: "resize", value: function () {
                    if (void 0 === this.imageObj.src || void 0 === this.imageObj.width || void 0 === this.imageObj.height) {
                        if (!this.width) {
                            var t = 2 * this.options.size;
                            this.width = t, this.height = t, this._swapToImageResizeWhenImageLoaded = !0, this.radius = .5 * this.width
                        }
                    } else this._swapToImageResizeWhenImageLoaded && (this.width = void 0, this.height = void 0, this._swapToImageResizeWhenImageLoaded = !1), this._resizeImage()
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this.resize(), this.left = e - this.width / 2, this.top = i - this.height / 2;
                    var s = Math.min(.5 * this.height, .5 * this.width);
                    this._drawRawCircle(t, e, i, o, n, s), t.save(), t.clip(), this._drawImageAtPosition(t), t.restore(), this._drawImageLabel(t, e, i, o), this.updateBoundingBox(e, i)
                }
            }, {
                key: "updateBoundingBox", value: function (t, e) {
                    this.boundingBox.top = e - this.options.size, this.boundingBox.left = t - this.options.size, this.boundingBox.right = t + this.options.size, this.boundingBox.bottom = e + this.options.size, this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelOffset)
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this.resize(t), .5 * this.width
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(70), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t, e) {
                    if (void 0 === this.width) {
                        var i = 5, o = this.labelModule.getTextSize(t, e), n = o.width + 2 * i;
                        this.width = n, this.height = n, this.radius = .5 * this.width
                    }
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this.resize(t, o), this.left = e - this.width / 2, this.top = i - this.height / 2;
                    var s = this.options.borderWidth, r = this.options.borderWidthSelected || 2 * this.options.borderWidth, a = (o ? r : s) / this.body.view.scale;
                    t.lineWidth = Math.min(this.width, a), t.strokeStyle = o ? this.options.color.highlight.border : n ? this.options.color.hover.border : this.options.color.border, t.fillStyle = o ? this.options.color.highlight.background : n ? this.options.color.hover.background : this.options.color.background, t.database(e - this.width / 2, i - .5 * this.height, this.width, this.height), this.enableShadow(t), t.fill(), this.disableShadow(t), t.save(), a > 0 && (this.enableBorderDashes(t), t.stroke(), this.disableBorderDashes(t)), t.restore(), this.updateBoundingBox(e, i, t, o), this.labelModule.draw(t, e, i, o)
                }
            }, {
                key: "updateBoundingBox", value: function (t, e, i, o) {
                    this.resize(i, o), this.left = t - .5 * this.width, this.top = e - .5 * this.height, this.boundingBox.left = this.left, this.boundingBox.top = this.top, this.boundingBox.bottom = this.top + this.height, this.boundingBox.right = this.left + this.width
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this._distanceToBorder(t, e)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(76), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t) {
                    this._resizeShape()
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this._drawShape(t, "diamond", 4, e, i, o, n)
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this._distanceToBorder(t, e)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(70), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "_resizeShape", value: function () {
                    if (void 0 === this.width) {
                        var t = 2 * this.options.size;
                        this.width = t, this.height = t, this.radius = .5 * this.width
                    }
                }
            }, {
                key: "_drawShape", value: function (t, e, i, o, n, s, r) {
                    this._resizeShape(), this.left = o - this.width / 2, this.top = n - this.height / 2;
                    var a = this.options.borderWidth, h = this.options.borderWidthSelected || 2 * this.options.borderWidth, d = (s ? h : a) / this.body.view.scale;
                    if (t.lineWidth = Math.min(this.width, d), t.strokeStyle = s ? this.options.color.highlight.border : r ? this.options.color.hover.border : this.options.color.border, t.fillStyle = s ? this.options.color.highlight.background : r ? this.options.color.hover.background : this.options.color.background, t[e](o, n, this.options.size), this.enableShadow(t), t.fill(), this.disableShadow(t), t.save(), d > 0 && (this.enableBorderDashes(t),
                            t.stroke(), this.disableBorderDashes(t)), t.restore(), void 0 !== this.options.label) {
                        var l = n + .5 * this.height + 3;
                        this.labelModule.draw(t, o, l, s, "hanging")
                    }
                    this.updateBoundingBox(o, n)
                }
            }, {
                key: "updateBoundingBox", value: function (t, e) {
                    this.boundingBox.top = e - this.options.size, this.boundingBox.left = t - this.options.size, this.boundingBox.right = t + this.options.size, this.boundingBox.bottom = e + this.options.size, void 0 !== this.options.label && this.labelModule.size.width > 0 && (this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelModule.size.height + 3))
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(76), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t) {
                    this._resizeShape()
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this._drawShape(t, "circle", 2, e, i, o, n)
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this.resize(t), this.options.size
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(70), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t, e) {
                    if (void 0 === this.width) {
                        var i = this.labelModule.getTextSize(t, e);
                        this.height = 2 * i.height, this.width = i.width + this.height, this.radius = .5 * this.width
                    }
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this.resize(t, o), this.left = e - .5 * this.width, this.top = i - .5 * this.height;
                    var s = this.options.borderWidth, r = this.options.borderWidthSelected || 2 * this.options.borderWidth, a = (o ? r : s) / this.body.view.scale;
                    t.lineWidth = Math.min(this.width, a), t.strokeStyle = o ? this.options.color.highlight.border : n ? this.options.color.hover.border : this.options.color.border, t.fillStyle = o ? this.options.color.highlight.background : n ? this.options.color.hover.background : this.options.color.background, t.ellipse(this.left, this.top, this.width, this.height), this.enableShadow(t), t.fill(), this.disableShadow(t), t.save(), a > 0 && (this.enableBorderDashes(t), t.stroke(), this.disableBorderDashes(t)), t.restore(), this.updateBoundingBox(e, i, t, o), this.labelModule.draw(t, e, i, o)
                }
            }, {
                key: "updateBoundingBox", value: function (t, e, i, o) {
                    this.resize(i, o), this.left = t - .5 * this.width, this.top = e - .5 * this.height, this.boundingBox.left = this.left, this.boundingBox.top = this.top, this.boundingBox.bottom = this.top + this.height, this.boundingBox.right = this.left + this.width
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    this.resize(t);
                    var i = .5 * this.width, o = .5 * this.height, n = Math.sin(e) * i, s = Math.cos(e) * o;
                    return i * o / Math.sqrt(n * n + s * s)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(70), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t) {
                    if (void 0 === this.width) {
                        var e = 5, i = {width: Number(this.options.icon.size), height: Number(this.options.icon.size)};
                        this.width = i.width + 2 * e, this.height = i.height + 2 * e, this.radius = .5 * this.width
                    }
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    if (this.resize(t), this.options.icon.size = this.options.icon.size || 50, this.left = e - .5 * this.width, this.top = i - .5 * this.height, this._icon(t, e, i, o), void 0 !== this.options.label) {
                        var s = 5;
                        this.labelModule.draw(t, e, i + .5 * this.height + s, o)
                    }
                    this.updateBoundingBox(e, i)
                }
            }, {
                key: "updateBoundingBox", value: function (t, e) {
                    if (this.boundingBox.top = e - .5 * this.options.icon.size, this.boundingBox.left = t - .5 * this.options.icon.size, this.boundingBox.right = t + .5 * this.options.icon.size, this.boundingBox.bottom = e + .5 * this.options.icon.size, void 0 !== this.options.label && this.labelModule.size.width > 0) {
                        var i = 5;
                        this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelModule.size.height + i)
                    }
                }
            }, {
                key: "_icon", value: function (t, e, i, o) {
                    var n = Number(this.options.icon.size);
                    void 0 !== this.options.icon.code ? (t.font = (o ? "bold " : "") + n + "px " + this.options.icon.face, t.fillStyle = this.options.icon.color || "black", t.textAlign = "center", t.textBaseline = "middle", this.enableShadow(t), t.fillText(this.options.icon.code, e, i), this.disableShadow(t)) : console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.")
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this._distanceToBorder(t, e)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(72), d = o(h), l = function (t) {
            function e(t, i, o, r) {
                n(this, e);
                var a = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o));
                return a.imageObj = r, a
            }

            return r(e, t), a(e, [{
                key: "resize", value: function () {
                    this._resizeImage()
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    if (this.resize(), this.left = e - this.width / 2, this.top = i - this.height / 2, this.options.shapeProperties.useBorderWithImage === !0) {
                        var s = this.options.borderWidth, r = this.options.borderWidthSelected || 2 * this.options.borderWidth, a = (o ? r : s) / this.body.view.scale;
                        t.lineWidth = Math.min(this.width, a), t.beginPath(), t.strokeStyle = o ? this.options.color.highlight.border : n ? this.options.color.hover.border : this.options.color.border, t.fillStyle = o ? this.options.color.highlight.background : n ? this.options.color.hover.background : this.options.color.background, t.rect(this.left - .5 * t.lineWidth, this.top - .5 * t.lineWidth, this.width + t.lineWidth, this.height + t.lineWidth), t.fill(), t.save(), a > 0 && (this.enableBorderDashes(t), t.stroke(), this.disableBorderDashes(t)), t.restore(), t.closePath()
                    }
                    this._drawImageAtPosition(t), this._drawImageLabel(t, e, i, o || n), this.updateBoundingBox(e, i)
                }
            }, {
                key: "updateBoundingBox", value: function (t, e) {
                    this.resize(), this.left = t - this.width / 2, this.top = e - this.height / 2, this.boundingBox.top = this.top, this.boundingBox.left = this.left, this.boundingBox.right = this.left + this.width, this.boundingBox.bottom = this.top + this.height, void 0 !== this.options.label && this.labelModule.size.width > 0 && (this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left), this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width), this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelOffset))
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this._distanceToBorder(t, e)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(76), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function () {
                    this._resizeShape()
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this._drawShape(t, "square", 2, e, i, o, n)
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this._distanceToBorder(t, e)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(76), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t) {
                    this._resizeShape()
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this._drawShape(t, "star", 4, e, i, o, n)
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this._distanceToBorder(t, e)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(70), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t, e) {
                    if (void 0 === this.width) {
                        var i = 5, o = this.labelModule.getTextSize(t, e);
                        this.width = o.width + 2 * i, this.height = o.height + 2 * i, this.radius = .5 * this.width
                    }
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this.resize(t, o || n), this.left = e - this.width / 2, this.top = i - this.height / 2, this.enableShadow(t), this.labelModule.draw(t, e, i, o || n), this.disableShadow(t), this.updateBoundingBox(e, i, t, o)
                }
            }, {
                key: "updateBoundingBox", value: function (t, e, i, o) {
                    this.resize(i, o), this.left = t - this.width / 2, this.top = e - this.height / 2, this.boundingBox.top = this.top, this.boundingBox.left = this.left, this.boundingBox.right = this.left + this.width, this.boundingBox.bottom = this.top + this.height
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this._distanceToBorder(t, e)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(76), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t) {
                    this._resizeShape()
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this._drawShape(t, "triangle", 3, e, i, o, n)
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this._distanceToBorder(t, e)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(76), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "resize", value: function (t) {
                    this._resizeShape()
                }
            }, {
                key: "draw", value: function (t, e, i, o, n) {
                    this._drawShape(t, "triangleDown", 3, e, i, o, n)
                }
            }, {
                key: "distanceToBorder", value: function (t, e) {
                    return this._distanceToBorder(t, e)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), r = i(87), a = o(r), h = i(68), d = o(h), l = i(1), c = i(9), u = i(11), p = function () {
            function t(e, i, o) {
                var s = this;
                n(this, t), this.body = e, this.images = i, this.groups = o, this.body.functions.createEdge = this.create.bind(this), this.edgesListeners = {
                    add: function (t, e) {
                        s.add(e.items)
                    }, update: function (t, e) {
                        s.update(e.items)
                    }, remove: function (t, e) {
                        s.remove(e.items)
                    }
                }, this.options = {}, this.defaultOptions = {
                    arrows: {
                        to: {enabled: !1, scaleFactor: 1, type: "arrow"},
                        middle: {enabled: !1, scaleFactor: 1, type: "arrow"},
                        from: {enabled: !1, scaleFactor: 1, type: "arrow"}
                    },
                    arrowStrikethrough: !0,
                    color: {color: "#848484", highlight: "#848484", hover: "#848484", inherit: "from", opacity: 1},
                    dashes: !1,
                    font: {
                        color: "#343434",
                        size: 14,
                        face: "arial",
                        background: "none",
                        strokeWidth: 2,
                        strokeColor: "#ffffff",
                        align: "horizontal"
                    },
                    hidden: !1,
                    hoverWidth: 1.5,
                    label: void 0,
                    labelHighlightBold: !0,
                    length: void 0,
                    physics: !0,
                    scaling: {
                        min: 1,
                        max: 15,
                        label: {enabled: !0, min: 14, max: 30, maxVisible: 30, drawThreshold: 5},
                        customScalingFunction: function (t, e, i, o) {
                            if (e === t)return .5;
                            var n = 1 / (e - t);
                            return Math.max(0, (o - t) * n)
                        }
                    },
                    selectionWidth: 1.5,
                    selfReferenceSize: 20,
                    shadow: {enabled: !1, color: "rgba(0,0,0,0.5)", size: 10, x: 5, y: 5},
                    smooth: {enabled: !0, type: "dynamic", forceDirection: "none", roundness: .5},
                    title: void 0,
                    width: 1,
                    value: void 0
                }, l.extend(this.options, this.defaultOptions), this.bindEventListeners()
            }

            return s(t, [{
                key: "bindEventListeners", value: function () {
                    var t = this;
                    this.body.emitter.on("_forceDisableDynamicCurves", function (e) {
                        "dynamic" === e && (e = "continuous");
                        var i = !1;
                        for (var o in t.body.edges)if (t.body.edges.hasOwnProperty(o)) {
                            var n = t.body.edges[o], s = t.body.data.edges._data[o];
                            if (void 0 !== s) {
                                var r = s.smooth;
                                void 0 !== r && r.enabled === !0 && "dynamic" === r.type && (void 0 === e ? n.setOptions({smooth: !1}) : n.setOptions({smooth: {type: e}}), i = !0)
                            }
                        }
                        i === !0 && t.body.emitter.emit("_dataChanged")
                    }), this.body.emitter.on("_dataUpdated", function () {
                        t.reconnectEdges(), t.markAllEdgesAsDirty()
                    }), this.body.emitter.on("refreshEdges", this.refresh.bind(this)), this.body.emitter.on("refresh", this.refresh.bind(this)), this.body.emitter.on("destroy", function () {
                        l.forEach(t.edgesListeners, function (e, i) {
                            t.body.data.edges && t.body.data.edges.off(i, e)
                        }), delete t.body.functions.createEdge, delete t.edgesListeners.add, delete t.edgesListeners.update, delete t.edgesListeners.remove, delete t.edgesListeners
                    })
                }
            }, {
                key: "setOptions", value: function (t) {
                    if (void 0 !== t) {
                        a.default.parseOptions(this.options, t), void 0 !== t.color && this.markAllEdgesAsDirty();
                        var e = !1;
                        if (void 0 !== t.smooth)for (var i in this.body.edges)this.body.edges.hasOwnProperty(i) && (e = this.body.edges[i].updateEdgeType() || e);
                        if (void 0 !== t.font) {
                            d.default.parseOptions(this.options.font, t);
                            for (var o in this.body.edges)this.body.edges.hasOwnProperty(o) && this.body.edges[o].updateLabelModule()
                        }
                        void 0 === t.hidden && void 0 === t.physics && e !== !0 || this.body.emitter.emit("_dataChanged")
                    }
                }
            }, {
                key: "setData", value: function (t) {
                    var e = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = this.body.data.edges;
                    if (t instanceof c || t instanceof u)this.body.data.edges = t; else if (Array.isArray(t))this.body.data.edges = new c, this.body.data.edges.add(t); else {
                        if (t)throw new TypeError("Array or DataSet expected");
                        this.body.data.edges = new c
                    }
                    if (o && l.forEach(this.edgesListeners, function (t, e) {
                            o.off(e, t)
                        }), this.body.edges = {}, this.body.data.edges) {
                        l.forEach(this.edgesListeners, function (t, i) {
                            e.body.data.edges.on(i, t)
                        });
                        var n = this.body.data.edges.getIds();
                        this.add(n, !0)
                    }
                    i === !1 && this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "add", value: function (t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = this.body.edges, o = this.body.data.edges, n = 0; n < t.length; n++) {
                        var s = t[n], r = i[s];
                        r && r.disconnect();
                        var a = o.get(s, {showInternalIds: !0});
                        i[s] = this.create(a)
                    }
                    e === !1 && this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "update", value: function (t) {
                    for (var e = this.body.edges, i = this.body.data.edges, o = !1, n = 0; n < t.length; n++) {
                        var s = t[n], r = i.get(s), a = e[s];
                        void 0 !== a ? (a.disconnect(), o = a.setOptions(r) || o, a.connect()) : (this.body.edges[s] = this.create(r), o = !0)
                    }
                    o === !0 ? this.body.emitter.emit("_dataChanged") : this.body.emitter.emit("_dataUpdated")
                }
            }, {
                key: "remove", value: function (t) {
                    for (var e = this.body.edges, i = 0; i < t.length; i++) {
                        var o = t[i], n = e[o];
                        void 0 !== n && (n.cleanup(), n.disconnect(), delete e[o])
                    }
                    this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "refresh", value: function () {
                    var t = this.body.edges;
                    for (var e in t) {
                        var i = void 0;
                        t.hasOwnProperty(e) && (i = t[e]);
                        var o = this.body.data.edges._data[e];
                        void 0 !== i && void 0 !== o && i.setOptions(o)
                    }
                }
            }, {
                key: "create", value: function (t) {
                    return new a.default(t, this.body, this.options)
                }
            }, {
                key: "markAllEdgesAsDirty", value: function () {
                    for (var t in this.body.edges)this.body.edges[t].edgeType.colorDirty = !0
                }
            }, {
                key: "reconnectEdges", value: function () {
                    var t, e = this.body.nodes, i = this.body.edges;
                    for (t in e)e.hasOwnProperty(t) && (e[t].edges = []);
                    for (t in i)if (i.hasOwnProperty(t)) {
                        var o = i[t];
                        o.from = null, o.to = null, o.connect()
                    }
                }
            }, {
                key: "getConnectedNodes", value: function (t) {
                    var e = [];
                    if (void 0 !== this.body.edges[t]) {
                        var i = this.body.edges[t];
                        i.fromId && e.push(i.fromId), i.toId && e.push(i.toId)
                    }
                    return e
                }
            }]), t
        }();
        e.default = p
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), a = i(68), h = o(a), d = i(88), l = o(d), c = i(92), u = o(c), p = i(93), f = o(p), m = i(94), v = o(m), g = i(1), y = function () {
            function t(e, i, o) {
                if (n(this, t), void 0 === i)throw"No body provided";
                this.options = g.bridgeObject(o), this.globalOptions = o, this.body = i, this.id = void 0, this.fromId = void 0, this.toId = void 0, this.selected = !1, this.hover = !1, this.labelDirty = !0, this.colorDirty = !0, this.baseWidth = this.options.width, this.baseFontSize = this.options.font.size, this.from = void 0, this.to = void 0, this.edgeType = void 0, this.connected = !1, this.labelModule = new h.default(this.body, this.options, !0), this.setOptions(e)
            }

            return r(t, [{
                key: "setOptions", value: function (e) {
                    if (e) {
                        this.colorDirty = !0, t.parseOptions(this.options, e, !0, this.globalOptions), void 0 !== e.id && (this.id = e.id), void 0 !== e.from && (this.fromId = e.from), void 0 !== e.to && (this.toId = e.to), void 0 !== e.title && (this.title = e.title), void 0 !== e.value && (e.value = parseFloat(e.value)), this.updateLabelModule();
                        var i = this.updateEdgeType();
                        return this._setInteractionWidths(), this.connect(), void 0 === e.hidden && void 0 === e.physics || (i = !0), i
                    }
                }
            }, {
                key: "updateLabelModule", value: function () {
                    this.labelModule.setOptions(this.options, !0), void 0 !== this.labelModule.baseSize && (this.baseFontSize = this.labelModule.baseSize)
                }
            }, {
                key: "updateEdgeType", value: function () {
                    var t = !1, e = !0, i = this.options.smooth;
                    return void 0 !== this.edgeType && (this.edgeType instanceof u.default && i.enabled === !0 && "dynamic" === i.type && (e = !1), this.edgeType instanceof l.default && i.enabled === !0 && "cubicBezier" === i.type && (e = !1), this.edgeType instanceof f.default && i.enabled === !0 && "dynamic" !== i.type && "cubicBezier" !== i.type && (e = !1), this.edgeType instanceof v.default && i.enabled === !1 && (e = !1), e === !0 && (t = this.cleanup())), e === !0 ? this.options.smooth.enabled === !0 ? "dynamic" === this.options.smooth.type ? (t = !0, this.edgeType = new u.default(this.options, this.body, this.labelModule)) : "cubicBezier" === this.options.smooth.type ? this.edgeType = new l.default(this.options, this.body, this.labelModule) : this.edgeType = new f.default(this.options, this.body, this.labelModule) : this.edgeType = new v.default(this.options, this.body, this.labelModule) : this.edgeType.setOptions(this.options), t
                }
            }, {
                key: "connect", value: function () {
                    this.disconnect(), this.from = this.body.nodes[this.fromId] || void 0, this.to = this.body.nodes[this.toId] || void 0, this.connected = void 0 !== this.from && void 0 !== this.to, this.connected === !0 ? (this.from.attachEdge(this), this.to.attachEdge(this)) : (this.from && this.from.detachEdge(this), this.to && this.to.detachEdge(this)), this.edgeType.connect()
                }
            }, {
                key: "disconnect", value: function () {
                    this.from && (this.from.detachEdge(this), this.from = void 0), this.to && (this.to.detachEdge(this), this.to = void 0), this.connected = !1
                }
            }, {
                key: "getTitle", value: function () {
                    return this.title
                }
            }, {
                key: "isSelected", value: function () {
                    return this.selected
                }
            }, {
                key: "getValue", value: function () {
                    return this.options.value
                }
            }, {
                key: "setValueRange", value: function (t, e, i) {
                    if (void 0 !== this.options.value) {
                        var o = this.options.scaling.customScalingFunction(t, e, i, this.options.value), n = this.options.scaling.max - this.options.scaling.min;
                        if (this.options.scaling.label.enabled === !0) {
                            var s = this.options.scaling.label.max - this.options.scaling.label.min;
                            this.options.font.size = this.options.scaling.label.min + o * s
                        }
                        this.options.width = this.options.scaling.min + o * n
                    } else this.options.width = this.baseWidth, this.options.font.size = this.baseFontSize;
                    this._setInteractionWidths(), this.updateLabelModule()
                }
            }, {
                key: "_setInteractionWidths", value: function () {
                    "function" == typeof this.options.hoverWidth ? this.edgeType.hoverWidth = this.options.hoverWidth(this.options.width) : this.edgeType.hoverWidth = this.options.hoverWidth + this.options.width, "function" == typeof this.options.selectionWidth ? this.edgeType.selectionWidth = this.options.selectionWidth(this.options.width) : this.edgeType.selectionWidth = this.options.selectionWidth + this.options.width
                }
            }, {
                key: "draw", value: function (t) {
                    var e = this.edgeType.getViaNode(), i = {};
                    this.edgeType.fromPoint = this.edgeType.from, this.edgeType.toPoint = this.edgeType.to, this.options.arrows.from.enabled === !0 && (i.from = this.edgeType.getArrowData(t, "from", e, this.selected, this.hover), this.options.arrowStrikethrough === !1 && (this.edgeType.fromPoint = i.from.core)), this.options.arrows.to.enabled === !0 && (i.to = this.edgeType.getArrowData(t, "to", e, this.selected, this.hover), this.options.arrowStrikethrough === !1 && (this.edgeType.toPoint = i.to.core)), this.options.arrows.middle.enabled === !0 && (i.middle = this.edgeType.getArrowData(t, "middle", e, this.selected, this.hover)), this.edgeType.drawLine(t, this.selected, this.hover, e), this.drawArrows(t, i), this.drawLabel(t, e)
                }
            }, {
                key: "drawArrows", value: function (t, e) {
                    this.options.arrows.from.enabled === !0 && this.edgeType.drawArrowHead(t, this.selected, this.hover, e.from), this.options.arrows.middle.enabled === !0 && this.edgeType.drawArrowHead(t, this.selected, this.hover, e.middle), this.options.arrows.to.enabled === !0 && this.edgeType.drawArrowHead(t, this.selected, this.hover, e.to)
                }
            }, {
                key: "drawLabel", value: function (t, e) {
                    if (void 0 !== this.options.label) {
                        var i = this.from, o = this.to, n = this.from.selected || this.to.selected || this.selected;
                        if (i.id != o.id) {
                            this.labelModule.pointToSelf = !1;
                            var s = this.edgeType.getPoint(.5, e);
                            t.save(), "horizontal" !== this.options.font.align && (this.labelModule.calculateLabelSize(t, n, s.x, s.y), t.translate(s.x, this.labelModule.size.yLine), this._rotateForLabelAlignment(t)), this.labelModule.draw(t, s.x, s.y, n), t.restore()
                        } else {
                            this.labelModule.pointToSelf = !0;
                            var r, a, h = this.options.selfReferenceSize;
                            i.shape.width > i.shape.height ? (r = i.x + .5 * i.shape.width, a = i.y - h) : (r = i.x + h, a = i.y - .5 * i.shape.height), s = this._pointOnCircle(r, a, h, .125), this.labelModule.draw(t, s.x, s.y, n)
                        }
                    }
                }
            }, {
                key: "isOverlappingWith", value: function (t) {
                    if (this.connected) {
                        var e = 10, i = this.from.x, o = this.from.y, n = this.to.x, s = this.to.y, r = t.left, a = t.top, h = this.edgeType.getDistanceToEdge(i, o, n, s, r, a);
                        return h < e
                    }
                    return !1
                }
            }, {
                key: "_rotateForLabelAlignment", value: function (t) {
                    var e = this.from.y - this.to.y, i = this.from.x - this.to.x, o = Math.atan2(e, i);
                    (o < -1 && i < 0 || o > 0 && i < 0) && (o += Math.PI), t.rotate(o)
                }
            }, {
                key: "_pointOnCircle", value: function (t, e, i, o) {
                    var n = 2 * o * Math.PI;
                    return {x: t + i * Math.cos(n), y: e - i * Math.sin(n)}
                }
            }, {
                key: "select", value: function () {
                    this.selected = !0
                }
            }, {
                key: "unselect", value: function () {
                    this.selected = !1
                }
            }, {
                key: "cleanup", value: function () {
                    return this.edgeType.cleanup()
                }
            }], [{
                key: "parseOptions", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, n = ["arrowStrikethrough", "id", "from", "hidden", "hoverWidth", "label", "labelHighlightBold", "length", "line", "opacity", "physics", "scaling", "selectionWidth", "selfReferenceSize", "to", "title", "value", "width"];
                    if (g.selectiveDeepExtend(n, t, e, i), g.mergeOptions(t, e, "smooth", i, o), g.mergeOptions(t, e, "shadow", i, o), void 0 !== e.dashes && null !== e.dashes ? t.dashes = e.dashes : i === !0 && null === e.dashes && (t.dashes = Object.create(o.dashes)), void 0 !== e.scaling && null !== e.scaling ? (void 0 !== e.scaling.min && (t.scaling.min = e.scaling.min), void 0 !== e.scaling.max && (t.scaling.max = e.scaling.max), g.mergeOptions(t.scaling, e.scaling, "label", i, o.scaling)) : i === !0 && null === e.scaling && (t.scaling = Object.create(o.scaling)), void 0 !== e.arrows && null !== e.arrows)if ("string" == typeof e.arrows) {
                        var r = e.arrows.toLowerCase();
                        t.arrows.to.enabled = r.indexOf("to") != -1, t.arrows.middle.enabled = r.indexOf("middle") != -1, t.arrows.from.enabled = r.indexOf("from") != -1
                    } else {
                        if ("object" !== s(e.arrows))throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:" + JSON.stringify(e.arrows));
                        g.mergeOptions(t.arrows, e.arrows, "to", i, o.arrows), g.mergeOptions(t.arrows, e.arrows, "middle", i, o.arrows), g.mergeOptions(t.arrows, e.arrows, "from", i, o.arrows)
                    } else i === !0 && null === e.arrows && (t.arrows = Object.create(o.arrows));
                    if (void 0 !== e.color && null !== e.color)if (t.color = g.deepExtend({}, t.color, !0), g.isString(e.color))t.color.color = e.color, t.color.highlight = e.color, t.color.hover = e.color, t.color.inherit = !1; else {
                        var a = !1;
                        void 0 !== e.color.color && (t.color.color = e.color.color, a = !0), void 0 !== e.color.highlight && (t.color.highlight = e.color.highlight, a = !0), void 0 !== e.color.hover && (t.color.hover = e.color.hover, a = !0), void 0 !== e.color.inherit && (t.color.inherit = e.color.inherit), void 0 !== e.color.opacity && (t.color.opacity = Math.min(1, Math.max(0, e.color.opacity))), void 0 === e.color.inherit && a === !0 && (t.color.inherit = !1)
                    } else i === !0 && null === e.color && (t.color = g.bridgeObject(o.color));
                    void 0 !== e.font && null !== e.font ? h.default.parseOptions(t.font, e) : i === !0 && null === e.font && (t.font = g.bridgeObject(o.font))
                }
            }]), t
        }();
        e.default = y
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                var i = [], o = !0, n = !1, s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                } catch (t) {
                    n = !0, s = t
                } finally {
                    try {
                        !o && a.return && a.return()
                    } finally {
                        if (n)throw s
                    }
                }
                return i
            }

            return function (e, i) {
                if (Array.isArray(e))return e;
                if (Symbol.iterator in Object(e))return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), h = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), d = i(89), l = o(d), c = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), h(e, [{
                key: "_line", value: function (t, e) {
                    var i = e[0], o = e[1];
                    t.beginPath(), t.moveTo(this.fromPoint.x, this.fromPoint.y), void 0 === e || void 0 === i.x ? t.lineTo(this.toPoint.x, this.toPoint.y) : t.bezierCurveTo(i.x, i.y, o.x, o.y, this.toPoint.x, this.toPoint.y), this.enableShadow(t), t.stroke(), this.disableShadow(t)
                }
            }, {
                key: "_getViaCoordinates", value: function () {
                    var t = this.from.x - this.to.x, e = this.from.y - this.to.y, i = void 0, o = void 0, n = void 0, s = void 0, r = this.options.smooth.roundness;
                    return (Math.abs(t) > Math.abs(e) || this.options.smooth.forceDirection === !0 || "horizontal" === this.options.smooth.forceDirection) && "vertical" !== this.options.smooth.forceDirection ? (o = this.from.y, s = this.to.y, i = this.from.x - r * t, n = this.to.x + r * t) : (o = this.from.y - r * e, s = this.to.y + r * e, i = this.from.x, n = this.to.x), [{
                        x: i,
                        y: o
                    }, {x: n, y: s}]
                }
            }, {
                key: "getViaNode", value: function () {
                    return this._getViaCoordinates()
                }
            }, {
                key: "_findBorderPosition", value: function (t, e) {
                    return this._findBorderPositionBezier(t, e)
                }
            }, {
                key: "_getDistanceToEdge", value: function (t, e, i, o, n, s) {
                    var r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : this._getViaCoordinates(), h = a(r, 2), d = h[0], l = h[1];
                    return this._getDistanceToBezierEdge(t, e, i, o, n, s, d, l)
                }
            }, {
                key: "getPoint", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getViaCoordinates(), i = a(e, 2), o = i[0], n = i[1], s = t, r = [];
                    r[0] = Math.pow(1 - s, 3), r[1] = 3 * s * Math.pow(1 - s, 2), r[2] = 3 * Math.pow(s, 2) * (1 - s), r[3] = Math.pow(s, 3);
                    var h = r[0] * this.fromPoint.x + r[1] * o.x + r[2] * n.x + r[3] * this.toPoint.x, d = r[0] * this.fromPoint.y + r[1] * o.y + r[2] * n.y + r[3] * this.toPoint.y;
                    return {x: h, y: d}
                }
            }]), e
        }(l.default);
        e.default = c
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(90), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "_getDistanceToBezierEdge", value: function (t, e, i, o, n, s, r, a) {
                    var h = 1e9, d = void 0, l = void 0, c = void 0, u = void 0, p = void 0, f = t, m = e, v = [0, 0, 0, 0];
                    for (l = 1; l < 10; l++)c = .1 * l, v[0] = Math.pow(1 - c, 3), v[1] = 3 * c * Math.pow(1 - c, 2), v[2] = 3 * Math.pow(c, 2) * (1 - c), v[3] = Math.pow(c, 3), u = v[0] * t + v[1] * r.x + v[2] * a.x + v[3] * i, p = v[0] * e + v[1] * r.y + v[2] * a.y + v[3] * o, l > 0 && (d = this._getDistanceToLine(f, m, u, p, n, s), h = d < h ? d : h), f = u, m = p;
                    return h
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(91), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "_findBorderPositionBezier", value: function (t, e) {
                    var i, o, n, s, r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._getViaCoordinates(), h = 10, d = 0, l = 0, c = 1, u = .2, p = this.to, f = !1;
                    for (t.id === this.from.id && (p = this.from, f = !0); l <= c && d < h;) {
                        var m = .5 * (l + c);
                        if (i = this.getPoint(m, a), o = Math.atan2(p.y - i.y, p.x - i.x), n = p.distanceToBorder(e, o), s = Math.sqrt(Math.pow(i.x - p.x, 2) + Math.pow(i.y - p.y, 2)), r = n - s, Math.abs(r) < u)break;
                        r < 0 ? f === !1 ? l = m : c = m : f === !1 ? c = m : l = m, d++
                    }
                    return i.t = m, i
                }
            }, {
                key: "_getDistanceToBezierEdge", value: function (t, e, i, o, n, s, r) {
                    var a = 1e9, h = void 0, d = void 0, l = void 0, c = void 0, u = void 0, p = t, f = e;
                    for (d = 1; d < 10; d++)l = .1 * d, c = Math.pow(1 - l, 2) * t + 2 * l * (1 - l) * r.x + Math.pow(l, 2) * i, u = Math.pow(1 - l, 2) * e + 2 * l * (1 - l) * r.y + Math.pow(l, 2) * o, d > 0 && (h = this._getDistanceToLine(p, f, c, u, n, s), a = h < a ? h : a), p = c, f = u;
                    return a
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function t(t, e) {
                var i = [], o = !0, n = !1, s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                } catch (t) {
                    n = !0, s = t
                } finally {
                    try {
                        !o && a.return && a.return()
                    } finally {
                        if (n)throw s
                    }
                }
                return i
            }

            return function (e, i) {
                if (Array.isArray(e))return e;
                if (Symbol.iterator in Object(e))return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), r = i(1), a = function () {
            function t(e, i, n) {
                o(this, t), this.body = i, this.labelModule = n, this.options = {}, this.setOptions(e), this.colorDirty = !0, this.color = {}, this.selectionWidth = 2, this.hoverWidth = 1.5, this.fromPoint = this.from, this.toPoint = this.to
            }

            return s(t, [{
                key: "connect", value: function () {
                    this.from = this.body.nodes[this.options.from], this.to = this.body.nodes[this.options.to]
                }
            }, {
                key: "cleanup", value: function () {
                    return !1
                }
            }, {
                key: "setOptions", value: function (t) {
                    this.options = t, this.from = this.body.nodes[this.options.from], this.to = this.body.nodes[this.options.to], this.id = this.options.id
                }
            }, {
                key: "drawLine", value: function (t, e, i, o) {
                    t.strokeStyle = this.getColor(t, e, i), t.lineWidth = this.getLineWidth(e, i), this.options.dashes !== !1 ? this._drawDashedLine(t, o) : this._drawLine(t, o)
                }
            }, {
                key: "_drawLine", value: function (t, e, i, o) {
                    if (this.from != this.to)this._line(t, e, i, o); else {
                        var s = this._getCircleData(t), r = n(s, 3), a = r[0], h = r[1], d = r[2];
                        this._circle(t, a, h, d)
                    }
                }
            }, {
                key: "_drawDashedLine", value: function (t, e, i, o) {
                    t.lineCap = "round";
                    var s = [5, 5];
                    if (Array.isArray(this.options.dashes) === !0 && (s = this.options.dashes), void 0 !== t.setLineDash) {
                        if (t.save(), t.setLineDash(s), t.lineDashOffset = 0, this.from != this.to)this._line(t, e); else {
                            var r = this._getCircleData(t), a = n(r, 3), h = a[0], d = a[1], l = a[2];
                            this._circle(t, h, d, l)
                        }
                        t.setLineDash([0]), t.lineDashOffset = 0, t.restore()
                    } else {
                        if (this.from != this.to)t.dashedLine(this.from.x, this.from.y, this.to.x, this.to.y, s); else {
                            var c = this._getCircleData(t), u = n(c, 3), p = u[0], f = u[1], m = u[2];
                            this._circle(t, p, f, m)
                        }
                        this.enableShadow(t), t.stroke(), this.disableShadow(t)
                    }
                }
            }, {
                key: "findBorderPosition", value: function (t, e, i) {
                    return this.from != this.to ? this._findBorderPosition(t, e, i) : this._findBorderPositionCircle(t, e, i)
                }
            }, {
                key: "findBorderPositions", value: function (t) {
                    var e = {}, i = {};
                    if (this.from != this.to)e = this._findBorderPosition(this.from, t), i = this._findBorderPosition(this.to, t); else {
                        var o = this._getCircleData(t), s = n(o, 3), r = s[0], a = s[1];
                        s[2];
                        e = this._findBorderPositionCircle(this.from, t, {
                            x: r,
                            y: a,
                            low: .25,
                            high: .6,
                            direction: -1
                        }), i = this._findBorderPositionCircle(this.from, t, {
                            x: r,
                            y: a,
                            low: .6,
                            high: .8,
                            direction: 1
                        })
                    }
                    return {from: e, to: i}
                }
            }, {
                key: "_getCircleData", value: function (t) {
                    var e = void 0, i = void 0, o = this.from, n = this.options.selfReferenceSize;
                    return void 0 !== t && void 0 === o.shape.width && o.shape.resize(t), o.shape.width > o.shape.height ? (e = o.x + .5 * o.shape.width, i = o.y - n) : (e = o.x + n, i = o.y - .5 * o.shape.height), [e, i, n]
                }
            }, {
                key: "_pointOnCircle", value: function (t, e, i, o) {
                    var n = 2 * o * Math.PI;
                    return {x: t + i * Math.cos(n), y: e - i * Math.sin(n)}
                }
            }, {
                key: "_findBorderPositionCircle", value: function (t, e, i) {
                    for (var o = i.x, n = i.y, s = i.low, r = i.high, a = i.direction, h = 10, d = 0, l = this.options.selfReferenceSize, c = void 0, u = void 0, p = void 0, f = void 0, m = void 0, v = .05, g = .5 * (s + r); s <= r && d < h && (g = .5 * (s + r), c = this._pointOnCircle(o, n, l, g), u = Math.atan2(t.y - c.y, t.x - c.x), p = t.distanceToBorder(e, u), f = Math.sqrt(Math.pow(c.x - t.x, 2) + Math.pow(c.y - t.y, 2)), m = p - f, !(Math.abs(m) < v));)m > 0 ? a > 0 ? s = g : r = g : a > 0 ? r = g : s = g, d++;
                    return c.t = g, c
                }
            }, {
                key: "getLineWidth", value: function (t, e) {
                    return t === !0 ? Math.max(this.selectionWidth, .3 / this.body.view.scale) : e === !0 ? Math.max(this.hoverWidth, .3 / this.body.view.scale) : Math.max(this.options.width, .3 / this.body.view.scale)
                }
            }, {
                key: "getColor", value: function (t, e, i) {
                    var o = this.options.color;
                    if (o.inherit !== !1) {
                        if ("both" === o.inherit && this.from.id !== this.to.id) {
                            var n = t.createLinearGradient(this.from.x, this.from.y, this.to.x, this.to.y), s = void 0, a = void 0;
                            return s = this.from.options.color.highlight.border, a = this.to.options.color.highlight.border, this.from.selected === !1 && this.to.selected === !1 ? (s = r.overrideOpacity(this.from.options.color.border, this.options.color.opacity), a = r.overrideOpacity(this.to.options.color.border, this.options.color.opacity)) : this.from.selected === !0 && this.to.selected === !1 ? a = this.to.options.color.border : this.from.selected === !1 && this.to.selected === !0 && (s = this.from.options.color.border), n.addColorStop(0, s), n.addColorStop(1, a), n
                        }
                        this.colorDirty === !0 && ("to" === o.inherit ? (this.color.highlight = this.to.options.color.highlight.border, this.color.hover = this.to.options.color.hover.border, this.color.color = r.overrideOpacity(this.to.options.color.border, o.opacity)) : (this.color.highlight = this.from.options.color.highlight.border, this.color.hover = this.from.options.color.hover.border, this.color.color = r.overrideOpacity(this.from.options.color.border, o.opacity)))
                    } else this.colorDirty === !0 && (this.color.highlight = o.highlight, this.color.hover = o.hover, this.color.color = r.overrideOpacity(o.color, o.opacity));
                    return this.colorDirty = !1, e === !0 ? this.color.highlight : i === !0 ? this.color.hover : this.color.color
                }
            }, {
                key: "_circle", value: function (t, e, i, o) {
                    this.enableShadow(t), t.beginPath(), t.arc(e, i, o, 0, 2 * Math.PI, !1), t.stroke(), this.disableShadow(t)
                }
            }, {
                key: "getDistanceToEdge", value: function (t, e, i, o, s, r, a) {
                    var h = 0;
                    if (this.from != this.to)h = this._getDistanceToEdge(t, e, i, o, s, r, a); else {
                        var d = this._getCircleData(), l = n(d, 3), c = l[0], u = l[1], p = l[2], f = c - s, m = u - r;
                        h = Math.abs(Math.sqrt(f * f + m * m) - p)
                    }
                    return this.labelModule.size.left < s && this.labelModule.size.left + this.labelModule.size.width > s && this.labelModule.size.top < r && this.labelModule.size.top + this.labelModule.size.height > r ? 0 : h
                }
            }, {
                key: "_getDistanceToLine", value: function (t, e, i, o, n, s) {
                    var r = i - t, a = o - e, h = r * r + a * a, d = ((n - t) * r + (s - e) * a) / h;
                    d > 1 ? d = 1 : d < 0 && (d = 0);
                    var l = t + d * r, c = e + d * a, u = l - n, p = c - s;
                    return Math.sqrt(u * u + p * p)
                }
            }, {
                key: "getArrowData", value: function (t, e, i, o, s) {
                    var r = void 0, a = void 0, h = void 0, d = void 0, l = void 0, c = void 0, u = void 0, p = this.getLineWidth(o, s);
                    if ("from" === e ? (h = this.from, d = this.to, l = .1, c = this.options.arrows.from.scaleFactor, u = this.options.arrows.from.type) : "to" === e ? (h = this.to, d = this.from, l = -.1, c = this.options.arrows.to.scaleFactor, u = this.options.arrows.to.type) : (h = this.to, d = this.from, c = this.options.arrows.middle.scaleFactor, u = this.options.arrows.middle.type), h != d)if ("middle" !== e)if (this.options.smooth.enabled === !0) {
                        a = this.findBorderPosition(h, t, {via: i});
                        var f = this.getPoint(Math.max(0, Math.min(1, a.t + l)), i);
                        r = Math.atan2(a.y - f.y, a.x - f.x)
                    } else r = Math.atan2(h.y - d.y, h.x - d.x), a = this.findBorderPosition(h, t); else r = Math.atan2(h.y - d.y, h.x - d.x), a = this.getPoint(.5, i); else {
                        var m = this._getCircleData(t), v = n(m, 3), g = v[0], y = v[1], b = v[2];
                        "from" === e ? (a = this.findBorderPosition(this.from, t, {
                            x: g,
                            y: y,
                            low: .25,
                            high: .6,
                            direction: -1
                        }), r = a.t * -2 * Math.PI + 1.5 * Math.PI + .1 * Math.PI) : "to" === e ? (a = this.findBorderPosition(this.from, t, {
                            x: g,
                            y: y,
                            low: .6,
                            high: 1,
                            direction: 1
                        }), r = a.t * -2 * Math.PI + 1.5 * Math.PI - 1.1 * Math.PI) : (a = this._pointOnCircle(g, y, b, .175), r = 3.9269908169872414)
                    }
                    var _ = 15 * c + 3 * p, w = a.x - .9 * _ * Math.cos(r), x = a.y - .9 * _ * Math.sin(r), k = {
                        x: w,
                        y: x
                    };
                    return {point: a, core: k, angle: r, length: _, type: u}
                }
            }, {
                key: "drawArrowHead", value: function (t, e, i, o) {
                    t.strokeStyle = this.getColor(t, e, i), t.fillStyle = t.strokeStyle, t.lineWidth = this.getLineWidth(e, i), o.type && "circle" === o.type.toLowerCase() ? t.circleEndpoint(o.point.x, o.point.y, o.angle, o.length) : t.arrowEndpoint(o.point.x, o.point.y, o.angle, o.length), this.enableShadow(t), t.fill(), this.disableShadow(t)
                }
            }, {
                key: "enableShadow", value: function (t) {
                    this.options.shadow.enabled === !0 && (t.shadowColor = this.options.shadow.color, t.shadowBlur = this.options.shadow.size, t.shadowOffsetX = this.options.shadow.x, t.shadowOffsetY = this.options.shadow.y)
                }
            }, {
                key: "disableShadow", value: function (t) {
                    this.options.shadow.enabled === !0 && (t.shadowColor = "rgba(0,0,0,0)", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0)
                }
            }]), t
        }();
        e.default = a
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                var i = [], o = !0, n = !1, s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                } catch (t) {
                    n = !0, s = t
                } finally {
                    try {
                        !o && a.return && a.return()
                    } finally {
                        if (n)throw s
                    }
                }
                return i
            }

            return function (e, i) {
                if (Array.isArray(e))return e;
                if (Symbol.iterator in Object(e))return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), h = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), d = i(90), l = o(d), c = function (t) {
            function e(t, i, o) {
                n(this, e);
                var r = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o));
                return r._boundFunction = function () {
                    r.positionBezierNode()
                }, r.body.emitter.on("_repositionBezierNodes", r._boundFunction), r
            }

            return r(e, t), h(e, [{
                key: "setOptions", value: function (t) {
                    var e = !1;
                    this.options.physics !== t.physics && (e = !0), this.options = t, this.id = this.options.id, this.from = this.body.nodes[this.options.from], this.to = this.body.nodes[this.options.to], this.setupSupportNode(), this.connect(), e === !0 && (this.via.setOptions({physics: this.options.physics}), this.positionBezierNode())
                }
            }, {
                key: "connect", value: function () {
                    this.from = this.body.nodes[this.options.from], this.to = this.body.nodes[this.options.to], void 0 === this.from || void 0 === this.to || this.options.physics === !1 ? this.via.setOptions({physics: !1}) : this.from.id === this.to.id ? this.via.setOptions({physics: !1}) : this.via.setOptions({physics: !0})
                }
            }, {
                key: "cleanup", value: function () {
                    return this.body.emitter.off("_repositionBezierNodes", this._boundFunction), void 0 !== this.via && (delete this.body.nodes[this.via.id], this.via = void 0, !0)
                }
            }, {
                key: "setupSupportNode", value: function () {
                    if (void 0 === this.via) {
                        var t = "edgeId:" + this.id, e = this.body.functions.createNode({
                            id: t,
                            shape: "circle",
                            physics: !0,
                            hidden: !0
                        });
                        this.body.nodes[t] = e, this.via = e, this.via.parentEdgeId = this.id, this.positionBezierNode()
                    }
                }
            }, {
                key: "positionBezierNode", value: function () {
                    void 0 !== this.via && void 0 !== this.from && void 0 !== this.to ? (this.via.x = .5 * (this.from.x + this.to.x), this.via.y = .5 * (this.from.y + this.to.y)) : void 0 !== this.via && (this.via.x = 0, this.via.y = 0)
                }
            }, {
                key: "_line", value: function (t, e) {
                    t.beginPath(), t.moveTo(this.fromPoint.x, this.fromPoint.y), void 0 === e.x ? t.lineTo(this.toPoint.x, this.toPoint.y) : t.quadraticCurveTo(e.x, e.y, this.toPoint.x, this.toPoint.y), this.enableShadow(t), t.stroke(), this.disableShadow(t)
                }
            }, {
                key: "getViaNode", value: function () {
                    return this.via
                }
            }, {
                key: "getPoint", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.via, i = t, o = void 0, n = void 0;
                    if (this.from === this.to) {
                        var s = this._getCircleData(this.from), r = a(s, 3), h = r[0], d = r[1], l = r[2], c = 2 * Math.PI * (1 - i);
                        o = h + l * Math.sin(c), n = d + l - l * (1 - Math.cos(c))
                    } else o = Math.pow(1 - i, 2) * this.fromPoint.x + 2 * i * (1 - i) * e.x + Math.pow(i, 2) * this.toPoint.x, n = Math.pow(1 - i, 2) * this.fromPoint.y + 2 * i * (1 - i) * e.y + Math.pow(i, 2) * this.toPoint.y;
                    return {x: o, y: n}
                }
            }, {
                key: "_findBorderPosition", value: function (t, e) {
                    return this._findBorderPositionBezier(t, e, this.via)
                }
            }, {
                key: "_getDistanceToEdge", value: function (t, e, i, o, n, s) {
                    return this._getDistanceToBezierEdge(t, e, i, o, n, s, this.via)
                }
            }]), e
        }(l.default);
        e.default = c
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(90), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "_line", value: function (t, e) {
                    t.beginPath(), t.moveTo(this.fromPoint.x, this.fromPoint.y), void 0 === e.x ? t.lineTo(this.toPoint.x, this.toPoint.y) : t.quadraticCurveTo(e.x, e.y, this.toPoint.x, this.toPoint.y), this.enableShadow(t), t.stroke(), this.disableShadow(t)
                }
            }, {
                key: "getViaNode", value: function () {
                    return this._getViaCoordinates()
                }
            }, {
                key: "_getViaCoordinates", value: function () {
                    var t = void 0, e = void 0, i = this.options.smooth.roundness, o = this.options.smooth.type, n = Math.abs(this.from.x - this.to.x), s = Math.abs(this.from.y - this.to.y);
                    if ("discrete" === o || "diagonalCross" === o)Math.abs(this.from.x - this.to.x) <= Math.abs(this.from.y - this.to.y) ? (this.from.y >= this.to.y ? this.from.x <= this.to.x ? (t = this.from.x + i * s, e = this.from.y - i * s) : this.from.x > this.to.x && (t = this.from.x - i * s, e = this.from.y - i * s) : this.from.y < this.to.y && (this.from.x <= this.to.x ? (t = this.from.x + i * s, e = this.from.y + i * s) : this.from.x > this.to.x && (t = this.from.x - i * s, e = this.from.y + i * s)), "discrete" === o && (t = n < i * s ? this.from.x : t)) : Math.abs(this.from.x - this.to.x) > Math.abs(this.from.y - this.to.y) && (this.from.y >= this.to.y ? this.from.x <= this.to.x ? (t = this.from.x + i * n, e = this.from.y - i * n) : this.from.x > this.to.x && (t = this.from.x - i * n, e = this.from.y - i * n) : this.from.y < this.to.y && (this.from.x <= this.to.x ? (t = this.from.x + i * n, e = this.from.y + i * n) : this.from.x > this.to.x && (t = this.from.x - i * n, e = this.from.y + i * n)), "discrete" === o && (e = s < i * n ? this.from.y : e)); else if ("straightCross" === o)Math.abs(this.from.x - this.to.x) <= Math.abs(this.from.y - this.to.y) ? (t = this.from.x, e = this.from.y < this.to.y ? this.to.y - (1 - i) * s : this.to.y + (1 - i) * s) : Math.abs(this.from.x - this.to.x) > Math.abs(this.from.y - this.to.y) && (t = this.from.x < this.to.x ? this.to.x - (1 - i) * n : this.to.x + (1 - i) * n, e = this.from.y); else if ("horizontal" === o)t = this.from.x < this.to.x ? this.to.x - (1 - i) * n : this.to.x + (1 - i) * n, e = this.from.y; else if ("vertical" === o)t = this.from.x, e = this.from.y < this.to.y ? this.to.y - (1 - i) * s : this.to.y + (1 - i) * s; else if ("curvedCW" === o) {
                        n = this.to.x - this.from.x, s = this.from.y - this.to.y;
                        var r = Math.sqrt(n * n + s * s), a = Math.PI, h = Math.atan2(s, n), d = (h + (.5 * i + .5) * a) % (2 * a);
                        t = this.from.x + (.5 * i + .5) * r * Math.sin(d), e = this.from.y + (.5 * i + .5) * r * Math.cos(d)
                    } else if ("curvedCCW" === o) {
                        n = this.to.x - this.from.x, s = this.from.y - this.to.y;
                        var l = Math.sqrt(n * n + s * s), c = Math.PI, u = Math.atan2(s, n), p = (u + (.5 * -i + .5) * c) % (2 * c);
                        t = this.from.x + (.5 * i + .5) * l * Math.sin(p), e = this.from.y + (.5 * i + .5) * l * Math.cos(p)
                    } else Math.abs(this.from.x - this.to.x) <= Math.abs(this.from.y - this.to.y) ? this.from.y >= this.to.y ? this.from.x <= this.to.x ? (t = this.from.x + i * s, e = this.from.y - i * s, t = this.to.x < t ? this.to.x : t) : this.from.x > this.to.x && (t = this.from.x - i * s, e = this.from.y - i * s, t = this.to.x > t ? this.to.x : t) : this.from.y < this.to.y && (this.from.x <= this.to.x ? (t = this.from.x + i * s, e = this.from.y + i * s, t = this.to.x < t ? this.to.x : t) : this.from.x > this.to.x && (t = this.from.x - i * s, e = this.from.y + i * s, t = this.to.x > t ? this.to.x : t)) : Math.abs(this.from.x - this.to.x) > Math.abs(this.from.y - this.to.y) && (this.from.y >= this.to.y ? this.from.x <= this.to.x ? (t = this.from.x + i * n, e = this.from.y - i * n, e = this.to.y > e ? this.to.y : e) : this.from.x > this.to.x && (t = this.from.x - i * n, e = this.from.y - i * n, e = this.to.y > e ? this.to.y : e) : this.from.y < this.to.y && (this.from.x <= this.to.x ? (t = this.from.x + i * n, e = this.from.y + i * n, e = this.to.y < e ? this.to.y : e) : this.from.x > this.to.x && (t = this.from.x - i * n, e = this.from.y + i * n, e = this.to.y < e ? this.to.y : e)));
                    return {x: t, y: e}
                }
            }, {
                key: "_findBorderPosition", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this._findBorderPositionBezier(t, e, i.via)
                }
            }, {
                key: "_getDistanceToEdge", value: function (t, e, i, o, n, s) {
                    var r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : this._getViaCoordinates();
                    return this._getDistanceToBezierEdge(t, e, i, o, n, s, r)
                }
            }, {
                key: "getPoint", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getViaCoordinates(), i = t, o = Math.pow(1 - i, 2) * this.fromPoint.x + 2 * i * (1 - i) * e.x + Math.pow(i, 2) * this.toPoint.x, n = Math.pow(1 - i, 2) * this.fromPoint.y + 2 * i * (1 - i) * e.y + Math.pow(i, 2) * this.toPoint.y;
                    return {x: o, y: n}
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(91), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "_line", value: function (t) {
                    t.beginPath(), t.moveTo(this.fromPoint.x, this.fromPoint.y), t.lineTo(this.toPoint.x, this.toPoint.y), this.enableShadow(t), t.stroke(), this.disableShadow(t)
                }
            }, {
                key: "getViaNode", value: function () {
                }
            }, {
                key: "getPoint", value: function (t) {
                    return {
                        x: (1 - t) * this.fromPoint.x + t * this.toPoint.x,
                        y: (1 - t) * this.fromPoint.y + t * this.toPoint.y
                    }
                }
            }, {
                key: "_findBorderPosition", value: function (t, e) {
                    var i = this.to, o = this.from;
                    t.id === this.from.id && (i = this.from, o = this.to);
                    var n = Math.atan2(i.y - o.y, i.x - o.x), s = i.x - o.x, r = i.y - o.y, a = Math.sqrt(s * s + r * r), h = t.distanceToBorder(e, n), d = (a - h) / a, l = {};
                    return l.x = (1 - d) * o.x + d * i.x, l.y = (1 - d) * o.y + d * i.y, l
                }
            }, {
                key: "_getDistanceToEdge", value: function (t, e, i, o, n, s) {
                    return this._getDistanceToLine(t, e, i, o, n, s)
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), r = i(96), a = o(r), h = i(97), d = o(h), l = i(98), c = o(l), u = i(99), p = o(u), f = i(100), m = o(f), v = i(101), g = o(v), y = i(102), b = o(y), _ = i(103), w = o(_), x = i(1), k = function () {
            function t(e) {
                n(this, t), this.body = e, this.physicsBody = {
                    physicsNodeIndices: [],
                    physicsEdgeIndices: [],
                    forces: {},
                    velocities: {}
                }, this.physicsEnabled = !0, this.simulationInterval = 1e3 / 60, this.requiresTimeout = !0, this.previousStates = {}, this.referenceState = {}, this.freezeCache = {}, this.renderTimer = void 0, this.adaptiveTimestep = !1, this.adaptiveTimestepEnabled = !1, this.adaptiveCounter = 0, this.adaptiveInterval = 3, this.stabilized = !1, this.startedStabilization = !1, this.stabilizationIterations = 0, this.ready = !1, this.options = {}, this.defaultOptions = {
                    enabled: !0,
                    barnesHut: {
                        theta: .5,
                        gravitationalConstant: -2e3,
                        centralGravity: .3,
                        springLength: 95,
                        springConstant: .04,
                        damping: .09,
                        avoidOverlap: 0
                    },
                    forceAtlas2Based: {
                        theta: .5,
                        gravitationalConstant: -50,
                        centralGravity: .01,
                        springConstant: .08,
                        springLength: 100,
                        damping: .4,
                        avoidOverlap: 0
                    },
                    repulsion: {
                        centralGravity: .2,
                        springLength: 200,
                        springConstant: .05,
                        nodeDistance: 100,
                        damping: .09,
                        avoidOverlap: 0
                    },
                    hierarchicalRepulsion: {
                        centralGravity: 0,
                        springLength: 100,
                        springConstant: .01,
                        nodeDistance: 120,
                        damping: .09
                    },
                    maxVelocity: 50,
                    minVelocity: .75,
                    solver: "barnesHut",
                    stabilization: {enabled: !0, iterations: 1e3, updateInterval: 50, onlyDynamicEdges: !1, fit: !0},
                    timestep: .5,
                    adaptiveTimestep: !0
                }, x.extend(this.options, this.defaultOptions), this.timestep = .5, this.layoutFailed = !1, this.bindEventListeners()
            }

            return s(t, [{
                key: "bindEventListeners", value: function () {
                    var t = this;
                    this.body.emitter.on("initPhysics", function () {
                        t.initPhysics()
                    }), this.body.emitter.on("_layoutFailed", function () {
                        t.layoutFailed = !0
                    }), this.body.emitter.on("resetPhysics", function () {
                        t.stopSimulation(), t.ready = !1
                    }), this.body.emitter.on("disablePhysics", function () {
                        t.physicsEnabled = !1, t.stopSimulation()
                    }), this.body.emitter.on("restorePhysics", function () {
                        t.setOptions(t.options), t.ready === !0 && t.startSimulation()
                    }), this.body.emitter.on("startSimulation", function () {
                        t.ready === !0 && t.startSimulation()
                    }), this.body.emitter.on("stopSimulation", function () {
                        t.stopSimulation()
                    }), this.body.emitter.on("destroy", function () {
                        t.stopSimulation(!1), t.body.emitter.off()
                    }), this.body.emitter.on("_dataChanged", function () {
                        t.updatePhysicsData()
                    })
                }
            }, {
                key: "setOptions", value: function (t) {
                    void 0 !== t && (t === !1 ? (this.options.enabled = !1, this.physicsEnabled = !1, this.stopSimulation()) : (this.physicsEnabled = !0, x.selectiveNotDeepExtend(["stabilization"], this.options, t), x.mergeOptions(this.options, t, "stabilization"), void 0 === t.enabled && (this.options.enabled = !0), this.options.enabled === !1 && (this.physicsEnabled = !1, this.stopSimulation()), this.timestep = this.options.timestep)), this.init()
                }
            }, {
                key: "init", value: function () {
                    var t;
                    "forceAtlas2Based" === this.options.solver ? (t = this.options.forceAtlas2Based, this.nodesSolver = new b.default(this.body, this.physicsBody, t), this.edgesSolver = new p.default(this.body, this.physicsBody, t), this.gravitySolver = new w.default(this.body, this.physicsBody, t)) : "repulsion" === this.options.solver ? (t = this.options.repulsion, this.nodesSolver = new d.default(this.body, this.physicsBody, t), this.edgesSolver = new p.default(this.body, this.physicsBody, t), this.gravitySolver = new g.default(this.body, this.physicsBody, t)) : "hierarchicalRepulsion" === this.options.solver ? (t = this.options.hierarchicalRepulsion, this.nodesSolver = new c.default(this.body, this.physicsBody, t), this.edgesSolver = new m.default(this.body, this.physicsBody, t), this.gravitySolver = new g.default(this.body, this.physicsBody, t)) : (t = this.options.barnesHut, this.nodesSolver = new a.default(this.body, this.physicsBody, t), this.edgesSolver = new p.default(this.body, this.physicsBody, t), this.gravitySolver = new g.default(this.body, this.physicsBody, t)), this.modelOptions = t
                }
            }, {
                key: "initPhysics", value: function () {
                    this.physicsEnabled === !0 && this.options.enabled === !0 ? this.options.stabilization.enabled === !0 ? this.stabilize() : (this.stabilized = !1, this.ready = !0, this.body.emitter.emit("fit", {}, this.layoutFailed), this.startSimulation()) : (this.ready = !0, this.body.emitter.emit("fit"))
                }
            }, {
                key: "startSimulation", value: function () {
                    this.physicsEnabled === !0 && this.options.enabled === !0 ? (this.stabilized = !1, this.adaptiveTimestep = !1, this.body.emitter.emit("_resizeNodes"), void 0 === this.viewFunction && (this.viewFunction = this.simulationStep.bind(this), this.body.emitter.on("initRedraw", this.viewFunction), this.body.emitter.emit("_startRendering"))) : this.body.emitter.emit("_redraw")
                }
            }, {
                key: "stopSimulation", value: function () {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.stabilized = !0, t === !0 && this._emitStabilized(), void 0 !== this.viewFunction && (this.body.emitter.off("initRedraw", this.viewFunction), this.viewFunction = void 0, t === !0 && this.body.emitter.emit("_stopRendering"))
                }
            }, {
                key: "simulationStep", value: function () {
                    var t = Date.now();
                    this.physicsTick();
                    var e = Date.now() - t;
                    (e < .4 * this.simulationInterval || this.runDoubleSpeed === !0) && this.stabilized === !1 && (this.physicsTick(), this.runDoubleSpeed = !0), this.stabilized === !0 && this.stopSimulation()
                }
            }, {
                key: "_emitStabilized", value: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.stabilizationIterations;
                    (this.stabilizationIterations > 1 || this.startedStabilization === !0) && setTimeout(function () {
                        t.body.emitter.emit("stabilized", {iterations: e}), t.startedStabilization = !1, t.stabilizationIterations = 0
                    }, 0)
                }
            }, {
                key: "physicsTick", value: function () {
                    if (this.startedStabilization === !1 && (this.body.emitter.emit("startStabilizing"), this.startedStabilization = !0), this.stabilized === !1) {
                        if (this.adaptiveTimestep === !0 && this.adaptiveTimestepEnabled === !0) {
                            var t = 1.2;
                            this.adaptiveCounter % this.adaptiveInterval === 0 ? (this.timestep = 2 * this.timestep, this.calculateForces(), this.moveNodes(), this.revert(), this.timestep = .5 * this.timestep, this.calculateForces(), this.moveNodes(), this.calculateForces(), this.moveNodes(), this._evaluateStepQuality() === !0 ? this.timestep = t * this.timestep : this.timestep / t < this.options.timestep ? this.timestep = this.options.timestep : (this.adaptiveCounter = -1, this.timestep = Math.max(this.options.timestep, this.timestep / t))) : (this.calculateForces(), this.moveNodes()), this.adaptiveCounter += 1
                        } else this.timestep = this.options.timestep,
                            this.calculateForces(), this.moveNodes();
                        this.stabilized === !0 && this.revert(), this.stabilizationIterations++
                    }
                }
            }, {
                key: "updatePhysicsData", value: function () {
                    this.physicsBody.forces = {}, this.physicsBody.physicsNodeIndices = [], this.physicsBody.physicsEdgeIndices = [];
                    var t = this.body.nodes, e = this.body.edges;
                    for (var i in t)t.hasOwnProperty(i) && t[i].options.physics === !0 && this.physicsBody.physicsNodeIndices.push(t[i].id);
                    for (var o in e)e.hasOwnProperty(o) && e[o].options.physics === !0 && this.physicsBody.physicsEdgeIndices.push(e[o].id);
                    for (var n = 0; n < this.physicsBody.physicsNodeIndices.length; n++) {
                        var s = this.physicsBody.physicsNodeIndices[n];
                        this.physicsBody.forces[s] = {
                            x: 0,
                            y: 0
                        }, void 0 === this.physicsBody.velocities[s] && (this.physicsBody.velocities[s] = {x: 0, y: 0})
                    }
                    for (var r in this.physicsBody.velocities)void 0 === t[r] && delete this.physicsBody.velocities[r]
                }
            }, {
                key: "revert", value: function () {
                    var t = Object.keys(this.previousStates), e = this.body.nodes, i = this.physicsBody.velocities;
                    this.referenceState = {};
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o];
                        void 0 !== e[n] ? e[n].options.physics === !0 && (this.referenceState[n] = {
                            positions: {
                                x: e[n].x,
                                y: e[n].y
                            }
                        }, i[n].x = this.previousStates[n].vx, i[n].y = this.previousStates[n].vy, e[n].x = this.previousStates[n].x, e[n].y = this.previousStates[n].y) : delete this.previousStates[n]
                    }
                }
            }, {
                key: "_evaluateStepQuality", value: function () {
                    var t = void 0, e = void 0, i = void 0, o = this.body.nodes, n = this.referenceState, s = .3;
                    for (var r in this.referenceState)if (this.referenceState.hasOwnProperty(r) && void 0 !== o[r] && (t = o[r].x - n[r].positions.x, e = o[r].y - n[r].positions.y, i = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)), i > s))return !1;
                    return !0
                }
            }, {
                key: "moveNodes", value: function () {
                    for (var t = this.physicsBody.physicsNodeIndices, e = this.options.maxVelocity ? this.options.maxVelocity : 1e9, i = 0, o = 0, n = 5, s = 0; s < t.length; s++) {
                        var r = t[s], a = this._performStep(r, e);
                        i = Math.max(i, a), o += a
                    }
                    this.adaptiveTimestepEnabled = o / t.length < n, this.stabilized = i < this.options.minVelocity
                }
            }, {
                key: "_performStep", value: function (t, e) {
                    var i = this.body.nodes[t], o = this.timestep, n = this.physicsBody.forces, s = this.physicsBody.velocities;
                    if (this.previousStates[t] = {x: i.x, y: i.y, vx: s[t].x, vy: s[t].y}, i.options.fixed.x === !1) {
                        var r = this.modelOptions.damping * s[t].x, a = (n[t].x - r) / i.options.mass;
                        s[t].x += a * o, s[t].x = Math.abs(s[t].x) > e ? s[t].x > 0 ? e : -e : s[t].x, i.x += s[t].x * o
                    } else n[t].x = 0, s[t].x = 0;
                    if (i.options.fixed.y === !1) {
                        var h = this.modelOptions.damping * s[t].y, d = (n[t].y - h) / i.options.mass;
                        s[t].y += d * o, s[t].y = Math.abs(s[t].y) > e ? s[t].y > 0 ? e : -e : s[t].y, i.y += s[t].y * o
                    } else n[t].y = 0, s[t].y = 0;
                    var l = Math.sqrt(Math.pow(s[t].x, 2) + Math.pow(s[t].y, 2));
                    return l
                }
            }, {
                key: "calculateForces", value: function () {
                    this.gravitySolver.solve(), this.nodesSolver.solve(), this.edgesSolver.solve()
                }
            }, {
                key: "_freezeNodes", value: function () {
                    var t = this.body.nodes;
                    for (var e in t)t.hasOwnProperty(e) && t[e].x && t[e].y && (this.freezeCache[e] = {
                        x: t[e].options.fixed.x,
                        y: t[e].options.fixed.y
                    }, t[e].options.fixed.x = !0, t[e].options.fixed.y = !0)
                }
            }, {
                key: "_restoreFrozenNodes", value: function () {
                    var t = this.body.nodes;
                    for (var e in t)t.hasOwnProperty(e) && void 0 !== this.freezeCache[e] && (t[e].options.fixed.x = this.freezeCache[e].x, t[e].options.fixed.y = this.freezeCache[e].y);
                    this.freezeCache = {}
                }
            }, {
                key: "stabilize", value: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.stabilization.iterations;
                    return "number" != typeof e && (console.log("The stabilize method needs a numeric amount of iterations. Switching to default: ", this.options.stabilization.iterations), e = this.options.stabilization.iterations), 0 === this.physicsBody.physicsNodeIndices.length ? void(this.ready = !0) : (this.adaptiveTimestep = this.options.adaptiveTimestep, this.body.emitter.emit("_resizeNodes"), this.stopSimulation(), this.stabilized = !1, this.body.emitter.emit("_blockRedraw"), this.targetIterations = e, this.options.stabilization.onlyDynamicEdges === !0 && this._freezeNodes(), this.stabilizationIterations = 0, void setTimeout(function () {
                        return t._stabilizationBatch()
                    }, 0))
                }
            }, {
                key: "_stabilizationBatch", value: function () {
                    this.startedStabilization === !1 && (this.body.emitter.emit("startStabilizing"), this.startedStabilization = !0);
                    for (var t = 0; this.stabilized === !1 && t < this.options.stabilization.updateInterval && this.stabilizationIterations < this.targetIterations;)this.physicsTick(), t++;
                    this.stabilized === !1 && this.stabilizationIterations < this.targetIterations ? (this.body.emitter.emit("stabilizationProgress", {
                        iterations: this.stabilizationIterations,
                        total: this.targetIterations
                    }), setTimeout(this._stabilizationBatch.bind(this), 0)) : this._finalizeStabilization()
                }
            }, {
                key: "_finalizeStabilization", value: function () {
                    this.body.emitter.emit("_allowRedraw"), this.options.stabilization.fit === !0 && this.body.emitter.emit("fit"), this.options.stabilization.onlyDynamicEdges === !0 && this._restoreFrozenNodes(), this.body.emitter.emit("stabilizationIterationsDone"), this.body.emitter.emit("_requestRedraw"), this.stabilized === !0 ? this._emitStabilized() : this.startSimulation(), this.ready = !0
                }
            }, {
                key: "_drawForces", value: function (t) {
                    for (var e = 0; e < this.physicsBody.physicsNodeIndices.length; e++) {
                        var i = this.body.nodes[this.physicsBody.physicsNodeIndices[e]], o = this.physicsBody.forces[this.physicsBody.physicsNodeIndices[e]], n = 20, s = .03, r = Math.sqrt(Math.pow(o.x, 2) + Math.pow(o.x, 2)), a = Math.min(Math.max(5, r), 15), h = 3 * a, d = x.HSVToHex((180 - 180 * Math.min(1, Math.max(0, s * r))) / 360, 1, 1);
                        t.lineWidth = a, t.strokeStyle = d, t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(i.x + n * o.x, i.y + n * o.y), t.stroke();
                        var l = Math.atan2(o.y, o.x);
                        t.fillStyle = d, t.arrowEndpoint(i.x + n * o.x + Math.cos(l) * h, i.y + n * o.y + Math.sin(l) * h, l, h), t.fill()
                    }
                }
            }]), t
        }();
        e.default = k
    }, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), n = function () {
            function t(e, o, n) {
                i(this, t), this.body = e, this.physicsBody = o, this.barnesHutTree, this.setOptions(n), this.randomSeed = 5
            }

            return o(t, [{
                key: "setOptions", value: function (t) {
                    this.options = t, this.thetaInversed = 1 / this.options.theta, this.overlapAvoidanceFactor = 1 - Math.max(0, Math.min(1, this.options.avoidOverlap))
                }
            }, {
                key: "seededRandom", value: function () {
                    var t = 1e4 * Math.sin(this.randomSeed++);
                    return t - Math.floor(t)
                }
            }, {
                key: "solve", value: function () {
                    if (0 !== this.options.gravitationalConstant && this.physicsBody.physicsNodeIndices.length > 0) {
                        var t = void 0, e = this.body.nodes, i = this.physicsBody.physicsNodeIndices, o = i.length, n = this._formBarnesHutTree(e, i);
                        this.barnesHutTree = n;
                        for (var s = 0; s < o; s++)t = e[i[s]], t.options.mass > 0 && (this._getForceContribution(n.root.children.NW, t), this._getForceContribution(n.root.children.NE, t), this._getForceContribution(n.root.children.SW, t), this._getForceContribution(n.root.children.SE, t))
                    }
                }
            }, {
                key: "_getForceContribution", value: function (t, e) {
                    if (t.childrenCount > 0) {
                        var i = void 0, o = void 0, n = void 0;
                        i = t.centerOfMass.x - e.x, o = t.centerOfMass.y - e.y, n = Math.sqrt(i * i + o * o), n * t.calcSize > this.thetaInversed ? this._calculateForces(n, i, o, e, t) : 4 === t.childrenCount ? (this._getForceContribution(t.children.NW, e), this._getForceContribution(t.children.NE, e), this._getForceContribution(t.children.SW, e), this._getForceContribution(t.children.SE, e)) : t.children.data.id != e.id && this._calculateForces(n, i, o, e, t)
                    }
                }
            }, {
                key: "_calculateForces", value: function (t, e, i, o, n) {
                    0 === t && (t = .1, e = t), this.overlapAvoidanceFactor < 1 && o.shape.radius && (t = Math.max(.1 + this.overlapAvoidanceFactor * o.shape.radius, t - o.shape.radius));
                    var s = this.options.gravitationalConstant * n.mass * o.options.mass / Math.pow(t, 3), r = e * s, a = i * s;
                    this.physicsBody.forces[o.id].x += r, this.physicsBody.forces[o.id].y += a
                }
            }, {
                key: "_formBarnesHutTree", value: function (t, e) {
                    for (var i = void 0, o = e.length, n = t[e[0]].x, s = t[e[0]].y, r = t[e[0]].x, a = t[e[0]].y, h = 1; h < o; h++) {
                        var d = t[e[h]].x, l = t[e[h]].y;
                        t[e[h]].options.mass > 0 && (d < n && (n = d), d > r && (r = d), l < s && (s = l), l > a && (a = l))
                    }
                    var c = Math.abs(r - n) - Math.abs(a - s);
                    c > 0 ? (s -= .5 * c, a += .5 * c) : (n += .5 * c, r -= .5 * c);
                    var u = 1e-5, p = Math.max(u, Math.abs(r - n)), f = .5 * p, m = .5 * (n + r), v = .5 * (s + a), g = {
                        root: {
                            centerOfMass: {
                                x: 0,
                                y: 0
                            },
                            mass: 0,
                            range: {minX: m - f, maxX: m + f, minY: v - f, maxY: v + f},
                            size: p,
                            calcSize: 1 / p,
                            children: {data: null},
                            maxWidth: 0,
                            level: 0,
                            childrenCount: 4
                        }
                    };
                    this._splitBranch(g.root);
                    for (var y = 0; y < o; y++)i = t[e[y]], i.options.mass > 0 && this._placeInTree(g.root, i);
                    return g
                }
            }, {
                key: "_updateBranchMass", value: function (t, e) {
                    var i = t.mass + e.options.mass, o = 1 / i;
                    t.centerOfMass.x = t.centerOfMass.x * t.mass + e.x * e.options.mass, t.centerOfMass.x *= o, t.centerOfMass.y = t.centerOfMass.y * t.mass + e.y * e.options.mass, t.centerOfMass.y *= o, t.mass = i;
                    var n = Math.max(Math.max(e.height, e.radius), e.width);
                    t.maxWidth = t.maxWidth < n ? n : t.maxWidth
                }
            }, {
                key: "_placeInTree", value: function (t, e, i) {
                    1 == i && void 0 !== i || this._updateBranchMass(t, e), t.children.NW.range.maxX > e.x ? t.children.NW.range.maxY > e.y ? this._placeInRegion(t, e, "NW") : this._placeInRegion(t, e, "SW") : t.children.NW.range.maxY > e.y ? this._placeInRegion(t, e, "NE") : this._placeInRegion(t, e, "SE")
                }
            }, {
                key: "_placeInRegion", value: function (t, e, i) {
                    switch (t.children[i].childrenCount) {
                        case 0:
                            t.children[i].children.data = e, t.children[i].childrenCount = 1, this._updateBranchMass(t.children[i], e);
                            break;
                        case 1:
                            t.children[i].children.data.x === e.x && t.children[i].children.data.y === e.y ? (e.x += this.seededRandom(), e.y += this.seededRandom()) : (this._splitBranch(t.children[i]), this._placeInTree(t.children[i], e));
                            break;
                        case 4:
                            this._placeInTree(t.children[i], e)
                    }
                }
            }, {
                key: "_splitBranch", value: function (t) {
                    var e = null;
                    1 === t.childrenCount && (e = t.children.data, t.mass = 0, t.centerOfMass.x = 0, t.centerOfMass.y = 0), t.childrenCount = 4, t.children.data = null, this._insertRegion(t, "NW"), this._insertRegion(t, "NE"), this._insertRegion(t, "SW"), this._insertRegion(t, "SE"), null != e && this._placeInTree(t, e)
                }
            }, {
                key: "_insertRegion", value: function (t, e) {
                    var i = void 0, o = void 0, n = void 0, s = void 0, r = .5 * t.size;
                    switch (e) {
                        case"NW":
                            i = t.range.minX, o = t.range.minX + r, n = t.range.minY, s = t.range.minY + r;
                            break;
                        case"NE":
                            i = t.range.minX + r, o = t.range.maxX, n = t.range.minY, s = t.range.minY + r;
                            break;
                        case"SW":
                            i = t.range.minX, o = t.range.minX + r, n = t.range.minY + r, s = t.range.maxY;
                            break;
                        case"SE":
                            i = t.range.minX + r, o = t.range.maxX, n = t.range.minY + r, s = t.range.maxY
                    }
                    t.children[e] = {
                        centerOfMass: {x: 0, y: 0},
                        mass: 0,
                        range: {minX: i, maxX: o, minY: n, maxY: s},
                        size: .5 * t.size,
                        calcSize: 2 * t.calcSize,
                        children: {data: null},
                        maxWidth: 0,
                        level: t.level + 1,
                        childrenCount: 0
                    }
                }
            }, {
                key: "_debug", value: function (t, e) {
                    void 0 !== this.barnesHutTree && (t.lineWidth = 1, this._drawBranch(this.barnesHutTree.root, t, e))
                }
            }, {
                key: "_drawBranch", value: function (t, e, i) {
                    void 0 === i && (i = "#FF0000"), 4 === t.childrenCount && (this._drawBranch(t.children.NW, e), this._drawBranch(t.children.NE, e), this._drawBranch(t.children.SE, e), this._drawBranch(t.children.SW, e)), e.strokeStyle = i, e.beginPath(), e.moveTo(t.range.minX, t.range.minY), e.lineTo(t.range.maxX, t.range.minY), e.stroke(), e.beginPath(), e.moveTo(t.range.maxX, t.range.minY), e.lineTo(t.range.maxX, t.range.maxY), e.stroke(), e.beginPath(), e.moveTo(t.range.maxX, t.range.maxY), e.lineTo(t.range.minX, t.range.maxY), e.stroke(), e.beginPath(), e.moveTo(t.range.minX, t.range.maxY), e.lineTo(t.range.minX, t.range.minY), e.stroke()
                }
            }]), t
        }();
        e.default = n
    }, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), n = function () {
            function t(e, o, n) {
                i(this, t), this.body = e, this.physicsBody = o, this.setOptions(n)
            }

            return o(t, [{
                key: "setOptions", value: function (t) {
                    this.options = t
                }
            }, {
                key: "solve", value: function () {
                    for (var t, e, i, o, n, s, r, a, h = this.body.nodes, d = this.physicsBody.physicsNodeIndices, l = this.physicsBody.forces, c = this.options.nodeDistance, u = -2 / 3 / c, p = 4 / 3, f = 0; f < d.length - 1; f++) {
                        r = h[d[f]];
                        for (var m = f + 1; m < d.length; m++)a = h[d[m]], t = a.x - r.x, e = a.y - r.y, i = Math.sqrt(t * t + e * e), 0 === i && (i = .1 * Math.random(), t = i), i < 2 * c && (s = i < .5 * c ? 1 : u * i + p, s /= i, o = t * s, n = e * s, l[r.id].x -= o, l[r.id].y -= n, l[a.id].x += o, l[a.id].y += n)
                    }
                }
            }]), t
        }();
        e.default = n
    }, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), n = function () {
            function t(e, o, n) {
                i(this, t), this.body = e, this.physicsBody = o, this.setOptions(n)
            }

            return o(t, [{
                key: "setOptions", value: function (t) {
                    this.options = t
                }
            }, {
                key: "solve", value: function () {
                    var t, e, i, o, n, s, r, a, h, d, l = this.body.nodes, c = this.physicsBody.physicsNodeIndices, u = this.physicsBody.forces, p = this.options.nodeDistance;
                    for (h = 0; h < c.length - 1; h++)for (r = l[c[h]], d = h + 1; d < c.length; d++)if (a = l[c[d]], r.level === a.level) {
                        t = a.x - r.x, e = a.y - r.y, i = Math.sqrt(t * t + e * e);
                        var f = .05;
                        s = i < p ? -Math.pow(f * i, 2) + Math.pow(f * p, 2) : 0, 0 === i ? i = .01 : s /= i, o = t * s, n = e * s, u[r.id].x -= o, u[r.id].y -= n, u[a.id].x += o, u[a.id].y += n
                    }
                }
            }]), t
        }();
        e.default = n
    }, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), n = function () {
            function t(e, o, n) {
                i(this, t), this.body = e, this.physicsBody = o, this.setOptions(n)
            }

            return o(t, [{
                key: "setOptions", value: function (t) {
                    this.options = t
                }
            }, {
                key: "solve", value: function () {
                    for (var t = void 0, e = void 0, i = this.physicsBody.physicsEdgeIndices, o = this.body.edges, n = void 0, s = void 0, r = void 0, a = 0; a < i.length; a++)e = o[i[a]], e.connected === !0 && e.toId !== e.fromId && void 0 !== this.body.nodes[e.toId] && void 0 !== this.body.nodes[e.fromId] && (void 0 !== e.edgeType.via ? (t = void 0 === e.options.length ? this.options.springLength : e.options.length, n = e.to, s = e.edgeType.via, r = e.from, this._calculateSpringForce(n, s, .5 * t), this._calculateSpringForce(s, r, .5 * t)) : (t = void 0 === e.options.length ? 1.5 * this.options.springLength : e.options.length, this._calculateSpringForce(e.from, e.to, t)))
                }
            }, {
                key: "_calculateSpringForce", value: function (t, e, i) {
                    var o = t.x - e.x, n = t.y - e.y, s = Math.max(Math.sqrt(o * o + n * n), .01), r = this.options.springConstant * (i - s) / s, a = o * r, h = n * r;
                    void 0 !== this.physicsBody.forces[t.id] && (this.physicsBody.forces[t.id].x += a, this.physicsBody.forces[t.id].y += h), void 0 !== this.physicsBody.forces[e.id] && (this.physicsBody.forces[e.id].x -= a, this.physicsBody.forces[e.id].y -= h)
                }
            }]), t
        }();
        e.default = n
    }, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), n = function () {
            function t(e, o, n) {
                i(this, t), this.body = e, this.physicsBody = o, this.setOptions(n)
            }

            return o(t, [{
                key: "setOptions", value: function (t) {
                    this.options = t
                }
            }, {
                key: "solve", value: function () {
                    for (var t, e, i, o, n, s, r, a, h = this.body.edges, d = .5, l = this.physicsBody.physicsEdgeIndices, c = this.physicsBody.physicsNodeIndices, u = this.physicsBody.forces, p = 0; p < c.length; p++) {
                        var f = c[p];
                        u[f].springFx = 0, u[f].springFy = 0
                    }
                    for (var m = 0; m < l.length; m++)e = h[l[m]], e.connected === !0 && (t = void 0 === e.options.length ? this.options.springLength : e.options.length, i = e.from.x - e.to.x, o = e.from.y - e.to.y, a = Math.sqrt(i * i + o * o), a = 0 === a ? .01 : a, r = this.options.springConstant * (t - a) / a, n = i * r, s = o * r, e.to.level != e.from.level ? (void 0 !== u[e.toId] && (u[e.toId].springFx -= n, u[e.toId].springFy -= s), void 0 !== u[e.fromId] && (u[e.fromId].springFx += n, u[e.fromId].springFy += s)) : (void 0 !== u[e.toId] && (u[e.toId].x -= d * n, u[e.toId].y -= d * s), void 0 !== u[e.fromId] && (u[e.fromId].x += d * n, u[e.fromId].y += d * s)));
                    for (var v, g, r = 1, y = 0; y < c.length; y++) {
                        var b = c[y];
                        v = Math.min(r, Math.max(-r, u[b].springFx)), g = Math.min(r, Math.max(-r, u[b].springFy)), u[b].x += v, u[b].y += g
                    }
                    for (var _ = 0, w = 0, x = 0; x < c.length; x++) {
                        var k = c[x];
                        _ += u[k].x, w += u[k].y
                    }
                    for (var O = _ / c.length, D = w / c.length, S = 0; S < c.length; S++) {
                        var C = c[S];
                        u[C].x -= O, u[C].y -= D
                    }
                }
            }]), t
        }();
        e.default = n
    }, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), n = function () {
            function t(e, o, n) {
                i(this, t), this.body = e, this.physicsBody = o, this.setOptions(n)
            }

            return o(t, [{
                key: "setOptions", value: function (t) {
                    this.options = t
                }
            }, {
                key: "solve", value: function () {
                    for (var t = void 0, e = void 0, i = void 0, o = void 0, n = this.body.nodes, s = this.physicsBody.physicsNodeIndices, r = this.physicsBody.forces, a = 0; a < s.length; a++) {
                        var h = s[a];
                        o = n[h], t = -o.x, e = -o.y, i = Math.sqrt(t * t + e * e), this._calculateForces(i, t, e, r, o)
                    }
                }
            }, {
                key: "_calculateForces", value: function (t, e, i, o, n) {
                    var s = 0 === t ? 0 : this.options.centralGravity / t;
                    o[n.id].x = e * s, o[n.id].y = i * s
                }
            }]), t
        }();
        e.default = n
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(96), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "_calculateForces", value: function (t, e, i, o, n) {
                    0 === t && (t = .1 * Math.random(), e = t), this.overlapAvoidanceFactor < 1 && o.shape.radius && (t = Math.max(.1 + this.overlapAvoidanceFactor * o.shape.radius, t - o.shape.radius));
                    var s = o.edges.length + 1, r = this.options.gravitationalConstant * n.mass * o.options.mass * s / Math.pow(t, 2), a = e * r, h = i * r;
                    this.physicsBody.forces[o.id].x += a, this.physicsBody.forces[o.id].y += h
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(101), d = o(h), l = function (t) {
            function e(t, i, o) {
                return n(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o))
            }

            return r(e, t), a(e, [{
                key: "_calculateForces", value: function (t, e, i, o, n) {
                    if (t > 0) {
                        var s = n.edges.length + 1, r = this.options.centralGravity * s * n.options.mass;
                        o[n.id].x = e * r, o[n.id].y = i * r
                    }
                }
            }]), e
        }(d.default);
        e.default = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), a = i(105), h = o(a), d = i(106), l = o(d), c = i(1), u = function () {
            function t(e) {
                var i = this;
                n(this, t), this.body = e, this.clusteredNodes = {}, this.clusteredEdges = {}, this.options = {}, this.defaultOptions = {}, c.extend(this.options, this.defaultOptions), this.body.emitter.on("_resetData", function () {
                    i.clusteredNodes = {}, i.clusteredEdges = {}
                })
            }

            return r(t, [{
                key: "clusterByHubsize", value: function (t, e) {
                    void 0 === t ? t = this._getHubSize() : "object" === ("undefined" == typeof t ? "undefined" : s(t)) && (e = this._checkOptions(t), t = this._getHubSize());
                    for (var i = [], o = 0; o < this.body.nodeIndices.length; o++) {
                        var n = this.body.nodes[this.body.nodeIndices[o]];
                        n.edges.length >= t && i.push(n.id)
                    }
                    for (var r = 0; r < i.length; r++)this.clusterByConnection(i[r], e, !0);
                    this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "cluster", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (void 0 === t.joinCondition)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.");
                    t = this._checkOptions(t);
                    for (var i = {}, o = {}, n = 0; n < this.body.nodeIndices.length; n++) {
                        var s = this.body.nodeIndices[n], r = this.body.nodes[s], a = h.default.cloneOptions(r);
                        if (t.joinCondition(a) === !0) {
                            i[s] = this.body.nodes[s];
                            for (var d = 0; d < r.edges.length; d++) {
                                var l = r.edges[d];
                                void 0 === this.clusteredEdges[l.id] && (o[l.id] = l)
                            }
                        }
                    }
                    this._cluster(i, o, t, e)
                }
            }, {
                key: "clusterByEdgeCount", value: function (t, e) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    e = this._checkOptions(e);
                    for (var o = [], n = {}, s = void 0, r = void 0, a = void 0, d = void 0, l = void 0, c = 0; c < this.body.nodeIndices.length; c++) {
                        var u = {}, p = {};
                        if (d = this.body.nodeIndices[c], void 0 === n[d]) {
                            l = 0, a = this.body.nodes[d], r = [];
                            for (var f = 0; f < a.edges.length; f++)s = a.edges[f], void 0 === this.clusteredEdges[s.id] && (s.toId !== s.fromId && l++, r.push(s));
                            if (l === t) {
                                for (var m = !0, v = 0; v < r.length; v++) {
                                    s = r[v];
                                    var g = this._getConnectedId(s, d);
                                    if (void 0 === e.joinCondition)p[s.id] = s, u[d] = this.body.nodes[d], u[g] = this.body.nodes[g], n[d] = !0; else {
                                        var y = h.default.cloneOptions(this.body.nodes[d]);
                                        if (e.joinCondition(y) !== !0) {
                                            m = !1;
                                            break
                                        }
                                        p[s.id] = s, u[d] = this.body.nodes[d], n[d] = !0
                                    }
                                }
                                Object.keys(u).length > 0 && Object.keys(p).length > 0 && m === !0 && o.push({
                                    nodes: u,
                                    edges: p
                                })
                            }
                        }
                    }
                    for (var b = 0; b < o.length; b++)this._cluster(o[b].nodes, o[b].edges, e, !1);
                    i === !0 && this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "clusterOutliers", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.clusterByEdgeCount(1, t, e)
                }
            }, {
                key: "clusterBridges", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.clusterByEdgeCount(2, t, e)
                }
            }, {
                key: "clusterByConnection", value: function (t, e) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (void 0 === t)throw new Error("No nodeId supplied to clusterByConnection!");
                    if (void 0 === this.body.nodes[t])throw new Error("The nodeId given to clusterByConnection does not exist!");
                    var o = this.body.nodes[t];
                    e = this._checkOptions(e, o), void 0 === e.clusterNodeProperties.x && (e.clusterNodeProperties.x = o.x), void 0 === e.clusterNodeProperties.y && (e.clusterNodeProperties.y = o.y), void 0 === e.clusterNodeProperties.fixed && (e.clusterNodeProperties.fixed = {}, e.clusterNodeProperties.fixed.x = o.options.fixed.x, e.clusterNodeProperties.fixed.y = o.options.fixed.y);
                    var n = {}, s = {}, r = o.id, a = h.default.cloneOptions(o);
                    n[r] = o;
                    for (var d = 0; d < o.edges.length; d++) {
                        var l = o.edges[d];
                        if (void 0 === this.clusteredEdges[l.id]) {
                            var c = this._getConnectedId(l, r);
                            if (void 0 === this.clusteredNodes[c])if (c !== r)if (void 0 === e.joinCondition)s[l.id] = l, n[c] = this.body.nodes[c]; else {
                                var u = h.default.cloneOptions(this.body.nodes[c]);
                                e.joinCondition(a, u) === !0 && (s[l.id] = l, n[c] = this.body.nodes[c])
                            } else s[l.id] = l
                        }
                    }
                    var p = Object.keys(n).map(function (t) {
                        return n[t].id
                    });
                    for (f in n)for (var f = n[f], m = 0; m < f.edges.length; m++) {
                        var v = f.edges[m];
                        p.indexOf(this._getConnectedId(v, f.id)) > -1 && (s[v.id] = v)
                    }
                    this._cluster(n, s, e, i)
                }
            }, {
                key: "_createClusterEdges", value: function (t, e, i, o) {
                    for (var n = void 0, s = void 0, r = void 0, a = void 0, d = void 0, l = void 0, u = Object.keys(t), p = [], f = 0; f < u.length; f++) {
                        s = u[f], r = t[s];
                        for (var m = 0; m < r.edges.length; m++)n = r.edges[m], void 0 === this.clusteredEdges[n.id] && (n.toId == n.fromId ? e[n.id] = n : n.toId == s ? (a = i.id, d = n.fromId, l = d) : (a = n.toId, d = i.id, l = a), void 0 === t[l] && p.push({
                            edge: n,
                            fromId: d,
                            toId: a
                        }))
                    }
                    for (var v = 0; v < p.length; v++) {
                        var g = p[v].edge, y = h.default.cloneOptions(g, "edge");
                        c.deepExtend(y, o), y.from = p[v].fromId, y.to = p[v].toId, y.id = "clusterEdge:" + c.randomUUID();
                        var b = this.body.functions.createEdge(y);
                        b.clusteringEdgeReplacingId = g.id, this.body.edges[g.id].edgeReplacedById = b.id, this.body.edges[b.id] = b, b.connect(), this._backupEdgeOptions(g), g.setOptions({
                            physics: !1,
                            hidden: !0
                        })
                    }
                }
            }, {
                key: "_checkOptions", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return void 0 === t.clusterEdgeProperties && (t.clusterEdgeProperties = {}), void 0 === t.clusterNodeProperties && (t.clusterNodeProperties = {}), t
                }
            }, {
                key: "_cluster", value: function (t, e, i) {
                    var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if (0 != Object.keys(t).length && (1 != Object.keys(t).length || 1 == i.clusterNodeProperties.allowSingleNodeCluster)) {
                        for (var n in t)if (t.hasOwnProperty(n) && void 0 !== this.clusteredNodes[n])return;
                        var s = c.deepExtend({}, i.clusterNodeProperties);
                        if (void 0 !== i.processProperties) {
                            var r = [];
                            for (var a in t)if (t.hasOwnProperty(a)) {
                                var d = h.default.cloneOptions(t[a]);
                                r.push(d)
                            }
                            var u = [];
                            for (var p in e)if (e.hasOwnProperty(p) && "clusterEdge:" !== p.substr(0, 12)) {
                                var f = h.default.cloneOptions(e[p], "edge");
                                u.push(f)
                            }
                            if (s = i.processProperties(s, r, u), !s)throw new Error("The processProperties function does not return properties!")
                        }
                        void 0 === s.id && (s.id = "cluster:" + c.randomUUID());
                        var m = s.id;
                        void 0 === s.label && (s.label = "cluster");
                        var v = void 0;
                        void 0 === s.x && (v = this._getClusterPosition(t), s.x = v.x), void 0 === s.y && (void 0 === v && (v = this._getClusterPosition(t)), s.y = v.y), s.id = m;
                        var g = this.body.functions.createNode(s, l.default);
                        g.isCluster = !0, g.containedNodes = t, g.containedEdges = e, g.clusterEdgeProperties = i.clusterEdgeProperties, this.body.nodes[s.id] = g, this._createClusterEdges(t, e, s, i.clusterEdgeProperties);
                        for (var y in e)if (e.hasOwnProperty(y) && void 0 !== this.body.edges[y]) {
                            var b = this.body.edges[y];
                            this._backupEdgeOptions(b), b.setOptions({physics: !1, hidden: !0})
                        }
                        for (var _ in t)t.hasOwnProperty(_) && (this.clusteredNodes[_] = {
                            clusterId: s.id,
                            node: this.body.nodes[_]
                        }, this.body.nodes[_].setOptions({hidden: !0, physics: !1}));
                        s.id = void 0, o === !0 && this.body.emitter.emit("_dataChanged")
                    }
                }
            }, {
                key: "_backupEdgeOptions", value: function (t) {
                    void 0 === this.clusteredEdges[t.id] && (this.clusteredEdges[t.id] = {
                        physics: t.options.physics,
                        hidden: t.options.hidden
                    })
                }
            }, {
                key: "_restoreEdge", value: function (t) {
                    var e = this.clusteredEdges[t.id];
                    void 0 !== e && (t.setOptions({
                        physics: e.physics,
                        hidden: e.hidden
                    }), delete this.clusteredEdges[t.id])
                }
            }, {
                key: "isCluster", value: function (t) {
                    return void 0 !== this.body.nodes[t] ? this.body.nodes[t].isCluster === !0 : (console.log("Node does not exist."), !1)
                }
            }, {
                key: "_getClusterPosition", value: function (t) {
                    for (var e = Object.keys(t), i = t[e[0]].x, o = t[e[0]].x, n = t[e[0]].y, s = t[e[0]].y, r = void 0, a = 1; a < e.length; a++)r = t[e[a]], i = r.x < i ? r.x : i, o = r.x > o ? r.x : o, n = r.y < n ? r.y : n, s = r.y > s ? r.y : s;
                    return {x: .5 * (i + o), y: .5 * (n + s)}
                }
            }, {
                key: "openCluster", value: function (t, e) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (void 0 === t)throw new Error("No clusterNodeId supplied to openCluster.");
                    if (void 0 === this.body.nodes[t])throw new Error("The clusterNodeId supplied to openCluster does not exist.");
                    if (void 0 === this.body.nodes[t].containedNodes)return void console.log("The node:" + t + " is not a cluster.");
                    var o = this.body.nodes[t], n = o.containedNodes, s = o.containedEdges;
                    if (void 0 !== e && void 0 !== e.releaseFunction && "function" == typeof e.releaseFunction) {
                        var r = {}, a = {x: o.x, y: o.y};
                        for (var d in n)if (n.hasOwnProperty(d)) {
                            var l = this.body.nodes[d];
                            r[d] = {x: l.x, y: l.y}
                        }
                        var u = e.releaseFunction(a, r);
                        for (var p in n)if (n.hasOwnProperty(p)) {
                            var f = this.body.nodes[p];
                            void 0 !== u[p] && (f.x = void 0 === u[p].x ? o.x : u[p].x, f.y = void 0 === u[p].y ? o.y : u[p].y)
                        }
                    } else for (var m in n)if (n.hasOwnProperty(m)) {
                        var v = this.body.nodes[m];
                        v = n[m], v.options.fixed.x === !1 && (v.x = o.x), v.options.fixed.y === !1 && (v.y = o.y)
                    }
                    for (var g in n)if (n.hasOwnProperty(g)) {
                        var y = this.body.nodes[g];
                        y.vx = o.vx, y.vy = o.vy, y.setOptions({hidden: !1, physics: !0}), delete this.clusteredNodes[g]
                    }
                    for (var b = [], _ = 0; _ < o.edges.length; _++)b.push(o.edges[_]);
                    for (var w = 0; w < b.length; w++) {
                        var x = b[w], k = this._getConnectedId(x, t);
                        if (void 0 !== this.clusteredNodes[k]) {
                            var O = this.body.nodes[this.clusteredNodes[k].clusterId], D = this.body.edges[x.clusteringEdgeReplacingId];
                            if (void 0 !== D) {
                                O.containedEdges[D.id] = D, delete s[D.id];
                                var S = D.fromId, C = D.toId;
                                D.toId == k ? C = this.clusteredNodes[k].clusterId : S = this.clusteredNodes[k].clusterId;
                                var T = h.default.cloneOptions(D, "edge");
                                c.deepExtend(T, O.clusterEdgeProperties);
                                var E = "clusterEdge:" + c.randomUUID();
                                c.deepExtend(T, {from: S, to: C, hidden: !1, physics: !0, id: E});
                                var M = this.body.functions.createEdge(T);
                                M.clusteringEdgeReplacingId = D.id, this.body.edges[E] = M, this.body.edges[E].connect()
                            }
                        } else {
                            var P = this.body.edges[x.clusteringEdgeReplacingId];
                            void 0 !== P && this._restoreEdge(P)
                        }
                        x.cleanup(), x.disconnect(), delete this.body.edges[x.id]
                    }
                    for (var I in s)s.hasOwnProperty(I) && this._restoreEdge(s[I]);
                    delete this.body.nodes[t], i === !0 && this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "getNodesInCluster", value: function (t) {
                    var e = [];
                    if (this.isCluster(t) === !0) {
                        var i = this.body.nodes[t].containedNodes;
                        for (var o in i)i.hasOwnProperty(o) && e.push(this.body.nodes[o].id)
                    }
                    return e
                }
            }, {
                key: "findNode", value: function (t) {
                    for (var e = [], i = 100, o = 0; void 0 !== this.clusteredNodes[t] && o < i;)e.push(this.body.nodes[t].id), t = this.clusteredNodes[t].clusterId, o++;
                    return e.push(this.body.nodes[t].id), e.reverse(), e
                }
            }, {
                key: "updateClusteredNode", value: function (t, e) {
                    if (void 0 === t)throw new Error("No clusteredNodeId supplied to updateClusteredNode.");
                    if (void 0 === e)throw new Error("No newOptions supplied to updateClusteredNode.");
                    if (void 0 === this.body.nodes[t])throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.");
                    this.body.nodes[t].setOptions(e), this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "updateEdge", value: function (t, e) {
                    if (void 0 === t)throw new Error("No startEdgeId supplied to updateEdge.");
                    if (void 0 === e)throw new Error("No newOptions supplied to updateEdge.");
                    if (void 0 === this.body.edges[t])throw new Error("The startEdgeId supplied to updateEdge does not exist.");
                    for (var i = this.getClusteredEdges(t), o = 0; o < i.length; o++) {
                        var n = this.body.edges[i[o]];
                        n.setOptions(e)
                    }
                    this.body.emitter.emit("_dataChanged")
                }
            }, {
                key: "getClusteredEdges", value: function (t) {
                    for (var e = [], i = 100, o = 0; void 0 !== t && void 0 !== this.body.edges[t] && o < i;)e.push(this.body.edges[t].id), t = this.body.edges[t].edgeReplacedById, o++;
                    return e.reverse(), e
                }
            }, {
                key: "getBaseEdge", value: function (t) {
                    for (var e = t, i = 100, o = 0; void 0 !== t && void 0 !== this.body.edges[t] && o < i;)t = this.body.edges[t].clusteringEdgeReplacingId, o++, void 0 !== t && (e = t);
                    return e
                }
            }, {
                key: "_getConnectedId", value: function (t, e) {
                    return t.toId != e ? t.toId : t.fromId != e ? t.fromId : t.fromId
                }
            }, {
                key: "_getHubSize", value: function () {
                    for (var t = 0, e = 0, i = 0, o = 0, n = 0; n < this.body.nodeIndices.length; n++) {
                        var s = this.body.nodes[this.body.nodeIndices[n]];
                        s.edges.length > o && (o = s.edges.length), t += s.edges.length,
                            e += Math.pow(s.edges.length, 2), i += 1
                    }
                    t /= i, e /= i;
                    var r = e - Math.pow(t, 2), a = Math.sqrt(r), h = Math.floor(t + 2 * a);
                    return h > o && (h = o), h
                }
            }]), t
        }();
        e.default = u
    }, function (t, e, i) {
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), s = i(1), r = function () {
            function t() {
                o(this, t)
            }

            return n(t, null, [{
                key: "getRange", value: function (t) {
                    var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], o = 1e9, n = -1e9, s = 1e9, r = -1e9;
                    if (i.length > 0)for (var a = 0; a < i.length; a++)e = t[i[a]], s > e.shape.boundingBox.left && (s = e.shape.boundingBox.left), r < e.shape.boundingBox.right && (r = e.shape.boundingBox.right), o > e.shape.boundingBox.top && (o = e.shape.boundingBox.top), n < e.shape.boundingBox.bottom && (n = e.shape.boundingBox.bottom);
                    return 1e9 === s && r === -1e9 && 1e9 === o && n === -1e9 && (o = 0, n = 0, s = 0, r = 0), {
                        minX: s,
                        maxX: r,
                        minY: o,
                        maxY: n
                    }
                }
            }, {
                key: "getRangeCore", value: function (t) {
                    var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], o = 1e9, n = -1e9, s = 1e9, r = -1e9;
                    if (i.length > 0)for (var a = 0; a < i.length; a++)e = t[i[a]], s > e.x && (s = e.x), r < e.x && (r = e.x), o > e.y && (o = e.y), n < e.y && (n = e.y);
                    return 1e9 === s && r === -1e9 && 1e9 === o && n === -1e9 && (o = 0, n = 0, s = 0, r = 0), {
                        minX: s,
                        maxX: r,
                        minY: o,
                        maxY: n
                    }
                }
            }, {
                key: "findCenter", value: function (t) {
                    return {x: .5 * (t.maxX + t.minX), y: .5 * (t.maxY + t.minY)}
                }
            }, {
                key: "cloneOptions", value: function (t, e) {
                    var i = {};
                    return void 0 === e || "node" === e ? (s.deepExtend(i, t.options, !0), i.x = t.x, i.y = t.y, i.amountOfConnections = t.edges.length) : s.deepExtend(i, t.options, !0), i
                }
            }]), t
        }();
        e.default = r
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        function s(t, e) {
            if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var a = i(67), h = o(a), d = function (t) {
            function e(t, i, o, r, a) {
                n(this, e);
                var h = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, o, r, a));
                return h.isCluster = !0, h.containedNodes = {}, h.containedEdges = {}, h
            }

            return r(e, t), e
        }(h.default);
        e.default = d
    }, function (t, e, i) {
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }();
        "undefined" != typeof window && (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame);
        var s = i(1), r = function () {
            function t(e, i) {
                o(this, t), this.body = e, this.canvas = i, this.redrawRequested = !1, this.renderTimer = void 0, this.requiresTimeout = !0, this.renderingActive = !1, this.renderRequests = 0, this.pixelRatio = void 0, this.allowRedraw = !0, this.dragging = !1, this.options = {}, this.defaultOptions = {
                    hideEdgesOnDrag: !1,
                    hideNodesOnDrag: !1
                }, s.extend(this.options, this.defaultOptions), this._determineBrowserMethod(), this.bindEventListeners()
            }

            return n(t, [{
                key: "bindEventListeners", value: function () {
                    var t = this;
                    this.body.emitter.on("dragStart", function () {
                        t.dragging = !0
                    }), this.body.emitter.on("dragEnd", function () {
                        return t.dragging = !1
                    }), this.body.emitter.on("_resizeNodes", function () {
                        return t._resizeNodes()
                    }), this.body.emitter.on("_redraw", function () {
                        t.renderingActive === !1 && t._redraw()
                    }), this.body.emitter.on("_blockRedraw", function () {
                        t.allowRedraw = !1
                    }), this.body.emitter.on("_allowRedraw", function () {
                        t.allowRedraw = !0, t.redrawRequested = !1
                    }), this.body.emitter.on("_requestRedraw", this._requestRedraw.bind(this)), this.body.emitter.on("_startRendering", function () {
                        t.renderRequests += 1, t.renderingActive = !0, t._startRendering()
                    }), this.body.emitter.on("_stopRendering", function () {
                        t.renderRequests -= 1, t.renderingActive = t.renderRequests > 0, t.renderTimer = void 0
                    }), this.body.emitter.on("destroy", function () {
                        t.renderRequests = 0, t.allowRedraw = !1, t.renderingActive = !1, t.requiresTimeout === !0 ? clearTimeout(t.renderTimer) : cancelAnimationFrame(t.renderTimer), t.body.emitter.off()
                    })
                }
            }, {
                key: "setOptions", value: function (t) {
                    if (void 0 !== t) {
                        var e = ["hideEdgesOnDrag", "hideNodesOnDrag"];
                        s.selectiveDeepExtend(e, this.options, t)
                    }
                }
            }, {
                key: "_startRendering", value: function () {
                    this.renderingActive === !0 && void 0 === this.renderTimer && (this.requiresTimeout === !0 ? this.renderTimer = window.setTimeout(this._renderStep.bind(this), this.simulationInterval) : this.renderTimer = window.requestAnimationFrame(this._renderStep.bind(this)))
                }
            }, {
                key: "_renderStep", value: function () {
                    this.renderingActive === !0 && (this.renderTimer = void 0, this.requiresTimeout === !0 && this._startRendering(), this._redraw(), this.requiresTimeout === !1 && this._startRendering())
                }
            }, {
                key: "redraw", value: function () {
                    this.body.emitter.emit("setSize"), this._redraw()
                }
            }, {
                key: "_requestRedraw", value: function () {
                    var t = this;
                    this.redrawRequested !== !0 && this.renderingActive === !1 && this.allowRedraw === !0 && (this.redrawRequested = !0, this.requiresTimeout === !0 ? window.setTimeout(function () {
                        t._redraw(!1)
                    }, 0) : window.requestAnimationFrame(function () {
                        t._redraw(!1)
                    }))
                }
            }, {
                key: "_redraw", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.allowRedraw === !0) {
                        this.body.emitter.emit("initRedraw"), this.redrawRequested = !1;
                        var e = this.canvas.frame.canvas.getContext("2d");
                        0 !== this.canvas.frame.canvas.width && 0 !== this.canvas.frame.canvas.height || this.canvas.setSize(), this.pixelRatio = (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1), e.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
                        var i = this.canvas.frame.canvas.clientWidth, o = this.canvas.frame.canvas.clientHeight;
                        if (e.clearRect(0, 0, i, o), 0 === this.canvas.frame.clientWidth)return;
                        e.save(), e.translate(this.body.view.translation.x, this.body.view.translation.y), e.scale(this.body.view.scale, this.body.view.scale), e.beginPath(), this.body.emitter.emit("beforeDrawing", e), e.closePath(), t === !1 && (this.dragging === !1 || this.dragging === !0 && this.options.hideEdgesOnDrag === !1) && this._drawEdges(e), (this.dragging === !1 || this.dragging === !0 && this.options.hideNodesOnDrag === !1) && this._drawNodes(e, t), e.beginPath(), this.body.emitter.emit("afterDrawing", e), e.closePath(), e.restore(), t === !0 && e.clearRect(0, 0, i, o)
                    }
                }
            }, {
                key: "_resizeNodes", value: function () {
                    var t = this.canvas.frame.canvas.getContext("2d");
                    void 0 === this.pixelRatio && (this.pixelRatio = (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)), t.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0), t.save(), t.translate(this.body.view.translation.x, this.body.view.translation.y), t.scale(this.body.view.scale, this.body.view.scale);
                    var e = this.body.nodes, i = void 0;
                    for (var o in e)e.hasOwnProperty(o) && (i = e[o], i.resize(t), i.updateBoundingBox(t, i.selected));
                    t.restore()
                }
            }, {
                key: "_drawNodes", value: function (t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = this.body.nodes, o = this.body.nodeIndices, n = void 0, s = [], r = 20, a = this.canvas.DOMtoCanvas({
                        x: -r,
                        y: -r
                    }), h = this.canvas.DOMtoCanvas({
                        x: this.canvas.frame.canvas.clientWidth + r,
                        y: this.canvas.frame.canvas.clientHeight + r
                    }), d = {
                        top: a.y,
                        left: a.x,
                        bottom: h.y,
                        right: h.x
                    }, l = 0; l < o.length; l++)n = i[o[l]], n.isSelected() ? s.push(o[l]) : e === !0 ? n.draw(t) : n.isBoundingBoxOverlappingWith(d) === !0 ? n.draw(t) : n.updateBoundingBox(t, n.selected);
                    for (var c = 0; c < s.length; c++)n = i[s[c]], n.draw(t)
                }
            }, {
                key: "_drawEdges", value: function (t) {
                    for (var e = this.body.edges, i = this.body.edgeIndices, o = void 0, n = 0; n < i.length; n++)o = e[i[n]], o.connected === !0 && o.draw(t)
                }
            }, {
                key: "_determineBrowserMethod", value: function () {
                    if ("undefined" != typeof window) {
                        var t = navigator.userAgent.toLowerCase();
                        this.requiresTimeout = !1, t.indexOf("msie 9.0") != -1 ? this.requiresTimeout = !0 : t.indexOf("safari") != -1 && t.indexOf("chrome") <= -1 && (this.requiresTimeout = !0)
                    } else this.requiresTimeout = !0
                }
            }]), t
        }();
        e.default = r
    }, function (t, e, i) {
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), s = i(22), r = i(30), a = i(1), h = function () {
            function t(e) {
                o(this, t), this.body = e, this.pixelRatio = 1, this.resizeTimer = void 0, this.resizeFunction = this._onResize.bind(this), this.cameraState = {}, this.initialized = !1, this.canvasViewCenter = {}, this.options = {}, this.defaultOptions = {
                    autoResize: !0,
                    height: "100%",
                    width: "100%"
                }, a.extend(this.options, this.defaultOptions), this.bindEventListeners()
            }

            return n(t, [{
                key: "bindEventListeners", value: function () {
                    var t = this;
                    this.body.emitter.once("resize", function (e) {
                        0 !== e.width && (t.body.view.translation.x = .5 * e.width), 0 !== e.height && (t.body.view.translation.y = .5 * e.height)
                    }), this.body.emitter.on("setSize", this.setSize.bind(this)), this.body.emitter.on("destroy", function () {
                        t.hammerFrame.destroy(), t.hammer.destroy(), t._cleanUp()
                    })
                }
            }, {
                key: "setOptions", value: function (t) {
                    var e = this;
                    if (void 0 !== t) {
                        var i = ["width", "height", "autoResize"];
                        a.selectiveDeepExtend(i, this.options, t)
                    }
                    this.options.autoResize === !0 && (this._cleanUp(), this.resizeTimer = setInterval(function () {
                        var t = e.setSize();
                        t === !0 && e.body.emitter.emit("_requestRedraw")
                    }, 1e3), this.resizeFunction = this._onResize.bind(this), a.addEventListener(window, "resize", this.resizeFunction))
                }
            }, {
                key: "_cleanUp", value: function () {
                    void 0 !== this.resizeTimer && clearInterval(this.resizeTimer), a.removeEventListener(window, "resize", this.resizeFunction), this.resizeFunction = void 0
                }
            }, {
                key: "_onResize", value: function () {
                    this.setSize(), this.body.emitter.emit("_redraw")
                }
            }, {
                key: "_getCameraState", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pixelRatio;
                    this.initialized === !0 && (this.cameraState.previousWidth = this.frame.canvas.width / t, this.cameraState.previousHeight = this.frame.canvas.height / t, this.cameraState.scale = this.body.view.scale, this.cameraState.position = this.DOMtoCanvas({
                        x: .5 * this.frame.canvas.width / t,
                        y: .5 * this.frame.canvas.height / t
                    }))
                }
            }, {
                key: "_setCameraState", value: function () {
                    if (void 0 !== this.cameraState.scale && 0 !== this.frame.canvas.clientWidth && 0 !== this.frame.canvas.clientHeight && 0 !== this.pixelRatio && this.cameraState.previousWidth > 0) {
                        var t = this.frame.canvas.width / this.pixelRatio / this.cameraState.previousWidth, e = this.frame.canvas.height / this.pixelRatio / this.cameraState.previousHeight, i = this.cameraState.scale;
                        1 != t && 1 != e ? i = .5 * this.cameraState.scale * (t + e) : 1 != t ? i = this.cameraState.scale * t : 1 != e && (i = this.cameraState.scale * e), this.body.view.scale = i;
                        var o = this.DOMtoCanvas({
                            x: .5 * this.frame.canvas.clientWidth,
                            y: .5 * this.frame.canvas.clientHeight
                        }), n = {x: o.x - this.cameraState.position.x, y: o.y - this.cameraState.position.y};
                        this.body.view.translation.x += n.x * this.body.view.scale, this.body.view.translation.y += n.y * this.body.view.scale
                    }
                }
            }, {
                key: "_prepareValue", value: function (t) {
                    if ("number" == typeof t)return t + "px";
                    if ("string" == typeof t) {
                        if (t.indexOf("%") !== -1 || t.indexOf("px") !== -1)return t;
                        if (t.indexOf("%") === -1)return t + "px"
                    }
                    throw new Error("Could not use the value supplied for width or height:" + t)
                }
            }, {
                key: "_create", value: function () {
                    for (; this.body.container.hasChildNodes();)this.body.container.removeChild(this.body.container.firstChild);
                    if (this.frame = document.createElement("div"), this.frame.className = "vis-network", this.frame.style.position = "relative", this.frame.style.overflow = "hidden", this.frame.tabIndex = 900, this.frame.canvas = document.createElement("canvas"), this.frame.canvas.style.position = "relative", this.frame.appendChild(this.frame.canvas), this.frame.canvas.getContext) {
                        var t = this.frame.canvas.getContext("2d");
                        this.pixelRatio = (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1), this.frame.canvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0)
                    } else {
                        var e = document.createElement("DIV");
                        e.style.color = "red", e.style.fontWeight = "bold", e.style.padding = "10px", e.innerHTML = "Error: your browser does not support HTML canvas", this.frame.canvas.appendChild(e)
                    }
                    this.body.container.appendChild(this.frame), this.body.view.scale = 1, this.body.view.translation = {
                        x: .5 * this.frame.canvas.clientWidth,
                        y: .5 * this.frame.canvas.clientHeight
                    }, this._bindHammer()
                }
            }, {
                key: "_bindHammer", value: function () {
                    var t = this;
                    void 0 !== this.hammer && this.hammer.destroy(), this.drag = {}, this.pinch = {}, this.hammer = new s(this.frame.canvas), this.hammer.get("pinch").set({enable: !0}), this.hammer.get("pan").set({
                        threshold: 5,
                        direction: s.DIRECTION_ALL
                    }), r.onTouch(this.hammer, function (e) {
                        t.body.eventListeners.onTouch(e)
                    }), this.hammer.on("tap", function (e) {
                        t.body.eventListeners.onTap(e)
                    }), this.hammer.on("doubletap", function (e) {
                        t.body.eventListeners.onDoubleTap(e)
                    }), this.hammer.on("press", function (e) {
                        t.body.eventListeners.onHold(e)
                    }), this.hammer.on("panstart", function (e) {
                        t.body.eventListeners.onDragStart(e)
                    }), this.hammer.on("panmove", function (e) {
                        t.body.eventListeners.onDrag(e)
                    }), this.hammer.on("panend", function (e) {
                        t.body.eventListeners.onDragEnd(e)
                    }), this.hammer.on("pinch", function (e) {
                        t.body.eventListeners.onPinch(e)
                    }), this.frame.canvas.addEventListener("mousewheel", function (e) {
                        t.body.eventListeners.onMouseWheel(e)
                    }), this.frame.canvas.addEventListener("DOMMouseScroll", function (e) {
                        t.body.eventListeners.onMouseWheel(e)
                    }), this.frame.canvas.addEventListener("mousemove", function (e) {
                        t.body.eventListeners.onMouseMove(e)
                    }), this.frame.canvas.addEventListener("contextmenu", function (e) {
                        t.body.eventListeners.onContext(e)
                    }), this.hammerFrame = new s(this.frame), r.onRelease(this.hammerFrame, function (e) {
                        t.body.eventListeners.onRelease(e)
                    })
                }
            }, {
                key: "setSize", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.width, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.height;
                    t = this._prepareValue(t), e = this._prepareValue(e);
                    var i = !1, o = this.frame.canvas.width, n = this.frame.canvas.height, s = this.frame.canvas.getContext("2d"), r = this.pixelRatio;
                    return this.pixelRatio = (window.devicePixelRatio || 1) / (s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1), t != this.options.width || e != this.options.height || this.frame.style.width != t || this.frame.style.height != e ? (this._getCameraState(r), this.frame.style.width = t, this.frame.style.height = e, this.frame.canvas.style.width = "100%", this.frame.canvas.style.height = "100%", this.frame.canvas.width = Math.round(this.frame.canvas.clientWidth * this.pixelRatio), this.frame.canvas.height = Math.round(this.frame.canvas.clientHeight * this.pixelRatio), this.options.width = t, this.options.height = e, this.canvasViewCenter = {
                        x: .5 * this.frame.clientWidth,
                        y: .5 * this.frame.clientHeight
                    }, i = !0) : (this.frame.canvas.width == Math.round(this.frame.canvas.clientWidth * this.pixelRatio) && this.frame.canvas.height == Math.round(this.frame.canvas.clientHeight * this.pixelRatio) || this._getCameraState(r), this.frame.canvas.width != Math.round(this.frame.canvas.clientWidth * this.pixelRatio) && (this.frame.canvas.width = Math.round(this.frame.canvas.clientWidth * this.pixelRatio), i = !0), this.frame.canvas.height != Math.round(this.frame.canvas.clientHeight * this.pixelRatio) && (this.frame.canvas.height = Math.round(this.frame.canvas.clientHeight * this.pixelRatio), i = !0)), i === !0 && (this.body.emitter.emit("resize", {
                        width: Math.round(this.frame.canvas.width / this.pixelRatio),
                        height: Math.round(this.frame.canvas.height / this.pixelRatio),
                        oldWidth: Math.round(o / this.pixelRatio),
                        oldHeight: Math.round(n / this.pixelRatio)
                    }), this._setCameraState()), this.initialized = !0, i
                }
            }, {
                key: "_XconvertDOMtoCanvas", value: function (t) {
                    return (t - this.body.view.translation.x) / this.body.view.scale
                }
            }, {
                key: "_XconvertCanvasToDOM", value: function (t) {
                    return t * this.body.view.scale + this.body.view.translation.x
                }
            }, {
                key: "_YconvertDOMtoCanvas", value: function (t) {
                    return (t - this.body.view.translation.y) / this.body.view.scale
                }
            }, {
                key: "_YconvertCanvasToDOM", value: function (t) {
                    return t * this.body.view.scale + this.body.view.translation.y
                }
            }, {
                key: "canvasToDOM", value: function (t) {
                    return {x: this._XconvertCanvasToDOM(t.x), y: this._YconvertCanvasToDOM(t.y)}
                }
            }, {
                key: "DOMtoCanvas", value: function (t) {
                    return {x: this._XconvertDOMtoCanvas(t.x), y: this._YconvertDOMtoCanvas(t.y)}
                }
            }]), t
        }();
        e.default = h
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), r = i(105), a = o(r), h = i(1), d = function () {
            function t(e, i) {
                var o = this;
                n(this, t), this.body = e, this.canvas = i, this.animationSpeed = 1 / this.renderRefreshRate, this.animationEasingFunction = "easeInOutQuint", this.easingTime = 0, this.sourceScale = 0, this.targetScale = 0, this.sourceTranslation = 0, this.targetTranslation = 0, this.lockedOnNodeId = void 0, this.lockedOnNodeOffset = void 0, this.touchTime = 0, this.viewFunction = void 0, this.body.emitter.on("fit", this.fit.bind(this)), this.body.emitter.on("animationFinished", function () {
                    o.body.emitter.emit("_stopRendering")
                }), this.body.emitter.on("unlockNode", this.releaseNode.bind(this))
            }

            return s(t, [{
                key: "setOptions", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.options = t
                }
            }, {
                key: "fit", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {nodes: []}, e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = void 0, o = void 0;
                    if (void 0 !== t.nodes && 0 !== t.nodes.length || (t.nodes = this.body.nodeIndices), e === !0) {
                        var n = 0;
                        for (var s in this.body.nodes)if (this.body.nodes.hasOwnProperty(s)) {
                            var r = this.body.nodes[s];
                            r.predefinedPosition === !0 && (n += 1)
                        }
                        if (n > .5 * this.body.nodeIndices.length)return void this.fit(t, !1);
                        i = a.default.getRange(this.body.nodes, t.nodes);
                        var h = this.body.nodeIndices.length;
                        o = 12.662 / (h + 7.4147) + .0964822;
                        var d = Math.min(this.canvas.frame.canvas.clientWidth / 600, this.canvas.frame.canvas.clientHeight / 600);
                        o *= d
                    } else {
                        this.body.emitter.emit("_resizeNodes"), i = a.default.getRange(this.body.nodes, t.nodes);
                        var l = 1.1 * Math.abs(i.maxX - i.minX), c = 1.1 * Math.abs(i.maxY - i.minY), u = this.canvas.frame.canvas.clientWidth / l, p = this.canvas.frame.canvas.clientHeight / c;
                        o = u <= p ? u : p
                    }
                    o > 1 ? o = 1 : 0 === o && (o = 1);
                    var f = a.default.findCenter(i), m = {position: f, scale: o, animation: t.animation};
                    this.moveTo(m)
                }
            }, {
                key: "focus", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (void 0 !== this.body.nodes[t]) {
                        var i = {x: this.body.nodes[t].x, y: this.body.nodes[t].y};
                        e.position = i, e.lockedOnNode = t, this.moveTo(e)
                    } else console.log("Node: " + t + " cannot be found.")
                }
            }, {
                key: "moveTo", value: function (t) {
                    return void 0 === t ? void(t = {}) : (void 0 === t.offset && (t.offset = {
                        x: 0,
                        y: 0
                    }), void 0 === t.offset.x && (t.offset.x = 0), void 0 === t.offset.y && (t.offset.y = 0), void 0 === t.scale && (t.scale = this.body.view.scale), void 0 === t.position && (t.position = this.getViewPosition()), void 0 === t.animation && (t.animation = {duration: 0}), t.animation === !1 && (t.animation = {duration: 0}), t.animation === !0 && (t.animation = {}), void 0 === t.animation.duration && (t.animation.duration = 1e3), void 0 === t.animation.easingFunction && (t.animation.easingFunction = "easeInOutQuad"), void this.animateView(t))
                }
            }, {
                key: "animateView", value: function (t) {
                    if (void 0 !== t) {
                        this.animationEasingFunction = t.animation.easingFunction, this.releaseNode(), t.locked === !0 && (this.lockedOnNodeId = t.lockedOnNode, this.lockedOnNodeOffset = t.offset), 0 != this.easingTime && this._transitionRedraw(!0), this.sourceScale = this.body.view.scale, this.sourceTranslation = this.body.view.translation, this.targetScale = t.scale, this.body.view.scale = this.targetScale;
                        var e = this.canvas.DOMtoCanvas({
                            x: .5 * this.canvas.frame.canvas.clientWidth,
                            y: .5 * this.canvas.frame.canvas.clientHeight
                        }), i = {x: e.x - t.position.x, y: e.y - t.position.y};
                        this.targetTranslation = {
                            x: this.sourceTranslation.x + i.x * this.targetScale + t.offset.x,
                            y: this.sourceTranslation.y + i.y * this.targetScale + t.offset.y
                        }, 0 === t.animation.duration ? void 0 != this.lockedOnNodeId ? (this.viewFunction = this._lockedRedraw.bind(this), this.body.emitter.on("initRedraw", this.viewFunction)) : (this.body.view.scale = this.targetScale, this.body.view.translation = this.targetTranslation, this.body.emitter.emit("_requestRedraw")) : (this.animationSpeed = 1 / (60 * t.animation.duration * .001) || 1 / 60, this.animationEasingFunction = t.animation.easingFunction, this.viewFunction = this._transitionRedraw.bind(this), this.body.emitter.on("initRedraw", this.viewFunction), this.body.emitter.emit("_startRendering"))
                    }
                }
            }, {
                key: "_lockedRedraw", value: function () {
                    var t = {
                        x: this.body.nodes[this.lockedOnNodeId].x,
                        y: this.body.nodes[this.lockedOnNodeId].y
                    }, e = this.canvas.DOMtoCanvas({
                        x: .5 * this.canvas.frame.canvas.clientWidth,
                        y: .5 * this.canvas.frame.canvas.clientHeight
                    }), i = {
                        x: e.x - t.x,
                        y: e.y - t.y
                    }, o = this.body.view.translation, n = {
                        x: o.x + i.x * this.body.view.scale + this.lockedOnNodeOffset.x,
                        y: o.y + i.y * this.body.view.scale + this.lockedOnNodeOffset.y
                    };
                    this.body.view.translation = n
                }
            }, {
                key: "releaseNode", value: function () {
                    void 0 !== this.lockedOnNodeId && void 0 !== this.viewFunction && (this.body.emitter.off("initRedraw", this.viewFunction), this.lockedOnNodeId = void 0, this.lockedOnNodeOffset = void 0)
                }
            }, {
                key: "_transitionRedraw", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.easingTime += this.animationSpeed, this.easingTime = t === !0 ? 1 : this.easingTime;
                    var e = h.easingFunctions[this.animationEasingFunction](this.easingTime);
                    this.body.view.scale = this.sourceScale + (this.targetScale - this.sourceScale) * e, this.body.view.translation = {
                        x: this.sourceTranslation.x + (this.targetTranslation.x - this.sourceTranslation.x) * e,
                        y: this.sourceTranslation.y + (this.targetTranslation.y - this.sourceTranslation.y) * e
                    }, this.easingTime >= 1 && (this.body.emitter.off("initRedraw", this.viewFunction), this.easingTime = 0, void 0 != this.lockedOnNodeId && (this.viewFunction = this._lockedRedraw.bind(this), this.body.emitter.on("initRedraw", this.viewFunction)), this.body.emitter.emit("animationFinished"))
                }
            }, {
                key: "getScale", value: function () {
                    return this.body.view.scale
                }
            }, {
                key: "getViewPosition", value: function () {
                    return this.canvas.DOMtoCanvas({
                        x: .5 * this.canvas.frame.canvas.clientWidth,
                        y: .5 * this.canvas.frame.canvas.clientHeight
                    })
                }
            }]), t
        }();
        e.default = d
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), r = i(111), a = o(r), h = i(112), d = o(h), l = i(1), c = function () {
            function t(e, i, o) {
                n(this, t), this.body = e, this.canvas = i, this.selectionHandler = o, this.navigationHandler = new a.default(e, i), this.body.eventListeners.onTap = this.onTap.bind(this), this.body.eventListeners.onTouch = this.onTouch.bind(this), this.body.eventListeners.onDoubleTap = this.onDoubleTap.bind(this), this.body.eventListeners.onHold = this.onHold.bind(this), this.body.eventListeners.onDragStart = this.onDragStart.bind(this), this.body.eventListeners.onDrag = this.onDrag.bind(this), this.body.eventListeners.onDragEnd = this.onDragEnd.bind(this), this.body.eventListeners.onMouseWheel = this.onMouseWheel.bind(this), this.body.eventListeners.onPinch = this.onPinch.bind(this), this.body.eventListeners.onMouseMove = this.onMouseMove.bind(this), this.body.eventListeners.onRelease = this.onRelease.bind(this), this.body.eventListeners.onContext = this.onContext.bind(this), this.touchTime = 0, this.drag = {}, this.pinch = {}, this.popup = void 0, this.popupObj = void 0, this.popupTimer = void 0, this.body.functions.getPointer = this.getPointer.bind(this), this.options = {}, this.defaultOptions = {
                    dragNodes: !0,
                    dragView: !0,
                    hover: !1,
                    keyboard: {enabled: !1, speed: {x: 10, y: 10, zoom: .02}, bindToWindow: !0},
                    navigationButtons: !1,
                    tooltipDelay: 300,
                    zoomView: !0
                }, l.extend(this.options, this.defaultOptions), this.bindEventListeners()
            }

            return s(t, [{
                key: "bindEventListeners", value: function () {
                    var t = this;
                    this.body.emitter.on("destroy", function () {
                        clearTimeout(t.popupTimer), delete t.body.functions.getPointer
                    })
                }
            }, {
                key: "setOptions", value: function (t) {
                    if (void 0 !== t) {
                        var e = ["hideEdgesOnDrag", "hideNodesOnDrag", "keyboard", "multiselect", "selectable", "selectConnectedEdges"];
                        l.selectiveNotDeepExtend(e, this.options, t), l.mergeOptions(this.options, t, "keyboard"), t.tooltip && (l.extend(this.options.tooltip, t.tooltip), t.tooltip.color && (this.options.tooltip.color = l.parseColor(t.tooltip.color)))
                    }
                    this.navigationHandler.setOptions(this.options)
                }
            }, {
                key: "getPointer", value: function (t) {
                    return {
                        x: t.x - l.getAbsoluteLeft(this.canvas.frame.canvas),
                        y: t.y - l.getAbsoluteTop(this.canvas.frame.canvas)
                    }
                }
            }, {
                key: "onTouch", value: function (t) {
                    (new Date).valueOf() - this.touchTime > 50 && (this.drag.pointer = this.getPointer(t.center), this.drag.pinched = !1, this.pinch.scale = this.body.view.scale, this.touchTime = (new Date).valueOf())
                }
            }, {
                key: "onTap", value: function (t) {
                    var e = this.getPointer(t.center), i = this.selectionHandler.options.multiselect && (t.changedPointers[0].ctrlKey || t.changedPointers[0].metaKey);
                    this.checkSelectionChanges(e, t, i), this.selectionHandler._generateClickEvent("click", t, e)
                }
            }, {
                key: "onDoubleTap", value: function (t) {
                    var e = this.getPointer(t.center);
                    this.selectionHandler._generateClickEvent("doubleClick", t, e)
                }
            }, {
                key: "onHold", value: function (t) {
                    var e = this.getPointer(t.center), i = this.selectionHandler.options.multiselect;
                    this.checkSelectionChanges(e, t, i), this.selectionHandler._generateClickEvent("click", t, e), this.selectionHandler._generateClickEvent("hold", t, e)
                }
            }, {
                key: "onRelease", value: function (t) {
                    if ((new Date).valueOf() - this.touchTime > 10) {
                        var e = this.getPointer(t.center);
                        this.selectionHandler._generateClickEvent("release", t, e), this.touchTime = (new Date).valueOf()
                    }
                }
            }, {
                key: "onContext", value: function (t) {
                    var e = this.getPointer({x: t.clientX, y: t.clientY});
                    this.selectionHandler._generateClickEvent("oncontext", t, e)
                }
            }, {
                key: "checkSelectionChanges", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = this.selectionHandler._getSelectedEdgeCount(), n = this.selectionHandler._getSelectedNodeCount(), s = this.selectionHandler.getSelection(), r = void 0;
                    r = i === !0 ? this.selectionHandler.selectAdditionalOnPoint(t) : this.selectionHandler.selectOnPoint(t);
                    var a = this.selectionHandler._getSelectedEdgeCount(), h = this.selectionHandler._getSelectedNodeCount(), d = this.selectionHandler.getSelection(), l = this._determineIfDifferent(s, d), c = l.nodesChanged, u = l.edgesChanged, p = !1;
                    h - n > 0 ? (this.selectionHandler._generateClickEvent("selectNode", e, t), r = !0, p = !0) : c === !0 && h > 0 ? (this.selectionHandler._generateClickEvent("deselectNode", e, t, s), this.selectionHandler._generateClickEvent("selectNode", e, t), p = !0, r = !0) : h - n < 0 && (this.selectionHandler._generateClickEvent("deselectNode", e, t, s), r = !0), a - o > 0 && p === !1 ? (this.selectionHandler._generateClickEvent("selectEdge", e, t), r = !0) : a > 0 && u === !0 ? (this.selectionHandler._generateClickEvent("deselectEdge", e, t, s), this.selectionHandler._generateClickEvent("selectEdge", e, t), r = !0) : a - o < 0 && (this.selectionHandler._generateClickEvent("deselectEdge", e, t, s), r = !0), r === !0 && this.selectionHandler._generateClickEvent("select", e, t)
                }
            }, {
                key: "_determineIfDifferent", value: function (t, e) {
                    for (var i = !1, o = !1, n = 0; n < t.nodes.length; n++)e.nodes.indexOf(t.nodes[n]) === -1 && (i = !0);
                    for (var s = 0; s < e.nodes.length; s++)t.nodes.indexOf(t.nodes[s]) === -1 && (i = !0);
                    for (var r = 0; r < t.edges.length; r++)e.edges.indexOf(t.edges[r]) === -1 && (o = !0);
                    for (var a = 0; a < e.edges.length; a++)t.edges.indexOf(t.edges[a]) === -1 && (o = !0);
                    return {nodesChanged: i, edgesChanged: o}
                }
            }, {
                key: "onDragStart", value: function (t) {
                    void 0 === this.drag.pointer && this.onTouch(t);
                    var e = this.selectionHandler.getNodeAt(this.drag.pointer);
                    if (this.drag.dragging = !0, this.drag.selection = [], this.drag.translation = l.extend({}, this.body.view.translation), this.drag.nodeId = void 0, void 0 !== e && this.options.dragNodes === !0) {
                        this.drag.nodeId = e.id, e.isSelected() === !1 && (this.selectionHandler.unselectAll(), this.selectionHandler.selectObject(e)), this.selectionHandler._generateClickEvent("dragStart", t, this.drag.pointer);
                        var i = this.selectionHandler.selectionObj.nodes;
                        for (var o in i)if (i.hasOwnProperty(o)) {
                            var n = i[o], s = {
                                id: n.id,
                                node: n,
                                x: n.x,
                                y: n.y,
                                xFixed: n.options.fixed.x,
                                yFixed: n.options.fixed.y
                            };
                            n.options.fixed.x = !0, n.options.fixed.y = !0, this.drag.selection.push(s)
                        }
                    } else this.selectionHandler._generateClickEvent("dragStart", t, this.drag.pointer, void 0, !0)
                }
            }, {
                key: "onDrag", value: function (t) {
                    var e = this;
                    if (this.drag.pinched !== !0) {
                        this.body.emitter.emit("unlockNode");
                        var i = this.getPointer(t.center), o = this.drag.selection;
                        if (o && o.length && this.options.dragNodes === !0)!function () {
                            e.selectionHandler._generateClickEvent("dragging", t, i);
                            var n = i.x - e.drag.pointer.x, s = i.y - e.drag.pointer.y;
                            o.forEach(function (t) {
                                var i = t.node;
                                t.xFixed === !1 && (i.x = e.canvas._XconvertDOMtoCanvas(e.canvas._XconvertCanvasToDOM(t.x) + n)), t.yFixed === !1 && (i.y = e.canvas._YconvertDOMtoCanvas(e.canvas._YconvertCanvasToDOM(t.y) + s))
                            }), e.body.emitter.emit("startSimulation")
                        }(); else if (this.options.dragView === !0) {
                            if (this.selectionHandler._generateClickEvent("dragging", t, i, void 0, !0), void 0 === this.drag.pointer)return void this.onDragStart(t);
                            var n = i.x - this.drag.pointer.x, s = i.y - this.drag.pointer.y;
                            this.body.view.translation = {
                                x: this.drag.translation.x + n,
                                y: this.drag.translation.y + s
                            }, this.body.emitter.emit("_redraw")
                        }
                    }
                }
            }, {
                key: "onDragEnd", value: function (t) {
                    this.drag.dragging = !1;
                    var e = this.drag.selection;
                    e && e.length ? (e.forEach(function (t) {
                        t.node.options.fixed.x = t.xFixed, t.node.options.fixed.y = t.yFixed
                    }), this.selectionHandler._generateClickEvent("dragEnd", t, this.getPointer(t.center)), this.body.emitter.emit("startSimulation")) : (this.selectionHandler._generateClickEvent("dragEnd", t, this.getPointer(t.center), void 0, !0), this.body.emitter.emit("_requestRedraw"))
                }
            }, {
                key: "onPinch", value: function (t) {
                    var e = this.getPointer(t.center);
                    this.drag.pinched = !0, void 0 === this.pinch.scale && (this.pinch.scale = 1);
                    var i = this.pinch.scale * t.scale;
                    this.zoom(i, e)
                }
            }, {
                key: "zoom", value: function (t, e) {
                    if (this.options.zoomView === !0) {
                        var i = this.body.view.scale;
                        t < 1e-5 && (t = 1e-5), t > 10 && (t = 10);
                        var o = void 0;
                        void 0 !== this.drag && this.drag.dragging === !0 && (o = this.canvas.DOMtoCanvas(this.drag.pointer));
                        var n = this.body.view.translation, s = t / i, r = (1 - s) * e.x + n.x * s, a = (1 - s) * e.y + n.y * s;
                        if (this.body.view.scale = t, this.body.view.translation = {x: r, y: a}, void 0 != o) {
                            var h = this.canvas.canvasToDOM(o);
                            this.drag.pointer.x = h.x, this.drag.pointer.y = h.y
                        }
                        this.body.emitter.emit("_requestRedraw"), i < t ? this.body.emitter.emit("zoom", {
                            direction: "+",
                            scale: this.body.view.scale
                        }) : this.body.emitter.emit("zoom", {direction: "-", scale: this.body.view.scale})
                    }
                }
            }, {
                key: "onMouseWheel", value: function (t) {
                    if (this.options.zoomView === !0) {
                        var e = 0;
                        if (t.wheelDelta ? e = t.wheelDelta / 120 : t.detail && (e = -t.detail / 3), 0 !== e) {
                            var i = this.body.view.scale, o = e / 10;
                            e < 0 && (o /= 1 - o), i *= 1 + o;
                            var n = this.getPointer({x: t.clientX, y: t.clientY});
                            this.zoom(i, n)
                        }
                        t.preventDefault()
                    }
                }
            }, {
                key: "onMouseMove", value: function (t) {
                    var e = this, i = this.getPointer({x: t.clientX, y: t.clientY}), o = !1;
                    if (void 0 !== this.popup && (this.popup.hidden === !1 && this._checkHidePopup(i), this.popup.hidden === !1 && (o = !0,
                            this.popup.setPosition(i.x + 3, i.y - 5), this.popup.show())), this.options.keyboard.bindToWindow === !1 && this.options.keyboard.enabled === !0 && this.canvas.frame.focus(), o === !1 && (void 0 !== this.popupTimer && (clearInterval(this.popupTimer), this.popupTimer = void 0), this.drag.dragging || (this.popupTimer = setTimeout(function () {
                            return e._checkShowPopup(i)
                        }, this.options.tooltipDelay))), this.options.hover === !0) {
                        var n = this.selectionHandler.getNodeAt(i);
                        void 0 === n && (n = this.selectionHandler.getEdgeAt(i)), this.selectionHandler.hoverObject(n)
                    }
                }
            }, {
                key: "_checkShowPopup", value: function (t) {
                    var e = this.canvas._XconvertDOMtoCanvas(t.x), i = this.canvas._YconvertDOMtoCanvas(t.y), o = {
                        left: e,
                        top: i,
                        right: e,
                        bottom: i
                    }, n = void 0 === this.popupObj ? void 0 : this.popupObj.id, s = !1, r = "node";
                    if (void 0 === this.popupObj) {
                        for (var a = this.body.nodeIndices, h = this.body.nodes, l = void 0, c = [], u = 0; u < a.length; u++)l = h[a[u]], l.isOverlappingWith(o) === !0 && void 0 !== l.getTitle() && c.push(a[u]);
                        c.length > 0 && (this.popupObj = h[c[c.length - 1]], s = !0)
                    }
                    if (void 0 === this.popupObj && s === !1) {
                        for (var p = this.body.edgeIndices, f = this.body.edges, m = void 0, v = [], g = 0; g < p.length; g++)m = f[p[g]], m.isOverlappingWith(o) === !0 && m.connected === !0 && void 0 !== m.getTitle() && v.push(p[g]);
                        v.length > 0 && (this.popupObj = f[v[v.length - 1]], r = "edge")
                    }
                    void 0 !== this.popupObj ? this.popupObj.id !== n && (void 0 === this.popup && (this.popup = new d.default(this.canvas.frame)), this.popup.popupTargetType = r, this.popup.popupTargetId = this.popupObj.id, this.popup.setPosition(t.x + 3, t.y - 5), this.popup.setText(this.popupObj.getTitle()), this.popup.show(), this.body.emitter.emit("showPopup", this.popupObj.id)) : void 0 !== this.popup && (this.popup.hide(), this.body.emitter.emit("hidePopup"))
                }
            }, {
                key: "_checkHidePopup", value: function (t) {
                    var e = this.selectionHandler._pointerToPositionObject(t), i = !1;
                    if ("node" === this.popup.popupTargetType) {
                        if (void 0 !== this.body.nodes[this.popup.popupTargetId] && (i = this.body.nodes[this.popup.popupTargetId].isOverlappingWith(e), i === !0)) {
                            var o = this.selectionHandler.getNodeAt(t);
                            i = o.id === this.popup.popupTargetId
                        }
                    } else void 0 === this.selectionHandler.getNodeAt(t) && void 0 !== this.body.edges[this.popup.popupTargetId] && (i = this.body.edges[this.popup.popupTargetId].isOverlappingWith(e));
                    i === !1 && (this.popupObj = void 0, this.popup.hide(), this.body.emitter.emit("hidePopup"))
                }
            }]), t
        }();
        e.default = c
    }, function (t, e, i) {
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), s = (i(1), i(22)), r = i(30), a = i(25), h = function () {
            function t(e, i) {
                var n = this;
                o(this, t), this.body = e, this.canvas = i, this.iconsCreated = !1, this.navigationHammers = [], this.boundFunctions = {}, this.touchTime = 0, this.activated = !1, this.body.emitter.on("activate", function () {
                    n.activated = !0, n.configureKeyboardBindings()
                }), this.body.emitter.on("deactivate", function () {
                    n.activated = !1, n.configureKeyboardBindings()
                }), this.body.emitter.on("destroy", function () {
                    void 0 !== n.keycharm && n.keycharm.destroy()
                }), this.options = {}
            }

            return n(t, [{
                key: "setOptions", value: function (t) {
                    void 0 !== t && (this.options = t, this.create())
                }
            }, {
                key: "create", value: function () {
                    this.options.navigationButtons === !0 ? this.iconsCreated === !1 && this.loadNavigationElements() : this.iconsCreated === !0 && this.cleanNavigation(), this.configureKeyboardBindings()
                }
            }, {
                key: "cleanNavigation", value: function () {
                    if (0 != this.navigationHammers.length) {
                        for (var t = 0; t < this.navigationHammers.length; t++)this.navigationHammers[t].destroy();
                        this.navigationHammers = []
                    }
                    this.navigationDOM && this.navigationDOM.wrapper && this.navigationDOM.wrapper.parentNode && this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper), this.iconsCreated = !1
                }
            }, {
                key: "loadNavigationElements", value: function () {
                    var t = this;
                    this.cleanNavigation(), this.navigationDOM = {};
                    var e = ["up", "down", "left", "right", "zoomIn", "zoomOut", "zoomExtends"], i = ["_moveUp", "_moveDown", "_moveLeft", "_moveRight", "_zoomIn", "_zoomOut", "_fit"];
                    this.navigationDOM.wrapper = document.createElement("div"), this.navigationDOM.wrapper.className = "vis-navigation", this.canvas.frame.appendChild(this.navigationDOM.wrapper);
                    for (var o = 0; o < e.length; o++) {
                        this.navigationDOM[e[o]] = document.createElement("div"), this.navigationDOM[e[o]].className = "vis-button vis-" + e[o], this.navigationDOM.wrapper.appendChild(this.navigationDOM[e[o]]);
                        var n = new s(this.navigationDOM[e[o]]);
                        "_fit" === i[o] ? r.onTouch(n, this._fit.bind(this)) : r.onTouch(n, this.bindToRedraw.bind(this, i[o])), this.navigationHammers.push(n)
                    }
                    var a = new s(this.canvas.frame);
                    r.onRelease(a, function () {
                        t._stopMovement()
                    }), this.navigationHammers.push(a), this.iconsCreated = !0
                }
            }, {
                key: "bindToRedraw", value: function (t) {
                    void 0 === this.boundFunctions[t] && (this.boundFunctions[t] = this[t].bind(this), this.body.emitter.on("initRedraw", this.boundFunctions[t]), this.body.emitter.emit("_startRendering"))
                }
            }, {
                key: "unbindFromRedraw", value: function (t) {
                    void 0 !== this.boundFunctions[t] && (this.body.emitter.off("initRedraw", this.boundFunctions[t]), this.body.emitter.emit("_stopRendering"), delete this.boundFunctions[t])
                }
            }, {
                key: "_fit", value: function () {
                    (new Date).valueOf() - this.touchTime > 700 && (this.body.emitter.emit("fit", {duration: 700}), this.touchTime = (new Date).valueOf())
                }
            }, {
                key: "_stopMovement", value: function () {
                    for (var t in this.boundFunctions)this.boundFunctions.hasOwnProperty(t) && (this.body.emitter.off("initRedraw", this.boundFunctions[t]), this.body.emitter.emit("_stopRendering"));
                    this.boundFunctions = {}
                }
            }, {
                key: "_moveUp", value: function () {
                    this.body.view.translation.y += this.options.keyboard.speed.y
                }
            }, {
                key: "_moveDown", value: function () {
                    this.body.view.translation.y -= this.options.keyboard.speed.y
                }
            }, {
                key: "_moveLeft", value: function () {
                    this.body.view.translation.x += this.options.keyboard.speed.x
                }
            }, {
                key: "_moveRight", value: function () {
                    this.body.view.translation.x -= this.options.keyboard.speed.x
                }
            }, {
                key: "_zoomIn", value: function () {
                    var t = this.body.view.scale, e = this.body.view.scale * (1 + this.options.keyboard.speed.zoom), i = this.body.view.translation, o = e / t, n = (1 - o) * this.canvas.canvasViewCenter.x + i.x * o, s = (1 - o) * this.canvas.canvasViewCenter.y + i.y * o;
                    this.body.view.scale = e, this.body.view.translation = {
                        x: n,
                        y: s
                    }, this.body.emitter.emit("zoom", {direction: "+", scale: this.body.view.scale})
                }
            }, {
                key: "_zoomOut", value: function () {
                    var t = this.body.view.scale, e = this.body.view.scale / (1 + this.options.keyboard.speed.zoom), i = this.body.view.translation, o = e / t, n = (1 - o) * this.canvas.canvasViewCenter.x + i.x * o, s = (1 - o) * this.canvas.canvasViewCenter.y + i.y * o;
                    this.body.view.scale = e, this.body.view.translation = {
                        x: n,
                        y: s
                    }, this.body.emitter.emit("zoom", {direction: "-", scale: this.body.view.scale})
                }
            }, {
                key: "configureKeyboardBindings", value: function () {
                    var t = this;
                    void 0 !== this.keycharm && this.keycharm.destroy(), this.options.keyboard.enabled === !0 && (this.options.keyboard.bindToWindow === !0 ? this.keycharm = a({
                        container: window,
                        preventDefault: !0
                    }) : this.keycharm = a({
                        container: this.canvas.frame,
                        preventDefault: !0
                    }), this.keycharm.reset(), this.activated === !0 && (this.keycharm.bind("up", function () {
                        t.bindToRedraw("_moveUp")
                    }, "keydown"), this.keycharm.bind("down", function () {
                        t.bindToRedraw("_moveDown")
                    }, "keydown"), this.keycharm.bind("left", function () {
                        t.bindToRedraw("_moveLeft")
                    }, "keydown"), this.keycharm.bind("right", function () {
                        t.bindToRedraw("_moveRight")
                    }, "keydown"), this.keycharm.bind("=", function () {
                        t.bindToRedraw("_zoomIn")
                    }, "keydown"), this.keycharm.bind("num+", function () {
                        t.bindToRedraw("_zoomIn")
                    }, "keydown"), this.keycharm.bind("num-", function () {
                        t.bindToRedraw("_zoomOut")
                    }, "keydown"), this.keycharm.bind("-", function () {
                        t.bindToRedraw("_zoomOut")
                    }, "keydown"), this.keycharm.bind("[", function () {
                        t.bindToRedraw("_zoomOut")
                    }, "keydown"), this.keycharm.bind("]", function () {
                        t.bindToRedraw("_zoomIn")
                    }, "keydown"), this.keycharm.bind("pageup", function () {
                        t.bindToRedraw("_zoomIn")
                    }, "keydown"), this.keycharm.bind("pagedown", function () {
                        t.bindToRedraw("_zoomOut")
                    }, "keydown"), this.keycharm.bind("up", function () {
                        t.unbindFromRedraw("_moveUp")
                    }, "keyup"), this.keycharm.bind("down", function () {
                        t.unbindFromRedraw("_moveDown")
                    }, "keyup"), this.keycharm.bind("left", function () {
                        t.unbindFromRedraw("_moveLeft")
                    }, "keyup"), this.keycharm.bind("right", function () {
                        t.unbindFromRedraw("_moveRight")
                    }, "keyup"), this.keycharm.bind("=", function () {
                        t.unbindFromRedraw("_zoomIn")
                    }, "keyup"), this.keycharm.bind("num+", function () {
                        t.unbindFromRedraw("_zoomIn")
                    }, "keyup"), this.keycharm.bind("num-", function () {
                        t.unbindFromRedraw("_zoomOut")
                    }, "keyup"), this.keycharm.bind("-", function () {
                        t.unbindFromRedraw("_zoomOut")
                    }, "keyup"), this.keycharm.bind("[", function () {
                        t.unbindFromRedraw("_zoomOut")
                    }, "keyup"), this.keycharm.bind("]", function () {
                        t.unbindFromRedraw("_zoomIn")
                    }, "keyup"), this.keycharm.bind("pageup", function () {
                        t.unbindFromRedraw("_zoomIn")
                    }, "keyup"), this.keycharm.bind("pagedown", function () {
                        t.unbindFromRedraw("_zoomOut")
                    }, "keyup")))
                }
            }]), t
        }();
        e.default = h
    }, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), n = function () {
            function t(e) {
                i(this, t), this.container = e, this.x = 0, this.y = 0, this.padding = 5, this.hidden = !1, this.frame = document.createElement("div"), this.frame.className = "vis-network-tooltip", this.container.appendChild(this.frame)
            }

            return o(t, [{
                key: "setPosition", value: function (t, e) {
                    this.x = parseInt(t), this.y = parseInt(e)
                }
            }, {
                key: "setText", value: function (t) {
                    t instanceof Element ? (this.frame.innerHTML = "", this.frame.appendChild(t)) : this.frame.innerHTML = t
                }
            }, {
                key: "show", value: function (t) {
                    if (void 0 === t && (t = !0), t === !0) {
                        var e = this.frame.clientHeight, i = this.frame.clientWidth, o = this.frame.parentNode.clientHeight, n = this.frame.parentNode.clientWidth, s = this.y - e;
                        s + e + this.padding > o && (s = o - e - this.padding), s < this.padding && (s = this.padding);
                        var r = this.x;
                        r + i + this.padding > n && (r = n - i - this.padding), r < this.padding && (r = this.padding), this.frame.style.left = r + "px", this.frame.style.top = s + "px", this.frame.style.visibility = "visible", this.hidden = !1
                    } else this.hide()
                }
            }, {
                key: "hide", value: function () {
                    this.hidden = !0, this.frame.style.visibility = "hidden"
                }
            }]), t
        }();
        e.default = n
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), r = i(67), a = o(r), h = i(87), d = o(h), l = i(1), c = function () {
            function t(e, i) {
                var o = this;
                n(this, t), this.body = e, this.canvas = i, this.selectionObj = {
                    nodes: [],
                    edges: []
                }, this.hoverObj = {nodes: {}, edges: {}}, this.options = {}, this.defaultOptions = {
                    multiselect: !1,
                    selectable: !0,
                    selectConnectedEdges: !0,
                    hoverConnectedEdges: !0
                }, l.extend(this.options, this.defaultOptions), this.body.emitter.on("_dataChanged", function () {
                    o.updateSelection()
                })
            }

            return s(t, [{
                key: "setOptions", value: function (t) {
                    if (void 0 !== t) {
                        var e = ["multiselect", "hoverConnectedEdges", "selectable", "selectConnectedEdges"];
                        l.selectiveDeepExtend(e, this.options, t)
                    }
                }
            }, {
                key: "selectOnPoint", value: function (t) {
                    var e = !1;
                    if (this.options.selectable === !0) {
                        var i = this.getNodeAt(t) || this.getEdgeAt(t);
                        this.unselectAll(), void 0 !== i && (e = this.selectObject(i)), this.body.emitter.emit("_requestRedraw")
                    }
                    return e
                }
            }, {
                key: "selectAdditionalOnPoint", value: function (t) {
                    var e = !1;
                    if (this.options.selectable === !0) {
                        var i = this.getNodeAt(t) || this.getEdgeAt(t);
                        void 0 !== i && (e = !0, i.isSelected() === !0 ? this.deselectObject(i) : this.selectObject(i), this.body.emitter.emit("_requestRedraw"))
                    }
                    return e
                }
            }, {
                key: "_generateClickEvent", value: function (t, e, i, o) {
                    var n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s = void 0;
                    s = n === !0 ? {nodes: [], edges: []} : this.getSelection(), s.pointer = {
                        DOM: {x: i.x, y: i.y},
                        canvas: this.canvas.DOMtoCanvas(i)
                    }, s.event = e, void 0 !== o && (s.previousSelection = o), this.body.emitter.emit(t, s)
                }
            }, {
                key: "selectObject", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.selectConnectedEdges;
                    return void 0 !== t && (t instanceof a.default && e === !0 && this._selectConnectedEdges(t), t.select(), this._addToSelection(t), !0)
                }
            }, {
                key: "deselectObject", value: function (t) {
                    t.isSelected() === !0 && (t.selected = !1, this._removeFromSelection(t))
                }
            }, {
                key: "_getAllNodesOverlappingWith", value: function (t) {
                    for (var e = [], i = this.body.nodes, o = 0; o < this.body.nodeIndices.length; o++) {
                        var n = this.body.nodeIndices[o];
                        i[n].isOverlappingWith(t) && e.push(n)
                    }
                    return e
                }
            }, {
                key: "_pointerToPositionObject", value: function (t) {
                    var e = this.canvas.DOMtoCanvas(t);
                    return {left: e.x - 1, top: e.y + 1, right: e.x + 1, bottom: e.y - 1}
                }
            }, {
                key: "getNodeAt", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = this._pointerToPositionObject(t), o = this._getAllNodesOverlappingWith(i);
                    return o.length > 0 ? e === !0 ? this.body.nodes[o[o.length - 1]] : o[o.length - 1] : void 0
                }
            }, {
                key: "_getEdgesOverlappingWith", value: function (t, e) {
                    for (var i = this.body.edges, o = 0; o < this.body.edgeIndices.length; o++) {
                        var n = this.body.edgeIndices[o];
                        i[n].isOverlappingWith(t) && e.push(n)
                    }
                }
            }, {
                key: "_getAllEdgesOverlappingWith", value: function (t) {
                    var e = [];
                    return this._getEdgesOverlappingWith(t, e), e
                }
            }, {
                key: "getEdgeAt", value: function (t) {
                    for (var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = this.canvas.DOMtoCanvas(t), o = 10, n = null, s = this.body.edges, r = 0; r < this.body.edgeIndices.length; r++) {
                        var a = this.body.edgeIndices[r], h = s[a];
                        if (h.connected) {
                            var d = h.from.x, l = h.from.y, c = h.to.x, u = h.to.y, p = h.edgeType.getDistanceToEdge(d, l, c, u, i.x, i.y);
                            p < o && (n = a, o = p)
                        }
                    }
                    return n ? e === !0 ? this.body.edges[n] : n : void 0
                }
            }, {
                key: "_addToSelection", value: function (t) {
                    t instanceof a.default ? this.selectionObj.nodes[t.id] = t : this.selectionObj.edges[t.id] = t
                }
            }, {
                key: "_addToHover", value: function (t) {
                    t instanceof a.default ? this.hoverObj.nodes[t.id] = t : this.hoverObj.edges[t.id] = t
                }
            }, {
                key: "_removeFromSelection", value: function (t) {
                    t instanceof a.default ? (delete this.selectionObj.nodes[t.id], this._unselectConnectedEdges(t)) : delete this.selectionObj.edges[t.id]
                }
            }, {
                key: "unselectAll", value: function () {
                    for (var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t) && this.selectionObj.nodes[t].unselect();
                    for (var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e) && this.selectionObj.edges[e].unselect();
                    this.selectionObj = {nodes: {}, edges: {}}
                }
            }, {
                key: "_getSelectedNodeCount", value: function () {
                    var t = 0;
                    for (var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e) && (t += 1);
                    return t
                }
            }, {
                key: "_getSelectedNode", value: function () {
                    for (var t in this.selectionObj.nodes)if (this.selectionObj.nodes.hasOwnProperty(t))return this.selectionObj.nodes[t]
                }
            }, {
                key: "_getSelectedEdge", value: function () {
                    for (var t in this.selectionObj.edges)if (this.selectionObj.edges.hasOwnProperty(t))return this.selectionObj.edges[t]
                }
            }, {
                key: "_getSelectedEdgeCount", value: function () {
                    var t = 0;
                    for (var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e) && (t += 1);
                    return t
                }
            }, {
                key: "_getSelectedObjectCount", value: function () {
                    var t = 0;
                    for (var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e) && (t += 1);
                    for (var i in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(i) && (t += 1);
                    return t
                }
            }, {
                key: "_selectionIsEmpty", value: function () {
                    for (var t in this.selectionObj.nodes)if (this.selectionObj.nodes.hasOwnProperty(t))return !1;
                    for (var e in this.selectionObj.edges)if (this.selectionObj.edges.hasOwnProperty(e))return !1;
                    return !0
                }
            }, {
                key: "_clusterInSelection", value: function () {
                    for (var t in this.selectionObj.nodes)if (this.selectionObj.nodes.hasOwnProperty(t) && this.selectionObj.nodes[t].clusterSize > 1)return !0;
                    return !1
                }
            }, {
                key: "_selectConnectedEdges", value: function (t) {
                    for (var e = 0; e < t.edges.length; e++) {
                        var i = t.edges[e];
                        i.select(), this._addToSelection(i)
                    }
                }
            }, {
                key: "_hoverConnectedEdges", value: function (t) {
                    for (var e = 0; e < t.edges.length; e++) {
                        var i = t.edges[e];
                        i.hover = !0, this._addToHover(i)
                    }
                }
            }, {
                key: "_unselectConnectedEdges", value: function (t) {
                    for (var e = 0; e < t.edges.length; e++) {
                        var i = t.edges[e];
                        i.unselect(), this._removeFromSelection(i)
                    }
                }
            }, {
                key: "blurObject", value: function (t) {
                    t.hover === !0 && (t.hover = !1, t instanceof a.default ? this.body.emitter.emit("blurNode", {node: t.id}) : this.body.emitter.emit("blurEdge", {edge: t.id}))
                }
            }, {
                key: "hoverObject", value: function (t) {
                    var e = !1;
                    for (var i in this.hoverObj.nodes)this.hoverObj.nodes.hasOwnProperty(i) && (void 0 === t || t instanceof a.default && t.id != i || t instanceof d.default) && (this.blurObject(this.hoverObj.nodes[i]), delete this.hoverObj.nodes[i], e = !0);
                    for (var o in this.hoverObj.edges)this.hoverObj.edges.hasOwnProperty(o) && (e === !0 ? (this.hoverObj.edges[o].hover = !1, delete this.hoverObj.edges[o]) : (void 0 === t || t instanceof d.default) && (this.blurObject(this.hoverObj.edges[o]), delete this.hoverObj.edges[o], e = !0));
                    void 0 !== t && (t.hover === !1 && (t.hover = !0, this._addToHover(t), e = !0, t instanceof a.default ? this.body.emitter.emit("hoverNode", {node: t.id}) : this.body.emitter.emit("hoverEdge", {edge: t.id})), t instanceof a.default && this.options.hoverConnectedEdges === !0 && this._hoverConnectedEdges(t)), e === !0 && this.body.emitter.emit("_requestRedraw")
                }
            }, {
                key: "getSelection", value: function () {
                    var t = this.getSelectedNodes(), e = this.getSelectedEdges();
                    return {nodes: t, edges: e}
                }
            }, {
                key: "getSelectedNodes", value: function () {
                    var t = [];
                    if (this.options.selectable === !0)for (var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e) && t.push(this.selectionObj.nodes[e].id);
                    return t
                }
            }, {
                key: "getSelectedEdges", value: function () {
                    var t = [];
                    if (this.options.selectable === !0)for (var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e) && t.push(this.selectionObj.edges[e].id);
                    return t
                }
            }, {
                key: "setSelection", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = void 0, o = void 0;
                    if (!t || !t.nodes && !t.edges)throw"Selection must be an object with nodes and/or edges properties";
                    if ((e.unselectAll || void 0 === e.unselectAll) && this.unselectAll(), t.nodes)for (i = 0; i < t.nodes.length; i++) {
                        o = t.nodes[i];
                        var n = this.body.nodes[o];
                        if (!n)throw new RangeError('Node with id "' + o + '" not found');
                        this.selectObject(n, e.highlightEdges)
                    }
                    if (t.edges)for (i = 0; i < t.edges.length; i++) {
                        o = t.edges[i];
                        var s = this.body.edges[o];
                        if (!s)throw new RangeError('Edge with id "' + o + '" not found');
                        this.selectObject(s)
                    }
                    this.body.emitter.emit("_requestRedraw")
                }
            }, {
                key: "selectNodes", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (!t || void 0 === t.length)throw"Selection must be an array with ids";
                    this.setSelection({nodes: t}, {highlightEdges: e})
                }
            }, {
                key: "selectEdges", value: function (t) {
                    if (!t || void 0 === t.length)throw"Selection must be an array with ids";
                    this.setSelection({edges: t})
                }
            }, {
                key: "updateSelection", value: function () {
                    for (var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t) && (this.body.nodes.hasOwnProperty(t) || delete this.selectionObj.nodes[t]);
                    for (var e in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(e) && (this.body.edges.hasOwnProperty(e) || delete this.selectionObj.edges[e])
                }
            }]), t
        }();
        e.default = c
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = function () {
            function t(t, e) {
                var i = [], o = !0, n = !1, s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                } catch (t) {
                    n = !0, s = t
                } finally {
                    try {
                        !o && a.return && a.return()
                    } finally {
                        if (n)throw s
                    }
                }
                return i
            }

            return function (e, i) {
                if (Array.isArray(e))return e;
                if (Symbol.iterator in Object(e))return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, a = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), h = i(105), d = o(h), l = i(1), c = function () {
            function t(e) {
                n(this, t), this.body = e, this.initialRandomSeed = Math.round(1e6 * Math.random()), this.randomSeed = this.initialRandomSeed, this.setPhysics = !1, this.options = {}, this.optionsBackup = {physics: {}}, this.defaultOptions = {
                    randomSeed: void 0,
                    improvedLayout: !0,
                    hierarchical: {
                        enabled: !1,
                        levelSeparation: 150,
                        nodeSpacing: 100,
                        treeSpacing: 200,
                        blockShifting: !0,
                        edgeMinimization: !0,
                        parentCentralization: !0,
                        direction: "UD",
                        sortMethod: "hubsize"
                    }
                }, l.extend(this.options, this.defaultOptions), this.bindEventListeners()
            }

            return a(t, [{
                key: "bindEventListeners", value: function () {
                    var t = this;
                    this.body.emitter.on("_dataChanged", function () {
                        t.setupHierarchicalLayout()
                    }), this.body.emitter.on("_dataLoaded", function () {
                        t.layoutNetwork()
                    }), this.body.emitter.on("_resetHierarchicalLayout", function () {
                        t.setupHierarchicalLayout()
                    })
                }
            }, {
                key: "setOptions", value: function (t, e) {
                    if (void 0 !== t) {
                        var i = this.options.hierarchical.enabled;
                        if (l.selectiveDeepExtend(["randomSeed", "improvedLayout"], this.options, t), l.mergeOptions(this.options, t, "hierarchical"), void 0 !== t.randomSeed && (this.initialRandomSeed = t.randomSeed), this.options.hierarchical.enabled === !0)return i === !0 && this.body.emitter.emit("refresh", !0), "RL" === this.options.hierarchical.direction || "DU" === this.options.hierarchical.direction ? this.options.hierarchical.levelSeparation > 0 && (this.options.hierarchical.levelSeparation *= -1) : this.options.hierarchical.levelSeparation < 0 && (this.options.hierarchical.levelSeparation *= -1), this.body.emitter.emit("_resetHierarchicalLayout"), this.adaptAllOptionsForHierarchicalLayout(e);
                        if (i === !0)return this.body.emitter.emit("refresh"), l.deepExtend(e, this.optionsBackup)
                    }
                    return e
                }
            }, {
                key: "adaptAllOptionsForHierarchicalLayout", value: function (t) {
                    if (this.options.hierarchical.enabled === !0) {
                        void 0 === t.physics || t.physics === !0 ? (t.physics = {
                            enabled: void 0 === this.optionsBackup.physics.enabled || this.optionsBackup.physics.enabled,
                            solver: "hierarchicalRepulsion"
                        }, this.optionsBackup.physics.enabled = void 0 === this.optionsBackup.physics.enabled || this.optionsBackup.physics.enabled, this.optionsBackup.physics.solver = this.optionsBackup.physics.solver || "barnesHut") : "object" === r(t.physics) ? (this.optionsBackup.physics.enabled = void 0 === t.physics.enabled || t.physics.enabled, this.optionsBackup.physics.solver = t.physics.solver || "barnesHut", t.physics.solver = "hierarchicalRepulsion") : t.physics !== !1 && (this.optionsBackup.physics.solver = "barnesHut", t.physics = {solver: "hierarchicalRepulsion"});
                        var e = "horizontal";
                        "RL" !== this.options.hierarchical.direction && "LR" !== this.options.hierarchical.direction || (e = "vertical"), void 0 === t.edges ? (this.optionsBackup.edges = {
                            smooth: {
                                enabled: !0,
                                type: "dynamic"
                            }
                        }, t.edges = {smooth: !1}) : void 0 === t.edges.smooth ? (this.optionsBackup.edges = {
                            smooth: {
                                enabled: !0,
                                type: "dynamic"
                            }
                        }, t.edges.smooth = !1) : "boolean" == typeof t.edges.smooth ? (this.optionsBackup.edges = {smooth: t.edges.smooth}, t.edges.smooth = {
                            enabled: t.edges.smooth,
                            type: e
                        }) : (void 0 !== t.edges.smooth.type && "dynamic" !== t.edges.smooth.type && (e = t.edges.smooth.type), this.optionsBackup.edges = {
                            smooth: void 0 === t.edges.smooth.enabled || t.edges.smooth.enabled,
                            type: void 0 === t.edges.smooth.type ? "dynamic" : t.edges.smooth.type,
                            roundness: void 0 === t.edges.smooth.roundness ? .5 : t.edges.smooth.roundness,
                            forceDirection: void 0 !== t.edges.smooth.forceDirection && t.edges.smooth.forceDirection
                        }, t.edges.smooth = {
                            enabled: void 0 === t.edges.smooth.enabled || t.edges.smooth.enabled,
                            type: e,
                            roundness: void 0 === t.edges.smooth.roundness ? .5 : t.edges.smooth.roundness,
                            forceDirection: void 0 !== t.edges.smooth.forceDirection && t.edges.smooth.forceDirection
                        }), this.body.emitter.emit("_forceDisableDynamicCurves", e)
                    }
                    return t
                }
            }, {
                key: "seededRandom", value: function () {
                    var t = 1e4 * Math.sin(this.randomSeed++);
                    return t - Math.floor(t)
                }
            }, {
                key: "positionInitially", value: function (t) {
                    if (this.options.hierarchical.enabled !== !0) {
                        this.randomSeed = this.initialRandomSeed;
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e], o = 1 * t.length + 10, n = 2 * Math.PI * this.seededRandom();
                            void 0 === i.x && (i.x = o * Math.cos(n)), void 0 === i.y && (i.y = o * Math.sin(n))
                        }
                    }
                }
            }, {
                key: "layoutNetwork", value: function () {
                    if (this.options.hierarchical.enabled !== !0 && this.options.improvedLayout === !0) {
                        for (var t = 0, e = 0; e < this.body.nodeIndices.length; e++) {
                            var i = this.body.nodes[this.body.nodeIndices[e]];
                            i.predefinedPosition === !0 && (t += 1)
                        }
                        if (t < .5 * this.body.nodeIndices.length) {
                            var o = 10, n = 0, s = 100;
                            if (this.body.nodeIndices.length > s) {
                                for (var r = this.body.nodeIndices.length; this.body.nodeIndices.length > s;) {
                                    n += 1;
                                    var a = this.body.nodeIndices.length;
                                    n % 3 === 0 ? this.body.modules.clustering.clusterBridges() : this.body.modules.clustering.clusterOutliers();
                                    var h = this.body.nodeIndices.length;
                                    if (a == h && n % 3 !== 0 || n > o)return this._declusterAll(), this.body.emitter.emit("_layoutFailed"), void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.")
                                }
                                this.body.modules.kamadaKawai.setOptions({springLength: Math.max(150, 2 * r)})
                            }
                            this.body.modules.kamadaKawai.solve(this.body.nodeIndices, this.body.edgeIndices, !0), this._shiftToCenter();
                            for (var d = 70, l = 0; l < this.body.nodeIndices.length; l++)this.body.nodes[this.body.nodeIndices[l]].predefinedPosition === !1 && (this.body.nodes[this.body.nodeIndices[l]].x += (.5 - this.seededRandom()) * d, this.body.nodes[this.body.nodeIndices[l]].y += (.5 - this.seededRandom()) * d);
                            this._declusterAll(), this.body.emitter.emit("_repositionBezierNodes")
                        }
                    }
                }
            }, {
                key: "_shiftToCenter", value: function () {
                    for (var t = d.default.getRangeCore(this.body.nodes, this.body.nodeIndices), e = d.default.findCenter(t), i = 0; i < this.body.nodeIndices.length; i++)this.body.nodes[this.body.nodeIndices[i]].x -= e.x, this.body.nodes[this.body.nodeIndices[i]].y -= e.y
                }
            }, {
                key: "_declusterAll", value: function () {
                    for (var t = !0; t === !0;) {
                        t = !1;
                        for (var e = 0; e < this.body.nodeIndices.length; e++)this.body.nodes[this.body.nodeIndices[e]].isCluster === !0 && (t = !0, this.body.modules.clustering.openCluster(this.body.nodeIndices[e], {}, !1));
                        t === !0 && this.body.emitter.emit("_dataChanged")
                    }
                }
            }, {
                key: "getSeed", value: function () {
                    return this.initialRandomSeed
                }
            }, {
                key: "setupHierarchicalLayout", value: function () {
                    if (this.options.hierarchical.enabled === !0 && this.body.nodeIndices.length > 0) {
                        var t = void 0, e = void 0, i = !1, o = !0, n = !1;
                        this.hierarchicalLevels = {}, this.lastNodeOnLevel = {}, this.hierarchicalChildrenReference = {}, this.hierarchicalParentReference = {}, this.hierarchicalTrees = {}, this.treeIndex = -1, this.distributionOrdering = {}, this.distributionIndex = {}, this.distributionOrderingPresence = {};
                        for (e in this.body.nodes)this.body.nodes.hasOwnProperty(e) && (t = this.body.nodes[e], void 0 === t.options.x && void 0 === t.options.y && (o = !1), void 0 !== t.options.level ? (i = !0, this.hierarchicalLevels[e] = t.options.level) : n = !0);
                        if (n === !0 && i === !0)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.");
                        n === !0 && ("hubsize" === this.options.hierarchical.sortMethod ? this._determineLevelsByHubsize() : "directed" === this.options.hierarchical.sortMethod ? this._determineLevelsDirected() : "custom" === this.options.hierarchical.sortMethod && this._determineLevelsCustomCallback());
                        for (var s in this.body.nodes)this.body.nodes.hasOwnProperty(s) && void 0 === this.hierarchicalLevels[s] && (this.hierarchicalLevels[s] = 0);
                        var r = this._getDistribution();
                        this._generateMap(), this._placeNodesByHierarchy(r), this._condenseHierarchy(), this._shiftToCenter()
                    }
                }
            }, {
                key: "_condenseHierarchy", value: function () {
                    var t = this, e = !1, i = {}, o = function () {
                        for (var e = a(), i = 0; i < e.length - 1; i++) {
                            var o = e[i].max - e[i + 1].min;
                            n(i + 1, o + t.options.hierarchical.treeSpacing)
                        }
                    }, n = function (e, i) {
                        for (var o in t.hierarchicalTrees)if (t.hierarchicalTrees.hasOwnProperty(o) && t.hierarchicalTrees[o] === e) {
                            var n = t.body.nodes[o], s = t._getPositionForHierarchy(n);
                            t._setPositionForHierarchy(n, s + i, void 0, !0)
                        }
                    }, r = function (e) {
                        var i = 1e9, o = -1e9;
                        for (var n in t.hierarchicalTrees)if (t.hierarchicalTrees.hasOwnProperty(n) && t.hierarchicalTrees[n] === e) {
                            var s = t._getPositionForHierarchy(t.body.nodes[n]);
                            i = Math.min(s, i), o = Math.max(s, o)
                        }
                        return {min: i, max: o}
                    }, a = function () {
                        for (var e = [], i = 0; i <= t.treeIndex; i++)e.push(r(i));
                        return e
                    }, h = function e(i, o) {
                        if (o[i.id] = !0, t.hierarchicalChildrenReference[i.id]) {
                            var n = t.hierarchicalChildrenReference[i.id];
                            if (n.length > 0)for (var s = 0; s < n.length; s++)e(t.body.nodes[n[s]], o)
                        }
                    }, d = function (e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e9, o = 1e9, n = 1e9, r = 1e9, a = -1e9;
                        for (var h in e)if (e.hasOwnProperty(h)) {
                            var d = t.body.nodes[h], l = t.hierarchicalLevels[d.id], c = t._getPositionForHierarchy(d), u = t._getSpaceAroundNode(d, e), p = s(u, 2), f = p[0], m = p[1];
                            o = Math.min(f, o), n = Math.min(m, n), l <= i && (r = Math.min(c, r), a = Math.max(c, a))
                        }
                        return [r, a, o, n]
                    }, l = function e(i) {
                        var o = t.hierarchicalLevels[i];
                        if (t.hierarchicalChildrenReference[i]) {
                            var n = t.hierarchicalChildrenReference[i];
                            if (n.length > 0)for (var s = 0; s < n.length; s++)o = Math.max(o, e(n[s]))
                        }
                        return o
                    }, c = function (t, e) {
                        var i = l(t.id), o = l(e.id);
                        return Math.min(i, o)
                    }, u = function (e, i) {
                        var o = t.hierarchicalParentReference[e.id], n = t.hierarchicalParentReference[i.id];
                        if (void 0 === o || void 0 === n)return !1;
                        for (var s = 0; s < o.length; s++)for (var r = 0; r < n.length; r++)if (o[s] == n[r])return !0;
                        return !1
                    }, p = function (e, i, o) {
                        for (var n = 0; n < i.length; n++) {
                            var s = i[n], r = t.distributionOrdering[s];
                            if (r.length > 1)for (var a = 0; a < r.length - 1; a++)u(r[a], r[a + 1]) === !0 && t.hierarchicalTrees[r[a].id] === t.hierarchicalTrees[r[a + 1].id] && e(r[a], r[a + 1], o)
                        }
                    }, f = function (i, o) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = t._getPositionForHierarchy(i), a = t._getPositionForHierarchy(o), l = Math.abs(a - r);
                        if (l > t.options.hierarchical.nodeSpacing) {
                            var u = {};
                            u[i.id] = !0;
                            var p = {};
                            p[o.id] = !0, h(i, u), h(o, p);
                            var f = c(i, o), m = d(u, f), v = s(m, 4), g = (v[0], v[1]), y = (v[2], v[3], d(p, f)), b = s(y, 4), _ = b[0], w = (b[1], b[2]), x = (b[3], Math.abs(g - _));
                            if (x > t.options.hierarchical.nodeSpacing) {
                                var k = g - _ + t.options.hierarchical.nodeSpacing;
                                k < -w + t.options.hierarchical.nodeSpacing && (k = -w + t.options.hierarchical.nodeSpacing), k < 0 && (t._shiftBlock(o.id, k), e = !0, n === !0 && t._centerParent(o))
                            }
                        }
                    }, m = function (o, n) {
                        for (var r = n.id, a = n.edges, l = t.hierarchicalLevels[n.id], c = t.options.hierarchical.levelSeparation * t.options.hierarchical.levelSeparation, u = {}, p = [], f = 0; f < a.length; f++) {
                            var m = a[f];
                            if (m.toId != m.fromId) {
                                var v = m.toId == r ? m.from : m.to;
                                u[a[f].id] = v, t.hierarchicalLevels[v.id] < l && p.push(m)
                            }
                        }
                        var g = function (e, i) {
                            for (var o = 0, n = 0; n < i.length; n++)if (void 0 !== u[i[n].id]) {
                                var s = t._getPositionForHierarchy(u[i[n].id]) - e;
                                o += s / Math.sqrt(s * s + c)
                            }
                            return o
                        }, y = function (e, i) {
                            for (var o = 0, n = 0; n < i.length; n++)if (void 0 !== u[i[n].id]) {
                                var s = t._getPositionForHierarchy(u[i[n].id]) - e;
                                o -= c * Math.pow(s * s + c, -1.5)
                            }
                            return o
                        }, b = function (e, i) {
                            for (var o = t._getPositionForHierarchy(n), s = {}, r = 0; r < e; r++) {
                                var a = g(o, i), h = y(o, i), d = 40, l = Math.max(-d, Math.min(d, Math.round(a / h)));
                                if (o -= l, void 0 !== s[o])break;
                                s[o] = r
                            }
                            return o
                        }, _ = function (o) {
                            var r = t._getPositionForHierarchy(n);
                            if (void 0 === i[n.id]) {
                                var a = {};
                                a[n.id] = !0, h(n, a), i[n.id] = a
                            }
                            var l = d(i[n.id]), c = s(l, 4), u = (c[0], c[1], c[2]), p = c[3], f = o - r, m = 0;
                            f > 0 ? m = Math.min(f, p - t.options.hierarchical.nodeSpacing) : f < 0 && (m = -Math.min(-f, u - t.options.hierarchical.nodeSpacing)), 0 != m && (t._shiftBlock(n.id, m), e = !0)
                        }, w = function (i) {
                            var o = t._getPositionForHierarchy(n), r = t._getSpaceAroundNode(n), a = s(r, 2), h = a[0], d = a[1], l = i - o, c = o;
                            l > 0 ? c = Math.min(o + (d - t.options.hierarchical.nodeSpacing), i) : l < 0 && (c = Math.max(o - (h - t.options.hierarchical.nodeSpacing), i)), c !== o && (t._setPositionForHierarchy(n, c, void 0, !0), e = !0)
                        }, x = b(o, p);
                        _(x), x = b(o, a), w(x)
                    }, v = function (i) {
                        var o = Object.keys(t.distributionOrdering);
                        o = o.reverse();
                        for (var n = 0; n < i; n++) {
                            e = !1;
                            for (var s = 0; s < o.length; s++)for (var r = o[s], a = t.distributionOrdering[r], h = 0; h < a.length; h++)m(1e3, a[h]);
                            if (e !== !0)break
                        }
                    }, g = function (i) {
                        var o = Object.keys(t.distributionOrdering);
                        o = o.reverse();
                        for (var n = 0; n < i && (e = !1, p(f, o, !0), e === !0); n++);
                    }, y = function () {
                        for (var e in t.body.nodes)t.body.nodes.hasOwnProperty(e) && t._centerParent(t.body.nodes[e])
                    }, b = function () {
                        var e = Object.keys(t.distributionOrdering);
                        e = e.reverse();
                        for (var i = 0; i < e.length; i++)for (var o = e[i], n = t.distributionOrdering[o], s = 0; s < n.length; s++)t._centerParent(n[s])
                    };
                    this.options.hierarchical.blockShifting === !0 && (g(5), y()), this.options.hierarchical.edgeMinimization === !0 && v(20), this.options.hierarchical.parentCentralization === !0 && b(), o()
                }
            }, {
                key: "_getSpaceAroundNode", value: function (t, e) {
                    var i = !0;
                    void 0 === e && (i = !1);
                    var o = this.hierarchicalLevels[t.id];
                    if (void 0 !== o) {
                        var n = this.distributionIndex[t.id], s = this._getPositionForHierarchy(t), r = 1e9, a = 1e9;
                        if (0 !== n) {
                            var h = this.distributionOrdering[o][n - 1];
                            if (i === !0 && void 0 === e[h.id] || i === !1) {
                                var d = this._getPositionForHierarchy(h);
                                r = s - d
                            }
                        }
                        if (n != this.distributionOrdering[o].length - 1) {
                            var l = this.distributionOrdering[o][n + 1];
                            if (i === !0 && void 0 === e[l.id] || i === !1) {
                                var c = this._getPositionForHierarchy(l);
                                a = Math.min(a, c - s)
                            }
                        }
                        return [r, a]
                    }
                    return [0, 0]
                }
            }, {
                key: "_centerParent", value: function (t) {
                    if (this.hierarchicalParentReference[t.id])for (var e = this.hierarchicalParentReference[t.id], i = 0; i < e.length; i++) {
                        var o = e[i], n = this.body.nodes[o];
                        if (this.hierarchicalChildrenReference[o]) {
                            var r = 1e9, a = -1e9, h = this.hierarchicalChildrenReference[o];
                            if (h.length > 0)for (var d = 0; d < h.length; d++) {
                                var l = this.body.nodes[h[d]];
                                r = Math.min(r, this._getPositionForHierarchy(l)), a = Math.max(a, this._getPositionForHierarchy(l))
                            }
                            var c = this._getPositionForHierarchy(n), u = this._getSpaceAroundNode(n), p = s(u, 2), f = p[0], m = p[1], v = .5 * (r + a), g = c - v;
                            (g < 0 && Math.abs(g) < m - this.options.hierarchical.nodeSpacing || g > 0 && Math.abs(g) < f - this.options.hierarchical.nodeSpacing) && this._setPositionForHierarchy(n, v, void 0, !0)
                        }
                    }
                }
            }, {
                key: "_placeNodesByHierarchy", value: function (t) {
                    this.positionedNodes = {};
                    for (var e in t)if (t.hasOwnProperty(e)) {
                        var i = Object.keys(t[e]);
                        i = this._indexArrayToNodes(i), this._sortNodeArray(i);
                        for (var o = 0, n = 0; n < i.length; n++) {
                            var s = i[n];
                            if (void 0 === this.positionedNodes[s.id]) {
                                var r = this.options.hierarchical.nodeSpacing * o;
                                o > 0 && (r = this._getPositionForHierarchy(i[n - 1]) + this.options.hierarchical.nodeSpacing), this._setPositionForHierarchy(s, r, e), this._validataPositionAndContinue(s, e, r), o++
                            }
                        }
                    }
                }
            }, {
                key: "_placeBranchNodes", value: function (t, e) {
                    if (void 0 !== this.hierarchicalChildrenReference[t]) {
                        for (var i = [], o = 0; o < this.hierarchicalChildrenReference[t].length; o++)i.push(this.body.nodes[this.hierarchicalChildrenReference[t][o]]);
                        this._sortNodeArray(i);
                        for (var n = 0; n < i.length; n++) {
                            var s = i[n], r = this.hierarchicalLevels[s.id];
                            if (!(r > e && void 0 === this.positionedNodes[s.id]))return;
                            var a = void 0;
                            a = 0 === n ? this._getPositionForHierarchy(this.body.nodes[t]) : this._getPositionForHierarchy(i[n - 1]) + this.options.hierarchical.nodeSpacing, this._setPositionForHierarchy(s, a, r), this._validataPositionAndContinue(s, r, a)
                        }
                        for (var h = 1e9, d = -1e9, l = 0; l < i.length; l++) {
                            var c = i[l].id;
                            h = Math.min(h, this._getPositionForHierarchy(this.body.nodes[c])), d = Math.max(d, this._getPositionForHierarchy(this.body.nodes[c]))
                        }
                        this._setPositionForHierarchy(this.body.nodes[t], .5 * (h + d), e)
                    }
                }
            }, {
                key: "_validataPositionAndContinue", value: function (t, e, i) {
                    if (void 0 !== this.lastNodeOnLevel[e]) {
                        var o = this._getPositionForHierarchy(this.body.nodes[this.lastNodeOnLevel[e]]);
                        if (i - o < this.options.hierarchical.nodeSpacing) {
                            var n = o + this.options.hierarchical.nodeSpacing - i, s = this._findCommonParent(this.lastNodeOnLevel[e], t.id);
                            this._shiftBlock(s.withChild, n)
                        }
                    }
                    this.lastNodeOnLevel[e] = t.id, this.positionedNodes[t.id] = !0, this._placeBranchNodes(t.id, e)
                }
            }, {
                key: "_indexArrayToNodes", value: function (t) {
                    for (var e = [], i = 0; i < t.length; i++)e.push(this.body.nodes[t[i]]);
                    return e
                }
            }, {
                key: "_getDistribution", value: function () {
                    var t = {}, e = void 0, i = void 0;
                    for (e in this.body.nodes)if (this.body.nodes.hasOwnProperty(e)) {
                        i = this.body.nodes[e];
                        var o = void 0 === this.hierarchicalLevels[e] ? 0 : this.hierarchicalLevels[e];
                        "UD" === this.options.hierarchical.direction || "DU" === this.options.hierarchical.direction ? (i.y = this.options.hierarchical.levelSeparation * o, i.options.fixed.y = !0) : (i.x = this.options.hierarchical.levelSeparation * o, i.options.fixed.x = !0), void 0 === t[o] && (t[o] = {}), t[o][e] = i
                    }
                    return t
                }
            }, {
                key: "_getHubSize", value: function () {
                    var t = 0;
                    for (var e in this.body.nodes)if (this.body.nodes.hasOwnProperty(e)) {
                        var i = this.body.nodes[e];
                        void 0 === this.hierarchicalLevels[e] && (t = i.edges.length < t ? t : i.edges.length)
                    }
                    return t
                }
            }, {
                key: "_determineLevelsByHubsize", value: function () {
                    for (var t = this, e = 1, i = function (e, i) {
                        void 0 === t.hierarchicalLevels[i.id] && (void 0 === t.hierarchicalLevels[e.id] && (t.hierarchicalLevels[e.id] = 0), t.hierarchicalLevels[i.id] = t.hierarchicalLevels[e.id] + 1)
                    }; e > 0 && (e = this._getHubSize(), 0 !== e);)for (var o in this.body.nodes)if (this.body.nodes.hasOwnProperty(o)) {
                        var n = this.body.nodes[o];
                        n.edges.length === e && this._crawlNetwork(i, o)
                    }
                }
            }, {
                key: "_determineLevelsCustomCallback", value: function () {
                    var t = this, e = 1e5, i = function (t, e, i) {
                    }, o = function (o, n, s) {
                        var r = t.hierarchicalLevels[o.id];
                        void 0 === r && (t.hierarchicalLevels[o.id] = e);
                        var a = i(d.default.cloneOptions(o, "node"), d.default.cloneOptions(n, "node"), d.default.cloneOptions(s, "edge"));
                        t.hierarchicalLevels[n.id] = t.hierarchicalLevels[o.id] + a
                    };
                    this._crawlNetwork(o), this._setMinLevelToZero()
                }
            }, {
                key: "_determineLevelsDirected", value: function () {
                    var t = this, e = 1e4, i = function (i, o, n) {
                        var s = t.hierarchicalLevels[i.id];
                        void 0 === s && (t.hierarchicalLevels[i.id] = e), n.toId == o.id ? t.hierarchicalLevels[o.id] = t.hierarchicalLevels[i.id] + 1 : t.hierarchicalLevels[o.id] = t.hierarchicalLevels[i.id] - 1
                    };
                    this._crawlNetwork(i), this._setMinLevelToZero()
                }
            }, {
                key: "_setMinLevelToZero", value: function () {
                    var t = 1e9;
                    for (var e in this.body.nodes)this.body.nodes.hasOwnProperty(e) && void 0 !== this.hierarchicalLevels[e] && (t = Math.min(this.hierarchicalLevels[e], t));
                    for (var i in this.body.nodes)this.body.nodes.hasOwnProperty(i) && void 0 !== this.hierarchicalLevels[i] && (this.hierarchicalLevels[i] -= t)
                }
            }, {
                key: "_generateMap", value: function () {
                    var t = this, e = function (e, i) {
                        if (t.hierarchicalLevels[i.id] > t.hierarchicalLevels[e.id]) {
                            var o = e.id, n = i.id;
                            void 0 === t.hierarchicalChildrenReference[o] && (t.hierarchicalChildrenReference[o] = []), t.hierarchicalChildrenReference[o].push(n), void 0 === t.hierarchicalParentReference[n] && (t.hierarchicalParentReference[n] = []), t.hierarchicalParentReference[n].push(o)
                        }
                    };
                    this._crawlNetwork(e)
                }
            }, {
                key: "_crawlNetwork", value: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {
                    }, i = arguments[1], o = {}, n = 0, s = function i(n, s) {
                        if (void 0 === o[n.id]) {
                            void 0 === t.hierarchicalTrees[n.id] && (t.hierarchicalTrees[n.id] = s, t.treeIndex = Math.max(s, t.treeIndex)), o[n.id] = !0;
                            for (var r = void 0, a = 0; a < n.edges.length; a++)n.edges[a].connected === !0 && (r = n.edges[a].toId === n.id ? n.edges[a].from : n.edges[a].to, n.id !== r.id && (e(n, r, n.edges[a]), i(r, s)))
                        }
                    };
                    if (void 0 === i)for (var r = 0; r < this.body.nodeIndices.length; r++) {
                        var a = this.body.nodes[this.body.nodeIndices[r]];
                        void 0 === o[a.id] && (s(a, n), n += 1)
                    } else {
                        var h = this.body.nodes[i];
                        if (void 0 === h)return void console.error("Node not found:", i);
                        s(h)
                    }
                }
            }, {
                key: "_shiftBlock", value: function (t, e) {
                    if ("UD" === this.options.hierarchical.direction || "DU" === this.options.hierarchical.direction ? this.body.nodes[t].x += e : this.body.nodes[t].y += e, void 0 !== this.hierarchicalChildrenReference[t])for (var i = 0; i < this.hierarchicalChildrenReference[t].length; i++)this._shiftBlock(this.hierarchicalChildrenReference[t][i], e)
                }
            }, {
                key: "_findCommonParent", value: function (t, e) {
                    var i = this, o = {}, n = function t(e, o) {
                        if (void 0 !== i.hierarchicalParentReference[o])for (var n = 0; n < i.hierarchicalParentReference[o].length; n++) {
                            var s = i.hierarchicalParentReference[o][n];
                            e[s] = !0, t(e, s)
                        }
                    }, s = function t(e, o) {
                        if (void 0 !== i.hierarchicalParentReference[o])for (var n = 0; n < i.hierarchicalParentReference[o].length; n++) {
                            var s = i.hierarchicalParentReference[o][n];
                            if (void 0 !== e[s])return {foundParent: s, withChild: o};
                            var r = t(e, s);
                            if (null !== r.foundParent)return r
                        }
                        return {foundParent: null, withChild: o}
                    };
                    return n(o, t), s(o, e)
                }
            }, {
                key: "_setPositionForHierarchy", value: function (t, e, i) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    o !== !0 && (void 0 === this.distributionOrdering[i] && (this.distributionOrdering[i] = [], this.distributionOrderingPresence[i] = {}), void 0 === this.distributionOrderingPresence[i][t.id] && (this.distributionOrdering[i].push(t), this.distributionIndex[t.id] = this.distributionOrdering[i].length - 1), this.distributionOrderingPresence[i][t.id] = !0), "UD" === this.options.hierarchical.direction || "DU" === this.options.hierarchical.direction ? t.x = e : t.y = e
                }
            }, {
                key: "_getPositionForHierarchy", value: function (t) {
                    return "UD" === this.options.hierarchical.direction || "DU" === this.options.hierarchical.direction ? t.x : t.y
                }
            }, {
                key: "_sortNodeArray", value: function (t) {
                    t.length > 1 && ("UD" === this.options.hierarchical.direction || "DU" === this.options.hierarchical.direction ? t.sort(function (t, e) {
                        return t.x - e.x
                    }) : t.sort(function (t, e) {
                        return t.y - e.y
                    }))
                }
            }]), t
        }();
        e.default = c
    }, function (t, e, i) {
        function o(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), s = i(1), r = i(22), a = i(30), h = function () {
            function t(e, i, n) {
                var r = this;
                o(this, t), this.body = e, this.canvas = i, this.selectionHandler = n, this.editMode = !1, this.manipulationDiv = void 0, this.editModeDiv = void 0, this.closeDiv = void 0, this.manipulationHammers = [], this.temporaryUIFunctions = {}, this.temporaryEventFunctions = [], this.touchTime = 0, this.temporaryIds = {
                    nodes: [],
                    edges: []
                }, this.guiEnabled = !1, this.inMode = !1, this.selectedControlNode = void 0, this.options = {}, this.defaultOptions = {
                    enabled: !1,
                    initiallyActive: !1,
                    addNode: !0,
                    addEdge: !0,
                    editNode: void 0,
                    editEdge: !0,
                    deleteNode: !0,
                    deleteEdge: !0,
                    controlNodeStyle: {
                        shape: "dot",
                        size: 6,
                        color: {
                            background: "#ff0000",
                            border: "#3c3c3c",
                            highlight: {background: "#07f968", border: "#3c3c3c"}
                        },
                        borderWidth: 2,
                        borderWidthSelected: 2
                    }
                }, s.extend(this.options, this.defaultOptions), this.body.emitter.on("destroy", function () {
                    r._clean()
                }), this.body.emitter.on("_dataChanged", this._restore.bind(this)), this.body.emitter.on("_resetData", this._restore.bind(this))
            }

            return n(t, [{
                key: "_restore", value: function () {
                    this.inMode !== !1 && (this.options.initiallyActive === !0 ? this.enableEditMode() : this.disableEditMode())
                }
            }, {
                key: "setOptions", value: function (t, e, i) {
                    void 0 !== e && (void 0 !== e.locale ? this.options.locale = e.locale : this.options.locale = i.locale, void 0 !== e.locales ? this.options.locales = e.locales : this.options.locales = i.locales), void 0 !== t && ("boolean" == typeof t ? this.options.enabled = t : (this.options.enabled = !0, s.deepExtend(this.options, t)), this.options.initiallyActive === !0 && (this.editMode = !0), this._setup())
                }
            }, {
                key: "toggleEditMode", value: function () {
                    this.editMode === !0 ? this.disableEditMode() : this.enableEditMode()
                }
            }, {
                key: "enableEditMode", value: function () {
                    this.editMode = !0, this._clean(), this.guiEnabled === !0 && (this.manipulationDiv.style.display = "block", this.closeDiv.style.display = "block", this.editModeDiv.style.display = "none", this.showManipulatorToolbar())
                }
            }, {
                key: "disableEditMode", value: function () {
                    this.editMode = !1, this._clean(), this.guiEnabled === !0 && (this.manipulationDiv.style.display = "none", this.closeDiv.style.display = "none", this.editModeDiv.style.display = "block", this._createEditButton())
                }
            }, {
                key: "showManipulatorToolbar", value: function () {
                    if (this._clean(), this.manipulationDOM = {}, this.guiEnabled === !0) {
                        this.editMode = !0, this.manipulationDiv.style.display = "block", this.closeDiv.style.display = "block";
                        var t = this.selectionHandler._getSelectedNodeCount(), e = this.selectionHandler._getSelectedEdgeCount(), i = t + e, o = this.options.locales[this.options.locale], n = !1;
                        this.options.addNode !== !1 && (this._createAddNodeButton(o), n = !0), this.options.addEdge !== !1 && (n === !0 ? this._createSeperator(1) : n = !0, this._createAddEdgeButton(o)), 1 === t && "function" == typeof this.options.editNode ? (n === !0 ? this._createSeperator(2) : n = !0, this._createEditNodeButton(o)) : 1 === e && 0 === t && this.options.editEdge !== !1 && (n === !0 ? this._createSeperator(3) : n = !0, this._createEditEdgeButton(o)), 0 !== i && (t > 0 && this.options.deleteNode !== !1 ? (n === !0 && this._createSeperator(4), this._createDeleteButton(o)) : 0 === t && this.options.deleteEdge !== !1 && (n === !0 && this._createSeperator(4), this._createDeleteButton(o))), this._bindHammerToDiv(this.closeDiv, this.toggleEditMode.bind(this)), this._temporaryBindEvent("select", this.showManipulatorToolbar.bind(this))
                    }
                    this.body.emitter.emit("_redraw")
                }
            }, {
                key: "addNodeMode", value: function () {
                    if (this.editMode !== !0 && this.enableEditMode(), this._clean(), this.inMode = "addNode", this.guiEnabled === !0) {
                        var t = this.options.locales[this.options.locale];
                        this.manipulationDOM = {}, this._createBackButton(t), this._createSeperator(), this._createDescription(t.addDescription || this.options.locales.en.addDescription), this._bindHammerToDiv(this.closeDiv, this.toggleEditMode.bind(this))
                    }
                    this._temporaryBindEvent("click", this._performAddNode.bind(this))
                }
            }, {
                key: "editNode", value: function () {
                    var t = this;
                    this.editMode !== !0 && this.enableEditMode(), this._clean();
                    var e = this.selectionHandler._getSelectedNode();
                    if (void 0 !== e) {
                        if (this.inMode = "editNode", "function" != typeof this.options.editNode)throw new Error("No function has been configured to handle the editing of nodes.");
                        if (e.isCluster !== !0) {
                            var i = s.deepExtend({}, e.options, !1);
                            if (i.x = e.x, i.y = e.y, 2 !== this.options.editNode.length)throw new Error("The function for edit does not support two arguments (data, callback)");
                            this.options.editNode(i, function (e) {
                                null !== e && void 0 !== e && "editNode" === t.inMode && t.body.data.nodes.getDataSet().update(e), t.showManipulatorToolbar()
                            })
                        } else alert(this.options.locales[this.options.locale].editClusterError || this.options.locales.en.editClusterError)
                    } else this.showManipulatorToolbar()
                }
            }, {
                key: "addEdgeMode", value: function () {
                    if (this.editMode !== !0 && this.enableEditMode(), this._clean(), this.inMode = "addEdge", this.guiEnabled === !0) {
                        var t = this.options.locales[this.options.locale];
                        this.manipulationDOM = {}, this._createBackButton(t), this._createSeperator(), this._createDescription(t.edgeDescription || this.options.locales.en.edgeDescription), this._bindHammerToDiv(this.closeDiv, this.toggleEditMode.bind(this))
                    }
                    this._temporaryBindUI("onTouch", this._handleConnect.bind(this)), this._temporaryBindUI("onDragEnd", this._finishConnect.bind(this)), this._temporaryBindUI("onDrag", this._dragControlNode.bind(this)), this._temporaryBindUI("onRelease", this._finishConnect.bind(this)), this._temporaryBindUI("onDragStart", function () {
                    }), this._temporaryBindUI("onHold", function () {
                    })
                }
            }, {
                key: "editEdgeMode", value: function () {
                    var t = this;
                    if (this.editMode !== !0 && this.enableEditMode(), this._clean(), this.inMode = "editEdge", this.guiEnabled === !0) {
                        var e = this.options.locales[this.options.locale];
                        this.manipulationDOM = {}, this._createBackButton(e), this._createSeperator(), this._createDescription(e.editEdgeDescription || this.options.locales.en.editEdgeDescription), this._bindHammerToDiv(this.closeDiv, this.toggleEditMode.bind(this))
                    }
                    this.edgeBeingEditedId = this.selectionHandler.getSelectedEdges()[0], void 0 !== this.edgeBeingEditedId ? !function () {
                        var e = t.body.edges[t.edgeBeingEditedId], i = t._getNewTargetNode(e.from.x, e.from.y), o = t._getNewTargetNode(e.to.x, e.to.y);
                        t.temporaryIds.nodes.push(i.id), t.temporaryIds.nodes.push(o.id), t.body.nodes[i.id] = i, t.body.nodeIndices.push(i.id), t.body.nodes[o.id] = o, t.body.nodeIndices.push(o.id), t._temporaryBindUI("onTouch", t._controlNodeTouch.bind(t)), t._temporaryBindUI("onTap", function () {
                        }), t._temporaryBindUI("onHold", function () {
                        }), t._temporaryBindUI("onDragStart", t._controlNodeDragStart.bind(t)), t._temporaryBindUI("onDrag", t._controlNodeDrag.bind(t)), t._temporaryBindUI("onDragEnd", t._controlNodeDragEnd.bind(t)), t._temporaryBindUI("onMouseMove", function () {
                        }), t._temporaryBindEvent("beforeDrawing", function (t) {
                            var n = e.edgeType.findBorderPositions(t);
                            i.selected === !1 && (i.x = n.from.x, i.y = n.from.y), o.selected === !1 && (o.x = n.to.x, o.y = n.to.y)
                        }), t.body.emitter.emit("_redraw")
                    }() : this.showManipulatorToolbar()
                }
            }, {
                key: "deleteSelected", value: function () {
                    var t = this;
                    this.editMode !== !0 && this.enableEditMode(), this._clean(), this.inMode = "delete";
                    var e = this.selectionHandler.getSelectedNodes(), i = this.selectionHandler.getSelectedEdges(), o = void 0;
                    if (e.length > 0) {
                        for (var n = 0; n < e.length; n++)if (this.body.nodes[e[n]].isCluster === !0)return void alert(this.options.locales[this.options.locale].deleteClusterError || this.options.locales.en.deleteClusterError);
                        "function" == typeof this.options.deleteNode && (o = this.options.deleteNode)
                    } else i.length > 0 && "function" == typeof this.options.deleteEdge && (o = this.options.deleteEdge);
                    if ("function" == typeof o) {
                        var s = {nodes: e, edges: i};
                        if (2 !== o.length)throw new Error("The function for delete does not support two arguments (data, callback)");
                        o(s, function (e) {
                            null !== e && void 0 !== e && "delete" === t.inMode ? (t.body.data.edges.getDataSet().remove(e.edges), t.body.data.nodes.getDataSet().remove(e.nodes), t.body.emitter.emit("startSimulation"), t.showManipulatorToolbar()) : (t.body.emitter.emit("startSimulation"), t.showManipulatorToolbar())
                        })
                    } else this.body.data.edges.getDataSet().remove(i), this.body.data.nodes.getDataSet().remove(e), this.body.emitter.emit("startSimulation"), this.showManipulatorToolbar()
                }
            }, {
                key: "_setup", value: function () {
                    this.options.enabled === !0 ? (this.guiEnabled = !0, this._createWrappers(), this.editMode === !1 ? this._createEditButton() : this.showManipulatorToolbar()) : (this._removeManipulationDOM(), this.guiEnabled = !1)
                }
            }, {
                key: "_createWrappers", value: function () {
                    void 0 === this.manipulationDiv && (this.manipulationDiv = document.createElement("div"), this.manipulationDiv.className = "vis-manipulation", this.editMode === !0 ? this.manipulationDiv.style.display = "block" : this.manipulationDiv.style.display = "none", this.canvas.frame.appendChild(this.manipulationDiv)), void 0 === this.editModeDiv && (this.editModeDiv = document.createElement("div"), this.editModeDiv.className = "vis-edit-mode", this.editMode === !0 ? this.editModeDiv.style.display = "none" : this.editModeDiv.style.display = "block", this.canvas.frame.appendChild(this.editModeDiv)), void 0 === this.closeDiv && (this.closeDiv = document.createElement("div"), this.closeDiv.className = "vis-close", this.closeDiv.style.display = this.manipulationDiv.style.display, this.canvas.frame.appendChild(this.closeDiv))
                }
            }, {
                key: "_getNewTargetNode", value: function (t, e) {
                    var i = s.deepExtend({}, this.options.controlNodeStyle);
                    i.id = "targetNode" + s.randomUUID(), i.hidden = !1, i.physics = !1, i.x = t, i.y = e;
                    var o = this.body.functions.createNode(i);
                    return o.shape.boundingBox = {left: t, right: t, top: e, bottom: e}, o
                }
            }, {
                key: "_createEditButton", value: function () {
                    this._clean(), this.manipulationDOM = {}, s.recursiveDOMDelete(this.editModeDiv);
                    var t = this.options.locales[this.options.locale], e = this._createButton("editMode", "vis-button vis-edit vis-edit-mode", t.edit || this.options.locales.en.edit);
                    this.editModeDiv.appendChild(e), this._bindHammerToDiv(e, this.toggleEditMode.bind(this))
                }
            }, {
                key: "_clean", value: function () {
                    this.inMode = !1, this.guiEnabled === !0 && (s.recursiveDOMDelete(this.editModeDiv), s.recursiveDOMDelete(this.manipulationDiv), this._cleanManipulatorHammers()), this._cleanupTemporaryNodesAndEdges(), this._unbindTemporaryUIs(), this._unbindTemporaryEvents(), this.body.emitter.emit("restorePhysics")
                }
            }, {
                key: "_cleanManipulatorHammers", value: function () {
                    if (0 != this.manipulationHammers.length) {
                        for (var t = 0; t < this.manipulationHammers.length; t++)this.manipulationHammers[t].destroy();
                        this.manipulationHammers = []
                    }
                }
            }, {
                key: "_removeManipulationDOM", value: function () {
                    this._clean(), s.recursiveDOMDelete(this.manipulationDiv), s.recursiveDOMDelete(this.editModeDiv), s.recursiveDOMDelete(this.closeDiv), this.manipulationDiv && this.canvas.frame.removeChild(this.manipulationDiv), this.editModeDiv && this.canvas.frame.removeChild(this.editModeDiv), this.closeDiv && this.canvas.frame.removeChild(this.closeDiv), this.manipulationDiv = void 0, this.editModeDiv = void 0, this.closeDiv = void 0
                }
            }, {
                key: "_createSeperator", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.manipulationDOM["seperatorLineDiv" + t] = document.createElement("div"), this.manipulationDOM["seperatorLineDiv" + t].className = "vis-separator-line", this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv" + t])
                }
            }, {
                key: "_createAddNodeButton", value: function (t) {
                    var e = this._createButton("addNode", "vis-button vis-add", t.addNode || this.options.locales.en.addNode);
                    this.manipulationDiv.appendChild(e), this._bindHammerToDiv(e, this.addNodeMode.bind(this))
                }
            }, {
                key: "_createAddEdgeButton", value: function (t) {
                    var e = this._createButton("addEdge", "vis-button vis-connect", t.addEdge || this.options.locales.en.addEdge);
                    this.manipulationDiv.appendChild(e), this._bindHammerToDiv(e, this.addEdgeMode.bind(this))
                }
            }, {
                key: "_createEditNodeButton", value: function (t) {
                    var e = this._createButton("editNode", "vis-button vis-edit", t.editNode || this.options.locales.en.editNode);
                    this.manipulationDiv.appendChild(e), this._bindHammerToDiv(e, this.editNode.bind(this))
                }
            }, {
                key: "_createEditEdgeButton", value: function (t) {
                    var e = this._createButton("editEdge", "vis-button vis-edit", t.editEdge || this.options.locales.en.editEdge);
                    this.manipulationDiv.appendChild(e), this._bindHammerToDiv(e, this.editEdgeMode.bind(this))
                }
            }, {
                key: "_createDeleteButton", value: function (t) {
                    if (this.options.rtl)var e = "vis-button vis-delete-rtl"; else var e = "vis-button vis-delete";
                    var i = this._createButton("delete", e, t.del || this.options.locales.en.del);
                    this.manipulationDiv.appendChild(i), this._bindHammerToDiv(i, this.deleteSelected.bind(this))
                }
            }, {
                key: "_createBackButton", value: function (t) {
                    var e = this._createButton("back", "vis-button vis-back", t.back || this.options.locales.en.back);
                    this.manipulationDiv.appendChild(e), this._bindHammerToDiv(e, this.showManipulatorToolbar.bind(this))
                }
            }, {
                key: "_createButton", value: function (t, e, i) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vis-label";
                    return this.manipulationDOM[t + "Div"] = document.createElement("div"), this.manipulationDOM[t + "Div"].className = e, this.manipulationDOM[t + "Label"] = document.createElement("div"), this.manipulationDOM[t + "Label"].className = o, this.manipulationDOM[t + "Label"].innerHTML = i, this.manipulationDOM[t + "Div"].appendChild(this.manipulationDOM[t + "Label"]), this.manipulationDOM[t + "Div"]
                }
            }, {
                key: "_createDescription", value: function (t) {
                    this.manipulationDiv.appendChild(this._createButton("description", "vis-button vis-none", t))
                }
            }, {
                key: "_temporaryBindEvent", value: function (t, e) {
                    this.temporaryEventFunctions.push({event: t, boundFunction: e}), this.body.emitter.on(t, e)
                }
            }, {
                key: "_temporaryBindUI", value: function (t, e) {
                    if (void 0 === this.body.eventListeners[t])throw new Error("This UI function does not exist. Typo? You tried: " + t + " possible are: " + JSON.stringify(Object.keys(this.body.eventListeners)));
                    this.temporaryUIFunctions[t] = this.body.eventListeners[t], this.body.eventListeners[t] = e
                }
            }, {
                key: "_unbindTemporaryUIs", value: function () {
                    for (var t in this.temporaryUIFunctions)this.temporaryUIFunctions.hasOwnProperty(t) && (this.body.eventListeners[t] = this.temporaryUIFunctions[t], delete this.temporaryUIFunctions[t]);
                    this.temporaryUIFunctions = {}
                }
            }, {
                key: "_unbindTemporaryEvents", value: function () {
                    for (var t = 0; t < this.temporaryEventFunctions.length; t++) {
                        var e = this.temporaryEventFunctions[t].event, i = this.temporaryEventFunctions[t].boundFunction;
                        this.body.emitter.off(e, i)
                    }
                    this.temporaryEventFunctions = []
                }
            }, {
                key: "_bindHammerToDiv", value: function (t, e) {
                    var i = new r(t, {});
                    a.onTouch(i, e), this.manipulationHammers.push(i)
                }
            }, {
                key: "_cleanupTemporaryNodesAndEdges", value: function () {
                    for (var t = 0; t < this.temporaryIds.edges.length; t++) {
                        this.body.edges[this.temporaryIds.edges[t]].disconnect(), delete this.body.edges[this.temporaryIds.edges[t]];
                        var e = this.body.edgeIndices.indexOf(this.temporaryIds.edges[t]);
                        e !== -1 && this.body.edgeIndices.splice(e, 1)
                    }
                    for (var i = 0; i < this.temporaryIds.nodes.length; i++) {
                        delete this.body.nodes[this.temporaryIds.nodes[i]];
                        var o = this.body.nodeIndices.indexOf(this.temporaryIds.nodes[i]);
                        o !== -1 && this.body.nodeIndices.splice(o, 1)
                    }
                    this.temporaryIds = {nodes: [], edges: []}
                }
            }, {
                key: "_controlNodeTouch", value: function (t) {
                    this.selectionHandler.unselectAll(), this.lastTouch = this.body.functions.getPointer(t.center), this.lastTouch.translation = s.extend({}, this.body.view.translation)
                }
            }, {
                key: "_controlNodeDragStart", value: function (t) {
                    var e = this.lastTouch, i = this.selectionHandler._pointerToPositionObject(e), o = this.body.nodes[this.temporaryIds.nodes[0]], n = this.body.nodes[this.temporaryIds.nodes[1]], s = this.body.edges[this.edgeBeingEditedId];
                    this.selectedControlNode = void 0;
                    var r = o.isOverlappingWith(i), a = n.isOverlappingWith(i);
                    r === !0 ? (this.selectedControlNode = o, s.edgeType.from = o) : a === !0 && (this.selectedControlNode = n, s.edgeType.to = n), void 0 !== this.selectedControlNode && this.selectionHandler.selectObject(this.selectedControlNode), this.body.emitter.emit("_redraw")
                }
            }, {
                key: "_controlNodeDrag", value: function (t) {
                    this.body.emitter.emit("disablePhysics");
                    var e = this.body.functions.getPointer(t.center), i = this.canvas.DOMtoCanvas(e);
                    if (void 0 !== this.selectedControlNode)this.selectedControlNode.x = i.x, this.selectedControlNode.y = i.y; else {
                        var o = e.x - this.lastTouch.x, n = e.y - this.lastTouch.y;
                        this.body.view.translation = {
                            x: this.lastTouch.translation.x + o,
                            y: this.lastTouch.translation.y + n
                        }
                    }
                    this.body.emitter.emit("_redraw")
                }
            }, {
                key: "_controlNodeDragEnd", value: function (t) {
                    var e = this.body.functions.getPointer(t.center), i = this.selectionHandler._pointerToPositionObject(e), o = this.body.edges[this.edgeBeingEditedId];
                    if (void 0 !== this.selectedControlNode) {
                        this.selectionHandler.unselectAll();
                        for (var n = this.selectionHandler._getAllNodesOverlappingWith(i), s = void 0, r = n.length - 1; r >= 0; r--)if (n[r] !== this.selectedControlNode.id) {
                            s = this.body.nodes[n[r]];
                            break
                        }
                        if (void 0 !== s && void 0 !== this.selectedControlNode)if (s.isCluster === !0)alert(this.options.locales[this.options.locale].createEdgeError || this.options.locales.en.createEdgeError); else {
                            var a = this.body.nodes[this.temporaryIds.nodes[0]];
                            this.selectedControlNode.id === a.id ? this._performEditEdge(s.id, o.to.id) : this._performEditEdge(o.from.id, s.id)
                        } else o.updateEdgeType(), this.body.emitter.emit("restorePhysics");
                        this.body.emitter.emit("_redraw")
                    }
                }
            }, {
                key: "_handleConnect", value: function (t) {
                    if ((new Date).valueOf() - this.touchTime > 100) {
                        this.lastTouch = this.body.functions.getPointer(t.center), this.lastTouch.translation = s.extend({}, this.body.view.translation);
                        var e = this.lastTouch, i = this.selectionHandler.getNodeAt(e);
                        if (void 0 !== i)if (i.isCluster === !0)alert(this.options.locales[this.options.locale].createEdgeError || this.options.locales.en.createEdgeError); else {
                            var o = this._getNewTargetNode(i.x, i.y);
                            this.body.nodes[o.id] = o, this.body.nodeIndices.push(o.id);
                            var n = this.body.functions.createEdge({
                                id: "connectionEdge" + s.randomUUID(),
                                from: i.id,
                                to: o.id,
                                physics: !1,
                                smooth: {enabled: !0, type: "continuous", roundness: .5}
                            });
                            this.body.edges[n.id] = n, this.body.edgeIndices.push(n.id), this.temporaryIds.nodes.push(o.id), this.temporaryIds.edges.push(n.id)
                        }
                        this.touchTime = (new Date).valueOf()
                    }
                }
            }, {
                key: "_dragControlNode", value: function (t) {
                    var e = this.body.functions.getPointer(t.center);
                    if (void 0 !== this.temporaryIds.nodes[0]) {
                        var i = this.body.nodes[this.temporaryIds.nodes[0]];
                        i.x = this.canvas._XconvertDOMtoCanvas(e.x), i.y = this.canvas._YconvertDOMtoCanvas(e.y), this.body.emitter.emit("_redraw")
                    } else {
                        var o = e.x - this.lastTouch.x, n = e.y - this.lastTouch.y;
                        this.body.view.translation = {
                            x: this.lastTouch.translation.x + o,
                            y: this.lastTouch.translation.y + n
                        }
                    }
                }
            }, {
                key: "_finishConnect", value: function (t) {
                    var e = this.body.functions.getPointer(t.center), i = this.selectionHandler._pointerToPositionObject(e), o = void 0;
                    void 0 !== this.temporaryIds.edges[0] && (o = this.body.edges[this.temporaryIds.edges[0]].fromId);
                    for (var n = this.selectionHandler._getAllNodesOverlappingWith(i), s = void 0, r = n.length - 1; r >= 0; r--)if (this.temporaryIds.nodes.indexOf(n[r]) === -1) {
                        s = this.body.nodes[n[r]];
                        break
                    }
                    this._cleanupTemporaryNodesAndEdges(), void 0 !== s && (s.isCluster === !0 ? alert(this.options.locales[this.options.locale].createEdgeError || this.options.locales.en.createEdgeError) : void 0 !== this.body.nodes[o] && void 0 !== this.body.nodes[s.id] && this._performAddEdge(o, s.id)), this.body.emitter.emit("_redraw")
                }
            }, {
                key: "_performAddNode", value: function (t) {
                    var e = this, i = {id: s.randomUUID(), x: t.pointer.canvas.x, y: t.pointer.canvas.y, label: "new"};
                    if ("function" == typeof this.options.addNode) {
                        if (2 !== this.options.addNode.length)throw new Error("The function for add does not support two arguments (data,callback)");
                        this.options.addNode(i, function (t) {
                            null !== t && void 0 !== t && "addNode" === e.inMode && (e.body.data.nodes.getDataSet().add(t), e.showManipulatorToolbar())
                        })
                    } else this.body.data.nodes.getDataSet().add(i), this.showManipulatorToolbar()
                }
            }, {
                key: "_performAddEdge", value: function (t, e) {
                    var i = this, o = {from: t, to: e};
                    if ("function" == typeof this.options.addEdge) {
                        if (2 !== this.options.addEdge.length)throw new Error("The function for connect does not support two arguments (data,callback)");
                        this.options.addEdge(o, function (t) {
                            null !== t && void 0 !== t && "addEdge" === i.inMode && (i.body.data.edges.getDataSet().add(t), i.selectionHandler.unselectAll(), i.showManipulatorToolbar())
                        })
                    } else this.body.data.edges.getDataSet().add(o), this.selectionHandler.unselectAll(), this.showManipulatorToolbar()
                }
            }, {
                key: "_performEditEdge", value: function (t, e) {
                    var i = this, o = {id: this.edgeBeingEditedId, from: t, to: e};
                    if ("function" == typeof this.options.editEdge) {
                        if (2 !== this.options.editEdge.length)throw new Error("The function for edit does not support two arguments (data, callback)");
                        this.options.editEdge(o, function (t) {
                            null === t || void 0 === t || "editEdge" !== i.inMode ? (i.body.edges[o.id].updateEdgeType(), i.body.emitter.emit("_redraw")) : (i.body.data.edges.getDataSet().update(t), i.selectionHandler.unselectAll(), i.showManipulatorToolbar())
                        })
                    } else this.body.data.edges.getDataSet().update(o), this.selectionHandler.unselectAll(), this.showManipulatorToolbar()
                }
            }]), t
        }();
        e.default = h
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = "string", o = "boolean", n = "number", s = "array", r = "object", a = "dom", h = "any", d = {
            configure: {
                enabled: {boolean: o},
                filter: {boolean: o, string: i, array: s, function: "function"},
                container: {dom: a},
                showButton: {boolean: o},
                __type__: {object: r, boolean: o, string: i, array: s, function: "function"}
            },
            edges: {
                arrows: {
                    to: {
                        enabled: {boolean: o},
                        scaleFactor: {number: n},
                        type: {string: ["arrow", "circle"]},
                        __type__: {object: r, boolean: o}
                    },
                    middle: {
                        enabled: {boolean: o},
                        scaleFactor: {number: n},
                        type: {string: ["arrow", "circle"]},
                        __type__: {object: r, boolean: o}
                    },
                    from: {
                        enabled: {boolean: o},
                        scaleFactor: {number: n},
                        type: {string: ["arrow", "circle"]},
                        __type__: {object: r, boolean: o}
                    },
                    __type__: {string: ["from", "to", "middle"], object: r}
                },
                arrowStrikethrough: {boolean: o},
                color: {
                    color: {string: i},
                    highlight: {string: i},
                    hover: {string: i},
                    inherit: {string: ["from", "to", "both"], boolean: o},
                    opacity: {number: n},
                    __type__: {object: r, string: i}
                },
                dashes: {boolean: o, array: s},
                font: {
                    color: {string: i},
                    size: {number: n},
                    face: {string: i},
                    background: {string: i},
                    strokeWidth: {number: n},
                    strokeColor: {string: i},
                    align: {string: ["horizontal", "top", "middle", "bottom"]},
                    __type__: {object: r, string: i}
                },
                hidden: {boolean: o},
                hoverWidth: {function: "function", number: n},
                label: {string: i, undefined: "undefined"},
                labelHighlightBold: {boolean: o},
                length: {number: n, undefined: "undefined"},
                physics: {boolean: o},
                scaling: {
                    min: {number: n},
                    max: {number: n},
                    label: {
                        enabled: {boolean: o},
                        min: {number: n},
                        max: {number: n},
                        maxVisible: {number: n},
                        drawThreshold: {number: n},
                        __type__: {object: r, boolean: o}
                    },
                    customScalingFunction: {function: "function"},
                    __type__: {object: r}
                },
                selectionWidth: {function: "function", number: n},
                selfReferenceSize: {number: n},
                shadow: {
                    enabled: {boolean: o},
                    color: {string: i},
                    size: {number: n},
                    x: {number: n},
                    y: {number: n},
                    __type__: {object: r, boolean: o}
                },
                smooth: {
                    enabled: {boolean: o},
                    type: {string: ["dynamic", "continuous", "discrete", "diagonalCross", "straightCross", "horizontal", "vertical", "curvedCW", "curvedCCW", "cubicBezier"]},
                    roundness: {number: n},
                    forceDirection: {string: ["horizontal", "vertical", "none"], boolean: o},
                    __type__: {object: r, boolean: o}
                },
                title: {string: i, undefined: "undefined"},
                width: {number: n},
                value: {number: n, undefined: "undefined"},
                __type__: {object: r}
            },
            groups: {
                useDefaultGroups: {boolean: o}, __any__: "get from nodes, will be overwritten below",
                __type__: {object: r}
            },
            interaction: {
                dragNodes: {boolean: o},
                dragView: {boolean: o},
                hideEdgesOnDrag: {boolean: o},
                hideNodesOnDrag: {boolean: o},
                hover: {boolean: o},
                keyboard: {
                    enabled: {boolean: o},
                    speed: {x: {number: n}, y: {number: n}, zoom: {number: n}, __type__: {object: r}},
                    bindToWindow: {boolean: o},
                    __type__: {object: r, boolean: o}
                },
                multiselect: {boolean: o},
                navigationButtons: {boolean: o},
                selectable: {boolean: o},
                selectConnectedEdges: {boolean: o},
                hoverConnectedEdges: {boolean: o},
                tooltipDelay: {number: n},
                zoomView: {boolean: o},
                __type__: {object: r}
            },
            layout: {
                randomSeed: {undefined: "undefined", number: n},
                improvedLayout: {boolean: o},
                hierarchical: {
                    enabled: {boolean: o},
                    levelSeparation: {number: n},
                    nodeSpacing: {number: n},
                    treeSpacing: {number: n},
                    blockShifting: {boolean: o},
                    edgeMinimization: {boolean: o},
                    parentCentralization: {boolean: o},
                    direction: {string: ["UD", "DU", "LR", "RL"]},
                    sortMethod: {string: ["hubsize", "directed"]},
                    __type__: {object: r, boolean: o}
                },
                __type__: {object: r}
            },
            manipulation: {
                enabled: {boolean: o},
                initiallyActive: {boolean: o},
                addNode: {boolean: o, function: "function"},
                addEdge: {boolean: o, function: "function"},
                editNode: {function: "function"},
                editEdge: {boolean: o, function: "function"},
                deleteNode: {boolean: o, function: "function"},
                deleteEdge: {boolean: o, function: "function"},
                controlNodeStyle: "get from nodes, will be overwritten below",
                __type__: {object: r, boolean: o}
            },
            nodes: {
                borderWidth: {number: n},
                borderWidthSelected: {number: n, undefined: "undefined"},
                brokenImage: {string: i, undefined: "undefined"},
                color: {
                    border: {string: i},
                    background: {string: i},
                    highlight: {border: {string: i}, background: {string: i}, __type__: {object: r, string: i}},
                    hover: {border: {string: i}, background: {string: i}, __type__: {object: r, string: i}},
                    __type__: {object: r, string: i}
                },
                fixed: {x: {boolean: o}, y: {boolean: o}, __type__: {object: r, boolean: o}},
                font: {
                    align: {string: i},
                    color: {string: i},
                    size: {number: n},
                    face: {string: i},
                    background: {string: i},
                    strokeWidth: {number: n},
                    strokeColor: {string: i},
                    __type__: {object: r, string: i}
                },
                group: {string: i, number: n, undefined: "undefined"},
                hidden: {boolean: o},
                icon: {
                    face: {string: i},
                    code: {string: i},
                    size: {number: n},
                    color: {string: i},
                    __type__: {object: r}
                },
                id: {string: i, number: n},
                image: {string: i, undefined: "undefined"},
                label: {string: i, undefined: "undefined"},
                labelHighlightBold: {boolean: o},
                level: {number: n, undefined: "undefined"},
                mass: {number: n},
                physics: {boolean: o},
                scaling: {
                    min: {number: n},
                    max: {number: n},
                    label: {
                        enabled: {boolean: o},
                        min: {number: n},
                        max: {number: n},
                        maxVisible: {number: n},
                        drawThreshold: {number: n},
                        __type__: {object: r, boolean: o}
                    },
                    customScalingFunction: {function: "function"},
                    __type__: {object: r}
                },
                shadow: {
                    enabled: {boolean: o},
                    color: {string: i},
                    size: {number: n},
                    x: {number: n},
                    y: {number: n},
                    __type__: {object: r, boolean: o}
                },
                shape: {string: ["ellipse", "circle", "database", "box", "text", "image", "circularImage", "diamond", "dot", "star", "triangle", "triangleDown", "square", "icon"]},
                shapeProperties: {
                    borderDashes: {boolean: o, array: s},
                    borderRadius: {number: n},
                    interpolation: {boolean: o},
                    useImageSize: {boolean: o},
                    useBorderWithImage: {boolean: o},
                    __type__: {object: r}
                },
                size: {number: n},
                title: {string: i, undefined: "undefined"},
                value: {number: n, undefined: "undefined"},
                x: {number: n},
                y: {number: n},
                __type__: {object: r}
            },
            physics: {
                enabled: {boolean: o},
                barnesHut: {
                    gravitationalConstant: {number: n},
                    centralGravity: {number: n},
                    springLength: {number: n},
                    springConstant: {number: n},
                    damping: {number: n},
                    avoidOverlap: {number: n},
                    __type__: {object: r}
                },
                forceAtlas2Based: {
                    gravitationalConstant: {number: n},
                    centralGravity: {number: n},
                    springLength: {number: n},
                    springConstant: {number: n},
                    damping: {number: n},
                    avoidOverlap: {number: n},
                    __type__: {object: r}
                },
                repulsion: {
                    centralGravity: {number: n},
                    springLength: {number: n},
                    springConstant: {number: n},
                    nodeDistance: {number: n},
                    damping: {number: n},
                    __type__: {object: r}
                },
                hierarchicalRepulsion: {
                    centralGravity: {number: n},
                    springLength: {number: n},
                    springConstant: {number: n},
                    nodeDistance: {number: n},
                    damping: {number: n},
                    __type__: {object: r}
                },
                maxVelocity: {number: n},
                minVelocity: {number: n},
                solver: {string: ["barnesHut", "repulsion", "hierarchicalRepulsion", "forceAtlas2Based"]},
                stabilization: {
                    enabled: {boolean: o},
                    iterations: {number: n},
                    updateInterval: {number: n},
                    onlyDynamicEdges: {boolean: o},
                    fit: {boolean: o},
                    __type__: {object: r, boolean: o}
                },
                timestep: {number: n},
                adaptiveTimestep: {boolean: o},
                __type__: {object: r, boolean: o}
            },
            autoResize: {boolean: o},
            clickToUse: {boolean: o},
            locale: {string: i},
            locales: {__any__: {any: h}, __type__: {object: r}},
            height: {string: i},
            width: {string: i},
            __type__: {object: r}
        };
        d.groups.__any__ = d.nodes, d.manipulation.controlNodeStyle = d.nodes;
        var l = {
            nodes: {
                borderWidth: [1, 0, 10, 1],
                borderWidthSelected: [2, 0, 10, 1],
                color: {
                    border: ["color", "#2B7CE9"],
                    background: ["color", "#97C2FC"],
                    highlight: {border: ["color", "#2B7CE9"], background: ["color", "#D2E5FF"]},
                    hover: {border: ["color", "#2B7CE9"], background: ["color", "#D2E5FF"]}
                },
                fixed: {x: !1, y: !1},
                font: {
                    color: ["color", "#343434"],
                    size: [14, 0, 100, 1],
                    face: ["arial", "verdana", "tahoma"],
                    background: ["color", "none"],
                    strokeWidth: [0, 0, 50, 1],
                    strokeColor: ["color", "#ffffff"]
                },
                hidden: !1,
                labelHighlightBold: !0,
                physics: !0,
                scaling: {
                    min: [10, 0, 200, 1],
                    max: [30, 0, 200, 1],
                    label: {
                        enabled: !1,
                        min: [14, 0, 200, 1],
                        max: [30, 0, 200, 1],
                        maxVisible: [30, 0, 200, 1],
                        drawThreshold: [5, 0, 20, 1]
                    }
                },
                shadow: {
                    enabled: !1,
                    color: "rgba(0,0,0,0.5)",
                    size: [10, 0, 20, 1],
                    x: [5, -30, 30, 1],
                    y: [5, -30, 30, 1]
                },
                shape: ["ellipse", "box", "circle", "database", "diamond", "dot", "square", "star", "text", "triangle", "triangleDown"],
                shapeProperties: {borderDashes: !1, borderRadius: [6, 0, 20, 1], interpolation: !0, useImageSize: !1},
                size: [25, 0, 200, 1]
            },
            edges: {
                arrows: {
                    to: {enabled: !1, scaleFactor: [1, 0, 3, .05], type: "arrow"},
                    middle: {enabled: !1, scaleFactor: [1, 0, 3, .05], type: "arrow"},
                    from: {enabled: !1, scaleFactor: [1, 0, 3, .05], type: "arrow"}
                },
                arrowStrikethrough: !0,
                color: {
                    color: ["color", "#848484"],
                    highlight: ["color", "#848484"],
                    hover: ["color", "#848484"],
                    inherit: ["from", "to", "both", !0, !1],
                    opacity: [1, 0, 1, .05]
                },
                dashes: !1,
                font: {
                    color: ["color", "#343434"],
                    size: [14, 0, 100, 1],
                    face: ["arial", "verdana", "tahoma"],
                    background: ["color", "none"],
                    strokeWidth: [2, 0, 50, 1],
                    strokeColor: ["color", "#ffffff"],
                    align: ["horizontal", "top", "middle", "bottom"]
                },
                hidden: !1,
                hoverWidth: [1.5, 0, 5, .1],
                labelHighlightBold: !0,
                physics: !0,
                scaling: {
                    min: [1, 0, 100, 1],
                    max: [15, 0, 100, 1],
                    label: {
                        enabled: !0,
                        min: [14, 0, 200, 1],
                        max: [30, 0, 200, 1],
                        maxVisible: [30, 0, 200, 1],
                        drawThreshold: [5, 0, 20, 1]
                    }
                },
                selectionWidth: [1.5, 0, 5, .1],
                selfReferenceSize: [20, 0, 200, 1],
                shadow: {
                    enabled: !1,
                    color: "rgba(0,0,0,0.5)",
                    size: [10, 0, 20, 1],
                    x: [5, -30, 30, 1],
                    y: [5, -30, 30, 1]
                },
                smooth: {
                    enabled: !0,
                    type: ["dynamic", "continuous", "discrete", "diagonalCross", "straightCross", "horizontal", "vertical", "curvedCW", "curvedCCW", "cubicBezier"],
                    forceDirection: ["horizontal", "vertical", "none"],
                    roundness: [.5, 0, 1, .05]
                },
                width: [1, 0, 30, 1]
            },
            layout: {
                hierarchical: {
                    enabled: !1,
                    levelSeparation: [150, 20, 500, 5],
                    nodeSpacing: [100, 20, 500, 5],
                    treeSpacing: [200, 20, 500, 5],
                    blockShifting: !0,
                    edgeMinimization: !0,
                    parentCentralization: !0,
                    direction: ["UD", "DU", "LR", "RL"],
                    sortMethod: ["hubsize", "directed"]
                }
            },
            interaction: {
                dragNodes: !0,
                dragView: !0,
                hideEdgesOnDrag: !1,
                hideNodesOnDrag: !1,
                hover: !1,
                keyboard: {
                    enabled: !1,
                    speed: {x: [10, 0, 40, 1], y: [10, 0, 40, 1], zoom: [.02, 0, .1, .005]},
                    bindToWindow: !0
                },
                multiselect: !1,
                navigationButtons: !1,
                selectable: !0,
                selectConnectedEdges: !0,
                hoverConnectedEdges: !0,
                tooltipDelay: [300, 0, 1e3, 25],
                zoomView: !0
            },
            manipulation: {enabled: !1, initiallyActive: !1},
            physics: {
                enabled: !0,
                barnesHut: {
                    gravitationalConstant: [-2e3, -3e4, 0, 50],
                    centralGravity: [.3, 0, 10, .05],
                    springLength: [95, 0, 500, 5],
                    springConstant: [.04, 0, 1.2, .005],
                    damping: [.09, 0, 1, .01],
                    avoidOverlap: [0, 0, 1, .01]
                },
                forceAtlas2Based: {
                    gravitationalConstant: [-50, -500, 0, 1],
                    centralGravity: [.01, 0, 1, .005],
                    springLength: [95, 0, 500, 5],
                    springConstant: [.08, 0, 1.2, .005],
                    damping: [.4, 0, 1, .01],
                    avoidOverlap: [0, 0, 1, .01]
                },
                repulsion: {
                    centralGravity: [.2, 0, 10, .05],
                    springLength: [200, 0, 500, 5],
                    springConstant: [.05, 0, 1.2, .005],
                    nodeDistance: [100, 0, 500, 5],
                    damping: [.09, 0, 1, .01]
                },
                hierarchicalRepulsion: {
                    centralGravity: [.2, 0, 10, .05],
                    springLength: [100, 0, 500, 5],
                    springConstant: [.01, 0, 1.2, .005],
                    nodeDistance: [120, 0, 500, 5],
                    damping: [.09, 0, 1, .01]
                },
                maxVelocity: [50, 0, 150, 1],
                minVelocity: [.1, .01, .5, .01],
                solver: ["barnesHut", "forceAtlas2Based", "repulsion", "hierarchicalRepulsion"],
                timestep: [.5, .01, 1, .01]
            }
        };
        e.allOptions = d, e.configureOptions = l
    }, function (t, e, i) {
        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = function () {
            function t(t, e) {
                var i = [], o = !0, n = !1, s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(o = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); o = !0);
                } catch (t) {
                    n = !0, s = t
                } finally {
                    try {
                        !o && a.return && a.return()
                    } finally {
                        if (n)throw s
                    }
                }
                return i
            }

            return function (e, i) {
                if (Array.isArray(e))return e;
                if (Symbol.iterator in Object(e))return t(e, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), r = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), a = i(118), h = o(a), d = function () {
            function t(e, i, o) {
                n(this, t), this.body = e, this.springLength = i, this.springConstant = o, this.distanceSolver = new h.default
            }

            return r(t, [{
                key: "setOptions", value: function (t) {
                    t && (t.springLength && (this.springLength = t.springLength), t.springConstant && (this.springConstant = t.springConstant))
                }
            }, {
                key: "solve", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = this.distanceSolver.getDistances(this.body, t, e);
                    this._createL_matrix(o), this._createK_matrix(o);
                    for (var n = .01, r = 1, a = 0, h = Math.max(1e3, Math.min(10 * this.body.nodeIndices.length, 6e3)), d = 5, l = 1e9, c = 0, u = 0, p = 0, f = 0, m = 0; l > n && a < h;) {
                        a += 1;
                        var v = this._getHighestEnergyNode(i), g = s(v, 4);
                        for (c = g[0], l = g[1], u = g[2], p = g[3], f = l, m = 0; f > r && m < d;) {
                            m += 1, this._moveNode(c, u, p);
                            var y = this._getEnergy(c), b = s(y, 3);
                            f = b[0], u = b[1], p = b[2]
                        }
                    }
                }
            }, {
                key: "_getHighestEnergyNode", value: function (t) {
                    for (var e = this.body.nodeIndices, i = this.body.nodes, o = 0, n = e[0], r = 0, a = 0, h = 0; h < e.length; h++) {
                        var d = e[h];
                        if (i[d].predefinedPosition === !1 || i[d].isCluster === !0 && t === !0 || i[d].options.fixed.x === !0 || i[d].options.fixed.y === !0) {
                            var l = this._getEnergy(d), c = s(l, 3), u = c[0], p = c[1], f = c[2];
                            o < u && (o = u, n = d, r = p, a = f)
                        }
                    }
                    return [n, o, r, a]
                }
            }, {
                key: "_getEnergy", value: function (t) {
                    for (var e = this.body.nodeIndices, i = this.body.nodes, o = i[t].x, n = i[t].y, s = 0, r = 0, a = 0; a < e.length; a++) {
                        var h = e[a];
                        if (h !== t) {
                            var d = i[h].x, l = i[h].y, c = 1 / Math.sqrt(Math.pow(o - d, 2) + Math.pow(n - l, 2));
                            s += this.K_matrix[t][h] * (o - d - this.L_matrix[t][h] * (o - d) * c), r += this.K_matrix[t][h] * (n - l - this.L_matrix[t][h] * (n - l) * c)
                        }
                    }
                    var u = Math.sqrt(Math.pow(s, 2) + Math.pow(r, 2));
                    return [u, s, r]
                }
            }, {
                key: "_moveNode", value: function (t, e, i) {
                    for (var o = this.body.nodeIndices, n = this.body.nodes, s = 0, r = 0, a = 0, h = n[t].x, d = n[t].y, l = 0; l < o.length; l++) {
                        var c = o[l];
                        if (c !== t) {
                            var u = n[c].x, p = n[c].y, f = 1 / Math.pow(Math.pow(h - u, 2) + Math.pow(d - p, 2), 1.5);
                            s += this.K_matrix[t][c] * (1 - this.L_matrix[t][c] * Math.pow(d - p, 2) * f), r += this.K_matrix[t][c] * (this.L_matrix[t][c] * (h - u) * (d - p) * f), a += this.K_matrix[t][c] * (1 - this.L_matrix[t][c] * Math.pow(h - u, 2) * f)
                        }
                    }
                    var m = s, v = r, g = e, y = a, b = i, _ = (g / m + b / v) / (v / m - y / v), w = -(v * _ + g) / m;
                    n[t].x += w, n[t].y += _
                }
            }, {
                key: "_createL_matrix", value: function (t) {
                    var e = this.body.nodeIndices, i = this.springLength;
                    this.L_matrix = [];
                    for (var o = 0; o < e.length; o++) {
                        this.L_matrix[e[o]] = {};
                        for (var n = 0; n < e.length; n++)this.L_matrix[e[o]][e[n]] = i * t[e[o]][e[n]]
                    }
                }
            }, {
                key: "_createK_matrix", value: function (t) {
                    var e = this.body.nodeIndices, i = this.springConstant;
                    this.K_matrix = [];
                    for (var o = 0; o < e.length; o++) {
                        this.K_matrix[e[o]] = {};
                        for (var n = 0; n < e.length; n++)this.K_matrix[e[o]][e[n]] = i * Math.pow(t[e[o]][e[n]], -2)
                    }
                }
            }]), t
        }();
        e.default = d
    }, function (t, e) {
        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value"in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e
            }
        }(), n = function () {
            function t() {
                i(this, t)
            }

            return o(t, [{
                key: "getDistances", value: function (t, e, i) {
                    for (var o = {}, n = t.edges, s = 0; s < e.length; s++) {
                        o[e[s]] = {}, o[e[s]] = {};
                        for (var r = 0; r < e.length; r++)o[e[s]][e[r]] = s == r ? 0 : 1e9, o[e[s]][e[r]] = s == r ? 0 : 1e9
                    }
                    for (var a = 0; a < i.length; a++) {
                        var h = n[i[a]];
                        h.connected === !0 && void 0 !== o[h.fromId] && void 0 !== o[h.toId] && (o[h.fromId][h.toId] = 1, o[h.toId][h.fromId] = 1)
                    }
                    for (var d = e.length, l = 0; l < d; l++)for (var c = 0; c < d - 1; c++)for (var u = c + 1; u < d; u++)o[e[c]][e[u]] = Math.min(o[e[c]][e[u]], o[e[c]][e[l]] + o[e[l]][e[u]]), o[e[u]][e[c]] = o[e[c]][e[u]];
                    return o
                }
            }]), t
        }();
        e.default = n
    }, function (t, e) {
        "undefined" != typeof CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.circle = function (t, e, i) {
            this.beginPath(), this.arc(t, e, i, 0, 2 * Math.PI, !1), this.closePath()
        }, CanvasRenderingContext2D.prototype.square = function (t, e, i) {
            this.beginPath(), this.rect(t - i, e - i, 2 * i, 2 * i), this.closePath()
        }, CanvasRenderingContext2D.prototype.triangle = function (t, e, i) {
            this.beginPath(), i *= 1.15, e += .275 * i;
            var o = 2 * i, n = o / 2, s = Math.sqrt(3) / 6 * o, r = Math.sqrt(o * o - n * n);
            this.moveTo(t, e - (r - s)), this.lineTo(t + n, e + s), this.lineTo(t - n, e + s), this.lineTo(t, e - (r - s)), this.closePath()
        }, CanvasRenderingContext2D.prototype.triangleDown = function (t, e, i) {
            this.beginPath(), i *= 1.15, e -= .275 * i;
            var o = 2 * i, n = o / 2, s = Math.sqrt(3) / 6 * o, r = Math.sqrt(o * o - n * n);
            this.moveTo(t, e + (r - s)), this.lineTo(t + n, e - s), this.lineTo(t - n, e - s), this.lineTo(t, e + (r - s)), this.closePath()
        }, CanvasRenderingContext2D.prototype.star = function (t, e, i) {
            this.beginPath(), i *= .82, e += .1 * i;
            for (var o = 0; o < 10; o++) {
                var n = o % 2 === 0 ? 1.3 * i : .5 * i;
                this.lineTo(t + n * Math.sin(2 * o * Math.PI / 10), e - n * Math.cos(2 * o * Math.PI / 10))
            }
            this.closePath()
        }, CanvasRenderingContext2D.prototype.diamond = function (t, e, i) {
            this.beginPath(), this.lineTo(t, e + i), this.lineTo(t + i, e), this.lineTo(t, e - i), this.lineTo(t - i, e), this.closePath()
        }, CanvasRenderingContext2D.prototype.roundRect = function (t, e, i, o, n) {
            var s = Math.PI / 180;
            i - 2 * n < 0 && (n = i / 2), o - 2 * n < 0 && (n = o / 2), this.beginPath(), this.moveTo(t + n, e), this.lineTo(t + i - n, e), this.arc(t + i - n, e + n, n, 270 * s, 360 * s, !1), this.lineTo(t + i, e + o - n), this.arc(t + i - n, e + o - n, n, 0, 90 * s, !1), this.lineTo(t + n, e + o), this.arc(t + n, e + o - n, n, 90 * s, 180 * s, !1), this.lineTo(t, e + n), this.arc(t + n, e + n, n, 180 * s, 270 * s, !1), this.closePath()
        }, CanvasRenderingContext2D.prototype.ellipse = function (t, e, i, o) {
            var n = .5522848, s = i / 2 * n, r = o / 2 * n, a = t + i, h = e + o, d = t + i / 2, l = e + o / 2;
            this.beginPath(), this.moveTo(t, l), this.bezierCurveTo(t, l - r, d - s, e, d, e), this.bezierCurveTo(d + s, e, a, l - r, a, l), this.bezierCurveTo(a, l + r, d + s, h, d, h), this.bezierCurveTo(d - s, h, t, l + r, t, l), this.closePath()
        }, CanvasRenderingContext2D.prototype.database = function (t, e, i, o) {
            var n = 1 / 3, s = i, r = o * n, a = .5522848, h = s / 2 * a, d = r / 2 * a, l = t + s, c = e + r, u = t + s / 2, p = e + r / 2, f = e + (o - r / 2), m = e + o;
            this.beginPath(), this.moveTo(l, p), this.bezierCurveTo(l, p + d, u + h, c, u, c), this.bezierCurveTo(u - h, c, t, p + d, t, p), this.bezierCurveTo(t, p - d, u - h, e, u, e), this.bezierCurveTo(u + h, e, l, p - d, l, p), this.lineTo(l, f), this.bezierCurveTo(l, f + d, u + h, m, u, m), this.bezierCurveTo(u - h, m, t, f + d, t, f), this.lineTo(t, p)
        }, CanvasRenderingContext2D.prototype.arrowEndpoint = function (t, e, i, o) {
            var n = t - o * Math.cos(i), s = e - o * Math.sin(i), r = t - .9 * o * Math.cos(i), a = e - .9 * o * Math.sin(i), h = n + o / 3 * Math.cos(i + .5 * Math.PI), d = s + o / 3 * Math.sin(i + .5 * Math.PI), l = n + o / 3 * Math.cos(i - .5 * Math.PI), c = s + o / 3 * Math.sin(i - .5 * Math.PI);
            this.beginPath(), this.moveTo(t, e), this.lineTo(h, d), this.lineTo(r, a), this.lineTo(l, c), this.closePath()
        }, CanvasRenderingContext2D.prototype.circleEndpoint = function (t, e, i, o) {
            var n = .4 * o, s = t - n * Math.cos(i), r = e - n * Math.sin(i);
            this.circle(s, r, n)
        }, CanvasRenderingContext2D.prototype.dashedLine = function (t, e, i, o, n) {
            this.beginPath(), this.moveTo(t, e);
            for (var s = n.length, r = i - t, a = o - e, h = a / r, d = Math.sqrt(r * r + a * a), l = 0, c = !0, u = 0, p = n[0]; d >= .1;)p = n[l++ % s], p > d && (p = d), u = Math.sqrt(p * p / (1 + h * h)), u = r < 0 ? -u : u, t += u, e += h * u, c === !0 ? this.lineTo(t, e) : this.moveTo(t, e), d -= p, c = !c
        })
    }, function (t, e) {
        function i(t) {
            return P = t, p()
        }

        function o() {
            I = 0, N = P.charAt(0)
        }

        function n() {
            I++, N = P.charAt(I)
        }

        function s() {
            return P.charAt(I + 1)
        }

        function r(t) {
            return z.test(t)
        }

        function a(t, e) {
            if (t || (t = {}), e)for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }

        function h(t, e, i) {
            for (var o = e.split("."), n = t; o.length;) {
                var s = o.shift();
                o.length ? (n[s] || (n[s] = {}), n = n[s]) : n[s] = i
            }
        }

        function d(t, e) {
            for (var i, o, n = null, s = [t], r = t; r.parent;)s.push(r.parent), r = r.parent;
            if (r.nodes)for (i = 0, o = r.nodes.length; i < o; i++)if (e.id === r.nodes[i].id) {
                n = r.nodes[i];
                break
            }
            for (n || (n = {id: e.id}, t.node && (n.attr = a(n.attr, t.node))), i = s.length - 1; i >= 0; i--) {
                var h = s[i];
                h.nodes || (h.nodes = []), h.nodes.indexOf(n) === -1 && h.nodes.push(n)
            }
            e.attr && (n.attr = a(n.attr, e.attr))
        }

        function l(t, e) {
            if (t.edges || (t.edges = []), t.edges.push(e), t.edge) {
                var i = a({}, t.edge);
                e.attr = a(i, e.attr)
            }
        }

        function c(t, e, i, o, n) {
            var s = {from: e, to: i, type: o};
            return t.edge && (s.attr = a({}, t.edge)), s.attr = a(s.attr || {}, n), s
        }

        function u() {
            for (L = E.NULL, R = ""; " " === N || "\t" === N || "\n" === N || "\r" === N;)n();
            do {
                var t = !1;
                if ("#" === N) {
                    for (var e = I - 1; " " === P.charAt(e) || "\t" === P.charAt(e);)e--;
                    if ("\n" === P.charAt(e) || "" === P.charAt(e)) {
                        for (; "" != N && "\n" != N;)n();
                        t = !0
                    }
                }
                if ("/" === N && "/" === s()) {
                    for (; "" != N && "\n" != N;)n();
                    t = !0
                }
                if ("/" === N && "*" === s()) {
                    for (; "" != N;) {
                        if ("*" === N && "/" === s()) {
                            n(), n();
                            break
                        }
                        n()
                    }
                    t = !0
                }
                for (; " " === N || "\t" === N || "\n" === N || "\r" === N;)n()
            } while (t);
            if ("" === N)return void(L = E.DELIMITER);
            var i = N + s();
            if (M[i])return L = E.DELIMITER, R = i, n(), void n();
            if (M[N])return L = E.DELIMITER, R = N, void n();
            if (r(N) || "-" === N) {
                for (R += N, n(); r(N);)R += N, n();
                return "false" === R ? R = !1 : "true" === R ? R = !0 : isNaN(Number(R)) || (R = Number(R)), void(L = E.IDENTIFIER)
            }
            if ('"' === N) {
                for (n(); "" != N && ('"' != N || '"' === N && '"' === s());)R += N, '"' === N && n(), n();
                if ('"' != N)throw w('End of string " expected');
                return n(), void(L = E.IDENTIFIER)
            }
            for (L = E.UNKNOWN; "" != N;)R += N, n();
            throw new SyntaxError('Syntax error in part "' + x(R, 30) + '"')
        }

        function p() {
            var t = {};
            if (o(), u(), "strict" === R && (t.strict = !0, u()), "graph" !== R && "digraph" !== R || (t.type = R, u()), L === E.IDENTIFIER && (t.id = R, u()), "{" != R)throw w("Angle bracket { expected");
            if (u(), f(t), "}" != R)throw w("Angle bracket } expected");
            if (u(), "" !== R)throw w("End of file expected");
            return u(), delete t.node, delete t.edge, delete t.graph, t
        }

        function f(t) {
            for (; "" !== R && "}" != R;)m(t), ";" === R && u()
        }

        function m(t) {
            var e = v(t);
            if (e)return void b(t, e);
            var i = g(t);
            if (!i) {
                if (L != E.IDENTIFIER)throw w("Identifier expected");
                var o = R;
                if (u(), "=" === R) {
                    if (u(), L != E.IDENTIFIER)throw w("Identifier expected");
                    t[o] = R, u()
                } else y(t, o)
            }
        }

        function v(t) {
            var e = null;
            if ("subgraph" === R && (e = {}, e.type = "subgraph", u(), L === E.IDENTIFIER && (e.id = R, u())), "{" === R) {
                if (u(), e || (e = {}), e.parent = t, e.node = t.node, e.edge = t.edge, e.graph = t.graph, f(e), "}" != R)throw w("Angle bracket } expected");
                u(), delete e.node, delete e.edge, delete e.graph, delete e.parent, t.subgraphs || (t.subgraphs = []), t.subgraphs.push(e)
            }
            return e
        }

        function g(t) {
            return "node" === R ? (u(), t.node = _(), "node") : "edge" === R ? (u(), t.edge = _(), "edge") : "graph" === R ? (u(), t.graph = _(), "graph") : null
        }

        function y(t, e) {
            var i = {id: e}, o = _();
            o && (i.attr = o), d(t, i), b(t, e)
        }

        function b(t, e) {
            for (; "->" === R || "--" === R;) {
                var i, o = R;
                u();
                var n = v(t);
                if (n)i = n; else {
                    if (L != E.IDENTIFIER)throw w("Identifier or subgraph expected");
                    i = R, d(t, {id: i}), u()
                }
                var s = _(), r = c(t, e, i, o, s);
                l(t, r), e = i
            }
        }

        function _() {
            for (var t = null; "[" === R;) {
                for (u(), t = {}; "" !== R && "]" != R;) {
                    if (L != E.IDENTIFIER)throw w("Attribute name expected");
                    var e = R;
                    if (u(), "=" != R)throw w("Equal sign = expected");
                    if (u(), L != E.IDENTIFIER)throw w("Attribute value expected");
                    var i = R;
                    h(t, e, i), u(), "," == R && u()
                }
                if ("]" != R)throw w("Bracket ] expected");
                u()
            }
            return t
        }

        function w(t) {
            return new SyntaxError(t + ', got "' + x(R, 30) + '" (char ' + I + ")")
        }

        function x(t, e) {
            return t.length <= e ? t : t.substr(0, 27) + "..."
        }

        function k(t, e, i) {
            Array.isArray(t) ? t.forEach(function (t) {
                Array.isArray(e) ? e.forEach(function (e) {
                    i(t, e)
                }) : i(t, e)
            }) : Array.isArray(e) ? e.forEach(function (e) {
                i(t, e)
            }) : i(t, e)
        }

        function O(t, e, i) {
            for (var o = e.split("."), n = o.pop(), s = t, r = 0; r < o.length; r++) {
                var a = o[r];
                a in s || (s[a] = {}), s = s[a]
            }
            return s[n] = i, t
        }

        function D(t, e) {
            var i = {};
            for (var o in t)if (t.hasOwnProperty(o)) {
                var n = e[o];
                Array.isArray(n) ? n.forEach(function (e) {
                    O(i, e, t[o])
                }) : "string" == typeof n ? O(i, n, t[o]) : O(i, o, t[o])
            }
            return i
        }

        function S(t) {
            var e = i(t), o = {nodes: [], edges: [], options: {}};
            if (e.nodes && e.nodes.forEach(function (t) {
                    var e = {id: t.id, label: String(t.label || t.id)};
                    a(e, D(t.attr, C)), e.image && (e.shape = "image"), o.nodes.push(e)
                }), e.edges) {
                var n = function (t) {
                    var e = {from: t.from, to: t.to};
                    return a(e, D(t.attr, T)), e.arrows = "->" === t.type ? "to" : void 0, e
                };
                e.edges.forEach(function (t) {
                    var e, i;
                    e = t.from instanceof Object ? t.from.nodes : {id: t.from}, i = t.to instanceof Object ? t.to.nodes : {id: t.to}, t.from instanceof Object && t.from.edges && t.from.edges.forEach(function (t) {
                        var e = n(t);
                        o.edges.push(e)
                    }), k(e, i, function (e, i) {
                        var s = c(o, e.id, i.id, t.type, t.attr), r = n(s);
                        o.edges.push(r)
                    }), t.to instanceof Object && t.to.edges && t.to.edges.forEach(function (t) {
                        var e = n(t);
                        o.edges.push(e)
                    })
                })
            }
            return e.attr && (o.options = e.attr), o
        }

        var C = {
            fontsize: "font.size",
            fontcolor: "font.color",
            labelfontcolor: "font.color",
            fontname: "font.face",
            color: ["color.border", "color.background"],
            fillcolor: "color.background",
            tooltip: "title",
            labeltooltip: "title"
        }, T = Object.create(C);
        T.color = "color.color";
        var E = {NULL: 0, DELIMITER: 1, IDENTIFIER: 2, UNKNOWN: 3}, M = {
            "{": !0,
            "}": !0,
            "[": !0,
            "]": !0,
            ";": !0,
            "=": !0,
            ",": !0,
            "->": !0,
            "--": !0
        }, P = "", I = 0, N = "", R = "", L = E.NULL, z = /[a-zA-Z_0-9.:#]/;
        e.parseDOT = i, e.DOTToGraph = S
    }, function (t, e) {
        function i(t, e) {
            var i = [], o = [], n = {edges: {inheritColor: !1}, nodes: {fixed: !1, parseColor: !1}};
            void 0 !== e && (void 0 !== e.fixed && (n.nodes.fixed = e.fixed), void 0 !== e.parseColor && (n.nodes.parseColor = e.parseColor), void 0 !== e.inheritColor && (n.edges.inheritColor = e.inheritColor));
            for (var s = t.edges, r = t.nodes, a = 0; a < s.length; a++) {
                var h = {}, d = s[a];
                h.id = d.id, h.from = d.source, h.to = d.target, h.attributes = d.attributes, h.label = d.label, h.title = void 0 !== d.attributes ? d.attributes.title : void 0, "Directed" === d.type && (h.arrows = "to"), d.color && n.inheritColor === !1 && (h.color = d.color), i.push(h)
            }
            for (var a = 0; a < r.length; a++) {
                var l = {}, c = r[a];
                l.id = c.id, l.attributes = c.attributes, l.title = c.title, l.x = c.x, l.y = c.y, l.label = c.label, l.title = void 0 !== c.attributes ? c.attributes.title : void 0, n.nodes.parseColor === !0 ? l.color = c.color : l.color = void 0 !== c.color ? {
                    background: c.color,
                    border: c.color,
                    highlight: {background: c.color, border: c.color},
                    hover: {background: c.color, border: c.color}
                } : void 0, l.size = c.size, l.fixed = n.nodes.fixed && void 0 !== c.x && void 0 !== c.y, o.push(l)
            }
            return {nodes: o, edges: i}
        }

        e.parseGephi = i
    }, function (t, e) {
        e.en = {
            edit: "Edit",
            del: "Delete selected",
            back: "Back",
            addNode: "Add Node",
            addEdge: "Add Edge",
            editNode: "Edit Node",
            editEdge: "Edit Edge",
            addDescription: "Click in an empty space to place a new node.",
            edgeDescription: "Click on a node and drag the edge to another node to connect them.",
            editEdgeDescription: "Click on the control points and drag them to a node to connect to it.",
            createEdgeError: "Cannot link edges to a cluster.",
            deleteClusterError: "Clusters cannot be deleted.",
            editClusterError: "Clusters cannot be edited."
        }, e.en_EN = e.en, e.en_US = e.en, e.de = {
            edit: "Editieren",
            del: "Lösche Auswahl",
            back: "Zurück",
            addNode: "Knoten hinzufügen",
            addEdge: "Kante hinzufügen",
            editNode: "Knoten editieren",
            editEdge: "Kante editieren",
            addDescription: "Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",
            edgeDescription: "Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",
            editEdgeDescription: "Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",
            createEdgeError: "Es ist nicht möglich, Kanten mit Clustern zu verbinden.",
            deleteClusterError: "Cluster können nicht gelöscht werden.",
            editClusterError: "Cluster können nicht editiert werden."
        }, e.de_DE = e.de, e.es = {
            edit: "Editar",
            del: "Eliminar selección",
            back: "Átras",
            addNode: "Añadir nodo",
            addEdge: "Añadir arista",
            editNode: "Editar nodo",
            editEdge: "Editar arista",
            addDescription: "Haga clic en un lugar vacío para colocar un nuevo nodo.",
            edgeDescription: "Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",
            editEdgeDescription: "Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",
            createEdgeError: "No se puede conectar una arista a un grupo.",
            deleteClusterError: "No es posible eliminar grupos.",
            editClusterError: "No es posible editar grupos."
        }, e.es_ES = e.es, e.it = {
            edit: "Modifica",
            del: "Cancella la selezione",
            back: "Indietro",
            addNode: "Aggiungi un nodo",
            addEdge: "Aggiungi un vertice",
            editNode: "Modifica il nodo",
            editEdge: "Modifica il vertice",
            addDescription: "Clicca per aggiungere un nuovo nodo",
            edgeDescription: "Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",
            editEdgeDescription: "Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",
            createEdgeError: "Non si possono collegare vertici ad un cluster",
            deleteClusterError: "I cluster non possono essere cancellati",
            editClusterError: "I clusters non possono essere modificati."
        }, e.it_IT = e.it, e.nl = {
            edit: "Wijzigen",
            del: "Selectie verwijderen",
            back: "Terug",
            addNode: "Node toevoegen",
            addEdge: "Link toevoegen",
            editNode: "Node wijzigen",
            editEdge: "Link wijzigen",
            addDescription: "Klik op een leeg gebied om een nieuwe node te maken.",
            edgeDescription: "Klik op een node en sleep de link naar een andere node om ze te verbinden.",
            editEdgeDescription: "Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",
            createEdgeError: "Kan geen link maken naar een cluster.",
            deleteClusterError: "Clusters kunnen niet worden verwijderd.",
            editClusterError: "Clusters kunnen niet worden aangepast."
        }, e.nl_NL = e.nl, e.nl_BE = e.nl, e["pt-br"] = {
            edit: "Editar",
            del: "Remover selecionado",
            back: "Voltar",
            addNode: "Adicionar nó",
            addEdge: "Adicionar aresta",
            editNode: "Editar nó",
            editEdge: "Editar aresta",
            addDescription: "Clique em um espaço em branco para adicionar um novo nó",
            edgeDescription: "Clique em um nó e arraste a aresta até outro nó para conectá-los",
            editEdgeDescription: "Clique nos pontos de controle e os arraste para um nó para conectá-los",
            createEdgeError: "Não foi possível linkar arestas a um cluster.",
            deleteClusterError: "Clusters não puderam ser removidos.",
            editClusterError: "Clusters não puderam ser editados."
        }, e["pt-BR"] = e["pt-br"], e.pt_BR = e["pt-br"], e.pt_br = e["pt-br"], e.ru = {
            edit: "Редактировать",
            del: "Удалить выбранное",
            back: "Назад",
            addNode: "Добавить узел",
            addEdge: "Добавить ребро",
            editNode: "Редактировать узел",
            editEdge: "Редактировать ребро",
            addDescription: "Кликните в свободное место, чтобы добавить новый узел.",
            edgeDescription: "Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",
            editEdgeDescription: "Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",
            createEdgeError: "Невозможно соединить ребра в кластер.",
            deleteClusterError: "Кластеры не могут быть удалены",
            editClusterError: "Кластеры недоступны для редактирования."
        }, e.ru_RU = e.ru
    }])
});
//# sourceMappingURL=vis.map
