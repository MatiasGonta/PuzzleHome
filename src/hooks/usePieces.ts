import { DragEndEvent } from "@dnd-kit/core";
import { arraySwap } from "@dnd-kit/sortable";
import { useContext, useState } from "react";
import { Image } from '@/models';
import { TimerContext } from "@/context";

export interface usePiecesInterface {
  puzzlePieces: Image[];
}

export interface PiecesHandlers {
  pieces: Image[];
  setPieces: React.Dispatch<React.SetStateAction<Image[]>>;
  isPuzzleCompleted: boolean;
  handleDragEnd: (event: DragEndEvent) => void;
  handleDragStart: () => void;
}

const usePieces = ({ puzzlePieces }: usePiecesInterface): PiecesHandlers => {
  const { handleStartTimer, isRunning } = useContext(TimerContext);

  const [pieces, setPieces] = useState<Image[]>(puzzlePieces);
  const piecesId: string[] = pieces.map((piece: Image) => piece.id);

  const puzzleCompletedIdOrder:string[] = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];

  const isPuzzleCompleted:boolean = puzzleCompletedIdOrder.every((element, index) => element === piecesId[index]);

  const handleDragEnd = (event: DragEndEvent):void => {
    const {active, over} = event;

    if (over === null ) {
      return;
    }

    const oldIndex:number = pieces.findIndex((piece: Image) => piece.id === active.id);
    const newIndex:number = pieces.findIndex((piece: Image) => piece.id === over.id);

    const newPiecesOrder:Image[] = arraySwap(pieces, oldIndex, newIndex);
    setPieces(newPiecesOrder);
  };

  const handleDragStart = () => {
    if (isRunning !== true) {
      handleStartTimer()
    }
  }

  return { pieces, setPieces, isPuzzleCompleted, handleDragEnd, handleDragStart };
}

export default usePieces