import { SocialIcon } from 'react-social-icons';
import { puzzleCompletedImages } from '@/data';
import { Link } from "react-router-dom";
import { formatTime, getLocalStorage } from "@/utilities";

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
  document.title = "Puzzle Home";
  
  return (
    <>
      <header className="home-header">
        <h1 className="home-header__title">Select Puzzle</h1>
        <div className="home-header__social-networks">
          <SocialIcon
            className="home-header__social-networks__social-icon"
            url="https://www.linkedin.com/in/mat%C3%ADas-gonta/"
            target="_blank"
            bgColor="#6b6b6bad"
          />
          <SocialIcon
            className="home-header__social-networks__social-icon"
            url="https://github.com/MatiasGonta"
            target="_blank"
            bgColor="#6b6b6bad"
          />
          <SocialIcon
            className="home-header__social-networks__social-icon"
            url="https://www.instagram.com/matigonta_/"
            target="_blank"
            bgColor="#6b6b6bad"
          />
        </div>
      </header>
      <main>
        <section className="puzzle-selector">
          {
            puzzleCompletedImages.map((puzzleCompleted, index) => {
              const bestTime = getLocalStorage(`${puzzleCompleted.levelName}BestTime`);

              return (
                <article className="puzzle" key={index}>
                  {
                    (bestTime) ? (
                      <div className="puzzle__level">
                        <h3>{puzzleCompleted.levelName}</h3>
                        <span>{formatTime(parseInt(bestTime))}</span>
                      </div>
                    ) : (
                      <div className="puzzle__level puzzle__level--noplayed">
                        <h3>{puzzleCompleted.levelName}</h3>
                        <div className="puzzle__level__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke-width="3"
                            stroke="currentColor"
                            fill="none"
                            width="100%"
                            height="100%"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14" />
                            <path d="M18 13l-6 6" />
                            <path d="M6 13l6 6" />
                          </svg>
                        </div>
                      </div>
                    )
                  }
                  <Link
                    to={`/${puzzleCompleted.levelName}`}
                    className="puzzle__link"
                  >
                    <img
                      className="puzzle__link__img"
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