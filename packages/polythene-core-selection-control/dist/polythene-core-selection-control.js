!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).polythene={},e["polythene-core"])}(this,(function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var o,r,l=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(l.push(o.value),!t||l.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var c={component:"pe-control",formLabel:"pe-control__form-label",input:"pe-control__input",label:"pe-control__label",disabled:"pe-control--disabled",inactive:"pe-control--inactive",large:"pe-control--large",medium:"pe-control--medium",off:"pe-control--off",on:"pe-control--on",regular:"pe-control--regular",small:"pe-control--small",box:"pe-control__box",button:"pe-control__button",buttonOff:"pe-control__button--off",buttonOn:"pe-control__button--on"},i=[{iconType:"iconOn",className:c.buttonOn},{iconType:"iconOff",className:c.buttonOff}];e._SelectionControl=function(e){var a=e.h,i=e.a,u=e.useState,s=e.useEffect,f=e.ViewControl,d=r(e,["h","a","useState","useEffect","ViewControl"]);delete d.key;var p=l(u(void 0!==d.defaultChecked?d.defaultChecked:d.checked||!1),2),b=p[0],y=p[1],v=l(u(d.selectable),2),m=v[0],h=v[1],g=void 0!==d.checked?d.checked:b,O=d.disabled||!m;s((function(){var e=void 0!==d.selectable&&d.selectable(g);e!==m&&h(e)}),[d.selectable,g]);var k=function(e,t){d.onChange&&d.onChange({event:e,checked:t,value:d.value})},_=d.events&&d.events[i.onclick],w=d.events&&d.events[i.onkeydown]?d.events[i.onkeydown]:function(e){"Enter"!==e.key&&32!==e.keyCode||(e.preventDefault(),_?_(e):function(e){var t=!g;y(t),k(e,t)}(e))},j=o({},t.filterSupportedAttributes(d,{remove:["style"]}),d.testId&&{"data-test-id":d.testId},{className:[c.component,d.instanceClass,g?c.on:c.off,d.disabled?c.disabled:null,O?c.inactive:null,t.classForSize(c,d.size),"dark"===d.tone?"pe-dark-tone":null,"light"===d.tone?"pe-light-tone":null,d.className||d[i.class]].join(" ")}),S=t.createUid(),C=a("label",o({},{className:c.formLabel},_&&n({},i.onclick,(function(e){return e.preventDefault(),_(e)}))),[d.before,a(f,o({},d,{inactive:O,checked:g,events:n({},i.onkeydown,w)},d.label?{aria:{"aria-labelledby":S}}:void 0)),d.label?a(".".concat(c.label),{id:S},d.label):null,a("input",o({},d.events,{name:d.name,type:d.type,value:d.value,checked:g},d.disabled||O?n({},i.readonly,"readonly"):n({},i.onchange,(function(e){var t=e.currentTarget.checked;"radio"===d.type||y(t),k(e,t)})))),d.after]);return a(d.element||"div",j,C)},e._ViewControl=function(e){var t=e.h,n=e.Icon,l=e.IconButton,a=r(e,["h","Icon","IconButton"]),u=a.element||".".concat(c.box),s=t(l,o({},{element:"div",className:c.button,style:a.style,content:i.map((function(e){return t(n,function(e,t,n,r){return o({},{className:r},n[t]?n[t]:{svg:{content:e.trust(n.icons[t])}},n.icon,n.size?{size:n.size}:null)}(t,e.iconType,a,e.className))})),ripple:{center:!0},disabled:a.disabled,events:a.events,inactive:a.inactive},a.iconButton));return t(u,null,s)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-core-selection-control.js.map
