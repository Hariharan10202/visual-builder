import React from "react";
import { useDrop } from "react-dnd";

const DropSpace = ({ children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: () => ({ name: "DropZone" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const backgroundColor = isOver ? "yellow" : "white";

  return (
    <div
      ref={drop}
      style={{
        width: "300px",
        height: "300px",
        border: "2px dashed black",
        backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default DropSpace;
