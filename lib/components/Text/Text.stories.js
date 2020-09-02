"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Placeholder = exports.Title = void 0;
var react_1 = __importDefault(require("react"));
var Text_1 = require("./Text");
exports.default = {
    title: "Design System/Text",
    component: Text_1.Placeholder,
    args: {
        children: "John Doe",
    },
};
exports.Title = function () { return react_1.default.createElement(Text_1.Title, null, "John Doe"); };
exports.Placeholder = function () { return (react_1.default.createElement(Text_1.Placeholder, null, "John Doe")); };
//# sourceMappingURL=Text.stories.js.map