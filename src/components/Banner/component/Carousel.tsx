/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TrendingCoins } from "../../../utils/apis";
import { numberWithCommas } from "../../../utils/helpers";
import { CurrencyState } from "../../../utils/ValueContext";
import { Card, Wrapper } from "./style";
import { TrendingProp } from "../../type";
const Carousel = () => {
  const [trending, setTrending] = useState<TrendingProp[]>([]);
  const { currency, symbol } = CurrencyState();
  const navigate = useNavigate();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return (
    <Wrapper>
        {trending.map(coin => {
          let profit = coin?.price_change_percentage_24h >= 0;
          return (
              <Card>
                <div key={coin.symbol} onClick={() => navigate(`/coins/${coin.id}`)} className="carouselItem">
                  <img
                    src={coin?.image}
                    alt={coin.name}
                    height="80"
                    style={{ marginBottom: 10 }}
                  />
                  <span>
                    {coin?.symbol}
                    &nbsp;
                    <span
                      style={{
                        color: profit ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    >
                      {profit && "+"}
                      {coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                  </span>
                  <span style={{ fontSize: 22, fontWeight: 500 }}>
                    {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
                  </span>
                </div>
              </Card>
          );
        })}


    </Wrapper>
  );
};

export default Carousel;
