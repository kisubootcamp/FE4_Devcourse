import { useEffect, useState, useTransition } from "react";

export default function FetchBasicV3() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isPending, transition] = useTransition();
  // 데이터를 가져온다. (Read)
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Network responsse was not ok");
      const data = await response.json();
      setPosts(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "unknown Error");
    }
  };
  useEffect(() => {
    transition(async () => {
      await fetchPosts();
    });
  }, []);
  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
