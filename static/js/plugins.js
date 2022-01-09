/*********************************************************************************

	Template Name: Photoghor- Photography Portfolio Bootstrap 5 Template
	Description: A perfect template to build beautiful and unique photography/portfolio websites. It comes with nice and clean design.
	Version: 1.0

	Note: This is plugin js.

**********************************************************************************/

/**************************************************************
	
	PLUGINSHEET INDEXING
	|
	|
	|___ Avoid Console
	|___ Scroll Up
	|___ Slick Slider
	|___ Meanmenu
	|___ Images Loaded
	|___ Isotope
	|___ Light Gallery
	|___ Waypoints
	|___ Counter Up
	|___ IsScroll Js
	|___ Full Page Extension
	|___ Full Page Js
	|___ Ajax Mail
	|
	|
	|___ END PLUGINSHEET INDEXING

***************************************************************/




/*************************************
	Avoid Console
**************************************/
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.




/*************************************
	Scroll Up
**************************************/
/*!
 * scrollup v2.4.1
 * 
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
! function(l, o, e) {
    "use strict";
    l.fn.scrollUp = function(o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
    }, l.fn.scrollUp.init = function(r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
            f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
            id: p.scrollName,
            href: "#top"
        }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
            display: "none",
            position: "fixed",
            zIndex: p.zIndex
        }), p.activeOverlay && l("<div/>", {
            id: p.scrollName + "-active"
        }).css({
            position: "absolute",
            top: p.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + p.activeOverlay,
            zIndex: p.zIndex
        }).appendTo("body"), p.animation) {
            case "fade":
                s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                break;
            case "slide":
                s = "slideDown", t = "slideUp", c = p.animationSpeed;
                break;
            default:
                s = "show", t = "hide", c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function() {
            l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
        }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function(o) {
            o.preventDefault(), l("html, body").animate({
                scrollTop: a
            }, p.scrollSpeed, p.easingType)
        })
    }, l.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, l.fn.scrollUp.destroy = function(r) {
        l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
    }, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);







/*************************************
	Slick Slider
**************************************/

/*
  Version: 1.9.0
  Author: Ken Wheeler
  Website: http://kenwheeler.github.io
  Docs: http://kenwheeler.github.io/slick
  Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
(function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
})(function(i) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(e),
                appendDots: i(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
        var t = 0;
        return e
    }(), e.prototype.activateADA = function() {
        var i = this;
        i.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }, e.prototype.animateSlide = function(e, t) {
        var o = {},
            s = this;
        s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function(e) {
        var t = this,
            o = t.getNavTarget();
        null !== o && "object" == typeof o && o.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, t, o = this;
        if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(i) {
        var e, t, o = this;
        if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var s in e) {
                if (i < e[s]) {
                    i = t;
                    break
                }
                t = e[s]
            }
        return i
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 0 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function(i) {
        var e = this;
        e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function(i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function(i, e) {
        var t = this;
        t.cssTransitions === !1 ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function(i) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(t) {
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && o.is(":focus") && (e.focussed = !0, e.autoPlay())
            }, 0)
        }).on("blur.slick", "*", function(t) {
            i(this);
            e.options.pauseOnFocus && (e.focussed = !1, e.autoPlay())
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var i = this;
        return i.currentSlide
    }, e.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (i.options.infinite === !0)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (i.options.centerMode === !0) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll !== 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        var e = this;
        return e.options[i]
    }, e.prototype.getNavigableIndexes = function() {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1, o = e.options.slidesToScroll * -1, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, t, o, s, n = this;
        return s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0, o = n.swipeLeft * -1 + s, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function(e, s) {
            var r, l, d;
            if (r = i(s).outerWidth(), l = s.offsetLeft, n.options.centerMode !== !0 && (l += r / 2), d = l + r, o < d) return t = s, !1
        }), e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        var t = this;
        t.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function(i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            if (i(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + t,
                    tabindex: -1
                }), s !== -1) {
                var n = "slick-slide-control" + e.instanceUid + s;
                i("#" + n).length && i(this).attr({
                    "aria-describedby": n
                })
            }
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.options.focusOnChange ? e.$slides.eq(s).attr({
            tabindex: "0"
        }) : e.$slides.eq(s).removeAttr("tabindex");
        e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                }, n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                }, n.src = t
            })
        }
        var t, o, s, n, r = this;
        if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), "anticipated" === r.options.lazyLoad)
            for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) l < 0 && (l = r.slideCount - 1), t = t.add(a.eq(l)), t = t.add(a.eq(d)), l--, d++;
        e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(o))
    }, e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        var i = this;
        i.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function(e) {
        var t = this;
        if (!t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))) {
            var o = i(t.$slides.get(t.currentSlide));
            o.attr("tabindex", 0).focus()
        }
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        var i = this;
        i.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function() {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), l.options.adaptiveHeight === !0 && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) && (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
    }, e.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function() {
        var i = this;
        i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function(i, e) {
            r.options[i] = e
        });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = i.options.vertical === !0 ? "top" : "left",
            "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1
    }, e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0) {
            var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function(e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s)
    }, e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i)) return e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
            a.postSlide(o)
        }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (i < 0 || i > a.slideCount - a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
            a.postSlide(o)
        }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
            a.postSlide(s)
        })) : a.postSlide(s), void a.animateHeight()) : void(t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function() {
            a.postSlide(s)
        }) : a.postSlide(s)))
    }, e.prototype.startLoad = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), o < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, l.options.infinite === !1 && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), l.options.vertical === !1 ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s), l.options.fade !== !0 && l.options.touchMove !== !1 && (l.animating === !0 ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function(i) {
        var e, t = this;
        return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void(t.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var i, e = this;
        i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function() {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t;
        return o
    }
});





/*************************************
	Meanmenu
**************************************/
! function($) {
    "use strict";
    $.fn.meanmenu = function(e) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = $.extend(n, e);
        var a = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var n = e.meanMenuTarget,
                t = e.meanMenuContainer,
                r = e.meanMenuClose,
                i = e.meanMenuCloseSize,
                s = e.meanMenuOpen,
                u = e.meanRevealPosition,
                m = e.meanRevealPositionDistance,
                l = e.meanRevealColour,
                o = e.meanScreenWidth,
                c = e.meanNavPush,
                v = ".meanmenu-reveal",
                h = e.meanShowChildren,
                d = e.meanExpandableChildren,
                y = e.meanExpand,
                j = e.meanContract,
                Q = e.meanRemoveAttrs,
                f = e.onePage,
                g = e.meanDisplay,
                p = e.removeElements,
                C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = "",
                x = function() {
                    if ("center" === u) {
                        var e = window.innerWidth || document.documentElement.clientWidth,
                            n = e / 2 - 22 + "px";
                        w = "left:" + n + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({
                            left: n
                        }) : jQuery(".meanmenu-reveal").css("left", n)
                    }
                },
                A = !1,
                E = !1;
            "right" === u && (w = "right:" + m + ";left:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x();
            var M = "",
                P = function() {
                    M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s)
                },
                W = function() {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(t).removeClass("mean-container"), jQuery(n).css("display", g), A = !1, E = !1, jQuery(p).removeClass("mean-remove")
                },
                b = function() {
                    var e = "background:" + l + ";color:" + l + ";" + w;
                    if (o >= a) {
                        jQuery(p).addClass("mean-remove"), E = !0, jQuery(t).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var r = jQuery(n).html();
                        jQuery(".mean-nav").html(r), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        }), jQuery(n).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(n).hide(), jQuery(".meanmenu-reveal").show(), jQuery(v).html(s), M = jQuery(v), jQuery(".mean-nav ul").hide(), h ? d ? (jQuery(".mean-nav ul ul").each(function() {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                        }), jQuery(".mean-expand").on("click", function(e) {
                            e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked")
                        })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function(e) {
                            e.preventDefault(), A === !1 ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), M.toggleClass("meanclose"), P(), jQuery(p).addClass("mean-remove")
                        }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                            jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(M).toggleClass("meanclose").html(s)
                        })
                    } else W()
                };
            C || jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth, a > o, W(), o >= a ? (b(), x()) : W()
            }), jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()))
            }), b()
        })
    }
}(jQuery);







/*************************************
	Images Loaded
**************************************/
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});








/*************************************
	Isotope
**************************************/
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

! function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }), void 0 !== n ? n : t
        }

        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, o(a))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function() {} : function(t) {
            s.error(t)
        };
    return o(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {};
            return o[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n],
                    r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
        }
    }

    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth,
                I = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (I ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i],
                n = o + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    };
    var o = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t)) return t;
        if (null === t || void 0 === t) return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? o.call(t) : [t]
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
            }
        }), n
    }, i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
            n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            clearTimeout(t);
            var e = arguments,
                s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e), delete s[n]
            }, i)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, o, u)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[r],
        h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        },
        d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() {
        this.size = e(this.element)
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = parseFloat(o),
            r = parseFloat(n),
            a = this.layout.size;
        o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            o = this.position.y,
            n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
        var s = t - i,
            r = e - o,
            a = {};
        a.transform = this.getTranslate(s, r), this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop");
        return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console,
        h = t.jQuery,
        d = function() {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function(t) {
        o.extend(this.options, t)
    }, c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n],
                r = new i(s, this);
            o.push(r)
        }
        return o
    }, c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function() {
        this.getSize()
    }, c.getSize = function() {
        this.size = i(this.element)
    }, c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
    }, c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, c._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function() {
        this.resizeContainer()
    }, c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }

        function o() {
            r++, r == s && i()
        }
        var n = this,
            s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }, c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h)
            if (this.$element = this.$element || h(this.element), e) {
                var n = h.Event(e);
                n.type = t, this.$element.trigger(n, i)
            } else this.$element.trigger(t, i)
    }, c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function(t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
    }, c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = {
                left: e.left - o.left - n.marginLeft,
                top: e.top - o.top - n.marginTop,
                right: o.right - e.right - n.marginRight,
                bottom: o.bottom - e.bottom - n.marginBottom
            };
        return s
    }, c.handleEvent = o.handleEvent, c.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function() {
        this.resize()
    }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), o.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n, s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, o.getSegmentSize = function(t, e) {
        var i = t + e,
            o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, o.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, o.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, o.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);
        this.containerWidth = o && o.innerWidth
    }, o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
                x: this.columnWidth * s.col,
                y: s.y
            }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r
    }, o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, o._getTopColGroup = function(t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, o._getColGroupY = function(t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, o._manageStamp = function(t) {
        var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function(t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            o = !0, t()
        })
    }, l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }, l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t);
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return o(e.element, t)
        }
    }, l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            } : function(t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, d
});








/*************************************
	Light Gallery
**************************************/
/*! lightgallery - v1.6.11 - 2018-05-22
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2018 Sachin N; Licensed GPLv3 */
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    ! function() {
        "use strict";

        function b(b, d) {
            if (this.el = b, this.$el = a(b), this.s = a.extend({}, c, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
        }
        var c = {
            mode: "lg-slide",
            cssEasing: "ease",
            easing: "linear",
            speed: 600,
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 150,
            hideBarsDelay: 6e3,
            useLeft: !1,
            closable: !0,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimatoin: !0,
            hideControlOnEnd: !1,
            mousewheel: !0,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 1,
            showAfterLoad: !0,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: !1,
            iframeMaxWidth: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            galleryId: 1
        };
        b.prototype.init = function() {
            var b = this;
            b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
            var c = window.location.hash;
            c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function() {
                b.build(b.index)
            }), a("body").addClass("lg-on"))), b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function() {
                b.build(b.index), a("body").addClass("lg-on")
            })) : b.$items.on("click.lgcustom", function(c) {
                try {
                    c.preventDefault(), c.preventDefault()
                } catch (a) {
                    c.returnValue = !1
                }
                b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || b.$items.index(this), a("body").hasClass("lg-on") || (b.build(b.index), a("body").addClass("lg-on"))
            })
        }, b.prototype.build = function(b) {
            var c = this;
            c.structure(), a.each(a.fn.lightGallery.modules, function(b) {
                c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
            }), c.slide(b, !1, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 ? (c.arrow(), setTimeout(function() {
                c.enableDrag(), c.enableSwipe()
            }, 50), c.s.mousewheel && c.mousewheel()) : c.$slide.on("click.lg", function() {
                c.$el.trigger("onSlideClick.lg")
            }), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
                c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function() {
                    c.$outer.addClass("lg-hide-items")
                }, c.s.hideBarsDelay)
            }), c.$outer.trigger("mousemove.lg")
        }, b.prototype.structure = function() {
            var b, c = "",
                d = "",
                e = 0,
                f = "",
                g = this;
            for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), e = 0; e < this.$items.length; e++) c += '<div class="lg-item"></div>';
            if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'), b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>", a("body").append(b), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), g.setTop(), a(window).on("resize.lg orientationchange.lg", function() {
                    setTimeout(function() {
                        g.setTop()
                    }, 100)
                }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                var h = this.$outer.find(".lg-inner");
                h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms")
            }
            setTimeout(function() {
                a(".lg-backdrop").addClass("in")
            }), setTimeout(function() {
                g.$outer.addClass("lg-visible")
            }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(window).scrollTop()
        }, b.prototype.setTop = function() {
            if ("100%" !== this.s.height) {
                var b = a(window).height(),
                    c = (b - parseInt(this.s.height, 10)) / 2,
                    d = this.$outer.find(".lg");
                b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px")
            }
        }, b.prototype.doCss = function() {
            return !! function() {
                var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                    b = document.documentElement,
                    c = 0;
                for (c = 0; c < a.length; c++)
                    if (a[c] in b.style) return !0
            }()
        }, b.prototype.isVideo = function(a, b) {
            var c;
            if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a) return c ? {
                html5: !0
            } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (b + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
            var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
            return d ? {
                youtube: d
            } : e ? {
                vimeo: e
            } : f ? {
                dailymotion: f
            } : g ? {
                vk: g
            } : void 0
        }, b.prototype.counter = function() {
            this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
        }, b.prototype.addHtml = function(b) {
            var c, d, e = null;
            if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c)
                if (void 0 !== e && null !== e) {
                    var f = e.substring(0, 1);
                    "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
                } else e = "";
            ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), void 0 !== e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
        }, b.prototype.preload = function(a) {
            var b = 1,
                c = 1;
            for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
            for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
        }, b.prototype.loadContent = function(b, c, d) {
            var e, f, g, h, i, j, k = this,
                l = !1,
                m = function(b) {
                    for (var c = [], d = [], e = 0; e < b.length; e++) {
                        var g = b[e].split(" ");
                        "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1])
                    }
                    for (var h = a(window).width(), i = 0; i < c.length; i++)
                        if (parseInt(c[i], 10) > h) {
                            f = d[i];
                            break
                        }
                };
            if (k.s.dynamic) {
                if (k.s.dynamicEl[b].poster && (l = !0, g = k.s.dynamicEl[b].poster), j = k.s.dynamicEl[b].html, f = k.s.dynamicEl[b].src, k.s.dynamicEl[b].responsive) {
                    m(k.s.dynamicEl[b].responsive.split(","))
                }
                h = k.s.dynamicEl[b].srcset, i = k.s.dynamicEl[b].sizes
            } else {
                if (k.$items.eq(b).attr("data-poster") && (l = !0, g = k.$items.eq(b).attr("data-poster")), j = k.$items.eq(b).attr("data-html"), f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"), k.$items.eq(b).attr("data-responsive")) {
                    m(k.$items.eq(b).attr("data-responsive").split(","))
                }
                h = k.$items.eq(b).attr("data-srcset"), i = k.$items.eq(b).attr("data-sizes")
            }
            var n = !1;
            k.s.dynamic ? k.s.dynamicEl[b].iframe && (n = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (n = !0);
            var o = k.isVideo(f, b);
            if (!k.$slide.eq(b).hasClass("lg-loaded")) {
                if (n) k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
                else if (l) {
                    var p = "";
                    p = o && o.youtube ? "lg-has-youtube" : o && o.vimeo ? "lg-has-vimeo" : "lg-has-html5", k.$slide.eq(b).prepend('<div class="lg-video-cont ' + p + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
                } else o ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
                if (k.$el.trigger("onAferAppendSlide.lg", [b]), e = k.$slide.eq(b).find(".lg-object"), i && e.attr("sizes", i), h) {
                    e.attr("srcset", h);
                    try {
                        picturefill({
                            elements: [e[0]]
                        })
                    } catch (a) {
                        console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
                    }
                }
                ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b), k.$slide.eq(b).addClass("lg-loaded")
            }
            k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
                var c = 0;
                d && !a("body").hasClass("lg-from-hash") && (c = d), setTimeout(function() {
                    k.$slide.eq(b).addClass("lg-complete"), k.$el.trigger("onSlideItemLoad.lg", [b, d || 0])
                }, c)
            }), o && o.html5 && !l && k.$slide.eq(b).addClass("lg-complete"), !0 === c && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
                k.preload(b)
            }))
        }, b.prototype.slide = function(b, c, d, e) {
            var f = this.$outer.find(".lg-current").index(),
                g = this;
            if (!g.lGalleryOn || f !== b) {
                var h = this.$slide.length,
                    i = g.lGalleryOn ? this.s.speed : 0;
                if (!g.lgBusy) {
                    if (this.s.download) {
                        var j;
                        j = g.s.dynamic ? !1 !== g.s.dynamicEl[b].downloadUrl && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src) : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src")), j ? (a("#lg-download").attr("href", j), g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download")
                    }
                    if (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]), g.lgBusy = !0, clearTimeout(g.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                            g.addHtml(b)
                        }, i), this.arrowDisable(b), e || (b < f ? e = "prev" : b > f && (e = "next")), c) {
                        this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                        var k, l;
                        h > 2 ? (k = b - 1, l = b + 1, 0 === b && f === h - 1 ? (l = 0, k = h - 1) : b === h - 1 && 0 === f && (l = 0, k = h - 1)) : (k = 0, l = 1), "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"), g.$slide.eq(b).addClass("lg-current")
                    } else g.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(f).addClass("lg-prev-slide")), setTimeout(function() {
                        g.$slide.removeClass("lg-current"), g.$slide.eq(b).addClass("lg-current"), g.$outer.removeClass("lg-no-trans")
                    }, 50);
                    g.lGalleryOn ? (setTimeout(function() {
                        g.loadContent(b, !0, 0)
                    }, this.s.speed + 50), setTimeout(function() {
                        g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])
                    }, this.s.speed)) : (g.loadContent(b, !0, g.s.backdropDuration), g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])), g.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
                }
                g.index = b
            }
        }, b.prototype.goToNextSlide = function(a) {
            var b = this,
                c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : c ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-right-end"), setTimeout(function() {
                b.$outer.removeClass("lg-right-end")
            }, 400)))
        }, b.prototype.goToPrevSlide = function(a) {
            var b = this,
                c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : c ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-left-end"), setTimeout(function() {
                b.$outer.removeClass("lg-left-end")
            }, 400)))
        }, b.prototype.keyPress = function() {
            var b = this;
            this.$items.length > 1 && a(window).on("keyup.lg", function(a) {
                b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()))
            }), a(window).on("keydown.lg", function(a) {
                !0 === b.s.escKey && 27 === a.keyCode && (a.preventDefault(), b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy())
            })
        }, b.prototype.arrow = function() {
            var a = this;
            this.$outer.find(".lg-prev").on("click.lg", function() {
                a.goToPrevSlide()
            }), this.$outer.find(".lg-next").on("click.lg", function() {
                a.goToNextSlide()
            })
        }, b.prototype.arrowDisable = function(a) {
            !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
        }, b.prototype.setTranslate = function(a, b, c) {
            this.s.useLeft ? a.css("left", b) : a.css({
                transform: "translate3d(" + b + "px, " + c + "px, 0px)"
            })
        }, b.prototype.touchMove = function(b, c) {
            var d = c - b;
            Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
        }, b.prototype.touchEnd = function(a) {
            var b = this;
            "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
                b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style")
            }), setTimeout(function() {
                b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
            }, b.s.speed + 100)
        }, b.prototype.enableSwipe = function() {
            var a = this,
                b = 0,
                c = 0,
                d = !1;
            a.s.enableSwipe && a.doCss() && (a.$slide.on("touchstart.lg", function(c) {
                a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
            }), a.$slide.on("touchmove.lg", function(e) {
                a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
            }), a.$slide.on("touchend.lg", function() {
                a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
            }))
        }, b.prototype.enableDrag = function() {
            var b = this,
                c = 0,
                d = 0,
                e = !1,
                f = !1;
            b.s.enableDrag && b.doCss() && (b.$slide.on("mousedown.lg", function(d) {
                b.$outer.hasClass("lg-zoomed") || b.lgBusy || a(d.target).text().trim() || (d.preventDefault(), b.manageSwipeClass(), c = d.pageX, e = !0, b.$outer.scrollLeft += 1, b.$outer.scrollLeft -= 1, b.$outer.removeClass("lg-grab").addClass("lg-grabbing"), b.$el.trigger("onDragstart.lg"))
            }), a(window).on("mousemove.lg", function(a) {
                e && (f = !0, d = a.pageX, b.touchMove(c, d), b.$el.trigger("onDragmove.lg"))
            }), a(window).on("mouseup.lg", function(g) {
                f ? (f = !1, b.touchEnd(d - c), b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"), e && (e = !1, b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
            }))
        }, b.prototype.manageSwipeClass = function() {
            var a = this.index + 1,
                b = this.index - 1;
            this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
        }, b.prototype.mousewheel = function() {
            var a = this;
            a.$outer.on("mousewheel.lg", function(b) {
                b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault())
            })
        }, b.prototype.closeGallery = function() {
            var b = this,
                c = !1;
            this.$outer.find(".lg-close").on("click.lg", function() {
                b.destroy()
            }), b.s.closable && (b.$outer.on("mousedown.lg", function(b) {
                c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
            }), b.$outer.on("mousemove.lg", function() {
                c = !1
            }), b.$outer.on("mouseup.lg", function(d) {
                (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
            }))
        }, b.prototype.destroy = function(b) {
            var c = this;
            b || (c.$el.trigger("onBeforeClose.lg"), a(window).scrollTop(c.prevScrollTop)), b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(c.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function(a) {
                c.modules[a] && c.modules[a].destroy()
            }), this.lGalleryOn = !1, clearTimeout(c.hideBartimeout), this.hideBartimeout = !1, a(window).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), c.$outer && c.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function() {
                c.$outer && c.$outer.remove(), a(".lg-backdrop").remove(), b || c.$el.trigger("onCloseAfter.lg")
            }, c.s.backdropDuration + 50)
        }, a.fn.lightGallery = function(c) {
            return this.each(function() {
                if (a.data(this, "lightGallery")) try {
                    a(this).data("lightGallery").init()
                } catch (a) {
                    console.error("lightGallery has not initiated properly")
                } else a.data(this, "lightGallery", new b(this, c))
            })
        }, a.fn.lightGallery.modules = {}
    }()
});







