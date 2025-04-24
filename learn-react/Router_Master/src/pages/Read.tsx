import { useEffect } from "react";
import { useParams } from "react-router";

export default function Read() {
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.a}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetchingdata:", error));
  });
  return (
    <>
      <h1>Read Component: {params.a}</h1>
    </>
  );
}
// id는 세그먼트로부터 나왔음
