/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function(a,b,c,d){function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="stellar",g={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(a){a.hide()},showElement:function(a){a.show()}},h={scroll:{getLeft:function(a){return a.scrollLeft()},setLeft:function(a,b){a.scrollLeft(b)},getTop:function(a){return a.scrollTop()},setTop:function(a,b){a.scrollTop(b)}},position:{getLeft:function(a){return-1*parseInt(a.css("left"),10)},getTop:function(a){return-1*parseInt(a.css("top"),10)}},margin:{getLeft:function(a){return-1*parseInt(a.css("margin-left"),10)},getTop:function(a){return-1*parseInt(a.css("margin-top"),10)}},transform:{getLeft:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(a){var b=getComputedStyle(a[0])[k];return"none"!==b?-1*parseInt(b.match(/(-?[0-9]+)/g)[5],10):0}}},i={position:{setLeft:function(a,b){a.css("left",b)},setTop:function(a,b){a.css("top",b)}},transform:{setPosition:function(a,b,c,d,e){a[0].style[k]="translate3d("+(b-c)+"px, "+(d-e)+"px, 0)"}}},j=function(){var b,c=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,d=a("script")[0].style,e="";for(b in d)if(c.test(b)){e=b.match(c)[0];break}return"WebkitOpacity"in d&&(e="Webkit"),"KhtmlOpacity"in d&&(e="Khtml"),function(a){return e+(e.length>0?a.charAt(0).toUpperCase()+a.slice(1):a)}}(),k=j("transform"),l=a("<div />",{style:"background:#fff"}).css("background-position-x")!==d,m=l?function(a,b,c){a.css({"background-position-x":b,"background-position-y":c})}:function(a,b,c){a.css("background-position",b+" "+c)},n=l?function(a){return[a.css("background-position-x"),a.css("background-position-y")]}:function(a){return a.css("background-position").split(" ")},o=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,1e3/60)};e.prototype={init:function(){this.options.name=f+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===c.body&&(this.element=b),this.$scrollElement=a(this.element),this.$element=this.element===b?a("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==d?a(this.options.viewportElement):this.$scrollElement[0]===b||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var a=this,b=h[a.options.scrollProperty];this._getScrollLeft=function(){return b.getLeft(a.$scrollElement)},this._getScrollTop=function(){return b.getTop(a.$scrollElement)}},_defineSetters:function(){var b=this,c=h[b.options.scrollProperty],d=i[b.options.positionProperty],e=c.setLeft,f=c.setTop;this._setScrollLeft="function"==typeof e?function(a){e(b.$scrollElement,a)}:a.noop,this._setScrollTop="function"==typeof f?function(a){f(b.$scrollElement,a)}:a.noop,this._setPosition=d.setPosition||function(a,c,e,f,g){b.options.horizontalScrolling&&d.setLeft(a,c,e),b.options.verticalScrolling&&d.setTop(a,f,g)}},_handleWindowLoadAndResize:function(){var c=this,d=a(b);c.options.responsive&&d.bind("load."+this.name,function(){c.refresh()}),d.bind("resize."+this.name,function(){c._detectViewport(),c.options.responsive&&c.refresh()})},refresh:function(c){var d=this,e=d._getScrollLeft(),f=d._getScrollTop();c&&c.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),c&&c.firstLoad&&/WebKit/.test(navigator.userAgent)&&a(b).load(function(){var a=d._getScrollLeft(),b=d._getScrollTop();d._setScrollLeft(a+1),d._setScrollTop(b+1),d._setScrollLeft(a),d._setScrollTop(b)}),this._setScrollLeft(e),this._setScrollTop(f)},_detectViewport:function(){var a=this.$viewportElement.offset(),b=null!==a&&a!==d;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=b?a.top:0,this.viewportOffsetLeft=b?a.left:0},_findParticles:function(){{var b=this;this._getScrollLeft(),this._getScrollTop()}if(this.particles!==d)for(var c=this.particles.length-1;c>=0;c--)this.particles[c].$element.data("stellar-elementIsActive",d);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var c,e,f,g,h,i,j,k,l,m=a(this),n=0,o=0,p=0,q=0;if(m.data("stellar-elementIsActive")){if(m.data("stellar-elementIsActive")!==this)return}else m.data("stellar-elementIsActive",this);b.options.showElement(m),m.data("stellar-startingLeft")?(m.css("left",m.data("stellar-startingLeft")),m.css("top",m.data("stellar-startingTop"))):(m.data("stellar-startingLeft",m.css("left")),m.data("stellar-startingTop",m.css("top"))),f=m.position().left,g=m.position().top,h="auto"===m.css("margin-left")?0:parseInt(m.css("margin-left"),10),i="auto"===m.css("margin-top")?0:parseInt(m.css("margin-top"),10),k=m.offset().left-h,l=m.offset().top-i,m.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(n=p,o=q,j=b,!1):(p+=b.position().left,void(q+=b.position().top))}),c=m.data("stellar-horizontal-offset")!==d?m.data("stellar-horizontal-offset"):j!==d&&j.data("stellar-horizontal-offset")!==d?j.data("stellar-horizontal-offset"):b.horizontalOffset,e=m.data("stellar-vertical-offset")!==d?m.data("stellar-vertical-offset"):j!==d&&j.data("stellar-vertical-offset")!==d?j.data("stellar-vertical-offset"):b.verticalOffset,b.particles.push({$element:m,$offsetParent:j,isFixed:"fixed"===m.css("position"),horizontalOffset:c,verticalOffset:e,startingPositionLeft:f,startingPositionTop:g,startingOffsetLeft:k,startingOffsetTop:l,parentOffsetLeft:n,parentOffsetTop:o,stellarRatio:m.data("stellar-ratio")!==d?m.data("stellar-ratio"):1,width:m.outerWidth(!0),height:m.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var b,c=this,e=this._getScrollLeft(),f=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(b=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(b=b.add(this.$element)),b.each(function(){var b,g,h,i,j,k,l,o=a(this),p=n(o),q=0,r=0,s=0,t=0;if(o.data("stellar-backgroundIsActive")){if(o.data("stellar-backgroundIsActive")!==this)return}else o.data("stellar-backgroundIsActive",this);o.data("stellar-backgroundStartingLeft")?m(o,o.data("stellar-backgroundStartingLeft"),o.data("stellar-backgroundStartingTop")):(o.data("stellar-backgroundStartingLeft",p[0]),o.data("stellar-backgroundStartingTop",p[1])),h="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),i="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),j=o.offset().left-h-e,k=o.offset().top-i-f,o.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(q=s,r=t,l=b,!1):(s+=b.position().left,void(t+=b.position().top))}),b=o.data("stellar-horizontal-offset")!==d?o.data("stellar-horizontal-offset"):l!==d&&l.data("stellar-horizontal-offset")!==d?l.data("stellar-horizontal-offset"):c.horizontalOffset,g=o.data("stellar-vertical-offset")!==d?o.data("stellar-vertical-offset"):l!==d&&l.data("stellar-vertical-offset")!==d?l.data("stellar-vertical-offset"):c.verticalOffset,c.backgrounds.push({$element:o,$offsetParent:l,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:b,verticalOffset:g,startingValueLeft:p[0],startingValueTop:p[1],startingBackgroundPositionLeft:isNaN(parseInt(p[0],10))?0:parseInt(p[0],10),startingBackgroundPositionTop:isNaN(parseInt(p[1],10))?0:parseInt(p[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:j,startingOffsetTop:k,parentOffsetLeft:q,parentOffsetTop:r,stellarRatio:o.data("stellar-background-ratio")===d?1:o.data("stellar-background-ratio")})}))},_reset:function(){var a,b,c,d,e;for(e=this.particles.length-1;e>=0;e--)a=this.particles[e],b=a.$element.data("stellar-startingLeft"),c=a.$element.data("stellar-startingTop"),this._setPosition(a.$element,b,b,c,c),this.options.showElement(a.$element),a.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)d=this.backgrounds[e],d.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),m(d.$element,d.startingValueLeft,d.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=a.noop,a(b).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var c=this,d=a(b);d.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),d.bind("resize.horizontal-"+this.name,function(){c.horizontalOffset=c.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),d.bind("resize.vertical-"+this.name,function(){c.verticalOffset=c.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var a,b,c,d,e,f,g,h,i,j,k=this._getScrollLeft(),l=this._getScrollTop(),n=!0,o=!0;if(this.currentScrollLeft!==k||this.currentScrollTop!==l||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=k,this.currentScrollTop=l,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,j=this.particles.length-1;j>=0;j--)a=this.particles[j],b=a.isFixed?1:0,this.options.horizontalScrolling?(f=(k+a.horizontalOffset+this.viewportOffsetLeft+a.startingPositionLeft-a.startingOffsetLeft+a.parentOffsetLeft)*-(a.stellarRatio+b-1)+a.startingPositionLeft,h=f-a.startingPositionLeft+a.startingOffsetLeft):(f=a.startingPositionLeft,h=a.startingOffsetLeft),this.options.verticalScrolling?(g=(l+a.verticalOffset+this.viewportOffsetTop+a.startingPositionTop-a.startingOffsetTop+a.parentOffsetTop)*-(a.stellarRatio+b-1)+a.startingPositionTop,i=g-a.startingPositionTop+a.startingOffsetTop):(g=a.startingPositionTop,i=a.startingOffsetTop),this.options.hideDistantElements&&(o=!this.options.horizontalScrolling||h+a.width>(a.isFixed?0:k)&&h<(a.isFixed?0:k)+this.viewportWidth+this.viewportOffsetLeft,n=!this.options.verticalScrolling||i+a.height>(a.isFixed?0:l)&&i<(a.isFixed?0:l)+this.viewportHeight+this.viewportOffsetTop),o&&n?(a.isHidden&&(this.options.showElement(a.$element),a.isHidden=!1),this._setPosition(a.$element,f,a.startingPositionLeft,g,a.startingPositionTop)):a.isHidden||(this.options.hideElement(a.$element),a.isHidden=!0);for(j=this.backgrounds.length-1;j>=0;j--)c=this.backgrounds[j],b=c.isFixed?0:1,d=this.options.horizontalScrolling?(k+c.horizontalOffset-this.viewportOffsetLeft-c.startingOffsetLeft+c.parentOffsetLeft-c.startingBackgroundPositionLeft)*(b-c.stellarRatio)+"px":c.startingValueLeft,e=this.options.verticalScrolling?(l+c.verticalOffset-this.viewportOffsetTop-c.startingOffsetTop+c.parentOffsetTop-c.startingBackgroundPositionTop)*(b-c.stellarRatio)+"px":c.startingValueTop,m(c.$element,d,e)}},_handleScrollEvent:function(){var a=this,b=!1,c=function(){a._repositionElements(),b=!1},d=function(){b||(o(c),b=!0)};this.$scrollElement.bind("scroll."+this.name,d),d()},_startAnimationLoop:function(){var a=this;this._animationLoop=function(){o(a._animationLoop),a._repositionElements()},this._animationLoop()}},a.fn[f]=function(b){var c=arguments;return b===d||"object"==typeof b?this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))}):"string"==typeof b&&"_"!==b[0]&&"init"!==b?this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&d[b].apply(d,Array.prototype.slice.call(c,1)),"destroy"===b&&a.data(this,"plugin_"+f,null)}):void 0},a[f]=function(){var c=a(b);return c.stellar.apply(c,Array.prototype.slice.call(arguments,0))},a[f].scrollProperty=h,a[f].positionProperty=i,b.Stellar=e}(jQuery,this,document);

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

function getLetter(letter)
{
	var alphabet = new Array();

	alphabet['a'] = '<div class="constellation a"><div class="star star1 medium" data-stellar-ratio="6.140768865123391"></div><div class="star star2 medium" data-stellar-ratio="9.932606900809333"></div><div class="star star3 small" data-stellar-ratio="7.046973045915365"></div><div class="star star4 medium" data-stellar-ratio="6.004929954884574"></div><div class="star star5 small" data-stellar-ratio="11.266029660124332"></div><div class="star star6 large" data-stellar-ratio="10.057639957871288"></div><div class="star star7 medium" data-stellar-ratio="9.397009411128238"></div><div class="star star8 small" data-stellar-ratio="12.166751145850867"></div><div class="star star9 small" data-stellar-ratio="7.371957255993038"></div><div class="star star10 large" data-stellar-ratio="10.176334724528715"></div><div class="star star11 medium" data-stellar-ratio="4.719044111669064"></div><div class="star star12 large" data-stellar-ratio="8.998770187841728"></div><div class="star star13 small" data-stellar-ratio="4.121067201485857"></div></div>';
	alphabet['b'] = '<div class="constellation b"><div class="star star1 medium" data-stellar-ratio="6.050938089378178"></div><div class="star star2 large" data-stellar-ratio="9.276642104843631"></div><div class="star star3 small" data-stellar-ratio="11.529042017646134"></div><div class="star star4 medium" data-stellar-ratio="6.107124259928241"></div><div class="star star5 medium" data-stellar-ratio="12.53914194391109"></div><div class="star star6 large" data-stellar-ratio="8.614789696643129"></div><div class="star star7 small" data-stellar-ratio="8.096520324936137"></div><div class="star star8 medium" data-stellar-ratio="12.584128768648952"></div><div class="star star9 medium" data-stellar-ratio="8.865853341063485"></div><div class="star star10 small" data-stellar-ratio="6.573655592510477"></div><div class="star star11 large" data-stellar-ratio="6.009756265208125"></div><div class="star star12 small" data-stellar-ratio="10.21833122568205"></div><div class="star star13 medium" data-stellar-ratio="9.729541464243084"></div><div class="star star14 large" data-stellar-ratio="11.877274335129187"></div><div class="star star15 small" data-stellar-ratio="8.991284783696756"></div></div>';
	alphabet['c'] = '<div class="constellation c"><div class="star star1 medium" data-stellar-ratio="8.2"></div><div class="star star2 large" data-stellar-ratio="12"></div><div class="star star3 small"   data-stellar-ratio="10.42"></div><div class="star star4 medium"  data-stellar-ratio="7.542"></div><div class="star star5 large"   data-stellar-ratio="4.78"></div><div class="star star6 small"   data-stellar-ratio="5"></div><div class="star star7 small"   data-stellar-ratio="6.82"></div><div class="star star8 large"   data-stellar-ratio="7.63"></div><div class="star star9 small"   data-stellar-ratio="10.3"></div><div class="star star10 medium" data-stellar-ratio="7"></div><div class="star star11 small"  data-stellar-ratio="4"></div></div>';
	alphabet['d'] = '<div class="constellation d"><div class="star star1 large" data-stellar-ratio="5.376562510151416"></div><div class="star star2 medium" data-stellar-ratio="12.941070394823328"></div><div class="star star3 medium" data-stellar-ratio="10.312016834504902"></div><div class="star star4 small" data-stellar-ratio="9.946058979490772"></div><div class="star star5 medium" data-stellar-ratio="10.505380270536989"></div><div class="star star6 large" data-stellar-ratio="9.975596370408311"></div><div class="star star7 medium" data-stellar-ratio="7.573941175593063"></div><div class="star star8 medium" data-stellar-ratio="5.268279435578734"></div><div class="star star9 small" data-stellar-ratio="6.540505171753466"></div><div class="star star10 medium" data-stellar-ratio="10.982958023203537"></div><div class="star star11 medium" data-stellar-ratio="6.4020288495812565"></div><div class="star star12 large" data-stellar-ratio="8.73255055793561"></div><div class="star star13 small" data-stellar-ratio="7.835453931009397"></div><div class="star star14 medium" data-stellar-ratio="8.866185300052166"></div><div class="star star15 medium" data-stellar-ratio="7.75873564532958"></div></div>';
	alphabet['e'] = '<div class="constellation e"><div class="star star1 large" data-stellar-ratio="5.771"></div><div class="star star2 medium" data-stellar-ratio="5.866"></div><div class="star star3 small" data-stellar-ratio="5.866"></div><div class="star star4 medium" data-stellar-ratio="7.38"></div><div class="star star5 large" data-stellar-ratio="4.64"></div><div class="star star6 small" data-stellar-ratio="7.94"></div><div class="star star7 medium" data-stellar-ratio="4.72"></div><div class="star star8 medium" data-stellar-ratio="8.693"></div><div class="star star9 small" data-stellar-ratio="4.064"></div><div class="star star10 large" data-stellar-ratio="5.80"></div><div class="star star11 small" data-stellar-ratio="8.073"></div><div class="star star12 large" data-stellar-ratio="9.25"></div></div>';
	alphabet['f'] = '<div class="constellation f"><div class="star star1 large" data-stellar-ratio="9.040018503554165"></div><div class="star star2 medium" data-stellar-ratio="5.034762100549415"></div><div class="star star3 large" data-stellar-ratio="11.335816285805777"></div><div class="star star4 small" data-stellar-ratio="8.669067739509046"></div><div class="star star5 small" data-stellar-ratio="5.842729894211516"></div><div class="star star6 large" data-stellar-ratio="9.72725965664722"></div><div class="star star7 medium" data-stellar-ratio="12.997359262546524"></div><div class="star star8 large" data-stellar-ratio="6.012779418611899"></div><div class="star star9 small" data-stellar-ratio="10.079924986697733"></div><div class="star star10 small" data-stellar-ratio="7.358338496880606"></div></div>';
	alphabet['g'] = '<div class="constellation g"><div class="star star1 medium" data-stellar-ratio="12.348845230415463"></div><div class="star star2 large" data-stellar-ratio="6.5943178094457835"></div><div class="star star3 small" data-stellar-ratio="7.902136308373883"></div><div class="star star4 medium" data-stellar-ratio="6.354814385296777"></div><div class="star star5 large" data-stellar-ratio="4.243281258968636"></div><div class="star star6 small" data-stellar-ratio="9.94811478164047"></div><div class="star star7 small" data-stellar-ratio="8.57203119667247"></div><div class="star star8 large" data-stellar-ratio="5.337161790113896"></div><div class="star star9 small" data-stellar-ratio="8.426974083064124"></div><div class="star star10 medium" data-stellar-ratio="6.340709880227223"></div><div class="star star11 large" data-stellar-ratio="4.193537316517904"></div><div class="star star12 small" data-stellar-ratio="6.771892300574109"></div><div class="star star13 medium" data-stellar-ratio="6.320449661463499"></div></div>';
	alphabet['h'] = '<div class="constellation h"><div class="star star1 large" data-stellar-ratio="9.17717044102028"></div><div class="star star2 medium" data-stellar-ratio="10.888207973446697"></div><div class="star star3 large" data-stellar-ratio="6.150901041692123"></div><div class="star star4 small" data-stellar-ratio="6.84496745490469"></div><div class="star star5 small" data-stellar-ratio="11.757014103466645"></div><div class="star star6 large" data-stellar-ratio="11.175960203399882"></div><div class="star star7 small" data-stellar-ratio="10.820334565360099"></div><div class="star star8 medium" data-stellar-ratio="4.66553920507431"></div><div class="star star9 large" data-stellar-ratio="12.76129112788476"></div><div class="star star10 medium" data-stellar-ratio="12.172211035853252"></div><div class="star star11 large" data-stellar-ratio="4.040728910127655"></div><div class="star star12 small" data-stellar-ratio="10.027988250367343"></div><div class="star star13 small" data-stellar-ratio="9.113059166353196"></div><div class="star star14 large" data-stellar-ratio="12.552258530631661"></div></div>';
	alphabet['i'] = '<div class="constellation i"><div class="star star1 large" data-stellar-ratio="4.167937173740938"></div><div class="star star2 medium" data-stellar-ratio="9.90634247334674"></div><div class="star star3 large" data-stellar-ratio="11.316263212589547"></div><div class="star star4 small" data-stellar-ratio="10.336125868139789"></div><div class="star star5 small" data-stellar-ratio="12.032053796341643"></div><div class="star star6 large" data-stellar-ratio="4.152788664912805"></div></div>';
	alphabet['j'] = '<div class="constellation j"><div class="star star1 large" data-stellar-ratio="9.78896312485449"></div><div class="star star2 small" data-stellar-ratio="10.551122642122209"></div><div class="star star3 small" data-stellar-ratio="7.095038524828851"></div><div class="star star4 small" data-stellar-ratio="6.863656467059627"></div><div class="star star5 medium" data-stellar-ratio="11.30078885727562"></div><div class="star star6 small" data-stellar-ratio="7.02356337942183"></div><div class="star star7 medium" data-stellar-ratio="8.649038056610152"></div><div class="star star8 medium" data-stellar-ratio="11.029631643090397"></div><div class="star star9 large" data-stellar-ratio="9.582429030444473"></div></div>';
	alphabet['k'] = '<div class="constellation k"><div class="star star1 medium" data-stellar-ratio="7.939544358756393"></div><div class="star star2 large" data-stellar-ratio="6.724059853237122"></div><div class="star star3 small" data-stellar-ratio="6.4613556689582765"></div><div class="star star4 medium" data-stellar-ratio="9.730319700902328"></div><div class="star star5 small" data-stellar-ratio="4.122212603222579"></div><div class="star star6 large" data-stellar-ratio="9.703309973469004"></div><div class="star star7 large" data-stellar-ratio="11.016311462037265"></div><div class="star star8 medium" data-stellar-ratio="12.817328410688788"></div><div class="star star9 small" data-stellar-ratio="9.901926890946925"></div><div class="star star10 large" data-stellar-ratio="4.1723045476246625"></div><div class="star star11 small" data-stellar-ratio="12.923489233478904"></div><div class="star star12 medium" data-stellar-ratio="8.79034688998945"></div><div class="star star13 medium" data-stellar-ratio="8.098295832052827"></div></div>';
	alphabet['l'] = '<div class="constellation l"><div class="star star1 large" data-stellar-ratio="4.722161888377741"></div><div class="star star2 medium" data-stellar-ratio="10.63432437600568"></div><div class="star star3 medium" data-stellar-ratio="6.859477174701169"></div><div class="star star4 small" data-stellar-ratio="10.476743399864063"></div><div class="star star5 large" data-stellar-ratio="10.41142212622799"></div><div class="star star6 medium" data-stellar-ratio="5.565666143549606"></div><div class="star star7 large" data-stellar-ratio="11.114877410931513"></div><div class="star star8 medium" data-stellar-ratio="10.696926239645109"></div></div>';
	alphabet['m'] = '<div class="constellation m"><div class="star star1 large" data-stellar-ratio="7.38"></div><div class="star star2 medium" data-stellar-ratio="9.95"></div><div class="star star3 small" data-stellar-ratio="9.95"></div><div class="star star4 small" data-stellar-ratio="10.4"></div><div class="star star5 large" data-stellar-ratio="8.70"></div><div class="star star6 small" data-stellar-ratio="10.48"></div><div class="star star7 small" data-stellar-ratio="8.74"></div><div class="star star8 large" data-stellar-ratio="9.24"></div><div class="star star9 small" data-stellar-ratio="6.58"></div><div class="star star10 medium" data-stellar-ratio="8.17"></div><div class="star star11 small" data-stellar-ratio="7.24"></div><div class="star star12 large" data-stellar-ratio="12.83"></div><div class="star star13 small" data-stellar-ratio="7.94"></div><div class="star star14 medium" data-stellar-ratio="6.27"></div><div class="star star15 medium" data-stellar-ratio="12.00534"></div><div class="star star16 small" data-stellar-ratio="12.2501"></div><div class="star star17 large" data-stellar-ratio="7.49"></div><div class="star star18 small" data-stellar-ratio="11.5606"></div><div class="star star19 medium" data-stellar-ratio="12.8"></div></div>';
	alphabet['n'] = '<div class="constellation n"><div class="star star1 medium" data-stellar-ratio="9.862405764870346"></div><div class="star star2 small" data-stellar-ratio="7.2615440296940506"></div><div class="star star3 large" data-stellar-ratio="9.84634142415598"></div><div class="star star4 medium" data-stellar-ratio="5.8195637471508235"></div><div class="star star5 medium" data-stellar-ratio="12.101114268414676"></div><div class="star star6 large" data-stellar-ratio="11.619544035056606"></div><div class="star star7 small" data-stellar-ratio="5.853857405018061"></div><div class="star star8 medium" data-stellar-ratio="8.067217208212242"></div><div class="star star9 large" data-stellar-ratio="4.327904873760417"></div><div class="star star10 medium" data-stellar-ratio="6.342840989585966"></div><div class="star star11 small" data-stellar-ratio="5.319068104727194"></div><div class="star star12 medium" data-stellar-ratio="11.444506308063865"></div><div class="star star13 medium" data-stellar-ratio="10.968710845569149"></div><div class="star star14 small" data-stellar-ratio="6.536035176133737"></div><div class="star star15 small" data-stellar-ratio="11.389177838806063"></div><div class="star star16 medium" data-stellar-ratio="10.740170334698632"></div><div class="star star17 large" data-stellar-ratio="10.986414860468358"></div></div>';
	alphabet['o'] = '<div class="constellation o"><div class="star star1 large" data-stellar-ratio="11"></div><div class="star star2 medium" data-stellar-ratio="8.2"></div><div class="star star3 medium"  data-stellar-ratio="6.43"></div><div class="star star4 small"   data-stellar-ratio="6.4322"></div><div class="star star5 small"   data-stellar-ratio="8.32"></div><div class="star star6 large"   data-stellar-ratio="12"></div><div class="star star7 medium"  data-stellar-ratio="10.3"></div><div class="star star8 medium"  data-stellar-ratio="7.0159"></div><div class="star star9 small"   data-stellar-ratio="6.54"></div><div class="star star10 large"  data-stellar-ratio="7.95"></div><div class="star star11 small"  data-stellar-ratio="12.3"></div><div class="star star12 small"  data-stellar-ratio="4.35"></div><div class="star star13 large"  data-stellar-ratio="10.11"></div><div class="star star14 medium" data-stellar-ratio="7.699"></div><div class="star star15 small"  data-stellar-ratio="7.38"></div></div>';
	alphabet['p'] = '<div class="constellation p"><div class="star star1 large" data-stellar-ratio="10.662539012497291"></div><div class="star star2 medium" data-stellar-ratio="11.023212152998894"></div><div class="star star3 large" data-stellar-ratio="5.437177596613765"></div><div class="star star4 medium" data-stellar-ratio="12.100831144489348"></div><div class="star star5 small" data-stellar-ratio="6.494253438198939"></div><div class="star star6 large" data-stellar-ratio="7.979177969973534"></div><div class="star star7 small" data-stellar-ratio="10.108264431823045"></div><div class="star star8 medium" data-stellar-ratio="5.355498971883208"></div><div class="star star9 small" data-stellar-ratio="10.234672862803563"></div><div class="star star10 medium" data-stellar-ratio="8.657869407907128"></div><div class="star star11 small" data-stellar-ratio="8.428488443605602"></div><div class="star star12 medium" data-stellar-ratio="12.261773400008678"></div></div>';
	alphabet['q'] = '<div class="constellation q"><div class="star star1 large" data-stellar-ratio="9.636208130046725"></div><div class="star star2 medium" data-stellar-ratio="10.179117887280881"></div><div class="star star3 medium" data-stellar-ratio="8.029494895134121"></div><div class="star star4 small" data-stellar-ratio="5.30810742941685"></div><div class="star star5 small" data-stellar-ratio="6.652358960127458"></div><div class="star star6 large" data-stellar-ratio="5.421449544141069"></div><div class="star star7 small" data-stellar-ratio="12.18157795094885"></div><div class="star star8 medium" data-stellar-ratio="4.143847906729206"></div><div class="star star9 small" data-stellar-ratio="5.228509333450347"></div><div class="star star10 large" data-stellar-ratio="6.226001121336594"></div><div class="star star11 medium" data-stellar-ratio="8.444828412728384"></div><div class="star star12 small" data-stellar-ratio="6.085993482032791"></div><div class="star star13 large" data-stellar-ratio="5.739205532008782"></div><div class="star star14 medium" data-stellar-ratio="6.908314490690827"></div><div class="star star15 small" data-stellar-ratio="6.227529896656051"></div><div class="star star16 large" data-stellar-ratio="5.125889181625098"></div><div class="star star17 medium" data-stellar-ratio="12.019913309486583"></div><div class="star star18 small" data-stellar-ratio="9.598137967986986"></div></div>';
	alphabet['r'] = '<div class="constellation r"><div class="star star1 medium" data-stellar-ratio="6.593962345505133"></div><div class="star star2 small" data-stellar-ratio="12.451554444152862"></div><div class="star star3 medium" data-stellar-ratio="5.352291531860828"></div><div class="star star4 large" data-stellar-ratio="7.171632936457172"></div><div class="star star5 small" data-stellar-ratio="7.531021793372929"></div><div class="star star6 medium" data-stellar-ratio="5.1760526592843235"></div><div class="star star7 large" data-stellar-ratio="10.730024948250502"></div><div class="star star8 small" data-stellar-ratio="11.929912431398407"></div><div class="star star9 medium" data-stellar-ratio="8.00337009341456"></div><div class="star star10 small" data-stellar-ratio="7.889804619830102"></div><div class="star star11 medium" data-stellar-ratio="7.372031182283536"></div><div class="star star12 small" data-stellar-ratio="8.983780884882435"></div><div class="star star13 small" data-stellar-ratio="9.707181302132085"></div><div class="star star14 large" data-stellar-ratio="11.889790490502492"></div></div>';
	alphabet['s'] = '<div class="constellation s"><div class="star star1 large" data-stellar-ratio="8.325432451674715"></div><div class="star star2 small" data-stellar-ratio="7.722720415797085"></div><div class="star star3 medium" data-stellar-ratio="8.268511238507926"></div><div class="star star4 large" data-stellar-ratio="6.63178511778824"></div><div class="star star5 medium" data-stellar-ratio="5.73578308778815"></div><div class="star star6 large" data-stellar-ratio="9.207016166532412"></div><div class="star star7 small" data-stellar-ratio="8.577987341443077"></div><div class="star star8 large" data-stellar-ratio="6.917583083966747"></div><div class="star star9 small" data-stellar-ratio="11.895052022766322"></div><div class="star star10 medium" data-stellar-ratio="10.430938551668078"></div><div class="star star11 large" data-stellar-ratio="7.317223713267595"></div></div>';
	alphabet['t'] = '<div class="constellation t"><div class="star star1 small" data-stellar-ratio="10.820819577900693"></div><div class="star star2 medium" data-stellar-ratio="6.072205192642286"></div><div class="star star3 large" data-stellar-ratio="10.186591148143634"></div><div class="star star4 small" data-stellar-ratio="8.798634624574333"></div><div class="star star5 medium" data-stellar-ratio="11.801151491468772"></div><div class="star star6 medium" data-stellar-ratio="9.751971317688003"></div><div class="star star7 small" data-stellar-ratio="6.098339224932715"></div><div class="star star8 large" data-stellar-ratio="6.9506814300548285"></div><div class="star star9 small" data-stellar-ratio="5.85479368455708"></div><div class="star star10 large" data-stellar-ratio="8.21358905476518"></div></div>';
	alphabet['u'] = '<div class="constellation u"><div class="star star1 medium" data-stellar-ratio="7.22922841925174"></div><div class="star star2 small" data-stellar-ratio="6.612646743422374"></div><div class="star star3 small" data-stellar-ratio="6.382688291138038"></div><div class="star star4 large" data-stellar-ratio="10.549774976680055"></div><div class="star star5 medium" data-stellar-ratio="5.541647833539173"></div><div class="star star6 large" data-stellar-ratio="10.496568622998893"></div><div class="star star7 small" data-stellar-ratio="8.045611608074978"></div><div class="star star8 medium" data-stellar-ratio="10.153826284455135"></div><div class="star star9 large" data-stellar-ratio="5.4809538188856095"></div><div class="star star10 small" data-stellar-ratio="6.342908503720537"></div><div class="star star11 medium" data-stellar-ratio="5.640882742125541"></div><div class="star star12 large" data-stellar-ratio="8.984172466443852"></div></div>';
	alphabet['v'] = '<div class="constellation v"><div class="star star1 large" data-stellar-ratio="12.836244819685817"></div><div class="star star2 medium" data-stellar-ratio="8.517683965386823"></div><div class="star star3 large" data-stellar-ratio="12.88612352218479"></div><div class="star star4 small" data-stellar-ratio="8.304217747878283"></div><div class="star star5 small" data-stellar-ratio="4.147167435847223"></div><div class="star star6 large" data-stellar-ratio="11.00069327536039"></div><div class="star star7 medium" data-stellar-ratio="12.56736878445372"></div><div class="star star8 small" data-stellar-ratio="6.390142286196351"></div><div class="star star9 medium" data-stellar-ratio="6.2279961064923555"></div><div class="star star10 medium" data-stellar-ratio="10.000191546045244"></div><div class="star star11 large" data-stellar-ratio="12.68412346742116"></div></div>';
	alphabet['w'] = '<div class="constellation w"><div class="star star1 large" data-stellar-ratio="12"></div><div class="star star2 large" data-stellar-ratio="8.888888"></div><div class="star star3 medium"  data-stellar-ratio="7.93672"></div><div class="star star4 medium"  data-stellar-ratio="6.8666"></div><div class="star star5 large"   data-stellar-ratio="12"></div><div class="star star6 medium"  data-stellar-ratio="10"></div><div class="star star7 large"   data-stellar-ratio="6.34"></div><div class="star star8 medium"  data-stellar-ratio="7.64"></div><div class="star star9 small"   data-stellar-ratio="6.9999"></div><div class="star star10 large"  data-stellar-ratio="4.999"></div><div class="star star11 medium" data-stellar-ratio="6.6949"></div><div class="star star12 medium" data-stellar-ratio="8.84"></div><div class="star star13 medium" data-stellar-ratio="11"></div><div class="star star14 medium" data-stellar-ratio="8.92"></div><div class="star star15 small"  data-stellar-ratio="11.4"></div><div class="star star16 medium" data-stellar-ratio="6.56"></div><div class="star star17 small"  data-stellar-ratio="8"></div><div class="star star18 small"  data-stellar-ratio="5"></div><div class="star star19 large"  data-stellar-ratio="9.2"></div><div class="star star20 large"  data-stellar-ratio="10.3"></div></div>';
	alphabet['x'] = '<div class="constellation x"><div class="star star1 medium" data-stellar-ratio="9.022442442597821"></div><div class="star star2 small" data-stellar-ratio="6.966534649487585"></div><div class="star star3 small" data-stellar-ratio="5.370926204137504"></div><div class="star star4 large" data-stellar-ratio="8.903729719808325"></div><div class="star star5 medium" data-stellar-ratio="4.788057024823502"></div><div class="star star6 small" data-stellar-ratio="7.115436328342184"></div><div class="star star7 large" data-stellar-ratio="7.023165903287008"></div><div class="star star8 medium" data-stellar-ratio="10.835956953465939"></div><div class="star star9 small" data-stellar-ratio="9.326408929890022"></div><div class="star star10 medium" data-stellar-ratio="5.780461242655292"></div><div class="star star11 medium" data-stellar-ratio="12.164181822212413"></div><div class="star star12 small" data-stellar-ratio="6.82180070434697"></div><div class="star star13 large" data-stellar-ratio="4.814397471956909"></div></div>';
	alphabet['y'] = '<div class="constellation y"><div class="star star1 large" data-stellar-ratio="6.198783901985735"></div><div class="star star2 small" data-stellar-ratio="11.82150793238543"></div><div class="star star3 medium" data-stellar-ratio="4.302697965875268"></div><div class="star star4 small" data-stellar-ratio="8.638411672553048"></div><div class="star star5 large" data-stellar-ratio="11.692651820136234"></div><div class="star star6 small" data-stellar-ratio="12.505382816772908"></div><div class="star star7 medium" data-stellar-ratio="11.346854902338237"></div><div class="star star8 small" data-stellar-ratio="10.995596730383113"></div><div class="star star9 small" data-stellar-ratio="12.981263359775767"></div><div class="star star10 small" data-stellar-ratio="7.882790423231199"></div><div class="star star11 medium" data-stellar-ratio="6.779858069494367"></div></div>';
	alphabet['z'] = '<div class="constellation z"><div class="star star1 large" data-stellar-ratio="7.4226926770061255"></div><div class="star star2 medium" data-stellar-ratio="4.187475595390424"></div><div class="star star3 small" data-stellar-ratio="4.659259510459378"></div><div class="star star4 large" data-stellar-ratio="4.733259379398078"></div><div class="star star5 medium" data-stellar-ratio="9.948897219728678"></div><div class="star star6 small" data-stellar-ratio="7.020294611109421"></div><div class="star star7 large" data-stellar-ratio="12.928140548523515"></div><div class="star star8 medium" data-stellar-ratio="11.394992626970634"></div><div class="star star9 large" data-stellar-ratio="10.54538047267124"></div><div class="star star10 small" data-stellar-ratio="4.501405238173902"></div><div class="star star11 medium" data-stellar-ratio="5.2880008823703974"></div><div class="star star12 medium" data-stellar-ratio="5.78482491383329"></div></div>';
	alphabet['space'] = '<div class="space"></div>';

	return alphabet[letter];
}


// STELLARR OBJECT
var STELLARJS = {
	init: function() {
		var self = this;

		if (!Modernizr.touch) {

			//initialise Stellar.js
			$('h2 .text').each(function(){
				self.convertLetters(this);
			});
			self.iniParallax();
			self.addWord();
		}

	},
	convertLetters: function(selector) {
		// letters
		var title = $(selector).html().toLowerCase();
		title = title.replace(/ /g,"-");
		title = title.split('');  // Convert string to array. http://stackoverflow.com/questions/8397283/ie7-javascript-and-using-string-as-an-array

		for (var i = 0; i < title.length; i++) {
			if(title[i] == "-")
				$(selector).parent().append(getLetter('space'));
			else
				$(selector).parent().append(getLetter(title[i]));
		}
	},
	addWord: function() {
		var self = this;

		$('form').on('submit', function(e){
			e.preventDefault();
			e.stopPropagation();

			var userValue = $('.field').val();

			// if not empty
			if(userValue != "") {
				if($('.scroll-created').length == 0) {
					// Clone one
					$('section.scroll').first().clone().appendTo('#main').removeClass('scroll1').addClass('scroll-created');
					$('.scroll-created button').html('Try another');
				}
				else {
					// It already exists
				}
				$('.scroll-created .constellation').remove();
				$('.scroll-created .text').html(userValue);
				self.convertLetters('.scroll-created h2 .text');
				$(window).data('plugin_stellar').destroy();
				$(window).data('plugin_stellar').init();
				self.iniParallax();

				// scroll to 3
				$('html,body').animate({
					scrollTop: $('.scroll-created').offset().top - 150
				}, 1200);

				// Give focus to try an other
				$('.scroll-created button').focus();
			}
			else {
				$('.field').val('').focus();
			}
		});

		// user can only type letters
		$('.field').keydown(function(e) {
			var a = [];
			var charCode = e.which;

			if ((charCode >= 65 && charCode <= 90) || charCode == 8 || charCode == 13 || charCode == 32) {
				a.push(charCode);
			}

			if(!(a.indexOf(charCode)>=0)) {
				e.preventDefault();
			}
			// console.log('===  scripts.js [122] ===', charCode);
		});

		// Scroll down
		$('#main').on('click', '.scroll-button button', function(e){
			e.stopPropagation();
			e.preventDefault();
			$('html,body').animate({
				scrollTop: $('.scroll2').offset().top - 150
			}, 1200, function(){
				$('.field').val('').focus();
			});
		});
	},
	iniParallax: function() {
		var self = this;

		$(window).stellar({
			verticalOffset: 150,
			horizontalScrolling: false,
			responsive: true,
			positionProperty: 'transform'
		});

		// $('html, body').animate({ scrollTop: 120 }, 500);
		self.$sections = $('section.scroll').each(function(index){
			$(this).data('sectionIndex', index);
		});

		self.handleEvents();
	},
	handleEvents: function() {
		var self = this,
			//Debounce function from Underscore.js
			debounce = function(func, wait) {
				var timeout;
				return function() {
					var context = this, args = arguments;
					var later = function() {
						timeout = null;
						func.apply(context, args);
					};
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
				}
			},
			handleScroll = function() {
				var scrollTop = $(window).scrollTop(),
					sectionIndex = Math.round((scrollTop -150) / self.$sections.first().outerHeight()),
					$activeSection = self.$sections.eq(sectionIndex);
				
				if ($activeSection.length === 0) {
					$activeSection = self.$sections.last();
				}
				
				if ($activeSection.length === 0) return;
				
				$(window).unbind('scroll.stellarsite');

				if (scrollTop === 0) {
					$(window).unbind('scroll.stellarsite').bind('scroll.stellarsite', debounce(handleScroll, 500));
					// $('html,body').animate({ scrollTop: 10 }, 10);
				} else {

					if($activeSection.hasClass('scroll1')){
						$('#main').removeClass('bg bg2');
					}
					if($activeSection.hasClass('scroll2')){
						$('#main').addClass('bg');
						$('#main').removeClass('bg2');
					}
					if($activeSection.hasClass('scroll-created')){
						$('#main').addClass('bg2');
					}
					$('html,body').animate({
						scrollTop: $activeSection.offset().top - 150
					}, 600, 'easeInOutExpo', function() {
						setTimeout(function(){
							$(window).unbind('scroll.stellarsite').bind('scroll.stellarsite', debounce(handleScroll, 500));
						}, 10);
					});
				}
				
				$(window).bind('mousewheel', function(){
					$('html,body').stop(true, true);
				});
				
				$(document).bind('keydown', function(e){
					var key = e.which;
					
					if (key === 37 || key === 39) {
						$('html,body').stop(true, true);
					}
				});
			};
		
		if (window.location.href.indexOf('#show-offset-parents-default') === -1) {
			$(window).bind('scroll.stellarsite', debounce(handleScroll, 500));
		}
	}
}        

jQuery(document).ready(function ($) {
	STELLARJS.init();
});



/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});
