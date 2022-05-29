import React from "react";
import { SelectedButton } from "./style";




type ButtonProp = {
  onClick: () => void,
  selected: number | string | boolean ,
  children: string;
  key: number; 
}
const ClickButton = ({onClick, children}: ButtonProp) => {

  return (
    <>
    <SelectedButton onClick={onClick}>
      {children}
      </SelectedButton>
    </>
  );
};

export default ClickButton;
