import { Image } from '@/models';

export interface PuzzleSuccessMessageInterface {
  props: Image;
}

const PuzzleSuccessMessage: React.FC<PuzzleSuccessMessageInterface> = ({ props }) => {

  return (
    <div className="win-container">
        <h4 id="win-text">Congratulations, you completed the puzzle!</h4>
        <div className="separator"></div>
        <img src={props.src} alt={props.alt} id="win-img" />
        <div className="separator"></div>
        <div id="win-time">
            <p>Your Time</p>
            <span>{``}</span>
        </div>
        <button id="next">Next Puzzle</button>
    </div>
  )
}

export default PuzzleSuccessMessage