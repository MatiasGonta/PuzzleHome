import { Image } from '@/models';

export const piecesShuffler = (pieces:Image[]):Image[] => {
    const shuffledPieces = pieces.sort(() => Math.random() - 0.5);
    return shuffledPieces;
}