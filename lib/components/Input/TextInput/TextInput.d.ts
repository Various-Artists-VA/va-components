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
    value?: string;
    error?: string;
    style?: CSSProperties;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Text: React.FC<TextInputProps>;
export default Text;
//# sourceMappingURL=TextInput.d.ts.map