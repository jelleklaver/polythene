!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("j2c")):"function"==typeof define&&define.amd?define(["exports","polythene-core","j2c"],t):t((e=e||self).polythene={},e["polythene-core"],e.j2c)}(this,function(e,t,r){"use strict";r=r&&r.hasOwnProperty("default")?r.default:r;const i=[{display:"-webkit-box"},{display:"-moz-box"},{display:"-ms-flexbox"},{display:"-webkit-flex"},{display:"flex"}],n=[i,{"-ms-flex-align":"center","-webkit-align-items":"center","align-items":"center"}],o=[i,{"-ms-flex-pack":"center","-webkit-justify-content":"center","justify-content":"center"}];var l={flex:(e=1)=>[{"-webkit-box-flex":e},{"-moz-box-flex":e},{"-webkit-flex":e},{"-ms-flex":e},{flex:e},1===e?{"-webkit-flex-basis":"0.000000001px"}:{},1===e?{"flex-basis":"0.000000001px"}:{}],flexAuto:{"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},flexAutoVertical:{"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},flexIndex:e=>({"-ms-flex":e,"-webkit-flex":e,flex:e}),flexGrow:e=>({"-webkit-flex-grow":e,"flex-grow":e}),layout:i,layoutAroundJustified:[i,{"-ms-flex-pack":"distribute","-webkit-justify-content":"space-around","justify-content":"space-around"}],layoutCenter:n,layoutCenterCenter:[o,n],layoutCenterJustified:o,layoutEnd:[i,{"-ms-flex-align":"end","-webkit-align-items":"flex-end","align-items":"flex-end"}],layoutEndJustified:[i,{"-ms-flex-pack":"end","-webkit-justify-content":"flex-end","justify-content":"flex-end"}],layoutHorizontal:[i,{"-ms-flex-direction":"row","-webkit-flex-direction":"row","flex-direction":"row"}],layoutHorizontalReverse:[i,{"-ms-flex-direction":"row-reverse","-webkit-flex-direction":"row-reverse","flex-direction":"row-reverse"}],layoutInline:[i,{display:"-ms-inline-flexbox"},{display:"-webkit-inline-flex"},{display:"inline-flex"}],layoutJustified:[i,{"-ms-flex-pack":"justify","-webkit-justify-content":"space-between","justify-content":"space-between"}],layoutStart:[i,{"-ms-flex-align":"start","-webkit-align-items":"flex-start","align-items":"flex-start"}],layoutStartJustified:[i,{"-ms-flex-pack":"start","-webkit-justify-content":"flex-start","justify-content":"flex-start"}],layoutVertical:[i,{"-ms-flex-direction":"column","-webkit-flex-direction":"column","flex-direction":"column"}],layoutVerticalReverse:[i,{"-ms-flex-direction":"column-reverse","-webkit-flex-direction":"column-reverse","flex-direction":"column-reverse"}],layoutWrap:[i,{"-ms-flex-wrap":"wrap","-webkit-flex-wrap":"wrap","flex-wrap":"wrap"}],layoutWrapReverse:[i,{"-ms-flex-wrap":"wrap-reverse","-webkit-flex-wrap":"wrap-reverse","flex-wrap":"wrap-reverse"}],selfCenter:{"-ms-align-self":"center","-webkit-align-self":"center","align-self":"center"},selfEnd:{"-ms-align-self":"flex-end","-webkit-align-self":"flex-end","align-self":"flex-end"},selfStart:{"-ms-align-self":"flex-start","-webkit-align-self":"flex-start","align-self":"flex-start"},selfStretch:{"-ms-align-self":"stretch","-webkit-align-self":"stretch","align-self":"stretch"}};var s={clearfix:()=>({"&:after":{content:'""',display:"table",clear:"both"}}),defaultTransition:(e="all",t=".18s",r="ease-out")=>({transitionDelay:"0ms",transitionDuration:t,transitionTimingFunction:r,transitionProperty:e}),ellipsis:(e,t,r="px")=>"none"===e?{textOverflow:"initial",overflow:"initial",display:"block",height:"auto",maxHeight:"none",whiteSpace:"normal"}:[{"@supports (-webkit-line-clamp: 2)":Object.assign({},void 0!==e?{"-webkit-line-clamp":e,"-webkit-box-orient":"vertical",display:"-webkit-box",wordBreak:"break-word"}:null)},Object.assign({},{overflow:"hidden",textOverflow:"ellipsis",textRendering:"auto"},void 0!==t?{maxHeight:e*t+r}:null,1===t?{wordWrap:"nowrap"}:null)],fit:(e=0)=>{const t=e+"px";return{position:"absolute",top:t,right:t,bottom:t,left:t}},fontSmoothing:(e=!0)=>e?{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"}:{"-webkit-font-smoothing":"subpixel-antialiased","-moz-osx-font-smoothing":"auto"},sticky:(e=1)=>({position:"sticky",top:0,zIndex:e})};var a,f,u=(function(e,t){var r,i,n,o,l;function s(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")}function a(e,t){return i[e]="",i[e]=t,!!i[e]}function f(e,t){return n.textContent="@media ("+e+":"+t+"){}",!!~n.sheet.cssRules[0].cssText.indexOf(t)}function u(e){return e in i}function p(e){return n.textContent=e+"{}",!!n.sheet.cssRules.length}Object.defineProperty(t,"__esModule",{value:!0});var c=[{props:["cursor"],values:["grab","grabbing","zoom-in","zoom-out"]},{props:["display"],values:["box","inline-box","flexbox","inline-flexbox","flex","inline-flex","grid","inline-grid"]},{props:["position"],values:["sticky"]},{props:["width","column-width","height","max-height","max-width","min-height","min-width"],values:["contain-floats","fill-available","fit-content","max-content","min-content"]}],x={"align-items":"box-align",flex:"box-flex","box-direction":"box-direction","box-orient":"box-orient","flex-grow":"box-flex","flex-wrap":"box-lines","justify-content":"box-pack",order:"box-ordinal-group"},d={"flex-end":"end","flex-start":"start",nowrap:"single","space-around":"justify","space-between":"justify",wrap:"multiple","wrap-reverse":"multiple"},y={"align-content":"-ms-flex-line-pack","align-items":"-ms-flex-align","align-self":"-ms-flex-item-align","flex-basis":"-ms-preferred-size","flex-grow":"-ms-flex-positive","flex-shrink":"-ms-flex-negative","justify-content":"-ms-flex-pack",order:"-ms-flex-order"},m={"flex-end":"end","flex-start":"start","space-around":"distribute","space-between":"justify"};function b(e){r=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,n=document.documentElement.appendChild(document.createElement("style")),l=a,o=u,"zIndex"in i&&!("z-index"in i)&&(l=function(e,t){return a(s(e),t)},o=function(e){return u(s(e))}),function(e){var t={};function i(e){if("-"===e.charAt(0)){var r=e.split("-")[1];t[r]=++t[r]||1}}if(r&&r.length>0)for(var n=0;n<r.length;n++)i(r[n]);else for(var o in r)i(o.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}));var l=[];for(var a in t)l.push(a);l.sort(function(e,r){return t[r]-t[e]}),e.prefixes=l.map(function(e){return"-"+e+"-"}),e.prefix=e.prefixes[0]||"",p("_:-ms-lang(x), _:-webkit-full-screen")&&e.prefixes.push("-ms-"),e.Prefix=s(e.prefix)}(e),function(e){var t,r;function i(t){return t.replace(/^::?/,function(t){return t+e.prefix})}if(""!==e.prefix){var n={":any-link":null,"::backdrop":null,":fullscreen":null,":full-screen":":fullscreen","::placeholder":null,":placeholder":"::placeholder","::input-placeholder":"::placeholder",":input-placeholder":"::placeholder",":read-only":null,":read-write":null,"::selection":null};for(t in n)r=i(t),!p(n[t]||t)&&p(r)&&(e.hasSelectors=!0,e.selectorList.push(n[t]||t),e.selectorMap[n[t]||t]=r)}}(e),function(e){if(""!==e.prefix){var t={keyframes:"name",viewport:null,document:'regexp(".")'};for(var r in t)for(var i=r+" "+(t[r]||""),n=e.prefixes.length;n--;)!p("@"+i)&&p("@"+e.prefixes[n]+i)&&(e.hasAtrules=!0,e.atrules["@"+r]="@"+e.prefixes[n]+r);e.hasDppx=f("resolution","1dppx"),e.hasPixelRatio=f(e.prefix+"device-pixel-ratio","1"),e.hasPixelRatioFraction=f(e.prefix+"device-pixel-ratio","1/1"),(e.hasPixelRatio||e.hasPixelRatioFraction)&&(e.properties.resolution=e.prefix+"device-pixel-ratio",e.properties["min-resolution"]=e.prefix+"min-device-pixel-ratio",e.properties["max-resolution"]=e.prefix+"max-device-pixel-ratio",f("min-"+e.prefix+"device-pixel-ratio","1")&&(e.properties["min-resolution"]="min-"+e.prefix+"device-pixel-ratio",e.properties["max-resolution"]="max-"+e.prefix+"device-pixel-ratio"))}}(e),function(e){if(0!==e.prefixes.length){for(var t=0;t<c.length;t++){for(var r,i={},n=c[t].props[0],o=0;r=c[t].values[o];o++)for(var s=e.prefixes.length;s--;)!l(n,r)&&l(n,e.prefixes[s]+r)&&(e.hasKeywords=!0,i[r]=e.prefixes[s]+r);for(o=0;n=c[t].props[o];o++)e.keywords[n]=i}if(e.keywords.display&&e.keywords.display.flexbox&&!l("display","flex"))for(s in e.keywords.display.flex=e.keywords.display.flexbox,e.keywords.display["inline-flex"]=e.keywords.display["inline-flexbox"],e.flexbox2012=!0,y)e.properties[s]=y[s],e.keywords[s]=m;else if(e.keywords.display&&e.keywords.display.box&&!l("display","flex")&&!l("display",e.prefix+"flex"))for(s in e.keywords.display.flex=e.keywords.display.box,e.keywords.display["inline-flex"]=e.keywords.display["inline-box"],e.flexbox2009=!0,x)e.properties[s]=e.prefix+x[s],e.keywords[s]=d;else!e.keywords.display||e.keywords.display.box||e.keywords.display.flex||e.keywords.display.flexbox||l("display","flex")||(e.jsFlex=!0);!l("color","initial")&&l("color",e.prefix+"initial")&&(e.initial=e.prefix+"initial")}}(e),function(e){if(""!==e.prefix){var t={"linear-gradient":{property:"background-image",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"background-image",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};for(var r in t["repeating-linear-gradient"]=t["repeating-radial-gradient"]=t["radial-gradient"]=t["linear-gradient"],t){var i=t[r],n=i.property,o=r+"("+i.params+")";!l(n,o)&&l(n,e.prefix+o)&&e.functions.push(r)}}}(e),function(e){!l("background-clip","text")&&l("-webkit-background-clip","text")&&(e.WkBCTxt=!0),["background-clip","text-fill-color","text-stroke-color","text-stroke-width","text-stroke"].forEach(function(t){!o(t)&&o("-webkit-"+t)&&(e.properties[t]="-webkit-"+t)})}(e),"undefined"!=typeof document&&document.documentElement.removeChild(n),r=n=null}var h,v={},g=/[(),]|\/\*[\s\S]*?\*\//g;function w(e,t,r){return new RegExp(e+"(?:"+t.join("|")+")"+r)}function k(e,t,r){return new RegExp("\"(?:\\\\[\\S\\s]|[^\"])*\"|'(?:\\\\[\\S\\s]|[^'])*'|\\/\\*[\\S\\s]*?\\*\\/|"+e+"((?:"+t.join("|")+"))"+r,"gi")}function S(e,t,r,i){if("string"!=typeof r||"-"===r.charAt(0))return t(r,i);if("string"!=typeof i&&"number"!=typeof i)return t(e.properties[r]||e.fixProperty(r),i);if(i+="",e.jsFlex){if("display"===r&&("flex"===i||"inline-flex"===i))return void t("-js-display",i)}else if(e.flexbox2009){if("flex-flow"===r)return void i.split(/\s+/).forEach(function(r){r.indexOf("wrap")>-1?S(e,t,"flex-wrap",r):""!==r&&S(e,t,"flex-direction",r)});if("flex-direction"===r)return t(e.properties["box-orient"],i.indexOf("column")>-1?"block-axis":"inline-axis"),void t(e.properties["box-direction"],i.indexOf("-reverse")>-1?"reverse":"normal")}e.WkBCTxt&&"background-clip"===r&&"text"===i?t("-webkit-background-clip",i):t(e.properties[r]||e.fixProperty(r),e.fixValue(i,r))}function j(e){var t=e.prefix;e.fixProperty=e.fixProperty||function(r){var i;return e.properties[r]=o(r)||!o(i=t+r)?r:i};var r=w("",e.selectorList,"(?:\\b|$|[^-])"),i=k("",e.selectorList,"(?:\\b|$|[^-])"),n=function(t,r){return null!=r?e.selectorMap[r]:t};e.fixSelector=function(e){return r.test(e)?e.replace(i,n):e};var l=e.functions.indexOf("linear-gradient")>-1,s=/\blinear-gradient\(/,a=/(^|\s|,|\()((?:repeating-)?linear-gradient\()\s*(-?\d*\.?\d*)deg/gi,f=function(e,t,r,i){return t+r+(90-i)+"deg"},u=!!e.functions.length,p=w("(?:^|\\s|,|\\()",e.functions,"\\s*\\("),c=k("(^|\\s|,|\\()",e.functions,"(?=\\s*\\()");function x(e,r,i){return r+t+i}var d=/^\s*([-\w]+)/gi,y=function(t,r){return e.properties[r]||e.fixProperty(r)};e.fixValue=function(t,r){var i;return null!=e.initial&&"initial"===t?e.initial:e.hasKeywords&&(i=(e.keywords[r]||v)[t])?i:(i=t,e.valueProperties.hasOwnProperty(r)&&(i=-1===t.indexOf(",")?t.replace(d,y):function(e){for(var t,r=[],i=[],n=0;t=g.exec(e);)switch(t[0]){case"(":n++;break;case")":n--;break;case",":if(n)break;r.push(t.index)}for(t=r.length;t--;)i.unshift(e.slice(r[t]+1)),e=e.slice(0,r[t]);return i.unshift(e),i}(t).map(function(e){return e.replace(d,y)}).join(",")),u&&p.test(t)&&(l&&s.test(t)&&(i=i.replace(a,f)),i=i.replace(c,x)),i)};var m,b,h=/((?:min-|max-)?resolution)\s*:\s*((?:\d*\.)?\d+)dppx/g,j=e.hasPixelRatio?function(t,r,i){return e.properties[r]+":"+i}:e.hasPixelRatioFraction?function(t,r,i){return e.properties[r]+":"+Math.round(10*i)+"/10"}:function(e,t,r){return t+":"+Math.round(96*r)+"dpi"};e.fixAtMediaParams=!1!==e.hasDppx?function(e){return e}:function(e){return-1!==e.indexOf("reso")?e.replace(h,j):e};var P=function(e,t){m=e,b=t},F=/\(\s*([-\w]+)\s*:\s*((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*)/g;function V(t,r,i){return S(e,P,r,i),"("+m+":"+b}e.fixAtSupportsParams=function(e){return e.replace(F,V)}}h={atrules:{},hasAtrules:!1,hasDppx:null,hasKeywords:!1,hasPixelRatio:!1,hasPixelRatioFraction:!1,hasSelectors:!1,hasValues:!1,fixAtMediaParams:null,fixAtSupportsParams:null,fixProperty:null,fixSelector:null,fixValue:null,flexbox2009:!1,flexbox2012:!1,functions:[],initial:null,jsFlex:!1,keywords:{},placeholder:null,prefix:"",prefixes:[],Prefix:"",properties:{},selectorList:[],selectorMap:{},valueProperties:{transition:1,"transition-property":1,"will-change":1},WkBCTxt:!1},"function"==typeof getComputedStyle&&b(h),j(h),t.prefixPlugin=function e(){var t=h,r=[];return{set:{setPrefixDb:function(i){return-1===r.indexOf(i)&&(j(i),r.push(i)),t=i,e}},filter:function(e){return{atrule:function(r,i,n,o){e.atrule(t.hasAtrules&&t.atrules[r]||r,i,"@media"===r?t.fixAtMediaParams(n):"@supports"===r?t.fixAtSupportsParams(n):n,o)},decl:function(r,i){S(t,e.decl,r,i)},rule:function(r){e.rule(t.hasSelectors?t.fixSelector(r):r)}}}}}}(a={exports:{}},a.exports),a.exports);(f=u)&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")&&f.default;const p=new r(u.prefixPlugin),c=/[^a-z0-9\\-]/g,x=(e,...t)=>y({id:e},...t),d=e=>{if(!t.isServer&&e){const t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)}},y=(e,...r)=>{if(t.isServer)return;const i=e.id.replace(c,"_"),n=e.document||window.document;d(i);const o=n.createElement("style");i&&o.setAttribute("id",i),r.forEach(e=>{Object.keys(e).length&&e.forEach(e=>{const t={"@global":e},r=p.sheet(t);o.appendChild(n.createTextNode(r))})}),n.head.appendChild(o)},m=({selectors:e,fns:t,vars:r,customVars:i,mediaQuery:n})=>{const o=e.join(""),l=t.map(e=>e(o,r,i)).filter(e=>e.length>0);if(0===l.length)return;const s=o.trim().replace(/^[^a-z]?(.*)/,"$1");x(s,n?[{[n]:l}]:l)},b=({selectors:e,fns:t,vars:r,customVars:i,mediaQuery:n})=>{const o=e.join(""),l=t.map(e=>e(o,r,i));return n?[{[n]:l}]:l};var h={add:x,addStyle:m,addToDocument:y,createAddStyle:(e,t,r)=>(i="",n,{mediaQuery:o}={})=>m({selectors:[e,i],fns:t,vars:r,customVars:n,mediaQuery:o}),createGetStyle:(e,t,r)=>(i="",n,{mediaQuery:o}={})=>[b({selectors:[e,i],fns:t,vars:r,customVars:n,mediaQuery:o})],getStyle:b,remove:d};const v=({varFns:e,customVarFns:t,superStyle:r,varMixin:i,selector:n,scopedSelector:o,componentVars:l,customVars:s})=>{const a={...l,...s},f=s||a,{general_styles:u,...p}=l||{},c=void 0!==r?void 0!==s?r(n,l,s):r(n,p):[],x=Object.assign({},!!s&&t,e);return c.concat(Object.keys(i(f)).map(e=>x&&void 0!==x[e]?x[e](o,a):null).filter(e=>e))},g=({scopes:e,selector:t,isNoTouch:r=!1})=>t.split(/\s*,\s*/).map(t=>(({scopes:e,selector:t,isNoTouch:r=!1})=>r?e.map(e=>e+t+":hover").join(","):e.map(e=>e+t).join(","))({scopes:e,selector:t,isNoTouch:r})),w=[{scopes:[".pe-dark-tone",".pe-dark-tone "],varFnName:"darkTintFns",isNoTouch:!1},{scopes:["",".pe-light-tone",".pe-light-tone "],varFnName:"lightTintFns",isNoTouch:!1},{scopes:[".pe-no-touch .pe-dark-tone "],varFnName:"darkTintHoverFns",isNoTouch:!0},{scopes:[".pe-no-touch ",".pe-no-touch .pe-light-tone "],varFnName:"lightTintHoverFns",isNoTouch:!0}];var k=[{".layout, .layout.horizontal":l.layout,".layout.horizontal.inline, .layout.vertical.inline":l.layoutInline,".layout.horizontal":l.layoutHorizontal,".layout.horizontal.reverse":l.layoutHorizontalReverse,".layout.vertical":l.layoutVertical,".layout.vertical.reverse":l.layoutVerticalReverse,".layout.wrap":l.layoutWrap,".layout.wrap.reverse":l.layoutWrapReverse,".flex":l.flex(1),".span.flex":{display:"block"},".flex.auto-vertical":l.flexAutoVertical,".flex.auto":l.flexAuto,".flex.none":l.flexIndex("none"),".flex.one":l.flexIndex(1),".flex.two":l.flexIndex(2),".flex.three":l.flexIndex(3),".flex.four":l.flexIndex(4),".flex.five":l.flexIndex(5),".flex.six":l.flexIndex(6),".flex.seven":l.flexIndex(7),".flex.eight":l.flexIndex(8),".flex.nine":l.flexIndex(9),".flex.ten":l.flexIndex(10),".flex.eleven":l.flexIndex(11),".flex.twelve":l.flexIndex(12),".layout.start":l.layoutStart,".layout.center, .layout.center-center":l.layoutCenter,".layout.end":l.layoutEnd,".layout.start-justified":l.layoutStartJustified,".layout.center-justified, .layout.center-center":l.layoutCenterJustified,".layout.end-justified":l.layoutEndJustified,".layout.around-justified":l.layoutAroundJustified,".layout.justified":l.layoutJustified,".self-start":l.selfStart,".self-center":l.selfCenter,".self-end":l.selfEnd,".self-stretch":l.selfStretch}],S=[{".pe-block":{display:"block"},".pe-inline-block":{display:"inline-block"},".pe-hidden":{display:"none !important"},".pe-relative":{position:"relative"},".pe-absolute":{position:"absolute"},".pe-fit":{position:"absolute",top:0,right:0,bottom:0,left:0},".pe-fullbleed":{margin:0,height:"100vh"},".pe-rtl":{direction:"rtl"},"*[dir=rtl], .pe-rtl ":{" .pe-rtl--flip":{transform:"scaleX(-1)"}}}];const j=[k,S];e.flex=l,e.mixin=s,e.styler=h,e.hex=(e=>{const t=parseInt(e.substring(1),16);return(t>>16&255)+","+(t>>8&255)+","+(255&t)}),e.rgba=((e,t=1)=>`rgba(${e}, ${t})`),e.sel=((e,t)=>({[e]:t})),e.selectorRTL=(e=>`*[dir=rtl] ${e}, .pe-rtl ${e}`),e.createLayout=(({varFns:e,customVarFns:t,superLayout:r,varMixin:i=(e=>e)})=>(n,o,l)=>v({varFns:e,customVarFns:t,superStyle:r,varMixin:i,selector:n,scopedSelector:n,componentVars:o,customVars:l})),e.createColor=(({varFns:e={},superColor:t,varMixin:r=(e=>e)})=>(i,n,o)=>w.map(({scopes:l,varFnName:s,isNoTouch:a})=>(({selector:e,scopedSelector:t,componentVars:r,customVars:i,varFns:n,superColor:o,varMixin:l})=>v({varFns:n,superStyle:o,varMixin:l,selector:e,scopedSelector:t,componentVars:r,customVars:i}))({selector:i,scopedSelector:g({scopes:l,selector:i,isNoTouch:a}),componentVars:n,customVars:o,varFns:e[s],superColor:t,varMixin:r}))),e.createMarker=((e,t)=>{const r=((e,t)=>{if(!e)return;const r=Object.keys(t).filter(t=>!0===e[t]).join(".");return r?`"${r}"`:null})(e,t);return r&&{":before":{content:r,display:"none"}}}),e.layoutStyles=j,e.addLayoutStyles=(()=>h.add("pe-layout",k,S)),Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-css.js.map
