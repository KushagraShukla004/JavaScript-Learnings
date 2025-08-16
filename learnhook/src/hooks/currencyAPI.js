// A custom Hook is nothing but a custom function we can create to do or call "something"
// like how react has a naming convention for it's built-in hooks i.e., to write "use" as a prefix of the function name(useState,useEffect,useCallback etc) , we also do the same. (not necessary but just for consistency)

import { useEffect, useState } from "react";

function useCurrencyAPI(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      //"res" (it is just a variable ,can be anything) is a default callback in ".then()" from where we can fetch the response from the API
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyAPI;
