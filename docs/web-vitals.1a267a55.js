parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"f6pS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTTFB=exports.getLCP=exports.getFID=exports.getFCP=exports.getCLS=void 0;var e,t,n,i,r=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},a=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver(function(e){return e.getEntries().map(t)});return n.observe({type:e,buffered:!0}),n}}catch(e){}},o=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},c=function(e){addEventListener("pageshow",function(t){t.persisted&&e(t)},!0)},u="function"==typeof WeakSet?new WeakSet:new Set,s=function(e,t,n){var i;return function(){t.value>=0&&(n||u.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},f=function(e,t){var n,i=r("CLS",0),u=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n())},f=a("layout-shift",u);f&&(n=s(e,i,t),o(function(){f.takeRecords().map(u),n()}),c(function(){i=r("CLS",0),n=s(e,i,t)}))},p=-1,m=function(){return"hidden"===document.visibilityState?0:1/0},v=function(){o(function(e){var t=e.timeStamp;p=t},!0)},d=function(){return p<0&&(p=m(),v(),c(function(){setTimeout(function(){p=m(),v()},0)})),{get timeStamp(){return p}}},l=function(e,t){var n,i=d(),o=r("FCP"),f=function(e){"first-contentful-paint"===e.name&&(m&&m.disconnect(),e.startTime<i.timeStamp&&(o.value=e.startTime,o.entries.push(e),u.add(o),n()))},p=performance.getEntriesByName("first-contentful-paint")[0],m=p?null:a("paint",f);(p||m)&&(n=s(e,o,t),p&&f(p),c(function(i){o=r("FCP"),n=s(e,o,t),requestAnimationFrame(function(){requestAnimationFrame(function(){o.value=performance.now()-i.timeStamp,u.add(o),n()})})}))},g={passive:!0,capture:!0},h=new Date,S=function(i,r){e||(e=r,t=i,n=new Date,L(removeEventListener),y())},y=function(){if(t>=0&&t<n-h){var r={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+t};i.forEach(function(e){e(r)}),i=[]}},E=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){S(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,g),removeEventListener("pointercancel",i,g)};addEventListener("pointerup",n,g),addEventListener("pointercancel",i,g)}(t,e):S(t,e)}},L=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,E,g)})},T=function(n,f){var p,m=d(),v=r("FID"),l=function(e){e.startTime<m.timeStamp&&(v.value=e.processingStart-e.startTime,v.entries.push(e),u.add(v),p())},g=a("first-input",l);p=s(n,v,f),g&&o(function(){g.takeRecords().map(l),g.disconnect()},!0),g&&c(function(){var a;v=r("FID"),p=s(n,v,f),i=[],t=-1,e=null,L(addEventListener),a=l,i.push(a),y()})},w=function(e,t){var n,i=d(),f=r("LCP"),p=function(e){var t=e.startTime;t<i.timeStamp&&(f.value=t,f.entries.push(e)),n()},m=a("largest-contentful-paint",p);if(m){n=s(e,f,t);var v=function(){u.has(f)||(m.takeRecords().map(p),m.disconnect(),u.add(f),n())};["keydown","click"].forEach(function(e){addEventListener(e,v,{once:!0,capture:!0})}),o(v,!0),c(function(i){f=r("LCP"),n=s(e,f,t),requestAnimationFrame(function(){requestAnimationFrame(function(){f.value=performance.now()-i.timeStamp,u.add(f),n()})})})}},F=function(e){var t,n=r("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)};exports.getTTFB=F,exports.getLCP=w,exports.getFID=T,exports.getFCP=l,exports.getCLS=f;
},{}]},{},["f6pS"], null)