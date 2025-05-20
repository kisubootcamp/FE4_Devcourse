import { useEffect, useState } from "react";

// CRUD
// Create - Posts
// READ - GET
// UPDATE - PUT/PATCH
// DELETE - DELETE
export default function FetchBasic() {
  // 데이터를 가져오겠다. (읽어오겠다)
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) throw new Error("Network reponse was not ok");
        return response.json();
      })
      .then((result) => {
        setPosts(result);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
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
