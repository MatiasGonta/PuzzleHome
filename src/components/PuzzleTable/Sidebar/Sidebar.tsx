import { CountDownButton } from "./CountDownButton";

export interface SidebarInterface {}

const Sidebar: React.FC<SidebarInterface> = () => {
  return (
    <aside>
        <CountDownButton />
    </aside>
  )
}

export default Sidebar