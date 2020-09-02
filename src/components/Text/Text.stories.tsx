import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Placeholder, Title, TextProps } from "./Text";

export default {
  title: "Design System/Text",
  component: Title,
  args: {
    children: "John Doe",
  },
} as Meta;

export const Basic: React.SFC<TextProps> = ({ children }) => (
  <Title>{children}</Title>
);

export const TitleText: React.SFC<TextProps> = () => <Title>John Doe</Title>;

export const Centered: React.SFC<TextProps> = () => (
  <Title style={{ textAlign: "center" }}>John Doe</Title>
);

export const PlaceholderText: React.SFC<TextProps> = () => (
  <Placeholder>John Doe</Placeholder>
);
