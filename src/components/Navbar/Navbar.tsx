import { BackButton } from "./BackButton"
import { Logo } from "./Logo"
import { Timer } from "./Timer"

export interface NavbarInterface {}

const NavBar: React.FC<NavbarInterface> = () => {
  return (
    <header id="navbar">
      <Logo />
      <Timer />
      <BackButton />
    </header>
  )
}

export default NavBar