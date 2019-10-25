import React, { Component } from "react";
import userForm from "./metadata/form/users";
import userHeaders from "./metadata/table/users";
import User from "./models/users";
import {
  DynamicFormComponent,
  DynamicFormFilledAppearance,
  DynamicHighlightTabsComponent,
  DynamicTableComponent
} from "./lgx-react-components/index";
import "./App.css";

class App extends Component {
  state = {
    data: [],
    loading: false
  };

  componentDidMount() {
    this.loadUsers();
  }

  async loadUsers() {
    this.setState({ ...this.state, loading: true });
    const resp = await User.with(["company"]).find();
    this.setState({ loading: false, data: resp.data });
  }

  render() {
    const { data, loading } = this.state;
    return (
      <div className="App">
        <DynamicHighlightTabsComponent
          title={"Title"}
          metadata={JSON.stringify(userForm)}
          jsx={`import React from "react";
              import userForm from "./metadata/form/users";
              import {
                DynamicFormComponent,
                DynamicFormFilledAppearance
              } from "./lgx-react-components/index";
              import "./App.css";

              function App() {
                return (
                  <div className="App">
                    <DynamicFormComponent
                      formConfig={userForm}
                      materialData={{
                        appearance: DynamicFormFilledAppearance
                      }}
                    />
                  </div>
                );
              }`}
        />
        <DynamicTableComponent
          headers={userHeaders}
          data={data}
          loading={loading}
        />
        <DynamicFormComponent
          formConfig={userForm}
          materialData={{
            appearance: DynamicFormFilledAppearance
          }}
        />
      </div>
    );
  }
}

export default App;
