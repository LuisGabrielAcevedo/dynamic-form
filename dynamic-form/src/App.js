import React from "react";
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
}

export default App;
