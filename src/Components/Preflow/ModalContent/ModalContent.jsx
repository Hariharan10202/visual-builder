import React, { useState } from "react";
import styles from "./ModalContent.module.css";
import Steps from "../../Steps/Steps";
import DropdownComponent from "../../Inputs/DropdownComponent/DropdownComponent";
import DatePicker from "../../Inputs/DatePicker/DatePicker";
import RichEditorComponent from "../../Inputs/RichEditorComponent/RichEditorComponent";
import CheckboComponent from "../../Inputs/CheckboxComponent/CheckboComponent";
import SwitchComponent from "../../Inputs/SwitchComponent/SwitchComponent";
import ButtonComponent from "../../Inputs/ButtonComponent/ButtonComponent";
import InputComponent from "../../Inputs/InputComponent/InputComponent";
import { BsCheckCircle } from "react-icons/bs";

const ModalContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.stages}>
        <Steps activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      {activeIndex === 0 ? (
        <div className={styles.singleStep}>
          <div className={styles.inputContainer}>
            <div>
              <span>Start Date</span>
              <DatePicker placeholder="Start Date" />
            </div>
            <div>
              <span>Expiry Date</span>
              <DatePicker placeholder="Expiry Date" />
            </div>
            <div>
              <span>Incoterms</span>
              <DropdownComponent />
            </div>
          </div>
          <div className={styles.termsAndConditions}>
            <div>
              <span>Terms and Conditions</span>
              <RichEditorComponent />
            </div>
          </div>
          <div className={styles.checkboxContainer}>
            <CheckboComponent id={"schedule"} label={"Print schedule on PDF"} />
            <CheckboComponent
              id={"zero"}
              label={"Print charges with “Zero” in PDF"}
            />
            <div className={styles.switch}>
              <span>Customs</span>
              <div>
                <span>No</span>
                <SwitchComponent />
                <span>Yes</span>
              </div>
            </div>
          </div>
          <div className={styles.btnGrp}>
            <ButtonComponent
              label="Cancel"
              outlined="outlined"
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
            <ButtonComponent
              label="Next"
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          </div>
        </div>
      ) : activeIndex === 1 ? (
        <div className={styles.singleStep}>
          <div className={styles.customDetailsInputs}>
            <InputComponent placeholder={"Sales Person"} />
            <InputComponent placeholder={"Company"} />
            <InputComponent placeholder={"Customer Email"} />
            <InputComponent placeholder={"First Name"} />
            <InputComponent placeholder={"Last Name"} />
            <InputComponent placeholder={"Contact"} />
            <InputComponent placeholder={"Customer Address"} />
            <InputComponent placeholder={"CC Emails"} />
          </div>
          <div className={styles.checkbox}>
            <CheckboComponent id={"zero"} label={"Send Notifications to PDF"} />
          </div>
          <div className={styles.btnGrp}>
            <ButtonComponent
              label="Preview Quote"
              icon={"pi pi-check"}
              outlined={"outlined"}
            />
            <ButtonComponent
              label="Generate Quotation"
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          </div>
        </div>
      ) : activeIndex === 3 ? (
        <div className={styles.singleStep}>
          <div className={styles.QuoteId}>
            <div className={styles.success}>
              <BsCheckCircle className={styles.icon} />
              <h1>You have successfully generated quote for</h1>
              <div>
                <span>Inquiry ID :</span>
                <span>INQ84763997</span>
              </div>
              <p>Note: Email not sent to customer</p>
            </div>
            <div className={styles.btnGrp}>
              <ButtonComponent label={"View Quote"} outlined={"outlined"} />
              <ButtonComponent label={"Download PDF"} />
            </div>
          </div>
        </div>
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
};

export default ModalContent;
