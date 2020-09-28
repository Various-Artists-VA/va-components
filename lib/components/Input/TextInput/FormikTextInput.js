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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var formik_1 = require("formik");
var react_1 = __importStar(require("react"));
var TextInput_1 = require("./TextInput");
exports.Text = function (_a) {
    var name = _a.name, onChange = _a.onChange, onBlur = _a.onBlur, restProps = __rest(_a, ["name", "onChange", "onBlur"]);
    var _b = formik_1.useField(name !== null && name !== void 0 ? name : ""), field = _b[0], meta = _b[1], helpers = _b[2];
    var _c = react_1.useState(false), edited = _c[0], setEdited = _c[1];
    return (react_1.default.createElement(TextInput_1.Text, __assign({}, field, { error: edited ? meta.error : undefined, onBlur: function (e) {
            setEdited(true);
            if (onBlur)
                onBlur(e);
        }, onChange: function (e) {
            if (name)
                helpers.setValue(e.target.value);
            if (onChange)
                onChange(e);
        } }, restProps)));
};
exports.default = exports.Text;
//# sourceMappingURL=FormikTextInput.js.map