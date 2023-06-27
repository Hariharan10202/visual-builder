import React, { useState } from "react";
import { ButtonGroup, Container } from "./HeaderConfig.styled";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { HeaderComp } from "../../../Redux/ComponentStyles";

const HeaderConfig = ({ selectedComponent, setSelectedComponent }) => {
  const [value, setValue] = useState({
    componentName: "Header",
    fontSize: "",
    fontWeight: "",
    fontStyle: "",
  });

  const element = useSelector((state) => state.ComponentsStyles.data);

  const dispatch = useDispatch();

  const headerProps = useSelector((state) => state.components.data);

  const applyChangesHandler = () => {
    dispatch(HeaderComp(value));
  };

  console.log(selectedComponent.style);

  const fontStylesObj = [
    { name: "normal", code: "normal" },
    { name: "italic", code: "italic" },
    { name: "bold", code: "bold" },
  ];

  return (
    <Container>
      <span className="p-float-label">
        <InputNumber
          inputId="withoutgrouping"
          value={value.fontSize}
          onValueChange={(e) => {
            setValue((prevState) => ({
              ...prevState,
              fontSize: e.target.value,
            }));
          }}
          useGrouping={false}
        />
        <label htmlFor="input">Font Size</label>
      </span>
      <span className="p-float-label">
        <InputNumber
          inputId="withoutgrouping"
          value={value.fontWeight}
          onValueChange={(e) => {
            setValue((prevState) => ({
              ...prevState,
              fontWeight: e.target.value,
            }));
          }}
          useGrouping={false}
        />
        <label htmlFor="input">Font Weight</label>
      </span>
      <Dropdown
        value={value.fontStyle}
        onChange={(e) => {
          setValue((prevState) => ({
            ...prevState,
            fontStyle: e.value,
          }));
        }}
        options={fontStylesObj}
        optionLabel="name"
        placeholder="Select a City"
        className="w-full md:w-14rem"
      />
      <ButtonGroup>
        <Button label="Apply Changes" onClick={applyChangesHandler} />
      </ButtonGroup>
    </Container>
  );
};

export default HeaderConfig;
