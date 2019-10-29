import React from "react";
import { HighlightCodeComponent } from "../../lgx-react-components/index";

function GettingStartedComponent() {
  return (
    <div>
      <h4 className="title">Installation</h4>
      <p>Lgx react components is available as an npm package.</p>
      <h4 className="title">npm</h4>
      <HighlightCodeComponent
        language={"javascript"}
        code={`npm install --save lgx-react-components`}
      />
    </div>
  );
}

export default GettingStartedComponent;
