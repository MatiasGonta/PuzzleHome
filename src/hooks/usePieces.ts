import { DragEndEvent } from "@dnd-kit/core";
import { arraySwap } from "@dnd-kit/sortable";
import { useState } from "react";
import { Image } from '@/models';

export interface usePiecesInterface {
  puzzlePieces: Image[];
}

export interface PiecesHandlers {
  pieces: Image[];
  isPuzzleCompleted: boolean;
  handleDragEnd: (event: DragEndEvent) => void;
  handleDragStart: () => void;
}

const usePieces = ({ puzzlePieces }: usePiecesInterface): PiecesHandlers => {
  const [pieces, setPieces] = useState<Image[]>(puzzlePieces);

  const piecesId: string[] = pieces.map((piece) => piece.id);

  const puzzleCompletedIdOrder:string[] = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];

  const isPuzzleCompleted:boolean = puzzleCompletedIdOrder.every((element, index) => element === piecesId[index]);

  const handleDragEnd = (event: DragEndEvent):void => {
    const {active, over} = event;
    
    if (over === null ) {
      return;
    }

    const oldIndex: number = pieces.findIndex(piece => piece.id === active.id);
    const newIndex: number = pieces.findIndex(piece => piece.id === over.id);

    const newPiecesOrder = arraySwap(pieces, oldIndex, newIndex);
    setPieces(newPiecesOrder);
  };
  
  const handleDragStart = () => {};

  return { pieces, isPuzzleCompleted, handleDragEnd, handleDragStart };
}

export default usePieces