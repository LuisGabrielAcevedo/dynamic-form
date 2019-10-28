import React from "react";

const DynamicTableComponent = React.lazy(() =>
  import("./dynamic-table/dynamic-table.component")
);
const DynamicFormComponent = React.lazy(() =>
  import("./dynamic-form/dynamic-form.component")
);

const ComponentsRoutes = [
  {
    path: "/components/dynamic-form",
    exact: false,
    name: "dynamic-form",
    component: DynamicFormComponent
  },
  {
    path: "/components/dynamic-table",
    exact: false,
    name: "dynamic-table",
    component: DynamicTableComponent
  }
];

export default ComponentsRoutes;
