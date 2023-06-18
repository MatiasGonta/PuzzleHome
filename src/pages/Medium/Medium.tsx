import { Navbar, PuzzleTable } from "@/components"
import { mediumPieces } from "./data";
import { puzzleCompletedImages } from '@/data';
import { piecesShuffler } from "@/utilities";

export interface MediumInterface {}

const Medium: React.FC<MediumInterface> = () => {
  document.title = "Puzzle Home | Medium";
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <PuzzleTable puzzlePieces={piecesShuffler(mediumPieces)} puzzleCompleted={puzzleCompletedImages.Medium} />
    </>
  )
}

export default Medium