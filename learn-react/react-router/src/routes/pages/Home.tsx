import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

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
