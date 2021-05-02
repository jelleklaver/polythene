import { filterSupportedAttributes, iconDropdownDown } from "polythene-core";
import classes from "polythene-css-classes/button";
import shadowClasses from "polythene-css-classes/shadow";
import { getDepthClass } from "polythene-core-shadow";

const DEFAULT_SHADOW_DEPTH = 1;

export const _Button = ({
  h,
  a,
  getRef,
  useState,
  useEffect,
  useRef,
  Ripple,
  Shadow,
  Icon,
  ...props
}) => {
  const events = props.events || {};
  const [domElement, setDomElement] = useState();
  const [isInactive, setIsInactive] = useState(props.inactive);
  const disabled = props.disabled;
  const inactive = props.inactive || isInactive;
  const onClickHandler = events[a.onclick] || (() => {});
  const onKeyUpHandler = events[a.onkeyup] || onClickHandler;
  const shadowDepth = props.raised
    ? props.shadowDepth !== undefined
      ? props.shadowDepth
      : DEFAULT_SHADOW_DEPTH
    : 0;
  const animateOnTap = props.animateOnTap !== false ? true : false;

  const handleInactivate = () => {
    if (props.inactivate === undefined) {
      return;
    }
    setIsInactive(true);
    setTimeout(() => setIsInactive(false), props.inactivate * 1000);
  };

  const hasHover =
    !disabled &&
    !props.selected &&
    (props.raised ? props.wash : props.wash !== false);

  const handleMouseLeave = (e) => {
    domElement.blur();
    domElement.removeEventListener("mouseleave", handleMouseLeave);
  };

  const aria = Object.assign(
    {},
    props.aria || { role: "button" },
    disabled || inactive
      ? {
          "aria-disabled": "true",
        }
      : undefined
  );

  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props, {
      add: [a.formaction, "type"],
      remove: ["style"],
    }), // Set style on content, not on component
    getRef((dom) => {
      if (!dom || domElement) {
        return;
      }
      setDomElement(dom);
      if (props.getRef) {
        props.getRef(dom);
      }
    }),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.super,
        props.parentClassName || classes.component,
        props.contained ? classes.contained : undefined,
        // Raised button classes
        props.raised ? classes.contained : undefined,
        props.raised ? classes.raised : undefined,
        props.raised && animateOnTap
          ? shadowClasses.with_active_shadow
          : undefined,
        props.raised && animateOnTap
          ? getDepthClass(shadowDepth + 1)
          : undefined,
        //
        hasHover ? classes.hasHover : undefined,
        props.selected ? classes.selected : undefined,
        props.highLabel ? classes.highLabel : undefined,
        props.extraWide ? classes.extraWide : undefined,
        disabled ? classes.disabled : undefined,
        inactive ? classes.inactive : undefined,
        props.separatorAtStart ? classes.separatorAtStart : undefined,
        props.border || props.borders ? classes.border : undefined,
        props.dropdown ? classes.hasDropdown : undefined,
        props.dropdown
          ? props.dropdown.open
            ? classes.dropdownOpen
            : classes.dropdownClosed
          : undefined,
        props.tone === "dark" ? "pe-dark-tone" : undefined,
        props.tone === "light" ? "pe-light-tone" : undefined,
        props.className || props[a.class],
      ].join(" "),
      [a.tabindex]: (props[a.tabindex] || 0).toString(), // do not set to -1 when disabled or inactive to allow screen readers to access the button
    },
    inactive
      ? null
      : {
          ...events,
          [a.onmousedown]: (e) => (
            domElement &&
              domElement.addEventListener &&
              domElement.addEventListener("mouseleave", handleMouseLeave),
            props.events &&
              props.events[a.onmousedown] &&
              props.events[a.onmousedown](e)
          ),
          [a.onclick]: (e) => (
            document.activeElement === domElement &&
              document.activeElement.blur(),
            handleInactivate(e),
            onClickHandler(e)
          ),
          [a.onkeyup]: (e) => {
            if (e.keyCode === 13 && document.activeElement === domElement) {
              document.activeElement.blur();
              if (onKeyUpHandler) {
                onKeyUpHandler(e);
              }
            }
            props.events &&
              props.events[a.onkeyup] &&
              props.events[a.onkeyup](e);
          },
        },
    props.url,
    disabled ? { disabled: true } : undefined,
    aria
  );

  const noink = props.ink !== undefined && props.ink === false;
  const buttonContent = props.content
    ? props.content
    : props.label !== undefined
    ? typeof props.label === "object"
      ? props.label
      : h(
          "div",
          {
            className: classes.label,
          },
          h(
            "div",
            {
              className: classes.textLabel,
              style: props.textStyle,
            },
            props.label
          )
        )
    : props.children;

  const componentContent = h(
    "div",
    {
      className: classes.content,
      style: props.style,
    },
    [
      h(Shadow, {
        shadowDepth: shadowDepth !== undefined ? shadowDepth : 0,
        animated: true,
      }),
      disabled || noink
        ? undefined
        : h(
            Ripple,
            Object.assign(
              {},
              {
                target: domElement,
              },
              props.ripple
            )
          ),
      h(
        "div",
        {
          className: classes.wash,
        },
        h("div", { className: classes.washColor })
      ),
      buttonContent,
      props.dropdown
        ? h(Icon, {
            className: classes.dropdown,
            svg: { content: h.trust(iconDropdownDown) },
          })
        : null,
    ]
  );
  return h(props.element || "a", componentProps, [
    props.before,
    componentContent,
    props.after,
  ]);
};
