import { useEffect, useState } from "react";

export default function FetchBasic() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts2222")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error: Error) => setError(error.message))
      .finally(() => {
        setLoading(false);
      });
    return () => {};
  }, []);
  if (loading) {
    return <h1>Loading..</h1>;
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
