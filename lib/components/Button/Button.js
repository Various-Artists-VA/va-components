"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonSize = exports.ButtonType = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
var ButtonType;
(function (ButtonType) {
    ButtonType["primary"] = "primary";
    ButtonType["secondary"] = "secondary";
    ButtonType["text"] = "text";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["large"] = "large";
    ButtonSize["medium"] = "medium";
    ButtonSize["small"] = "small";
})(ButtonSize = exports.ButtonSize || (exports.ButtonSize = {}));
exports.Button = function (_a) {
    var _b;
    var type = _a.type, children = _a.children, size = _a.size;
    return (react_1.default.createElement("div", { className: classnames_1.default(Button_module_scss_1.default.container, (_b = {},
            _b[Button_module_scss_1.default.primary] = type === ButtonType.primary,
            _b[Button_module_scss_1.default.secondary] = type === ButtonType.secondary,
            _b[Button_module_scss_1.default.large] = size === ButtonSize.large,
            _b[Button_module_scss_1.default.medium] = size === ButtonSize.medium,
            _b[Button_module_scss_1.default.small] = size === ButtonSize.small,
            _b)) }, children));
};
exports.Button.defaultProps = {
    type: ButtonType.primary,
    size: ButtonSize.large,
    children: react_1.default.createElement(react_1.default.Fragment, null, "test"),
};
//# sourceMappingURL=Button.js.map