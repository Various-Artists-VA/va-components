"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithPlaceholder = exports.Basic = void 0;
var react_1 = __importDefault(require("react"));
var Input_1 = require("./Input");
exports.default = {
    title: "Design System/Input",
    component: Input_1.TextInput,
};
exports.Basic = function (_a) {
    var value = _a.value, placeholder = _a.placeholder;
    return (react_1.default.createElement(Input_1.TextInput, { value: value, placeholder: placeholder }));
};
exports.WithPlaceholder = function () { return (react_1.default.createElement(Input_1.TextInput, { placeholder: "placeholder" })); };
//# sourceMappingURL=Input.stories.js.map