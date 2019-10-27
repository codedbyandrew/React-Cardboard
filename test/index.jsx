import React from "react";
import { render } from "react-dom";
import { ReactCardboard } from "../index";

const App = () => {
  return (
    <ReactCardboard.VRContainer>
      <h1>Test React Cardboard</h1>
    </ReactCardboard.VRContainer>
  );
};
render(<App />, document.getElementById("app"));
