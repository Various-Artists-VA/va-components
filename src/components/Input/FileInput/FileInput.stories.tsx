import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import {
  File as FileInputComponent,
  FileInputProps,
  InputVariant,
} from "./FileInput";

export default {
  title: "Design System/Input",
  component: FileInputComponent,
} as Meta;

const Template: React.SFC<FileInputProps> = (args) => (
  <FileInputComponent {...args} />
);

export const LargeFileInput = Template.bind({});
const largeArgs = {
  variant: "large",
};
LargeFileInput.args = largeArgs;

export const MediumFileInput = Template.bind({});
const mediumArgs = {
  variant: InputVariant.medium,
};
MediumFileInput.args = mediumArgs;

export const SmallFileInput = Template.bind({});
const smallArgs = {
  variant: "small",
};
SmallFileInput.args = smallArgs;

export const FileInputWithLabel = Template.bind({});
const withLabelArgs = {
  variant: "large",
  label: "With Label:",
};
FileInputWithLabel.args = withLabelArgs;

export const MediumFileInputWithLabel = Template.bind({});
const mediumWithLabelArgs = {
  variant: InputVariant.medium,
  label: "With Label:",
};
MediumFileInputWithLabel.args = mediumWithLabelArgs;

export const SmallFileInputWithLabel = Template.bind({});
const smallWithLabelArgs = {
  variant: "small",
  label: "With Label:",
};
SmallFileInputWithLabel.args = smallWithLabelArgs;

export const FileInputGroup: React.SFC = () => (
  <>
    <LargeFileInput {...largeArgs} style={{ margin: "1em" }} />
    <MediumFileInput {...mediumArgs} style={{ margin: "1em" }} />
    <SmallFileInput {...smallArgs} style={{ margin: "1em" }} />
    <FileInputWithLabel {...withLabelArgs} style={{ margin: "1em" }} />
    <MediumFileInputWithLabel
      {...mediumWithLabelArgs}
      style={{ margin: "1em" }}
    />
    <SmallFileInputWithLabel
      {...smallWithLabelArgs}
      style={{ margin: "1em" }}
    />
  </>
);
