import { useEffect, useState } from "react";

export default function FetchBasic() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // 데이터를 가져온다. (Read)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts1112323")
      .then((response) => {
        console.log(response);
        if (!response.ok) throw new Error("Network responsse was not ok");
        return response.json();
      })
      .then((res) => {
        setPosts(res);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {};
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
