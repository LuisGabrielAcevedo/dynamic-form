export const simpleFormCss = `
.row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin: 20px 0;
}

.title {
  font-weight: 400;
}

`;
export const simpleFormJsx = `
import React from "react";
import {
  DynamicHighlightTabsComponent,
  DynamicFormComponent,
  HighlightCodeComponent
} from "lgx-react-components";
import simpleForm from "./simple-form.metadata";
import Button from "@material-ui/core/Button";

function SimpleFormComponent() {
  const form = React.useRef(null);

  const [state, setState] = React.useState({
    formResp: null
  });

  const submit = async () => {
    const formResp = await form.current.submit();
    formResp.valid 
      ? setState({ formResp }) 
      : setState({ formResp: null });
  };

  return (
    <div>
      <DynamicFormComponent ref={form} formConfig={simpleForm} />
      <div className="row">
        <Button
          variant="outlined"
          onClick={() => submit()}
          color="primary"
        >
        Submit
        </Button>
      </div>
    </div>
  );
}

export default SimpleFormComponent;

`;
export const simpleFormMetadata = ``;
