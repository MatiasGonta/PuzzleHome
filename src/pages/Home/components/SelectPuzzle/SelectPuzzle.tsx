import { Puzzle } from "./Puzzle";
import { puzzleCompletedImages } from '@/data';

export interface SelectPuzzle {}

const SelectPuzzle: React.FC<SelectPuzzle> = () => {
  return (
    <article id="puzzle-selector">
      <Puzzle props={puzzleCompletedImages.Easy} />
      <Puzzle props={puzzleCompletedImages.Medium} />
      <Puzzle props={puzzleCompletedImages.Hard} />
    </article>
  )
}

export default SelectPuzzle