var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(e){"use strict";var t=e.GreenSockGlobals||e,i=function(e){var i,n=e.split("."),s=t;for(i=0;i<n.length;i++)s[n[i]]=s=s[n[i]]||{};return s},n=i("com.greensock.utils"),s=function(e){var t=e.nodeType,i="";if(1===t||9===t||11===t){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)i+=s(e)}else if(3===t||4===t)return e.nodeValue;return i},r=document,l=r.defaultView?r.defaultView.getComputedStyle:function(){},o=/([A-Z])/g,d=function(e,t,i,n){var s;return(i=i||l(e,null))?(e=i.getPropertyValue(t.replace(o,"-$1").toLowerCase()),s=e||i.length?e:i[t]):e.currentStyle&&(i=e.currentStyle,s=i[t]),n?s:parseInt(s,10)||0},h=function(e){return e.length&&e[0]&&(e[0].nodeType&&e[0].style&&!e.nodeType||e[0].length&&e[0][0])?!0:!1},p=function(e){var t,i,n,s=[],r=e.length;for(t=0;r>t;t++)if(i=e[t],h(i))for(n=i.length,n=0;n<i.length;n++)s.push(i[n]);else s.push(i);return s},a=")eefec303079ad17405c",f=/(?:<br>|<br\/>|<br \/>)/gi,u=r.all&&!r.addEventListener,c="<div style='position:relative;display:inline-block;"+(u?"*display:inline;*zoom:1;'":"'"),g=function(e){e=e||"";var t=-1!==e.indexOf("++"),i=1;return t&&(e=e.split("++").join("")),function(){return c+(e?" class='"+e+(t?i++:"")+"'>":">")}},y=n.SplitText=t.SplitText=function(e,t){if("string"==typeof e&&(e=y.selector(e)),!e)throw"cannot split a null element.";this.elements=h(e)?p(e):[e],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=t||{},this.split(t)},x=function(e,t,i){var n=e.nodeType;if(1===n||9===n||11===n)for(e=e.firstChild;e;e=e.nextSibling)x(e,t,i);else(3===n||4===n)&&(e.nodeValue=e.nodeValue.split(t).join(i))},m=function(e,t){for(var i=t.length;--i>-1;)e.push(t[i])},v=function(e,t,i,n,o){f.test(e.innerHTML)&&(e.innerHTML=e.innerHTML.replace(f,a));var h,p,u,c,y,v,T,b,_,w,C,S,L,H,N=s(e),B=t.type||t.split||"chars,words,lines",A=-1!==B.indexOf("lines")?[]:null,M=-1!==B.indexOf("words"),W=-1!==B.indexOf("chars"),R="absolute"===t.position||t.absolute===!0,j=R?"&#173; ":" ",E=-999,k=l(e),O=d(e,"paddingLeft",k),V=d(e,"borderBottomWidth",k)+d(e,"borderTopWidth",k),G=d(e,"borderLeftWidth",k)+d(e,"borderRightWidth",k),$=d(e,"paddingTop",k)+d(e,"paddingBottom",k),q=d(e,"paddingLeft",k)+d(e,"paddingRight",k),I=d(e,"textAlign",k,!0),P=e.clientHeight,Q=e.clientWidth,z="</div>",Z=g(t.wordsClass),D=g(t.charsClass),F=-1!==(t.linesClass||"").indexOf("++"),J=t.linesClass,K=-1!==N.indexOf("<"),U=!0,X=[],Y=[],ee=[];for(F&&(J=J.split("++").join("")),K&&(N=N.split("<").join("{{LT}}")),h=N.length,c=Z(),y=0;h>y;y++)if(T=N.charAt(y),")"===T&&N.substr(y,20)===a)c+=(U?z:"")+"<BR/>",U=!1,y!==h-20&&N.substr(y+20,20)!==a&&(c+=" "+Z(),U=!0),y+=19;else if(" "===T&&" "!==N.charAt(y-1)&&y!==h-1&&N.substr(y-20,20)!==a){for(c+=U?z:"",U=!1;" "===N.charAt(y+1);)c+=j,y++;(")"!==N.charAt(y+1)||N.substr(y+1,20)!==a)&&(c+=j+Z(),U=!0)}else"{"===T&&"{{LT}}"===N.substr(y,6)?(c+=W?D()+"{{LT}}</div>":"{{LT}}",y+=5):c+=W&&" "!==T?D()+T+"</div>":T;for(e.innerHTML=c+(U?z:""),K&&x(e,"{{LT}}","<"),v=e.getElementsByTagName("*"),h=v.length,b=[],y=0;h>y;y++)b[y]=v[y];if(A||R)for(y=0;h>y;y++)_=b[y],u=_.parentNode===e,(u||R||W&&!M)&&(w=_.offsetTop,A&&u&&w!==E&&"BR"!==_.nodeName&&(p=[],A.push(p),E=w),R&&(_._x=_.offsetLeft,_._y=w,_._w=_.offsetWidth,_._h=_.offsetHeight),A&&(M!==u&&W||(p.push(_),_._x-=O),u&&y&&(b[y-1]._wordEnd=!0),"BR"===_.nodeName&&_.nextSibling&&"BR"===_.nextSibling.nodeName&&A.push([])));for(y=0;h>y;y++)_=b[y],u=_.parentNode===e,"BR"!==_.nodeName?(R&&(S=_.style,M||u||(_._x+=_.parentNode._x,_._y+=_.parentNode._y),S.left=_._x+"px",S.top=_._y+"px",S.position="absolute",S.display="block",S.width=_._w+1+"px",S.height=_._h+"px"),M?u&&""!==_.innerHTML?Y.push(_):W&&X.push(_):u?(e.removeChild(_),b.splice(y--,1),h--):!u&&W&&(w=!A&&!R&&_.nextSibling,e.appendChild(_),w||e.appendChild(r.createTextNode(" ")),X.push(_))):A||R?(e.removeChild(_),b.splice(y--,1),h--):M||e.appendChild(_);if(A){for(R&&(C=r.createElement("div"),e.appendChild(C),L=C.offsetWidth+"px",w=C.offsetParent===e?0:e.offsetLeft,e.removeChild(C)),S=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(H=!R||!M&&!W,y=0;y<A.length;y++){for(p=A[y],C=r.createElement("div"),C.style.cssText="display:block;text-align:"+I+";position:"+(R?"absolute;":"relative;"),J&&(C.className=J+(F?y+1:"")),ee.push(C),h=p.length,v=0;h>v;v++)"BR"!==p[v].nodeName&&(_=p[v],C.appendChild(_),H&&(_._wordEnd||M)&&C.appendChild(r.createTextNode(" ")),R&&(0===v&&(C.style.top=_._y+"px",C.style.left=O+w+"px"),_.style.top="0px",w&&(_.style.left=_._x-w+"px")));0===h&&(C.innerHTML="&nbsp;"),M||W||(C.innerHTML=s(C).split(String.fromCharCode(160)).join(" ")),R&&(C.style.width=L,C.style.height=_._h+"px"),e.appendChild(C)}e.style.cssText=S}R&&(P>e.clientHeight&&(e.style.height=P-$+"px",e.clientHeight<P&&(e.style.height=P+V+"px")),Q>e.clientWidth&&(e.style.width=Q-q+"px",e.clientWidth<Q&&(e.style.width=Q+G+"px"))),m(i,X),m(n,Y),m(o,ee)},T=y.prototype;T.split=function(e){this.isSplit&&this.revert(),this.vars=e||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var t=this.elements.length;--t>-1;)this._originals[t]=this.elements[t].innerHTML,v(this.elements[t],this.vars,this.chars,this.words,this.lines);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},T.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var e=this._originals.length;--e>-1;)this.elements[e].innerHTML=this._originals[e];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},y.selector=e.$||e.jQuery||function(t){var i=e.$||e.jQuery;return i?(y.selector=i,i(t)):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)},y.version="0.3.4"}(_gsScope),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};"function"==typeof define&&define.amd?define(["TweenLite"],t):"undefined"!=typeof module&&module.exports&&(module.exports=t())}("SplitText");

