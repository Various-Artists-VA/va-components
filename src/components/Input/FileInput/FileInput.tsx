import React, { useState, CSSProperties, SVGAttributes } from "react";
import classNames from "classnames";

import styles from "./FileInput.module.scss";
import { Clear } from "../../../assets";
import { FileDrop, FileDropProps } from "react-file-drop";

export enum InputVariant {
  large = "large",
  medium = "default",
  small = "small",
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
  onChange?: (
    event:
      | React.FormEvent<HTMLInputElement>
      | (React.FormEvent<HTMLDivElement> & {
          target: { files: FileList | null };
        })
  ) => void;
}

export const File: React.FC<FileInputProps> = ({
  variant,
  name,
  placeholder,
  label,
  isClearable,
  accept,
  onChange,
  style,
  className,
  classNamePrefix,
  dropAreaProps,
  ...rest
}) => {
  const initialValue: string[] = [];
  const [currentValue, setCurrentValue] = useState(initialValue);

  const clear = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentValue(initialValue);
  };

  const onChangeHandler = (
    e: (React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLDivElement>) & {
      target: { files: FileList | null };
    }
  ) => {
    if (e.target.files) {
      const files = e.target.files;
      const fileNames: string[] = [];
      for (let i = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
      }
      setCurrentValue(fileNames);
    }
    if (onChange) onChange(e);
  };

  const clearOptions: SVGAttributes<SVGElement> = {};

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

  return (
    <div
      className={classNames(
        styles.wrapper,
        styles[variant],
        className,
        classNamePrefix + "--wrapper"
      )}
      style={style}
    >
      {label ? (
        <div
          className={classNames(
            styles.label,
            styles[variant],
            classNamePrefix + "--label"
          )}
        >
          {label}
        </div>
      ) : null}
      <FileDrop
        {...dropAreaProps}
        onDrop={(files, e) => {
          console.log(files, e);
          if (files) {
            const event: React.FormEvent<HTMLDivElement> & {
              target: { files: FileList };
            } = { ...e, target: { ...e.target, files: files } };
            onChangeHandler(event);
            if (onChange) onChange(event);
          }
        }}
      >
        <label
          htmlFor="file-input"
          className={classNames(
            styles.container,
            styles[variant],
            classNamePrefix + "--container",
            {
              [styles.empty]: !currentValue,
            }
          )}
        >
          <input
            id="file-input"
            type="file"
            accept={accept}
            name={name}
            className={classNames(styles.input, classNamePrefix + "--input")}
            onChange={onChangeHandler}
            {...rest}
          />
          {currentValue.length > 0 ? (
            <>
              <div className={styles.value}>
                {currentValue.map((file: string) => (
                  <div
                    key={file}
                    className={classNames(
                      styles.files,
                      styles[variant],
                      classNamePrefix + "--files"
                    )}
                  >
                    {file}
                  </div>
                ))}
              </div>
              {isClearable && (
                <Clear
                  className={classNames(
                    styles.clear,
                    classNamePrefix + "--clear"
                  )}
                  viewBox="0 0 24 24"
                  onClick={clear}
                  {...clearOptions}
                />
              )}
            </>
          ) : (
            <div
              className={classNames(styles.empty, classNamePrefix + "--empty")}
            >
              {placeholder}
            </div>
          )}
        </label>
      </FileDrop>
    </div>
  );
};

File.defaultProps = {
  variant: InputVariant.medium,
  classNamePrefix: "file-input",
  placeholder: "Select or drop a file",
  isClearable: true,
};

export default File;
