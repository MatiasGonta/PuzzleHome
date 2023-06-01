import { Puzzle } from ".."

export interface SelectPuzzle {}

const SelectPuzzle: React.FC<SelectPuzzle> = () => {
  return (
    <article id="puzzle-selector">
      <Puzzle levelName="Easy" imageURL="./src/assets/puzzle1/puzzle1-complete.jpg" imageAlt="Easy Puzzle Image" imageId="Puzzle1"/>
      <Puzzle levelName="Medium" imageURL="./src/assets/puzzle2/puzzle2-complete.jpg" imageAlt="Medium Puzzle Image" imageId="Puzzle2"/>
      <Puzzle levelName="Hard" imageURL="./src/assets/puzzle3/puzzle3-complete.jpg" imageAlt="Hard Puzzle Image" imageId="Puzzle3"/>
    </article>
  )
}

export default SelectPuzzle