import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom"


export interface ErrorInterface {}

const Error: React.FC<ErrorInterface> = () => {
    document.title = "Puzzle Home";
    const error:any = useRouteError();

  return (
    <div>
        <h1>Error</h1>
        <p>{error.statusText || error.message}</p>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default Error