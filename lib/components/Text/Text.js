"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Placeholder = exports.Title = void 0;
var react_1 = __importDefault(require("react"));
var Text_module_scss_1 = __importDefault(require("./Text.module.scss"));
exports.Title = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: Text_module_scss_1.default.title }, children);
};
exports.Placeholder = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: Text_module_scss_1.default.placeholder }, children);
};
//# sourceMappingURL=Text.js.map