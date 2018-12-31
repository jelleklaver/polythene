import * as m from "mithril";

/* animation-event.js START */

  /**
   * Returns the name of the animation end event of the current client.
   */
  declare function getAnimationEndEvent() : string | void;

/* animation-event.js END */


/* attrs.js START */

  /**
   * Updates the `attrs` object by adding keys to or removing keys from it.
   */
  declare function filterSupportedAttributes(attrs: object, { add, remove } : { add: string[], remove: string[]}) : void;

  /**
   * Unpacks the `attrs` object if it is wrapped in a stream function.
   */
  declare function unpackAttrs(attrs: object | (() => object)) : object;

  export interface CSSClasses {
    [s: string]: string;
  }

  /**
   * Gets the class name for a given size.
   */
  declare function classForSize(classes: CSSClasses, size: string) : string;

/* attrs.js END */


/* developer.js START */

  /**
   * Creates console warnings for deprecated components or component options and provides info on replacements.
   */
  declare function deprecation(component: string, { option, newOption, newComponent, message } : { option?: string, newOption?: string, newComponent?: string, message?: string } ) : void;

/* developer.js END */

/* icon.js START */

  /**
   * SVG string for dropdown icon.
   */
  declare function iconDropdownUp() : string;

  /**
   * SVG string for dropup icon.
   */
  declare function iconDropdownDown() : string;

/* icon.js END */


/* iso.js START */

  /**
   * Returns true if the client has a document property.
   */
  declare function isClient() : boolean;

  /**
   * Returns true if the client does not have a document property.
   */
  declare function isServer() : boolean;

/* iso.js END */

export interface CommonOptions {

  /**
   * Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth.
   */
  after?: any;

  /**
   * Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth.
   */
  before?: any;

  /**
   * Additional CSS class to default component class.
   */
  className?: string;
  
  /**
   * HTML element id.
   */
  id?: string;

  /**
   * Generated HTML element.
   * @default "div"
   */
  element?: string;

  /**
   * For setting simple style attributes.
   */
  style?: CSSStyleDeclaration;

  /**
   * Renders the component light on dark (sets class pe-dark-tone); use "light" to locally inverse (sets class pe-light-tone).
   */
  tone?: "dark" | "light";

}

export interface URLOptions {

  /**
   * Link target.
   */
  href?: string;

  /**
   * Mithril lifecycle method.
   * https://mithril.js.org/route.html
   */
  oncreate?: (vnode: m.VnodeDOM) => any;

  /**
   * Mithril lifecycle method.
   * https://mithril.js.org/route.html
   */
  onupdate?: (vnode: m.VnodeDOM) => any;

  /**
   * React event method.
   */
  onClick?: (e:Event) => any;

  /**
   * React Router path.
   */
  to?: string;
}

interface TransitionAppearanceReturnOptions {
  
  el?: HTMLElement,

  /**
   * Transition duration in seconds.
   */
  duration?: number;

  /**
   * Delay duration in seconds.
   */
  delay?: number;

  /**
   * Callback function called just before the transition.
   */
  before?: () => void;

  /**
   * Callback function called just after the transition. After a hide transition, the transitioning element may be reset or hidden.
   */
  after?: () => void;

  /**
   * Callback function called at the transition. The transitioning element should be set to its goal.
   */
  transition?: () => void;

  /**
   * The timing function.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
   */
  timingFunction?: string;

}

interface TransitionAppearanceOptions {
  show?: ({ el, backdropEl, contentEl } : { el?: HTMLElement, backdropEl?: HTMLElement, contentEl?: HTMLElement }) => TransitionAppearanceReturnOptions;
  hide?: ({ el, backdropEl, contentEl } : { el?: HTMLElement, backdropEl?: HTMLElement, contentEl?: HTMLElement }) => TransitionAppearanceReturnOptions;
}

export interface TransitionOptions {

  /**
   * The show transition duration in seconds.
   * @default .240
   */
  showDuration?: number;

  /**
   * The hide transition duration in seconds.
   * @default .240
   */
  hideDuration?: number;

  /**
   * The show delay duration in seconds.
   * @default 0
   */
  showDelay?: number;

  /**
   * The hide delay duration in seconds.
   * @default 0
   */
  hideDelay?: number;

  /**
   * The show timing function.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
   */
  showTimingFunction?: string;

  /**
   * The hide timing function.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
   */
  hideTimingFunction?: string;

  /**
   * Callback function that is called when the show transition is done.
   */
  didShow?: (id: string) => void;
  
  /**
   * Callback function that is called when the hide transition is done.
   */
  didHide?: (id: string) => void;

  /**
   * Object with functions for keys show and hide.
   */
  transitions?: TransitionAppearanceOptions;

}
