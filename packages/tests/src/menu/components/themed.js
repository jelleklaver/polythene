import { MenuCSS, ListTileCSS } from "polythene-css";

const themeColor = "#2196F3";

export default ({ h, List, ListTile }) => {

  MenuCSS.addStyle(".menu-tests-blue-menu", {
    color_dark_background: themeColor,
    border_radius: 6
  });
  ListTileCSS.addStyle(".menu-tests-blue-menu-list-tile", {
    color_light_title: "#fff",
    color_light_background: themeColor
  });

  const themedList = h(List, [
    h(ListTile, {
      title: "Yes",
      ink: true,
      className: "menu-tests-blue-menu-list-tile",
      hoverable: true,
    }),
    h(ListTile, {
      title: "No",
      ink: true,
      className: "menu-tests-blue-menu-list-tile",
      hoverable: true,
    })
  ]);

  const styledList = h(List, [
    h(ListTile, {
      title: "Yes",
      ink: true,
      style: {
        backgroundColor: themeColor,
        color: "#fff"
      },
    }),
    h(ListTile, {
      title: "No",
      ink: true,
      style: {
        backgroundColor: themeColor,
        color: "#fff"
      },
    })
  ]);

  return { themeColor, themedList, styledList }; 
};
