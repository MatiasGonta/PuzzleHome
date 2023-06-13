import { Navbar, PuzzleTable } from "@/components"
import { mediumPieces } from "./data";
import { puzzleCompletedImages } from '@/data';

export interface MediumInterface {}

const Medium: React.FC<MediumInterface> = () => {
  document.title = "Puzzle Home | Medium";
  return (
    <>
      <Navbar />
      <PuzzleTable puzzlePieces={mediumPieces} puzzleCompleted={puzzleCompletedImages.Medium} />
    </>
  )
}

export default Medium