/*************************************
	Waypoints
**************************************/
/*!
Waypoints - 4.0.1
Copyright Ã‚Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.Context.refreshAll();
        for (var e in i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s];
                if (null !== a.triggerPoint) {
                    var l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();







/*************************************
	Counter Up
**************************************/
/*!
 *
 * jquery.counterup.js
 * https://github.com/bfintal/Counter-Up
 * v1.0
 * 
 */
(function($) {
    "use strict";
    $.fn.counterUp = function(options) {
        var settings = $.extend({
                time: 400,
                delay: 10,
                offset: 100,
                beginAt: 0,
                formatter: false,
                context: "window",
                callback: function() {}
            }, options),
            s;
        return this.each(function() {
            var $this = $(this),
                counter = {
                    time: $(this).data("counterup-time") || settings.time,
                    delay: $(this).data("counterup-delay") || settings.delay,
                    offset: $(this).data("counterup-offset") || settings.offset,
                    beginAt: $(this).data("counterup-beginat") || settings.beginAt,
                    context: $(this).data("counterup-context") || settings.context
                };
            var counterUpper = function() {
                var nums = [];
                var divisions = counter.time / counter.delay;
                var num = $(this).attr("data-num") ? $(this).attr("data-num") : $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, "");
                var decimalPlaces = (num.split(".")[1] || []).length;
                if (counter.beginAt > num) counter.beginAt = num;
                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);
                if (isTime) {
                    var times = num.split(":"),
                        m = 1;
                    s = 0;
                    while (times.length > 0) {
                        s += m * parseInt(times.pop(), 10);
                        m *= 60
                    }
                }
                for (var i = divisions; i >= counter.beginAt / num * divisions; i--) {
                    var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                    if (isTime) {
                        newNum = parseInt(s / divisions * i);
                        var hours = parseInt(newNum / 3600) % 24;
                        var minutes = parseInt(newNum / 60) % 60;
                        var seconds = parseInt(newNum % 60, 10);
                        newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)
                    }
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2")
                        }
                    }
                    if (settings.formatter) {
                        newNum = settings.formatter.call(this, newNum)
                    }
                    nums.unshift(newNum)
                }
                $this.data("counterup-nums", nums);
                $this.text(counter.beginAt);
                var f = function() {
                    if (!$this.data("counterup-nums")) {
                        settings.callback.call(this);
                        return
                    }
                    $this.html($this.data("counterup-nums").shift());
                    if ($this.data("counterup-nums").length) {
                        setTimeout($this.data("counterup-func"), counter.delay)
                    } else {
                        $this.data("counterup-nums", null);
                        $this.data("counterup-func", null);
                        settings.callback.call(this)
                    }
                };
                $this.data("counterup-func", f);
                setTimeout($this.data("counterup-func"), counter.delay)
            };
            $this.waypoint(function(direction) {
                counterUpper();
                this.destroy()
            }, {
                offset: counter.offset + "%",
                context: counter.context
            })
        })
    }
})(jQuery);







