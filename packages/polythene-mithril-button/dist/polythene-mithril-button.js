!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-button"),require("polythene-mithril-ripple")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-button","polythene-mithril-ripple"],t):t(e.polythene=e.polythene||{},e["polythene-mithril-base"],e["polythene-core-button"],e["polythene-mithril-ripple"])}(this,function(e,t,o,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},p=t.StateComponent(r({},o.coreButton,{createProps:function(e,t){return o.coreButton.createProps(e,r(t,{Ripple:n.Ripple}))},createContent:function(e,t){return o.coreButton.createContent(e,r(t,{Ripple:n.Ripple}))}}));p.theme=o.coreButton.theme,e.Button=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-button.js.map
