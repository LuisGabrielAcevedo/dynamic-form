import React from "react";
import DynamicFormFieldComponent from "../dynamic-form-field-base.component";
import TextField from "@material-ui/core/TextField";

class DateTimePickerComponent extends DynamicFormFieldComponent {
  getValue = () => this.value() || "";
  render() {
    return (
      <div>
        <TextField
          fullWidth
          type="datetime-local"
          label={this.label()}
          placeholder={this.placeholder()}
          value={this.getValue()}
          onChange={this.handleChange}
          disabled={this.disableValue}
          onBlur={this.handleFocus}
          InputLabelProps={{
            shrink: true
          }}
          error={this.invalid()}
          variant={this.appearance()}
        />
        {this.error()}
      </div>
    );
  }
}

export default DateTimePickerComponent;
