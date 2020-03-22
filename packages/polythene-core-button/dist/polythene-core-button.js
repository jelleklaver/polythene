!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-shadow"],t):t((e=e||self).polythene={},e["polythene-core"],e["polythene-core-shadow"])}(this,(function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,l=e}finally{try{o||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s={component:"pe-text-button",super:"pe-button",row:"pe-button-row",content:"pe-button__content",label:"pe-button__label",textLabel:"pe-button__text-label",wash:"pe-button__wash",washColor:"pe-button__wash-color",dropdown:"pe-button__dropdown",border:"pe-button--border",contained:"pe-button--contained",disabled:"pe-button--disabled",dropdownClosed:"pe-button--dropdown-closed",dropdownOpen:"pe-button--dropdown-open",extraWide:"pe-button--extra-wide",hasDropdown:"pe-button--dropdown",highLabel:"pe-button--high-label",inactive:"pe-button--inactive",raised:"pe-button--raised",selected:"pe-button--selected",separatorAtStart:"pe-button--separator-start",hasHover:"pe-button--has-hover"},d="pe-with-active-shadow";e._Button=function(e){var c,p=e.h,b=e.a,f=e.getRef,y=e.useState,h=(e.useEffect,e.useRef,e.Ripple),v=e.Shadow,w=e.Icon,m=i(e,["h","a","getRef","useState","useEffect","useRef","Ripple","Shadow","Icon"]),O=m.events||{},g=u(y(),2),j=g[0],S=g[1],x=u(y(m.inactive),2),_=x[0],k=x[1],E=m.disabled,P=m.inactive||_,D=O[b.onclick]||function(){},N=O[b.onkeyup]||D,L=m.raised?void 0!==m.shadowDepth?m.shadowDepth:1:0,R=!1!==m.animateOnTap,C=!E&&!m.selected&&(m.raised?m.wash:!1!==m.wash),A=function e(t){j.blur(),j.removeEventListener("mouseleave",e)},I=l({},t.filterSupportedAttributes(m,{add:[b.formaction,"type"],remove:["style"]}),f((function(e){e&&!j&&(S(e),m.getRef&&m.getRef(e))})),m.testId&&{"data-test-id":m.testId},{className:[s.super,m.parentClassName||s.component,m.contained?s.contained:null,m.raised?s.contained:null,m.raised?s.raised:null,m.raised&&R?d:null,m.raised&&R?n.getDepthClass(L+1):null,C?s.hasHover:null,m.selected?s.selected:null,m.highLabel?s.highLabel:null,m.extraWide?s.extraWide:null,E?s.disabled:null,P?s.inactive:null,m.separatorAtStart?s.separatorAtStart:null,m.border||m.borders?s.border:null,m.dropdown?s.hasDropdown:null,m.dropdown?m.dropdown.open?s.dropdownOpen:s.dropdownClosed:null,"dark"===m.tone?"pe-dark-tone":null,"light"===m.tone?"pe-light-tone":null,m.className||m[b.class]].join(" ")},P?null:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(r({},b.tabindex,E||P?-1:m[b.tabindex]||0),O,(r(c={},b.onmousedown,(function(e){return j&&j.addEventListener&&j.addEventListener("mouseleave",A),m.events&&m.events[b.onmousedown]&&m.events[b.onmousedown](e)})),r(c,b.onclick,(function(e){return document.activeElement===j&&document.activeElement.blur(),void 0!==m.inactivate&&(k(!0),setTimeout((function(){return k(!1)}),1e3*m.inactivate)),D(e)})),r(c,b.onkeyup,(function(e){13===e.keyCode&&document.activeElement===j&&(document.activeElement.blur(),N&&N(e)),m.events&&m.events[b.onkeyup]&&m.events[b.onkeyup](e)})),c)),m.url,E?{disabled:!0}:null),T=void 0!==m.ink&&!1===m.ink,W=m.content?m.content:void 0!==m.label?"object"===o(m.label)?m.label:p("div",{className:s.label},p("div",{className:s.textLabel,style:m.textStyle},m.label)):m.children,q=p("div",{className:s.content,style:m.style},[p(v,{shadowDepth:void 0!==L?L:0,animated:!0}),E||T?null:p(h,l({},{target:j},m.ripple)),p("div",{className:s.wash},p("div",{className:s.washColor})),W,m.dropdown?p(w,{className:s.dropdown,svg:{content:p.trust(t.iconDropdownDown)}}):null]);return p(m.element||"a",I,[m.before,q,m.after])},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-core-button.js.map
