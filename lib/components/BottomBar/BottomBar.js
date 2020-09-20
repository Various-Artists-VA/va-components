"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomBar = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var BottomBar_module_scss_1 = __importDefault(require("./BottomBar.module.scss"));
var Button_1 = __importStar(require("../Button/Button"));
exports.BottomBar = function (_a) {
    var onBack = _a.onBack, actions = _a.actions, className = _a.className;
    return (react_1.default.createElement("div", { className: classnames_1.default(BottomBar_module_scss_1.default.container, className) },
        onBack ? (react_1.default.createElement(Button_1.default, { type: "text", variant: Button_1.ButtonVariant.large, onClick: onBack }, "Back")) : null,
        react_1.default.createElement("div", { className: BottomBar_module_scss_1.default.actions }, actions === null || actions === void 0 ? void 0 : actions.map(function (action) { return (react_1.default.createElement(Button_1.default, { type: "text", key: action.name, variant: Button_1.ButtonVariant.large, onClick: action.onClick }, action.name)); }))));
};
exports.default = exports.BottomBar;
//# sourceMappingURL=BottomBar.js.map