const InputBox = ({
  label,
  amount,
  currencyOptions = [],
  onCurrentChange,
  selectCurrency,
  onAmountChange,
  amountDisable,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-semibold">{label}</label>
      <input
        type="number"
        className="border p-2 rounded-md"
        value={amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
        disabled={amountDisable}
      />
      <select
        className="border p-2 rounded-md"
        value={selectCurrency}
        onChange={(e) => onCurrentChange && onCurrentChange(e.target.value)}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputBox;
