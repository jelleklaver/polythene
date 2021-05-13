import {
  filterSupportedAttributes,
  classForSize,
  createUid,
} from "polythene-core";
import classes from "polythene-css-classes/selection-control";

export const _SelectionControl = ({
  h,
  a,
  useState,
  useEffect,
  ViewControl,
  ...props
}) => {
  // remove unused props
  delete props.key;

  const defaultChecked =
    props.defaultChecked !== undefined
      ? props.defaultChecked
      : props.checked || false;
  const [previousIsChecked, setIsChecked] = useState(defaultChecked);
  const [isSelectable, setIsSelectable] = useState(props.selectable);

  const isChecked =
    props.checked !== undefined ? props.checked : previousIsChecked;

  const inactive = props.disabled || !isSelectable;

  // define isSelectable
  // This variable is set in the next tick to allow button interaction (e.g. ripples) to show
  // before the button is set to inactive state
  useEffect(() => {
    const selectable =
      props.selectable !== undefined ? props.selectable(isChecked) : false;
    if (selectable !== isSelectable) {
      setIsSelectable(selectable);
    }
  }, [props.selectable, isChecked]);

  const notifyChange = (e, isChecked) => {
    if (props.onChange) {
      props.onChange({
        event: e,
        checked: isChecked,
        value: props.value,
      });
    }
  };

  const onChange = (e) => {
    let isChecked = e.currentTarget.checked;
    if (props.type === "radio") {
      // do not set directly
    } else {
      setIsChecked(isChecked);
    }
    notifyChange(e, isChecked);
  };

  const toggle = (e) => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    notifyChange(e, newChecked);
  };

  // Id to match the label to the control
  const uid = createUid();

  const aria = Object.assign(
    {},
    props.aria,
    props.label
      ? {
          "aria-labelledby": uid,
        }
      : undefined
  );
  const isAriaButton = aria.role === "button";

  const viewControlClickHandler = (e) => {
    e.preventDefault();
    toggle(e);
    if (props.events && props.events[a.onclick]) {
      props.events[a.onclick](e);
    }
  };
  const viewControlKeyDownHandler = props.events
    ? props.events[a.onkeydown]
      ? props.events[a.onkeydown]
      : (e) => {
          if (
            e.key === "Space" ||
            e.keyCode === 32 ||
            (isAriaButton && (e.key === "Enter" || e.keyCode === 13))
          ) {
            e.preventDefault();
            toggle(e);
            if (viewControlClickHandler) {
              viewControlClickHandler(e);
            }
          }
        }
    : undefined;

  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props, { remove: ["style"] }), // Set style on view control
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.instanceClass, // for instance pe-checkbox-control
        isChecked ? classes.on : classes.off,
        props.disabled ? classes.disabled : null,
        inactive ? classes.inactive : null,
        classForSize(classes, props.size),
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
    }
  );

  const content = h(
    "label",
    Object.assign(
      {},
      {
        className: classes.formLabel,
        [a.onclick]: viewControlClickHandler,
      }
    ),
    [
      props.before,
      h(
        ViewControl,
        Object.assign({}, props, {
          inactive,
          checked: isChecked,
          events: {
            // Only use key down event; click events are handled by input element
            [a.onkeydown]: viewControlKeyDownHandler,
          },
          aria,
        })
      ),
      props.label ? h(`.${classes.label}`, { id: uid }, props.label) : null,
      h(
        "input",
        Object.assign(
          {},
          props.events,
          {
            name: props.name,
            type: props.type,
            value: props.value,
            checked: isChecked,
          },
          props.disabled || inactive
            ? { [a.readonly]: "readonly" }
            : {
                [a.onchange]: onChange,
              }
        )
      ),
      props.after,
    ]
  );
  return h(props.element || "div", componentProps, content);
};
