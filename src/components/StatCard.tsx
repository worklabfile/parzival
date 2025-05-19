
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  className?: string;
}

const StatCard = ({ title, value, className }: StatCardProps) => {
  return (
    <div className={cn(
      "bg-esports-darkGray rounded-md p-3 flex flex-col items-center justify-center",
      className
    )}>
      <p className="text-gray-400 text-xs md:text-sm font-medium">{title}</p>
      <p className="text-white text-lg md:text-xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
