import { SelectPuzzle } from "./components";
import { SocialIcon } from 'react-social-icons';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  document.title = "Puzzle Home";
  return (
    <>
      <header id="home-header">
        <h1>Select Puzzle</h1>
        <div id="social-networks">
          <SocialIcon className="social-icon" url="https://www.linkedin.com/in/mat%C3%ADas-gonta/" target="_blank" bgColor="#6b6b6bad" />
          <SocialIcon className="social-icon" url="https://github.com/MatiasGonta" target="_blank" bgColor="#6b6b6bad" />
          <SocialIcon className="social-icon" url="https://www.instagram.com/matigonta_/" target="_blank" bgColor="#6b6b6bad" />
        </div>
      </header>
      <main>
        <SelectPuzzle />
      </main>
    </>
  )
}

export default Home