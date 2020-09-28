"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    var type = _a.type, _b = _a.variant, variant = _b === void 0 ? "medium" : _b, children = _a.children, onClick = _a.onClick, className = _a.className, rest = __rest(_a, ["type", "variant", "children", "onClick", "className"]);
    return (react_1.default.createElement("div", __assign({ className: classnames_1.default(Button_module_scss_1.default.container, Button_module_scss_1.default[variant], Button_module_scss_1.default[type], className), onClick: onClick }, rest), children));
};
exports.Button.defaultProps = {
    type: "primary",
    variant: "medium",
};
exports.default = exports.Button;
//# sourceMappingURL=Button.js.map