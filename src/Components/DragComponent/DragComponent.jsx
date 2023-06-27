import React, { useState } from "react";

const DragComponent = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (event) => {
    setIsDragging(true);
    const boundingRect = event.target.getBoundingClientRect();
    const clientX = getClientX(event);
    const clientY = getClientY(event);
    setOffset({
      x: clientX - boundingRect.left,
      y: clientY - boundingRect.top,
    });
  };

  const handleDrag = (event) => {
    if (isDragging) {
      const clientX = getClientX(event);
      const clientY = getClientY(event);
      setPosition({
        x: clientX - offset.x,
        y: clientY - offset.y,
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const getClientX = (event) => {
    return event.clientX || (event.touches && event.touches[0].clientX);
  };

  const getClientY = (event) => {
    return event.clientY || (event.touches && event.touches[0].clientY);
  };

  return (
    <div style={{ position: "relative", height: "400px" }}>
      <div
        draggable="true"
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
          cursor: "move",
        }}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDrag}
        onTouchEnd={handleDragEnd}
      >
        {children}
      </div>
    </div>
  );
};

export default DragComponent;
