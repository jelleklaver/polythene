import { statelessComponent } from "polythene-react-base";
import { icon as component } from "polythene-core-icon";
import { svg } from "polythene-react-svg";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { svg }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { svg }));

export const icon = statelessComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

icon.theme = component.theme;
icon.displayName = "Icon";
