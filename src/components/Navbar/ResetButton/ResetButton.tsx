import { TimerContext } from "@/context";
import { useContext } from "react";

export interface ResetButtonInterface {}

const ResetButton: React.FC<ResetButtonInterface> = () => {
  const { handleResetTimer } = useContext(TimerContext);

  const handleOnClick = () => {
    handleResetTimer()
  }

  return (
    <div id="back-arrow">
      <i className="fa-solid fa-rotate-right" onClick={handleOnClick}></i>
    </div>
  )
}

export default ResetButton