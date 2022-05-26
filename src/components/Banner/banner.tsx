import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { BannerWrapper } from "./style";
import Carousel from "./component/Carousel";

const banner = () => {
  return (
    <BannerWrapper>
      <Container className="content">
        <div className="tagline">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Rebirth Updater
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </BannerWrapper>
  );
};

export default banner;
