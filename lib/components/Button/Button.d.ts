import React, { ReactNode } from "react";
export declare enum ButtonType {
    "primary" = 0,
    "secondary" = 1,
    "text" = 2
}
export interface ButtonProps {
    type: ButtonType;
    children: ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map