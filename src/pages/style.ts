import styled from "styled-components";

export const Container = styled.div`
      display: flex;
@media (min-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
}
@media (max-width: 900px) {
    flex-direction: column;
        align-items: center;
}
`
export const SideBar = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    border-right: 2px solid grey;
    .heading {
        font-weight: bold;
        margin-bottom: 20px;
        font-family: Montserrat;
    }
    .description {
        width: 100%;
    font-family: Montserrat;
    padding: 25px;
    padding-bottom: 15px;
    padding-top: 0;
    text-align: justify;
    }
    .marketdata {
        
    }
    @media (max-width: 900px) {
    width: 100%;
    border-right: none;
    }
`

export const MarketData = styled.div`
  align-self: start;
  padding: 25px;
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .rank {
      display: flex;
  }
`

export const ErrorWrapper = styled.div`
  overflow: auto;
  .error-message {
      margin-top: 150px;
      h1 {
      font-size: 40px;
      text-align: center;
      color: gold;
      margin-bottom: 10px;
    }
   .errorbtn {
       display: flex;
       justify-content: center;
   }
  }
   @media (max-width: 900px) {
   .error-message {
    h1 {
      font-size: 30px;
      text-align: center;
      color: gold;
    }
   .errorbtn {
       display: flex;
       justify-content: center;
   }
  }
  }
`;