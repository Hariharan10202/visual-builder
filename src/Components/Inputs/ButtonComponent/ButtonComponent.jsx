import React from "react";
import styles from "./ButtonComponent.module.css";
import { Button } from "primereact/button";

const ButtonComponent = ({
  label,
  outlined,
  activeIndex,
  setActiveIndex,
  icon,
}) => {
  const stepLimit = 3;

  const handleSteps = () => {
    if (label === "Next") {
      if (activeIndex < stepLimit) setActiveIndex(activeIndex + 1);
    } else if (label === "Generate Quotation") {
      if (activeIndex < stepLimit) setActiveIndex(activeIndex + 1);
    } else {
      if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <>
      <Button
        label={label}
        outlined={outlined}
        onClick={handleSteps}
        icon={icon}
      />
    </>
  );
};

export default ButtonComponent;
