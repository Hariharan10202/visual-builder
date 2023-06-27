import React, { useState } from "react";
import styles from "./DropdownComponent.module.css";
import { Dropdown } from "primereact/dropdown";

const DropdownComponent = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: "CFR", code: "CFR" },
    { name: "CIF", code: "CIF" },
    { name: "CIP", code: "CIP" },
    { name: "CPT", code: "CPT" },
    { name: "DAP", code: "DAP" },
    { name: "DAP", code: "DAP" },
    { name: "DDP", code: "DDP" },
    { name: "DDU", code: "DDU" },
    { name: "EXW", code: "EXW" },
    { name: "FAS", code: "FAS" },
    { name: "FOB", code: "FOB" },
  ];
  return (
    <Dropdown
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.value)}
      options={cities}
      optionLabel="name"
      placeholder="Select a City"
      className="w-full md:w-14rem"
    />
  );
};

export default DropdownComponent;
