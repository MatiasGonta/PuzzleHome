import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSwappingStrategy } from "@dnd-kit/sortable";
import { Piece } from "./Piece";
import { usePieces } from '@/hooks';
import { Image } from '@/models';
import { PuzzleSuccessMessage } from './PuzzleSuccessMessage';
import { Sidebar } from './Sidebar';
export interface PuzzleTableInterface {
  puzzlePieces: Image[];
  puzzleCompleted: Image;
}

const PuzzleTable: React.FC<PuzzleTableInterface> = ({ puzzlePieces, puzzleCompleted }) => {
  const { pieces, setPieces, isPuzzleCompleted, handleDragEnd, handleDragStart } = usePieces({puzzlePieces});

  const handleResetPuzzle = () => {
    setPieces(puzzlePieces);
  }

  return (
    <main id="puzzleTable">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <article>
          <SortableContext
            items={pieces}
            strategy={rectSwappingStrategy}
          >
            {
              pieces.map((piece:Image) => <Piece pieceProps={piece} key={piece.id} />)
            }
          </SortableContext>
        </article>
        {isPuzzleCompleted ? (<PuzzleSuccessMessage props={puzzleCompleted} onPuzzleReset={handleResetPuzzle} />) : (<></>)}
      </DndContext>
      <Sidebar></Sidebar>
    </main>
  )
}

export default PuzzleTable