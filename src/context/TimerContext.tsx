import React, { createContext, useEffect, useState } from 'react';

export interface TimerContextInterface {
  isRunning: boolean;
  seconds: number;
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
  handleStartTimer: () => {},
  handleStopTimer: () => {},
  handleResetTimer: () => {},
});

export const TimerProvider: React.FC<TimerProviderInterface> = ({ children }) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds: number) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, seconds]);

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
    setIsRunning(false);
  };

  const contextTimeValue: TimerContextInterface = {
    isRunning,
    seconds,
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