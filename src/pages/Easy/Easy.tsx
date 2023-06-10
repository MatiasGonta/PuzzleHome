import { Navbar, PuzzleTable } from "@/components";
import { easyPieces, easyPuzzleCompleted } from "./data";


export interface EasyInterface {}

const Easy: React.FC<EasyInterface> = () => {
  document.title = "Puzzle Home | Easy";

  return (
    <div>
      <Navbar />
      <PuzzleTable puzzlePieces={easyPieces} puzzleCompleted={easyPuzzleCompleted} />
    </div>
  )
}

export default Easy