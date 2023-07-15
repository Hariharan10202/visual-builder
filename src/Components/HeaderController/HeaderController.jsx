import React, { useEffect, useState } from "react";
import styles from "./HeaderController.module.css";
import { MultiSelect } from "primereact/multiselect";
import { HeaderPoints, Points } from "../../headerDataPoint";
import "../Sidebar/styles.css";

const HeaderController = ({
  setSelectedHeaderPoints,
  selectedHeaderPoints,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Points);
  }, [Points]);

  return (
    <MultiSelect
      value={selectedHeaderPoints}
      options={data}
      onChange={(e) => setSelectedHeaderPoints(e.value)}
      optionLabel="label"
      optionGroupLabel="label"
      optionGroupChildren="Meta"
      placeholder="Select Header Points"
      display="chip"
      className="w-full md:w-20rem"
    />
  );
};

export default HeaderController;
