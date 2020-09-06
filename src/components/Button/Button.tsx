import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  text = "text",
}

export enum ButtonSize {
  large = "large",
  medium = "medium",
  small = "small",
}

export interface ButtonProps {
  type: ButtonType;
  size: ButtonSize;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type, children, size }) => (
  <div className={classNames(styles.container, styles[size], styles[type])}>
    {children}
  </div>
);

Button.defaultProps = {
  type: "primary",
  size: "large",
};
