import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps, ButtonSize, ButtonType } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
} as Meta;

const LargeTemplate: React.SFC<ButtonProps> = (args) => <Button {...args} />;

export const LargePrimary = LargeTemplate.bind({});
LargePrimary.args = {
  children: "Primary Button",
};

export const LargeSecondary = LargeTemplate.bind({});
LargeSecondary.args = {
  type: "secondary",
  children: "Secondary Button",
};

export const LargeTextButton = LargeTemplate.bind({});
LargeTextButton.args = {
  type: "text",
  children: "Text Button",
};

const MediumTemplate: React.SFC<ButtonProps> = (args) => (
  <Button {...args} size={ButtonSize.medium} />
);

export const MediumPrimary = MediumTemplate.bind({});
MediumPrimary.args = {
  children: "Primary Button",
};

export const MediumSecondary = MediumTemplate.bind({});
MediumSecondary.args = {
  type: "secondary",
  children: "Secondary Button",
};

export const MediumTextButton = MediumTemplate.bind({});
MediumTextButton.args = {
  type: "text",
  children: "Text Button",
};

const SmallTemplate: React.SFC<ButtonProps> = (args) => (
  <Button {...args} size={ButtonSize.small} />
);

export const SmallPrimary = SmallTemplate.bind({});
SmallPrimary.args = {
  children: "Primary Button",
};

export const SmallSecondary = SmallTemplate.bind({});
SmallSecondary.args = {
  type: "secondary",
  children: "Secondary Button",
};

export const SmallTextButton = SmallTemplate.bind({});
SmallTextButton.args = {
  type: "text",
  children: "Text Button",
};
