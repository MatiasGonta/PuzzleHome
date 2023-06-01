import { Link } from "react-router-dom"

export interface BackButtonInterface {}

const BackButton: React.FC<BackButtonInterface> = () => {
  return (
    <div id="back-arrow">
        <Link to='/'>
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </Link>
    </div>
  )
}

export default BackButton