!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-search"),require("polythene-mithril-textfield")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-search","polythene-mithril-textfield"],t):t((e=e||self).polythene={},e["polythene-mithril-base"],e["polythene-core-search"],e["polythene-mithril-textfield"])}(this,function(e,t,i,o){"use strict";const r=t.StateComponent(Object.assign({},i.coreSearch,{createContent:(e,t)=>i.coreSearch.createContent(e,Object.assign(t,{TextField:o.TextField}))}));r.displayName="Search",e.Search=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-search.js.map
