import React, { useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.css";
import { dataPoints } from "./dataPoints";
import { MultiSelect } from "primereact/multiselect";

const Navbar = ({
  setCompanyDetails,
  setExistingItems,
  existingItems,
  setQuotationDetails,
  setLinerDetails,
  companyDetails,
  linerDetails,
  quotationDetails,
  setRemovedCompanyDetails,
  removedCompanyDetails,
  setRemovedQuotationDetails,
  removedQuotationDetails,
  setRemovedLinerDetails,
  removedLinerDetails,
}) => {
  const [existing, setExisting] = useState([]);
  const previousOptionsRef = useRef([]);

  useEffect(() => {
    setExisting(dataPoints);
    // let companyList = [];
    // let list = [];
    // let linerList = [];
    // let quoationList = [];
    // dataPoints.forEach((element) => {
    //   element.Meta.forEach((item) => {
    //     list.push(item);
    //     if (item.code === "CD") companyList.push(item);
    //     if (item.code === "QD") quoationList.push(item);
    //     if (item.code === "LD") linerList.push(item);
    //   });
    // });
    // setCompanyDetails(companyList);
    // setQuotationDetails(quoationList);
    // setLinerDetails(linerList);
    // setExistingItems(list);
  }, [dataPoints]);

  // useEffect(() => {
  //   setExistingItems([...companyDetails, ...linerDetails, ...quotationDetails]);
  // }, [companyDetails, linerDetails, quotationDetails]);

  const handleSelectionChange = (e) => {
    // let count = 0;

    // dataPoints.forEach((element) => {
    //   element.Meta.forEach((item) => {
    //     count++;
    //   });
    // });

    // let companyList = [];
    // let linerList = [];
    // let quoationList = [];
    // let list = [];

    // if (e.value.length === count) {
    //   console.log("All options selected!");
    //   dataPoints.forEach((element) => {
    //     element.Meta.forEach((item) => {
    //       list.push(item);
    //       if (item.code === "CD") companyList.push(item);
    //       if (item.code === "QD") quoationList.push(item);
    //       if (item.code === "LD") linerList.push(item);
    //     });
    //   });
    //   setCompanyDetails(companyList);
    //   setQuotationDetails(quoationList);
    //   setLinerDetails(linerList);
    //   setExistingItems(list);
    //   return;
    // }

    // if (e.value.length === 0) {
    //   setCompanyDetails([]);
    //   setQuotationDetails([]);
    //   setLinerDetails([]);
    //   setExistingItems([]);
    //   return;
    // }

    const newSelectedOptions = e.value;
    const removedOptions = previousOptionsRef.current.filter((option) => {
      return !newSelectedOptions.includes(option);
    });

    if (e.selectedOption.code === "CD") {
      setRemovedCompanyDetails(
        removedCompanyDetails.filter((item) => item !== e.selectedOption)
      );
      if (!companyDetails.includes(e.selectedOption))
        setCompanyDetails([...companyDetails, e.selectedOption]);
      else
        setCompanyDetails(
          companyDetails.filter((item) => item.name !== e.selectedOption.name)
        );
    }
    if (e.selectedOption.code === "QD") {
      setRemovedQuotationDetails(
        removedQuotationDetails.filter((item) => item !== e.selectedOption)
      );
      if (!quotationDetails.includes(e.selectedOption))
        setQuotationDetails([...quotationDetails, e.selectedOption]);
      else
        setQuotationDetails(
          quotationDetails.filter((item) => item.name !== e.selectedOption.name)
        );
    }
    if (e.selectedOption.code === "LD") {
      setRemovedLinerDetails(
        removedLinerDetails.filter((item) => item !== e.selectedOption)
      );
      if (!linerDetails.includes(e.selectedOption))
        setLinerDetails([...linerDetails, e.selectedOption]);
      else
        setLinerDetails(
          linerDetails.filter((item) => item.name !== e.selectedOption.name)
        );
    }
    setExistingItems(newSelectedOptions);
    previousOptionsRef.current = newSelectedOptions;
    // console.log("Removed Options:", removedOptions);
    if (removedOptions.length) {
      if (removedOptions[0].code === "CD") {
        setCompanyDetails(
          companyDetails.filter((option) => removedOptions[0] !== option)
        );

        if (!removedCompanyDetails.includes(removedOptions[0]))
          setRemovedCompanyDetails([
            ...removedCompanyDetails,
            ...removedOptions,
          ]);
      } else if (removedOptions[0].code === "QD") {
        setQuotationDetails(
          quotationDetails.filter((option) => removedOptions[0] !== option)
        );
        if (!removedQuotationDetails.includes(removedOptions[0]))
          setRemovedQuotationDetails([
            ...removedQuotationDetails,
            ...removedOptions,
          ]);
      } else if (removedOptions[0].code === "LD") {
        setLinerDetails(
          linerDetails.filter((option) => removedOptions[0] !== option)
        );
        if (!removedLinerDetails.includes(removedOptions[0]))
          setRemovedLinerDetails([...removedLinerDetails, ...removedOptions]);
      }
    }
  };

  return (
    <div className={styles.Sidebar}>
      <div className={styles.components}>
        <div>
          <label htmlFor="">Existing Item</label>
          <MultiSelect
            value={[...companyDetails, ...quotationDetails, ...linerDetails]}
            onChange={handleSelectionChange}
            options={existing}
            optionLabel="label"
            optionGroupLabel="label"
            optionGroupChildren="Meta"
            placeholder="Select a data point"
            display="chip"
            style={{ width: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
