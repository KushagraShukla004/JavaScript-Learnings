import { useState } from "react";
import { Card, InputBox } from "../../components";
import useCurrencyAPI from "../../hooks/currencyAPI";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyAPI(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="h-screen text-white flex flex-col justify-center items-center bg-slate-950">
      <Card>
        <h1 className="text-4xl font-extrabold text-center text-slate-100">
          Currency Converter
        </h1>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            convert(); // ✅ actually call the function
          }}
        >
          <InputBox
            labelName="From"
            amount={amount}
            currencyOptions={currencyOptions}
            onAmountChange={(val) => setAmount(val)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
          />

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-500"
            >
              Swap ⬌
            </button>
          </div>

          <InputBox
            labelName="To"
            amount={convertedAmount}
            currencyOptions={currencyOptions}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            isDisabled
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-500"
            >
              Convert
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CurrencyConverter;
