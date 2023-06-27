import React from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
};

const DraggableBox = ({ id }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={id} style={boxStyle}>
        {id}
      </div>
    </Draggable>
  );
};

const V2Example = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", width: "100%" }}
    >
      <h1>v2 example</h1>
      <Xwrapper>
        <DraggableBox id={"elem1"} />
        <DraggableBox id={"elem2"} />
        <Xarrow start={"elem1"} end="elem2" />
      </Xwrapper>
    </div>
  );
};

export default V2Example;
