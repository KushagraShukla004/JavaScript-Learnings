// InputBox.jsx
import { useId } from "react";

const InputBox = ({
  labelName,
  amount,
  onAmountChange,
  onCurrencyChange, // ✅ fixed spelling
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amountInputId = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={amountInputId} className="text-md font-semibold text-slate-400">
        {labelName}
      </label>
      <div className="relative">
        <input
          type="number"
          id={amountInputId}
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="w-full p-3 pr-28 text-lg text-slate-200 bg-slate-900 rounded-lg border-2 border-slate-700 focus:outline-none focus:border-purple-500 transition-colors"
        />
        <select
          name={`${labelName}-currency`}
          id={`${labelName}-currency`}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="absolute right-2 top-2.5 p-1.5 text-sm font-medium bg-fuchsia-600 rounded-md border border-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-colors"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
