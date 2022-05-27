/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { HistoricalChart } from "../utils/apis";
import SelectButton from "./Button";
import { CurrencyState } from "../utils/ValueContext";
import { CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import { CoinWrapper } from "./style";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js"
import Button from "./Button";

export const chartDays = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
];

type CoinProp = {
  coin: {
    id: string
  }
}

type DataProp = {
  prices: [number, number][]
}

ChartJS.register(...registerables)

const Coinpage = ({ coin }: CoinProp) => {
  const [historicData, setHistoricData] = useState<DataProp>();
  const [days, setDays] = useState(1);
  const { currency } = CurrencyState();
  const [flag, setflag] = useState(false);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin?.id, days, currency));
    setflag(true);
    setHistoricData(data);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CoinWrapper>
        {!historicData || flag === false ? (
          <CircularProgress />
        ) : (
          <>
            <Line
              data={{
                labels: historicData?.prices?.map((item) => {
                  const dayDate = item[0]
                  let date = new Date(dayDate);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicData?.prices?.map((item) => item[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <Button
                  key={day.value}
                  onClick={() => {
                    setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </Button>
              ))}
            </div>
          </>
        )}
      </CoinWrapper>
    </ThemeProvider>
  )
};

export default Coinpage;
