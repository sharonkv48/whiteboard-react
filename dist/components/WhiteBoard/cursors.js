"use strict";

exports.__esModule = true;
exports.getCursor = exports.cursors = void 0;
var _eraser = _interopRequireDefault(require("./../images/eraser.svg"));
var _pencil = _interopRequireDefault(require("./../images/pencil.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const cursors = exports.cursors = {
  eraser: "url(" + _eraser.default + ") 0 30, auto",
  pencil: "url(" + _pencil.default + ") 0 80, auto"
};
const getCursor = type => {
  return cursors[type];
};
exports.getCursor = getCursor;