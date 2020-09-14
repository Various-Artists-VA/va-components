import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import Slider, { SliderProps } from "./Slider";

export default {
  title: "Design System/Slider",
  component: Slider,
};

export const Basic: React.SFC<SliderProps> = (args) => <Slider {...args} />;
