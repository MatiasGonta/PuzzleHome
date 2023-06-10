import { Link } from "react-router-dom";
import { Image } from '@/models';

export interface PuzzleInterface {
  props: Image;
}

const Puzzle: React.FC<PuzzleInterface> = ({ props }) => {
  return (
    <div className="puzzle">
      <div className="level">
          <p id="level-name">{props.levelName}</p> 
          <i className="fa-solid fa-arrow-down fa-fade"></i>
      </div>
      <Link to={`/${props.levelName}`}>
        <img src={props.src} alt={props.alt} id={props.id} />
      </Link>
    </div>
  )
}

export default Puzzle