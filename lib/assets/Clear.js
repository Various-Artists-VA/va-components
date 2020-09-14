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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function SvgClear(props) {
    return (React.createElement("svg", __assign({ width: 24, height: 24, fill: "none" }, props),
        React.createElement("circle", { cx: 12, cy: 12, r: 12, fill: "#666" }),
        React.createElement("path", { d: "M17.743 16.543a.829.829 0 010 1.2.778.778 0 01-.6.257.778.778 0 01-.6-.257L12 13.2l-4.543 4.543a.778.778 0 01-.6.257.778.778 0 01-.6-.257.829.829 0 010-1.2L10.8 12 6.257 7.457a.829.829 0 010-1.2.829.829 0 011.2 0L12 10.8l4.543-4.543a.829.829 0 011.2 0 .829.829 0 010 1.2L13.2 12l4.543 4.543z", fill: "#fff" })));
}
exports.default = SvgClear;
//# sourceMappingURL=Clear.js.map