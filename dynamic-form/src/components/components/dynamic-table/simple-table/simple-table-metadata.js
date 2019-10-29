import { DynamicTableTextComponent } from "../../../../lgx-react-components/index";

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
  { full_name: "Luis gabriel acevedo", email: "luis@lgx.com", age: 28 },
  { full_name: "Carlos ramírez", email: "carlos@lgx.com", age: 27 },
  { full_name: "Agustina cataneo", email: "agus@lgx.com", age: 28 }
];
