import { Component, Vnode } from "mithril";
import { Options } from "polythene-core-list-tile";

interface ListTile extends Options{}
declare namespace ListTile {}
declare const ListTile: Component<Options, any>;

export { ListTile };
export as namespace ListTile;
