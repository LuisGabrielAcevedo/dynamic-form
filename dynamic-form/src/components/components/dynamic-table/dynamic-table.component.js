import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SimpleLoadingComponent } from "../../../lgx-react-components/index";
import DynamicTableRoutes from "./dynamic-table.routes";

function DynamicTableComponent() {
  return (
    <div>
      <React.Suspense fallback={<SimpleLoadingComponent />}>
        <Switch>
          {DynamicTableRoutes.map((route, i) => {
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
          <Redirect from="/" to="/components/dynamic-table/simple-table" />
        </Switch>
      </React.Suspense>
    </div>
  );
}

export default DynamicTableComponent;
