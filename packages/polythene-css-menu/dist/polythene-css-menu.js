!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core-css"),require("polythene-theme"),require("polythene-css-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme","polythene-css-shadow"],n):n((e=e||self).polythene={},e["polythene-core-css"],e["polythene-theme"],e["polythene-css-shadow"])}(this,function(e,n,t,r){"use strict";var o="pe-menu";function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){i(e,n,t[n])})}return e}var c={general_styles:function(e){return[]}},_=function(e){var t;return i(t={},"color_"+e+"_background",function(t,r){return[n.sel(t,{" .pe-menu__panel":{"background-color":r["color_"+e+"_background"]}})]}),i(t,"color_"+e+"_backdrop_background",function(t,r){return[n.sel(t,{" .pe-menu__backdrop":{"background-color":r["color_"+e+"_backdrop_background"]}})]}),t},s=a({},c,_("light")),p=a({},c,_("dark")),l=n.createColor({varFns:{lightTintFns:s,darkTintFns:p}}),d={top_menu:!1},m=u({backdrop:void 0,z:t.vars.z_menu},d,r.sharedVars),f=u({general_styles:!0,animation_delay:"0s",animation_duration:".180s",animation_hide_css:"opacity: 0;",animation_hide_origin_effect_css:"transform: scale(0.75);",animation_show_css:"opacity: 1;",animation_show_origin_effect_css:"transform: scale(1);",animation_timing_function:"ease-in-out",border_radius:t.vars.unit_block_border_radius,height:void 0,min_width:1.5,width_factor:t.vars.grid_unit_menu,widths:[1,1.5,2,3,4,5,6,7],color_light_background:n.rgba(t.vars.color_light_background),color_dark_background:n.rgba(t.vars.color_dark_background),color_light_backdrop_background:"rgba(0, 0, 0, .1)",color_dark_backdrop_background:"rgba(0, 0, 0, .5)"},m),h=function(e){return function(){return{textAlign:e?"right":"left"}}},b=h(!1),g=h(!0),y=function(e){var n=e.vars,t=e.width,r=e.value,o=function(e,n){return n<e.min_width?e.min_width:n}(n,t);return i({},"."+function(e){return"pe-menu--width-"+e.toString().replace(".","-")}(o),{" .pe-menu__panel":{width:r||n.width_factor*o+"px"}})},w=function(e,r){return n.sel(e,[r.widths.map(function(e){return y({vars:r,width:e})}),{" .pe-menu__panel":{minWidth:t.vars.grid_unit_menu*r.min_width+"px"}}])},v=function(e,t){return n.sel(e,{" .pe-menu__backdrop":{display:"block"}})},k=function(e,t){return n.sel(e,[t.widths.map(function(e){return y({vars:t,width:e,value:"100vw"})}),n.createMarker(t,d),{" .pe-menu__panel":{position:"fixed",width:"100vw",top:0,left:0,right:0,bottom:"auto",borderTopLeftRadius:0,borderTopRightRadius:0}}])},O=function(e,t){return n.sel(e,{".pe-menu--floating":{" .pe-menu__panel, .pe-menu__backdrop":{zIndex:t.z}}})},x=u({general_styles:function(e,t){return[n.sel(e,[b(),{position:"static",".pe-menu--width-auto":{width:"auto"},".pe-menu--permanent":{" .pe-menu__panel":{opacity:1,position:"relative"}},".pe-menu--floating":{" .pe-menu__panel":{transitionProperty:"opacity, transform"}}," .pe-menu__panel":{transitionProperty:"all",opacity:0,position:"absolute"}," .pe-menu__backdrop":{display:"none",transitionProperty:"all",position:"fixed",top:0,right:0,bottom:0,left:0,opacity:0},".pe-menu--backdrop":v(e),".pe-menu--visible .pe-menu__backdrop":{opacity:1},".pe-menu--top-menu":k(e,t)," .pe-menu__content":{overflowX:"auto",overflowY:"auto",width:"100%",height:"100%"},".pe-menu--full-height":{height:"100%"," .pe-menu__panel":{height:"100%"}}}]),i({},n.selectorRTL(e),g())]},animation_delay:function(e,t){return[n.sel(e,{" .pe-menu__panel, .pe-menu__backdrop":{transitionDelay:t.animation_delay}})]},animation_duration:function(e,t){return[n.sel(e,{" .pe-menu__panel, .pe-menu__backdrop":{transitionDuration:t.animation_duration}})]},animation_timing_function:function(e,t){return[n.sel(e,{" .pe-menu__panel, .pe-menu__backdrop":{transitionTimingFunction:t.animation_timing_function}})]},animation_show_css:function(e,t){return[n.sel(e,{".pe-menu--visible":{" .pe-menu__panel":t.animation_show_css}})]},animation_hide_css:function(e,t){return[n.sel(e,{" .pe-menu__panel":t.animation_hide_css})]},animation_show_origin_effect_css:function(e,t){return[n.sel(e,{".pe-menu--origin.pe-menu--visible":{" .pe-menu__panel":t.animation_show_origin_effect_css}})]},animation_hide_origin_effect_css:function(e,t){return[n.sel(e,{".pe-menu--origin:not(.pe-menu--visible)":{" .pe-menu__panel":t.animation_hide_origin_effect_css}})]},height:function(e,t){return[void 0!==t.height&&n.sel(e,{" .pe-menu__panel":{height:t.height}})]},widths:function(e,n){return[w(e,n)]},min_width:function(e,n){return[w(e,n)]},width_factor:function(e,n){return[w(e,n)]},border_radius:function(e,t){return[n.sel(e,{" .pe-menu__panel":{borderRadius:t.border_radius+"px"}})]},backdrop:function(e,n){return[n.backdrop&&v(e)]},top_menu:function(e,n){return[n.top_menu&&k(e,n)]},z:function(e,n){return[n.z&&O(e,n)]}},r.sharedVarFns),j=n.createLayout({varFns:x}),P=[j,l],S=".".concat(o),z=n.styler.createAddStyle(S,P,f),F=n.styler.createGetStyle(S,P,f);n.styler.addStyle({selectors:[S],fns:P,vars:f}),e.addStyle=z,e.getStyle=F,e.color=l,e.layout=j,e.vars=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-menu.js.map
