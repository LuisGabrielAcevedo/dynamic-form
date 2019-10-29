export const simpleTableMetadata = `
import { DynamicTableTextComponent } from "lgx-react-components";

export const simpleTableHeaders = [
  {
    label: "Full name",
    key: "full_name",
    component: DynamicTableTextComponent
  },
  {
    label: "Email",
    key: "email",
    component: DynamicTableTextComponent
  },
  {
    label: "Age",
    key: "age",
    component: DynamicTableTextComponent
  }
];

export const simpleTableData = [
  { full_name: "Luis gabriel acevedo", email: "luis@lgx.com", age: 28 }
  { full_name: "Carlos ramírez", email: "carlos@lgx.com", age: 27 },
  { full_name: "Agustina cataneo", email: "agus@lgx.com", age: 28 }
];

`;

export const simpleTableJsx = `
import React from "react";
import { DynamicTableComponent } from "lgx-react-components";
import { simpleTableHeaders, simpleTableData } from "./simple-table-metadata";

function SimpleTableComponent() {
  return (
    <div>
      <div className="row justify-center">
          <h4 className="m-0">Users</h4>
      </div>
      <DynamicTableComponent
        headers={simpleTableHeaders}
        data={simpleTableData}
      />
    </div>
  );
}

export default SimpleTableComponent;

`;
