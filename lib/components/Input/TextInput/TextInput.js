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
exports.TextInput = exports.InputVariant = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Clear_1 = __importDefault(require("../../../assets/Clear"));
var TextInput_module_scss_1 = __importDefault(require("./TextInput.module.scss"));
var InputVariant;
(function (InputVariant) {
    InputVariant["large"] = "large";
    InputVariant["medium"] = "default";
    InputVariant["small"] = "small";
})(InputVariant = exports.InputVariant || (exports.InputVariant = {}));
exports.TextInput = function (_a) {
    var _b;
    var initialValue = _a.initialValue, placeholder = _a.placeholder, variant = _a.variant, icon = _a.icon, label = _a.label, name = _a.name, isClearable = _a.isClearable, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, style = _a.style, className = _a.className, classNamePrefix = _a.classNamePrefix, rest = __rest(_a, ["initialValue", "placeholder", "variant", "icon", "label", "name", "isClearable", "onChange", "onFocus", "onBlur", "style", "className", "classNamePrefix"]);
    var _c = react_1.useState(false), focused = _c[0], setFocused = _c[1];
    var _d = react_1.useState(initialValue ? initialValue : ""), currentValue = _d[0], setCurrentValue = _d[1];
    var clear = function () {
        setCurrentValue("");
    };
    var Icon = icon
        ? require("react-feather/dist/icons/" + icon).default
        : null;
    var iconOptions = {};
    var clearOptions = {};
    switch (variant) {
        case InputVariant.large:
            iconOptions.size = 24;
            clearOptions.height = 24;
            clearOptions.width = 24;
            break;
        case InputVariant.medium:
            iconOptions.size = 20;
            clearOptions.height = 20;
            clearOptions.width = 20;
            break;
        case InputVariant.small:
            iconOptions.size = 16;
            clearOptions.height = 16;
            clearOptions.width = 16;
            break;
    }
    return (react_1.default.createElement("div", { className: classnames_1.default(TextInput_module_scss_1.default.wrapper, TextInput_module_scss_1.default[variant], className, classNamePrefix + "--wrapper"), style: style },
        label ? (react_1.default.createElement("div", { className: classnames_1.default(TextInput_module_scss_1.default.label, TextInput_module_scss_1.default[variant], classNamePrefix + "--label") }, label)) : null,
        react_1.default.createElement("div", { className: classnames_1.default(TextInput_module_scss_1.default.container, TextInput_module_scss_1.default[variant], classNamePrefix + "--container", (_b = {},
                _b[TextInput_module_scss_1.default.focused] = focused,
                _b)) },
            icon ? (react_1.default.createElement(Icon, __assign({}, iconOptions, { className: classnames_1.default(TextInput_module_scss_1.default.icon, classNamePrefix + "--icon") }))) : null,
            react_1.default.createElement("input", __assign({ type: "text", name: name, value: currentValue, placeholder: placeholder, className: classnames_1.default(TextInput_module_scss_1.default.input, classNamePrefix + "--input"), onChange: function (e) {
                    setCurrentValue(e.target.value);
                    if (onChange)
                        onChange(e);
                }, onFocus: function (e) {
                    setFocused(true);
                    if (onFocus)
                        onFocus(e);
                }, onBlur: function (e) {
                    setFocused(false);
                    if (onBlur)
                        onBlur(e);
                } }, rest)),
            isClearable && currentValue && currentValue !== "" && (react_1.default.createElement(Clear_1.default, __assign({ className: classnames_1.default(TextInput_module_scss_1.default.clear, classNamePrefix + "--clear"), viewBox: "0 0 24 24", onClick: clear }, clearOptions))))));
};
exports.TextInput.defaultProps = {
    variant: InputVariant.medium,
    classNamePrefix: "text-input",
};
exports.default = exports.TextInput;
//# sourceMappingURL=TextInput.js.map