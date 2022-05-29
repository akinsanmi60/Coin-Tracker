import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import CoinPage from "./pages/CoinPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/Error"
import "./App.css";

const styles = {
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
};

function App() {
  return (
    <BrowserRouter>
      <div style={styles.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
