import { useEffect, useState, useTransition } from "react";
import { axiosInstance } from "../../api/axiosInstance";

export default function AxiosBasic() {
  const [isPending, startTransition] = useTransition();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const { data } = await axiosInstance.get("/posts");
      setPosts(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknwon Error");
    }
  };
  useEffect(() => {
    startTransition(async () => {
      await fetchPosts();
    });
  }, []);

  if (isPending) {
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
