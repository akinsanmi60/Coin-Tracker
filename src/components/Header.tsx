import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { CurrencyState } from "../utils/ValueContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { currency, setCurrency } = CurrencyState();
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };
  return (
    <AppBar  position="sticky">
      <Container>
        <Toolbar>
          <Typography
            variant="h5"
            style={{
              color: "gold",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              flex: 1,
              cursor: "pointer"
            }}
            onClick={() => navigate("/")}          >
            Rebirth Updater
          </Typography>
          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            style={{ width: 110, height: 40, marginLeft: 15, color: "gold" }}
            onChange={handleChange}
          >
            <MenuItem value={"NGN"}>NGN</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"CAD"}>CAD</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
