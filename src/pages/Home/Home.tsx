import { puzzleCompletedImages } from '@/data';
import { Link } from "react-router-dom";
import { capitalizeFirstLetter, formatTime, getLocalStorage } from "@/utilities";
import '../../styles/pages/Home/Home.scss';

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
  document.title = "Puzzle Home";

  const puzzleCompletedImagesArr = Object.values(puzzleCompletedImages);

  return (
    <>
      <header className="home-header">
        <h1 className="home-header__title">Select Puzzle</h1>
      </header>
      <main>
        <section className="puzzle-selector">
          {
            puzzleCompletedImagesArr.map((puzzleCompleted, index) => {
              const bestTimeRaw = getLocalStorage(`${puzzleCompleted.levelName}BestTime`);
              const bestTimeFormatted = formatTime(parseInt(bestTimeRaw!));

              return (
                <article className="puzzle-card" key={index}>
                  <div className={`puzzle-card__level ${!bestTimeRaw && 'puzzle-card__level--noplayed'}`}>
                    <h3>{capitalizeFirstLetter(puzzleCompleted.levelName)}</h3>
                    {
                      bestTimeRaw
                        ? (<span>{bestTimeFormatted}</span>)
                        : (
                          <div className="puzzle-card__level__icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              strokeWidth="3"
                              stroke="currentColor"
                              fill="none"
                              width="100%"
                              height="100%"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <path d="M12 5l0 14" />
                              <path d="M18 13l-6 6" />
                              <path d="M6 13l6 6" />
                            </svg>
                          </div>
                        )
                    }
                  </div>
                  <Link
                    to={`/${puzzleCompleted.levelName}`}
                    className="puzzle-card__link"
                  >
                    <img
                      className="puzzle-card__link__img"
                      src={puzzleCompleted.src}
                      alt={`puzzle-complete${index + 1}.png`}
                      id={puzzleCompleted.id}
                    />
                  </Link>
                </article>
              )
            })
          }
        </section>
      </main>
    </>
  )
}

export default Home