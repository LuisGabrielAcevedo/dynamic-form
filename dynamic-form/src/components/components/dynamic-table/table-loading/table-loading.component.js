import React from "react";
import {
  DynamicTableComponent,
  DynamicHighlightTabsComponent,
  DynamicTableSpinnerLoading,
  DynamicTableProgressBarLoading
} from "../../../../lgx-react-components/index";
import {
  dynamicTableProgressBarLoadingJsx,
  dynamicTableRectLoadingJsx,
  dynamicTableSpinnerLoadingJsx
} from "./table-loading.constants";

function TableLoadingComponent() {
  return (
    <div>
      <h4 className="title">Dynamic table component</h4>
      <h4 className="title">Loading</h4>
      <DynamicHighlightTabsComponent
        title={"Rect loading"}
        jsx={dynamicTableRectLoadingJsx}
        component={
          <div>
            <DynamicTableComponent loading={true} />
          </div>
        }
      />
      <DynamicHighlightTabsComponent
        title={"Spinner loading"}
        jsx={dynamicTableSpinnerLoadingJsx}
        component={
          <div>
            <DynamicTableComponent
              loading={true}
              loadingType={DynamicTableSpinnerLoading}
            />
          </div>
        }
      />
      <DynamicHighlightTabsComponent
        title={"Progress bar Loading"}
        jsx={dynamicTableProgressBarLoadingJsx}
        component={
          <div>
            <DynamicTableComponent
              loading={true}
              loadingType={DynamicTableProgressBarLoading}
            />
          </div>
        }
      />
    </div>
  );
}

export default TableLoadingComponent;
