import { useEffect, useState, useTransition } from "react";
import { star } from "../../assets/movies/assets";

//ㅊRUD
// Create - Post
// Read - GET
// Update - PUT/PATCH
// Delete - DELETE

export default function FetchBasicV3() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition(); // 리액트 19에서 사용 가능한 방법 useTransition 훅을 이용한 방법도 하나의 방법이 되어가고 있다.

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response) throw new Error("Network response was not ok");
      const data = await response.json();
      setPosts(data);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "unknown Error");
    } finally {
      setLoading(false);
    }
  }; // async await 방식
  // 데이터를 가져오겠다(읽어오겠다)는 목적이 큼
  useEffect(() => {
    startTransition(async () => {
      await fetchPosts(); // 자동으로 true, false값을 관리
    });
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     if (!response.ok) throw new Error("Network response was not ok");
    //     // console.log(response.json());
    //     console.log(response); // 응답에 대한 정보가 담겨있다
    //     return response.json();
    //   })
    //   .then((result) => {
    //     setPosts(result);
    //     setLoading(false);
    //   })
    //   .catch((error: Error) => {
    //     console.log(error.message);
    //     setError(error.message);
    //     setLoading(false);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    // }); // 최종적으로 Loading 상태값을 변경
    // 내부적으로 promise then 방식으로 동작
  }, []); // promise then 방식

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
// useEffect는 async를 사용할 수 없다. promise then 방식으로 접근
// 자바스크립트가 JSON을 불러오는데, 새로고침을 하면 빈 배열이 보인다.
