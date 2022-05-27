import styled from "styled-components";

export const CoinWrapper = styled.div`
 width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  padding: 40px;
    @media (max-width: 900px) {
          width: 100%
    margin-top: 0px;
    padding: 20px;
    padding-top: 0px;
  }
`