import { useEffect, useState, useTransition } from "react";

// CRUD
// C Create - POST
// R Read - GET
// U Update - PUT/PATCH
// D Delete - DELETE
export default function FetchBasicV3() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

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
    }
  };

  // 데이터를 가져오겠다(읽어오겠다)
  useEffect(() => {
    startTransition(async () => {
      await fetchPosts();
    });
  }, []);

  if (isPending) {
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
