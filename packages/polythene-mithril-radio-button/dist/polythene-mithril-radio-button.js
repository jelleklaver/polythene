!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-radio-button"),require("polythene-core-selection-control"),require("cyano-mithril"),require("polythene-mithril-icon"),require("polythene-mithril-icon-button")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-radio-button","polythene-core-selection-control","cyano-mithril","polythene-mithril-icon","polythene-mithril-icon-button"],t):t((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core-radio-button"],e["polythene-core-selection-control"],e["cyano-mithril"],e["polythene-mithril-icon"],e["polythene-mithril-icon-button"])}(this,function(e,t,o,n,r,i,l){"use strict";function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){c(e,t,o[t])})}return e}var p=r.cast(n._ViewControl,{h:r.h,Icon:i.Icon,IconButton:l.IconButton}),h=t.ComponentCreator(a({},n.coreSelectionControl,{createContent:function(e,t){return n.coreSelectionControl.createContent(e,u(t,{ViewControl:p}))}}));h.displayName="SelectionControl";var y=t.ComponentCreator(a({},o.coreRadioButton,{component:h}));y.displayName="RadioButton",e.RadioButton=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-radio-button.js.map
