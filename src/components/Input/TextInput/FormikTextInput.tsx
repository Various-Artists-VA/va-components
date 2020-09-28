import { useField } from "formik";
import React, { useState } from "react";
import { Text as TextInput, TextInputProps } from "./TextInput";

export const Text: React.FC<TextInputProps> = ({
  name,
  onChange,
  onBlur,
  ...restProps
}) => {
  const [field, meta, helpers] = useField(name ?? "");
  const [edited, setEdited] = useState(false);
  return (
    <TextInput
      {...field}
      error={edited ? meta.error : undefined}
      onBlur={(e) => {
        setEdited(true);
        if (onBlur) onBlur(e);
      }}
      onChange={(e) => {
        if (name) helpers.setValue(e.target.value);
        if (onChange) onChange(e);
      }}
      {...restProps}
    />
  );
};

export default Text;
