import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
type ContextProp = {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  symbol: string;
};

const Country = createContext<ContextProp>({
  currency: "",
  symbol: "",
  setCurrency: () => {},
});
type Props = {
  children?: React.ReactNode;
};

const CryptoContext: React.FC<Props> = props => {
  const [currency, setCurrency] = useState("NGN");
  const [symbol, setSymbol] = useState("₦");

  useEffect(() => {
    if (currency === "NGN") setSymbol("₦");
    else if (currency === "USD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€");
    else if (currency === "CAD") setSymbol("$");
  }, [currency]);

  const value = useMemo(
    () => ({ currency, setCurrency, symbol }),
    [currency, setCurrency, symbol],
  );
  return <Country.Provider value={value}>{props.children}</Country.Provider>;
};

export default CryptoContext;

export const CurrencyState = () => {
  return useContext(Country);
};
