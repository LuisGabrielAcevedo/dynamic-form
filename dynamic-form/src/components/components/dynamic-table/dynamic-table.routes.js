import React from "react";

const TableLoadingComponent = React.lazy(() =>
  import("./table-loading/table-loading.component")
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
    path: "/components/dynamic-table/table-loading",
    exact: true,
    name: "loading",
    component: TableLoadingComponent
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
    path: "/components/dynamic-table/simple-table",
    exact: true,
    name: "simple",
    component: SimpleTableComponent
  }
];

export default DynamicTableRoutes;
