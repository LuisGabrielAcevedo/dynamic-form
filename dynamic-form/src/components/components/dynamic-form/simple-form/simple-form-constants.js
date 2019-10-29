export const simpleFormJsx = `
import React from "react";
import { DynamicFormComponent } from "lgx-react-components";
import { simpleFormConfig } from "./simple-form.metadata";
import Button from "@material-ui/core/Button";

function SimpleFormComponent() {
  const form = React.useRef(null);

  const submit = async () => {
    const formResp = await form.current.submit();
    console.log(formResp);
  };

  return (
    <div>
      <DynamicFormComponent ref={form} formConfig={simpleFormConfig} />
      <div className="row justify-center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => submit()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default SimpleFormComponent;

`;
export const simpleFormMetadata = `
import {
  DynamicFormTextFieldComponent,
  DynamicFormPasswordFieldComponent
} from "lgx-react-components";

export const simpleFormConfig = {
  fieldsConfig: [
    {
      name: "Full name",
      key: "full_name",
      component: DynamicFormTextFieldComponent
    },
    {
      name: "Email",
      key: "email",
      component: DynamicFormTextFieldComponent
    },
    {
      name: "Password",
      key: "password",
      component: DynamicFormPasswordFieldComponent
    }
  ]
};

`;
