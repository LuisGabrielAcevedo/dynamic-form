import React, { Component } from "react";
import PropTypes from "prop-types";
import * as DynamicFormFieldsConstants from "../../constants/index";
import AsyncAutocompleteComponent from "../../fields/async-autocomplete/async-autocomplete.component";
import AutocompleteComponent from "../../fields/autocomplete/autocomplete.component";
import CheckboxComponent from "../../fields/checkbox/checkbox.component";
import DatePickerComponent from "../../fields/date-picker/date-picker.component";
import TimePickerComponent from "../../fields/time-picker/time-picker.component";
import DateTimePickerComponent from "../../fields/date-time-picker/date-time-picker.component";
import ImageComponent from "../../fields/image/image.component";
import NumericFieldComponent from "../../fields/numeric-field/numeric-field";
import PasswordFieldComponent from "../../fields/password-field/password-field.component";
import RadioGroupComponent from "../../fields/radio-group/radio-group.component";
import SelectComponent from "../../fields/select/select.component";
import SwitchComponent from "../../fields/switch/switch.component";
import TextFieldComponent from "../../fields/text-field/text-field.component";
import TextareaComponent from "../../fields/text-area/text-area.component";
import StringListComponent from "../../fields/string-list/string-list.component";

class SelectDynamicFormFieldComponent extends Component {
  component() {
    const components = {
      [DynamicFormFieldsConstants.DynamicFormAsyncAutocompleteComponent]: AsyncAutocompleteComponent,
      [DynamicFormFieldsConstants.DynamicFormAutocompleteComponent]: AutocompleteComponent,
      [DynamicFormFieldsConstants.DynamicFormCheckboxComponent]: CheckboxComponent,
      [DynamicFormFieldsConstants.DynamicFormDatePickerComponent]: DatePickerComponent,
      [DynamicFormFieldsConstants.DynamicFormTimePickerComponent]: TimePickerComponent,
      [DynamicFormFieldsConstants.DynamicFormDateTimePickerComponent]: DateTimePickerComponent,
      [DynamicFormFieldsConstants.DynamicFormImageComponent]: ImageComponent,
      [DynamicFormFieldsConstants.DynamicFormNumericFieldComponent]: NumericFieldComponent,
      [DynamicFormFieldsConstants.DynamicFormPasswordFieldComponent]: PasswordFieldComponent,
      [DynamicFormFieldsConstants.DynamicFormRadioGroupComponent]: RadioGroupComponent,
      [DynamicFormFieldsConstants.DynamicFormSelectComponent]: SelectComponent,
      [DynamicFormFieldsConstants.DynamicFormSwitchComponent]: SwitchComponent,
      [DynamicFormFieldsConstants.DynamicFormTextFieldComponent]: TextFieldComponent,
      [DynamicFormFieldsConstants.DynamicFormTextAreaComponent]: TextareaComponent,
      [DynamicFormFieldsConstants.DynamicFormStringListComponent]: StringListComponent
    };
    return components[this.props.field.component];
  }

  render() {
    const DynamicComponent = this.component();
    return (
      <div>
        <DynamicComponent
          field={this.props.field}
          materialData={this.props.materialData}
          form={this.props.form}
          updateModel={this.props.updateModel}
        />
      </div>
    );
  }
}

SelectDynamicFormFieldComponent.propTypes = {
  field: PropTypes.object,
  materialData: PropTypes.object,
  form: PropTypes.object,
  updateModel: PropTypes.func
};

export default SelectDynamicFormFieldComponent;
