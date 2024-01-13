import { Link } from "react-router-dom";

export default function PuzzleHomeBadge() {
    return (
        <div>
            <Link to='/' className="puzzle-home-badge">
                <img
                    className="puzzle-home-badge__img"
                    src="/src/assets/puzzleshome-logo.png"
                    alt="Puzzle Home logo"
                />
                <h2 className="puzzle-home-badge__title">Puzzle Home</h2>
            </Link>
        </div>
    )
}