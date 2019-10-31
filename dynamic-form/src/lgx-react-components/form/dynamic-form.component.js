import React from "react";
import DynamicFormMixinComponent from "./dynamic-form-mixin.component";
import FormGroupStore from "./store/form-group.store";
import { Provider } from "mobx-react";

class DynamicFormComponent extends DynamicFormMixinComponent {
  componentDidMount() {}

  componentWillUpdate() {}

  render() {
    return (
      <Provider FormGroupStore={new FormGroupStore()}>
        <div>DynamicFormComponent</div>
      </Provider>
    );
  }
}

export default DynamicFormComponent;
