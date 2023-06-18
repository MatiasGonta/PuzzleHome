import { Navbar, PuzzleTable } from "@/components";
import { hardPieces } from "./data";
import { puzzleCompletedImages } from '@/data';
import { piecesShuffler } from "@/utilities";

export interface HardInterface {}

const Hard: React.FC<HardInterface> = () => {
  document.title = "Puzzle Home | Hard";
  return (
    <>
      <header>
        <Navbar />
      </header>
      <PuzzleTable puzzlePieces={piecesShuffler(hardPieces)} puzzleCompleted={puzzleCompletedImages.Hard} />
    </>
  )
}

export default Hard