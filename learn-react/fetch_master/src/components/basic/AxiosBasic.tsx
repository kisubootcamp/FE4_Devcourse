import { useEffect, useState, useTransition } from "react";
import { axiosInstance } from "../../api/axiosInstance";

export default function AxiosBasic() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isPending, transition] = useTransition();
  const fetchPosts = async () => {
    try {
      const { data } = await axiosInstance.get("/posts");
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown Error");
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
