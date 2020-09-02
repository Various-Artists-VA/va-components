import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { BottomBar, BottomBarProps } from "./BottomBar";

export default {
  title: "Design System/BottomBar",
  component: BottomBar,
} as Meta;

const Template: React.SFC<BottomBarProps> = (args) => <BottomBar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  actions: [{ name: "About", onClick: () => {} }],
};

export const BasicWithBack = Template.bind({});
BasicWithBack.args = {
  actions: [{ name: "About", onClick: () => {} }],
  onBack: () => {},
};

export const BasicWithMoreActions = Template.bind({});
BasicWithMoreActions.args = {
  actions: [{ name: "About", onClick: () => {} }, { name: "Legal", onClick: () => {} }],
  onBack: () => {},
};
