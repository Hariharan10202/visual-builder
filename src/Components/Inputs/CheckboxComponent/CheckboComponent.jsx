import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import styles from "./CheckboxComponent.module.css";

const CheckboComponent = ({ label, id }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div className={styles.Checkbox}>
        <Checkbox
          inputId={id}
          name="pizza"
          value="Cheese"
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        <label htmlFor={id} className="ml-2">
          {label}
        </label>
      </div>
    </div>
  );
};

export default CheckboComponent;
