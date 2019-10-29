import React from "react";

const FormFieldsComponent = React.lazy(() =>
  import("./form-fields/form-fields.component")
);
const FlexComponent = React.lazy(() => import("./flex/flex.component"));
const SimpleFormComponent = React.lazy(() =>
  import("./simple-form/simple-form.component")
);
const ValidatorsComponent = React.lazy(() =>
  import("./validators/validators.component")
);
const AppearanceComponent = React.lazy(() =>
  import("./appearance/apparence.component")
);

const DynamicFormRoutes = [
  {
    path: "/components/dynamic-form/fields",
    exact: true,
    name: "fields",
    component: FormFieldsComponent
  },
  {
    path: "/components/dynamic-form/flex",
    exact: true,
    name: "flex",
    component: FlexComponent
  },
  {
    path: "/components/dynamic-form/simple",
    exact: true,
    name: "simple",
    component: SimpleFormComponent
  },
  {
    path: "/components/dynamic-form/validators",
    exact: true,
    name: "validators",
    component: ValidatorsComponent
  },
  {
    path: "/components/dynamic-form/appearance",
    exact: true,
    name: "appearance",
    component: AppearanceComponent
  }
];

export default DynamicFormRoutes;
