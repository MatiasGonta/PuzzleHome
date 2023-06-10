import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSwappingStrategy } from "@dnd-kit/sortable";
import { Piece } from "./Piece";
import { usePieces } from '@/hooks';
import { Image } from '@/models';
import { PuzzleSuccessMessage } from './PuzzleSuccessMessage';
export interface PuzzleTableInterface {
  puzzlePieces: Image[];
  puzzleCompleted: Image;
}

const PuzzleTable: React.FC<PuzzleTableInterface> = ({ puzzlePieces, puzzleCompleted }) => {
  const { pieces, isPuzzleCompleted, handleDragEnd, handleDragStart } = usePieces({puzzlePieces});

  return (
    <main id="puzzleContainer">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <section id="pieceContainer">
          <SortableContext
            items={pieces}
            strategy={rectSwappingStrategy}
          >
            {
              pieces.map((piece:Image) => <Piece pieceProps={piece} key={piece.id} />)
            }
            {isPuzzleCompleted ? (<PuzzleSuccessMessage props={puzzleCompleted} />) : (<></>)}
          </SortableContext>
        </section>
      </DndContext>
    </main>
  )
}

export default PuzzleTable