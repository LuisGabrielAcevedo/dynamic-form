import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dynamicHighlightTabsStyles } from "./dynamic-highlight-tabs.styles";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(dynamicHighlightTabsStyles);

function DynamicHighlightTabsComponent({
  title,
  jsx,
  metadata,
  component,
  css
}) {
  const classes = useStyles();
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
      language: "javascript",
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
            backgroundColor:
              button.name === state.codeSelected ? "rgb(245, 242, 240)" : ""
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
        className={classes.dynamicHighlightTabsContainer}
      >
        <Grid item>
          {state.open ? (
            buttonGroup
          ) : (
            <h4 className={classes.dynamicHighlightTabsTitle}>{title}</h4>
          )}
        </Grid>
        <Grid item>
          <Tooltip title={"code"}>
            <IconButton size="small" onClick={() => tabToggle(!state.open)}>
              <Icon>code</Icon>
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <div className={classes.dynamicHighlightTabsCode}>
        {state.open
          ? buttonGroups
              .filter(button => button.name === state.codeSelected)
              .map((button, i) => (
                // <Highlight key={i} className={button.language}>
                //   {button.code}
                // </Highlight>
                <SyntaxHighlighter key={i} language={button.language}>
                  {button.code}
                </SyntaxHighlighter>
              ))
          : null}
      </div>
      <div className={classes.dynamicHighlightTabsContent}>
        {component ? component : null}
      </div>
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
