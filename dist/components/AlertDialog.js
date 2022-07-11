"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AlertDialog;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));

var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AlertDialog(props) {
  var title = props.title,
      description = props.description,
      btnCloseContent = props.btnCloseContent,
      open = props.open,
      onCancel = props.onCancel;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Dialog.default, {
    open: open,
    onClose: onCancel,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, title), /*#__PURE__*/React.createElement(_DialogContent.default, null, /*#__PURE__*/React.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, description)), /*#__PURE__*/React.createElement(_DialogActions.default, null, /*#__PURE__*/React.createElement(_Button.default, {
    onClick: onCancel
  }, btnCloseContent))));
}