import { useState, useEffect } from "react";

export function useNumbersCounter(
  initialValue: number,
  step: number,
  delay: number,
  endValue: number
) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (initialValue < endValue) {
        }
        const newCount =
          initialValue < endValue ? prevCount + step : prevCount - step;
        if (
          (initialValue < endValue && newCount >= endValue) ||
          (initialValue >= endValue && newCount <= endValue)
        ) {
          return endValue;
        }
        return newCount;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [delay, step, endValue]);

  return [count];
}
