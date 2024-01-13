import { getLocalStorage, formatTime } from "@/utilities";
export interface PuzzleBestTimeInterface {
  puzzleKey: string;
}

const PuzzleBestTime: React.FC<PuzzleBestTimeInterface> = ({ puzzleKey }) => {
  const bestTimeRaw: string | null = getLocalStorage(`${puzzleKey}BestTime`);
  const bestTimeFormatted = formatTime(parseInt(bestTimeRaw!));
  const emptyTime = '-- : -- : --';
  
  return (
    <article className="puzzle__best-time">
      <div>
        <h4>Best Time</h4>
        <span>{bestTimeRaw ? bestTimeFormatted : emptyTime}</span>
      </div>
    </article>
  );
};

export default PuzzleBestTime;