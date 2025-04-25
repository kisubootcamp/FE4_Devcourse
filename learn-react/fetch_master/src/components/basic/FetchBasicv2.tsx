import { useState, useEffect } from "react";
//CRUD
//C Create - Post
//R Read - GET
//U Update - PUT/PATCH
//D Delete - DELETE
//1.useEffect내부에 모든 코드 작성
//2.fetchPosts안에 async await 함수(자바스크립트형식) 작성후 useEffect안에 집어넣기
export default function FetchBasicv2() {
  //데이터를 가져오겠다.(읽어오겠다)
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //비교적 간단
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
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
    //async 사용불가
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     //response:꼬리표
    //     console.log(response); //유효하지 않은 도메인->ok:false
    //     if (!response.ok) throw new Error("Network response was not ok");
    //     console.log(response.json());
    //     return response.json(); //json문자열
    //   })
    //   .then((result) => {
    //     console.log(result); //약간 모든 json파일들을 하나하나 객체로 만들어 반환?
    //     setPosts(result);
    //   })
    //   .catch((error: Error) => {
    //     //에러의 종류
    //     //1. url 주소 오류(유효한 도메인이 아닐때)
    //     //2. 유효한 도메인이지만 리소스 찾을 수 없을때
    //     console.log(error.message);
    //     setError(error.message);
    //  })
    //   .finally(() => {
    //     setLoading(false); //setting완료(loading완료) (에러든, 에러가 아니든)
    //  });
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
      {/* 객체로 이루어진 배열을 문자열로 묶어 출력 */}
    </>
  );
}
