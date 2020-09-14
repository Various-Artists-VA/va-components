import React from "react";
import classNames from "classnames";
import SliderComponent from "rc-slider";

import styles from "./Slider.module.scss";

export interface SliderProps extends React.HTMLProps<HTMLInputElement> {
  min: number;
  max: number;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  className,
  ...rest
}) => {
  return (
    <SliderComponent
      className={classNames(styles.container, className)}
      min={min}
      max={max}
      trackStyle={{
        background: "#f4f4f4",
        height: 4,
      }}
      handleStyle={{
        height: 40,
        width: 10,
        background: "#fff",
        border: "solid #666 4px",
        borderRadius: 4,
        boxSizing: "border-box",
      }}
      railStyle={{
        background: "#666",
        height: 4,
      }}
      {...rest}
    />
  );
};

Slider.defaultProps = {
  min: 0,
  max: 100,
};

export default Slider;
