import React from "react";
import { ConfigContainer, Heading } from "./Configuration.styled";
import HeaderConfig from "./HeaderConfig/HeaderConfig";

const Configuration = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <ConfigContainer>
      <Heading>Properties Configuration</Heading>
      <HeaderConfig
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      />
    </ConfigContainer>
  );
};

export default Configuration;
