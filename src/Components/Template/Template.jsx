import React, { useState } from "react";
import styles from "./Template.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Screen from "../Screen/Screen";

const Template = () => {
  const [component, setComponent] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState("Hello");

  const [existingItems, setExistingItems] = useState([]);

  const [companyDetails, setCompanyDetails] = useState([]);
  const [quotationDetails, setQuotationDetails] = useState([]);
  const [linerDetails, setLinerDetails] = useState([]);

  const [removedCompanyDetails, setRemovedCompanyDetails] = useState([]);
  const [removedQuotationDetails, setRemovedQuotationDetails] = useState([]);
  const [removedLinerDetails, setRemovedLinerDetails] = useState([]);

  // const [removedItems, setRemoveItems] = useState([]);

  // console.log(companyDetails);
  // console.log(quotationDetails);
  // console.log(linerDetails);

  return (
    <div className={styles.container}>
      <Sidebar
        existingItems={existingItems}
        setExistingItems={setExistingItems}
        removedCompanyDetails={removedCompanyDetails}
        setRemovedCompanyDetails={setRemovedCompanyDetails}
        removedQuotationDetails={removedQuotationDetails}
        setRemovedQuotationDetails={setRemovedQuotationDetails}
        removedLinerDetails={removedLinerDetails}
        setRemovedLinerDetails={setRemovedLinerDetails}
        companyDetails={companyDetails}
        setCompanyDetails={setCompanyDetails}
        quotationDetails={quotationDetails}
        setLinerDetails={setLinerDetails}
        linerDetails={linerDetails}
        setQuotationDetails={setQuotationDetails}
      />
      <Screen
        removedCompanyDetails={removedCompanyDetails}
        removedLinerDetails={removedLinerDetails}
        removedQuotationDetails={removedQuotationDetails}
        setRemovedCompanyDetails={setRemovedCompanyDetails}
        setRemovedQuotationDetails={setRemovedQuotationDetails}
        setRemovedLinerDetails={setRemovedLinerDetails}
        companyDetails={companyDetails}
        quotationDetails={quotationDetails}
        linerDetails={linerDetails}
        setQuotationDetails={setQuotationDetails}
        setCompanyDetails={setCompanyDetails}
        setLinerDetails={setLinerDetails}
      />
      {/* <Config
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      /> */}
    </div>
  );
};

export default Template;
