import { BackButton } from "./BackButton"
import { Logo } from "./Logo"
import { ResetButton } from "./ResetButton"
import { Timer } from "./Timer"

export interface NavbarInterface {}

const NavBar: React.FC<NavbarInterface> = () => {
  return (
    <header>
      <Logo />
      <Timer />
      <ResetButton />
      <BackButton />
    </header>
  )
}

export default NavBar