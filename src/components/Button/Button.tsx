import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  text = "text",
}

export enum ButtonVariant {
  large = "large",
  medium = "medium",
  small = "small",
}

export interface ButtonProps extends React.HTMLProps<HTMLDivElement> {
  type?: ButtonType | string;
  variant?: ButtonVariant | string;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  type = "primary",
  variant = "medium",
  children,
  onClick,
}) => (
  <div
    className={classNames(styles.container, styles[variant], styles[type])}
    onClick={onClick}
  >
    {children}
  </div>
);

Button.defaultProps = {
  type: "primary",
  variant: "medium",
} as Partial<ButtonProps>;

export default Button;
