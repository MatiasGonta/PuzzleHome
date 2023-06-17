import { getLocalStorage, formatTime } from "@/utilities";

export interface SidebarInterface {
  puzzleLevel: string | undefined;
}

const Sidebar: React.FC<SidebarInterface> = ({ puzzleLevel }) => {
  const bestTime: string | null = getLocalStorage(`${puzzleLevel}BestTime`);

  return (

    <div>
      <h4>Best Time</h4>
      {bestTime ? (<span>{formatTime(parseInt(bestTime))}</span>) : (<span> -- : -- : --</span>)}
    </div>
  );
};

export default Sidebar;