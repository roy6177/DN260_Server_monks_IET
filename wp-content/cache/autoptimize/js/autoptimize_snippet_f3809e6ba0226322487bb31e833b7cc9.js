!function(a){var b=function(a,b){if(!b("body").hasClass("no-isotope")&&void 0!=b.fn.imagesLoaded&&void 0!=b.fn.isotope){var c=a.find(".wew-blog-grid.wew-masonry");0!==c.length&&c.each(function(){c.imagesLoaded(function(){c.isotope({itemSelector:".isotope-entry",transformsEnabled:!0,isOriginLeft:woovinaLocalize.isRTL?!1:!0,transitionDuration:"0.0",layoutMode:"masonry"})})})}};a(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/wew-blog-grid.default",b)})}(jQuery);