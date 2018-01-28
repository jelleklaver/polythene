import { filterSupportedAttributes, subscribe, unsubscribe, show, hide, isServer, isTouch } from "polythene-core";
import classes from "polythene-css-classes/menu";
import defaultTransitions from "./transitions";
import backdropTransitions from "./backdrop-transitions";

export const getElement = vnode =>
  vnode.attrs.element || "div";

const SHADOW_Z           = 1;
const OFFSET_V           = -8;
const DEFAULT_OFFSET_H   = 0;
const MIN_SIZE           = 1.5;
const ANIMATION_DURATION = .220;

const positionMenu = (state, attrs) => {
  if (!attrs.target || isServer) {
    return;
  }
  const targetEl = document.querySelector(attrs.target);
  if (!targetEl) {
    return;
  }
  const offsetH = (attrs.offset !== undefined) ? attrs.offset : DEFAULT_OFFSET_H;
  const menuEl = state.dom();
  if (!menuEl) {
    return;
  }
  const contentEl = state.dom().querySelector("." + classes.content);
  const origin = attrs.origin || "top-left";
  let positionOffset = 0;
  if (attrs.reposition) {
    const firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];
    const selectedItem = contentEl.querySelector("." + classes.selectedListTile);
    if (firstItem && selectedItem) {
      // calculate v position: menu should shift upward relative to the first item
      const firstItemRect = firstItem.getBoundingClientRect();
      const selectedItemRect = selectedItem.getBoundingClientRect();
      positionOffset = selectedItemRect.top - firstItemRect.top;
    }
    // align to middle of target
    const alignEl = selectedItem || firstItem;
    const alignRect = alignEl.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    const heightDiff = alignRect.height - targetRect.height;
    positionOffset += heightDiff / 2;
  }
  const targetRect = targetEl.getBoundingClientRect();
  if (menuEl.parentNode) {
    const parentRect = menuEl.parentNode.getBoundingClientRect();
    const alignLeft =   () => menuEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
    const alignRight =  () => menuEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
    const alignTop =    () => menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + "px";
    const alignBottom = () => menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + "px";
    const alignFn = {
      "top-left":       () => alignTop() && alignLeft(),
      "top-right":      () => alignTop() && alignRight(),
      "bottom-left":    () => alignBottom() && alignLeft(),
      "bottom-right":   () => alignBottom() && alignRight()
    };
    alignFn[origin].call();
  }
};

const showBackdrop = (state, attrs) => {
  if (!attrs.backdrop || isServer) {
    return;
  }
  const targetEl = document.querySelector(attrs.backdropTarget);
  if (!targetEl) {
    return;
  }
  const el = document.createElement("div");
  el.setAttribute("class", classes.backdrop);
  targetEl.appendChild(el);
  state.backdropEl = el;
  show(Object.assign({},
    attrs,
    backdropTransitions.show({ el, showDuration: attrs.showDuration || ANIMATION_DURATION, showDelay: attrs.showDelay })
  ));
};

