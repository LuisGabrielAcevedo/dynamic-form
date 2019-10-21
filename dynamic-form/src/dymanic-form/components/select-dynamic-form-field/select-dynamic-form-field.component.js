import React, { Component } from "react";
import PropTypes from "prop-types";
import * as DynamicFormFieldsConstants from "../../constants/index";
import AsyncAutocompleteComponent from "../../fields/async-autocomplete/async-autocomplete.component";
import AutocompleteComponent from "../../fields/autocomplete/autocomplete.component";
import CheckboxComponent from "../../fields/checkbox/checkbox.component";
import DatepickerComponent from "../../fields/datepicker/datepicker.component";
import EnumSelectComponent from "../../fields/enum-select/enum-select.component";
import ImageComponent from "../../fields/image/image.component";
import NumericFieldComponent from "../../fields/numeric-field/numeric-field";
import PasswordFieldComponent from "../../fields/password-field/password-field.component";
import RadioGroupComponent from "../../fields/radio-group/radio-group.component";
import SelectComponent from "../../fields/select/select.component";
import SwitchComponent from "../../fields/switch/switch.component";
import TextFieldComponent from "../../fields/text-field/text-field.component";
import TextareaComponent from "../../fields/textarea/textarea.component";
import StringListComponent from "../../fields/string-list/string-list.component";

class SelectDynamicFormFieldComponent extends Component {
  component() {
    const components = {
      [DynamicFormFieldsConstants.DynamicTableAsyncAutocompleteComponent]: AsyncAutocompleteComponent,
      [DynamicFormFieldsConstants.DynamicTableAutocompleteComponent]: AutocompleteComponent,
      [DynamicFormFieldsConstants.DynamicTableCheckboxComponent]: CheckboxComponent,
      [DynamicFormFieldsConstants.DynamicTableDatepickerComponent]: DatepickerComponent,
      [DynamicFormFieldsConstants.DynamicTableEnumSelectComponent]: EnumSelectComponent,
      [DynamicFormFieldsConstants.DynamicTableImageComponent]: ImageComponent,
      [DynamicFormFieldsConstants.DynamicTableNumericFieldComponent]: NumericFieldComponent,
      [DynamicFormFieldsConstants.DynamicTablePasswordFieldComponent]: PasswordFieldComponent,
      [DynamicFormFieldsConstants.DynamicTableRadioGroupComponent]: RadioGroupComponent,
      [DynamicFormFieldsConstants.DynamicTableSelectComponent]: SelectComponent,
      [DynamicFormFieldsConstants.DynamicTableSwitchComponent]: SwitchComponent,
      [DynamicFormFieldsConstants.DynamicTableTextFieldComponent]: TextFieldComponent,
      [DynamicFormFieldsConstants.DynamicTableTextareaComponent]: TextareaComponent,
      [DynamicFormFieldsConstants.DynamicTableStringListComponent]: StringListComponent
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
