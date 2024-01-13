import { useContext, useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, rectSwappingStrategy, arraySwap } from "@dnd-kit/sortable";
import { Image } from '@/models';
import { TimerContext } from "@/context";
import { Piece } from "./Piece";
import { PuzzleSuccessMessage } from './PuzzleSuccessMessage';
import { piecesShuffler } from "@/utilities";

export interface PuzzleTableInterface {
  puzzleKey: string;
  puzzlePieces: Image[];
}

const PuzzleTable: React.FC<PuzzleTableInterface> = ({ puzzleKey, puzzlePieces }) => {
  const { handleStartTimer } = useContext(TimerContext);

  const [pieces, setPieces] = useState<Image[]>(puzzlePieces);

  const piecesId: Image['id'][] = pieces.map((piece: Image) => piece.id);
  const puzzleCompletedIdOrder: Image['id'][] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];

  const isPuzzleCompleted: boolean = puzzleCompletedIdOrder.every((element, index) => element === piecesId[index]);

  // Handlers
  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event;

    const oldIndex: number = pieces.findIndex((piece: Image) => piece.id === active.id);
    const newIndex: number = pieces.findIndex((piece: Image) => piece.id === over!.id);

    const newPiecesOrder: Image[] = arraySwap(pieces, oldIndex, newIndex);
    setPieces(newPiecesOrder);
  };

  const handleDragStart = () => {
    handleStartTimer();
  }

  const handleResetPuzzle = () => {
    const shuffledPieces: Image[] = piecesShuffler(puzzlePieces);

    setPieces(shuffledPieces);
  }

  return (
    <article className="puzzle__table">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <div className="puzzle__table__pieces">
          <SortableContext
            items={pieces}
            strategy={rectSwappingStrategy}
          >
            {
              pieces.map((piece: Image) => <Piece pieceProps={piece} key={piece.id} />)
            }
          </SortableContext>
        </div>
        {
          isPuzzleCompleted && <PuzzleSuccessMessage puzzleKey={puzzleKey} onPuzzleReset={handleResetPuzzle} />
        }
      </DndContext>
    </article>
  )
}

export default PuzzleTable