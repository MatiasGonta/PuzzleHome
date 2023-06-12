import { TimerContext } from '@/context';
import { Image } from '@/models';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export interface PuzzleSuccessMessageInterface {
  props: Image;
  onPuzzleReset: ()=> void;
}

const PuzzleSuccessMessage: React.FC<PuzzleSuccessMessageInterface> = ({ props, onPuzzleReset }) => {
  const { seconds, minutes, hours, handleResetTimer } = useContext(TimerContext);

  const handleOnClick = () => {
    onPuzzleReset();
    handleResetTimer();
  }

  return (
    <div className="win-container">
      <h4 id="win-text">Congratulations, you completed the puzzle!</h4>
      <div className="separator"></div>
      <img src={props.src} alt={props.alt} id="win-img" />
      <div className="separator"></div>
      <div id="win-time">
        <p>Your Time</p>
        <span>{`${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`}</span>
      </div>
      <Link to='/'>
        <button id="next" onClick={handleOnClick}>Next Puzzle</button>
      </Link>
      <button id="next" onClick={handleOnClick}>Restart Puzzle</button>
    </div>
  );
}

export default PuzzleSuccessMessage