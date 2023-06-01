import { Navbar, PuzzleTable } from "../../components"

export interface HardInterface {}

const Hard: React.FC<HardInterface> = () => {
  document.title = "Puzzle Home | Hard";
  return (
    <div>
      <Navbar />
      <PuzzleTable puzzleNum={3} />
    </div>
  )
}

export default Hard