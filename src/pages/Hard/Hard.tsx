import { Navbar, PuzzleTable } from "@/components";
import { hardPieces } from "./data";
import { puzzleCompletedImages } from '@/data';

export interface HardInterface {}

const Hard: React.FC<HardInterface> = () => {
  document.title = "Puzzle Home | Hard";
  return (
    <>
      <Navbar />
      <PuzzleTable puzzlePieces={hardPieces} puzzleCompleted={puzzleCompletedImages.Hard} />
    </>
  )
}

export default Hard