import { Navbar, PuzzleTable } from "@/components"
import { mediumPieces, mediumPuzzleCompleted } from "./data";

export interface MediumInterface {}

const Medium: React.FC<MediumInterface> = () => {
  document.title = "Puzzle Home | Medium";
  return (
    <div>
      <Navbar />
      <PuzzleTable puzzlePieces={mediumPieces} puzzleCompleted={mediumPuzzleCompleted} />
    </div>
  )
}

export default Medium