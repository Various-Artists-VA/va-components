"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomBar = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var BottomBar_module_scss_1 = __importDefault(require("./BottomBar.module.scss"));
var Text_1 = require("../Text");
exports.BottomBar = function (_a) {
    var onBack = _a.onBack, actions = _a.actions, className = _a.className;
    return (react_1.default.createElement("div", { className: classnames_1.default(BottomBar_module_scss_1.default.container, className) },
        onBack ? react_1.default.createElement(Text_1.Title, { onClick: onBack }, "Back") : null,
        react_1.default.createElement("div", { className: BottomBar_module_scss_1.default.actions }, actions === null || actions === void 0 ? void 0 : actions.map(function (action) { return (react_1.default.createElement(Text_1.Title, { onClick: action.onClick }, action.name)); }))));
};
//# sourceMappingURL=BottomBar.js.map