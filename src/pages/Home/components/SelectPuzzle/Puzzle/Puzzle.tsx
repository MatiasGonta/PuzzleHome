import { Link } from "react-router-dom";
import { Image } from '@/models';
import { formatTime, getLocalStorage } from "@/utilities";

export interface PuzzleInterface {
  props: Image;
}

const Puzzle: React.FC<PuzzleInterface> = ({ props }) => {
  const bestTime = getLocalStorage(`${props.levelName}BestTime`);

  return (
    <section className="puzzle">
      {(bestTime === null) ? (
        <div className="level noplayed">
          <h3>{props.levelName}</h3> 
          <i className="fa-solid fa-arrow-down fa-fade"></i>
        </div>
      ) : ( 
        <div className="level">
          <h3>{props.levelName}</h3> 
          <span>{formatTime(parseInt(bestTime))}</span>
        </div>
      )}
      <Link to={`/${props.levelName}`}>
        <img src={props.src} alt={props.alt} id={props.id} />
      </Link>
    </section>
  )
}

export default Puzzle