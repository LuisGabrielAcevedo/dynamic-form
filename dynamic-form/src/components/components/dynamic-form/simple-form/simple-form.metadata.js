import {
  DynamicFormTextFieldComponent,
  DynamicFormPasswordFieldComponent
} from "../../../../lgx-react-components/index";

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
