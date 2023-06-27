import React from "react";
import { InputText } from "primereact/inputtext";

const InputComponent = ({ placeholder }) => {
  return <InputText style={{ width: "30%" }} placeholder={placeholder} />;
};

export default InputComponent;
