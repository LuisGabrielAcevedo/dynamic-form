import React from "react";
import {
  DynamicHighlightTabsComponent,
  DynamicFormComponent,
  HighlightCodeComponent
} from "../../../../lgx-react-components/index";
import simpleForm from "./simple-form.metadata";
// import Button from "@material-ui/core/Button";
import {
  simpleFormCss,
  simpleFormJsx,
  simpleFormMetadata
} from "./simple-form-constants";

function SimpleFormComponent() {
  const form = React.useRef(null);

  const [state, setState] = React.useState({
    formResp: null
  });

  const submit = async () => {
    const formResp = await form.current.submit();
    formResp.valid ? setState({ formResp }) : setState({ formResp: null });
  };

  return (
    <div>
      <h4 className="title">Dynamic form component</h4>
      <DynamicHighlightTabsComponent
        css={simpleFormCss}
        jsx={simpleFormJsx}
        metadata={simpleFormMetadata}
        component={
          <div>
            <DynamicFormComponent ref={form} formConfig={simpleForm} />
            <div className="row">
              <button className="button" onClick={() => submit()}>
                Submit
              </button>
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
