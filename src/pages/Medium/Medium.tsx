import { Navbar, PuzzleTable } from "../../components"

export interface MediumInterface {}

const Medium: React.FC<MediumInterface> = () => {
  document.title = "Puzzle Home | Medium";
  return (
    <div>
      <Navbar />
      <PuzzleTable puzzleNum={2} />
    </div>
  )
}

export default Medium