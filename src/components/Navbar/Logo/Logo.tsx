import { Link } from "react-router-dom";

export interface LogoInterface {}

const Logo: React.FC<LogoInterface> = () => {
  return (
    <Link to='/'>
      <div className="logo-container">
        <img src="./src/assets/puzzleshome-logo.png" alt="Puzzle Home logo" />
        <h2>Puzzle Home</h2>
      </div>
    </Link>
  )
}

export default Logo