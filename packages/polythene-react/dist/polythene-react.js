!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react-hyperscript"),require("react"),require("polythene-new-core")):"function"==typeof define&&define.amd?define(["exports","react-hyperscript","react","polythene-new-core"],t):t(e.polythene=e.polythene||{},e["react-hyperscript"],e.react,e["polythene-new-core"])}(this,function(e,t,r,n){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t="default"in t?t.default:t;var p={class:"className",formaction:"formAction",onblur:"onBlur",onclick:"onClick",onfocus:"onFocus",onkeydown:"onKeyDown",onkeyup:"onKeyUp",onmousedown:"onMouseDown",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",tabindex:"tabIndex"},f=t;f.trust=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div";return null==e&&(e=""),t(r,{dangerouslySetInnerHTML:{__html:e}})};var h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=function(e){var t=e.createContent,n=e.createProps,c=e.element,s=e.onMount,l=void 0===s?function(){}:s,v=e.onUnmount,b=void 0===v?function(){}:v,d=e.state,m=void 0===d?{}:d;return function(e){function r(e){a(this,r);var t=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state=h({},m),t}return u(r,e),y(r,[{key:"componentDidMount",value:function(){l(this.createVirtualNode())}},{key:"componentWillUnmount",value:function(){b(this.createVirtualNode())}},{key:"createVirtualNode",value:function(){var e=h({},this.props);return{state:this.state,attrs:e,children:e.children,dom:this.dom}}},{key:"render",value:function(){var e=this,r=this.createVirtualNode(),a=function(t,r){return e.setState(o({},t,r))};return f(r.attrs.element||c,h({},n(r,{renderer:f,keys:p,updateState:a}),{ref:function(t){return e.dom=t}}),[r.attrs.before,t(r,{renderer:f,keys:p,updateState:a}),r.attrs.after])}}]),r}(r.Component)},b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),m=function(e){var t=e.createContent,n=e.createProps,o=e.element;return function(e){function r(){return c(this,r),s(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return l(r,e),d(r,[{key:"createVirtualNode",value:function(){var e=b({},this.props);return{state:this.state,attrs:e,children:e.children,dom:this.dom}}},{key:"render",value:function(){var e=this,r=this.createVirtualNode();return f(r.attrs.element||o,b({},n(r,{renderer:f,keys:p}),{ref:function(t){return e.dom=t}}),[r.attrs.before,t(r,{renderer:f,keys:p}),r.attrs.after])}}]),r}(r.Component)},O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w=v(O({},n.ripple));w.theme=n.ripple.theme,w.displayName="ripple";var g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j=function(e,t){return n.button.createProps(e,g(t,{ripple:w}))},P=function(e,t){return n.button.createContent(e,g(t,{ripple:w}))},_=v({createProps:j,createContent:P,element:n.button.element});_.theme=n.button.theme,_.displayName="button";var k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C=m(k({},n.svg));C.theme=n.svg.theme,C.displayName="svg";var N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},M=function(e,t){return n.icon.createProps(e,N(t,{svg:C}))},x=function(e,t){return n.icon.createContent(e,N(t,{svg:C}))},E=v({createProps:M,createContent:x,element:n.icon.element});E.theme=n.icon.theme,E.displayName="icon";var S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V=m(S({},n.shadow));V.theme=n.shadow.theme,V.displayName="shadow",e.button=_,e.icon=E,e.ripple=w,e.shadow=V,e.svg=C,e.keys=p,e.renderer=f,e.statefulComponent=v,e.statelessComponent=m,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react.js.map
