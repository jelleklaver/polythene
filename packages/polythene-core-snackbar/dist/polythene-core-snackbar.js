!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core-notification")):"function"==typeof define&&define.amd?define(["exports","polythene-core-notification"],e):e((t=t||self).polythene={},t["polythene-core-notification"])}(this,(function(t,e){"use strict";var n={show:function(t){var e=t.containerEl,n=t.el,o=t.duration,i=t.delay;return{el:e,duration:o||.4,delay:i||0,before:function(){n.style.display="block";var t=n.getBoundingClientRect().height;e.style.transform="translate3d(0, ".concat(t,"px, 0)")},transition:function(){return e.style.transform="translate3d(0, 0px, 0)"}}},hide:function(t){var e=t.containerEl,n=t.el,o=t.duration,i=t.delay;return{el:e,duration:o||.4,delay:i||0,transition:function(){var t=n.getBoundingClientRect().height;e.style.transform="translate3d(0, ".concat(t,"px, 0)")},after:function(){n.style.display="none",e.style.transitionDuration="0ms",e.style.transform="translate3d(0, 0px, 0)"}}}};Object.defineProperty(t,"_Snackbar",{enumerable:!0,get:function(){return e._Notification}}),t.transitions=n,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-core-snackbar.js.map
