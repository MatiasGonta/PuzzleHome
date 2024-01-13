import { PuzzleBestTime, ErrorBoundary, Navbar, PuzzleTable } from '@/components';
import { useParams } from 'react-router-dom';
import { capitalizeFirstLetter, piecesShuffler } from '@/utilities';
import { puzzlePiecesByDifficulty } from '@/data';
import '../../styles/pages/PuzzlePages/PuzzlePages.scss';

export interface PuzzlePageInterface {}

const PuzzlePage: React.FC<PuzzlePageInterface> = () => {
  const params = useParams();
  const { puzzleSlug } = params;

  const puzzleDifficulties = Object.keys(puzzlePiecesByDifficulty);

  // Slug validation
  if (!puzzleDifficulties.includes(puzzleSlug!)) {
    const recommendations = puzzleDifficulties.reduce((acc, difficulty, index, array) => {
      if (index === 0) {
        return `"${difficulty}"`;
      } else if (index === array.length - 1) {
        return `${acc} or "${difficulty}"`;
      } else {
        return `${acc}, "${difficulty}"`;
      }
    }, '');

    document.title = `Puzzle Home | Error`;
    throw Error(`Invalid puzzle slug "${puzzleSlug}". Try one of the following: ${recommendations}`);
  }

  document.title = `Puzzle Home | ${capitalizeFirstLetter(puzzleSlug!)}`;

  const puzzlePieces = puzzlePiecesByDifficulty[puzzleSlug as keyof typeof puzzlePiecesByDifficulty];
  const shuffledPuzzlePieces = piecesShuffler(puzzlePieces);

  return (
    <ErrorBoundary>
      <Navbar />
      <main>
        <section className="puzzle">
          <PuzzleTable puzzleKey={puzzleSlug!} puzzlePieces={shuffledPuzzlePieces} />
          <PuzzleBestTime puzzleKey={puzzleSlug!} />
        </section>
      </main>
    </ErrorBoundary>
  )
}

export default PuzzlePage