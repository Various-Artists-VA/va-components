import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { TextInput as TextInputComponent, TextInputProps } from "./Input";

export default {
  title: "Design System/Input",
  component: TextInputComponent,
} as Meta;

export const Basic: React.SFC<TextInputProps> = ({ value, placeholder }) => (
  <TextInputComponent value={value} placeholder={placeholder} />
);

export const WithPlaceholder: React.SFC = () => (
  <TextInputComponent placeholder="placeholder" />
);
