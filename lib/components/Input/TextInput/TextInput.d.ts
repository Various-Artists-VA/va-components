import React, { CSSProperties } from "react";
export declare enum InputVariant {
    large = "large",
    medium = "default",
    small = "small"
}
export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    variant: InputVariant;
    initialValue?: string;
    placeholder?: string;
    classNamePrefix?: string;
    className?: string;
    isClearable?: boolean;
    label?: string;
    name?: string;
    icon?: string;
    style?: CSSProperties;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
//# sourceMappingURL=TextInput.d.ts.map