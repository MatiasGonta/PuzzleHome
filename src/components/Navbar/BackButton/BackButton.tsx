import { TimerContext } from "@/context";
import { useContext } from "react";
import { Link } from "react-router-dom"

export interface BackButtonInterface {}

const BackButton: React.FC<BackButtonInterface> = () => {
  const { handleResetTimer } = useContext(TimerContext);
  
  const handleOnClick = () => {
    handleResetTimer()
  }

  return (
    <div className="back-btn">
        <Link to='/'>
          <i className="fa-solid fa-arrow-right-to-bracket" onClick={handleOnClick}></i>
        </Link>
    </div>
  )
}

export default BackButton