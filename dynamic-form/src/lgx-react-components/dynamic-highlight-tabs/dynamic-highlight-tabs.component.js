import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function DynamicHighlightTabsComponent({ title, jsx, metadata }) {
  let buttonGroups = [];
  const [state, setState] = React.useState({
    open: false,
    codeSelected: null
  });

  if (jsx)
    buttonGroups.push({
      name: "jsx",
      codeType: "jsx",
      data: jsx
    });

  if (metadata)
    buttonGroups.push({
      name: "metadata",
      codeType: "json",
      data: metadata
    });

  const toggle = open => event => {
    setState({ ...state, open: open });
  };

  const buttonGroup = buttonGroups.length ? (
    <ButtonGroup size="small">
      {buttonGroups.map((button, i) => (
        <Button key={i}>{button.name}</Button>
      ))}
    </ButtonGroup>
  ) : null;

  return (
    <div>
      <Grid
        container
        direction="row"
        alignContent="center"
        justify="space-between"
      >
        <Grid item style={{ margin: "16px" }}>
          {!state.open ? <h4 style={{ margin: 0 }}>{title}</h4> : buttonGroup}
        </Grid>
        <Grid item>
          <Tooltip title={"code"}>
            <IconButton
              color="primary"
              size="medium"
              onClick={toggle(!state.open)}
            >
              <Icon>code</Icon>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      {state.open
        ? buttonGroups.map((button, i) => (
            <SyntaxHighlighter key={i} language={button.codeType} style={dark}>
              {button.data}
            </SyntaxHighlighter>
          ))
        : null}
    </div>
  );
}

DynamicHighlightTabsComponent.propTypes = {
  title: PropTypes.string,
  jsx: PropTypes.string,
  metadata: PropTypes.any
};

export default DynamicHighlightTabsComponent;
