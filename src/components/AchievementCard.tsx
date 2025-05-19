
import { Trophy } from "lucide-react";

interface AchievementCardProps {
  title: string;
  tournament: string;
  date: string;
  place: string;
  prize?: string;
}

const AchievementCard = ({ title, tournament, date, place, prize }: AchievementCardProps) => {
  return (
    <div className="reward-badge p-4">
      <div className="flex items-center mb-2">
        <Trophy className="w-5 h-5 text-esports-red mr-2" />
        <h3 className="text-white font-bold">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm">{tournament}</p>
      <p className="text-gray-400 text-xs">{date}</p>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-esports-red font-bold">{place}</span>
        {prize && <span className="text-yellow-400 text-sm">{prize}</span>}
      </div>
    </div>
  );
};

export default AchievementCard;
