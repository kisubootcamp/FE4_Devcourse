import { Github } from "lucide-react";
import Button from "../../components/ui/Button";
import supabase from "../../utils/supabase";

export default function Login() {
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  const handleGithubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-[#161B22] rounded-lg shadow-lg overflow-hidden border border-[#30363d]">
          <div className="px-6 py-8">
            <div className="flex justify-center mb-6">
              <Github size={48} className="text-white" />
            </div>

            <h1 className="text-2xl font-bold text-white text-center mb-2">Welcome back</h1>
            <p className="text-[#8b949e] text-center mb-8">Sign in to continue to GitHub Blog</p>

            <Button
              type="button"
              variant="secondary"
              fullWidth
              className="bg-white text-bl hover:bg-gray-100 text-black! border-gray-200 mb-4"
              onClick={handleGithubLogin}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAY1BMVEX///8AAAD5+fnk5OSRkZFQUFBxcXHZ2dksLCzExMTu7u7f39/29vZ8fHzo6OjLy8u8vLyzs7NBQUGYmJhKSkpjY2MYGBjT09M5OTmsrKyEhISmpqZcXFwTExOKiopVVVUkJCSS2/+7AAACIElEQVRIiZ2W54KDIAyACVitq+7Rdd77P+UpMiIyes2vpuSDLIKEOISyZJoSRl3rVqmiCyi5RNVn1BTDSeIpiNXXM7bJtfaf5sA46jm1dGOblA6MjX4OYGQ2Lg1hm6RnrvmEA2i+5E5k9SkHcGiH7HMOIEPgLHfL763d+tIwmb1Zc53467opua3leB1+hdadHH3set5C/2jShLEkbR49tLnRH9LZQf5xl1sdLpNS7tJuEAcoj05FcpVsd0HHdPeD6kSIN7XQOXB1MTFiBChW9Ymy5weR4XNVe61aWhgLugb9mjNULT+HswEUd2kWAlFnVijEV4gj5IWC1KkKFGMTXZASbZKEwQS5N6vftzB4U8YzGb8DR1TVf4FA3t/F+CZ6dvuHPJdaGV+JfpeiMBgp4wtqozkM6oEUo03C2UEtFyG34ScE/mjbGmeYX0+PoCu/eafrsUbsFfS+v1f1gfbx3sgBGW6DNEE6tM4EsRnb8WbhLdBHYsPSirLjY81H/p7XdcBlIoa2qzI0kWlWdeaDIpqMX5CB4iieGuzgJKNYStXxcqXHbvYnUE3DBYS3cnId+r02uUUticoyNToP8+5mgqhPUnnk+rJ0T+PbrTC4w9jeu9BeRHrkjI7mCR2t5BEczGWRoOpGCc3d4GJyx1akLvB03iZRGHRMF/3+FHbQ+alMYx8Y+77P88UFLrmLkWi5328k6yUoQxiXyZg9he2j+g9XjBQ+RkOnvAAAAABJRU5ErkJggg=="
                alt="Github"
                className="w-5 h-5 mr-2"
              />
              Continue with Github
            </Button>
            <Button
              type="button"
              variant="secondary"
              fullWidth
              className="bg-white text-bl hover:bg-gray-100 text-black! border-gray-200"
              onClick={handleGoogleLogin}
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </Button>
          </div>

          <div className="px-6 py-4 bg-[#0D1117] border-t border-[#30363d]">
            <p className="text-xs text-center text-[#8b949e]">
              By signing in, you agree to our{" "}
              <a href="#" className="text-[#58a6ff] hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#58a6ff] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
