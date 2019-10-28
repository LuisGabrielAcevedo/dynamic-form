import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SimpleLoadingComponent } from "../../lgx-react-components/index";
import ComponentsRoutes from "./components.routes";

function ComponentsComponent() {
  return (
    <div>
      <React.Suspense fallback={<SimpleLoadingComponent />}>
        <Switch>
          {ComponentsRoutes.map((route, i) => {
            return route.component ? (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.component}
              />
            ) : null;
          })}
          <Redirect from="/" to="/components/dynamic-form" />
        </Switch>
      </React.Suspense>
    </div>
  );
}

export default ComponentsComponent;
