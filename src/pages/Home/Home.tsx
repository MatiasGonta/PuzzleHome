import { Header, SelectPuzzle } from "./components"


export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  document.title = "Puzzle Home";
  return (
    <>
      <Header />
      <main>
        <SelectPuzzle />
      </main>
    </>
  )
}

export default Home