import { useLoaderData } from "react-router";

export default function Detail() {
  const detail = useLoaderData();
  return (
    <>
      <h1>Detail</h1>
      <pre>{JSON.stringify(detail, null, 2)}</pre>
    </>
  );
}
