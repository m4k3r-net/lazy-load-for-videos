!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([,function(t,e,o){"use strict";!function(t,e,o){var n,i=".preview-youtube",a="js-lazyload--not-loaded",r="";function l(){e(i).parent().removeClass(a)}t.init=function(t){d(t),e(document).ready(c()).ajaxStop(function(){c()}),"function"==typeof u.init&&!0===n.responsive?u.init():l(),"function"==typeof n.callback&&n.callback()};var d=function(t){n=e.extend({theme:"dark",colour:"red",controls:!0,loadpolicy:!0,showinfo:!0,relations:!0,buttonstyle:"",preroll:"",postroll:"",videoseo:!1,responsive:!0,thumbnailquality:"0",displaybranding:!1,loadthumbnail:!0,callback:null},t)},c=function(){e("a.lazy-load-youtube").each(function(t){var o,i=e(this),a=i.attr("href"),l="";(o=a.split("/embed/")[1])||(o=a.split("://youtu.be/")[1]),o||(o=a.split("v=")[1].replace(/&/,"?"));var d=o.split("?")[0].split("#")[0],c="//www.youtube.com/embed/"+(l=void 0!==n.preroll&&n.preroll!==l?n.preroll:o);!function(){if(!0===n.displaybranding&&0===i.siblings(".lazyload-info-icon").length){var t=i,o=e('<a class="lazyload-info-icon" href="//kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>');t.before(o)}}();var s=function(t){return"//www.youtube.com/watch?v="+t},p=function(t){return parseInt(t.css("width"))-4},f=0,v=[3600,60,1],y=o.match(/[#&?]t=(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(y)for(var h=1;h<y.length;h++)void 0!==y[h]&&(f+=parseInt(y[h])*v[h-1]);0===f&&(y=o.match(/[#&?](?:t|start)=(\d+)/))&&(f=y[1]),o=o.split("#")[0];var m="";f&&0!==f&&-1===o.indexOf("start=")&&(m=(-1===o.indexOf("?")?"?":"&")+"start="+f);var b="";!0===n.videoseo&&(b=' itemprop="name"'),-1!==o.indexOf("showinfo=0")?i.html(""):i.html('<div class="lazy-load-youtube-info"><span class="titletext youtube"'+b+">"+(void 0!==i.attr("video-title")?i.attr("video-title"):void 0!==i.attr("data-video-title")?i.attr("data-video-title"):void 0!==i.html()&&""!==i.html()?i.html():"")+"</span></div>"),i.prepend('<div style="height:'+function(t){var e=0;if(!1===n.responsive)e=parseInt(t.css("height"))-4;else{var o=p(t);e=Math.round(.5625*o)}return e}(i)+"px;width:"+p(i)+'px;" class="lazy-load-youtube-div"></div>').addClass(n.buttonstyle);!function(t){var e="//i2.ytimg.com/vi/"+t+"/"+n.thumbnailquality+".jpg";r=e}(d);var g=function(){return r};n.loadthumbnail&&function(t){var o=g(),n=e('<img style="display:none" src="'+o+'"/>');n.load(function(){120===n.width()&&(o=o.replace("maxresdefault","0")),"none"===t.css("background-image")&&t.css("background","#000 url("+o+") center center no-repeat"),n.remove()}),e("body").append(n)}(i),!0===n.videoseo&&(i.append('<meta itemprop="contentLocation" content="'+s(d)+'" />'),i.append('<meta itemprop="embedUrl" content="'+c+'" />'),i.append('<meta itemprop="thumbnail" content="'+g()+'" />'),e.getJSON("//gdata.youtube.com/feeds/api/videos/"+d+"?v=2&alt=jsonc&callback=?",function(t){i.append('<meta itemprop="datePublished" content="'+t.data.uploaded+'" />'),i.append('<meta itemprop="duration" content="'+t.data.duration+'" />'),i.append('<meta itemprop="aggregateRating" content="'+t.data.rating+'" />')})),i.attr("id",d+t),i.attr("href",s(d)+(f?"#t="+f+"s":"")),function(){var t,e,o,i,a="",r="",u="",s="";void 0!==n.theme&&n.theme!==a&&"dark"!==n.theme&&(a="&theme="+n.theme),void 0!==n.colour&&n.colour!==r&&"red"!==n.colour&&(r="&color="+n.colour),t=n.showinfo?"":"&showinfo=0",e=n.relations?"":"&rel=0",o=n.controls?"":"&controls=0",i=n.loadpolicy?"":"&iv_load_policy=3",l=l!==d?d+",":"",void 0!==n.postroll&&n.postroll!==u&&(u=n.postroll),""===l&&""===u||(s="&playlist="+l+u),c+=(-1===c.indexOf("?")?"?":"&")+"autoplay=1"+a+r+o+i+t+e+s+m}();var w='<iframe width="'+parseInt(i.css("width"))+'" height="'+parseInt(i.css("height"))+'" style="vertical-align:top;" src="'+c+'" frameborder="0" allowfullscreen></iframe>';e(this).on("click",function(){return z(this),x(this),e("#"+d+t).replaceWith(w),"function"==typeof u.resize&&!0===n.responsive&&u.resize(),!1});var z=function(t){e(t).removeClass("preview-youtube")},x=function(t){e(t).prev(".lazyload-info-icon").remove()}})};e.fn.bindFirst=function(t,o){var n=e(this);n.unbind(t,o),n.bind(t,o);var i=e._data(n[0]).events,a=i[t];a.unshift(a.pop()),i[t]=a};var u={config:{container:e(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){u.config.container.length>0&&(e(window).on("resize",u.resize),e(window).bindFirst("load",function(){u.resize()}),e(window).on("load",function(){u.resize(),l()}))},resize:function(){e(u.config.selector,u.config.container).each(function(){var t=e(this),o=t.parent().width(),n=Math.round(.5625*o);t.attr("height",n),t.attr("width",o),t.css({height:n,width:o})})}};e(function(){t.init(lazyload_video_settings.youtube)})}(window.lazyload_youtube=window.lazyload_youtube||{},jQuery)}]);
//# sourceMappingURL=lazyload-youtube.js.map