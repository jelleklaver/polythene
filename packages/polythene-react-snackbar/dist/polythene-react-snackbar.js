!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("cyano-react"),require("polythene-core"),require("polythene-core-snackbar")):"function"==typeof define&&define.amd?define(["exports","cyano-react","polythene-core","polythene-core-snackbar"],t):t((e=e||self).polythene={},e["cyano-react"],e["polythene-core"],e["polythene-core-snackbar"])}(this,(function(e,t,n,o){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{component:"pe-notification",action:"pe-notification__action",content:"pe-notification__content",holder:"pe-notification__holder",placeholder:"pe-notification__placeholder",title:"pe-notification__title",hasContainer:"pe-notification--container",horizontal:"pe-notification--horizontal",multilineTitle:"pe-notification__title--multi-line",vertical:"pe-notification--vertical",visible:"pe-notification--visible"},{component:"pe-notification pe-snackbar",holder:"pe-snackbar__holder",placeholder:"pe-snackbar__placeholder",open:"pe-snackbar--open"}),i=t.cast(o._Snackbar,{h:t.h,a:t.a,useState:t.useState,useEffect:t.useEffect,useRef:t.useRef,getRef:t.getRef,useReducer:t.useReducer});i.displayName="SnackbarInstance";var l={name:"snackbar",className:c.component,htmlShowClass:c.open,defaultId:"default_snackbar",holderSelector:".".concat(c.holder),instance:i,placeholder:"span.".concat(c.placeholder),queue:!0,transitions:o.transitions},p=n.Multi({options:l}),s=t.cast(p.render,{h:t.h,useState:t.useState,useEffect:t.useEffect});Object.getOwnPropertyNames(p).filter((function(e){return"render"!==e})).forEach((function(e){return s[e]=p[e]})),s.displayName="Snackbar",e.Snackbar=s,e.SnackbarInstance=i,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-react-snackbar.js.map
