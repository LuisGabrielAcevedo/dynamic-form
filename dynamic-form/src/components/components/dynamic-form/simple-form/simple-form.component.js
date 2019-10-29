import React from "react";
import {
  DynamicHighlightTabsComponent,
  DynamicFormComponent,
  HighlightCodeComponent
} from "../../../../lgx-react-components/index";
import { simpleFormConfig } from "./simple-form.metadata";
import { simpleFormJsx, simpleFormMetadata } from "./simple-form-constants";
import Button from "@material-ui/core/Button";

function SimpleFormComponent() {
  const form = React.useRef(null);
  const [state, setState] = React.useState({
    formResp: null
  });

  const submit = async () => {
    const formResp = await form.current.submit();
    setState({ formResp });
  };

  return (
    <div>
      <h4 className="title">Dynamic form component</h4>
      <DynamicHighlightTabsComponent
        title={"Simple form"}
        jsx={simpleFormJsx}
        metadata={simpleFormMetadata}
        component={
          <div>
            <DynamicFormComponent ref={form} formConfig={simpleFormConfig} />
            <div className="row justify-center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => submit()}
              >
                Submit
              </Button>
            </div>
          </div>
        }
      />
      {state.formResp ? (
        <HighlightCodeComponent
          language={"javascript"}
          code={JSON.stringify(state.formResp)}
        />
      ) : null}
    </div>
  );
}

export default SimpleFormComponent;
