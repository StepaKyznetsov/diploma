import { useState, useEffect } from "react";

export const useTypewriter = (text: string) => {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(text.slice(0, displayText.length + 1));
    }, 50);

    return () => clearTimeout(timeout);
  }, [displayText, text]);

  return { displayText };
};
