import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./Text.module.scss";

export interface TextProps {
  children: ReactNode;
  className?: string;
}

export const Title: React.FC<TextProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => (
  <div className={classNames(styles.title, className)} {...rest}>
    {children}
  </div>
);

export const Placeholder: React.FC<TextProps & React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => (
  <div className={classNames(styles.placeholder, className)} {...rest}>
    {children}
  </div>
);
