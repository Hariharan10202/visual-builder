import React from "react";
import { ParagraphContainer } from "./Paragraph.styled";
import { useDispatch, useSelector } from "react-redux";
import { ParagraphFunc } from "../../../Redux/Components";
import { MapData } from "../../../data";

const Paragraph = ({ onClickProps }) => {
  const dispatch = useDispatch();
  const element = useSelector((state) => state.components.data);

  console.log(element);

  const handleClick = (event) => {
    const UINAME = "Paragraph";
    const util = MapData.get(UINAME);
    dispatch(ParagraphFunc(util));
  };

  return (
    <ParagraphContainer onClick={handleClick}>Paragraph</ParagraphContainer>
  );
};

export default Paragraph;
