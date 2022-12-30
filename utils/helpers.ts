export const formatNumberDecimals = (value: string | number): string => {
  const valueString = value.toString();
  const dotIndex = valueString.indexOf(".");
  return valueString.substring(0, dotIndex + 6);
};

export const formatPriceRatio = (priceRatio: string) => {
  const formatted = priceRatio.substring(0, 7);
  if (formatted.indexOf(".") == 6) {
    return formatted.substring(0, 6);
  } else {
    return formatted;
  }
};

export const calcResult = (tokenValue: string, tokenPrice: string) => {
  const res = parseInt(tokenValue) / parseInt(tokenPrice);
  const resString = res.toString();
  const resSubstring = resString.substring(0, 15);
  if (Number.isNaN(res)) {
    return "Enter a value";
  } else {
    return resSubstring;
  }
};
