import { Navbar, PuzzleTable } from "@/components";
import { hardPieces, hardPuzzleCompleted } from "./data";

export interface HardInterface {}

const Hard: React.FC<HardInterface> = () => {
  document.title = "Puzzle Home | Hard";
  return (
    <div>
      <Navbar />
      <PuzzleTable puzzlePieces={hardPieces} puzzleCompleted={hardPuzzleCompleted} />
    </div>
  )
}

export default Hard