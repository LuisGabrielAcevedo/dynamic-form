import React from "react";
import Icon from "@material-ui/core/Icon";

export const dynamicFormList = [
  {
    icon: (
      <Icon className="fas fa-hand-point-left" style={{ width: "1.3em" }} />
    ),
    back: true
  },
  {
    name: "simple-form",
    redirect: "/components/dynamic-form/simple"
  },
  {
    name: "appearance",
    redirect: "/components/dynamic-form/appearance"
  },
  {
    name: "form-fields",
    redirect: "/components/dynamic-form/form-fields"
  },
  {
    name: "flex",
    redirect: "/components/dynamic-form/flex"
  },
  {
    name: "validators",
    redirect: "/components/dynamic-form/validators"
  }
];

export const dynamicTableList = [
  {
    icon: (
      <Icon className="fas fa-hand-point-left" style={{ width: "1.3em" }} />
    ),
    back: true
  },
  {
    name: "simple-table",
    redirect: "/components/dynamic-table/simple-table"
  },
  {
    name: "table-loading",
    redirect: "/components/dynamic-table/table-loading"
  },
  {
    name: "multi-select",
    redirect: "/components/dynamic-table/multi-select"
  },
  {
    name: "row-actions",
    redirect: "/components/dynamic-table/row-actions"
  }
];

export const componentsList = [
  {
    icon: (
      <Icon className="fas fa-hand-point-left" style={{ width: "1.3em" }} />
    ),
    back: true
  },
  {
    name: "dynamic-form",
    subList: dynamicFormList
  },
  {
    name: "dynamic-table",
    subList: dynamicTableList
  }
];

export const mainList = [
  {
    name: "getting-started",
    redirect: "/getting-started"
  },
  {
    name: "components",
    subList: componentsList
  }
];
