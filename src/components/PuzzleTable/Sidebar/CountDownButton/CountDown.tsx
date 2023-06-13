import { TimerContext } from "@/context";
import { useContext } from "react";

export interface CountDownInterface {}

const CountDown: React.FC<CountDownInterface> = () => {
    const { handleSwitchTimer, handleResetTimer, setSeconds, setMinutes, setHours } = useContext(TimerContext);

    let newHoursValue: number = 0;
    let newMinutesValue: number = 0;
    let newSecondsValue: number = 0;

    const handleOnClick = () => {
        handleSwitchTimer();
        handleResetTimer();
        setHours(newHoursValue);
        setMinutes(newMinutesValue);
        setSeconds(newSecondsValue);
    }

  return (
    <>
      <button id="back-arrow" style={{color: "red"}}>
        <i className="fa-solid fa-rotate-right" ></i>
      </button>
      <div>
        <input
          type="number"
          min={0}
          max={24}
        />
        <input
          type="number"
          min={0}
          max={59}
        />
        <input
          type="number"
          min={0}
          max={59}
        />
        <button onClick={handleOnClick} >Set Timer</button>
      </div>
    </>
  )
}

export default CountDown