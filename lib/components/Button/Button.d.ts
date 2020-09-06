import React, { ReactNode } from "react";
export declare enum ButtonType {
    primary = "primary",
    secondary = "secondary",
    text = "text"
}
export declare enum ButtonSize {
    large = "large",
    medium = "medium",
    small = "small"
}
export interface ButtonProps {
    type: ButtonType;
    size: ButtonSize;
    children: ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map