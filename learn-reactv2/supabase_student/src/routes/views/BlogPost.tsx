import { ArrowLeft } from "lucide-react";
import BlogContent from "../../components/blog/BlogContent";
import CommentsSection from "../../components/blog/CommentsSection";
import { useLoaderData, useNavigate } from "react-router";
import { fetchPostDetail } from "../loader/post.loader";
import Button from "../../components/ui/Button";

export type PostsDetail = NonNullable<
  Awaited<ReturnType<typeof fetchPostDetail>>
>;
export default function BlogPost() {
  const navigate = useNavigate();
  const post = useLoaderData<PostsDetail>();
  if (!post) {
    return (
      <div className="min-h-screen bg-[#0D1117] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Post not found</h2>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          className="flex items-center text-[#58a6ff] hover:underline transition-colors"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to posts
        </button>
      </div>

      {/* Blog Content */}
      <BlogContent {...post} />

      {/* Comments Section */}
      <CommentsSection />
    </div>
  );
}
