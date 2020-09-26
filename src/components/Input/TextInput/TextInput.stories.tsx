import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import {
  TextInput as TextInputComponent,
  TextInputProps,
  InputVariant,
} from "./TextInput";

export default {
  title: "Design System/Input",
  component: TextInputComponent,
} as Meta;

const Template: React.SFC<TextInputProps> = (args) => (
  <TextInputComponent {...args} />
);

export const LargeTextInput = Template.bind({});
const largeArgs = {
  placeholder: "placeholder",
  variant: "large",
};
LargeTextInput.args = largeArgs;

export const MediumTextInput = Template.bind({});
const mediumArgs = {
  placeholder: "placeholder",
  variant: InputVariant.medium,
};
MediumTextInput.args = mediumArgs;

export const SmallTextInput = Template.bind({});
const smallArgs = {
  placeholder: "placeholder",
  variant: "small",
};
SmallTextInput.args = smallArgs;

export const TextInputWithSearchIcon = Template.bind({});
const withSearchIconArgs = {
  placeholder: "placeholder",
  variant: "large",
  icon: "search",
};
TextInputWithSearchIcon.args = withSearchIconArgs;

export const MediumTextInputWithSearchIcon = Template.bind({});
const mediumWithSearchIconArgs = {
  placeholder: "placeholder",
  variant: InputVariant.medium,
  icon: "search",
};
MediumTextInputWithSearchIcon.args = mediumWithSearchIconArgs;

export const SmallTextInputWithSearchIcon = Template.bind({});
const smallWithSearchIconArgs = {
  placeholder: "placeholder",
  variant: "small",
  icon: "search",
};
SmallTextInputWithSearchIcon.args = smallWithSearchIconArgs;

export const TextInputWithLabel = Template.bind({});
const withLabelArgs = {
  placeholder: "placeholder",
  variant: "large",
  label: "With Label:",
};
TextInputWithLabel.args = withLabelArgs;

export const MediumTextInputWithLabel = Template.bind({});
const mediumWithLabelArgs = {
  placeholder: "placeholder",
  variant: InputVariant.medium,
  label: "With Label:",
};
MediumTextInputWithLabel.args = mediumWithLabelArgs;

export const SmallTextInputWithLabel = Template.bind({});
const smallWithLabelArgs = {
  placeholder: "placeholder",
  variant: "small",
  label: "With Label:",
};
SmallTextInputWithLabel.args = smallWithLabelArgs;

export const InputGroup: React.SFC = () => (
  <>
    <LargeTextInput {...largeArgs} style={{ margin: "1em" }} />
    <MediumTextInput {...mediumArgs} style={{ margin: "1em" }} />
    <SmallTextInput {...smallArgs} style={{ margin: "1em" }} />
    <TextInputWithSearchIcon
      {...withSearchIconArgs}
      style={{ margin: "1em" }}
    />
    <MediumTextInputWithSearchIcon
      {...mediumWithSearchIconArgs}
      style={{ margin: "1em" }}
    />
    <SmallTextInputWithSearchIcon
      {...smallWithSearchIconArgs}
      style={{ margin: "1em" }}
    />
    <TextInputWithSearchIcon
      {...withSearchIconArgs}
      initialValue="initialValue"
      isClearable
      style={{ margin: "1em" }}
    />
    <MediumTextInputWithSearchIcon
      {...mediumWithSearchIconArgs}
      initialValue="initialValue"
      isClearable
      style={{ margin: "1em" }}
    />
    <SmallTextInputWithSearchIcon
      {...smallWithSearchIconArgs}
      initialValue="initialValue"
      isClearable
      style={{ margin: "1em" }}
    />
    <TextInputWithLabel
      {...withLabelArgs}
      initialValue="initialValue"
      style={{ margin: "1em" }}
    />
    <MediumTextInputWithLabel
      {...mediumWithLabelArgs}
      initialValue="initialValue"
      style={{ margin: "1em" }}
    />
    <SmallTextInputWithLabel
      {...smallWithLabelArgs}
      initialValue="initialValue"
      style={{ margin: "1em" }}
    />
  </>
);
