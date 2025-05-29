import { Clock, Calendar } from "lucide-react";
import Avatar from "../ui/Avatar";

export default function BlogCard() {
  return (
    <div className="bg-[#0D1117] rounded-lg overflow-hidden border border-[#30363d] hover:border-[#58a6ff] transition-all duration-300 cursor-pointer">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-white hover:text-[#58a6ff] transition-colors">
            수야
          </h2>
          <div className="flex items-center text-[#8b949e] text-sm">
            <Calendar size={14} className="mr-1" />
            <span>2025.05.22</span>
          </div>
        </div>

        <p className="text-[#c9d1d9] mb-6 line-clamp-3">
          김기수 강사님은 롤 10년차지만 실버이다.
          <br />
          세상에 모든 실버들은 다 그런다. 본인은 실버 실력이 아니라고..
          <br /> 강사님도 그러더라 난 실버 실력이 아니라고..
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar
              src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(
                "user"
              )}`}
              alt={"수야"}
              size="sm"
            />
            <span className="ml-2 text-[#8b949e] text-sm">수야</span>
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
