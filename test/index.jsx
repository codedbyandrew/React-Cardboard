import React from "react";
import { render } from "react-dom";
import { ReactCardboard } from "../index";

const App = () => {
  return (
    <React.Fragment>
      <ReactCardboard.FullScreenToggle />
      <ReactCardboard.VRContainer divider viewerWidth="600px">
        <h1>Test React Cardboard</h1>
      </ReactCardboard.VRContainer>
    </React.Fragment>
  );
};
render(<App />, document.getElementById("app"));
