!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function n(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var a={component:"pe-shadow",bottomShadow:"pe-shadow__bottom",topShadow:"pe-shadow__top",animated:"pe-shadow--animated",depth_n:"pe-shadow--depth-",with_active_shadow:"pe-with-active-shadow"},r=function(e){return void 0!==e?"".concat(a.depth_n).concat(Math.min(5,e)):1};e._Shadow=function(e){var i=e.h,d=e.a,p=n(e,["h","a"]),s=r(p.shadowDepth),c=o({},t.filterSupportedAttributes(p),p.testId&&{"data-test-id":p.testId},{className:[a.component,s,p.animated&&a.animated,p.className||p[d.class]].join(" ")}),h=[p.before,p.content?p.content:p.children,p.after];return i(p.element||"div",c,[h,i("div",{className:[a.bottomShadow].join(" ")}),i("div",{className:[a.topShadow].join(" ")})])},e.getDepthClass=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-shadow.js.map
