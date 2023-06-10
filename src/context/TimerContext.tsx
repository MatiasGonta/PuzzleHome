import React, { useEffect, useState } from 'react';

export interface TimerContextInterface {
  seconds: number;
  minutes: number;
  hours: number;
  handleStartTimer: () => void;
  handleEndTimer: () => void;
  handleResetTimer: () => void;
}

interface TimerProviderInterface {
  children: JSX.Element | JSX.Element[];
}

export const TimerContext = React.createContext<TimerContextInterface>({
  seconds: 0,
  minutes: 0,
  hours: 0,
  handleStartTimer: () => {},
  handleEndTimer: () => {},
  handleResetTimer: () => {},
});

export const TimerProvider = ({ children }:TimerProviderInterface) => {
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

  const timerContextValue: TimerContextInterface = {
    seconds,
    minutes,
    hours,
    handleStartTimer,
    handleEndTimer,
    handleResetTimer,
  };

  return (
    <TimerContext.Provider value={timerContextValue}>
      {children}
    </TimerContext.Provider>
  )
};