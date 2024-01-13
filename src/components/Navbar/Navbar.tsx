import { TimerContext } from "@/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PuzzleHomeBadge } from "../PuzzleHomeBadge";
import { formatTime } from "@/utilities";

export interface NavbarInterface { }

const NavBar: React.FC<NavbarInterface> = () => {
  const { handleResetTimer, seconds } = useContext(TimerContext);

  const time = formatTime(seconds);

  const handleOnClick = (): void => {
    handleResetTimer();
  }

  return (
    <header>
      <nav className="navbar">
        <PuzzleHomeBadge />

        <div className="navbar__timer">
          <span className="navbar__timer__time">{time}</span>
        </div>
        
        <div className="navbar__back-btn">
          <Link to='/'>

            {/* Return home icon */}
            <div className="return-home" onClick={handleOnClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="return-home__walkman"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M7 21l3 -4" />
                <path d="M16 21l-2 -4l-3 -3l1 -6" />
                <path d="M6 12l2 -3l4 -1l3 3l3 1" />
              </svg>
              <div className="return-home__frame"></div>
              <div className="return-home__door">
                <div className="return-home__door__latch">
                  <div className="return-home__door__latch__handle"></div>
                </div>
              </div>
            </div>

          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar