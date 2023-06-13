import { TimerContext } from "@/context";
import { useContext } from "react";

export interface TimerInterface {}

const Timer: React.FC<TimerInterface> = () => {
  const { seconds, minutes, hours } = useContext(TimerContext);

  return (
    <div className="timer-container">
      <span>{`${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`}</span>
    </div>
  )
}

export default Timer