import { Navbar, PuzzleTable } from "@/components";
import { easyPieces } from "./data";
import { puzzleCompletedImages } from '@/data';
import { piecesShuffler } from "@/utilities";

export interface EasyInterface {}

const Easy: React.FC<EasyInterface> = () => {
  document.title = "Puzzle Home | Easy";

  return (
    <>
      <header>
        <Navbar />
      </header>
      <PuzzleTable puzzlePieces={piecesShuffler(easyPieces)} puzzleCompleted={puzzleCompletedImages.Easy} />
    </>
  )
}

export default Easy