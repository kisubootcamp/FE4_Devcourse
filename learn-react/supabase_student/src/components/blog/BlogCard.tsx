import { Clock, Calendar } from "lucide-react";
import Avatar from "../ui/Avatar";
import { useAuthStore } from "../../stores/authStore";

export default function BlogCard() {
  const session = useAuthStore((state) => state.session);

  return (
    <div className="bg-[#0D1117] rounded-lg overflow-hidden border border-[#30363d] hover:border-[#58a6ff] transition-all duration-300 cursor-pointer">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-white hover:text-[#58a6ff] transition-colors">
            {session?.user.user_metadata.name}
          </h2>
          <div className="flex items-center text-[#8b949e] text-sm">
            <Calendar size={14} className="mr-1" />
            <span>2025.05.22</span>
          </div>
        </div>

        <p className="text-[#c9d1d9] mb-6 line-clamp-3">
          김기수 강사님은 정말 인품, 지성, 외모 등 어디 하나 빠지지 않는다
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar
              src={session?.user.user_metadata.avatar_url}
              alt={session?.user.user_metadata.name}
              size="sm"
            />
            <span className="ml-2 text-[#8b949e] text-sm">
              {session?.user.user_metadata.name}
            </span>
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