const hideBackdrop = (state, attrs) => {
  if (!state.backdropEl) {
    return;
  }
  const el = state.backdropEl;
  hide(Object.assign({},
    attrs,
    backdropTransitions.hide({ el, hideDuration: attrs.hideDuration || ANIMATION_DURATION, hideDelay: attrs.hideDelay })
  )).then(() => {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
};

const showMenu = (state, attrs) => {
  if (attrs.onChange) {
    attrs.onChange({ visible: false, transitioning: true });
  }
  positionMenu(state, attrs);
  showBackdrop(state, attrs);
  const transitions = attrs.transitions || defaultTransitions;
  console.log("attrs.transitions", attrs.transitions);
  const el = state.dom();
  return show(Object.assign({},
    attrs,
    transitions.show({ el, showDuration: attrs.showDuration || ANIMATION_DURATION, showDelay: attrs.showDelay })
  )).then(() => {
    if (attrs.onChange) {
      attrs.onChange({ visible: true, transitioning: false });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
    state.visible(false);
  });
};

const hideMenu = (state, attrs) => {
  if (attrs.onChange) {
    attrs.onChange({ visible: true, transitioning: true });
  }
  hideBackdrop(state, attrs);
  const transitions = attrs.transitions || defaultTransitions;
  const el = state.dom();
  return hide(Object.assign({},
    attrs,
    transitions.hide({ el, hideDuration: attrs.hideDuration || ANIMATION_DURATION, hideDelay: attrs.hideDelay })
  )).then(() => {
    if (attrs.onChange) {
      attrs.onChange({ visible: false, transitioning: false });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    state.visible(false);
  });
};

const unifySize = size =>
  size < MIN_SIZE ? MIN_SIZE : size;

const widthClass = size =>
  classes.width_n + size.toString().replace(".", "-");

const handleSubscriptions = (vnode, which) => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  if (which === "mount") {
    subscribe("resize", state.update);
    subscribe("keydown", state.handleEscape);
    setTimeout(() => {
      state.activateDismissTap();
      showMenu(state, attrs);
    }, 0);
  } else {
    unsubscribe("resize", state.update);
    unsubscribe("keydown", state.handleEscape);
    state.deActivateDismissTap();
  }
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.dom(vnode.dom);

  if (!attrs.permanent) {
    state.handleDismissTap = e => {
      if (e.target === state.dom()) {
        return;
      }
      if (e.defaultPrevented) {
        // clicked on .pe-menu__content
        hideMenu(state, attrs);
      } else {
        hideMenu(state, Object.assign({}, attrs, {
          hideDelay: 0
        }));
      }
    };

    state.update = () => {
      positionMenu(state, attrs);
    };

    state.activateDismissTap = () => {
      if (isTouch) {
        document.addEventListener("touchstart", state.handleDismissTap);
      } else {
        document.addEventListener("click", state.handleDismissTap);
      }
    };

    state.deActivateDismissTap = () => {
      if (isTouch) {
        document.removeEventListener("touchstart", state.handleDismissTap);
      } else {
        document.removeEventListener("click", state.handleDismissTap);
      }
    };

    state.handleEscape = e => {
      if (e.key === "Escape" || e.key === "Esc") {
        hideMenu(state, Object.assign(
          {},
          attrs,
          { hideDelay: 0 }
        ));
      }
    };

    handleSubscriptions(vnode, "mount");
  }
};

export const onUnMount = vnode => {
  const attrs = vnode.attrs;
  if (!attrs.permanent) {
    handleSubscriptions(vnode, "unmount");
  }
};

export const getInitialState = (vnode, createStream) => {
  const dom = createStream(null);
  const visible = createStream(false);
  return {
    dom,
    visible,
    backdropEl: undefined,
    activateDismissTap: undefined, // set in onMount
    deActivateDismissTap: undefined, // set in onMount
    handleDismissTap: undefined, // set in onMount
    handleEscape: undefined, // set in onMount
    update: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([visible])
  };
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  const type = attrs.type || "floating";
  return Object.assign(
    {}, 
    filterSupportedAttributes(attrs),
    {
      className: [
        attrs.parentClassName || classes.component,
        attrs.permanent ? classes.permanent : null,
        type === "floating" ? classes.floating : null,
        attrs.target ? classes.target : null,
        attrs.size ? widthClass(unifySize(attrs.size)) : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
  );
};

export const createContent = (vnode, { renderer: h, keys: k, Shadow }) => {
  const attrs = vnode.attrs;
  const z = attrs.z !== undefined ? attrs.z : SHADOW_Z;
  return h("div",
    {
      className: classes.content,
      [k.onclick]: e => e.preventDefault(),
      style: attrs.style
    },
    [
      z > 0 && h(Shadow, {
        z,
        animated: true
      }),
      attrs.content
        ? attrs.content
        : vnode.children
    ]
  );
};
