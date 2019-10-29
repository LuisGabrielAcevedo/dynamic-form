import {
  DynamicFormValidators,
  DynamicFormTextFieldComponent,
  DynamicFormTextAreaComponent
} from "../../lgx-react-components/index";

const productCategoryForm = {
  fieldsConfig: [
    {
      name: "Name",
      key: "name",
      component: DynamicFormTextFieldComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field name is required"
        })
      ]
    },
    {
      name: "Description",
      key: "description",
      component: DynamicFormTextAreaComponent
    }
  ]
};

export default productCategoryForm;
