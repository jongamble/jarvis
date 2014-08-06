/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */

// Universal Module Definition
;(function (window, name, fn) {
	// Node module pattern
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = fn;
    } else {
		// browser
        window[name] = fn;

        // AMD definition
        if (typeof define === "function" && define.amd) {
            define(name, [], function (module) {
                return fn;
            });
        }
    }
}(this, 'jRespond', function(win,doc,undefined) {

	'use strict';

	return function(breakpoints) {

		// array for registered functions
		var mediaListeners = [];

		// array that corresponds to mediaListeners and holds the current on/off state
		var mediaInit = [];

		// array of media query breakpoints; adjust as needed
		var mediaBreakpoints = breakpoints;

		// store the current breakpoint
		var curr = '';

		// the previous breakpoint
		var prev = '';

		// window resize event timer stuff
		var resizeTimer;
		var resizeW = 0;
		var resizeTmrFast = 100;
		var resizeTmrSlow = 500;
		var resizeTmrSpd = resizeTmrSlow;

		// cross browser window width
		var winWidth = function() {

			var w = 0;

			// IE
			if (typeof( window.innerWidth ) != 'number') {

				if (!(document.documentElement.clientWidth === 0)) {

					// strict mode
					w = document.documentElement.clientWidth;
				} else {

					// quirks mode
					w = document.body.clientWidth;
				}
			} else {

				// w3c
				w = window.innerWidth;
			}

			return w;
		};

		// determine input type
		var addFunction = function(elm) {
			if (elm.length === undefined) {
				addToStack(elm);
			} else {
				for (var i = 0; i < elm.length; i++) {
					addToStack(elm[i]);
				}
			}
		};

		// send media to the mediaListeners array
		var addToStack = function(elm) {
			var brkpt = elm['breakpoint'];
			var entr = elm['enter'] || undefined;

			// add function to stack
			mediaListeners.push(elm);

			// add corresponding entry to mediaInit
			mediaInit.push(false);

			if (testForCurr(brkpt)) {
				if (entr !== undefined) {
					entr.call(null, {entering : curr, exiting : prev});
				}
				mediaInit[(mediaListeners.length - 1)] = true;
			}
		};

		// loops through all registered functions and determines what should be fired
		var cycleThrough = function() {

			var enterArray = [];
			var exitArray = [];

			for (var i = 0; i < mediaListeners.length; i++) {
				var brkpt = mediaListeners[i]['breakpoint'];
				var entr = mediaListeners[i]['enter'] || undefined;
				var exit = mediaListeners[i]['exit'] || undefined;

				if (brkpt === '*') {
					if (entr !== undefined) {
						enterArray.push(entr);
					}
					if (exit !== undefined) {
						exitArray.push(exit);
					}
				} else if (testForCurr(brkpt)) {
					if (entr !== undefined && !mediaInit[i]) {
						enterArray.push(entr);
					}
					mediaInit[i] = true;
				} else {
					if (exit !== undefined && mediaInit[i]) {
						exitArray.push(exit);
					}
					mediaInit[i] = false;
				}
			}

			var eventObject = {
				entering : curr,
				exiting : prev
			};

			// loop through exit functions to call
			for (var j = 0; j < exitArray.length; j++) {
				exitArray[j].call(null, eventObject);
			}

			// then loop through enter functions to call
			for (var k = 0; k < enterArray.length; k++) {
				enterArray[k].call(null, eventObject);
			}
		};

		// checks for the correct breakpoint against the mediaBreakpoints list
		var returnBreakpoint = function(width) {

			var foundBrkpt = false;

			// look for existing breakpoint based on width
			for (var i = 0; i < mediaBreakpoints.length; i++) {

				// if registered breakpoint found, break out of loop
				if (width >= mediaBreakpoints[i]['enter'] && width <= mediaBreakpoints[i]['exit']) {
					foundBrkpt = true;

					break;
				}
			}

			// if breakpoint is found and it's not the current one
			if (foundBrkpt && curr !== mediaBreakpoints[i]['label']) {
				prev = curr;
				curr = mediaBreakpoints[i]['label'];

				// run the loop
				cycleThrough();

			// or if no breakpoint applies
			} else if (!foundBrkpt && curr !== '') {
				curr = '';

				// run the loop
				cycleThrough();
			}

		};

		// takes the breakpoint/s arguement from an object and tests it against the current state
		var testForCurr = function(elm) {

			// if there's an array of breakpoints
			if (typeof elm === 'object') {
				if (elm.join().indexOf(curr) >= 0) {
					return true;
				}

			// if the string is '*' then run at every breakpoint
			} else if (elm === '*') {
				return true;

			// or if it's a single breakpoint
			} else if (typeof elm === 'string') {
				if (curr === elm) {
					return true;
				}
			}
		};

		// self-calling function that checks the browser width and delegates if it detects a change
		var checkResize = function() {

			// get current width
			var w = winWidth();

			// if there is a change speed up the timer and fire the returnBreakpoint function
			if (w !== resizeW) {
				resizeTmrSpd = resizeTmrFast;

				returnBreakpoint(w);

			// otherwise keep on keepin' on
			} else {
				resizeTmrSpd = resizeTmrSlow;
			}

			resizeW = w;

			// calls itself on a setTimeout
			setTimeout(checkResize, resizeTmrSpd);
		};
		checkResize();

		// return
		return {
			addFunc: function(elm) { addFunction(elm); },
			getBreakpoint: function() { return curr; }
		};

	};

}(this,this.document)));;;(function($){

	var plugin = {};

	var defaults = {

		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,

		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,

		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,

		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,

		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {}
	}

	$.fn.bxSlider = function(options){

		if(this.length == 0) return this;

		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}

		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();



		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function() {
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager) {
				slider.viewport.parent().css({
				margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: 50, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			// if ticker mode, do not allow a pager
			}else{
				slider.settings.pager = false;
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			loadElements(preloadSelector, start);
		}

		var loadElements = function(selector, callback){
			var total = selector.find('img, iframe').length;
			if (total == 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('img, iframe').each(function(){
				$(this).one('load', function() {
				  if(++count == total) callback();
				}).each(function() {
				  if(this.complete) $(this).load();
				});
			});
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
			// if auto is true, start the show
			if (slider.settings.auto && slider.settings.autoStart) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}

		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}
			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}

		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}

		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width();
					slidesShowing = Math.floor(slider.viewport.width() / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}

		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = slider.children.length / getMoveBy();
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}

		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}

		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.width())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}

		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int)
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int)
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}

		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}

		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.delegate('a', 'click', clickPagerBind);
		}

		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}

		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.delegate('.bx-start', 'click', clickStartBind);
			slider.controls.autoEl.delegate('.bx-stop', 'click', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}

		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
			});
		}

		/**
		 * Click next binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();
			e.preventDefault();
		}

		/**
		 * Click prev binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();
			e.preventDefault();
		}

		/**
		 * Click start binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}

		/**
		 * Click stop binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
			// if clicked pager link is not active, continue with the goToSlide call
			if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
			e.preventDefault();
		}

		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int)
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType == 'short'){
				if(slider.settings.maxSlides > 1) {
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}

		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0);; }
				else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0);; }
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}

		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}

		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() == 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}

		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}

		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}

		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}

		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}

		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}

		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}

		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;
				// update all dynamic elements
				el.redrawSlider();
			}
		}

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', 51).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', 50);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}

				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ("undefined" !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		}

		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}

		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}

		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}

		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}

		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}

		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) slider.active.index = getPagerQty() - 1;
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) slider.active.last = true;
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function() {
				$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			});
			$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			$(this).unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}

		init();

		// returns the current jQuery object
		return this;
	}

})(jQuery);;/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

(function ($) {
	"use strict";

	var methods = (function () {
		// private properties and methods go here
		var c = {
				bcClass: 'sf-breadcrumb',
				menuClass: 'sf-js-enabled',
				anchorClass: 'sf-with-ul',
				menuArrowClass: 'sf-arrows'
			},
			ios = (function () {
				var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
				if (ios) {
					// iOS clicks only bubble as far as body children
					$(window).load(function () {
						$('body').children().on('click', $.noop);
					});
				}
				return ios;
			})(),
			wp7 = (function () {
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			toggleMenuClasses = function ($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function ($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.hoverClass + ' ' + c.bcClass)
						.filter(function () {
							return ($(this).children(o.popUpSelector).hide().show().length);
						}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function ($menu) {
				var touchAction = $menu.css('ms-touch-action');
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css('ms-touch-action', touchAction);
			},
			applyHandlers = function ($menu, o) {
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI) {
					$menu.hoverIntent(over, out, targets);
				}
				else {
					$menu
						.on('mouseenter.superfish', targets, over)
						.on('mouseleave.superfish', targets, out);
				}
				var touchevent = 'MSPointerDown.superfish';
				if (!ios) {
					touchevent += ' touchend.superfish';
				}
				if (wp7) {
					touchevent += ' mousedown.superfish';
				}
				$menu
					.on('focusin.superfish', 'li', over)
					.on('focusout.superfish', 'li', out)
					.on(touchevent, 'a', o, touchHandler);
			},
			touchHandler = function (e) {
				var $this = $(this),
					$ul = $this.siblings(e.data.popUpSelector);

				if ($ul.length > 0 && $ul.is(':hidden')) {
					$this.one('click.superfish', false);
					if (e.type === 'MSPointerDown') {
						$this.trigger('focus');
					} else {
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			over = function () {
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.sfTimer);
				$this.siblings().superfish('hide').end().superfish('show');
			},
			out = function () {
				var $this = $(this),
					o = getOptions($this);
				if (ios) {
					$.proxy(close, $this, o)();
				}
				else {
					clearTimeout(o.sfTimer);
					o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			close = function (o) {
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superfish('hide');

				if (!this.parents('.' + o.hoverClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function ($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el) {
				return getMenu($el).data('sf-options');
			};

		return {
			// public methods
			hide: function (instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
					if (!o) {
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($ul);
					$ul.stop(true, true).animate(o.animationOut, speed, function () {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function () {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);

				o.onBeforeShow.call($ul);
				$ul.stop(true, true).animate(o.animation, o.speed, function () {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function () {
				return this.each(function () {
					var $this = $(this),
						o = $this.data('sf-options'),
						$hasPopUp;
					if (!o) {
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.sfTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superfish').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			init: function (op) {
				return this.each(function () {
					var $this = $(this);
					if ($this.data('sf-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.superfish.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					applyHandlers($this, o);

					$hasPopUp.not('.' + c.bcClass).superfish('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superfish = function (method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' +  method + ' does not exist on jQuery.fn.superfish');
		}
	};

	$.fn.superfish.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		hoverClass: 'sfHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 800,
		animation: {opacity: 'show'},
		animationOut: {opacity: 'hide'},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};

	// soon to be deprecated
	$.fn.extend({
		hideSuperfishUl: methods.hide,
		showSuperfishUl: methods.show
	});

})(jQuery);
;;(function(root, name, factory) {// github.com/umdjs/umd

    var dep = root['jQuery'] || root['Zepto'] || root['ender'] || root['elo'];
    if ( typeof module != 'undefined' && module['exports'] ) {
        module['exports'] = factory(dep); // common / ender 
    } else { root[name] = factory(dep); } // browser

    // see @link github.com/ryanve/response.js/pull/9
    // AMD @example `define(['jquery'], factory)`
    
}(this, 'Response', function($) {

    if (typeof $ != 'function') {
        try {// Exit gracefully if dependency is missing:
            console.log('Response was unable to run due to missing dependency.');
        } catch (e) {}
    }

    // Combine local vars/funcs into one statement:    

    var Response
      , root = this
      , name = 'Response'
      , old = root[name]
      , initContentKey = 'init' + name  // key for storing initial content
      , win = window
      , doc = document
      , docElem = doc.documentElement
      , ready = $.domReady || $
      , $win = $(win) // cache selector
      , screen = win.screen
      , AP = Array.prototype
      , OP = Object.prototype
      , slice = AP.slice
      , concat = AP.concat
      , toString = OP.toString
      , owns = OP.hasOwnProperty
      , isArray = Array.isArray || function(item) {
            return '[object Array]' === toString.call(item);
        }

      , defaultBreakpoints = {
            width: [0, 320, 481, 641, 961, 1025, 1281]  // width  | device-width  (ideal for 960 grids)
          , height: [0, 481]                            // height | device-height (maybe add 801 too)
          , ratio: [1, 1.5, 2]                          // device-pixel-ratio     (!omit trailing zeros!)
        }

        // these are defined later
      , Elemset, band, wave, device = {}
      , propTests = {}
      , isCustom = {}
      , sets = { all: [] }
      , suid = 1

        // responsejs.com/labs/dimensions/#device
        // device dims stay the same regardless of viewport size or rotation
      , screenW = screen.width   
      , screenH = screen.height  
      , screenMax = screenW > screenH ? screenW : screenH
      , screenMin = screenW + screenH - screenMax
      , deviceW = function() { return screenW; }
      , deviceH = function() { return screenH; }
      
        // cache expressions
      , regexFunkyPunc = /[^a-z0-9_\-\.]/gi
      , regexTrimPunc = /^[\W\s]+|[\W\s]+$|/g
      , regexCamels = /([a-z])([A-Z])/g
      , regexDashB4 = /-(.)/g
      , regexDataPrefix = /^data-(.+)$/
        
        // Local version of Object.create with polyfill that supports only the first arg.
        // It creates an empty object whose prototype is set to the specified proto param.
        // developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/create
        // FYI there is a full polyfill @link github.com/kriskowal/es5-shim
        // This gets exposed as Response.object since 0.4.0

      , objectCreate = Object.create || function(proto) {
            /** @constructor */
            function Type() {}      // Function to output empty object.
            Type.prototype = proto; // Set prototype property to the proto.
            return new Type;        // Instantiate the new object.
        }

      , namespaceIt = function(eventName, customNamespace) {// namepace defaults to 'Response'
            customNamespace = customNamespace || name;
            return eventName.replace(regexTrimPunc, '') + '.' + customNamespace.replace(regexTrimPunc, '');
        }

      , event = {// Custom Events
            allLoaded: namespaceIt('allLoaded') // fires on lazy elemsets when all elems in a set have been loaded once
            //, update: namespaceIt('update')       // fires on each elem in a set each time that elem is updated
          , crossover: namespaceIt('crossover') // fires on window each time dynamic breakpoint bands is crossed
        }
        
        // Response.media (normalized matchMedia)
        // @example Response.media("(orientation:landscape)").matches
        // If both versions are undefined, .matches will equal undefined 
        // Also see: band / wave / device.band / device.wave / dpr
      , matchMedia = win.matchMedia || win.msMatchMedia
      , media = matchMedia || function() { return {}; }
    
        // @link responsejs.com/labs/dimensions/#viewport    
        // @link github.com/ryanve/response.js/issues/17
    
      , viewportW = (function(win, docElem, mM) {
            var client = docElem['clientWidth']
              , inner = win['innerWidth'];
            return ( mM && client < inner && true === mM('(min-width:' + inner + 'px)')['matches']
                ? function() { return win['innerWidth']; }
                : function() { return docElem['clientWidth']; }
            );
        }(win, docElem, matchMedia))
        
      , viewportH = (function(win, docElem, mM) {
            var client = docElem['clientHeight']
              , inner = win['innerHeight'];
            return ( mM && client < inner && true === mM('(min-height:' + inner + 'px)')['matches']
                ? function() { return win['innerHeight']; }
                : function() { return docElem['clientHeight']; }
            );
        }(win, docElem, matchMedia))

    ;
    
    function doError(msg) {
        // Error handling. (Throws exception.)
        // Use Ctrl+F to find specific @errors
        throw new TypeError(msg ? name + '.' + msg : name);
    }
    
    function isNumber(item) {// inlined @minification
        return typeof item == 'number' && item === item; // second part stuffs NaN
    }
    
    function map(ob, fn, scope) {
        var i, l = ob.length, ret = [];
        for (i = 0; i < l; i++) {
            ret[i] = fn.call(scope, ob[i], i, ob);
        }
        return ret;
    }

    function ssvToArr(ukn) {
        // Convert space separated values to array. Always returns a compact array:
        return typeof ukn == 'string' ? sift(ukn.split(' ')) : isArray(ukn) ? sift(ukn) : [];
    }

    /**
     * Response.each()
     * @since    0.4.0
     * omits `in` check and supports scope since 0.6.2
     */
    function each(ob, callback, scope) {
        if ( null == ob ) { return ob; }
        var i = 0, len = ob.length;
        while ( i < len ) { 
            callback.call(scope || ob[i], ob[i], i++, ob); 
        }
        return ob; // chain
    }

    // revamped affix method reintroduced in version 0.4.0:
    // updated again in 0.6.2 to skip null|undef values
    function affix(arr, prefix, suffix) {
        // Return new array with prefix/suffix added to each value.
        // null|undefined values are not included in the new array
        var r = [], l = arr.length, i = 0, v;
        prefix = prefix || '';
        suffix = suffix || '';
        while ( i < l ) {
            v = arr[i++]; 
            null == v || r.push(prefix + v + suffix);
        }
        return r;
    }

    /**
     * @param  {Array|Object}          ob     is an array or collection to iterate over.
     * @param  {(Function|string|*)=}  fn     is a callback or typestring - callbacks receive (v, i, ob)
     * @param  {(Object|boolean|*)=}   scope  thisArg or invert
     */
    
    /**
     * Response.sift       Filter out array values that don't pass a callback,
     *                     or (if no callback provided) filter out falsey values.
     *                     Similar (but more capable that) jQuery.grep or the native [].filter
     *
     * @since   0.4.0      Updated in 0.6.2 to support scope and typestrings
     * @example Response.sift([5, 0, 'seven'], isFinite)    // [5, 0]
     * @example Response.sift([5, 0, '', undefined, null])  // [5]
     *
     */
    function sift(ob, fn, scope) {

        var l, u = 0, i = 0, v, ret = [], invert, isF = typeof fn == 'function';
        if ( !ob ) { return ret; }
        scope = (invert = true === scope) ? null : scope;

        for ( l = ob.length; i < l; i++ ) {
            v = ob[i]; // save reference to value in case `fn` mutates `ob[i]`
            // Use `=== !` to ensure that the comparison is bool-to-bool
            invert === !(isF ? fn.call(scope, v, i, ob) : fn ? typeof v === fn : v) && (ret[u++] = v);
        }
        return ret;
    }

    /**
     * Response.merge
     * @since 0.3.0
     * Generic method for merging objects and/or arrays.
     * Undefined values in `adds` are skipped.
     * When `adds` is array-like, this behaves similar to jQuery.merge(base, adds)
     * Otherwise it behaves similar to jQuery.extend(base, adds)
     * @param   {Object|Array|Function|*}  base
     * @param   {Object|Array|Function|*}  adds
     */
    function merge(base, adds) {
        var k, l;
        if ( !base || !adds ) { return base; }
        if ( typeof adds != 'function' && isNumber(l = adds.length) ) {
            for ( k = 0; k < l; k++ ) {
                void 0 === adds[k] || (base[k] = adds[k]);
            }
            base.length > k || (base.length = k); // non-arrays
        } else {
            for ( k in adds ) {
                owns.call(adds, k) && void 0 !== adds[k] && (base[k] = adds[k]);
            }
        }
        return base;
    }

    /**
     * Response.route()             Handler method for accepting args as arrays or singles, for 
     *                              callbacks. Returns self for chaining.
     *
     * @since   0.3.0               (scope support added in 0.6.2)
     *
     * @param   {*}         item    If `item` is an array or array-like object then `callback` gets called
     *                              on each member. Otherwise `callback` is called on the `item` itself.
     * @param   {Function}  fn      The function to call on item(s).
     * @param   {*=}        scope   thisArg (defaults to current item)
     */
    function route(item, fn, scope) {
        // If item is array-like then call the callback on each item. Otherwise call directly on item.
        if ( null == item ) { return item; } // Skip null|undefined
        if ( typeof item == 'object' && !item.nodeType && isNumber(item.length) ) { 
            each(item, fn, scope); 
        } else {
            fn.call(scope || item, item); 
        }
        return item; // chainable
    }

    /**
     * ranger()                Make a range comparison tester.
     * @param  {Function}  fn  gets a value to compare against
     * @return {Function}
     */        
    function ranger(fn) {
        /**
         * @param {string|number}    min
         * @param {(string|number)=} max
         */
        return function(min, max) {
            var n = fn();
            min = n >= (min || 0);
            return max ? min && n <= max : min;        
        };
    }

    /** 
     * Range comparison booleans
     * @link responsejs.com/#booleans
     */
    band = ranger(viewportW);      // Response.band
    wave = ranger(viewportH);      // Response.wave
    device.band = ranger(deviceW); // Response.device.band
    device.wave = ranger(deviceH); // Response.device.wave
    
    /**
     * Response.dpr(decimal)         Tests if a minimum device pixel ratio is active. 
     *                               Or (version added in 0.3.0) returns the device-pixel-ratio
     * @param    number    decimal   is the integer or float to test.
     * @return   boolean|number
     * @example  Response.dpr();     // get the device-pixel-ratio (or 0 if undetectable)
     * @example  Response.dpr(1.5);  // true when device-pixel-ratio is 1.5+
     * @example  Response.dpr(2);    // true when device-pixel-ratio is 2+
     */
    function dpr(decimal) {

        var dPR = win.devicePixelRatio;

        if ( null == decimal ) {//Return exact value or kinda iterate for approx:
            return dPR || (dpr(2) ? 2 : dpr(1.5) ? 1.5 : dpr(1) ? 1 : 0);
        }

        if ( !isFinite(decimal) ) {// Shh. Actually allows numeric strings too. ;)
            return false;
        }

        // Use window.devicePixelRatio if supported - supported by Webkit 
        // (Safari/Chrome/Android) and Presto 2.8+ (Opera) browsers.         

        if ( dPR && dPR > 0 ) {
            return dPR >= decimal; 
        }

        // Fallback to .matchMedia/.msMatchMedia. Supported by Gecko (FF6+) and more:
        // @link developer.mozilla.org/en/DOM/window.matchMedia
        // -webkit-min- and -o-min- omitted (Webkit/Opera supported above)
        // The generic min-device-pixel-ratio is expected to be added to the W3 spec.
        // Return false if neither method is available.

        decimal = 'only all and (min--moz-device-pixel-ratio:' + decimal + ')';
        if ( media(decimal).matches ) { return true; }
        return !!media(decimal.replace('-moz-', '')).matches;
    }


    /**
     * Response.camelize       Converts data-pulp-fiction to pulpFiction
     *                         via camelize @link github.com/ded/bonzo
     *                         Used in dataset methods.
     *
     * @example   Response.camelize('data-casa-blanca')  // casaBlanca
     */
    function camelize(s) {
        // Remove data- prefix and convert remaining dashed string to camelCase:
        return s.replace(regexDataPrefix, '$1').replace(regexDashB4, function(m, m1) {
            return m1.toUpperCase();
        });
    }

    /**
     * Response.datatize       Converts pulpFiction (or data-pulpFiction) to data-pulp-fiction
     *                         Adapted from decamelize @link github.com/ded/bonzo
     *                         Used in dataset methods.
     *
     * @example   Response.datatize('casaBlanca')  // data-casa-blanca
     */
    function datatize(s) {
        // Make sure there's no data- already in s for it to work right in IE8.
        return 'data-' + (s ? s.replace(regexDataPrefix, '$1').replace(regexCamels, '$1-$2').toLowerCase() : s);
    }

    /**
     * Response.render                Converts stringified primitives back to JavaScript.
     *                                Adapted from dataValue() @link github.com/ded/bonzo
     * @since   0.3.0
     *
     * @param   string|other    s     String to render back to its correct JavaScript value.
     *                                If s is not a string then it is returned unaffected. 
     * @return  converted data
     *
     */
    function render(s) {
        var n; // < undefined
        return ( !s || typeof s != 'string' ? s              // unchanged
                        : 'true' === s      ? true           // convert "true" to true
                        : 'false' === s     ? false          // convert "false" to false
                        : 'undefined' === s ? n              // convert "undefined" to undefined
                        : 'null' === s      ? null           // convert "null" to null
                        : (n = parseFloat(s)) === +n ? n     // convert "1000" to 1000
                        : s                                  // unchanged
        );
    }
    
    // Isolate native element:
    function getNative(e) {
        // stackoverflow.com/questions/9119823/safest-way-to-detect-native-dom-element
        // See @link jsperf.com/get-native
        // If e is a native element then return it. If not check if index 0 exists and is
        // a native elem. If so then return that. Otherwise return false.
        return !e ? false : e.nodeType === 1 ? e : e[0] && e[0].nodeType === 1 ? e[0] : false;
    }


    /**
     * .dataset()          Cross browser implementation of HTML5 dataset
     *                     The chainable syntax is disabled by default and can be 
     *                     enabled by calling Response.chain() (See Response.chain)
     *
     * @since 0.3.0
     * 
     * Chainable form:  $('div').dataset(key)               // get (from first matched element)
     *                  $('div').dataset([key])             // get and render (See Response.render)
     *                  $('div').dataset(key, value)        // set (sets all matched elems)
     *                  $('div').dataset({k1:val, k2:val})  // set multiple attrs at once (on all matched elems)
     *                  $('div').deletes(keys)              // delete attrs (space-separated string)
     * 
     * Non-chainable:   Response.dataset(elem, key)               // get (elem can be native or jQuery elem)
     *                  Response.dataset(elem, [key])             // get and render (See Response.render)
     *                  Response.dataset(elem, key, value)        // set
     *                  Response.dataset(elem, {k1:val, k2:val})  // set multiple attrs at once
     *                  Response.deletes(elem, keys)              // delete attrs (space-separated string)
     * 
     */
    function datasetChainable(key, value) {

        var numOfArgs = arguments.length
          , elem = getNative(this)
          , ret = {}
          , renderData = false
          , n;

        if ( numOfArgs ) {
                
            if ( isArray(key) ) {
                renderData = true;
                key = key[0];
            }
    
            if ( typeof key === 'string' ) {

                key = datatize(key);

                if ( 1 === numOfArgs ) {//GET
                    ret = elem.getAttribute(key);
                    return renderData ? render(ret) : ret;
                }

                if ( this === elem || 2 > (n = this.length || 1) ) {//SET single elem
                    elem.setAttribute(key, value);
                } else {//SET for group of selected elems
                    while( n-- ) {// n starts as # of elems in selector and stops at 0
                        if (n in this) {
                            datasetChainable.apply(this[n], arguments);
                        }
                    }
                }
            } else if ( key instanceof Object ) {//SET
                for (n in key) {
                    key.hasOwnProperty(n) && datasetChainable.call(this, n, key[n]);
                }
            }
                
            return this; // chain

        }//1 or more args

        // ** Zero args **
        // Return object containing all the data attributes.
        // Use the native dataset when available:
            
        if ( elem.dataset && DOMStringMap ) {
           return elem.dataset;
        }
            
        // adapted from Bonzo @link github.com/ded/bonzo/blob/master/bonzo.js
        each(elem.attributes, function(a) {
            if (a && (n = String(a.name).match(regexDataPrefix))) {
                ret[camelize(n[1])] = a.value;
            }
        });

        return ret; // plain object

    }
        
    /**
     * .deletes()
     * @since 0.3.0
     */
    function deletesChainable(keys) {
        if (this && typeof keys === 'string') {
            keys = ssvToArr(keys);
            route(this, function(el) {
                each(keys, function(key) {
                    if (key) {
                        el.removeAttribute(datatize(key));
                    }
                });
            });
        }
        return this;
    }

    /**
     * Response.dataset()        See datasetChainable above
     *                           This is the non-chainable version. It grabs the thisArg
     *                           and calls the chainable version
     *
     * @since 0.3.0
     */
    function dataset(elem, key, value) {
        return datasetChainable.apply(elem, slice.call(arguments, 1));
    }

    /**
     * Response.deletes(elem, keys)           Delete HTML5 data attributes (remove them from them DOM)
     * 
     * @since 0.3.0
     *                             Where native DOM dataset is supported you can do: `delete elem.dataset.foo`
     * 
     * @param   object   elem     is a native element or jQuery object e.g. document.body or $('body')
     * 
     * @param   string   keys     one or more space-separated data attribute keys (names) to delete (removed
     *                            from the DOM) Should be camelCased or lowercase.
     * 
     * @example  Response.deletes(document.body, 'casaBlanca movie'); // Removes data-casa-blanca and data-movie
     *                                                                // from the <body> element.
     * 
     * @example  Response.deletes($(div), 'casaBlanca movie')         // Removes data-casa-blanca and data-movie
     *                                                                // from all divs.
     */
    function deletes(elem, keys) {
        return deletesChainable.call(elem, keys);
    }
    
    function selectify(keys) {
        // Convert an array of data keys into a selector string
        // Converts ["a","b","c"] into "[data-a],[data-b],[data-c]"
        // Double-slash escapes periods so that attrs like data-density-1.5 will work
        // @link api.jquery.com/category/selectors/
        // @link github.com/jquery/sizzle/issues/76
        var k, r = [], i = 0, l = keys.length;
        while ( i < l ) {
            (k = keys[i++]) && r.push('[' + datatize(k.replace(regexTrimPunc, '').replace('.', '\\.')) + ']');
        }
        return r.join();
    }


    /**
     * Response.target()           Get the corresponding data attributes for an array of data keys.
     * @since    0.1.9
     * @param    array     keys    is the array of data keys whose attributes you want to select.
     * @return   object            jQuery selector
     * @example  Response.target(['a', 'b', 'c'])  //  $('[data-a],[data-b],[data-c]')
     * @example  Response.target('a b c'])         //  $('[data-a],[data-b],[data-c]')
     */
    function target(keys) {
        return $(selectify(ssvToArr(keys)));    
    }

    // Cross-browser versions of window.scrollX and window.scrollY
    // Compatibiliy notes @link developer.mozilla.org/en/DOM/window.scrollY
    // Performance tests @link jsperf.com/scrollx-cross-browser-compatible
    // Using native here b/c Zepto doesn't support .scrollLeft() /scrollTop()
    // In jQuery you can do $(window).scrollLeft() and $(window).scrollTop()

    /** 
     * Response.scrollX()     Cross-browser version of window.scrollX
     * @since   0.3.0
     * @return  integer
     */
    function scrollX() {
        return window.pageXOffset || docElem.scrollLeft; 
    }

    /** 
     * Response.scrollY()     Cross-browser version of window.scrollY
     * @since   0.3.0
     * @return  integer
     */
    function scrollY() { 
        return window.pageYOffset || docElem.scrollTop; 
    }

    /**
     * area methods inX/inY/inViewport
     * @since   0.3.0
     */
    function rectangle(el, verge) {
        // Local handler for area methods:
        // adapted from github.com/ryanve/dime
        // The native object is read-only so we 
        // have use a copy in order to modify it.
        var r = el.getBoundingClientRect ? el.getBoundingClientRect() : {};
        verge = typeof verge == 'number' ? verge || 0 : 0;
        return {
            top: (r.top || 0) - verge
          , left: (r.left || 0) - verge
          , bottom: (r.bottom || 0) + verge
          , right: (r.right || 0) + verge
        };
    }
         
    // The verge is the amount of pixels to act as a cushion around the viewport. It can be any 
    // integer. If verge is zero, then the inX/inY/inViewport methods are exact. If verge is set to 100, 
    // then those methods return true when for elements that are are in the viewport *or* near it, 
    // with *near* being defined as within 100 pixels outside the viewport edge. Elements immediately 
    // outside the viewport are 'on the verge' of being scrolled to.

    function inX(elem, verge) {
        var r = rectangle(getNative(elem), verge);
        return !!r && r.right >= 0 && r.left <= viewportW();
    }

    function inY(elem, verge) {
        var r = rectangle(getNative(elem), verge);
        return !!r && r.bottom >= 0 && r.top <= viewportH();
    }

    function inViewport(elem, verge) {
        // equiv to: inX(elem, verge) && inY(elem, verge)
        // But just manually do both to avoid calling rectangle() and getNative() twice.
        // It actually gzips smaller this way too:
        var r = rectangle(getNative(elem), verge);
        return !!r && r.bottom >= 0 && r.top <= viewportH() && r.right >= 0 && r.left <= viewportW();
    }
    
             
    function detectMode(elem) {

        // Detect whether elem should act in src or markup mode.
        // @param   elem      is a DOM element
        // @return  number
        // @link dev.w3.org/html5/spec-author-view/index.html#attributes-1
        // @link stackoverflow.com/q/8715689/770127
        // @link stackoverflow.com/a/4878963/770127
        // Normalize to lowercase to ensure compatibility across HTML/XHTML/XML.
        // These are the elems that can use src attr per the W3 spec:
            
        var srcElems = { img:1, input:1, source:3, embed:3, track:3, iframe:5, audio:5, video:5, script:5 }
          , modeID = srcElems[ elem.nodeName.toLowerCase() ] || -1;

        // -5 => markup mode for video/audio/iframe w/o src attr.
        // -1 => markup mode for any elem not in the array above.
        //  1 => src mode    for img/input (empty content model). Images.
        //  3 => src mode    for source/embed/track (empty content model). Media *or* time data.
        //  5 => src mode    for audio/video/iframe/script *with* src attr.
        //  If we at some point we need to differentiate <track> we'll use 4, but for now
        //  it's grouped with the other non-image empty content elems that use src.
        //  hasAttribute is not supported in IE7 so check elem.getAttribute('src')

        return 4 > modeID ? modeID : null != elem.getAttribute('src') ? 5 : -5;
    }

    /**
     * Response.store()
     * @since 0.1.9
     *
     * Store a data value on each elem targeted by a jQuery selector. We use this for storing an 
     * elem's orig (no-js) state. This gives us the ability to return the elem to its orig state.
     * The data it stores is either the src attr or the innerHTML based on result of detectMode().
     *
     * @param  {Object}  $elems  DOM element | jQuery object | nodeList | array of elements
     * @param  {string}  key     is the key to use to store the orig value w/ @link api.jquery.com/data/
     * @param  {string=} source  (@since 0.6.2) an optional attribute name to read data from
     *
     */
    function store($elems, key, source) {
    
        var valToStore;
        if ( !$elems || null == key) { doError('store'); }
        source = typeof source == 'string' && source;

        route($elems, function(el) {
            if ( source ) { valToStore = el.getAttribute(source); }
            else if ( 0 < detectMode(el) ) { valToStore = el.getAttribute('src'); }
            else { valToStore = el.innerHTML; }
            null == valToStore ? deletes(el, key) : dataset(el, key, valToStore); 
        });

        return Response;
    }

    /**
     * Response.access()               Access data-* values for element from an array of data-* keys. 
     * 
     * @since   0.1.9                 (added support for space-separated strings in 0.3.1)
     *
     * @param   object         elem   is a native or jQuery element whose values to access.
     * @param   array|string   keys   is an array or space-separated string of data keys whose 
     *                                values you want to access.
     *
     * @return  array                 of dataset values corresponding to each key. Since 0.4.0 if
     *                                the params are wrong then the return is an empty array.
     */
    function access(elem, keys) {
        // elem becomes thisArg for datasetChainable:
        var ret = [];
        elem && keys && each(ssvToArr(keys), function(k, i) {
            ret.push(dataset(elem, k));
        }, elem);
        return ret;
    }

    /**
     * Response.addTest
     *
     */
    function addTest(prop, fn) {
        if (typeof prop == 'string' && typeof fn == 'function') {
            propTests[prop] = fn;
            isCustom[prop] = 1;
        }
        return Response;
    }
        
    /*
     * Elemset   Prototype object for element sets used in Response.create
     *           Each element in the set inherits this as well, so some of the 
     *           methods apply to the set, while others apply to single elements.
     */
    Elemset = (function() {
    
        var crossover = event.crossover
          //, update = event.update
          , min = Math.min;

        // Techically data attributes names can contain uppercase in HTML, but, The DOM lowercases 
        // attributes, so they must be lowercase regardless when we target them in jQuery. Force them 
        // lowercase here to prevent issues. Removing all punc marks except for dashes, underscores,
        // and periods so that we don't have to worry about escaping anything crazy.
        // Rules @link dev.w3.org/html5/spec/Overview.html#custom-data-attribute
        // jQuery selectors @link api.jquery.com/category/selectors/ 
            
        function sanitize (key) {
            // Allow lowercase alphanumerics, dashes, underscores, and periods:
            return typeof key == 'string' ? key.toLowerCase().replace(regexFunkyPunc, '') : '';
        }

        return {
            $e: 0                     // object    jQuery object
          , mode: 0                   // integer   defined per element
          , breakpoints: null         // array     validated @ configure()
          , prefix: null              // string    validated @ configure()
          , prop: 'width'             // string    validated @ configure()
          , keys: []                  // array     defined @ configure()
          , dynamic: null             // boolean   defined @ configure()
          , custom: 0                 // boolean   see addTest()
          , values: []                // array     available values
          , fn: 0                     // callback  the test fn, defined @ configure()
          , verge: null               // integer   defaults to Math.min(screenMax, 500)
          , newValue: 0
          , currValue: 1
          , aka: null
          , lazy: null
          , i: 0                      // integer   the index of the current highest active breakpoint min
          , uid: null
              
          , reset: function() {// Reset / fire crossover events:
          
                var subjects = this.breakpoints
                  , i = subjects.length
                  , tempIndex = 0;
                
                // This is similar to the decideValue loop
                while( !tempIndex && i-- ) {
                    this.fn(subjects[i]) && (tempIndex = i);
                }

                // Fire the crossover event if crossover has occured:
                if (tempIndex !== this.i) {
                    $win.trigger(crossover) // fires for each set
                        .trigger(this.prop + crossover); // fires 
                    this.i = tempIndex || 0;
                }
            
                return this;           // chainable
            }

          , configure: function(options) {
          
                merge(this, options);
          
                var i, prefix, aliases, aliasKeys, isNumeric = true, arr, prop = this.prop;
                
                this.uid = suid++;

                this.verge = isFinite(this.verge) ? this.verge : min(screenMax, 500);
                    
                this.fn = propTests[prop] || doError('create @fn');

                // If we get to here then we know the prop is one one our supported props:
                // 'width', 'height', 'device-width', 'device-height', 'device-pixel-ratio'
                // device- props => NOT dynamic
                    
                if (typeof this.dynamic != 'boolean') {
                    this.dynamic = !!('device' !== prop.substring(0, 6));
                }
                
                this.custom = isCustom[prop];

                prefix = this.prefix ? sift(map(ssvToArr(this.prefix), sanitize)) : ['min-' + prop + '-'];
                aliases = 1 < prefix.length ? prefix.slice(1) : 0;
                this.prefix = prefix[0];
                
                arr = this.breakpoints;
                
                // Sort and validate (#valid8) custom breakpoints if supplied.
                // Must be done before keys are created so that the keys match:
                
                if ( isArray(arr) ) {// custom breakpoints
                            
                    each(arr, function(v) {
                        if ( !v && v !== 0 ) { throw 'invalid breakpoint'; } // null|undefined|''|NaN
                        isNumeric = isNumeric && isFinite(v);
                    });

                    arr = isNumeric ? arr.sort(function(a, b) {
                        return (a - b); // sort lowest to highest
                    }) : arr; 

                    arr.length || doError('create @breakpoints');
                    
                } else {// default breakpoints:
                    // The defaults are presorted so we can skip the need to sort when using the defaults. Omit
                    // trailing decimal zeros b/c for example if you put 1.0 as a devicePixelRatio breakpoint, 
                    // then the target would be data-pre1 (NOT data-pre1.0) so drop the zeros.
                    // If no breakpoints are supplied, then get the default breakpoints for the specified prop.
                    // Supported props: 'width', 'height', 'device-width', 'device-height', 'device-pixel-ratio'
                    arr = defaultBreakpoints[prop] || defaultBreakpoints[prop.split('-').pop()] || doError('create @prop'); 
                }

                // Remove breakpoints that are above the device's max dimension,
                // in order to reduce the number of iterations needed later.
                this.breakpoints = isNumeric ? sift(arr, function(n) { 
                    return n <= screenMax; 
                }) : arr;

                // Use the breakpoints array to create array of data keys:
                this.keys = affix(this.breakpoints, this.prefix);
                this.aka = null; // Reset to just in case a value was merged in.

                if ( aliases ) {// There may be one of more aliases:
                    aliasKeys = [];
                    i = aliases.length;
                    while ( i-- ) { aliasKeys.push(affix(this.breakpoints, aliases[i])); }
                    this.aka = aliasKeys; // this.aka is an array of arrays (one for each alias)
                    this.keys = concat.apply(this.keys, aliasKeys); // flatten aliases into this.keys
                }

                sets.all = sets.all.concat(sets[this.uid] = this.keys); // combined keys ===> sets.all
                
                return this; // chainable
            }

          , target: function() {// Stuff that can't happen until the DOM is ready:
                this.$e = $(selectify(sets[this.uid])); // Cache jQuery object for the set.
                store(this.$e, initContentKey);  // Store original (no-js) value to data key.
                this.keys.push(initContentKey);  // Add key onto end of keys array. (# keys now equals # breakpoints + 1)
                return this; // chainable
            }

            // The rest of the methods are designed for use with single elements.
            // They are for use in a cloned instances within a loop.

          , decideValue: function() {
                // Return the first value from the values array that passes the boolean
                // test callback. If none pass the test, then return the fallback value.
                // this.breakpoints.length === this.values.length + 1  
                // The extra member in the values array is the initContentKey value.
                var val = null
                  , subjects = this.breakpoints
                  , sL = subjects.length
                  , i = sL;

                while( val == null && i-- ) {
                    this.fn(subjects[i]) && (val = this.values[i]);
                }
                this.newValue = typeof val === 'string' ? val : this.values[sL];
                return this; // chainable
            }

          , prepareData: function(elem) {
             
                this.$e = $(elem);                // jQuery selector
                this.mode = detectMode(elem);     // Detect the mode of the element.
                this.values = access(this.$e, this.keys); // Access Response data- values for the element.
                    
                if (this.aka) {
                    var i = this.aka.length;
                    // If there are alias keys then there may be alias values. Merge the values from 
                    // all the aliases into the values array. The merge method only merges in truthy values
                    // and prevents falsey values from overwriting truthy ones. (See Response.merge)
                    while ( i-- ) {// loops down and stops at index 0
                        // Each of the this.aka arrays has the same length as the this.values
                        // array, so no new indexes will be added, just filled if there's truthy values.
                        this.values = merge(this.values, access(this.$e, this.aka[i]));
                    }
                }

                return this.decideValue();          // chainable
            }

          , updateDOM: function() {
                // Apply the method that performs the actual swap. When updateDOM called this.$e and this.e refer
                // to single elements. Only update the DOM when the new value is different than the current value.
                if (this.currValue === this.newValue) { return this; }
                this.currValue = this.newValue;
                if ( 0 < this.mode ) { 
                    this.$e[0].setAttribute('src', this.newValue); 
                } else if ( null == this.newValue ) { 
                    this.$e.empty && this.$e.empty(); 
                } else {
                    if (this.$e.html) {
                        this.$e.html(this.newValue); 
                    } else {
                        this.$e.empty && this.$e.empty();
                        this.$e[0].innerHTML = this.newValue;
                    }
                }
                // this.$e.trigger(update); // may add this event in future
                return this;
            }

        };//return
    }());//Elemset
    
    // The keys are the prop and the values are the method that tests that prop.
    // The props with dashes in them are added via array notation below.
    // Props marked as dynamic change when the viewport is resized:
    propTests['width'] = band;   // dynamic
    propTests['height'] = wave;  // dynamic
    propTests['device-width'] = device.band;
    propTests['device-height'] = device.wave;
    propTests['device-pixel-ratio'] = dpr;
    
    /**
     * Response.resize
     */
    function resize(fn) {
        $win.on('resize', fn);
        return Response; // chain
    }

    /**
     * Response.crossover
     *
     */
    
    function crossover(prop, fn) {
        var temp, eventToFire, eventCrossover = event.crossover;
        if (typeof prop == 'function') {// support args in reverse
            temp = fn;
            fn = prop;
            prop = temp;
        }
        eventToFire = prop ? ('' + prop + eventCrossover) : eventCrossover;
        $win.on(eventToFire, fn);
        return Response; // chain
    }

    /**
     * Response.action        A facade for calling functions on both the ready and resize events.
     *
     * @link     http://responsejs.com/#action
     * @since    0.1.3
     * @param    callback|array  action  is the callback name or array of callback names to call.
     *
     * @example  Response.action(myFunc1);            // call myFunc1() on ready/resize
     * @example  Response.action([myFunc1, myFunc2]); // call myFunc1(), myFunc2() ...
     */
    function action(fnOrArr) {
        route(fnOrArr, function(fn) {
            ready(fn);
            resize(fn);
        });
        return Response; // chain
    }
    
    /**
     * Response.create()              Create their own Response attribute sets, with custom 
     *                                breakpoints and data-* names.
     * @since    0.1.9
     *
     * @param    object|array   args   is an options object or an array of options objects.
     *
     * @link     http://responsejs.com/#create
     *
     * @example  Ideally this method is only called once:
     *           To create a single set,  use the form:  Response.create(object);
     *           To create multiple sets, use the form:  Response.create([object1, object2]); 
     */

    function create(args) {

        route(args, function(options) {

            typeof options == 'object' || doError('create @args');

            var elemset = objectCreate(Elemset).configure(options)
              , lowestNonZeroBP
              , verge = elemset.verge
              , breakpoints = elemset.breakpoints
              , scrollName = namespaceIt('scroll')
              , resizeName = namespaceIt('resize')
            ;

            if ( !breakpoints.length ) { return; }    // Quit if there are zero breakpoints.

            // Identify the lowest nonzero breakpoint. (They're already sorted low to high by now.)
            lowestNonZeroBP = breakpoints[0] || breakpoints[1] || false;
        
            ready(function() {                  // Ready. Yea mofo.

                var allLoaded = event.allLoaded
                  , lazy = !!elemset.lazy;

                // Target elements containing this set's Response data attributes and chain into the 
                // loop that occurs on ready. The selector is cached to elemset.$e for later use.

                each(elemset.target().$e, function(el, i) {
                    elemset[i] = objectCreate(elemset).prepareData(el);// Inherit from elemset
                    if (!lazy || inViewport(elemset[i].$e, verge)) {
                        // If not lazy update all the elems in the set. If
                        // lazy, only update elems in the current viewport.
                        elemset[i].updateDOM(); 
                    }
                });

                function resizeHandler() {   // Only runs for dynamic props.
                    elemset.reset();
                    each(elemset.$e, function(el, i) {// Reset and then loop thru the set.
                        elemset[i].decideValue().updateDOM(); // Grab elem object from cache and update all.
                    }).trigger(allLoaded);
                }

                // device-* props are static and only need to be tested once. The others are
                // dynamic, meaning they need to be tested on resize. Also if a device so small
                // that it doesn't support the lowestNonZeroBP then we don't need to listen for 
                // resize events b/c we know the device can't resize beyond that breakpoint.

                if (elemset.dynamic && (elemset.custom || lowestNonZeroBP < screenMax)) {
                   resize(resizeHandler, resizeName);
                }

                // We don't have to re-decide the content on scrolls because neither the viewport or device
                // properties change from a scroll. This setup minimizes the operations binded to the scroll 
                // event. Once everything in the set has been swapped once, the scroll handler is deactivated
                // through the use of a custom event.

                if ( !lazy ) { return; }

                function scrollHandler() {
                    each(elemset.$e, function(el, i) {
                        if (inViewport(elemset[i].$e, verge)) {
                            elemset[i].updateDOM();
                        }
                    });
                }

                $win.on(scrollName, scrollHandler);
                elemset.$e.one(allLoaded, function() {
                    $win.off(scrollName, scrollHandler);
                });

            });//ready
        });//route
        return Response; // chain
    }//create
    
    function noConflict(callback) {
        if ( root[name] === Response ) { root[name] = old; }
        if (typeof callback == 'function') { callback.call(root, Response); }
        return Response;
    }

    // Handler for adding inx/inY/inViewport to $.fn (or another prototype).
    function exposeAreaFilters(engine, proto, force) {
        each(['inX', 'inY', 'inViewport'], function(methodName) {
            (force || !proto[methodName]) && (proto[methodName] = function(verge, invert) {
                return engine(sift(this, function(el) {
                    return !!el && !invert === Response[methodName](el, verge); 
                }));
            });
        });
    }

    /**
     * Response.bridge
     * Bridges applicable methods into the specified host (e.g. jQuery)
     * @param {Function} host
     * @param {boolean=} force
     */
    function bridge(host, force) {

        if ( typeof host == 'function' && host.fn ) {

            // Expose .dataset() and .deletes() to jQuery:
            if (force || void 0 === host.fn.dataset) { 
                host.fn.dataset = datasetChainable; 
            }
            if (force || void 0 === host.fn.deletes) { 
                host.fn.deletes = deletesChainable; 
            }
            
            // Expose .inX() .inY() .inViewport()
            exposeAreaFilters(host, host.fn, force);
        }

        return Response;
    }
    
    /**
     * Response.chain
     * @since 0.3.0
     * @depreciated  ( Use Response.bridge instead. ) 
     */
    function chain (host, force) {
        host = arguments.length ? host : $;
        return bridge(host, force);
    }
    
    Response = { // Expose these as props/methods on Response:
        deviceMin: function() { return screenMin; }
      , deviceMax: function() { return screenMax; }
      //, sets: function(prop) {// must be uid
      //    return $(selectify(sets[prop] || sets.all));
      //}
      , noConflict: noConflict
      , chain: chain
      , bridge: bridge
      , create: create
      , addTest: addTest
      , datatize: datatize
      , camelize: camelize
      , render: render
      , store: store
      , access: access
      , target: target
      , object: objectCreate
      , crossover: crossover
      , action: action
      , resize: resize
      , ready: ready
      , affix: affix
      , sift: sift
      , dpr: dpr
      , deletes: deletes
      , scrollX: scrollX
      , scrollY: scrollY
      , deviceW: deviceW
      , deviceH: deviceH
      , device: device
      , inX: inX
      , inY: inY
      , route: route
      , merge: merge
      , media: media
      , wave: wave
      , band: band
      , map: map
      , each: each
      , inViewport: inViewport
      , dataset: dataset
      , viewportH: viewportH
      , viewportW: viewportW
    };// Response

    // Initialize
    ready(function() {
        var nativeJSONParse, customData = dataset(doc.body, 'responsejs');
        if ( customData ) {
            nativeJSONParse = !!win.JSON && JSON.parse;
            if ( nativeJSONParse ) {
                customData = nativeJSONParse(customData); 
            } else if ( $.parseJSON ) { 
                customData = $.parseJSON(customData); 
            }
            customData && customData.create && create(customData.create);
        }
        // Remove .no-responsejs class from html tag (if it's there) and add .responsejs
        docElem.className = docElem.className.replace(/(^|\s)(no-)?responsejs(\s|$)/, '$1$3') + ' responsejs ';
    });

    return Response;

}));;(function(window, document, $, R, J) {
	
	// Setup our Responsive Content Object	
	R.create({ 
		prop: "width",
		prefix: "src",
		breakpoints: [0, 320, 640, 960, 1280],
		lazy: true
	});
	
	// THE BLACK MAGIC OF RESPONSIVE JAVASCRIPT LIVES BELOW....
	
	var jRes = new J([ // Setup of jResponse
		{ label: '4', enter: 0, exit: 639 },
		{ label: '8', enter: 640, exit: 959 },
		{ label: '12', enter: 960, exit: 1279 },
		{ label: '16', enter: 1280, exit: 10000 }
	]);
	
	jRes.addFunc({ // Function Called On ALL Breakpoints during a Resize
		breakpoint: '*',
		enter: function() { // A function called on enter of ANY breakpoint

		},
		exit: function() { // Called on Exit of ANY breakpoing
			
		}
	});
	
	jRes.addFunc([ // Enter and Exit callbacks based on breakpoints
		{
			breakpoint: '16',
			enter: function() {

			},
			exit: function() {

			}
		},{
			breakpoint: '12',
			enter: function() {

			},
			exit: function() {

			}
		},{
			breakpoint: '8',
			enter: function() {

			},
			exit: function() {
				
			}
		},{
			breakpoint: '4',
			enter: function() {

			},
			exit: function() {
				
			}
		},{
			breakpoint: ['12', '16'], // Both 12 and 16 columns layouts
			enter: function() {
				
			},
			exit: function() {
				
			}
		},{
			breakpoint: ['4', '8'], // Both 4 and 8 columns layouts
			enter: function() {
			
			},
			exit: function() {

			}
		}
	]);

}(this, this.document, this.jQuery, this.Response, this.jRespond));