import React, { useEffect, useRef } from "react";
import { ConfigContainer, InputContainer } from "./Config.styled";
import { InputText } from "primereact/inputtext";
import { MapData } from "../../data";
import Configuration from "../Configuration/Configuration";

const Config = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <ConfigContainer>
      <Configuration
        setSelectedComponent={setSelectedComponent}
        selectedComponent={selectedComponent}
      />
    </ConfigContainer>
  );
};

export default Config;
