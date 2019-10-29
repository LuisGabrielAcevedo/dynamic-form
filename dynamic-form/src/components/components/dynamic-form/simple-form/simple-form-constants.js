export const simpleFormJsx = `
import React from "react";
import { DynamicFormComponent } from "lgx-react-components";
import simpleForm from "./simple-form.metadata";

function SimpleFormComponent() {
  const form = React.useRef(null);

  const submit = async () => {
    const formResp = await form.current.submit();
    console.log(formResp);
  };

  return (
    <div>
      <DynamicFormComponent ref={form} formConfig={simpleForm} />
      <div className="lgx-row justify-center">
        <button className="lgx-button" onClick={() => submit()}>
          Submit
        </button>
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

const simpleForm = {
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

export default simpleForm;

`;
