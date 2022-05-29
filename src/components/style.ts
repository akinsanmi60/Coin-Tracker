import styled from "styled-components";


export const CoinWrapper = styled.div`
 width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  padding: 40px;
 
  .chartline {
      width: 600px;
      height: 380px;
      margin-top: 10px;
  }
    @media (max-width: 425px) {
    .chartline {
      width: 300px;
      height: 180px;
      margin-top: 0px;
  }
  }
    @media (min-width: 786px) {
    .chartline {
      width: 600px;
      height: 380px;
      margin-top: -90px;
  }
  }
    @media (max-width: 900px) {
      width: 100%
    margin-top: 0px;
    padding: 20px;
    padding-top: 0px;
  }
`

export const SelectedButton = styled.span`
border: 1px solid gold;
border-radius: 5px;
padding: 10px;
padding-left: 20px;
padding-right: 20px;
font-family: Montserrat;
cursor: pointer;
background-color: none ;
color: gold;
font-weight: 500,
&:hover: {
background-olor: gold;
color: black;
},
width: 20%;
      //   margin: 5,
`

export const Textinput = styled.input`
font: inherit;
    letter-spacing: inherit;
    color: currentColor;
    padding: 4px 0 5px;
    border: 2px solid white;
    border-radius: 9px;
    box-sizing: content-box;
    background: none;
    height: 0.9rem;
    margin: 0 auto;
    display: block;
    min-width: 0;
    width: 70%;
    padding: 16.5px 14px;
`