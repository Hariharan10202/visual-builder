import React, { useState } from "react";
import styles from "./SwitchComponent.module.css";
import { InputSwitch } from "primereact/inputswitch";

const SwitchComponent = () => {
  const [checked, setChecked] = useState(false);

  return (
    <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
  );
};

export default SwitchComponent;
