import { useLoaderData } from "react-router";

export default function About() {
  const posts = useLoaderData();
  return (
    <>
      <div>
        {posts.map((post: { id: number; title: string }) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </>
  );
}
