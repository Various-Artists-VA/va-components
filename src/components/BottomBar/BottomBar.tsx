import React from "react";
import classNames from "classnames";

import styles from "./BottomBar.module.scss";
import { Title } from "../Text";

export interface BottomBarProps {
  onBack?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  actions?: {
    name: string;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }[];
  className?: string;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  onBack,
  actions,
  className,
}) => (
  <div className={classNames(styles.container, className)}>
    {onBack ? <Title onClick={onBack}>Back</Title> : null}
    <div className={styles.actions}>
      {actions?.map((action) => (
        <Title onClick={action.onClick}>{action.name}</Title>
      ))}
    </div>
  </div>
);
