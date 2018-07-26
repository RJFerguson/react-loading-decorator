"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingManager = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\nborder-radius: 50%;\nwidth: 10em;\nheight: 10em;\nfont-size: ", "px;\nborder-top: 1.1em solid rgba(0, 0, 0, 0);\nborder-right: 1.1em solid rgba(0, 0, 0, 0);\nborder-bottom: 1.1em solid rgba(0, 0, 0, 0);\nborder-left: 1.1em solid ", ";\nanimation: ", " ", "s infinite linear;\n  &:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em;\n  }\n}"], ["\nborder-radius: 50%;\nwidth: 10em;\nheight: 10em;\nfont-size: ", "px;\nborder-top: 1.1em solid rgba(0, 0, 0, 0);\nborder-right: 1.1em solid rgba(0, 0, 0, 0);\nborder-bottom: 1.1em solid rgba(0, 0, 0, 0);\nborder-left: 1.1em solid ", ";\nanimation: ", " ", "s infinite linear;\n  &:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em;\n  }\n}"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate360 = (0, _styledComponents.keyframes)(_templateObject);

var Loader = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.size || "8";
}, function (props) {
  return props.color || "black";
}, rotate360, function (props) {
  return props.duration || "1.1";
});

var loadingManager = function loadingManager(config) {
  return function (target, key, descriptor) {
    // Store the original render method on the target.
    target.renderOnLoad = target.renderOnLoad || descriptor.value;
    descriptor.value = function () {
      // bind `this` so the render function
      // can access the original state
      var render = target.renderOnLoad.bind(this);
      var _state = this.state,
          isLoading = _state.isLoading,
          isReloading = _state.isReloading;

      var contents = void 0;
      if (isLoading === undefined || isLoading === true) {
        contents = null;
      } else {
        contents = render();
      }
      return _react2.default.createElement(
        LoadingWrapper,
        _extends({
          isLoading: isLoading,
          isReloading: isReloading
        }, config),
        contents
      );
    };
    return descriptor;
  };
};

var LoadingWrapper = function LoadingWrapper(props) {
  if (props.children === null) {
    return _react2.default.createElement(LoadingIndicator, props);
  } else {
    return _react2.default.createElement(
      "div",
      null,
      props.children
    );
  }
};

var LoadingIndicator = function LoadingIndicator(_ref) {
  var size = _ref.size,
      color = _ref.color,
      duration = _ref.duration;

  return _react2.default.createElement(Loader, { size: size, color: color, duration: duration });
};

exports.loadingManager = loadingManager;