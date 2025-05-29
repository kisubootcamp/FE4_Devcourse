import { Clock, Calendar } from "lucide-react";
import Avatar from "../ui/Avatar";

export default function BlogCard() {
  return (
    <div className="bg-[#0D1117] rounded-lg overflow-hidden border border-[#30363d] hover:border-[#58a6ff] transition-all duration-300 cursor-pointer">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-white hover:text-[#58a6ff] transition-colors">
            보망
          </h2>
          <div className="flex items-center text-[#8b949e] text-sm">
            <Calendar size={14} className="mr-1" />
            <span>2025.05.22</span>
          </div>
        </div>

        <p className="text-[#c9d1d9] mb-6 line-clamp-3">오 이럴수가 이게 개발이냐</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar
              src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent("user")}`}
              alt={"수야"}
              size="sm"
            />
            <span className="ml-2 text-[#8b949e] text-sm">보망</span>
          </div>
          <div className="flex items-center text-[#8b949e] text-sm">
            <Clock size={14} className="mr-1" />
            <span>5min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
