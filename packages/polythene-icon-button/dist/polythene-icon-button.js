!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("mithril"),require("polythene-icon"),require("polythene-button"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-icon","polythene-button","polythene-css","polythene-theme"],e):e(o.polythene=o.polythene||{},o.m,o["polythene-icon"],o["polythene-button"],o["polythene-css"],o["polythene-theme"])}(this,function(o,e,t,n,r,c){"use strict";e="default"in e?e.default:e;var a=c.vars.rgba,i=(c.vars.grid_unit_icon_button-c.vars.unit_icon_size)/2,l=(c.vars.grid_unit_icon_button-c.vars.unit_icon_size)/3,_={padding:i,padding_compact:l,color_background:"transparent",color_light:c.vars.rgba(c.vars.color_light_foreground,c.vars.blend_light_text_secondary),color_light_disabled:a(c.vars.color_light_foreground,c.vars.blend_light_text_disabled),color_light_wash_opacity:c.vars.blend_light_background_hover_medium,color_light_focus_opacity:c.vars.blend_light_background_hover_medium,color_dark:c.vars.rgba(c.vars.color_dark_foreground,c.vars.blend_dark_text_secondary),color_dark_disabled:a(c.vars.color_dark_foreground,c.vars.blend_dark_text_disabled),color_dark_wash_opacity:c.vars.blend_dark_background_hover_medium,color_dark_focus_opacity:c.vars.blend_dark_background_hover_medium},d=function(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o},u=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},s=function(o,e){return[d({},o,{display:"inline-block","vertical-align":"middle",cursor:"pointer",position:"relative","font-size":"1rem","border-radius":"50%",border:"none"," .pe-icon-button__content":{"line-height":1,padding:e.padding+"px"},".pe-icon-button--compact":{" .pe-icon-button__content":{padding:e.padding_compact+"px"}}})]},p=function(o,e,t,n){return[d({},o+e,{color:t["color_"+n],backgroundColor:t["color_"+n+"_background"]||t.color_background," .pe-button__wash":{opacity:t["color_"+n+"_wash_opacity"]},".pe-button--focus, &.pe-button--selected":{" .pe-button__focus":{opacity:t["color_"+n+"_focus_opacity"],backgroundColor:"currentcolor"}},".pe-button--disabled":{color:t["color_"+n+"_disabled"]}})]},b=function(o,e,t,n){var r="light"===n?"currentcolor":t["color_"+n];return[d({},o+e+":hover",{" .pe-button__wash":{backgroundColor:r}})]},h=function(o,e){return[p("",o,e,"light"),p(".pe-dark-theme ",o,e,"dark"),b("html.pe-no-touch ",o,e,"light"),b("html.pe-no-touch .pe-dark-theme ",o,e,"dark")]},g=[s,h],v=".pe-button.pe-icon-button",y=function(o,e){return r.styler.generateStyles([o,v],u({},_,e),g)};r.styler.generateStyles([v],_,g);var f={component:"pe-button pe-icon-button",content:"pe-icon-button__content",compact:"pe-icon-button--compact"},m=function(o){var r=o.attrs,c=r.content?r.content:r.icon?e(t.icon,r.icon):r.children||o.children;return e(n.button,u({},{content:e("div",{class:f.content},c),parentClass:[r.parentClass||f.component,r.compact?f.compact:null].join(" "),wash:!1,animateOnTap:!1},r))},k={theme:y,view:m};o.iconButton=k,o.classes=f,o.vars=_,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-icon-button.js.map
