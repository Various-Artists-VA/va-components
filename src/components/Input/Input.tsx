import React from "react";

import styles from "./Input.module.scss";

export interface TextInputProps {
  type?: string;
  value?: string;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  type,
  value,
  placeholder,
}) => (
  <input
    type={type}
    className={styles.container}
    value={value}
    placeholder={placeholder}
  />
);

TextInput.defaultProps = {
  type: "text",
  placeholder: "placeholder",
};

export default TextInput;
