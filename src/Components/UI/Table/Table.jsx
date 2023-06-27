import React from "react";
import { TableContainer } from "./Table.styled";
import { useDispatch, useSelector } from "react-redux";
import { MapData } from "../../../data";
import { TableFunc } from "../../../Redux/Components";

const Table = ({ onClickProps }) => {
  // const dispatch = useDispatch();
  // const element = useSelector((state) => state.components.data);

  // console.log(element);

  const handleClick = (event) => {
    // const UINAME = "Table";
    // const util = MapData.get(UINAME);
    // dispatch(TableFunc(util));

    console.log(event.target);
  };
  return <TableContainer onClick={handleClick}>Table</TableContainer>;
};

export default Table;
