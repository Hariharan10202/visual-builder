import React from "react";
import { LogoContainer } from "./Logo.styled";
import { useDispatch, useSelector } from "react-redux";
import { LogoFunc } from "../../../Redux/Components";
import { MapData } from "../../../data";

const Logo = ({ onClickProps }) => {
  const dispatch = useDispatch();
  const element = useSelector((state) => state.components.data[0].logo);

  console.log(element);

  const handleClick = (event) => {
    const UINAME = "Logo";
    const util = MapData.get(UINAME);
    dispatch(LogoFunc(util));
  };

  return <LogoContainer onClick={handleClick}>Logo</LogoContainer>;
};

export default Logo;
