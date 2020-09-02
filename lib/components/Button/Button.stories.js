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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextButton = exports.Secondary = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = require("./Button");
exports.default = {
    title: "Design System/Button",
    component: Button_1.Button,
};
var Template = function (args) { return react_1.default.createElement(Button_1.Button, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    type: Button_1.ButtonType.primary,
    children: "Primary Button",
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    type: Button_1.ButtonType.secondary,
    children: "Secondary Button",
};
exports.TextButton = Template.bind({});
exports.TextButton.args = {
    type: Button_1.ButtonType.text,
    children: "Text Button",
};
//# sourceMappingURL=Button.stories.js.map