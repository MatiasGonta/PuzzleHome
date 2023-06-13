import { Navbar, PuzzleTable } from "@/components";
import { easyPieces } from "./data";
import { puzzleCompletedImages } from '@/data';


export interface EasyInterface {}

const Easy: React.FC<EasyInterface> = () => {
  document.title = "Puzzle Home | Easy";

  return (
    <>
      <Navbar />
      <PuzzleTable puzzlePieces={easyPieces} puzzleCompleted={puzzleCompletedImages.Easy} />
    </>
  )
}

export default Easy