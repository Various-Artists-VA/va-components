"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonType = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["primary"] = 0] = "primary";
    ButtonType[ButtonType["secondary"] = 1] = "secondary";
    ButtonType[ButtonType["text"] = 2] = "text";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
exports.Button = function (_a) {
    var _b;
    var type = _a.type, children = _a.children;
    return (react_1.default.createElement("div", { className: classnames_1.default(Button_module_scss_1.default.container, (_b = {},
            _b[Button_module_scss_1.default.primary] = type === ButtonType.primary,
            _b[Button_module_scss_1.default.secondary] = type === ButtonType.secondary,
            _b)) }, children));
};
exports.Button.defaultProps = {
    type: ButtonType.primary,
    children: react_1.default.createElement(react_1.default.Fragment, null, "test"),
};
//# sourceMappingURL=Button.js.map