import {
  DynamicFormValidators,
  DynamicFormTextFieldComponent,
  DynamicFormPasswordFieldComponent,
  DynamicFormNumericFieldComponent,
  DynamicFormTextareaComponent,
  DynamicFormRadioGroupComponent,
  DynamicFormSwitchComponent,
  DynamicFormCheckboxComponent,
  DynamicFormSelectComponent
} from "../../lgx-react-components/index";
import Application from ".././../models/applications";

const userForm = {
  fieldsConfig: [
    {
      name: "First name",
      key: "first_name",
      component: DynamicFormTextFieldComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field first name is required"
        })
      ]
    },
    {
      name: "Last name",
      key: "last_name",
      component: DynamicFormTextFieldComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field last name is required"
        })
      ]
    },
    {
      name: "Email",
      key: "email",
      component: DynamicFormTextFieldComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field email is required"
        }),
        DynamicFormValidators.email()
      ],
      options: {
        placeholder: "Write your email"
      }
    },
    {
      name: "Password",
      key: "password",
      component: DynamicFormPasswordFieldComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field password is required"
        }),
        DynamicFormValidators.minLength(10),
        DynamicFormValidators.hasNumber(),
        DynamicFormValidators.hasCapitalCase(),
        DynamicFormValidators.hasSpecialCharacters(),
        DynamicFormValidators.hasSmallCase()
      ],
      options: {
        placeholder: "Write your password"
      }
    },
    {
      name: "Confirm password",
      key: "confirm_password",
      component: DynamicFormPasswordFieldComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field confirm is required"
        }),
        DynamicFormValidators.confirm("password")
      ],
      options: {
        placeholder: "Confirm your password"
      }
    },
    {
      name: "Price",
      key: "price",
      component: DynamicFormNumericFieldComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field price is required"
        })
      ]
    },
    {
      name: "Note",
      key: "note",
      component: DynamicFormTextareaComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field note is required"
        })
      ]
    },
    {
      name: "Active user",
      key: "isActive",
      component: DynamicFormSwitchComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field active user is required"
        })
      ]
    },
    {
      name: "Active user",
      key: "isActive2",
      component: DynamicFormCheckboxComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field active user is required"
        })
      ]
    },
    {
      name: "Gender",
      key: "userInformation.gender",
      component: DynamicFormRadioGroupComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field gender user is required"
        })
      ],
      options: {
        fieldOptions: [
          { text: "Male", value: "male" },
          { text: "Female", value: "female" }
        ]
      }
    },
    {
      name: "Gender",
      key: "userInformation.gender",
      component: DynamicFormRadioGroupComponent,
      validators: [
        DynamicFormValidators.required({
          message: "The field gender user is required"
        })
      ],
      options: {
        fieldOptions: [
          { text: "Male", value: "male" },
          { text: "Female", value: "female" }
        ]
      }
    },
    {
      name: "Language",
      key: "userConfigurations.language",
      component: DynamicFormSelectComponent,
      options: {
        fieldOptions: [
          { text: "Spanish", value: "es" },
          { text: "English", value: "en" }
        ]
      }
    },
    {
      name: "Application",
      key: "application",
      component: DynamicFormSelectComponent,
      options: {
        fieldOptions: async arg => {
          const resp = await Application.find();
          return resp.data;
        },
        associationText: "name",
        associationValue: "_id",
        multiple: true
      }
    }
  ]
};

export default userForm;
