import { useEffect, useState } from "react";

// CRUD
// C Create - POST
// R Read - GET
// U Update - PUT/PATCH
// D Delete - DELETE
export default function FetchBasicV2() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setPosts(data);
    } catch (error: unknown) {
      // error.message는 Error 객체에 있는 속성이므로 타입 가드를 해줌.
      setError(error instanceof Error ? error.message : "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  // 데이터를 가져오겠다(읽어오겠다)
  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
