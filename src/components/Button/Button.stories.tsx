import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps, ButtonType } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
} as Meta;

const Template: React.SFC<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: ButtonType.primary,
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: ButtonType.secondary,
  children: "Secondary Button",
};

export const TextButton = Template.bind({});
TextButton.args = {
  type: ButtonType.text,
  children: "Text Button",
};
