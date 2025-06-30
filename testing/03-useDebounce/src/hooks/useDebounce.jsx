import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const currentCount = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log("clearing the previous clock");
      clearTimeout(currentCount);
    };
  }, [value, delay]);

  return debouncedValue;
};
