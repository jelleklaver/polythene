!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-css-material-design-spinner"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-css-material-design-spinner","polythene-core-css","polythene-theme"],r):r((e=e||self).polythene={},e["polythene-css-material-design-spinner"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,r,o,s){"use strict";const t={general_styles:e=>[o.sel(e,{" .pe-md-progress-spinner__circle":{borderColor:"currentcolor"}})]},n=e=>({["color_"+e]:(r,s)=>[o.sel(r,{color:s["color_"+e]})]}),i=Object.assign({},t,n("light")),l=Object.assign({},t,n("dark"));var a=o.createColor({varFns:{lightTintFns:i,darkTintFns:l},superColor:r.color});const p={general_styles:e=>[o.sel(e,{position:"relative"," .pe-md-progress-spinner__animation":{position:"absolute",width:"100%",height:"100%"}," .pe-md-progress-spinner__circle":{position:"absolute",boxSizing:"border-box",width:"100%",height:"100%",borderStyle:"solid",borderRadius:"50%"}," .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right":{transform:"rotate(0)",clip:"rect(0, 0, 0, 0)"}})],progress_animation_duration:(e,r)=>[o.sel(e,{" .pe-md-progress-spinner__animation":{animationDuration:r.progress_animation_duration}})]};var c=o.createLayout({varFns:p,superLayout:r.layout}),d={general_styles:!0,progress_animation_duration:".8s",color_light:o.rgba(s.vars.color_primary),color_dark:o.rgba(s.vars.color_primary)};const y=[c,a],_=".pe-md-progress-spinner",g=o.styler.createAddStyle(_,y,d),u=o.styler.createGetStyle(_,y,d);o.styler.addStyle({selectors:[_],fns:y,vars:d}),e.addStyle=g,e.color=a,e.getStyle=u,e.layout=c,e.vars=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-material-design-progress-spinner.js.map
