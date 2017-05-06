import h from 'react-hyperscript';
import { Component } from 'react';
import ReactDOM from 'react-dom';

var keys = {
  class: "className",
  formaction: "formAction",
  onblur: "onBlur",
  onclick: "onClick",
  onfocus: "onFocus",
  onkeydown: "onKeyDown",
  onkeyup: "onKeyUp",
  onmousedown: "onMouseDown",
  onmouseout: "onMouseOut",
  onmouseover: "onMouseOver",
  onmouseup: "onMouseUp",
  tabindex: "tabIndex"
};

var renderer = h;

renderer.trust = function (html) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";

  if (html == null) html = "";
  return h(element, {
    dangerouslySetInnerHTML: { __html: html }
  });
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var statefulComponent = function statefulComponent(_ref) {
  var createContent = _ref.createContent,
      createProps = _ref.createProps,
      _ref$getInitialState = _ref.getInitialState,
      getInitialState = _ref$getInitialState === undefined ? function () {
    return {};
  } : _ref$getInitialState,
      element = _ref.element,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === undefined ? function () {} : _ref$onMount,
      _ref$onUnmount = _ref.onUnmount,
      onUnmount = _ref$onUnmount === undefined ? function () {} : _ref$onUnmount,
      _ref$state = _ref.state,
      state = _ref$state === undefined ? {} : _ref$state;


  return function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.state = {
        now: Date.now()
      };
      state = _extends({}, state, getInitialState(props));
      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        onMount(this.createVirtualNode());
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        onUnmount(this.createVirtualNode());
      }
    }, {
      key: "updateState",
      value: function updateState(attr, value, callback) {
        state[attr] = value;
        // Force rerender
        this.setState({
          now: Date.now()
        }, callback);
      }
    }, {
      key: "createVirtualNode",
      value: function createVirtualNode() {
        var props = _extends({}, this.props);
        return _extends({}, {
          state: state,
          attrs: props,
          children: props.children,
          dom: this.dom,
          updateState: this.updateState.bind(this)
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var vnode = this.createVirtualNode();
        return renderer(vnode.attrs.element || element, _extends({}, createProps(vnode, { renderer: renderer, keys: keys }), { ref: function ref(reactComponent) {
            if (!_this2.dom) {
              _this2.dom = ReactDOM.findDOMNode(reactComponent);
            }
          } }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, keys: keys }), vnode.attrs.after]);
      }
    }]);

    return _class;
  }(Component);
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var statelessComponent = function statelessComponent(_ref) {
  var createContent = _ref.createContent,
      createProps = _ref.createProps,
      element = _ref.element;


  return function (_Component) {
    _inherits$1(_class, _Component);

    function _class() {
      _classCallCheck$1(this, _class);

      return _possibleConstructorReturn$1(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass$1(_class, [{
      key: "createVirtualNode",
      value: function createVirtualNode() {
        var props = _extends$1({}, this.props);
        return {
          attrs: props,
          children: props.children,
          dom: this.dom
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var vnode = this.createVirtualNode();
        return renderer(vnode.attrs.element || element, _extends$1({}, createProps(vnode, { renderer: renderer, keys: keys }), { ref: function ref(reactComponent) {
            if (!_this2.dom) {
              _this2.dom = ReactDOM.findDOMNode(reactComponent);
            }
          } }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, keys: keys }), vnode.attrs.after]);
      }
    }]);

    return _class;
  }(Component);
};

export { keys, renderer, statefulComponent, statelessComponent };
