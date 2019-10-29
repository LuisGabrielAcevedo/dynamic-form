import {
  DynamicFormTextFieldComponent,
  DynamicFormPasswordFieldComponent,
  DynamicFormNumericFieldComponent,
  DynamicFormTextareaComponent,
  DynamicFormSelectComponent,
  DynamicFormSwitchComponent,
  DynamicFormCheckboxComponent,
  DynamicFormRadioGroupComponent,
  DynamicFormDatePickerComponent,
  DynamicFormDateTimePickerComponent,
  DynamicFormTimePickerComponent
} from "../../../../lgx-react-components/index";

export const formFieldsConfig = {
  fieldsConfig: [
    {
      name: "Text field",
      key: "text_field_value",
      component: DynamicFormTextFieldComponent
    },
    {
      name: "Password field",
      key: "password_field_value",
      component: DynamicFormPasswordFieldComponent
    },
    {
      name: "Numeric field",
      key: "numeric_field_value",
      component: DynamicFormNumericFieldComponent
    },
    {
      name: "Textarea",
      key: "textarea_value",
      component: DynamicFormTextareaComponent
    },
    {
      name: "Date picker",
      key: "date_picker_value",
      component: DynamicFormDatePickerComponent
    },
    {
      name: "Time picker",
      key: "time_picker_value",
      component: DynamicFormTimePickerComponent
    },
    {
      name: "Date time picker",
      key: "date_time_picker_value",
      component: DynamicFormDateTimePickerComponent
    },
    {
      name: "Select",
      key: "select_value",
      component: DynamicFormSelectComponent
    },
    {
      name: "Switch",
      key: "switch_value",
      component: DynamicFormSwitchComponent
    },
    {
      name: "Checkbox",
      key: "checkbox_value",
      component: DynamicFormCheckboxComponent
    },
    {
      name: "Radio Group",
      key: "radio_group_value",
      component: DynamicFormRadioGroupComponent,
      options: {
        fieldOptions: [{ value: "1", text: "One" }, { value: "2", text: "Two" }]
      }
    }
  ]
};
