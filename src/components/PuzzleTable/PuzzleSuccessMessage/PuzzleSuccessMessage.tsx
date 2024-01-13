import { TimerContext } from '@/context';
import { setLocalStorage, getLocalStorage, formatTime } from '@/utilities';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BestTimeBadge } from './BestTimeBadge';
import { puzzleCompletedImages } from '@/data';

export interface PuzzleSuccessMessageInterface {
  puzzleKey: string;
  onPuzzleReset: ()=> void;
}

const PuzzleSuccessMessage: React.FC<PuzzleSuccessMessageInterface> = ({ puzzleKey, onPuzzleReset }) => {
  const puzzleCompleted = puzzleCompletedImages[puzzleKey as keyof typeof puzzleCompletedImages];

  const { seconds, handleResetTimer, handleStopTimer } = useContext(TimerContext);
  const time = formatTime(seconds);

  const bestTimeRaw: string | null = getLocalStorage(`${puzzleCompleted.levelName}BestTime`);
  const currentTime: number = seconds;
  const isNewRecord: boolean = !bestTimeRaw || currentTime < parseInt(bestTimeRaw);

  const handleOnClick = (): void => {
    if (!bestTimeRaw || currentTime < parseInt(bestTimeRaw)) {
      setLocalStorage(`${puzzleCompleted.levelName}BestTime`, currentTime);
    }

    onPuzzleReset();
    handleResetTimer();
  };

  return (
    <>
      {/* Modal */}
      <div className="puzzle-blocker"></div>

      <div className="puzzle-success" onLoad={handleStopTimer}>
        <h4 className="puzzle-success__title">Congratulations, you completed the puzzle!</h4>
        <img className="puzzle-success__img" src={puzzleCompleted.src} alt={puzzleCompleted.id} />

        <div className="puzzle-success__time">
          <h6>Your Time</h6>
          <div>
            { isNewRecord && <BestTimeBadge /> }
            <span className="puzzle-success__time__text">{time}</span>
          </div>
        </div>

        <div>
          <Link to='/' className="puzzle-home-button">
            <span onClick={handleOnClick}>Next Puzzle</span>
          </Link>
          <button className="puzzle-home-button" onClick={handleOnClick}>
            <span>Restart Puzzle</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default PuzzleSuccessMessage;