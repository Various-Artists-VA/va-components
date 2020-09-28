import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { Text as TextInputComponent } from "./FormikTextInput";
import { InputVariant } from "./TextInput";
import Button from "../../Button";
import { ButtonType, ButtonVariant } from "../../Button/Button";

export default {
  title: "Design System/FormikInput",
  component: TextInputComponent,
} as Meta;

const largeArgs = {
  variant: InputVariant.large,
  label: "Test:",
};

export const FormInputs: React.SFC = () => (
  <>
    <Formik
      onSubmit={(values) => console.log(values)}
      validationSchema={Yup.object().shape({
        test: Yup.string().required(),
        testA: Yup.string().required(),
        testB: Yup.string().required(),
        testC: Yup.date().required(),
      })}
      initialValues={{
        test: "",
        testA: "",
        testB: "",
        testC: "",
      }}
    >
      {() => (
        <Form>
          <TextInputComponent
            name="test"
            {...largeArgs}
            style={{ marginBottom: "1em" }}
          />
          <TextInputComponent
            name="testA"
            {...largeArgs}
            style={{ marginBottom: "1em" }}
          />
          <TextInputComponent
            name="testB"
            {...largeArgs}
            style={{ marginBottom: "1em" }}
          />
          <TextInputComponent
            name="testC"
            type="date"
            {...largeArgs}
            style={{ marginBottom: "1em" }}
          />
          <Button
            name="submit"
            type={ButtonType.primary}
            variant={ButtonVariant.large}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </>
);
