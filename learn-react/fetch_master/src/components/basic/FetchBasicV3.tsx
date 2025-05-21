import { useEffect, useState, useTransition } from "react";

// CRUD
// C create : Post
// R REad : Get
// U Update : Put / Patch
// D Delete : Delete

// 네트워크 통신 중 오류 발생
// 1. 네트워크 주소 요청 자체가 실패할 때 (유효한 도메인이 아닐 때)
// 2. 도메인은 유효하지만 올바른 리소스를 찾을 수 없을 때
//
//

// API 통신할 때
// 요청할 데이터를 저장할 상태
// 로딩할 상태
// 에러처리를 관리할 상태

export default function FetchBasicV3() {
  // 데이더를 가져오겠다.(읽어오겠다) - GET method 를 사용함

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
      setError(error instanceof Error ? error.message : "unknown Error");
    }
  };

  useEffect(() => {
    startTransition(async () => await fetchPosts());
  }, []);

  if (isPending) {
    return <h1>Loading...</h1>;
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
