import {
  DynamicFormTextFieldComponent,
  DynamicFormPasswordFieldComponent
} from "../../../../lgx-react-components/index";

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
