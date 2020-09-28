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
  children: ReactNode;
  type: ButtonType | string;
  variant?: ButtonVariant | string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  variant = "medium",
  children,
  onClick,
  className,
  ...rest
}) => (
  <div
    className={classNames(
      styles.container,
      styles[variant],
      styles[type],
      className
    )}
    onClick={onClick}
    {...rest}
  >
    {children}
  </div>
);

Button.defaultProps = {
  type: "primary",
  variant: "medium",
} as Partial<ButtonProps>;

export default Button;
