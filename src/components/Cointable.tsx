/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { CoinList } from "../utils/apis";
import { CurrencyState } from "../utils/ValueContext";
import { TrendingProp } from "./type";
import { colors, LinearProgress, TableCell, TableContainer, TableHead, TableRow, createTheme, ThemeProvider, TableBody, Table, Paper} from "@mui/material";
import { numberWithCommas } from "../utils/helpers";
import { Textinput } from "./style";


const Cointable = () => {
  const [coins, setCoins] = useState<TrendingProp[] >([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { currency, symbol } = CurrencyState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: colors.common["white"],
        contrastText: "white",
      },
    }
  });


  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };


  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            style={{ margin: 18, fontFamily: "Montserrat" }}
          >
            Cryptocurrency Prices by Market Cap
          </Typography>
        <Textinput
          placeholder="Search For a Crypto Currency.."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
          <TableContainer component={Paper} sx={{marginTop: 2}}>
            {loading ? (
              <LinearProgress style={{ backgroundColor: "gold" }} />
            ) : (
              <Table aria-label="simple table" >
                <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                  <TableRow>
                    {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "700",
                          fontFamily: "Montserrat",
                        }}
                        key={head}
                        align={head === "Coin" ? "left" : "right"}
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10).map(coin =>
                    <>
                      <TableRow
                        onClick={() => navigate(`/coins/${coin.id}`)}
                        key={coin.id}
                        sx={{ backgroundColor: "#16171a", color: "white" }}>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                            color: "white"
                          }}
                        >
                          <img
                            src={coin?.image}
                            alt={coin.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {coin.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {coin.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right"
                          style={{
                            color: "white"
                          }}>
                          {symbol}
                          {numberWithCommas(coin.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            fontWeight: 500,
                            color: "white"
                          }}
                        >
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right" style={{
                          color: "white"
                        }}>
                          {symbol}{" "}
                          {coin.market_cap.toLocaleString().slice(0, -6)}
                          M
                        </TableCell>
                      </TableRow>
                    </>
                  )}
                </TableBody>
              </Table>
            )}
        </TableContainer>

          <Pagination
            count={handleSearch()?.length / 10}
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#EEBC1D",
            }}
            className="pagination"
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 450);
            }}
          />

      </Container>
    </ThemeProvider>
  )
};

export default Cointable;

