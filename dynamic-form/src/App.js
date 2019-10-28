import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SimpleLoadingComponent } from "./lgx-react-components/index";
import AppBarComponent from "./components/app-bar/app-bar.component";
import AppRoutes from "./App.routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <AppBarComponent />
          <React.Suspense fallback={<SimpleLoadingComponent />}>
            <Switch>
              {AppRoutes.map((route, i) => {
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
              <Redirect to="/getting-started" />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
