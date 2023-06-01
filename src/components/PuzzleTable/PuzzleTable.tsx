import { PieceContainer, PuzzleContainer } from "."

export interface PuzzleTableInterface {
  puzzleNum: number;
}

const PuzzleTable: React.FC<PuzzleTableInterface> = ({ puzzleNum }) => {
  
  return (
    <main id="puzzleContainer">
        <PieceContainer puzzlePieces={puzzleNum} />
        {/* <PuzzleContainer /> */}
    </main>
  )
}

export default PuzzleTable