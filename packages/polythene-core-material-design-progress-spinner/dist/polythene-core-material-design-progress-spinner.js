!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-utilities")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-utilities"],t):t((e=e||self).polythene={},e["polythene-core"],e["polythene-utilities"])}(this,function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a={component:"pe-md-progress-spinner",animation:"pe-md-progress-spinner__animation",circle:"pe-md-progress-spinner__circle",circleRight:"pe-md-progress-spinner__circle-right",circleLeft:"pe-md-progress-spinner__circle-left"},c=function(e,t,n,r){var i=e.style;i.transform=i["-webkit-transform"]=i["-moz-transform"]=i["-ms-transform"]=i["-o-transform"]="rotate("+function(e,t){return e+(t-e)*(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)}(t,n,r)+"deg)"},l=function(e,t,n){var r=e.querySelector("."+a.animation).style;r.clip=n<.5?"rect(0px, "+t+"px, "+t+"px, "+t/2+"px)":"rect(auto, auto, auto, auto)";var i=e.querySelector("."+a.circleLeft),o=e.querySelector("."+a.circleRight);i.style.clip=o.style.clip="rect(0px, "+t/2+"px, "+t+"px, 0px)",c(o,0,180,Math.min(1,2*n)),c(i,0,360,n)};e._Spinner=function(e){var c=e.h,s=e.useState,p=e.useEffect,u=e.BaseSpinner,f=i(e,["h","useState","useEffect","BaseSpinner"]),m=o(s(0),2),d=m[0],y=m[1],g=o(s(!1),2),h=g[0],v=g[1],x=o(s(),2),S=x[0],b=x[1],O=o(s(),2),w=O[0],j=O[1];p(function(){var e;S&&j((e=S,Math.round(e?parseFloat(t.getStyle({element:e,prop:"height"}))-2*parseFloat(t.getStyle({element:e,prop:"padding"})):0)))},[S]),function(e){var r=e.domElement,i=e.isAnimating,o=e.setIsAnimating,c=e.percentage,s=e.setPercentage,p=e.size,u=e.props;if(r&&!i&&void 0!==p&&void 0!==u.percentage){var f=t.unpackAttrs(u.percentage),m=c;if(m!==f){var d=u.animated?n.easing.easeInOutQuad:function(e){return e};if(u.animated){var y=void 0!==u.updateDuration?1e3*u.updateDuration:t.styleDurationToMs(t.getStyle({element:r.querySelector(".".concat(a.animation)),prop:"animation-duration"})),g=null;o(!0),window.requestAnimationFrame(function e(t){g||(g=t);var n=t-g;l(r,p,d(m+1/y*n*(f-m))),g&&n<y?window.requestAnimationFrame(e):(g=null,s(f),o(!1))})}else l(r,p,d(f)),s(f)}}}({domElement:S,isAnimating:h,percentage:d,setPercentage:y,setIsAnimating:v,size:w,props:f});var _=f.content||c("div",{className:a.animation,style:{width:w+"px",height:w+"px"}},[c("div",{className:[a.circle,a.circleLeft].join(" ")}),c("div",{className:[a.circle,a.circleRight].join(" ")})]);return c(u,r({},f,{ref:function(e){return e&&!S&&b(e)},className:[a.component,f.className].join(" "),content:_}))},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-material-design-progress-spinner.js.map
