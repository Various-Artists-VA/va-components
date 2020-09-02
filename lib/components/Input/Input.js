"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
var react_1 = __importDefault(require("react"));
var Input_module_scss_1 = __importDefault(require("./Input.module.scss"));
exports.TextInput = function (_a) {
    var type = _a.type, value = _a.value, placeholder = _a.placeholder;
    return (react_1.default.createElement("input", { type: type, className: Input_module_scss_1.default.container, value: value, placeholder: placeholder }));
};
exports.TextInput.defaultProps = {
    type: "text",
    placeholder: "placeholder",
};
exports.default = exports.TextInput;
//# sourceMappingURL=Input.js.map