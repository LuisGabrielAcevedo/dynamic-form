export const simpleFormCss = `
.row {
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 20px 0;
}

button {
  color: #fff;
  background-color: #3f51b5;
  min-height: 30px;
  min-width: 100px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

`;
export const simpleFormJsx = `
import React from "react";
import {
  DynamicHighlightTabsComponent,
  DynamicFormComponent,
  HighlightCodeComponent
} from "lgx-react-components";
import simpleForm from "./simple-form.metadata";

function SimpleFormComponent() {
  const form = React.useRef(null);

  const submit = async () => {
    const formResp = await form.current.submit();
  };

  return (
    <div>
      <DynamicFormComponent ref={form} formConfig={simpleForm} />
      <div className="row">
        <button onClick={() => submit()}>
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
