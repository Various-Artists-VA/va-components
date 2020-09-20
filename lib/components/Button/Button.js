"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonVariant = exports.ButtonType = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
var ButtonType;
(function (ButtonType) {
    ButtonType["primary"] = "primary";
    ButtonType["secondary"] = "secondary";
    ButtonType["text"] = "text";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["large"] = "large";
    ButtonVariant["medium"] = "medium";
    ButtonVariant["small"] = "small";
})(ButtonVariant = exports.ButtonVariant || (exports.ButtonVariant = {}));
exports.Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "primary" : _b, _c = _a.variant, variant = _c === void 0 ? "medium" : _c, children = _a.children, onClick = _a.onClick;
    return (react_1.default.createElement("div", { className: classnames_1.default(Button_module_scss_1.default.container, Button_module_scss_1.default[variant], Button_module_scss_1.default[type]), onClick: onClick }, children));
};
exports.Button.defaultProps = {
    type: "primary",
    variant: "medium",
};
exports.default = exports.Button;
//# sourceMappingURL=Button.js.map