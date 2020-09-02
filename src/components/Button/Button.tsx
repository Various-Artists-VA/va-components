import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export enum ButtonType {
  "primary",
  "secondary",
  "text",
}

export interface ButtonProps {
  type: ButtonType;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type, children }) => (
  <div
    className={classNames(styles.container, {
      [styles.primary]: type === ButtonType.primary,
      [styles.secondary]: type === ButtonType.secondary,
    })}
  >
    {children}
  </div>
);

Button.defaultProps = {
  type: ButtonType.primary,
  children: <>test</>,
};
