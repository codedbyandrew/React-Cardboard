import React from "react";

export const VRContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }}
    >
      <div className="left">{children}</div>
      <div className="right">{children}</div>
    </div>
  );
};
