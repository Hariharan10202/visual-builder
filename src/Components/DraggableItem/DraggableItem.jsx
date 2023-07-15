import React from "react";
import { useDrag, useDrop } from "react-dnd";

export const DraggableItem = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, type: "item" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {text}
    </div>
  );
};
