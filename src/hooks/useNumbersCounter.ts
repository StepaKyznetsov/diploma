import { useState, useEffect } from 'react';

export function useNumbersCounter(initialValue: number, step: number, delay: number, endValue?: number) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + step;
        if (endValue !== undefined && newCount >= endValue) {
          return endValue;
        }
        return newCount;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [delay, step, endValue]);

  return [count];
}