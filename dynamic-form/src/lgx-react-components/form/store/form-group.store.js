import FormControl from "./form-control";
import { observable, action, computed } from "mobx";

class FormGroupStore {
  @observable controls = {};

  @action addControl = (key, value, validators) => {
    this.controls[key] = new FormControl(key, value, validators);
  };

  @computed get form() {
    return this.controls;
  }
}

export default FormGroupStore;
