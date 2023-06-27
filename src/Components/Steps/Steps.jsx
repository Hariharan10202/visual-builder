import React, { useState } from "react";
import styles from "./Steps.module.css";
import { Steps } from "primereact/steps";

const StepsComponent = ({ activeIndex, setActiveIndex }) => {
  const items = [
    {
      label: "Quote Details",
    },
    {
      label: "Customer Details",
    },
    {
      label: "Template Customization",
    },
    {
      label: "Quote ID",
    },
  ];
  return (
    <div className="card">
      <Steps
        model={items}
        activeIndex={activeIndex}
        onSelect={(e) => setActiveIndex(e.index)}
      />
    </div>
  );
};

export default StepsComponent;
