import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps, ButtonVariant } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
} as Meta;

const LargeTemplate: React.FC<ButtonProps> = (args) => (
  <Button variant={ButtonVariant.large} {...args} />
);

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

const MediumTemplate: React.FC<ButtonProps> = (args) => <Button {...args} />;

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

const SmallTemplate: React.FC<ButtonProps> = (args) => (
  <Button {...args} variant={ButtonVariant.small} />
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
