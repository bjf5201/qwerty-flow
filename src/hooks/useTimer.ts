import { useCallback, useEffect, useRef, useState } from 'react';

export default function useTimer(seconds: number) {
  if (seconds < 0) {
    throw new Error('Time in seconds must be greater than 0');
  }
  const [remainingTime, setRemainingTime] = useState(seconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current!);
        }
        return prev - 1;
      });
    }, 1000);
  }, [setRemainingTime]);

  const resetTimer = useCallback(() => {
    clearInterval(intervalRef.current!);
    setRemainingTime(seconds);
  }, [seconds]);

  useEffect(() => {
    if (remainingTime === 0 && intervalRef.current) {
      clearInterval(intervalRef.current!);
    }
  }, [remainingTime, intervalRef]);

  return { remainingTime, startTimer, resetTimer };
}