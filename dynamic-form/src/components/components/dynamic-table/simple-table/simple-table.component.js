import React from "react";
import {
  DynamicTableComponent,
  DynamicHighlightTabsComponent
} from "../../../../lgx-react-components/index";
import { simpleTableHeaders, simpleTableData } from "./simple-table-metadata";
import { simpleTableMetadata, simpleTableJsx } from "./simple-table.constants";

function SimpleTableComponent() {
  return (
    <div>
      <h4 className="title">Dynamic table component</h4>
      <DynamicHighlightTabsComponent
        title={"Simple table"}
        jsx={simpleTableJsx}
        metadata={simpleTableMetadata}
        component={
          <div>
            <div className="row justify-center">
              <h4 className="m-0">Users</h4>
            </div>
            <DynamicTableComponent
              headers={simpleTableHeaders}
              data={simpleTableData}
            />
          </div>
        }
      />
    </div>
  );
}

export default SimpleTableComponent;
