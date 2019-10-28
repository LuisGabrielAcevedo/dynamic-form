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
    name: "Simple form",
    redirect: "/components/dynamic-form/simple"
  },
  {
    name: "Fields",
    redirect: "/components/dynamic-form/fields"
  },
  {
    name: "Flex",
    redirect: "/components/dynamic-form/flex"
  },
  {
    name: "Validators",
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
    name: "Simple table",
    redirect: "/components/dynamic-table/simple"
  },
  {
    name: "Loading",
    redirect: "/components/dynamic-table/loading"
  },
  {
    name: "Multi select",
    redirect: "/components/dynamic-table/multi-select"
  },
  {
    name: "Row actions",
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
    name: "Dynamic form",
    subList: dynamicFormList
  },
  {
    name: "Dynamic table",
    subList: dynamicTableList
  }
];

export const mainList = [
  {
    name: "Getting started",
    redirect: "/getting-started"
  },
  {
    name: "Components",
    subList: componentsList
  }
];
