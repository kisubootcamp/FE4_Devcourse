import { useLoaderData } from "react-router";

export default function Detail() {
  const { post, user } = useLoaderData();
  return (
    <>
      <h1>{JSON.stringify(post, null, 2)}</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
    </>
  );
}
