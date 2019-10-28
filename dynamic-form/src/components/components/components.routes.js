import React from "react";

const DynamicTableComponent = React.lazy(() =>
  import("./dynamic-table/dynamic-table.component")
);
const DynamicFormComponent = React.lazy(() =>
  import("./dynamic-form/dynamic-form.component")
);

const ComponentsRoutes = [
  {
    path: "/dynamic-table",
    exact: false,
    name: "dynamic-table",
    component: DynamicFormComponent
  },
  {
    path: "/dynamic-form",
    exact: false,
    name: "dynamic-form",
    component: DynamicTableComponent
  }
];

export default ComponentsRoutes;
