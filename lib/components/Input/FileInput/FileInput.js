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
exports.File = exports.InputVariant = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var FileInput_module_scss_1 = __importDefault(require("./FileInput.module.scss"));
var assets_1 = require("../../../assets");
var react_file_drop_1 = require("react-file-drop");
var InputVariant;
(function (InputVariant) {
    InputVariant["large"] = "large";
    InputVariant["medium"] = "default";
    InputVariant["small"] = "small";
})(InputVariant = exports.InputVariant || (exports.InputVariant = {}));
exports.File = function (_a) {
    var _b;
    var variant = _a.variant, name = _a.name, placeholder = _a.placeholder, label = _a.label, isClearable = _a.isClearable, accept = _a.accept, onChange = _a.onChange, style = _a.style, className = _a.className, classNamePrefix = _a.classNamePrefix, dropAreaProps = _a.dropAreaProps, rest = __rest(_a, ["variant", "name", "placeholder", "label", "isClearable", "accept", "onChange", "style", "className", "classNamePrefix", "dropAreaProps"]);
    var initialValue = [];
    var _c = react_1.useState(initialValue), currentValue = _c[0], setCurrentValue = _c[1];
    var clear = function (e) {
        e.preventDefault();
        setCurrentValue(initialValue);
    };
    var onChangeHandler = function (e) {
        if (e.target.files) {
            var files = e.target.files;
            var fileNames = [];
            for (var i = 0; i < files.length; i++) {
                fileNames.push(files[i].name);
            }
            setCurrentValue(fileNames);
        }
        if (onChange)
            onChange(e);
    };
    var clearOptions = {};
    switch (variant) {
        case InputVariant.large:
            clearOptions.height = 24;
            clearOptions.width = 24;
            break;
        case InputVariant.medium:
            clearOptions.height = 20;
            clearOptions.width = 20;
            break;
        case InputVariant.small:
            clearOptions.height = 16;
            clearOptions.width = 16;
            break;
    }
    console.log(currentValue);
    return (react_1.default.createElement("div", { className: classnames_1.default(FileInput_module_scss_1.default.wrapper, FileInput_module_scss_1.default[variant], className, classNamePrefix + "--wrapper"), style: style },
        label ? (react_1.default.createElement("div", { className: classnames_1.default(FileInput_module_scss_1.default.label, FileInput_module_scss_1.default[variant], classNamePrefix + "--label") }, label)) : null,
        react_1.default.createElement(react_file_drop_1.FileDrop, __assign({}, dropAreaProps, { onDrop: function (files, e) {
                console.log(files, e);
                if (files) {
                    var event_1 = __assign(__assign({}, e), { target: __assign(__assign({}, e.target), { files: files }) });
                    onChangeHandler(event_1);
                    if (onChange)
                        onChange(event_1);
                }
            } }),
            react_1.default.createElement("label", { htmlFor: "file-input", className: classnames_1.default(FileInput_module_scss_1.default.container, FileInput_module_scss_1.default[variant], classNamePrefix + "--container", (_b = {},
                    _b[FileInput_module_scss_1.default.empty] = !currentValue,
                    _b)) },
                react_1.default.createElement("input", __assign({ id: "file-input", type: "file", accept: accept, name: name, className: classnames_1.default(FileInput_module_scss_1.default.input, classNamePrefix + "--input"), onChange: onChangeHandler }, rest)),
                currentValue.length > 0 ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: FileInput_module_scss_1.default.value }, currentValue.map(function (file) { return (react_1.default.createElement("div", { key: file, className: classnames_1.default(FileInput_module_scss_1.default.files, FileInput_module_scss_1.default[variant], classNamePrefix + "--files") }, file)); })),
                    isClearable && (react_1.default.createElement(assets_1.Clear, __assign({ className: classnames_1.default(FileInput_module_scss_1.default.clear, classNamePrefix + "--clear"), viewBox: "0 0 24 24", onClick: clear }, clearOptions))))) : (react_1.default.createElement("div", { className: classnames_1.default(FileInput_module_scss_1.default.empty, classNamePrefix + "--empty") }, placeholder))))));
};
exports.File.defaultProps = {
    variant: InputVariant.medium,
    classNamePrefix: "file-input",
    placeholder: "Select or drop a file",
    isClearable: true,
};
exports.default = exports.File;
//# sourceMappingURL=FileInput.js.map