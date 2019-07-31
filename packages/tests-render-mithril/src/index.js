import { addLayoutStyles, addTypography } from "polythene-css";
import { rules as css } from "./styles";
import Page from "./Page";
import { List, ListTile, Toolbar, ToolbarTitle } from "polythene-mithril";
import { h } from "cyano-mithril";

import routes from "./routes";
import Footer from "./Footer";

addTypography();
addLayoutStyles();

const TITLE = "Polythene Components for Mithril";

const navBar = () =>
  h(css.headerRow, h(Toolbar,
    {
      style: { backgroundColor: "rgba(255,255,255,.93)" }
    },
    h(ToolbarTitle, {
      text: TITLE
    })
  ));

const index = {
  oncreate: () => (
    document.title = TITLE
  ),
  view: () =>
    [
      navBar(),
      h(".navbar-spacer"),
      h(List,
        { className: "index-list" },
        routes.map(route => (
          h(ListTile, {
            element: h.route.Link,
            title: route.name,
            hoverable: true,
            url: {
              href: route.path,
            }
          })
        ))
      ),
      h(Footer)
    ]
};

let scrollTop = document.scrollingElement
  ? document.scrollingElement.scrollTop
  : document.scrollTop;
h.route.prefix = "#";
const mountNode = document.querySelector("#app");
const routeData = {
  "/": {
    onmatch: () => {
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = scrollTop;
      } else {
        document.scrollTop = scrollTop || 0;
      }
      document.title = "Polythene Components for Mithril";
      return index;
    }
  }
};
routes.forEach(route => routeData[route.path] = {
  onmatch: () => {
    scrollTop = document.scrollingElement
      ? document.scrollingElement.scrollTop
      : document.scrollTop;
    document.title = `Polythene: ${route.name}`;
    return Page(route, "/");
  }
});
h.route(mountNode, "/", routeData);
