import { TimerContext } from "@/context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export interface NavbarInterface {}

const NavBar: React.FC<NavbarInterface> = () => {
  const { handleResetTimer, seconds, minutes, hours } = useContext(TimerContext);
  
  const handleOnClick = ():void => {
    handleResetTimer();
  }

  return (
    <nav id="navbar">
      <Link to='/'>
        <div className="logo-container">
          <img src="./src/assets/puzzleshome-logo.png" alt="Puzzle Home logo" />
          <h2>Puzzle Home</h2>
        </div>
      </Link>
      <div className="timer-container">
        <span>
          {`${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`}
        </span>
      </div>
      <div className="back-btn">
        <Link to='/'>
          <i className="fa-solid fa-arrow-right-to-bracket" onClick={handleOnClick}></i>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar