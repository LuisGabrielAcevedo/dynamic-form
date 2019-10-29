export const dynamicTableRectLoadingJsx = `
import React from "react";
import { DynamicTableComponent } from "lgx-react-components";

function TableLoadingComponent() {
  return <DynamicTableComponent loading={true} />
}

export default TableLoadingComponent;

`;

export const dynamicTableSpinnerLoadingJsx = `
import React from "react";
import { DynamicTableComponent, DynamicTableSpinnerLoading } from "lgx-react-components";

function TableLoadingComponent() {
  return (
    <DynamicTableComponent
      loading={true}
      loadingType={DynamicTableSpinnerLoading}
    />
  )
}

export default TableLoadingComponent;

`;

export const dynamicTableProgressBarLoadingJsx = `
import React from "react";
import { DynamicTableComponent, DynamicTableProgressBarLoading } from "lgx-react-components";

function TableLoadingComponent() {
  return (
    <DynamicTableComponent
      loading={true}
      loadingType={DynamicTableProgressBarLoading}
    />
  )
}

export default TableLoadingComponent;

`;
