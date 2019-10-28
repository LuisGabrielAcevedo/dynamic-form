import React from "react";

const LoadingComponent = React.lazy(() =>
  import("./loading/loading.component")
);
const MultiSelectComponent = React.lazy(() =>
  import("./multi-select/multi-select.component")
);
const RowActionsComponent = React.lazy(() =>
  import("./row-actions/row-actions.component")
);
const SimpleTableComponent = React.lazy(() =>
  import("./simple-table/simple-table.component")
);

const DynamicTableRoutes = [
  {
    path: "/components/dynamic-table/loading",
    exact: true,
    name: "loading",
    component: LoadingComponent
  },
  {
    path: "/components/dynamic-table/multi-select",
    exact: true,
    name: "multi-select",
    component: MultiSelectComponent
  },
  {
    path: "/components/dynamic-table/row-actions",
    exact: true,
    name: "row-actions",
    component: RowActionsComponent
  },
  {
    path: "/components/dynamic-table/simple",
    exact: true,
    name: "simple",
    component: SimpleTableComponent
  }
];

export default DynamicTableRoutes;
