import React, { useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/Coinpinfo";
import { SingleCoin } from "../utils/apis";
import { capitalizeFirstLetter, numberWithCommas } from "../utils/helpers"
import { CurrencyState } from "../utils/ValueContext";
import LinearProgress from "@mui/material/LinearProgress";
import { HistoricalProp } from "./types";
import { Container, MarketData, SideBar } from "./style";

const CoinPage = () => {
  const { id } = useParams<string>();
  const [coin, setCoin] = useState<HistoricalProp>();
  const { currency, symbol } = CurrencyState();

  useQuery(
    "songlecoin",
    () =>
      axios.get(SingleCoin(id)),
    {
      onSuccess(e) {
    setCoin(e?.data);
      },
      refetchOnWindowFocus: false,
    },
  );
  const { data} = useQuery(
    "trendingcoin",
    () =>
      axios.get('https://api.coingecko.com/api/v3/search/trending'),
    // {
    //   onSuccess(e) {
    // setCoin(e?.data);
    //   },
    //   refetchOnWindowFocus: false,
    // },
  );
console.log("++++++++", data)
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <Container>
      <SideBar>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3"
          className="heading">
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className="description">
          {coin?.description?.en.length > 200
            ? `${capitalizeFirstLetter(coin?.description?.en).slice(0, 189)}`
            : capitalizeFirstLetter(coin?.description?.en)}
        </Typography>
        <MarketData>
          <span className="rank">
            <Typography variant="h5" className="heading">
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>
          <span className="rank">
            <Typography variant="h5" className='heading'>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {
                coin?.market_data?.current_price?.[currency.toLowerCase()].toLocaleString()
              }
            </Typography>
          </span>
        </MarketData>
      </SideBar>
      <CoinInfo coin={coin} />
    </Container>
  );
};

export default CoinPage;
