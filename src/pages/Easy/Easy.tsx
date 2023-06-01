import { Navbar, PuzzleTable } from "../../components"

export interface EasyInterface {}

const Easy: React.FC<EasyInterface> = () => {
  document.title = "Puzzle Home | Easy";

  return (
    <div>
      <Navbar />
      <PuzzleTable puzzleNum={1} />
    </div>
  )
}

export default Easy