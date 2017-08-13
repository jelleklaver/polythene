!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],o):o(e.polythene={},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,o,t,r){"use strict";function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var l={component:"pe-dialog-pane",actions:"pe-dialog-pane__actions",body:"pe-dialog-pane__body",content:"pe-dialog-pane__content",footer:"pe-dialog-pane__footer",header:"pe-dialog-pane__header",title:"pe-dialog-pane__title",footerHigh:"pe-dialog-pane__footer--high",hasBottomOverflow:"pe-dialog-pane--overflow-bottom",hasTopOverflow:"pe-dialog-pane--overflow-top"},d={padding:3*r.vars.grid_unit_component,header_bottom:20,header_height:60,footer_height:52,color_light_title_text:"inherit",color_light_body_text:"inherit",color_light_body_border:t.rgba(r.vars.color_light_foreground,r.vars.blend_light_border_light),color_light_background:"inherit",color_dark_title_text:"inherit",color_dark_body_text:"inherit",color_dark_body_border:t.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_border_light),color_dark_background:"inherit"},p=function(e,o){var i;return[(i={},n(i,e,[t.flex.layoutVertical,{position:"relative",maxHeight:"100%",minWidth:"280px",maxWidth:7*r.vars.grid_unit_menu+"px",borderRadius:"inherit",margin:0,".pe-menu__content":{" .pe-dialog-pane__body":{padding:0,border:"none"}}," .pe-dialog-pane__header, pe-dialog-pane__body, pe-dialog-pane__header":{zIndex:1}," .pe-dialog-pane__title":{fontSize:r.vars.font_size_title+"px",lineHeight:"24px",fontWeight:r.vars.font_weight_medium,"& + div":{marginTop:"16px"}}," .pe-dialog-pane__header":{padding:[o.padding-4,o.padding,o.header_bottom-4,o.padding].map(function(e){return e+"px"}).join(" "),minHeight:o.header_height+"px"," .pe-dialog-pane__title":[t.mixin.ellipsis(1),{width:"100%"}]}," .pe-dialog-pane__body":[t.flex.selfStretch,{padding:o.padding+"px",overflowY:"auto","-webkit-overflow-scrolling":"touch",borderWidth:"1px",borderStyle:"solid none",borderColor:"transparent",maxHeight:"calc(100vh - "+2*o.padding+"px - "+(o.header_height+o.footer_height)+"px)"," p":{margin:0}," p + p":{marginTop:"16px"}}]," .pe-dialog-pane__header + .pe-dialog-pane__body":{paddingTop:0}," .pe-dialog-pane__footer":{padding:"2px 8px",minHeight:o.footer_height+"px",fontSize:0,".pe-dialog-pane__footer--high":{paddingBottom:"8px"}}," .pe-dialog-pane__actions":[t.flex.layoutHorizontal,t.flex.layoutEndJustified,t.flex.layoutWrap,{margin:"0 -4px"," .pe-button":{height:"36px",marginTop:"6px",marginBottom:"6px",padding:0}}]}]),n(i,".pe-menu__content",{" .pe-dialog-pane__body":{padding:0,border:"none"}}),n(i," .pe-dialog--full-screen",{" .pe-dialog-pane__content":{borderRadius:0,maxWidth:"none",height:"100vh",width:"100vw"}," .pe-dialog-pane, .pe-dialog-pane__body":{padding:0,height:"100vh",maxHeight:"100vh",border:"none",maxWidth:"initial"}}),i)]},c=function(e,o,t,r){return[i({},e.map(function(e){return e+o}).join(","),{backgroundColor:t["color_"+r+"_background"]," .pe-dialog-pane__header .pe-dialog-pane__title":{color:t["color_"+r+"_title_text"]}," .pe-dialog-pane__body":{color:t["color_"+r+"_body_text"]},"&.pe-dialog-pane--overflow-top .pe-dialog-pane__body":{borderTopColor:t["color_"+r+"_body_border"]},"&.pe-dialog-pane--overflow-bottom .pe-dialog-pane__body":{borderBottomColor:t["color_"+r+"_body_border"]}})]},g=function(e,o){return[c([".pe-dark-tone",".pe-dark-tone "],e,o,"dark"),c(["",".pe-light-tone",".pe-light-tone "],e,o,"light")]},_=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s=[p,g],h="."+l.component,u=function(e,o){return t.styler.generateStyles([e,h],_({},d,o),s)};t.styler.generateStyles([h],d,s);var f=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b=function(e){return e.attrs.element||"form"},m=u,v=function(e){var o=e.state,t=o.scrollEl();t&&(o.topOverflow(t.scrollTop>0),o.bottomOverflow(t.scrollHeight-(t.scrollTop+t.getBoundingClientRect().height)>0))},y=function(e){var o=e.state.footerEl();if(o){var t=window.getComputedStyle(o);o.getBoundingClientRect().height>parseInt(t.minHeight,10)?o.classList.add(l.footerHigh):o.classList.remove(l.footerHigh)}},x=function(e,o){var t=o(!1),r=o(),n=o(),i=o(!1),a=o(),l=o(!1);return{cleanUp:void 0,bottomOverflow:t,el:o(),footerEl:r,headerEl:n,isScrolling:i,scrollEl:a,scrollWatchId:void 0,topOverflow:l,redrawOnUpdate:o.merge([l,t,i])}},w=function(e){var t=e.dom;if(t){var r=e.state;r.el(t),r.scrollEl(t.querySelector("."+l.body)),r.footerEl(t.querySelector("."+l.footer)),r.headerEl(t.querySelector("."+l.title)),r.isScrolling.map(function(){return v(e)});var n=function(){v(e),y(e)};r.cleanUp=function(){return o.unsubscribe("resize",n)},o.subscribe("resize",n),v(e)}},k=function(e){return e.state.cleanUp()},O=function(e,t){var r=t.keys,n=e.state,i=o.unpackAttrs(e.attrs);return f({},o.filterSupportedAttributes(i,{remove:["style"]}),{className:[l.component,n.topOverflow()||i.borders?l.hasTopOverflow:null,n.bottomOverflow()||i.borders?l.hasBottomOverflow:null,"dark"===i.tone?"pe-dark-tone":null,"light"===i.tone?"pe-light-tone":null,i.className||i[r.class]].join(" ")},i.formOptions)},S=function(e,t){var r=t.renderer,n=t.keys,i=e.state,d=o.unpackAttrs(e.attrs);return r("div",{className:[l.content,d.menu?l.menuContent:null].join(" "),style:d.style},[d.title?r("div",{className:l.header,key:"header"},r("div",{className:l.title},d.title)):null,r("div",a({className:l.body,key:"body"},n.onscroll,function(){i.isScrolling(!0),clearTimeout(i.scrollWatchId),i.scrollWatchId=setTimeout(function(){i.isScrolling(!1)},150)}),d.content||d.body||d.menu),d.footer?r("div",{className:l.footer,key:"footer"},r("div",{className:l.actions},d.footer)):null])},j=Object.freeze({getElement:b,theme:m,getInitialState:x,onMount:w,onUnMount:k,createProps:O,createContent:S});e.coreDialogPane=j,e.classes=l,e.vars=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-dialog-pane.js.map
