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

//  if (e.selectedOption.code === "CD") {
//    setRemovedCompanyDetails(
//      companyDetailsLists.filter(
//        (obj1) =>
//          !e.value.find(
//            (obj2) => obj1.name === obj2.name && obj1.code === obj2.code
//          )
//      )
//    );
//    if (!companyDetails.includes(e.selectedOption)) {
//      setCompanyDetails([...companyDetailsLists, e.selectedOption]);
//    } else
//      setCompanyDetails(
//        companyDetails.filter((item) => item.name !== e.selectedOption.name)
//      );
//  }
//  if (e.selectedOption.code === "QD") {
//    setRemovedQuotationDetails(
//      quotationDetails.filter(
//        (obj1) =>
//          !e.value.find(
//            (obj2) => obj1.name === obj2.name && obj1.code === obj2.code
//          )
//      )
//    );
//    if (!quotationDetails.includes(e.selectedOption))
//      setQuotationDetails([...quotationDetails, e.selectedOption]);
//    else
//      setQuotationDetails(
//        quotationDetails.filter((item) => item.name !== e.selectedOption.name)
//      );
//  }
//  if (e.selectedOption.code === "LD") {
//    setRemovedLinerDetails(
//      linerDetails.filter(
//        (obj1) =>
//          !e.value.find(
//            (obj2) => obj1.name === obj2.name && obj1.code === obj2.code
//          )
//      )
//    );
//    if (!linerDetails.includes(e.selectedOption))
//      setLinerDetails([...linerDetails, e.selectedOption]);
//    else
//      setLinerDetails(
//        linerDetails.filter((item) => item.name !== e.selectedOption.name)
//      );
//  }
//  setExistingItems(newSelectedOptions);
//  previousOptionsRef.current = newSelectedOptions;
//  // console.log("Removed Options:", removedOptions);
//  if (removedOptions.length) {
//    if (removedOptions[0].code === "CD") {
//      setCompanyDetails(
//        companyDetails.filter((option) => removedOptions[0] !== option)
//      );

//      if (!removedCompanyDetails.includes(removedOptions[0]))
//        setRemovedCompanyDetails([...removedCompanyDetails, ...removedOptions]);
//    } else if (removedOptions[0].code === "QD") {
//      setQuotationDetails(
//        quotationDetails.filter((option) => removedOptions[0] !== option)
//      );
//      if (!removedQuotationDetails.includes(removedOptions[0]))
//        setRemovedQuotationDetails([
//          ...removedQuotationDetails,
//          ...removedOptions,
//        ]);
//    } else if (removedOptions[0].code === "LD") {
//      setLinerDetails(
//        linerDetails.filter((option) => removedOptions[0] !== option)
//      );
//      if (!removedLinerDetails.includes(removedOptions[0]))
//        setRemovedLinerDetails([...removedLinerDetails, ...removedOptions]);
//    }
//  }
