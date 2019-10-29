import React from "react";
import {
  DynamicHighlightTabsComponent,
  DynamicFormFilledAppearance,
  DynamicFormComponent,
  HighlightCodeComponent
} from "../../../../lgx-react-components/index";
import { formFieldsConfig } from "./form-fields.metadata";
import { formFieldsJsx, formFieldsMetadata } from "./form-fields.constants";
import Button from "@material-ui/core/Button";

function FormFieldsComponent() {
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
      <h4 className="title">Form fields component</h4>
      <DynamicHighlightTabsComponent
        title={"Simple form"}
        jsx={formFieldsJsx}
        metadata={formFieldsMetadata}
        component={
          <div>
            <DynamicFormComponent
              ref={form}
              formConfig={formFieldsConfig}
              materialData={{
                appearance: DynamicFormFilledAppearance
              }}
            />
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

export default FormFieldsComponent;
