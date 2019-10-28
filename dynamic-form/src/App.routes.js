import React from "react";

const ComponentsComponent = React.lazy(() =>
  import("./components/components/components.component")
);
const GettingStartedComponent = React.lazy(() =>
  import("./components/getting-started/gettings-started.component")
);

const AppRoutes = [
  {
    path: "/getting-started",
    exact: true,
    name: "getting-started",
    component: GettingStartedComponent
  },
  {
    path: "/components",
    exact: false,
    name: "components",
    component: ComponentsComponent
  }
];

export default AppRoutes;
