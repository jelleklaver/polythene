!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core-switch"),require("cyano-react"),require("polythene-react-shadow"),require("polythene-react-icon-button"),require("polythene-core-selection-control")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-switch","cyano-react","polythene-react-shadow","polythene-react-icon-button","polythene-core-selection-control"],t):t((e=e||self).polythene={},e["polythene-react-base"],e["polythene-core-switch"],e["cyano-react"],e["polythene-react-shadow"],e["polythene-react-icon-button"],e["polythene-core-selection-control"])}(this,function(e,t,o,n,r,c,i){"use strict";function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){l(e,t,o[t])})}return e}var p=n.cast(o._ViewControl,{h:n.h,Shadow:r.Shadow,IconButton:c.IconButton}),u=t.ComponentCreator(a({},i.coreSelectionControl,{createContent:function(e,t){return i.coreSelectionControl.createContent(e,a({},t,{ViewControl:p}))}}));u.displayName="SelectionControl";var y=t.ComponentCreator(a({},o.coreSwitch,{component:u}));y.displayName="Switch",e.Switch=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-switch.js.map
