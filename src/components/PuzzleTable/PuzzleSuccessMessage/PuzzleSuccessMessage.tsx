import { TimerContext } from '@/context';
import { setLocalStorage, getLocalStorage, formatTime } from '@/utilities';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BestTimeBadge } from './BestTimeBadge';
import { puzzleCompletedImages } from '@/data';

export interface PuzzleSuccessMessageInterface {
  puzzleKey: string;
  onPuzzleReset: ()=> void;
}

const PuzzleSuccessMessage: React.FC<PuzzleSuccessMessageInterface> = ({ puzzleKey, onPuzzleReset }) => {
  const navigate = useNavigate();

  const puzzleCompleted = puzzleCompletedImages[puzzleKey as keyof typeof puzzleCompletedImages];

  const { seconds, handleResetTimer, handleStopTimer } = useContext(TimerContext);
  const time = formatTime(seconds);

  const bestTimeRaw: string | null = getLocalStorage(`${puzzleCompleted.levelName}BestTime`);
  const currentTime: number = seconds;
  const isNewRecord: boolean = !bestTimeRaw || currentTime < parseInt(bestTimeRaw);

  const handleOnClick = (navigation: boolean): void => {
    if (isNewRecord) {
      setLocalStorage(`${puzzleCompleted.levelName}BestTime`, currentTime);
    }

    onPuzzleReset();
    handleResetTimer();

    if (navigation) {
      navigate('/');
    }
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
          <button className="puzzle-home-button">
            <span onClick={() => handleOnClick(true)}>Next Puzzle</span>
          </button>
          <button className="puzzle-home-button" onClick={() => handleOnClick(false)}>
            <span>Restart Puzzle</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default PuzzleSuccessMessage;