import { Component } from "react";
import PropTypes from "prop-types";
import { DFTabs } from "./constants/index";

class DynamicFormMixinComponent extends Component {}

DynamicFormMixinComponent.propTypes = {
  model: PropTypes.object,
  formType: PropTypes.string,
  columns: PropTypes.number,
  materialData: PropTypes.object,
  formConfig: PropTypes.object
};

DynamicFormMixinComponent.defaultProps = {
  columns: null,
  formConfig: {
    fieldsConfig: []
  },
  formType: DFTabs,
  materialData: {},
  model: {}
};

export default DynamicFormMixinComponent;
