
export interface TimerInterface {}

const Timer: React.FC<TimerInterface> = () => {
  return (
    <div className="timer-container">
        <span id="hour">00</span>
        <span className="timer-separator">:</span>
        <span id="min">00</span>
        <span className="timer-separator">:</span>
        <span id="sec">00</span>
    </div>
  )
}

export default Timer