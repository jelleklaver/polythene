!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var a={component:"pe-card",actions:"pe-card__actions",any:"pe-card__any",content:"pe-card__content",header:"pe-card__header",headerTitle:"pe-card__header-title",media:"pe-card__media",mediaDimmer:"pe-card__media__dimmer",overlay:"pe-card__overlay",overlayContent:"pe-card__overlay__content",primary:"pe-card__primary",primaryMedia:"pe-card__primary-media",subtitle:"pe-card__subtitle",text:"pe-card__text",title:"pe-card__title",actionsBorder:"pe-card__actions--border",actionsHorizontal:"pe-card__actions--horizontal",actionsJustified:"pe-card__actions--justified",actionsTight:"pe-card__actions--tight",actionsVertical:"pe-card__actions--vertical",mediaCropX:"pe-card__media--crop-x",mediaCropY:"pe-card__media--crop-y",mediaOriginStart:"pe-card__media--origin-start",mediaOriginCenter:"pe-card__media--origin-center",mediaOriginEnd:"pe-card__media--origin-end",mediaLarge:"pe-card__media--large",mediaMedium:"pe-card__media--medium",mediaRatioLandscape:"pe-card__media--landscape",mediaRatioSquare:"pe-card__media--square",mediaRegular:"pe-card__media--regular",mediaSmall:"pe-card__media--small",overlaySheet:"pe-card__overlay--sheet",primaryHasMedia:"pe-card__primary--media",primaryTight:"pe-card__primary--tight",textTight:"pe-card__text--tight"},i=Object.freeze({getElement:function(e){return e.attrs.element||e.attrs.url?"a":"div"},onMount:function(e){var r=e.attrs;void 0!==r.z&&t.deprecation("Card",{option:"z",newOption:"shadowDepth"}),r.content&&!Array.isArray(r.content)&&t.deprecation("Card",{message:"option 'content' is restricted to contain only the list of option objects for distinct card areas. To pass other content, use 'children'."})},createProps:function(e,i){var n=i.keys,o=e.attrs;return r({},t.filterSupportedAttributes(o),{className:[a.component,"dark"===o.tone?"pe-dark-tone":null,"light"===o.tone?"pe-light-tone":null,o.className||o[n.class]].join(" ")},o.url,o.events)},createContent:function(e,i){var n=i.renderer,o=i.keys,c=i.CardActions,s=i.CardMedia,d=i.CardPrimary,l=i.Icon,m=i.Shadow,u=i.ListTile,p=e.attrs,y=Array.isArray(p.content)?p.content.map(function e(i){var m=Object.keys(i)[0],p=r({},i[m],{dispatcher:e,key:m});switch(m){case"actions":return n(c,p);case"header":return function(e){var t=e.attrs,i=e.h,n=e.k,o=e.Icon;return i(e.ListTile,r({},t,{key:t.key||"card-header",className:[a.header,t.className||t[n.class]].join(" ")},t.icon?{front:i(o,t.icon)}:null))}({attrs:p,h:n,k:o,Icon:l,ListTile:u});case"media":return n(s,p);case"overlay":return function(e){var t=e.dispatcher,r=e.attrs,i=e.h,n=e.k,o=r.element||"div",c=r.content.map(t);return i("div",{key:r.key||"card-overlay",style:r.style,className:[a.overlay,r.sheet?a.overlaySheet:null,"light"===r.tone?null:"pe-dark-tone","light"===r.tone?"pe-light-tone":null].join(" ")},[i(o,{key:"content",className:[a.overlayContent,r.className||r[n.class]].join(" ")},c),i("div",{key:"dimmer",className:a.mediaDimmer})])}({dispatcher:e,attrs:p,h:n,k:o});case"primary":return n(d,p);case"text":return function(e){var i=e.attrs,n=e.h,o=e.k;return n(i.element||"div",r({},t.filterSupportedAttributes(i),{key:i.key||"card-text",className:[a.text,i.tight?a.textTight:null,i.className||i[o.class]].join(" ")},i.events),i.content)}({attrs:p,h:n,k:o});case"any":return function(e){var i=e.attrs,n=e.h,o=e.k;return n(i.element||"div",r({},t.filterSupportedAttributes(i),{key:i.key||"card-any",className:[a.any,i.tight?a.textTight:null,i.className||i[o.class]].join(" ")}),i.content)}({attrs:p,h:n,k:o});default:throw'Content type "'.concat(m,'" does not exist')}}):p.content,h=void 0!==p.shadowDepth?p.shadowDepth:p.z,_=p.children||e.children;return[n(m,{shadowDepth:void 0!==h?h:1,animated:!0,key:"shadow"}),n("div",{className:a.content,key:"content"},y),_]}}),n="pe-button-row",o={horizontal:a.actionsHorizontal,vertical:a.actionsVertical,justified:a.actionsJustified},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"horizontal";return o[e]},s=Object.freeze({getElement:function(e){return e.attrs.element||"div"},onMount:function(e){void 0!==e.attrs.bordered&&t.deprecation("Card",{option:"bordered",newOption:"border"})},createProps:function(e,i){var o=i.keys,s=e.attrs;return r({},t.filterSupportedAttributes(s),{key:"card-actions",className:[a.actions,"vertical"!==s.layout?n:null,c(s.layout),s.border||s.bordered?a.actionsBorder:null,s.tight?a.actionsTight:null,s.className||s[o.class]].join(" ")},s.events)},createContent:function(e){return e.attrs.content||e.children}}),d={landscape:16/9,square:1},l={small:a.mediaSmall,regular:a.mediaRegular,medium:a.mediaMedium,large:a.mediaLarge},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular";return l[e]},u=Object.freeze({getElement:function(e){return e.attrs.element||"div"},onMount:function(e){if(e.dom){var t=e.attrs,r=t.ratio||"landscape",i=t.origin||"center",n=e.dom,o=n.querySelector("img")||n.querySelector("iframe");!function(e){var t=e.dom,r=e.img,i=e.ratio,n=e.origin;r.onload=function(){"IMG"===r.tagName&&(t.style.backgroundImage="url(".concat(r.src,")"));var e=this.naturalWidth/this.naturalHeight<d[i]?a.mediaCropX:a.mediaCropY;t.classList.add(e);var o="start"===n?a.mediaOriginStart:"end"===n?a.mediaOriginEnd:a.mediaOriginCenter;t.classList.add(o)}}({dom:n,img:o,ratio:r,origin:i})}},createProps:function(e,i){var n=i.keys,o=e.attrs,c=o.ratio||"landscape";return r({},t.filterSupportedAttributes(o),{key:"card-media",className:[a.media,m(o.size),"landscape"===c?a.mediaRatioLandscape:a.mediaRatioSquare,o.className||o[n.class]].join(" ")},o.events)},createContent:function(e,t){var i=t.renderer,n=e.attrs,o=n.dispatcher;return[r({},n.content,{key:"content"}),n.overlay?o({overlay:n.overlay,key:"overlay"}):n.showDimmer&&i("div",{className:a.mediaDimmer,key:"dimmer"})]}}),p=Object.freeze({getElement:function(e){return e.attrs.element||"div"},createProps:function(e,i){var n=i.keys,o=e.attrs,c=Array.isArray(o.content)?o.content.reduce(function(e,t){return"media"===Object.keys(t)[0]||e},!1):o.media||!1;return r({},t.filterSupportedAttributes(o),{key:"card-primary",className:[a.primary,o.tight?a.primaryTight:null,c?a.primaryHasMedia:null,o.className||o[n.class]].join(" ")},o.events)},createContent:function(e,t){var r=t.renderer,i=e.attrs,n=i.dispatcher,o={title:function(e){return e.attrs||e.props?e||e.props:r("div",{className:a.title,key:"title",style:e.style},[e.title,e.subtitle?r("div",{className:a.subtitle,key:"subtitle"},e.subtitle):null])},media:function(e){return r("div",{className:a.primaryMedia,key:"media",style:e.style},n({media:e}))},actions:function(e){return n({actions:e})}};return Array.isArray(i.content)?i.content.map(function(e){var t=Object.keys(e)[0],r=e[t];return o[t]?o[t](r):e}):[i.title?o.title({title:i.title,subtitle:i.subtitle,key:"title"}):null,i.media?o.media(i.media):null,i.actions?o.actions(i.actions):null,i.content]}});e.coreCard=i,e.coreCardActions=s,e.coreCardMedia=u,e.coreCardPrimary=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-card.js.map
