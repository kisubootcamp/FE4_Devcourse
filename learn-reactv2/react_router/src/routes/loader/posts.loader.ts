import type { LoaderFunctionArgs } from "react-router-dom";

export const fetchJsonPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

export const fetchJsonPostsDetail = async ({
  params,
  request,
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("lang");
  console.log(query);
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.id
  );
  const data = await res.json();

  const res2 = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + data.userId
  );
  const userData = await res2.json();

  return { post: data, user: userData };
};
