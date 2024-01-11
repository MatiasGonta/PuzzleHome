import { getLocalStorage, formatTime } from "@/utilities";
import { useLocation } from "react-router-dom";

export interface SidebarInterface {}

const Sidebar: React.FC<SidebarInterface> = () => {
  let { pathname } = useLocation();
  const puzzleLevel = pathname.substring(1);

  const bestTime: string | null = getLocalStorage(`${puzzleLevel}BestTime`);

  return (

    <div>
      <h4>Best Time</h4>
      {bestTime ? (<span>{formatTime(parseInt(bestTime))}</span>) : (<span> -- : -- : --</span>)}
    </div>
  );
};

export default Sidebar;