!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-core"),require("polythene-css")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-css"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-core"],e["polythene-css"])}(this,function(e,t,r,n){"use strict";t="default"in t?t.default:t;var o={color_light:"currentcolor",color_dark:"currentcolor"},l=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e,t,r,n){var o=r["color_"+n]||"currentcolor";return[l({},e+t,{color:"inherit"," svg":{color:"inherit"," path, rect, circle, polygon":{"&:not([fill=none])":{fill:o}}}})]},s=function(e,t){return[i("",e,t,"light"),i(".pe-dark-theme ",e,t,"dark")]},u=[s],a=".pe-svg",f=function(e,t){return n.styler.generateStyles([e,a],c({},o,t),u)};n.styler.generateStyles([a],o,u);var p={component:"pe-svg"},h=function(e){var n=e.attrs,o=n.element||"div",l=c({},r.filterSupportedAttributes(n),{class:[p.component,n.class].join(" ")}),i=n.content?n.content:n.children||e.children;return t(o,l,[n.before,i,n.after])},y={theme:f,view:h};e.svg=y,e.classes=p,e.vars=o,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-svg.js.map
