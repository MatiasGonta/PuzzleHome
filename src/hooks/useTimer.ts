import { useEffect, useState } from 'react';

export interface useTimerInterface {
    isRunning: boolean;
    seconds: number;
    minutes: number;
    hours: number;
    handleStartTimer: () => void;
    handleResetTimer: () => void;
    handleEndTimer: () => void;
}

const useTimer = ():useTimerInterface => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let intervalId: NodeJS.Timeout;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
  
          if (seconds >= 59) {
            setSeconds(0);
            setMinutes((prevMinutes) => prevMinutes + 1);
  
            if (minutes >= 59) {
              setMinutes(0);
              setHours((prevHours) => prevHours + 1);
            }
          }
        }, 1000);
      }
  
      return () => {
        clearInterval(intervalId);
      };
    }, [isRunning, seconds, minutes, hours]);
  
    const handleStartTimer = () => {
        setIsRunning(true);
    };
  
    const handleEndTimer = () => {
      setIsRunning(false);
    };
  
    const handleResetTimer = () => {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setIsRunning(false);
    };
  
  return {isRunning, seconds, minutes, hours, handleStartTimer, handleResetTimer, handleEndTimer};
}

export default useTimer