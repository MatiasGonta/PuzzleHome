import { Link } from "react-router-dom";

export interface PuzzleInterface {
    levelName: string;
    imageURL: string;
    imageAlt: string;
    imageId: string;
}

const Puzzle: React.FC<PuzzleInterface> = ( {levelName, imageURL, imageAlt, imageId} ) => {
  return (
    <div className="puzzle">
      <div className="level">
          <p id="level-name">{levelName}</p> 
          <i className="fa-solid fa-arrow-down fa-fade"></i>
      </div>
      <Link to={`/${levelName}`}>
        <img src={imageURL} alt={imageAlt} id={imageId}/>
      </Link>
    </div>
  )
}

export default Puzzle