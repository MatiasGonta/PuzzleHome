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
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds: number):number => prevSeconds + 1);

        if (seconds >= 59) {
          setSeconds(0);
          setMinutes((prevMinutes: number):number => prevMinutes + 1);

          if (minutes >= 59) {
            setMinutes(0);
            setHours((prevHours: number):number => prevHours + 1);
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, seconds, minutes, hours]);

  const handleStartTimer = ():void => {
    if (isRunning) {
      return;
    }
    setIsRunning(!isRunning);
  };

  const handleStopTimer = ():void => {
    setIsRunning(false);
  };

  const handleResetTimer = ():void => {
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
    handleResetTimer
  };

  return (
    <TimerContext.Provider value={contextTimeValue}>
      {children}
    </TimerContext.Provider>
  );
};