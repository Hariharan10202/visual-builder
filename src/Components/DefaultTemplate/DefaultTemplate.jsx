import React from "react";
import styles from "./DefaultTemplate.module.css";
import Table from "../Table/Table";

const DefaultTemplate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>freightify</h1>
        <div>
          <span>XYZ Forwarder</span>
          <div>
            <div>
              <span>Tel</span>
              <span>9560703223</span>
            </div>
            <div>
              <span>Email</span>
              <span>hari@gmail.com</span>
            </div>
            <div>
              <span>Web</span>
              <span>www.xyzfor.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.metaHeader}>
        <div>
          <span>Company Name</span>
          <span>FBL</span>
        </div>
        <div>
          <span>Company Address</span>
          <span>-</span>
        </div>
        <div>
          <span>Contact Name</span>
          <span>Ram K</span>
        </div>
        <div>
          <span>Email id</span>
          <span>ramk@ramk.com</span>
        </div>
        <div>
          <span>Contact Number</span>
          <span>9967483202</span>
        </div>
      </div>
      <div className={styles.metaContainer}>
        <div>
          <span>From</span>
          <span>KLJ Klaipeda</span>
        </div>
        <div>
          <span>To</span>
          <span>HKG Hongkong</span>
        </div>
        <div>
          <span>Mode</span>
          <span>SEA-FCL</span>
        </div>
        <div>
          <span>Date</span>
          <span>20 Jun 2023</span>
        </div>
        <div>
          <span>Quotation No.</span>
          <span>XYZRR52UAHI5</span>
        </div>
        <div>
          <span>Expiry Date</span>
          <span>19 Jun 2024</span>
        </div>
        <div>
          <span>Number of Pieces</span>
          <span>1</span>
        </div>
        <div>
          <span>Gross/Cargo Weight</span>
          <span>1 Tons</span>
        </div>
        <div>
          <span>Customs</span>
          <span>Yes</span>
        </div>
        <div>
          <span>Quote Prepared By</span>
          <span>hariharan.t@freightify.com</span>
        </div>
        <div>
          <span>Chargeable Weight</span>
          <span>1 W/M</span>
        </div>
        <div>
          <span>Volume</span>
          <span>O CBM</span>
        </div>
      </div>
      <div className={styles.linerDetails}>
        <div>
          <span>Liner Name</span>
          <span>Hapag-Lloyd Quick</span>
        </div>
        <div>
          <span>Routes Details</span>
          <span>LTKljHKHG </span>
        </div>
        <div>
          <span>Cargo Type</span>
          <span>Ram K</span>
        </div>
        <div>
          <span>Service Type</span>
          <span>CFS/CFS</span>
        </div>
        <div>
          <span>Transit Time</span>
          <span>N/A</span>
        </div>
        <div>
          <span>Free Days</span>
          <span>-</span>
        </div>
        <div>
          <span>Sailing Date</span>
          <span>-</span>
        </div>
        <div>
          <span>Rate Expires On</span>
          <span>19 Jun 2024</span>
        </div>
      </div>
    </div>
  );
};

export default DefaultTemplate;
