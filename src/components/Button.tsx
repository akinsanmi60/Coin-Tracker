import React from "react";


type ButtonProp = {
  onClick: () => void,
  selected: boolean,
  children: string;
  key: number; 
}
const Button = ({onClick, selected}: ButtonProp) => {
  return (
    <>
    <span onClick={onClick}>
      {selected}
    </span></>
  );
};

export default Button;