/*************************************
	IsScroll Js
**************************************/
/*!
 * Customized version of iScroll.js 0.0.5
 * It fixes bugs affecting its integration with fullpage.js
 */
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
! function(t, i, e) {
    function s(e, s) {
        this.wrapper = "string" == typeof e ? i.querySelector(e) : e, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !h.hasPointer,
            disableTouch: h.hasPointer || !h.hasTouch,
            disableMouse: h.hasPointer || h.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: "undefined" == typeof t.onmousedown
        };
        for (var o in s) this.options[o] = s[o];
        this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = h.hasTransition && this.options.useTransition, this.options.useTransform = h.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function o(t, e, s) {
        var o = i.createElement("div"),
            n = i.createElement("div");
        return s === !0 && (o.style.cssText = "position:absolute;z-index:9999", n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), n.className = "iScrollIndicator", "h" == t ? (s === !0 && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", n.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (s === !0 && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", n.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), o.style.cssText += ";overflow:hidden", e || (o.style.pointerEvents = "none"), o.appendChild(n), o
    }

    function n(e, s) {
        this.wrapper = "string" == typeof s.el ? i.querySelector(s.el) : s.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var o in s) this.options[o] = s[o];
        if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(t, "touchend", this)), this.options.disablePointer || (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.addEvent(t, h.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(t, "mouseup", this))), this.options.fade) {
            this.wrapperStyle[h.style.transform] = this.scroller.translateZ;
            var n = h.style.transitionDuration;
            if (!n) return;
            this.wrapperStyle[n] = h.isBadAndroid ? "0.0001ms" : "0ms";
            var a = this;
            h.isBadAndroid && r(function() {
                "0.0001ms" === a.wrapperStyle[n] && (a.wrapperStyle[n] = "0s")
            }), this.wrapperStyle.opacity = "0"
        }
    }
    var r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(i) {
            t.setTimeout(i, 1e3 / 60)
        },
        h = function() {
            function s(t) {
                return r !== !1 && ("" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1))
            }
            var o = {},
                n = i.createElement("div").style,
                r = function() {
                    for (var t, i = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, s = i.length; e < s; e++)
                        if (t = i[e] + "ransform", t in n) return i[e].substr(0, i[e].length - 1);
                    return !1
                }();
            o.getTime = Date.now || function() {
                return (new Date).getTime()
            }, o.extend = function(t, i) {
                for (var e in i) t[e] = i[e]
            }, o.addEvent = function(t, i, e, s) {
                t.addEventListener(i, e, !!s)
            }, o.removeEvent = function(t, i, e, s) {
                t.removeEventListener(i, e, !!s)
            }, o.prefixPointerEvent = function(i) {
                return t.MSPointerEvent ? "MSPointer" + i.charAt(7).toUpperCase() + i.substr(8) : i
            }, o.momentum = function(t, i, s, o, n, r) {
                var h, a, l = t - i,
                    c = e.abs(l) / s;
                return r = void 0 === r ? 6e-4 : r, h = t + c * c / (2 * r) * (l < 0 ? -1 : 1), a = c / r, h < o ? (h = n ? o - n / 2.5 * (c / 8) : o, l = e.abs(h - t), a = l / c) : h > 0 && (h = n ? n / 2.5 * (c / 8) : 0, l = e.abs(t) + h, a = l / c), {
                    destination: e.round(h),
                    duration: a
                }
            };
            var h = s("transform");
            return o.extend(o, {
                hasTransform: h !== !1,
                hasPerspective: s("perspective") in n,
                hasTouch: "ontouchstart" in t,
                hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
                hasTransition: s("transition") in n
            }), o.isBadAndroid = function() {
                var i = t.navigator.appVersion;
                if (/Android/.test(i) && !/Chrome\/\d/.test(i)) {
                    var e = i.match(/Safari\/(\d+.\d)/);
                    return !(e && "object" == typeof e && e.length >= 2) || parseFloat(e[1]) < 535.19
                }
                return !1
            }(), o.extend(o.style = {}, {
                transform: h,
                transitionTimingFunction: s("transitionTimingFunction"),
                transitionDuration: s("transitionDuration"),
                transitionDelay: s("transitionDelay"),
                transformOrigin: s("transformOrigin")
            }), o.hasClass = function(t, i) {
                var e = new RegExp("(^|\\s)" + i + "(\\s|$)");
                return e.test(t.className)
            }, o.addClass = function(t, i) {
                if (!o.hasClass(t, i)) {
                    var e = t.className.split(" ");
                    e.push(i), t.className = e.join(" ")
                }
            }, o.removeClass = function(t, i) {
                if (o.hasClass(t, i)) {
                    var e = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                    t.className = t.className.replace(e, " ")
                }
            }, o.offset = function(t) {
                for (var i = -t.offsetLeft, e = -t.offsetTop; t = t.offsetParent;) i -= t.offsetLeft, e -= t.offsetTop;
                return {
                    left: i,
                    top: e
                }
            }, o.preventDefaultException = function(t, i) {
                for (var e in i)
                    if (i[e].test(t[e])) return !0;
                return !1
            }, o.extend(o.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), o.extend(o.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(t) {
                        return t * (2 - t)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function(t) {
                        return e.sqrt(1 - --t * t)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(t) {
                        var i = 4;
                        return (t -= 1) * t * ((i + 1) * t + i) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function(t) {
                        var i = .22,
                            s = .4;
                        return 0 === t ? 0 : 1 == t ? 1 : s * e.pow(2, -10 * t) * e.sin((t - i / 4) * (2 * e.PI) / i) + 1
                    }
                }
            }), o.tap = function(t, e) {
                var s = i.createEvent("Event");
                s.initEvent(e, !0, !0), s.pageX = t.pageX, s.pageY = t.pageY, t.target.dispatchEvent(s)
            }, o.click = function(e) {
                var s, o = e.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) || (s = i.createEvent(t.MouseEvent ? "MouseEvents" : "Event"), s.initEvent("click", !0, !0), s.view = e.view || t, s.detail = 1, s.screenX = o.screenX || 0, s.screenY = o.screenY || 0, s.clientX = o.clientX || 0, s.clientY = o.clientY || 0, s.ctrlKey = !!e.ctrlKey, s.altKey = !!e.altKey, s.shiftKey = !!e.shiftKey, s.metaKey = !!e.metaKey, s.button = 0, s.relatedTarget = null, s._constructed = !0, o.dispatchEvent(s))
            }, o
        }();
    s.prototype = {
        version: "5.2.0",
        _init: function() {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
        },
        _transitionEnd: function(t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function(t) {
            if (1 != h.eventType[t.type]) {
                var i;
                if (i = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== i) return
            }
            if (this.enabled && (!this.initiated || h.eventType[t.type] === this.initiated)) {
                !this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var s, o = t.touches ? t.touches[0] : t;
                this.initiated = h.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = h.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, s = this.getComputedPosition(), this._translate(e.round(s.x), e.round(s.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = o.pageX, this.pointY = o.pageY, this._execEvent("beforeScrollStart")
            }
        },
        _move: function(t) {
            if (this.enabled && h.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var i, s, o, n, r = t.touches ? t.touches[0] : t,
                    a = r.pageX - this.pointX,
                    l = r.pageY - this.pointY,
                    c = h.getTime();
                if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += l, o = e.abs(this.distX), n = e.abs(this.distY), !(c - this.endTime > 300 && o < 10 && n < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (o > n + this.options.directionLockThreshold ? this.directionLocked = "h" : n >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                        l = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                        a = 0
                    }
                    a = this.hasHorizontalScroll ? a : 0, l = this.hasVerticalScroll ? l : 0, i = this.x + a, s = this.y + l, (i > 0 || i < this.maxScrollX) && (i = this.options.bounce ? this.x + a / 3 : i > 0 ? 0 : this.maxScrollX), (s > 0 || s < this.maxScrollY) && (s = this.options.bounce ? this.y + l / 3 : s > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(i, s), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function(t) {
            if (this.enabled && h.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !h.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                var i, s, o = (t.changedTouches ? t.changedTouches[0] : t, h.getTime() - this.startTime),
                    n = e.round(this.x),
                    r = e.round(this.y),
                    a = e.abs(n - this.startX),
                    l = e.abs(r - this.startY),
                    c = 0,
                    p = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = h.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(n, r), !this.moved) return this.options.tap && h.tap(t, this.options.tap), this.options.click && h.click(t), void this._execEvent("scrollCancel");
                    if (this._events.flick && o < 200 && a < 100 && l < 100) return void this._execEvent("flick");
                    if (this.options.momentum && o < 300 && (i = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                            destination: n,
                            duration: 0
                        }, s = this.hasVerticalScroll ? h.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                            destination: r,
                            duration: 0
                        }, n = i.destination, r = s.destination, c = e.max(i.duration, s.duration), this.isInTransition = 1), this.options.snap) {
                        var d = this._nearestSnap(n, r);
                        this.currentPage = d, c = this.options.snapSpeed || e.max(e.max(e.min(e.abs(n - d.x), 1e3), e.min(e.abs(r - d.y), 1e3)), 300), n = d.x, r = d.y, this.directionX = 0, this.directionY = 0, p = this.options.bounceEasing
                    }
                    return n != this.x || r != this.y ? ((n > 0 || n < this.maxScrollX || r > 0 || r < this.maxScrollY) && (p = h.ease.quadratic), void this.scrollTo(n, r, c, p)) : void this._execEvent("scrollEnd")
                }
            }
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                t.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(t) {
            var i = this.x,
                e = this.y;
            return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? i = 0 : this.x < this.maxScrollX && (i = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? e = 0 : this.y < this.maxScrollY && (e = this.maxScrollY), (i != this.x || e != this.y) && (this.scrollTo(i, e, t, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = h.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        },
        on: function(t, i) {
            this._events[t] || (this._events[t] = []), this._events[t].push(i)
        },
        off: function(t, i) {
            if (this._events[t]) {
                var e = this._events[t].indexOf(i);
                e > -1 && this._events[t].splice(e, 1)
            }
        },
        _execEvent: function(t) {
            if (this._events[t]) {
                var i = 0,
                    e = this._events[t].length;
                if (e)
                    for (; i < e; i++) this._events[t][i].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(t, i, e, s) {
            t = this.x + t, i = this.y + i, e = e || 0, this.scrollTo(t, i, e, s)
        },
        scrollTo: function(t, i, e, s) {
            s = s || h.ease.circular, this.isInTransition = this.options.useTransition && e > 0;
            var o = this.options.useTransition && s.style;
            !e || o ? (o && (this._transitionTimingFunction(s.style), this._transitionTime(e)), this._translate(t, i)) : this._animate(t, i, e, s.fn)
        },
        scrollToElement: function(t, i, s, o, n) {
            if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                var r = h.offset(t);
                r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, s === !0 && (s = e.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), o === !0 && (o = e.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= s || 0, r.top -= o || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, i = void 0 === i || null === i || "auto" === i ? e.max(e.abs(this.x - r.left), e.abs(this.y - r.top)) : i, this.scrollTo(r.left, r.top, i, n)
            }
        },
        _transitionTime: function(t) {
            if (this.options.useTransition) {
                t = t || 0;
                var i = h.style.transitionDuration;
                if (i) {
                    if (this.scrollerStyle[i] = t + "ms", !t && h.isBadAndroid) {
                        this.scrollerStyle[i] = "0.0001ms";
                        var e = this;
                        r(function() {
                            "0.0001ms" === e.scrollerStyle[i] && (e.scrollerStyle[i] = "0s")
                        })
                    }
                    if (this.indicators)
                        for (var s = this.indicators.length; s--;) this.indicators[s].transitionTime(t)
                }
            }
        },
        _transitionTimingFunction: function(t) {
            if (this.scrollerStyle[h.style.transitionTimingFunction] = t, this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].transitionTimingFunction(t)
        },
        _translate: function(t, i) {
            if (this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ : (t = e.round(t), i = e.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.x = t, this.y = i, this.indicators)
                for (var s = this.indicators.length; s--;) this.indicators[s].updatePosition()
        },
        _initEvents: function(i) {
            var e = i ? h.removeEvent : h.addEvent,
                s = this.options.bindToWrapper ? this.wrapper : t;
            e(t, "orientationchange", this), e(t, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(s, "mousemove", this), e(s, "mousecancel", this), e(s, "mouseup", this)), h.hasPointer && !this.options.disablePointer && (e(this.wrapper, h.prefixPointerEvent("pointerdown"), this), e(s, h.prefixPointerEvent("pointermove"), this), e(s, h.prefixPointerEvent("pointercancel"), this), e(s, h.prefixPointerEvent("pointerup"), this)), h.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(s, "touchmove", this), e(s, "touchcancel", this), e(s, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var i, e, s = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (s = s[h.style.transform].split(")")[0].split(", "), i = +(s[12] || s[4]), e = +(s[13] || s[5])) : (i = +s.left.replace(/[^-\d.]/g, ""), e = +s.top.replace(/[^-\d.]/g, "")), {
                x: i,
                y: e
            }
        },
        _initIndicators: function() {
            function t(t) {
                if (h.indicators)
                    for (var i = h.indicators.length; i--;) t.call(h.indicators[i])
            }
            var i, e = this.options.interactiveScrollbars,
                s = "string" != typeof this.options.scrollbars,
                r = [],
                h = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (i = {
                el: o("v", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: s,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(i.el), r.push(i)), this.options.scrollX && (i = {
                el: o("h", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: s,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(i.el), r.push(i))), this.options.indicators && (r = r.concat(this.options.indicators));
            for (var a = r.length; a--;) this.indicators.push(new n(this, r[a]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                t(function() {
                    this.fade()
                })
            }), this.on("scrollCancel", function() {
                t(function() {
                    this.fade()
                })
            }), this.on("scrollStart", function() {
                t(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function() {
                t(function() {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function() {
                t(function() {
                    this.refresh()
                })
            }), this.on("destroy", function() {
                t(function() {
                    this.destroy()
                }), delete this.indicators
            })
        },
        _initWheel: function() {
            h.addEvent(this.wrapper, "wheel", this), h.addEvent(this.wrapper, "mousewheel", this), h.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                clearTimeout(this.wheelTimeout), this.wheelTimeout = null, h.removeEvent(this.wrapper, "wheel", this), h.removeEvent(this.wrapper, "mousewheel", this), h.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(t) {
            if (this.enabled) {
                var i, s, o, n, r = this;
                if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                        r.options.snap || r._execEvent("scrollEnd"), r.wheelTimeout = void 0
                    }, 400), "deltaX" in t) 1 === t.deltaMode ? (i = -t.deltaX * this.options.mouseWheelSpeed, s = -t.deltaY * this.options.mouseWheelSpeed) : (i = -t.deltaX, s = -t.deltaY);
                else if ("wheelDeltaX" in t) i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, s = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in t) i = s = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in t)) return;
                    i = s = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (i *= this.options.invertWheelDirection, s *= this.options.invertWheelDirection, this.hasVerticalScroll || (i = s, s = 0), this.options.snap) return o = this.currentPage.pageX, n = this.currentPage.pageY, i > 0 ? o-- : i < 0 && o++, s > 0 ? n-- : s < 0 && n++, void this.goToPage(o, n);
                o = this.x + e.round(this.hasHorizontalScroll ? i : 0), n = this.y + e.round(this.hasVerticalScroll ? s : 0), this.directionX = i > 0 ? -1 : i < 0 ? 1 : 0, this.directionY = s > 0 ? -1 : s < 0 ? 1 : 0, o > 0 ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX), n > 0 ? n = 0 : n < this.maxScrollY && (n = this.maxScrollY), this.scrollTo(o, n, 0)
            }
        },
        _initSnap: function() {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                var t, i, s, o, n, r, h = 0,
                    a = 0,
                    l = 0,
                    c = this.options.snapStepX || this.wrapperWidth,
                    p = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0)
                        for (s = e.round(c / 2), o = e.round(p / 2); l > -this.scrollerWidth;) {
                            for (this.pages[h] = [], t = 0, n = 0; n > -this.scrollerHeight;) this.pages[h][t] = {
                                x: e.max(l, this.maxScrollX),
                                y: e.max(n, this.maxScrollY),
                                width: c,
                                height: p,
                                cx: l - s,
                                cy: n - o
                            }, n -= p, t++;
                            l -= c, h++
                        } else
                            for (r = this.options.snap, t = r.length, i = -1; h < t; h++)(0 === h || r[h].offsetLeft <= r[h - 1].offsetLeft) && (a = 0, i++), this.pages[a] || (this.pages[a] = []), l = e.max(-r[h].offsetLeft, this.maxScrollX), n = e.max(-r[h].offsetTop, this.maxScrollY), s = l - e.round(r[h].offsetWidth / 2), o = n - e.round(r[h].offsetHeight / 2), this.pages[a][i] = {
                                x: l,
                                y: n,
                                width: r[h].offsetWidth,
                                height: r[h].offsetHeight,
                                cx: s,
                                cy: o
                            }, l > this.maxScrollX && a++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function() {
                var t = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.x - this.startX), 1e3), e.min(e.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function(t, i) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var s = 0,
                o = this.pages.length,
                n = 0;
            if (e.abs(t - this.absStartX) < this.snapThresholdX && e.abs(i - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY); s < o; s++)
                if (t >= this.pages[s][0].cx) {
                    t = this.pages[s][0].x;
                    break
                }
            for (o = this.pages[s].length; n < o; n++)
                if (i >= this.pages[0][n].cy) {
                    i = this.pages[0][n].y;
                    break
                }
            return s == this.currentPage.pageX && (s += this.directionX, s < 0 ? s = 0 : s >= this.pages.length && (s = this.pages.length - 1), t = this.pages[s][0].x), n == this.currentPage.pageY && (n += this.directionY, n < 0 ? n = 0 : n >= this.pages[0].length && (n = this.pages[0].length - 1), i = this.pages[0][n].y), {
                x: t,
                y: i,
                pageX: s,
                pageY: n
            }
        },
        goToPage: function(t, i, s, o) {
            o = o || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
            var n = this.pages[t][i].x,
                r = this.pages[t][i].y;
            s = void 0 === s ? this.options.snapSpeed || e.max(e.max(e.min(e.abs(n - this.x), 1e3), e.min(e.abs(r - this.y), 1e3)), 300) : s, this.currentPage = {
                x: n,
                y: r,
                pageX: t,
                pageY: i
            }, this.scrollTo(n, r, s, o)
        },
        next: function(t, i) {
            var e = this.currentPage.pageX,
                s = this.currentPage.pageY;
            e++, e >= this.pages.length && this.hasVerticalScroll && (e = 0, s++), this.goToPage(e, s, t, i)
        },
        prev: function(t, i) {
            var e = this.currentPage.pageX,
                s = this.currentPage.pageY;
            e--, e < 0 && this.hasVerticalScroll && (e = 0, s--), this.goToPage(e, s, t, i)
        },
        _initKeys: function(i) {
            var e, s = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (e in this.options.keyBindings) "string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (e in s) this.options.keyBindings[e] = this.options.keyBindings[e] || s[e];
            h.addEvent(t, "keydown", this), this.on("destroy", function() {
                h.removeEvent(t, "keydown", this)
            })
        },
        _key: function(t) {
            if (this.enabled) {
                var i, s = this.options.snap,
                    o = s ? this.currentPage.pageX : this.x,
                    n = s ? this.currentPage.pageY : this.y,
                    r = h.getTime(),
                    a = this.keyTime || 0,
                    l = .25;
                switch (this.options.useTransition && this.isInTransition && (i = this.getComputedPosition(), this._translate(e.round(i.x), e.round(i.y)), this.isInTransition = !1), this.keyAcceleration = r - a < 200 ? e.min(this.keyAcceleration + l, 50) : 0, t.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? o += s ? 1 : this.wrapperWidth : n += s ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? o -= s ? 1 : this.wrapperWidth : n -= s ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        o = s ? this.pages.length - 1 : this.maxScrollX, n = s ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        o = 0, n = 0;
                        break;
                    case this.options.keyBindings.left:
                        o += s ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        n += s ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        o -= s ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        n -= s ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                if (s) return void this.goToPage(o, n);
                o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollX && (o = this.maxScrollX, this.keyAcceleration = 0), n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollY && (n = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(o, n, 0), this.keyTime = r
            }
        },
        _animate: function(t, i, e, s) {
            function o() {
                var d, u, f, m = h.getTime();
                return m >= p ? (n.isAnimating = !1, n._translate(t, i), void(n.resetPosition(n.options.bounceTime) || n._execEvent("scrollEnd"))) : (m = (m - c) / e, f = s(m), d = (t - a) * f + a, u = (i - l) * f + l, n._translate(d, u), void(n.isAnimating && r(o)))
            }
            var n = this,
                a = this.x,
                l = this.y,
                c = h.getTime(),
                p = c + e;
            this.isAnimating = !0, o()
        },
        handleEvent: function(t) {
            switch (t.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(t);
                    break;
                case "keydown":
                    this._key(t);
                    break;
                case "click":
                    this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
            }
        }
    }, n.prototype = {
        handleEvent: function(t) {
            switch (t.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t)
            }
        },
        destroy: function() {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this), h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.removeEvent(this.indicator, "mousedown", this), h.removeEvent(t, "touchmove", this), h.removeEvent(t, h.prefixPointerEvent("pointermove"), this), h.removeEvent(t, "mousemove", this), h.removeEvent(t, "touchend", this), h.removeEvent(t, h.prefixPointerEvent("pointerup"), this), h.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(i) {
            var e = i.touches ? i.touches[0] : i;
            i.preventDefault(), i.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = h.getTime(), this.options.disableTouch || h.addEvent(t, "touchmove", this), this.options.disablePointer || h.addEvent(t, h.prefixPointerEvent("pointermove"), this), this.options.disableMouse || h.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(t) {
            var i, e, s, o, n = t.touches ? t.touches[0] : t;
            h.getTime();
            this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, i = n.pageX - this.lastPointX, this.lastPointX = n.pageX, e = n.pageY - this.lastPointY, this.lastPointY = n.pageY, s = this.x + i, o = this.y + e, this._pos(s, o), t.preventDefault(), t.stopPropagation()
        },
        _end: function(i) {
            if (this.initiated) {
                if (this.initiated = !1, i.preventDefault(), i.stopPropagation(), h.removeEvent(t, "touchmove", this), h.removeEvent(t, h.prefixPointerEvent("pointermove"), this), h.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                    var s = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                        o = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.scroller.x - s.x), 1e3), e.min(e.abs(this.scroller.y - s.y), 1e3)), 300);
                    this.scroller.x == s.x && this.scroller.y == s.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = s, this.scroller.scrollTo(s.x, s.y, o, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(t) {
            t = t || 0;
            var i = h.style.transitionDuration;
            if (i && (this.indicatorStyle[i] = t + "ms", !t && h.isBadAndroid)) {
                this.indicatorStyle[i] = "0.0001ms";
                var e = this;
                r(function() {
                    "0.0001ms" === e.indicatorStyle[i] && (e.indicatorStyle[i] = "0s")
                })
            }
        },
        transitionTimingFunction: function(t) {
            this.indicatorStyle[h.style.transitionTimingFunction] = t
        },
        refresh: function() {
            this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"), h.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"), h.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = e.max(e.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = e.max(e.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        },
        updatePosition: function() {
            var t = this.options.listenX && e.round(this.sizeRatioX * this.scroller.x) || 0,
                i = this.options.listenY && e.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = e.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = e.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), i < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = e.max(this.indicatorHeight + 3 * i, 8), this.indicatorStyle.height = this.height + "px"), i = this.minBoundaryY) : i > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = e.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8),
                this.indicatorStyle.height = this.height + "px", i = this.maxPosY + this.indicatorHeight - this.height) : i = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = i, this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = i + "px")
        },
        _pos: function(t, i) {
            t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), i < 0 ? i = 0 : i > this.maxPosY && (i = this.maxPosY), t = this.options.listenX ? e.round(t / this.sizeRatioX) : this.scroller.x, i = this.options.listenY ? e.round(i / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, i)
        },
        fade: function(t, i) {
            if (!i || this.visible) {
                clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                var e = t ? 250 : 500,
                    s = t ? 0 : 300;
                t = t ? "1" : "0", this.wrapperStyle[h.style.transitionDuration] = e + "ms", this.fadeTimeout = setTimeout(function(t) {
                    this.wrapperStyle.opacity = t, this.visible = +t
                }.bind(this, t), s)
            }
        }
    }, s.utils = h, "undefined" != typeof module && module.exports ? module.exports = s : "function" == typeof define && define.amd ? define(function() {
        return s
    }) : t.IScroll = s
}(window, document, Math),
/*!



 * fullPage ScrollOverflow
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
! function(e, n, t) {
    t.fn.fp_scrolloverflow = function() {
        var o = "fp-scrollable",
            r = "." + o,
            l = "active",
            i = "." + l,
            s = ".fp-section",
            c = s + i,
            a = ".fp-slide",
            f = a + i,
            h = ".fp-tableCell",
            d = "fp-responsive",
            p = "fp-auto-height-responsive";

        function u(e) {
            var n = e.closest(s);
            return n.length ? parseInt(n.css("padding-bottom")) + parseInt(n.css("padding-top")) : 0
        }

        function v() {
            var o = this;

            function r() {
                var e;
                t("body").hasClass(d) ? (e = o.options.scrollOverflowHandler, i(function(n) {
                    n.closest(s).hasClass(p) && e.remove(n)
                })) : i(l)
            }

            function l(n) {
                if (!n.hasClass("fp-noscroll")) {
                    n.css("overflow", "hidden");
                    var r, l = o.options.scrollOverflowHandler,
                        i = l.wrapContent(),
                        c = n.closest(s),
                        a = l.scrollable(n),
                        f = u(c);
                    a.length ? r = l.scrollHeight(n) : (r = n.get(0).scrollHeight - f, o.options.verticalCentered && (r = n.find(h).get(0).scrollHeight - f));
                    var d = t(e).height() - f;
                    r > d ? a.length ? l.update(n, d) : (o.options.verticalCentered ? n.find(h).wrapInner(i) : n.wrapInner(i), l.create(n, d, o.iscrollOptions)) : l.remove(n), n.css("overflow", "")
                }
            }

            function i(e) {
                t(s).each(function() {
                    var n = t(this).find(a);
                    n.length ? n.each(function() {
                        e(t(this))
                    }) : e(t(this))
                })
            }
            o.options = null, o.init = function(l, i) {
                return o.options = l, o.iscrollOptions = i, "complete" === n.readyState && (r(), t.fn.fullpage.shared.afterRenderActions()), t(e).on("load", function() {
                    r(), t.fn.fullpage.shared.afterRenderActions()
                }), o
            }, o.createScrollBarForAll = r
        }
        IScroll.prototype.wheelOn = function() {
            this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
        }, IScroll.prototype.wheelOff = function() {
            this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
        };
        var g = {
            refreshId: null,
            iScrollInstances: [],
            iscrollOptions: {
                scrollbars: !0,
                mouseWheel: !0,
                hideScrollbars: !1,
                fadeScrollbars: !1,
                disableMouse: !0,
                interactiveScrollbars: !0
            },
            init: function(n) {
                var o = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
                return g.iscrollOptions.click = o, g.iscrollOptions = t.extend(g.iscrollOptions, n.scrollOverflowOptions), (new v).init(n, g.iscrollOptions)
            },
            toggleWheel: function(e) {
                t(c).find(r).each(function() {
                    var n = t(this).data("iscrollInstance");
                    void 0 !== n && n && (e ? n.wheelOn() : n.wheelOff())
                })
            },
            onLeave: function() {
                g.toggleWheel(!1)
            },
            beforeLeave: function() {
                g.onLeave()
            },
            afterLoad: function() {
                g.toggleWheel(!0)
            },
            create: function(e, n, o) {
                var i = e.find(r);
                i.height(n), i.each(function() {
                    var n = t(this),
                        r = n.data("iscrollInstance");
                    r && t.each(g.iScrollInstances, function() {
                        t(this).destroy()
                    }), r = new IScroll(n.get(0), o), g.iScrollInstances.push(r), e.closest(s).hasClass(l) || r.wheelOff(), n.data("iscrollInstance", r)
                })
            },
            isScrolled: function(e, n) {
                var t = n.data("iscrollInstance");
                return !t || ("top" === e ? t.y >= 0 && !n.scrollTop() : "bottom" === e ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0)
            },
            scrollable: function(e) {
                return e.find(".fp-slides").length ? e.find(f).find(r) : e.find(r)
            },
            scrollHeight: function(e) {
                return e.find(r).children().first().get(0).scrollHeight
            },
            remove: function(e) {
                var n = e.find(r);
                if (n.length) {
                    var t = n.data("iscrollInstance");
                    t && t.destroy(), n.data("iscrollInstance", null)
                }
                e.find(r).children().first().children().first().unwrap().unwrap()
            },
            update: function(e, n) {
                clearTimeout(g.refreshId), g.refreshId = setTimeout(function() {
                    t.each(g.iScrollInstances, function() {
                        t(this).get(0).refresh(), t.fn.fullpage.silentMoveTo(t(c).index() + 1)
                    })
                }, 150), e.find(r).css("height", n + "px").parent().css("height", n + u(e) + "px")
            },
            wrapContent: function() {
                return '<div class="' + o + '"><div class="fp-scroller"></div></div>'
            }
        };
        return {
            iscrollHandler: g
        }
    }()
}(window, document, jQuery);
//# sourceMappingURL=scrolloverflow.min.js.map



/*************************************
	Full Page Extension
**************************************/
/*!
 * fullPage 2.9.7 - Extensions 0.1.5
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
! function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return n(t, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, n, t, o, i) {
    "use strict";
    var a = "fullpage-wrapper",
        r = "." + a,
        l = "fp-responsive",
        s = "fp-notransition",
        c = "fp-destroyed",
        d = "fp-enabled",
        f = "fp-viewing",
        u = "active",
        v = "." + u,
        h = "fp-completely",
        p = "." + h,
        g = "fp-section",
        m = "." + g,
        S = m + v,
        w = m + ":first",
        b = m + ":last",
        x = "fp-tableCell",
        y = "." + x,
        C = "fp-auto-height",
        T = "fp-normal-scroll",
        A = "fp-nav",
        M = "#" + A,
        k = "fp-tooltip",
        O = "." + k,
        R = "fp-show-active",
        z = "fp-slide",
        I = "." + z,
        L = I + v,
        H = "fp-slides",
        E = "." + H,
        B = "fp-slidesContainer",
        D = "." + B,
        P = "fp-table",
        Y = "fp-initial",
        F = "fp-slidesNav",
        W = "." + F,
        X = W + " a",
        V = "fp-controlArrow",
        Z = "." + V,
        N = "fp-prev",
        j = V + " " + N,
        q = Z + ("." + N),
        G = "fp-next",
        U = V + " " + G,
        Q = Z + ".fp-next",
        J = e(n),
        K = e(t);
    e.fn.fullpage = function(V) {
        if (e("html").hasClass(d)) kt();
        else {
            var G = e("html, body"),
                _ = e("body"),
                $ = e.fn.fullpage;
            V = e.extend(!0, {
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate"
                },
                sectionSelector: ".section",
                slideSelector: ".slide",
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, V);
            var ee, ne, te, oe, ie = !1,
                ae = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                re = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                le = e(this),
                se = J.height(),
                ce = !1,
                de = !0,
                fe = !0,
                ue = [],
                ve = {
                    m: {
                        up: !0,
                        down: !0,
                        left: !0,
                        right: !0
                    }
                };
            ve.k = e.extend(!0, {}, ve.m);
            var he, pe, ge, me, Se, we, be, xe, ye = pt(),
                Ce = {
                    touchmove: "ontouchmove" in n ? "touchmove" : ye.move,
                    touchstart: "ontouchstart" in n ? "touchstart" : ye.down
                },
                Te = !1,
                Ae = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                Me = e.extend(!0, {}, V),
                ke = {};
            kt(), e.extend(e.easing, {
                easeInOutCubic: function(e, n, t, o, i) {
                    return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t
                }
            }), e.event.special.destroyed = {
                remove: function(e) {
                    e.handler && e.handler()
                }
            }, e(this).length && ($.version = "2.9.7", $.setAutoScrolling = Ze, $.setRecordHistory = Ne, $.setScrollingSpeed = je, $.setFitToSection = qe, $.setLockAnchors = function(e) {
                V.lockAnchors = e
            }, $.setMouseWheelScrolling = Ge, $.setAllowScrolling = Ue, $.setKeyboardScrolling = Qe, $.moveSectionUp = Je, $.moveSectionDown = Ke, $.silentMoveTo = _e, $.moveTo = $e, $.moveSlideRight = en, $.moveSlideLeft = nn, $.fitToSection = fn, $.reBuild = tn, $.setResponsive = on, $.getFullpageData = function() {
                return {
                    options: V,
                    internals: {
                        canScroll: fe,
                        isScrollAllowed: ve,
                        getDestinationPosition: xn,
                        isTouch: re,
                        c: Ln,
                        getXmovement: it,
                        removeAnimation: nt,
                        getTransforms: wt,
                        lazyLoad: An,
                        addAnimation: et,
                        performHorizontalMove: Kn,
                        landscapeScroll: Un,
                        silentLandscapeScroll: mt,
                        keepSlidesPosition: bn,
                        silentScroll: St,
                        styleSlides: rn,
                        scrollHandler: cn,
                        getEventsPage: gt,
                        getMSPointer: pt,
                        isReallyTouch: pn,
                        usingExtension: yt,
                        toggleControlArrows: Qn
                    }
                }
            }, $.destroy = function(n) {
                le.trigger("destroy", [n]), Ze(!1, "internal"), Ue(!1), Qe(!1), le.addClass(c), clearTimeout(me), clearTimeout(ge), clearTimeout(pe), clearTimeout(Se), clearTimeout(we), J.off("scroll", cn).off("hashchange", Dn).off("resize", _n), K.off("keydown", Yn).off("keyup", Wn).off("click touchstart", M + " a").off("mouseenter", M + " li").off("mouseleave", M + " li").off("click touchstart", X).off("mouseover", V.normalScrollElements).off("mouseout", V.normalScrollElements), e(m).off("click touchstart", Z), yt("dragAndMove") && $.dragAndMove.destroy();
                clearTimeout(me), clearTimeout(ge), n && function() {
                    St(0), le.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                        Tn(e(this), "src")
                    }), le.find("img[data-srcset]").each(function() {
                        Tn(e(this), "srcset")
                    }), e(M + ", " + W + ", " + Z).remove(), e(m).css({
                        height: "",
                        "background-color": "",
                        padding: ""
                    }), e(I).css({
                        width: ""
                    }), le.css({
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), G.css({
                        overflow: "",
                        height: ""
                    }), e("html").removeClass(d), _.removeClass(l), e.each(_.get(0).className.split(/\s+/), function(e, n) {
                        0 === n.indexOf(f) && _.removeClass(n)
                    }), e(m + ", " + I).each(function() {
                        V.scrollOverflowHandler && V.scrollOverflowHandler.remove(e(this)), e(this).removeClass(P + " " + u), e(this).attr("style", e(this).data("fp-styles"))
                    }), xt(le), le.find(y + ", " + D + ", " + E).each(function() {
                        e(this).replaceWith(this.childNodes)
                    }), G.scrollTop(0);
                    var n = [g, z, B];
                    e.each(n, function(n, t) {
                        e("." + t).removeClass(t)
                    })
                }()
            }, $.landscapeScroll = Un, $.shared = {
                afterRenderActions: sn
            }, an("continuousHorizontal"), an("scrollHorizontally"), an("resetSliders"), an("interlockedSlides"), an("responsiveSlides"), an("fadingEffect"), an("dragAndMove"), an("offsetSections"), an("scrollOverflowReset"), an("parallax"), yt("dragAndMove") && $.dragAndMove.init(), function() {
                V.css3 && (V.css3 = function() {
                    var e, o = t.createElement("p"),
                        a = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                    for (var r in t.body.insertBefore(o, null), a) o.style[r] !== i && (o.style[r] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(o).getPropertyValue(a[r]));
                    return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
                }());
                V.scrollBar = V.scrollBar || V.hybrid, o = le.find(V.sectionSelector), V.anchors.length || (V.anchors = o.filter("[data-anchor]").map(function() {
                    return e(this).data("anchor").toString()
                }).get()), V.navigationTooltips.length || (V.navigationTooltips = o.filter("[data-tooltip]").map(function() {
                    return e(this).data("tooltip").toString()
                }).get()), le.css({
                    height: "100%",
                    position: "relative"
                }), le.addClass(a), e("html").addClass(d), se = J.height(), le.removeClass(c), le.find(V.sectionSelector).addClass(g), le.find(V.slideSelector).addClass(z), Ct("parallax", "init"), e(m).each(function(n) {
                    var t, o, i, a, l = e(this),
                        s = l.find(I),
                        c = s.length;
                    l.data("fp-styles", l.attr("style")), i = l, (a = n) || 0 !== e(S).length || i.addClass(u), oe = e(S), i.css("height", ln(i) + "px"), V.paddingTop && i.css("padding-top", V.paddingTop), V.paddingBottom && i.css("padding-bottom", V.paddingBottom), void 0 !== V.sectionsColor[a] && i.css("background-color", V.sectionsColor[a]), void 0 !== V.anchors[a] && i.attr("data-anchor", V.anchors[a]), t = l, o = n, void 0 !== V.anchors[o] && t.hasClass(u) && tt(V.anchors[o], o), V.menu && V.css3 && e(V.menu).closest(r).length && e(V.menu).appendTo(_), c > 0 ? rn(l, s, c) : V.verticalCentered && at(l)
                }), V.fixedElements && V.css3 && e(V.fixedElements).appendTo(_), V.navigation && function() {
                    _.append('<div id="' + A + '"><ul></ul></div>');
                    var n = e(M);
                    n.addClass(function() {
                        return V.showActiveTooltip ? R + " " + V.navigationPosition : V.navigationPosition
                    });
                    for (var t = 0; t < e(m).length; t++) {
                        var o = "";
                        V.anchors.length && (o = V.anchors[t]);
                        var i = '<li><a href="#' + o + '"><span></span></a>',
                            a = V.navigationTooltips[t];
                        void 0 !== a && "" !== a && (i += '<div class="' + k + " " + V.navigationPosition + '">' + a + "</div>"), i += "</li>", n.find("ul").append(i)
                    }
                    e(M).css("margin-top", "-" + e(M).height() / 2 + "px"), e(M).find("li").eq(e(S).index(m)).find("a").addClass(u)
                }(), le.find('iframe[src*="youtube.com/embed/"]').each(function() {
                    var n, t, o;
                    n = e(this), t = "enablejsapi=1", o = n.attr("src"), n.attr("src", o + (/\?/.test(o) ? "&" : "?") + t)
                }), V.fadingEffect && $.fadingEffect && $.fadingEffect.apply(), V.scrollOverflow ? he = V.scrollOverflowHandler.init(V) : sn(), Ue(!0), Ze(V.autoScrolling, "internal"), $n(), ht(), "complete" === t.readyState && Bn();
                var o;
                J.on("load", Bn)
            }(), J.on("scroll", cn).on("hashchange", Dn).blur(Nn).resize(_n), K.keydown(Yn).keyup(Wn).on("click touchstart", M + " a", jn).on("click touchstart", X, qn).on("click", O, Fn), e(m).on("click touchstart", Z, Zn), V.normalScrollElements && (K.on("mouseenter touchstart", V.normalScrollElements, function() {
                Ue(!1)
            }), K.on("mouseleave touchend", V.normalScrollElements, function() {
                Ue(!0)
            })), yt("dragAndMove") && $.dragAndMove.turnOffTouch());
            var Oe, Re = !1,
                ze = 0,
                Ie = 0,
                Le = 0,
                He = 0,
                Ee = 0;
            Oe = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || n.msRequestAnimationFrame, n.requestAnimationFrame = Oe;
            var Be, De, Pe, Ye = (new Date).getTime(),
                Fe = !1,
                We = 0,
                Xe = 0,
                Ve = se
        }

        function Ze(n, t) {
            n || St(0), Mt("autoScrolling", n, t);
            var o = e(S);
            V.autoScrolling && !V.scrollBar ? (G.css({
                overflow: "hidden",
                height: "100%"
            }), Ne(Me.recordHistory, "internal"), le.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), o.length && St(o.position().top)) : (G.css({
                overflow: "visible",
                height: "initial"
            }), Ne(!1, "internal"), le.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), xt(le), o.length && G.scrollTop(o.position().top)), le.trigger("setAutoScrolling", [n])
        }

        function Ne(e, n) {
            Mt("recordHistory", e, n)
        }

        function je(e, n) {
            "internal" !== n && V.fadingEffect && $.fadingEffect && $.fadingEffect.update(e), Mt("scrollingSpeed", e, n)
        }

        function qe(e, n) {
            Mt("fitToSection", e, n)
        }

        function Ge(e) {
            e ? (! function() {
                var e, o = "";
                n.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
                var a = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == a ? t[e](o + "MozMousePixelScroll", Sn, !1) : t[e](o + a, Sn, !1)
            }(), le.on("mousedown", Xn).on("mouseup", Vn)) : (t.addEventListener ? (t.removeEventListener("mousewheel", Sn, !1), t.removeEventListener("wheel", Sn, !1), t.removeEventListener("MozMousePixelScroll", Sn, !1)) : t.detachEvent("onmousewheel", Sn), le.off("mousedown", Xn).off("mouseup", Vn))
        }

        function Ue(n, t) {
            void 0 !== t ? (t = t.replace(/ /g, "").split(","), e.each(t, function(e, t) {
                bt(n, t, "m")
            })) : (bt(n, "all", "m"), n ? (Ge(!0), (ae || re) && (V.autoScrolling && _.off(Ce.touchmove).on(Ce.touchmove, vn), e(r).off(Ce.touchstart).on(Ce.touchstart, gn).off(Ce.touchmove).on(Ce.touchmove, hn))) : (Ge(!1), (ae || re) && (V.autoScrolling && _.off(Ce.touchmove), e(r).off(Ce.touchstart).off(Ce.touchmove))))
        }

        function Qe(n, t) {
            void 0 !== t ? (t = t.replace(/ /g, "").split(","), e.each(t, function(e, t) {
                bt(n, t, "k")
            })) : (bt(n, "all", "k"), V.keyboardScrolling = n)
        }

        function Je() {
            var n = e(S).prev(m);
            n.length || !V.loopTop && !V.continuousVertical || (n = e(m).last()), n.length && yn(n, null, !0)
        }

        function Ke() {
            var n = e(S).next(m);
            n.length || !V.loopBottom && !V.continuousVertical || (n = e(m).first()), n.length && yn(n, null, !1)
        }

        function _e(e, n) {
            je(0, "internal"), $e(e, n), je(Me.scrollingSpeed, "internal")
        }

        function $e(e, n) {
            var t = st(e);
            void 0 !== n ? ct(e, n) : t.length > 0 && yn(t)
        }

        function en(e) {
            wn("right", e)
        }

        function nn(e) {
            wn("left", e)
        }

        function tn(n) {
            if (!le.hasClass(c)) {
                ce = !0, se = J.height(), e(m).each(function() {
                    var n = e(this).find(E),
                        t = e(this).find(I);
                    V.verticalCentered && e(this).find(y).css("height", rt(e(this)) + "px"), e(this).css("height", ln(e(this)) + "px"), t.length > 1 && Un(n, n.find(L))
                }), V.scrollOverflow && he.createScrollBarForAll();
                var t = e(S).index(m);
                t && !yt("fadingEffect") && _e(t + 1), ce = !1, e.isFunction(V.afterResize) && n && V.afterResize.call(le), e.isFunction(V.afterReBuild) && !n && V.afterReBuild.call(le), le.trigger("afterRebuild")
            }
        }

        function on(n) {
            var t = _.hasClass(l);
            n ? t || (Ze(!1, "internal"), qe(!1, "internal"), e(M).hide(), _.addClass(l), e.isFunction(V.afterResponsive) && V.afterResponsive.call(le, n), V.responsiveSlides && $.responsiveSlides && $.responsiveSlides.toSections(), le.trigger("afterResponsive", [n])) : t && (Ze(Me.autoScrolling, "internal"), qe(Me.autoScrolling, "internal"), e(M).show(), _.removeClass(l), e.isFunction(V.afterResponsive) && V.afterResponsive.call(le, n), V.responsiveSlides && $.responsiveSlides && $.responsiveSlides.toSlides(), le.trigger("afterResponsive", [n]))
        }

        function an(e) {
            var t = "fp_" + e + "Extension";
            ke[e] = V[e + "Key"], $[e] = void 0 !== n[t] ? new n[t] : null, $[e] && $[e].c(e)
        }

        function rn(n, t, o) {
            var i = 100 * o,
                a = 100 / o;
            t.wrapAll('<div class="' + B + '" />'), t.parent().wrap('<div class="' + H + '" />'), n.find(D).css("width", i + "%"), o > 1 && (V.controlArrows && function(e) {
                e.find(E).after('<div class="' + j + '"></div><div class="' + U + '"></div>'), "#fff" != V.controlArrowColor && (e.find(Q).css("border-color", "transparent transparent transparent " + V.controlArrowColor), e.find(q).css("border-color", "transparent " + V.controlArrowColor + " transparent transparent"));
                V.loopHorizontal || e.find(q).hide()
            }(n), V.slidesNavigation && function(e, n) {
                e.append('<div class="' + F + '"><ul></ul></div>');
                var t = e.find(W);
                t.addClass(V.slidesNavPosition);
                for (var o = 0; o < n; o++) t.find("ul").append('<li><a href="#"><span></span></a></li>');
                t.css("margin-left", "-" + t.width() / 2 + "px"), t.find("li").first().find("a").addClass(u)
            }(n, o)), t.each(function(n) {
                e(this).css("width", a + "%"), V.verticalCentered && at(e(this))
            });
            var r = n.find(L);
            r.length && (0 !== e(S).index(m) || 0 === e(S).index(m) && 0 !== r.index()) ? (mt(r, "internal"), r.addClass(Y)) : t.eq(0).addClass(u)
        }

        function ln(e) {
            return V.offsetSections && $.offsetSections ? o.round($.offsetSections.getWindowHeight(e)) : se
        }

        function sn() {
            var n, t = e(S);
            t.addClass(h), An(t), Mn(t), V.scrollOverflow && V.scrollOverflowHandler.afterLoad(), (!(n = st(Pn().section)) || n.length && n.index() === oe.index()) && e.isFunction(V.afterLoad) && V.afterLoad.call(t, t.data("anchor"), t.index(m) + 1), e.isFunction(V.afterRender) && V.afterRender.call(le), le.trigger("afterRender")
        }

        function cn() {
            Fe || (requestAnimationFrame(dn), Fe = !0)
        }

        function dn() {
            var n, i, a;
            if (le.trigger("onScroll"), (!V.autoScrolling || V.scrollBar || yt("dragAndMove")) && !At()) {
                var r = yt("dragAndMove") ? o.abs($.dragAndMove.getCurrentScroll()) : J.scrollTop(),
                    l = (a = (i = r) > ze ? "down" : "up", ze = i, We = i, 0),
                    s = r + J.height() / 2,
                    c = (yt("dragAndMove") ? $.dragAndMove.getDocumentHeight() : _.height() - J.height()) === r,
                    d = t.querySelectorAll(m);
                if (c) l = d.length - 1;
                else if (r)
                    for (var f = 0; f < d.length; ++f) {
                        d[f].offsetTop <= s && (l = f)
                    } else l = 0;
                if (!(n = e(d).eq(l)).hasClass(u)) {
                    Re = !0;
                    var v, h, p = e(S),
                        g = p.index(m) + 1,
                        w = ot(n),
                        b = n.data("anchor"),
                        x = n.index(m) + 1,
                        y = n.find(L);
                    y.length && (h = y.data("anchor"), v = y.index()), fe && (n.addClass(u).siblings().removeClass(u), Ct("parallax", "afterLoad"), e.isFunction(V.onLeave) && V.onLeave.call(p, g, x, w), e.isFunction(V.afterLoad) && V.afterLoad.call(n, b, x), V.resetSliders && $.resetSliders && $.resetSliders.apply({
                        localIsResizing: ce,
                        leavingSection: g
                    }), On(p), An(n), Mn(n), tt(b, x - 1), V.anchors.length && (ee = b), ft(v, h, b, x)), clearTimeout(Se), Se = setTimeout(function() {
                        Re = !1
                    }, 100)
                }
                V.fitToSection && (clearTimeout(we), we = setTimeout(function() {
                    V.fitToSection && e(S).outerHeight() <= se && fn()
                }, V.fitToSectionDelay))
            }
            Fe = !1
        }

        function fn() {
            fe && (ce = !0, yn(e(S)), ce = !1)
        }

        function un(n) {
            if (ve.m[n]) {
                var t = "down" === n ? Ke : Je;
                if ($.scrollHorizontally && (t = $.scrollHorizontally.getScrollSection(n, t)), V.scrollOverflow) {
                    var o = V.scrollOverflowHandler.scrollable(e(S)),
                        i = "down" === n ? "bottom" : "top";
                    if (o.length > 0) {
                        if (!V.scrollOverflowHandler.isScrolled(i, o)) return !0;
                        t()
                    } else t()
                } else t()
            }
        }

        function vn(e) {
            var n = e.originalEvent;
            V.autoScrolling && pn(n) && e.preventDefault()
        }

        function hn(n) {
            var t = n.originalEvent,
                i = e(t.target).closest(m);
            if (pn(t)) {
                V.autoScrolling && n.preventDefault();
                var a = gt(t);
                He = a.y, Ee = a.x, i.find(E).length && o.abs(Le - Ee) > o.abs(Ie - He) ? !ie && o.abs(Le - Ee) > J.outerWidth() / 100 * V.touchSensitivity && (Le > Ee ? ve.m.right && en(i) : ve.m.left && nn(i)) : V.autoScrolling && fe && o.abs(Ie - He) > J.height() / 100 * V.touchSensitivity && (Ie > He ? un("down") : He > Ie && un("up"))
            }
        }

        function pn(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType
        }

        function gn(e) {
            var n = e.originalEvent;
            if (V.fitToSection && G.stop(), pn(n)) {
                var t = gt(n);
                Ie = t.y, Le = t.x
            }
        }

        function mn(e, n) {
            for (var t = 0, i = e.slice(o.max(e.length - n, 1)), a = 0; a < i.length; a++) t += i[a];
            return o.ceil(t / n)
        }

        function Sn(t) {
            var i = (new Date).getTime(),
                a = e(p).hasClass(T);
            if (V.autoScrolling && !te && !a) {
                var r = (t = t || n.event).wheelDelta || -t.deltaY || -t.detail,
                    l = o.max(-1, o.min(1, r)),
                    s = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
                    c = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !s;
                ue.length > 149 && ue.shift(), ue.push(o.abs(r)), V.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                var d = i - Ye;
                if (Ye = i, d > 200 && (ue = []), fe && !Tt()) mn(ue, 10) >= mn(ue, 70) && c && un(l < 0 ? "down" : "up");
                return !1
            }
            V.fitToSection && G.stop()
        }

        function wn(n, t) {
            var o = (void 0 === t ? e(S) : t).find(E);
            if (!(!o.length || Tt() || ie || o.find(I).length < 2)) {
                var i = o.find(L),
                    a = null;
                if (!(a = "left" === n ? i.prev(I) : i.next(I)).length) {
                    if (!V.loopHorizontal) return;
                    a = "left" === n ? i.siblings(":last") : i.siblings(":first")
                }
                ie = !0, Un(o, a, n)
            }
        }

        function bn() {
            e(L).each(function() {
                mt(e(this), "internal")
            })
        }

        function xn(e) {
            var n = e.position(),
                t = n.top,
                o = yt("dragAndMove") && $.dragAndMove.isGrabbing ? $.dragAndMove.isScrollingDown() : n.top > We,
                i = t - se + e.outerHeight(),
                a = V.bigSectionsDestination;
            return e.outerHeight() > se ? (o || a) && "bottom" !== a || (t = i) : (o || ce && e.is(":last-child")) && (t = i), V.offsetSections && $.offsetSections && (t = $.offsetSections.getSectionPosition(o, t, e)), We = t, t
        }

        function yn(n, t, i) {
            if (void 0 !== n && n.length) {
                var a, l, s = {
                    element: n,
                    callback: t,
                    isMovementUp: i,
                    dtop: xn(n),
                    yMovement: ot(n),
                    anchorLink: n.data("anchor"),
                    sectionIndex: n.index(m),
                    activeSlide: n.find(L),
                    activeSection: e(S),
                    leavingSection: e(S).index(m) + 1,
                    localIsResizing: ce
                };
                if (!(s.activeSection.is(n) && !ce || V.scrollBar && J.scrollTop() === s.dtop && !n.hasClass(C))) {
                    if (s.activeSlide.length && (a = s.activeSlide.data("anchor"), l = s.activeSlide.index()), e.isFunction(V.onLeave) && !s.localIsResizing) {
                        var c = s.yMovement;
                        if (void 0 !== i && (c = i ? "up" : "down"), !1 === V.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, c)) return
                    }
                    Ct("parallax", "apply", s), V.autoScrolling && V.continuousVertical && void 0 !== s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = function(n) {
                            n.isMovementUp ? n.activeSection.before(n.activeSection.nextAll(m)) : n.activeSection.after(n.activeSection.prevAll(m).get().reverse());
                            return St(e(S).position().top), bn(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = ot(n.element), n.leavingSection = n.activeSection.index(m) + 1, n.sectionIndex = n.element.index(m), e(r).trigger("onContinuousVertical", [n]), n
                        }(s)), yt("scrollOverflowReset") && $.scrollOverflowReset.setPrevious(s.activeSection), s.localIsResizing || On(s.activeSection), V.scrollOverflow && V.scrollOverflowHandler.beforeLeave(), n.addClass(u).siblings().removeClass(u), An(n), V.scrollOverflow && V.scrollOverflowHandler.onLeave(), fe = !1, ft(l, a, s.anchorLink, s.sectionIndex),
                        function(n) {
                            if (V.css3 && V.autoScrolling && !V.scrollBar) {
                                var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
                                lt(t, !0), V.scrollingSpeed ? (clearTimeout(ge), ge = setTimeout(function() {
                                    Cn(n)
                                }, V.scrollingSpeed)) : Cn(n)
                            } else {
                                var i = function(e) {
                                    var n = {};
                                    V.autoScrolling && !V.scrollBar ? (n.options = {
                                        top: -e.dtop
                                    }, n.element = r) : (n.options = {
                                        scrollTop: e.dtop
                                    }, n.element = "html, body");
                                    return n
                                }(n);
                                e(i.element).animate(i.options, V.scrollingSpeed, V.easing).promise().done(function() {
                                    V.scrollBar ? setTimeout(function() {
                                        Cn(n)
                                    }, 30) : Cn(n)
                                })
                            }
                        }(s), ee = s.anchorLink, tt(s.anchorLink, function(n) {
                            if (n.wrapAroundElements && n.wrapAroundElements.length) return n.isMovementUp ? e(m).length - 1 : 0;
                            return n.sectionIndex
                        }(s))
                }
            }
        }

        function Cn(n) {
            var t;
            (t = n).wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(w).before(t.wrapAroundElements) : e(b).after(t.wrapAroundElements), St(e(S).position().top), bn(), t.sectionIndex = t.element.index(m), t.leavingSection = t.activeSection.index(m) + 1), e.isFunction(V.afterLoad) && !n.localIsResizing && V.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), V.scrollOverflow && V.scrollOverflowHandler.afterLoad(), Ct("parallax", "afterLoad"), yt("scrollOverflowReset") && $.scrollOverflowReset.reset(), V.resetSliders && $.resetSliders && $.resetSliders.apply(n), n.localIsResizing || Mn(n.element), n.element.addClass(h).siblings().removeClass(h), fe = !0, e.isFunction(n.callback) && n.callback.call(this)
        }

        function Tn(e, n) {
            e.attr(n, e.data(n)).removeAttr("data-" + n)
        }

        function An(n) {
            var t;
            V.lazyLoading && Rn(n).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function() {
                if (t = e(this), e.each(["src", "srcset"], function(e, n) {
                        var o = t.attr("data-" + n);
                        void 0 !== o && o && Tn(t, n)
                    }), t.is("source")) {
                    var n = t.closest("video").length ? "video" : "audio";
                    t.closest(n).get(0).load()
                }
            })
        }

        function Mn(n) {
            var t = Rn(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && kn(n), n.onload = function() {
                    n.hasAttribute("data-autoplay") && kn(n)
                }
            })
        }

        function kn(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function On(n) {
            var t = Rn(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function Rn(n) {
            var t = n.find(L);
            return t.length && (n = e(t)), n
        }

        function zn(e) {
            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

            function t(e) {
                var t, o, i, a, r, l, s = "",
                    c = 0;
                for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); c < e.length;) t = n.indexOf(e.charAt(c++)) << 2 | (a = n.indexOf(e.charAt(c++))) >> 4, o = (15 & a) << 4 | (r = n.indexOf(e.charAt(c++))) >> 2, i = (3 & r) << 6 | (l = n.indexOf(e.charAt(c++))), s += String.fromCharCode(t), 64 != r && (s += String.fromCharCode(o)), 64 != l && (s += String.fromCharCode(i));
                return s = function(e) {
                    var n, t = "",
                        o = 0,
                        i = 0,
                        a = 0;
                    for (; o < e.length;)(i = e.charCodeAt(o)) < 128 ? (t += String.fromCharCode(i), o++) : i > 191 && i < 224 ? (a = e.charCodeAt(o + 1), t += String.fromCharCode((31 & i) << 6 | 63 & a), o += 2) : (a = e.charCodeAt(o + 1), n = e.charCodeAt(o + 2), t += String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | 63 & n), o += 3);
                    return t
                }(s)
            }

            function o(e) {
                return e.slice(3).slice(0, -3)
            }
            return function(e) {
                var n = e.split("_");
                if (n.length > 1) {
                    var i = n[1];
                    return e.replace(o(n[1]), "").split("_")[0] + "_" + t(i.slice(3).slice(0, -3))
                }
                return o(e)
            }(t(e))
        }

        function In(e) {
            var n = function() {
                    if (t.domain.length) {
                        for (var e = t.domain.replace(/^(www\.)/, "").split("."); e.length > 2;) e.shift();
                        return e.join(".").replace(/(^\.*)|(\.*$)/g, "")
                    }
                    return ""
                }(),
                o = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN"],
                i = zn(o[0]),
                a = zn(o[1]),
                r = zn(o[2]),
                l = zn(o[3]),
                s = [i, a, r].indexOf(n) < 0 && 0 !== n.length,
                c = void 0 !== ke[e] && ke[e].length;
            if (!c && s) return !1;
            var d = c ? zn(ke[e]) : "",
                f = (d = d.split("_")).length > 1 && d[1].indexOf(e, d[1].length - e.length) > -1;
            return !(d[0].indexOf(n, d[0].length - n.length) < 0 && s && l != d[0]) && f || !s
        }

        function Ln(n) {
            Be = zn("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), De = e("<div/>").html(Be).contents(), yt(n) && $[n] && (In(n) || (Hn(), setInterval(Hn, 2e3)))
        }

        function Hn() {
            Te || (o.random() < .5 ? _.prepend(De) : _.append(De), Te = !0, De.bind("destroyed", function() {
                clearTimeout(Pe), Pe = setTimeout(En, 900)
            })), e(De).attr("style", zn("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, zn("MTIzICFpbXBvcnRhbnQ7MzQ1")))
        }

        function En() {
            Te = !1
        }

        function Bn() {
            var e = Pn(),
                n = e.section,
                t = e.slide;
            n && (V.animateAnchor ? ct(n, t) : _e(n, t))
        }

        function Dn() {
            if (!Re && !V.lockAnchors) {
                var e = Pn(),
                    n = e.section,
                    t = e.slide,
                    o = void 0 === ee,
                    i = void 0 === ee && void 0 === t && !ie;
                n && n.length && (n && n !== ee && !o || i || !ie && ne != t) && ct(n, t)
            }
        }

        function Pn() {
            var e, t, o = n.location.hash;
            if (o.length) {
                var i = o.replace("#", "").split("/"),
                    a = o.indexOf("#/") > -1;
                e = a ? "/" + i[1] : decodeURIComponent(i[0]);
                var r = a ? i[2] : i[1];
                r && r.length && (t = decodeURIComponent(r))
            }
            return {
                section: e,
                slide: t
            }
        }

        function Yn(n) {
            clearTimeout(be);
            var t = e(":focus"),
                o = n.which;
            if (9 === o) ! function(n) {
                var t = n.shiftKey,
                    o = e(":focus"),
                    i = e(S),
                    a = i.find(L),
                    r = (a.length ? a : i).find(Ae).not('[tabindex="-1"]');

                function l(e) {
                    return e.preventDefault(), r.first().focus()
                }
                o.length ? o.closest(S, L).length || (o = l(n)) : l(n);
                (!t && o.is(r.last()) || t && o.is(r.first())) && n.preventDefault()
            }(n);
            else if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && V.keyboardScrolling && V.autoScrolling) {
                e.inArray(o, [40, 38, 32, 33, 34]) > -1 && n.preventDefault(), te = n.ctrlKey, be = setTimeout(function() {
                    ! function(n) {
                        var t = n.shiftKey;
                        if (!fe && [37, 39].indexOf(n.which) < 0) return;
                        switch (n.which) {
                            case 38:
                            case 33:
                                ve.k.up && Je();
                                break;
                            case 32:
                                if (t && ve.k.up) {
                                    Je();
                                    break
                                }
                            case 40:
                            case 34:
                                ve.k.down && Ke();
                                break;
                            case 36:
                                ve.k.up && $e(1);
                                break;
                            case 35:
                                ve.k.down && $e(e(m).length);
                                break;
                            case 37:
                                ve.k.left && nn();
                                break;
                            case 39:
                                ve.k.right && en();
                                break;
                            default:
                                ;
                        }
                    }(n)
                }, 150)
            }
        }

        function Fn() {
            e(this).prev().trigger("click")
        }

        function Wn(e) {
            de && (te = e.ctrlKey)
        }

        function Xn(e) {
            2 == e.which && (Xe = e.pageY, le.on("mousemove", Gn))
        }

        function Vn(e) {
            2 == e.which && le.off("mousemove")
        }

        function Zn() {
            var n = e(this).closest(m);
            e(this).hasClass(N) ? ve.m.left && nn(n) : ve.m.right && en(n)
        }

        function Nn() {
            de = !1, te = !1
        }

        function jn(n) {
            n.preventDefault();
            var t = e(this).parent().index();
            yn(e(m).eq(t))
        }

        function qn(n) {
            n.preventDefault();
            var t = e(this).closest(m).find(E);
            Un(t, t.find(I).eq(e(this).closest("li").index()))
        }

        function Gn(e) {
            fe && (e.pageY < Xe && ve.m.up ? Je() : e.pageY > Xe && ve.m.down && Ke()), Xe = e.pageY
        }

        function Un(n, t, o) {
            var i = n.closest(m),
                a = {
                    slides: n,
                    destiny: t,
                    direction: o,
                    destinyPos: t.position(),
                    slideIndex: t.index(),
                    section: i,
                    sectionIndex: i.index(m),
                    anchorLink: i.data("anchor"),
                    slidesNav: i.find(W),
                    slideAnchor: vt(t),
                    prevSlide: i.find(L),
                    prevSlideIndex: i.find(L).index(),
                    localIsResizing: ce
                };
            a.xMovement = it(a.prevSlideIndex, a.slideIndex), a.localIsResizing || (fe = !1), Ct("parallax", "applyHorizontal", a), V.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && e.isFunction(V.onSlideLeave) && !1 === V.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.direction, a.slideIndex) ? ie = !1 : (t.addClass(u).siblings().removeClass(u), a.localIsResizing || (On(a.prevSlide), An(t)), Qn(a), i.hasClass(u) && !a.localIsResizing && ft(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex), $.continuousHorizontal && $.continuousHorizontal.apply(a), At() ? Jn(a) : Kn(n, a, !0), V.interlockedSlides && $.interlockedSlides && (yt("continuousHorizontal") && void 0 !== o && o !== a.xMovement || $.interlockedSlides.apply(a)))
        }

        function Qn(e) {
            !V.loopHorizontal && V.controlArrows && (e.section.find(q).toggle(0 !== e.slideIndex), e.section.find(Q).toggle(!e.destiny.is(":last-child")))
        }

        function Jn(n) {
            var t, o;
            $.continuousHorizontal && $.continuousHorizontal.afterSlideLoads(n), t = n.slidesNav, o = n.slideIndex, t.find(v).removeClass(u), t.find("li").eq(o).find("a").addClass(u), n.localIsResizing || (Ct("parallax", "afterSlideLoads"), e.isFunction(V.afterSlideLoad) && V.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), fe = !0, Mn(n.destiny)), ie = !1, yt("interlockedSlides") && $.interlockedSlides.apply(n)
        }

        function Kn(e, n, t) {
            var i = n.destinyPos;
            if (V.css3) {
                var a = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                et(e.find(D)).css(wt(a)), me = setTimeout(function() {
                    t && Jn(n)
                }, V.scrollingSpeed, V.easing)
            } else e.animate({
                scrollLeft: o.round(i.left)
            }, V.scrollingSpeed, V.easing, function() {
                t && Jn(n)
            })
        }

        function _n() {
            if (le.trigger("onResize"), $n(), ae) {
                var n = e(t.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = J.height();
                    o.abs(i - Ve) > 20 * o.max(Ve, i) / 100 && (tn(!0), Ve = i)
                }
            } else clearTimeout(pe), pe = setTimeout(function() {
                tn(!0)
            }, 350)
        }

        function $n() {
            var e = V.responsive || V.responsiveWidth,
                n = V.responsiveHeight,
                t = e && J.outerWidth() < e,
                o = n && J.height() < n;
            e && n ? on(t || o) : e ? on(t) : n && on(o)
        }

        function et(e) {
            var n = "all " + V.scrollingSpeed + "ms " + V.easingcss3;
            return e.removeClass(s), e.css({
                "-webkit-transition": n,
                transition: n
            })
        }

        function nt(e) {
            return e.addClass(s)
        }

        function tt(n, t) {
            var o, i, a;
            o = n, V.menu && (e(V.menu).find(v).removeClass(u), e(V.menu).find('[data-menuanchor="' + o + '"]').addClass(u)), i = n, a = t, V.navigation && (e(M).find(v).removeClass(u), i ? e(M).find('a[href="#' + i + '"]').addClass(u) : e(M).find("li").eq(a).find("a").addClass(u))
        }

        function ot(n) {
            var t = e(S).index(m),
                o = n.index(m);
            return t == o ? "none" : t > o ? "up" : "down"
        }

        function it(e, n) {
            return e == n ? "none" : e > n ? "left" : "right"
        }

        function at(n) {
            if (!n.hasClass(P)) {
                var t = e('<div class="' + x + '" />').height(rt(n));
                n.addClass(P).wrapInner(t)
            }
        }

        function rt(e) {
            var n = ln(e);
            if (V.paddingTop || V.paddingBottom) {
                var t = e;
                t.hasClass(g) || (t = e.closest(m)), n -= parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"))
            }
            return n
        }

        function lt(e, n) {
            n ? et(le) : nt(le), clearTimeout(xe), le.css(wt(e)), xe = setTimeout(function() {
                le.removeClass(s)
            }, 10)
        }

        function st(n) {
            var t = le.find(m + '[data-anchor="' + n + '"]');
            if (!t.length) {
                var o = void 0 !== n ? n - 1 : 0;
                t = e(m).eq(o)
            }
            return t
        }

        function ct(e, n) {
            var t = st(e);
            if (t.length) {
                var o, i, a, r = (o = n, (a = (i = t).find(I + '[data-anchor="' + o + '"]')).length || (o = void 0 !== o ? o : 0, a = i.find(I).eq(o)), a);
                e === ee || t.hasClass(u) ? dt(r) : yn(t, function() {
                    dt(r)
                })
            }
        }

        function dt(e) {
            e.length && Un(e.closest(E), e)
        }

        function ft(e, n, t, o) {
            var i = "";
            V.anchors.length && !V.lockAnchors && (e ? (void 0 !== t && (i = t), void 0 === n && (n = e), ne = n, ut(i + "/" + n)) : void 0 !== e ? (ne = n, ut(t)) : ut(t)), ht()
        }

        function ut(e) {
            if (V.recordHistory) location.hash = e;
            else if (ae || re) n.history.replaceState(i, i, "#" + e);
            else {
                var t = n.location.href.split("#")[0];
                n.location.replace(t + "#" + e)
            }
        }

        function vt(e) {
            var n = e.data("anchor"),
                t = e.index();
            return void 0 === n && (n = t), n
        }

        function ht() {
            var n = e(S),
                t = n.find(L),
                o = vt(n),
                i = vt(t),
                a = String(o);
            t.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");
            var r = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
            _[0].className = _[0].className.replace(r, ""), _.addClass(f + "-" + a)
        }

        function pt() {
            return n.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function gt(e) {
            var n = [];
            return n.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, re && pn(e) && V.scrollBar && void 0 !== e.touches && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n
        }

        function mt(e, n) {
            je(0, "internal"), void 0 !== n && (ce = !0), Un(e.closest(E), e), void 0 !== n && (ce = !1), je(Me.scrollingSpeed, "internal")
        }

        function St(e) {
            var n = o.round(e);
            V.css3 && V.autoScrolling && !V.scrollBar ? lt("translate3d(0px, -" + n + "px, 0px)", !1) : V.autoScrolling && !V.scrollBar ? le.css("top", -n) : G.scrollTop(n)
        }

        function wt(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function bt(n, t, o) {
            "all" !== t ? ve[o][t] = n : e.each(Object.keys(ve[o]), function(e, t) {
                ve[o][t] = n
            })
        }

        function xt(e) {
            return e.css({
                "-webkit-transition": "none",
                transition: "none"
            })
        }

        function yt(e) {
            return null !== V[e] && "object" == typeof V[e] ? V[e].enabled && $[e] : V[e] && $[e]
        }

        function Ct(e, n, t) {
            if (yt(e)) return $[e][n](t)
        }

        function Tt() {
            return yt("dragAndMove") && $.dragAndMove.isAnimating
        }

        function At() {
            return yt("dragAndMove") && $.dragAndMove.isGrabbing
        }

        function Mt(e, n, t) {
            V[e] = n, "internal" !== t && (Me[e] = n)
        }

        function kt() {
            e("html").hasClass(d) ? Ot("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (V.continuousVertical && (V.loopTop || V.loopBottom) && (V.continuousVertical = !1, Ot("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), V.scrollBar && V.scrollOverflow && Ot("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !V.continuousVertical || !V.scrollBar && V.autoScrolling || (V.continuousVertical = !1, Ot("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), V.scrollOverflow && !V.scrollOverflowHandler && (V.scrollOverflow = !1, Ot("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), e.each(V.anchors, function(n, t) {
                var o = K.find("[name]").filter(function() {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase()
                    }),
                    i = K.find("[id]").filter(function() {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase()
                    });
                (i.length || o.length) && (Ot("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && Ot("error", '"' + t + '" is is being used by another element `id` property'), o.length && Ot("error", '"' + t + '" is is being used by another element `name` property'))
            }))
        }

        function Ot(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }
    }
});







/*************************************
	Full Page Js
**************************************/
/*!
 * fullPage 2.9.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
! function(e, o) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(n) {
        return o(n, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = o(require("jquery"), e, e.document, e.Math) : o(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, o, n, t, i) {
    "use strict";
    var a = "fullpage-wrapper",
        l = "." + a,
        s = "fp-responsive",
        r = "fp-notransition",
        c = "fp-destroyed",
        d = "fp-enabled",
        f = "fp-viewing",
        u = "active",
        h = "." + u,
        v = "fp-completely",
        p = "." + v,
        g = "fp-section",
        m = "." + g,
        w = m + h,
        S = m + ":first",
        b = m + ":last",
        x = "fp-tableCell",
        y = "." + x,
        C = "fp-auto-height",
        T = "fp-normal-scroll",
        k = "fp-nav",
        L = "#" + k,
        A = "fp-tooltip",
        O = "." + A,
        I = "fp-show-active",
        E = "fp-slide",
        M = "." + E,
        B = M + h,
        R = "fp-slides",
        z = "." + R,
        H = "fp-slidesContainer",
        D = "." + H,
        P = "fp-table",
        q = "fp-slidesNav",
        F = "." + q,
        V = F + " a",
        j = "fp-controlArrow",
        Y = "." + j,
        N = "fp-prev",
        X = j + " " + N,
        U = Y + ("." + N),
        W = "fp-next",
        K = j + " " + W,
        _ = Y + ".fp-next",
        Q = e(o),
        G = e(n);
    e.fn.fullpage = function(j) {
        if (e("html").hasClass(d)) $o();
        else {
            var W = e("html, body"),
                J = e("body"),
                Z = e.fn.fullpage;
            j = e.extend({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate"
                },
                sectionSelector: ".section",
                slideSelector: ".slide",
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, j);
            var $, ee, oe, ne, te = !1,
                ie = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                ae = "ontouchstart" in o || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                le = e(this),
                se = Q.height(),
                re = !1,
                ce = !0,
                de = !0,
                fe = [],
                ue = {
                    m: {
                        up: !0,
                        down: !0,
                        left: !0,
                        right: !0
                    }
                };
            ue.k = e.extend(!0, {}, ue.m);
            var he, ve, pe, ge, me, we, Se, be = function() {
                    var e;
                    e = o.PointerEvent ? {
                        down: "pointerdown",
                        move: "pointermove"
                    } : {
                        down: "MSPointerDown",
                        move: "MSPointerMove"
                    };
                    return e
                }(),
                xe = {
                    touchmove: "ontouchmove" in o ? "touchmove" : be.move,
                    touchstart: "ontouchstart" in o ? "touchstart" : be.down
                },
                ye = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                Ce = e.extend(!0, {}, j);
            $o(), e.extend(e.easing, {
                easeInOutCubic: function(e, o, n, t, i) {
                    return (o /= i / 2) < 1 ? t / 2 * o * o * o + n : t / 2 * ((o -= 2) * o * o + 2) + n
                }
            }), e(this).length && (Z.version = "2.9.6", Z.setAutoScrolling = ze, Z.setRecordHistory = He, Z.setScrollingSpeed = De, Z.setFitToSection = Pe, Z.setLockAnchors = function(e) {
                j.lockAnchors = e
            }, Z.setMouseWheelScrolling = qe, Z.setAllowScrolling = Fe, Z.setKeyboardScrolling = Ve, Z.moveSectionUp = je, Z.moveSectionDown = Ye, Z.silentMoveTo = Ne, Z.moveTo = Xe, Z.moveSlideRight = Ue, Z.moveSlideLeft = We, Z.fitToSection = Je, Z.reBuild = Ke, Z.setResponsive = _e, Z.destroy = function(o) {
                ze(!1, "internal"), Fe(!1), Ve(!1), le.addClass(c), clearTimeout(ge), clearTimeout(pe), clearTimeout(ve), clearTimeout(me), clearTimeout(we), Q.off("scroll", Ge).off("hashchange", mo).off("resize", Mo), G.off("keydown", So).off("keyup", xo).off("click touchstart", L + " a").off("mouseenter", L + " li").off("mouseleave", L + " li").off("click touchstart", V).off("mouseover", j.normalScrollElements).off("mouseout", j.normalScrollElements), e(m).off("click touchstart", Y), clearTimeout(ge), clearTimeout(pe), o && function() {
                    Qo(0), le.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                        co(e(this), "src")
                    }), le.find("img[data-srcset]").each(function() {
                        co(e(this), "srcset")
                    }), e(L + ", " + F + ", " + Y).remove(), e(m).css({
                        height: "",
                        "background-color": "",
                        padding: ""
                    }), e(M).css({
                        width: ""
                    }), le.css({
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), W.css({
                        overflow: "",
                        height: ""
                    }), e("html").removeClass(d), J.removeClass(s), e.each(J.get(0).className.split(/\s+/), function(e, o) {
                        0 === o.indexOf(f) && J.removeClass(o)
                    }), e(m + ", " + M).each(function() {
                        j.scrollOverflowHandler && j.scrollOverflowHandler.remove(e(this)), e(this).removeClass(P + " " + u), e(this).attr("style", e(this).data("fp-styles"))
                    }), zo(le), le.find(y + ", " + D + ", " + z).each(function() {
                        e(this).replaceWith(this.childNodes)
                    }), le.css({
                        "-webkit-transition": "none",
                        transition: "none"
                    }), W.scrollTop(0);
                    var o = [g, E, H];
                    e.each(o, function(o, n) {
                        e("." + n).removeClass(n)
                    })
                }()
            }, Z.shared = {
                afterRenderActions: Qe
            }, function() {
                j.css3 && (j.css3 = function() {
                    var e, t = n.createElement("p"),
                        a = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                    for (var l in n.body.insertBefore(t, null), a) t.style[l] !== i && (t.style[l] = "translate3d(1px,1px,1px)", e = o.getComputedStyle(t).getPropertyValue(a[l]));
                    return n.body.removeChild(t), e !== i && e.length > 0 && "none" !== e
                }());
                j.scrollBar = j.scrollBar || j.hybrid, t = le.find(j.sectionSelector), j.anchors.length || (j.anchors = t.filter("[data-anchor]").map(function() {
                    return e(this).data("anchor").toString()
                }).get()), j.navigationTooltips.length || (j.navigationTooltips = t.filter("[data-tooltip]").map(function() {
                    return e(this).data("tooltip").toString()
                }).get()), le.css({
                    height: "100%",
                    position: "relative"
                }), le.addClass(a), e("html").addClass(d), se = Q.height(), le.removeClass(c), le.find(j.sectionSelector).addClass(g), le.find(j.slideSelector).addClass(E), e(m).each(function(o) {
                    var n, t, i, a, s = e(this),
                        r = s.find(M),
                        c = r.length;
                    s.data("fp-styles", s.attr("style")), i = s, (a = o) || 0 !== e(w).length || i.addClass(u), ne = e(w), i.css("height", se + "px"), j.paddingTop && i.css("padding-top", j.paddingTop), j.paddingBottom && i.css("padding-bottom", j.paddingBottom), void 0 !== j.sectionsColor[a] && i.css("background-color", j.sectionsColor[a]), void 0 !== j.anchors[a] && i.attr("data-anchor", j.anchors[a]), n = s, t = o, void 0 !== j.anchors[t] && n.hasClass(u) && Ho(j.anchors[t], t), j.menu && j.css3 && e(j.menu).closest(l).length && e(j.menu).appendTo(J), c > 0 ? function(o, n, t) {
                        var i, a = 100 * t,
                            l = 100 / t;
                        n.wrapAll('<div class="' + H + '" />'), n.parent().wrap('<div class="' + R + '" />'), o.find(D).css("width", a + "%"), t > 1 && (j.controlArrows && ((i = o).find(z).after('<div class="' + X + '"></div><div class="' + K + '"></div>'), "#fff" != j.controlArrowColor && (i.find(_).css("border-color", "transparent transparent transparent " + j.controlArrowColor), i.find(U).css("border-color", "transparent " + j.controlArrowColor + " transparent transparent")), j.loopHorizontal || i.find(U).hide()), j.slidesNavigation && function(e, o) {
                            e.append('<div class="' + q + '"><ul></ul></div>');
                            var n = e.find(F);
                            n.addClass(j.slidesNavPosition);
                            for (var t = 0; t < o; t++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
                            n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(u)
                        }(o, t)), n.each(function(o) {
                            e(this).css("width", l + "%"), j.verticalCentered && Po(e(this))
                        });
                        var s = o.find(B);
                        s.length && (0 !== e(w).index(m) || 0 === e(w).index(m) && 0 !== s.index()) ? _o(s, "internal") : n.eq(0).addClass(u)
                    }(s, r, c) : j.verticalCentered && Po(s)
                }), j.fixedElements && j.css3 && e(j.fixedElements).appendTo(J), j.navigation && function() {
                    J.append('<div id="' + k + '"><ul></ul></div>');
                    var o = e(L);
                    o.addClass(function() {
                        return j.showActiveTooltip ? I + " " + j.navigationPosition : j.navigationPosition
                    });
                    for (var n = 0; n < e(m).length; n++) {
                        var t = "";
                        j.anchors.length && (t = j.anchors[n]);
                        var i = '<li><a href="#' + t + '"><span></span></a>',
                            a = j.navigationTooltips[n];
                        void 0 !== a && "" !== a && (i += '<div class="' + A + " " + j.navigationPosition + '">' + a + "</div>"), i += "</li>", o.find("ul").append(i)
                    }
                    e(L).css("margin-top", "-" + e(L).height() / 2 + "px"), e(L).find("li").eq(e(w).index(m)).find("a").addClass(u)
                }(), le.find('iframe[src*="youtube.com/embed/"]').each(function() {
                    var o, n, t;
                    o = e(this), n = "enablejsapi=1", t = o.attr("src"), o.attr("src", t + (/\?/.test(t) ? "&" : "?") + n)
                }), j.scrollOverflow ? he = j.scrollOverflowHandler.init(j) : Qe(), Fe(!0), ze(j.autoScrolling, "internal"), Bo(), Wo(), "complete" === n.readyState && go();
                var t;
                Q.on("load", go)
            }(), Q.on("scroll", Ge).on("hashchange", mo).blur(ko).resize(Mo), G.keydown(So).keyup(xo).on("click touchstart", L + " a", Lo).on("click touchstart", V, Ao).on("click", O, bo), e(m).on("click touchstart", Y, To), j.normalScrollElements && (G.on("mouseenter touchstart", j.normalScrollElements, function() {
                Fe(!1)
            }), G.on("mouseleave touchend", j.normalScrollElements, function() {
                Fe(!0)
            })));
            var Te = !1,
                ke = 0,
                Le = 0,
                Ae = 0,
                Oe = 0,
                Ie = 0,
                Ee = (new Date).getTime(),
                Me = 0,
                Be = 0,
                Re = se
        }

        function ze(o, n) {
            o || Qo(0), Zo("autoScrolling", o, n);
            var t = e(w);
            j.autoScrolling && !j.scrollBar ? (W.css({
                overflow: "hidden",
                height: "100%"
            }), He(Ce.recordHistory, "internal"), le.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), t.length && Qo(t.position().top)) : (W.css({
                overflow: "visible",
                height: "initial"
            }), He(!1, "internal"), le.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), t.length && W.scrollTop(t.position().top))
        }

        function He(e, o) {
            Zo("recordHistory", e, o)
        }

        function De(e, o) {
            Zo("scrollingSpeed", e, o)
        }

        function Pe(e, o) {
            Zo("fitToSection", e, o)
        }

        function qe(e) {
            e ? (! function() {
                var e, t = "";
                o.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on");
                var a = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == a ? n[e](t + "MozMousePixelScroll", io, !1) : n[e](t + a, io, !1)
            }(), le.on("mousedown", yo).on("mouseup", Co)) : (n.addEventListener ? (n.removeEventListener("mousewheel", io, !1), n.removeEventListener("wheel", io, !1), n.removeEventListener("MozMousePixelScroll", io, !1)) : n.detachEvent("onmousewheel", io), le.off("mousedown", yo).off("mouseup", Co))
        }

        function Fe(o, n) {
            void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function(e, n) {
                Jo(o, n, "m")
            })) : (Jo(o, "all", "m"), o ? (qe(!0), (ie || ae) && (j.autoScrolling && J.off(xe.touchmove).on(xe.touchmove, $e), e(l).off(xe.touchstart).on(xe.touchstart, no).off(xe.touchmove).on(xe.touchmove, eo))) : (qe(!1), (ie || ae) && (j.autoScrolling && J.off(xe.touchmove), e(l).off(xe.touchstart).off(xe.touchmove))))
        }

        function Ve(o, n) {
            void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function(e, n) {
                Jo(o, n, "k")
            })) : (Jo(o, "all", "k"), j.keyboardScrolling = o)
        }

        function je() {
            var o = e(w).prev(m);
            o.length || !j.loopTop && !j.continuousVertical || (o = e(m).last()), o.length && so(o, null, !0)
        }

        function Ye() {
            var o = e(w).next(m);
            o.length || !j.loopBottom && !j.continuousVertical || (o = e(m).first()), o.length && so(o, null, !1)
        }

        function Ne(e, o) {
            De(0, "internal"), Xe(e, o), De(Ce.scrollingSpeed, "internal")
        }

        function Xe(e, o) {
            var n = Vo(e);
            void 0 !== o ? jo(e, o) : n.length > 0 && so(n)
        }

        function Ue(e) {
            ao("right", e)
        }

        function We(e) {
            ao("left", e)
        }

        function Ke(o) {
            if (!le.hasClass(c)) {
                re = !0, se = Q.height(), e(m).each(function() {
                    var o = e(this).find(z),
                        n = e(this).find(M);
                    j.verticalCentered && e(this).find(y).css("height", qo(e(this)) + "px"), e(this).css("height", se + "px"), n.length > 1 && Io(o, o.find(B))
                }), j.scrollOverflow && he.createScrollBarForAll();
                var n = e(w).index(m);
                n && Ne(n + 1), re = !1, e.isFunction(j.afterResize) && o && j.afterResize.call(le), e.isFunction(j.afterReBuild) && !o && j.afterReBuild.call(le)
            }
        }

        function _e(o) {
            var n = J.hasClass(s);
            o ? n || (ze(!1, "internal"), Pe(!1, "internal"), e(L).hide(), J.addClass(s), e.isFunction(j.afterResponsive) && j.afterResponsive.call(le, o)) : n && (ze(Ce.autoScrolling, "internal"), Pe(Ce.autoScrolling, "internal"), e(L).show(), J.removeClass(s), e.isFunction(j.afterResponsive) && j.afterResponsive.call(le, o))
        }

        function Qe() {
            var o, n = e(w);
            n.addClass(v), fo(n), uo(n), j.scrollOverflow && j.scrollOverflowHandler.afterLoad(), (!(o = Vo(wo().section)) || o.length && o.index() === ne.index()) && e.isFunction(j.afterLoad) && j.afterLoad.call(n, n.data("anchor"), n.index(m) + 1), e.isFunction(j.afterRender) && j.afterRender.call(le)
        }

        function Ge() {
            var o, t, i;
            if (!j.autoScrolling || j.scrollBar) {
                var a = Q.scrollTop(),
                    l = (i = (t = a) > ke ? "down" : "up", ke = t, Me = t, i),
                    s = 0,
                    r = a + Q.height() / 2,
                    c = J.height() - Q.height() === a,
                    d = n.querySelectorAll(m);
                if (c) s = d.length - 1;
                else if (a)
                    for (var f = 0; f < d.length; ++f) {
                        d[f].offsetTop <= r && (s = f)
                    } else s = 0;
                if (function(o) {
                        var n = e(w).position().top,
                            t = n + Q.height();
                        if ("up" == o) return t >= Q.scrollTop() + Q.height();
                        return n <= Q.scrollTop()
                    }(l) && (e(w).hasClass(v) || e(w).addClass(v).siblings().removeClass(v)), !(o = e(d).eq(s)).hasClass(u)) {
                    Te = !0;
                    var h, p, g = e(w),
                        S = g.index(m) + 1,
                        b = Do(o),
                        x = o.data("anchor"),
                        y = o.index(m) + 1,
                        C = o.find(B);
                    C.length && (p = C.data("anchor"), h = C.index()), de && (o.addClass(u).siblings().removeClass(u), e.isFunction(j.onLeave) && j.onLeave.call(g, S, y, b), e.isFunction(j.afterLoad) && j.afterLoad.call(o, x, y), vo(g), fo(o), uo(o), Ho(x, y - 1), j.anchors.length && ($ = x), No(h, p, x, y)), clearTimeout(me), me = setTimeout(function() {
                        Te = !1
                    }, 100)
                }
                j.fitToSection && (clearTimeout(we), we = setTimeout(function() {
                    j.fitToSection && e(w).outerHeight() <= se && Je()
                }, j.fitToSectionDelay))
            }
        }

        function Je() {
            de && (re = !0, so(e(w)), re = !1)
        }

        function Ze(o) {
            if (ue.m[o]) {
                var n = "down" === o ? Ye : je;
                if (j.scrollOverflow) {
                    var t = j.scrollOverflowHandler.scrollable(e(w)),
                        i = "down" === o ? "bottom" : "top";
                    if (t.length > 0) {
                        if (!j.scrollOverflowHandler.isScrolled(i, t)) return !0;
                        n()
                    } else n()
                } else n()
            }
        }

        function $e(e) {
            var o = e.originalEvent;
            j.autoScrolling && oo(o) && e.preventDefault()
        }

        function eo(o) {
            var n = o.originalEvent,
                i = e(n.target).closest(m);
            if (oo(n)) {
                j.autoScrolling && o.preventDefault();
                var a = Ko(n);
                Oe = a.y, Ie = a.x, i.find(z).length && t.abs(Ae - Ie) > t.abs(Le - Oe) ? !te && t.abs(Ae - Ie) > Q.outerWidth() / 100 * j.touchSensitivity && (Ae > Ie ? ue.m.right && Ue(i) : ue.m.left && We(i)) : j.autoScrolling && de && t.abs(Le - Oe) > Q.height() / 100 * j.touchSensitivity && (Le > Oe ? Ze("down") : Oe > Le && Ze("up"))
            }
        }

        function oo(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType
        }

        function no(e) {
            var o = e.originalEvent;
            if (j.fitToSection && W.stop(), oo(o)) {
                var n = Ko(o);
                Le = n.y, Ae = n.x
            }
        }

        function to(e, o) {
            for (var n = 0, i = e.slice(t.max(e.length - o, 1)), a = 0; a < i.length; a++) n += i[a];
            return t.ceil(n / o)
        }

        function io(n) {
            var i = (new Date).getTime(),
                a = e(p).hasClass(T);
            if (j.autoScrolling && !oe && !a) {
                var l = (n = n || o.event).wheelDelta || -n.deltaY || -n.detail,
                    s = t.max(-1, t.min(1, l)),
                    r = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                    c = t.abs(n.wheelDeltaX) < t.abs(n.wheelDelta) || t.abs(n.deltaX) < t.abs(n.deltaY) || !r;
                fe.length > 149 && fe.shift(), fe.push(t.abs(l)), j.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
                var d = i - Ee;
                if (Ee = i, d > 200 && (fe = []), de) to(fe, 10) >= to(fe, 70) && c && Ze(s < 0 ? "down" : "up");
                return !1
            }
            j.fitToSection && W.stop()
        }

        function ao(o, n) {
            var t = (void 0 === n ? e(w) : n).find(z),
                i = t.find(M).length;
            if (!(!t.length || te || i < 2)) {
                var a = t.find(B),
                    l = null;
                if (!(l = "left" === o ? a.prev(M) : a.next(M)).length) {
                    if (!j.loopHorizontal) return;
                    l = "left" === o ? a.siblings(":last") : a.siblings(":first")
                }
                te = !0, Io(t, l, o)
            }
        }

        function lo() {
            e(B).each(function() {
                _o(e(this), "internal")
            })
        }

        function so(o, n, i) {
            if (void 0 !== o) {
                var a, s, r, c, d, f, h, v, p = {
                    element: o,
                    callback: n,
                    isMovementUp: i,
                    dtop: (s = (a = o).position(), r = s.top, c = s.top > Me, d = r - se + a.outerHeight(), f = j.bigSectionsDestination, a.outerHeight() > se ? (c || f) && "bottom" !== f || (r = d) : (c || re && a.is(":last-child")) && (r = d), Me = r, r),
                    yMovement: Do(o),
                    anchorLink: o.data("anchor"),
                    sectionIndex: o.index(m),
                    activeSlide: o.find(B),
                    activeSection: e(w),
                    leavingSection: e(w).index(m) + 1,
                    localIsResizing: re
                };
                if (!(p.activeSection.is(o) && !re || j.scrollBar && Q.scrollTop() === p.dtop && !o.hasClass(C))) {
                    if (p.activeSlide.length && (h = p.activeSlide.data("anchor"), v = p.activeSlide.index()), e.isFunction(j.onLeave) && !p.localIsResizing) {
                        var g = p.yMovement;
                        if (void 0 !== i && (g = i ? "up" : "down"), !1 === j.onLeave.call(p.activeSection, p.leavingSection, p.sectionIndex + 1, g)) return
                    }
                    j.autoScrolling && j.continuousVertical && void 0 !== p.isMovementUp && (!p.isMovementUp && "up" == p.yMovement || p.isMovementUp && "down" == p.yMovement) && (p = function(o) {
                            o.isMovementUp ? e(w).before(o.activeSection.nextAll(m)) : e(w).after(o.activeSection.prevAll(m).get().reverse());
                            return Qo(e(w).position().top), lo(), o.wrapAroundElements = o.activeSection, o.dtop = o.element.position().top, o.yMovement = Do(o.element), o.leavingSection = o.activeSection.index(m) + 1, o.sectionIndex = o.element.index(m), o
                        }(p)), p.localIsResizing || vo(p.activeSection), j.scrollOverflow && j.scrollOverflowHandler.beforeLeave(), o.addClass(u).siblings().removeClass(u), fo(o), j.scrollOverflow && j.scrollOverflowHandler.onLeave(), de = !1, No(v, h, p.anchorLink, p.sectionIndex),
                        function(o) {
                            if (j.css3 && j.autoScrolling && !j.scrollBar) {
                                var n = "translate3d(0px, -" + t.round(o.dtop) + "px, 0px)";
                                Fo(n, !0), j.scrollingSpeed ? (clearTimeout(pe), pe = setTimeout(function() {
                                    ro(o)
                                }, j.scrollingSpeed)) : ro(o)
                            } else {
                                var i = function(e) {
                                    var o = {};
                                    j.autoScrolling && !j.scrollBar ? (o.options = {
                                        top: -e.dtop
                                    }, o.element = l) : (o.options = {
                                        scrollTop: e.dtop
                                    }, o.element = "html, body");
                                    return o
                                }(o);
                                e(i.element).animate(i.options, j.scrollingSpeed, j.easing).promise().done(function() {
                                    j.scrollBar ? setTimeout(function() {
                                        ro(o)
                                    }, 30) : ro(o)
                                })
                            }
                        }(p), $ = p.anchorLink, Ho(p.anchorLink, p.sectionIndex)
                }
            }
        }

        function ro(o) {
            var n;
            (n = o).wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(S).before(n.wrapAroundElements) : e(b).after(n.wrapAroundElements), Qo(e(w).position().top), lo()), e.isFunction(j.afterLoad) && !o.localIsResizing && j.afterLoad.call(o.element, o.anchorLink, o.sectionIndex + 1), j.scrollOverflow && j.scrollOverflowHandler.afterLoad(), o.localIsResizing || uo(o.element), o.element.addClass(v).siblings().removeClass(v), de = !0, e.isFunction(o.callback) && o.callback.call(this)
        }

        function co(e, o) {
            e.attr(o, e.data(o)).removeAttr("data-" + o)
        }

        function fo(o) {
            var n;
            j.lazyLoading && po(o).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function() {
                if (n = e(this), e.each(["src", "srcset"], function(e, o) {
                        var t = n.attr("data-" + o);
                        void 0 !== t && t && co(n, o)
                    }), n.is("source")) {
                    var o = n.closest("video").length ? "video" : "audio";
                    n.closest(o).get(0).load()
                }
            })
        }

        function uo(o) {
            var n = po(o);
            n.find("video, audio").each(function() {
                var o = e(this).get(0);
                o.hasAttribute("data-autoplay") && "function" == typeof o.play && o.play()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var o = e(this).get(0);
                o.hasAttribute("data-autoplay") && ho(o), o.onload = function() {
                    o.hasAttribute("data-autoplay") && ho(o)
                }
            })
        }

        function ho(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function vo(o) {
            var n = po(o);
            n.find("video, audio").each(function() {
                var o = e(this).get(0);
                o.hasAttribute("data-keepplaying") || "function" != typeof o.pause || o.pause()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var o = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !o.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function po(o) {
            var n = o.find(B);
            return n.length && (o = e(n)), o
        }

        function go() {
            var e = wo(),
                o = e.section,
                n = e.slide;
            o && (j.animateAnchor ? jo(o, n) : Ne(o, n))
        }

        function mo() {
            if (!Te && !j.lockAnchors) {
                var e = wo(),
                    o = e.section,
                    n = e.slide,
                    t = void 0 === $,
                    i = void 0 === $ && void 0 === n && !te;
                o && o.length && (o && o !== $ && !t || i || !te && ee != n) && jo(o, n)
            }
        }

        function wo() {
            var e, n, t = o.location.hash;
            if (t.length) {
                var i = t.replace("#", "").split("/"),
                    a = t.indexOf("#/") > -1;
                e = a ? "/" + i[1] : decodeURIComponent(i[0]);
                var l = a ? i[2] : i[1];
                l && l.length && (n = decodeURIComponent(l))
            }
            return {
                section: e,
                slide: n
            }
        }

        function So(o) {
            clearTimeout(Se);
            var n = e(":focus"),
                t = o.which;
            if (9 === t) ! function(o) {
                var n = o.shiftKey,
                    t = e(":focus"),
                    i = e(w),
                    a = i.find(B),
                    l = (a.length ? a : i).find(ye).not('[tabindex="-1"]');

                function s(e) {
                    return e.preventDefault(), l.first().focus()
                }
                t.length ? t.closest(w, B).length || (t = s(o)) : s(o);
                (!n && t.is(l.last()) || n && t.is(l.first())) && o.preventDefault()
            }(o);
            else if (!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && j.keyboardScrolling && j.autoScrolling) {
                e.inArray(t, [40, 38, 32, 33, 34]) > -1 && o.preventDefault(), oe = o.ctrlKey, Se = setTimeout(function() {
                    ! function(o) {
                        var n = o.shiftKey;
                        if (!de && [37, 39].indexOf(o.which) < 0) return;
                        switch (o.which) {
                            case 38:
                            case 33:
                                ue.k.up && je();
                                break;
                            case 32:
                                if (n && ue.k.up) {
                                    je();
                                    break
                                }
                            case 40:
                            case 34:
                                ue.k.down && Ye();
                                break;
                            case 36:
                                ue.k.up && Xe(1);
                                break;
                            case 35:
                                ue.k.down && Xe(e(m).length);
                                break;
                            case 37:
                                ue.k.left && We();
                                break;
                            case 39:
                                ue.k.right && Ue();
                                break;
                            default:
                                ;
                        }
                    }(o)
                }, 150)
            }
        }

        function bo() {
            e(this).prev().trigger("click")
        }

        function xo(e) {
            ce && (oe = e.ctrlKey)
        }

        function yo(e) {
            2 == e.which && (Be = e.pageY, le.on("mousemove", Oo))
        }

        function Co(e) {
            2 == e.which && le.off("mousemove")
        }

        function To() {
            var o = e(this).closest(m);
            e(this).hasClass(N) ? ue.m.left && We(o) : ue.m.right && Ue(o)
        }

        function ko() {
            ce = !1, oe = !1
        }

        function Lo(o) {
            o.preventDefault();
            var n = e(this).parent().index();
            so(e(m).eq(n))
        }

        function Ao(o) {
            o.preventDefault();
            var n = e(this).closest(m).find(z);
            Io(n, n.find(M).eq(e(this).closest("li").index()))
        }

        function Oo(e) {
            de && (e.pageY < Be && ue.m.up ? je() : e.pageY > Be && ue.m.down && Ye()), Be = e.pageY
        }

        function Io(o, n, i) {
            var a = o.closest(m),
                l = {
                    slides: o,
                    destiny: n,
                    direction: i,
                    destinyPos: n.position(),
                    slideIndex: n.index(),
                    section: a,
                    sectionIndex: a.index(m),
                    anchorLink: a.data("anchor"),
                    slidesNav: a.find(F),
                    slideAnchor: Uo(n),
                    prevSlide: a.find(B),
                    prevSlideIndex: a.find(B).index(),
                    localIsResizing: re
                };
            l.xMovement = function(e, o) {
                if (e == o) return "none";
                if (e > o) return "left";
                return "right"
            }(l.prevSlideIndex, l.slideIndex), l.localIsResizing || (de = !1), j.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && e.isFunction(j.onSlideLeave) && !1 === j.onSlideLeave.call(l.prevSlide, l.anchorLink, l.sectionIndex + 1, l.prevSlideIndex, l.direction, l.slideIndex) ? te = !1 : (n.addClass(u).siblings().removeClass(u), l.localIsResizing || (vo(l.prevSlide), fo(n)), !j.loopHorizontal && j.controlArrows && (a.find(U).toggle(0 !== l.slideIndex), a.find(_).toggle(!n.is(":last-child"))), a.hasClass(u) && !l.localIsResizing && No(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex), function(e, o, n) {
                var i = o.destinyPos;
                if (j.css3) {
                    var a = "translate3d(-" + t.round(i.left) + "px, 0px, 0px)";
                    Ro(e.find(D)).css(Go(a)), ge = setTimeout(function() {
                        n && Eo(o)
                    }, j.scrollingSpeed, j.easing)
                } else e.animate({
                    scrollLeft: t.round(i.left)
                }, j.scrollingSpeed, j.easing, function() {
                    n && Eo(o)
                })
            }(o, l, !0))
        }

        function Eo(o) {
            var n, t;
            n = o.slidesNav, t = o.slideIndex, n.find(h).removeClass(u), n.find("li").eq(t).find("a").addClass(u), o.localIsResizing || (e.isFunction(j.afterSlideLoad) && j.afterSlideLoad.call(o.destiny, o.anchorLink, o.sectionIndex + 1, o.slideAnchor, o.slideIndex), de = !0, uo(o.destiny)), te = !1
        }

        function Mo() {
            if (Bo(), ie) {
                var o = e(n.activeElement);
                if (!o.is("textarea") && !o.is("input") && !o.is("select")) {
                    var i = Q.height();
                    t.abs(i - Re) > 20 * t.max(Re, i) / 100 && (Ke(!0), Re = i)
                }
            } else clearTimeout(ve), ve = setTimeout(function() {
                Ke(!0)
            }, 350)
        }

        function Bo() {
            var e = j.responsive || j.responsiveWidth,
                o = j.responsiveHeight,
                n = e && Q.outerWidth() < e,
                t = o && Q.height() < o;
            e && o ? _e(n || t) : e ? _e(n) : o && _e(t)
        }

        function Ro(e) {
            var o = "all " + j.scrollingSpeed + "ms " + j.easingcss3;
            return e.removeClass(r), e.css({
                "-webkit-transition": o,
                transition: o
            })
        }

        function zo(e) {
            return e.addClass(r)
        }

        function Ho(o, n) {
            var t, i, a;
            t = o, j.menu && (e(j.menu).find(h).removeClass(u), e(j.menu).find('[data-menuanchor="' + t + '"]').addClass(u)), i = o, a = n, j.navigation && (e(L).find(h).removeClass(u), i ? e(L).find('a[href="#' + i + '"]').addClass(u) : e(L).find("li").eq(a).find("a").addClass(u))
        }

        function Do(o) {
            var n = e(w).index(m),
                t = o.index(m);
            return n == t ? "none" : n > t ? "up" : "down"
        }

        function Po(o) {
            if (!o.hasClass(P)) {
                var n = e('<div class="' + x + '" />').height(qo(o));
                o.addClass(P).wrapInner(n)
            }
        }

        function qo(e) {
            var o = se;
            if (j.paddingTop || j.paddingBottom) {
                var n = e;
                n.hasClass(g) || (n = e.closest(m));
                var t = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
                o = se - t
            }
            return o
        }

        function Fo(e, o) {
            o ? Ro(le) : zo(le), le.css(Go(e)), setTimeout(function() {
                le.removeClass(r)
            }, 10)
        }

        function Vo(o) {
            var n = le.find(m + '[data-anchor="' + o + '"]');
            if (!n.length) {
                var t = void 0 !== o ? o - 1 : 0;
                n = e(m).eq(t)
            }
            return n
        }

        function jo(e, o) {
            var n = Vo(e);
            if (n.length) {
                var t, i, a, l = (t = o, (a = (i = n).find(M + '[data-anchor="' + t + '"]')).length || (t = void 0 !== t ? t : 0, a = i.find(M).eq(t)), a);
                e === $ || n.hasClass(u) ? Yo(l) : so(n, function() {
                    Yo(l)
                })
            }
        }

        function Yo(e) {
            e.length && Io(e.closest(z), e)
        }

        function No(e, o, n, t) {
            var i = "";
            j.anchors.length && !j.lockAnchors && (e ? (void 0 !== n && (i = n), void 0 === o && (o = e), ee = o, Xo(i + "/" + o)) : void 0 !== e ? (ee = o, Xo(n)) : Xo(n)), Wo()
        }

        function Xo(e) {
            if (j.recordHistory) location.hash = e;
            else if (ie || ae) o.history.replaceState(i, i, "#" + e);
            else {
                var n = o.location.href.split("#")[0];
                o.location.replace(n + "#" + e)
            }
        }

        function Uo(e) {
            var o = e.data("anchor"),
                n = e.index();
            return void 0 === o && (o = n), o
        }

        function Wo() {
            var o = e(w),
                n = o.find(B),
                t = Uo(o),
                i = Uo(n),
                a = String(t);
            n.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");
            var l = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
            J[0].className = J[0].className.replace(l, ""), J.addClass(f + "-" + a)
        }

        function Ko(e) {
            var o = [];
            return o.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, o.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, ae && oo(e) && (j.scrollBar || !j.autoScrolling) && (o.y = e.touches[0].pageY, o.x = e.touches[0].pageX), o
        }

        function _o(e, o) {
            De(0, "internal"), void 0 !== o && (re = !0), Io(e.closest(z), e), void 0 !== o && (re = !1), De(Ce.scrollingSpeed, "internal")
        }

        function Qo(e) {
            var o = t.round(e);
            j.css3 && j.autoScrolling && !j.scrollBar ? Fo("translate3d(0px, -" + o + "px, 0px)", !1) : j.autoScrolling && !j.scrollBar ? le.css("top", -o) : W.scrollTop(o)
        }

        function Go(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function Jo(o, n, t) {
            "all" !== n ? ue[t][n] = o : e.each(Object.keys(ue[t]), function(e, n) {
                ue[t][n] = o
            })
        }

        function Zo(e, o, n) {
            j[e] = o, "internal" !== n && (Ce[e] = o)
        }

        function $o() {
            e("html").hasClass(d) ? en("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (j.continuousVertical && (j.loopTop || j.loopBottom) && (j.continuousVertical = !1, en("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), j.scrollBar && j.scrollOverflow && en("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !j.continuousVertical || !j.scrollBar && j.autoScrolling || (j.continuousVertical = !1, en("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), j.scrollOverflow && !j.scrollOverflowHandler && (j.scrollOverflow = !1, en("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), e.each(["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"], function(e, o) {
                j[o] && en("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + o)
            }), e.each(j.anchors, function(o, n) {
                var t = G.find("[name]").filter(function() {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == n.toLowerCase()
                    }),
                    i = G.find("[id]").filter(function() {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == n.toLowerCase()
                    });
                (i.length || t.length) && (en("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && en("error", '"' + n + '" is is being used by another element `id` property'), t.length && en("error", '"' + n + '" is is being used by another element `name` property'))
            }))
        }

        function en(e, o) {
            console && console[e] && console[e]("fullPage: " + o)
        }
    }
});
//# sourceMappingURL=jquery.fullpage.min.js.map







/*************************************
	Ajax Mail
**************************************/
$(function() {
    var e = $("#contact-form"),
        t = $(".form-message");
    $(e).submit(function(s) {
        s.preventDefault();
        var a = $(e).serialize();
        $.ajax({
            type: "POST",
            url: $(e).attr("action"),
            data: a
        }).done(function(e) {
            $(t).removeClass("error"), $(t).addClass("success"), $(t).text(e), $('#contact-form input:not([type="submit"]), #contact-form textarea').val("")
        }).fail(function(e) {
            $(t).removeClass("success"), $(t).addClass("error"), "" !== e.responseText ? $(t).text(e.responseText) : $(t).text("Oops! An error occured and your message could not be sent.")
        })
    })
});