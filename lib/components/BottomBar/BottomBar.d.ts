import React from "react";
export interface BottomBarProps {
    onBack?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    actions?: {
        name: string;
        onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    }[];
    className?: string;
}
export declare const BottomBar: React.FC<BottomBarProps>;
//# sourceMappingURL=BottomBar.d.ts.map