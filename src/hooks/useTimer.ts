import { useEffect, useRef, useState } from "react";

interface ITimerOptions {
  time: number;
  onEnd: () => void;
}

interface ITimer {
  timeLeft: number;
  start: ({ time, onEnd }: ITimerOptions) => void;
  pause: () => void;
  resume: () => void;
}

export const useTimer = (): ITimer => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const optionsRef = useRef<ITimerOptions>({ time: 0, onEnd: () => {} });

  const start = ({ time, onEnd }: ITimerOptions) => {
    setTimeLeft(time);
    optionsRef.current = { time, onEnd };

    if (timerIdRef.current) clearTimeout(timerIdRef.current);
    
    timerIdRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  };

  const pause = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  const resume = () => {
    if (!timerIdRef.current && timeLeft > 0) {
      timerIdRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timerIdRef.current!);
      optionsRef.current.onEnd();
    }
  }, [timeLeft]);

  return { timeLeft, start, pause, resume };
};