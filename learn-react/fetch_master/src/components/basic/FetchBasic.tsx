import { useEffect, useState } from "react";

// CRUD
// C: Create - Post
// R: Read - GET
// U: Update - PUT/PATCH
// D: Delete - DELETE
export default function FetchBasic() {
  // 가져온 데이터를 저장할 곳
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 데이터를 가져오겠다.(읽어오겠다)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((result) => {
        setPosts(result);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
