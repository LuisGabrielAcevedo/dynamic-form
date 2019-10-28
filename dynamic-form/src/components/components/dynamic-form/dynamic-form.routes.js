import React from "react";

const FieldsComponent = React.lazy(() => import("./fields/fields.component"));
const FlexComponent = React.lazy(() => import("./flex/flex.component"));
const SimpleFormComponent = React.lazy(() =>
  import("./simple-form/simple-form.component")
);
const ValidatorsComponent = React.lazy(() =>
  import("./validators/validators.component")
);

const DynamicFormRoutes = [
  {
    path: "/components/dynamic-form/fields",
    exact: true,
    name: "fields",
    component: FieldsComponent
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
  }
];

export default DynamicFormRoutes;
