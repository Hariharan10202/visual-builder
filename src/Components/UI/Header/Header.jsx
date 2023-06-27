import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, TextContent } from "./Header.style";
import { MapData } from "../../../data";
import { useDispatch, useSelector } from "react-redux";
import { HeaderFunc } from "../../../Redux/Components";
import { InputText } from "primereact/inputtext";
import InputComponent from "../../Inputs/InputComponent/InputComponent";

const Header = ({ onClickProps, selectedComponent, setSelectedComponent }) => {
  const dispatch = useDispatch();
  const element = useSelector((state) => state.components.data);

  const [value, setValue] = useState("Header");
  const [isEditing, setIsEditing] = useState(false);

  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (event) => {
    const UINAME = "Header";
    const util = MapData.get(UINAME);
    dispatch(HeaderFunc(util));
    setSelectedComponent(event.target);
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const headerHandler = () => {
    console.log("/");
  };

  return (
    <HeaderContainer onDoubleClick={headerHandler} onClick={handleClick}>
      <TextContent ref={divRef} onDoubleClick={editHandler}>
        {isEditing ? (
          <InputText
            style={{ fontSize: "30px", width: "200px" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          value
        )}
      </TextContent>
    </HeaderContainer>
  );
};

export default Header;