// FastClick
!function(){"use strict";function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=a.length;u>s;s++)c[a[s]]=i(c[a[s]],c);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c,s,u,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=t.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),c=l.tagName.toLowerCase(),"label"===c){if(e=this.findControl(l)){if(this.focus(l),n)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-a>100||o&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),o&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(s=l.fastClickScrollParent,s&&s.fastClickLastScrollTop!==s.scrollTop)?!0:(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}();


// Site js object
var Site;

(function ($) {
  'use strict'; 
  
  Site = {
	/**
	 * Crazy words using split text greensock
	 *
	 */
	init: function (elt) {
		this.animateTitle();
        this.animateWords();
        this.touchPlay();
        this.explode();

        // mobile device click
        FastClick.attach(document.body);
	},
    shuffle: function(array){
        var currentIndex = array.length
        var temporaryValue;
        var randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    },
    animateTitle: function(){
        // header 
        var hTween = TweenMax;
        $('header h1').each(function(i, obj){
            var splitText = new SplitText($(obj), {type:"chars"});
            $(splitText.chars).each(function(ii, character){
                $(character).bind('mouseover', function(event){
                    event.stopPropagation();
                    function Tween(){
                        hTween = TweenMax.to(character, 0.05, {x:R(-12, 12), y:R(-12, 12), scale:R(1.2, 0.7), rotation:R(-12, 12), opacity: .2, color: 'red', ease:Linear.easeNone, onComplete:Tween});
                    };
                    Tween();
                    function R(max,min){return Math.random()*(max-min)+min};
                }).bind('mouseleave', function(event){
                    // reset to normal
                    event.stopPropagation();
                    hTween = TweenMax.to(splitText.chars, 0, {x:0, y:0, scale:1, rotation:0, opacity: 1, color: 'black', ease:Linear.easeNone, overwrite: true});
                    hTween.kill();

                });
            });
        });
    },
	animateWords: function(){
        var thisObject = this;
        
		$('.word span').each(function(i, obj){

            // define vars
            var splitText = new SplitText($(obj), {type:"chars"});
            var tl;
            var _chars;

            $(obj).bind('mouseenter', function(event){

                switch ( $(obj).data('anim') ){
                    case "anim-fade":
                        _chars = [];
                        _chars = thisObject.shuffle(splitText.chars);
                        tl = new TimelineMax({repeat:-1, repeatDelay:0});
                        tl.staggerTo(_chars, 0.1, {opacity: 0, ease:Linear.easeNone, repeat:1, yoyo:true}, 0.1);
                        break;
                    case "anim-jump":
                        // $(obj).css('opacity', .8);
                        tl = new TimelineMax({repeat:-1, repeatDelay:0});
                        tl.staggerTo(splitText.chars, 0.1, {y:-20, color:'teal', ease:Linear.easeNone, repeat:1, yoyo:true}, 0.1);
                        break;
                    case "anim-twist":
                        tl = new TimelineMax({repeat:-1, repeatDelay:0});
                        tl.staggerTo(splitText.chars, 0.2, {rotationZ:-360, ease:Linear.easeNone, repeat:0, yoyo:false}, 0.1);
                        break;
                    case "anim-flip":
                        // _chars = [];
                        // _chars = thisObject.shuffle(splitText.chars);
                        tl = new TimelineMax({repeat:-1, repeatDelay:0});
                        tl.staggerTo(splitText.chars, 0.7, {rotationY:-180, opacity: .6, color:'red', ease:Linear.easeNone, repeat:1, yoyo:true}, 0.1);
                        break;
                    case "anim-up":
                        _chars = [];
                        _chars = thisObject.shuffle(splitText.chars);
                        var half_length = Math.ceil(_chars.length / 2);
                        var split = _chars.slice(0, half_length);
                        tl = new TimelineMax({repeat:-1, repeatDelay:0});
                        tl.staggerTo(split, 0.2, {y:-20, ease:Linear.easeNone, repeat:-1, repeatDelay:2, yoyo:true}, 0);
                        break;
                    case "anim-bounce":
                        _chars = [];
                        _chars = thisObject.shuffle(splitText.chars);
                        tl = new TimelineMax({repeat:-1, repeatDelay:0});
                        tl.staggerTo(_chars, 0.1, {marginLeft:20, marginRight:20, ease:Linear.easeNone, repeat:1, yoyo:true}, 0.1);
                        break;
                    case "anim-immobile":
                        tl = new TimelineMax({repeat:-1, repeatDelay:0});
                        tl.staggerTo(splitText.chars, 0.1, {color: 'lime', ease:Linear.easeNone, repeat:1, yoyo:true}, 0.1);
                        break;
                    default:
                        console.log('=== niente nada nichts rien nothing ===');
                        break;
                }

                // tl.restart();
            }).bind('mouseleave', function(event){
                _chars = [];
                tl.seek(0);
                tl.stop();
            });

            if($(obj).hasClass('play')){
                $(obj).trigger('mouseenter');
            }
        });
	},
    touchPlay: function(){
        //mobile check - action on click
        if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
            $('.word span').bind('click', function(event){
                $(this).toggleClass('is-playing');
                if($(this).hasClass('is-playing'))
                {
                    $(this).trigger('mouseleave');
                }
                else {
                    $(this).trigger('mouseenter');
                }
            });
        } 
    },
    explode: function(){
        var thisObject = this;
        var splitTextAll;
        $('.reset').hide();

        // animate explosion
        $('.explode').on('click', function(event){
            splitTextAll = new SplitText($('.word span, h1'), {type:"chars"});
            $(splitTextAll.chars).each(function(i, character){
                var time = R(0.5, 2);
                TweenMax.to(character, time, {x:R(10, 500), y:R(10, 100), rotation:R(-100, 100), ease: Elastic.easeOut.config(1, 0.5)});
                function R(max,min){return Math.random()*(max-min)+min};
            });
            // update button
            $(this).hide();
            $('.reset').show();
        });

        //clear explosion
        $('.reset').bind('click', function(event){
            $(splitTextAll.chars).each(function(i, character){
                var time = R(0.2, 0.5);
                TweenMax.to(character, time, {x:0, y:0, rotation:0});
                function R(max,min){return Math.random()*(max-min)+min};
            });
            // update button
            $('.reset').hide();
            $('.explode').show();
            // reinit rollover
            setTimeout(function(){
                thisObject.animateTitle();
                thisObject.animateWords();
            }, 850);


        });
    }
  };

  // call init function
  window.onload = function(){ Site.init(); }

})(jQuery);

