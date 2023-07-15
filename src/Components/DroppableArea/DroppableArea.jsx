import React from "react";
import { useDrop } from "react-dnd";

export const DroppableArea = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "item",
    drop: (item) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? "lightblue" : "white" }}>
      {children}
    </div>
  );
};
