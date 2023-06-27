import React, { useRef } from "react";
import Xarrow from "react-xarrows";

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
};

function SimpleExample() {
  const box1Ref = useRef(null);
  
  return (
    <div
      style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
    >
      <h1>Simple example</h1>
      <div ref={box1Ref} style={boxStyle}>
        hey
      </div>
      <p id="hey2" style={boxStyle}>
        hey2
      </p>
      <Xarrow
        start={box1Ref} //can be react ref
        end="elem3" //or an id
      />
    </div>
  );
}

export default SimpleExample;
