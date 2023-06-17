import { TimerContext } from '@/context';
import { Image } from '@/models';
import { setLocalStorage, getLocalStorage } from '@/utilities';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BestTimeBadge } from './BestTimeBadge';

export interface PuzzleSuccessMessageInterface {
  props: Image;
  onPuzzleReset: ()=> void;
}

const PuzzleSuccessMessage: React.FC<PuzzleSuccessMessageInterface> = ({ props, onPuzzleReset }) => {
  const { seconds, minutes, hours, handleResetTimer, handleStopTimer } = useContext(TimerContext);

  const bestTime: string | null = getLocalStorage(`${props.levelName}BestTime`);
  const currentTime: number = hours * 3600 + minutes * 60 + seconds;
  const isNewRecord: boolean = !bestTime || currentTime < parseInt(bestTime);

  const handleOnClick = (): void => {
    if (!bestTime || currentTime < parseInt(bestTime)) {
      setLocalStorage(`${props.levelName}BestTime`, currentTime);
    }

    onPuzzleReset();
    handleResetTimer();
  };

  return (
    <>
      <div className="puzzle-blocker"></div>
      <div className="success-message" onLoad={handleStopTimer}>
        <h4>Congratulations, you completed the puzzle!</h4>
        <img src={props.src} alt={props.alt} />
        <div className="separator"></div>
        <div id="success-time">
          <h6>Your Time</h6>
          {(isNewRecord) ? (
            <div>
              <BestTimeBadge />
              <span>{`${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`}</span>
            </div>
          ) : (
            <span>{`${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`}</span>
          )}
        </div>
        <div className="separator"></div>
        <div>
          <Link to='/'>
            <button onClick={handleOnClick}>Next Puzzle</button>
          </Link>
          <button onClick={handleOnClick}>Restart Puzzle</button>
        </div>
      </div>
    </>
  );
}

export default PuzzleSuccessMessage