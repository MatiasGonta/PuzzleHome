import React, { createContext, useEffect, useState } from 'react';

export interface TimerContextInterface {
  isRunning: boolean;
  seconds: number;
  minutes: number;
  hours: number;
  handleStartTimer: () => void;
  handleStopTimer: () => void;
  handleResetTimer: () => void;
  handleSwitchTimer: () => void;
  handleTimerValuesChange: (newSecondsValue:number, newMinutesValue:number, newHoursValue:number) => void;
  setSeconds?: React.Dispatch<React.SetStateAction<number>>;
  setMinutes?: React.Dispatch<React.SetStateAction<number>>;
  setHours?: React.Dispatch<React.SetStateAction<number>>;
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
  handleSwitchTimer: () => {},
  handleTimerValuesChange: () => {},
});

export const TimerProvider: React.FC<TimerProviderInterface> = ({ children }) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [countDown, setCountDown] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning && countDown) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
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
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, countDown, seconds, minutes, hours]);

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

  const handleSwitchTimer = () => {
    setCountDown(!countDown);
  }

  const handleTimerValuesChange = (newSecondsValue:number, newMinutesValue:number, newHoursValue:number) => {
    setSeconds(newSecondsValue);
    setMinutes(newMinutesValue);
    setHours(newHoursValue);
  };

  const contextTimeValue: TimerContextInterface = {
    isRunning,
    seconds,
    minutes,
    hours,
    handleStartTimer,
    handleStopTimer,
    handleResetTimer,
    handleSwitchTimer,
    handleTimerValuesChange,
    setSeconds,
    setMinutes,
    setHours
  };

  return (
    <TimerContext.Provider value={contextTimeValue}>
      {children}
    </TimerContext.Provider>
  );
};