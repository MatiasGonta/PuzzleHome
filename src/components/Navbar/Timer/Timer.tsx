
export interface TimerInterface {}

const Timer: React.FC<TimerInterface> = () => {
  return (
    <div className="timer-container">
        <span id="hour">{''}</span>
        <span className="timer-separator">:</span>
        <span id="min">{''}</span>
        <span className="timer-separator">:</span>
        <span id="sec">{''}</span>
    </div>
  )
}

export default Timer