!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-switch"),require("polythene-core-selection-control"),require("polythene-mithril-shadow"),require("polythene-mithril-icon-button")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-switch","polythene-core-selection-control","polythene-mithril-shadow","polythene-mithril-icon-button"],t):t((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core-switch"],e["polythene-core-selection-control"],e["polythene-mithril-shadow"],e["polythene-mithril-icon-button"])}(this,function(e,t,o,n,i,c){"use strict";const l=t.ViewComponent(Object.assign({},o.viewControl,{createContent:(e,t)=>o.viewControl.createContent(e,Object.assign(t,{Shadow:i.Shadow,IconButton:c.IconButton}))}));l.displayName="ViewControl";const r=t.StateComponent(Object.assign({},n.coreSelectionControl,{createContent:(e,t)=>n.coreSelectionControl.createContent(e,Object.assign(t,{ViewControl:l}))}));r.displayName="SelectionControl";const h=t.StateComponent(Object.assign({},o.coreSwitch,{component:r}));h.displayName="Switch",e.Switch=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-switch.js.map
