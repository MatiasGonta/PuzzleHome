import React, { createContext, useEffect, useState } from 'react';

export interface TimerContextInterface {
  isRunning: boolean;
  seconds: number;
  minutes: number;
  hours: number;
  handleStartTimer: () => void;
  handleStopTimer: () => void;
  handleResetTimer: () => void;
}

interface TimerProviderInterface {
  children: JSX.Element | JSX.Element[];
}

export const TimerContext = createContext<TimerContextInterface>({
  isRunning: false,
  seconds: 0,
  minutes: 0,
  hours: 0,
  handleStartTimer: () => {},
  handleStopTimer: () => {},
  handleResetTimer: () => {},
});

export const TimerProvider: React.FC<TimerProviderInterface> = ({ children }) => {
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

  const handleStopTimer = () => {
    setIsRunning(false);
  };

  const handleResetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsRunning(false);
  };

  const contextTimeValue: TimerContextInterface = {
    isRunning,
    seconds,
    minutes,
    hours,
    handleStartTimer,
    handleStopTimer,
    handleResetTimer,
  };

  return (
    <TimerContext.Provider value={contextTimeValue}>
      {children}
    </TimerContext.Provider>
  );
};