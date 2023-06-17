import { Navbar, PuzzleTable } from "@/components";
import { hardPieces } from "./data";
import { puzzleCompletedImages } from '@/data';

export interface HardInterface {}

const Hard: React.FC<HardInterface> = () => {
  document.title = "Puzzle Home | Hard";
  return (
    <>
      <header>
        <Navbar />
      </header>
      <PuzzleTable puzzlePieces={hardPieces} puzzleCompleted={puzzleCompletedImages.Hard} />
    </>
  )
}

export default Hard