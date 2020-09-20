import React, { ReactNode } from "react";
export declare enum ButtonType {
    primary = "primary",
    secondary = "secondary",
    text = "text"
}
export declare enum ButtonVariant {
    large = "large",
    medium = "medium",
    small = "small"
}
export interface ButtonProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    type?: ButtonType | string;
    variant?: ButtonVariant | string;
    className?: string;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map