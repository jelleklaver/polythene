import { Component } from "mithril";
import { Options } from "polythene-core-list";

interface List extends Options{}
declare namespace List {}
declare const List: Component<Options, any>;

export { List };
export as namespace List;
