import { useLoaderData } from "react-router";

export default function Datail() {
  const { post, user } = useLoaderData();
  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </>
  );
}
