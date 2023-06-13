import { Image } from '@/models';

interface PuzzleCompletedImagesInterface {
  Easy: Image;
  Medium: Image;
  Hard: Image;
}

export const puzzleCompletedImages: PuzzleCompletedImagesInterface = {
  Easy: {
    levelName: 'Easy',
    src: './src/assets/puzzle-completed/easypuzzle-complete.jpg',
    alt: 'puzzle-complete1.png',
    id: 'puzzle1'
  },
  Medium: {
    levelName: 'Medium',
    src: './src/assets/puzzle-completed/mediumpuzzle-complete.jpg',
    alt: 'puzzle-complete2.png',
    id: 'puzzle2'
  },
  Hard: {
    levelName: 'Hard',
    src: './src/assets/puzzle-completed/hardpuzzle-complete.jpg',
    alt: 'puzzle-complete3.png',
    id: 'puzzle3'
  }
};