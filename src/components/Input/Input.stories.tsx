import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import {
  TextInput as TextInputComponent,
  TextInputProps,
  InputVariant,
} from "./Input";

export default {
  title: "Design System/Input",
  component: TextInputComponent,
} as Meta;

const Template: React.SFC<TextInputProps> = (args) => (
  <TextInputComponent {...args} />
);

export const Large = Template.bind({});
const largeArgs = {
  placeholder: "placeholder",
  variant: "large",
};
Large.args = largeArgs;

export const Medium = Template.bind({});
const mediumArgs = {
  placeholder: "placeholder",
  variant: InputVariant.medium,
};
Medium.args = mediumArgs;

export const Small = Template.bind({});
const smallArgs = {
  placeholder: "placeholder",
  variant: "small",
};
Small.args = smallArgs;

export const WithSearchIcon = Template.bind({});
const withSearchIconArgs = {
  placeholder: "placeholder",
  variant: "large",
  icon: "search",
};
WithSearchIcon.args = withSearchIconArgs;

export const MediumWithSearchIcon = Template.bind({});
const mediumWithSearchIconArgs = {
  placeholder: "placeholder",
  variant: InputVariant.medium,
  icon: "search",
};
MediumWithSearchIcon.args = mediumWithSearchIconArgs;

export const SmallWithSearchIcon = Template.bind({});
const smallWithSearchIconArgs = {
  placeholder: "placeholder",
  variant: "small",
  icon: "search",
};
SmallWithSearchIcon.args = smallWithSearchIconArgs;

export const WithTitle = Template.bind({});
const withTitleArgs = {
  placeholder: "placeholder",
  variant: "large",
  title: "With Title:",
};
WithTitle.args = withTitleArgs;

export const MediumWithTitle = Template.bind({});
const mediumWithTitleArgs = {
  placeholder: "placeholder",
  variant: InputVariant.medium,
  title: "With Title:",
};
MediumWithTitle.args = mediumWithTitleArgs;

export const SmallWithTitle = Template.bind({});
const smallWithTitleArgs = {
  placeholder: "placeholder",
  variant: "small",
  title: "With Title:",
};
SmallWithTitle.args = smallWithTitleArgs;

export const InputGroup: React.SFC = () => (
  <>
    <Large {...largeArgs} style={{ margin: "1em" }} />
    <Medium {...mediumArgs} style={{ margin: "1em" }} />
    <Small {...smallArgs} style={{ margin: "1em" }} />
    <WithSearchIcon {...withSearchIconArgs} style={{ margin: "1em" }} />
    <MediumWithSearchIcon
      {...mediumWithSearchIconArgs}
      style={{ margin: "1em" }}
    />
    <SmallWithSearchIcon
      {...smallWithSearchIconArgs}
      style={{ margin: "1em" }}
    />
    <WithSearchIcon
      {...withSearchIconArgs}
      initialValue="initialValue"
      isClearable
      style={{ margin: "1em" }}
    />
    <MediumWithSearchIcon
      {...mediumWithSearchIconArgs}
      initialValue="initialValue"
      isClearable
      style={{ margin: "1em" }}
    />
    <SmallWithSearchIcon
      {...smallWithSearchIconArgs}
      initialValue="initialValue"
      isClearable
      style={{ margin: "1em" }}
    />
    <WithTitle
      {...withTitleArgs}
      initialValue="initialValue"
      style={{ margin: "1em" }}
    />
    <MediumWithTitle
      {...mediumWithTitleArgs}
      initialValue="initialValue"
      style={{ margin: "1em" }}
    />
    <SmallWithTitle
      {...smallWithTitleArgs}
      initialValue="initialValue"
      style={{ margin: "1em" }}
    />
  </>
);
