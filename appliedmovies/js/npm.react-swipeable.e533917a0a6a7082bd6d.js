(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{148:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(0),r=n.n(o),a=n(1),c=n.n(a);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var u={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},s={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},p="mousemove",l="mouseup";function f(t,e){if(0===e)return t;var n=Math.PI/180*e;return[t[0]*Math.cos(n)+t[1]*Math.sin(n),t[1]*Math.cos(n)-t[0]*Math.sin(n)]}function v(t,e){var n=function(e){e.touches&&e.touches.length>1||t((function(t,n){n.trackMouse&&(document.addEventListener(p,o),document.addEventListener(l,c));var r=e.touches?e.touches[0]:e,a=f([r.clientX,r.clientY],n.rotationAngle);return i({},t,s,{eventData:{initial:[].concat(a),first:!0},xy:a,start:e.timeStamp||0})}))},o=function(e){t((function(t,n){if(!t.xy[0]||!t.xy[1]||e.touches&&e.touches.length>1)return t;var o=e.touches?e.touches[0]:e,r=f([o.clientX,o.clientY],n.rotationAngle),a=r[0],c=r[1],u=t.xy[0]-a,s=t.xy[1]-c,p=Math.abs(u),l=Math.abs(s),v=(e.timeStamp||0)-t.start,h=Math.sqrt(p*p+l*l)/(v||1);if(p<n.delta&&l<n.delta&&!t.swiping)return t;var d=function(t,e,n,o){return t>e?n>0?"Left":"Right":o>0?"Up":"Down"}(p,l,u,s),w=i({},t.eventData,{event:e,absX:p,absY:l,deltaX:u,deltaY:s,velocity:h,dir:d});n.onSwiping&&n.onSwiping(w);var m=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+d])&&(m=!0),m&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&e.cancelable&&e.preventDefault(),i({},t,{eventData:i({},w,{first:!1}),swiping:!0})}))},r=function(e){t((function(t,n){var o;return t.swiping&&(o=i({},t.eventData,{event:e}),n.onSwiped&&n.onSwiped(o),n["onSwiped"+o.dir]&&n["onSwiped"+o.dir](o)),i({},t,s,{eventData:o})}))},a=function(){document.removeEventListener(p,o),document.removeEventListener(l,c)},c=function(t){a(),r(t)},u=function(t){if(t&&t.addEventListener){var e=[["touchstart",n],["touchmove",o],["touchend",r]];return e.forEach((function(e){var n=e[0],o=e[1];return t.addEventListener(n,o)})),function(){return e.forEach((function(e){var n=e[0],o=e[1];return t.removeEventListener(n,o)}))}}},v={ref:function(e){null!==e&&t((function(t,n){if(t.el===e)return t;var o={};return t.el&&t.el!==e&&t.cleanUpTouch&&(t.cleanUpTouch(),o.cleanUpTouch=null),n.trackTouch&&e&&(o.cleanUpTouch=u(e)),i({},t,{el:e},o)}))}};return e.trackMouse&&(v.onMouseDown=n),[v,u]}function h(t,e,n){var o={};return!e.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),o.cleanUpTouch=null):e.trackTouch&&!t.cleanUpTouch&&t.el&&(o.cleanUpTouch=n(t.el)),i({},t,o)}var d=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this)._set=function(t){n.transientState=t(n.transientState,n.props)},n.transientState=i({},s,{type:"class"}),n}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.render=function(){var t=this.props,e=t.className,n=t.style,o=t.nodeName,a=void 0===o?"div":o,c=t.innerRef,u=t.children,s=t.trackMouse,p=v(this._set,{trackMouse:s}),l=p[0],f=p[1];this.transientState=h(this.transientState,this.props,f);var d=c?function(t){return c(t),l.ref(t)}:l.ref;return r.a.createElement(a,i({},l,{className:e,style:n,ref:d}),u)},o}(r.a.PureComponent);d.propTypes={onSwiped:c.a.func,onSwiping:c.a.func,onSwipedUp:c.a.func,onSwipedRight:c.a.func,onSwipedDown:c.a.func,onSwipedLeft:c.a.func,delta:c.a.number,preventDefaultTouchmoveEvent:c.a.bool,nodeName:c.a.string,trackMouse:c.a.bool,trackTouch:c.a.bool,innerRef:c.a.func,rotationAngle:c.a.number},d.defaultProps=u}}]);