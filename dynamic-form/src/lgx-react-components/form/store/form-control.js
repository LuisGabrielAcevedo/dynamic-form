export default class FormControl {
  constructor(name, value, validators) {
    this.name = name;
    this.value = value;
    this.errors = {};
    this.touched = false;
    this.validators = validators || [];
    this.valid = true;
  }

  setValue = value => (this.value = value);

  validateControl() {}
}
