/*!
 * FullCalendar v2.0.2
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], t) : t(jQuery, moment)
})(function(t, e) {
    function n(t, e) {
        return e.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
    }

    function r(t, e) {
        var n = e.longDateFormat("L");
        return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), t.isRTL ? n += " ddd" : n = "ddd " + n, n
    }

    function a(t) {
        o(xe, t)
    }

    function o(e) {
        function n(n, r) {
            t.isPlainObject(r) && t.isPlainObject(e[n]) && !i(n) ? e[n] = o({}, e[n], r) : void 0 !== r && (e[n] = r)
        }
        for (var r = 1; arguments.length > r; r++) t.each(arguments[r], n);
        return e
    }

    function i(t) {
        return /(Time|Duration)$/.test(t)
    }

    function s(n, r) {
        function a(t) {
            se ? f() && (b(), m(t)) : i()
        }

        function i() {
            le = ne.theme ? "ui" : "fc", n.addClass("fc"), ne.isRTL ? n.addClass("fc-rtl") : n.addClass("fc-ltr"), ne.theme && n.addClass("ui-widget"), se = t("<div class='fc-content' />").prependTo(n), oe = new l(te, ne), ie = oe.render(), ie && n.prepend(ie), h(ne.defaultView), ne.handleWindowResize && t(window).resize(w), v() || s()
        }

        function s() {
            setTimeout(function() {
                !ce.start && v() && g()
            }, 0)
        }

        function d() {
            ce && (Q("viewDestroy", ce, ce, ce.element), ce.triggerEventDestroy()), t(window).unbind("resize", w), ne.droppable && t(document).off("dragstart", J).off("dragstop", K), ce.selectionManagerDestroy && ce.selectionManagerDestroy(), oe.destroy(), se.remove(), n.removeClass("fc fc-ltr fc-rtl ui-widget")
        }

        function f() {
            return n.is(":visible")
        }

        function v() {
            return t("body").is(":visible")
        }

        function h(t) {
            ce && t == ce.name || p(t)
        }

        function p(e) {
            ye++, ce && (Q("viewDestroy", ce, ce, ce.element), N(), ce.triggerEventDestroy(), $(), ce.element.remove(), oe.deactivateButton(ce.name)), oe.activateButton(e), ce = new _e[e](t("<div class='fc-view fc-view-" + e + "' />").appendTo(se), te), g(), V(), ye--
        }

        function g(t) {
            ce.start && !t && fe.isWithin(ce.intervalStart, ce.intervalEnd) || f() && m(t)
        }

        function m(t) {
            ye++, ce.start && (Q("viewDestroy", ce, ce, ce.element), N(), x()), $(), t && (fe = ce.incrementDate(fe, t)), ce.render(fe.clone()), D(), V(), (ce.afterRender || k)(), H(), F(), Q("viewRender", ce, ce, ce.element), ye--, M()
        }

        function y() {
            f() && (N(), x(), b(), D(), S())
        }

        function b() {
            ue = ne.contentHeight ? ne.contentHeight : ne.height ? ne.height - (ie ? ie.height() : 0) - T(se) : Math.round(se.width() / Math.max(ne.aspectRatio, .5))
        }

        function D() {
            void 0 === ue && b(), ye++, ce.setHeight(ue), ce.setWidth(se.width()), ye--, de = n.outerWidth()
        }

        function w(t) {
            if (!ye && t.target === window)
                if (ce.start) {
                    var e = ++me;
                    setTimeout(function() {
                        e == me && !ye && f() && de != (de = n.outerWidth()) && (ye++, y(), ce.trigger("windowResize", ge), ye--)
                    }, ne.windowResizeDelay)
                } else s()
        }

        function C() {
            x(), z()
        }

        function E(t) {
            x(), S(t)
        }

        function S(t) {
            f() && (ce.renderEvents(be, t), ce.trigger("eventAfterAllRender"))
        }

        function x() {
            ce.triggerEventDestroy(), ce.clearEvents(), ce.clearEventData()
        }

        function M() {
            !ne.lazyFetching || he(ce.start, ce.end) ? z() : S()
        }

        function z() {
            pe(ce.start, ce.end)
        }

        function R(t) {
            be = t, S()
        }

        function _(t) {
            E(t)
        }

        function H() {
            oe.updateTitle(ce.title)
        }

        function F() {
            var t = te.getNow();
            t.isWithin(ce.intervalStart, ce.intervalEnd) ? oe.disableButton("Hoy") : oe.enableButton("Hoy")
        }

        function A(t, e) {
            ce.select(t, e)
        }

        function N() {
            ce && ce.unselect()
        }

        function Y() {
            g(-1)
        }

        function O() {
            g(1)
        }

        function W() {
            fe.add("years", -1), g()
        }

        function L() {
            fe.add("years", 1), g()
        }

        function Z() {
            fe = te.getNow(), g()
        }

        function P(t) {
            fe = te.moment(t), g()
        }

        function j(t) {
            fe.add(e.duration(t)), g()
        }

        function q() {
            return fe.clone()
        }

        function $() {
            se.css({
                width: "100%",
                height: se.height(),
                overflow: "hidden"
            })
        }

        function V() {
            se.css({
                width: "",
                height: "",
                overflow: ""
            })
        }

        function X() {
            return te
        }

        function U() {
            return ce
        }

        function G(t, e) {
            return void 0 === e ? ne[t] : (("height" == t || "contentHeight" == t || "aspectRatio" == t) && (ne[t] = e, y()), void 0)
        }

        function Q(t, e) {
            return ne[t] ? ne[t].apply(e || ge, Array.prototype.slice.call(arguments, 2)) : void 0
        }

        function J(e, n) {
            var r = e.target,
                a = t(r);
            if (!a.parents(".fc").length) {
                var o = ne.dropAccept;
                (t.isFunction(o) ? o.call(r, a) : a.is(o)) && (ve = r, ce.dragStart(ve, e, n))
            }
        }

        function K(t, e) {
            ve && (ce.dragStop(ve, t, e), ve = null)
        }
        var te = this;
        r = r || {};
        var ee, ne = o({}, xe, r);
        ee = ne.lang in Me ? Me[ne.lang] : Me[xe.lang], ee && (ne = o({}, xe, ee, r)), ne.isRTL && (ne = o({}, xe, ze, ee || {}, r)), te.options = ne, te.render = a, te.destroy = d, te.refetchEvents = C, te.reportEvents = R, te.reportEventChange = _, te.rerenderEvents = E, te.changeView = h, te.select = A, te.unselect = N, te.prev = Y, te.next = O, te.prevYear = W, te.nextYear = L, te.today = Z, te.gotoDate = P, te.incrementDate = j, te.getDate = q, te.getCalendar = X, te.getView = U, te.option = G, te.trigger = Q;
        var re = u(e.langData(ne.lang));
        if (ne.monthNames && (re._months = ne.monthNames), ne.monthNamesShort && (re._monthsShort = ne.monthNamesShort), ne.dayNames && (re._weekdays = ne.dayNames), ne.dayNamesShort && (re._weekdaysShort = ne.dayNamesShort), null != ne.firstDay) {
            var ae = u(re._week);
            ae.dow = ne.firstDay, re._week = ae
        }
        te.defaultAllDayEventDuration = e.duration(ne.defaultAllDayEventDuration), te.defaultTimedEventDuration = e.duration(ne.defaultTimedEventDuration), te.moment = function() {
            var t;
            return "local" === ne.timezone ? (t = Re.moment.apply(null, arguments), t.hasTime() && t.local()) : t = "UTC" === ne.timezone ? Re.moment.utc.apply(null, arguments) : Re.moment.parseZone.apply(null, arguments), t._lang = re, t
        }, te.getIsAmbigTimezone = function() {
            return "local" !== ne.timezone && "UTC" !== ne.timezone
        }, te.rezoneDate = function(t) {
            return te.moment(t.toArray())
        }, te.getNow = function() {
            var t = ne.now;
            return "function" == typeof t && (t = t()), te.moment(t)
        }, te.calculateWeekNumber = function(t) {
            var e = ne.weekNumberCalculation;
            return "function" == typeof e ? e(t) : "local" === e ? t.week() : "ISO" === e.toUpperCase() ? t.isoWeek() : void 0
        }, te.getEventEnd = function(t) {
            return t.end ? t.end.clone() : te.getDefaultEventEnd(t.allDay, t.start)
        }, te.getDefaultEventEnd = function(t, e) {
            var n = e.clone();
            return t ? n.stripTime().add(te.defaultAllDayEventDuration) : n.add(te.defaultTimedEventDuration), te.getIsAmbigTimezone() && n.stripZone(), n
        }, te.formatRange = function(t, e, n) {
            return "function" == typeof n && (n = n.call(te, ne, re)), I(t, e, n, null, ne.isRTL)
        }, te.formatDate = function(t, e) {
            return "function" == typeof e && (e = e.call(te, ne, re)), B(t, e)
        }, c.call(te, ne);
        var oe, ie, se, le, ce, de, ue, fe, ve, he = te.isFetchNeeded,
            pe = te.fetchEvents,
            ge = n[0],
            me = 0,
            ye = 0,
            be = [];
        fe = null != ne.defaultDate ? te.moment(ne.defaultDate) : te.getNow(), ne.droppable && t(document).on("dragstart", J).on("dragstop", K)
    }

    function l(e, n) {
        function r() {
            f = n.theme ? "ui" : "fc";
            var e = n.header;
            return e ? v = t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(o("left")).append(o("center")).append(o("right"))) : void 0
        }

        function a() {
            v.remove()
        }

        function o(r) {
            var a = t("<td class='fc-header-" + r + "'/>"),
                o = n.header[r];
            return o && t.each(o.split(" "), function(r) {
                r > 0 && a.append("<span class='fc-header-space'/>");
                var o;
                t.each(this.split(","), function(r, i) {
                    if ("title" == i) a.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"), o && o.addClass(f + "-corner-right"), o = null;
                    else {
                        var s;
                        if (e[i] ? s = e[i] : _e[i] && (s = function() {
                            h.removeClass(f + "-state-hover"), e.changeView(i)
                        }), s) {
                            var l, c = z(n.themeButtonIcons, i),
                                d = z(n.buttonIcons, i),
                                u = z(n.defaultButtonText, i),
                                v = z(n.buttonText, i);
                            l = v ? R(v) : c && n.theme ? "<span class='ui-icon ui-icon-" + c + "'></span>" : d && !n.theme ? "<span class='fc-icon fc-icon-" + d + "'></span>" : R(u || i);
                            var h = t("<span class='fc-button fc-button-" + i + " " + f + "-state-default'>" + l + "</span>").click(function() {
                                h.hasClass(f + "-state-disabled") || s()
                            }).mousedown(function() {
                                h.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-down")
                            }).mouseup(function() {
                                h.removeClass(f + "-state-down")
                            }).hover(function() {
                                h.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-hover")
                            }, function() {
                                h.removeClass(f + "-state-hover").removeClass(f + "-state-down")
                            }).appendTo(a);
                            H(h), o || h.addClass(f + "-corner-left"), o = h
                        }
                    }
                }), o && o.addClass(f + "-corner-right")
            }), a
        }

        function i(t) {
            v.find("h2").html(t)
        }

        function s(t) {
            v.find("span.fc-button-" + t).addClass(f + "-state-active")
        }

        function l(t) {
            v.find("span.fc-button-" + t).removeClass(f + "-state-active")
        }

        function c(t) {
            v.find("span.fc-button-" + t).addClass(f + "-state-disabled")
        }

        function d(t) {
            v.find("span.fc-button-" + t).removeClass(f + "-state-disabled")
        }
        var u = this;
        u.render = r, u.destroy = a, u.updateTitle = i, u.activateButton = s, u.deactivateButton = l, u.disableButton = c, u.enableButton = d;
        var f, v = t([])
    }

    function c(e) {
        function n(t, e) {
            return !E || t.clone().stripZone() < E.clone().stripZone() || e.clone().stripZone() > S.clone().stripZone()
        }

        function r(t, e) {
            E = t, S = e, O = [];
            var n = ++H,
                r = _.length;
            F = r;
            for (var o = 0; r > o; o++) a(_[o], n)
        }

        function a(e, n) {
            o(e, function(r) {
                var a, o, i = t.isArray(e.events);
                if (n == H) {
                    if (r)
                        for (a = 0; r.length > a; a++) o = r[a], i || (o = D(o, e)), o && O.push(o);
                    F--, F || M(O)
                }
            })
        }

        function o(n, r) {
            var a, i, s = Re.sourceFetchers;
            for (a = 0; s.length > a; a++) {
                if (i = s[a].call(C, n, E.clone(), S.clone(), e.timezone, r), i === !0) return;
                if ("object" == typeof i) return o(i, r), void 0
            }
            var l = n.events;
            if (l) t.isFunction(l) ? (y(), l.call(C, E.clone(), S.clone(), e.timezone, function(t) {
                r(t), b()
            })) : t.isArray(l) ? r(l) : r();
            else {
                var c = n.url;
                if (c) {
                    var d, u = n.success,
                        f = n.error,
                        v = n.complete;
                    d = t.isFunction(n.data) ? n.data() : n.data;
                    var h = t.extend({}, d || {}),
                        p = Y(n.startParam, e.startParam),
                        g = Y(n.endParam, e.endParam),
                        m = Y(n.timezoneParam, e.timezoneParam);
                    p && (h[p] = E.format()), g && (h[g] = S.format()), e.timezone && "local" != e.timezone && (h[m] = e.timezone), y(), t.ajax(t.extend({}, He, n, {
                        data: h,
                        success: function(e) {
                            e = e || [];
                            var n = N(u, this, arguments);
                            t.isArray(n) && (e = n), r(e)
                        },
                        error: function() {
                            N(f, this, arguments), r()
                        },
                        complete: function() {
                            N(v, this, arguments), b()
                        }
                    }))
                } else r()
            }
        }

        function i(t) {
            var e = s(t);
            e && (_.push(e), F++, a(e, H))
        }

        function s(e) {
            var n, r, a = Re.sourceNormalizers;
            if (t.isFunction(e) || t.isArray(e) ? n = {
                events: e
            } : "string" == typeof e ? n = {
                url: e
            } : "object" == typeof e && (n = t.extend({}, e), "string" == typeof n.className && (n.className = n.className.split(/\s+/))), n) {
                for (t.isArray(n.events) && (n.events = t.map(n.events, function(t) {
                    return D(t, n)
                })), r = 0; a.length > r; r++) a[r].call(C, n);
                return n
            }
        }

        function l(e) {
            _ = t.grep(_, function(t) {
                return !c(t, e)
            }), O = t.grep(O, function(t) {
                return !c(t.source, e)
            }), M(O)
        }

        function c(t, e) {
            return t && e && u(t) == u(e)
        }

        function u(t) {
            return ("object" == typeof t ? t.events || t.url : "") || t
        }

        function f(t) {
            t.start = C.moment(t.start), t.end && (t.end = C.moment(t.end)), w(t), h(t), M(O)
        }

        function h(t) {
            var e, n, r, a;
            for (e = 0; O.length > e; e++)
                if (n = O[e], n._id == t._id && n !== t)
                    for (r = 0; W.length > r; r++) a = W[r], void 0 !== t[a] && (n[a] = t[a])
        }

        function p(t, e) {
            var n = D(t);
            n && (n.source || (e && (R.events.push(n), n.source = R), O.push(n)), M(O))
        }

        function g(e) {
            var n, r;
            for (null == e ? e = function() {
                return !0
            } : t.isFunction(e) || (n = e + "", e = function(t) {
                return t._id == n
            }), O = t.grep(O, e, !0), r = 0; _.length > r; r++) t.isArray(_[r].events) && (_[r].events = t.grep(_[r].events, e, !0));
            M(O)
        }

        function m(e) {
            return t.isFunction(e) ? t.grep(O, e) : null != e ? (e += "", t.grep(O, function(t) {
                return t._id == e
            })) : O
        }

        function y() {
            A++ || k("loading", null, !0, x())
        }

        function b() {
            --A || k("loading", null, !1, x())
        }

        function D(n, r) {
            var a, o, i, s, l = {};
            return e.eventDataTransform && (n = e.eventDataTransform(n)), r && r.eventDataTransform && (n = r.eventDataTransform(n)), a = C.moment(n.start || n.date), a.isValid() && (o = null, !n.end || (o = C.moment(n.end), o.isValid())) ? (i = n.allDay, void 0 === i && (s = Y(r ? r.allDayDefault : void 0, e.allDayDefault), i = void 0 !== s ? s : !(a.hasTime() || o && o.hasTime())), i ? (a.hasTime() && a.stripTime(), o && o.hasTime() && o.stripTime()) : (a.hasTime() || (a = C.rezoneDate(a)), o && !o.hasTime() && (o = C.rezoneDate(o))), t.extend(l, n), r && (l.source = r), l._id = n._id || (void 0 === n.id ? "_fc" + Fe++ : n.id + ""), l.className = n.className ? "string" == typeof n.className ? n.className.split(/\s+/) : n.className : [], l.allDay = i, l.start = a, l.end = o, e.forceEventDuration && !l.end && (l.end = z(l)), d(l), l) : void 0
        }

        function w(t, e, n) {
            var r, a, o, i, s = t._allDay,
                l = t._start,
                c = t._end,
                d = !1;
            return e || n || (e = t.start, n = t.end), r = t.allDay != s ? t.allDay : !(e || n).hasTime(), r && (e && (e = e.clone().stripTime()), n && (n = n.clone().stripTime())), e && (a = r ? v(e, l.clone().stripTime()) : v(e, l)), r != s ? d = !0 : n && (o = v(n || C.getDefaultEventEnd(r, e || l), e || l).subtract(v(c || C.getDefaultEventEnd(s, l), l))), i = T(m(t._id), d, r, a, o), {
                dateDelta: a,
                durationDelta: o,
                undo: i
            }
        }

        function T(n, r, a, o, i) {
            var s = C.getIsAmbigTimezone(),
                l = [];
            return t.each(n, function(t, n) {
                var c = n._allDay,
                    u = n._start,
                    f = n._end,
                    v = null != a ? a : c,
                    h = u.clone(),
                    p = !r && f ? f.clone() : null;
                v ? (h.stripTime(), p && p.stripTime()) : (h.hasTime() || (h = C.rezoneDate(h)), p && !p.hasTime() && (p = C.rezoneDate(p))), p || !e.forceEventDuration && !+i || (p = C.getDefaultEventEnd(v, h)), h.add(o), p && p.add(o).add(i), s && (+o || +i) && (h.stripZone(), p && p.stripZone()), n.allDay = v, n.start = h, n.end = p, d(n), l.push(function() {
                    n.allDay = c, n.start = u, n.end = f, d(n)
                })
            }),
            function() {
                for (var t = 0; l.length > t; t++) l[t]()
            }
        }
        var C = this;
        C.isFetchNeeded = n, C.fetchEvents = r, C.addEventSource = i, C.removeEventSource = l, C.updateEvent = f, C.renderEvent = p, C.removeEvents = g, C.clientEvents = m, C.mutateEvent = w;
        var E, S, k = C.trigger,
            x = C.getView,
            M = C.reportEvents,
            z = C.getEventEnd,
            R = {
                events: []
            }, _ = [R],
            H = 0,
            F = 0,
            A = 0,
            O = [];
        t.each((e.events ? [e.events] : []).concat(e.eventSources || []), function(t, e) {
            var n = s(e);
            n && _.push(n)
        });
        var W = ["title", "url", "allDay", "className", "editable", "color", "backgroundColor", "borderColor", "textColor"]
    }

    function d(t) {
        t._allDay = t.allDay, t._start = t.start.clone(), t._end = t.end ? t.end.clone() : null
    }

    function u(t) {
        var e = function() {};
        return e.prototype = t, new e
    }

    function f(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
    }

    function v(t, n) {
        return e.duration({
            days: t.clone().stripTime().diff(n.clone().stripTime(), "days"),
            ms: t.time() - n.time()
        })
    }

    function h(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }

    function p(e, n, r) {
        e.unbind("mouseover").mouseover(function(e) {
            for (var a, o, i, s = e.target; s != this;) a = s, s = s.parentNode;
            void 0 !== (o = a._fci) && (a._fci = void 0, i = n[o], r(i.event, i.element, i), t(e.target).trigger(e)), e.stopPropagation()
        })
    }

    function g(e, n, r) {
        for (var a, o = 0; e.length > o; o++) a = t(e[o]), a.width(Math.max(0, n - y(a, r)))
    }

    function m(e, n, r) {
        for (var a, o = 0; e.length > o; o++) a = t(e[o]), a.height(Math.max(0, n - T(a, r)))
    }

    function y(t, e) {
        return b(t) + w(t) + (e ? D(t) : 0)
    }

    function b(e) {
        return (parseFloat(t.css(e[0], "paddingLeft", !0)) || 0) + (parseFloat(t.css(e[0], "paddingRight", !0)) || 0)
    }

    function D(e) {
        return (parseFloat(t.css(e[0], "marginLeft", !0)) || 0) + (parseFloat(t.css(e[0], "marginRight", !0)) || 0)
    }

    function w(e) {
        return (parseFloat(t.css(e[0], "borderLeftWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderRightWidth", !0)) || 0)
    }

    function T(t, e) {
        return C(t) + S(t) + (e ? E(t) : 0)
    }

    function C(e) {
        return (parseFloat(t.css(e[0], "paddingTop", !0)) || 0) + (parseFloat(t.css(e[0], "paddingBottom", !0)) || 0)
    }

    function E(e) {
        return (parseFloat(t.css(e[0], "marginTop", !0)) || 0) + (parseFloat(t.css(e[0], "marginBottom", !0)) || 0)
    }

    function S(e) {
        return (parseFloat(t.css(e[0], "borderTopWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderBottomWidth", !0)) || 0)
    }

    function k() {}

    function x(t, e) {
        return t - e
    }

    function M(t) {
        return Math.max.apply(Math, t)
    }

    function z(t, e) {
        if (t = t || {}, void 0 !== t[e]) return t[e];
        for (var n, r = e.split(/(?=[A-Z])/), a = r.length - 1; a >= 0; a--)
            if (n = t[r[a].toLowerCase()], void 0 !== n) return n;
        return t["default"]
    }

    function R(t) {
        return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function _(t) {
        return t.replace(/&.*?;/g, "")
    }

    function H(t) {
        t.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
            return !1
        })
    }

    function F(t) {
        t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
    }

    function A(t, e) {
        var n = t.source || {}, r = t.color,
            a = n.color,
            o = e("eventColor"),
            i = t.backgroundColor || r || n.backgroundColor || a || e("eventBackgroundColor") || o,
            s = t.borderColor || r || n.borderColor || a || e("eventBorderColor") || o,
            l = t.textColor || n.textColor || e("eventTextColor"),
            c = [];
        return i && c.push("background-color:" + i), s && c.push("border-color:" + s), l && c.push("color:" + l), c.join(";")
    }

    function N(e, n, r) {
        if (t.isFunction(e) && (e = [e]), e) {
            var a, o;
            for (a = 0; e.length > a; a++) o = e[a].apply(n, r) || o;
            return o
        }
    }

    function Y() {
        for (var t = 0; arguments.length > t; t++)
            if (void 0 !== arguments[t]) return arguments[t]
    }

    function O(n, r, a) {
        var o, i, s, l, c = n[0],
            d = 1 == n.length && "string" == typeof c;
        return e.isMoment(c) ? (l = e.apply(null, n), c._ambigTime && (l._ambigTime = !0), c._ambigZone && (l._ambigZone = !0)) : h(c) || void 0 === c ? l = e.apply(null, n) : (o = !1, i = !1, d ? Ne.test(c) ? (c += "-01", n = [c], o = !0, i = !0) : (s = Ye.exec(c)) && (o = !s[5], i = !0) : t.isArray(c) && (i = !0), l = r ? e.utc.apply(e, n) : e.apply(null, n), o ? (l._ambigTime = !0, l._ambigZone = !0) : a && (i ? l._ambigZone = !0 : d && l.zone(c))), new W(l)
    }

    function W(t) {
        f(this, t)
    }

    function L(t) {
        var e, n = [],
            r = !1,
            a = !1;
        for (e = 0; t.length > e; e++) n.push(Re.moment(t[e])), r = r || n[e]._ambigTime, a = a || n[e]._ambigZone;
        for (e = 0; n.length > e; e++) r ? n[e].stripTime() : a && n[e].stripZone();
        return n
    }

    function Z(t, n) {
        return e.fn.format.call(t, n)
    }

    function B(t, e) {
        return P(t, V(e))
    }

    function P(t, e) {
        var n, r = "";
        for (n = 0; e.length > n; n++) r += j(t, e[n]);
        return r
    }

    function j(t, e) {
        var n, r;
        return "string" == typeof e ? e : (n = e.token) ? Oe[n] ? Oe[n](t) : Z(t, n) : e.maybe && (r = P(t, e.maybe), r.match(/[1-9]/)) ? r : ""
    }

    function I(t, e, n, r, a) {
        return t = Re.moment.parseZone(t), e = Re.moment.parseZone(e), n = t.lang().longDateFormat(n) || n, r = r || " - ", q(t, e, V(n), r, a)
    }

    function q(t, e, n, r, a) {
        var o, i, s, l, c = "",
            d = "",
            u = "",
            f = "",
            v = "";
        for (i = 0; n.length > i && (o = $(t, e, n[i]), o !== !1); i++) c += o;
        for (s = n.length - 1; s > i && (o = $(t, e, n[s]), o !== !1); s--) d = o + d;
        for (l = i; s >= l; l++) u += j(t, n[l]), f += j(e, n[l]);
        return (u || f) && (v = a ? f + r + u : u + r + f), c + v + d
    }

    function $(t, e, n) {
        var r, a;
        return "string" == typeof n ? n : (r = n.token) && (a = We[r.charAt(0)], a && t.isSame(e, a)) ? Z(t, r) : !1
    }

    function V(t) {
        return t in Le ? Le[t] : Le[t] = X(t)
    }

    function X(t) {
        for (var e, n = [], r = /\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = r.exec(t);) e[1] ? n.push(e[1]) : e[2] ? n.push({
            maybe: X(e[2])
        }) : e[3] ? n.push({
            token: e[3]
        }) : e[5] && n.push(e[5]);
        return n
    }

    function U(t, e) {
        function n(t, e) {
            return t.clone().stripTime().add("months", e).startOf("month")
        }

        function r(t) {
            a.intervalStart = t.clone().stripTime().startOf("month"), a.intervalEnd = a.intervalStart.clone().add("months", 1), a.start = a.intervalStart.clone(), a.start = a.skipHiddenDays(a.start), a.start.startOf("week"), a.start = a.skipHiddenDays(a.start), a.end = a.intervalEnd.clone(), a.end = a.skipHiddenDays(a.end, -1, !0), a.end.add("days", (7 - a.end.weekday()) % 7), a.end = a.skipHiddenDays(a.end, -1, !0);
            var n = Math.ceil(a.end.diff(a.start, "weeks", !0));
            "fixed" == a.opt("weekMode") && (a.end.add("weeks", 6 - n), n = 6), a.title = e.formatDate(a.intervalStart, a.opt("titleFormat")), a.renderBasic(n, a.getCellsPerWeek(), !0)
        }
        var a = this;
        a.incrementDate = n, a.render = r, J.call(a, t, e, "month")
    }

    function G(t, e) {
        function n(t, e) {
            return t.clone().stripTime().add("weeks", e).startOf("week")
        }

        function r(t) {
            a.intervalStart = t.clone().stripTime().startOf("week"), a.intervalEnd = a.intervalStart.clone().add("weeks", 1), a.start = a.skipHiddenDays(a.intervalStart), a.end = a.skipHiddenDays(a.intervalEnd, -1, !0), a.title = e.formatRange(a.start, a.end.clone().subtract(1), a.opt("titleFormat"), " â€” "), a.renderBasic(1, a.getCellsPerWeek(), !1)
        }
        var a = this;
        a.incrementDate = n, a.render = r, J.call(a, t, e, "basicWeek")
    }

    function Q(t, e) {
        function n(t, e) {
            var n = t.clone().stripTime().add("days", e);
            return n = a.skipHiddenDays(n, 0 > e ? -1 : 1)
        }

        function r(t) {
            a.start = a.intervalStart = t.clone().stripTime(), a.end = a.intervalEnd = a.start.clone().add("days", 1), a.title = e.formatDate(a.start, a.opt("titleFormat")), a.renderBasic(1, 1, !1)
        }
        var a = this;
        a.incrementDate = n, a.render = r, J.call(a, t, e, "basicDay")
    }

    function J(e, n, r) {
        function a(t, e, n) {
            U = t, G = e, Q = n, o(), W || i(), s()
        }

        function o() {
            re = ie("theme") ? "ui" : "fc", ae = ie("columnFormat"), oe = ie("weekNumbers")
        }

        function i() {
            I = t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(e)
        }

        function s() {
            var n = l();
            N && N.remove(), N = t(n).appendTo(e), Y = N.find("thead"), O = Y.find(".fc-day-header"), W = N.find("tbody"), L = W.find("tr"), Z = W.find(".fc-day"), B = L.find("td:first-child"), P = L.eq(0).find(".fc-day > div"), j = L.eq(0).find(".fc-day-content > div"), F(Y.add(Y.find("tr"))), F(L), L.eq(0).addClass("fc-first"), L.filter(":last").addClass("fc-last"), Z.each(function(e, n) {
                var r = ue(Math.floor(e / G), e % G);
                se("dayRender", A, r, t(n))
            }), h(Z)
        }

        function l() {
            var t = "<table class='fc-border-separate' style='width:100%' cellspacing='0'>" + c() + d() + "</table>";
            return t
        }

        function c() {
            var t, e, n = re + "-widget-header",
                r = "";
            for (r += "<thead><tr>", oe && (r += "<th class='fc-week-number " + n + "'>" + R(ie("weekNumberTitle")) + "</th>"), t = 0; G > t; t++) e = ue(0, t), r += "<th class='fc-day-header fc-" + Ae[e.day()] + " " + n + "'>" + R(he(e, ae)) + "</th>";
            return r += "</tr></thead>"
        }

        function d() {
            var t, e, n, r = re + "-widget-content",
                a = "";
            for (a += "<tbody>", t = 0; U > t; t++) {
                for (a += "<tr class='fc-week'>", oe && (n = ue(t, 0), a += "<td class='fc-week-number " + r + "'>" + "<div>" + R(pe(n)) + "</div>" + "</td>"), e = 0; G > e; e++) n = ue(t, e), a += u(n);
                a += "</tr>"
            }
            return a += "</tbody>"
        }

        function u(t) {
            var e = A.intervalStart.month(),
                r = n.getNow().stripTime(),
                a = "",
                o = re + "-widget-content",
                i = ["fc-day", "fc-" + Ae[t.day()], o];
            return t.month() != e && i.push("fc-other-month"), t.isSame(r, "day") ? i.push("fc-today", re + "-state-highlight") : r > t ? i.push("fc-past") : i.push("fc-future"), a += "<td class='" + i.join(" ") + "'" + " data-date='" + t.format() + "'" + ">" + "<div>", Q && (a += "<div class='fc-day-number'>" + t.date() + "</div>"), a += "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"
        }

        function f(e) {
            $ = e;
            var n, r, a, o = Math.max($ - Y.height(), 0);
            "variable" == ie("weekMode") ? n = r = Math.floor(o / (1 == U ? 2 : 6)) : (n = Math.floor(o / U), r = o - n * (U - 1)), B.each(function(e, o) {
                U > e && (a = t(o), a.find("> div").css("min-height", (e == U - 1 ? r : n) - T(a)))
            })
        }

        function v(t) {
            q = t, ee.clear(), ne.clear(), X = 0, oe && (X = Y.find("th.fc-week-number").outerWidth()), V = Math.floor((q - X) / G), g(O.slice(0, -1), V)
        }

        function h(t) {
            t.click(p).mousedown(de)
        }

        function p(e) {
            if (!ie("selectable")) {
                var r = n.moment(t(this).data("date"));
                se("dayClick", this, r, e)
            }
        }

        function m(t, e, n) {
            n && J.build();
            for (var r = ve(t, e), a = 0; r.length > a; a++) {
                var o = r[a];
                h(y(o.row, o.leftCol, o.row, o.rightCol))
            }
        }

        function y(t, n, r, a) {
            var o = J.rect(t, n, r, a, e);
            return le(o, e)
        }

        function b(t) {
            return t.clone().stripTime().add("days", 1)
        }

        function D(t, e) {
            m(t, e, !0)
        }

        function w() {
            ce()
        }

        function C(t, e) {
            var n = fe(t),
                r = Z[n.row * G + n.col];
            se("dayClick", r, t, e)
        }

        function E(t, e) {
            te.start(function(t) {
                if (ce(), t) {
                    var e = ue(t),
                        r = e.clone().add(n.defaultAllDayEventDuration);
                    m(e, r)
                }
            }, e)
        }

        function S(t, e, n) {
            var r = te.stop();
            ce(), r && se("drop", t, ue(r), e, n)
        }

        function k(t) {
            return ee.left(t)
        }

        function x(t) {
            return ee.right(t)
        }

        function M(t) {
            return ne.left(t)
        }

        function z(t) {
            return ne.right(t)
        }

        function _(t) {
            return L.eq(t)
        }
        var A = this;
        A.renderBasic = a, A.setHeight = f, A.setWidth = v, A.renderDayOverlay = m, A.defaultSelectionEnd = b, A.renderSelection = D, A.clearSelection = w, A.reportDayClick = C, A.dragStart = E, A.dragStop = S, A.getHoverListener = function() {
            return te
        }, A.colLeft = k, A.colRight = x, A.colContentLeft = M, A.colContentRight = z, A.getIsCellAllDay = function() {
            return !0
        }, A.allDayRow = _, A.getRowCnt = function() {
            return U
        }, A.getColCnt = function() {
            return G
        }, A.getColWidth = function() {
            return V
        }, A.getDaySegmentContainer = function() {
            return I
        }, ge.call(A, e, n, r), Te.call(A), we.call(A), K.call(A);
        var N, Y, O, W, L, Z, B, P, j, I, q, $, V, X, U, G, Q, J, te, ee, ne, re, ae, oe, ie = A.opt,
            se = A.trigger,
            le = A.renderOverlay,
            ce = A.clearOverlays,
            de = A.daySelectionMousedown,
            ue = A.cellToDate,
            fe = A.dateToCell,
            ve = A.rangeToSegments,
            he = n.formatDate,
            pe = n.calculateWeekNumber;
        H(e.addClass("fc-grid")), J = new Ce(function(e, n) {
            var r, a, o;
            O.each(function(e, i) {
                r = t(i), a = r.offset().left, e && (o[1] = a), o = [a], n[e] = o
            }), o[1] = a + r.outerWidth(), L.each(function(n, i) {
                U > n && (r = t(i), a = r.offset().top, n && (o[1] = a), o = [a], e[n] = o)
            }), o[1] = a + r.outerHeight()
        }), te = new Ee(J), ee = new ke(function(t) {
            return P.eq(t)
        }), ne = new ke(function(t) {
            return j.eq(t)
        })
    }

    function K() {
        function t(t, e) {
            n.renderDayEvents(t, e)
        }

        function e() {
            n.getDaySegmentContainer().empty()
        }
        var n = this;
        n.renderEvents = t, n.clearEvents = e, me.call(n)
    }

    function te(t, e) {
        function n(t, e) {
            return t.clone().stripTime().add("weeks", e).startOf("week")
        }

        function r(t) {
            a.intervalStart = t.clone().stripTime().startOf("week"), a.intervalEnd = a.intervalStart.clone().add("weeks", 1), a.start = a.skipHiddenDays(a.intervalStart), a.end = a.skipHiddenDays(a.intervalEnd, -1, !0), a.title = e.formatRange(a.start, a.end.clone().subtract(1), a.opt("titleFormat"), " â€” "), a.renderAgenda(a.getCellsPerWeek())
        }
        var a = this;
        a.incrementDate = n, a.render = r, ae.call(a, t, e, "agendaWeek")
    }

    function ee(t, e) {
        function n(t, e) {
            var n = t.clone().stripTime().add("days", e);
            return n = a.skipHiddenDays(n, 0 > e ? -1 : 1)
        }

        function r(t) {
            a.start = a.intervalStart = t.clone().stripTime(), a.end = a.intervalEnd = a.start.clone().add("days", 1), a.title = e.formatDate(a.start, a.opt("titleFormat")), a.renderAgenda(1)
        }
        var a = this;
        a.incrementDate = n, a.render = r, ae.call(a, t, e, "agendaDay")
    }

    function ne(t, e) {
        return e.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
    }

    function re(t, e) {
        return e.longDateFormat("LT").replace(/\s*a$/i, "")
    }

    function ae(n, r, a) {
        function o(t) {
            xe = t, i(), $ ? l() : s()
        }

        function i() {
            Fe = Le("theme") ? "ui" : "fc", Ne = Le("isRTL"), We = Le("columnFormat"), Ye = e.duration(Le("minTime")), Oe = e.duration(Le("maxTime")), me = e.duration(Le("slotDuration")), be = Le("snapDuration"), be = be ? e.duration(be) : me
        }

        function s() {
            var r, a, o, i, s = Fe + "-widget-header",
                c = Fe + "-widget-content",
                d = 0 === me.asMinutes() % 15;
            for (l(), ee = t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n), Le("allDaySlot") ? (ne = t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ee), r = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + s + " fc-agenda-axis'>" + (Le("allDayHTML") || R(Le("allDayText"))) + "</th>" + "<td>" + "<div class='fc-day-content'><div style='position:relative'/></div>" + "</td>" + "<th class='" + s + " fc-agenda-gutter'>&nbsp;</th>" + "</tr>" + "</table>", re = t(r).appendTo(ee), ae = re.find("tr"), y(ae.find("td")), ee.append("<div class='fc-agenda-divider " + s + "'>" + "<div class='fc-agenda-divider-inner'/>" + "</div>")) : ne = t([]), ie = t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ee), se = t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(ie), le = t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(se), r = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", a = e.duration(+Ye), Me = 0; Oe > a;) o = q.start.clone().time(a), i = o.minutes(), r += "<tr class='fc-slot" + Me + " " + (i ? "fc-minor" : "") + "'>" + "<th class='fc-agenda-axis " + s + "'>" + (d && i ? "&nbsp;" : R(Ge(o, Le("axisFormat")))) + "</th>" + "<td class='" + c + "'>" + "<div style='position:relative'>&nbsp;</div>" + "</td>" + "</tr>", a.add(me), Me++;
            r += "</tbody></table>", ce = t(r).appendTo(se), b(ce.find("td"))
        }

        function l() {
            var e = c();
            $ && $.remove(), $ = t(e).appendTo(n), V = $.find("thead"), X = V.find("th").slice(1, -1), U = $.find("tbody"), G = U.find("td").slice(0, -1), Q = G.find("> div"), J = G.find(".fc-day-content > div"), K = G.eq(0), te = Q.eq(0), F(V.add(V.find("tr"))), F(U.add(U.find("tr")))
        }

        function c() {
            var t = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" + d() + u() + "</table>";
            return t
        }

        function d() {
            var t, e, n, r = Fe + "-widget-header",
                a = "";
            for (a += "<thead><tr>", Le("weekNumbers") ? (t = Ve(0, 0), e = Qe(t), Ne ? e += Le("weekNumberTitle") : e = Le("weekNumberTitle") + e, a += "<th class='fc-agenda-axis fc-week-number " + r + "'>" + R(e) + "</th>") : a += "<th class='fc-agenda-axis " + r + "'>&nbsp;</th>", n = 0; xe > n; n++) t = Ve(0, n), a += "<th class='fc-" + Ae[t.day()] + " fc-col" + n + " " + r + "'>" + R(Ge(t, We)) + "</th>";
            return a += "<th class='fc-agenda-gutter " + r + "'>&nbsp;</th>" + "</tr>" + "</thead>"
        }

        function u() {
            var t, e, n, a, o, i = Fe + "-widget-header",
                s = Fe + "-widget-content",
                l = r.getNow().stripTime(),
                c = "";
            for (c += "<tbody><tr><th class='fc-agenda-axis " + i + "'>&nbsp;</th>", n = "", e = 0; xe > e; e++) t = Ve(0, e), o = ["fc-col" + e, "fc-" + Ae[t.day()], s], t.isSame(l, "day") ? o.push(Fe + "-state-highlight", "fc-today") : l > t ? o.push("fc-past") : o.push("fc-future"), a = "<td class='" + o.join(" ") + "'>" + "<div>" + "<div class='fc-day-content'>" + "<div style='position:relative'>&nbsp;</div>" + "</div>" + "</div>" + "</td>", n += a;
            return c += n, c += "<td class='fc-agenda-gutter " + s + "'>&nbsp;</td>" + "</tr>" + "</tbody>"
        }

        function f(t) {
            void 0 === t && (t = fe), fe = t, Je = {};
            var e = U.position().top,
                n = ie.position().top,
                r = Math.min(t - e, ce.height() + n + 1);
            te.height(r - T(K)), ee.css("top", e), ie.height(r - n - 1);
            var a = ce.find("tr:first").height() + 1,
                o = ce.find("tr:eq(1)").height();
            ye = (a + o) / 2, De = me / be, Se = ye / De
        }

        function v(e) {
            ue = e, _e.clear(), He.clear();
            var n = V.find("th:first");
            re && (n = n.add(re.find("th:first"))), n = n.add(ce.find("th:first")), ve = 0, g(n.width("").each(function(e, n) {
                ve = Math.max(ve, t(n).outerWidth())
            }), ve);
            var r = $.find(".fc-agenda-gutter");
            re && (r = r.add(re.find("th.fc-agenda-gutter")));
            var a = ie[0].clientWidth;
            pe = ie.width() - a, pe ? (g(r, pe), r.show().prev().removeClass("fc-last")) : r.hide().prev().addClass("fc-last"), he = Math.floor((a - ve) / xe), g(X.slice(0, -1), he)
        }

        function h() {
            function t() {
                ie.scrollTop(n)
            }
            var n = Y(e.duration(Le("scrollTime"))) + 1;
            t(), setTimeout(t, 0)
        }

        function p() {
            h()
        }

        function y(t) {
            t.click(D).mousedown(qe)
        }

        function b(t) {
            t.click(D).mousedown(B)
        }

        function D(t) {
            if (!Le("selectable")) {
                var e = Math.min(xe - 1, Math.floor((t.pageX - $.offset().left - ve) / he)),
                    n = Ve(0, e),
                    a = this.parentNode.className.match(/fc-slot(\d+)/);
                if (a) {
                    var o = parseInt(a[1], 10);
                    n.add(Ye + o * me), n = r.rezoneDate(n), Ze("dayClick", G[e], n, t)
                } else Ze("dayClick", G[e], n, t)
            }
        }

        function w(t, e, n) {
            n && ze.build();
            for (var r = Ue(t, e), a = 0; r.length > a; a++) {
                var o = r[a];
                y(C(o.row, o.leftCol, o.row, o.rightCol))
            }
        }

        function C(t, e, n, r) {
            var a = ze.rect(t, e, n, r, ee);
            return Be(a, ee)
        }

        function E(t, e) {
            t = t.clone().stripZone(), e = e.clone().stripZone();
            for (var n = 0; xe > n; n++) {
                var r = Ve(0, n),
                    a = r.clone().add("days", 1),
                    o = t > r ? t : r,
                    i = e > a ? a : e;
                if (i > o) {
                    var s = ze.rect(0, n, 0, n, se),
                        l = N(o, r),
                        c = N(i, r);
                    s.top = l, s.height = c - l, b(Be(s, se))
                }
            }
        }

        function S(t) {
            return _e.left(t)
        }

        function k(t) {
            return He.left(t)
        }

        function M(t) {
            return _e.right(t)
        }

        function z(t) {
            return He.right(t)
        }

        function _(t) {
            return Le("allDaySlot") && !t.row
        }

        function A(t) {
            var n = Ve(0, t.col),
                a = t.row;
            return Le("allDaySlot") && a--, a >= 0 && (n.time(e.duration(Ye + a * be)), n = r.rezoneDate(n)), n
        }

        function N(t, n) {
            return Y(e.duration(t.clone().stripZone() - n.clone().stripTime()))
        }

        function Y(t) {
            if (Ye > t) return 0;
            if (t >= Oe) return ce.height();
            var e = (t - Ye) / me,
                n = Math.floor(e),
                r = e - n,
                a = Je[n];
            void 0 === a && (a = Je[n] = ce.find("tr").eq(n).find("td div")[0].offsetTop);
            var o = a - 1 + r * ye;
            return o = Math.max(o, 0)
        }

        function O(t) {
            return t.hasTime() ? t.clone().add(me) : t.clone().add("days", 1)
        }

        function W(t, e) {
            t.hasTime() || e.hasTime() ? L(t, e) : Le("allDaySlot") && w(t, e, !0)
        }

        function L(e, n) {
            var r = Le("selectHelper");
            if (ze.build(), r) {
                var a = Xe(e).col;
                if (a >= 0 && xe > a) {
                    var o = ze.rect(0, a, 0, a, se),
                        i = N(e, e),
                        s = N(n, e);
                    if (s > i) {
                        if (o.top = i, o.height = s - i, o.left += 2, o.width -= 5, t.isFunction(r)) {
                            var l = r(e, n);
                            l && (o.position = "absolute", de = t(l).css(o).appendTo(se))
                        } else o.isStart = !0, o.isEnd = !0, de = t($e({
                            title: "",
                            start: e,
                            end: n,
                            className: ["fc-select-helper"],
                            editable: !1
                        }, o)), de.css("opacity", Le("dragOpacity"));
                        de && (b(de), se.append(de), g(de, o.width, !0), m(de, o.height, !0))
                    }
                }
            } else E(e, n)
        }

        function Z() {
            Pe(), de && (de.remove(), de = null)
        }

        function B(e) {
            if (1 == e.which && Le("selectable")) {
                Ie(e);
                var n;
                Re.start(function(t, e) {
                    if (Z(), t && t.col == e.col && !_(t)) {
                        var r = A(e),
                            a = A(t);
                        n = [r, r.clone().add(be), a, a.clone().add(be)].sort(x), L(n[0], n[3])
                    } else n = null
                }, e), t(document).one("mouseup", function(t) {
                    Re.stop(), n && (+n[0] == +n[1] && P(n[0], t), je(n[0], n[3], t))
                })
            }
        }

        function P(t, e) {
            Ze("dayClick", G[Xe(t).col], t, e)
        }

        function j(t, e) {
            Re.start(function(t) {
                if (Pe(), t) {
                    var e = A(t),
                        n = e.clone();
                    e.hasTime() ? (n.add(r.defaultTimedEventDuration), E(e, n)) : (n.add(r.defaultAllDayEventDuration), w(e, n))
                }
            }, e)
        }

        function I(t, e, n) {
            var r = Re.stop();
            Pe(), r && Ze("drop", t, A(r), e, n)
        }
        var q = this;
        q.renderAgenda = o, q.setWidth = v, q.setHeight = f, q.afterRender = p, q.computeDateTop = N, q.getIsCellAllDay = _, q.allDayRow = function() {
            return ae
        }, q.getCoordinateGrid = function() {
            return ze
        }, q.getHoverListener = function() {
            return Re
        }, q.colLeft = S, q.colRight = M, q.colContentLeft = k, q.colContentRight = z, q.getDaySegmentContainer = function() {
            return ne
        }, q.getSlotSegmentContainer = function() {
            return le
        }, q.getSlotContainer = function() {
            return se
        }, q.getRowCnt = function() {
            return 1
        }, q.getColCnt = function() {
            return xe
        }, q.getColWidth = function() {
            return he
        }, q.getSnapHeight = function() {
            return Se
        }, q.getSnapDuration = function() {
            return be
        }, q.getSlotHeight = function() {
            return ye
        }, q.getSlotDuration = function() {
            return me
        }, q.getMinTime = function() {
            return Ye
        }, q.getMaxTime = function() {
            return Oe
        }, q.defaultSelectionEnd = O, q.renderDayOverlay = w, q.renderSelection = W, q.clearSelection = Z, q.reportDayClick = P, q.dragStart = j, q.dragStop = I, ge.call(q, n, r, a), Te.call(q), we.call(q), oe.call(q);
        var $, V, X, U, G, Q, J, K, te, ee, ne, re, ae, ie, se, le, ce, de, ue, fe, ve, he, pe, me, ye, be, De, Se, xe, Me, ze, Re, _e, He, Fe, Ne, Ye, Oe, We, Le = q.opt,
            Ze = q.trigger,
            Be = q.renderOverlay,
            Pe = q.clearOverlays,
            je = q.reportSelection,
            Ie = q.unselect,
            qe = q.daySelectionMousedown,
            $e = q.slotSegHtml,
            Ve = q.cellToDate,
            Xe = q.dateToCell,
            Ue = q.rangeToSegments,
            Ge = r.formatDate,
            Qe = r.calculateWeekNumber,
            Je = {};
        H(n.addClass("fc-agenda")), ze = new Ce(function(e, n) {
            function r(t) {
                return Math.max(l, Math.min(c, t))
            }
            var a, o, i;
            X.each(function(e, r) {
                a = t(r), o = a.offset().left, e && (i[1] = o), i = [o], n[e] = i
            }), i[1] = o + a.outerWidth(), Le("allDaySlot") && (a = ae, o = a.offset().top, e[0] = [o, o + a.outerHeight()]);
            for (var s = se.offset().top, l = ie.offset().top, c = l + ie.outerHeight(), d = 0; Me * De > d; d++) e.push([r(s + Se * d), r(s + Se * (d + 1))])
        }), Re = new Ee(ze), _e = new ke(function(t) {
            return Q.eq(t)
        }), He = new ke(function(t) {
            return J.eq(t)
        })
    }

    function oe() {
        function n(t, e) {
            var n, r = t.length,
                o = [],
                s = [];
            for (n = 0; r > n; n++) t[n].allDay ? o.push(t[n]) : s.push(t[n]);
            v("allDaySlot") && (V(o, e), w()), i(a(s), e)
        }

        function r() {
            C().empty(), E().empty()
        }

        function a(t) {
            var e, n, r, a, i, s = H(),
                l = X(),
                c = U(),
                d = [];
            for (n = 0; s > n; n++)
                for (e = _(0, n), i = o(t, e.clone().time(l), e.clone().time(c)), i = ie(i), r = 0; i.length > r; r++) a = i[r], a.col = n, d.push(a);
            return d
        }

        function o(t, e, n) {
            e = e.clone().stripZone(), n = n.clone().stripZone();
            var r, a, o, i, s, l, c, d, u = [],
                f = t.length;
            for (r = 0; f > r; r++) a = t[r], o = a.start.clone().stripZone(), i = J(a).stripZone(), i > e && n > o && (e > o ? (s = e.clone(), c = !1) : (s = o, c = !0), i > n ? (l = n.clone(), d = !1) : (l = i, d = !0), u.push({
                event: a,
                start: s,
                end: l,
                isStart: c,
                isEnd: d
            }));
            return u.sort(pe)
        }

        function i(e, n) {
            var r, a, o, i, c, d, u, f, g, m, b, D, w, C, S, x, R = e.length,
                _ = "",
                H = E(),
                F = v("isRTL");
            for (r = 0; R > r; r++) a = e[r], o = a.event, i = k(a.start, a.start), c = k(a.end, a.start), d = M(a.col), u = z(a.col), f = u - d, u -= .025 * f, f = u - d, g = f * (a.forwardCoord - a.backwardCoord), v("slotEventOverlap") && (g = Math.max(2 * (g - 10), g)), F ? (b = u - a.backwardCoord * f, m = b - g) : (m = d + a.backwardCoord * f, b = m + g), m = Math.max(m, d), b = Math.min(b, u), g = b - m, a.top = i, a.left = m, a.outerWidth = g, a.outerHeight = c - i, _ += s(o, a);
            for (H[0].innerHTML = _, D = H.children(), r = 0; R > r; r++) a = e[r], o = a.event, w = t(D[r]), C = h("eventRender", o, o, w), C === !1 ? w.remove() : (C && C !== !0 && (w.remove(), w = t(C).css({
                position: "absolute",
                top: a.top,
                left: a.left
            }).appendTo(H)), a.element = w, o._id === n ? l(o, w, a) : w[0]._fci = r, Z(o, w));
            for (p(H, e, l), r = 0; R > r; r++) a = e[r], (w = a.element) && (a.vsides = T(w, !0), a.hsides = y(w, !0), S = w.find(".fc-event-title"), S.length && (a.contentTop = S[0].offsetTop));
            for (r = 0; R > r; r++) a = e[r], (w = a.element) && (w[0].style.width = Math.max(0, a.outerWidth - a.hsides) + "px", x = Math.max(0, a.outerHeight - a.vsides), w[0].style.height = x + "px", o = a.event, void 0 !== a.contentTop && 10 > x - a.contentTop && (w.find("div.fc-event-time").text(Q(o.start, v("timeFormat")) + " - " + o.title), w.find("div.fc-event-title").remove()), h("eventAfterRender", o, o, w))
        }

        function s(t, e) {
            var n = "<",
                r = t.url,
                a = A(t, v),
                o = ["fc-event", "fc-event-vert"];
            return g(t) && o.push("fc-event-draggable"), e.isStart && o.push("fc-event-start"), e.isEnd && o.push("fc-event-end"), o = o.concat(t.className), t.source && (o = o.concat(t.source.className || [])), n += r ? "a href='" + R(t.url) + "'" : "div", n += " class='" + o.join(" ") + "'" + " style=" + "'" + "position:absolute;" + "top:" + e.top + "px;" + "left:" + e.left + "px;" + a + "'" + ">" + "<div class='fc-event-inner'>" + "<div class='fc-event-time'>" + R(f.getEventTimeText(t)) + "</div>" + "<div class='fc-event-title'>" + R(t.title || "") + "</div>" + "</div>" + "<div class='fc-event-bg'></div>", e.isEnd && b(t) && (n += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), n += "</" + (r ? "a" : "div") + ">"
        }

        function l(t, e, n) {
            var r = e.find("div.fc-event-time");
            g(t) && d(t, e, r), n.isEnd && b(t) && u(t, e, r), D(t, e)
        }

        function c(t, n, r) {
            function a() {
                c || (n.width(o).height("").draggable("option", "grid", null), c = !0)
            }
            var o, i, s, l = r.isStart,
                c = !0,
                d = S(),
                u = F(),
                f = X(),
                p = W(),
                g = O(),
                y = Y(),
                b = N();
            n.draggable({
                opacity: v("dragOpacity", "month"),
                revertDuration: v("dragRevertDuration"),
                start: function(e, r) {
                    h("eventDragStart", n[0], t, e, r), P(t, n), o = n.width(), d.start(function(e, r) {
                        if ($(), e) {
                            i = !1;
                            var o = _(0, r.col),
                                d = _(0, e.col);
                            s = d.diff(o, "days"), e.row ? l ? c && (n.width(u - 10), m(n, G.defaultTimedEventDuration / p * g), n.draggable("option", "grid", [u, 1]), c = !1) : i = !0 : (q(t.start.clone().add("days", s), J(t).add("days", s)), a()), i = i || c && !s
                        } else a(), i = !0;
                        n.draggable("option", "revert", i)
                    }, e, "drag")
                },
                stop: function(r, o) {
                    if (d.stop(), $(), h("eventDragStop", n[0], t, r, o), i) a(), n.css("filter", ""), B(t, n);
                    else {
                        var l, u, v = t.start.clone().add("days", s);
                        c || (u = Math.round((n.offset().top - L().offset().top) / b), l = e.duration(f + u * y), v = G.rezoneDate(v.clone().time(l))), j(n[0], t, v, r, o)
                    }
                }
            })
        }

        function d(t, e, n) {
            function r() {
                $(), s && (c ? (n.hide(), e.draggable("option", "grid", null), q(b, D)) : (a(), n.css("display", ""), e.draggable("option", "grid", [C, E])))
            }

            function a() {
                b && n.text(f.getEventTimeText(b, t.end ? D : null))
            }
            var o, i, s, l, c, d, u, p, g, m, y, b, D, w = f.getCoordinateGrid(),
                T = H(),
                C = F(),
                E = N(),
                S = Y();
            e.draggable({
                scroll: !1,
                grid: [C, E],
                axis: 1 == T ? "y" : !1,
                opacity: v("dragOpacity"),
                revertDuration: v("dragRevertDuration"),
                start: function(n, r) {
                    h("eventDragStart", e[0], t, n, r), P(t, e), w.build(), o = e.position(), i = w.cell(n.pageX, n.pageY), s = l = !0, c = d = x(i), u = p = 0, g = 0, m = y = 0, b = null, D = null
                },
                drag: function(n, a) {
                    var f = w.cell(n.pageX, n.pageY);
                    if (s = !! f) {
                        if (c = x(f), u = Math.round((a.position.left - o.left) / C), u != p) {
                            var v = _(0, i.col),
                                h = i.col + u;
                            h = Math.max(0, h), h = Math.min(T - 1, h);
                            var k = _(0, h);
                            g = k.diff(v, "days")
                        }
                        c || (m = Math.round((a.position.top - o.top) / E))
                    }(s != l || c != d || u != p || m != y) && (c ? (b = t.start.clone().stripTime().add("days", g), D = b.clone().add(G.defaultAllDayEventDuration)) : (b = t.start.clone().add(m * S).add("days", g), D = J(t).add(m * S).add("days", g)), r(), l = s, d = c, p = u, y = m), e.draggable("option", "revert", !s)
                },
                stop: function(n, a) {
                    $(), h("eventDragStop", e[0], t, n, a), s && (c || g || m) ? j(e[0], t, b, n, a) : (s = !0, c = !1, u = 0, g = 0, m = 0, r(), e.css("filter", ""), e.css(o), B(t, e))
                }
            })
        }

        function u(t, e, n) {
            var r, a, o, i = N(),
                s = Y();
            e.resizable({
                handles: {
                    s: ".ui-resizable-handle"
                },
                grid: i,
                start: function(n, o) {
                    r = a = 0, P(t, e), h("eventResizeStart", e[0], t, n, o)
                },
                resize: function(l, c) {
                    if (r = Math.round((Math.max(i, e.height()) - c.originalSize.height) / i), r != a) {
                        o = J(t).add(s * r);
                        var d;
                        d = r ? f.getEventTimeText(t.start, o) : f.getEventTimeText(t), n.text(d), a = r
                    }
                },
                stop: function(n, a) {
                    h("eventResizeStop", e[0], t, n, a), r ? I(e[0], t, o, n, a) : B(t, e)
                }
            })
        }
        var f = this;
        f.renderEvents = n, f.clearEvents = r, f.slotSegHtml = s, me.call(f);
        var v = f.opt,
            h = f.trigger,
            g = f.isEventDraggable,
            b = f.isEventResizable,
            D = f.eventElementHandlers,
            w = f.setHeight,
            C = f.getDaySegmentContainer,
            E = f.getSlotSegmentContainer,
            S = f.getHoverListener,
            k = f.computeDateTop,
            x = f.getIsCellAllDay,
            M = f.colContentLeft,
            z = f.colContentRight,
            _ = f.cellToDate,
            H = f.getColCnt,
            F = f.getColWidth,
            N = f.getSnapHeight,
            Y = f.getSnapDuration,
            O = f.getSlotHeight,
            W = f.getSlotDuration,
            L = f.getSlotContainer,
            Z = f.reportEventElement,
            B = f.showEvents,
            P = f.hideEvents,
            j = f.eventDrop,
            I = f.eventResize,
            q = f.renderDayOverlay,
            $ = f.clearOverlays,
            V = f.renderDayEvents,
            X = f.getMinTime,
            U = f.getMaxTime,
            G = f.calendar,
            Q = G.formatDate,
            J = G.getEventEnd;
        f.draggableDayEvent = c
    }

    function ie(t) {
        var e, n = se(t),
            r = n[0];
        if (le(n), r) {
            for (e = 0; r.length > e; e++) ce(r[e]);
            for (e = 0; r.length > e; e++) de(r[e], 0, 0)
        }
        return ue(n)
    }

    function se(t) {
        var e, n, r, a = [];
        for (e = 0; t.length > e; e++) {
            for (n = t[e], r = 0; a.length > r && fe(n, a[r]).length; r++);
            (a[r] || (a[r] = [])).push(n)
        }
        return a
    }

    function le(t) {
        var e, n, r, a, o;
        for (e = 0; t.length > e; e++)
            for (n = t[e], r = 0; n.length > r; r++)
                for (a = n[r], a.forwardSegs = [], o = e + 1; t.length > o; o++) fe(a, t[o], a.forwardSegs)
    }

    function ce(t) {
        var e, n, r = t.forwardSegs,
            a = 0;
        if (void 0 === t.forwardPressure) {
            for (e = 0; r.length > e; e++) n = r[e], ce(n), a = Math.max(a, 1 + n.forwardPressure);
            t.forwardPressure = a
        }
    }

    function de(t, e, n) {
        var r, a = t.forwardSegs;
        if (void 0 === t.forwardCoord)
            for (a.length ? (a.sort(he), de(a[0], e + 1, n), t.forwardCoord = a[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - n) / (e + 1), r = 0; a.length > r; r++) de(a[r], 0, t.forwardCoord)
    }

    function ue(t) {
        var e, n, r, a = [];
        for (e = 0; t.length > e; e++)
            for (n = t[e], r = 0; n.length > r; r++) a.push(n[r]);
        return a
    }

    function fe(t, e, n) {
        n = n || [];
        for (var r = 0; e.length > r; r++) ve(t, e[r]) && n.push(e[r]);
        return n
    }

    function ve(t, e) {
        return t.end > e.start && t.start < e.end
    }

    function he(t, e) {
        return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || pe(t, e)
    }

    function pe(t, e) {
        return t.start - e.start || e.end - e.start - (t.end - t.start) || (t.event.title || "").localeCompare(e.event.title)
    }

    function ge(n, r, a) {
        function o(e, n) {
            var r = O[e];
            return t.isPlainObject(r) && !i(e) ? z(r, n || a) : r
        }

        function s(t, e) {
            return r.trigger.apply(r, [t, e || H].concat(Array.prototype.slice.call(arguments, 2), [H]))
        }

        function l(t) {
            var e = t.source || {};
            return Y(t.startEditable, e.startEditable, o("eventStartEditable"), t.editable, e.editable, o("editable"))
        }

        function c(t) {
            var e = t.source || {};
            return Y(t.durationEditable, e.durationEditable, o("eventDurationEditable"), t.editable, e.editable, o("editable"))
        }

        function d() {
            A = {}, N = []
        }

        function u(t, e) {
            N.push({
                event: t,
                element: e
            }), A[t._id] ? A[t._id].push(e) : A[t._id] = [e]
        }

        function f() {
            t.each(N, function(t, e) {
                H.trigger("eventDestroy", e.event, e.event, e.element)
            })
        }

        function v(t, e) {
            e.click(function(n) {
                return e.hasClass("ui-draggable-dragging") || e.hasClass("ui-resizable-resizing") ? void 0 : s("eventClick", this, t, n)
            }).hover(function(e) {
                s("eventMouseover", this, t, e)
            }, function(e) {
                s("eventMouseout", this, t, e)
            })
        }

        function h(t, e) {
            g(t, e, "show")
        }

        function p(t, e) {
            g(t, e, "hide")
        }

        function g(t, e, n) {
            var r, a = A[t._id],
                o = a.length;
            for (r = 0; o > r; r++) e && a[r][0] == e[0] || a[r][n]()
        }

        function m(t, e, n, a, o) {
            var i = r.mutateEvent(e, n, null);
            s("eventDrop", t, e, i.dateDelta, function() {
                i.undo(), F(e._id)
            }, a, o), F(e._id)
        }

        function y(t, e, n, a, o) {
            var i = r.mutateEvent(e, null, n);
            s("eventResize", t, e, i.durationDelta, function() {
                i.undo(), F(e._id)
            }, a, o), F(e._id)
        }

        function b(t) {
            return e.isMoment(t) && (t = t.day()), B[t]
        }

        function D() {
            return L
        }

        function w(t, e, n) {
            var r = t.clone();
            for (e = e || 1; B[(r.day() + (n ? e : 0) + 7) % 7];) r.add("days", e);
            return r
        }

        function T() {
            var t = C.apply(null, arguments),
                e = E(t),
                n = S(e);
            return n
        }

        function C(t, e) {
            var n = H.getColCnt(),
                r = I ? -1 : 1,
                a = I ? n - 1 : 0;
            "object" == typeof t && (e = t.col, t = t.row);
            var o = t * n + (e * r + a);
            return o
        }

        function E(t) {
            var e = H.start.day();
            return t += P[e], 7 * Math.floor(t / L) + j[(t % L + L) % L] - e
        }

        function S(t) {
            return H.start.clone().add("days", t)
        }

        function k(t) {
            var e = x(t),
                n = M(e),
                r = R(n);
            return r
        }

        function x(t) {
            return t.clone().stripTime().diff(H.start, "days")
        }

        function M(t) {
            var e = H.start.day();
            return t += e, Math.floor(t / 7) * L + P[(t % 7 + 7) % 7] - P[e]
        }

        function R(t) {
            var e = H.getColCnt(),
                n = I ? -1 : 1,
                r = I ? e - 1 : 0,
                a = Math.floor(t / e),
                o = (t % e + e) % e * n + r;
            return {
                row: a,
                col: o
            }
        }

        function _(t, e) {
            var n = H.getRowCnt(),
                r = H.getColCnt(),
                a = [],
                o = x(t),
                i = x(e),
                s = +e.time();
            s && s >= W && i++, i = Math.max(i, o + 1);
            for (var l = M(o), c = M(i) - 1, d = 0; n > d; d++) {
                var u = d * r,
                    f = u + r - 1,
                    v = Math.max(l, u),
                    h = Math.min(c, f);
                if (h >= v) {
                    var p = R(v),
                        g = R(h),
                        m = [p.col, g.col].sort(),
                        y = E(v) == o,
                        b = E(h) + 1 == i;
                    a.push({
                        row: d,
                        leftCol: m[0],
                        rightCol: m[1],
                        isStart: y,
                        isEnd: b
                    })
                }
            }
            return a
        }
        var H = this;
        H.element = n, H.calendar = r, H.name = a, H.opt = o, H.trigger = s, H.isEventDraggable = l, H.isEventResizable = c, H.clearEventData = d, H.reportEventElement = u, H.triggerEventDestroy = f, H.eventElementHandlers = v, H.showEvents = h, H.hideEvents = p, H.eventDrop = m, H.eventResize = y;
        var F = r.reportEventChange,
            A = {}, N = [],
            O = r.options,
            W = e.duration(O.nextDayThreshold);
        H.getEventTimeText = function(t) {
            var e, n;
            return 2 === arguments.length ? (e = arguments[0], n = arguments[1]) : (e = t.start, n = t.end), n && o("displayEventEnd") ? r.formatRange(e, n, o("timeFormat")) : r.formatDate(e, o("timeFormat"))
        }, H.isHiddenDay = b, H.skipHiddenDays = w, H.getCellsPerWeek = D, H.dateToCell = k, H.dateToDayOffset = x, H.dayOffsetToCellOffset = M, H.cellOffsetToCell = R, H.cellToDate = T, H.cellToCellOffset = C, H.cellOffsetToDayOffset = E, H.dayOffsetToDate = S, H.rangeToSegments = _;
        var L, Z = o("hiddenDays") || [],
            B = [],
            P = [],
            j = [],
            I = o("isRTL");
        (function() {
            o("weekends") === !1 && Z.push(0, 6);
            for (var e = 0, n = 0; 7 > e; e++) P[e] = n, B[e] = -1 != t.inArray(e, Z), B[e] || (j[n] = e, n++);
            if (L = n, !L) throw "invalid hiddenDays"
        })()
    }

    function me() {
        function e(t, e) {
            var n = r(t, !1, !0);
            be(n, function(t, e) {
                x(t.event, e)
            }), m(n, e), be(n, function(t, e) {
                E("eventAfterRender", t.event, t.event, e)
            })
        }

        function n(t, e, n) {
            var a = r([t], !0, !1),
                o = [];
            return be(a, function(t, r) {
                t.row === e && r.css("top", n), o.push(r[0])
            }), o
        }

        function r(e, n, r) {
            var o, l, u = I(),
                f = n ? t("<div/>") : u,
                v = a(e);
            return i(v), o = s(v), f[0].innerHTML = o, l = f.children(), n && u.append(l), c(v, l), be(v, function(t, e) {
                t.hsides = y(e, !0)
            }), be(v, function(t, e) {
                e.width(Math.max(0, t.outerWidth - t.hsides))
            }), be(v, function(t, e) {
                t.outerHeight = e.outerHeight(!0)
            }), d(v, r), v
        }

        function a(t) {
            for (var e = [], n = 0; t.length > n; n++) {
                var r = o(t[n]);
                e.push.apply(e, r)
            }
            return e
        }

        function o(t) {
            for (var e = U(t.start, ne(t)), n = 0; e.length > n; n++) e[n].event = t;
            return e
        }

        function i(t) {
            for (var e = C("isRTL"), n = 0; t.length > n; n++) {
                var r = t[n],
                    a = (e ? r.isEnd : r.isStart) ? P : Z,
                    o = (e ? r.isStart : r.isEnd) ? j : B,
                    i = a(r.leftCol),
                    s = o(r.rightCol);
                r.left = i, r.outerWidth = s - i
            }
        }

        function s(t) {
            for (var e = "", n = 0; t.length > n; n++) e += l(t[n]);
            return e
        }

        function l(t) {
            var e = "",
                n = C("isRTL"),
                r = t.event,
                a = r.url,
                o = ["fc-event", "fc-event-hori"];
            S(r) && o.push("fc-event-draggable"), t.isStart && o.push("fc-event-start"), t.isEnd && o.push("fc-event-end"), o = o.concat(r.className), r.source && (o = o.concat(r.source.className || []));
            var i = A(r, C);
            return e += a ? "<a href='" + R(a) + "'" : "<div", e += " class='" + o.join(" ") + "'" + " style=" + "'" + "position:absolute;" + "left:" + t.left + "px;" + i + "'" + ">" + "<div class='fc-event-inner'>", !r.allDay && t.isStart && (e += "<span class='fc-event-time'>" + R(T.getEventTimeText(r)) + "</span>"), e += "<span class='fc-event-title'>" + R(r.title || "") + "</span>" + "</div>", r.allDay && t.isEnd && k(r) && (e += "<div class='ui-resizable-handle ui-resizable-" + (n ? "w" : "e") + "'>" + "&nbsp;&nbsp;&nbsp;" + "</div>"), e += "</" + (a ? "a" : "div") + ">"
        }

        function c(e, n) {
            for (var r = 0; e.length > r; r++) {
                var a = e[r],
                    o = a.event,
                    i = n.eq(r),
                    s = E("eventRender", o, o, i);
                s === !1 ? i.remove() : (s && s !== !0 && (s = t(s).css({
                    position: "absolute",
                    left: a.left
                }), i.replaceWith(s), i = s), a.element = i)
            }
        }

        function d(t, e) {
            var n, r = u(t),
                a = g(),
                o = [];
            if (e)
                for (n = 0; a.length > n; n++) a[n].height(r[n]);
            for (n = 0; a.length > n; n++) o.push(a[n].position().top);
            be(t, function(t, e) {
                e.css("top", o[t.row] + t.top)
            })
        }

        function u(t) {
            for (var e, n = O(), r = W(), a = [], o = f(t), i = 0; n > i; i++) {
                var s = o[i],
                    l = [];
                for (e = 0; r > e; e++) l.push(0);
                for (var c = 0; s.length > c; c++) {
                    var d = s[c];
                    for (d.top = M(l.slice(d.leftCol, d.rightCol + 1)), e = d.leftCol; d.rightCol >= e; e++) l[e] = d.top + d.outerHeight
                }
                a.push(M(l))
            }
            return a
        }

        function f(t) {
            var e, n, r, a = O(),
                o = [];
            for (e = 0; t.length > e; e++) n = t[e], r = n.row, n.element && (o[r] ? o[r].push(n) : o[r] = [n]);
            for (r = 0; a > r; r++) o[r] = v(o[r] || []);
            return o
        }

        function v(t) {
            for (var e = [], n = h(t), r = 0; n.length > r; r++) e.push.apply(e, n[r]);
            return e
        }

        function h(t) {
            t.sort(De);
            for (var e = [], n = 0; t.length > n; n++) {
                for (var r = t[n], a = 0; e.length > a && ye(r, e[a]); a++);
                e[a] ? e[a].push(r) : e[a] = [r]
            }
            return e
        }

        function g() {
            var t, e = O(),
                n = [];
            for (t = 0; e > t; t++) n[t] = L(t).find("div.fc-day-content > div");
            return n
        }

        function m(t, e) {
            var n = I();
            be(t, function(t, n, r) {
                var a = t.event;
                a._id === e ? b(a, n, t) : n[0]._fci = r
            }), p(n, t, b)
        }

        function b(t, e, n) {
            S(t) && T.draggableDayEvent(t, e, n), t.allDay && n.isEnd && k(t) && T.resizableDayEvent(t, e, n), z(t, e)
        }

        function D(t, e) {
            var n, r, a = X();
            e.draggable({
                delay: 50,
                opacity: C("dragOpacity"),
                revertDuration: C("dragRevertDuration"),
                start: function(o, i) {
                    E("eventDragStart", e[0], t, o, i), F(t, e), a.start(function(a, o, i, s) {
                        if (e.draggable("option", "revert", !a || !i && !s), $(), a) {
                            var l = G(o),
                                c = G(a);
                            n = c.diff(l, "days"), r = t.start.clone().add("days", n), q(r, ne(t).add("days", n))
                        } else n = 0
                    }, o, "drag")
                },
                stop: function(o, i) {
                    a.stop(), $(), E("eventDragStop", e[0], t, o, i), n ? N(e[0], t, r, o, i) : (e.css("filter", ""), _(t, e))
                }
            })
        }

        function w(e, r, a) {
            var o = C("isRTL"),
                i = o ? "w" : "e",
                s = r.find(".ui-resizable-" + i),
                l = !1;
            H(r), r.mousedown(function(t) {
                t.preventDefault()
            }).click(function(t) {
                l && (t.preventDefault(), t.stopImmediatePropagation())
            }), s.mousedown(function(o) {
                function s(n) {
                    E("eventResizeStop", r[0], e, n, {}), t("body").css("cursor", ""), f.stop(), $(), c && Y(r[0], e, d, n, {}), setTimeout(function() {
                        l = !1
                    }, 0)
                }
                if (1 == o.which) {
                    l = !0;
                    var c, d, u, f = X(),
                        v = r.css("top"),
                        h = t.extend({}, e),
                        p = te(K(e.start));
                    V(), t("body").css("cursor", i + "-resize").one("mouseup", s), E("eventResizeStart", r[0], e, o, {}), f.start(function(r, o) {
                        if (r) {
                            var s = Q(o),
                                l = Q(r);
                            if (l = Math.max(l, p), c = J(l) - J(s), d = ne(e).add("days", c), c) {
                                h.end = d;
                                var f = u;
                                u = n(h, a.row, v), u = t(u), u.find("*").css("cursor", i + "-resize"), f && f.remove(), F(e)
                            } else u && (_(e), u.remove(), u = null);
                            $(), q(e.start, d)
                        }
                    }, o)
                }
            })
        }
        var T = this;
        T.renderDayEvents = e, T.draggableDayEvent = D, T.resizableDayEvent = w;
        var C = T.opt,
            E = T.trigger,
            S = T.isEventDraggable,
            k = T.isEventResizable,
            x = T.reportEventElement,
            z = T.eventElementHandlers,
            _ = T.showEvents,
            F = T.hideEvents,
            N = T.eventDrop,
            Y = T.eventResize,
            O = T.getRowCnt,
            W = T.getColCnt,
            L = T.allDayRow,
            Z = T.colLeft,
            B = T.colRight,
            P = T.colContentLeft,
            j = T.colContentRight,
            I = T.getDaySegmentContainer,
            q = T.renderDayOverlay,
            $ = T.clearOverlays,
            V = T.clearSelection,
            X = T.getHoverListener,
            U = T.rangeToSegments,
            G = T.cellToDate,
            Q = T.cellToCellOffset,
            J = T.cellOffsetToDayOffset,
            K = T.dateToDayOffset,
            te = T.dayOffsetToCellOffset,
            ee = T.calendar,
            ne = ee.getEventEnd
    }

    function ye(t, e) {
        for (var n = 0; e.length > n; n++) {
            var r = e[n];
            if (r.leftCol <= t.rightCol && r.rightCol >= t.leftCol) return !0
        }
        return !1
    }

    function be(t, e) {
        for (var n = 0; t.length > n; n++) {
            var r = t[n],
                a = r.element;
            a && e(r, a, n)
        }
    }

    function De(t, e) {
        return e.rightCol - e.leftCol - (t.rightCol - t.leftCol) || e.event.allDay - t.event.allDay || t.event.start - e.event.start || (t.event.title || "").localeCompare(e.event.title)
    }

    function we() {
        function e(e) {
            var n = c("unselectCancel");
            n && t(e.target).parents(n).length || r(e)
        }

        function n(t, e) {
            r(), t = l.moment(t), e = e ? l.moment(e) : u(t), f(t, e), a(t, e)
        }

        function r(t) {
            h && (h = !1, v(), d("unselect", null, t))
        }

        function a(t, e, n) {
            h = !0, d("select", null, t, e, n)
        }

        function o(e) {
            var n = s.cellToDate,
                o = s.getIsCellAllDay,
                i = s.getHoverListener(),
                l = s.reportDayClick;
            if (1 == e.which && c("selectable")) {
                r(e);
                var d;
                i.start(function(t, e) {
                    v(), t && o(t) ? (d = [n(e), n(t)].sort(x), f(d[0], d[1].clone().add("days", 1))) : d = null
                }, e), t(document).one("mouseup", function(t) {
                    i.stop(), d && (+d[0] == +d[1] && l(d[0], t), a(d[0], d[1].clone().add("days", 1), t))
                })
            }
        }

        function i() {
            t(document).off("mousedown", e)
        }
        var s = this;
        s.select = n, s.unselect = r, s.reportSelection = a, s.daySelectionMousedown = o, s.selectionManagerDestroy = i;
        var l = s.calendar,
            c = s.opt,
            d = s.trigger,
            u = s.defaultSelectionEnd,
            f = s.renderSelection,
            v = s.clearSelection,
            h = !1;
        c("selectable") && c("unselectAuto") && t(document).on("mousedown", e)
    }

    function Te() {
        function e(e, n) {
            var r = o.shift();
            return r || (r = t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), r[0].parentNode != n[0] && r.appendTo(n), a.push(r.css(e).show()), r
        }

        function n() {
            for (var t; t = a.shift();) o.push(t.hide().unbind())
        }
        var r = this;
        r.renderOverlay = e, r.clearOverlays = n;
        var a = [],
            o = []
    }

    function Ce(t) {
        var e, n, r = this;
        r.build = function() {
            e = [], n = [], t(e, n)
        }, r.cell = function(t, r) {
            var a, o = e.length,
                i = n.length,
                s = -1,
                l = -1;
            for (a = 0; o > a; a++)
                if (r >= e[a][0] && e[a][1] > r) {
                    s = a;
                    break
                }
            for (a = 0; i > a; a++)
                if (t >= n[a][0] && n[a][1] > t) {
                    l = a;
                    break
                }
            return s >= 0 && l >= 0 ? {
                row: s,
                col: l
            } : null
        }, r.rect = function(t, r, a, o, i) {
            var s = i.offset();
            return {
                top: e[t][0] - s.top,
                left: n[r][0] - s.left,
                width: n[o][1] - n[r][0],
                height: e[a][1] - e[t][0]
            }
        }
    }

    function Ee(e) {
        function n(t) {
            Se(t);
            var n = e.cell(t.pageX, t.pageY);
            (Boolean(n) !== Boolean(i) || n && (n.row != i.row || n.col != i.col)) && (n ? (o || (o = n), a(n, o, n.row - o.row, n.col - o.col)) : a(n, o), i = n)
        }
        var r, a, o, i, s = this;
        s.start = function(s, l, c) {
            a = s, o = i = null, e.build(), n(l), r = c || "mousemove", t(document).bind(r, n)
        }, s.stop = function() {
            return t(document).unbind(r, n), i
        }
    }

    function Se(t) {
        void 0 === t.pageX && (t.pageX = t.originalEvent.pageX, t.pageY = t.originalEvent.pageY)
    }

    function ke(t) {
        function e(e) {
            return r[e] = r[e] || t(e)
        }
        var n = this,
            r = {}, a = {}, o = {};
        n.left = function(t) {
            return a[t] = void 0 === a[t] ? e(t).position().left : a[t]
        }, n.right = function(t) {
            return o[t] = void 0 === o[t] ? n.left(t) + e(t).width() : o[t]
        }, n.clear = function() {
            r = {}, a = {}, o = {}
        }
    }
    var xe = {
        lang: "en",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
            days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        titleFormat: {
            month: "MMMM YYYY",
            week: "ll",
            day: "LL"
        },
        columnFormat: {
            month: "ddd",
            week: r,
            day: "dddd"
        },
        timeFormat: {
            "default": n
        },
        displayEventEnd: {
            month: !1,
            basicWeek: !1,
            "default": !0
        },
        isRTL: !1,
        defaultButtonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            today: "hoy",
            month: "mes",
            week: "semana",
            day: "day"
        },
        buttonIcons: {
            prev: "left-single-arrow",
            next: "right-single-arrow",
            prevYear: "left-double-arrow",
            nextYear: "right-double-arrow"
        },
        theme: !1,
        themeButtonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e",
            prevYear: "seek-prev",
            nextYear: "seek-next"
        },
        unselectAuto: !0,
        dropAccept: "*",
        handleWindowResize: !0,
        windowResizeDelay: 200
    }, Me = {
            en: {
                columnFormat: {
                    week: "ddd M/D"
                }
            }
        }, ze = {
            header: {
                left: "next,prev today",
                center: "",
                right: "title"
            },
            buttonIcons: {
                prev: "right-single-arrow",
                next: "left-single-arrow",
                prevYear: "right-double-arrow",
                nextYear: "left-double-arrow"
            },
            themeButtonIcons: {
                prev: "circle-triangle-e",
                next: "circle-triangle-w",
                nextYear: "seek-prev",
                prevYear: "seek-next"
            }
        }, Re = t.fullCalendar = {
            version: "2.0.2"
        }, _e = Re.views = {};
    t.fn.fullCalendar = function(e) {
        var n = Array.prototype.slice.call(arguments, 1),
            r = this;
        return this.each(function(a, o) {
            var i, l = t(o),
                c = l.data("fullCalendar");
            "string" == typeof e ? c && t.isFunction(c[e]) && (i = c[e].apply(c, n), a || (r = i), "destroy" === e && l.removeData("fullCalendar")) : c || (c = new s(l, e), l.data("fullCalendar", c), c.render())
        }), r
    }, Re.langs = Me, Re.datepickerLang = function(e, n, r) {
        var a = Me[e];
        a || (a = Me[e] = {}), o(a, {
            isRTL: r.isRTL,
            weekNumberTitle: r.weekHeader,
            titleFormat: {
                month: r.showMonthAfterYear ? "YYYY[" + r.yearSuffix + "] MMMM" : "MMMM YYYY[" + r.yearSuffix + "]"
            },
            defaultButtonText: {
                prev: _(r.prevText),
                next: _(r.nextText),
                today: _(r.currentText)
            }
        }), t.datepicker && (t.datepicker.regional[n] = t.datepicker.regional[e] = r, t.datepicker.regional.en = t.datepicker.regional[""], t.datepicker.setDefaults(r))
    }, Re.lang = function(t, e) {
        var n;
        e && (n = Me[t], n || (n = Me[t] = {}), o(n, e || {})), xe.lang = t
    }, Re.sourceNormalizers = [], Re.sourceFetchers = [];
    var He = {
        dataType: "json",
        cache: !1
    }, Fe = 1;
    Re.applyAll = N;
    var Ae = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "sat"],
        Ne = /^\s*\d{4}-\d\d$/,
        Ye = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
    Re.moment = function() {
        return O(arguments)
    }, Re.moment.utc = function() {
        var t = O(arguments, !0);
        return t.hasTime() && t.utc(), t
    }, Re.moment.parseZone = function() {
        return O(arguments, !0, !0)
    }, W.prototype = u(e.fn), W.prototype.clone = function() {
        return O([this])
    }, W.prototype.time = function(t) {
        if (null == t) return e.duration({
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        });
        delete this._ambigTime, e.isDuration(t) || e.isMoment(t) || (t = e.duration(t));
        var n = 0;
        return e.isDuration(t) && (n = 24 * Math.floor(t.asDays())), this.hours(n + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
    }, W.prototype.stripTime = function() {
        var t = this.toArray();
        return e.fn.utc.call(this), this.year(t[0]).month(t[1]).date(t[2]).hours(0).minutes(0).seconds(0).milliseconds(0), this._ambigTime = !0, this._ambigZone = !0, this
    }, W.prototype.hasTime = function() {
        return !this._ambigTime
    }, W.prototype.stripZone = function() {
        var t = this.toArray(),
            n = this._ambigTime;
        return e.fn.utc.call(this), this.year(t[0]).month(t[1]).date(t[2]).hours(t[3]).minutes(t[4]).seconds(t[5]).milliseconds(t[6]), n && (this._ambigTime = !0), this._ambigZone = !0, this
    }, W.prototype.hasZone = function() {
        return !this._ambigZone
    }, W.prototype.zone = function(t) {
        return null != t && (delete this._ambigTime, delete this._ambigZone), e.fn.zone.apply(this, arguments)
    }, W.prototype.local = function() {
        var t = this.toArray(),
            n = this._ambigZone;
        return delete this._ambigTime, delete this._ambigZone, e.fn.local.apply(this, arguments), n && this.year(t[0]).month(t[1]).date(t[2]).hours(t[3]).minutes(t[4]).seconds(t[5]).milliseconds(t[6]), this
    }, W.prototype.utc = function() {
        return delete this._ambigTime, delete this._ambigZone, e.fn.utc.apply(this, arguments)
    }, W.prototype.format = function() {
        return arguments[0] ? B(this, arguments[0]) : this._ambigTime ? Z(this, "YYYY-MM-DD") : this._ambigZone ? Z(this, "YYYY-MM-DD[T]HH:mm:ss") : Z(this)
    }, W.prototype.toISOString = function() {
        return this._ambigTime ? Z(this, "YYYY-MM-DD") : this._ambigZone ? Z(this, "YYYY-MM-DD[T]HH:mm:ss") : e.fn.toISOString.apply(this, arguments)
    }, W.prototype.isWithin = function(t, e) {
        var n = L([this, t, e]);
        return n[0] >= n[1] && n[0] < n[2]
    }, t.each(["isBefore", "isAfter", "isSame"], function(t, n) {
        W.prototype[n] = function(t, r) {
            var a = L([this, t]);
            return e.fn[n].call(a[0], a[1], r)
        }
    });
    var Oe = {
        t: function(t) {
            return Z(t, "a").charAt(0)
        },
        T: function(t) {
            return Z(t, "A").charAt(0)
        }
    };
    Re.formatRange = I;
    var We = {
        Y: "year",
        M: "month",
        D: "day",
        d: "day",
        A: "second",
        a: "second",
        T: "second",
        t: "second",
        H: "second",
        h: "second",
        m: "second",
        s: "second"
    }, Le = {};
    _e.month = U, _e.basicWeek = G, _e.basicDay = Q, a({
        weekMode: "fixed"
    }), _e.agendaWeek = te, _e.agendaDay = ee, a({
        allDaySlot: !0,
        allDayText: "all-day",
        scrollTime: "06:00:00",
        slotDuration: "00:30:00",
        axisFormat: ne,
        timeFormat: {
            agenda: re
        },
        dragOpacity: {
            agenda: .5
        },
        minTime: "00:00:00",
        maxTime: "24:00:00",
        slotEventOverlap: !0
    })
});
