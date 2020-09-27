import React, { CSSProperties } from "react";
import "./FileInput.scss";
import { FileDropProps } from "react-file-drop";
export declare enum InputVariant {
    large = "large",
    medium = "default",
    small = "small"
}
export interface FileInputProps extends React.HTMLProps<HTMLInputElement> {
    variant: InputVariant;
    classNamePrefix?: string;
    className?: string;
    isClearable?: boolean;
    name?: string;
    placeholder?: string;
    accept?: string;
    label?: string;
    style?: CSSProperties;
    dropAreaProps?: Partial<FileDropProps>;
    onChange?: (event: React.FormEvent<HTMLInputElement> | (React.FormEvent<HTMLDivElement> & {
        target: {
            files: FileList | null;
        };
    })) => void;
}
export declare const FileInput: React.FC<FileInputProps>;
export default FileInput;
//# sourceMappingURL=FileInput.d.ts.map