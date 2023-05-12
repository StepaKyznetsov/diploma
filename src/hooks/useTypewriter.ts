import { useState, useEffect } from "react";

export const useTypewriter = (text: string) => {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text[i]);
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [text]);

  return { displayText };
};
