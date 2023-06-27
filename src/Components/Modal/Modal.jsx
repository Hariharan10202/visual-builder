import React, { useState } from "react";
import styles from "./Modal.module.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import ModalContent from "../Preflow/ModalContent/ModalContent";

const Modal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.container}>
      <Button label="Show" onClick={() => setVisible(true)} />
      <Dialog
        draggable={false}
        resizable={false}
        header="Header"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "75vw" }}
        breakpoints={{ "1400px": "75vw", "641px": "100vw" }}
      >
        <ModalContent />
      </Dialog>
    </div>
  );
};

export default Modal;
