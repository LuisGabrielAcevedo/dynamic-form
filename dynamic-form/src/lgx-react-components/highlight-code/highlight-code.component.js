import React from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function HighlightCodeComponent({ code, language }) {
  return code && language ? (
    <div style={{ margin: "10px" }}>
      <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
    </div>
  ) : null;
}

HighlightCodeComponent.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string
};

export default HighlightCodeComponent;
