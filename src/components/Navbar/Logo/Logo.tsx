
export interface LogoInterface {}

const Logo: React.FC<LogoInterface> = () => {
  return (
    <div className="logo-container">
        <img src="./src/assets/puzzleshome-logo.png" alt="Puzzle Home logo" />
        <h2>Puzzle Home</h2>
    </div>
  )
}

export default Logo