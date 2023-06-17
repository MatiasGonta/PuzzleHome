import { BackButton } from "./BackButton"
import { Logo } from "./Logo"
import { Timer } from "./Timer"

export interface NavbarInterface {}

const NavBar: React.FC<NavbarInterface> = () => {
  return (
    <nav id="navbar">
      <Logo />
      <Timer />
      <BackButton />
    </nav>
  )
}

export default NavBar