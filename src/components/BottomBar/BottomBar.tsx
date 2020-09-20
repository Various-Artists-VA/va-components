import React from "react";
import classNames from "classnames";

import styles from "./BottomBar.module.scss";
import Button, { ButtonVariant } from "../Button/Button";

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
    {onBack ? (
      <Button type="text" variant={ButtonVariant.large} onClick={onBack}>
        Back
      </Button>
    ) : null}
    <div className={styles.actions}>
      {actions?.map((action) => (
        <Button
          type="text"
          key={action.name}
          variant={ButtonVariant.large}
          onClick={action.onClick}
        >
          {action.name}
        </Button>
      ))}
    </div>
  </div>
);

export default BottomBar;
