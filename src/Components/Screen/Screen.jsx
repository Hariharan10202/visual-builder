import React, { useRef } from "react";
import {
  CustomizablePopover,
  MetaLeveContainer,
  ScreenContainer,
} from "./Screen.styles";
import Meta from "../Group/Meta/Meta";
import { OverlayPanel } from "primereact/overlaypanel";

const Screen = ({
  removedQuotationDetails,
  removedLinerDetails,
  removedCompanyDetails,
  setRemovedCompanyDetails,
  setRemovedQuotationDetails,
  setRemovedLinerDetails,
  companyDetails,
  quotationDetails,
  linerDetails,
  setCompanyDetails,
  setLinerDetails,
  setQuotationDetails,
}) => {
  // console.log(companyDetails);
  // console.log(linerDetails);

  const companyDetailsRef = useRef(null);
  const quotationDetailsRef = useRef(null);
  const linerDetailsRef = useRef(null);
  const companyDetailsPopover = useRef(null);

  const handleCompanyDetailsSection = (e) => {
    // companyDetailsRef.current.style.backgroundColor = "#42a5f5";
  };
  const handlQuotationDetailsSection = () => {
    // quotationDetailsRef.current.style.backgroundColor = "#42a5f5";
  };
  const handleLinerDetailsSection = () => {
    // linerDetailsRef.current.style.backgroundColor = "#42a5f5";
  };

  return (
    <ScreenContainer>
      {companyDetails.length > 0 && (
        <MetaLeveContainer
          ref={companyDetailsRef}
          onClick={handleCompanyDetailsSection}
        >
          {/* <OverlayPanel ref={companyDetailsPopover}>
            <CustomizablePopover />
          </OverlayPanel> */}
          {companyDetails.map((data, index) => (
            <Meta
              key={index}
              removedCompanyDetails={removedCompanyDetails}
              label={data.name}
              data={data.val}
              obj={data}
              companyDetails={companyDetails}
              setCompanyDetails={setCompanyDetails}
              setRemovedCompanyDetails={setRemovedCompanyDetails}
            />
          ))}
        </MetaLeveContainer>
      )}
      {quotationDetails.length > 0 && (
        <MetaLeveContainer
          ref={quotationDetailsRef}
          onClick={handlQuotationDetailsSection}
        >
          {/* <OverlayPanel ref={quotationDetailsRef}>
            <CustomizablePopover />
          </OverlayPanel> */}
          {quotationDetails.map((data, index) => (
            <Meta
              key={index}
              removedQuotationDetails={removedQuotationDetails}
              label={data.name}
              data={data.val}
              obj={data}
              quotationDetails={quotationDetails}
              setQuotationDetails={setQuotationDetails}
              setRemovedQuotationDetails={setRemovedQuotationDetails}
            />
          ))}
        </MetaLeveContainer>
      )}
      {linerDetails.length > 0 && (
        <MetaLeveContainer
          ref={linerDetailsRef}
          onClick={handleLinerDetailsSection}
        >
          {/* <OverlayPanel ref={linerDetailsRef}>
            <CustomizablePopover />
          </OverlayPanel> */}
          {linerDetails.map((data, index) => (
            <Meta
              removedLinerDetails={removedLinerDetails}
              key={index}
              label={data.name}
              data={data.val}
              obj={data}
              linerDetails={linerDetails}
              setLinerDetails={setLinerDetails}
              setRemovedLinerDetails={setRemovedLinerDetails}
            />
          ))}
        </MetaLeveContainer>
      )}
    </ScreenContainer>
  );
};

export default Screen;
