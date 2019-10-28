import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Highlight from "react-highlight";

function DynamicHighlightTabsComponent({
  title,
  jsx,
  metadata,
  component,
  css
}) {
  let buttonGroups = [];
  const [state, setState] = React.useState({
    open: false,
    codeSelected: null
  });

  if (jsx)
    buttonGroups.push({
      name: "jsx",
      language: "jsx",
      code: jsx
    });

  if (metadata)
    buttonGroups.push({
      name: "metadata",
      language: "json",
      code: metadata
    });

  if (css)
    buttonGroups.push({
      name: "css",
      language: "css",
      code: css
    });

  const tabToggle = open => {
    setState({ open: open, codeSelected: "jsx" });
  };

  const setCode = code => {
    setState({ ...state, codeSelected: code });
  };

  const buttonGroup = buttonGroups.length ? (
    <ButtonGroup size="small">
      {buttonGroups.map((button, i) => (
        <Button
          key={i}
          onClick={() => setCode(button.name)}
          style={{
            backgroundColor: button.name === state.codeSelected ? "#eee" : ""
          }}
        >
          {button.name}
        </Button>
      ))}
    </ButtonGroup>
  ) : null;

  return (
    <div>
      <Grid
        container
        alignContent="center"
        justify="space-between"
        style={{ padding: "12px 12px 2px 12px" }}
      >
        <Grid item>
          {state.open ? buttonGroup : <h4 style={{ margin: 0 }}>{title}</h4>}
        </Grid>
        <Grid item>
          <Tooltip title={"code"}>
            <IconButton size="small" onClick={() => tabToggle(!state.open)}>
              <Icon>code</Icon>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      {state.open
        ? buttonGroups
            .filter(button => button.name === state.codeSelected)
            .map((button, i) => (
              <div key={i}>
                <Highlight>{button.code}</Highlight>
              </div>
            ))
        : null}
      {component ? component : null}
    </div>
  );
}

DynamicHighlightTabsComponent.propTypes = {
  title: PropTypes.string,
  jsx: PropTypes.string,
  metadata: PropTypes.string,
  component: PropTypes.element,
  css: PropTypes.string
};

export default DynamicHighlightTabsComponent;
