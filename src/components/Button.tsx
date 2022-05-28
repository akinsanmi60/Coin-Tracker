import React from "react";
import styled from "styled-components";




type ButtonProp = {
  onClick: () => void,
  selected: any,
  children: string;
  key: number; 
}
const Button = ({onClick, selected}: ButtonProp) => {
const SelectedButton = styled.span`
border: 1px solid gold;
border-radius: 5px;
padding: 10px;
padding-left: 20px;
padding-right: 20px;
font-family: Montserrat;
cursor: pointer;
background-color: ${selected ? "gold" : ""} ;
color:${ selected ? "black" : "white"};
font-weight: ${selected ? 700 : 500},
&:hover: {
background-olor: gold;
color: black;
},
width: 20%;
      //   margin: 5,
`
  return (
    <>
    <SelectedButton onClick={onClick}>
      {selected}
      </SelectedButton>
    </>
  );
};

export default Button;
