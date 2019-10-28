import React from "react";
import PropTypes from "prop-types";
import Highlight from "react-highlight";

function HighlightCodeComponent({ code, language }) {
  return code && language ? (
    <div>
      <Highlight language={language}>{code}</Highlight>
    </div>
  ) : null;
}

HighlightCodeComponent.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string
};

export default HighlightCodeComponent;
