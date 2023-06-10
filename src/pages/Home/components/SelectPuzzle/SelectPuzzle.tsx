import { Puzzle } from "..";
import { easyPuzzleCompleted } from '@/pages/Easy/data/Pieces';
import { mediumPuzzleCompleted } from '@/pages/Medium/data/';
import { hardPuzzleCompleted } from '@/pages/Hard/data/';

export interface SelectPuzzle {}

const SelectPuzzle: React.FC<SelectPuzzle> = () => {
  return (
    <article id="puzzle-selector">
      <Puzzle props={easyPuzzleCompleted} />
      <Puzzle props={mediumPuzzleCompleted} />
      <Puzzle props={hardPuzzleCompleted} />
    </article>
  )
}

export default SelectPuzzle