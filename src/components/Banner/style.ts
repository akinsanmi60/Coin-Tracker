import styled from "styled-components";
import banner from "../../Assets/banner2.jpg";

export const BannerWrapper = styled.div`
  background-image: url(${banner});
   .content {
    height: 400px;
    display: flex;
    flex-direction: column;
    padding-top: 25;
    justify-content: space-around;
    .tagline {
      display: flex;
      height: 40%;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  },
`;
