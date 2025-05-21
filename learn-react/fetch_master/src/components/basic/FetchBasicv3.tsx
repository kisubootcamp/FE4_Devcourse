import { useState, useEffect, useTransition } from "react";
//CRUD
//C Create - Post
//R Read - GET
//U Update - PUT/PATCH
//D Delete - DELETE
//1.useEffect내부에 모든 코드 작성
//2.fetchPosts안에 async await 함수(자바스크립트형식) 작성후 useEffect안에 집어넣기
export default function FetchBasicv3() {
  //데이터를 가져오겠다.(읽어오겠다)
  const [posts, setPosts] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition(); //loading 사용하지 않고
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setPosts(data);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "unknown Error"); //99프로 error.message로 빠짐
    }
  };
  useEffect(() => {
    startTransition(async () => {
      //async await 사용가능능
      await fetchPosts(); //작업끝날때까지 isPending=true
    });
  }, []);

  if (isPending) {
    //isLoading대신 사용
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      {/* 객체로 이루어진 배열을 문자열로 묶어 출력 */}
    </>
  );
}
